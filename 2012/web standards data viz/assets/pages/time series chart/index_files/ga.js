((() => {
  var g=void 0;
  var h=!0;
  var j=null;
  var k=!1;
  var aa=encodeURIComponent;
  var ba=Infinity;
  var fa=setTimeout;
  var ga=decodeURIComponent;
  var l=Math;
  function ha(a,b){return a.name=b}
  var n="push";
  var ia="test";
  var ja="slice";
  var o="replace";
  var ka="load";
  var la="floor";
  var ma="charAt";
  var na="value";
  var p="indexOf";
  var oa="match";
  var pa="port";
  var qa="createElement";
  var ra="path";
  var q="name";
  var t="host";
  var u="toString";
  var v="length";
  var w="prototype";
  var sa="clientWidth";
  var x="split";
  var ta="stopPropagation";
  var ua="scope";
  var y="location";
  var va="search";
  var z="protocol";
  var wa="clientHeight";
  var xa="href";
  var A="substring";
  var ya="apply";
  var za="navigator";
  var B="join";
  var C="toLowerCase";
  var D;
  function Aa(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function Ba(a){return"function"==typeof a}function Ca(a){return a!=g&&-1<(a.constructor+"")[p]("String")}function E(a,b){return g==a||"-"==a&&!b||""==a}function Da(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[p](a[ma](0));)a=a[A](1);for(;a&&-1<" \n\r\t"[p](a[ma](a[v]-1));)a=a[A](0,a[v]-1);return a}
  function F(a){
    var b=1;
    var c=0;
    var d;
    if(!E(a)){b=0;for(d=a[v]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b
  }function Ea(){return l.round(2147483647*l.random())}function Fa(){}function G(a,b){if(aa instanceof Function)return b?encodeURI(a):aa(a);H(68);return escape(a)}function I(a){a=a[x]("+")[B](" ");if(ga instanceof Function)try{return ga(a)}catch(b){H(17)}else H(68);return unescape(a)}
  var Ga=(a, b, c, d) => {a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)};
  var Ha=(a, b, c, d) => {a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};
  function Ia(a,b){if(a){var c=J[qa]("script");c.type="text/javascript";c.async=h;c.src=a;c.id=b;var d=J.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);return c}}function K(a){return a&&0<a[v]?a[0]:""}function Ja(a){var b=a?a[v]:0;return 0<b?a[b-1]:""}
  var Ka=function(){this.prefix="ga.";this.S={}};Ka[w].set=function(a,b){this.S[this.prefix+a]=b};Ka[w].get=function(a){return this.S[this.prefix+a]};Ka[w].contains=function(a){return this.get(a)!==g};function La(a){0==a[p]("www.")&&(a=a[A](4));return a[C]()}function Ma(a,b){
    var c;
    var d={url:a,protocol:"http",host:"",path:"",d:new Ka,anchor:""};
    if(!a)return d;c=a[p]("://");0<=c&&(d.protocol=a[A](0,c),a=a[A](c+3));c=a[va]("/|\\?|#");if(0<=c)d.host=a[A](0,c)[C](),a=a[A](c);else return d.host=a[C](),d;c=a[p]("#");0<=c&&(d.anchor=a[A](c+1),a=a[A](0,c));c=a[p]("?");0<=c&&(Na(d.d,a[A](c+1)),a=a[A](0,c));d.anchor&&b&&Na(d.d,d.anchor);a&&"/"==a[ma](0)&&(a=a[A](1));d.path=a;return d
  }
  function Oa(a,b){
    function c(a){
      var b=(a.hostname||"")[x](":")[0][C]();
      var c=(a[z]||"")[C]();
      var c=1*a[pa]||("http:"==c?80:"https:"==c?443:"");
      var a=a.pathname||"";
      0==a[p]("/")||(a="/"+a);return[b,""+c,a]
    }var d=b||J[qa]("a");d.href=J[y][xa];
    var e=(d[z]||"")[C]();
    var f=c(d);
    var i=d[va]||"";
    var m=e+"//"+f[0]+(f[1]?":"+f[1]:"");
    0==a[p]("//")?a=e+a:0==a[p]("/")?a=m+a:!a||0==a[p]("?")?a=m+f[2]+(a||i):0>a[x]("/")[0][p](":")&&(a=m+f[2][A](0,f[2].lastIndexOf("/"))+"/"+a);d.href=a;e=c(d);return{protocol:(d[z]||"")[C](),host:e[0],
    port:e[1],path:e[2],Pa:d[va]||"",url:a||""}
  }function Na(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[n](c)}for(var d=Da(b)[x]("&"),e=0;e<d[v];e++)if(d[e]){var f=d[e][p]("=");0>f?c(d[e],"1"):c(d[e][A](0,f),d[e][A](f+1))}}function Pa(a,b){if(E(a)||"["==a[ma](0)&&"]"==a[ma](a[v]-1))return"-";var c=J.domain;return a[p](c+(b&&"/"!=b?b:""))==(0==a[p]("http://")?7:0==a[p]("https://")?8:0)?"0":a}var Qa=0;function Ra(a,b,c){!(1<=Qa)&&!(1<=100*l.random())&&(a=["utmt=error","utmerr="+a,"utmwv=5.3.4","utmn="+Ea(),"utmsp=1"],b&&a[n]("api="+b),c&&a[n]("msg="+G(c[A](0,100))),L.w&&a[n]("aip=1"),Ta(a[B]("&")),Qa++)}
  var Ua=0;
  var Va={};
  function M(a){return Wa("x"+Ua++,a)}function Wa(a,b){Va[a]=!!b;return a}
  var N=M();
  var Xa=M();
  var Ya=M();
  var Za=M();
  var $a=M();
  var O=M();
  var P=M();
  var ab=M();
  var bb=M();
  var cb=M();
  var db=M();
  var eb=M();
  var fb=M();
  var gb=M();
  var hb=M();
  var ib=M();
  var jb=M();
  var kb=M();
  var lb=M();
  var mb=M();
  var nb=M();
  var ob=M();
  var pb=M();
  var qb=M();
  var rb=M();
  var sb=M();
  var tb=M();
  var ub=M();
  var vb=M();
  var wb=M();
  var xb=M();
  var yb=M();
  var zb=M();
  var Ab=M();
  var Bb=M();
  var Q=M(h);
  var Cb=Wa("currencyCode");
  var Db=Wa("page");
  var Eb=Wa("title");
  var Fb=M();
  var Gb=M();
  var Hb=M();
  var Ib=M();
  var Jb=M();
  var Kb=M();
  var Lb=M();
  var Mb=M();
  var Nb=M();
  var R=M(h);
  var Ob=M(h);
  var Rb=M(h);
  var Sb=M(h);
  var Tb=M(h);
  var Ub=M(h);
  var Vb=M(h);
  var Wb=M(h);
  var Xb=M(h);
  var Yb=M(h);
  var Zb=M(h);
  var S=M(h);
  var $b=M(h);
  var ac=M(h);
  var bc=M(h);
  var cc=M(h);
  var dc=M(h);
  var ec=M(h);
  var fc=M(h);
  var gc=M(h);
  var hc=M(h);
  var ic=M(h);
  var jc=M(h);
  var kc=M(h);
  var lc=M(h);
  var mc=Wa("campaignParams");
  var nc=M();
  var oc=Wa("hitCallback");
  var pc=M();
  M();
  var qc=M();
  var rc=M();
  var sc=M();
  var tc=M();
  var uc=M();
  var vc=M();
  var wc=M();
  var xc=M();
  var yc=M();
  var zc=M();
  var Dc=M();
  var Ec=M();
  M();
  var Fc=M();
  var Gc=M();
  var Hc=M();
  function Ic(a){var b=this.plugins_;if(b)return b.get(a)}
  var T=(a, b, c, d) => {a[b]=function(...args) {try{return d!=g&&H(d),c[ya](this,args);}catch(a){throw (Ra("exc",b,a&&a[q]), a);}}};
  var Jc=(a, b, c, d) => {U[w][a]=function(){try{return H(c),Aa(this.a.get(b),d)}catch(e){throw (Ra("exc",a,e&&e[q]), e);}}};
  var V=(a, b, c, d, e) => {U[w][a]=function(f){try{H(c),e==g?this.a.set(b,Aa(f,d)):this.a.set(b,e)}catch(i){throw (Ra("exc",a,i&&i[q]), i);}}};
  var Kc=RegExp(/(^|\.)doubleclick\.net$/i);
  var Lc=(a, b) => Kc[ia](J[y].hostname)?h:"/"!==b?k:(0==a[p]("www.google.")||0==a[p](".google.")||0==a[p]("google."))&&!(-1<a[p]("google.org"))?h:k;
  var Mc=a => {var b=a.get($a),c=a.c(P,"/");Lc(b,c)&&a[ta]()};
  var Rc=function(){
    var a={};
    var b={};
    var c=new Nc;
    this.i=(a, b) => {c.add(a,b)};var d=new Nc;this.e=(a, b) => {d.add(a,b)};
    var e=k;
    var f=k;
    var i=h;
    this.U=() => {e=h};this.j=function(a){this[ka]();this.set(nc,a,h);a=new Oc(this);e=k;d.execute(this);e=h;b={};this.n();a.Ka()};this.load=function(){e&&(e=k,this.La(),Pc(this),f||(f=h,c.execute(this),Qc(this),Pc(this)),e=h)};this.n=function(){if(e)if(f)e=k,Qc(this),e=h;else this[ka]()};this.get=function(c){Va[c]&&this[ka]();return b[c]!==g?b[c]:a[c]};this.set=
    function(c,d,e){Va[c]&&this[ka]();e?b[c]=d:a[c]=d;Va[c]&&this.n()};this.z=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||""===c?b:1*c};this.c=function(a,b){var c=this.get(a);return c==g?b:c+""};this.La=function(){if(i){
      var b=this.c($a,"");
      var c=this.c(P,"/");
      Lc(b,c)||(a[O]=a[fb]&&""!=b?F(b):1,i=k)
    }}
  };Rc[w].stopPropagation=() => {throw"aborted";};
  var Oc=function(a){var b=this;this.q=0;var c=a.get(oc);this.Va=() => {0<b.q&&c&&(b.q--,b.q||c())};this.Ka=() => {!b.q&&c&&fa(c,10)};a.set(pc,b,h)};function Sc(a,b){for(var b=b||[],c=0;c<b[v];c++){var d=b[c];if(""+a==d||0==d[p](a+"."))return d}return"-"}
  var Uc=(a, b, c) => {c=c?"":a.c(O,"1");b=b[x](".");if(6!==b[v]||Tc(b[0],c))return k;var c=1*b[1],d=1*b[2],e=1*b[3],f=1*b[4],b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return H(110),k;a.set(R,c);a.set(Tb,d);a.set(Ub,e);a.set(Vb,f);a.set(Wb,b);return h};
  var Vc=a => {var b=a.get(R),c=a.get(Tb),d=a.get(Ub),e=a.get(Vb),f=a.b(Wb,1);b==g?H(113):NaN==b&&H(114);0<=b&&0<c&&0<d&&0<e&&0<=f||H(115);return[a.b(O,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][B](".")};

  var Wc=a => [a.b(O,1),a.b(Zb,0),a.b(S,1),
  a.b($b,0)][B](".");

  var Xc=(a, b, c) => {var c=c?"":a.c(O,"1"),d=b[x](".");if(4!==d[v]||Tc(d[0],c))d=j;a.set(Zb,d?1*d[1]:0);a.set(S,d?1*d[2]:10);a.set($b,d?1*d[3]:a.get(Za));return d!=j||!Tc(b,c)};
  var Yc=(a, b) => {var c=G(a.c(Rb,"")),d=[],e=a.get(Q);if(!b&&e){for(var f=0;f<e[v];f++){var i=e[f];i&&1==i[ua]&&d[n](f+"="+G(i[q])+"="+G(i[na])+"=1")}0<d[v]&&(c+="|"+d[B]("^"))}return c?a.b(O,1)+"."+c:j};

  var Zc=(a, b, c) => {c=c?"":a.c(O,"1");b=b[x](".");if(2>b[v]||Tc(b[0],c))return k;b=b[ja](1)[B](".")[x]("|");
  0<b[v]&&a.set(Rb,I(b[0]));if(1>=b[v])return h;b=b[1][x](-1==b[1][p](",")?"^":",");for(c=0;c<b[v];c++){var d=b[c][x]("=");if(4==d[v]){var e={};ha(e,I(d[1]));e.value=I(d[2]);e.scope=1;a.get(Q)[d[0]]=e}}return h};

  var $c=a => {var b;b=(b, e) => {if(!E(a.get(b))){var f=a.c(b,""),f=f[x](" ")[B]("%20"),f=f[x]("+")[B]("%20");c[n](e+"="+f)}};var c=[];b(ec,"utmcid");b(ic,"utmcsr");b(gc,"utmgclid");b(hc,"utmdclid");b(fc,"utmccn");b(jc,"utmcmd");b(kc,"utmctr");b(lc,"utmcct");return(b=c[B]("|"))?[a.b(O,1),
  a.b(ac,0),a.b(bc,1),a.b(cc,1),b][B]("."):""};

  var ad=(a, b, c) => {c=c?"":a.c(O,"1");b=b[x](".");if(5>b[v]||Tc(b[0],c))return a.set(ac,g),a.set(bc,g),a.set(cc,g),a.set(ec,g),a.set(fc,g),a.set(ic,g),a.set(jc,g),a.set(kc,g),a.set(lc,g),a.set(gc,g),a.set(hc,g),k;a.set(ac,1*b[1]);a.set(bc,1*b[2]);a.set(cc,1*b[3]);var d=b[ja](4)[B]("."),b=a => (a=d[oa](a+"=(.*?)(?:\\|utm|$)"))&&2==a[v]?a[1]:g,c=(b, c) => {c&&(c=e?I(c):c[x]("%20")[B](" "),a.set(b,c))};-1==d[p]("=")&&(d=I(d));var e="2"==b("utmcvr");
  c(ec,b("utmcid"));c(fc,b("utmccn"));c(ic,b("utmcsr"));c(jc,b("utmcmd"));c(kc,b("utmctr"));c(lc,b("utmcct"));c(gc,b("utmgclid"));c(hc,b("utmdclid"));return h};

  var Tc=(a, b) => b?a!=b:!/^\d+$/[ia](a);
  var Nc=function(){this.B=[]};Nc[w].add=function(a,b){this.B[n]({name:a,s:b})};Nc[w].execute=function(a){try{for(var b=0;b<this.B[v];b++)this.B[b].s.call(W,a)}catch(c){}};function bd(a){100!=a.get(sb)&&a.get(R)%1E4>=100*a.get(sb)&&a[ta]()}function cd(a){dd(a.get(N))&&a[ta]()}function ed(a){"file:"==J[y][z]&&a[ta]()}function fd(a){a.get(Eb)||a.set(Eb,J.title,h);a.get(Db)||a.set(Db,J[y].pathname+J[y][va],h)}var gd=new (function() {var a=[];this.set=b => {a[b]=h};this.Ya=() => {for(var b=[],c=0;c<a[v];c++)a[c]&&(b[l[la](c/6)]=b[l[la](c/6)]^1<<c%6);for(c=0;c<b[v];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[ma](b[c]||0);return b[B]("")+"~"}});function H(a){gd.set(a)}
  var W=window;
  var J=document;
  var dd=a => {var b=W._gaUserPrefs;return b&&b.ioo&&b.ioo()||!!a&&W["ga-disable-"+a]===h};
  var hd=a => {for(var b=[],c=J.cookie[x](";"),a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),d=0;d<c[v];d++){var e=c[d][oa](a);e&&b[n](e[1])}return b};

  var X=(a, b, c, d, e, f) => {e=dd(e)?k:Lc(d,c)?k:h;if(e){if(b&&0<=W[za].userAgent[p]("Firefox"))for(var b=b[o](/\n|\r/g," "),e=0,i=b[v];e<i;++e){var m=b.charCodeAt(e)&255;if(10==m||13==m)b=b[A](0,e)+"?"+b[A](e+1)}b&&2E3<b[v]&&(b=b[A](0,2E3),H(69));
  a=a+"="+b+"; path="+c+"; ";f&&(a+="expires="+(new Date((new Date).getTime()+f)).toGMTString()+"; ");d&&(a+="domain="+d+";");J.cookie=a}};

  var id;
  var jd;
  var kd=() => {if(!id){var a={},b=W[za],c=W.screen;a.R=c?c.width+"x"+c.height:"-";a.Q=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[C]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=J.characterSet||J.charset||"-";try{var d=J.documentElement,e=J.body,f=e&&e[sa]&&e[wa],b=[];d&&(d[sa]&&d[wa])&&("CSS1Compat"===J.compatMode||!f)?b=[d[sa],d[wa]]:f&&(b=[e[sa],e[wa]]);a.Xa=b[B]("x")}catch(i){H(135)}id=a}};

  var ld=() => {kd();for(var a=id,b=W[za],a=b.appName+
  b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.R+a.Q+(J.cookie?J.cookie:"")+(J.referrer?J.referrer:""),b=a[v],c=W.history[v];0<c;)a+=c--^b++;return F(a)};

  var md=a => {kd();var b=id;a.set(Hb,b.R);a.set(Ib,b.Q);a.set(Lb,b.language);a.set(Mb,b.characterSet);a.set(Jb,b.javaEnabled);a.set(Nb,b.Xa);if(a.get(gb)&&a.get(hb)){if(!(b=jd)){var c,d,e;d="ShockwaveFlash";if((b=(b=W[za])?b.plugins:g)&&0<b[v])for(c=0;c<b[v]&&!e;c++)d=b[c],-1<d[q][p]("Shockwave Flash")&&(e=d.description[x]("Shockwave Flash ")[1]);
  else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(i){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(m){}e&&(e=e[x](" ")[1][x](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}jd=b;a.set(Kb,jd)}else a.set(Kb,"-")};

  var nd=function(a){if(Ba(a))this.s=a;else{var b=a[0],c=b.lastIndexOf(":"),d=b.lastIndexOf(".");this.g=this.h=this.l="";-1==c&&-1==d?this.g=b:-1==c&&-1!=d?(this.h=b[A](0,d),this.g=b[A](d+1)):-1!=c&&-1==d?(this.l=b[A](0,c),this.g=b[A](c+1)):c>d?(this.h=b[A](0,d),this.l=b[A](d+1,c),this.g=b[A](c+1)):(this.h=b[A](0,d),this.g=b[A](d+1));this.k=a[ja](1);this.Ma=!this.l&&"_require"==this.g;this.K=!this.h&&!this.l&&"_provide"==this.g}};

  var Y=function(){T(Y[w],"push",Y[w][n],5);T(Y[w],"_getPlugin",Ic,121);T(Y[w],
  "_createAsyncTracker",Y[w].Ta,33);T(Y[w],"_getAsyncTracker",Y[w].Ua,34);this.J=new Ka;this.p=[]};

  D=Y[w];D.Oa=function(a,b,c){var d=this.J.get(a);if(!Ba(d))return k;b.plugins_=b.plugins_||new Ka;b.plugins_.set(a,new d(b,c||{}));return h};D.push=function(a){
    var b=Z.Wa[ya](this,arguments);
    var b=Z.p.concat(b);
    for(Z.p=[];0<b[v]&&!Z.P(b[0])&&!(b.shift(),0<Z.p[v]););Z.p=Z.p.concat(b);return 0
  };D.Wa=function(a){for(var b=[],c=0;c<arguments[v];c++)try{var d=new nd(arguments[c]);d.K?this.P(d):b[n](d)}catch(e){}return b};
  D.P=function(a){try{if(a.s)a.s[ya](W);else if(a.K)this.J.set(a.k[0],a.k[1]);else{var b="_gat"==a.h?L:"_gaq"==a.h?Z:L.u(a.h);if(a.Ma){if(!this.Oa(a.k[0],b,a.k[2])){if(!a.Qa){
    var c=Oa(""+a.k[1]);
    var d=c[z];
    var e=J[y][z];
    var f;if(f="https:"==d||d==e?h:"http:"!=d?k:"http:"==e){var i;a:{var m=Oa(J[y][xa]);if(!(c.Pa||0<=c.url[p]("?")||0<=c[ra][p]("://")||c[t]==m[t]&&c[pa]==m[pa]))for(var r="http:"==c[z]?80:443,s=L.T,b=0;b<s[v];b++)if(c[t]==s[b][0]&&(c[pa]||r)==(s[b][1]||r)&&0==c[ra][p](s[b][2])){i=h;break a}i=
    k}f=i&&!dd()}f&&(a.Qa=Ia(c.url))
  }return h}}else a.l&&(b=b.plugins_.get(a.l)),b[a.g][ya](b,a.k)}}catch(Sa){}};D.Ta=(a, b) => L.r(a,b||"");D.Ua=a => L.u(a);var qd=function(){
    function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){
      f[a][b]=g;
      var c=h;
      var d;
      for(d=0;d<i[v];d++)if(g!=f[a][i[d]]){c=k;break}c&&(f[a]=g)
    }}function d(a){
      var b="";
      var c=k;
      var d;
      var e;
      for(d=0;d<i[v];d++)if(e=a[i[d]],g!=e){c&&(b+=i[d]);for(var c=[],f=g,da=g,da=0;da<e[v];da++)if(g!=e[da]){f="";da!=Pb&&g==e[da-1]&&(f+=da[u]()+Sa);for(var vd=e[da],Ac="",Qb=g,Bc=g,Cc=g,Qb=0;Qb<vd[v];Qb++)Bc=
      vd[ma](Qb),Cc=ea[Bc],Ac+=g!=Cc?Cc:Bc;f+=Ac;c[n](f)}b+=m+c[B](s)+r;c=k}else c=h;return b
    }
    var e=this;
    var f=[];
    var i=["k","v"];
    var m="(";
    var r=")";
    var s="*";
    var Sa="!";
    var ea={"'":"'0"};
    ea[r]="'1";ea[s]="'2";ea[Sa]="'3";var Pb=1;e.Sa=a => g!=f[a];e.A=() => {for(var a="",b=0;b<f[v];b++)g!=f[b]&&(a+=b[u]()+d(f[b]));return a};e.Ra=a => {if(a==g)return e.A();for(var b=a.A(),c=0;c<f[v];c++)g!=f[c]&&!a.Sa(c)&&(b+=c[u]()+d(f[c]));return b};e.f=(b, c, d) => {if(!od(d))return k;a(b,"k",c,d);return h};e.o=(b, c, d) => {if(!pd(d))return k;a(b,"v",c,d[u]());return h};e.getKey=(a, c) => b(a,"k",c);e.O=(a, c) => b(a,"v",c);e.M=a => {c(a,"k")};e.N=a => {c(a,"v")};T(e,"_setKey",e.f,89);T(e,"_setValue",e.o,90);T(e,"_getKey",e.getKey,87);T(e,"_getValue",e.O,88);T(e,"_clearKey",e.M,85);T(e,"_clearValue",e.N,86)
  };function od(a){return"string"==typeof a}function pd(a){return"number"!=typeof a&&(g==Number||!(a instanceof Number))||l.round(a)!=a||NaN==a||a==ba?k:h}
  var rd=a => {var b=W.gaGlobal;a&&!b&&(W.gaGlobal=b={});return b};
  var sd=() => {var a=rd(h).hid;a==j&&(a=Ea(),rd(h).hid=a);return a};
  var td=a => {a.set(Gb,sd());var b=rd();if(b&&b.dh==a.get(O)){var c=b.sid;c&&("0"==c&&H(112),a.set(Vb,c),a.get(Ob)&&a.set(Ub,c));b=b.vid;a.get(Ob)&&b&&(b=b[x]("."),1*b[1]||H(112),a.set(R,1*b[0]),a.set(Tb,1*b[1]))}};
  var wd;
  var xd=(a, b, c) => {var d=a.c($a,""),e=a.c(P,"/"),f=a.b(ab,0),a=a.c(N,"");X(b,c,e,d,a,f)};
  var Qc=a => {var b=a.c($a,"");a.b(O,1);var c=a.c(P,"/"),d=a.c(N,"");X("__utma",Vc(a),c,b,d,a.get(ab));X("__utmb",Wc(a),c,b,d,a.get(bb));X("__utmc",""+a.b(O,1),c,b,d);var e=$c(a,h);e?X("__utmz",e,c,b,d,a.get(cb)):X("__utmz","",c,b,"",-1);(e=Yc(a,k))?X("__utmv",e,c,b,d,a.get(ab)):X("__utmv","",c,b,"",-1)};

  var Pc=a => {var b=a.b(O,1);if(!Uc(a,Sc(b,hd("__utma"))))return a.set(Sb,h),k;var c=!Xc(a,Sc(b,hd("__utmb")));
  a.set(Yb,c);ad(a,Sc(b,hd("__utmz")));Zc(a,Sc(b,hd("__utmv")));wd=!c;return h};

  var yd=a => {!wd&&!(0<hd("__utmb")[v])&&(X("__utmd","1",a.c(P,"/"),a.c($a,""),a.c(N,""),1E4),0==hd("__utmd")[v]&&a[ta]())};
  var Bd=a => {a.get(R)==g?zd(a):a.get(Sb)&&!a.get(Fc)?zd(a):a.get(Yb)&&Ad(a)};
  var Cd=a => {a.get(dc)&&!a.get(Xb)&&(Ad(a),a.set(bc,a.get(Wb)))};
  var zd=a => {var b=a.get(Za);a.set(Ob,h);a.set(R,Ea()^ld(a)&2147483647);a.set(Rb,"");a.set(Tb,b);a.set(Ub,b);a.set(Vb,b);a.set(Wb,1);a.set(Xb,h);a.set(Zb,0);a.set(S,10);a.set($b,b);a.set(Q,[]);a.set(Sb,k);a.set(Yb,k)};
  var Ad=a => {a.set(Ub,a.get(Vb));a.set(Vb,a.get(Za));a.z(Wb);a.set(Xb,h);a.set(Zb,0);a.set(S,10);a.set($b,a.get(Za));a.set(Yb,k)};
  var Dd="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q".split(" ");

  var Kd=a => {if(a.get(ib)&&
  !a.get(Fc)){for(var b=!E(a.get(ec))||!E(a.get(ic))||!E(a.get(gc))||!E(a.get(hc)),c={},d=0;d<Ed[v];d++){var e=Ed[d];c[e]=a.get(e)}(d=a.get(mc))?(H(149),e=new Ka,Na(e,d),d=e):d=Ma(J[y][xa],a.get(eb)).d;if(!("1"==Ja(d.get(a.get(rb)))&&b)){var f=d,i=(b, c) => {var c=c||"-",d=Ja(f.get(a.get(b)));return d&&d!="-"?I(d):c},d=Ja(f.get(a.get(kb)))||"-",e=Ja(f.get(a.get(nb)))||"-",m=Ja(f.get(a.get(mb)))||"-",r=Ja(f.get("dclid"))||"-",s=i(lb,"(not set)"),Sa=i(ob,"(not set)"),ea=i(pb),i=i(qb);if(E(d)&&E(m)&&
  E(r)&&E(e))d=k;else{var Pb=!E(r)&&E(e),ud=E(ea);if(Pb||ud){var ca=Fd(a),ca=Ma(ca,h);if((ca=Gd(a,ca))&&!E(ca[1]&&!ca[2]))Pb&&(e=ca[0]),ud&&(ea=ca[1])}Hd(a,d,e,m,r,s,Sa,ea,i);d=h}d=d||Id(a);!d&&(!b&&a.get(Xb))&&(Hd(a,g,"(direct)",g,g,"(direct)","(none)",g,g),d=h);if(d&&(a.set(dc,Jd(a,c)),b="(direct)"==a.get(ic)&&"(direct)"==a.get(fc)&&"(none)"==a.get(jc),a.get(dc)||a.get(Xb)&&!b))a.set(ac,a.get(Za)),a.set(bc,a.get(Wb)),a.z(cc)}}};

  var Id=a => {var b=Fd(a),c=Ma(b,h);if(!(b!=g&&b!=j&&""!=b&&"0"!=b&&
  "-"!=b&&0<=b[p]("://"))||c&&-1<c[t][p]("google")&&c.d.contains("q")&&"cse"==c[ra])return k;if((b=Gd(a,c))&&!b[2])return Hd(a,g,b[0],g,g,"(organic)","organic",b[1],g),h;if(b||!a.get(Xb))return k;a:{for(var b=a.get(yb),d=La(c[t]),e=0;e<b[v];++e)if(-1<d[p](b[e])){a=k;break a}Hd(a,g,d,g,g,"(referral)","referral",g,"/"+c[ra]);a=h}return a};

  var Gd=(a, b) => {for(var c=a.get(wb),d=0;d<c[v];++d){var e=c[d][x](":");if(-1<b[t][p](e[0][C]())){var f=b.d.get(e[1]);if(f&&(f=K(f),!f&&-1<b[t][p]("google.")&&(f="(not provided)"),
  !e[3]||-1<b.url[p](e[3]))){a:{for(var c=f,d=a.get(xb),c=I(c)[C](),i=0;i<d[v];++i)if(c==d[i]){c=h;break a}c=k}return[e[2]||e[0],f,c]}}}return j};

  var Hd=(a, b, c, d, e, f, i, m, r) => {a.set(ec,b);a.set(ic,c);a.set(gc,d);a.set(hc,e);a.set(fc,f);a.set(jc,i);a.set(kc,m);a.set(lc,r)};
  var Ed=[fc,ec,gc,hc,ic,jc,kc,lc];

  var Jd=(a, b) => {function c(a){a=(""+a)[x]("+")[B]("%20");return a=a[x](" ")[B]("%20")}function d(c){var d=""+(a.get(c)||""),c=""+(b[c]||"");return 0<d[v]&&d==c}if(d(gc)||d(hc))return H(131),k;for(var e=
  0;e<Ed[v];e++){var f=Ed[e],i=b[f]||"-",f=a.get(f)||"-";if(c(i)!=c(f))return h}return k};

  var Ld=RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i);
  var Fd=a => {a=Pa(a.get(Fb),a.get(P));try{if(Ld[ia](a))return H(136),a+"?q="}catch(b){H(145)}return a};
  var Nd=a => {Md(a,J[y][xa])?(a.set(Fc,h),H(12)):a.set(Fc,k)};
  var Md=(a, b) => {if(!a.get(db))return k;var c=Ma(b,a.get(eb)),d=K(c.d.get("__utma")),e=K(c.d.get("__utmb")),f=K(c.d.get("__utmc")),i=K(c.d.get("__utmx")),m=K(c.d.get("__utmz")),r=K(c.d.get("__utmv")),c=K(c.d.get("__utmk"));if(F(""+d+e+f+i+m+r)!=c){d=I(d);e=I(e);f=I(f);i=I(i);f=Od(d+e+f+i,m,r,c);if(!f)return k;m=f[0];r=f[1]}if(!Uc(a,d,h))return k;Xc(a,e,h);ad(a,m,h);Zc(a,r,h);Pd(a,i,h);return h};

  var Rd=(a, b, c) => {var d;d=Vc(a)||"-";
  var e=Wc(a)||"-",f=""+a.b(O,1)||"-",i=Qd(a)||"-",m=$c(a,k)||"-",a=Yc(a,k)||"-",r=F(""+d+e+f+i+m+a),s=[];s[n]("__utma="+d);s[n]("__utmb="+e);s[n]("__utmc="+f);s[n]("__utmx="+i);s[n]("__utmz="+m);s[n]("__utmv="+a);s[n]("__utmk="+r);d=s[B]("&");if(!d)return b;e=b[p]("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b[p]("?");0<e&&(c=b[A](e),b=b[A](0,e));return 0>f?b+"?"+d+c:b+"&"+d+c};

  var Od=(a, b, c, d) => {for(var e=0;3>e;e++){for(var f=0;3>f;f++){if(d==F(a+b+c))return H(127),[b,c];var i=b[o](/ /g,"%20"),m=
  c[o](/ /g,"%20");if(d==F(a+i+m))return H(128),[i,m];i=i[o](/\+/g,"%20");m=m[o](/\+/g,"%20");if(d==F(a+i+m))return H(129),[i,m];try{var r=b[oa]("utmctr=(.*?)(?:\\|utm|$)");if(r&&2==r[v]&&(i=b[o](r[1],G(I(r[1]))),d==F(a+i+c)))return H(139),[i,c]}catch(s){}b=I(b)}c=I(c)}};

  var Sd="|";
  var Ud=(a, b, c, d, e, f, i, m, r) => {var s=Td(a,b);s||(s={},a.get(zb)[n](s));s.id_=b;s.affiliation_=c;s.total_=d;s.tax_=e;s.shipping_=f;s.city_=i;s.state_=m;s.country_=r;s.items_=s.items_||[];return s};
  var Vd=(a, b, c, d, e, f, i) => {var a=Td(a,b)||Ud(a,b,"",0,0,0,"","",""),m;a:{if(a&&a.items_){m=a.items_;for(var r=0;r<m[v];r++)if(m[r].sku_==c){m=m[r];break a}}m=j}r=m||{};r.transId_=b;r.sku_=c;r.name_=d;r.category_=e;r.price_=f;r.quantity_=i;m||a.items_[n](r);return r};

  var Td=(a, b) => {for(var c=
  a.get(zb),d=0;d<c[v];d++)if(c[d].id_==b)return c[d];return j};

  var Wd;
  var Xd=a => {if(!Wd){var b;b=J[y].hash;var c=W[q],d=/^#?gaso=([^&]*)/;if(c=(b=(b=b&&b[oa](d)||c&&c[oa](d))?b[1]:K(hd("GASO")))&&b[oa](/^(?:[|!]([-0-9a-z.]{1,40})[|!])?([-.\w]{10,1200})$/i))xd(a,"GASO",""+b),L._gasoDomain=a.get($a),L._gasoCPath=a.get(P),a=c[1],Ia("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+Ea(),"_gasojs");Wd=h}};
  var Pd=(a, b, c) => {c&&(b=I(b));c=a.b(O,1);b=b[x](".");!(2>b[v])&&/^\d+$/[ia](b[0])&&(b[0]=""+c,xd(a,"__utmx",b[B](".")))};
  var Qd=(a, b) => {var c=Sc(a.get(O),hd("__utmx"));"-"==c&&(c="");return b?G(c):c};

  var Zd=(a, b) => {var c=l.min(a.b(yc,0),100);if(a.b(R,0)%100>=c)return k;a:{if(c=(c=W.performance||W.webkitPerformance)&&c.timing){var d=c.navigationStart;if(0==d)H(133);else{c=[c.loadEventStart-d,c.domainLookupEnd-c.domainLookupStart,c.connectEnd-c.connectStart,c.responseStart-c.requestStart,c.responseEnd-c.responseStart,c.fetchStart-d];break a}}c=g}c||(W.top!=W?c=g:(d=(c=W.external)&&c.onloadT,c&&!c.isValidLoadTime&&(d=g),2147483648<d&&(d=g),0<d&&c.setPageReadyTime(),c=d==g?g:[d]));if(c==g)return k;
  d=c[0];if(d==g||d==ba||isNaN(d))return k;if(0<d){a:{for(d=1;d<c[v];d++)if(isNaN(c[d])||c[d]==ba||0>c[d]){d=k;break a}d=h}d?b(Yd(c)):b(Yd(c[ja](0,1)))}else Ga(W,"load",() => {Zd(a,b)},k);return h};

  var ae=(a, b, c, d) => {var e=new qd;e.f(14,90,b[A](0,64));e.f(14,91,a[A](0,64));e.f(14,92,""+$d(c));d!=g&&e.f(14,93,d[A](0,64));e.o(14,90,c);return e};
  var $d=a => isNaN(a)||0>a?0:5E3>a?10*l[la](a/10):5E4>a?100*l[la](a/100):41E5>a?1E3*l[la](a/1E3):41E5;

  var Yd=a => {for(var b=new qd,c=0;c<a[v];c++)b.f(14,
  c+1,""+$d(a[c])),b.o(14,c+1,a[c]);return b};

  var U=function(a,b,c){function d(a){return b => {if((b=b.get(Gc)[a])&&b[v])for(var c={type:a,target:e,stopPropagation() {throw"aborted";}},d=0;d<b[v];d++)b[d].call(e,c)};}var e=this;this.a=new Rc;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(N,b||"UA-XXXXX-X");this.set(Ya,a||"");this.set(Xa,c||"");this.set(Za,l.round((new Date).getTime()/1E3));this.set(P,"/");this.set(ab,63072E6);this.set(cb,15768E6);this.set(bb,18E5);this.set(db,k);this.set(vb,
  50);this.set(eb,k);this.set(fb,h);this.set(gb,h);this.set(hb,h);this.set(ib,h);this.set(jb,h);this.set(lb,"utm_campaign");this.set(kb,"utm_id");this.set(mb,"gclid");this.set(nb,"utm_source");this.set(ob,"utm_medium");this.set(pb,"utm_term");this.set(qb,"utm_content");this.set(rb,"utm_nooverride");this.set(sb,100);this.set(yc,1);this.set(zc,k);this.set(tb,"/__utm.gif");this.set(ub,1);this.set(zb,[]);this.set(Q,[]);this.set(wb,Dd[ja](0));this.set(xb,[]);this.set(yb,[]);this.C("auto");this.set(Fb,J.referrer);
  a=this.a;try{
    var f=Ma(J[y][xa],k);
    var i=ga(Ja(f.d.get("utm_referrer")))||"";
    i&&a.set(Fb,i);var m=ga(K(f.d.get("utm_expid")));m&&a.set(Hc,m)
  }catch(r){H(146)}this.set(Gc,{hit:[],load:[]});this.a.i("0",Nd);this.a.i("1",Bd);this.a.i("2",Kd);this.a.i("3",Cd);this.a.i("4",d("load"));this.a.i("5",Xd);this.a.e("A",cd);this.a.e("B",ed);this.a.e("C",Bd);this.a.e("D",bd);this.a.e("E",Mc);this.a.e("F",be);this.a.e("G",yd);this.a.e("H",fd);this.a.e("I",md);this.a.e("J",td);this.a.e("K",d("hit"));this.a.e("L",ce);
  this.a.e("M",de);0===this.get(Za)&&H(111);this.a.U();this.I=g};D=U[w];D.m=function(){var a=this.get(Ab);a||(a=new qd,this.set(Ab,a));return a};D.Na=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,h)}};D.L=function(a){
    if(this.get(zc))return k;
    var b=this;
    var c=Zd(this.a,c => {b.set(Db,a,h);b.t(c)});
    this.set(zc,c);return c
  };D.Ga=function(a){a&&Ca(a)?(H(13),this.set(Db,a,h)):"object"===typeof a&&a!==j&&this.Na(a);this.I=a=this.get(Db);this.a.j("page");this.L(a)};
  D.G=function(a,b,c,d,e){if(""==a||(!od(a)||""==b||!od(b))||c!=g&&!od(c)||d!=g&&!pd(d))return k;this.set(rc,a,h);this.set(sc,b,h);this.set(tc,c,h);this.set(uc,d,h);this.set(qc,!!e,h);this.a.j("event");return h};D.Ia=function(a,b,c,d,e){var f=this.a.b(yc,0);1*e===e&&(f=e);if(this.a.b(R,0)%100>=f)return k;c=1*(""+c);if(""==a||(!od(a)||""==b||!od(b)||!pd(c)||isNaN(c)||0>c||0>f||100<f)||d!=g&&(""==d||!od(d)))return k;this.t(ae(a,b,c,d));return h};
  D.Ha=function(a,b,c,d){if(!a||!b)return k;this.set(vc,a,h);this.set(wc,b,h);this.set(xc,c||J[y][xa],h);d&&this.set(Db,d,h);this.a.j("social");return h};D.Fa=function(){this.set(yc,10);this.L(this.I)};D.Ja=function(){this.a.j("trans")};D.t=function(a){this.set(Bb,a,h);this.a.j("event")};D.ja=function(a){this.v();var b=this;return {_trackEvent(c, d, e) {H(91);b.G(a,c,d,e)}};};D.na=function(a){return this.get(a)};
  D.ya=function(a,b){if(a)if(Ca(a))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};D.addEventListener=function(a,b){var c=this.get(Gc)[a];c&&c[n](b)};D.removeEventListener=function(a,b){for(var c=this.get(Gc)[a],d=0;c&&d<c[v];d++)if(c[d]==b){c.splice(d,1);break}};D.ra=() => "5.3.4";D.C=function(a){this.get(fb);a="auto"==a?La(J.domain):!a||"-"==a||"none"==a?"":a[C]();this.set($a,a)};D.wa=function(a){this.set(fb,!!a)};
  D.oa=function(a,b){return Rd(this.a,a,b)};D.link=function(a,b){if(this.a.get(db)&&a){var c=Rd(this.a,a,b);J[y].href=c}};D.va=function(a,b){this.a.get(db)&&(a&&a.action)&&(a.action=Rd(this.a,a.action,b))};
  D.Aa=function(){
    this.v();
    var a=this.a;
    var b=J.getElementById?J.getElementById("utmtrans"):J.utmform&&J.utmform.utmtrans?J.utmform.utmtrans:j;
    if(b&&b[na]){a.set(zb,[]);for(var b=b[na][x]("UTM:"),c=0;c<b[v];c++){b[c]=Da(b[c]);for(var d=b[c][x](Sd),e=0;e<d[v];e++)d[e]=Da(d[e]);"T"==d[0]?Ud(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&Vd(a,d[1],d[2],d[3],d[4],d[5],d[6])}}
  };D.aa=function(a,b,c,d,e,f,i,m){return Ud(this.a,a,b,c,d,e,f,i,m)};D.Z=function(a,b,c,d,e,f){return Vd(this.a,a,b,c,d,e,f)};
  D.Ba=a => {Sd=a||"|"};D.fa=function(){this.set(zb,[])};D.xa=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(vb))a=k;else if(!b||!c||128<b[v]+c[v])a=k;else{1!=d&&2!=d&&(d=3);var f={};ha(f,b);f.value=c;f.scope=d;e.get(Q)[a]=f;a=h}a&&this.a.n();return a};D.la=function(a){this.a.get(Q)[a]=g;this.a.n()};D.sa=function(a){return(a=this.a.get(Q)[a])&&1==a[ua]?a[na]:g};D.Da=function(a,b,c){this.m().f(a,b,c)};D.Ea=function(a,b,c){this.m().o(a,b,c)};D.ta=function(a,b){return this.m().getKey(a,b)};
  D.ua=function(a,b){return this.m().O(a,b)};D.ga=function(a){this.m().M(a)};D.ha=function(a){this.m().N(a)};D.ka=() => new qd;D.X=function(a){a&&this.get(xb)[n](a[C]())};D.ca=function(){this.set(xb,[])};D.Y=function(a){a&&this.get(yb)[n](a[C]())};D.da=function(){this.set(yb,[])};D.$=function(a,b,c,d,e){if(a&&b){a=[a,b[C]()][B](":");if(d||e)a=[a,d,e][B](":");d=this.get(wb);d.splice(c?0:d[v],0,a)}};D.ea=function(){this.set(wb,[])};
  D.ia=function(a){
    this.a[ka]();
    var b=this.get(P);
    var c=Qd(this.a);
    this.set(P,a);this.a.n();Pd(this.a,c);this.set(P,b)
  };D.za=function(a,b){if(0<a&&5>=a&&Ca(b)&&""!=b){var c=this.get(Dc)||[];c[a]=b;this.set(Dc,c)}};D.W=function(a){a=""+a;if(a[oa](/^[A-Za-z0-9]{1,5}$/)){var b=this.get(Ec)||[];b[n](a);this.set(Ec,b)}};D.v=function(){this.a[ka]()};D.Ca=function(a){a&&""!=a&&(this.set(Rb,a),this.a.j("var"))};
  var be=a => {"trans"!==a.get(nc)&&500<=a.b(Zb,0)&&a[ta]();if("event"===a.get(nc)){var b=(new Date).getTime(),c=a.b($b,0),d=a.b(Vb,0),c=l[la](1*((b-(c!=d?c:1E3*c))/1E3));0<c&&(a.set($b,b),a.set(S,l.min(10,a.b(S,0)+c)));0>=a.b(S,0)&&a[ta]()}};
  var de=a => {"event"===a.get(nc)&&a.set(S,l.max(0,a.b(S,10)-1))};
  var ee=function(){var a=[];this.add=(b, c, d) => {d&&(c=G(""+c));a[n](b+"="+c)};this.toString=() => a[B]("&")};
  var fe=(a, b) => {(b||2!=a.get(ub))&&a.z(Zb)};
  var ge=(a, b) => {b.add("utmwv","5.3.4");b.add("utms",a.get(Zb));b.add("utmn",Ea());var c=J[y].hostname;E(c)||b.add("utmhn",c,h);c=a.get(sb);100!=c&&b.add("utmsp",c,h)};

  var he=(a, b) => {b.add("utmac",Da(a.get(N)));a.get(Hc)&&b.add("utmxkey",a.get(Hc),h);a.get(qc)&&b.add("utmni",1);var c=a.get(Ec);c&&0<c[v]&&b.add("utmdid",c[B]("."));
  var c=(a, b) => {b&&d[n](a+"="+b+";")},d=[];c("__utma",Vc(a));c("__utmz",$c(a,k));c("__utmv",Yc(a,h));c("__utmx",Qd(a));b.add("utmcc",d[B]("+"),h);L.w&&b.add("aip",1);b.add("utmu",gd.Ya())};

  var ie=(a, b) => {for(var c=a.get(Dc)||[],d=[],e=1;e<c[v];e++)c[e]&&d[n](e+":"+G(c[e][o](/%/g,"%25")[o](/:/g,"%3A")[o](/,/g,"%2C")));d[v]&&b.add("utmpg",d[B](","))};

  var je=(a, b) => {a.get(gb)&&(b.add("utmcs",a.get(Mb),h),b.add("utmsr",a.get(Hb)),a.get(Nb)&&b.add("utmvp",a.get(Nb)),b.add("utmsc",a.get(Ib)),b.add("utmul",
  a.get(Lb)),b.add("utmje",a.get(Jb)),b.add("utmfl",a.get(Kb),h))};

  var ke=(a, b) => {a.get(jb)&&a.get(Eb)&&b.add("utmdt",a.get(Eb),h);b.add("utmhid",a.get(Gb));b.add("utmr",Pa(a.get(Fb),a.get(P)),h);b.add("utmp",G(a.get(Db),h),h)};

  var le=(a, b) => {for(var c=a.get(Ab),d=a.get(Bb),e=a.get(Q)||[],f=0;f<e[v];f++){var i=e[f];i&&(c||(c=new qd),c.f(8,f,i[q]),c.f(9,f,i[na]),3!=i[ua]&&c.f(11,f,""+i[ua]))}!E(a.get(rc))&&!E(a.get(sc),h)&&(c||(c=new qd),c.f(5,1,a.get(rc)),c.f(5,2,a.get(sc)),e=a.get(tc),e!=g&&c.f(5,
  3,e),e=a.get(uc),e!=g&&c.o(5,1,e));c?b.add("utme",c.Ra(d),h):d&&b.add("utme",d.A(),h)};

  var me=(a, b, c) => {var d=new ee;fe(a,c);ge(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",b.total_,h);d.add("utmttx",b.tax_,h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);(b=a.get(Cb))&&d.add("utmcu",b,h);c||(ie(a,d),he(a,d));return d[u]()};

  var ne=(a, b, c) => {var d=new ee;fe(a,c);ge(a,d);d.add("utmt",
  "item");d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);(b=a.get(Cb))&&d.add("utmcu",b,h);c||(ie(a,d),he(a,d));return d[u]()};

  var oe=(a, b) => {var c=a.get(nc);if("page"==c)c=new ee,fe(a,b),ge(a,c),le(a,c),je(a,c),ke(a,c),b||(ie(a,c),he(a,c)),c=[c[u]()];else if("event"==c)c=new ee,fe(a,b),ge(a,c),c.add("utmt","event"),le(a,c),je(a,c),ke(a,c),b||(ie(a,c),he(a,c)),c=[c[u]()];else if("var"==
  c)c=new ee,fe(a,b),ge(a,c),c.add("utmt","var"),!b&&he(a,c),c=[c[u]()];else if("trans"==c)for(var c=[],d=a.get(zb),e=0;e<d[v];++e){c[n](me(a,d[e],b));for(var f=d[e].items_,i=0;i<f[v];++i)c[n](ne(a,f[i],b))}else"social"==c?b?c=[]:(c=new ee,fe(a,b),ge(a,c),c.add("utmt","social"),c.add("utmsn",a.get(vc),h),c.add("utmsa",a.get(wc),h),c.add("utmsid",a.get(xc),h),le(a,c),je(a,c),ke(a,c),ie(a,c),he(a,c),c=[c[u]()]):c=[];return c};

  var ce=a => {var b,c=a.get(ub),d=a.get(pc),e=d&&d.Va,f=0;if(0==c||2==c){var i=
  a.get(tb)+"?";b=oe(a,h);for(var m=0,r=b[v];m<r;m++)Ta(b[m],e,i,h),f++}if(1==c||2==c){b=oe(a);m=0;for(r=b[v];m<r;m++)try{Ta(b[m],e),f++}catch(s){s&&Ra(s[q],g,s.message)}}d&&(d.q=f)};

  var pe=() => "https:"==J[y][z]||L.H?"https://ssl.google-analytics.com":"http://www.google-analytics.com";
  var qe=function(a){ha(this,"len");this.message=a+"-8192"};
  var re=function(a){ha(this,"ff2post");this.message=a+"-2036"};

  var Ta=(a, b, c, d) => {b=b||Fa;if(d||2036>=a[v]){var e=b,b=c||pe()+"/__utm.gif?",f=new Image(1,1);f.src=b+a;f.onload=() => {f.onload=j;f.onerror=j;e()};f.onerror=() => {f.onload=j;f.onerror=j;e()}}else if(8192>=a[v]){var i=b;if(0<=W[za].userAgent[p]("Firefox")&&![].reduce)throw new re(a[v]);
  var m,b=pe()+"/p/__utm.gif";if(c=W.XDomainRequest)m=new c,m.open("POST",b);else if(c=W.XMLHttpRequest)c=new c,"withCredentials"in c&&(m=c,m.open("POST",b,h),m.setRequestHeader("Content-Type","text/plain"));m?(m.onreadystatechange=() => {4==m.readyState&&(i(),m=j)},m.send(a),b=h):b=g;b||se(a,i)}else throw new qe(a[v]);};

  var se=(a, b) => {if(J.body){a=aa(a);try{var c=J[qa]('<iframe name="'+a+'"></iframe>')}catch(d){c=J[qa]("iframe"),ha(c,a)}c.height="0";c.width="0";c.style.display="none";c.style.visibility=
  "hidden";var e=J[y],e=pe()+"/u/post_iframe.html#"+aa(e[z]+"//"+e[t]+"/favicon.ico"),f=() => {c.src="";c.parentNode&&c.parentNode.removeChild(c)};Ga(W,"beforeunload",f);var i=k,m=0,r=() => {if(!i){try{if(9<m||c.contentWindow[y][t]==J[y][t]){i=h;f();Ha(W,"beforeunload",f);b();return}}catch(a){}m++;fa(r,200)}};Ga(c,"load",r);J.body.appendChild(c);c.src=e}else fa(() => {se(a,b)},100)};

  var $=function(){this.H=this.w=k;this.D={};this.F=[];this.V=0;this.T=[["www.google-analytics.com","","/plugins/"]];this._gasoCPath=this._gasoDomain=g;var a=(a, c, d) => {T($[w],a,c,d)};a("_createTracker",$[w].r,55);a("_getTracker",$[w].pa,0);a("_getTrackerByName",$[w].u,51);a("_getTrackers",$[w].qa,130);a("_anonymizeIp",$[w].ba,16);a("_forceSSL",$[w].ma,125);a("_getPlugin",Ic,120);a=(a, c, d) => {T(U[w],a,c,d)};Jc("_getName",Ya,58);Jc("_getAccount",N,64);Jc("_visitCode",R,54);Jc("_getClientInfo",
  gb,53,1);Jc("_getDetectTitle",jb,56,1);Jc("_getDetectFlash",hb,65,1);Jc("_getLocalGifPath",tb,57);Jc("_getServiceMode",ub,59);V("_setClientInfo",gb,66,2);V("_setAccount",N,3);V("_setNamespace",Xa,48);V("_setAllowLinker",db,11,2);V("_setDetectFlash",hb,61,2);V("_setDetectTitle",jb,62,2);V("_setLocalGifPath",tb,46,0);V("_setLocalServerMode",ub,92,g,0);V("_setRemoteServerMode",ub,63,g,1);V("_setLocalRemoteServerMode",ub,47,g,2);V("_setSampleRate",sb,45,1);V("_setCampaignTrack",ib,36,2);V("_setAllowAnchor",
  eb,7,2);V("_setCampNameKey",lb,41);V("_setCampContentKey",qb,38);V("_setCampIdKey",kb,39);V("_setCampMediumKey",ob,40);V("_setCampNOKey",rb,42);V("_setCampSourceKey",nb,43);V("_setCampTermKey",pb,44);V("_setCampCIdKey",mb,37);V("_setCookiePath",P,9,0);V("_setMaxCustomVariables",vb,0,1);V("_setVisitorCookieTimeout",ab,28,1);V("_setSessionCookieTimeout",bb,26,1);V("_setCampaignCookieTimeout",cb,29,1);V("_setReferrerOverride",Fb,49);V("_setSiteSpeedSampleRate",yc,132);a("_trackPageview",U[w].Ga,1);a("_trackEvent",
  U[w].G,4);a("_trackPageLoadTime",U[w].Fa,100);a("_trackSocial",U[w].Ha,104);a("_trackTrans",U[w].Ja,18);a("_sendXEvent",U[w].t,78);a("_createEventTracker",U[w].ja,74);a("_getVersion",U[w].ra,60);a("_setDomainName",U[w].C,6);a("_setAllowHash",U[w].wa,8);a("_getLinkerUrl",U[w].oa,52);a("_link",U[w].link,101);a("_linkByPost",U[w].va,102);a("_setTrans",U[w].Aa,20);a("_addTrans",U[w].aa,21);a("_addItem",U[w].Z,19);a("_clearTrans",U[w].fa,105);a("_setTransactionDelim",U[w].Ba,82);a("_setCustomVar",U[w].xa,
  10);a("_deleteCustomVar",U[w].la,35);a("_getVisitorCustomVar",U[w].sa,50);a("_setXKey",U[w].Da,83);a("_setXValue",U[w].Ea,84);a("_getXKey",U[w].ta,76);a("_getXValue",U[w].ua,77);a("_clearXKey",U[w].ga,72);a("_clearXValue",U[w].ha,73);a("_createXObj",U[w].ka,75);a("_addIgnoredOrganic",U[w].X,15);a("_clearIgnoredOrganic",U[w].ca,97);a("_addIgnoredRef",U[w].Y,31);a("_clearIgnoredRef",U[w].da,32);a("_addOrganic",U[w].$,14);a("_clearOrganic",U[w].ea,70);a("_cookiePathCopy",U[w].ia,30);a("_get",U[w].na,
  106);a("_set",U[w].ya,107);a("_addEventListener",U[w].addEventListener,108);a("_removeEventListener",U[w].removeEventListener,109);a("_addDevId",U[w].W);a("_getPlugin",Ic,122);a("_setPageGroup",U[w].za,126);a("_trackTiming",U[w].Ia,124);a("_initData",U[w].v,2);a("_setVar",U[w].Ca,22);V("_setSessionTimeout",bb,27,3);V("_setCookieTimeout",cb,25,3);V("_setCookiePersistence",ab,24,1);a("_setAutoTrackOutbound",Fa,79);a("_setTrackOutboundSubdomains",Fa,81);a("_setHrefExamineLimit",Fa,80)};D=$[w];
  D.pa=function(a,b){return this.r(a,g,b)};D.r=(a, b, c) => {b&&H(23);c&&H(67);b==g&&(b="~"+L.V++);a=new U(b,a,c);L.D[b]=a;L.F[n](a);return a};D.u=a => {a=a||"";return L.D[a]||L.r(g,a)};D.qa=() => L.F[ja](0);D.ba=function(){this.w=h};D.ma=function(){this.H=h};var te=a => {if("prerender"==J.webkitVisibilityState)return k;a();return h};var L=new $;var ue=W._gat;ue&&Ba(ue._getTracker)?L=ue:W._gat=L;var Z=new Y;var ve=() => {
    var a=W._gaq;
    var b=k;
    if(a&&Ba(a[n])&&(b="[object Array]"==Object[w][u].call(Object(a)),!b)){Z=a;return}W._gaq=Z;b&&Z[n][ya](Z,a)
  };if(!te(ve)){
    H(123);
    var we=k;
    var xe=() => {!we&&te(ve)&&(we=h,Ha(J,"webkitvisibilitychange",xe))};
    Ga(J,"webkitvisibilitychange",xe)
  }
}))();
