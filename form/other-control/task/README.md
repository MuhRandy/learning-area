# Task 1

In our first "other controls" assessment, we'll get you to create a multi-line text input.

1. Create a basic multi-line text input. You should use a `<textarea>` element for this.
2. Associate it semantically with the provided "Comment" label. Use the same value that the `for` attribute already has, for the `id` of the `<textarea>`.
3. Give the input 35 columns, and 10 rows of space in which to add comments. The `cols` and `rows` attributes are what you need here.
4. Give the comments a maximum length of 100 characters. This requires use of the `maxlength` attribute.

# Task 2

Now it's time to have a go at implementing a drop-down select menu, to allow a user to pick their favourite food from the choices provided.

1. Create your basic select box structure. You should use a `<select>` element for this, inside which you should nest an `<option>` element for each choice.
2. Associate it semantically with the provided "Comment" label. Use the same value that the `for` attribute already has, for the `id` of the `<select>`.
3. Inside the list, split the choices up into 2 subgroups — "mains" and "snacks". To do this, you should use `<optgroup>` elements inside the main `<select>`, with appropriate `label` attributes.

# Task 3

In our final task of this set, we start with much the same list of food choices. However, this time we want to do things differently:

1. Create a basic text input that is semantically associated with the provided label. This is done as you'd expect — use a simple `<input type="text">` with an `id` that matches the label's `for` value.
2. Put the food choices into a list that can be associated with a form input. For this, you need to wrap each option in an `<option>` element, and wrap the whole series of them in a `<datalist>` element.
3. Associate the list with your text input, so that when you type characters, any of the list options that match the character sequence are given in a dropdown list as autocomplete suggestions. To do this, you need to give the `<datalist>` an `id`, and then given the `<input>` a `list` attribute whose value matches the `<datalist>`'s `id`.
