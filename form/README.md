# Basic Control

## Input fields

The most basic form widgets. They can:

- marked as readonly (the user can't modify the input value but it is still sent the data) or disabled (the input value can't be modified and is never sent the data).
- have a placeholder that should be used to briefly describe the purpose of the box.
- be constrained in size (the physical size of the box) and maxlength (the maximum number of characters that can be entered into the box)
- benefit from spell checking (using the spellcheck attribute), if the browser supports it.

### Single line text fields

A single line text field is created using an `<input>` element whose type attribute value is set to text, or by omitting the type attribute altogether (text is the default value). The value text for this attribute is also the fallback value if the value you specify for the type attribute is unknown by the browser

Single line text fields have only one true constraint: if you type text with line breaks, the browser removes those line breaks before sending the data to the server.

### Password field

The password value doesn't add any special constraints to the entered text, but it does obscure the value entered into the field (e.g. with dots or asterisks) so it can't be easily read by others.

Keep in mind this is just a user interface feature; unless you submit your form securely, it will get sent in plain text, which is bad for security — a malicious party could intercept your data and steal passwords, credit card details, or whatever else you've submitted. The best way to protect users from this is to host any pages involving forms over a secure connection (i.e. located at an https:// address), so the data is encrypted before it is sent.

Browsers recognize the security implications of sending form data over an insecure connection, and have warnings to deter users from using insecure forms.

### Hidden Content

This is used to create a form control that is invisible to the user, but is still sent to the server along with the rest of the form data once submitted — for example you might want to submit a timestamp to the server stating when an order was placed. Because it is hidden, the user can not see nor intentionally edit the value, it will never receive focus, and a screen reader will not notice it either.

If you create such an element, it's required to set its name and value attributes. The value can be dynamically set via JavaScript. The hidden input type should not have an associated label.

## Checkable items: checkboxes and radio buttons

For maximum usability/accessibility, you are advised to surround each list of related items in a `<fieldset>`, with a `<legend>` providing an overall description of the list. Each individual pair of `<label>`/`<input>` elements should be contained in its own list item (or similar). The associated `<label>` is generally placed immediately before or after the radio button or checkbox, with the instructions for the group of radio button or checkboxes generally being the content of the `<legend>`.

### Checkbox

Related checkbox items should use the same name attribute. Including the checked attribute makes the checkbox checked automatically when the page loads. Clicking the checkbox or its associated label toggles the checkbox on and off.

Due to the on-off nature of checkboxes, the checkbox is considered a toggle button, with many developers and designers expanding on the default checkbox styling to create buttons that look like toggle switches.

### Radio button

Several radio buttons can be tied together. If they share the same value for their name attribute, they will be considered to be in the same group of buttons. Only one button in a given group may be checked at a time; this means that when one of them is checked all the others automatically get unchecked. When the form is sent, only the value of the checked radio button is sent. If none of them are checked, the whole pool of radio buttons is considered to be in an unknown state and no value is sent with the form. Once one of the radio buttons in a same-named group of buttons is checked, it is not possible for the user to uncheck all the buttons without resetting the form.

## Buttons

Can Use `<input>` or `<button>`. Prefer `<button>` because more simple to style.

### Submit

Sends the form data to the server. For `<button>` elements, omitting the type attribute (or an invalid value of type) results in a submit button.

### Reset

Resets all form widgets to their default values.

### Button

Buttons that have no automatic effect but can be customized using JavaScript code.

## Image button

The image button control is rendered exactly like an `<img>` element, except that when the user clicks on it, it behaves like a submit button.

An image button is created using an `<input>` element with its type attribute set to the value image. This element supports exactly the same set of attributes as the `<img>` element, plus all the attributes supported by other form buttons.

If the image button is used to submit the form, this control doesn't submit its value — instead, the X and Y coordinates of the click on the image are submitted (the coordinates are relative to the image, meaning that the upper-left corner of the image represents the coordinate (0, 0)). The coordinates are sent as two key/value pairs:

- The X value key is the value of the name attribute followed by the string ".x".
- The Y value key is the value of the name attribute followed by the string ".y".

This is a very convenient way to build a "hot map".

## File Picker

The file picker widget can be used to choose one or more files to send.

To create a file picker widget, you use the `<input>` element with its type attribute set to file. The types of files that are accepted can be constrained using the accept attribute. In addition, if you want to let the user pick more than one file, you can do so by adding the multiple attribute.

### Example

In this example, a file picker is created that requests graphic image files. The user is allowed to select multiple files in this case.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

On some mobile devices, the file picker can access photos, videos, and audio captured directly by the device's camera and microphone by adding capture information to the accept attribute like so:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

# Sources

- [MDN](https://developer.mozilla.org/en-US/)
