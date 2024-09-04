# npm

npm (no capitals!) is a package manager - a gigantic repository of plugins, libraries, and other tools, which provides us with a command-line tool we can use to install these tools (that we call “packages”) in our applications. We will then have all our installed packages’ code locally, which we can import into our own files. We could even publish our own code to npm!

# [Installing packages with npm](https://docs.npmjs.com/downloading-and-installing-packages-locally)

# [The `package.json` file](https://docs.npmjs.com/creating-a-package-json-file)

# [Development dependencies](https://dev.to/mshertzberg/demystifying-devdependencies-and-dependencies-5ege)

# `package.json` Scripts

An npm script is a convenient way to bundle common shell commands like a set of built-in and custom scripts for your project. They are typically terminal commands or a string of terminal commands that help automate repetitive tasks.

In short, NPM scripts are terminal commands that perform a set of actions.

Their purpose is to provide an effortless way to execute repetitive tasks, like:

- Running a linter tool on your code
- Executing the tests
- Starting your project locally
- Building your project
- Minify or Uglify JS or CSS (Cascading Style Sheets)

To define an NPM script, set its name and write the script under the ‘scripts’ property of your package.json file:

```json
    "script":{
        "name": "your script"
    }
```

To execute your Script, use the `npm run <name-of-your-script>` command.

## Benefits

Benefits of Using Package JSON Scripts in NodeJS

1. Simplification

   - It streamlines command execution for common tasks (start, test, build, deploy).
   - It eliminates the need to memorize complex commands.

2. Consistency

   - It ensures uniform execution across different environments and developers.
   - It maintains consistent dependency management.

3. Shareability

   - It facilitates easy project setup and task execution for new developers.
   - It promotes collaboration and knowledge transfer.

4. Automation

   - It Simplify complex workflows and repetitive tasks.
   - It Enhances efficiency and minimizes errors.

5. Flexibility

   - It customizes scripts to specific project needs and workflows.
   - It adapts to evolving project requirements.

## Commonly Used Package JSON Scripts in NodeJS

We have the following Nodejs scripts that every front-end developer should know:

- start: Launches the server or application (e.g., "node index.js").
- test: Executes project tests (e.g., "jest" or "mocha").
- build: Compiles and prepares production-ready code (e.g., "webpack").
- dev: Starts a development server with live-reloading (e.g., "nodemon").
- lint: Enforces code style guidelines (e.g., "eslint").

Additional useful scripts in NodeJS to write better and more readable code:

- pre/post scripts: Execute tasks before/after primary scripts (e.g., "prestart", "posttest").
- clean: Removes generated files (e.g., "dist" folder).
- deploy: Automates deployment processes.

## Pre and Post Scripts

If a value matching the script tag is found, it then checks for two other versions of the same script, that is, a ‘pre’ version and a ‘post’ version.

```json
    "script":{
        "precompress": "{{ execute before the compress script }}",
        "compress": "{{ run command to compress file }}",
        "postcompress": "{{ execute after the compress script }}"
    }
```

## NPM Script Options

In some cases, there can be a need to get some extra juice out of your NPM scripts, in these cases, you can pass options to the command you are using in your npm script by adding a -- --flag like in the example below.

Let us see a few examples:

```json
    "scripts": {
        "lint": "eslint .",
        "test": "jest ./test",
    }
```

If I wanted to run only the tests that changed, the command would be like this:

```sh
> npm run test -- --onlyChanged
```

And if you wanted to run the linter and save the output in a file, you could execute the following command:

```sh
> npm run lint -- --output-file lint-result.txt
```

## Best Practices for Writing Package JSON Scripts

- Keep it simple: Break down complex tasks into smaller scripts.
- Meaningful names: Use descriptive names to understand script's purpose.
- Avoid hardcoding: Store paths and values in environment variables.
- Use dependencies: Let NPM handle installation instead of scripts.
- Modularize scripts: Extract reusable logic into separate functions.
- Handle errors: Exit gracefully on failures for clear feedback.
- Document it: Add comments explaining what each script does.
- Pre/post scripts: Utilize them for setup/cleanup before/after main scripts.
- Test our scripts: Ensure they behave as expected in different scenarios.
- Review and refine: Regularly maintain and improve our scripts.

# Sources

- [npm Docs](https://docs.npmjs.com/)
- [Demystifying `devDependencies` and `dependencies` by Michael Scott Hertzberg](https://dev.to/mshertzberg/demystifying-devdependencies-and-dependencies-5ege)
- [An Introduction to Package JSON Scripts in Node.js by Knowledgehut](https://www.knowledgehut.com/blog/web-development/package-json-scripts-node-js#frequently-asked-questions)
