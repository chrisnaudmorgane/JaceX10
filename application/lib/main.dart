import 'package:flutter/material.dart';
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Portofilieul',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Investissement'),
          backgroundColor: Colors.red,
        ),
        body: Center(
          child: Text(
            "Chrisnaud",
          style: TextStyle(
            fontSize: 14,
            fontFamily: 'Poppins'
          ),
          ),
        ),
      )
    );
  }
}
