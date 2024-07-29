"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/app-language"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppInputSwitch',
  props: ['description', 'isLast', 'title', 'error']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppInputText',
  props: ['description', 'isLast', 'title', 'error']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SearchInput',
  components: {
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SearchIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.XIcon
  },
  data: function data() {
    return {
      query: undefined
    };
  },
  methods: {
    clearInput: function clearInput() {
      this.query = undefined;
      this.$emit('reset-query');
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bus */ "./resources/js/bus.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MobileHeader',
  props: ['title'],
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronLeftIcon,
    MenuIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.MenuIcon
  },
  methods: {
    goBack: function goBack() {
      this.$router.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FormLabel',
  props: ['icon'],
  components: {
    TrendingUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.TrendingUpIcon,
    WifiIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.WifiIcon,
    ListIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ListIcon,
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.MailIcon,
    InfoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.InfoIcon,
    DatabaseIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DatabaseIcon,
    UsersIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.UsersIcon,
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CreditCardIcon,
    DollarSignIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DollarSignIcon,
    SmartphoneIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SmartphoneIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.HardDriveIcon,
    BarChartIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BarChartIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SettingsIcon,
    FileTextIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FileTextIcon,
    ShieldIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ShieldIcon,
    FrownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FrownIcon,
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Edit2Icon,
    BellIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BellIcon,
    KeyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.KeyIcon
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InfoBox',
  props: ['type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Forms_Layouts_AppInputSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Forms/Layouts/AppInputSwitch */ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue");
/* harmony import */ var _components_Forms_Layouts_AppInputText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Forms/Layouts/AppInputText */ "./resources/js/components/Forms/Layouts/AppInputText.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate/dist/vee-validate.full'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_UI_Buttons_MobileActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/UI/Buttons/MobileActionButton */ "./resources/js/components/UI/Buttons/MobileActionButton.vue");
/* harmony import */ var _components_Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Inputs/SwitchInput */ "./resources/js/components/Inputs/SwitchInput.vue");
/* harmony import */ var _components_Inputs_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Inputs/SearchInput */ "./resources/js/components/Inputs/SearchInput.vue");
/* harmony import */ var _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Labels/FormLabel */ "./resources/js/components/UI/Labels/FormLabel.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_UI_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Buttons/ButtonBase */ "./resources/js/components/UI/Buttons/ButtonBase.vue");
/* harmony import */ var _components_UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Others/InfoBox */ "./resources/js/components/UI/Others/InfoBox.vue");
/* harmony import */ var _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../bus */ "./resources/js/bus.js");














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Language',
  components: {
    ValidationProvider: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate/dist/vee-validate.full'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ValidationObserver: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate/dist/vee-validate.full'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    MobileActionButton: _components_UI_Buttons_MobileActionButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    AppInputSwitch: _components_Forms_Layouts_AppInputSwitch__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppInputText: _components_Forms_Layouts_AppInputText__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_7__["default"],
    SearchInput: _components_Inputs_SearchInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    SwitchInput: _components_Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    ButtonBase: _components_UI_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormLabel: _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_13__.PlusIcon,
    InfoBox: _components_UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_9__["default"],
    Spinner: _components_UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_13__.XIcon
  },
  data: function data() {
    return {
      searchedTranslationResults: undefined,
      referenceTranslations: undefined,
      defaultLanguageLocale: undefined,
      selectedLanguage: undefined,
      languages: undefined,
      query: '',
      fixedNav: false
    };
  },
  watch: {
    query: (0,lodash__WEBPACK_IMPORTED_MODULE_11__.debounce)(function (val) {
      this.searchedTranslationResults = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.omitBy)(this.selectedLanguage.data.attributes.translations, function (string) {
        return !string.toLowerCase().includes(val.toLowerCase());
      });

      // todo: fix container
      var container = document.getElementById('single-page');
      container.scrollTop = 0;
    }, 300)
  },
  computed: {
    isSearching: function isSearching() {
      return this.searchedTranslationResults && this.query !== '';
    },
    translationList: function translationList() {
      return this.isSearching ? this.searchedTranslationResults : this.selectedLanguage.data.attributes.translations;
    }
  },
  methods: {
    setDefaultLanguage: function setDefaultLanguage() {
      this.$updateText('/admin/settings', 'language', this.selectedLanguage.data.attributes.locale);
      this.defaultLanguageLocale = this.selectedLanguage.data.attributes.locale;
      setTimeout(function () {
        return location.reload();
      }, 500);
    },
    getLanguages: function getLanguages() {
      var _this = this;
      axios.get('/api/admin/languages').then(function (response) {
        _this.languages = response.data.data;
        _this.referenceTranslations = response.data.meta.reference_translations;
        _this.selectedLanguage = response.data.meta.current_language;
        _this.defaultLanguageLocale = response.data.meta.current_language.data.attributes.locale;
      })["catch"](function () {
        _this.$isSomethingWrong();
      });
    },
    getLanguage: function getLanguage(language) {
      var _this2 = this;
      this.selectedLanguage = undefined;
      axios.get("/api/admin/languages/".concat(language.data.id)).then(function (response) {
        _this2.selectedLanguage = response.data;
      })["catch"](function () {
        _this2.$isSomethingWrong();
      });
    },
    deleteLanguage: function deleteLanguage(language) {
      _bus__WEBPACK_IMPORTED_MODULE_12__.events.$emit('confirm:open', {
        title: "Delete \"".concat(language.data.attributes.name, "\" language?"),
        message: 'Your language will be permanently deleted.',
        buttonColor: 'danger-solid',
        action: {
          id: language.data.id,
          operation: 'delete-language'
        }
      });
    },
    createLanguage: function createLanguage() {
      _bus__WEBPACK_IMPORTED_MODULE_12__.events.$emit('popup:open', {
        name: 'create-language'
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    this.getLanguages();
    _bus__WEBPACK_IMPORTED_MODULE_12__.events.$on('reload:languages', function () {
      return _this3.getLanguages();
    });
    _bus__WEBPACK_IMPORTED_MODULE_12__.events.$on('action:confirmed', function (data) {
      if (data.operation === 'delete-language') axios["delete"]("/api/admin/languages/".concat(data.id)).then(function () {
        return _this3.getLanguages();
      })["catch"](function () {
        return _this3.$isSomethingWrong();
      });
    });

    // Handle fixed mobile navigation
    window.addEventListener('scroll', function () {
      var card = document.getElementById('card-navigation');
      _this3.fixedNav = card.getBoundingClientRect().top < 0;
    });
  },
  destroyed: function destroyed() {
    _bus__WEBPACK_IMPORTED_MODULE_12__.events.$off('action:confirmed');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "leading-5"
};
var _hoisted_2 = {
  "class": "mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"
};
var _hoisted_3 = ["innerHTML"];
var _hoisted_4 = {
  key: 1,
  "class": "pt-2 text-xs dark:text-rose-600 text-rose-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'mb-6 sm:mb-7': !$props.isLast
    }, "flex w-full items-center justify-between space-x-2 sm:space-x-8"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label for input"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title) + ": ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Input Description"), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    "class": "block text-xs leading-4 dark:text-gray-500 text-gray-500",
    innerHTML: $props.description
  }, null, 8 /* PROPS */, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Input Description"), $props.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.error), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Form element"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"
};
var _hoisted_2 = {
  key: 1,
  "class": "pt-2 text-xs dark:text-rose-600 text-rose-600"
};
var _hoisted_3 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'mb-6 sm:mb-7': !$props.isLast
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label for input"), $props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title) + ": ", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Form element"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Input Description"), $props.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.error), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Input Description"), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", {
    key: 2,
    "class": "block pt-2 text-xs leading-4 dark:text-gray-500 text-gray-500",
    innerHTML: $props.description
  }, null, 8 /* PROPS */, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=template&id=232df132&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=template&id=232df132&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-232df132"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "search-bar"
};
var _hoisted_2 = {
  key: 0,
  "class": "icon"
};
var _hoisted_3 = ["placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_search_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-icon");
  var _component_x_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("x-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [!$data.query ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_icon, {
    size: "19"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.query ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.clearInput && $options.clearInput.apply($options, arguments);
    }),
    "class": "icon"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_x_icon, {
    "class": "pointer",
    size: "19"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.query = $event;
    }),
    onInput: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('input', $data.query);
    }),
    "class": "query focus-border-theme",
    type: "text",
    name: "searchInput",
    placeholder: _ctx.$t('search_translations')
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.query]])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=template&id=39954a21&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=template&id=39954a21&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-39954a21"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "mobile-header"
};
var _hoisted_2 = {
  "class": "location-name"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_chevron_left_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("chevron-left-icon");
  var _component_menu_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("menu-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Go back"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.goBack && $options.goBack.apply($options, arguments);
    }),
    "class": "go-back"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_chevron_left_icon, {
    size: "17",
    "class": "icon"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Folder Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("More Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$showMobileMenu('user-navigation');
    }),
    "class": "mobile-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_menu_icon, {
    size: "17",
    "class": "icon"
  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-8 flex items-center"
};
var _hoisted_2 = {
  "class": "text-md font-bold dark:text-gray-200 sm:text-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_edit_2_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("edit-2-icon");
  var _component_frown_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("frown-icon");
  var _component_list_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("list-icon");
  var _component_info_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("info-icon");
  var _component_database_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("database-icon");
  var _component_file_text_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("file-text-icon");
  var _component_dollar_sign_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dollar-sign-icon");
  var _component_credit_card_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("credit-card-icon");
  var _component_bar_chart_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("bar-chart-icon");
  var _component_settings_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("settings-icon");
  var _component_hard_drive_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hard-drive-icon");
  var _component_mail_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("mail-icon");
  var _component_smartphone_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("smartphone-icon");
  var _component_shield_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("shield-icon");
  var _component_bell_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("bell-icon");
  var _component_key_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("key-icon");
  var _component_users_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("users-icon");
  var _component_wifi_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("wifi-icon");
  var _component_trending_up_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trending-up-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [!$props.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_edit_2_icon, {
    key: 0,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'frown' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_frown_icon, {
    key: 1,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'list' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_list_icon, {
    key: 2,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'info' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_info_icon, {
    key: 3,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'database' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_database_icon, {
    key: 4,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'file-text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_file_text_icon, {
    key: 5,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'dollar' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_dollar_sign_icon, {
    key: 6,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'credit-card' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_credit_card_icon, {
    key: 7,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'bar-chart' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_bar_chart_icon, {
    key: 8,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'settings' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_settings_icon, {
    key: 9,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'hard-drive' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_hard_drive_icon, {
    key: 10,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'mail' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_mail_icon, {
    key: 11,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'smartphone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_smartphone_icon, {
    key: 12,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'shield' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_shield_icon, {
    key: 13,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'bell' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_bell_icon, {
    key: 14,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'key' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_key_icon, {
    key: 15,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'users' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_users_icon, {
    key: 16,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'wifi' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_wifi_icon, {
    key: 17,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.icon === 'trending-up' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_trending_up_icon, {
    key: 18,
    size: "22",
    "class": "vue-feather text-theme dark-text-theme mr-3"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["info-box", $props.type])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  id: "card-navigation",
  style: {
    "height": "62px"
  },
  "class": "mb-24 block md:hidden"
};
var _hoisted_2 = {
  "class": "flex items-center"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  key: 1,
  "class": "flex md:space-x-6"
};
var _hoisted_5 = {
  "class": "hidden md:block"
};
var _hoisted_6 = {
  "class": "card sticky top-0 shadow-card"
};
var _hoisted_7 = {
  "class": "mb-2 text-xs font-bold text-gray-400"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  "class": "dynamic-content w-full"
};
var _hoisted_10 = {
  key: 1
};
var _hoisted_11 = {
  key: 0,
  "class": "card shadow-card"
};
var _hoisted_12 = ["placeholder"];
var _hoisted_13 = {
  key: 1,
  "class": "card shadow-card"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please preserve in your translations special string variables defined in format as "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-theme"
}, ":variable"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" or "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-theme"
}, "{variable}"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")], -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "sticky top-0 z-10 mb-8 hidden md:block"
};
var _hoisted_16 = ["onUpdate:modelValue", "onInput", "rows"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_SearchInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SearchInput");
  var _component_plus_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("plus-icon");
  var _component_x_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("x-icon");
  var _component_MobileActionButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MobileActionButton");
  var _component_Spinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Spinner");
  var _component_FormLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormLabel");
  var _component_AppInputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppInputText");
  var _component_ValidationProvider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ValidationProvider");
  var _component_SwitchInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SwitchInput");
  var _component_AppInputSwitch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppInputSwitch");
  var _component_InfoBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoBox");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Mobile language navigation"), $data.languages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["z-20 bg-white pt-3 sm:pt-5", {
      'fixed top-0 left-0 right-0 z-10 rounded-none bg-white bg-opacity-70 px-6 backdrop-blur-lg backdrop-filter dark:bg-dark-foreground': $data.fixedNav,
      'card sticky top-0 z-10 block !pb-0 shadow-card md:hidden': !$data.fixedNav
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchInput, {
    modelValue: $data.query,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.query = $event;
    }),
    onResetQuery: _cache[1] || (_cache[1] = function ($event) {
      return $data.query = '';
    })
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("List of languages"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (language) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      onClick: function onClick($event) {
        return $options.getLanguage(language);
      },
      key: language.data.id,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-bottom-theme inline-block border-b-2 border-transparent px-4 py-5 text-sm font-bold text-gray-600", {
        'text-theme router-link-active': $data.selectedLanguage && $data.selectedLanguage.data.attributes.locale === language.data.attributes.locale
      }])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.data.attributes.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_3);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Add new language"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.createLanguage && $options.createLanguage.apply($options, arguments);
    }),
    "class": "ml-2 cursor-pointer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_plus_icon, {
    size: "14",
    "class": "vue-feather text-gray-400"
  })])])], 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.languages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Sidebar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('languages')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Languages "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, function (language) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      onClick: function onClick($event) {
        return $options.getLanguage(language);
      },
      key: language.data.id,
      "class": "group flex cursor-pointer items-center justify-between py-2 pr-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-base font-bold cursor-pointer", {
        'text-theme': $data.selectedLanguage && $data.selectedLanguage.data.attributes.locale === language.data.attributes.locale
      }])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.data.attributes.name), 3 /* TEXT, CLASS */), language.data.attributes.locale !== 'en' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_x_icon, {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.deleteLanguage(language);
      }, ["stop"]),
      "class": "opacity-0 group-hover:opacity-100",
      size: "12"
    }, null, 8 /* PROPS */, ["onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create Language button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MobileActionButton, {
    onClick: $options.createLanguage,
    icon: "plus",
    "class": "mt-5 whitespace-nowrap"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('add_language')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [!$data.selectedLanguage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Spinner, {
    key: 0,
    "class": "spinner"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selectedLanguage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Language Settings"), !$options.isSearching ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormLabel, {
    icon: "settings"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('language_settings')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ValidationProvider, {
    tag: "div",
    mode: "passive",
    name: "Language name",
    rules: "required"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var errors = _ref.errors;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppInputText, {
        title: _ctx.$t('language_name'),
        error: errors[0]
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            onInput: _cache[3] || (_cache[3] = function ($event) {
              return _ctx.$updateText("/admin/languages/".concat($data.selectedLanguage.data.id), 'name', $data.selectedLanguage.data.attributes.name);
            }),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.selectedLanguage.data.attributes.name = $event;
            }),
            placeholder: _ctx.$t('admin_settings.appearance.description_plac'),
            type: "text",
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
              '!border-rose-600': errors[0]
            }, "focus-border-theme input-dark"])
          }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.selectedLanguage.data.attributes.name]])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title", "error"])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppInputSwitch, {
    title: _ctx.$t('set_as_default_language'),
    description: _ctx.$t('default_language_disclaimer'),
    "is-last": true
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SwitchInput, {
        onInput: $options.setDefaultLanguage,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["switch", {
          'disable-switch': $data.selectedLanguage.data.attributes.locale === _this.defaultLanguageLocale
        }]),
        state: $data.selectedLanguage.data.attributes.locale === _this.defaultLanguageLocale
      }, null, 8 /* PROPS */, ["onInput", "class", "state"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["title", "description"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selectedLanguage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Translations"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormLabel, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit_translations')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoBox, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Inline Search for mobile"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SearchInput, {
    modelValue: $data.query,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.query = $event;
    }),
    onResetQuery: _cache[6] || (_cache[6] = function ($event) {
      return $data.query = '';
    })
  }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ValidationProvider, {
    tag: "div",
    name: "Language string",
    rules: "required"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var errors = _ref2.errors;
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.translationList, function (translation, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AppInputText, {
          title: $data.referenceTranslations[key],
          error: errors[0],
          key: key
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return $data.selectedLanguage.data.attributes.translations[key] = $event;
              },
              onInput: function onInput($event) {
                return _ctx.$updateText("/admin/languages/".concat($data.selectedLanguage.data.id, "/strings"), key, $data.selectedLanguage.data.attributes.translations[key]);
              },
              rows: $data.selectedLanguage.data.attributes.translations[key].length >= 80 ? 3 : 1,
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["focus-border-theme input-dark", {
                '!border-rose-600': errors[0]
              }])
            }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.selectedLanguage.data.attributes.translations[key]]])];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title", "error"]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.languages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Spinner, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".form.inline-form[data-v-232df132] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-232df132] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-232df132] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .switch-wrapper[data-v-232df132] {\n  padding-bottom: 13px;\n  margin-bottom: 13px;\n  border-bottom: 1px solid #f4f5f6;\n}\n.form.block-form .switch-wrapper[data-v-232df132]:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n.form.block-form .wrapper-inline[data-v-232df132] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-232df132] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-232df132] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-232df132] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-232df132]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-232df132] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-232df132] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-232df132] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-232df132] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.input-help[data-v-232df132] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-232df132] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-232df132] {\n  margin-left: 20px;\n}\n.error-message[data-v-232df132] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-232df132] {\n  width: 100%;\n}\ntextarea.is-error[data-v-232df132],\ninput[type=password].is-error[data-v-232df132],\ninput[type=text].is-error[data-v-232df132],\ninput[type=number].is-error[data-v-232df132],\ninput[type=email].is-error[data-v-232df132] {\n  border-color: #fd397a;\n}\ntextarea[data-v-232df132]::-moz-placeholder, input[type=password][data-v-232df132]::-moz-placeholder, input[type=text][data-v-232df132]::-moz-placeholder, input[type=number][data-v-232df132]::-moz-placeholder, input[type=email][data-v-232df132]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-232df132]::placeholder,\ninput[type=password][data-v-232df132]::placeholder,\ninput[type=text][data-v-232df132]::placeholder,\ninput[type=number][data-v-232df132]::placeholder,\ninput[type=email][data-v-232df132]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-232df132],\ninput[type=password][disabled][data-v-232df132],\ninput[type=text][disabled][data-v-232df132],\ninput[type=number][disabled][data-v-232df132],\ninput[type=email][disabled][data-v-232df132] {\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\ninput[type=color][data-v-232df132] {\n  width: 38px !important;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n  min-width: initial !important;\n}\n.additional-link[data-v-232df132] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-232df132], .additional-link a[data-v-232df132] {\n  cursor: pointer;\n}\n.additional-link b[data-v-232df132]:hover, .additional-link a[data-v-232df132]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-232df132] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-232df132] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-232df132], .form textarea[data-v-232df132] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-232df132] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-232df132] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-232df132] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-232df132] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-232df132] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-232df132] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-232df132] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-232df132] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-232df132],\n  input[type=password][data-v-232df132],\n  input[type=number][data-v-232df132],\n  input[type=text][data-v-232df132],\n  input[type=email][data-v-232df132] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-232df132] {\n    display: block;\n}\n}\n.dark .form .input-help[data-v-232df132] {\n  color: #7d858c;\n}\n.dark .form.block-form .block-wrapper label[data-v-232df132] {\n  color: #bec6cf;\n}\n.dark .form.block-form .switch-wrapper[data-v-232df132] {\n  border-color: rgba(255, 255, 255, 0.02);\n}\n.dark .form .inline-wrapper .switch-label .input-label[data-v-232df132] {\n  color: #bec6cf;\n}\n.dark textarea[data-v-232df132],\n.dark input[type=password][data-v-232df132],\n.dark input[type=text][data-v-232df132],\n.dark input[type=number][data-v-232df132],\n.dark input[type=email][data-v-232df132] {\n  border-color: #1e2024;\n  background: #1e2024;\n  color: #bec6cf;\n}\n.dark textarea[data-v-232df132]::-moz-placeholder, .dark input[type=password][data-v-232df132]::-moz-placeholder, .dark input[type=text][data-v-232df132]::-moz-placeholder, .dark input[type=number][data-v-232df132]::-moz-placeholder, .dark input[type=email][data-v-232df132]::-moz-placeholder {\n  color: #7d858c;\n}\n.dark textarea[data-v-232df132]::placeholder,\n.dark input[type=password][data-v-232df132]::placeholder,\n.dark input[type=text][data-v-232df132]::placeholder,\n.dark input[type=number][data-v-232df132]::placeholder,\n.dark input[type=email][data-v-232df132]::placeholder {\n  color: #7d858c;\n}\n.dark textarea[disabled][data-v-232df132],\n.dark input[type=password][disabled][data-v-232df132],\n.dark input[type=text][disabled][data-v-232df132],\n.dark input[type=number][disabled][data-v-232df132],\n.dark input[type=email][disabled][data-v-232df132] {\n  color: rgba(125, 133, 140, 0.8);\n  -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.dark .popup-wrapper textarea[data-v-232df132],\n.dark .popup-wrapper input[type=password][data-v-232df132],\n.dark .popup-wrapper input[type=text][data-v-232df132],\n.dark .popup-wrapper input[type=number][data-v-232df132],\n.dark .popup-wrapper input[type=email][data-v-232df132] {\n  background: #25272c;\n}\n.search-bar[data-v-232df132] {\n  position: relative;\n  width: 100%;\n  border-radius: 8px;\n}\n.search-bar input[data-v-232df132] {\n  background: #f4f5f6;\n  border-radius: 8px;\n  outline: 0;\n  padding: 9px 20px 9px 43px;\n  font-weight: 700;\n  font-size: 1em;\n  width: 100%;\n  height: 50px;\n  min-width: 175px;\n  transition: 0.15s all ease;\n  border: 1px solid transparent;\n  -webkit-appearance: none;\n  box-shadow: none;\n}\n.search-bar input[data-v-232df132]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.search-bar input[data-v-232df132]::placeholder {\n  color: #A4ADB6;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.search-bar input[data-v-232df132]:focus {\n  border-width: 1px;\n  border-style: solid;\n}\n.search-bar input:focus + .icon path[data-v-232df132] {\n  color: inherit;\n}\n.search-bar .icon[data-v-232df132] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 11px 15px;\n  display: flex;\n  align-items: center;\n}\n.search-bar .icon circle[data-v-232df132],\n.search-bar .icon line[data-v-232df132] {\n  color: #A4ADB6;\n}\n.search-bar .icon .pointer[data-v-232df132] {\n  cursor: pointer;\n}\n.dark .search-bar input[data-v-232df132] {\n  background: #1e2024;\n}", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".mobile-header[data-v-39954a21] {\n  padding: 10px 0;\n  text-align: center;\n  background: white;\n  position: sticky;\n  display: none;\n  z-index: 6;\n  top: 0;\n}\n.mobile-header > div[data-v-39954a21] {\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.mobile-header .go-back[data-v-39954a21] {\n  text-align: left;\n}\n.mobile-header .location-name[data-v-39954a21] {\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  vertical-align: middle;\n  font-size: 0.9375em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.mobile-header .mobile-menu[data-v-39954a21] {\n  text-align: right;\n}\n.mobile-header .icon[data-v-39954a21] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 690px) {\n.mobile-header[data-v-39954a21] {\n    display: flex;\n    margin-bottom: 15px;\n}\n}\n.dark .mobile-header[data-v-39954a21] {\n  background: #151515;\n}\n.dark .mobile-header .location-name[data-v-39954a21] {\n  color: #bec6cf;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".info-box[data-v-51c5e09e] {\n  padding: 20px;\n  border-radius: 10px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-51c5e09e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-51c5e09e],\n.info-box.error a[data-v-51c5e09e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-51c5e09e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-51c5e09e] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p > a[data-v-51c5e09e] {\n  font-size: 15px;\n}\n.info-box p > b[data-v-51c5e09e] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-51c5e09e] {\n  font-weight: 700;\n}\n.info-box a[data-v-51c5e09e] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-51c5e09e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-51c5e09e] {\n  display: block;\n}\n.info-box ul li a[data-v-51c5e09e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-51c5e09e] {\n    padding: 15px;\n}\n}\n.dark .info-box[data-v-51c5e09e] {\n  background: #1e2024;\n}\n.dark .info-box.error[data-v-51c5e09e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.dark .info-box.error p[data-v-51c5e09e],\n.dark .info-box.error a[data-v-51c5e09e] {\n  color: #fd397a;\n}\n.dark .info-box.error a[data-v-51c5e09e] {\n  text-decoration: underline;\n}\n.dark .info-box p[data-v-51c5e09e] {\n  color: #bec6cf;\n}\n.dark .info-box ul li[data-v-51c5e09e] {\n  color: #bec6cf;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_style_index_0_id_232df132_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_style_index_0_id_232df132_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_style_index_0_id_232df132_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_style_index_0_id_39954a21_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_style_index_0_id_39954a21_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_style_index_0_id_39954a21_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputSwitch.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppInputSwitch_vue_vue_type_template_id_ee4784e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppInputSwitch.vue?vue&type=template&id=ee4784e4 */ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4");
/* harmony import */ var _AppInputSwitch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppInputSwitch.vue?vue&type=script&lang=js */ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppInputSwitch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppInputSwitch_vue_vue_type_template_id_ee4784e4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Forms/Layouts/AppInputSwitch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppInputText_vue_vue_type_template_id_50a9af87__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppInputText.vue?vue&type=template&id=50a9af87 */ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87");
/* harmony import */ var _AppInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppInputText.vue?vue&type=script&lang=js */ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppInputText_vue_vue_type_template_id_50a9af87__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Forms/Layouts/AppInputText.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Inputs/SearchInput.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Inputs/SearchInput.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchInput_vue_vue_type_template_id_232df132_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=template&id=232df132&scoped=true */ "./resources/js/components/Inputs/SearchInput.vue?vue&type=template&id=232df132&scoped=true");
/* harmony import */ var _SearchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=script&lang=js */ "./resources/js/components/Inputs/SearchInput.vue?vue&type=script&lang=js");
/* harmony import */ var _SearchInput_vue_vue_type_style_index_0_id_232df132_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true */ "./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SearchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SearchInput_vue_vue_type_template_id_232df132_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-232df132"],['__file',"resources/js/components/Inputs/SearchInput.vue"]])
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

