/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import './style.css';\n//import Icon from './pizza.jpg';\n//import printMe from './test/menu.js';\n\nfunction pageLoad() {\n    const div = document.createElement(\"div\")\n    const ul = document.createElement(\"ul\")\n    const p = document.createElement(\"p\")\n    const h1 = document.createElement(\"h1\")\n    const img = document.createElement(\"img\")\n\n    const topperList = document.querySelector(\".list\")\n\n    console.log(\"chuj\")\n\n    topperList.appendChild(ul)\n    // create topper list and buttons\n    const topperLiItems = [\"Home\", \"Menu\", \"Contact\"]\n    const topperLiIds = [\"home\", \"menu\", \"contact\"]\n\n    for (let i = 0; i < 3; i++) {\n        const li = document.createElement(\"li\")\n        ul.appendChild(li)\n        li.innerHTML = topperLiItems[i]\n        li.setAttribute(\"id\", topperLiIds[i])\n        \n    }\n    \n}\n\nfunction menu() {\n        const pageBody = document.querySelector(\".pageBody\")\n        pageBody.appendChild(h1)\n        h1.setAttribute(\"class\", \"pageBodyDesc\")\n        h1.innerHTML = \"Welcome to PizzaPalace!\"\n    \n        pageBody.appendChild(img)\n        img.src = Icon;\n}\n\npageLoad()\n\nconsole.log(\"kurwaaaaa\")\n\nprintMe()\n\n//# sourceURL=webpack://js_restaurant_page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;