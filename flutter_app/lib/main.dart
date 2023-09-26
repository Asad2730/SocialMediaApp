import 'package:flutter/material.dart';
import 'package:flutter_app/screens/login.dart';
import 'package:flutter_app/screens/signup.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return  GetMaterialApp(
       initialRoute: '/login',
       getPages: [
         GetPage(name: '/login', page: ()=> const Login()),
         GetPage(name: '/signup', page: ()=> const SignUp())
       ],
    );
  }
}
