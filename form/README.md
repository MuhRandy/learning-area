# Form

Forms are the “money pages.” They’re how e-commerce sites sell their products, how SaaS companies collect payment for their service, and how non-profit groups raise money online.

There are two aspects of a functional HTML form: the frontend user interface and the backend server. The former is the appearance of the form (as defined by HTML and CSS), while the latter is the code that processes it (storing data in a database, sending an email, etc).

## Create a form

Every HTML form begins with the aptly named `<form>` element. It accepts a number of attributes, but the most important ones are `action` and `method`.

The `action` attribute defines the URL that processes the form. It’s where the input collected by the form is sent when the user clicks the Submit button. This is typically a special URL defined by your web server that knows how to process the data. Common backend technologies for processing forms include Node.js, PHP, and Ruby on Rails. By leaving the action attribute blank will telling the form to submit to the same URL.

The `method` attribute can be either `post` or `get`, both of which define how the form is submitted to the backend server. This is largely dependent on how your web server wants to handle the form, but the general rule of thumb is to use post when you’re changing data on the server, reserving get for when you’re only getting data.

First, we have a container `<div>` to help with styling. This is pretty common for separating input elements. Second, we have a `<label>`, which you can think of as another semantic HTML element for form. A label’s for attribute must match the `id` attribute of its associated `<input/>` element. Remember that ID selectors are bad—the `id` attribute here is only for connecting it to a `<label>` element.

Conceptually, an `<input/>` element represents a “variable” that gets sent to the backend server. The `name` attribute defines the name of this variable, and the `value` is whatever the user entered into the text field. Note that you can pre-populate this value by adding a `value` attribute to an `<input/>` element.

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

# HTML5 Control

## Email address field (email)

When this type is used, the user is required to type a valid email address into the field. Any other content causes the browser to display an error when the form is submitted.

it is useful to know that your data is not correct immediately, rather than having to wait for a round trip to the server.

But it should not be considered an exhaustive security measure! Your apps should always perform security checks on any form-submitted data on the server-side as well as the client-side, because client-side validation is too easy to turn off, so malicious users can still easily send bad data through to your server.

Can also use the multiple attribute to allow several email addresses to be entered in the same input (separated by commas).

Note that a@b is a valid email address according to the default provided constraints. This is because the email input type allows intranet email addresses by default. To implement different validation behavior, you can use the pattern attribute, and you can also customize the error messages.

## Search field (search)

Search fields are intended to be used to create search boxes on pages and apps.

The main difference between a text field and a search field is how the browser styles its appearance. Often, search fields are rendered with rounded corners; they also sometimes display an "Ⓧ", which clears the field of any value when clicked. Additionally, on devices with dynamic keyboards, the keyboard's enter key may read "search", or display a magnifying glass icon.

Another worth-noting feature is that the values of a search field can be automatically saved and re-used to offer auto-completion across multiple pages of the same website; this tends to happen automatically in most modern browsers.

## Phone number field (tel)

When accessed via a touch device with a dynamic keyboard, most devices will display a numeric keypad when type="tel" is encountered, meaning this type is useful whenever a numeric keypad is useful, and doesn't just have to be used for telephone numbers.

Due to the wide variety of phone number formats around the world, this type of field does not enforce any constraints on the value entered by a user (this means it may include letters, etc.).

As mentioned earlier, the pattern attribute can be used to enforce constraints.

## URL field (url)

It adds special validation constraints to the field. The browser will report an error if no protocol (such as http:) is entered, or if the URL is otherwise malformed. On devices with dynamic keyboards, the default keyboard will often display some or all of the colon, period, and forward slash as default keys.

## Numeric field (number)

Controls for entering numbers can be created with type of number. This control looks like a text field but allows only floating-point numbers, and usually provides buttons in the form of a spinner to increase and decrease the value of the control. On devices with dynamic keyboards, the numeric keyboard is generally displayed.

Can constrain the minimum and maximum values allowed by setting the min and max attributes.

Can also use the step attribute to set the increment increase and decrease caused by pressing the spinner buttons. By default, the number input type only validates if the number is an integer. To allow float numbers, specify step="any". If omitted, the step value defaults to 1, meaning only whole numbers are valid.

The number input type makes sense when the range of valid values is limited, for example a person's age or height. If the range is too large for incremental increases to make sense (such as USA ZIP codes, which range from 00001 to 99999), the tel type might be a better option; it provides the numeric keypad while forgoing the number's spinner UI feature.

