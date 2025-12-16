exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 62:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 288))

/***/ }),

/***/ 3354:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(2307);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.mjs
var fi = __webpack_require__(891);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(7686);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 244 modules
var proxy = __webpack_require__(8063);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/FullScreenNav.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


 // Importamos el icono de cerrar
function FullScreenNav({ isOpen, setIsOpen, prop }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
        children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
            initial: {
                x: "-100%"
            },
            animate: {
                x: 0
            },
            exit: {
                x: "-100%"
            },
            transition: {
                duration: 0.4
            },
            style: {
                backgroundColor: prop
            },
            className: "fixed inset-0 text-3xl font-gotham uppercase text-black z-50 flex flex-col justify-center items-center text-center ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>setIsOpen(false),
                    className: "absolute md:top-10 top-8 left-8 focus:outline-none",
                    "aria-label": "Cerrar men\xfa",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi/* FiX */.q5L, {
                        size: 32,
                        className: "text-black "
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-col gap-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                onClick: ()=>setIsOpen(false),
                                replace: true,
                                className: "text-3xl 3xl:text-6xl xl:text-5xl font-gotham uppercase custom-stroke-hover-gradient",
                                children: "Inicio"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/servicios",
                                onClick: ()=>setIsOpen(false),
                                replace: true,
                                className: "text-3xl 3xl:text-6xl xl:text-5xl font-gotham uppercase  custom-stroke-hover-gradient",
                                children: "Nuestros Servicios"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/quienessomos",
                                onClick: ()=>setIsOpen(false),
                                replace: true,
                                className: "text-3xl 3xl:text-6xl xl:text-5xl font-gotham uppercase  custom-stroke-hover-gradient",
                                children: "\xbfQUI\xc9NES SOMOS?"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/clientes",
                                onClick: ()=>setIsOpen(false),
                                replace: true,
                                className: "text-3xl 3xl:text-6xl xl:text-5xl font-gotham uppercase  custom-stroke-hover-gradient",
                                children: "Confian en nosotros"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/sumate",
                                onClick: ()=>setIsOpen(false),
                                replace: true,
                                className: "text-3xl 3xl:text-6xl xl:text-5xl font-gotham uppercase  custom-stroke-hover-gradient",
                                children: "Sumate al team"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contacto",
                                onClick: ()=>setIsOpen(false),
                                replace: true,
                                className: "text-3xl 3xl:text-6xl xl:text-5xl font-gotham uppercase  custom-stroke-hover-gradient",
                                children: "Contactanos"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 




const metadata = {
    title: "CAS - Marketing & Design",
    description: "Agencia de marketing y dise\xf1o. Potenciamos tu marca.",
    openGraph: {
        title: "CAS - Marketing & Design",
        description: "Agencia de marketing y dise\xf1o. Potenciamos tu marca.",
        url: "https://castradeandco.com",
        siteName: "CAS - Marketing & Design",
        images: [
            {
                url: "/LogoCasColor.png",
                width: 786,
                height: 342,
                alt: "CAS - Marketing & Design"
            }
        ],
        locale: "es_ES",
        type: "website"
    }
};
function RootLayout({ children }) {
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const backgroundColor = "#ffffff";
    (0,react_.useEffect)(()=>{
        document.body.style.backgroundColor = backgroundColor;
    }, [
        backgroundColor
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "es",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "CAS - Marketing & Design"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: "overflow-hidden transition-colors duration-700 font-gotham",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-black absolute z-20 top-0 left-0 h-full w-[100px] border-r border-black/30 flex-col items-center justify-between py-8 md:inline hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "mt-2 left-8 absolute",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi/* FiAlignJustify */.X_s, {
                                    size: 32,
                                    className: "text-white "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute bottom-64 3xl:bottom-80 left-16 transform -translate-x-1/2 rotate-[-90deg] origin-bottom text-white opacity-80 tracking-widest text-2xl 3xl:text-3xl whitespace-nowrap custom-stroke-hover  transition-all transition-discrete ease-in-out",
                                children: "CAS - MARKETING & DESIGN"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute z-50 md:top-10 top-8 left-6 flex-col space-y-2 font-gotham inline md:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fi/* FiAlignJustify */.X_s, {
                                size: 32,
                                className: "text-black z-0"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FullScreenNav, {
                        prop: backgroundColor,
                        isOpen: isOpen,
                        setIsOpen: setIsOpen
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "max-w-[1980px] w-full",
                            children: children
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useIsIOS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useIsIOS auto */ 
function useIsIOS() {
    const [isIOS, setIsIOS] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
    }, []);
    return isIOS;
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\fadamoli\Desktop\CAS\nextjs-tailwind-gotham\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2307:
/***/ (() => {



/***/ })

};
;