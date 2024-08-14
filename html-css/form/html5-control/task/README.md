# Task 1

First let's explore some of the new HTML5 input types.

Create appropriate inputs for a user to update their details for:

1. Email
2. Website
3. Phone number
4. Favourite color

The appropriate input types to use here are `email`, `url`, `tel`, and `color`.

# Task 2

Next, we want you to implement a slider control to allow the user to choose a maximum number of people to invite to their party.

1. Implement a basic slider control to go along with the provided label. This requires `<input type="range">`.
2. Give it a minimum value of 1, maximum value of 30, and initial value of 10. To do this, you should use the `min`, `max`, and `value` attributes.
3. Create a corresponding output element to put the current value of the slider into. Give it a class of `invite-output`, and semantically associate it with the input. If you do this correctly, the JavaScript included on the page will automatically update the output value when the slider is moved. To achieve this, you need to use an `<output>` element, give it a `class` attribute with value `invite-output`, and give it a `for` attribute with value `max-invite`.
