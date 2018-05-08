# BackstopJS Boilerplate

## Requirement

- yarn
- ruby 2.5.1

## Setup

```console
$ bin/setup
$ bin/rails s
```

This boilerplate uses the Ruby on Rails application for the test target, but you can use any other application that works on the browser.

## Usage

```console
$ yarn run backstop test
$ yarn run backstop test --filter="<scenario label>"
$ yarn run backstop reference
$ yarn run backstop approve
$ yarn run backstop openReport
```

### How to apply it to my project?

Copy and paste them :memo:

```
.gitignore
backstop.json
backstop_data/
lib/tasks/
package.json
```

and write your scenarios in `backstop_data/scenarios` !

## Features

Now, following features only available on the engine `chromy`.
(I want to support puppet too ...)

### Multiple Click Selectors

```json
[
  {
    "clickSelectors": [".foo", ".bar"]
  }
]
```

See [./backstop_data/engine_scripts/chromy/clickAndHoverHelper.js](./backstop_data/engine_scripts/chromy/clickAndHoverHelper.js)

### UserAgent

See [./backstop_data/engine_scripts/chromy/onBefore.js](./backstop_data/engine_scripts/chromy/onBefore.js)

### Cookie improvements

- `backstop_data/engine_scripts/cookies.json` is set as a default cookie
  - It is useful for a login required application
- Suppress logging cookie unless `VERBOSE=1` is specified

See [./backstop_data/engine_scripts/chromy/loadCookies.js](./backstop_data/engine_scripts/chromy/loadCookies.js)


### Separated scenarios

`backstop_data/scenarios` is the palce for scenarios and you can put multiple JSON files separated with human friendly contexts.

[./backstop_data/scenarios/index.js](./backstop_data/scenarios/index.js) bundles all jsons and [./backstop_data/runner.js](./backstop_data/runner.js) loads the bundled scenraio to pass the backstop.

### Variable interpolation

Use `${}` for interpolate variables into the scenario jsons.

```json
{ "url": "http://localhost:3000/posts/${post_id}" }
```

Variables should be defined in `backstop_data/variables.json`.

See [./backstop_data/interpolate.js](./backstop_data/interpolate.js)

Using rake task like [this](lib/tasks/dump_backstop_variables.rake) is useful for preparing the variables on the other environments.
