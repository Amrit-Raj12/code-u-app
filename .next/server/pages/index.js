(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./src/components/Editor.js":
/*!**********************************!*\
  !*** ./src/components/Editor.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_theme_ayu_dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/theme/ayu-dark.css */ "./node_modules/codemirror/theme/ayu-dark.css");
/* harmony import */ var codemirror_theme_ayu_dark_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_ayu_dark_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_theme_3024_day_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/theme/3024-day.css */ "./node_modules/codemirror/theme/3024-day.css");
/* harmony import */ var codemirror_theme_3024_day_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_3024_day_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_theme_3024_night_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/theme/3024-night.css */ "./node_modules/codemirror/theme/3024-night.css");
/* harmony import */ var codemirror_theme_3024_night_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_3024_night_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_theme_abbott_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/theme/abbott.css */ "./node_modules/codemirror/theme/abbott.css");
/* harmony import */ var codemirror_theme_abbott_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_abbott_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_theme_abcdef_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/theme/abcdef.css */ "./node_modules/codemirror/theme/abcdef.css");
/* harmony import */ var codemirror_theme_abcdef_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_abcdef_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_theme_ambiance_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/theme/ambiance.css */ "./node_modules/codemirror/theme/ambiance.css");
/* harmony import */ var codemirror_theme_ambiance_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_ambiance_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_theme_ayu_mirage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/theme/ayu-mirage.css */ "./node_modules/codemirror/theme/ayu-mirage.css");
/* harmony import */ var codemirror_theme_ayu_mirage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_ayu_mirage_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_theme_base16_light_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/theme/base16-light.css */ "./node_modules/codemirror/theme/base16-light.css");
/* harmony import */ var codemirror_theme_base16_light_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_base16_light_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/theme/base16-dark.css */ "./node_modules/codemirror/theme/base16-dark.css");
/* harmony import */ var codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_theme_bespin_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/theme/bespin.css */ "./node_modules/codemirror/theme/bespin.css");
/* harmony import */ var codemirror_theme_bespin_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_bespin_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_theme_blackboard_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/theme/blackboard.css */ "./node_modules/codemirror/theme/blackboard.css");
/* harmony import */ var codemirror_theme_blackboard_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_blackboard_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_theme_cobalt_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/theme/cobalt.css */ "./node_modules/codemirror/theme/cobalt.css");
/* harmony import */ var codemirror_theme_cobalt_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_cobalt_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_theme_colorforth_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/theme/colorforth.css */ "./node_modules/codemirror/theme/colorforth.css");
/* harmony import */ var codemirror_theme_colorforth_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_colorforth_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/theme/dracula.css */ "./node_modules/codemirror/theme/dracula.css");
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-codemirror2 */ "react-codemirror2");
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Editor.js";



















if (typeof navigator !== "undefined") {
  __webpack_require__(/*! codemirror/mode/xml/xml */ "codemirror/mode/xml/xml");

  __webpack_require__(/*! codemirror/mode/css/css */ "codemirror/mode/css/css");

  __webpack_require__(/*! codemirror/mode/javascript/javascript */ "codemirror/mode/javascript/javascript");
}



