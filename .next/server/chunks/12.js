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
    const currentIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0); // ← Usamos useRef para mantener actualizado el índice
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            scrollToIndex: (index)=>{
                const container = containerRef.current;
                if (container) {
                    currentIndexRef.current = index; // ← Actualizamos el índice
                    container.scrollTo({
                        left: index * window.innerWidth,
                        behavior: "smooth"
                    });
                }
            },
            getScrollableElement: ()=>containerRef.current
        }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = containerRef.current;
        if (!el) return;
        let isThrottled = false;
        const childrenCount = el.children.length;
        const onWheel = (e)=>{
            if (isThrottled) return;
            if (Math.abs(e.deltaY) < 10) return;
            e.preventDefault();
            const direction = e.deltaY > 0 ? 1 : -1;
            currentIndexRef.current = Math.min(Math.max(0, currentIndexRef.current + direction), childrenCount - 1);
            el.scrollTo({
                left: currentIndexRef.current * window.innerWidth,
                behavior: "smooth"
            });
            isThrottled = true;
            setTimeout(()=>{
                isThrottled = false;
            }, 700);
        };
        // Manejo de touch para móvil
        let startX;
        let isScrolling;
        const onTouchStart = (e)=>{
            startX = e.touches[0].clientX;
            isScrolling = true;
        };
        const onTouchMove = (e)=>{
            if (!isScrolling) return;
            e.preventDefault(); // Prevenir scroll vertical
        };
        const onTouchEnd = (e)=>{
            if (!isScrolling) return;
            isScrolling = false;
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            // Solo ajustar si el desplazamiento es significativo
            if (Math.abs(diffX) > 50) {
                const direction = diffX > 0 ? 1 : -1;
                currentIndexRef.current = Math.min(Math.max(0, currentIndexRef.current + direction), childrenCount - 1);
                el.scrollTo({
                    left: currentIndexRef.current * window.innerWidth,
                    behavior: "smooth"
                });
            } else {
                // Ajustar al slide actual si no hubo suficiente desplazamiento
                el.scrollTo({
                    left: currentIndexRef.current * window.innerWidth,
                    behavior: "smooth"
                });
            }
        };
        el.addEventListener("touchstart", onTouchStart);
        el.addEventListener("touchmove", onTouchMove, {
            passive: false
        });
        el.addEventListener("touchend", onTouchEnd);
        el.addEventListener("wheel", onWheel, {
            passive: false
        });
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