## Slider controls (range)

Usage-wise, sliders are less accurate than text fields. Therefore, they are used to pick a number whose precise value is not necessarily important.

The slider-thumb can be moved via mouse or touch, or with the arrows of the keypad.

It's important to properly configure your slider. To that end, it's highly recommended that you set the min, max, and step attributes which set the minimum, maximum, and increment values, respectively.

One problem with sliders is that they don't offer any kind of visual feedback as to what the current value is. This is why we've included an `<output>` element to contain the current value. You could display an input value or the output of a calculation inside any element, but `<output>` is special — like `<label>` — and it can take a for attribute that allows you to associate it with the element or elements that the output value came from.

## Date and time pickers

HTML date controls are available to handle this specific kind of data, providing calendar widgets and making the data uniform. Type:

- datetime-local: creates a widget to display and pick a date with time with no specific time zone information.

- month: creates a widget to display and pick a month with a year.

- time: creates a widget to display and pick a time value. While time may display in 12-hour format, the value returned is in 24-hour format.

- week: creates a widget to display and pick a week number and its year. Weeks start on Monday and run to Sunday. Additionally, the first week 1 of each year contains the first Thursday of that year — which may not include the first day of the year, or may include the last few days of the previous year.

All date and time controls can be constrained using the min and max attributes, with further constraining possible via the step attribute (whose value varies according to input type).

## Color picker control (color)

Colors are always a bit difficult to handle. There are many ways to express them: RGB values (decimal or hexadecimal), HSL values, keywords, and so on.

Clicking a color control generally displays the operating system's default color-picking functionality for you to choose.

The value returned is always a lowercase 6-value hexadecimal color.

# Other form control

## Multi-line text fields (textarea)

The main difference between a `<textarea>` and a regular single-line text field is that users are allowed to include hard line breaks (i.e. pressing return) that will be included when the data is submitted.

`<textarea>` also takes a closing tag; any default text you want it to contain should be put between the opening and closing tags. In contrast, the `<input>` is a void element with no closing tag — any default value is put inside the `value` attribute.

Note that even though you can put anything inside a `<textarea>` element (including other HTML elements, CSS, and JavaScript), because of its nature, it is all rendered as if it was plain text content. (Using `contenteditable` on non-form controls provides an API for capturing HTML/"rich" content instead of plain text).

Visually, the text entered wraps and the form control is by default resizable. Modern browsers provide a drag handle that you can drag to increase/decrease the size of the text area.

accepts three attributes to control its rendering across several lines:

- `cols`: Specifies the visible width (columns) of the text control, measured in average character widths. This is effectively the starting width, as it can be changed by resizing the `<textarea>`, and overridden using CSS. The default value if none is specified is 20.
- `rows`: Specifies the number of visible text rows for the control. This is effectively the starting height, as it can be changed by resizing the `<textarea>`, and overridden using CSS. The default value if none is specified is 2.
- `wrap`: Specifies how the control wraps text. The values are soft (the default value), which means the text submitted is not wrapped but the text rendered by the browser is wrapped; hard (the cols attribute must be specified when using this value), which means both the submitted and rendered texts are wrapped, and off, which stops wrapping.

Controlled with the CSS resize property possible values are:

- `both`: The default — allows resizing horizontally and vertically.
- `horizontal`: Allows resizing only horizontally.
- `vertical`: Allows resizing only vertically.
- `none`: Allows no resizing.
- `block` and `inline`: Experimental values that allow resizing in the block or inline direction only (this varies depending on the directionality of your text)

## Drop-down controls

Drop-down controls are a simple way to let users select from many options without taking up much space in the user interface. HTML has two types of drop-down controls:

### Select box

A simple select box is created with a `<select>` element with one or more `<option>` elements as its children, each of which specifies one of its possible values.

If required, the default value for the select box can be set using the selected attribute on the desired `<option>` element — this option is then preselected when the page loads.

The `<option>` elements can be nested inside `<optgroup>` elements to create visually associated groups of values.

On the `<optgroup>` element, the value of the label attribute is displayed before the values of the nested options. The browser usually sets them visually apart from the options (i.e. by being bolded and at a different nesting level) so they are less likely to be confused for actual options.

