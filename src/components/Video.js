import React from "react";

export default function Video() {
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "black" // Optional: Black background for better focus
    }}>
      <iframe
        src="https://www.youtube.com/embed/cgzoZE5VyEQ?si=WObfrWyCpkoFp2aG"
        title="YouTube Video"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