/***/ "./resources/js/components/Mobile/MobileHeader.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Mobile/MobileHeader.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MobileHeader_vue_vue_type_template_id_39954a21_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileHeader.vue?vue&type=template&id=39954a21&scoped=true */ "./resources/js/components/Mobile/MobileHeader.vue?vue&type=template&id=39954a21&scoped=true");
/* harmony import */ var _MobileHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileHeader.vue?vue&type=script&lang=js */ "./resources/js/components/Mobile/MobileHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _MobileHeader_vue_vue_type_style_index_0_id_39954a21_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss */ "./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MobileHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MobileHeader_vue_vue_type_template_id_39954a21_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-39954a21"],['__file',"resources/js/components/Mobile/MobileHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormLabel_vue_vue_type_template_id_3e75b5c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=template&id=3e75b5c0 */ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0");
/* harmony import */ var _FormLabel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormLabel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormLabel_vue_vue_type_template_id_3e75b5c0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UI/Labels/FormLabel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true");
/* harmony import */ var _InfoBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js");
/* harmony import */ var _InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_InfoBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-51c5e09e"],['__file',"resources/js/components/UI/Others/InfoBox.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Language_vue_vue_type_template_id_14bdb1eb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language.vue?vue&type=template&id=14bdb1eb */ "./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb");
/* harmony import */ var _Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language.vue?vue&type=script&lang=js */ "./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Language_vue_vue_type_template_id_14bdb1eb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Admin/Languages/Language.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputSwitch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputSwitch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppInputSwitch.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppInputText.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Inputs/SearchInput.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Inputs/SearchInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/components/Mobile/MobileHeader.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Mobile/MobileHeader.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MobileHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormLabel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormLabel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormLabel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoBox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Language.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputSwitch_vue_vue_type_template_id_ee4784e4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputSwitch_vue_vue_type_template_id_ee4784e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppInputSwitch.vue?vue&type=template&id=ee4784e4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4");


