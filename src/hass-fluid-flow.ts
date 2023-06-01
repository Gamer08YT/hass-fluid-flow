import {HomeAssistant} from "custom-card-helpers";
import {customElement} from 'lit/decorators.js';
// @ts-ignore
import {Counter} from "./counter";

// @ts-ignore
import counter from "./counter.css";
// @ts-ignore
import styles from "./meter-card.css";
import {tsTsxJsJsxRegex} from "ts-loader/dist/constants";

// @ts-ignore
@customElement("hass-fluid-flow-card")
class FluidFlowCard extends HTMLElement {
    // Store Hass Instance.
    private hassIO: HomeAssistant;

    // Store last Value to change only when updated.
    private valueIO = null;

    // Store Config Instance.
    private configIO;

    // Store Timer Instance.
    private timerIO;

    // Store last Percentage.
    private percentIO = 0;

    // Store Counter.
    private counterIO: Counter[] = [];

    /**
     * Callback for Value Change / Initialisation in Hass.
     * @param hassIO
     */
    set hass(hassIO: HomeAssistant) {
        // Set Hass Instance.
        this.hassIO = hassIO;

        // Set Inner if not set.
        if (this.innerHTML == undefined || this.innerHTML == null || this.innerHTML == "") {
            //this.setStyleElement();
            this.innerHTML = `
        <ha-card header="` + this.configIO.title + `">
        <style>` + styles + `</style>
        <style>` + counter + `</style>
         <div class="meter-container">
            <div class="meter-inner" style="position: relative;">
                <img style="height: auto; width: 100%; position: relative;" src="/local/images/meter.svg" />
                <div class="meter-counter">
                    <div class="counter"></div>
                </div>
                <div class="meter-wheel" style="position: absolute; bottom: 30%; width: 22%; height: 22%; left: 33%;">
                    <img src="/local/images/wheel.svg" height="100%" width="auto">
                </div>
            </div>
         </div>
        </ha-card`;

            // Initialize Counter.
            this.createCounters();
        }


        // Parse Entity State.
        const entityIO = this.configIO.entity;
        const stateIO = this.hassIO.states[entityIO];
        const valueIO = stateIO ? stateIO.state : "unavailable";

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
            this.timerIO = setInterval(() => {
                // Stop Timer if Percentage limit.
                if (this.percentIO == 100) {
                    // Reset Counter.
                    this.percentIO = 0;

                    // Clear Timer.
                    clearInterval(this.timerIO);
                }

                // Rotate by Percentage.
                this.rotate(this.percentIO);

                // Increment Percent.
                this.percentIO++;
            }, 500);
        }

        // Set Value if not null.
        if (this.valueIO == null)
            this.valueIO = valueIO;
    }

    /**
     * Config Implementation.
     * @param configIO
     */
    setConfig(configIO) {
        if (!configIO.entity) {
            throw new Error("You need to define an entity");
        }

        // Override Config.
        this.configIO = configIO;
    }

    /**
     * Get Stub Config.
     */
    getStubConfig() {
        return {
            entity: "",
            title: "Fluid Flow"
        }
    }

    /**
     * Update Content of Card.
     * @param valueIO
     * @private
     */
    private updateElements(valueIO: any) {
        // Update Counters.
        this.updateCounters(valueIO);
    }

    /**
     * Rotate Wheel.
     * @param percentIO (0-100%/0-360°)
     * @private
     */
    private rotate(percentIO: number) {
        // Calculate Degrees by Percent.
        const degreesIO = (3.6 * percentIO);

        // Transform Element.
        this.getWheelImage().style.transform = "rotate(" + degreesIO + "deg)";
    }

    private getWheelImage() {
        return this.getWheelContainer().getElementsByTagName("img")[0];
    }

    private getCounterElement(idIO = 0) {
        let counterIO = this.getCounterContainer().getElementsByClassName("counter")[idIO];

        // Add new Div if not exits.
        if (counterIO == undefined) {
            counterIO = document.createElement("div");
            counterIO.classList.add("counter");

            // Append Element.
            this.getCounterContainer().appendChild(counterIO);
        }

        return counterIO;
    }

    private getCounterContainer() {
        return this.getInner().getElementsByClassName("meter-counter")[0];
    }

    private getWheelContainer() {
        return this.getInner().getElementsByClassName("meter-wheel")[0];
    }

    private getInner() {
        return this.getContainer().getElementsByClassName("meter-inner")[0];
    }

    private getContainer() {
        return this.getCard().getElementsByClassName("meter-container")[0];
    }

    private getCard() {
        return this.getElementsByTagName("ha-card")[0];
    }

    private setStyleElement() {
        // Create new Style Element.
        const styleIO = new HTMLStyleElement();

        // Set ID for Identification.
        styleIO.id = "meter-style";

        // Set Style Content.
        styleIO.innerText = `.counter {
          content: "hey";
        }`;

        this.appendChild(styleIO);
    }

    /**
     * Create Counters.
     * @private
     */
    private createCounters(countIO = 7) {
        // Create X Counters.
        for (let incrementIO = 0; incrementIO < countIO; incrementIO++) {
            // Print Debug Message.
            console.log("Add Counter " + incrementIO + ".");

            // Create new Object.
            const counterIO = new Counter(this.getCounterElement(incrementIO));

            // Disable Mouse Wheel.
            counterIO.getOptions().mousewheel = false;

            // Create new Counter Instance.
            this.counterIO[incrementIO] = counterIO;
        }
    }

    /**
     * Convert Value to Digit String.
     * @param inputIO
     * @param sizeIO
     */
    convertDigit(inputIO, sizeIO = 7) {
        // Zahl in String umwandeln
        var numberString = Number.parseInt(inputIO).toString();

        // Print Debug Message.
        console.log("Convert " + inputIO + " to " + numberString);

        // Überprüfen, ob der String bereits sechs Ziffern hat
        if (numberString.length >= sizeIO) {
            return numberString.slice(0, sizeIO); // Die ersten sechs Ziffern zurückgeben
        } else {
            // Anzahl der fehlenden Ziffern berechnen
            var missingDigits = sizeIO - numberString.length;

            // Nullen vorne anhängen, um den String auf sechs Ziffern zu bringen
            for (var i = 0; i < missingDigits; i++) {
                numberString = '0' + numberString;
            }

            return numberString;
        }
    }


    private updateCounters(valueIO: any, countIO = 7) {
        // Convert Value to X Digits.
        const digitIO = this.convertDigit(valueIO, countIO);

        // Update X Counters.
        for (let incrementIO = 0; incrementIO < countIO; incrementIO++) {
            // Print Debug Message.
            console.log("Update Counter " + incrementIO + " to " + digitIO[incrementIO] + ".");

            // Update in Timeout to give a bit of Animation.
            // Last -> First
            setTimeout(() => {
                // Get Counter by Column.
                const counterIO = this.counterIO[incrementIO];

                // Get Digit Value.
                const itemIO = Number.parseInt(digitIO[incrementIO]);

                // Update Counter Position.
                counterIO.moveTo(itemIO);
                //this.counterIO[incrementIO].moveTo(digitIO[incrementIO]);
            }, (countIO - incrementIO) * 250);
        }
    }
}

// Configure the preview in the Lovelace card picker
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards = (window as any).customCards || [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).customCards.push({
    type: 'hass-fluid-flow-card',
    name: 'Fluid Flow Meter',
    preview: true,
    description: 'A water meter with display of quantities of liquid that have already flowed through. Animated cogs indicate a change in the values.',
});
