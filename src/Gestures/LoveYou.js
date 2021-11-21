// importing dependencies
import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";

// define our gesture description
export const loveYouGesture = new GestureDescription('i_love_you') ;

//looks like the spider man web throw

//for our Thumb

//the thumb will have no curl defined in below line and the last number is the confidence, 1 means highest importance i.e 100% confidence
loveYouGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
//the direction of the thumb can be horizontal left defined in below line, 0.25 confidence means it 
// can be a little towards left up ot left down , doesn't matter as long there is no curl
loveYouGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalLeft,1.0);
//the direction of the thumb can be horizontal right defined in below line, 0.25 confidence means it 
// can be a little towards right up ot right down , doesn't matter as long there is no curl
loveYouGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalRight,1.0);
loveYouGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,1.0);
loveYouGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpLeft,1.0);

//for our Index finger

// the index finger should not have any curl, it will be pointing straight up, can up-right or up-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
loveYouGesture.addCurl(Finger.Index,FingerCurl.NoCurl,0.9);
loveYouGesture.addDirection(Finger.Index,FingerDirection.VerticalUp,1.0);
loveYouGesture.addDirection(Finger.Index,FingerDirection.DiagonalUpRight,0.9);
loveYouGesture.addDirection(Finger.Index,FingerDirection.DiagonalUpLeft,0.9);

//for our pinky
// the pinky finger should not have any curl, it will be pointing straight up, can up-right or up-left as long as there is no curl
// hence no curl has more confidence and direction has less confidence
loveYouGesture.addCurl(Finger.Pinky,FingerCurl.NoCurl,0.9);
loveYouGesture.addDirection(Finger.Pinky,FingerDirection.VerticalUp,1.0);
loveYouGesture.addDirection(Finger.Pinky,FingerDirection.DiagonalUpRight,0.9);
loveYouGesture.addDirection(Finger.Pinky,FingerDirection.DiagonalUpRight,0.9);

//now for our middle and ring fingers we want a full curl
for(let finger of [Finger.Middle,Finger.Ring]){
    loveYouGesture.addCurl(finger,FingerCurl.HalfCurl,0.9);
    loveYouGesture.addCurl(finger,FingerCurl.FullCurl,1.0);
    loveYouGesture.addDirection(finger,FingerDirection.VerticalUp,0.0);
}