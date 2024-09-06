JSON (JavaScript Object Notation) is a standardized format for structuring data. It is heavily based on the syntax for JavaScript objects. You will often encounter JSON formatted data when working with external servers or APIs - it is essentially the universal format for transmitting data on the web.

A JSON string can be stored in its own file, which is basically just a text file with an extension of `.json`, and a MIME type of `application/json`.

# JSON structure

JSON is a string whose format very much resembles JavaScript object literal format.

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

If we loaded this string into a JavaScript program and parsed it into a variable called `superHeroes` for example, we could then access the data inside it using the same dot/bracket notation we looked at in the JavaScript object basics article. For example:

```javascript
superHeroes.homeTown;
superHeroes["active"];
```

To access data further down the hierarchy, you have to chain the required property names and array indexes together. For example, to access the third superpower of the second hero listed in the members list, you'd do this:

```javascript
superHeroes["members"][1]["powers"][2];
```

To obtain the JSON, we use an API called Fetch. This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

# Converting between objects and text

The [heroes](./heroes.html) example was simple in terms of accessing the JavaScript object, because we converted the network response directly into a JavaScript object using `response.json()`.

But sometimes we aren't so lucky — sometimes we receive a raw JSON string, and we need to convert it to an object ourselves. And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending it. Luckily, these two problems are so common in web development that a built-in JSON object is available in browsers, which contains the following two methods:

- [`parse()`](https://www.w3schools.com/js/js_json_parse.asp): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
- [`stringify()`](https://www.w3schools.com/js/js_json_stringify.asp): Accepts an object as a parameter, and returns the equivalent JSON string.

# [JSON formatter website](https://jsonformatter.curiousconcept.com/)

# Sources

- [JSON MDN tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
