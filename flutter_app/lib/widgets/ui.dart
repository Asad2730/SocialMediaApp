import 'package:flutter/material.dart';
import 'package:flutter_app/utils/themes.dart';



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
      color: myTheme.primaryColor,
      borderRadius: BorderRadius.circular(60.0),
    ),
    child: GestureDetector(
      onTap: onPressed,
      child: Align(
        alignment: Alignment.center,
        child: Text(
          text,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 20,
            fontWeight: FontWeight.w400,
          ),
        ),
      ),
    ),
  );
}



Widget inputTextButton({
required text,
required Function()? onPressed,
  required FontWeight fontWeight,
  required double fontSize
}){
  return  TextButton(
  onPressed: ()=>onPressed,
     child:  Text(
      text,
    style:TextStyle(
    fontWeight: fontWeight,
    fontSize: fontSize,
    ),
     ),
    );
}
