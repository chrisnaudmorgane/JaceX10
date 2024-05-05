import 'package:flutter/material.dart';

class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          height: double.infinity,
          width: double.infinity,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color(0xffB81736),
                Color(0xff281537),
              ]
            )
          ),
        child: Padding(
          padding: const EdgeInsets.only(top: 60.0, left: 22),
          child: Text(
              "Sign in!",
            style: TextStyle(
              fontSize: 22,
              fontStyle:
            ),
          ),
        ),
        ),
      );
  }
}
