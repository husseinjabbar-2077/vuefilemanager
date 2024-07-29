"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/homepage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageTile',
  props: ['title', 'description', 'type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Subscription_PlanPeriodSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Subscription/PlanPeriodSwitcher */ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PricingTables',
  components: {
    PlanPeriodSwitcher: _Subscription_PlanPeriodSwitcher__WEBPACK_IMPORTED_MODULE_0__["default"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.HardDriveIcon,
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CheckIcon
  },
  computed: {
    intervalPlanType: function intervalPlanType() {
      return this.isSelectedYearlyPlans ? 'year' : 'month';
    },
    yearlyPlans: function yearlyPlans() {
      return this.plans.data.filter(function (plan) {
        return plan.data.attributes.interval === 'year';
      });
    }
  },
  data: function data() {
    return {
      plans: undefined,
      isSelectedYearlyPlans: false
    };
  },
  created: function created() {
    var _this = this;
    axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('api/subscriptions/plans').then(function (response) {
      _this.plans = response.data;
      _this.$emit('load', response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PageTitle */ "./resources/js/components/IndexPage/Components/PageTitle.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexGetStarted',
  components: {
    InfoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.InfoIcon,
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.UploadCloudIcon,
    ShareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ShareIcon,
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon,
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FolderPlusIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.HardDriveIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.SettingsIcon,
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.Trash2Icon,
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.SearchIcon,
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CloudIcon,
    PageTitle: _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ImageIcon,
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.GridIcon,
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.LinkIcon,
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.StarIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.EyeIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['index']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexHeroScreenshot',
  components: {
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FolderPlusIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.HardDriveIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SettingsIcon,
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Trash2Icon,
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SearchIcon,
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ImageIcon,
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.GridIcon,
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.LinkIcon,
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.StarIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.EyeIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['config']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PageTitle */ "./resources/js/components/IndexPage/Components/PageTitle.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexMainFeatures',
  components: {
    PageTitle: _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.HardDriveIcon,
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CloudIcon,
    UserIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.UserIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['index']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexNavigation',
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['config', 'index', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo_horizontal ? this.config.app_logo_horizontal_dark : this.config.app_logo_horizontal;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageFooter',
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['config', 'isDarkMode'])), {}, {
    logoSrc: function logoSrc() {
      return this.isDarkMode && this.config.app_logo_horizontal ? this.config.app_logo_horizontal_dark : this.config.app_logo_horizontal;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons_icons_HardDriveIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons/icons/HardDriveIcon */ "./node_modules/vue-feather-icons/icons/HardDriveIcon.js");
/* harmony import */ var _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PageTitle */ "./resources/js/components/IndexPage/Components/PageTitle.vue");
/* harmony import */ var _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Buttons/AuthButton */ "./resources/js/components/UI/Buttons/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPageHeader',
  components: {
    PageTitle: _Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.CreditCardIcon,
    HardDriveIcon: vue_feather_icons_icons_HardDriveIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthButton: _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['index', 'config']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_PricingTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/PricingTables */ "./resources/js/components/IndexPage/Components/PricingTables.vue");
/* harmony import */ var _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Buttons/AuthButton */ "./resources/js/components/UI/Buttons/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexPricingTables',
  components: {
    PricingTables: _Components_PricingTables__WEBPACK_IMPORTED_MODULE_0__["default"],
    AuthButton: _UI_Buttons_AuthButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.CloudIcon
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['index', 'config'])),
  data: function data() {
    return {
      isEmpty: false
    };
  },
  methods: {
    pricingLoaded: function pricingLoaded(pricing) {
      if (pricing.length === 0) this.isEmpty = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SwitchInput',
  props: ['label', 'name', 'state', 'info', 'input', 'isDisabled'],
  data: function data() {
    return {
      isSwitched: undefined
    };
  },
  methods: {
    changeState: function changeState() {
      if (this.isDisabled) return;
      this.isSwitched = !this.isSwitched;
      this.$emit('input', this.isSwitched);
    }
  },
  mounted: function mounted() {
    this.isSwitched = this.state;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inputs/SwitchInput */ "./resources/js/components/Inputs/SwitchInput.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PlanPeriodSwitcher',
  components: {
    SwitchInput: _Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    'isSelectedYearlyPlans': function isSelectedYearlyPlans() {
      this.$emit('input', this.isSelectedYearlyPlans);
    }
  },
  data: function data() {
    return {
      isSelectedYearlyPlans: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthContent',
  props: ['loading', 'icon', 'text'],
  components: {
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ChevronRightIcon,
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.RefreshCwIcon
  },
  data: function data() {
    return {
      isVisible: false
    };
  },
  created: function created() {
    this.isVisible = this.visible;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_IndexPage_IndexHeroScreenshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/IndexPage/IndexHeroScreenshot */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue");
/* harmony import */ var _components_IndexPage_IndexPricingTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/IndexPage/IndexPricingTables */ "./resources/js/components/IndexPage/IndexPricingTables.vue");
/* harmony import */ var _components_IndexPage_IndexMainFeatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/IndexPage/IndexMainFeatures */ "./resources/js/components/IndexPage/IndexMainFeatures.vue");
/* harmony import */ var _components_IndexPage_IndexNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IndexPage/IndexNavigation */ "./resources/js/components/IndexPage/IndexNavigation.vue");
/* harmony import */ var _components_IndexPage_IndexPageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/IndexPage/IndexPageHeader */ "./resources/js/components/IndexPage/IndexPageHeader.vue");
/* harmony import */ var _components_IndexPage_IndexGetStarted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/IndexPage/IndexGetStarted */ "./resources/js/components/IndexPage/IndexGetStarted.vue");
/* harmony import */ var _components_IndexPage_IndexPageFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/IndexPage/IndexPageFooter */ "./resources/js/components/IndexPage/IndexPageFooter.vue");
/* harmony import */ var _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Homepage',
  components: {
    HeroScreenshot: _components_IndexPage_IndexHeroScreenshot__WEBPACK_IMPORTED_MODULE_0__["default"],
    PricingTables: _components_IndexPage_IndexPricingTables__WEBPACK_IMPORTED_MODULE_1__["default"],
    MainFeatures: _components_IndexPage_IndexMainFeatures__WEBPACK_IMPORTED_MODULE_2__["default"],
    GetStarted: _components_IndexPage_IndexGetStarted__WEBPACK_IMPORTED_MODULE_5__["default"],
    Navigation: _components_IndexPage_IndexNavigation__WEBPACK_IMPORTED_MODULE_3__["default"],
    PageHeader: _components_IndexPage_IndexPageHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageFooter: _components_IndexPage_IndexPageFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    Spinner: _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapGetters)(['config'])),
  data: function data() {
    return {
      isLoading: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    // Get page content
    axios__WEBPACK_IMPORTED_MODULE_9__["default"].get('/api/settings', {
      params: {
        column: 'allow_homepage|footer_content|get_started_description|get_started_title|pricing_description|pricing_title|feature_description_3|feature_title_3|feature_description_2|feature_title_2|feature_description_1|feature_title_1|features_description|features_title|header_description|header_title|section_get_started|section_pricing_content|section_feature_boxes|section_features'
      }
    }).then(function (response) {
      _this.$store.commit('SET_INDEX_CONTENT', response.data);
    })["finally"](function () {
      _this.isLoading = false;
    });
  },
  created: function created() {
    this.$scrollTop();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4818f36e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = {
  key: 0,
  "class": "description"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-title left", $props.type])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "title",
    innerHTML: $props.title
  }, null, 8 /* PROPS */, _hoisted_1), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-513863ea"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "text-center"
};
var _hoisted_2 = {
  key: 1,
  "class": "plans-wrapper"
};
var _hoisted_3 = {
  "class": "plan-wrapper"
};
var _hoisted_4 = {
  "class": "plan-header mb-8"
};
var _hoisted_5 = {
  "class": "icon"
};
var _hoisted_6 = {
  "class": "title"
};
var _hoisted_7 = {
  "class": "description"
};
var _hoisted_8 = {
  "class": "flex items-center"
};
var _hoisted_9 = {
  key: 0,
  "class": "text-sm font-bold"
};
var _hoisted_10 = {
  key: 1,
  "class": "text-sm font-bold"
};
var _hoisted_11 = {
  "class": "plan-footer mt-8"
};
var _hoisted_12 = {
  "class": "price text-theme"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PlanPeriodSwitcher = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlanPeriodSwitcher");
  var _component_hard_drive_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hard-drive-icon");
  var _component_CheckIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.plans && $options.yearlyPlans.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PlanPeriodSwitcher, {
    key: 0,
    modelValue: $data.isSelectedYearlyPlans,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.isSelectedYearlyPlans = $event;
    }),
    "class": "inline-block"
  }, null, 8 /* PROPS */, ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.plans ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_ctx.plan.data.attributes.interval === $options.intervalPlanType ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.plans.data, function (plan) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("article", {
      "class": "plan",
      key: plan.data.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hard_drive_icon, {
      "class": "text-theme mx-auto",
      size: "26"
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.data.attributes.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.data.attributes.description), 1 /* TEXT */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(plan.data.attributes.features, function (value, key, i) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        "class": "justify-center flex py-1.5",
        key: i
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckIcon, {
        size: "18",
        "class": "svg-stroke-theme mr-2"
      }), value !== -1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(key === 'max_team_members' ? 'max_team_members_total' : key, {
        value: value
      })), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), value === -1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("".concat(key, ".unlimited"))), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.data.attributes.price) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("interval.".concat(plan.data.attributes.interval))), 1 /* TEXT */)])])]);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e018e898"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0,
  "class": "page-wrapper large get-started"
};
var _hoisted_2 = {
  "class": "content"
};
var _hoisted_3 = {
  "class": "icons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PageTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageTitle");
  var _component_chevron_right_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-right-icon");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_cloud_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("cloud-icon");
  var _component_hard_drive_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hard-drive-icon");
  var _component_settings_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("settings-icon");
  var _component_image_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-icon");
  var _component_link_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("link-icon");
  var _component_trash2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trash2-icon");
  var _component_search_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-icon");
  var _component_eye_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("eye-icon");
  var _component_star_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("star-icon");
  var _component_folder_plus_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("folder-plus-icon");
  var _component_grid_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grid-icon");
  var _component_share_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("share-icon");
  var _component_upload_cloud_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("upload-cloud-icon");
  var _component_info_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("info-icon");
  return _ctx.index.section_get_started === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageTitle, {
    "class": "page-title",
    type: "center",
    title: _ctx.index.get_started_title,
    description: _ctx.index.get_started_description
  }, null, 8 /* PROPS */, ["title", "description"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    tag: "button",
    "class": "get-started-button bg-theme-800 hover-bg-theme shadow-theme",
    to: {
      name: 'SignUp'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('sign_up_now')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_chevron_right_icon, {
        size: "22"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_cloud_icon, {
    size: "790",
    "class": "cloud-bg svg-color-theme"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hard_drive_icon, {
    size: "42",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_settings_icon, {
    size: "22",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_icon, {
    size: "50",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_link_icon, {
    size: "24",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_trash2_icon, {
    size: "40",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_icon, {
    size: "18",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_eye_icon, {
    size: "36",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_star_icon, {
    size: "34",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_folder_plus_icon, {
    size: "20",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grid_icon, {
    size: "28",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_share_icon, {
    size: "32",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_folder_plus_icon, {
    size: "48",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_icon, {
    size: "34",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_star_icon, {
    size: "22",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_upload_cloud_icon, {
    size: "42",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grid_icon, {
    size: "18",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_settings_icon, {
    size: "32",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_link_icon, {
    size: "36",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hard_drive_icon, {
    size: "22",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_info_icon, {
    size: "36",
    "class": "icon"
  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-71efc52e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "page-wrapper large hero-screenshot"
};
var _hoisted_2 = ["alt"];
var _hoisted_3 = ["alt"];
var _hoisted_4 = {
  "class": "icons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_link_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("link-icon");
  var _component_image_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("image-icon");
  var _component_hard_drive_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hard-drive-icon");
  var _component_folder_plus_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("folder-plus-icon");
  var _component_settings_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("settings-icon");
  var _component_search_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-icon");
  var _component_star_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("star-icon");
  var _component_trash2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trash2-icon");
  var _component_eye_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("eye-icon");
  var _component_grid_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grid-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "hero-light",
    src: "/assets/images/vuefilemanager-screenshot-light.png",
    alt: _ctx.config.app_name
  }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "hero-dark",
    src: "/assets/images/vuefilemanager-screenshot-dark.png",
    alt: _ctx.config.app_name
  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_link_icon, {
    size: "20",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_image_icon, {
    size: "38",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hard_drive_icon, {
    size: "34",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_folder_plus_icon, {
    size: "40",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_settings_icon, {
    size: "18",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_icon, {
    size: "24",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_star_icon, {
    size: "18",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_trash2_icon, {
    size: "32",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_icon, {
    size: "18",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_eye_icon, {
    size: "30",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_star_icon, {
    size: "30",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_folder_plus_icon, {
    size: "16",
    "class": "icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grid_icon, {
    size: "20",
    "class": "icon"
  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2f87e6bf"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "main-features page-wrapper medium"
};
var _hoisted_2 = {
  key: 1,
  "class": "content"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "hero"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "/assets/images/hero-Illustration.svg",
    alt: "Hero"
  })], -1 /* HOISTED */);
});
var _hoisted_4 = {
  "class": "features"
};
var _hoisted_5 = {
  "class": "feature"
};
var _hoisted_6 = {
  "class": "icon"
};
var _hoisted_7 = {
  "class": "title"
};
var _hoisted_8 = {
  "class": "description"
};
var _hoisted_9 = {
  "class": "feature"
};
var _hoisted_10 = {
  "class": "icon"
};
var _hoisted_11 = {
  "class": "title"
};
var _hoisted_12 = {
  "class": "description"
};
var _hoisted_13 = {
  "class": "feature"
};
var _hoisted_14 = {
  "class": "icon"
};
var _hoisted_15 = {
  "class": "title"
};
var _hoisted_16 = {
  "class": "description"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PageTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageTitle");
  var _component_cloud_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("cloud-icon");
  var _component_user_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("user-icon");
  var _component_hard_drive_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hard-drive-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_ctx.index.section_features === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PageTitle, {
    key: 0,
    type: "center",
    title: _ctx.index.features_title,
    description: _ctx.index.features_description
  }, null, 8 /* PROPS */, ["title", "description"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.index.section_feature_boxes === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_cloud_icon, {
    size: "24"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.feature_title_1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.feature_description_1), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_user_icon, {
    size: "24"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.feature_title_2), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.feature_description_2), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hard_drive_icon, {
    size: "24"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.feature_title_3), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.feature_description_3), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-11c30cfd"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "main-navigation"
};
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  key: 1,
  "class": "logo-text"
};
var _hoisted_4 = {
  "class": "navigation"
};
var _hoisted_5 = {
  "class": "navigation-links"
};
var _hoisted_6 = {
  key: 0,
  "class": "navigation-links"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  key: 1,
  "class": "navigation-links"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Homepage'
    },
    tag: "div",
    "class": "logo"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.config.app_logo_horizontal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
        key: 0,
        "class": "max-h-6",
        src: _ctx.$getImage($options.logoSrc),
        alt: _ctx.config.app_name
      }, null, 8 /* PROPS */, _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.config.app_logo_horizontal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("b", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.config.app_name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<li v-if=\"config.stripe_public_key\">\r\n                    <a href=\"/#pricing\">\r\n                        {{ $t('pricing') }}\r\n                    </a>\r\n                </li>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'ContactUs'
    },
    "class": "hover-text-theme"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('contact_us')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), !_ctx.config.isAuthenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'SignIn'
    },
    "class": "hover-text-theme"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('log_in')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), _ctx.config.userRegistration ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "cta-button text-theme bg-theme-100",
    to: {
      name: 'SignUp'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('page_index.menu.sign_in')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.config.isAuthenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "cta-button text-theme bg-theme-100",
    to: {
      name: 'Files'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('go_to_files')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "cta-button log-in text-theme bg-theme-100",
    to: {
      name: 'SignIn'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('log_in')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4b1f961a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "page-wrapper medium"
};
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  key: 1,
  "class": "logo-text"
};
var _hoisted_4 = {
  "class": "navigation-links"
};
var _hoisted_5 = {
  "class": "navigation-links"
};
var _hoisted_6 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Homepage'
    },
    tag: "div",
    "class": "logo"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.config.app_logo_horizontal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
        key: 0,
        src: _ctx.$getImage($options.logoSrc),
        alt: _ctx.config.app_name,
        "class": "mx-auto max-h-6"
      }, null, 8 /* PROPS */, _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.config.app_logo_horizontal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("b", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.config.app_name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <li>\r\n                <a href=\"/#pricing\">\r\n                    {{ $t('pricing') }}\r\n                </a>\r\n            </li>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'ContactUs'
    },
    "class": "hover-text-theme"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('contact_us')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [_ctx.legal.visibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.config.legal, function (legal, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'DynamicPage',
        params: {
          slug: legal.slug
        }
      },
      "class": "hover-text-theme"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(legal.title), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "copyright",
    innerHTML: _ctx.config.app_footer
  }, null, 8 /* PROPS */, _hoisted_6)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-08bace36"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "main-header page-wrapper medium"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 2,
  "class": "features"
};
var _hoisted_4 = {
  "class": "feature"
};
var _hoisted_5 = {
  "class": "feature-title"
};
var _hoisted_6 = {
  "class": "feature"
};
var _hoisted_7 = {
  "class": "feature-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PageTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageTitle");
  var _component_AuthButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AuthButton");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_credit_card_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("credit-card-icon");
  var _component_hard_drive_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hard-drive-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageTitle, {
    title: _ctx.index.header_title,
    description: _ctx.index.header_description
  }, null, 8 /* PROPS */, ["title", "description"]), !_ctx.config.isAuthenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("User registration button"), _ctx.config.userRegistration ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 0,
    "class": "sign-up-button",
    to: {
      name: 'SignUp'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AuthButton, {
        "class": "button",
        icon: "chevron-right",
        text: _ctx.$t('page_index.sign_up_button')
      }, null, 8 /* PROPS */, ["text"])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("User login button"), !_ctx.config.userRegistration ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 1,
    "class": "sign-up-button",
    to: {
      name: 'SignIn'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AuthButton, {
        "class": "button",
        icon: "chevron-right",
        text: _ctx.$t('log_in')
      }, null, 8 /* PROPS */, ["text"])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.config.subscriptionType === 'fixed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_credit_card_icon, {
    size: "19",
    "class": "feature-icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('page_index.sign_feature_1')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_hard_drive_icon, {
    size: "19",
    "class": "feature-icon"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('page_index.sign_feature_2', {
    defaultSpace: _ctx.config.storageDefaultSpaceFormatted
  })), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-19994af2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0,
  "class": "page-wrapper medium pricing"
};
var _hoisted_2 = {
  id: "pricing",
  "class": "page-title center"
};
var _hoisted_3 = ["innerHTML"];
var _hoisted_4 = {
  "class": "page-title center"
};
var _hoisted_5 = {
  "class": "description"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PricingTables = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PricingTables");
  var _component_AuthButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AuthButton");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_cloud_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("cloud-icon");
  return !$data.isEmpty && _ctx.index.section_pricing_content === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "title",
    innerHTML: _ctx.index.pricing_title
  }, null, 8 /* PROPS */, _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PricingTables, {
    "class": "pricing-tables",
    onLoad: $options.pricingLoaded
  }, null, 8 /* PROPS */, ["onLoad"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index.pricing_description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "sign-up-button",
    to: {
      name: 'SignUp'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AuthButton, {
        "class": "button",
        icon: "chevron-right",
        text: _ctx.$t('page_index.sign_up_button')
      }, null, 8 /* PROPS */, ["text"])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_cloud_icon, {
    size: "800",
    "class": "cloud-bg"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_cloud_icon, {
    size: "560",
    "class": "cloud-bg"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-537cb35b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "switch-content"
};
var _hoisted_2 = {
  key: 0,
  "class": "input-label"
};
var _hoisted_3 = {
  key: 1,
  "class": "input-info"
};
var _hoisted_4 = {
  "class": "switch-content text-right"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "switch-button"
  }, null, -1 /* HOISTED */);
});
var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label) + ": ", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.info), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["switch", {
      active: $props.state
    }]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.changeState && $options.changeState.apply($options, arguments);
    })
  }, [].concat(_hoisted_6), 2 /* CLASS */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-2 text-right"
};
var _hoisted_2 = {
  "class": "relative inline-block w-12 select-none align-middle"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SwitchInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SwitchInput");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'text-gray-400': !$data.isSelectedYearlyPlans
    }, "cursor-pointer text-xs font-bold"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('billed_annually')), 3 /* TEXT, CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SwitchInput, {
    "class": "scale-75 transform",
    modelValue: $data.isSelectedYearlyPlans,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.isSelectedYearlyPlans = $event;
    }),
    state: $data.isSelectedYearlyPlans
  }, null, 8 /* PROPS */, ["modelValue", "state"])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-97e201b0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"
};
var _hoisted_2 = {
  "class": "pr-1 text-lg font-extrabold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_refresh_cw_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("refresh-cw-icon");
  var _component_chevron_right_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-right-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text), 1 /* TEXT */), $props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_refresh_cw_icon, {
    key: 0,
    size: "20",
    "class": "vue-feather text-theme sync-alt -mr-1"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$props.loading && $props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_chevron_right_icon, {
    key: 1,
    size: "20",
    "class": "vue-feather text-theme -mr-1"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "landing-page"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = ["innerHTML"];
var _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navigation");
  var _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");
  var _component_HeroScreenshot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HeroScreenshot");
  var _component_MainFeatures = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MainFeatures");
  var _component_PricingTables = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PricingTables");
  var _component_GetStarted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GetStarted");
  var _component_PageFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageFooter");
  var _component_Spinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Spinner");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [!$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Navigation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation, {
    "class": "page-wrapper medium"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("VueFileManager ScreenShot"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_HeroScreenshot), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Google Adsense banner"), _ctx.config.allowedAdsense && _ctx.config.adsenseBanner03 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    innerHTML: _ctx.config.adsenseBanner03,
    "class": "mb-5 min-h-[120px]"
  }, null, 8 /* PROPS */, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Main Features"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MainFeatures), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Pricing Tables"), _ctx.config.subscriptionType === 'fixed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PricingTables, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Get Started Call To Action"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GetStarted), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Footer"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageFooter)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spinner)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-4818f36e] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-4818f36e] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-4818f36e] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-4818f36e] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-4818f36e] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-4818f36e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-4818f36e] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-4818f36e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-4818f36e] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-4818f36e] {\n    width: 100%;\n}\n}\n.page-title[data-v-4818f36e] {\n  position: relative;\n  z-index: 1;\n}\n.page-title.center[data-v-4818f36e] {\n  text-align: center;\n}\n.page-title.center .title[data-v-4818f36e] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 780px;\n}\n.page-title.center .description[data-v-4818f36e] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title .title[data-v-4818f36e] {\n  max-width: 580px;\n  font-size: 48px;\n  font-weight: 800;\n  line-height: 1.3;\n  margin-bottom: 15px;\n}\n.page-title .title > span[data-v-4818f36e] {\n  font-size: 48px;\n}\n.page-title .description[data-v-4818f36e] {\n  max-width: 580px;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.65;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 960px) {\n.page-title .title[data-v-4818f36e] {\n    max-width: 100%;\n    font-size: 32px;\n    line-height: 1.25;\n    margin-bottom: 15px;\n}\n.page-title .title > span[data-v-4818f36e] {\n    font-size: 32px;\n}\n.page-title .description[data-v-4818f36e] {\n    max-width: 100%;\n    font-size: 1em;\n    line-height: 1.6;\n    margin-bottom: 30px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".plans-wrapper[data-v-513863ea] {\n  box-shadow: 0 7px 20px 5px hsla(220, 36%, 16%, 0.05);\n  border-radius: 8px;\n  background: white;\n}\n.plan[data-v-513863ea] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 55px 25px 75px;\n}\n.plan[data-v-513863ea]:last-child {\n  border-right: none;\n}\n.plan .plan-header .icon path[data-v-513863ea],\n.plan .plan-header .icon line[data-v-513863ea],\n.plan .plan-header .icon polyline[data-v-513863ea],\n.plan .plan-header .icon rect[data-v-513863ea],\n.plan .plan-header .icon circle[data-v-513863ea] {\n  color: inherit;\n}\n.plan .plan-header .title[data-v-513863ea] {\n  font-size: 1.5625em;\n  font-weight: 800;\n  padding-top: 10px;\n}\n.plan .plan-header .description[data-v-513863ea] {\n  font-size: 0.875em;\n  font-weight: 600;\n}\n.plan .plan-features[data-v-513863ea] {\n  margin: 55px 0;\n}\n.plan .plan-features .storage-size[data-v-513863ea] {\n  font-size: 3em;\n  font-weight: 900;\n  line-height: 1.1;\n}\n.plan .plan-features .storage-description[data-v-513863ea] {\n  display: block;\n  font-size: 0.9375em;\n  font-weight: 800;\n}\n.plan .plan-footer .sign-in-button[data-v-513863ea] {\n  width: 100%;\n  text-align: center;\n}\n.plan .plan-footer .price[data-v-513863ea] {\n  font-size: 1.125em;\n  display: block;\n  padding-top: 5px;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-513863ea] {\n  font-size: 0.6875em;\n  color: #1B2539;\n  display: block;\n  font-weight: 300;\n  opacity: 0.45;\n  margin-top: 5px;\n}\n.plans-wrapper[data-v-513863ea] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media only screen and (max-width: 960px) {\n.plans-wrapper[data-v-513863ea] {\n    display: block;\n    margin: 0;\n}\n.plans-wrapper .plan[data-v-513863ea] {\n    padding: 30px 25px;\n    border-bottom: 1px solid #f7f7f7;\n    border-right: none;\n}\n}\n.dark .plans-wrapper[data-v-513863ea] {\n  background: #1e2024;\n}\n.dark .plan[data-v-513863ea] {\n  border-color: rgba(255, 255, 255, 0.02) !important;\n}\n.dark .plan .plan-wrapper[data-v-513863ea] {\n  background: #1e2024;\n}\n.dark .plan .plan-header .title[data-v-513863ea] {\n  color: #bec6cf;\n}\n.dark .plan .plan-header .description[data-v-513863ea] {\n  color: #7d858c;\n}\n.dark .plan .plan-features .storage-size[data-v-513863ea] {\n  color: #bec6cf;\n}\n.dark .plan .plan-features .storage-description[data-v-513863ea] {\n  color: #bec6cf;\n}\n.dark .plan .plan-footer .sign-in-button[data-v-513863ea] {\n  background: rgba(0, 188, 126, 0.1);\n}\n.dark .plan .plan-footer .sign-in-button > .content[data-v-513863ea] {\n  color: #00BC7E;\n}\n.dark .plan .plan-footer .price .vat-disclaimer[data-v-513863ea] {\n  color: #bec6cf;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-e018e898] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-e018e898] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-e018e898] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-e018e898] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-e018e898] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-e018e898] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-e018e898] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-e018e898] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-e018e898] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-e018e898] {\n    width: 100%;\n}\n}\n.icons .icon[data-v-e018e898] {\n  position: absolute;\n}\n.icons .icon[data-v-e018e898]:nth-child(20) {\n  bottom: -37%;\n  left: 37%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(20) circle[data-v-e018e898],\n.icons .icon:nth-child(20) line[data-v-e018e898] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-e018e898]:nth-child(19) {\n  bottom: -21%;\n  left: 23.5%;\n  transform: rotate(-20deg);\n}\n.icons .icon:nth-child(19) path[data-v-e018e898],\n.icons .icon:nth-child(19) line[data-v-e018e898] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-e018e898]:nth-child(18) {\n  bottom: -4%;\n  left: 26.5%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(18) path[data-v-e018e898] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-e018e898]:nth-child(17) {\n  bottom: -5%;\n  left: 8.5%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(16) {\n  top: 86%;\n  left: 17%;\n  transform: rotate(18deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(15) {\n  top: 64%;\n  left: 17%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(15) polyline[data-v-e018e898],\n.icons .icon:nth-child(15) line[data-v-e018e898],\n.icons .icon:nth-child(15) path[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-e018e898]:nth-child(14) {\n  top: 44%;\n  left: 28%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(14) polygon[data-v-e018e898] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-e018e898]:nth-child(13) {\n  top: 33%;\n  left: 16%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(12) {\n  top: 23%;\n  left: 32%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(12) line[data-v-e018e898],\n.icons .icon:nth-child(12) path[data-v-e018e898] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-e018e898]:nth-child(1) {\n  top: 35%;\n  right: 49%;\n  transform: rotate(-11deg);\n}\n.icons .icon:nth-child(1) line[data-v-e018e898],\n.icons .icon:nth-child(1) path[data-v-e018e898] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-e018e898]:nth-child(2) {\n  top: 12%;\n  right: 45%;\n  transform: rotate(0);\n}\n.icons .icon:nth-child(2) circle[data-v-e018e898],\n.icons .icon:nth-child(2) path[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-e018e898]:nth-child(3) {\n  top: 30%;\n  right: 30%;\n  transform: rotate(20deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(4) {\n  top: 14%;\n  right: 14.5%;\n  transform: rotate(-1deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(5) {\n  top: 62%;\n  right: 15.5%;\n  transform: rotate(21deg);\n}\n.icons .icon:nth-child(5) polyline[data-v-e018e898],\n.icons .icon:nth-child(5) path[data-v-e018e898],\n.icons .icon:nth-child(5) line[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-e018e898]:nth-child(6) {\n  top: 66%;\n  right: 26.5%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(7) {\n  bottom: 3%;\n  right: 21.5%;\n  transform: rotate(16deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(8) {\n  bottom: -13%;\n  right: 16.5%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(8) polygon[data-v-e018e898] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-e018e898]:nth-child(9) {\n  bottom: -32%;\n  right: 27%;\n  transform: rotate(-20deg);\n}\n.icons .icon[data-v-e018e898]:nth-child(10) {\n  bottom: -5%;\n  right: 34%;\n  transform: rotate(16deg);\n}\n.icons .icon:nth-child(10) rect[data-v-e018e898] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-e018e898]:nth-child(11) {\n  bottom: -28%;\n  right: 44%;\n  transform: rotate(-12deg);\n}\n.icons .icon:nth-child(11) polyline[data-v-e018e898],\n.icons .icon:nth-child(11) line[data-v-e018e898],\n.icons .icon:nth-child(11) path[data-v-e018e898] {\n  stroke: #FE6057;\n}\n.cloud-bg[data-v-e018e898] {\n  z-index: 0;\n  position: absolute;\n  top: 70px;\n  right: 60px;\n  transform: scale(-1, 1) rotate(13deg);\n  opacity: 0.1;\n}\n.cloud-bg path[data-v-e018e898] {\n  stroke: none;\n}\n.page-title[data-v-e018e898] {\n  padding-top: 340px;\n}\n.get-started-button[data-v-e018e898] {\n  display: flex;\n  align-items: center;\n  outline: none;\n  border: none;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  padding: 20px 36px;\n  border-radius: 6px;\n  margin-bottom: 395px;\n  transition: 150ms all ease;\n  position: relative;\n  z-index: 1;\n}\n.get-started-button .content[data-v-e018e898] {\n  font-size: 1.1875em;\n  font-weight: 700;\n  margin-right: 8px;\n  color: white;\n}\n.get-started-button polyline[data-v-e018e898] {\n  stroke: white;\n}\n@media only screen and (max-width: 1190px) {\n.get-started-button[data-v-e018e898] {\n    margin-bottom: 280px;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-title[data-v-e018e898] {\n    padding-top: 20px;\n}\n.get-started-button[data-v-e018e898] {\n    margin-bottom: 30px;\n}\n.cloud-bg[data-v-e018e898],\n  .icons[data-v-e018e898] {\n    display: none;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-71efc52e] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-71efc52e] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-71efc52e] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-71efc52e] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-71efc52e] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-71efc52e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-71efc52e] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-71efc52e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-71efc52e] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-71efc52e] {\n    width: 100%;\n}\n}\n.icons .icon[data-v-71efc52e] {\n  z-index: 0;\n  position: absolute;\n}\n.icons .icon[data-v-71efc52e]:nth-child(1) {\n  top: -14%;\n  right: 2%;\n}\n.icons .icon[data-v-71efc52e]:nth-child(2) {\n  top: -5%;\n  right: 14%;\n  transform: rotate(19deg);\n}\n.icons .icon[data-v-71efc52e]:nth-child(3) {\n  top: -6.5%;\n  right: 28.5%;\n  transform: rotate(-12deg);\n}\n.icons .icon:nth-child(3) line[data-v-71efc52e],\n.icons .icon:nth-child(3) path[data-v-71efc52e] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-71efc52e]:nth-child(4) {\n  top: -9.5%;\n  right: 41.5%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(4) path[data-v-71efc52e],\n.icons .icon:nth-child(4) line[data-v-71efc52e] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-71efc52e]:nth-child(5) {\n  top: -16%;\n  right: 26%;\n}\n.icons .icon:nth-child(5) circle[data-v-71efc52e],\n.icons .icon:nth-child(5) path[data-v-71efc52e] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-71efc52e]:nth-child(6) {\n  top: -13%;\n  right: 49%;\n}\n.icons .icon[data-v-71efc52e]:nth-child(7) {\n  top: 2.5%;\n  right: 46%;\n}\n.icons .icon:nth-child(7) polygon[data-v-71efc52e] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-71efc52e]:nth-child(8) {\n  top: 13%;\n  right: 2.5%;\n  transform: rotate(22deg);\n}\n.icons .icon:nth-child(8) polyline[data-v-71efc52e],\n.icons .icon:nth-child(8) path[data-v-71efc52e],\n.icons .icon:nth-child(8) line[data-v-71efc52e] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-71efc52e]:nth-child(9) {\n  top: 14%;\n  right: 11%;\n}\n.icons .icon:nth-child(9) circle[data-v-71efc52e],\n.icons .icon:nth-child(9) line[data-v-71efc52e] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-71efc52e]:nth-child(10) {\n  top: 29%;\n  right: 7%;\n  transform: rotate(19deg);\n}\n.icons .icon[data-v-71efc52e]:nth-child(11) {\n  top: 38%;\n  right: 3%;\n}\n.icons .icon:nth-child(11) polygon[data-v-71efc52e] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-71efc52e]:nth-child(12) {\n  top: 50%;\n  right: 11.5%;\n  transform: rotate(-22deg);\n}\n.icons .icon[data-v-71efc52e]:nth-child(13) {\n  top: 34%;\n  right: 16%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(13) rect[data-v-71efc52e] {\n  stroke: #00BC7E;\n}\n.hero-screenshot[data-v-71efc52e] {\n  position: relative;\n  z-index: 1;\n  padding-top: 75px;\n  padding-bottom: 130px;\n}\n.hero-screenshot img[data-v-71efc52e] {\n  border-radius: 8px;\n  width: 80%;\n  box-shadow: 0 7px 255px rgba(25, 54, 60, 0.1);\n}\n.hero-screenshot img.hero-dark[data-v-71efc52e] {\n  display: none;\n}\n@media only screen and (max-width: 890px) {\n.icons[data-v-71efc52e] {\n    display: none;\n}\n.hero-screenshot[data-v-71efc52e] {\n    padding-top: 40px;\n    padding-bottom: 90px;\n}\n.hero-screenshot img[data-v-71efc52e] {\n    width: 100%;\n}\n}\n.dark .hero-screenshot img.hero-light[data-v-71efc52e] {\n  display: none;\n}\n.dark .hero-screenshot img.hero-dark[data-v-71efc52e] {\n  display: block;\n  box-shadow: 0 7px 185px rgba(0, 0, 0, 0.8);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-2f87e6bf] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-2f87e6bf] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-2f87e6bf] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-2f87e6bf] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-2f87e6bf] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-2f87e6bf] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-2f87e6bf] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-2f87e6bf] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-2f87e6bf] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-2f87e6bf] {\n    width: 100%;\n}\n}\n.features[data-v-2f87e6bf] {\n  padding-left: 75px;\n}\n.features .feature[data-v-2f87e6bf] {\n  margin-bottom: 25px;\n}\n.features .feature .title[data-v-2f87e6bf] {\n  font-size: 1.625em;\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n.features .feature .description[data-v-2f87e6bf] {\n  line-height: 1.5;\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 1.125em;\n}\n.features .feature .icon[data-v-2f87e6bf] {\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.features .feature .icon svg[data-v-2f87e6bf] {\n  margin: 0 auto;\n}\n.features .feature:nth-child(1) .icon[data-v-2f87e6bf] {\n  background: rgba(255, 189, 45, 0.1);\n}\n.features .feature:nth-child(1) .icon path[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon line[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon polyline[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon rect[data-v-2f87e6bf],\n.features .feature:nth-child(1) .icon circle[data-v-2f87e6bf] {\n  stroke: #FFBD2D;\n}\n.features .feature:nth-child(2) .icon[data-v-2f87e6bf] {\n  background: rgba(0, 188, 126, 0.1);\n}\n.features .feature:nth-child(2) .icon path[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon line[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon polyline[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon rect[data-v-2f87e6bf],\n.features .feature:nth-child(2) .icon circle[data-v-2f87e6bf] {\n  stroke: #00BC7E;\n}\n.features .feature:nth-child(3) .icon[data-v-2f87e6bf] {\n  background: rgba(157, 102, 254, 0.1);\n}\n.features .feature:nth-child(3) .icon path[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon line[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon polyline[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon rect[data-v-2f87e6bf],\n.features .feature:nth-child(3) .icon circle[data-v-2f87e6bf] {\n  stroke: #9D66FE;\n}\n.content[data-v-2f87e6bf] {\n  margin-top: 107px;\n  display: flex;\n}\n@media only screen and (max-width: 1190px) {\n.hero[data-v-2f87e6bf] {\n    flex: 0 0 60%;\n}\n.hero img[data-v-2f87e6bf] {\n    width: 100%;\n}\n.features[data-v-2f87e6bf] {\n    padding-left: 25px;\n    margin-top: 0px;\n}\n}\n@media only screen and (max-width: 960px) {\n.content[data-v-2f87e6bf] {\n    display: block;\n    margin-top: 40px;\n}\n.features[data-v-2f87e6bf] {\n    margin-top: 50px;\n    padding-left: 0;\n}\n.features .feature[data-v-2f87e6bf] {\n    margin-bottom: 35px;\n}\n.features .feature .title[data-v-2f87e6bf] {\n    font-size: 1.375em;\n}\n.features .feature .description[data-v-2f87e6bf] {\n    font-size: 1em;\n}\n}\n.dark .features .feature .description[data-v-2f87e6bf] {\n  color: #7d858c;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-11c30cfd] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-11c30cfd] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-11c30cfd] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-11c30cfd] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-11c30cfd] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-11c30cfd] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-11c30cfd] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-11c30cfd] {\n    width: 100%;\n}\n}\n.main-navigation[data-v-11c30cfd] {\n  justify-content: space-between;\n  padding-bottom: 25px;\n  align-items: center;\n  padding-top: 25px;\n  display: flex;\n}\n.logo[data-v-11c30cfd] {\n  cursor: pointer;\n}\n.logo img[data-v-11c30cfd] {\n  cursor: pointer;\n  height: 38px;\n  width: auto;\n}\n.logo .logo-text[data-v-11c30cfd] {\n  font-weight: 800;\n  font-size: 1.5625em;\n}\n.navigation-links[data-v-11c30cfd] {\n  display: inline-block;\n  margin-left: 25px;\n}\n.navigation-links[data-v-11c30cfd]:first-child {\n  margin-left: 0;\n}\n.navigation-links li[data-v-11c30cfd] {\n  display: inline-block;\n}\n.navigation-links li a[data-v-11c30cfd] {\n  padding: 14px;\n  font-weight: 700;\n  font-size: 1.0625em;\n  transition: 150ms all ease;\n}\n.cta-button[data-v-11c30cfd] {\n  border-radius: 6px;\n  padding: 8px 23px;\n  font-size: 1.0625em;\n  font-weight: 700;\n}\n.cta-button.log-in[data-v-11c30cfd] {\n  display: none;\n}\n@media only screen and (max-width: 690px) {\n.navigation[data-v-11c30cfd] {\n    display: none;\n}\n.logo img[data-v-11c30cfd] {\n    height: auto;\n    width: 190px;\n}\n.cta-button.log-in[data-v-11c30cfd] {\n    display: block;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-4b1f961a] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-4b1f961a] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-4b1f961a] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-4b1f961a] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-4b1f961a] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-4b1f961a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-4b1f961a] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-4b1f961a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-4b1f961a] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-4b1f961a] {\n    width: 100%;\n}\n}\nfooter[data-v-4b1f961a] {\n  text-align: center;\n  padding-top: 80px;\n}\n.logo[data-v-4b1f961a] {\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.logo img[data-v-4b1f961a] {\n  height: 38px;\n  width: auto;\n}\n.logo .logo-text[data-v-4b1f961a] {\n  font-weight: 800;\n  font-size: 1.5625em;\n}\n.navigation-links[data-v-4b1f961a] {\n  display: inline-block;\n}\n.navigation-links li[data-v-4b1f961a] {\n  display: inline-block;\n}\n.navigation-links li a[data-v-4b1f961a] {\n  display: block;\n  padding: 19px;\n  font-weight: 700;\n  font-size: 1.0625em;\n  transition: 150ms all ease;\n}\n.copyright[data-v-4b1f961a] {\n  font-size: 1.0625em;\n  color: rgba(27, 37, 57, 0.7);\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n.copyright > a[data-v-4b1f961a] {\n  font-weight: 700;\n}\n@media only screen and (max-width: 960px) {\n.navigation-links[data-v-4b1f961a] {\n    display: block;\n}\n.navigation-links li[data-v-4b1f961a] {\n    display: block;\n}\n.navigation-links li a[data-v-4b1f961a] {\n    padding: 10px 0;\n}\n}\n.dark .copyright[data-v-4b1f961a] {\n  color: #7d858c;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-08bace36] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-08bace36] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-08bace36] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-08bace36] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-08bace36] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-08bace36] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-08bace36] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-08bace36] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-08bace36] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-08bace36] {\n    width: 100%;\n}\n}\n.features[data-v-08bace36] {\n  display: flex;\n  margin-top: 35px;\n}\n.features .feature[data-v-08bace36] {\n  display: flex;\n  margin-right: 35px;\n}\n.features .feature:nth-child(1) path[data-v-08bace36],\n.features .feature:nth-child(1) line[data-v-08bace36],\n.features .feature:nth-child(1) polyline[data-v-08bace36],\n.features .feature:nth-child(1) rect[data-v-08bace36],\n.features .feature:nth-child(1) circle[data-v-08bace36] {\n  stroke: #FFBD2D;\n}\n.features .feature:nth-child(2) path[data-v-08bace36],\n.features .feature:nth-child(2) line[data-v-08bace36],\n.features .feature:nth-child(2) polyline[data-v-08bace36],\n.features .feature:nth-child(2) rect[data-v-08bace36],\n.features .feature:nth-child(2) circle[data-v-08bace36] {\n  stroke: #9D66FE;\n}\n.features .feature[data-v-08bace36]:last-child {\n  margin-right: 0;\n}\n.features .feature .feature-title[data-v-08bace36] {\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.features .feature .feature-icon[data-v-08bace36] {\n  margin-right: 10px;\n}\n.main-header[data-v-08bace36] {\n  padding-top: 70px;\n}\n.sign-up-button[data-v-08bace36] {\n  margin-top: 65px;\n  display: block;\n}\n.sign-up-button .button[data-v-08bace36] {\n  margin-left: 0;\n  margin-right: 0;\n}\n@media only screen and (max-width: 690px) {\n.main-header[data-v-08bace36] {\n    padding-top: 50px;\n}\n.features[data-v-08bace36] {\n    display: block;\n}\n.features .feature[data-v-08bace36] {\n    margin-right: 0;\n    margin-bottom: 15px;\n}\n.features .feature[data-v-08bace36]:last-child {\n    margin-bottom: 0;\n}\n.sign-up-button[data-v-08bace36] {\n    margin-top: 30px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".landing-page[data-v-19994af2] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-19994af2] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-19994af2] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-19994af2] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-19994af2] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-19994af2] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-19994af2] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-19994af2] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-19994af2] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-19994af2] {\n    width: 100%;\n}\n}\n.pricing .cloud-bg[data-v-19994af2] {\n  z-index: 0;\n}\n.pricing .cloud-bg path[data-v-19994af2] {\n  stroke: none;\n  fill: rgba(0, 188, 126, 0.05);\n}\n.pricing .cloud-bg[data-v-19994af2]:first-of-type {\n  position: absolute;\n  top: 30px;\n  right: -130px;\n  transform: scale(-1, 1) rotate(-17deg);\n}\n.pricing .cloud-bg[data-v-19994af2]:last-of-type {\n  position: absolute;\n  bottom: 160px;\n  left: -230px;\n  transform: rotate(13deg);\n}\n.page-title[data-v-19994af2] {\n  position: relative;\n  z-index: 1;\n}\n.page-title.center[data-v-19994af2] {\n  text-align: center;\n}\n.page-title.center .title[data-v-19994af2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title.center .description[data-v-19994af2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title .title[data-v-19994af2] {\n  max-width: 580px;\n  font-size: 48px;\n  font-weight: 800;\n  line-height: 1.25;\n  margin-bottom: 15px;\n}\n.page-title .title > span[data-v-19994af2] {\n  font-size: 48px;\n}\n.page-title .description[data-v-19994af2] {\n  max-width: 580px;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.6;\n  margin-bottom: 30px;\n}\n.pricing[data-v-19994af2] {\n  padding-top: 250px;\n  padding-bottom: 120px;\n}\n.pricing-tables[data-v-19994af2] {\n  margin-top: 50px;\n  margin-bottom: 60px;\n  position: relative;\n  z-index: 1;\n}\n.sign-up-button[data-v-19994af2] {\n  padding-top: 10px;\n  display: block;\n}\n@media only screen and (max-width: 1190px) {\n.cloud-bg[data-v-19994af2] {\n    display: none;\n}\n.pricing[data-v-19994af2] {\n    padding-top: 150px;\n    padding-bottom: 60px;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-title .title[data-v-19994af2] {\n    font-size: 28px;\n    line-height: 1.25;\n    margin-bottom: 15px;\n}\n.page-title .title > span[data-v-19994af2] {\n    font-size: 28px;\n}\n.page-title .description[data-v-19994af2] {\n    font-size: 1em;\n    line-height: 1.6;\n    margin-bottom: 30px;\n}\n.pricing[data-v-19994af2] {\n    padding-top: 50px;\n    padding-bottom: 120px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input-wrapper[data-v-537cb35b] {\n  display: flex;\n  width: 100%;\n}\n.input-wrapper .input-label[data-v-537cb35b] {\n  color: #1B2539;\n}\n.input-wrapper .switch-content[data-v-537cb35b] {\n  width: 100%;\n}\n.input-wrapper .switch-content[data-v-537cb35b]:last-child {\n  width: 80px;\n}\n.switch[data-v-537cb35b] {\n  width: 50px;\n  height: 28px;\n  border-radius: 50px;\n  display: block;\n  background: #f1f1f5;\n  position: relative;\n  transition: 0.3s all ease;\n}\n.switch .switch-button[data-v-537cb35b] {\n  transition: 0.3s all ease;\n  width: 22px;\n  height: 22px;\n  border-radius: 50px;\n  display: block;\n  background: white;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  box-shadow: 0 2px 4px rgba(37, 38, 94, 0.1);\n  cursor: pointer;\n}\n.switch.active .switch-button[data-v-537cb35b] {\n  left: 25px;\n}\n.dark .switch[data-v-537cb35b] {\n  background: #1e2024;\n}\n.dark .popup-wrapper .switch[data-v-537cb35b] {\n  background: #25272c;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sync-alt[data-v-97e201b0] {\n  animation: spin-97e201b0 1s linear infinite;\n}\n@keyframes spin-97e201b0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-feather-icons/icons/HardDriveIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-feather-icons/icons/HardDriveIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HardDriveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hard-drive"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "16",
        x2: "6.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10.01",
        y2: "16"
      }
    })]);
  }
});

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTitle_vue_vue_type_template_id_4818f36e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=4818f36e&scoped=true */ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js");
/* harmony import */ var _PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true */ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PageTitle_vue_vue_type_template_id_4818f36e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4818f36e"],['__file',"resources/js/components/IndexPage/Components/PageTitle.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PricingTables_vue_vue_type_template_id_513863ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=template&id=513863ea&scoped=true */ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true");
/* harmony import */ var _PricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js");
/* harmony import */ var _PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true */ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PricingTables_vue_vue_type_template_id_513863ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-513863ea"],['__file',"resources/js/components/IndexPage/Components/PricingTables.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true */ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true");
/* harmony import */ var _IndexGetStarted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexGetStarted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e018e898"],['__file',"resources/js/components/IndexPage/IndexGetStarted.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true");
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexHeroScreenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-71efc52e"],['__file',"resources/js/components/IndexPage/IndexHeroScreenshot.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true */ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true");
/* harmony import */ var _IndexMainFeatures_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexMainFeatures_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2f87e6bf"],['__file',"resources/js/components/IndexPage/IndexMainFeatures.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true");
/* harmony import */ var _IndexNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-11c30cfd"],['__file',"resources/js/components/IndexPage/IndexNavigation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true");
/* harmony import */ var _IndexPageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexPageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4b1f961a"],['__file',"resources/js/components/IndexPage/IndexPageFooter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true */ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true");
/* harmony import */ var _IndexPageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexPageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-08bace36"],['__file',"resources/js/components/IndexPage/IndexPageHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true */ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true");
/* harmony import */ var _IndexPricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=script&lang=js */ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js");
/* harmony import */ var _IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true */ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_IndexPricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-19994af2"],['__file',"resources/js/components/IndexPage/IndexPricingTables.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js");
/* harmony import */ var _SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SwitchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-537cb35b"],['__file',"resources/js/components/Inputs/SwitchInput.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Subscription/PlanPeriodSwitcher.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlanPeriodSwitcher_vue_vue_type_template_id_65b62582__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlanPeriodSwitcher.vue?vue&type=template&id=65b62582 */ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582");
/* harmony import */ var _PlanPeriodSwitcher_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlanPeriodSwitcher.vue?vue&type=script&lang=js */ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlanPeriodSwitcher_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlanPeriodSwitcher_vue_vue_type_template_id_65b62582__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Subscription/PlanPeriodSwitcher.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthButton_vue_vue_type_template_id_97e201b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=template&id=97e201b0&scoped=true */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true");
/* harmony import */ var _AuthButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js");
/* harmony import */ var _AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss */ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AuthButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-97e201b0"],['__file',"resources/js/components/UI/Buttons/AuthButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Frontpage/Homepage.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/Frontpage/Homepage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Homepage_vue_vue_type_template_id_61ef4ce4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Homepage.vue?vue&type=template&id=61ef4ce4 */ "./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4");
/* harmony import */ var _Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homepage.vue?vue&type=script&lang=js */ "./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Homepage_vue_vue_type_template_id_61ef4ce4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Frontpage/Homepage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageTitle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PricingTables.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexGetStarted.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexHeroScreenshot.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexMainFeatures.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexNavigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPricingTables.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SwitchInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlanPeriodSwitcher_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlanPeriodSwitcher_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlanPeriodSwitcher.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Homepage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Frontpage/Homepage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_template_id_4818f36e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_template_id_4818f36e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageTitle.vue?vue&type=template&id=4818f36e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=template&id=4818f36e&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_template_id_513863ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_template_id_513863ea_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PricingTables.vue?vue&type=template&id=513863ea&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=template&id=513863ea&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_template_id_e018e898_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=template&id=e018e898&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_template_id_71efc52e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=template&id=71efc52e&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_template_id_2f87e6bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=template&id=2f87e6bf&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_template_id_11c30cfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=template&id=11c30cfd&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_template_id_4b1f961a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=template&id=4b1f961a&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_template_id_08bace36_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=template&id=08bace36&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_template_id_19994af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=template&id=19994af2&scoped=true");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true");