If an `<option>` element has an explicit value attribute set on it, that value is sent when the form is submitted with that option selected. If the value attribute is omitted, as with the examples above, the content of the `<option>` element is used as the value. So value attributes are not needed, but you might find a reason to want to send a shortened or different value to the server than what is visually shown in the select box.

By default, the height of the select box is enough to display a single value. The optional `size` attribute provides control over how many options are visible when the select does not have focus.

By default, a select box lets a user select only one value. By adding the `multiple` attribute to the `<select>` element, you can allow users to select several values. Users can select multiple values by using the default mechanism provided by the operating system (e.g., on the desktop, multiple values can be clicked while holding down <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> keys).

### Autocomplete box

You can provide suggested, automatically-completed values for form widgets using the `<datalist>` element with child `<option>` elements to specify the values to display. The `<datalist>` needs to be given an id.

The data list is then bound to an `<input>` element (e.g. a text or email input type) using the list attribute, the value of which is the id of the data list to bind.

Once a data list is affiliated with a form widget, its options are used to auto-complete text entered by the user; typically, this is presented to the user as a drop-down box listing possible matches for what they've typed into the input.

## Other form features

### Meter

A meter bar represents a fixed value in a range delimited by `max` and `min` values. This value is visually rendered as a bar, and to know how this bar looks, we compare the value to some other set values:

- The `low` and `high` values divide the range into the following three parts:
  - The lower part of the range is between the `min` and `low` values, inclusive.
  - The medium part of the range is between the `low` and `high` values, exclusive.
  - The higher part of the range is between the `high` and `max` values, inclusive.
- The `optimum` value defines the optimum value for the `<meter>` element. In conjunction with the `low` and `high` value, it defines which part of the range is preferred:

  - If the `optimum` value is in the lower part of the range, the lower range is considered to be the preferred part, the medium range is considered to be the average part, and the higher range is considered to be the worst part.
  - If the `optimum` value is in the medium part of the range, the lower range is considered to be an average part, the medium range is considered to be the preferred part, and the higher range is considered to be average as well.
  - If the `optimum` value is in the higher part of the range, the lower range is considered to be the worst part, the medium range is considered to be the average part and the higher range is considered to be the preferred part.

- All browsers that implement the `<meter>` element use those values to change the color of the meter bar:

  - If the current value is in the preferred part of the range, the bar is green.
  - If the current value is in the average part of the range, the bar is yellow.
  - If the current value is in the worst part of the range, the bar is red.

Such a bar is created by using the `<meter>` element. This is for implementing any kind of meter; for example, a bar showing the total space used on a disk, which turns red when it starts to get full.

The content inside the `<meter>` element is a fallback for browsers that don't support the element and for assistive technologies to vocalize it.

### Progress

A progress bar represents a value that changes over time up to a maximum value specified by the `max` attribute. Such a bar is created using a `<progress>` element.

This is for implementing anything requiring progress reporting, such as the percentage of total files downloaded, or the number of questions filled in on a questionnaire.

The content inside the `<progress>` element is a fallback for browsers that don't support the element and for screen readers to vocalize it.

# Styling web form

- Easy-to-style
  - `<form>`
  - `<fieldset>` and `<legend>`
  - Single-line text `<input>`s (e.g. type text, url, email), except for `<input type="search">`.
  - Multi-line `<textarea>`
  - Buttons (both `<input>` and `<button>`)
  - `<label>`
  - `<output>`
- Harder-to-style
  - Checkboxes and radio buttons
  - `<input type="search">`
- Having internals can't be styled in CSS alone
  - `<input type="color">`
  - Date-related controls such as `<input type="datetime-local">`
  - `<input type="range">`
  - `<input type="file">`
  - Elements involved in creating dropdown widgets, including `<select>`, `<option>`, `<optgroup>` and `<datalist>`.
  - `<progress>` and `<meter>`

## Fonts and text

CSS font and text features can be used easily with any widget (and yes, you can use `@font-face` with form widgets). However, browser behavior is often inconsistent. By default, some widgets do not inherit font-family and font-size from their parents. Many browsers use the system's default appearance instead. To make your forms' appearance consistent with the rest of your content, you can add the following rules to your stylesheet:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

There's a lot of debate as to whether forms look better using the system default styles, or customized styles designed to match your content. This decision is yours to make, as the designer of your site, or web application.

## Box sizing

