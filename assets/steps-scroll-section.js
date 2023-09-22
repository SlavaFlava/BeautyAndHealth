"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}!function n(o,i,s){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(u)return u(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,s)}return i[e].exports}for(var u="function"==typeof require&&require,t=0;t<s.length;t++)c(s[t]);return c}({1:[function(t,e,r){customElements.get("s-steps-scroll")||customElements.define("s-steps-scroll",function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),_defineProperty(_assertThisInitialized(t=e.call(this)),"activeImages",[1,2]),t}return _createClass(r,[{key:"connectedCallback",value:function(){this.scrollEvent()}},{key:"checkHeight",value:function(){var e=this,t=this.querySelectorAll(".s-steps-scroll__images__image"),r=Array.from(this.querySelectorAll(".s-steps-scroll__content__step"));t.forEach(function(t){t.getBoundingClientRect().y<Math.round(window.screen.availHeight/3)?e.activeImages.includes(t.getAttribute("data-image-index"))||(null!=r[t.getAttribute("data-image-index")-2]&&(r[t.getAttribute("data-image-index")-2].classList="s-steps-scroll__content__step s-steps-scroll__content__step--top"),null!=r[t.getAttribute("data-image-index")-1]&&(r[t.getAttribute("data-image-index")-1].classList="s-steps-scroll__content__step s-steps-scroll__content__step--active"),null!=r[t.getAttribute("data-image-index")]&&(r[t.getAttribute("data-image-index")].classList="s-steps-scroll__content__step s-steps-scroll__content__step--bottom"),e.activeImages.push(t.getAttribute("data-image-index"))):t.getBoundingClientRect().y>Math.round(window.screen.availHeight)+100&&e.activeImages.includes(t.getAttribute("data-image-index"))&&(null!=r[t.getAttribute("data-image-index")-3]&&(r[t.getAttribute("data-image-index")-3].classList="s-steps-scroll__content__step s-steps-scroll__content__step--top"),null!=r[t.getAttribute("data-image-index")-2]&&(r[t.getAttribute("data-image-index")-2].classList="s-steps-scroll__content__step s-steps-scroll__content__step--active"),null!=r[t.getAttribute("data-image-index")-1]&&(r[t.getAttribute("data-image-index")-1].classList="s-steps-scroll__content__step s-steps-scroll__content__step--bottom"),e.activeImages.pop())})}},{key:"scrollEvent",value:function(){var t=this;window.addEventListener("scroll",function(){return t.checkHeight()})}}]),r}())},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc3RlcHMtc2Nyb2xsLXNlY3Rpb24uanMiLCJzdGVwcy1zY3JvbGwtc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJjdXN0b21FbGVtZW50cyIsImdldCIsImRlZmluZSIsIl9pbmhlcml0cyIsIlNTdGVwc1Njcm9sbCIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInNjcm9sbEV2ZW50IiwiX3RoaXMyIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRlbnRzIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJNYXRoIiwicm91bmQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImFjdGl2ZUltYWdlcyIsImluY2x1ZGVzIiwiZ2V0QXR0cmlidXRlIiwidW5kZWZpbmVkIiwiY2xhc3NMaXN0IiwicHVzaCIsInBvcCIsIl90aGlzMyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0hlaWdodCJdLCJtYXBwaW5ncyI6IjZnSEFBQSxDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxHQUFBLENBQUFKLEVBQUFHLEdBQUEsQ0FBQSxHQUFBLENBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLFlBQUEsT0FBQUMsU0FBQUEsUUFBQSxHQUFBLENBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEVBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEdBQUEsR0FBQU8sS0FBQSxtQkFBQUYsQ0FBQSxDQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsRUFBQSxFQUFBYixFQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxPQUFBSSxFQUFBSCxFQUFBSSxHQUFBLEdBQUFMLElBQUFBLENBQUEsQ0FBQSxFQUFBYSxFQUFBQSxFQUFBQyxRQUFBZCxFQUFBQyxFQUFBQyxFQUFBQyxDQUFBLENBQUEsQ0FBQSxPQUFBRCxFQUFBRyxHQUFBUyxPQUFBLENBQUEsSUFBQSxJQUFBTCxFQUFBLFlBQUEsT0FBQUQsU0FBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxDQUFBLEdBQUFELEVBQUFELEVBQUFFLEVBQUEsRUFBQSxPQUFBRCxDQUFBLEVBQUEsQ0FBQWEsRUFBQSxDQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdDQUFLLGVBQUFDLElBQUEsZ0JBQUEsR0FFQUQsZUFBQUUsT0FBQSxpQkFBQSxXQUFBQyxVQUFBQyxFQW1DQUMsaUJBbkNBQyxXQUFBLENBQUEsRUFBQSxJQUFBQyxFQUFBQyxhQUFBSixDQUFBLEVBQ0EsU0FBQUEsSUFBQSxJQUFBSyxFQVFBLE9BUkFDLGdCQUFBQyxLQUFBUCxDQUFBLEVBQ0FRLGdCQUFBQyx1QkFBQUosRUFBQUYsRUFBQVgsS0FBQWUsSUFBQSxDQUFBLEVBQUEsZUFPQSxDQUFBLEVBQUEsRUFBQSxFQUFBRixDQU5BLENBZ0NBLE9BaENBSyxhQUFBVixFQUFBLENBQUEsQ0FBQVcsSUFBQSxvQkFBQUMsTUFFQSxXQUNBTCxLQUFBTSxZQUFBLENBQ0EsQ0FBQSxFQUFBLENBQUFGLElBQUEsY0FBQUMsTUFHQSxXQUFBLElBQUFFLEVBQUFQLEtBRUFRLEVBQUFSLEtBQUFTLGlCQUFBLGdDQUFBLEVBQ0FDLEVBQUFDLE1BQUFDLEtBQUFaLEtBQUFTLGlCQUFBLGdDQUFBLENBQUEsRUFFQUQsRUFBQUssUUFBQSxTQUFBMUMsR0FDQUEsRUFBQTJDLHNCQUFBLEVBQUFDLEVBQUFDLEtBQUFDLE1BQUFDLE9BQUFDLE9BQUFDLFlBQUEsQ0FBQSxFQUNBYixFQUFBYyxhQUFBQyxTQUFBbkQsRUFBQW9ELGFBQUEsa0JBQUEsQ0FBQSxJQUNBQyxNQUFBZCxFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxLQUFBYixFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxHQUFBRSxVQUFBLG9FQUNBRCxNQUFBZCxFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxLQUFBYixFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxHQUFBRSxVQUFBLHVFQUNBRCxNQUFBZCxFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsS0FBQWIsRUFBQXZDLEVBQUFvRCxhQUFBLGtCQUFBLEdBQUFFLFVBQUEsdUVBQ0FsQixFQUFBYyxhQUFBSyxLQUFBdkQsRUFBQW9ELGFBQUEsa0JBQUEsQ0FBQSxHQUdBcEQsRUFBQTJDLHNCQUFBLEVBQUFDLEVBQUFDLEtBQUFDLE1BQUFDLE9BQUFDLE9BQUFDLFdBQUEsRUFBQSxLQUFBYixFQUFBYyxhQUFBQyxTQUFBbkQsRUFBQW9ELGFBQUEsa0JBQUEsQ0FBQSxJQUNBQyxNQUFBZCxFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxLQUFBYixFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxHQUFBRSxVQUFBLG9FQUNBRCxNQUFBZCxFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxLQUFBYixFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxHQUFBRSxVQUFBLHVFQUNBRCxNQUFBZCxFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxLQUFBYixFQUFBdkMsRUFBQW9ELGFBQUEsa0JBQUEsRUFBQSxHQUFBRSxVQUFBLHVFQUNBbEIsRUFBQWMsYUFBQU0sSUFBQSxFQUVBLENBQUEsQ0FDQSxDQUFBLEVBQUEsQ0FBQXZCLElBQUEsY0FBQUMsTUFFQSxXQUFBLElBQUF1QixFQUFBNUIsS0FDQWtCLE9BQUFXLGlCQUFBLFNBQUEsV0FBQSxPQUFBRCxFQUFBRSxZQUFBLENBQUEsQ0FBQSxDQUNBLENBQUEsRUFBQSxFQUFBckMsQ0FBQSxFQW5DQSxDQUFBLENDdUNBLEVBQUUsR0Z6Q0YsRUFBQSxHQUFBLENBQUFuQixFQUFBIiwiZmlsZSI6InN0ZXBzLXNjcm9sbC1zZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdzLXN0ZXBzLXNjcm9sbCcpKSB7XG5cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzLXN0ZXBzLXNjcm9sbCcsIGNsYXNzIFNTdGVwc1Njcm9sbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50KClcbiAgICB9XG5cbiAgICBhY3RpdmVJbWFnZXMgPSBbMSwyXVxuICAgIGNoZWNrSGVpZ2h0KCkge1xuXG4gICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zLXN0ZXBzLXNjcm9sbF9faW1hZ2VzX19pbWFnZScpXG4gICAgICBjb25zdCBjb250ZW50cyA9IEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcucy1zdGVwcy1zY3JvbGxfX2NvbnRlbnRfX3N0ZXAnKSlcblxuICAgICAgaW1hZ2VzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA8IChNYXRoLnJvdW5kKHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAzKSkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlSW1hZ2VzLmluY2x1ZGVzKGUuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JykpKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktMl0gPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpLTJdLmNsYXNzTGlzdCA9ICdzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCBzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcC0tdG9wJ1xuICAgICAgICAgICAgY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKSAtIDFdID09IHVuZGVmaW5lZCA/IGZhbHNlIDogY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKSAtIDFdLmNsYXNzTGlzdCA9ICdzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCBzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcC0tYWN0aXZlJ1xuICAgICAgICAgICAgY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKV0gPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpXS5jbGFzc0xpc3QgPSAncy1zdGVwcy1zY3JvbGxfX2NvbnRlbnRfX3N0ZXAgcy1zdGVwcy1zY3JvbGxfX2NvbnRlbnRfX3N0ZXAtLWJvdHRvbScgXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUltYWdlcy5wdXNoKGUuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JykpO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ID4gKE1hdGgucm91bmQod2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCkrMTAwKSAmJiB0aGlzLmFjdGl2ZUltYWdlcy5pbmNsdWRlcyhlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpKSkge1xuICAgICAgICAgIGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktM10gPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpLTNdLmNsYXNzTGlzdCA9ICdzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCBzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcC0tdG9wJ1xuICAgICAgICAgIGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktMl0gPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpLTJdLmNsYXNzTGlzdCA9ICdzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCBzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcC0tYWN0aXZlJ1xuICAgICAgICAgIGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktMV0gPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpLTFdLmNsYXNzTGlzdCA9ICdzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCBzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcC0tYm90dG9tJyBcbiAgICAgICAgICB0aGlzLmFjdGl2ZUltYWdlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzY3JvbGxFdmVudCgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB0aGlzLmNoZWNrSGVpZ2h0KCkpXG4gICAgfVxuICB9KVxufSIsIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ3Mtc3RlcHMtc2Nyb2xsJykpIHtcblxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Mtc3RlcHMtc2Nyb2xsJywgY2xhc3MgU1N0ZXBzU2Nyb2xsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRXZlbnQoKVxuICAgIH1cblxuICAgIGFjdGl2ZUltYWdlcyA9IFsxLDJdXG4gICAgY2hlY2tIZWlnaHQoKSB7XG5cbiAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnMtc3RlcHMtc2Nyb2xsX19pbWFnZXNfX2ltYWdlJylcbiAgICAgIGNvbnN0IGNvbnRlbnRzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCcpKVxuXG4gICAgICBpbWFnZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IDwgKE1hdGgucm91bmQod2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDMpKSkge1xuICAgICAgICAgIGlmICghdGhpcy5hY3RpdmVJbWFnZXMuaW5jbHVkZXMoZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKSkpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKS0yXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktMl0uY2xhc3NMaXN0ID0gJ3Mtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwIHMtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwLS10b3AnXG4gICAgICAgICAgICBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpIC0gMV0gPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpIC0gMV0uY2xhc3NMaXN0ID0gJ3Mtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwIHMtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwLS1hY3RpdmUnXG4gICAgICAgICAgICBjb250ZW50c1tlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZS1pbmRleCcpXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyldLmNsYXNzTGlzdCA9ICdzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcCBzLXN0ZXBzLXNjcm9sbF9fY29udGVudF9fc3RlcC0tYm90dG9tJyBcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW1hZ2VzLnB1c2goZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKSk7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPiAoTWF0aC5yb3VuZCh3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0KSsxMDApICYmIHRoaXMuYWN0aXZlSW1hZ2VzLmluY2x1ZGVzKGUuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JykpKSB7XG4gICAgICAgICAgY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKS0zXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktM10uY2xhc3NMaXN0ID0gJ3Mtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwIHMtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwLS10b3AnXG4gICAgICAgICAgY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKS0yXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktMl0uY2xhc3NMaXN0ID0gJ3Mtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwIHMtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwLS1hY3RpdmUnXG4gICAgICAgICAgY29udGVudHNbZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UtaW5kZXgnKS0xXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNvbnRlbnRzW2UuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlLWluZGV4JyktMV0uY2xhc3NMaXN0ID0gJ3Mtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwIHMtc3RlcHMtc2Nyb2xsX19jb250ZW50X19zdGVwLS1ib3R0b20nIFxuICAgICAgICAgIHRoaXMuYWN0aXZlSW1hZ2VzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHNjcm9sbEV2ZW50KCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHRoaXMuY2hlY2tIZWlnaHQoKSlcbiAgICB9XG4gIH0pXG59XG59LHt9XX0se30sWzFdKVxuXG4iXX0=
