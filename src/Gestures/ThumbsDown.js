// importing dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// define our gesture description
export const thumbsDownGesture = new GestureDescription("thumbs_down");

//for our Thumb

//the thumb will have no curl defined in below line 
thumbsDownGesture.addCurl(Finger.Thumb,FingerCurl.NoCurl,1.0);
// direction shoudl be vertically down with a confidence of 50%, means it can be down left or down right
thumbsDownGesture.addDirection(Finger.Thumb,FingerDirection.VerticalDown,1.0);
thumbsDownGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalDownRight,0.9);
thumbsDownGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalDownLeft,0.9);

// This above will define that a thumb pointing downwards will result in the highest score (1.0) for this gesture.

// thumbsDownGesture.addDirection(
//   Finger.Thumb,
//   FingerDirection.DiagonalDownLeft,
//   0.9
// );
// thumbsDownGesture.addDirection(
//   Finger.Thumb,
//   FingerDirection.DiagonalDownRight,
//   0.9
// );

// Above will define if the thumb is angled to diagonal down left / right we can somehow still accept it, albeit with a lower score (0.9).

// All other fingers are expected to be fully curled. For this gesture it doesn't really matter which direction the curled fingers are pointing at therefore only the curl description is added. Same as above, it's recommended to accept half curled fingers too, with a little bit lower score.
// do this for all other fingers
for (let finger of [
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  thumbsDownGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
//   thumbsDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.25);
}
