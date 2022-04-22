import React, { useRef, useState, useEffect } from "react";

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../utilities";
import styles from "./recognizer.module.css";

import * as fp from "fingerpose";
import thanks from "../Text/thanks.png";
import yes from "../Text/yes.png";
import i_love_you from "../Text/i_love_you.png";
import no from "../Text/no.png";
import hello from "../Text/hello.png";
import how_are_you from "../Text/how_are_you.png";
import i_am_fine from "../Text/fine.png";
import good_morning from "../Text/good_morning.png";
import good_evening from "../Text/good_evening.png";
import bye from "../Text/bye.png";
import call_you_later from "../Text/call_you_later.png";
import excellent from "../Text/excellent.png";

//importing the new gestures
import { loveYouGesture } from "../Gestures/LoveYou";
import { thumbsDownGesture } from "../Gestures/ThumbsDown";
import { helloGesture } from "../Gestures/Hello";
import { indexRightGesture } from "../Gestures/IndexRight";
import { indexLeftGesture } from "../Gestures/IndexLeft";
import { indexUpGesture } from "../Gestures/IndexUp";
import { indexDownGesture } from "../Gestures/IndexDown";
import { byeGesture } from "../Gestures/Fist";
import { callGesture } from "../Gestures/Call";
import { excellentGesture } from "../Gestures/Excellent";

import male from "../Assets/male.png";
import female from "../Assets/female.png";

function Recognizer() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);

  const [vText, setVText] = useState("hello");

  const [voices, setVoices] = useState([]);

  const images = {
    thumbs_up: yes,
    victory: thanks,
    i_love_you: i_love_you,
    thumbs_down: no,
    hello: hello,
    index_right: how_are_you,
    index_left: i_am_fine,
    index_up: good_morning,
    index_down: good_evening,
    fist: bye,
    call: call_you_later,
    excellent: excellent,
  };

  const voiceText = {
    thumbs_up: "yes",
    victory: "thank you",
    i_love_you: "i love you",
    thumbs_down: "no",
    hello: "hello",
    index_right: "hey, how are you?",
    index_left: "i am fine",
    index_up: "good morning",
    index_down: "good evening",
    fist: "bye",
    call: "I will call you later",
    excellent: "Excellent!",
  };

  const runHandpose = async () => {
    const net = await handpose.load();
    // console.log("Handpose model loaded.");

    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video; //grabbing the video from our webcam ref
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          loveYouGesture,
          thumbsDownGesture,
          helloGesture,
          indexRightGesture,
          indexLeftGesture,
          indexUpGesture,
          indexDownGesture,
          byeGesture,
          // callGesture,
          excellentGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        // console.log(gesture);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          // it has made the prediction
          setEmoji(gesture.gestures[maxConfidence].name);

          //upadting the prediction value in vText
          setVText(gesture.gestures[maxConfidence].name);
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      //drawHand function defined in utilities
      drawHand(hand, ctx);
    }
  };

  var tts = window.speechSynthesis;
  // var voices = [];
  const Text2Speech = (vText) => {
    // console.log(voices)
    var toSpeak = new SpeechSynthesisUtterance(voiceText[vText]);
    // console.log(toSpeak);
    var ele = document.getElementsByName("gen");
    var v = [];
    v = tts.getVoices();
    if (ele[0].checked == true) {
      toSpeak.voice = v[1];
    } else {
      toSpeak.voice = v[12];
      // console.log("female chosen");
      // console.log(voices)
    }
    tts.speak(toSpeak);
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className={styles.container}>
      <Webcam
        className={styles.webcam}
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 20,
          left: 20,
          // right: 0,
          textAlign: "center",
          zindex: 9,
          width: 704,
          height: 528,
        }}
      />

      <canvas
        className={styles.canvas}
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 20,
          left: 20,
          // right: 0,
          textAlign: "center",
          zindex: 9,
          width: 704,
          height: 528,
        }}
      />

      {emoji !== null ? (
        <img
          src={images[emoji]}
          style={{
            position: "absolute",
            // marginLeft: "auto",
            // marginRight: "auto",
            left: 20,
            // bottom: 200,
            top: 20,
            right: 400,
            textAlign: "center",
            height: 100,
          }}
        />
      ) : (
        ""
      )}
      <div
        className={styles.custom}
        style={{
          // position: "absolute",
          // marginLeft: "auto",
          // marginRight: "auto",
          // left: 200,
          // bottom: 100,
          // right: 20,
          textAlign: "center",
          // height: 00,
          color: "black",
        }}
      >
        <p>Select gender:</p>
        <div className={styles.options}>
          <input type="radio" id="male" name="gen" value="male" />
          <label for="male">
            <img src={male} alt="male" className={styles.gender} />
          </label>
          <input type="radio" id="female" name="gen" value="female" />
          <label for="female">
            <img src={female} alt="female" className={styles.gender} />
          </label>
        </div>
        <button
          id="btnSpeak"
          // style={{
          //   position: "absolute",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          //   left: 200,
          //   bottom: 400,
          //   right: 0,
          //   textAlign: "center",
          //   height: 50,
          // }}
          onClick={() => Text2Speech(vText)}
        >
          Get your voice!
        </button>
      </div>
    </div>
  );
}

export default Recognizer;
