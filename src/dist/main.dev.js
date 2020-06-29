"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _less = _interopRequireDefault(require("less"));

require("./assets/index.less");

var _vueAwesomeSwiper = _interopRequireDefault(require("vue-awesome-swiper"));

require("swiper/css/swiper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './units/swiper/swiper-3.4.2.min.css'
// import './units/swiper/swiper-3.4.2.min.js'
_vue["default"].use(_less["default"]);

_vue["default"].use(_vueAwesomeSwiper["default"]
/* { default options with global component } */
);

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  el: '#app',
  router: _router["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});