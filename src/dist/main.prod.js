"use strict";var _vue=_interopRequireDefault(require("vue")),_App=_interopRequireDefault(require("./App")),_router=_interopRequireDefault(require("./router")),_less=_interopRequireDefault(require("less"));require("./assets/index.less");var _vueAwesomeSwiper=_interopRequireDefault(require("vue-awesome-swiper"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("swiper/css/swiper.css"),_vue.default.use(_less.default),_vue.default.use(_vueAwesomeSwiper.default),_vue.default.config.productionTip=!1,new _vue.default({el:"#app",router:_router.default,components:{App:_App.default},template:"<App/>"});