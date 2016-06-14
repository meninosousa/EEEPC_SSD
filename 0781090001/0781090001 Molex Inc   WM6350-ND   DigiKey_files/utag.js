//tealium universal tag - utag.loader ut4.003.201407312138, Copyright 2014 Tealium.com Inc. All Rights Reserved. 
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_digikey_main=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/") === -1) {ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/digikey/main/prod/';}}})();}catch(e){};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"digikey.main",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      ft: 0,
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d) {
        utag.DB('WQ:' + utag.loader.wq.length);
        c = true;
        try {
          utag.loader.GET()
        } catch (e) {};
        var lq = [];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load>0&&b.send) {
            c = false;
            utag.send[b.id] = b;
          }
	  if(b.load!=0&&b.load!=4){
	    lq.push(b);
            this.f[b.id] = 0;
	  }
        }
        if (c) {
          d = false;
          for (b in utag.loader.GV(utag.send)) d = true;
          if (c && d) this.LOAD('WAIT_FORCE');
        }
        this.wq = [];
        for (a = 0; a < lq.length; a++) {
          utag.DB('utag.loader.WAIT: loading ' + lq[a].id);
          utag.loader.AS(lq[a])
        }
        if(lq.length==0)utag.handler.INIT();
      },
      AS: function(a, b, c, d) {
        utag.sender[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'utag.' + a.id + '.js')
        }
        if (utag.cfg.v) a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + utag.cfg.v;
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        if (a.load == 2) {
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
        } else if(a.load==1||a.load==3) {
          if (b.createElement) {
            c = 'utag_digikey.main_'+a.id;
            if (!b.getElementById(c)) {
              if (a.load == 3) {
                d = b.createElement('iframe');
                d.setAttribute('height', '1');
                d.setAttribute('width', '1');
                d.setAttribute('style', 'display:none');
                d.setAttribute('src', a.src)
              } else {
                d = b.createElement('script');
                d.language = 'javascript';
                d.type = 'text/javascript';
                d.src = a.src;
              }
 	      d.id = c;
              b.getElementsByTagName('head')[0].appendChild(d)
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      RD: function(o, a, b, c, d, e, f, g) {
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          if (a[b].name && a[b].name != "") o["meta." + a[b].name.toLowerCase()] = a[b].content.toLowerCase();
        }
        a = location.search.toLowerCase();
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            o["qp." + c[0]] = unescape(c[1])
          }
        }
        a = (new Date()).getTime();
        b = utag.loader.RC();
        c = a + parseInt(utag.cfg.session_timeout);
        d = a + (Math.ceil(Math.random() * 1000000));
        if ((b.utag_main && (typeof b.utag_main._st == "undefined" || (typeof b.utag_main._st != "undefined" && parseInt(b.utag_main._st) < a))) || !b.utag_main) {
          if (b.utag_main) {
            b.utag_main._st = c;
            b.utag_main.ses_id = d;
          } else {
            b.utag_main = {
              _st: c,
              ses_id: d
            }
          }
          utag.loader.SC("utag_main", {
            "_st": c,
            "ses_id": d + ";exp-session"
          });
        } else {
          utag.loader.SC("utag_main", {
            "_st": c
          })
        }
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
        o["dom.referrer"] = eval("document." + "referrer");
        o["dom.title"] = "" + document.title;
        o["dom.domain"] = "" + location.hostname;
        o["dom.query_string"] = "" + (location.search).substring(1);
        o["dom.url"] = "" + document.URL;
        o["dom.pathname"] = "" + location.pathname;
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        for (c = 0; c < b.length; c++) {
          if (b[c].match(/^(.*?)=(.*)$/)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
	  try{e = decodeURIComponent(cv); }catch(er){e=""};
          if (typeof ck!="undefined" && (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0)) {
            e = e.split("$");
            g = [];
            j = {};
            for (f = 0; f < e.length; f++) {
              try{
                g = e[f].split(":");
                if (g.length > 2) {
                  g[1] = g.slice(1).join(":");
                }
                v = "";
                if (("" + g[1]).indexOf("~") == 0) {
                  h = g[1].substring(1).split("|");
                  for (i = 0; i < h.length; i++) h[i] = decodeURIComponent(h[i]);
                  v = h
                } else v = decodeURIComponent(g[1]);
                j[g[0]] = v;
              }catch(er){};
            }
            o[ck] = {};
            e = (new Date()).getTime();
            for (f in utag.loader.GV(j)) {
              if (j[f] instanceof Array) {
                n = [];
                for (m = 0; m < j[f].length; m++) {
                  if (j[f][m].match(/^(.*);exp-(.*)$/)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : e - 1) : parseInt(RegExp.$2);
                    if (k > e) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                  }
                }
                j[f] = n.join("|");
              } else {
                j[f] = "" + j[f];
                if (j[f].match(/^(.*);exp-(.*)$/)) {
                  k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : e - 1) : parseInt(RegExp.$2);
                  j[f] = (k < e) ? null : (x == 0 ? j[f] : RegExp.$1);
                }
              }
              if (j[f]) o[ck][f] = j[f];
            }
          } else if (utag.cl[ck] || utag.cl['_all_']) {
            o[ck] = e
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        v = "";
        x = "Thu, 31 Dec 2099 00:00:00 GMT";
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = (new Date()).getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push(g + ":" + encodeURIComponent(d[g]))
          };
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        utag.DB('utag.loader.LOAD:' + a);
        if (this.f[a] == 0) {
          utag.DB('utag.loader.LOAD:add sender-' + a);
          this.f[a] = 1;
          if (utag.loader.wq.length > 0) return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0) return
          };
          utag.DB('CLEAR FORCE');
          clearTimeout(utag.loader.ft);
          utag.DB('utag.handler.INIT');
          utag.handler.INIT()
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if (document.readyState === "complete") setTimeout(c, 1);
          else {
            var RH;
            if (document.addEventListener) {
              RH = function() {
                document.removeEventListener("DOMContentLoaded", RH, false);
                c()
              };
              document.addEventListener("DOMContentLoaded", RH, false);
              window.addEventListener("load", c, false);
            } else if (document.attachEvent) {
              RH = function() {
                if (document.readyState === "complete") {
                  document.detachEvent("onreadystatechange", RH);
                  c()
                }
              }
              document.attachEvent("onreadystatechange", RH);
              window.attachEvent("onload", c);
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      }
    },
    DB: function(a, b) {
      try {
        b = document.cookie;
        if (b.indexOf('utagdb=true') >= 0) console.log(a)
      } catch (e) {}
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]));
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')));
      }
    },
    view: function(a,c) {
      return this.track('view',a,c);
    },
    link: function(a,c) {
      return this.track('link',a,c);
    },
    track: function(a,b,c) {
      for(var i in utag.loader.GV(utag.o)){
        try{utag.o[i].handler.trigger(a,b)}catch(e){};
      }
      if(c)try{c()}catch(e){};
      return true;
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b)
          }
        }
	if(utag.cfg.noview!=true)utag.handler.trigger('view', utag.data);
      },
      test: function() {
        return 1
      },
      trigger: function(a, b, c, d) {
        b = b || {};
        if (!this.iflag) {
          utag.loader.q.push({
            a: a,
            b: b
          });
          return;
        }
        for (c in utag.loader.GV(this.df)) {
          if (typeof this.df[c] != "function" && typeof b[c] == "undefined") b[c] = this.df[c]
        }
        for (c = 0; c < this.extend.length; c++) {
          try {
            this.extend[c](a, b);
            utag.rpt['ex_' + c] = 0
          } catch (e) {
            utag.rpt['ex_' + c] = 1;
	    if(typeof utag_err!="undefined"){utag_err.push({e:e.message,s:utag.cfg.path+'utag.js',l:c,t:'ge'})};
          }
        };
        for (c in utag.loader.GV(utag.send)) {
          if (typeof utag.sender[c] != "undefined") {
            try {
              utag.sender[c].send(a, utag.handler.C(b));
              utag.rpt['s_' + c] = 0
            } catch (e) {
              utag.rpt['s_' + c] = 1
            };
            utag.rpt.ts['s'] = new Date();
            utag.RP(utag.rpt);
          }
        }
        c = this.base.split(",");
        for (d = 0; d < c.length; d++) {
          if (typeof b[c[d]] != "undefined") this.df[c[d]] = b[c[d]]
        };
	for(d in utag.loader.GV(b)){if(d.indexOf('dom.')==0)this.df[d]=b[d]};
        this.o = b;
	
      },
      C: function(a, b, c, d) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if (typeof a[c] != "function") b[c] = a[c]
        }
        return b
      }
    }
  };
  utag.o['digikey.main']=utag;
  utag.cfg = {
    v: "ut4.003.201407312138",
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    forcetimeout: 3000,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/digikey/main/prod/",
    utid: "digikey/main/201407311541"
  };utag.cond={10:0,11:0,12:0,13:0,14:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,26:0,27:0,2:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,3:0,8:0,9:0};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function() {try{utag.cond[10]|=(utag.data['dom.pathname'].toString().toLowerCase().indexOf('shipping.aspx'.toLowerCase())>-1)}catch(e){};try{utag.cond[11]|=(utag.data['dom.pathname'].toString().toLowerCase().indexOf('billing.aspx'.toLowerCase())>-1)}catch(e){};try{utag.cond[12]|=(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.com'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.com'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='ordering.digikey.com'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='localhost'.toLowerCase())}catch(e){};try{utag.cond[13]|=(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.com'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.ca'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.co.uk'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.co.nz'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.com.mx'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='www.digikey.com.au'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.com'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.ca'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.co.uk'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.co.nz'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.com.mx'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='digikeytest.digikey.com.au'.toLowerCase())||(utag.data['dom.domain'].toString().toLowerCase()=='ordering.digikey.com'.toLowerCase())}catch(e){};try{utag.cond[14]|=(utag.data['page_type']!='Homepage')}catch(e){};try{utag.cond[16]|=(utag.data['dom.domain'].toString().indexOf('.ca')>-1)}catch(e){};try{utag.cond[17]|=(utag.data['dom.domain'].toString().indexOf('co.uk')>-1)}catch(e){};try{utag.cond[18]|=(utag.data['dom.domain'].toString().indexOf('.au')>-1)}catch(e){};try{utag.cond[19]|=(utag.data['dom.domain'].toString().indexOf('.fr')>-1)}catch(e){};try{utag.cond[2]|=(utag.data['page_title']=='Order Confirmation')}catch(e){};try{utag.cond[20]|=(utag.data['dom.domain'].toString().indexOf('.ie')>-1)}catch(e){};try{utag.cond[21]|=(utag.data['dom.domain'].toString().indexOf('.nz')>-1)}catch(e){};try{utag.cond[22]|=(utag.data['dom.domain'].toString().indexOf('.de')>-1)}catch(e){};try{utag.cond[23]|=(utag.data['dom.domain'].toString().indexOf('.jp')>-1)}catch(e){};try{utag.cond[26]|=(utag.data['dom.domain'].toString().indexOf('at')>-1)}catch(e){};try{utag.cond[27]|=(utag.data['dom.domain'].toString().indexOf('.kr')>-1)}catch(e){};try{utag.cond[3]|=(utag.data['dom.pathname']=='/')||(utag.data['page_type']=='Homepage')}catch(e){};try{utag.cond[32]|=(typeof utag.data['wt_use_udo']!='undefined')}catch(e){};try{utag.cond[33]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('digikey.nl'.toLowerCase())>-1)}catch(e){};try{utag.cond[34]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('digikey.tw'.toLowerCase())>-1)}catch(e){};try{utag.cond[35]|=(utag.data['dom.domain'].toString().indexOf('digikey.it')>-1)}catch(e){};try{utag.cond[36]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('digikey.be'.toLowerCase())>-1)}catch(e){};try{utag.cond[37]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('digikey.es'.toLowerCase())>-1)}catch(e){};try{utag.cond[38]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('digikey.com.mx'.toLowerCase())>-1)}catch(e){};try{utag.cond[39]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('digikey.hk'.toLowerCase())>-1)}catch(e){};try{utag.cond[8]|=(utag.data['page_title']!='Order Confirmation')}catch(e){};try{utag.cond[9]|=(utag.data['dom.domain'].toString().toLowerCase().indexOf('www.digikey.kr'.toLowerCase())>-1)||(utag.data['dom.domain'].toString().toLowerCase().indexOf('www.digikey.cn'.toLowerCase())>-1)}catch(e){};};utag.pre=function() {    utag.loader.initdata();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();        };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b,c,d){
  b._ccity='';
  b._ccountry='';
  b._ccurrency=(typeof b['order_currency']!='undefined')?b['order_currency']:'';
  b._ccustid='';
  b._corder=(typeof b['order_id']!='undefined')?b['order_id']:'';
  b._cpromo='';
  b._cship='';
  b._cstate='';
  b._cstore='';
  b._csubtotal=(typeof b['order_subtotal']!='undefined')?b['order_subtotal']:'';
  b._ctax='';
  b._ctotal=(typeof b['order_subtotal']!='undefined')?b['order_subtotal']:'';
  b._ctype='';
  b._czip='';
  b._cprod=(typeof b['product_sku']!='undefined'&&b['product_sku'].length>0)?b['product_sku']:[];
  b._cprodname=[];
  b._cbrand=[];
  b._ccat=[];
  b._ccat2=[];
  b._cquan=(typeof b['product_quantity']!='undefined'&&b['product_quantity'].length>0)?b['product_quantity']:[];
  b._cprice=(typeof b['product_price']!='undefined'&&b['product_price'].length>0)?b['product_price']:[];
  b._csku=(typeof b['product_sku']!='undefined'&&b['product_sku'].length>0)?b['product_sku']:[];
  b._cpdisc=[];
  if(b._cprod.length==0){b._cprod=b._csku.slice()};
  if(b._cprodname.length==0){b._cprodname=b._csku.slice()};
  function tf(a){if(a=='' || isNaN(parseFloat(a))){return a}else{return (parseFloat(a)).toFixed(2)}};
  b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};
},
function(a,b,c,d,e,f,g){d=b['meta.wt.z_lang'];if(typeof d=='undefined')return;c=[{'zhs':'zh'},{'zht':'zh'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['meta.wt.z_lang']=c[e][f];m=true};};if(m)break};},
function(a,b){if(1){b['dc_quan']='1'}}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"4":{load:utag.cond[2],send:1,wait:1,tid:4001},"6":{load:(utag.cond[3] && utag.cond[12]),send:1,wait:1,tid:7050},"8":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"9":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"10":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"46":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"24":{load:(utag.cond[10] && utag.cond[12]),send:1,wait:1,tid:7050},"25":{load:(utag.cond[11] && utag.cond[12]),send:1,wait:1,tid:7050},"31":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"47":{load:utag.cond[2],send:1,wait:1,tid:1134},"48":{load:utag.cond[8],send:1,wait:1,tid:1134},"13":{load:(utag.cond[2] && utag.cond[13]),send:1,wait:1,tid:12006},"14":{load:(utag.cond[13] && utag.cond[8] && utag.cond[14]),send:1,wait:1,tid:12006},"22":{load:(utag.cond[8] && utag.cond[9]),send:1,wait:1,tid:23015},"23":{load:(utag.cond[2] && utag.cond[9]),send:1,wait:1,tid:23015},"44":{load:utag.cond[12],send:1,wait:1,tid:7114},"49":{load:(utag.cond[2] && utag.cond[17]),send:1,wait:1,tid:7050},"57":{load:(utag.cond[16] && utag.cond[2]),send:1,wait:1,tid:7050},"51":{load:utag.cond[2],send:1,wait:1,tid:7050},"53":{load:(utag.cond[18] && utag.cond[2]),send:1,wait:1,tid:7050},"52":{load:(utag.cond[2] && utag.cond[22]),send:1,wait:1,tid:7050},"54":{load:(utag.cond[2] && utag.cond[19]),send:1,wait:1,tid:7050},"55":{load:(utag.cond[2] && utag.cond[21]),send:1,wait:1,tid:7050},"56":{load:(utag.cond[2] && utag.cond[20]),send:1,wait:1,tid:7050},"73":{load:(utag.cond[2] && utag.cond[23]),send:1,wait:1,tid:7050},"74":{load:utag.cond[16],send:1,wait:1,tid:7114},"75":{load:utag.cond[17],send:1,wait:1,tid:7114},"80":{load:utag.cond[32],send:1,wait:1,tid:23001},"87":{load:(utag.cond[2] && utag.cond[26]),send:1,wait:1,tid:7050},"88":{load:(utag.cond[2] && utag.cond[27]),send:1,wait:1,tid:7050},"89":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"90":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:7050},"93":{load:(utag.cond[2] && utag.cond[16]),send:1,wait:1,tid:15022},"98":{load:(utag.cond[33] && utag.cond[2]),send:1,wait:1,tid:7050},"99":{load:(utag.cond[2] && utag.cond[34]),send:1,wait:1,tid:7050},"100":{load:(utag.cond[35] && utag.cond[2]),send:1,wait:1,tid:7050},"105":{load:(utag.cond[2] && utag.cond[12]),send:1,wait:1,tid:15022},"107":{load:utag.cond[23],send:1,wait:1,tid:7114},"108":{load:utag.cond[22],send:1,wait:1,tid:7114},"109":{load:utag.cond[27],send:1,wait:1,tid:7114},"111":{load:(utag.cond[2] && utag.cond[36]),send:1,wait:1,tid:7050},"112":{load:(utag.cond[2] && utag.cond[37]),send:1,wait:1,tid:7050},"113":{load:(utag.cond[38] && utag.cond[2]),send:1,wait:1,tid:7050},"114":{load:(utag.cond[39] && utag.cond[2]),send:1,wait:1,tid:7050},"116":{load:(utag.cond[2] && utag.cond[27]),send:1,wait:1,tid:7050}};
utag.loader.cfgsort=["4","6","8","9","10","46","24","25","31","47","48","13","14","22","23","44","49","57","51","53","52","54","55","56","73","74","75","80","87","88","89","90","93","98","99","100","105","107","108","109","111","112","113","114","116"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i];};
  utag.loader.SETFORCE = function(a) {
    utag.DB('SETFORCE:' + a);
    if (utag.loader.ft > 0) clearTimeout(utag.loader.ft);
    utag.loader.ft = (utag.cfg.forcetimeout != 0) ? setTimeout(utag.loader.FORCE, utag.cfg.forcetimeout) : 0
  }
  utag.loader.FORCE = function(a, b, c, d) {
    a = utag.sender;
    b = utag.loader.f;
    utag.DB('FORCE');
    for (c in utag.loader.GV(b)) {
      d = a[c].id;
      if (typeof b[c] != 'undefined' && b[c] == 0) {
        utag.DB('FORCEERROR:' + d);
        utag.rpt['f_' + d] = 1;
	if(typeof utag_err!="undefined"){utag_err.push({e:'load error',s:utag.cfg.path+'utag.'+d+'.js',l:0,t:'le'})};
        delete utag.sender[d];
        delete utag.send[d];
        utag.loader.LOAD(d)
      }
    }
  }
  utag.loader.INIT = function(a, b, c, d) {
    if (this.ol == 1) return -1;
    else this.ol = 1;
    utag.rpt.ts['i'] = new Date();
    if (!utag.cfg.noload) {
      try {
        this.GET()
      } catch (e) {};
      var lq = [];
      for (a in this.GV(this.cfg)) {
        b = this.cfg[a];
        b.id = a;
        if (b.wait == 1) {
          this.wq.push(b)
        } else if (b.load > 0) {
          if (b.send) {
            c = false;
            utag.send[b.id] = b;
          }
	  if(b.load!=4){
	    lq.push(b);
            this.f[b.id] = 0;
	  }
        }
      }
      for (a = 0; a < lq.length; a++) {
        utag.DB('utag.loader.INIT: loading ' + b.id);
        utag.loader.AS(lq[a])
      }
      if (utag.loader.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
	if(utag.loader.rf==0){
	  utag.loader.rf=1;
	  utag.loader.WQ();
	  utag.loader.SETFORCE('WAIT')
	}
      });
      else if(lq.length==0)utag.handler.INIT();
      else utag.loader.SETFORCE('INIT')
    }
    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{if(typeof utag.runonce=='undefined')utag.runonce={};utag.jdh=function(h,i,j,k){h=utag.jdhc.length;if(h==0)window.clearInterval(utag.jdhi);else{for(i=0;i<h;i++){j=utag.jdhc[i];k=jQuery(j.i).is(":visible")?1:0;if(k!=j.s){if(j.e==(j.s=k))jQuery(j.i).trigger(j.e?"afterShow":"afterHide")}}}};utag.jdhi=window.setInterval(utag.jdh, 250);utag.jdhc=[];
if(typeof utag.runonce[88]=='undefined'){utag.runonce[88]=1;jQuery(document.body).on('mousedown','a[href*=".xls"],a[href*=".doc"],a[href*=".pdf"],a[href*=".txt"],a[href*=".csv"],a[href*=".zip"],a[href*=".ppt"],a[href*=".swf"],a[href*=".pps"]', function(e){utag.link({ page_site:utag.data['page_site'],page_language:utag.data['page_language'],wt_dl:'20',link_domain:this.hostname,link_uri:this.pathname,link_query:this.search,page_title:'Download:'+this.text,link_referrer_url:utag.data['dom.url'] })});}

}catch(e){};
try{
if(typeof utag.runonce[119]=='undefined'){utag.runonce[119]=1;jQuery(document.body).on('mousedown','a[track-event]', function(e){var data = {};
data['page_site'] = utag.data['page_site'];
data['page_language'] = utag.data['page_language'];
data['ref_page_type'] = utag.data['page_type'];
data['ref_page_sub_type'] = utag.data['page_sub_type'];
data['ref_page_id'] = utag.data['page_id'];
data['ref_page_event'] = $(this).attr("track-event");
data['link_domain'] = this.hostname;
data['link_uri'] = this.pathname;
data['link_query'] = this.search;
data['link_referrer_url'] = utag.data['dom.url'];
data['wt_dl'] = "2";
if ($(this).is("[track-data]")) {
  var kvs = $(this).attr("track-data").split(';');
  for (var i = 0; i < kvs.length; i++) {
    var pair = kvs[i].split('=');
    data[pair[0]] = pair[1];
  }
}
utag.view(data);});}

}catch(e){};}})

  utag.cfg.readywait ? utag.loader.EV('', 'ready', function(a) {
    if(utag.loader.rf==0){
      utag.loader.rf=1;
      utag.DB('READY');
      utag.loader.INIT()
    }
  }) : utag.loader.INIT();
}