/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputText_vue_vue_type_template_id_50a9af87__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppInputText_vue_vue_type_template_id_50a9af87__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppInputText.vue?vue&type=template&id=50a9af87 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87");


/***/ }),

/***/ "./resources/js/components/Inputs/SearchInput.vue?vue&type=template&id=232df132&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SearchInput.vue?vue&type=template&id=232df132&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_template_id_232df132_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_template_id_232df132_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchInput.vue?vue&type=template&id=232df132&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=template&id=232df132&scoped=true");


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

/***/ "./resources/js/components/Mobile/MobileHeader.vue?vue&type=template&id=39954a21&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Mobile/MobileHeader.vue?vue&type=template&id=39954a21&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_template_id_39954a21_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_template_id_39954a21_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MobileHeader.vue?vue&type=template&id=39954a21&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=template&id=39954a21&scoped=true");


/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormLabel_vue_vue_type_template_id_3e75b5c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormLabel_vue_vue_type_template_id_3e75b5c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormLabel.vue?vue&type=template&id=3e75b5c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true");


/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_template_id_14bdb1eb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_template_id_14bdb1eb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Language.vue?vue&type=template&id=14bdb1eb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb");


/***/ }),

/***/ "./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchInput_vue_vue_type_style_index_0_id_232df132_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SearchInput.vue?vue&type=style&index=0&id=232df132&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileHeader_vue_vue_type_style_index_0_id_39954a21_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Mobile/MobileHeader.vue?vue&type=style&index=0&id=39954a21&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true");


/***/ })

}]);