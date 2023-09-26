import 'package:flutter/material.dart';
import 'package:flutter_app/utils/themes.dart';
import 'package:video_player/video_player.dart';


AppBar appbar(){
   return AppBar(
      backgroundColor: myTheme.canvasColor,
   );
}

Widget inputText({
  required TextEditingController controller,
  required String hintText,
  required bool hideText,
  required double width,
  required double height
}) {
  return SizedBox(
    width: width,
    height: height,
    child: TextField(
      controller: controller,
      obscureText: hideText,
      onChanged: (text) => controller.text = text,
      decoration: InputDecoration(
        hintText: hintText,
        filled: true,
        fillColor: Colors.white70,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(60.0),
        ),
        contentPadding: const EdgeInsets.symmetric(vertical: 18.0, horizontal: 20.0),
      ),
    ),
  );
}


Widget inputButton({
  required double width,
  required double height,
  required String text,
  required Function()? onPressed,
}) {
  return Container(
    width: width,
    height: height,
    decoration: BoxDecoration(
      color: myTheme.canvasColor,
      borderRadius: BorderRadius.circular(60.0),
    ),
    child: GestureDetector(
      onTap: onPressed,
      child: Align(
        alignment: Alignment.center,
        child: Text(
          text,
          style: const TextStyle(
            color: Colors.blueGrey,
            fontSize: 20,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    ),
  );
}



Widget inputTextButton({
required text,
required VoidCallback  onPressed,
  required FontWeight fontWeight,
  required double fontSize
}){
  return  TextButton(
  onPressed: ()=> onPressed(),
     child:  Text(
      text,
    style:TextStyle(
    fontWeight: fontWeight,
    fontSize: fontSize,
    color: Colors.lightBlueAccent,
    ),
     ),
    );
}

Widget customContainer({
  required double ht,
  required double wd,
  required Widget ui,
  required double tPad,
  required double lPad,
  required double rPad,
  required double bPad,
  required VideoPlayerController videoPlayer,
}) {
  return SafeArea(
    child: Center(
      child: Container(
        color: myTheme.canvasColor,
        height: ht,
        width: wd,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(10, 20, 10, 40),
          child: Card(
            color: myTheme.primaryColor,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(60.0),
            ),
            child: Stack(
              children: [
                // Video Player filling entire card
                SizedBox(
                  width: double.infinity,
                  height: double.infinity,
                  child: ClipRRect( // ClipRRect is used to clip the video to match the rounded card corners
                    borderRadius: BorderRadius.circular(60.0),
                    child: VideoPlayer(videoPlayer),
                  ),
                ),

                // Padding applied only once here for the ui widget
                Padding(
                  padding: EdgeInsets.fromLTRB(lPad, tPad, rPad, bPad),
                  child: ui,
                ),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}
