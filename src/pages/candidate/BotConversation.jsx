// import React, { useState } from 'react';
// import './BotConversation.css';

// // Enum for call states
// const CallStatus = {
//   INACTIVE: 'INACTIVE',
//   CONNECTING: 'CONNECTING',
//   ACTIVE: 'ACTIVE',
//   FINISHED: 'FINISHED'
// };

// const BotConversation = () => {
//   const [callStatus, setCallStatus] = useState(CallStatus.ACTIVE);
//   const [messages, setMessages] = useState([
//     "Hello, what is your name?",
//     "My name is Hiten, what's yours"
//   ]);

//   const lastMsg = messages[messages.length-1];
//   const handleCallButtonClick = () => {
//     switch (callStatus) {
//       case CallStatus.INACTIVE:
//         setCallStatus(CallStatus.CONNECTING);
//         setTimeout(() => {
//           setCallStatus(CallStatus.ACTIVE);
//         }, 2000); // simulate call connecting
//         break;
//       case CallStatus.ACTIVE:
//         setCallStatus(CallStatus.FINISHED);
//         break;
//       case CallStatus.FINISHED:
//         setCallStatus(CallStatus.INACTIVE);
//         break;
//       default:
//         break;
//     }
//   };

//   const renderButtonLabel = () => {
//     switch (callStatus) {
//       case CallStatus.INACTIVE:
//         return 'Call';
//       case CallStatus.ACTIVE:
//         return 'End Call';
//       case CallStatus.FINISHED:
//         return 'Restart';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="interview-container">
//       <h2>Interview Generation</h2>

//       <div className="interview-panels">
//         <div className="panel ai-panel">
//           <div className="icon">💬</div>
//           <p>AI Interviewer</p>
//         </div>

//         <div className="panel user-panel">
//           <img
//             src="https://i.ibb.co/r4L2spX/user-avatar.jpg"
//             alt="You"
//             className="avatar"
//           />
//           <p>You</p>
//         </div>
//       </div>

//       {messages.length > 0 && (
//         <div className="response-box">
//             {lastMsg}
//       </div>
//       )}

//       {/* Button based on status */}
//       {callStatus !== CallStatus.CONNECTING ? (
//         <button className="call-button" onClick={handleCallButtonClick}>
//           {renderButtonLabel()}
//         </button>
//       ) : (
//         <div className="connecting-text">🔄 Connecting...</div>
//       )}
//     </div>
//   );
// };

// export default BotConversation;

// Agent.jsx (Vite/React version)

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Vapi } from "./vapi.sdk";

// const CallStatus = {
//   INACTIVE: "INACTIVE",
//   CONNECTING: "CONNECTING",
//   ACTIVE: "ACTIVE",
//   FINISHED: "FINISHED",
// };

// const Agent = ({
//   userName,
//   userId,
//   interviewId,
//   feedbackId,
//   type,
//   questions,
// }) => {
//   const navigate = useNavigate();
//   const vapiRef = useRef(null);
//   const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
//   const [messages, setMessages] = useState([]);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [lastMessage, setLastMessage] = useState("");

//   useEffect(() => {
//     const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);
//     vapiRef.current = vapi;

//     vapi.on("call-start", () => setCallStatus(CallStatus.ACTIVE));
//     vapi.on("call-end", () => setCallStatus(CallStatus.FINISHED));
//     vapi.on("message", (message) => {
//       if (message.type === "transcript" && message.transcriptType === "final") {
//         setMessages((prev) => [...prev, { role: message.role, content: message.transcript }]);
//       }
//     });
//     vapi.on("speech-start", () => setIsSpeaking(true));
//     vapi.on("speech-end", () => setIsSpeaking(false));
//     vapi.on("error", (error) => console.error("Vapi error:", error));

//     return () => {
//       vapi.removeAllListeners();
//     };
//   }, []);

//   useEffect(() => {
//     if (messages.length > 0) {
//       setLastMessage(messages[messages.length - 1].content);
//     }

//     // if (callStatus === CallStatus.FINISHED) {
//     //   if (type === "generate") {
//     //     navigate("/");
//     //   } else {
//     //     console.log("Transcript messages:", messages);
//     //     // Call your feedback API here if needed
//     //     navigate(`/interview/${interviewId}/feedback`);
//     //   }
//     // }
//   }, [messages, callStatus]);

//   const handleCall = async () => {
//     setCallStatus(CallStatus.CONNECTING);
//     const vapi = vapiRef.current;

//     if (!vapi) return;

//     if (type === "generate") {
//       await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID, {
//         variableValues: {
//           username: userName,
//           userid: userId,
//         },
//       });
//     } else {
//       const formattedQuestions = questions?.map((q) => `- ${q}`).join("\n") || "";
//       await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID, {
//         variableValues: {
//           questions: formattedQuestions,
//         },
//       });
//     }
//   };

//   const handleDisconnect = () => {
//     setCallStatus(CallStatus.FINISHED);
//     vapiRef.current?.stop();
//   };

//   return (
//     <div className="p-4 text-center">
//       <h2>AI Interviewer</h2>
//       <p>{userName}</p>
//       <div className="my-4">
//         {lastMessage && (
//           <p className="text-gray-700 border p-2 rounded shadow-md">{lastMessage}</p>
//         )}
//       </div>

//       {callStatus !== CallStatus.ACTIVE ? (
//         <button onClick={handleCall} className="px-6 py-2 bg-green-600 text-white rounded">
//           {callStatus === CallStatus.CONNECTING ? "Connecting..." : "Start Call"}
//         </button>
//       ) : (
//         <button onClick={handleDisconnect} className="px-6 py-2 bg-red-600 text-white rounded">
//           End Call
//         </button>
//       )}
//     </div>
//   );
// };

// export default Agent;

import React from 'react'

function BotConversation() {
  return (
    <div>BotConversation</div>
  )
}

export default BotConversation