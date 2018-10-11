/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var moment = __webpack_require__(1);
var _ = __webpack_require__(127);
var ele = document.querySelectorAll('p');

document.addEventListener("DOMContentLoaded", function (event) {
  ele[0].innerText = moment().format();
  ele[1].innerText = _.drop([1, 2, 3], 0);
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 4,
	"./af.js": 4,
	"./ar": 5,
	"./ar-dz": 6,
	"./ar-dz.js": 6,
	"./ar-kw": 7,
	"./ar-kw.js": 7,
	"./ar-ly": 8,
	"./ar-ly.js": 8,
	"./ar-ma": 9,
	"./ar-ma.js": 9,
	"./ar-sa": 10,
	"./ar-sa.js": 10,
	"./ar-tn": 11,
	"./ar-tn.js": 11,
	"./ar.js": 5,
	"./az": 12,
	"./az.js": 12,
	"./be": 13,
	"./be.js": 13,
	"./bg": 14,
	"./bg.js": 14,
	"./bm": 15,
	"./bm.js": 15,
	"./bn": 16,
	"./bn.js": 16,
	"./bo": 17,
	"./bo.js": 17,
	"./br": 18,
	"./br.js": 18,
	"./bs": 19,
	"./bs.js": 19,
	"./ca": 20,
	"./ca.js": 20,
	"./cs": 21,
	"./cs.js": 21,
	"./cv": 22,
	"./cv.js": 22,
	"./cy": 23,
	"./cy.js": 23,
	"./da": 24,
	"./da.js": 24,
	"./de": 25,
	"./de-at": 26,
	"./de-at.js": 26,
	"./de-ch": 27,
	"./de-ch.js": 27,
	"./de.js": 25,
	"./dv": 28,
	"./dv.js": 28,
	"./el": 29,
	"./el.js": 29,
	"./en-au": 30,
	"./en-au.js": 30,
	"./en-ca": 31,
	"./en-ca.js": 31,
	"./en-gb": 32,
	"./en-gb.js": 32,
	"./en-ie": 33,
	"./en-ie.js": 33,
	"./en-il": 34,
	"./en-il.js": 34,
	"./en-nz": 35,
	"./en-nz.js": 35,
	"./eo": 36,
	"./eo.js": 36,
	"./es": 37,
	"./es-do": 38,
	"./es-do.js": 38,
	"./es-us": 39,
	"./es-us.js": 39,
	"./es.js": 37,
	"./et": 40,
	"./et.js": 40,
	"./eu": 41,
	"./eu.js": 41,
	"./fa": 42,
	"./fa.js": 42,
	"./fi": 43,
	"./fi.js": 43,
	"./fo": 44,
	"./fo.js": 44,
	"./fr": 45,
	"./fr-ca": 46,
	"./fr-ca.js": 46,
	"./fr-ch": 47,
	"./fr-ch.js": 47,
	"./fr.js": 45,
	"./fy": 48,
	"./fy.js": 48,
	"./gd": 49,
	"./gd.js": 49,
	"./gl": 50,
	"./gl.js": 50,
	"./gom-latn": 51,
	"./gom-latn.js": 51,
	"./gu": 52,
	"./gu.js": 52,
	"./he": 53,
	"./he.js": 53,
	"./hi": 54,
	"./hi.js": 54,
	"./hr": 55,
	"./hr.js": 55,
	"./hu": 56,
	"./hu.js": 56,
	"./hy-am": 57,
	"./hy-am.js": 57,
	"./id": 58,
	"./id.js": 58,
	"./is": 59,
	"./is.js": 59,
	"./it": 60,
	"./it.js": 60,
	"./ja": 61,
	"./ja.js": 61,
	"./jv": 62,
	"./jv.js": 62,
	"./ka": 63,
	"./ka.js": 63,
	"./kk": 64,
	"./kk.js": 64,
	"./km": 65,
	"./km.js": 65,
	"./kn": 66,
	"./kn.js": 66,
	"./ko": 67,
	"./ko.js": 67,
	"./ky": 68,
	"./ky.js": 68,
	"./lb": 69,
	"./lb.js": 69,
	"./lo": 70,
	"./lo.js": 70,
	"./lt": 71,
	"./lt.js": 71,
	"./lv": 72,
	"./lv.js": 72,
	"./me": 73,
	"./me.js": 73,
	"./mi": 74,
	"./mi.js": 74,
	"./mk": 75,
	"./mk.js": 75,
	"./ml": 76,
	"./ml.js": 76,
	"./mn": 77,
	"./mn.js": 77,
	"./mr": 78,
	"./mr.js": 78,
	"./ms": 79,
	"./ms-my": 80,
	"./ms-my.js": 80,
	"./ms.js": 79,
	"./mt": 81,
	"./mt.js": 81,
	"./my": 82,
	"./my.js": 82,
	"./nb": 83,
	"./nb.js": 83,
	"./ne": 84,
	"./ne.js": 84,
	"./nl": 85,
	"./nl-be": 86,
	"./nl-be.js": 86,
	"./nl.js": 85,
	"./nn": 87,
	"./nn.js": 87,
	"./pa-in": 88,
	"./pa-in.js": 88,
	"./pl": 89,
	"./pl.js": 89,
	"./pt": 90,
	"./pt-br": 91,
	"./pt-br.js": 91,
	"./pt.js": 90,
	"./ro": 92,
	"./ro.js": 92,
	"./ru": 93,
	"./ru.js": 93,
	"./sd": 94,
	"./sd.js": 94,
	"./se": 95,
	"./se.js": 95,
	"./si": 96,
	"./si.js": 96,
	"./sk": 97,
	"./sk.js": 97,
	"./sl": 98,
	"./sl.js": 98,
	"./sq": 99,
	"./sq.js": 99,
	"./sr": 100,
	"./sr-cyrl": 101,
	"./sr-cyrl.js": 101,
	"./sr.js": 100,
	"./ss": 102,
	"./ss.js": 102,
	"./sv": 103,
	"./sv.js": 103,
	"./sw": 104,
	"./sw.js": 104,
	"./ta": 105,
	"./ta.js": 105,
	"./te": 106,
	"./te.js": 106,
	"./tet": 107,
	"./tet.js": 107,
	"./tg": 108,
	"./tg.js": 108,
	"./th": 109,
	"./th.js": 109,
	"./tl-ph": 110,
	"./tl-ph.js": 110,
	"./tlh": 111,
	"./tlh.js": 111,
	"./tr": 112,
	"./tr.js": 112,
	"./tzl": 113,
	"./tzl.js": 113,
	"./tzm": 114,
	"./tzm-latn": 115,
	"./tzm-latn.js": 115,
	"./tzm.js": 114,
	"./ug-cn": 116,
	"./ug-cn.js": 116,
	"./uk": 117,
	"./uk.js": 117,
	"./ur": 118,
	"./ur.js": 118,
	"./uz": 119,
	"./uz-latn": 120,
	"./uz-latn.js": 120,
	"./uz.js": 119,
	"./vi": 121,
	"./vi.js": 121,
	"./x-pseudo": 122,
	"./x-pseudo.js": 122,
	"./yo": 123,
	"./yo.js": 123,
	"./zh-cn": 124,
	"./zh-cn.js": 124,
	"./zh-hk": 125,
	"./zh-hk.js": 125,
	"./zh-tw": 126,
	"./zh-tw.js": 126
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3;

/***/ })
/******/ ]);