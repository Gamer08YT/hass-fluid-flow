(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FluidFlowCard"] = factory();
	else
		root["FluidFlowCard"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/**\r\n*  counter.css  - written by Victor N - 22/Nov/2013 - www.vitim.us\r\n* Repo: https://github.com/victornpb/analog-counter-wheel\r\n*/\r\n\r\n/* Analog Counter Wheel Layout */\r\n.counter {\r\n    width: 11.5%;\r\n    height: 120%;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: 2px inset #666;\r\n    -webkit-border-radius: 3px;\r\n    -moz-border-radius: 3px;\r\n    border-radius: 3px;\r\n    -webkit-box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.7),\r\n    0px 2px 2px rgba(255, 255, 255, 0.25);\r\n    -moz-box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.7),\r\n    0px 2px 2px rgba(255, 255, 255, 0.25);\r\n    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.7),\r\n    0px 2px 2px rgba(255, 255, 255, 0.25);\r\n    background: #e2e2e2; /* Old browsers */\r\n    background: -moz-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* FF3.6+ */\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e2e2e2), color-stop(34%, #fefefe), color-stop(61%, #fefefe), color-stop(100%, #d1d1d1)); /* Chrome,Safari4+ */\r\n    background: -webkit-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* Chrome10+,Safari5.1+ */\r\n    background: -o-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* Opera 11.10+ */\r\n    background: -ms-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* IE10+ */\r\n    background: linear-gradient(to bottom, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* W3C */\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e2e2e2', endColorstr='#d1d1d1', GradientType=0); /* IE6-9 */\r\n}\r\n\r\n\r\n.counter .wheel {\r\n    position: relative;\r\n\r\n    display: table;\r\n    text-align: center;\r\n    cursor: inherit;\r\n}\r\n\r\n/* digits */\r\n.counter .wheel div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    cursor: inherit;\r\n}\r\n\r\n.counter .wheel div:nth-child(1) {\r\n    top: -50%;\r\n}\r\n\r\n.counter .wheel div:nth-child(2) {\r\n    top: 8%;\r\n}\r\n\r\n.counter .wheel div:nth-child(3) {\r\n    top: 70%;\r\n}\r\n\r\n.counter .wheel.animate {\r\n    transition: all ease 300ms;\r\n}\r\n\r\n.counter .wheel {\r\n    width: 100%;\r\n    height: 100%;\r\n    /*margin-top: 15px;*/\r\n}\r\n\r\n.counter .wheel .digit {\r\n    color: black;\r\n    border-top: 1px solid rgba(64, 64, 64, 0.5);\r\n    border-bottom: 1px solid rgba(128, 128, 128, 0.5);\r\n}\r\n");

/***/ }),

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".meter-container {\r\n    /* display: flex; */\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    margin: 5%;\r\n}\r\n\r\n.meter-counter {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    bottom: 62%;\r\n    height: 11%;\r\n    width: 35%;\r\n    left: 33.5%;\r\n}");

