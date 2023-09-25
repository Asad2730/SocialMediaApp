import 'package:flutter/material.dart';
import 'package:flutter_app/utils/themes.dart';
import 'package:flutter_app/widgets/ui.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {

  TextEditingController email =  TextEditingController();
  TextEditingController password = TextEditingController();

  @override
  void dispose() {
    email.dispose();
    password.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final wd = MediaQuery.of(context).size.width;
    final ht = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
        title: const Text('LOGIN'),
        backgroundColor: myTheme.primaryColor,
      ),
      body: SafeArea(
          child: Center(
            child: Container(
                 color:myTheme.backgroundColor,
                 height: ht,
                 width: wd,
                 child: Column(
                   mainAxisSize: MainAxisSize.max,
                   mainAxisAlignment: MainAxisAlignment.start,
                   crossAxisAlignment: CrossAxisAlignment.center,
                   children: [
                     const SizedBox(height: 40,),
                     inputText(controller: email, hintText: 'user email', hideText: false,width: wd * 0.90, height: ht * 0.07),
                     const SizedBox(height: 20,),
                     inputText(controller: password, hintText: 'user password', hideText: true,width: wd * 0.90, height: ht * 0.07),
                     const SizedBox(height: 20,),
                     inputButton(width: wd * 0.90, height: ht * 0.07, text: 'Login',onPressed: null),
                     const SizedBox(height: 20,),
                     inputTextButton(text:"Don't have an account signup?", onPressed: null,fontSize: 20,fontWeight: FontWeight.bold)
                   ],
                 ),
            ),
          ),
      ) ,
    );
  }
}
