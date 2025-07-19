import React, { useEffect, useRef } from 'react';

const CameraFeed = () => {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    }).catch((err) => {
      console.error("Camera error: ", err);
    });
  }, []);

  return (
    <video ref={videoRef} autoPlay muted style={{ width: 150, borderRadius: 10 }} />
  );
};

export default CameraFeed;