const Editor = props => {
  const {
    language,
    displayName,
    value,
    onChange,
    themeValue,
    theme
  } = props;
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const handleChange = (editor, date, value) => {
    onChange(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `editor-container ${open ? '' : 'collapsed'} ${theme ? '' : 'theme-light'}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "editor-title",
      children: [displayName, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "expand-collapse-btn",
        onClick: () => setOpen(prevOpen => !prevOpen),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeIcon, {
          icon: open ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faCompressAlt : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faExpandAlt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_codemirror2__WEBPACK_IMPORTED_MODULE_19__.Controlled, {
      onBeforeChange: handleChange,
      value: value,
      className: "code-mirror-wrapper",
      options: {
        lineWrapping: true,
        lint: true,
        mode: language,
        lineNumbers: true,
        theme: `${themeValue ? themeValue : 'ayu-dark'}`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/components/Header/header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Theme/ThemeSwitcher */ "./src/components/Theme/ThemeSwitcher.js");
/* harmony import */ var _public_logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/logo-white.jpg */ "./public/logo-white.jpg");
/* harmony import */ var _public_logo_black_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/logo-black.png */ "./public/logo-black.png");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Header\\header.js";





const themeOptions = ['default', '3024-day', '3024-night', 'abbott', 'abcdef', 'ambiance', 'ayu-dark', 'ayu-mirage', 'base16-dark', 'base16-light', 'bespin', 'blackboard', 'cobalt', 'colorforth', 'dracula'];

const Header = ({
  setThemeValue,
  setTheme,
  theme
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `nav ${theme ? 'theme-dark' : 'theme-light'}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "checkbox",
      id: "nav-check"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `nav-title ${theme ? '' : 'nav-title-light'}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: theme ? _public_logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__.default : _public_logo_black_png__WEBPACK_IMPORTED_MODULE_4__.default,
          width: 30,
          height: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `nav-links ${theme ? '' : 'nav-links-light'}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.default, {
        setTheme: setTheme,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        style: {
          fontSize: '14px'
        },
        children: "Choose Editor Themes "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        className: `${theme ? 'theme-dark' : 'theme-light'}`,
        defaultValue: "ayu-dark",
        onChange: e => setThemeValue(e.target.value),
        children: themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: item,
          children: item
        }, item + index, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined) // <div className={`header-container ${theme ? 'theme-dark' : 'theme-light'}`}>
  //   <div>Logo</div>
  //     <>
  //       <ThemeSwitcher setTheme={setTheme} theme={theme} />
  //     </>
  //   <div className='header-right-box'>
  //     <select defaultValue='ayu-dark' onChange={(e) => setThemeValue(e.target.value)}>
  //       {themeOptions?.map((item, index) => (
  //         <option key={item+index} value={item}>{item}</option>
  //       ))}
  //     </select>
  //   </div>
  // </div>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Loader/loader.js":
/*!*****************************************!*\
  !*** ./src/components/Loader/loader.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Loader\\loader.js";


const Loader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    viewBox: "0 0 100 100",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 21 40 V 59",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          values: "0 21 59; 180 21 59",
          dur: "2s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 79 40 V 59",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          values: "0 79 59; -180 79 59",
          dur: "2s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 50 21 V 40",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
          attributeName: "d",
          values: "M 50 21 V 40; M 50 59 V 40",
          dur: "2s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 50 60 V 79",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
          attributeName: "d",
          values: "M 50 60 V 79; M 50 98 V 79",
          dur: "2s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 50 21 L 79 40 L 50 60 L 21 40 Z",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
          attributeName: "stroke",
          values: "rgba(255,255,255,1); rgba(100,100,100,0)",
          dur: "2s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 50 40 L 79 59 L 50 79 L 21 59 Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M 50 59 L 79 78 L 50 98 L 21 78 Z",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
          attributeName: "stroke",
          values: "rgba(100,100,100,0); rgba(255,255,255,1)",
          dur: "2s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "translate",
        values: "0 0; 0 -19",
        dur: "2s",
        repeatCount: "indefinite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/Loader/loaderText.js":
/*!*********************************************!*\
  !*** ./src/components/Loader/loaderText.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Loader\\loaderText.js";


const LoaderText = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "loader",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "O"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "E"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\xA0-\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "U"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\xA0-\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "P"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "P"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoaderText);

/***/ }),

/***/ "./src/components/Theme/ThemeSwitcher.js":
/*!***********************************************!*\
  !*** ./src/components/Theme/ThemeSwitcher.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "@mui/material/FormControlLabel");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Switch */ "@mui/material/Switch");
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Theme\\ThemeSwitcher.js";




const MaterialUISwitch = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_4___default()))(({
  theme
}) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2
  }
}));

const ThemeSwitcher = ({
  setTheme,
  theme
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default()), {
    control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MaterialUISwitch, {
      sx: {
        m: 1
      },
      defaultChecked: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 22
    }, undefined) //   label={`${theme ? "" :"Light Mode"}"Dark Mode"`}
    ,
    onChange: e => {
      var _e$target;

      return setTheme(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitcher);

/***/ }),

/***/ "./src/components/hooks/useLocalStorage.js":
/*!*************************************************!*\
  !*** ./src/components/hooks/useLocalStorage.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PREFIX = 'code-u-app-';

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (false) {}
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (false) {}
  }, [prefixedKey, value]);
  return [value, setValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Editor */ "./src/components/Editor.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hooks/useLocalStorage */ "./src/components/hooks/useLocalStorage.js");
/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/header */ "./src/components/Header/header.js");


var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\pages\\App.js";



 // import ResizePanel from "react-resize-panel";
// import dynamic from 'next/dynamic'
// const ResizePanel = dynamic(
//   () => import('react-resize-panel'),
//   { ssr: false }
// )

