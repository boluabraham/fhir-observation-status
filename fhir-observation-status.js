import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/iron-ajax/iron-ajax.js'

/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * `fhir-observation-status`
 *  the fhir-observation-status displays the current status of an observation . Options includes registered,preliminary,final and amended
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FhirObservationStatus extends LitElement {
  static get properties() {
    return {
    obsStatus: String,
    url:String,
    value: Object
    };
  }
  
  constructor(){
    super();
    this.obsStatus = 'true';
    this.value= {};
  }

  _render({obsStatus,url,value}){
    return html`
    <div id="obsDiv">
    ${obsStatus !== 'false' ? html`
      <label>Observation Status</label>
      <select class="obsClass" value="${this.value}" on-change="${e => this.value = e.target.value}">
          <option value="registered">Registered </option>
          <option value="preliminary">Preliminary </option>
          <option value="final">Final</option>
          <option value="amended">Amended</option>
      </select>` : ''}
      </div>
      <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
     `;

  }
  _didRender() {

    this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

        var obsCat = this.parentNode.host;
        if (e.detail.response.status !== undefined) {
            obsCat.value = e.detail.response.status;
        }
        else {
            this.parentNode.removeChild(this.parentNode.querySelector('#obsDiv'));
        }
    });
}

}

window.customElements.define('fhir-observation-status', FhirObservationStatus);
