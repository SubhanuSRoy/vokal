// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const indexDownGesture = new GestureDescription('index_Down') ;

//for our Thumb

//thumb can have some curl, but it must Downwards or not point at all
indexDownGesture.addCurl(Finger.Thumb,FingerCurl.HalfCurl,0.75);
indexDownGesture.addCurl(Finger.Thumb,FingerCurl.FullCurl,0.9);
// indexDownGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalLeft,1.0);
// indexDownGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalRight,1.0);


//for our Index finger

// the index finger should not have any curl, it will be pointing straight Down, can Down-Down or Down-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
indexDownGesture.addCurl(Finger.Index,FingerCurl.NoCurl,1.0);
indexDownGesture.addDirection(Finger.Index,FingerDirection.VerticalDown,0.9);
indexDownGesture.addDirection(Finger.Index,FingerDirection.DiagonalDownRight,0.75);
indexDownGesture.addDirection(Finger.Index,FingerDirection.DiagonalDownLeft,0.75);

  

//now for our middle and ring fingers we want a full curl
for(let finger of [Finger.Middle,Finger.Ring,Finger.Pinky]){
    indexDownGesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    indexDownGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    // indexDownGesture.addDirection(finger,FingerDirection.VerticalLeft,0.75);
}