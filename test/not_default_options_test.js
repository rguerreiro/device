var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function () {
    describe('deprecated useragent_is method', function () {
        it('should return the same', function () {
            var mydevice = device.useragent_is('dsfglkfjawflkehf');
            assert.equal(mydevice.type, 'phone');
        });
    });

    describe('unknown user-agent',function(){
        it('should get phone (default one)', function(){
            var mydevice = device('dsfglkfjawflkehf');
            assert.equal(mydevice.type, 'phone');
        });
    });

    describe('unknown user-agent configured to return desktop',function(){
        it('should get desktop', function(){
            var mydevice = device('dsfglkfjawflkehf', { unknownUserAgentDeviceType: 'desktop' });
            assert.equal(mydevice.type, 'desktop');
        });
    });

    describe('unknown user-agent configured to return tablet',function(){
        it('should get tablet', function(){
            var mydevice = device('dsfglkfjawflkehf', { unknownUserAgentDeviceType: 'tablet' });
            assert.equal(mydevice.type, 'tablet');
        });
    });

    describe('unknown user-agent configured to return bot',function(){
        it('should get bot', function(){
            var mydevice = device('dsfglkfjawflkehf', { unknownUserAgentDeviceType: 'bot' });
            assert.equal(mydevice.type, 'bot');
        });
    });

    describe('unknown user-agent configured to return tv',function(){
        it('should get tv', function(){
            var mydevice = device('dsfglkfjawflkehf', { unknownUserAgentDeviceType: 'tv' });
            assert.equal(mydevice.type, 'tv');
        });
    });

    describe('with no user-agent',function(){
        it('should get desktop', function(){
            var mydevice = device('');
            assert.equal(mydevice.type, 'desktop');
        });
    });

    describe('with no user-agent',function(){
        it('should get desktop', function(){
            var mydevice = device(null);
            assert.equal(mydevice.type, 'desktop');
        });
    });

    describe('with no user-agent',function(){
        it('should get desktop', function(){
            var mydevice = device(undefined);
            assert.equal(mydevice.type, 'desktop');
        });
    });

    describe('with no user-agent and configured to return phone',function(){
        it('should get phone', function(){
            var mydevice = device(null, { emptyUserAgentDeviceType: 'phone' });
            assert.equal(mydevice.type, 'phone');
        });
    });

    describe('with no user-agent and configured to return tablet',function(){
        it('should get tablet', function(){
            var mydevice = device(null, { emptyUserAgentDeviceType: 'tablet' });
            assert.equal(mydevice.type, 'tablet');
        });
    });

    describe('with no user-agent and configured to return tv',function(){
        it('should get tv', function(){
            var mydevice = device(null, { emptyUserAgentDeviceType: 'tv' });
            assert.equal(mydevice.type, 'tv');
        });
    });

    describe('with no user-agent and configured to return bot',function(){
        it('should get bot', function(){
            var mydevice = device(null, { emptyUserAgentDeviceType: 'bot' });
            assert.equal(mydevice.type, 'bot');
        });
    });

    describe('with bot user agent and configured to return desktop', function(){
        it('should get desktop', function(){
            var mydevice = device('Bot', { botUserAgentDeviceType: 'desktop' });
            assert.equal(mydevice.type, 'desktop');
        })
    });

    describe('with bot user agent and configured to return phone', function(){
        it('should get phone', function(){
            var mydevice = device('Bot', { botUserAgentDeviceType: 'phone' });
            assert.equal(mydevice.type, 'phone');
        })
    });

    describe('with bot user agent and configured to return tablet', function(){
        it('should get tablet', function(){
            var mydevice = device('Bot', { botUserAgentDeviceType: 'tablet' });
            assert.equal(mydevice.type, 'tablet');
        })
    });

    describe('with bot user agent and configured to return tv', function(){
        it('should get tv', function(){
            var mydevice = device('Bot', { botUserAgentDeviceType: 'tv' });
            assert.equal(mydevice.type, 'tv');
        })
    });
	
	describe('with car user agent and configured to return desktop', function(){
        it('should get desktop', function(){
            var mydevice = device('QtCarBrowser', { carUserAgentDeviceType: 'desktop' });
            assert.equal(mydevice.type, 'desktop');
        })
    });

    describe('with car user agent and configured to return phone', function(){
        it('should get phone', function(){
            var mydevice = device('QtCarBrowser', { carUserAgentDeviceType: 'phone' });
            assert.equal(mydevice.type, 'phone');
        })
    });

    describe('with car user agent and configured to return tablet', function(){
        it('should get tablet', function(){
            var mydevice = device('QtCarBrowser', { carUserAgentDeviceType: 'tablet' });
            assert.equal(mydevice.type, 'tablet');
        })
    });

    describe('with car user agent and configured to return tv', function(){
        it('should get tv', function(){
            var mydevice = device('QtCarBrowser', { carUserAgentDeviceType: 'tv' });
            assert.equal(mydevice.type, 'tv');
        })
    });

    describe('with user-agent of google nexus 10 and parse enabled', function () {
        it('should get nexus 10 as device name', function () {
            var mydevice = device('Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2307.2 Safari/537.36', { parseUserAgent: true });
            assert.equal(mydevice.model, 'Asus Nexus 10');
        })
    });

    describe('with user-agent of google nexus 10 and parse disabled', function () {
        it('should get empty string as device name', function () {
            var mydevice = device('Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2307.2 Safari/537.36', { parseUserAgent: false });
            assert.equal(mydevice.model, '');
        })
    });
});