All text fields have complete support for every property related to the CSS box model, such as `width`, `height`, `padding`, `margin`, and `border`. As before, however, browsers rely on the system default styles when displaying these widgets. It's up to you to define how you wish to blend them into your content. If you want to keep the native look and feel of the widgets, you'll face a little difficulty if you want to give them a consistent size.

This is because each widget has its own rules for `border`, `padding`, and `margin`. To give the same size to several different widgets, you can use the `box-sizing` property along with some consistent values for other properties:

```css
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

## Legend placement

The `<legend>` element is okay to style, but it can be a bit tricky to control the placement of it. By default, it is always positioned over the top border of its `<fieldset>` parent, near the top left corner. To position it somewhere else, for example inside the fieldset somewhere, or near the bottom left corner, you need to rely on the positioning.

The `<fieldset>` needs to be positioned too, so that the `<legend>` is positioned relative to it (otherwise the `<legend>` would be positioned relative to the `<body>`).

The `<legend>` element is very important for accessibility — it will be spoken by assistive technologies as part of the label of each form element inside the fieldset — but using a technique like the one above is fine. The legend contents will still be spoken in the same way; it is just the visual position that has changed.

# Advance form styling

## Taming search boxes

Safari search boxes have some styling restrictions — you can't adjust their height or font-size freely. This can be fixed using `appearance: none;`, which disables the default appearance. Interestingly, setting border/background on the search field also fixes this problem.

## Styling checkboxes and radio buttons

The sizes of checkboxes and radio buttons are not meant to be changed with their default designs, and browsers react very differently when you try. Which can removed the default appearance of a checkbox or radio button altogether with `appearance:none;`.

We can use the `:checked` and `:disabled` pseudo-classes to change the appearance of our custom checkbox as its state changes.

- `:checked` — the checkbox (or radio button) is in a checked state — the user has clicked/activated it.
- `:disabled` — the checkbox (or radio button) is in a disabled state — it cannot be interacted with.

## What can be done about the "ugly" elements?

The "ugly" controls — the ones that are really hard to thoroughly style. In short, these are drop-down boxes, complex control types like `color` and `datetime-local`, and feedback—oriented controls like `<progress>` and `<meter>`.

We've applied some global normalizing CSS to all the controls and their labels, to get them to size in the same way, adopt their parent font, etc.:

```css
button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

We also added some uniform shadow and rounded corners to the controls on which it made sense:

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

### Selects and datalists

Two things are slightly more problematic. First of all, the select's "arrow" icon that indicates it is a dropdown differs across browsers. It also tends to change if you increase the size of the select box, or resize in an ugly fashion. To fix this we used `appearance: none` to get rid of the icon altogether.

We then created our own icon using generated content. We put an extra wrapper around the control, because `::before`/`::after` don't work on `<select>` elements (because their content is fully controlled by the browser).

We then use generated content to generate a little down arrow, and put it in the right place using positioning on extra wrapper.

The second, slightly more important issue is that you don't have control over the box that appears containing the options when you click on the `<select>` box to open it. You can inherit the font set on the parent, but you won't be able to set things like spacing and colors. The same is true for the autocomplete list that appears with `<datalist>`.

If you really need full control over the option styling, you'll have to either use some kind of library to generate a custom control, or build your own custom control, or in the case of select use the multiple attribute, which makes all the options appear on the page, sidestepping this particular problem.

### Date input types

The date/time input types (`datetime-local`, `time`, `week`, `month`) all have the same major associated issue. The actual containing box is as easy to style as any text input.

However, the internal parts of the control (e.g. the popup calendar that you use to pick a date, the spinner that you can use to increment/decrement values) are not stylable at all, and you can't get rid of them using `appearance: none;`. If you really need full control over the styling, you'll have to either use some kind of library to generate a custom control, or build your own.

### Range input types

`<input type="range">` is annoying to style. You can use something like the following to remove the default slider track completely and replace it with a custom style (a thin red track, in this case):

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

However, it is very difficult to customize the style of the range control's drag handle — to get full control over range styling you'll need to use a whole bunch of complex CSS code, including multiple non-standard, browser-specific pseudo-elements.

### Color input types

Input controls of type color are not too bad. In supporting browsers, they tend to just give you a block of solid color with a small border.

You can remove the border, just leaving the block of color, using something like this:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

However, a custom solution is the only way to get anything significantly different.

### File input types