function App() {
  const [html, setHtml] = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.default)('html', '<h1>HTML goes here...</h1>');
  const [css, setCss] = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.default)('css', "body{background:green}");
  const [js, setJs] = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.default)('js', "//Javascript goes here \n console.log('Welcome')");
  const {
    0: srcDoc,
    1: setSrcDoc
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: themeValue,
    1: setThemeValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('ayu-dark');
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('theme-light');
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const timeDelay = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `);
    }, 350);
    return () => clearTimeout(timeDelay);
  }, [html, css, js]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_header__WEBPACK_IMPORTED_MODULE_4__.default, {
      setThemeValue: setThemeValue,
      setTheme: setTheme,
      theme: theme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pane top-pane",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_1__.default, {
        language: "xml",
        displayName: "HTML",
        value: html,
        onChange: setHtml,
        themeValue: themeValue,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_1__.default, {
        language: "css",
        displayName: "CSS",
        value: css,
        onChange: setCss,
        themeValue: themeValue,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_1__.default, {
        language: "javascript",
        displayName: "JS",
        value: js,
        onChange: setJs,
        themeValue: themeValue,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pane",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
        srcDoc: srcDoc,
        title: "output",
        sandbox: "allow-forms allow-popups allow-scripts allow-same-origin allow-modals",
        frameBorder: "0",
        width: "100%",
        height: "100%",
        className: "responsive-iframe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/pages/App.js");
/* harmony import */ var _components_Loader_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader/loader */ "./src/components/Loader/loader.js");
/* harmony import */ var _components_Loader_loaderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader/loaderText */ "./src/components/Loader/loaderText.js");


var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\pages\\index.js";




function Home() {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "main-loader",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader_loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader_loaderText__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./public/logo-black.png":
/*!*******************************!*\
  !*** ./public/logo-black.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/logo-black.afc85c8fe31927f20a9e65366ae3c8fe.png","height":517,"width":482,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAgElEQVR42mNgYGZl4DVnXy6gysbAwMLAwMAdz7mR9Qjneu5wBgYGttmcC0zYmPcxMHBsYZ/BwL6H/SjrOa7FrGc59rMeYGA7w7GWrZd9D9sk9q0sZxnY6zg2SUqwLpUXZd/LUQYyyon9IMtTjr08lgxAwMrOICrIVSTNxcnAwAoAF4wZyahLjloAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/logo-white.jpg":
/*!*******************************!*\
  !*** ./public/logo-white.jpg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/logo-white.98dff46fbc151a268e3eda5fe8321063.jpg","height":1600,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAGX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ }),

/***/ "./node_modules/codemirror/lib/codemirror.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/lib/codemirror.css ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/3024-day.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/theme/3024-day.css ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/3024-night.css":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/theme/3024-night.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/abbott.css":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/theme/abbott.css ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/abcdef.css":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/theme/abcdef.css ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/ambiance.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/theme/ambiance.css ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/ayu-dark.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/theme/ayu-dark.css ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/ayu-mirage.css":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/theme/ayu-mirage.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/base16-dark.css":
/*!*******************************************************!*\
  !*** ./node_modules/codemirror/theme/base16-dark.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/base16-light.css":
/*!********************************************************!*\
  !*** ./node_modules/codemirror/theme/base16-light.css ***!
  \********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/bespin.css":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/theme/bespin.css ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/blackboard.css":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/theme/blackboard.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/cobalt.css":
/*!**************************************************!*\
  !*** ./node_modules/codemirror/theme/cobalt.css ***!
  \**************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/colorforth.css":
/*!******************************************************!*\
  !*** ./node_modules/codemirror/theme/colorforth.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/codemirror/theme/dracula.css":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/theme/dracula.css ***!
  \***************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "@mui/material/FormControlLabel":
/*!*************************************************!*\
  !*** external "@mui/material/FormControlLabel" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/material/FormControlLabel");;

/***/ }),

/***/ "@mui/material/Switch":
/*!***************************************!*\
  !*** external "@mui/material/Switch" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/material/Switch");;

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/material/styles");;

/***/ }),

/***/ "codemirror/mode/css/css":
/*!******************************************!*\
  !*** external "codemirror/mode/css/css" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("codemirror/mode/css/css");;

/***/ }),

/***/ "codemirror/mode/javascript/javascript":
/*!********************************************************!*\
  !*** external "codemirror/mode/javascript/javascript" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("codemirror/mode/javascript/javascript");;

/***/ }),

/***/ "codemirror/mode/xml/xml":
/*!******************************************!*\
  !*** external "codemirror/mode/xml/xml" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("codemirror/mode/xml/xml");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-codemirror2":
/*!************************************!*\
  !*** external "react-codemirror2" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-codemirror2");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLXUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9zcmMvY29tcG9uZW50cy9FZGl0b3IuanMiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC8uL3NyYy9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC8uL3NyYy9jb21wb25lbnRzL0xvYWRlci9sb2FkZXJUZXh0LmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9zcmMvY29tcG9uZW50cy9UaGVtZS9UaGVtZVN3aXRjaGVyLmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC8uL3NyYy9wYWdlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwLy4vcHVibGljL2xvZ28tYmxhY2sucG5nIiwid2VicGFjazovL2NvZGUtdS1hcHAvLi9wdWJsaWMvbG9nby13aGl0ZS5qcGciLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2NvZGUtdS1hcHAvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xMYWJlbFwiIiwid2VicGFjazovL2NvZGUtdS1hcHAvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1N3aXRjaFwiIiwid2VicGFjazovL2NvZGUtdS1hcHAvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiIiwid2VicGFjazovL2NvZGUtdS1hcHAvZXh0ZXJuYWwgXCJjb2RlbWlycm9yL21vZGUvY3NzL2Nzc1wiIiwid2VicGFjazovL2NvZGUtdS1hcHAvZXh0ZXJuYWwgXCJjb2RlbWlycm9yL21vZGUvamF2YXNjcmlwdC9qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC9leHRlcm5hbCBcImNvZGVtaXJyb3IvbW9kZS94bWwveG1sXCIiLCJ3ZWJwYWNrOi8vY29kZS11LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2NvZGUtdS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwL2V4dGVybmFsIFwicmVhY3QtY29kZW1pcnJvcjJcIiIsIndlYnBhY2s6Ly9jb2RlLXUtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50IiwibGVuZ3RoIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJmaWx0ZXIiLCJzIiwia2luZCIsIlNldCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsInVzZUVmZmVjdCIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsInNldCIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIm5hdmlnYXRvciIsIkVkaXRvciIsInByb3BzIiwibGFuZ3VhZ2UiLCJkaXNwbGF5TmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0aGVtZVZhbHVlIiwidGhlbWUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNoYW5nZSIsImVkaXRvciIsImRhdGUiLCJwcmV2T3BlbiIsImZhQ29tcHJlc3NBbHQiLCJmYUV4cGFuZEFsdCIsImxpbmVXcmFwcGluZyIsImxpbnQiLCJtb2RlIiwibGluZU51bWJlcnMiLCJ0aGVtZU9wdGlvbnMiLCJIZWFkZXIiLCJzZXRUaGVtZVZhbHVlIiwic2V0VGhlbWUiLCJ3aGl0ZUxvZ28iLCJibGFja0xvZ28iLCJmb250U2l6ZSIsImUiLCJpdGVtIiwiaW5kZXgiLCJMb2FkZXIiLCJMb2FkZXJUZXh0IiwiTWF0ZXJpYWxVSVN3aXRjaCIsInN0eWxlZCIsIlN3aXRjaCIsInRyYW5zZm9ybSIsImNvbG9yIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb250ZW50IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsIlRoZW1lU3dpdGNoZXIiLCJtIiwiY2hlY2tlZCIsIlBSRUZJWCIsInVzZUxvY2FsU3RvcmFnZSIsImluaXRpYWxWYWx1ZSIsInByZWZpeGVkS2V5Iiwic2V0VmFsdWUiLCJBcHAiLCJodG1sIiwic2V0SHRtbCIsImNzcyIsInNldENzcyIsImpzIiwic2V0SnMiLCJzcmNEb2MiLCJzZXRTcmNEb2MiLCJ0aW1lRGVsYXkiLCJIb21lIiwic2V0TG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkE7QUFDQTtB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Q0dBLE9BQU8sZ0JBQ047QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFTTjtBQUFBLDZCQUNFLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkosbUJBREY7QUFrQkQsQzs7Ozs7Ozs7Ozs7O0FDbENELCtEQUFnQixDQUFDLDBJQUEwSSxpUUFBaVEsRTs7Ozs7Ozs7Ozs7O0FDQTVaLCtEQUFnQixDQUFDLDZJQUE2SSw2ZkFBNmYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzcEIsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsK0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKCh3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse3NyYzpzcmMsZGVjb2Rpbmc6XCJhc3luY1wiLHNpemVzOnNpemVzLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnY29kZW1pcnJvci9saWIvY29kZW1pcnJvci5jc3MnXHJcblxyXG5cclxuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lL2F5dS1kYXJrLmNzcydcclxuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lLzMwMjQtZGF5LmNzcydcclxuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lLzMwMjQtbmlnaHQuY3NzJ1xyXG5pbXBvcnQgJ2NvZGVtaXJyb3IvdGhlbWUvYWJib3R0LmNzcydcclxuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lL2FiY2RlZi5jc3MnXHJcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9hbWJpYW5jZS5jc3MnXHJcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9heXUtbWlyYWdlLmNzcydcclxuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lL2Jhc2UxNi1saWdodC5jc3MnXHJcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9iYXNlMTYtZGFyay5jc3MnXHJcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9iZXNwaW4uY3NzJ1xyXG5pbXBvcnQgJ2NvZGVtaXJyb3IvdGhlbWUvYmxhY2tib2FyZC5jc3MnXHJcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9jb2JhbHQuY3NzJ1xyXG5pbXBvcnQgJ2NvZGVtaXJyb3IvdGhlbWUvY29sb3Jmb3J0aC5jc3MnXHJcbmltcG9ydCAnY29kZW1pcnJvci90aGVtZS9kcmFjdWxhLmNzcydcclxuXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhQ29tcHJlc3NBbHQsIGZhRXhwYW5kQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJlcXVpcmUoXCJjb2RlbWlycm9yL21vZGUveG1sL3htbFwiKTtcclxuICAgIHJlcXVpcmUoXCJjb2RlbWlycm9yL21vZGUvY3NzL2Nzc1wiKTtcclxuICAgIHJlcXVpcmUoXCJjb2RlbWlycm9yL21vZGUvamF2YXNjcmlwdC9qYXZhc2NyaXB0XCIpXHJcbn1cclxuXHJcbmltcG9ydCB7IENvbnRyb2xsZWQgfSBmcm9tICdyZWFjdC1jb2RlbWlycm9yMic7XHJcblxyXG5jb25zdCBFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYW5ndWFnZSxcclxuICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICB0aGVtZVZhbHVlLFxyXG4gICAgICAgIHRoZW1lXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlZGl0b3IsIGRhdGUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXRvci1jb250YWluZXIgJHtvcGVuID8gJycgOiAnY29sbGFwc2VkJ30gJHt0aGVtZSA/ICcnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VkaXRvci10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICB7ZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdleHBhbmQtY29sbGFwc2UtYnRuJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHByZXZPcGVuID0+ICFwcmV2T3Blbil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17b3BlbiA/IGZhQ29tcHJlc3NBbHQgOiBmYUV4cGFuZEFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvbnRyb2xsZWRcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvZGUtbWlycm9yLXdyYXBwZXInXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdyYXBwaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGAke3RoZW1lVmFsdWUgPyB0aGVtZVZhbHVlIDogJ2F5dS1kYXJrJ31gXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4uL1RoZW1lL1RoZW1lU3dpdGNoZXInXHJcbmltcG9ydCB3aGl0ZUxvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvZ28td2hpdGUuanBnJztcclxuaW1wb3J0IGJsYWNrTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nby1ibGFjay5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IHRoZW1lT3B0aW9ucyA9IFtcclxuICAgICdkZWZhdWx0JyxcclxuICAgICczMDI0LWRheScsXHJcbiAgICAnMzAyNC1uaWdodCcsXHJcbiAgICAnYWJib3R0JyxcclxuICAgICdhYmNkZWYnLFxyXG4gICAgJ2FtYmlhbmNlJyxcclxuICAgICdheXUtZGFyaycsXHJcbiAgICAnYXl1LW1pcmFnZScsXHJcbiAgICAnYmFzZTE2LWRhcmsnLFxyXG4gICAgJ2Jhc2UxNi1saWdodCcsXHJcbiAgICAnYmVzcGluJyxcclxuICAgICdibGFja2JvYXJkJyxcclxuICAgICdjb2JhbHQnLFxyXG4gICAgJ2NvbG9yZm9ydGgnLFxyXG4gICAgJ2RyYWN1bGEnLFxyXG5dXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBzZXRUaGVtZVZhbHVlLCBzZXRUaGVtZSwgdGhlbWUgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2ICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJuYXYtY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRpdGxlICR7dGhlbWUgPyAnJyA6ICduYXYtdGl0bGUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17d2hpdGVMb2dvfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD0nbG9nbycgLz4gIENvZGUtVS1BcHAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGhlbWUgPyB3aGl0ZUxvZ28gOiBibGFja0xvZ299IHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdi1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi1saW5rcyAke3RoZW1lID8gJycgOiAnbmF2LWxpbmtzLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT5DaG9vc2UgRWRpdG9yIFRoZW1lcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e2Ake3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfSBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtICsgaW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWNvbnRhaW5lciAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAvLyAgIDxkaXY+TG9nbzwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8PlxyXG4gICAgICAgIC8vICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICAgIC8vICAgICA8Lz5cclxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQtYm94Jz5cclxuICAgICAgICAvLyAgICAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAvLyAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8b3B0aW9uIGtleT17aXRlbStpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICkpfVxyXG4gICAgICAgIC8vICAgICA8L3NlbGVjdD5cclxuICAgICAgICAvLyAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcbiAgICAgICAgICAgIDxnXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDIxIDQwIFYgNTlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIwIDIxIDU5OyAxODAgMjEgNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDc5IDQwIFYgNTlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIwIDc5IDU5OyAtMTgwIDc5IDU5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSA1MCAyMSBWIDQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cImRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCJNIDUwIDIxIFYgNDA7IE0gNTAgNTkgViA0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gNTAgNjAgViA3OVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiTSA1MCA2MCBWIDc5OyBNIDUwIDk4IFYgNzlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDUwIDIxIEwgNzkgNDAgTCA1MCA2MCBMIDIxIDQwIFpcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwicmdiYSgyNTUsMjU1LDI1NSwxKTsgcmdiYSgxMDAsMTAwLDEwMCwwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gNTAgNDAgTCA3OSA1OSBMIDUwIDc5IEwgMjEgNTkgWlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSA1MCA1OSBMIDc5IDc4IEwgNTAgOTggTCAyMSA3OCBaXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInN0cm9rZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz1cInJnYmEoMTAwLDEwMCwxMDAsMCk7IHJnYmEoMjU1LDI1NSwyNTUsMSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMCAwOyAwIC0xOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyPVwiMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvYWRlclRleHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiZuYnNwOy0mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiZuYnNwOy0mbmJzcDs8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3Bhbj5BPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5QPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5QPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJUZXh0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG11aS9tYXRlcmlhbC9Td2l0Y2gnO1xyXG5cclxuXHJcbmNvbnN0IE1hdGVyaWFsVUlTd2l0Y2ggPSBzdHlsZWQoU3dpdGNoKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgd2lkdGg6IDYyLFxyXG4gICAgaGVpZ2h0OiAzNCxcclxuICAgIHBhZGRpbmc6IDcsXHJcbiAgICAnJiAuTXVpU3dpdGNoLXN3aXRjaEJhc2UnOiB7XHJcbiAgICAgICAgbWFyZ2luOiAxLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg2cHgpJyxcclxuICAgICAgICAnJi5NdWktY2hlY2tlZCc6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgyMnB4KScsXHJcbiAgICAgICAgICAgICcmIC5NdWlTd2l0Y2gtdGh1bWI6YmVmb3JlJzoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PHBhdGggZmlsbD1cIiR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICl9XCIgZD1cIk00LjIgMi41bC0uNyAxLjgtMS44LjcgMS44LjcuNyAxLjguNi0xLjhMNi43IDVsLTEuOS0uNy0uNi0xLjh6bTE1IDguM2E2LjcgNi43IDAgMTEtNi42LTYuNiA1LjggNS44IDAgMDA2LjYgNi42elwiLz48L3N2Zz4nKWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcmICsgLk11aVN3aXRjaC10cmFjayc6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyM4Nzk2QTUnIDogJyNhYWI0YmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVN3aXRjaC10aHVtYic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyMwMDM4OTInIDogJyMwMDFlM2MnLFxyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGZpbGw9XCIke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICcjZmZmJyxcclxuICAgICAgICAgICAgKX1cIiBkPVwiTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5elwiLz48L3N2Zz4nKWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpU3dpdGNoLXRyYWNrJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjODc5NkE1JyA6ICcjYWFiNGJlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDIwIC8gMixcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFRoZW1lU3dpdGNoZXIgPSAoeyBzZXRUaGVtZSwgdGhlbWUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICBjb250cm9sPXs8TWF0ZXJpYWxVSVN3aXRjaCBzeD17eyBtOiAxIH19IGRlZmF1bHRDaGVja2VkIC8+fVxyXG4gICAgICAgICAgICAvLyAgIGxhYmVsPXtgJHt0aGVtZSA/IFwiXCIgOlwiTGlnaHQgTW9kZVwifVwiRGFyayBNb2RlXCJgfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lKGU/LnRhcmdldD8uY2hlY2tlZCl9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2hlciIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUFJFRklYID0gJ2NvZGUtdS1hcHAtJ1xyXG5cclxuY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gKGtleSwgaW5pdGlhbFZhbHVlKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJlZml4ZWRLZXkgPSBQUkVGSVggKyBrZXlcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIGNvbnN0IGpzb25WYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByZWZpeGVkS2V5KVxyXG4gICAgICAgIGlmKGpzb25WYWx1ZSAhPT0gbnVsbCkgcmV0dXJuIEpTT04ucGFyc2UoanNvblZhbHVlKVxyXG5cclxuICAgICAgICBpZih0eXBlb2YgaW5pdGlhbFZhbHVlID09PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByZWZpeGVkS2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3ByZWZpeGVkS2V5LCB2YWx1ZV0pXHJcblxyXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0b3JhZ2UiLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdG9yJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9ob29rcy91c2VMb2NhbFN0b3JhZ2UnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyJ1xyXG4vLyBpbXBvcnQgUmVzaXplUGFuZWwgZnJvbSBcInJlYWN0LXJlc2l6ZS1wYW5lbFwiO1xyXG5cclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5cclxuLy8gY29uc3QgUmVzaXplUGFuZWwgPSBkeW5hbWljKFxyXG4vLyAgICgpID0+IGltcG9ydCgncmVhY3QtcmVzaXplLXBhbmVsJyksXHJcbi8vICAgeyBzc3I6IGZhbHNlIH1cclxuLy8gKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG5cclxuICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2h0bWwnLCAnPGgxPkhUTUwgZ29lcyBoZXJlLi4uPC9oMT4nKVxyXG4gIGNvbnN0IFtjc3MsIHNldENzc10gPSB1c2VMb2NhbFN0b3JhZ2UoJ2NzcycsIFwiYm9keXtiYWNrZ3JvdW5kOmdyZWVufVwiKVxyXG4gIGNvbnN0IFtqcywgc2V0SnNdID0gdXNlTG9jYWxTdG9yYWdlKCdqcycsIFwiLy9KYXZhc2NyaXB0IGdvZXMgaGVyZSBcXG4gY29uc29sZS5sb2coJ1dlbGNvbWUnKVwiKVxyXG4gIGNvbnN0IFtzcmNEb2MsIHNldFNyY0RvY10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgW3RoZW1lVmFsdWUsIHNldFRoZW1lVmFsdWVdID0gdXNlU3RhdGUoJ2F5dS1kYXJrJylcclxuXHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgndGhlbWUtbGlnaHQnKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZURlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFNyY0RvYyhgXHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGJvZHk+JHtodG1sfTwvYm9keT5cclxuICAgICAgICA8c3R5bGU+JHtjc3N9PC9zdHlsZT5cclxuICAgICAgICA8c2NyaXB0PiR7anN9PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9odG1sPlxyXG4gICAgICBgKVxyXG4gICAgfSwgMzUwKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZURlbGF5KVxyXG5cclxuICB9LCBbaHRtbCwgY3NzLCBqc10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIHNldFRoZW1lVmFsdWU9e3NldFRoZW1lVmFsdWV9IHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICB7LyogXHJcbiAgICAgPFJlc2l6ZVBhbmVsXHJcbiAgICAgICAgZGlyZWN0aW9uPVwic1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHt0aGVtZSA/ICd0aGVtZS1kYXJrJyA6ICd0aGVtZS1saWdodCd9YH1cclxuICAgICAgICAvLyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgaGVpZ2h0OiBcIjEwJVwiIH19XHJcbiAgICAgID4gICAgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZSB0b3AtcGFuZSc+XHJcbiAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgbGFuZ3VhZ2U9J3htbCdcclxuICAgICAgICAgIGRpc3BsYXlOYW1lPSdIVE1MJ1xyXG4gICAgICAgICAgdmFsdWU9e2h0bWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0SHRtbH1cclxuXHJcbiAgICAgICAgICB0aGVtZVZhbHVlPXt0aGVtZVZhbHVlfVxyXG5cclxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgIGxhbmd1YWdlPSdjc3MnXHJcbiAgICAgICAgICBkaXNwbGF5TmFtZT0nQ1NTJ1xyXG4gICAgICAgICAgdmFsdWU9e2Nzc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDc3N9XHJcblxyXG4gICAgICAgICAgdGhlbWVWYWx1ZT17dGhlbWVWYWx1ZX1cclxuXHJcbiAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICBsYW5ndWFnZT0namF2YXNjcmlwdCdcclxuICAgICAgICAgIGRpc3BsYXlOYW1lPSdKUydcclxuICAgICAgICAgIHZhbHVlPXtqc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRKc31cclxuXHJcbiAgICAgICAgICB0aGVtZVZhbHVlPXt0aGVtZVZhbHVlfVxyXG5cclxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvUmVzaXplUGFuZWw+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZSc+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgc3JjRG9jPXtzcmNEb2N9XHJcbiAgICAgICAgICB0aXRsZT0nb3V0cHV0J1xyXG4gICAgICAgICAgc2FuZGJveD0nYWxsb3ctZm9ybXMgYWxsb3ctcG9wdXBzIGFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctbW9kYWxzJ1xyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9JzAnXHJcbiAgICAgICAgICB3aWR0aD0nMTAwJSdcclxuICAgICAgICAgIGhlaWdodD0nMTAwJSdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtaWZyYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyJztcclxuaW1wb3J0IExvYWRlclRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyVGV4dCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSwgNTAwMCk7XHJcbiAgfSwgW2xvYWRpbmddKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tbG9hZGVyJz5cclxuICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgIDxMb2FkZXJUZXh0IC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICAgICAgOlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9sb2dvLWJsYWNrLmFmYzg1YzhmZTMxOTI3ZjIwYTllNjUzNjZhZTNjOGZlLnBuZ1wiLFwiaGVpZ2h0XCI6NTE3LFwid2lkdGhcIjo0ODIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FRQUFBQ2ZEUzJOQUFBQWdFbEVRVlI0Mm1OZ1lHWmw0RFZuWHk2Z3lzYkF3TUxBd01BZHo3bVI5UWpuZXU1d0JnWUd0dG1jQzB6WW1QY3hNSEJzWVovQndMNkgvU2pyT2E3RnJHYzU5ck1lWUdBN3c3R1dyWmQ5RDlzazlxMHNaeG5ZNnpnMlNVcXdMcFVYWmQvTFVRWXl5b245SU10VGpyMDhsZ3hBd01yT0lDcklWU1ROeGNuQXdBb0FGNHdaeWFoTGpsb0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2xvZ28td2hpdGUuOThkZmY0NmZiYzE1MWEyNjhlM2VkYTVmZTgzMjEwNjMuanBnXCIsXCJoZWlnaHRcIjoxNjAwLFwid2lkdGhcIjoxNjAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9LQ2dvS0Nnc01EQXNQRUE0UUR4WVVFeE1VRmlJWUdoZ2FHQ0l6SUNVZ0lDVWdNeTAzTENrc055MVJRRGc0UUZGZVQwcFBYbkZsWlhHUGlJKzd1L3NCQ2dvS0Nnb0tDd3dNQ3c4UURoQVBGaFFURXhRV0loZ2FHQm9ZSWpNZ0pTQWdKU0F6TFRjc0tTdzNMVkZBT0RoQVVWNVBTazllY1dWbGNZK0lqN3U3Ky8vQ0FCRUlBQWdBQ0FNQklnQUNFUUVERVFIL3hBQVVBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUgvOW9BQ0FFQkFBQUFBR1gveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVDRUFBQUFILy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRURFQUFBQUgvL3hBQVVFQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFQkFBRS9BSC8veEFBVUVRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVDQVFFL0FILy94QUFVRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRURBUUUvQUgvLzJRPT1cIn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU3dpdGNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29kZW1pcnJvci9tb2RlL2Nzcy9jc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvZGVtaXJyb3IvbW9kZS9qYXZhc2NyaXB0L2phdmFzY3JpcHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvZGVtaXJyb3IvbW9kZS94bWwveG1sXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb2RlbWlycm9yMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9