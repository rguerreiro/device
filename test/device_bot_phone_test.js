var device = require('../lib/device.js'),
    assert = require('assert');

describe('device', function() {    
    describe('1.Accoona-AI-Agent 1.1.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Accoona-AI-Agent/1.1.2');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('2.Arachmo',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/4.0 (compatible; Arachmo)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('3.B-l-i-t-z-B-O-T',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/4.0 (compatible; B-l-i-t-z-B-O-T)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('4.Cerberian Drtrs 3.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/4.0 (compatible; Cerberian Drtrs Version-3.2-Build-1)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('5.Cerberian Drtrs 3.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/4.0 (compatible; Cerberian Drtrs Version-3.2-Build-0)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('6.Charlotte 0.9t',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Charlotte/0.9t; http://www.searchme.com/support/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('7.Charlotte 0.9t',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Charlotte/0.9t; +http://www.searchme.com/support/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('8.Charlotte 1.0b',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Charlotte/1.0b; http://www.searchme.com/support/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('9.Charlotte 1.0t',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Charlotte/1.0t; http://www.searchme.com/support/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('10.Charlotte 1.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Charlotte/1.1; http://www.searchme.com/support/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('11.Holmes 3.9',function(){
        it('should get device type bot', function(){
            var mydevice = device('holmes/3.9 (someurl.co.cc)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('12.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var mydevice = device('htdig/3.1.5 (webmaster@online-medien.de)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('13.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var mydevice = device('htdig/3.1.5 (root@localhost)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('14.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var mydevice = device('htdig/3.1.5 (infosys@storm.rmi.org)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('15.htdig 3.1.5',function(){
        it('should get device type bot', function(){
            var mydevice = device('htdig/3.1.5');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('16.htdig 3.1.6',function(){
        it('should get device type bot', function(){
            var mydevice = device('htdig/3.1.6 (unconfigured@htdig.searchengine.maintainer)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('17.htdig 3.1.6',function(){
        it('should get device type bot', function(){
            var mydevice = device('htdig/3.1.6 (mathieu.peltier@inrialpes.fr)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('18.ichiro 2.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('ichiro/2.0 (ichiro@nttr.co.jp)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('19.igdeSpyder',function(){
        it('should get device type bot', function(){
            var mydevice = device('igdeSpyder (compatible; igde.ru; +http://igde.ru/doc/tech.html)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('20.L.webis 0.87',function(){
        it('should get device type bot', function(){
            var mydevice = device('L.webis/0.87 (http://webalgo.iit.cnr.it/index.php?pg=lwebis)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('21.LinkWalker',function(){
        it('should get device type bot', function(){
            var mydevice = device('LinkWalker');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('22.LinkWalker 2.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('LinkWalker/2.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('23.lwp-trivial 1.33',function(){
        it('should get device type bot', function(){
            var mydevice = device('lwp-trivial/1.33');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('24.lwp-trivial 1.35',function(){
        it('should get device type bot', function(){
            var mydevice = device('lwp-trivial/1.35');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('25.lwp-trivial 1.36',function(){
        it('should get device type bot', function(){
            var mydevice = device('lwp-trivial/1.36');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('26.lwp-trivial 1.38',function(){
        it('should get device type bot', function(){
            var mydevice = device('lwp-trivial/1.38');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('27.lwp-trivial 1.41',function(){
        it('should get device type bot', function(){
            var mydevice = device('lwp-trivial/1.41');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('28.Mnogosearch 3.1.21',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mnogosearch-3.1.21');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('29.mogimogi 1.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('mogimogi/1.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('30.MVAClient',function(){
        it('should get device type bot', function(){
            var mydevice = device('MVAClient');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('31.NetResearchServer',function(){
        it('should get device type bot', function(){
            var mydevice = device('NetResearchServer(http://www.look.com)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('32.Nymesis 1.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('Nymesis/1.0 (http://nymesis.com)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('33.oegp 1.3.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('oegp v. 1.3.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('34.Pompos 1.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('Pompos/1.1 http://pompos.iliad.fr');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('35.Pompos 1.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Pompos/1.2 http://pompos.iliad.fr');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('36.Pompos 1.3',function(){
        it('should get device type bot', function(){
            var mydevice = device('Pompos/1.3 http://dir.com/pompos.html');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('37.PycURL',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('38.PycURL 7.13.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.13.2');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('39.PycURL 7.15.5',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.15.5');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('40.PycURL 7.16.4',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.16.4');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('41.PycURL 7.18.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.18.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('42.PycURL 7.18.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.18.2');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('43.PycURL 7.19.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.19.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('44.PycURL 7.19.3',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.19.3');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('45.PycURL 7.19.5',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.19.5');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('46.PycURL 7.19.7',function(){
        it('should get device type bot', function(){
            var mydevice = device('PycURL/7.19.7');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('47.Qseero 1.0.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('Qseero v1.0.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('48.SBIder 0.8-dev',function(){
        it('should get device type bot', function(){
            var mydevice = device('SBIder/0.8-dev (SBIder; http://www.sitesell.com/sbider.html; http://support.sitesell.com/contact-support.html)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('49.ScoutJet',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; ScoutJet; http://www.scoutjet.com/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('50.Scrubby 2.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('Scrubby/2.1 (http://www.scrubtheweb.com/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('51.Scrubby 2.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Scrubby/2.1; +http://www.scrubtheweb.com/abs/meta-check.html)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('52.Scrubby 2.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Scrubby/2.2 (http://www.scrubtheweb.com/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('53.Scrubby 2.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Scrubby/2.2; +http://www.scrubtheweb.com/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('54.Scrubby 2.2',function(){
        it('should get device type bot', function(){
            var mydevice = device('Mozilla/5.0 (compatible; Scrubby/2.2; http://www.scrubtheweb.com/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('55.SearchSight 2.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('SearchSight/2.0 (http://SearchSight.com/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('56.semanticdiscovery 0.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('semanticdiscovery/0.1');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('57.silk 1.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('silk/1.0 (+http://www.slider.com/silk.htm)/3.7');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('58.silk 1.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('Silk/1.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('59.Sqworm 2.9.85-BETA',function(){
        it('should get device type bot', function(){
            var mydevice = device('Sqworm/2.9.85-BETA (beta_release; 20011115-775; i686-pc-linux-gnu)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('60.StackRambler 2.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('StackRambler/2.0 (MSIE incompatible)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('61.StackRambler 2.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('StackRambler/2.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('62.truwoGPS 1.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('truwoGPS/1.0 (GNU/Linux; U; i686; en-US; +http://www.lan4lano.net/browser.html )');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('63.updated 0.1-beta',function(){
        it('should get device type bot', function(){
            var mydevice = device('updated/0.1-beta (updated; http://www.updated.com; updated@updated.com)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('64.voyager 1.0',function(){
        it('should get device type bot', function(){
            var mydevice = device('voyager/1.0');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('65.VYU2',function(){
        it('should get device type bot', function(){
            var mydevice = device('VYU2 (GNU; OpenRISC)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('66.webcollage 1.114',function(){
        it('should get device type bot', function(){
            var mydevice = device('webcollage/1.114');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('67.webcollage 1.117',function(){
        it('should get device type bot', function(){
            var mydevice = device('webcollage/1.117');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('68.webcollage 1.125',function(){
        it('should get device type bot', function(){
            var mydevice = device('webcollage/1.125');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('69.webcollage 1.129',function(){
        it('should get device type bot', function(){
            var mydevice = device('webcollage/1.129');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('70.webcollage 1.93',function(){
        it('should get device type bot', function(){
            var mydevice = device('webcollage/1.93');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('71.yacybot',function(){
        it('should get device type bot', function(){
            var mydevice = device('yacy (i386 Linux 2.6.14-1.1653_FC4smp; java 1.5.0_04; Europe/de) yacy.net');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('72.yacybot',function(){
        it('should get device type bot', function(){
            var mydevice = device('yacy (i386 Linux 2.4.20-021stab028.17.777-enterprise; java 1.4.2_08; Europe/en) yacy.net');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('73.yoogliFetchAgent 0.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('yoogliFetchAgent/0.1');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('74.Zao 0.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('Zao/0.1 (http://www.kototoi.org/zao/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('75.Zao 0.1',function(){
        it('should get device type bot', function(){
            var mydevice = device('Zao/0.1 (http://www.kototoi.org/zao/)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    https://support.google.com/webmasters/answer/1061943?hl=en
    describe('76.Google Mobile (feature phone)', function () {
        it('should get device type bot', function () {
            var mydevice = device('SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('77.Google Mobile (feature phone)', function () {
        it('should get device type bot', function () {
            var mydevice = device('DoCoMo/2.0 N905i(c100;TB;W24H16) (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('78.Google Smartphone', function () {
        it('should get device type bot', function () {
            var mydevice = device('Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('79.WhatsApp Bot', function () {
        it('should get device type bot', function () {
            var mydevice = device('*_WhatsApp/2.12.81 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00');
            assert.equal(mydevice.type, 'bot');
        });
    });
    describe('Bot device type check with is method', function () {
        it('should get true', function () {
            var mydevice = device('Facebot');
            assert.equal(mydevice.is('bot'), true);
        });
    });
});