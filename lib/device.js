/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */

'use strict';

var useragent = require('useragent');

var defaultOptions = {
    emptyUserAgentDeviceType: 'desktop',
    unknownUserAgentDeviceType: 'phone',
    botUserAgentDeviceType: 'bot',
    carUserAgentDeviceType: 'car',
    consoleUserAgentDeviceType: 'tv',
    tvUserAgentDeviceType: 'tv',
    parseUserAgent: false
};

function merge(obj1, obj2) {
    var obj3 = {};
    if (obj1) { for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; } }
    if (obj2) { for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; } }
    return obj3;
}

function DeviceParser(user_agent, options) {
    var self = this;

    self.options = merge(defaultOptions, options);

    self.make_sure_parser_was_executed = function () {
        if (self.options.parseUserAgent === true && !self.useragent)
            self.useragent = useragent.lookup(user_agent);
    };

    self.get_model = function () {
        self.make_sure_parser_was_executed();
        if (self.useragent)
            return self.useragent.device.family;
        return '';
    };

    self.get_type = function () {
        var ua = user_agent;

        if (!ua || ua === '') {
            // No user agent.
            return self.options.emptyUserAgentDeviceType;
        }
        // overwrite Flipboard user agent otherwise it's detected as a desktop
        if (ua.match(/FlipboardProxy/i))
            ua = 'FlipboardProxy/1.1;  http://flipboard.com/browserproxy';
        if (ua.match(/Applebot/i))
            ua = 'Applebot/0.1;  http://www.apple.com/go/applebot';
        if (ua.match(/GoogleTV|SmartTV|SMART-TV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|hbbtv|CrKey|CE\-HTML/i)) {
            // if user agent is a smart TV - http://goo.gl/FocDk
            return self.options.tvUserAgentDeviceType;
        } else if (ua.match(/Xbox|PLAYSTATION (3|4)|Wii/i)) {
            // if user agent is a TV Based Gaming Console
            return self.options.consoleUserAgentDeviceType;
        } else if (ua.match(/QtCarBrowser/i)) {
            // if the user agent is a car
            return self.options.carUserAgentDeviceType;;
        } else if (ua.match(/Googlebot/i)) {
            // if user agent is a BOT/Crawler/Spider
            return self.options.botUserAgentDeviceType;
        } else if (ua.match(/WhatsApp/i)) {
            // if user agent is a BOT/Crawler/Spider
            return self.options.botUserAgentDeviceType;
        } else if (ua.match(/iP(a|ro)d/i) || (ua.match(/tablet/i) && !ua.match(/RX-34/i)) || ua.match(/FOLIO/i)) {
            // if user agent is a Tablet
            return 'tablet';
        } else if (ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i)) {
            // if user agent is an Android Tablet
            return 'tablet';
        } else if (ua.match(/Kindle/i) || (ua.match(/Mac OS/i) && ua.match(/Silk/i)) || (ua.match(/AppleWebKit/i) && ua.match(/Silk/i) && !ua.match(/Playstation Vita/i))) {
            // if user agent is a Kindle or Kindle Fire
            return 'tablet';
        } else if (ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || (ua.match(/MB511/i) && ua.match(/RUTEM/i))) {
            // if user agent is a pre Android 3.0 Tablet
            return 'tablet';
        } else if (ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i)) {
            // if user agent is unique phone User Agent
            return 'phone';
        } else if (ua.match(/Opera/i) && ua.match(/Windows NT 5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
            // if user agent is an odd Opera User Agent - http://goo.gl/nK90K
            return 'phone';
        } else if ((ua.match(/Windows (NT|XP|ME|9)/) && !ua.match(/Phone/i)) && !ua.match(/Bot|Spider|ia_archiver|NewsGator/i) || ua.match(/Win( ?9|NT)/i)) {
            // if user agent is Windows Desktop
            return 'desktop';
        } else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk|moatbot/i)) {
            // if agent is Mac Desktop
            return 'desktop';
        } else if (ua.match(/Linux/i) && ua.match(/X11/i) && !ua.match(/Charlotte|JobBot/i)) {
            // if user agent is a Linux Desktop
            return 'desktop';
        } else if (ua.match(/CrOS/)) {
            // if user agent is a Chrome Book
            return 'desktop';
        } else if (ua.match(/Solaris|SunOS|BSD/i)) {
            // if user agent is a Solaris, SunOS, BSD Desktop
            return 'desktop';
        } else if (ua.match(/Mozilla\/5\.0 \(\)|jack|Applebot|FlipboardProxy|Go 1.1 package|HTMLParser|simplereach|python-requests|ShowyouBot|MetaURI|nineconnections|(^Java\/[0-9._]*)|Commons-HttpClient|InAGist|HTTP-Java-Client|curl|Wget|Bot|B-O-T|Crawler|Spider|Spyder|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|Charlotte|NewsGator|TinEye|Cerberian|SearchSight|Zao|Scrubby|Qseero|PycURL|Pompos|oegp|SBIder|yoogliFetchAgent|yacy|webcollage|VYU2|voyager|updated|truwoGPS|StackRambler|Sqworm|silk|semanticdiscovery|ScoutJet|Nymesis|NetResearchServer|MVAClient|mogimogi|Mnogosearch|Arachmo|Accoona|holmes|htdig|ichiro|webis|LinkWalker|lwp-trivial|facebookexternalhit|monit\/|ELB-HealthChecker\/|JobBot|GoogleCloudMonitoring|GoogleStackdriverMonitoring|gomezagent|apm synthetic agent|ruxitsynthetic|ktxn|khte|ktht|dynatrace/i) && !ua.match(/phone|Playstation/i)) {
            // if user agent is a BOT/Crawler/Spider
            return self.options.botUserAgentDeviceType;
        } else {
            // Otherwise returning the unknown type configured
            return self.options.unknownUserAgentDeviceType;
        }
    };
}

function parse(useragent, options) {
    var parser = new DeviceParser(useragent, options);
    var type = parser.get_type();
    var model = parser.get_model();

    var device = {
        parser: parser, // to expose the device parser object to the running app
        type: type,
        model: model,
        is: function (t) {
            return type === t;
        }
    };

    return device;
}

exports = module.exports = parse;
exports.useragent_is = parse; // for backwards compatibility
exports.version = require('../package').version;
exports.Parser = DeviceParser;
