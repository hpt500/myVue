webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_index_css__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__axios__ = __webpack_require__(196);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$axios = __WEBPACK_IMPORTED_MODULE_5__axios__["a" /* default */];

// ssr渲染
function createApp(ssrContext) {
    var router = Object(__WEBPACK_IMPORTED_MODULE_4__router__["a" /* createRouter */])();
    var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
        router: router,
        ssrContext: ssrContext,
        render: function render(h) {
            return h(__WEBPACK_IMPORTED_MODULE_3__App_vue__["a" /* default */]);
        }
    });
    return { app: app, router: router };
}

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(80);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c2046b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(190);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(30)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c2046b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04c2046b", Component.options)
  } else {
    hotAPI.reload("data-v-04c2046b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(79)("bf21a3b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c2046b\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c2046b\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "\n.link{\nmargin: 10px;\n}  \n\n", "", {"version":3,"sources":["D:/a_work/vue/vueTest/vue-ssr-demo/src/App.vue"],"names":[],"mappings":";AACA;AACA,aAAa;CACZ","file":"App.vue","sourcesContent":["\n.link{\nmargin: 10px;\n}  \n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_second_vue__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6025ee64_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_second_vue__ = __webpack_require__(189);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(30)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_second_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6025ee64_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_second_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\second.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6025ee64", Component.options)
  } else {
    hotAPI.reload("data-v-6025ee64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(79)("e9336998", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6025ee64\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./second.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6025ee64\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./second.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"second.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "secondcomponent" } },
    [
      _c("el-card", { staticClass: "box-card" }, [
        _c("div", [_vm._v("豆瓣电影排行榜")]),
        _vm._v(" "),
        _c(
          "ul",
          [
            _c("div", { domProps: { innerHTML: _vm._s(_vm.loading) } }),
            _vm._v(" "),
            _vm._l(_vm.items, function(item) {
              return _c("li", [_vm._v(_vm._s(item.title))])
            })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6025ee64", esExports)
  }
}

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("h1", [_vm._v("vue-ssr")]),
      _vm._v(" "),
      _c("router-link", { staticClass: "link", attrs: { to: "/comp1" } }, [
        _vm._v("to comp1")
      ]),
      _vm._v(" "),
      _c("router-link", { staticClass: "link", attrs: { to: "/comp2" } }, [
        _vm._v("to comp2")
      ]),
      _vm._v(" "),
      _c("router-view", { staticClass: "view" }),
      _vm._v(" "),
      _c("second-com")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04c2046b", esExports)
  }
}

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_comp1_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_comp2_vue__ = __webpack_require__(194);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
function createRouter() {
    return new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
        mode: 'history',
        scrollBehavior: function scrollBehavior() {
            return { y: 0 };
        },
        routes: [{
            path: '/comp1',
            component: function component() {
                return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 82));
            }
        }, {
            path: '/comp2',
            component: __WEBPACK_IMPORTED_MODULE_3__components_comp2_vue__["a" /* default */]
        }, { path: '/', redirect: '/comp1' }]
    });
}

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [_vm._v("组件 1")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4839b842", esExports)
  }
}

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_comp2_vue__ = __webpack_require__(84);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4847cfc3_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_comp2_vue__ = __webpack_require__(195);
var disposed = false
var normalizeComponent = __webpack_require__(30)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_comp2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4847cfc3_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_comp2_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\comp2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4847cfc3", Component.options)
  } else {
    hotAPI.reload("data-v-4847cfc3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [_vm._v("组件 2")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4847cfc3", esExports)
  }
}

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiUrl__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);






// axios 配置
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.baseURL = 'http://localhost:8008';

//POST传参序列化 请求之前
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.request.use(function (config) {
    __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
    // if(config.method  === 'post'){
    //   config.data = qs.stringify(config.data);
    // }
    return config;
}, function (error) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

//返回状态判断 请求之后
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.response.use(function (res) {
    // if(!res.data.success){
    //     return Promise.reject(res);
    // }
    return res;
}, function (error) {
    //404等问题可以在这里处理
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

/* harmony default export */ __webpack_exports__["a"] = ({
    post: function post(api, data) {
        return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
            method: 'post', // 请求协议
            url: __WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* default */][api], // 请求的地址
            data: __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(data), // post 请求的数据
            timeout: 10000, // 超时时间, 单位毫秒
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    },
    get: function get(api, params) {
        return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
            method: 'get',
            url: __WEBPACK_IMPORTED_MODULE_3__apiUrl__["a" /* default */][api],
            params: params, // get 请求时带的参数
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
    }
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  think_login: "/think/login",
  think_register: "/think/register",
  think_theme: "/think/theme"
});

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_second_vue__ = __webpack_require__(186);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app',
    components: {
        secondCom: __WEBPACK_IMPORTED_MODULE_0__components_second_vue__["a" /* default */]
    }
});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			items: [],
			loading: "<img src='static/img/loading.gif'>"
		};
	},

	mounted: function mounted() {

		this.$axios.get('https://api.douban.com/v2/movie/top250?count=10').then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		});
	},
	watch: {
		items: function items() {
			console.log("发生变化");
			this.loading = "";
		}
	}
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_comp1_vue__ = __webpack_require__(83);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4839b842_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_comp1_vue__ = __webpack_require__(193);
var disposed = false
var normalizeComponent = __webpack_require__(30)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_comp1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4839b842_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_comp1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\comp1.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4839b842", Component.options)
  } else {
    hotAPI.reload("data-v-4839b842", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      msg: ''
    };
  }
});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      msg: ''
    };
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(100);



var _createApp = Object(__WEBPACK_IMPORTED_MODULE_1__app__["a" /* createApp */])(),
    app = _createApp.app,
    router = _createApp.router;

router.onReady(function () {
    app.$mount('#app');
});

/***/ })

},[97]);