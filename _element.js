import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `fhir-observation-status`
 *  the fhir-observation-status displays the current status of f an observation . options includes registered,preliminary,final and amended
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FhirObservationStatus extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'fhir-observation-status',
      },
    };
  }
}

window.customElements.define('fhir-observation-status', FhirObservationStatus);