/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, exports) => {


/**
 * Counter.js  - written by Victor N - 22/Nov/2013 - www.vitim.us
 * Repo: https://github.com/victornpb/analog-counter-wheel
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter(counterElement) {
        this.pos = 0;
        this.values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.options = {
            mousewheel: true,
            digitHeight: 0,
            inverted: false
        };
        this.DOM = {
            counter: counterElement,
            wheel: document.createElement('div'),
            digitAbove: document.createElement('div'),
            digitCenter: document.createElement('div'),
            digitBelow: document.createElement('div')
        };
        //Initial Values
        if (this.DOM.counter.innerHTML.indexOf('|') > -1) {
            this.values = this.DOM.counter.innerHTML.split('|');
        }
        this.DOM.counter.innerHTML = "";
        this.DOM.counter.classList.add('counter');
        this.DOM.wheel.classList.add('wheel');
        this.DOM.digitAbove.classList.add('digit');
        this.DOM.digitCenter.classList.add('digit');
        this.DOM.digitBelow.classList.add('digit');
        this.DOM.digitAbove.classList.add('above');
        this.DOM.digitCenter.classList.add('center');
        this.DOM.digitBelow.classList.add('below');
        this.DOM.counter.appendChild(this.DOM.wheel);
        this.DOM.wheel.appendChild(this.DOM.digitAbove);
        this.DOM.wheel.appendChild(this.DOM.digitCenter);
        this.DOM.wheel.appendChild(this.DOM.digitBelow);
        //compute digit height
        //this.options.digitHeight = this.DOM.digitCenter.offsetHeight;
        this.options.digitHeight = parseInt(window.getComputedStyle(this.DOM.digitCenter, null).getPropertyValue("height"));
        this.setPos(0);
        this.DOM.counter.onmousewheel = this.mouseWheel();
    }
    Counter.prototype.getOptions = function () {
        return this.options;
    };
    Counter.prototype.setValue = function (value) {
        var pos = this.values.indexOf(value);
        if (pos >= 0)
            return this.setPos(pos);
        else
            throw new Error('"' + value + '" is not a item on Counter.values[]');
    };
    ;
    Counter.prototype.getValue = function () {
        return this.values[this.pos];
    };
    ;
    Counter.prototype.getPos = function () {
        return this.pos;
    };
    ;
    Counter.prototype.setPos = function (x) {
        //function that cycle values between 0..max
        function n(x, max) {
            if (x >= max)
                x = (x % (max));
            if (x < 0)
                x = max - (Math.abs(x) % max);
            return x;
        }
        var offsetAbove, offsetBelow;
        var max = this.values.length;
        this.pos = n(x, max);
        if (!this.options.inverted) { //numbers increase rolling down
            offsetAbove = n(this.pos - 1, max);
            offsetBelow = n(this.pos + 1, max);
        }
        else { //numbers increase rolling up
            offsetAbove = n(this.pos + 1, max);
            offsetBelow = n(this.pos - 1, max);
        }
        this.DOM.digitAbove.innerHTML = this.values[offsetAbove];
        this.DOM.digitCenter.innerHTML = this.values[this.pos];
        this.DOM.digitBelow.innerHTML = this.values[offsetBelow];
        //dispatch event if handler is set
        //if (this.onChange) {
        //  this.onChange.call(this, this.pos);
        //}
        return this.pos;
    };
    ;
    Counter.prototype.moveBy = function (x) {
        var self = this;
        if (x != 0) {
            this.setPos(this.pos + x);
            //amount of movement
            var d = this.options.digitHeight;
            //set direction of movement
            if (x > 0)
                d *= 1;
            if (x < 0)
                d *= -1;
            //invert direction of movement animation
            if (this.options.inverted)
                d *= -1;
            this.DOM.wheel.classList.remove('animate');
            this.DOM.wheel.style.top = d + "px";
            setTimeout(function () {
                self.DOM.wheel.classList.add('animate');
                self.DOM.wheel.style.top = "0px";
            }, 0);
        }
    };
    ;
    Counter.prototype.moveTo = function (pos) {
        if (this.pos != pos) {
            var max = this.values.length - 1;
            var direction = pos - this.pos;
            if (this.pos == max && pos == 0)
                direction = 1;
            if (this.pos == 0 && pos == max)
                direction = -1;
            this.moveBy(direction);
            var cur = this.setPos(pos);
        }
    };
    ;
    Counter.prototype.next = function () {
        this.moveBy(1);
    };
    ;
    Counter.prototype.previous = function () {
        this.moveBy(-1);
    };
    ;
    Counter.prototype.mouseWheel = function () {
        var self = this;
        var lastScroll = 0, eventCount = 0;
        //function attached to onmousewheel
        return function (e) {
            if (self.options.mousewheel == false)
                return;
            // cross-browser wheel delta
            e = window.event || e; // old IE support
            e.preventDefault();
            var now = Date.now();
            var dif = now - lastScroll;
            this.lastScroll = now;
            var delta = e.wheelDelta;
            //var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            if (self.options.inverted)
                delta *= -1;
            if (e.webkitDirectionInvertedFromDevice)
                delta *= -1;
            if ((dif > 20 && Math.abs(delta) >= 12) || Math.abs(eventCount) > 50) {
                if (delta > 0) {
                    self.next();
                }
                else {
                    self.previous();
                }
                eventCount = 0;
            }
            else {
                eventCount += e.wheelDelta;
            }
            //console.log("timestamp %s \t dif: %s \t deltaMode: %s \t inverted: %s \t wheelDelta: %s \t delta: %s \t x: %d",
            //			e.timeStamp, dif, e.deltaMode, e.webkitDirectionInvertedFromDevice, e.wheelDelta, delta, wheel);
        };
    };
    ;
    return Counter;
}());
exports.Counter = Counter;


/***/ }),

