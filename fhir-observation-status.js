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
    typefield: String,
    url:String,
    value: Object
    };
  }
  
  constructor(){
    super();
    this.typefield = "true";
    this.value= {};
  }

  _render({typefield,url,value}){
    return html`
    <div id="obsDiv">
    ${typefield !== 'false' ? html`
      <label>Observation Status</label>
      <select class="typefield" value="${this.value}" on-change="${e => this.value = e.target.value}">
          <option value="registered ">registered </option>
          <option value="preliminary ">preliminary </option>
          <option value="final">final</option>
          <option value="amended">amended</option>
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
