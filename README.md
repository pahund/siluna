# Silunas weiter Weg

Mermaid video game

## Installation

    npm install
    
Installs node modules and does a webpack build as a post install script, which updates the bundle in the dist folder.

Open `index.html` in your browser to see the game. 

## Development

    npm start
    
Starts a webpack dev server that allows live reloading as you work on the code.

Open `http://localhost:8080/index-dev.html` in your browser to see the game (difference between `index-dev` and `index` 
is that in the dev version, the JS bundle served from the dev server is used and live reloading is enabled).

### Debugging with JetBrains IDEs

You can debug the JavaScript code with [IntelliJ IDEA](https://www.jetbrains.com/idea/) or 
[WebStorm](https://www.jetbrains.com/webstorm/). Alas, setting it up is a bit tricky, but it can be done. I followed
this article by JetBrains to set up my IDE: 
[Debugging webpack Applications in WebStorm](https://blog.jetbrains.com/webstorm/2015/09/debugging-webpack-applications-in-webstorm/)

The following steps are neccessary:

* create a special version of the JavaScript bundles in the dist folder using the webpack config file 
  [webpack.config-debug.js](webpack.config-debug.js):
  
        npm run dist-debug
        
* set up your run configuration as described in the [article](https://blog.jetbrains.com/webstorm/2015/09/debugging-webpack-applications-in-webstorm/):
    * Menu “Run” => “Edit Configurations...”
    * Browser: Chrome
    * Add a new “JavaScript debug” configuration
    * URL: `http://localhost:63342/silunas-weiter-weg/index.html`
    * Add this URL to the root: `webpack:///.`
    * Add this URL to the dist folder: `http://localhost:63342/silunas-weiter-weg/dist`
    
* set a breakpoint anywhere in one of the JavaScript files in the `js` folder

* start your debugging session with the run configuration you created

The application should now open up in your Chrome browser and execution should stop at the breakpoint, allowing you to
step through and inspect variables.

One limitation is that you cannot hot reload, i.e. when you make code changes, you need to execute the `dist-debug` script
again and restart your debugging session.

## Acknowledgements

This software uses portions of the following software:

### [jQuery Easing](https://github.com/danro/jquery-easing)
    
Open source under the BSD License. 

Copyright © 2008 George McGinley Smith.

All rights reserved.
