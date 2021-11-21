// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const helloGesture = new GestureDescription('hello') ;


//no curl, all fingers straight up
for(let finger of [Finger.Thumb,Finger.Index, Finger.Middle,Finger.Ring, Finger.Pinky]){
    helloGesture.addCurl(finger,FingerCurl.NoCurl,1.0);
    helloGesture.addDirection(finger,FingerDirection.VerticalUp,0.9);
}