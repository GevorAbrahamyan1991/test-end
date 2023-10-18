import React from "react";
import notyDo from "../../assets/audio/noty-do.mp4";
import re from "../../assets/audio/re.mp3";
import mi from "../../assets/audio/mi.mp3";
import fa from "../../assets/audio/fa.mp3";
import sol from "../../assets/audio/sol.mp3";
import lja from "../../assets/audio/lja.mp3";
import si from "../../assets/audio/si.mp3";

const DrumKit = () => {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      this.classList.remove("playing");
    }

    const keys = Array.from(document.getElementsByClassName("key"));
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition)
    );
  }
  window.addEventListener("keydown", playSound);

  return (
    <>
      <div className="bg-drumbg bg-cover bg-center bg-no-repeat">
        <div className="flex flex-1 min-h-screen items-center justify-center">
          <div
            data-key="65"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              A
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              DO
            </span>
          </div>
          <div
            data-key="83"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              S
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              RE
            </span>
          </div>
          <div
            data-key="68"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              D
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              MI
            </span>
          </div>
          <div
            data-key="70"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              F
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              FA
            </span>
          </div>
          <div
            data-key="71"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              G
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              SOL
            </span>
          </div>
          <div
            data-key="72"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              H
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              LJA
            </span>
          </div>
          <div
            data-key="74"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600 block text-4xl font-bold">
              J
            </kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              SI
            </span>
          </div>
        </div>
        <audio data-key="65" src={notyDo}></audio>
        <audio data-key="83" src={re}></audio>
        <audio data-key="68" src={mi}></audio>
        <audio data-key="70" src={fa}></audio>
        <audio data-key="71" src={sol}></audio>
        <audio data-key="72" src={lja}></audio>
        <audio data-key="74" src={si}></audio>
      </div>
    </>
  );
};

export default DrumKit;
