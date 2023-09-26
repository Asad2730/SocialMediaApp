import 'package:flutter/material.dart';
import 'package:flutter_app/utils/themes.dart';
import 'package:flutter_app/widgets/ui.dart';
import 'package:get/get.dart';
import 'package:video_player/video_player.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {

  TextEditingController email =  TextEditingController();
  TextEditingController password = TextEditingController();
  late double wd,ht;
  late VideoPlayerController _videoPlayer;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _videoPlayer = VideoPlayerController.asset('assets/video1.mp4')
      ..initialize().then((_) {
        _videoPlayer.setLooping(true);
        _videoPlayer.play();
      });
  }

  @override
  void dispose() {
    email.dispose();
    password.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    wd = MediaQuery
        .of(context)
        .size
        .width;
    ht = MediaQuery
        .of(context)
        .size
        .height;
    return Scaffold(
      backgroundColor: myTheme.primaryColor,
      appBar: appbar(),
      body: customContainer(
           ht: ht! , wd: wd!, ui: _buildUi(),
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
        const SizedBox(height: 40,),
        inputText(controller: email, hintText: 'user email', hideText: false,width:width!, height: height!),
        const SizedBox(height: 20,),
        inputText(controller: password, hintText: 'user password', hideText: true,width:width!, height: height!),
        const SizedBox(height: 20,),
        inputButton(width: width!, height: height!, text: 'Login',onPressed: null),
        const SizedBox(height: 20,),
        inputTextButton(text: "Don't have an account signup?",
            onPressed: () => Get.toNamed('/signup'),
            fontSize: 20, fontWeight: FontWeight.w100)
      ],
    );
  }


}

