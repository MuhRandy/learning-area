# What is linting?

Generally speaking, linting is a tool for static code analysis and therefore part of white-box testing. The main purpose of white-box testing is to analyse the internal structure of components or a system. To make sense of this, a developer would already have knowledge of the written code and will define rules or expectations about how a component should behave (unit tests), or how it should be structured (linting).

In modern web development, this describes the process (and tools) of applying rules against a codebase and flagging code structures that violate these rules. Rules can vary from code styling rules, so code appears to be written by one person, to much more complex rules (e.g. here). Even fixing these issues is part of modern JavaScript linting.

# Why should you lint your code?

- Readability
- Pre-code review
- Finding (syntax) errors before execution

# Linter

Linters are tools that will scan your code with a set of style rules and will report any errors to you that they find. In some cases, they can even auto-fix the errors!

There are multiple options for linting your JavaScript, but the most popular (and most common in the industry) is [ESLint](https://eslint.org/). Getting it installed and the initial set-up is straightforward.

## [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started)

## [Configure ESLint](https://eslint.org/docs/latest/use/configure/)

## [ESLint extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

# Formatter

Formatters take your JavaScript code and then automatically format it according to a set of rules. Unlike linters, they do not look for style errors, but specifically target the layout of your code, making intelligent decisions about things like spaces, indentation levels and line-breaks.

As usual, there are multiple formatters out there. [Prettier](https://prettier.io/) is a very popular choice that is highly opinionated. Besides a few options, most of its formatting decisions are not customizable. Since many of these decisions have been made for you, this reduces the time spent deciding on things like indentation size or spacing, and more time on the problems that actually matter.

## [Prettier’s installation guide](https://prettier.io/docs/en/install.html)

## [Instructions for setting up and configuring the VSCode Prettier extension](https://github.com/prettier/prettier-vscode)

# Note

While the Visual Studio Code extensions for ESLint and Prettier are really convenient, they are local to your machine only. It’s good practice to install any linters and formatters as dev dependencies in your projects as well.

At some point, you may need to work on code with multiple people, and others may not use all of the same tools as you. Therefore, including linters and formatters as dependencies in your project, as well as any rule configuration files, allows everyone access to the same linting and formatting tools and rules.

Editor extensions can then be used to make linting and formatting more convenient for you. The ESLint and Prettier extensions will recognise and use any rule files in your project. If your open workspace has ESLint installed as a dependency, then the ESLint extension can automatically detect this to apply the right setting for whether to use the flat config or legacy eslintrc format.

# Using ESLint and Prettier

For most people using the default ESLint ruleset, there will be no special setup needed apart from installing both of them.

Some community plugins, such as [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), turn on some stylistic rules that may clash with what Prettier formats. If you wish to use a plugin like eslint-config-airbnb-base and Prettier together, you will also need to install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) which will turn off any of the ESLint rules that clash with Prettier. If you are using the default ESLint ruleset, you will not need this.

# Sources

- [How linting and ESLint improve code quality
  by Ferit T.](https://hackernoon.com/how-linting-and-eslint-improve-code-quality-fa83d2469efe)
