"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/app-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/CardNavigation.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/CardNavigation.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CardNavigation',
  props: ['pages'],
  computed: {
    routeName: function routeName() {
      return this.$route.name;
    }
  },
  data: function data() {
    return {
      fixedNav: false
    };
  },
  created: function created() {
    var _this = this;
    // Handle fixed mobile navigation
    window.addEventListener('scroll', function () {
      var card = document.getElementById('card-navigation');
      _this.fixedNav = card.getBoundingClientRect().top < 0;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UI_Others_CardNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/UI/Others/CardNavigation */ "./resources/js/components/UI/Others/CardNavigation.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppSettings',
  components: {
    CardNavigation: _components_UI_Others_CardNavigation__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      pages: [{
        title: this.$t('admin_settings.tabs.others'),
        route: 'AppOthers'
      }, {
        title: this.$t('login_and_registration'),
        route: 'AppSignInUp'
      }, {
        title: this.$t('appearance'),
        route: 'AppAppearance'
      }, {
        title: this.$t('Adsense'),
        route: 'AppAdsense'
      }, {
        title: this.$t('homepage'),
        route: 'AppIndex'
      }, {
        title: this.$t('environment'),
        route: 'AppEnvironment'
      }, {
        title: this.$t('server'),
        route: 'AppServer'
      }]
    };
  },
  mounted: function mounted() {
    if (this.$route.path === '/admin/settings') {
      this.$router.push({
        name: 'AppOthers'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/CardNavigation.vue?vue&type=template&id=4ff29600":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/CardNavigation.vue?vue&type=template&id=4ff29600 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "card-navigation",
  style: {
    "height": "62px"
  },
  "class": "mb-7"
};
var _hoisted_2 = {
  "class": "overflow-x-auto whitespace-nowrap"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'fixed top-0 left-0 right-0 z-10 rounded-none bg-white bg-opacity-50 px-6 backdrop-blur-lg backdrop-filter dark:bg-dark-foreground': $data.fixedNav
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.pages, function (page, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-bottom-theme inline-block border-b-2 border-transparent px-4 py-5 text-sm font-bold", {
        'text-theme': $options.routeName === page.route,
        'text-gray-600 dark:text-gray-100': $options.routeName !== page.route
      }]),
      to: {
        name: page.route
      },
      key: i,
      replace: ""
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page.title), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class", "to"]);
  }), 128 /* KEYED_FRAGMENT */))])], 2 /* CLASS */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=template&id=125c86d2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=template&id=125c86d2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card z-10 shadow-card",
  style: {
    "padding-bottom": "0",
    "padding-top": "0"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CardNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CardNavigation");
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Page Tab links"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CardNavigation, {
    pages: $data.pages,
    "class": "-mx-1"
  }, null, 8 /* PROPS */, ["pages"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Page Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]);
}

/***/ }),

/***/ "./resources/js/components/UI/Others/CardNavigation.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/UI/Others/CardNavigation.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardNavigation_vue_vue_type_template_id_4ff29600__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardNavigation.vue?vue&type=template&id=4ff29600 */ "./resources/js/components/UI/Others/CardNavigation.vue?vue&type=template&id=4ff29600");
/* harmony import */ var _CardNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardNavigation.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Others/CardNavigation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardNavigation_vue_vue_type_template_id_4ff29600__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UI/Others/CardNavigation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettings.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettings.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSettings_vue_vue_type_template_id_125c86d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSettings.vue?vue&type=template&id=125c86d2 */ "./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=template&id=125c86d2");
/* harmony import */ var _AppSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSettings.vue?vue&type=script&lang=js */ "./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppSettings_vue_vue_type_template_id_125c86d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Admin/Settings/AppSettings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Others/CardNavigation.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/CardNavigation.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardNavigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/CardNavigation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Others/CardNavigation.vue?vue&type=template&id=4ff29600":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/CardNavigation.vue?vue&type=template&id=4ff29600 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardNavigation_vue_vue_type_template_id_4ff29600__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardNavigation_vue_vue_type_template_id_4ff29600__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardNavigation.vue?vue&type=template&id=4ff29600 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/CardNavigation.vue?vue&type=template&id=4ff29600");


/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=template&id=125c86d2":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=template&id=125c86d2 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettings_vue_vue_type_template_id_125c86d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettings_vue_vue_type_template_id_125c86d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettings.vue?vue&type=template&id=125c86d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Settings/AppSettings.vue?vue&type=template&id=125c86d2");


/***/ })

}]);