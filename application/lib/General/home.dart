import 'package:application/Provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:application/General/Setting.dart';
import 'package:provider/provider.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _currentIndex = 0;

  setCurrentIndex(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) =>UiProvider()..init(),
      child: Consumer<UiProvider>(
        builder: (context, UiProvider notifier, child) {
          return MaterialApp(
              themeMode: notifier.isDark? ThemeMode.dark : ThemeMode.light,
              darkTheme: notifier.isDark? notifier.darkTheme : notifier.lightTheme,
              home: Scaffold(
                appBar: AppBar(
                  title: [
                    Text("Home"),
                    Text("Settings"),
                    Text("Diary")
                  ][_currentIndex],
                  backgroundColor: Colors.redAccent,
                ),
                body: [
                  Center(
                    child: Text("JACEX10")
                  ),
                  Settings()
                ][_currentIndex],
                bottomNavigationBar: BottomNavigationBar(
                  currentIndex: _currentIndex,
                  onTap: (index) => setCurrentIndex(index),
                  type: BottomNavigationBarType.fixed,
                  selectedItemColor: Colors.red,
                  unselectedItemColor: Colors.grey,
                  elevation: 10,
                  items: [
                    BottomNavigationBarItem(icon: Icon(Icons.home),
                        label: 'Home'),
                    BottomNavigationBarItem(icon: Icon(Icons.settings),
                        label: 'Settings'),
                    BottomNavigationBarItem(icon: Icon(Icons.calendar_month),
                        label: 'Planning'),
                    BottomNavigationBarItem(icon: Icon(Icons.add),
                        label: 'Add'),
                  ],
                ),
              )
          );
        }
      ),
    );
  }
}
