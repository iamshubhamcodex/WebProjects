<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" type="image/png">
    <title>Window 11 - For Web</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- APPEAR ON ONLY START -->
    <div class="start">
      <img src="/Static/bg.jpg" alt="bg" />
      <button>START</button>
    </div>

    <!-- WINDOW -->
    <div class="bgVid">
      <video muted id="vid">
        <source src="/Static/video.webm" type="video/webm" />
      </video>
    </div>
    <!-- <div class="taskbar">
      <img src="icons.PNG" alt="" srcset="" />
      <img src="taskbarright.PNG" alt="" srcset="" />
    </div> -->
    <div class="taskbar1">
      <div class="taskIcon">
        <div class="imggg">
          <img class="window" src="/Static/winnIcon.png" alt="" />
          <img onclick="sea()" src="/Static/Capture.PNG" alt="" /> <input class="searchBox" type="text">
          <img src="/Static/edgeIcon.png" onclick="window.alert('Edge opened')" alt="" />
          <img src="/Static/storeIcon.png" onclick="window.alert('Store opened')" alt="" />
          <img src="/Static/galIcon.png" onclick="window.alert('Galary opened')" alt="" />
          <img src="/Static/fileIcon.png" onclick="window.alert('File Manager opened')" alt="" />
          <img src="/Static/vsIcon.png" onclick="window.alert('VS Code opened')" alt="" />
        </div>
      </div>
      <img class="rightTask" src="/Static/taskbarright.PNG" alt="" srcset="" />
    </div>
    <div class="icons">
      <img src="winIcons.PNG" alt="" srcset="" />
    </div>
    <div class="startMenu">
      <img src="/Static/startmenu.PNG" alt="" srcset="" />
    </div>
    <script src="index.js"></script>
  </body>
</html>
