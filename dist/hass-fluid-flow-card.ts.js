/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/counter.css":
/*!*************************!*\
  !*** ./src/counter.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/**\r\n*  counter.css  - written by Victor N - 22/Nov/2013 - www.vitim.us\r\n* Repo: https://github.com/victornpb/analog-counter-wheel\r\n*/\r\n\r\n/* Analog Counter Wheel Layout */\r\n.counter {\r\n    width: 11.5%;\r\n    height: 120%;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: 2px inset #666;\r\n    -webkit-border-radius: 3px;\r\n    -moz-border-radius: 3px;\r\n    border-radius: 3px;\r\n    -webkit-box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.7),\r\n    0px 2px 2px rgba(255, 255, 255, 0.25);\r\n    -moz-box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.7),\r\n    0px 2px 2px rgba(255, 255, 255, 0.25);\r\n    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.7),\r\n    0px 2px 2px rgba(255, 255, 255, 0.25);\r\n    background: #e2e2e2; /* Old browsers */\r\n    background: -moz-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* FF3.6+ */\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e2e2e2), color-stop(34%, #fefefe), color-stop(61%, #fefefe), color-stop(100%, #d1d1d1)); /* Chrome,Safari4+ */\r\n    background: -webkit-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* Chrome10+,Safari5.1+ */\r\n    background: -o-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* Opera 11.10+ */\r\n    background: -ms-linear-gradient(top, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* IE10+ */\r\n    background: linear-gradient(to bottom, #e2e2e2 0%, #fefefe 34%, #fefefe 61%, #d1d1d1 100%); /* W3C */\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e2e2e2', endColorstr='#d1d1d1', GradientType=0); /* IE6-9 */\r\n}\r\n\r\n\r\n.counter .wheel {\r\n    position: relative;\r\n\r\n    display: table;\r\n    text-align: center;\r\n    cursor: inherit;\r\n}\r\n\r\n/* digits */\r\n.counter .wheel div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    cursor: inherit;\r\n}\r\n\r\n.counter .wheel div:nth-child(1) {\r\n    top: -50%;\r\n}\r\n\r\n.counter .wheel div:nth-child(2) {\r\n    top: 8%;\r\n}\r\n\r\n.counter .wheel div:nth-child(3) {\r\n    top: 70%;\r\n}\r\n\r\n.counter .wheel.animate {\r\n    transition: all ease 300ms;\r\n}\r\n\r\n.counter .wheel {\r\n    width: 100%;\r\n    height: 100%;\r\n    /*margin-top: 15px;*/\r\n}\r\n\r\n.counter .wheel .digit {\r\n    color: black;\r\n    border-top: 1px solid rgba(64, 64, 64, 0.5);\r\n    border-bottom: 1px solid rgba(128, 128, 128, 0.5);\r\n}\r\n");

/***/ }),

/***/ "./src/meter-card.css":
/*!****************************!*\
  !*** ./src/meter-card.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".meter-container {\r\n    /* display: flex; */\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    margin: 5%;\r\n}\r\n\r\n.meter-counter {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    bottom: 62%;\r\n    height: 11%;\r\n    width: 35%;\r\n    left: 33.5%;\r\n}");

/***/ }),

/***/ "./src/counter.ts":
/*!************************!*\
  !*** ./src/counter.ts ***!
  \************************/
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

/***/ "./src/hass-fluid-flow-card.ts":
/*!*************************************!*\
  !*** ./src/hass-fluid-flow-card.ts ***!
  \*************************************/
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
var _this = this;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decorators_js_1 = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
// @ts-ignore
var counter_1 = __webpack_require__(/*! ./counter */ "./src/counter.ts");
// @ts-ignore
var counter_css_1 = __importDefault(__webpack_require__(/*! ./counter.css */ "./src/counter.css"));
// @ts-ignore
var meter_card_css_1 = __importDefault(__webpack_require__(/*! ./meter-card.css */ "./src/meter-card.css"));
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

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorateProperty: () => (/* binding */ decorateProperty),
/* harmony export */   legacyPrototypeMethod: () => (/* binding */ legacyPrototypeMethod),
/* harmony export */   standardPrototypeMethod: () => (/* binding */ standardPrototypeMethod)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyPrototypeMethod = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardPrototypeMethod = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
/**
 * Helper for decorating a property that is compatible with both TypeScript
 * and Babel decorators. The optional `finisher` can be used to perform work on
 * the class. The optional `descriptor` should return a PropertyDescriptor
 * to install for the given property.
 *
 * @param finisher {function} Optional finisher method; receives the element
 * constructor and property key as arguments and has no return value.
 * @param descriptor {function} Optional descriptor method; receives the
 * property key as an argument and returns a property descriptor to define for
 * the given property.
 * @returns {ClassElement|void}
 */
const decorateProperty = ({ finisher, descriptor, }) => (protoOrDescriptor, name
// Note TypeScript requires the return type to be `void|any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    var _a;
    // TypeScript / Babel legacy mode
    if (name !== undefined) {
        const ctor = protoOrDescriptor
            .constructor;
        if (descriptor !== undefined) {
            Object.defineProperty(protoOrDescriptor, name, descriptor(name));
        }
        finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
        // Babel standard mode
    }
    else {
        // Note, the @property decorator saves `key` as `originalKey`
        // so try to use it here.
        const key = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key;
        const info = descriptor != undefined
            ? {
                kind: 'method',
                placement: 'prototype',
                key,
                descriptor: descriptor(protoOrDescriptor.key),
            }
            : { ...protoOrDescriptor, key };
        if (finisher != undefined) {
            info.finisher = function (ctor) {
                finisher(ctor, key);
            };
        }
        return info;
    }
};
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyCustomElement = (tagName, clazz) => {
    customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            customElements.define(tagName, clazz);
        },
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyCustomElement(tagName, classOrDescriptor)
    : standardCustomElement(tagName, classOrDescriptor);