The only problem with file pickers is that the button provided that you press to open the file picker is completely unstylable — it can't be sized or colored, and it won't even accept a different font.

One way around this is to take advantage of the fact that if you have a label associated with a form control, clicking the label will activate the control. So you could hide the actual form input using something like this:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

And then style the label to act like a button, which when pressed will open the file picker as expected:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #ccc;
  background: linear-gradient(to bottom, #eee, #ccc);
  border: 1px solid rgb(169, 169, 169);
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, #fff, #ddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
}
```

### Meters and progress bars

We can set them to the desired width relatively accurately. But beyond that, they are really difficult to style in any way. They don't handle height settings consistently between each other and between browsers, you can color the background, but not the foreground bar, and setting `appearance: none` on them makes things worse, not better.

It is easier to just create your own custom solution for these features, if you want to be able to control the styling, or use a third-party solution such as [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples).

# UI Pseudo-classes

## Styling inputs based on whether they are required or not

One of the most basic concepts regarding client-side form validation is whether a form input is required (it has to be filled in before the form can be submitted) or optional.

`<input>`, `<select>`, and `<textarea>` elements have a required attribute available which, when set, means that you have to fill in that control before the form will successfully submit.

You can match these two states using the `:required` and `:optional` pseudo-classes.

Using color alone is not great when we are signaling required versus optional status for colorblind people, also the standard convention on the web for required status is an asterisk (`*`), or the word "required" being associated with the controls in question.

## Using generated content with pseudo-classes

We can use the `::before` and `::after` pseudo-elements along with the `content` property to make a chunk of content appear before or after the affected element. The chunk of content is not added to the DOM, so it may be invisible to some screen readers. Because it is a pseudo-element, it can be targeted with styles in the same way that any actual DOM node can.

This is really useful when you want to add a visual indicator to an element, such as a label or icon, when alternative indicators are also available to ensure accessibility for all users. For example, we use generated content to handle the placement and animation of the a custom radio button's inner circle when a radio button is selected:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

This is really useful — screen readers already let their users know when a radio button or checkbox they encounter is checked/selected, so you don't want them to read out another DOM element that indicates selection — that could be confusing. Having a purely visual indicator solves this problem.

Not all `<input>` types support having generated content put on them. All input types that show dynamic text in them, such as `text`, `password`, or `button`, don't display generated content. Others, including `range`, `color`, `checkbox`, etc., display generated content.

Back to our required/optional example from before, this time we'll not alter the appearance of the input itself — we'll use generated content to add an indicating label.

First of all, we'll add a paragraph to the top of the form to say what you are looking for:

```html
<p>Required fields are labeled with "required".</p>
```

Screen reader users will get "required" read out as an extra bit of information when they get to each required input, while sighted users will get our label.

As previously mentioned, text inputs don't support generated content, so we add an empty `<span>` to hang the generated content on:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

The immediate problem with this was that the span was dropping onto a new line below the input because the input and label are both set with `width: 100%`. To fix this we style the parent `<div>` to become a flex container, but also tell it to wrap its contents onto new lines if the content becomes too long:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

The effect this has is that the label and input sit on separate lines because they are both `width: 100%`, but the `<span>` has a width of 0 so it can sit on the same line as the input.

Now onto the generated content. We create it using this CSS:

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "required";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

We set the `<span>` to `position: relative` so that we can set the generated content to `position: absolute` and position it relative to the `<span>` rather than the `<body>` (The generated content acts as though it is a child node of the element it is generated on, for the purposes of positioning).

Then we give the generated content the content "required", which is what we wanted our label to say, and style and position it as we want.

## Styling controls based on whether their data is valid

You can target form controls using the `:valid` and `:invalid` pseudo-classes. Some points worth bearing in mind:

- Controls with no constraint validation will always be valid, and therefore matched with `:valid`.
- Controls with required set on them that have no value are counted as invalid — they will be matched with `:invalid` and :required.
- Controls with built-in validation, such as `<input type="email">` or `<input type="url">` are (matched with) `:invalid` when the data entered into them does not match the pattern they are looking for (but they are valid when empty).
- Controls whose current value is outside the range limits specified by the min and max attributes are (matched with) `:invalid`, but also matched by `:out-of-range`.
- There are some other ways to make an element matched by `:valid`/`:invalid`.

## In-range and out-of-range data

`:in-range` and `:out-of-range` match numeric inputs where range limits are specified by the `min` and `max`, when their data is inside or outside the specified range, respectively. Numeric input types are `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`.

It is worth noting that inputs whose data is in-range will also be matched by the `:valid` pseudo-class and inputs whose data is out-of-range will also be matched by the `:invalid` pseudo-class. So why have both? The issue is really one of semantics — out-of-range is a more specific type of invalid communication, so you might want to provide a different message for out-of-range inputs, which will be more helpful to users than just saying "invalid". You might even want to provide both.

## Styling enabled and disabled inputs, and read-only and read-write

An enabled element is an element that can be activated; it can be selected, clicked on, typed into, etc. A disabled element on the other hand cannot be interacted with in any way, and its data isn't even sent to the server.

These two states can be targeted using `:enabled` and `:disabled`. Why are disabled inputs useful? Well, sometimes if some data does not apply to a certain user, you might not even want to submit that data when they submit the form. A classic example is a shipping form — commonly you'll get asked if you want to use the same address for billing and shipping; if so, you can just send a single address to the server, and might as well just disable the billing address fields.

We can directly selected the inputs we want to disable using `input[type="text"]:disabled`, but we also wanted to gray out the corresponding text labels. These weren't quite as easy to select, so we've used a class to provide them with that styling.

In a similar manner to `:disabled` and `:enabled`, the `:read-only` and `:read-write` pseudo-classes target two states that form inputs toggle between. Read-only inputs have their values submitted to the server, but the user can't edit them, whereas read-write means they can be edited — their default state.

An input is set to read-only using the `readonly` attribute. As an example, imagine a confirmation page where the developer has sent the details filled in on previous pages over to this page, with the aim of getting the user to check them all in one place, add any final data that is needed, and then confirm the order by submitting. At this point, all the final form data can be sent to the server in one go.

## Radio and checkbox states — checked, default, indeterminate

When checked, they will be matched by the `:checked` pseudo-class.

The most common use of this is to add a different style onto the checkbox or radio button when it is checked, in cases where you've removed the system default styling with `appearance: none;` and want to build the styles back up yourself.

The `:default` pseudo-class matches radios/checkboxes that are checked by default, on page load, even when unchecked. This could be useful for adding an indicator to a list of options to remind the user what the defaults (or starting options) were, in case they want to reset their choices.

Also, the radios/checkboxes mentioned above will be matched by the `:indeterminate` pseudo-class when they are in a state where they are neither checked nor unchecked. But what does this mean? Elements that are indeterminate include:

- `<input/radio>` inputs, when all radio buttons in a same-named group are unchecked
- `<input/checkbox>` inputs whose indeterminate property is set to true via JavaScript
- `<progress>` elements that have no value.

This isn't something you'll likely use very often. One use case could be an indicator to tell users that they really need to select a radio button before they move on.

## More pseudo-classes

There are a number of other pseudo-classes of interest, and we don't have space to write about them all in detail here. Let's talk about a few more that you should take the time to investigate.

- The `:focus-within` pseudo-class matches an element that has received focus or contains an element that has received focus. This is useful if you want a whole form to highlight in some way when an input inside it is focused.
- The `:focus-visible` pseudo-class matches focused elements that received focus via keyboard interaction (rather than touch or mouse) — useful if you want to show a different style for keyboard focus compared to mouse (or other) focus.
- The `:placeholder-shown` pseudo-class matches `<input>` and `<textarea>` elements that have their placeholder showing (i.e. the contents of the placeholder attribute) because the value of the element is empty.

The following are also interesting, but as yet not well-supported in browsers:

- The `:blank` pseudo-class selects empty form controls. `:empty` also matches elements that have no children, like `<input>`, but it is more general — it also matches other void elements like `<br>` and `<hr>`. `:empty` has reasonable browser support; the `:blank` pseudo-class's specification is not yet finished, so it is not yet supported in any browser.
- The `:user-invalid` pseudo-class, when supported, will be similar to `:invalid`, but with better user experience. If the value is valid when the input receives focus, the element may match `:invalid` as the user enters data if the value is temporarily invalid, but will only match `:user-invalid` when the element loses focus. If the value was originally invalid, it will match both `:invalid` and `:user-invalid` for the whole duration of the focus. In a similar manner to `:invalid`, it will stop matching `:user-invalid` if the value does become valid.

# Sources

- [MDN](https://developer.mozilla.org/en-US/)
