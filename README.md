<h1 align='center'>React Native Note App - RESTful API</h1>

<p align='center'>
  <a href='https://facebook.github.io/react-native/'>
  <img src='https://kreitech.io/blog/wp-content/uploads/2018/10/1_-NOQtyJAGQ1RNC3iVt_thA.png' />
  </a>
</p>

<br>
<br>

## Introduction
[![React Native](https://img.shields.io/badge/React%20Native-0.60-blue.svg?style=rounded-square)](https://facebook.github.io/react-native/)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

Here is my new repository which builded with React Native Framework for making the User Interface in JavaScript syntax, see my previous repository about [ExpressJS - Simple Note App RESTful API](https://github.com/andreferi3/ExpressJS-Simple-Note-App-RESTful-API/) for the backend side and making API.

### What is React Native ?
React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform capabilities. [[1]](https://en.wikipedia.org/wiki/React_Native)

### Why using React Native ?
6 main reason why me using React Native for make a mobile app :

1. It's got iOS and Android covered
2. Reusable components allow hybrid apps to render natively
3. Apply React Native UI component to an existing app's code-without any rewriting at all
4. It’s one of the top mobile JavaScript frameworks among developers—and growing
5. React Native is all about the UI
6. Native app development is much more efficient

### How React Native works ?
Short explanation about **How React Native Works**.

React Native invokes Objective-C APIs to render to iOS components, or Java APIs to render to Android components. This sets React Native apart from other cross-platform app development options, which often end up rendering web-based views.
<br>
<br>
## Requirements
1. npm (node package manager)
2. react-native-cli (from npm)
3. Back-End porject, in this case you can clone or download from my repository in https://github.com/Ekofebri9/front-end-simple-note-app.git

## How to run the app ?
1. Clone or download first this repository as beck-end with git clone https://github.com/Ekofebri9/front-end-simple-note-app.git
2. Then clone or download this repository with `git clone https://github.com/Ekofebri9/front-end-simple-note-app.git
3. Open the project in your favorite text editor
4. Open your terminal or cmd and type `npm install`
5. And the last just type in your terminal or cmd `react-native run-android`, be sure if you connected with a device on debugging mode or use the emulator on debugging mode too.

## Demo APK
You can try this apk from this link https://drive.google.com/file/d/1_EWchcJBxnNDmydNlsEes0CSoij7zzIN/view?usp=sharing <br>
<b>Note</b>: <br>
In this case I built with IP server/back-end in http://192.168.100.67:3002
You can edit IP server in <br>
<b>/src/public/redux/action/notes.js</b> and <br>
<b>/src/public/redux/action/categories.js</b> <br>
Find 'http://192.168.100.67:3002' and replace with your IP server/back-end then rebuild this apk
so if you will try this app you can rebuild this app following step from https://facebook.github.io/react-native/docs/signed-apk-android
<b>If</b> you need more detail of my demo, just visit this link https://drive.google.com/file/d/1MG5aO7fZuX3mKpsg_xdGxDfpGSIdIkh4/view?usp=sharing<br>
In my video ,I show you what can this app do....<br>
-fitur sorting asc and desc<br>
-search by title<br>
-pull to refresh<br>
-load more note automaticly<br>
-different color of note depend on category's note <br>
-load note by category<br>
-combine load by category and search and sorting<br>
-add and delete category, for deleting press and hold until show alert for makesure that you will delete<br>
-add, edit and delete note, for deleting press and hold until show alert for makesure that you will delete ad for updating just             click press the note <br>


## Screenshot from the app
![Screenshot_2019-07-07-19-58-34-522_com testapp](https://user-images.githubusercontent.com/50242300/60768904-aa874680-a0f3-11e9-871b-4a28bab63b4e.png)
![Screenshot_2019-07-07-19-58-20-435_com testapp](https://user-images.githubusercontent.com/50242300/60768905-aa874680-a0f3-11e9-99c6-2836d15e0253.png)
![Screenshot_2019-07-07-19-58-10-373_com testapp](https://user-images.githubusercontent.com/50242300/60768906-aa874680-a0f3-11e9-840a-38ec2448e7b7.png)
![Screenshot_2019-07-07-19-58-03-881_com testapp](https://user-images.githubusercontent.com/50242300/60768907-ab1fdd00-a0f3-11e9-8d93-165d8a760d55.png)
  
