# hover-seconds-do [![Build Status](https://travis-ci.org/vortesnail/hover-seconds-do.svg?branch=master)](https://travis-ci.org/vortesnail/hover-seconds-do)

[简体中文](https://github.com/vortesnail/hover-seconds-do/blob/master/README-zh-Hans.md)

## Introduction
In some scenarios, we want the mouse to move to an element. After hovering for a few seconds, we can perform some operations, but the mouse moves slightly, the time is reset, and the state is back. When the mouse leaves the currently bound element, our page rolls back as it was. This tool function will definitely help you.

## Example
A very important function of the video player: **When the mouse hovers over the video playback interface, the mouse will disappear after a certain time, and the control bar below the video will also be hidden, showing the maximum visualization of the video. But the mouse moved a little and everything recovered as it was**. Using a simple gif diagram to illustrate, it is like this: ![demo.gif](https://cdn.nlark.com/yuque/0/2019/gif/341314/1572511989609-54aa916e-5f8a-4946-8d5d-2e6ab60d5525.gif#align=left&display=inline&height=424&name=%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6-2019-10-31-11.18.41%20%281%29.gif&originHeight=424&originWidth=824&search=&size=255955&status=done&width=824)

## Quick start
### Install
```bash
npm install --save hover-seconds-do
```

### Usage
- element: The element you want to manipulate (such as the div element "I am a video" in the GIF above)
- secondsLaterDoFn: What do you want to do after the time you set (such as "The mouse disappears, the control bar disappears" in the GIF above)
- seconds: The time you want, the unit: ms (such as the time I set in the GIF above is 2000ms)
- reNormalFn: Return to the original operation (such as the control bar and mouse in the GIF above)

**Note: html references need to be downloaded `dist/index_bundle.js` manually introduced, in React you should manually `import 'hover-seconds-do'` ;**
```js
const hoversd = new window.HoverSD(element, secondsLaterDoFn, seconds, reNormalFn);
hoversd.secondsHoverEX();
// ...
// other code here
// ...
hoversd.removeElemEventListener();
```

## Project operation
Step by step in the terminal：
```bash
git clone git@github.com:vortesnail/hover-seconds-do.git
```
In the clone file terminal
```bash
npm install -g http-server
npm run example
```

Browser window open `http://localhost:8880/example/index.html` then you can view the sample

## Sample code
Let's take the above GIF as an example.：

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>example</title>
  <link rel="stylesheet" href="./index.css">
</head>
<body>
  <div class="box">我是视频
    <div class="test-box">我是视频控制栏</div>
  </div>
  <script src="./index.js"></script>
</body>
</html>
```

**index.css**
```css
.box {
  width: 400px;
  height: 200px;
  background-color: lightskyblue;
  text-align: center;
  line-height: 200px;
  color: #fff;
  position: relative;
  /* cursor: none; */
}

.box .test-box {
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0;
  bottom: 0;
  background-color:lightgray;
  text-align: center;
  line-height: 30px;
}
```

**index.js**
```js
let box = document.querySelector('.box');

function hiddenTestBox() {
  let textBox = document.querySelector('.test-box');
  textBox.style.display = 'none';
  box.style.cursor = 'none';
}

function showTestBox() {
  let textBox = document.querySelector('.test-box');
  textBox.style.display = 'block';
  box.style.cursor = 'default';
}

let hoversd = new window.HoverSD(box, hiddenTestBox, 2000, showTestBox);
hoversd.secondsHoverEX();
// hoversd.removeElemEventListener();
```
## LICENSE
MIT
