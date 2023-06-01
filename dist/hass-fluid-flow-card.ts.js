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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxZQUFZLFdBQUMsSUFBSSxPQUFPLE1BQUMsRUFBRSxnQkFBZ0IsTUFBTSxRQUFRLHVHQUF1RywrQkFBK0IsRUFBRSxFQUF3QjtBQUN6Tjs7O0FDTjZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQUMsSUFBSSxPQUFPLE1BQUMsRUFBRSxnQkFBZ0IsWUFBWSxNQUFNLGtHQUFrRywrQkFBK0IsRUFBRSxFQUEwQjtBQUN2Tjs7O0FDUDZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLHlCQUFDLDhMQUE4TCxTQUFTLHlCQUFDLElBQUksTUFBTSxrQkFBa0IsY0FBYyxPQUFPLE1BQUMsRUFBRSxnQkFBZ0IsTUFBTSxNQUFNLDJCQUEyQixFQUFFLGdHQUFnRyx5QkFBQyxTQUFTLHVDQUF1QywrQkFBK0IsRUFBRSxFQUFxQztBQUM1aEI7OztBQ05rSDtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVLDJDQUEyQyxVQUFVLEdBQUcseUJBQUMsRUFBRSw0QkFBNEIsRUFBRSxNQUFDLEVBQUUsZ0JBQWdCLE1BQU0sUUFBUSwyQkFBMkIsRUFBRSxzRkFBc0YscUVBQXFFLCtCQUErQixFQUFFLEVBQWtDO0FBQ3BaOzs7QUNOOGlCO0FBQzlpQjs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC8uL3NyYy9jb3VudGVyLmNzcyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vc3JjL21ldGVyLWNhcmQuY3NzIiwid2VicGFjazovL0ZsdWlkRmxvd0NhcmQvLi9zcmMvY291bnRlci50cyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vc3JjL2hhc3MtZmx1aWQtZmxvdy1jYXJkLnRzIiwid2VicGFjazovL0ZsdWlkRmxvd0NhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzIiwid2VicGFjazovL0ZsdWlkRmxvd0NhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFsbC5qcyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzIiwid2VicGFjazovL0ZsdWlkRmxvd0NhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcyIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkLy4vbm9kZV9tb2R1bGVzL2xpdC9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL0ZsdWlkRmxvd0NhcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ZsdWlkRmxvd0NhcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9GbHVpZEZsb3dDYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vRmx1aWRGbG93Q2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmx1aWRGbG93Q2FyZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGbHVpZEZsb3dDYXJkXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBkZWZhdWx0IFwiLyoqXFxyXFxuKiAgY291bnRlci5jc3MgIC0gd3JpdHRlbiBieSBWaWN0b3IgTiAtIDIyL05vdi8yMDEzIC0gd3d3LnZpdGltLnVzXFxyXFxuKiBSZXBvOiBodHRwczovL2dpdGh1Yi5jb20vdmljdG9ybnBiL2FuYWxvZy1jb3VudGVyLXdoZWVsXFxyXFxuKi9cXHJcXG5cXHJcXG4vKiBBbmFsb2cgQ291bnRlciBXaGVlbCBMYXlvdXQgKi9cXHJcXG4uY291bnRlciB7XFxyXFxuICAgIHdpZHRoOiAxMS41JTtcXHJcXG4gICAgaGVpZ2h0OiAxMjAlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBpbnNldCAjNjY2O1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNyksXFxyXFxuICAgIDBweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjcpLFxcclxcbiAgICAwcHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNyksXFxyXFxuICAgIDBweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7IC8qIE9sZCBicm93c2VycyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlMmUyZTIgMCUsICNmZWZlZmUgMzQlLCAjZmVmZWZlIDYxJSwgI2QxZDFkMSAxMDAlKTsgLyogRkYzLjYrICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNlMmUyZTIpLCBjb2xvci1zdG9wKDM0JSwgI2ZlZmVmZSksIGNvbG9yLXN0b3AoNjElLCAjZmVmZWZlKSwgY29sb3Itc3RvcCgxMDAlLCAjZDFkMWQxKSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlMmUyZTIgMCUsICNmZWZlZmUgMzQlLCAjZmVmZWZlIDYxJSwgI2QxZDFkMSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2UyZTJlMiAwJSwgI2ZlZmVmZSAzNCUsICNmZWZlZmUgNjElLCAjZDFkMWQxIDEwMCUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNlMmUyZTIgMCUsICNmZWZlZmUgMzQlLCAjZmVmZWZlIDYxJSwgI2QxZDFkMSAxMDAlKTsgLyogSUUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2UyZTJlMiAwJSwgI2ZlZmVmZSAzNCUsICNmZWZlZmUgNjElLCAjZDFkMWQxIDEwMCUpOyAvKiBXM0MgKi9cXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2UyZTJlMicsIGVuZENvbG9yc3RyPScjZDFkMWQxJywgR3JhZGllbnRUeXBlPTApOyAvKiBJRTYtOSAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY291bnRlciAud2hlZWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGlnaXRzICovXFxyXFxuLmNvdW50ZXIgLndoZWVsIGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgY3Vyc29yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlciAud2hlZWwgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHRvcDogLTUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICB0b3A6IDglO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlciAud2hlZWwgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHRvcDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlciAud2hlZWwuYW5pbWF0ZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDMwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlciAud2hlZWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvKm1hcmdpbi10b3A6IDE1cHg7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsIC5kaWdpdCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXHJcXG59XFxyXFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIubWV0ZXItY29udGFpbmVyIHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbi5tZXRlci1jb3VudGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYm90dG9tOiA2MiU7XFxyXFxuICAgIGhlaWdodDogMTElO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBsZWZ0OiAzMy41JTtcXHJcXG59XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvdW50ZXIuanMgIC0gd3JpdHRlbiBieSBWaWN0b3IgTiAtIDIyL05vdi8yMDEzIC0gd3d3LnZpdGltLnVzXG4gKiBSZXBvOiBodHRwczovL2dpdGh1Yi5jb20vdmljdG9ybnBiL2FuYWxvZy1jb3VudGVyLXdoZWVsXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ291bnRlciA9IHZvaWQgMDtcbnZhciBDb3VudGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvdW50ZXIoY291bnRlckVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3MgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtb3VzZXdoZWVsOiB0cnVlLFxuICAgICAgICAgICAgZGlnaXRIZWlnaHQ6IDAsXG4gICAgICAgICAgICBpbnZlcnRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ET00gPSB7XG4gICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyRWxlbWVudCxcbiAgICAgICAgICAgIHdoZWVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIGRpZ2l0QWJvdmU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgZGlnaXRDZW50ZXI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgZGlnaXRCZWxvdzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgfTtcbiAgICAgICAgLy9Jbml0aWFsIFZhbHVlc1xuICAgICAgICBpZiAodGhpcy5ET00uY291bnRlci5pbm5lckhUTUwuaW5kZXhPZignfCcpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy5ET00uY291bnRlci5pbm5lckhUTUwuc3BsaXQoJ3wnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkRPTS5jb3VudGVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuRE9NLmNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRlcicpO1xuICAgICAgICB0aGlzLkRPTS53aGVlbC5jbGFzc0xpc3QuYWRkKCd3aGVlbCcpO1xuICAgICAgICB0aGlzLkRPTS5kaWdpdEFib3ZlLmNsYXNzTGlzdC5hZGQoJ2RpZ2l0Jyk7XG4gICAgICAgIHRoaXMuRE9NLmRpZ2l0Q2VudGVyLmNsYXNzTGlzdC5hZGQoJ2RpZ2l0Jyk7XG4gICAgICAgIHRoaXMuRE9NLmRpZ2l0QmVsb3cuY2xhc3NMaXN0LmFkZCgnZGlnaXQnKTtcbiAgICAgICAgdGhpcy5ET00uZGlnaXRBYm92ZS5jbGFzc0xpc3QuYWRkKCdhYm92ZScpO1xuICAgICAgICB0aGlzLkRPTS5kaWdpdENlbnRlci5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5ET00uZGlnaXRCZWxvdy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICB0aGlzLkRPTS5jb3VudGVyLmFwcGVuZENoaWxkKHRoaXMuRE9NLndoZWVsKTtcbiAgICAgICAgdGhpcy5ET00ud2hlZWwuYXBwZW5kQ2hpbGQodGhpcy5ET00uZGlnaXRBYm92ZSk7XG4gICAgICAgIHRoaXMuRE9NLndoZWVsLmFwcGVuZENoaWxkKHRoaXMuRE9NLmRpZ2l0Q2VudGVyKTtcbiAgICAgICAgdGhpcy5ET00ud2hlZWwuYXBwZW5kQ2hpbGQodGhpcy5ET00uZGlnaXRCZWxvdyk7XG4gICAgICAgIC8vY29tcHV0ZSBkaWdpdCBoZWlnaHRcbiAgICAgICAgLy90aGlzLm9wdGlvbnMuZGlnaXRIZWlnaHQgPSB0aGlzLkRPTS5kaWdpdENlbnRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaWdpdEhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuRE9NLmRpZ2l0Q2VudGVyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpKTtcbiAgICAgICAgdGhpcy5zZXRQb3MoMCk7XG4gICAgICAgIHRoaXMuRE9NLmNvdW50ZXIub25tb3VzZXdoZWVsID0gdGhpcy5tb3VzZVdoZWVsKCk7XG4gICAgfVxuICAgIENvdW50ZXIucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XG4gICAgfTtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcG9zID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChwb3MgPj0gMClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFBvcyhwb3MpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIGl0ZW0gb24gQ291bnRlci52YWx1ZXNbXScpO1xuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5wb3NdO1xuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLmdldFBvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zO1xuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLnNldFBvcyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIC8vZnVuY3Rpb24gdGhhdCBjeWNsZSB2YWx1ZXMgYmV0d2VlbiAwLi5tYXhcbiAgICAgICAgZnVuY3Rpb24gbih4LCBtYXgpIHtcbiAgICAgICAgICAgIGlmICh4ID49IG1heClcbiAgICAgICAgICAgICAgICB4ID0gKHggJSAobWF4KSk7XG4gICAgICAgICAgICBpZiAoeCA8IDApXG4gICAgICAgICAgICAgICAgeCA9IG1heCAtIChNYXRoLmFicyh4KSAlIG1heCk7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2Zmc2V0QWJvdmUsIG9mZnNldEJlbG93O1xuICAgICAgICB2YXIgbWF4ID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBvcyA9IG4oeCwgbWF4KTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaW52ZXJ0ZWQpIHsgLy9udW1iZXJzIGluY3JlYXNlIHJvbGxpbmcgZG93blxuICAgICAgICAgICAgb2Zmc2V0QWJvdmUgPSBuKHRoaXMucG9zIC0gMSwgbWF4KTtcbiAgICAgICAgICAgIG9mZnNldEJlbG93ID0gbih0aGlzLnBvcyArIDEsIG1heCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vbnVtYmVycyBpbmNyZWFzZSByb2xsaW5nIHVwXG4gICAgICAgICAgICBvZmZzZXRBYm92ZSA9IG4odGhpcy5wb3MgKyAxLCBtYXgpO1xuICAgICAgICAgICAgb2Zmc2V0QmVsb3cgPSBuKHRoaXMucG9zIC0gMSwgbWF4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkRPTS5kaWdpdEFib3ZlLmlubmVySFRNTCA9IHRoaXMudmFsdWVzW29mZnNldEFib3ZlXTtcbiAgICAgICAgdGhpcy5ET00uZGlnaXRDZW50ZXIuaW5uZXJIVE1MID0gdGhpcy52YWx1ZXNbdGhpcy5wb3NdO1xuICAgICAgICB0aGlzLkRPTS5kaWdpdEJlbG93LmlubmVySFRNTCA9IHRoaXMudmFsdWVzW29mZnNldEJlbG93XTtcbiAgICAgICAgLy9kaXNwYXRjaCBldmVudCBpZiBoYW5kbGVyIGlzIHNldFxuICAgICAgICAvL2lmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIC8vICB0aGlzLm9uQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5wb3MpO1xuICAgICAgICAvL31cbiAgICAgICAgcmV0dXJuIHRoaXMucG9zO1xuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3ModGhpcy5wb3MgKyB4KTtcbiAgICAgICAgICAgIC8vYW1vdW50IG9mIG1vdmVtZW50XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMub3B0aW9ucy5kaWdpdEhlaWdodDtcbiAgICAgICAgICAgIC8vc2V0IGRpcmVjdGlvbiBvZiBtb3ZlbWVudFxuICAgICAgICAgICAgaWYgKHggPiAwKVxuICAgICAgICAgICAgICAgIGQgKj0gMTtcbiAgICAgICAgICAgIGlmICh4IDwgMClcbiAgICAgICAgICAgICAgICBkICo9IC0xO1xuICAgICAgICAgICAgLy9pbnZlcnQgZGlyZWN0aW9uIG9mIG1vdmVtZW50IGFuaW1hdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbnZlcnRlZClcbiAgICAgICAgICAgICAgICBkICo9IC0xO1xuICAgICAgICAgICAgdGhpcy5ET00ud2hlZWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgICAgICAgICAgdGhpcy5ET00ud2hlZWwuc3R5bGUudG9wID0gZCArIFwicHhcIjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuRE9NLndoZWVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICBzZWxmLkRPTS53aGVlbC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcyAhPSBwb3MpIHtcbiAgICAgICAgICAgIHZhciBtYXggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHBvcyAtIHRoaXMucG9zO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zID09IG1heCAmJiBwb3MgPT0gMClcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zID09IDAgJiYgcG9zID09IG1heClcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgIHRoaXMubW92ZUJ5KGRpcmVjdGlvbik7XG4gICAgICAgICAgICB2YXIgY3VyID0gdGhpcy5zZXRQb3MocG9zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW92ZUJ5KDEpO1xuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vdmVCeSgtMSk7XG4gICAgfTtcbiAgICA7XG4gICAgQ291bnRlci5wcm90b3R5cGUubW91c2VXaGVlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbGFzdFNjcm9sbCA9IDAsIGV2ZW50Q291bnQgPSAwO1xuICAgICAgICAvL2Z1bmN0aW9uIGF0dGFjaGVkIHRvIG9ubW91c2V3aGVlbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubW91c2V3aGVlbCA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXG4gICAgICAgICAgICBlID0gd2luZG93LmV2ZW50IHx8IGU7IC8vIG9sZCBJRSBzdXBwb3J0XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHZhciBkaWYgPSBub3cgLSBsYXN0U2Nyb2xsO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2Nyb2xsID0gbm93O1xuICAgICAgICAgICAgdmFyIGRlbHRhID0gZS53aGVlbERlbHRhO1xuICAgICAgICAgICAgLy92YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGUud2hlZWxEZWx0YSB8fCAtZS5kZXRhaWwpKSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmludmVydGVkKVxuICAgICAgICAgICAgICAgIGRlbHRhICo9IC0xO1xuICAgICAgICAgICAgaWYgKGUud2Via2l0RGlyZWN0aW9uSW52ZXJ0ZWRGcm9tRGV2aWNlKVxuICAgICAgICAgICAgICAgIGRlbHRhICo9IC0xO1xuICAgICAgICAgICAgaWYgKChkaWYgPiAyMCAmJiBNYXRoLmFicyhkZWx0YSkgPj0gMTIpIHx8IE1hdGguYWJzKGV2ZW50Q291bnQpID4gNTApIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmV2aW91cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudENvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50Q291bnQgKz0gZS53aGVlbERlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRpbWVzdGFtcCAlcyBcXHQgZGlmOiAlcyBcXHQgZGVsdGFNb2RlOiAlcyBcXHQgaW52ZXJ0ZWQ6ICVzIFxcdCB3aGVlbERlbHRhOiAlcyBcXHQgZGVsdGE6ICVzIFxcdCB4OiAlZFwiLFxuICAgICAgICAgICAgLy9cdFx0XHRlLnRpbWVTdGFtcCwgZGlmLCBlLmRlbHRhTW9kZSwgZS53ZWJraXREaXJlY3Rpb25JbnZlcnRlZEZyb21EZXZpY2UsIGUud2hlZWxEZWx0YSwgZGVsdGEsIHdoZWVsKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIDtcbiAgICByZXR1cm4gQ291bnRlcjtcbn0oKSk7XG5leHBvcnRzLkNvdW50ZXIgPSBDb3VudGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZXNEZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19lc0RlY29yYXRlKSB8fCBmdW5jdGlvbiAoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICAgIHZhciBfLCBkb25lID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMucHVzaChfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy5wdXNoKF8pO1xuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgICBkb25lID0gdHJ1ZTtcbn07XG52YXIgX19ydW5Jbml0aWFsaXplcnMgPSAodGhpcyAmJiB0aGlzLl9fcnVuSW5pdGlhbGl6ZXJzKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgICB9XG4gICAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xudmFyIF9fc2V0RnVuY3Rpb25OYW1lID0gKHRoaXMgJiYgdGhpcy5fX3NldEZ1bmN0aW9uTmFtZSkgfHwgZnVuY3Rpb24gKGYsIG5hbWUsIHByZWZpeCkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX3RoaXMgPSB0aGlzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlY29yYXRvcnNfanNfMSA9IHJlcXVpcmUoXCJsaXQvZGVjb3JhdG9ycy5qc1wiKTtcbi8vIEB0cy1pZ25vcmVcbnZhciBjb3VudGVyXzEgPSByZXF1aXJlKFwiLi9jb3VudGVyXCIpO1xuLy8gQHRzLWlnbm9yZVxudmFyIGNvdW50ZXJfY3NzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY291bnRlci5jc3NcIikpO1xuLy8gQHRzLWlnbm9yZVxudmFyIG1ldGVyX2NhcmRfY3NzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWV0ZXItY2FyZC5jc3NcIikpO1xuLy8gQHRzLWlnbm9yZVxudmFyIEZsdWlkRmxvd0NhcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9jbGFzc0RlY29yYXRvcnMgPSBbKDAsIGRlY29yYXRvcnNfanNfMS5jdXN0b21FbGVtZW50KShcImhhc3MtZmx1aWQtZmxvdy1jYXJkXCIpXTtcbiAgICB2YXIgX2NsYXNzRGVzY3JpcHRvcjtcbiAgICB2YXIgX2NsYXNzRXh0cmFJbml0aWFsaXplcnMgPSBbXTtcbiAgICB2YXIgX2NsYXNzVGhpcztcbiAgICB2YXIgRmx1aWRGbG93Q2FyZCA9IF9jbGFzc1RoaXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhGbHVpZEZsb3dDYXJkXzEsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEZsdWlkRmxvd0NhcmRfMSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAgICAgLy8gU3RvcmUgbGFzdCBWYWx1ZSB0byBjaGFuZ2Ugb25seSB3aGVuIHVwZGF0ZWQuXG4gICAgICAgICAgICBfdGhpcy52YWx1ZUlPID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFN0b3JlIGxhc3QgUGVyY2VudGFnZS5cbiAgICAgICAgICAgIF90aGlzLnBlcmNlbnRJTyA9IDA7XG4gICAgICAgICAgICAvLyBTdG9yZSBDb3VudGVyLlxuICAgICAgICAgICAgX3RoaXMuY291bnRlcklPID0gW107XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUsIFwiaGFzc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxiYWNrIGZvciBWYWx1ZSBDaGFuZ2UgLyBJbml0aWFsaXNhdGlvbiBpbiBIYXNzLlxuICAgICAgICAgICAgICogQHBhcmFtIGhhc3NJT1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChoYXNzSU8pIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIFNldCBIYXNzIEluc3RhbmNlLlxuICAgICAgICAgICAgICAgIHRoaXMuaGFzc0lPID0gaGFzc0lPO1xuICAgICAgICAgICAgICAgIC8vIFNldCBJbm5lciBpZiBub3Qgc2V0LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlubmVySFRNTCA9PSB1bmRlZmluZWQgfHwgdGhpcy5pbm5lckhUTUwgPT0gbnVsbCB8fCB0aGlzLmlubmVySFRNTCA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdHlsZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIlxcbiAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVxcXCJcIiArIHRoaXMuY29uZmlnSU8udGl0bGUgKyBcIlxcXCI+XFxuICAgICAgICA8c3R5bGU+XCIgKyBtZXRlcl9jYXJkX2Nzc18xLmRlZmF1bHQgKyBcIjwvc3R5bGU+XFxuICAgICAgICA8c3R5bGU+XCIgKyBjb3VudGVyX2Nzc18xLmRlZmF1bHQgKyBcIjwvc3R5bGU+XFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWV0ZXItY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRlci1pbm5lclxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTtcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPVxcXCJoZWlnaHQ6IGF1dG87IHdpZHRoOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmU7XFxcIiBzcmM9XFxcIi9sb2NhbC9pbWFnZXMvbWV0ZXIuc3ZnXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRlci1jb3VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvdW50ZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWV0ZXItd2hlZWxcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMzAlOyB3aWR0aDogMjIlOyBoZWlnaHQ6IDIyJTsgbGVmdDogMzMlO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2xvY2FsL2ltYWdlcy93aGVlbC5zdmdcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgd2lkdGg9XFxcImF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvaGEtY2FyZFwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIENvdW50ZXIuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ291bnRlcnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgRW50aXR5IFN0YXRlLlxuICAgICAgICAgICAgICAgIHZhciBlbnRpdHlJTyA9IHRoaXMuY29uZmlnSU8uZW50aXR5O1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZUlPID0gdGhpcy5oYXNzSU8uc3RhdGVzW2VudGl0eUlPXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVJTyA9IHN0YXRlSU8gPyBzdGF0ZUlPLnN0YXRlIDogXCJ1bmF2YWlsYWJsZVwiO1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBDb250ZW50IGlmIFZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlSU8gIT09IHZhbHVlSU8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIEVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHModmFsdWVJTyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBjYWNoZWQgVmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVJTyA9IHZhbHVlSU87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9ubHkgc3RhcnQgVGltZXIgb25jZS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lcklPID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJpbnQgRGVidWcgTWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCBUaW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgbmV3IEludGVydmFsLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVySU8gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIFRpbWVyIGlmIFBlcmNlbnRhZ2UgbGltaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucGVyY2VudElPID09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IENvdW50ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVyY2VudElPID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBUaW1lci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF90aGlzLnRpbWVySU8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUm90YXRlIGJ5IFBlcmNlbnRhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3RhdGUoX3RoaXMucGVyY2VudElPKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCBQZXJjZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVyY2VudElPKys7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNldCBWYWx1ZSBpZiBub3QgbnVsbC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUlPID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVJTyA9IHZhbHVlSU87XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWcgSW1wbGVtZW50YXRpb24uXG4gICAgICAgICAqIEBwYXJhbSBjb25maWdJT1xuICAgICAgICAgKi9cbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnSU8pIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnSU8uZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG5lZWQgdG8gZGVmaW5lIGFuIGVudGl0eVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE92ZXJyaWRlIENvbmZpZy5cbiAgICAgICAgICAgIHRoaXMuY29uZmlnSU8gPSBjb25maWdJTztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBTdHViIENvbmZpZy5cbiAgICAgICAgICovXG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuZ2V0U3R1YkNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW50aXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZsdWlkIEZsb3dcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSBDb250ZW50IG9mIENhcmQuXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZUlPXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLnVwZGF0ZUVsZW1lbnRzID0gZnVuY3Rpb24gKHZhbHVlSU8pIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBDb3VudGVycy5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnRlcnModmFsdWVJTyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSb3RhdGUgV2hlZWwuXG4gICAgICAgICAqIEBwYXJhbSBwZXJjZW50SU8gKDAtMTAwJS8wLTM2MMKwKVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocGVyY2VudElPKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgRGVncmVlcyBieSBQZXJjZW50LlxuICAgICAgICAgICAgdmFyIGRlZ3JlZXNJTyA9ICgzLjYgKiBwZXJjZW50SU8pO1xuICAgICAgICAgICAgLy8gVHJhbnNmb3JtIEVsZW1lbnQuXG4gICAgICAgICAgICB0aGlzLmdldFdoZWVsSW1hZ2UoKS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIGRlZ3JlZXNJTyArIFwiZGVnKVwiO1xuICAgICAgICB9O1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLmdldFdoZWVsSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRXaGVlbENvbnRhaW5lcigpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdO1xuICAgICAgICB9O1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLmdldENvdW50ZXJFbGVtZW50ID0gZnVuY3Rpb24gKGlkSU8pIHtcbiAgICAgICAgICAgIGlmIChpZElPID09PSB2b2lkIDApIHsgaWRJTyA9IDA7IH1cbiAgICAgICAgICAgIHZhciBjb3VudGVySU8gPSB0aGlzLmdldENvdW50ZXJDb250YWluZXIoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY291bnRlclwiKVtpZElPXTtcbiAgICAgICAgICAgIC8vIEFkZCBuZXcgRGl2IGlmIG5vdCBleGl0cy5cbiAgICAgICAgICAgIGlmIChjb3VudGVySU8gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcklPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjb3VudGVySU8uY2xhc3NMaXN0LmFkZChcImNvdW50ZXJcIik7XG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnQuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb3VudGVyQ29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY291bnRlcklPKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3VudGVySU87XG4gICAgICAgIH07XG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuZ2V0Q291bnRlckNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldElubmVyKCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1ldGVyLWNvdW50ZXJcIilbMF07XG4gICAgICAgIH07XG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuZ2V0V2hlZWxDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbm5lcigpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZXRlci13aGVlbFwiKVswXTtcbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5nZXRJbm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZXRlci1pbm5lclwiKVswXTtcbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJkKCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1ldGVyLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5nZXRDYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoYS1jYXJkXCIpWzBdO1xuICAgICAgICB9O1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLnNldFN0eWxlRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgU3R5bGUgRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBzdHlsZUlPID0gbmV3IEhUTUxTdHlsZUVsZW1lbnQoKTtcbiAgICAgICAgICAgIC8vIFNldCBJRCBmb3IgSWRlbnRpZmljYXRpb24uXG4gICAgICAgICAgICBzdHlsZUlPLmlkID0gXCJtZXRlci1zdHlsZVwiO1xuICAgICAgICAgICAgLy8gU2V0IFN0eWxlIENvbnRlbnQuXG4gICAgICAgICAgICBzdHlsZUlPLmlubmVyVGV4dCA9IFwiLmNvdW50ZXIge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiaGV5XFxcIjtcXG4gICAgICAgIH1cIjtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoc3R5bGVJTyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgQ291bnRlcnMuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLmNyZWF0ZUNvdW50ZXJzID0gZnVuY3Rpb24gKGNvdW50SU8pIHtcbiAgICAgICAgICAgIGlmIChjb3VudElPID09PSB2b2lkIDApIHsgY291bnRJTyA9IDc7IH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBYIENvdW50ZXJzLlxuICAgICAgICAgICAgZm9yICh2YXIgaW5jcmVtZW50SU8gPSAwOyBpbmNyZW1lbnRJTyA8IGNvdW50SU87IGluY3JlbWVudElPKyspIHtcbiAgICAgICAgICAgICAgICAvLyBQcmludCBEZWJ1ZyBNZXNzYWdlLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkIENvdW50ZXIgXCIgKyBpbmNyZW1lbnRJTyArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IE9iamVjdC5cbiAgICAgICAgICAgICAgICB2YXIgY291bnRlcklPID0gbmV3IGNvdW50ZXJfMS5Db3VudGVyKHRoaXMuZ2V0Q291bnRlckVsZW1lbnQoaW5jcmVtZW50SU8pKTtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIE1vdXNlIFdoZWVsLlxuICAgICAgICAgICAgICAgIGNvdW50ZXJJTy5nZXRPcHRpb25zKCkubW91c2V3aGVlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgQ291bnRlciBJbnN0YW5jZS5cbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJJT1tpbmNyZW1lbnRJT10gPSBjb3VudGVySU87XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0IFZhbHVlIHRvIERpZ2l0IFN0cmluZy5cbiAgICAgICAgICogQHBhcmFtIGlucHV0SU9cbiAgICAgICAgICogQHBhcmFtIHNpemVJT1xuICAgICAgICAgKi9cbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5jb252ZXJ0RGlnaXQgPSBmdW5jdGlvbiAoaW5wdXRJTywgc2l6ZUlPKSB7XG4gICAgICAgICAgICBpZiAoc2l6ZUlPID09PSB2b2lkIDApIHsgc2l6ZUlPID0gNzsgfVxuICAgICAgICAgICAgLy8gWmFobCBpbiBTdHJpbmcgdW13YW5kZWxuXG4gICAgICAgICAgICB2YXIgbnVtYmVyU3RyaW5nID0gTnVtYmVyLnBhcnNlSW50KGlucHV0SU8pLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBQcmludCBEZWJ1ZyBNZXNzYWdlLlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb252ZXJ0IFwiICsgaW5wdXRJTyArIFwiIHRvIFwiICsgbnVtYmVyU3RyaW5nKTtcbiAgICAgICAgICAgIC8vIMOcYmVycHLDvGZlbiwgb2IgZGVyIFN0cmluZyBiZXJlaXRzIHNlY2hzIFppZmZlcm4gaGF0XG4gICAgICAgICAgICBpZiAobnVtYmVyU3RyaW5nLmxlbmd0aCA+PSBzaXplSU8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyU3RyaW5nLnNsaWNlKDAsIHNpemVJTyk7IC8vIERpZSBlcnN0ZW4gc2VjaHMgWmlmZmVybiB6dXLDvGNrZ2ViZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFuemFobCBkZXIgZmVobGVuZGVuIFppZmZlcm4gYmVyZWNobmVuXG4gICAgICAgICAgICAgICAgdmFyIG1pc3NpbmdEaWdpdHMgPSBzaXplSU8gLSBudW1iZXJTdHJpbmcubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIE51bGxlbiB2b3JuZSBhbmjDpG5nZW4sIHVtIGRlbiBTdHJpbmcgYXVmIHNlY2hzIFppZmZlcm4genUgYnJpbmdlblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWlzc2luZ0RpZ2l0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlclN0cmluZyA9ICcwJyArIG51bWJlclN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlclN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS51cGRhdGVDb3VudGVycyA9IGZ1bmN0aW9uICh2YWx1ZUlPLCBjb3VudElPKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGNvdW50SU8gPT09IHZvaWQgMCkgeyBjb3VudElPID0gNzsgfVxuICAgICAgICAgICAgLy8gQ29udmVydCBWYWx1ZSB0byBYIERpZ2l0cy5cbiAgICAgICAgICAgIHZhciBkaWdpdElPID0gdGhpcy5jb252ZXJ0RGlnaXQodmFsdWVJTywgY291bnRJTyk7XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpbmNyZW1lbnRJTykge1xuICAgICAgICAgICAgICAgIC8vIFByaW50IERlYnVnIE1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgQ291bnRlciBcIiArIGluY3JlbWVudElPICsgXCIgdG8gXCIgKyBkaWdpdElPW2luY3JlbWVudElPXSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgaW4gVGltZW91dCB0byBnaXZlIGEgYml0IG9mIEFuaW1hdGlvbi5cbiAgICAgICAgICAgICAgICAvLyBMYXN0IC0+IEZpcnN0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBDb3VudGVyIGJ5IENvbHVtbi5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ZXJJTyA9IF90aGlzLmNvdW50ZXJJT1tpbmNyZW1lbnRJT107XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBEaWdpdCBWYWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1JTyA9IE51bWJlci5wYXJzZUludChkaWdpdElPW2luY3JlbWVudElPXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBDb3VudGVyIFBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICBjb3VudGVySU8ubW92ZVRvKGl0ZW1JTyk7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jb3VudGVySU9baW5jcmVtZW50SU9dLm1vdmVUbyhkaWdpdElPW2luY3JlbWVudElPXSk7XG4gICAgICAgICAgICAgICAgfSwgKGNvdW50SU8gLSBpbmNyZW1lbnRJTykgKiAyNTApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBYIENvdW50ZXJzLlxuICAgICAgICAgICAgZm9yICh2YXIgaW5jcmVtZW50SU8gPSAwOyBpbmNyZW1lbnRJTyA8IGNvdW50SU87IGluY3JlbWVudElPKyspIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKGluY3JlbWVudElPKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZsdWlkRmxvd0NhcmRfMTtcbiAgICB9KEhUTUxFbGVtZW50KSk7XG4gICAgX19zZXRGdW5jdGlvbk5hbWUoX2NsYXNzVGhpcywgXCJGbHVpZEZsb3dDYXJkXCIpO1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9fZXNEZWNvcmF0ZShudWxsLCBfY2xhc3NEZXNjcmlwdG9yID0geyB2YWx1ZTogX2NsYXNzVGhpcyB9LCBfY2xhc3NEZWNvcmF0b3JzLCB7IGtpbmQ6IFwiY2xhc3NcIiwgbmFtZTogX2NsYXNzVGhpcy5uYW1lIH0sIG51bGwsIF9jbGFzc0V4dHJhSW5pdGlhbGl6ZXJzKTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZCA9IF9jbGFzc1RoaXMgPSBfY2xhc3NEZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICBfX3J1bkluaXRpYWxpemVycyhfY2xhc3NUaGlzLCBfY2xhc3NFeHRyYUluaXRpYWxpemVycyk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gRmx1aWRGbG93Q2FyZCA9IF9jbGFzc1RoaXM7XG59KCk7XG4vLyBDb25maWd1cmUgdGhlIHByZXZpZXcgaW4gdGhlIExvdmVsYWNlIGNhcmQgcGlja2VyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxud2luZG93LmN1c3RvbUNhcmRzID0gd2luZG93LmN1c3RvbUNhcmRzIHx8IFtdO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbndpbmRvdy5jdXN0b21DYXJkcy5wdXNoKHtcbiAgICB0eXBlOiAnaGFzcy1mbHVpZC1mbG93LWNhcmQnLFxuICAgIG5hbWU6ICdGbHVpZCBGbG93IE1ldGVyJyxcbiAgICBwcmV2aWV3OiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOiAnQSB3YXRlciBtZXRlciB3aXRoIGRpc3BsYXkgb2YgcXVhbnRpdGllcyBvZiBsaXF1aWQgdGhhdCBoYXZlIGFscmVhZHkgZmxvd2VkIHRocm91Z2guIEFuaW1hdGVkIGNvZ3MgaW5kaWNhdGUgYSBjaGFuZ2UgaW4gdGhlIHZhbHVlcy4nLFxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IGU9ZT0+bj0+XCJmdW5jdGlvblwiPT10eXBlb2Ygbj8oKGUsbik9PihjdXN0b21FbGVtZW50cy5kZWZpbmUoZSxuKSxuKSkoZSxuKTooKGUsbik9Pntjb25zdHtraW5kOnQsZWxlbWVudHM6c309bjtyZXR1cm57a2luZDp0LGVsZW1lbnRzOnMsZmluaXNoZXIobil7Y3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsbil9fX0pKGUsbik7ZXhwb3J0e2UgYXMgY3VzdG9tRWxlbWVudH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZWxlbWVudC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgaT0oaSxlKT0+XCJtZXRob2RcIj09PWUua2luZCYmZS5kZXNjcmlwdG9yJiYhKFwidmFsdWVcImluIGUuZGVzY3JpcHRvcik/ey4uLmUsZmluaXNoZXIobil7bi5jcmVhdGVQcm9wZXJ0eShlLmtleSxpKX19OntraW5kOlwiZmllbGRcIixrZXk6U3ltYm9sKCkscGxhY2VtZW50Olwib3duXCIsZGVzY3JpcHRvcjp7fSxvcmlnaW5hbEtleTplLmtleSxpbml0aWFsaXplcigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUuaW5pdGlhbGl6ZXImJih0aGlzW2Uua2V5XT1lLmluaXRpYWxpemVyLmNhbGwodGhpcykpfSxmaW5pc2hlcihuKXtuLmNyZWF0ZVByb3BlcnR5KGUua2V5LGkpfX07ZnVuY3Rpb24gZShlKXtyZXR1cm4obix0KT0+dm9pZCAwIT09dD8oKGksZSxuKT0+e2UuY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobixpKX0pKGUsbix0KTppKGUsbil9ZXhwb3J0e2UgYXMgcHJvcGVydHl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwXG4iLCJpbXBvcnR7cHJvcGVydHkgYXMgcn1mcm9tXCIuL3Byb3BlcnR5LmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiB0KHQpe3JldHVybiByKHsuLi50LHN0YXRlOiEwfSl9ZXhwb3J0e3QgYXMgc3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGUuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IGU9KGUsdCxvKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8sZSl9LHQ9KGUsdCk9Pih7a2luZDpcIm1ldGhvZFwiLHBsYWNlbWVudDpcInByb3RvdHlwZVwiLGtleTp0LmtleSxkZXNjcmlwdG9yOmV9KSxvPSh7ZmluaXNoZXI6ZSxkZXNjcmlwdG9yOnR9KT0+KG8sbik9Pnt2YXIgcjtpZih2b2lkIDA9PT1uKXtjb25zdCBuPW51bGwhPT0ocj1vLm9yaWdpbmFsS2V5KSYmdm9pZCAwIT09cj9yOm8ua2V5LGk9bnVsbCE9dD97a2luZDpcIm1ldGhvZFwiLHBsYWNlbWVudDpcInByb3RvdHlwZVwiLGtleTpuLGRlc2NyaXB0b3I6dChvLmtleSl9OnsuLi5vLGtleTpufTtyZXR1cm4gbnVsbCE9ZSYmKGkuZmluaXNoZXI9ZnVuY3Rpb24odCl7ZSh0LG4pfSksaX17Y29uc3Qgcj1vLmNvbnN0cnVjdG9yO3ZvaWQgMCE9PXQmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLG4sdChuKSksbnVsbD09ZXx8ZShyLG4pfX07ZXhwb3J0e28gYXMgZGVjb3JhdGVQcm9wZXJ0eSxlIGFzIGxlZ2FjeVByb3RvdHlwZU1ldGhvZCx0IGFzIHN0YW5kYXJkUHJvdG90eXBlTWV0aG9kfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyByfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovZnVuY3Rpb24gZShlKXtyZXR1cm4gcih7ZmluaXNoZXI6KHIsdCk9PntPYmplY3QuYXNzaWduKHIucHJvdG90eXBlW3RdLGUpfX0pfWV4cG9ydHtlIGFzIGV2ZW50T3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1vcHRpb25zLmpzLm1hcFxuIiwiaW1wb3J0e2RlY29yYXRlUHJvcGVydHkgYXMgb31mcm9tXCIuL2Jhc2UuanNcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2Z1bmN0aW9uIGkoaSxuKXtyZXR1cm4gbyh7ZGVzY3JpcHRvcjpvPT57Y29uc3QgdD17Z2V0KCl7dmFyIG8sbjtyZXR1cm4gbnVsbCE9PShuPW51bGw9PT0obz10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnF1ZXJ5U2VsZWN0b3IoaSkpJiZ2b2lkIDAhPT1uP246bnVsbH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9O2lmKG4pe2NvbnN0IG49XCJzeW1ib2xcIj09dHlwZW9mIG8/U3ltYm9sKCk6XCJfX1wiK287dC5nZXQ9ZnVuY3Rpb24oKXt2YXIgbyx0O3JldHVybiB2b2lkIDA9PT10aGlzW25dJiYodGhpc1tuXT1udWxsIT09KHQ9bnVsbD09PShvPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PW8/dm9pZCAwOm8ucXVlcnlTZWxlY3RvcihpKSkmJnZvaWQgMCE9PXQ/dDpudWxsKSx0aGlzW25dfX1yZXR1cm4gdH19KX1leHBvcnR7aSBhcyBxdWVyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS5qcy5tYXBcbiIsImltcG9ydHtkZWNvcmF0ZVByb3BlcnR5IGFzIHJ9ZnJvbVwiLi9iYXNlLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiBlKGUpe3JldHVybiByKHtkZXNjcmlwdG9yOnI9Pih7Z2V0KCl7dmFyIHIsbztyZXR1cm4gbnVsbCE9PShvPW51bGw9PT0ocj10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpJiZ2b2lkIDAhPT1vP286W119LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7ZSBhcyBxdWVyeUFsbH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hbGwuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyByfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5mdW5jdGlvbiBlKGUpe3JldHVybiByKHtkZXNjcmlwdG9yOnI9Pih7YXN5bmMgZ2V0KCl7dmFyIHI7cmV0dXJuIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGUsbnVsbD09PShyPXRoaXMucmVuZGVyUm9vdCl8fHZvaWQgMD09PXI/dm9pZCAwOnIucXVlcnlTZWxlY3RvcihlKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0pfWV4cG9ydHtlIGFzIHF1ZXJ5QXN5bmN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXN5bmMuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBvfWZyb21cIi4vYmFzZS5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIG47Y29uc3QgZT1udWxsIT0obnVsbD09PShuPXdpbmRvdy5IVE1MU2xvdEVsZW1lbnQpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKT8obyxuKT0+by5hc3NpZ25lZEVsZW1lbnRzKG4pOihvLG4pPT5vLmFzc2lnbmVkTm9kZXMobikuZmlsdGVyKChvPT5vLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpKTtmdW5jdGlvbiBsKG4pe2NvbnN0e3Nsb3Q6bCxzZWxlY3Rvcjp0fT1udWxsIT1uP246e307cmV0dXJuIG8oe2Rlc2NyaXB0b3I6bz0+KHtnZXQoKXt2YXIgbztjb25zdCByPVwic2xvdFwiKyhsP2BbbmFtZT0ke2x9XWA6XCI6bm90KFtuYW1lXSlcIiksaT1udWxsPT09KG89dGhpcy5yZW5kZXJSb290KXx8dm9pZCAwPT09bz92b2lkIDA6by5xdWVyeVNlbGVjdG9yKHIpLHM9bnVsbCE9aT9lKGksbik6W107cmV0dXJuIHQ/cy5maWx0ZXIoKG89Pm8ubWF0Y2hlcyh0KSkpOnN9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7bCBhcyBxdWVyeUFzc2lnbmVkRWxlbWVudHN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwXG4iLCJpbXBvcnR7ZGVjb3JhdGVQcm9wZXJ0eSBhcyBlfWZyb21cIi4vYmFzZS5qc1wiO2ltcG9ydHtxdWVyeUFzc2lnbmVkRWxlbWVudHMgYXMgdH1mcm9tXCIuL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9mdW5jdGlvbiBvKG8sbixyKXtsZXQgbCxzPW87cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG8/KHM9by5zbG90LGw9byk6bD17ZmxhdHRlbjpufSxyP3Qoe3Nsb3Q6cyxmbGF0dGVuOm4sc2VsZWN0b3I6cn0pOmUoe2Rlc2NyaXB0b3I6ZT0+KHtnZXQoKXt2YXIgZSx0O2NvbnN0IG89XCJzbG90XCIrKHM/YFtuYW1lPSR7c31dYDpcIjpub3QoW25hbWVdKVwiKSxuPW51bGw9PT0oZT10aGlzLnJlbmRlclJvb3QpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnF1ZXJ5U2VsZWN0b3Iobyk7cmV0dXJuIG51bGwhPT0odD1udWxsPT1uP3ZvaWQgMDpuLmFzc2lnbmVkTm9kZXMobCkpJiZ2b2lkIDAhPT10P3Q6W119LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9KX1leHBvcnR7byBhcyBxdWVyeUFzc2lnbmVkTm9kZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtbm9kZXMuanMubWFwXG4iLCJleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTYpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9