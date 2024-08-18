"use client";
import { ArrowUp, X } from "@phosphor-icons/react";
import YouTube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = {
    width: "300",
    height: "250",
  };

  const handleButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div
        className={`fixed bottom-2 right-2 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <button
          className="float-right rounded text-color-dark bg-color-accent"
          onClick={handleButton}
        >
          <X size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      className="fixed rounded bottom-5 right-5 text-color-dark bg-color-accent"
      onClick={handleButton}
    >
      <ArrowUp size={32} />
    </button>
  );
};

export default VideoPlayer;
