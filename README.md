# device [![NPM version](http://img.shields.io/npm/v/device.svg?style=flat)](https://npmjs.org/package/device) [![Downloads](https://img.shields.io/npm/dm/device.svg?style=flat)](https://npmjs.org/package/device) [![Build Status](https://secure.travis-ci.org/rguerreiro/device.png?branch=master)](http://travis-ci.org/rguerreiro/device)

## device

Basically the [express-device](https://github.com/rguerreiro/express-device) gained life of it's own and I had to refactor the basic functionality (it makes sense). Many were using [express-device](https://github.com/rguerreiro/express-device) only to identify the type of device and didn't want all the [express](http://expressjs.com) stuff.

## how to use it?

    $ npm install device

Here's an example on how to use it:

```javascript
var device = require('device');
var mydevice = device('put here user-agent string');

if(mydevice.is('bot'))
	// do something...
else
	// do another thing...
```
By doing this you're getting an object that have the following properties:
<table>
    <tr><td><strong>Name</strong></td><td><strong>Field Type</strong></td><td><strong>Description</strong></td><td><strong>Possible Values</strong></td></tr>
    <tr>
        <td>type</td>
        <td>string</td>
        <td>It gets the device type for the parsed user-agent string</td>
        <td>desktop, tv, tablet, phone, bot or car</td>
    </tr>
    <tr>
        <td>model</td>
        <td>string</td>
        <td>It gets the device model name for the parsed user-agent string</td>
        <td>Example: iPhone. If the option <strong>parseUserAgent</strong> is set to false, then it will return an empty string</td>
    </tr>
</table>

It accepts an object with only the config options you which to override (go [here](https://github.com/rguerreiro/device/blob/master/test/not_default_options_test.js) for some examples). The ones you don't override it will use the default values. Here's the list with the available config options:
<table>
    <tr><td><strong>Name</strong></td><td><strong>Field Type</strong></td><td><strong>Description</strong></td><td><strong>Possible Values</strong></td></tr>
    <tr>
        <td>emptyUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the has an empty user-agent. Defaults to desktop.</td>
        <td>desktop, tv, tablet, phone, bot, car or console</td>
    </tr>
	<tr>
        <td>unknownUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the user-agent is unknown. Defaults to phone.</td>
        <td>desktop, tv, tablet, phone, bot, car or console</td>
    </tr>
    <tr>
        <td>botUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the user-agent belongs to a bot. Defaults to bot.</td>
        <td>desktop, tv, tablet, phone, bot, car or console</td>
    </tr>
    <tr>
        <td>carUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the user-agent belongs to a car. Defaults to car.</td>
        <td>desktop, tv, tablet, phone, bot, car or console</td>
    </tr>
    <tr>
        <td>consoleUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the user-agent belongs to a console. Defaults to tv.</td>
        <td>desktop, tv, tablet, phone, bot, car or console</td>
    </tr>
    <tr>
        <td>tvUserAgentDeviceType</td>
        <td>string</td>
        <td>Device type to be returned whenever the user-agent belongs to a tv. Defaults to tv.</td>
        <td>desktop, tv, tablet, phone, bot, car or console</td>
    </tr>
    <tr>
        <td>parseUserAgent</td>
        <td>string</td>
        <td>Configuration to parse the user-agent string using the <a href="https://www.npmjs.com/package/useragent">useragent</a> npm package. It's needed in order to get the device name. Defaults to false.</td>
        <td>true | false</td>
    </tr>
</table>

In case you didn't notice there's also a method **is()** that will return a boolean (true or false) when you pass the device type that you want validate against (check the initial example).

The **device** package is supported on node version 4.* upwards.

## contributors

Some contributed in the [express-device](https://github.com/rguerreiro/express-device) repository.

- [@rguerreiro](https://github.com/rguerreiro)
- [@aledbf](https://github.com/aledbf)
- [@ryansully](https://github.com/ryansully)
- [@lyxsus](https://github.com/lyxsus)
- [@dsyph3r](https://github.com/dsyph3r)
- [@davo11122](https://github.com/davo11122)
- [@esco](https://github.com/esco)
- [@Saicheg](https://github.com/Saicheg)
- [@brycekahle](https://github.com/brycekahle)
- [@manjeshpv](https://github.com/manjeshpv)
- [@Sitebase](https://github.com/Sitebase)
- [@lennym](https://github.com/lennym)
- [@martincad](https://github.com/martincad)
- [@mettin](https://github.com/mettin)
- [@cliftonc](https://github.com/cliftonc)
- [@BorePlusPlus](https://github.com/BorePlusPlus)
- [@Minaru](https://github.com/Minaru)
- [@fmmsilva](https://github.com/fmmsilva)

Special thanks to [@jimmybergman](https://github.com/jimmybergman) that allowed me to use his `device` package for this refactoring.

## where to go from here?

Currently, `device` is on **version 0.3.9**. In order to add more features I'm asking anyone to contribute with some ideas. You can do it by making some feature requests on the issues panel, but I prefer that you make your contribution with some pull requests ;)

In case you found a misinterpreted user-agent please open an issue and submit the full string and state what type of device it should return.

## license

The MIT License (MIT)

Copyright (c) 2015 Rodrigo Guerreiro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
