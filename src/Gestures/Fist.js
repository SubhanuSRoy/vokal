// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const byeGesture = new GestureDescription('fist') ;


//no curl, all fingers curled
for(let finger of [Finger.Thumb,Finger.Index, Finger.Middle,Finger.Ring, Finger.Pinky]){
    byeGesture.addCurl(finger,FingerCurl.FullCurl,0.9);
    // byeGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    // byeGesture.addDirection(finger,FingerDirection.VerticalUp,0.9);
}