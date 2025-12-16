"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 6012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const HorizontalScrollWrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children }, ref)=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const currentIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    /** Obtiene el ancho real de cada slide */ const getSlideWidth = ()=>{
        const el = containerRef.current;
        if (!el) return window.innerWidth;
        return el.children[0]?.clientWidth || window.innerWidth;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            scrollToIndex: (index)=>{
                const container = containerRef.current;
                if (!container) return;
                currentIndexRef.current = index;
                const slideWidth = getSlideWidth();
                container.scrollTo({
                    left: index * slideWidth,
                    behavior: "smooth"
                });
            },
            getScrollableElement: ()=>containerRef.current
        }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = containerRef.current;
        if (!el) return;
        let isThrottled = false;
        const childrenCount = el.children.length;
        /** ======= SCROLL CON RUEDA ======= */ const onWheel = (e)=>{
            if (isThrottled) return;
            if (Math.abs(e.deltaY) < 10) return; // Ignorar micro desplazamientos
            e.preventDefault();
            const direction = e.deltaY > 0 ? 1 : -1;
            currentIndexRef.current = Math.min(Math.max(0, currentIndexRef.current + direction), childrenCount - 1);
            const slideWidth = getSlideWidth();
            el.scrollTo({
                left: currentIndexRef.current * slideWidth,
                behavior: "smooth"
            });
            isThrottled = true;
            setTimeout(()=>isThrottled = false, 650);
        };
        /** ======= TOUCH PARA MÓVIL ======= */ let startX = 0;
        let isScrolling = false;
        const onTouchStart = (e)=>{
            startX = e.touches[0].clientX;
            isScrolling = true;
        };
        const onTouchMove = (e)=>{
            if (!isScrolling) return;
            e.preventDefault();
        };
        const onTouchEnd = (e)=>{
            if (!isScrolling) return;
            isScrolling = false;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            const slideWidth = getSlideWidth();
            if (Math.abs(diff) > 50) {
                const direction = diff > 0 ? 1 : -1;
                currentIndexRef.current = Math.min(Math.max(0, currentIndexRef.current + direction), childrenCount - 1);
            }
            el.scrollTo({
                left: currentIndexRef.current * slideWidth,
                behavior: "smooth"
            });
        };
        /** ======= EVENT LISTENERS ======= */ el.addEventListener("wheel", onWheel, {
            passive: false
        });
        el.addEventListener("touchstart", onTouchStart);
        el.addEventListener("touchmove", onTouchMove, {
            passive: false
        });
        el.addEventListener("touchend", onTouchEnd);
        return ()=>{
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: containerRef,
        className: "flex w-screen h-[100dvh] safe-area overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-none touch-pan-x",
        children: react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-screen h-[100dvh] safe-area flex-shrink-0 snap-start",
                children: child
            }, index))
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalScrollWrapper);


/***/ })

};
;