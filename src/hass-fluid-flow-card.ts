import {HomeAssistant} from "custom-card-helpers";
import {customElement} from 'lit/decorators.js';
import "./counter.css";
import {Counter} from "./counter";

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

    /**
     * Callback for Value Change / Initialisation in Hass.
     * @param hassIO
     */
    set hass(hassIO: HomeAssistant) {
        // Set Hass Instance.
        this.hassIO = hassIO;

        // Set Inner if not set.
        if (this.innerHTML == undefined || this.innerHTML == null || this.innerHTML == "") {
            // Set Style Properties.
            //this.setStyleElement();
            this.loadCSS("/local/src/counter.css");

            this.innerHTML = `
        <ha-card header="` + this.configIO.title + `">
         <div class="meter-container" style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: center; align-content: center; align-items: center;">
            <div class="meter-inner" style="position: relative;">
                <img style="height: 15rem; width: auto; position: relative;" src="/local/images/meter.svg" />
                <div class="meter-counter" style="position: absolute; bottom: 50%;">
                    <div class="counter"></div>
                </div>
                <div class="meter-wheel" style="position: absolute; bottom: 30%; width: 22%; height: 22%; left: 33%;">
                    <img src="/local/images/wheel.svg" height="100%" width="auto">
                </div>
            </div>
         </div>
        </ha-card`;
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

        const counterIO = new Counter(this.getCounterElement(0));

        // Set Value if not null.
        if (this.valueIO == null)
            this.valueIO = valueIO;
    }

    loadCSS(url) {
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
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
        return this.getCounterContainer().getElementsByClassName("counter")[idIO];
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

        if (document.getElementById("meter-style") == undefined)
            document.append(styleIO);
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
