var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {
    describe('1.Tesla Model S',function(){
        it('should get device type tv', function(){
            var mydevice = device('Mozilla/5.0 (X11; u; Linux; C) AppleWebKit /533.3 (Khtml, like Gheko) QtCarBrowser Safari /533.3');
            assert.equal(mydevice.type, 'car');
        });
    }); 
    describe('Car device type check with is method', function () {
        it('should get true', function () {
            var mydevice = device('QtCarBrowser');
            assert.equal(mydevice.is('car'), true);
        });
    });
});