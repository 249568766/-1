"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_home=_interopRequireDefault(require("../pages/home"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var _default=new _vueRouter.default({routes:[{path:"/",name:"home",component:_home.default}]});exports.default=_default;