/***/ }),

/***/ "./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlanPeriodSwitcher_vue_vue_type_template_id_65b62582__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlanPeriodSwitcher_vue_vue_type_template_id_65b62582__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlanPeriodSwitcher.vue?vue&type=template&id=65b62582 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Subscription/PlanPeriodSwitcher.vue?vue&type=template&id=65b62582");


/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_template_id_97e201b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthButton.vue?vue&type=template&id=97e201b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=template&id=97e201b0&scoped=true");


/***/ }),

/***/ "./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_template_id_61ef4ce4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_template_id_61ef4ce4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Homepage.vue?vue&type=template&id=61ef4ce4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Frontpage/Homepage.vue?vue&type=template&id=61ef4ce4");


/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_style_index_0_id_4818f36e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PageTitle.vue?vue&type=style&index=0&id=4818f36e&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PricingTables_vue_vue_type_style_index_0_id_513863ea_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/Components/PricingTables.vue?vue&type=style&index=0&id=513863ea&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexGetStarted_vue_vue_type_style_index_0_id_e018e898_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexGetStarted.vue?vue&type=style&index=0&id=e018e898&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexHeroScreenshot_vue_vue_type_style_index_0_id_71efc52e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexHeroScreenshot.vue?vue&type=style&index=0&id=71efc52e&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexMainFeatures_vue_vue_type_style_index_0_id_2f87e6bf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexMainFeatures.vue?vue&type=style&index=0&id=2f87e6bf&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexNavigation_vue_vue_type_style_index_0_id_11c30cfd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexNavigation.vue?vue&type=style&index=0&id=11c30cfd&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageFooter_vue_vue_type_style_index_0_id_4b1f961a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageFooter.vue?vue&type=style&index=0&id=4b1f961a&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPageHeader_vue_vue_type_style_index_0_id_08bace36_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPageHeader.vue?vue&type=style&index=0&id=08bace36&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPricingTables_vue_vue_type_style_index_0_id_19994af2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexPage/IndexPricingTables.vue?vue&type=style&index=0&id=19994af2&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthButton_vue_vue_type_style_index_0_id_97e201b0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Buttons/AuthButton.vue?vue&type=style&index=0&id=97e201b0&scoped=true&lang=scss");


/***/ })

}]);