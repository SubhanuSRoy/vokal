import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const excellentGesture = new GestureDescription("excellent");

// for thumb
excellentGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
// indexRightGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.5);

// for index
excellentGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

//for middle,ring, pinky
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  excellentGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  // indexDownGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
  excellentGesture.addDirection(finger, FingerDirection.VerticalUp, 0.75);
}
