*This repository is a mirror of the [component](http://component.io) module [anchorjs/selector](http://github.com/anchorjs/selector). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/anchorjs-selector`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# Anchor/Selector

The selector module implements support for selecting DOM elements using CSS
selectors.

## Install

##### component

    $ component install anchorjs/selector

##### volo

    $ volo add anchorjs/selector
    
## Usage

```javascript
select('.btn');
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