//# sourceMappingURL=custom-element.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: () => (/* binding */ eventOptions)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        finisher: (ctor, name) => {
            Object.assign(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ctor.prototype[name], options);
        },
    });
}
//# sourceMappingURL=event-options.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' &&
        element.descriptor &&
        !('value' in element.descriptor)) {
        return {
            ...element,
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // store the original key so subsequent decorators have access to it.
            originalKey: element.key,
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a reactive property that reflects a
 * corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (protoOrDescriptor, name) => name !== undefined
        ? legacyProperty(options, protoOrDescriptor, name)
        : standardProperty(options, protoOrDescriptor);
}
//# sourceMappingURL=property.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-all.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * A tiny module scoped polyfill for HTMLSlotElement.assignedElements.
 */
const slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null
    ? (slot, opts) => slot.assignedElements(opts)
    : (slot, opts) => slot
        .assignedNodes(opts)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
    const { slot, selector } = options !== null && options !== void 0 ? options : {};
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
                if (selector) {
                    return elements.filter((node) => node.matches(selector));
                }
                return elements;
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-elements.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */


function queryAssignedNodes(slotOrOptions, flatten, selector) {
    // Normalize the overloaded arguments.
    let slot = slotOrOptions;
    let assignedNodesOptions;
    if (typeof slotOrOptions === 'object') {
        slot = slotOrOptions.slot;
        assignedNodesOptions = slotOrOptions;
    }
    else {
        assignedNodesOptions = { flatten };
    }
    // For backwards compatibility, queryAssignedNodes with a selector behaves
    // exactly like queryAssignedElements with a selector.
    if (selector) {
        return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
            slot: slot,
            flatten,
            selector,
        });
    }
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-nodes.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            async get() {
                var _a;
                await this.updateComplete;
                return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-async.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (name) => {
            const descriptor = {
                get() {
                    var _a, _b;
                    return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                },
                enumerable: true,
                configurable: true,
            };
            if (cache) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                descriptor.get = function () {
                    var _a, _b;
                    if (this[key] === undefined) {
                        this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                    }
                    return this[key];
                };
            }
            return descriptor;
        },
    });
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
    return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
        ...options,
        state: true,
    });
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   eventOptions: () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   property: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   query: () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   state: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/hass-fluid-flow-card.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRmx1aWQgRmxvdyBDYXJkLy4vc3JjL2NvdW50ZXIuY3NzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC8uL3NyYy9tZXRlci1jYXJkLmNzcyIsIndlYnBhY2s6Ly9GbHVpZCBGbG93IENhcmQvLi9zcmMvY291bnRlci50cyIsIndlYnBhY2s6Ly9GbHVpZCBGbG93IENhcmQvLi9zcmMvaGFzcy1mbHVpZC1mbG93LWNhcmQudHMiLCJ3ZWJwYWNrOi8vRmx1aWQgRmxvdyBDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vRmx1aWQgRmxvdyBDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9GbHVpZCBGbG93IENhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9GbHVpZCBGbG93IENhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanMiLCJ3ZWJwYWNrOi8vRmx1aWQgRmxvdyBDYXJkLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9GbHVpZCBGbG93IENhcmQvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vRmx1aWQgRmxvdyBDYXJkLy4vbm9kZV9tb2R1bGVzL2xpdC9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GbHVpZCBGbG93IENhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0ZsdWlkIEZsb3cgQ2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vRmx1aWQgRmxvdyBDYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi8qKlxcclxcbiogIGNvdW50ZXIuY3NzICAtIHdyaXR0ZW4gYnkgVmljdG9yIE4gLSAyMi9Ob3YvMjAxMyAtIHd3dy52aXRpbS51c1xcclxcbiogUmVwbzogaHR0cHM6Ly9naXRodWIuY29tL3ZpY3Rvcm5wYi9hbmFsb2ctY291bnRlci13aGVlbFxcclxcbiovXFxyXFxuXFxyXFxuLyogQW5hbG9nIENvdW50ZXIgV2hlZWwgTGF5b3V0ICovXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgICB3aWR0aDogMTEuNSU7XFxyXFxuICAgIGhlaWdodDogMTIwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggaW5zZXQgIzY2NjtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjcpLFxcclxcbiAgICAwcHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC43KSxcXHJcXG4gICAgMHB4IDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjcpLFxcclxcbiAgICAwcHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyOyAvKiBPbGQgYnJvd3NlcnMgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZTJlMmUyIDAlLCAjZmVmZWZlIDM0JSwgI2ZlZmVmZSA2MSUsICNkMWQxZDEgMTAwJSk7IC8qIEZGMy42KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZTJlMmUyKSwgY29sb3Itc3RvcCgzNCUsICNmZWZlZmUpLCBjb2xvci1zdG9wKDYxJSwgI2ZlZmVmZSksIGNvbG9yLXN0b3AoMTAwJSwgI2QxZDFkMSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTJlMmUyIDAlLCAjZmVmZWZlIDM0JSwgI2ZlZmVmZSA2MSUsICNkMWQxZDEgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlMmUyZTIgMCUsICNmZWZlZmUgMzQlLCAjZmVmZWZlIDYxJSwgI2QxZDFkMSAxMDAlKTsgLyogT3BlcmEgMTEuMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZTJlMmUyIDAlLCAjZmVmZWZlIDM0JSwgI2ZlZmVmZSA2MSUsICNkMWQxZDEgMTAwJSk7IC8qIElFMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlMmUyZTIgMCUsICNmZWZlZmUgMzQlLCAjZmVmZWZlIDYxJSwgI2QxZDFkMSAxMDAlKTsgLyogVzNDICovXFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNlMmUyZTInLCBlbmRDb2xvcnN0cj0nI2QxZDFkMScsIEdyYWRpZW50VHlwZT0wKTsgLyogSUU2LTkgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIGRpZ2l0cyAqL1xcclxcbi5jb3VudGVyIC53aGVlbCBkaXYge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsIGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB0b3A6IC01MCU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGVyIC53aGVlbCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgdG9wOiA4JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsIGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgICB0b3A6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsLmFuaW1hdGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIgLndoZWVsIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyptYXJnaW4tdG9wOiAxNXB4OyovXFxyXFxufVxcclxcblxcclxcbi5jb3VudGVyIC53aGVlbCAuZGlnaXQge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDY0LCA2NCwgNjQsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxyXFxufVxcclxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiLm1ldGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWV0ZXItY291bnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGJvdHRvbTogNjIlO1xcclxcbiAgICBoZWlnaHQ6IDExJTtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgbGVmdDogMzMuNSU7XFxyXFxufVwiOyIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3VudGVyLmpzICAtIHdyaXR0ZW4gYnkgVmljdG9yIE4gLSAyMi9Ob3YvMjAxMyAtIHd3dy52aXRpbS51c1xuICogUmVwbzogaHR0cHM6Ly9naXRodWIuY29tL3ZpY3Rvcm5wYi9hbmFsb2ctY291bnRlci13aGVlbFxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvdW50ZXIgPSB2b2lkIDA7XG52YXIgQ291bnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb3VudGVyKGNvdW50ZXJFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9zID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcbiAgICAgICAgICAgIGRpZ2l0SGVpZ2h0OiAwLFxuICAgICAgICAgICAgaW52ZXJ0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuRE9NID0ge1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlckVsZW1lbnQsXG4gICAgICAgICAgICB3aGVlbDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBkaWdpdEFib3ZlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIGRpZ2l0Q2VudGVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIGRpZ2l0QmVsb3c6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIH07XG4gICAgICAgIC8vSW5pdGlhbCBWYWx1ZXNcbiAgICAgICAgaWYgKHRoaXMuRE9NLmNvdW50ZXIuaW5uZXJIVE1MLmluZGV4T2YoJ3wnKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuRE9NLmNvdW50ZXIuaW5uZXJIVE1MLnNwbGl0KCd8Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ET00uY291bnRlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLkRPTS5jb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXInKTtcbiAgICAgICAgdGhpcy5ET00ud2hlZWwuY2xhc3NMaXN0LmFkZCgnd2hlZWwnKTtcbiAgICAgICAgdGhpcy5ET00uZGlnaXRBYm92ZS5jbGFzc0xpc3QuYWRkKCdkaWdpdCcpO1xuICAgICAgICB0aGlzLkRPTS5kaWdpdENlbnRlci5jbGFzc0xpc3QuYWRkKCdkaWdpdCcpO1xuICAgICAgICB0aGlzLkRPTS5kaWdpdEJlbG93LmNsYXNzTGlzdC5hZGQoJ2RpZ2l0Jyk7XG4gICAgICAgIHRoaXMuRE9NLmRpZ2l0QWJvdmUuY2xhc3NMaXN0LmFkZCgnYWJvdmUnKTtcbiAgICAgICAgdGhpcy5ET00uZGlnaXRDZW50ZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG4gICAgICAgIHRoaXMuRE9NLmRpZ2l0QmVsb3cuY2xhc3NMaXN0LmFkZCgnYmVsb3cnKTtcbiAgICAgICAgdGhpcy5ET00uY291bnRlci5hcHBlbmRDaGlsZCh0aGlzLkRPTS53aGVlbCk7XG4gICAgICAgIHRoaXMuRE9NLndoZWVsLmFwcGVuZENoaWxkKHRoaXMuRE9NLmRpZ2l0QWJvdmUpO1xuICAgICAgICB0aGlzLkRPTS53aGVlbC5hcHBlbmRDaGlsZCh0aGlzLkRPTS5kaWdpdENlbnRlcik7XG4gICAgICAgIHRoaXMuRE9NLndoZWVsLmFwcGVuZENoaWxkKHRoaXMuRE9NLmRpZ2l0QmVsb3cpO1xuICAgICAgICAvL2NvbXB1dGUgZGlnaXQgaGVpZ2h0XG4gICAgICAgIC8vdGhpcy5vcHRpb25zLmRpZ2l0SGVpZ2h0ID0gdGhpcy5ET00uZGlnaXRDZW50ZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlnaXRIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLkRPTS5kaWdpdENlbnRlciwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKSk7XG4gICAgICAgIHRoaXMuc2V0UG9zKDApO1xuICAgICAgICB0aGlzLkRPTS5jb3VudGVyLm9ubW91c2V3aGVlbCA9IHRoaXMubW91c2VXaGVlbCgpO1xuICAgIH1cbiAgICBDb3VudGVyLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgIH07XG4gICAgQ291bnRlci5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAocG9zID49IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQb3MocG9zKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBpdGVtIG9uIENvdW50ZXIudmFsdWVzW10nKTtcbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW3RoaXMucG9zXTtcbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5nZXRQb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcztcbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5zZXRQb3MgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICAvL2Z1bmN0aW9uIHRoYXQgY3ljbGUgdmFsdWVzIGJldHdlZW4gMC4ubWF4XG4gICAgICAgIGZ1bmN0aW9uIG4oeCwgbWF4KSB7XG4gICAgICAgICAgICBpZiAoeCA+PSBtYXgpXG4gICAgICAgICAgICAgICAgeCA9ICh4ICUgKG1heCkpO1xuICAgICAgICAgICAgaWYgKHggPCAwKVxuICAgICAgICAgICAgICAgIHggPSBtYXggLSAoTWF0aC5hYnMoeCkgJSBtYXgpO1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9mZnNldEFib3ZlLCBvZmZzZXRCZWxvdztcbiAgICAgICAgdmFyIG1heCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wb3MgPSBuKHgsIG1heCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmludmVydGVkKSB7IC8vbnVtYmVycyBpbmNyZWFzZSByb2xsaW5nIGRvd25cbiAgICAgICAgICAgIG9mZnNldEFib3ZlID0gbih0aGlzLnBvcyAtIDEsIG1heCk7XG4gICAgICAgICAgICBvZmZzZXRCZWxvdyA9IG4odGhpcy5wb3MgKyAxLCBtYXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvL251bWJlcnMgaW5jcmVhc2Ugcm9sbGluZyB1cFxuICAgICAgICAgICAgb2Zmc2V0QWJvdmUgPSBuKHRoaXMucG9zICsgMSwgbWF4KTtcbiAgICAgICAgICAgIG9mZnNldEJlbG93ID0gbih0aGlzLnBvcyAtIDEsIG1heCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ET00uZGlnaXRBYm92ZS5pbm5lckhUTUwgPSB0aGlzLnZhbHVlc1tvZmZzZXRBYm92ZV07XG4gICAgICAgIHRoaXMuRE9NLmRpZ2l0Q2VudGVyLmlubmVySFRNTCA9IHRoaXMudmFsdWVzW3RoaXMucG9zXTtcbiAgICAgICAgdGhpcy5ET00uZGlnaXRCZWxvdy5pbm5lckhUTUwgPSB0aGlzLnZhbHVlc1tvZmZzZXRCZWxvd107XG4gICAgICAgIC8vZGlzcGF0Y2ggZXZlbnQgaWYgaGFuZGxlciBpcyBzZXRcbiAgICAgICAgLy9pZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAvLyAgdGhpcy5vbkNoYW5nZS5jYWxsKHRoaXMsIHRoaXMucG9zKTtcbiAgICAgICAgLy99XG4gICAgICAgIHJldHVybiB0aGlzLnBvcztcbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zKHRoaXMucG9zICsgeCk7XG4gICAgICAgICAgICAvL2Ftb3VudCBvZiBtb3ZlbWVudFxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLm9wdGlvbnMuZGlnaXRIZWlnaHQ7XG4gICAgICAgICAgICAvL3NldCBkaXJlY3Rpb24gb2YgbW92ZW1lbnRcbiAgICAgICAgICAgIGlmICh4ID4gMClcbiAgICAgICAgICAgICAgICBkICo9IDE7XG4gICAgICAgICAgICBpZiAoeCA8IDApXG4gICAgICAgICAgICAgICAgZCAqPSAtMTtcbiAgICAgICAgICAgIC8vaW52ZXJ0IGRpcmVjdGlvbiBvZiBtb3ZlbWVudCBhbmltYXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW52ZXJ0ZWQpXG4gICAgICAgICAgICAgICAgZCAqPSAtMTtcbiAgICAgICAgICAgIHRoaXMuRE9NLndoZWVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgIHRoaXMuRE9NLndoZWVsLnN0eWxlLnRvcCA9IGQgKyBcInB4XCI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLkRPTS53aGVlbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5ET00ud2hlZWwuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICA7XG4gICAgQ291bnRlci5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgICBpZiAodGhpcy5wb3MgIT0gcG9zKSB7XG4gICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy52YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBwb3MgLSB0aGlzLnBvcztcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA9PSBtYXggJiYgcG9zID09IDApXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA9PSAwICYmIHBvcyA9PSBtYXgpXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICB0aGlzLm1vdmVCeShkaXJlY3Rpb24pO1xuICAgICAgICAgICAgdmFyIGN1ciA9IHRoaXMuc2V0UG9zKHBvcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vdmVCeSgxKTtcbiAgICB9O1xuICAgIDtcbiAgICBDb3VudGVyLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb3ZlQnkoLTEpO1xuICAgIH07XG4gICAgO1xuICAgIENvdW50ZXIucHJvdG90eXBlLm1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGxhc3RTY3JvbGwgPSAwLCBldmVudENvdW50ID0gMDtcbiAgICAgICAgLy9mdW5jdGlvbiBhdHRhY2hlZCB0byBvbm1vdXNld2hlZWxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm1vdXNld2hlZWwgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gY3Jvc3MtYnJvd3NlciB3aGVlbCBkZWx0YVxuICAgICAgICAgICAgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB2YXIgZGlmID0gbm93IC0gbGFzdFNjcm9sbDtcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbCA9IG5vdztcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgICAgICAgIC8vdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSkpO1xuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5pbnZlcnRlZClcbiAgICAgICAgICAgICAgICBkZWx0YSAqPSAtMTtcbiAgICAgICAgICAgIGlmIChlLndlYmtpdERpcmVjdGlvbkludmVydGVkRnJvbURldmljZSlcbiAgICAgICAgICAgICAgICBkZWx0YSAqPSAtMTtcbiAgICAgICAgICAgIGlmICgoZGlmID4gMjAgJiYgTWF0aC5hYnMoZGVsdGEpID49IDEyKSB8fCBNYXRoLmFicyhldmVudENvdW50KSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJldmlvdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudENvdW50ICs9IGUud2hlZWxEZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0aW1lc3RhbXAgJXMgXFx0IGRpZjogJXMgXFx0IGRlbHRhTW9kZTogJXMgXFx0IGludmVydGVkOiAlcyBcXHQgd2hlZWxEZWx0YTogJXMgXFx0IGRlbHRhOiAlcyBcXHQgeDogJWRcIixcbiAgICAgICAgICAgIC8vXHRcdFx0ZS50aW1lU3RhbXAsIGRpZiwgZS5kZWx0YU1vZGUsIGUud2Via2l0RGlyZWN0aW9uSW52ZXJ0ZWRGcm9tRGV2aWNlLCBlLndoZWVsRGVsdGEsIGRlbHRhLCB3aGVlbCk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICA7XG4gICAgcmV0dXJuIENvdW50ZXI7XG59KCkpO1xuZXhwb3J0cy5Db3VudGVyID0gQ291bnRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2VzRGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZXNEZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gICAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnB1c2goXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMucHVzaChfKTtcbiAgICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gICAgZG9uZSA9IHRydWU7XG59O1xudmFyIF9fcnVuSW5pdGlhbGl6ZXJzID0gKHRoaXMgJiYgdGhpcy5fX3J1bkluaXRpYWxpemVycykgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gICAgfVxuICAgIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcbnZhciBfX3NldEZ1bmN0aW9uTmFtZSA9ICh0aGlzICYmIHRoaXMuX19zZXRGdW5jdGlvbk5hbWUpIHx8IGZ1bmN0aW9uIChmLCBuYW1lLCBwcmVmaXgpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF90aGlzID0gdGhpcztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvcmF0b3JzX2pzXzEgPSByZXF1aXJlKFwibGl0L2RlY29yYXRvcnMuanNcIik7XG4vLyBAdHMtaWdub3JlXG52YXIgY291bnRlcl8xID0gcmVxdWlyZShcIi4vY291bnRlclwiKTtcbi8vIEB0cy1pZ25vcmVcbnZhciBjb3VudGVyX2Nzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvdW50ZXIuY3NzXCIpKTtcbi8vIEB0cy1pZ25vcmVcbnZhciBtZXRlcl9jYXJkX2Nzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21ldGVyLWNhcmQuY3NzXCIpKTtcbi8vIEB0cy1pZ25vcmVcbnZhciBGbHVpZEZsb3dDYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY2xhc3NEZWNvcmF0b3JzID0gWygwLCBkZWNvcmF0b3JzX2pzXzEuY3VzdG9tRWxlbWVudCkoXCJoYXNzLWZsdWlkLWZsb3ctY2FyZFwiKV07XG4gICAgdmFyIF9jbGFzc0Rlc2NyaXB0b3I7XG4gICAgdmFyIF9jbGFzc0V4dHJhSW5pdGlhbGl6ZXJzID0gW107XG4gICAgdmFyIF9jbGFzc1RoaXM7XG4gICAgdmFyIEZsdWlkRmxvd0NhcmQgPSBfY2xhc3NUaGlzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoRmx1aWRGbG93Q2FyZF8xLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBGbHVpZEZsb3dDYXJkXzEoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgICAgIC8vIFN0b3JlIGxhc3QgVmFsdWUgdG8gY2hhbmdlIG9ubHkgd2hlbiB1cGRhdGVkLlxuICAgICAgICAgICAgX3RoaXMudmFsdWVJTyA9IG51bGw7XG4gICAgICAgICAgICAvLyBTdG9yZSBsYXN0IFBlcmNlbnRhZ2UuXG4gICAgICAgICAgICBfdGhpcy5wZXJjZW50SU8gPSAwO1xuICAgICAgICAgICAgLy8gU3RvcmUgQ291bnRlci5cbiAgICAgICAgICAgIF90aGlzLmNvdW50ZXJJTyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLCBcImhhc3NcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsYmFjayBmb3IgVmFsdWUgQ2hhbmdlIC8gSW5pdGlhbGlzYXRpb24gaW4gSGFzcy5cbiAgICAgICAgICAgICAqIEBwYXJhbSBoYXNzSU9cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaGFzc0lPKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBTZXQgSGFzcyBJbnN0YW5jZS5cbiAgICAgICAgICAgICAgICB0aGlzLmhhc3NJTyA9IGhhc3NJTztcbiAgICAgICAgICAgICAgICAvLyBTZXQgSW5uZXIgaWYgbm90IHNldC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbm5lckhUTUwgPT0gdW5kZWZpbmVkIHx8IHRoaXMuaW5uZXJIVE1MID09IG51bGwgfHwgdGhpcy5pbm5lckhUTUwgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3R5bGVFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCJcXG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cXFwiXCIgKyB0aGlzLmNvbmZpZ0lPLnRpdGxlICsgXCJcXFwiPlxcbiAgICAgICAgPHN0eWxlPlwiICsgbWV0ZXJfY2FyZF9jc3NfMS5kZWZhdWx0ICsgXCI8L3N0eWxlPlxcbiAgICAgICAgPHN0eWxlPlwiICsgY291bnRlcl9jc3NfMS5kZWZhdWx0ICsgXCI8L3N0eWxlPlxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1ldGVyLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWV0ZXItaW5uZXJcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cXFwiaGVpZ2h0OiBhdXRvOyB3aWR0aDogMTAwJTsgcG9zaXRpb246IHJlbGF0aXZlO1xcXCIgc3JjPVxcXCIvbG9jYWwvaW1hZ2VzL21ldGVyLnN2Z1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWV0ZXItY291bnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb3VudGVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1ldGVyLXdoZWVsXFxcIiBzdHlsZT1cXFwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDMwJTsgd2lkdGg6IDIyJTsgaGVpZ2h0OiAyMiU7IGxlZnQ6IDMzJTtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9sb2NhbC9pbWFnZXMvd2hlZWwuc3ZnXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHdpZHRoPVxcXCJhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2hhLWNhcmRcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBDb3VudGVyLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvdW50ZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIEVudGl0eSBTdGF0ZS5cbiAgICAgICAgICAgICAgICB2YXIgZW50aXR5SU8gPSB0aGlzLmNvbmZpZ0lPLmVudGl0eTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGVJTyA9IHRoaXMuaGFzc0lPLnN0YXRlc1tlbnRpdHlJT107XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlSU8gPSBzdGF0ZUlPID8gc3RhdGVJTy5zdGF0ZSA6IFwidW5hdmFpbGFibGVcIjtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQ29udGVudCBpZiBWYWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUlPICE9PSB2YWx1ZUlPKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBFbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKHZhbHVlSU8pO1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY2FjaGVkIFZhbHVlLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlSU8gPSB2YWx1ZUlPO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPbmx5IHN0YXJ0IFRpbWVyIG9uY2UuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJTyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IERlYnVnIE1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgVGltZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IG5ldyBJbnRlcnZhbC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcklPID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBUaW1lciBpZiBQZXJjZW50YWdlIGxpbWl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnBlcmNlbnRJTyA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCBDb3VudGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBlcmNlbnRJTyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgVGltZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy50aW1lcklPKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSBieSBQZXJjZW50YWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucm90YXRlKF90aGlzLnBlcmNlbnRJTyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgUGVyY2VudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBlcmNlbnRJTysrO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTZXQgVmFsdWUgaWYgbm90IG51bGwuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVJTyA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlSU8gPSB2YWx1ZUlPO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29uZmlnIEltcGxlbWVudGF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0gY29uZmlnSU9cbiAgICAgICAgICovXG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZ0lPKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ0lPLmVudGl0eSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBuZWVkIHRvIGRlZmluZSBhbiBlbnRpdHlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdmVycmlkZSBDb25maWcuXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0lPID0gY29uZmlnSU87XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgU3R1YiBDb25maWcuXG4gICAgICAgICAqL1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLmdldFN0dWJDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudGl0eTogXCJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGbHVpZCBGbG93XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgQ29udGVudCBvZiBDYXJkLlxuICAgICAgICAgKiBAcGFyYW0gdmFsdWVJT1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS51cGRhdGVFbGVtZW50cyA9IGZ1bmN0aW9uICh2YWx1ZUlPKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgQ291bnRlcnMuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXJzKHZhbHVlSU8pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUm90YXRlIFdoZWVsLlxuICAgICAgICAgKiBAcGFyYW0gcGVyY2VudElPICgwLTEwMCUvMC0zNjDCsClcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHBlcmNlbnRJTykge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIERlZ3JlZXMgYnkgUGVyY2VudC5cbiAgICAgICAgICAgIHZhciBkZWdyZWVzSU8gPSAoMy42ICogcGVyY2VudElPKTtcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBFbGVtZW50LlxuICAgICAgICAgICAgdGhpcy5nZXRXaGVlbEltYWdlKCkuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyBkZWdyZWVzSU8gKyBcImRlZylcIjtcbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5nZXRXaGVlbEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2hlZWxDb250YWluZXIoKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXTtcbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5nZXRDb3VudGVyRWxlbWVudCA9IGZ1bmN0aW9uIChpZElPKSB7XG4gICAgICAgICAgICBpZiAoaWRJTyA9PT0gdm9pZCAwKSB7IGlkSU8gPSAwOyB9XG4gICAgICAgICAgICB2YXIgY291bnRlcklPID0gdGhpcy5nZXRDb3VudGVyQ29udGFpbmVyKCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvdW50ZXJcIilbaWRJT107XG4gICAgICAgICAgICAvLyBBZGQgbmV3IERpdiBpZiBub3QgZXhpdHMuXG4gICAgICAgICAgICBpZiAoY291bnRlcklPID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXJJTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY291bnRlcklPLmNsYXNzTGlzdC5hZGQoXCJjb3VudGVyXCIpO1xuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBFbGVtZW50LlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRlckNvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvdW50ZXJJTyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY291bnRlcklPO1xuICAgICAgICB9O1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLmdldENvdW50ZXJDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbm5lcigpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZXRlci1jb3VudGVyXCIpWzBdO1xuICAgICAgICB9O1xuICAgICAgICBGbHVpZEZsb3dDYXJkXzEucHJvdG90eXBlLmdldFdoZWVsQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5uZXIoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWV0ZXItd2hlZWxcIilbMF07XG4gICAgICAgIH07XG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuZ2V0SW5uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWV0ZXItaW5uZXJcIilbMF07XG4gICAgICAgIH07XG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZCgpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZXRlci1jb250YWluZXJcIilbMF07XG4gICAgICAgIH07XG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuZ2V0Q2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGEtY2FyZFwiKVswXTtcbiAgICAgICAgfTtcbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5zZXRTdHlsZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgbmV3IFN0eWxlIEVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgc3R5bGVJTyA9IG5ldyBIVE1MU3R5bGVFbGVtZW50KCk7XG4gICAgICAgICAgICAvLyBTZXQgSUQgZm9yIElkZW50aWZpY2F0aW9uLlxuICAgICAgICAgICAgc3R5bGVJTy5pZCA9IFwibWV0ZXItc3R5bGVcIjtcbiAgICAgICAgICAgIC8vIFNldCBTdHlsZSBDb250ZW50LlxuICAgICAgICAgICAgc3R5bGVJTy5pbm5lclRleHQgPSBcIi5jb3VudGVyIHtcXG4gICAgICAgICAgY29udGVudDogXFxcImhleVxcXCI7XFxuICAgICAgICB9XCI7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHN0eWxlSU8pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIENvdW50ZXJzLlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgRmx1aWRGbG93Q2FyZF8xLnByb3RvdHlwZS5jcmVhdGVDb3VudGVycyA9IGZ1bmN0aW9uIChjb3VudElPKSB7XG4gICAgICAgICAgICBpZiAoY291bnRJTyA9PT0gdm9pZCAwKSB7IGNvdW50SU8gPSA3OyB9XG4gICAgICAgICAgICAvLyBDcmVhdGUgWCBDb3VudGVycy5cbiAgICAgICAgICAgIGZvciAodmFyIGluY3JlbWVudElPID0gMDsgaW5jcmVtZW50SU8gPCBjb3VudElPOyBpbmNyZW1lbnRJTysrKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJpbnQgRGVidWcgTWVzc2FnZS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZCBDb3VudGVyIFwiICsgaW5jcmVtZW50SU8gKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBPYmplY3QuXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXJJTyA9IG5ldyBjb3VudGVyXzEuQ291bnRlcih0aGlzLmdldENvdW50ZXJFbGVtZW50KGluY3JlbWVudElPKSk7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBNb3VzZSBXaGVlbC5cbiAgICAgICAgICAgICAgICBjb3VudGVySU8uZ2V0T3B0aW9ucygpLm1vdXNld2hlZWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IENvdW50ZXIgSW5zdGFuY2UuXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVySU9baW5jcmVtZW50SU9dID0gY291bnRlcklPO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydCBWYWx1ZSB0byBEaWdpdCBTdHJpbmcuXG4gICAgICAgICAqIEBwYXJhbSBpbnB1dElPXG4gICAgICAgICAqIEBwYXJhbSBzaXplSU9cbiAgICAgICAgICovXG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUuY29udmVydERpZ2l0ID0gZnVuY3Rpb24gKGlucHV0SU8sIHNpemVJTykge1xuICAgICAgICAgICAgaWYgKHNpemVJTyA9PT0gdm9pZCAwKSB7IHNpemVJTyA9IDc7IH1cbiAgICAgICAgICAgIC8vIFphaGwgaW4gU3RyaW5nIHVtd2FuZGVsblxuICAgICAgICAgICAgdmFyIG51bWJlclN0cmluZyA9IE51bWJlci5wYXJzZUludChpbnB1dElPKS50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gUHJpbnQgRGVidWcgTWVzc2FnZS5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udmVydCBcIiArIGlucHV0SU8gKyBcIiB0byBcIiArIG51bWJlclN0cmluZyk7XG4gICAgICAgICAgICAvLyDDnGJlcnByw7xmZW4sIG9iIGRlciBTdHJpbmcgYmVyZWl0cyBzZWNocyBaaWZmZXJuIGhhdFxuICAgICAgICAgICAgaWYgKG51bWJlclN0cmluZy5sZW5ndGggPj0gc2l6ZUlPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlclN0cmluZy5zbGljZSgwLCBzaXplSU8pOyAvLyBEaWUgZXJzdGVuIHNlY2hzIFppZmZlcm4genVyw7xja2dlYmVuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBbnphaGwgZGVyIGZlaGxlbmRlbiBaaWZmZXJuIGJlcmVjaG5lblxuICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nRGlnaXRzID0gc2l6ZUlPIC0gbnVtYmVyU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBOdWxsZW4gdm9ybmUgYW5ow6RuZ2VuLCB1bSBkZW4gU3RyaW5nIGF1ZiBzZWNocyBaaWZmZXJuIHp1IGJyaW5nZW5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pc3NpbmdEaWdpdHM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJTdHJpbmcgPSAnMCcgKyBudW1iZXJTdHJpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXJTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZsdWlkRmxvd0NhcmRfMS5wcm90b3R5cGUudXBkYXRlQ291bnRlcnMgPSBmdW5jdGlvbiAodmFsdWVJTywgY291bnRJTykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChjb3VudElPID09PSB2b2lkIDApIHsgY291bnRJTyA9IDc7IH1cbiAgICAgICAgICAgIC8vIENvbnZlcnQgVmFsdWUgdG8gWCBEaWdpdHMuXG4gICAgICAgICAgICB2YXIgZGlnaXRJTyA9IHRoaXMuY29udmVydERpZ2l0KHZhbHVlSU8sIGNvdW50SU8pO1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaW5jcmVtZW50SU8pIHtcbiAgICAgICAgICAgICAgICAvLyBQcmludCBEZWJ1ZyBNZXNzYWdlLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlIENvdW50ZXIgXCIgKyBpbmNyZW1lbnRJTyArIFwiIHRvIFwiICsgZGlnaXRJT1tpbmNyZW1lbnRJT10gKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGluIFRpbWVvdXQgdG8gZ2l2ZSBhIGJpdCBvZiBBbmltYXRpb24uXG4gICAgICAgICAgICAgICAgLy8gTGFzdCAtPiBGaXJzdFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgQ291bnRlciBieSBDb2x1bW4uXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGVySU8gPSBfdGhpcy5jb3VudGVySU9baW5jcmVtZW50SU9dO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgRGlnaXQgVmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtSU8gPSBOdW1iZXIucGFyc2VJbnQoZGlnaXRJT1tpbmNyZW1lbnRJT10pO1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQ291bnRlciBQb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgY291bnRlcklPLm1vdmVUbyhpdGVtSU8pO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY291bnRlcklPW2luY3JlbWVudElPXS5tb3ZlVG8oZGlnaXRJT1tpbmNyZW1lbnRJT10pO1xuICAgICAgICAgICAgICAgIH0sIChjb3VudElPIC0gaW5jcmVtZW50SU8pICogMjUwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBVcGRhdGUgWCBDb3VudGVycy5cbiAgICAgICAgICAgIGZvciAodmFyIGluY3JlbWVudElPID0gMDsgaW5jcmVtZW50SU8gPCBjb3VudElPOyBpbmNyZW1lbnRJTysrKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMShpbmNyZW1lbnRJTyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGbHVpZEZsb3dDYXJkXzE7XG4gICAgfShIVE1MRWxlbWVudCkpO1xuICAgIF9fc2V0RnVuY3Rpb25OYW1lKF9jbGFzc1RoaXMsIFwiRmx1aWRGbG93Q2FyZFwiKTtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBfX2VzRGVjb3JhdGUobnVsbCwgX2NsYXNzRGVzY3JpcHRvciA9IHsgdmFsdWU6IF9jbGFzc1RoaXMgfSwgX2NsYXNzRGVjb3JhdG9ycywgeyBraW5kOiBcImNsYXNzXCIsIG5hbWU6IF9jbGFzc1RoaXMubmFtZSB9LCBudWxsLCBfY2xhc3NFeHRyYUluaXRpYWxpemVycyk7XG4gICAgICAgIEZsdWlkRmxvd0NhcmQgPSBfY2xhc3NUaGlzID0gX2NsYXNzRGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgX19ydW5Jbml0aWFsaXplcnMoX2NsYXNzVGhpcywgX2NsYXNzRXh0cmFJbml0aWFsaXplcnMpO1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIEZsdWlkRmxvd0NhcmQgPSBfY2xhc3NUaGlzO1xufSgpO1xuLy8gQ29uZmlndXJlIHRoZSBwcmV2aWV3IGluIHRoZSBMb3ZlbGFjZSBjYXJkIHBpY2tlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbndpbmRvdy5jdXN0b21DYXJkcyA9IHdpbmRvdy5jdXN0b21DYXJkcyB8fCBbXTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG53aW5kb3cuY3VzdG9tQ2FyZHMucHVzaCh7XG4gICAgdHlwZTogJ2hhc3MtZmx1aWQtZmxvdy1jYXJkJyxcbiAgICBuYW1lOiAnRmx1aWQgRmxvdyBNZXRlcicsXG4gICAgcHJldmlldzogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJ0Egd2F0ZXIgbWV0ZXIgd2l0aCBkaXNwbGF5IG9mIHF1YW50aXRpZXMgb2YgbGlxdWlkIHRoYXQgaGF2ZSBhbHJlYWR5IGZsb3dlZCB0aHJvdWdoLiBBbmltYXRlZCBjb2dzIGluZGljYXRlIGEgY2hhbmdlIGluIHRoZSB2YWx1ZXMuJyxcbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgY29uc3QgbGVnYWN5UHJvdG90eXBlTWV0aG9kID0gKGRlc2NyaXB0b3IsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG5leHBvcnQgY29uc3Qgc3RhbmRhcmRQcm90b3R5cGVNZXRob2QgPSAoZGVzY3JpcHRvciwgZWxlbWVudCkgPT4gKHtcbiAgICBraW5kOiAnbWV0aG9kJyxcbiAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgZGVzY3JpcHRvcixcbn0pO1xuLyoqXG4gKiBIZWxwZXIgZm9yIGRlY29yYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCBib3RoIFR5cGVTY3JpcHRcbiAqIGFuZCBCYWJlbCBkZWNvcmF0b3JzLiBUaGUgb3B0aW9uYWwgYGZpbmlzaGVyYCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIHdvcmsgb25cbiAqIHRoZSBjbGFzcy4gVGhlIG9wdGlvbmFsIGBkZXNjcmlwdG9yYCBzaG91bGQgcmV0dXJuIGEgUHJvcGVydHlEZXNjcmlwdG9yXG4gKiB0byBpbnN0YWxsIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIGZpbmlzaGVyIHtmdW5jdGlvbn0gT3B0aW9uYWwgZmluaXNoZXIgbWV0aG9kOyByZWNlaXZlcyB0aGUgZWxlbWVudFxuICogY29uc3RydWN0b3IgYW5kIHByb3BlcnR5IGtleSBhcyBhcmd1bWVudHMgYW5kIGhhcyBubyByZXR1cm4gdmFsdWUuXG4gKiBAcGFyYW0gZGVzY3JpcHRvciB7ZnVuY3Rpb259IE9wdGlvbmFsIGRlc2NyaXB0b3IgbWV0aG9kOyByZWNlaXZlcyB0aGVcbiAqIHByb3BlcnR5IGtleSBhcyBhbiBhcmd1bWVudCBhbmQgcmV0dXJucyBhIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gZGVmaW5lIGZvclxuICogdGhlIGdpdmVuIHByb3BlcnR5LlxuICogQHJldHVybnMge0NsYXNzRWxlbWVudHx2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZGVjb3JhdGVQcm9wZXJ0eSA9ICh7IGZpbmlzaGVyLCBkZXNjcmlwdG9yLCB9KSA9PiAocHJvdG9PckRlc2NyaXB0b3IsIG5hbWVcbi8vIE5vdGUgVHlwZVNjcmlwdCByZXF1aXJlcyB0aGUgcmV0dXJuIHR5cGUgdG8gYmUgYHZvaWR8YW55YFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbikgPT4ge1xuICAgIHZhciBfYTtcbiAgICAvLyBUeXBlU2NyaXB0IC8gQmFiZWwgbGVnYWN5IG1vZGVcbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGN0b3IgPSBwcm90b09yRGVzY3JpcHRvclxuICAgICAgICAgICAgLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUsIGRlc2NyaXB0b3IobmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmlzaGVyID09PSBudWxsIHx8IGZpbmlzaGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaW5pc2hlcihjdG9yLCBuYW1lKTtcbiAgICAgICAgLy8gQmFiZWwgc3RhbmRhcmQgbW9kZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZSwgdGhlIEBwcm9wZXJ0eSBkZWNvcmF0b3Igc2F2ZXMgYGtleWAgYXMgYG9yaWdpbmFsS2V5YFxuICAgICAgICAvLyBzbyB0cnkgdG8gdXNlIGl0IGhlcmUuXG4gICAgICAgIGNvbnN0IGtleSA9IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAoX2EgPSBwcm90b09yRGVzY3JpcHRvci5vcmlnaW5hbEtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcHJvdG9PckRlc2NyaXB0b3Iua2V5O1xuICAgICAgICBjb25zdCBpbmZvID0gZGVzY3JpcHRvciAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IocHJvdG9PckRlc2NyaXB0b3Iua2V5KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogeyAuLi5wcm90b09yRGVzY3JpcHRvciwga2V5IH07XG4gICAgICAgIGlmIChmaW5pc2hlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGluZm8uZmluaXNoZXIgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgICAgICAgICAgIGZpbmlzaGVyKGN0b3IsIGtleSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgbGVnYWN5Q3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lLCBjbGF6eikgPT4ge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgLy8gQ2FzdCBhcyBhbnkgYmVjYXVzZSBUUyBkb2Vzbid0IHJlY29nbml6ZSB0aGUgcmV0dXJuIHR5cGUgYXMgYmVpbmcgYVxuICAgIC8vIHN1YnR5cGUgb2YgdGhlIGRlY29yYXRlZCBjbGFzcyB3aGVuIGNsYXp6IGlzIHR5cGVkIGFzXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgZm9yIHNvbWUgcmVhc29uLlxuICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGlzIGhlbHBmdWwgdG8gbWFrZSBzdXJlIHRoZSBkZWNvcmF0b3IgaXNcbiAgICAvLyBhcHBsaWVkIHRvIGVsZW1lbnRzIGhvd2V2ZXIuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gY2xheno7XG59O1xuY29uc3Qgc3RhbmRhcmRDdXN0b21FbGVtZW50ID0gKHRhZ05hbWUsIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCB7IGtpbmQsIGVsZW1lbnRzIH0gPSBkZXNjcmlwdG9yO1xuICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQsXG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAvLyBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmNlIHRoZSBjbGFzcyBpcyBvdGhlcndpc2UgZnVsbHkgZGVmaW5lZFxuICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBqc1xuICogQGN1c3RvbUVsZW1lbnQoJ215LWVsZW1lbnQnKVxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSB0YWcgbmFtZSBvZiB0aGUgY3VzdG9tIGVsZW1lbnQgdG8gZGVmaW5lLlxuICovXG5leHBvcnQgY29uc3QgY3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lKSA9PiAoY2xhc3NPckRlc2NyaXB0b3IpID0+IHR5cGVvZiBjbGFzc09yRGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gbGVnYWN5Q3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcilcbiAgICA6IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgdG8gYSBtZXRob2QgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lciBpbiBhXG4gKiBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBhcyBhY2NlcHRlZCBieVxuICogYEV2ZW50VGFyZ2V0I2FkZEV2ZW50TGlzdGVuZXJgIGFuZCBgRXZlbnRUYXJnZXQjcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuXG4gKlxuICogQ3VycmVudCBicm93c2VycyBzdXBwb3J0IHRoZSBgY2FwdHVyZWAsIGBwYXNzaXZlYCwgYW5kIGBvbmNlYCBvcHRpb25zLiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lciNQYXJhbWV0ZXJzXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5fb25DbGlja30+XG4gKiAgICAgICAgIDxidXR0b24+PC9idXR0b24+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKlxuICogICBAZXZlbnRPcHRpb25zKHtjYXB0dXJlOiB0cnVlfSlcbiAqICAgX29uQ2xpY2soZSkge1xuICogICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGZpbmlzaGVyOiAoY3RvciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjdG9yLnByb3RvdHlwZVtuYW1lXSwgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1vcHRpb25zLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3Qgc3RhbmRhcmRQcm9wZXJ0eSA9IChvcHRpb25zLCBlbGVtZW50KSA9PiB7XG4gICAgLy8gV2hlbiBkZWNvcmF0aW5nIGFuIGFjY2Vzc29yLCBwYXNzIGl0IHRocm91Z2ggYW5kIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICAvLyBOb3RlLCB0aGUgYGhhc093blByb3BlcnR5YCBjaGVjayBpbiBgY3JlYXRlUHJvcGVydHlgIGVuc3VyZXMgd2UgZG9uJ3RcbiAgICAvLyBzdG9tcCBvdmVyIHRoZSB1c2VyJ3MgYWNjZXNzb3IuXG4gICAgaWYgKGVsZW1lbnQua2luZCA9PT0gJ21ldGhvZCcgJiZcbiAgICAgICAgZWxlbWVudC5kZXNjcmlwdG9yICYmXG4gICAgICAgICEoJ3ZhbHVlJyBpbiBlbGVtZW50LmRlc2NyaXB0b3IpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbGVtZW50LFxuICAgICAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlUHJvcGVydHkoKSB0YWtlcyBjYXJlIG9mIGRlZmluaW5nIHRoZSBwcm9wZXJ0eSwgYnV0IHdlIHN0aWxsXG4gICAgICAgIC8vIG11c3QgcmV0dXJuIHNvbWUga2luZCBvZiBkZXNjcmlwdG9yLCBzbyByZXR1cm4gYSBkZXNjcmlwdG9yIGZvciBhblxuICAgICAgICAvLyB1bnVzZWQgcHJvdG90eXBlIGZpZWxkLiBUaGUgZmluaXNoZXIgY2FsbHMgY3JlYXRlUHJvcGVydHkoKS5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAgICBrZXk6IFN5bWJvbCgpLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IHt9LFxuICAgICAgICAgICAgLy8gc3RvcmUgdGhlIG9yaWdpbmFsIGtleSBzbyBzdWJzZXF1ZW50IGRlY29yYXRvcnMgaGF2ZSBhY2Nlc3MgdG8gaXQuXG4gICAgICAgICAgICBvcmlnaW5hbEtleTogZWxlbWVudC5rZXksXG4gICAgICAgICAgICAvLyBXaGVuIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZGVjb3JhdG9ycyBpbXBsZW1lbnRzIGluaXRpYWxpemVycyxcbiAgICAgICAgICAgIC8vIGRvIHRoaXMgaW5zdGVhZCBvZiB0aGUgaW5pdGlhbGl6ZXIgYmVsb3cuIFNlZTpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvOTI2MCBleHRyYXM6IFtcbiAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgLy8gICAgIGtpbmQ6ICdpbml0aWFsaXplcicsXG4gICAgICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIC8vICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIGluaXRpYWxpemVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5pbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2VsZW1lbnQua2V5XSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBsZWdhY3lQcm9wZXJ0eSA9IChvcHRpb25zLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIHByb3RvLmNvbnN0cnVjdG9yLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xufTtcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3Igd2hpY2ggY3JlYXRlcyBhIHJlYWN0aXZlIHByb3BlcnR5IHRoYXQgcmVmbGVjdHMgYVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgdmFsdWUuIFdoZW4gYSBkZWNvcmF0ZWQgcHJvcGVydHkgaXMgc2V0XG4gKiB0aGUgZWxlbWVudCB3aWxsIHVwZGF0ZSBhbmQgcmVuZGVyLiBBIHtAbGlua2NvZGUgUHJvcGVydHlEZWNsYXJhdGlvbn0gbWF5XG4gKiBvcHRpb25hbGx5IGJlIHN1cHBsaWVkIHRvIGNvbmZpZ3VyZSBwcm9wZXJ0eSBmZWF0dXJlcy5cbiAqXG4gKiBUaGlzIGRlY29yYXRvciBzaG91bGQgb25seSBiZSB1c2VkIGZvciBwdWJsaWMgZmllbGRzLiBBcyBwdWJsaWMgZmllbGRzLFxuICogcHJvcGVydGllcyBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBwcmltYXJpbHkgc2V0dGFibGUgYnkgZWxlbWVudCB1c2VycyxcbiAqIGVpdGhlciB2aWEgYXR0cmlidXRlIG9yIHRoZSBwcm9wZXJ0eSBpdHNlbGYuXG4gKlxuICogR2VuZXJhbGx5LCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGNoYW5nZWQgYnkgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHByaXZhdGUgb3JcbiAqIHByb3RlY3RlZCBmaWVsZHMgYW5kIHNob3VsZCB1c2UgdGhlIHtAbGlua2NvZGUgc3RhdGV9IGRlY29yYXRvci5cbiAqXG4gKiBIb3dldmVyLCBzb21ldGltZXMgZWxlbWVudCBjb2RlIGRvZXMgbmVlZCB0byBzZXQgYSBwdWJsaWMgcHJvcGVydHkuIFRoaXNcbiAqIHNob3VsZCB0eXBpY2FsbHkgb25seSBiZSBkb25lIGluIHJlc3BvbnNlIHRvIHVzZXIgaW50ZXJhY3Rpb24sIGFuZCBhbiBldmVudFxuICogc2hvdWxkIGJlIGZpcmVkIGluZm9ybWluZyB0aGUgdXNlcjsgZm9yIGV4YW1wbGUsIGEgY2hlY2tib3ggc2V0cyBpdHNcbiAqIGBjaGVja2VkYCBwcm9wZXJ0eSB3aGVuIGNsaWNrZWQgYW5kIGZpcmVzIGEgYGNoYW5nZWRgIGV2ZW50LiBNdXRhdGluZyBwdWJsaWNcbiAqIHByb3BlcnRpZXMgc2hvdWxkIHR5cGljYWxseSBub3QgYmUgZG9uZSBmb3Igbm9uLXByaW1pdGl2ZSAob2JqZWN0IG9yIGFycmF5KVxuICogcHJvcGVydGllcy4gSW4gb3RoZXIgY2FzZXMgd2hlbiBhbiBlbGVtZW50IG5lZWRzIHRvIG1hbmFnZSBzdGF0ZSwgYSBwcml2YXRlXG4gKiBwcm9wZXJ0eSBkZWNvcmF0ZWQgdmlhIHRoZSB7QGxpbmtjb2RlIHN0YXRlfSBkZWNvcmF0b3Igc2hvdWxkIGJlIHVzZWQuIFdoZW5cbiAqIG5lZWRlZCwgc3RhdGUgcHJvcGVydGllcyBjYW4gYmUgaW5pdGlhbGl6ZWQgdmlhIHB1YmxpYyBwcm9wZXJ0aWVzIHRvXG4gKiBmYWNpbGl0YXRlIGNvbXBsZXggaW50ZXJhY3Rpb25zLlxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gKiAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA9PiBuYW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBsZWdhY3lQcm9wZXJ0eShvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSlcbiAgICAgICAgOiBzdGFuZGFyZFByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BlcnR5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyXG4gKiB0aGF0IGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvckFsbCBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yQWxsXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFsbCgnZGl2JylcbiAqICAgZGl2czogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hO1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuLyoqXG4gKiBBIHRpbnkgbW9kdWxlIHNjb3BlZCBwb2x5ZmlsbCBmb3IgSFRNTFNsb3RFbGVtZW50LmFzc2lnbmVkRWxlbWVudHMuXG4gKi9cbmNvbnN0IHNsb3RBc3NpZ25lZEVsZW1lbnRzID0gKChfYSA9IGdsb2JhbC5IVE1MU2xvdEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm90b3R5cGUuYXNzaWduZWRFbGVtZW50cykgIT0gbnVsbFxuICAgID8gKHNsb3QsIG9wdHMpID0+IHNsb3QuYXNzaWduZWRFbGVtZW50cyhvcHRzKVxuICAgIDogKHNsb3QsIG9wdHMpID0+IHNsb3RcbiAgICAgICAgLmFzc2lnbmVkTm9kZXMob3B0cylcbiAgICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIHRoZSBgYXNzaWduZWRFbGVtZW50c2Agb2YgdGhlIGdpdmVuIGBzbG90YC4gUHJvdmlkZXMgYSBkZWNsYXJhdGl2ZVxuICogd2F5IHRvIHVzZVxuICogW2BIVE1MU2xvdEVsZW1lbnQuYXNzaWduZWRFbGVtZW50c2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MU2xvdEVsZW1lbnQvYXNzaWduZWRFbGVtZW50cykuXG4gKlxuICogQ2FuIGJlIHBhc3NlZCBhbiBvcHRpb25hbCB7QGxpbmtjb2RlIFF1ZXJ5QXNzaWduZWRFbGVtZW50c09wdGlvbnN9IG9iamVjdC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoeyBzbG90OiAnbGlzdCcgfSlcbiAqICAgbGlzdEl0ZW1zITogQXJyYXk8SFRNTEVsZW1lbnQ+O1xuICogICBAcXVlcnlBc3NpZ25lZEVsZW1lbnRzKClcbiAqICAgdW5uYW1lZFNsb3RFbHMhOiBBcnJheTxIVE1MRWxlbWVudD47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8c2xvdCBuYW1lPVwibGlzdFwiPjwvc2xvdD5cbiAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBOb3RlLCB0aGUgdHlwZSBvZiB0aGlzIHByb3BlcnR5IHNob3VsZCBiZSBhbm5vdGF0ZWQgYXMgYEFycmF5PEhUTUxFbGVtZW50PmAuXG4gKlxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBc3NpZ25lZEVsZW1lbnRzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHNsb3QsIHNlbGVjdG9yIH0gPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fTtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdFNlbGVjdG9yID0gYHNsb3Qke3Nsb3QgPyBgW25hbWU9JHtzbG90fV1gIDogJzpub3QoW25hbWVdKSd9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90RWwgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNsb3RTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBzbG90RWwgIT0gbnVsbCA/IHNsb3RBc3NpZ25lZEVsZW1lbnRzKHNsb3RFbCwgb3B0aW9ucykgOiBbXTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IHsgcXVlcnlBc3NpZ25lZEVsZW1lbnRzIH0gZnJvbSAnLi9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBc3NpZ25lZE5vZGVzKHNsb3RPck9wdGlvbnMsIGZsYXR0ZW4sIHNlbGVjdG9yKSB7XG4gICAgLy8gTm9ybWFsaXplIHRoZSBvdmVybG9hZGVkIGFyZ3VtZW50cy5cbiAgICBsZXQgc2xvdCA9IHNsb3RPck9wdGlvbnM7XG4gICAgbGV0IGFzc2lnbmVkTm9kZXNPcHRpb25zO1xuICAgIGlmICh0eXBlb2Ygc2xvdE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc2xvdCA9IHNsb3RPck9wdGlvbnMuc2xvdDtcbiAgICAgICAgYXNzaWduZWROb2Rlc09wdGlvbnMgPSBzbG90T3JPcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXNzaWduZWROb2Rlc09wdGlvbnMgPSB7IGZsYXR0ZW4gfTtcbiAgICB9XG4gICAgLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBxdWVyeUFzc2lnbmVkTm9kZXMgd2l0aCBhIHNlbGVjdG9yIGJlaGF2ZXNcbiAgICAvLyBleGFjdGx5IGxpa2UgcXVlcnlBc3NpZ25lZEVsZW1lbnRzIHdpdGggYSBzZWxlY3Rvci5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5QXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgICAgICBzbG90OiBzbG90LFxuICAgICAgICAgICAgZmxhdHRlbixcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RFbCA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9iID0gc2xvdEVsID09PSBudWxsIHx8IHNsb3RFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xvdEVsLmFzc2lnbmVkTm9kZXMoYXNzaWduZWROb2Rlc09wdGlvbnMpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vLyBOb3RlLCBpbiB0aGUgZnV0dXJlLCB3ZSBtYXkgZXh0ZW5kIHRoaXMgZGVjb3JhdG9yIHRvIHN1cHBvcnQgdGhlIHVzZSBjYXNlXG4vLyB3aGVyZSB0aGUgcXVlcmllZCBlbGVtZW50IG1heSBuZWVkIHRvIGRvIHdvcmsgdG8gYmVjb21lIHJlYWR5IHRvIGludGVyYWN0XG4vLyB3aXRoIChlLmcuIGxvYWQgc29tZSBpbXBsZW1lbnRhdGlvbiBjb2RlKS4gSWYgc28sIHdlIG1pZ2h0IGVsZWN0IHRvXG4vLyBhZGQgYSBzZWNvbmQgYXJndW1lbnQgZGVmaW5pbmcgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBydW4gdG8gbWFrZSB0aGVcbi8vIHF1ZXJpZWQgZWxlbWVudCBsb2FkZWQvdXBkYXRlZC9yZWFkeS5cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzdWx0IG9mIGEgcXVlcnlTZWxlY3RvciBvbiB0aGVcbiAqIGVsZW1lbnQncyByZW5kZXJSb290IGRvbmUgYWZ0ZXIgdGhlIGVsZW1lbnQncyBgdXBkYXRlQ29tcGxldGVgIHByb21pc2VcbiAqIHJlc29sdmVzLiBXaGVuIHRoZSBxdWVyaWVkIHByb3BlcnR5IG1heSBjaGFuZ2Ugd2l0aCBlbGVtZW50IHN0YXRlLCB0aGlzXG4gKiBkZWNvcmF0b3IgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiByZXF1aXJpbmcgdXNlcnMgdG8gYXdhaXQgdGhlXG4gKiBgdXBkYXRlQ29tcGxldGVgIGJlZm9yZSBhY2Nlc3NpbmcgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzeW5jKCcjZmlyc3QnKVxuICogICBmaXJzdDogUHJvbWlzZTxIVE1MRGl2RWxlbWVudD47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKlxuICogLy8gZXh0ZXJuYWwgdXNhZ2VcbiAqIGFzeW5jIGRvU29tZXRoaW5nV2l0aEZpcnN0KCkge1xuICogIChhd2FpdCBhTXlFbGVtZW50LmZpcnN0KS5kb1NvbWV0aGluZygpO1xuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzeW5jKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBhc3luYyBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXN5bmMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKiBAcGFyYW0gY2FjaGUgQW4gb3B0aW9uYWwgYm9vbGVhbiB3aGljaCB3aGVuIHRydWUgcGVyZm9ybXMgdGhlIERPTSBxdWVyeSBvbmx5XG4gKiAgICAgb25jZSBhbmQgY2FjaGVzIHRoZSByZXN1bHQuXG4gKlxuICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvclxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnkoJyNmaXJzdCcpXG4gKiAgIGZpcnN0OiBIVE1MRGl2RWxlbWVudDtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3IsIGNhY2hlKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gKF9iID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJy4vcHJvcGVydHkuanMnO1xuLyoqXG4gKiBEZWNsYXJlcyBhIHByaXZhdGUgb3IgcHJvdGVjdGVkIHJlYWN0aXZlIHByb3BlcnR5IHRoYXQgc3RpbGwgdHJpZ2dlcnNcbiAqIHVwZGF0ZXMgdG8gdGhlIGVsZW1lbnQgd2hlbiBpdCBjaGFuZ2VzLiBJdCBkb2VzIG5vdCByZWZsZWN0IGZyb20gdGhlXG4gKiBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZS5cbiAqXG4gKiBQcm9wZXJ0aWVzIGRlY2xhcmVkIHRoaXMgd2F5IG11c3Qgbm90IGJlIHVzZWQgZnJvbSBIVE1MIG9yIEhUTUwgdGVtcGxhdGluZ1xuICogc3lzdGVtcywgdGhleSdyZSBzb2xlbHkgZm9yIHByb3BlcnRpZXMgaW50ZXJuYWwgdG8gdGhlIGVsZW1lbnQuIFRoZXNlXG4gKiBwcm9wZXJ0aWVzIG1heSBiZSByZW5hbWVkIGJ5IG9wdGltaXphdGlvbiB0b29scyBsaWtlIGNsb3N1cmUgY29tcGlsZXIuXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZS5qcy5tYXAiLCJleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2hhc3MtZmx1aWQtZmxvdy1jYXJkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9