/***/ 196:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = (/* unused pure expression or super */ null && (this));
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decorators_js_1 = __webpack_require__(595);
// @ts-ignore
var counter_1 = __webpack_require__(435);
// @ts-ignore
var counter_css_1 = __importDefault(__webpack_require__(602));
// @ts-ignore
var meter_card_css_1 = __importDefault(__webpack_require__(806));
// @ts-ignore
var FluidFlowCard = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)("hass-fluid-flow-card")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FluidFlowCard = _classThis = /** @class */ (function (_super) {
        __extends(FluidFlowCard_1, _super);
        function FluidFlowCard_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Store last Value to change only when updated.
            _this.valueIO = null;
            // Store last Percentage.
            _this.percentIO = 0;
            // Store Counter.
            _this.counterIO = [];
            return _this;
        }
        Object.defineProperty(FluidFlowCard_1.prototype, "hass", {
            /**
             * Callback for Value Change / Initialisation in Hass.
             * @param hassIO
             */
            set: function (hassIO) {
                var _this = this;
                // Set Hass Instance.
                this.hassIO = hassIO;
                // Set Inner if not set.
                if (this.innerHTML == undefined || this.innerHTML == null || this.innerHTML == "") {
                    //this.setStyleElement();
                    this.innerHTML = "\n        <ha-card header=\"" + this.configIO.title + "\">\n        <style>" + meter_card_css_1.default + "</style>\n        <style>" + counter_css_1.default + "</style>\n         <div class=\"meter-container\">\n            <div class=\"meter-inner\" style=\"position: relative;\">\n                <img style=\"height: auto; width: 100%; position: relative;\" src=\"/local/images/meter.svg\" />\n                <div class=\"meter-counter\">\n                    <div class=\"counter\"></div>\n                </div>\n                <div class=\"meter-wheel\" style=\"position: absolute; bottom: 30%; width: 22%; height: 22%; left: 33%;\">\n                    <img src=\"/local/images/wheel.svg\" height=\"100%\" width=\"auto\">\n                </div>\n            </div>\n         </div>\n        </ha-card";
                    // Initialize Counter.
                    this.createCounters();
                }
                // Parse Entity State.
                var entityIO = this.configIO.entity;
                var stateIO = this.hassIO.states[entityIO];
                var valueIO = stateIO ? stateIO.state : "unavailable";
                // Update Content if Value has changed.
                if (this.valueIO !== valueIO) {
                    // Update Element.
                    this.updateElements(valueIO);
                    // Update cached Value.
                    this.valueIO = valueIO;
                }
                // Only start Timer once.
                if (this.timerIO === undefined) {
                    // Print Debug Message.
                    console.log("Start Timer");
                    // Start new Interval.
                    this.timerIO = setInterval(function () {
                        // Stop Timer if Percentage limit.
                        if (_this.percentIO == 100) {
                            // Reset Counter.
                            _this.percentIO = 0;
                            // Clear Timer.
                            clearInterval(_this.timerIO);
                        }
                        // Rotate by Percentage.
                        _this.rotate(_this.percentIO);
                        // Increment Percent.
                        _this.percentIO++;
                    }, 500);
                }
                // Set Value if not null.
                if (this.valueIO == null)
                    this.valueIO = valueIO;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Config Implementation.
         * @param configIO
         */
        FluidFlowCard_1.prototype.setConfig = function (configIO) {
            if (!configIO.entity) {
                throw new Error("You need to define an entity");
            }
            // Override Config.
            this.configIO = configIO;
        };
        /**
         * Get Stub Config.
         */
        FluidFlowCard_1.prototype.getStubConfig = function () {
            return {
                entity: "",
                title: "Fluid Flow"
            };
        };
        /**
         * Update Content of Card.
         * @param valueIO
         * @private
         */
        FluidFlowCard_1.prototype.updateElements = function (valueIO) {
            // Update Counters.
            this.updateCounters(valueIO);
        };
        /**
         * Rotate Wheel.
         * @param percentIO (0-100%/0-360°)
         * @private
         */
        FluidFlowCard_1.prototype.rotate = function (percentIO) {
            // Calculate Degrees by Percent.
            var degreesIO = (3.6 * percentIO);
            // Transform Element.
            this.getWheelImage().style.transform = "rotate(" + degreesIO + "deg)";
        };
        FluidFlowCard_1.prototype.getWheelImage = function () {
            return this.getWheelContainer().getElementsByTagName("img")[0];
        };
        FluidFlowCard_1.prototype.getCounterElement = function (idIO) {
            if (idIO === void 0) { idIO = 0; }
            var counterIO = this.getCounterContainer().getElementsByClassName("counter")[idIO];
            // Add new Div if not exits.
            if (counterIO == undefined) {
                counterIO = document.createElement("div");
                counterIO.classList.add("counter");
                // Append Element.
                this.getCounterContainer().appendChild(counterIO);
            }
            return counterIO;
        };
        FluidFlowCard_1.prototype.getCounterContainer = function () {
            return this.getInner().getElementsByClassName("meter-counter")[0];
        };
        FluidFlowCard_1.prototype.getWheelContainer = function () {
            return this.getInner().getElementsByClassName("meter-wheel")[0];
        };
        FluidFlowCard_1.prototype.getInner = function () {
            return this.getContainer().getElementsByClassName("meter-inner")[0];
        };
        FluidFlowCard_1.prototype.getContainer = function () {
            return this.getCard().getElementsByClassName("meter-container")[0];
        };
        FluidFlowCard_1.prototype.getCard = function () {
            return this.getElementsByTagName("ha-card")[0];
        };
        FluidFlowCard_1.prototype.setStyleElement = function () {
            // Create new Style Element.
            var styleIO = new HTMLStyleElement();
            // Set ID for Identification.
            styleIO.id = "meter-style";
            // Set Style Content.
            styleIO.innerText = ".counter {\n          content: \"hey\";\n        }";
            this.appendChild(styleIO);
        };
        /**
         * Create Counters.
         * @private
         */
        FluidFlowCard_1.prototype.createCounters = function (countIO) {
            if (countIO === void 0) { countIO = 7; }
            // Create X Counters.
            for (var incrementIO = 0; incrementIO < countIO; incrementIO++) {
                // Print Debug Message.
                console.log("Add Counter " + incrementIO + ".");
                // Create new Object.
                var counterIO = new counter_1.Counter(this.getCounterElement(incrementIO));
                // Disable Mouse Wheel.
                counterIO.getOptions().mousewheel = false;
                // Create new Counter Instance.
                this.counterIO[incrementIO] = counterIO;
            }
        };
        /**
         * Convert Value to Digit String.
         * @param inputIO
         * @param sizeIO
         */
        FluidFlowCard_1.prototype.convertDigit = function (inputIO, sizeIO) {
            if (sizeIO === void 0) { sizeIO = 7; }
            // Zahl in String umwandeln
            var numberString = Number.parseInt(inputIO).toString();
            // Print Debug Message.
            console.log("Convert " + inputIO + " to " + numberString);
            // Überprüfen, ob der String bereits sechs Ziffern hat
            if (numberString.length >= sizeIO) {
                return numberString.slice(0, sizeIO); // Die ersten sechs Ziffern zurückgeben
            }
            else {
                // Anzahl der fehlenden Ziffern berechnen
                var missingDigits = sizeIO - numberString.length;
                // Nullen vorne anhängen, um den String auf sechs Ziffern zu bringen
                for (var i = 0; i < missingDigits; i++) {
                    numberString = '0' + numberString;
                }
                return numberString;
            }
        };
        FluidFlowCard_1.prototype.updateCounters = function (valueIO, countIO) {
            var _this = this;
            if (countIO === void 0) { countIO = 7; }
            // Convert Value to X Digits.
            var digitIO = this.convertDigit(valueIO, countIO);
            var _loop_1 = function (incrementIO) {
                // Print Debug Message.
                console.log("Update Counter " + incrementIO + " to " + digitIO[incrementIO] + ".");
                // Update in Timeout to give a bit of Animation.
                // Last -> First
                setTimeout(function () {
                    // Get Counter by Column.
                    var counterIO = _this.counterIO[incrementIO];
                    // Get Digit Value.
                    var itemIO = Number.parseInt(digitIO[incrementIO]);
                    // Update Counter Position.
                    counterIO.moveTo(itemIO);
                    //this.counterIO[incrementIO].moveTo(digitIO[incrementIO]);
                }, (countIO - incrementIO) * 250);
            };
            // Update X Counters.
            for (var incrementIO = 0; incrementIO < countIO; incrementIO++) {
                _loop_1(incrementIO);
            }
        };
        return FluidFlowCard_1;
    }(HTMLElement));
    __setFunctionName(_classThis, "FluidFlowCard");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        FluidFlowCard = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FluidFlowCard = _classThis;
}();
// Configure the preview in the Lovelace card picker
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.customCards = window.customCards || [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.customCards.push({
    type: 'hass-fluid-flow-card',
    name: 'Fluid Flow Meter',
    preview: true,
    description: 'A water meter with display of quantities of liquid that have already flowed through. Animated cogs indicate a change in the values.',
});


/***/ }),

