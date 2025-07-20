// Agent.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vapi } from "./vapi.sdk"; // 👈 Import the shared instance

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

  return (
    <div className="p-4 text-center">
      <h2>AI Interviewer</h2>
      <p>{userName}</p>

      <div className="my-4">
        {lastMessage && (
          <p className="text-gray-700 border p-2 rounded shadow-md">{lastMessage}</p>
        )}
      </div>

      {callStatus !== CallStatus.ACTIVE ? (
        <button onClick={handleCall} className="px-6 py-2 bg-green-600 text-white rounded">
          {callStatus === CallStatus.CONNECTING ? "Connecting..." : "Start Call"}
        </button>
      ) : (
        <button onClick={handleDisconnect} className="px-6 py-2 bg-red-600 text-white rounded">
          End Call
        </button>
      )}
    </div>
  );
};

export default Agent;
