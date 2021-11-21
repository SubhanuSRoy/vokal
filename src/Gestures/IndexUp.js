// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const indexUpGesture = new GestureDescription('index_up') ;

//for our Thumb

//thumb can have some curl, but it must upwards or not point at all
indexUpGesture.addCurl(Finger.Thumb,FingerCurl.HalfCurl,0.75);
// indexUpGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalLeft,1.0);
// indexUpGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalRight,1.0);


//for our Index finger

// the index finger should not have any curl, it will be pointing straight Up, can up-Up or up-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
indexUpGesture.addCurl(Finger.Index,FingerCurl.NoCurl,0.9);
indexUpGesture.addDirection(Finger.Index,FingerDirection.VerticalUp,0.9);
indexUpGesture.addDirection(Finger.Index,FingerDirection.DiagonalUpRight,0.75);
indexUpGesture.addDirection(Finger.Index,FingerDirection.DiagonalDownLeft,0.75);



//now for our middle and ring fingers we want a full curl
for(let finger of [Finger.Middle,Finger.Ring,Finger.Pinky]){
    indexUpGesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    indexUpGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    // indexUpGesture.addDirection(finger,FingerDirection.VerticalLeft,0.75);
}