/***/ 595:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  customElement: () => (/* reexport */ e),
  eventOptions: () => (/* reexport */ event_options_e),
  property: () => (/* reexport */ property_e),
  query: () => (/* reexport */ query_i),
  queryAll: () => (/* reexport */ query_all_e),
  queryAssignedElements: () => (/* reexport */ query_assigned_elements_l),
  queryAssignedNodes: () => (/* reexport */ o),
  queryAsync: () => (/* reexport */ query_async_e),
  state: () => (/* reexport */ t)
});

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/custom-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);
//# sourceMappingURL=custom-element.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function property_e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):i(e,n)}
//# sourceMappingURL=property.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return property_e({...t,state:!0})}
//# sourceMappingURL=state.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/base.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const base_e=(e,t,o)=>{Object.defineProperty(t,o,e)},base_t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),base_o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};
//# sourceMappingURL=base.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/event-options.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function event_options_e(e){return base_o({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
//# sourceMappingURL=event-options.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_i(i,n){return base_o({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]}}return t}})}
//# sourceMappingURL=query.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-all.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_all_e(e){return base_o({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-all.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-async.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function query_async_e(e){return base_o({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-async.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;const query_assigned_elements_e=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function query_assigned_elements_l(n){const{slot:l,selector:t}=null!=n?n:{};return base_o({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?query_assigned_elements_e(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?query_assigned_elements_l({slot:s,flatten:n,selector:r}):base_o({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(196);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=hass-fluid-flow-card.ts.js.map