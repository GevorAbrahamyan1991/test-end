import React from "react";
import boom from "../../assets/audio/boom.wav";
import clap from "../../assets/audio/clap.wav";
import hihat from "../../assets/audio/hihat.wav";
import kick from "../../assets/audio/kick.wav";
import openhat from "../../assets/audio/openhat.wav";
import ride from "../../assets/audio/ride.wav";
import snare from "../../assets/audio/snare.wav";
import tink from "../../assets/audio/tink.wav";
import tom from "../../assets/audio/tom.wav";

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
            <kbd className="mb-4 text-orange-600">A</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              clap
            </span>
          </div>
          <div
            data-key="83"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">S</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              hihat
            </span>
          </div>
          <div
            data-key="68"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">D</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              kick
            </span>
          </div>
          <div
            data-key="70"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">F</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              openhat
            </span>
          </div>
          <div
            data-key="71"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">G</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              boom
            </span>
          </div>
          <div
            data-key="72"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">H</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              ride
            </span>
          </div>
          <div
            data-key="74"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">J</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              snare
            </span>
          </div>
          <div
            data-key="75"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">K</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              tom
            </span>
          </div>
          <div
            data-key="76"
            className="key border-4 border-black rounded-lg m-4 text-2xl py-4 px-2 transition-all duration-150 w-40 text-center text-white bg-opacity-40 text-shadow-sm"
          >
            <kbd className="mb-4 text-orange-600">L</kbd>
            <span className="text-2xl uppercase tracking-wide text-yellow-500">
              tink
            </span>
          </div>
        </div>
        <audio data-key="65" src={boom}></audio>
        <audio data-key="83" src={clap}></audio>
        <audio data-key="68" src={hihat}></audio>
        <audio data-key="70" src={kick}></audio>
        <audio data-key="71" src={openhat}></audio>
        <audio data-key="72" src={ride}></audio>
        <audio data-key="74" src={snare}></audio>
        <audio data-key="75" src={tink}></audio>
        <audio data-key="76" src={tom}></audio>
      </div>
    </>
  );
};

export default DrumKit;
