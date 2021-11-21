// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const indexRightGesture = new GestureDescription('index_right') ;

//for our Thumb

//thumb can have some curl, but it must upwards or not point at all
indexRightGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,0.75);
indexRightGesture.addDirection(Finger.Thumb,FingerDirection.VerticalUp,0.5);


//for our Index finger

// the index finger should not have any curl, it will be pointing straight right, can up-right or up-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
indexRightGesture.addCurl(Finger.Index,FingerCurl.NoCurl,0.9);
indexRightGesture.addDirection(Finger.Index,FingerDirection.HorizontalRight,0.9);
indexRightGesture.addDirection(Finger.Index,FingerDirection.DiagonalUpRight,0.75);
indexRightGesture.addDirection(Finger.Index,FingerDirection.DiagonalDownRight,0.75);



//now for our middle and ring fingers we want a full curl
for(let finger of [Finger.Middle,Finger.Ring,Finger.Pinky]){
    indexRightGesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    indexRightGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    // indexRightGesture.addDirection(finger,FingerDirection.HorizontalLeft,0.75);
}