// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const indexLeftGesture = new GestureDescription('index_left') ;

//for our Thumb

//thumb can have some curl, but it must upwards or not point at all
indexLeftGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,0.75);
indexLeftGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.5);


//for our Index finger

// the index finger should not have any curl, it will be pointing straight Left, can up-Left or up-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
indexLeftGesture.addCurl(Finger.Index,FingerCurl.NoCurl,0.9);
indexLeftGesture.addDirection(Finger.Index,FingerDirection.HorizontalLeft,0.9);
indexLeftGesture.addDirection(Finger.Index,FingerDirection.DiagonalUpLeft,0.75);
indexLeftGesture.addDirection(Finger.Index,FingerDirection.DiagonalDownLeft,0.75);



//now for our middle and ring fingers we want a full curl
for(let finger of [Finger.Middle,Finger.Ring,Finger.Pinky]){
    indexLeftGesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    indexLeftGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    // indexLeftGesture.addDirection(finger,FingerDirection.HorizontalLeft,0.75);
}