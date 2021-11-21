// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const callGesture = new GestureDescription('call') ;

//for our Thumb

//thumb can have some curl, but it must upwards or not point at all
callGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
callGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.9);
callGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpLeft,0.75);
callGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,0.75);


//for our pinky finger

// the index finger should not have any curl, it will be pointing straight Left, can up-Left or up-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
callGesture.addCurl(Finger.Pnky,FingerCurl.NoCurl,0.9);
callGesture.addDirection(Finger.Pnky,FingerDirection.HorizontalLeft,1.0);
callGesture.addDirection(Finger.Pnky,FingerDirection.HorizontalRight,1.0);
callGesture.addDirection(Finger.Pnky,FingerDirection.DiagonalDownLeft,0.75);
callGesture.addDirection(Finger.Pnky,FingerDirection.DiagonalDownRight,0.75);



//now for our middle and ring fingers we want a full curl
for(let finger of [Finger.Middle,Finger.Ring,Finger.Index]){
    callGesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    callGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    // callGesture.addDirection(finger,FingerDirection.HorizontalLeft,0.75);
}