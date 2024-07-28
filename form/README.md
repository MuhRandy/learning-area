# Basic Control

## Input fields

The most basic form widgets. They can:

- marked as readonly (the user can't modify the input value but it is still sent the data) or disabled (the input value can't be modified and is never sent the data).
- have a placeholder that should be used to briefly describe the purpose of the box.
- be constrained in size (the physical size of the box) and maxlength (the maximum number of characters that can be entered into the box)
- benefit from spell checking (using the spellcheck attribute), if the browser supports it.

### Single line text fields (text)

A single line text field is created using an `<input>` element whose type attribute value is set to text, or by omitting the type attribute altogether (text is the default value). The value text for this attribute is also the fallback value if the value you specify for the type attribute is unknown by the browser

Single line text fields have only one true constraint: if you type text with line breaks, the browser removes those line breaks before sending the data to the server.

### Password field (password)

The password value doesn't add any special constraints to the entered text, but it does obscure the value entered into the field (e.g. with dots or asterisks) so it can't be easily read by others.

Keep in mind this is just a user interface feature; unless you submit your form securely, it will get sent in plain text, which is bad for security — a malicious party could intercept your data and steal passwords, credit card details, or whatever else you've submitted. The best way to protect users from this is to host any pages involving forms over a secure connection (i.e. located at an https:// address), so the data is encrypted before it is sent.

Browsers recognize the security implications of sending form data over an insecure connection, and have warnings to deter users from using insecure forms.

### Hidden Content (hidden)

This is used to create a form control that is invisible to the user, but is still sent to the server along with the rest of the form data once submitted — for example you might want to submit a timestamp to the server stating when an order was placed. Because it is hidden, the user can not see nor intentionally edit the value, it will never receive focus, and a screen reader will not notice it either.

If you create such an element, it's required to set its name and value attributes. The value can be dynamically set via JavaScript. The hidden input type should not have an associated label.

### Email address field (email)

When this type is used, the user is required to type a valid email address into the field. Any other content causes the browser to display an error when the form is submitted.

it is useful to know that your data is not correct immediately, rather than having to wait for a round trip to the server.

But it should not be considered an exhaustive security measure! Your apps should always perform security checks on any form-submitted data on the server-side as well as the client-side, because client-side validation is too easy to turn off, so malicious users can still easily send bad data through to your server.

Can also use the multiple attribute to allow several email addresses to be entered in the same input (separated by commas).

Note that a@b is a valid email address according to the default provided constraints. This is because the email input type allows intranet email addresses by default. To implement different validation behavior, you can use the pattern attribute, and you can also customize the error messages.

### Search field (search)

Search fields are intended to be used to create search boxes on pages and apps.

The main difference between a text field and a search field is how the browser styles its appearance. Often, search fields are rendered with rounded corners; they also sometimes display an "Ⓧ", which clears the field of any value when clicked. Additionally, on devices with dynamic keyboards, the keyboard's enter key may read "search", or display a magnifying glass icon.

Another worth-noting feature is that the values of a search field can be automatically saved and re-used to offer auto-completion across multiple pages of the same website; this tends to happen automatically in most modern browsers.

### Phone number field (tel)

When accessed via a touch device with a dynamic keyboard, most devices will display a numeric keypad when type="tel" is encountered, meaning this type is useful whenever a numeric keypad is useful, and doesn't just have to be used for telephone numbers.

Due to the wide variety of phone number formats around the world, this type of field does not enforce any constraints on the value entered by a user (this means it may include letters, etc.).

As mentioned earlier, the pattern attribute can be used to enforce constraints.

### URL field (url)

It adds special validation constraints to the field. The browser will report an error if no protocol (such as http:) is entered, or if the URL is otherwise malformed. On devices with dynamic keyboards, the default keyboard will often display some or all of the colon, period, and forward slash as default keys.

### Numeric field (number)

Controls for entering numbers can be created with type of number. This control looks like a text field but allows only floating-point numbers, and usually provides buttons in the form of a spinner to increase and decrease the value of the control. On devices with dynamic keyboards, the numeric keyboard is generally displayed.

Can constrain the minimum and maximum values allowed by setting the min and max attributes.

Can also use the step attribute to set the increment increase and decrease caused by pressing the spinner buttons. By default, the number input type only validates if the number is an integer. To allow float numbers, specify step="any". If omitted, the step value defaults to 1, meaning only whole numbers are valid.

The number input type makes sense when the range of valid values is limited, for example a person's age or height. If the range is too large for incremental increases to make sense (such as USA ZIP codes, which range from 00001 to 99999), the tel type might be a better option; it provides the numeric keypad while forgoing the number's spinner UI feature.

### Slider controls (range)

Usage-wise, sliders are less accurate than text fields. Therefore, they are used to pick a number whose precise value is not necessarily important.

The slider-thumb can be moved via mouse or touch, or with the arrows of the keypad.

It's important to properly configure your slider. To that end, it's highly recommended that you set the min, max, and step attributes which set the minimum, maximum, and increment values, respectively.

One problem with sliders is that they don't offer any kind of visual feedback as to what the current value is. This is why we've included an `<output>` element to contain the current value. You could display an input value or the output of a calculation inside any element, but `<output>` is special — like `<label>` — and it can take a for attribute that allows you to associate it with the element or elements that the output value came from.

### Date and time pickers

HTML date controls are available to handle this specific kind of data, providing calendar widgets and making the data uniform. Type:

- datetime-local: creates a widget to display and pick a date with time with no specific time zone information.

- month: creates a widget to display and pick a month with a year.

- time: creates a widget to display and pick a time value. While time may display in 12-hour format, the value returned is in 24-hour format.

- week: creates a widget to display and pick a week number and its year. Weeks start on Monday and run to Sunday. Additionally, the first week 1 of each year contains the first Thursday of that year — which may not include the first day of the year, or may include the last few days of the previous year.

All date and time controls can be constrained using the min and max attributes, with further constraining possible via the step attribute (whose value varies according to input type).

### Color picker control (color)

Colors are always a bit difficult to handle. There are many ways to express them: RGB values (decimal or hexadecimal), HSL values, keywords, and so on.

Clicking a color control generally displays the operating system's default color-picking functionality for you to choose.

The value returned is always a lowercase 6-value hexadecimal color.

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
