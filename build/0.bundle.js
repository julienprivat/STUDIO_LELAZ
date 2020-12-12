(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/promise-ext-delay/src/main.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-ext-delay/src/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @licence
 * @author Sergey Melyukov 2016
 */

(function() {
	/**
	 * Inject method with name `extName` to `PromiseConstructor`
	 *
	 * @param {Function|String=} PromiseConstructor which constructor should be extended
	 *                           If not defined, then default promise-constructor will be used
	 * @param {String=} extName name of the method. If not defined, then 'delay' will be used
	 *
	 * @returns {Function}
	 *
	 * @throws {Error}
	 */
	function inject(PromiseConstructor, extName) {
		if (typeof PromiseConstructor === 'string') {
			extName = PromiseConstructor;
		}

		extName = typeof extName === 'string' ? extName : 'delay';

		PromiseConstructor =
			(typeof PromiseConstructor === 'function' && PromiseConstructor) ||
			(typeof Promise === 'function' && Promise) || null;

		if (!PromiseConstructor) {
			throw new Error('Wrong constructor is passed or browser doesn\'t support promises');
		}

		/**
		 * Delay promise
		 * Will be resolved after `ms` milliseconds. 1000 by default
		 *
		 * @param {number=} ms
		 *
		 * @return {Promise}
		 */
		PromiseConstructor[extName] = function(ms) {
			ms = ms || 1000;

			if (this instanceof PromiseConstructor) {
				return this.then(function(value) {
					return PromiseConstructor[extName](ms).then(function() {
						return value;
					});
				});
			} else {
				return new PromiseConstructor(function(resolve) {
					setTimeout(resolve, ms);
				});
			}
		};

		if (typeof PromiseConstructor === 'function' && PromiseConstructor.prototype && PromiseConstructor.prototype.constructor === PromiseConstructor) {
			PromiseConstructor.prototype[extName] = PromiseConstructor[extName];
		}

		return PromiseConstructor;
	}

	var root = (typeof self == 'object' && self.self === self && self) ||
		(typeof global == 'object' && global.global === global && global);

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return inject;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1leHQtZGVsYXkvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0EsY0FBYztBQUNkO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsbUNBQU87QUFDVDtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUlOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbmNlXG4gKiBAYXV0aG9yIFNlcmdleSBNZWx5dWtvdiAyMDE2XG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuXHQvKipcblx0ICogSW5qZWN0IG1ldGhvZCB3aXRoIG5hbWUgYGV4dE5hbWVgIHRvIGBQcm9taXNlQ29uc3RydWN0b3JgXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nPX0gUHJvbWlzZUNvbnN0cnVjdG9yIHdoaWNoIGNvbnN0cnVjdG9yIHNob3VsZCBiZSBleHRlbmRlZFxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCBkZWZpbmVkLCB0aGVuIGRlZmF1bHQgcHJvbWlzZS1jb25zdHJ1Y3RvciB3aWxsIGJlIHVzZWRcblx0ICogQHBhcmFtIHtTdHJpbmc9fSBleHROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZC4gSWYgbm90IGRlZmluZWQsIHRoZW4gJ2RlbGF5JyB3aWxsIGJlIHVzZWRcblx0ICpcblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKlxuXHQgKiBAdGhyb3dzIHtFcnJvcn1cblx0ICovXG5cdGZ1bmN0aW9uIGluamVjdChQcm9taXNlQ29uc3RydWN0b3IsIGV4dE5hbWUpIHtcblx0XHRpZiAodHlwZW9mIFByb21pc2VDb25zdHJ1Y3RvciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGV4dE5hbWUgPSBQcm9taXNlQ29uc3RydWN0b3I7XG5cdFx0fVxuXG5cdFx0ZXh0TmFtZSA9IHR5cGVvZiBleHROYW1lID09PSAnc3RyaW5nJyA/IGV4dE5hbWUgOiAnZGVsYXknO1xuXG5cdFx0UHJvbWlzZUNvbnN0cnVjdG9yID1cblx0XHRcdCh0eXBlb2YgUHJvbWlzZUNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIFByb21pc2VDb25zdHJ1Y3RvcikgfHxcblx0XHRcdCh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiBQcm9taXNlKSB8fCBudWxsO1xuXG5cdFx0aWYgKCFQcm9taXNlQ29uc3RydWN0b3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignV3JvbmcgY29uc3RydWN0b3IgaXMgcGFzc2VkIG9yIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgcHJvbWlzZXMnKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBEZWxheSBwcm9taXNlXG5cdFx0ICogV2lsbCBiZSByZXNvbHZlZCBhZnRlciBgbXNgIG1pbGxpc2Vjb25kcy4gMTAwMCBieSBkZWZhdWx0XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcj19IG1zXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdFByb21pc2VDb25zdHJ1Y3RvcltleHROYW1lXSA9IGZ1bmN0aW9uKG1zKSB7XG5cdFx0XHRtcyA9IG1zIHx8IDEwMDA7XG5cblx0XHRcdGlmICh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZUNvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZUNvbnN0cnVjdG9yW2V4dE5hbWVdKG1zKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZUNvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmICh0eXBlb2YgUHJvbWlzZUNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIFByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yKSB7XG5cdFx0XHRQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlW2V4dE5hbWVdID0gUHJvbWlzZUNvbnN0cnVjdG9yW2V4dE5hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlQ29uc3RydWN0b3I7XG5cdH1cblxuXHR2YXIgcm9vdCA9ICh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZikgfHxcblx0XHQodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsKTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGluamVjdDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGluamVjdDtcblx0fSBlbHNlIHtcblx0XHRyb290LlByb21pc2VEZWxheSA9IGluamVjdDtcblx0fVxufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=