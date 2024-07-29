"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_FilePreview_Media_PdfFile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bus */ "./resources/js/bus.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfvuer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PdfFile',
  components: {
    Spinner: _UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"],
    pdf: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfvuer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: ['file'],
  watch: {
    file: function file() {
      this.getPdf();
      this.isLoading = true;
    }
  },
  data: function data() {
    return {
      pdfData: undefined,
      documentSize: 50,
      isLoading: true,
      numPages: 0
    };
  },
  methods: {
    documentLoaded: function documentLoaded() {
      this.isLoading = false;
    },
    getPdf: function getPdf() {
      this.pdfData = undefined;
      this.numPages = 0;
      var self = this;
      self.pdfData = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfvuer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.file.data.attributes.file_url);
      self.pdfData.then(function (pdf) {
        return self.numPages = pdf.numPages;
      });
    },
    getDocumentSize: function getDocumentSize() {
      if (window.innerWidth < 960) {
        this.documentSize = 100;
      }
      if (window.innerWidth > 960) {
        this.documentSize = localStorage.getItem('documentSize') ? parseInt(localStorage.getItem('documentSize')) : 50;
      }
    },
    zoomIn: function zoomIn() {
      if (this.documentSize < 100) {
        this.documentSize += 10;
        localStorage.setItem('documentSize', this.documentSize);
      }
    },
    zoomOut: function zoomOut() {
      if (this.documentSize > 40) {
        this.documentSize -= 10;
        localStorage.setItem('documentSize', this.documentSize);
      }
    }
  },
  created: function created() {
    var _this = this;
    this.getDocumentSize();
    this.getPdf();
    _bus__WEBPACK_IMPORTED_MODULE_1__.events.$on('document-zoom:in', function () {
      return _this.zoomIn();
    });
    _bus__WEBPACK_IMPORTED_MODULE_1__.events.$on('document-zoom:out', function () {
      return _this.zoomOut();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=template&id=64931c25":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=template&id=64931c25 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "mx-auto fixed left-0 right-0 top-1/2 translate-y-5 w-full z-10"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Spinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Spinner");
  var _component_pdf = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pdf");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "absolute bottom-0 top-0 left-0 right-0 z-10 mx-auto overflow-y-auto rounded-xl md:p-5",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $data.documentSize + '%'
    })
  }, [$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spinner)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.numPages, function (i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pdf, {
      src: $data.pdfData,
      key: i,
      resize: true,
      page: i,
      scale: "page-width",
      id: "printable-file",
      "class": "mx-auto mb-6 w-full overflow-hidden md:rounded-xl md:shadow-lg",
      onLoading: $options.documentLoaded
    }, null, 8 /* PROPS */, ["src", "page", "onLoading"]);
  }), 128 /* KEYED_FRAGMENT */))], 4 /* STYLE */);
}

/***/ }),

/***/ "./resources/js/components/FilePreview/Media/PdfFile.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/FilePreview/Media/PdfFile.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PdfFile_vue_vue_type_template_id_64931c25__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfFile.vue?vue&type=template&id=64931c25 */ "./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=template&id=64931c25");
/* harmony import */ var _PdfFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfFile.vue?vue&type=script&lang=js */ "./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=script&lang=js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfvuer/dist/pdfvuer.css?vue&type=style&index=0&lang=css&external'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PdfFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PdfFile_vue_vue_type_template_id_64931c25__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/FilePreview/Media/PdfFile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfFile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PdfFile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=template&id=64931c25":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=template&id=64931c25 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfFile_vue_vue_type_template_id_64931c25__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfFile_vue_vue_type_template_id_64931c25__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PdfFile.vue?vue&type=template&id=64931c25 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview/Media/PdfFile.vue?vue&type=template&id=64931c25");


/***/ })

}]);