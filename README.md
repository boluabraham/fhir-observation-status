# \<fhir-observation-status\>

The fhir-observation-status displays the current status of an observation. 
The fhir-observation-status component is used to determine whether the record is in active use. It is commonly used
as a form field. It uses input type "select" and iron-ajax.It is a coded concept in FHIR and hence hard-coded into the pattern.

### Functionality
  Default : shows a selectable input field for `display`. Options includes registered,preliminary,final and amended.
  
 ######a. GET:
 * It selects option from available select options when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `obsStatus` key value is checked for  in key-value pair of data.
  * If it does not receive any matching value, it shows blank.
 * Setting `obsStatus` property as true or false can help show and hide this component.
 
 ######b. SET:
 * A selection of option sets the value of the component used for posting purposes.

### Properties of fhir-observation-status
 * `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `obsStatus`:`String` - selectable option for the status of the observation. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-status url=""></fhir-observation-status>`
 * Without url:
  `<fhir-observation-status></fhir-observation-status>`
