// Agent.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vapi } from "./vapi.sdk"; // 👈 Import the shared instance
// import "./Ag.css";
import "./Agent.css";

const CallStatus = {
  INACTIVE: "INACTIVE",
  CONNECTING: "CONNECTING",
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
};

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
}) => {
  const navigate = useNavigate();
  const vapiRef = useRef(null);
  const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
  const [messages, setMessages] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    vapiRef.current = vapi; // Use the shared instance

    // Vapi event listeners
    vapi.on("call-start", () => setCallStatus(CallStatus.ACTIVE));
    vapi.on("call-end", () => setCallStatus(CallStatus.FINISHED));
    vapi.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [...prev, { role: message.role, content: message.transcript }]);
      }
    });
    vapi.on("speech-start", () => setIsSpeaking(true));
    vapi.on("speech-end", () => setIsSpeaking(false));
    vapi.on("error", (error) => console.error("Vapi error:", error));

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    // Optional: navigate after call
    // if (callStatus === CallStatus.FINISHED) {
    //   if (type === "generate") {
    //     navigate("/");
    //   } else {
    //     navigate(`/interview/${interviewId}/feedback`);
    //   }
    // }
  }, [messages, callStatus]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);
    const vapi = vapiRef.current;

    if (!vapi) return;

    try {
      if (type === "generate") {
        await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID, {
          variableValues: {
            username: userName,
            userid: userId,
          },
        });
      } else {
        const formattedQuestions = questions?.map((q) => `- ${q}`).join("\n") || "";
        await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID, {
          variableValues: {
            questions: formattedQuestions,
          },
        });
      }
    } catch (error) {
      console.error("Failed to start Vapi call:", error);
    }
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapiRef.current?.stop();
  };

  // Get last 6 messages for conversation history
  const recentMessages = messages.slice(-6);

  return (
    <div className="interview-container_CB">
      <div className="interview-header_CB">
        <div className="interviewer-avatar_CB">
          <div className="avatar-circle_CB">
            <span className="avatar-icon_CB">🤖</span>
          </div>
          {isSpeaking && (
            <div className="speaking-indicator_CB">
              <div className="wave_CB wave1_CB"></div>
              <div className="wave_CB wave2_CB"></div>
              <div className="wave_CB wave3_CB"></div>
              <div className="wave_CB wave4_CB"></div>
            </div>
          )}
        </div>
        
        <div className="header-content_CB">
          <h2 className="interview-title_CB">AI Mock Interviewer</h2>
          <p className="candidate-name_CB">Welcome, {userName}</p>
          <div className="status-indicator_CB">
            <span className={`status-dot_CB ${callStatus.toLowerCase()}_CB`}></span>
            <span className="status-text_CB">{callStatus}</span>
          </div>
        </div>
      </div>

      <div className="conversation-area_CB">
        {recentMessages.length > 0 ? (
          <div className="conversation-history_CB">
            <h3 className="conversation-title_CB">Recent Conversation</h3>
            <div className="messages-container_CB">
              {recentMessages.map((message, index) => (
                <div 
                  key={index} 
                  className={`message-bubble_CB ${message.role === 'assistant' ? 'bot-message_CB' : 'user-message_CB'}`}
                >
                  <div className="message-header_CB">
                    <span className="message-sender_CB">
                      {message.role === 'assistant' ? '🤖 AI Interviewer' : '👤 You'}
                    </span>
                  </div>
                  <div className="message-content_CB">
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state_CB">
            <div className="empty-icon_CB">💭</div>
            <p className="empty-text_CB">Start your mock interview to begin the conversation</p>
          </div>
        )}
      </div>

      <div className="control-panel_CB">
        {callStatus !== CallStatus.ACTIVE ? (
          <button 
            onClick={handleCall} 
            className="call-button_CB start-call_CB"
            disabled={callStatus === CallStatus.CONNECTING}
          >
            <span className="button-icon_CB">
              {callStatus === CallStatus.CONNECTING ? "⏳" : "🎙️"}
            </span>
            <span className="button-text_CB">
              {callStatus === CallStatus.CONNECTING ? "Connecting..." : "Start Interview"}
            </span>
          </button>
        ) : (
          <button 
            onClick={handleDisconnect} 
            className="call-button_CB end-call_CB"
          >
            <span className="button-icon_CB">📞</span>
            <span className="button-text_CB">End Interview</span>
          </button>
        )}
        
        {callStatus === CallStatus.ACTIVE && (
          <div className="live-indicator_CB">
            <div className="live-dot_CB"></div>
            <span className="live-text_CB">Live Interview</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agent;