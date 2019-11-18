(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Battle"],{

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Battle.less":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/pages/Battle.less ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._1LIWkX_1JDksQANy931-We {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 16px;\n}\n.JFwB9R9sA7QdMQ3-XS95z {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-left: 20px;\n}\n.oHcN-ld6YpHnmbdABnPPo {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  font-size: 16px;\n}\n._3Tk9KuwWRx6GS4nbj5KFAo {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 16px;\n  margin-left: 16px;\n  padding: 10px;\n  border-radius: 3px;\n}\n", ""]);
// Exports
exports.locals = {
	"players-container": "_1LIWkX_1JDksQANy931-We",
	"player": "JFwB9R9sA7QdMQ3-XS95z",
	"player__input": "oHcN-ld6YpHnmbdABnPPo",
	"submit-btn": "_3Tk9KuwWRx6GS4nbj5KFAo"
};

/***/ }),

/***/ "./src/pages/Battle.js":
/*!*****************************!*\
  !*** ./src/pages/Battle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Battle_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Battle.less */ "./src/pages/Battle.less");
/* harmony import */ var _Battle_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Battle_less__WEBPACK_IMPORTED_MODULE_9__);








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Battle =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Battle, _React$Component);

  function Battle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Battle);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Battle).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (name, e) {
      console.log("e", name, e);

      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, name, e.target.value));
    });

    _this.state = {
      player1: "facebook",
      player2: ""
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Battle, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          player1 = _this$state.player1,
          player2 = _this$state.player2;
      console.log("styles", _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "text-center"
      }, "Instructions"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "column xs-4",
        style: {
          alignItems: 'flex-end'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Enter two Github:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fa fa-users fa-4x"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "column xs-2",
        style: {
          alignItems: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Battle2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fa fa-fighter-jet fa-4x"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "column xs-4",
        style: {
          alignItems: 'flex-start'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "See the winner"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        t: "1573903363815",
        className: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "1460",
        width: "128",
        height: "128"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        d: "M754.389333 423.04A254.208 254.208 0 0 0 768.042667 341.333333V256h42.666666c23.466667 0 42.666667 19.114667 42.666667 42.666667a128.042667 128.042667 0 0 1-98.986667 124.373333M512.042667 512c-94.165333 0-170.666667-76.544-170.666667-170.666667V213.333333h341.333333v128c0 94.122667-76.629333 170.666667-170.666666 170.666667M170.666667 298.666667c0-23.552 19.114667-42.666667 42.666666-42.666667h42.666667v85.333333c0 28.586667 4.864 55.978667 13.568 81.706667A128.042667 128.042667 0 0 1 170.666667 298.666667m469.333333 469.333333v42.666667H384v-42.666667c0-23.552 19.2-42.666667 42.666667-42.666667h170.666666c23.509333 0 42.666667 19.114667 42.666667 42.666667m170.666667-597.333333h-42.666667a42.666667 42.666667 0 0 0-42.666667-42.666667H298.666667a42.666667 42.666667 0 0 0-42.666667 42.666667H213.333333C142.762667 170.666667 85.333333 228.096 85.333333 298.666667c0 117.632 95.701333 213.333333 213.333334 213.333333h23.04A255.573333 255.573333 0 0 0 469.333333 593.493333V640h-42.666666c-70.570667 0-128 57.429333-128 128v85.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h341.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-85.333333c0-70.570667-57.429333-128-128-128h-42.666666v-46.506667A255.36 255.36 0 0 0 702.293333 512H725.333333c117.632 0 213.333333-95.701333 213.333334-213.333333 0-70.570667-57.429333-128-128-128",
        fill: "#f4ea2a",
        "p-id": "1461"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "text-center"
      }, "Players"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a["players-container"]
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a.player
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Player One"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: player1,
        onChange: this.onChange.bind(this, "player1"),
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a.player__input
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a["submit-btn"]
      }, "Submit"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a.player
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Player Two"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        value: player2,
        onChange: this.onChange.bind(this, "player2"),
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a.player__input
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: _Battle_less__WEBPACK_IMPORTED_MODULE_9___default.a["submit-btn"]
      }, "Submit")))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Battle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_7__["hot"])(Battle);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Battle, "Battle", "D:\\react-train\\demo2\\src\\pages\\Battle.js");
  reactHotLoader.register(_default, "default", "D:\\react-train\\demo2\\src\\pages\\Battle.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Battle.less":
/*!*******************************!*\
  !*** ./src/pages/Battle.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?modules!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./Battle.less */ "./node_modules/css-loader/dist/cjs.js?modules!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Battle.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js?modules!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./Battle.less */ "./node_modules/css-loader/dist/cjs.js?modules!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Battle.less",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?modules!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./Battle.less */ "./node_modules/css-loader/dist/cjs.js?modules!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Battle.less");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

}]);
//# sourceMappingURL=Battle.bundle.js.map