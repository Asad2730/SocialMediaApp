import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_app/utils/themes.dart';
import 'package:flutter_app/widgets/ui.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:video_player/video_player.dart';

class SignUp extends StatefulWidget {
  const SignUp({super.key});

  @override
  State<SignUp> createState() => _LoginState();
}

class _LoginState extends State<SignUp> {

  TextEditingController email =  TextEditingController();
  TextEditingController password = TextEditingController();
  TextEditingController name = TextEditingController();

   late double wd,ht;
   File? image;
   late VideoPlayerController _videoPlayer;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _videoPlayer = VideoPlayerController.asset('assets/video2.mp4')
      ..initialize().then((_) {
        _videoPlayer.setLooping(true);
        _videoPlayer.play();
      });
  }

  @override
  void dispose() {
    email.dispose();
    password.dispose();
    name.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
     wd = MediaQuery.of(context).size.width;
     ht = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: appbar(),
      backgroundColor: myTheme.primaryColor,
      body: customContainer(
           ht: ht!, wd: wd!, ui: _buildUi(),
           tPad: 10,bPad: 10,lPad: 10,rPad: 10,
          videoPlayer: _videoPlayer
      ),
    );
  }

  Widget _buildUi(){
     double width = wd! * 0.90;
     double height = ht! * 0.07;
    return  Column(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SizedBox(height: 20,),
        _imageSelector(),
        const SizedBox(height: 40,),
        inputText(controller: name, hintText: 'user name', hideText: false,width: width, height: height),
        const SizedBox(height: 20,),
        inputText(controller: email, hintText: 'user email', hideText: false,width:width, height: height),
        const SizedBox(height: 20,),
        inputText(controller: password, hintText: 'user password', hideText: true,width:width, height: height),
        const SizedBox(height: 20,),
        inputButton(width: width, height: height, text: 'Create',onPressed: null),
        const SizedBox(height: 20,),
        inputTextButton(text:"Already have an account login?", 
             onPressed: () => Get.toNamed('/login'),
             fontSize: 20,fontWeight: FontWeight.w100)
      ],
    );
  }


  Widget _imageSelector(){

      Widget container = image != null ? Container(
        height: ht! * 0.15,
        width: wd! * 0.30,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          image: DecorationImage(
            fit: BoxFit.cover,
            image: FileImage(image!),
          ),
        ),
      ):Container(
        height: ht! * 0.15,
        width: wd! * 0.30,
        decoration:  BoxDecoration(
          borderRadius:  BorderRadius.circular(60.0),
          color: myTheme.primaryColor,
        ),
        child:const Icon(Icons.camera_alt_rounded,color: Colors.blueAccent),
      );

      return GestureDetector(
         onTap: _profileImage,
         child: container,
      );

  }


  Future _profileImage()async {
    try{

      final image = await ImagePicker().pickImage(source:ImageSource.gallery);
      if(image == null) return;
      final path = File(image.path);
      setState(() { this.image = path;});

    }on PlatformException catch(e){
      Fluttertoast.showToast(msg:e.toString(), toastLength: Toast.LENGTH_LONG,textColor: Colors.red);
    }
  }


}


