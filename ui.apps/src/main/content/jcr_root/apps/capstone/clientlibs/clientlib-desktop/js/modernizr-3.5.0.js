/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-hsla-inlinesvg-input-inputtypes-multiplebgs-opacity-rgba-svg-svgclippaths-textshadow-video-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!(function (e, t, n) {
    function r(e, t) {
        return typeof e === t;
    }
    function a() {
        var e, t, n, a, o, i, s;
        for (var l in T)
            if (T.hasOwnProperty(l)) {
                if (((e = []), (t = T[l]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
                    (i = e[o]),
                        (s = i.split(".")),
                        1 === s.length ? (Modernizr[s[0]] = a) : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), (Modernizr[s[0]][s[1]] = a)),
                        x.push((a ? "" : "no-") + s.join("-"));
            }
    }
    function o(e) {
        var t = S.className,
            n = Modernizr._config.classPrefix || "";
        if ((E && (t = t.baseVal), Modernizr._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        Modernizr._config.enableClasses && ((t += " " + n + e.join(" " + n)), E ? (S.className.baseVal = t) : (S.className = t));
    }
    function i(e, t) {
        if ("object" == typeof e) for (var n in e) P(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                a = Modernizr[r[0]];
            if ((2 == r.length && (a = a[r[1]]), "undefined" != typeof a)) return Modernizr;
            (t = "function" == typeof t ? t() : t),
                1 == r.length ? (Modernizr[r[0]] = t) : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), (Modernizr[r[0]][r[1]] = t)),
                o([(t && 0 != t ? "" : "no-") + r.join("-")]),
                Modernizr._trigger(e, t);
        }
        return Modernizr;
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function l(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function c(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function u() {
        var e = t.body;
        return e || ((e = s(E ? "svg" : "body")), (e.fake = !0)), e;
    }
    function d(e, n, r, a) {
        var o,
            i,
            l,
            c,
            d = "modernizr",
            f = s("div"),
            p = u();
        if (parseInt(r, 10)) for (; r--; ) (l = s("div")), (l.id = a ? a[r] : d + (r + 1)), f.appendChild(l);
        return (
            (o = s("style")),
            (o.type = "text/css"),
            (o.id = "s" + d),
            (p.fake ? p : f).appendChild(o),
            p.appendChild(f),
            o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(t.createTextNode(e)),
            (f.id = d),
            p.fake && ((p.style.background = ""), (p.style.overflow = "hidden"), (c = S.style.overflow), (S.style.overflow = "hidden"), S.appendChild(p)),
            (i = n(f, e)),
            p.fake ? (p.parentNode.removeChild(p), (S.style.overflow = c), S.offsetHeight) : f.parentNode.removeChild(f),
            !!i
        );
    }
    function f(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    function p(e, t, n) {
        var a;
        for (var o in e) if (e[o] in t) return n === !1 ? e[o] : ((a = t[e[o]]), r(a, "function") ? f(a, n || t) : a);
        return !1;
    }
    function m(e) {
        return e
            .replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function g(t, n, r) {
        var a;
        if ("getComputedStyle" in e) {
            a = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== a) r && (a = a.getPropertyValue(r));
            else if (o) {
                var i = o.error ? "error" : "log";
                o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else a = !n && t.currentStyle && t.currentStyle[r];
        return a;
    }
    function h(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--; ) if (e.CSS.supports(m(t[a]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--; ) o.push("(" + m(t[a]) + ":" + r + ")");
            return (
                (o = o.join(" or ")),
                d("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == g(e, null, "position");
                })
            );
        }
        return n;
    }
    function v(e, t, a, o) {
        function i() {
            d && (delete D.style, delete D.modElem);
        }
        if (((o = r(o, "undefined") ? !1 : o), !r(a, "undefined"))) {
            var u = h(e, a);
            if (!r(u, "undefined")) return u;
        }
        for (var d, f, p, m, g, v = ["modernizr", "tspan", "samp"]; !D.style && v.length; ) (d = !0), (D.modElem = s(v.shift())), (D.style = D.modElem.style);
        for (p = e.length, f = 0; p > f; f++)
            if (((m = e[f]), (g = D.style[m]), c(m, "-") && (m = l(m)), D.style[m] !== n)) {
                if (o || r(a, "undefined")) return i(), "pfx" == t ? m : !0;
                try {
                    D.style[m] = a;
                } catch (y) {}
                if (D.style[m] != g) return i(), "pfx" == t ? m : !0;
            }
        return i(), !1;
    }
    function y(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + q.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? v(s, t, a, o) : ((s = (e + " " + _.join(i + " ") + i).split(" ")), p(s, t, n));
    }
    function b(e, t, r) {
        return y(e, n, n, t, r);
    }
    var x = [],
        T = [],
        w = {
            _version: "3.5.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e]);
                }, 0);
            },
            addTest: function (e, t, n) {
                T.push({ name: e, fn: t, options: n });
            },
            addAsyncTest: function (e) {
                T.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = w), (Modernizr = new Modernizr()), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var C = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = C;
    var S = t.documentElement,
        E = "svg" === S.nodeName.toLowerCase();
    E ||
        !(function (e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return (n.innerHTML = "x<style>" + t + "</style>"), r.insertBefore(n.lastChild, r.firstChild);
            }
            function r() {
                var e = b.elements;
                return "string" == typeof e ? e.split(" ") : e;
            }
            function a(e, t) {
                var n = b.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), (b.elements = n + " " + e), c(t);
            }
            function o(e) {
                var t = y[e[h]];
                return t || ((t = {}), v++, (e[h] = v), (y[v] = t)), t;
            }
            function i(e, n, r) {
                if ((n || (n = t), d)) return n.createElement(e);
                r || (r = o(n));
                var a;
                return (a = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a);
            }
            function s(e, n) {
                if ((e || (e = t), d)) return e.createDocumentFragment();
                n = n || o(e);
                for (var a = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) a.createElement(s[i]);
                return a;
            }
            function l(e, t) {
                t.cache || ((t.cache = {}), (t.createElem = e.createElement), (t.createFrag = e.createDocumentFragment), (t.frag = t.createFrag())),
                    (e.createElement = function (n) {
                        return b.shivMethods ? i(n, e, t) : t.createElem(n);
                    }),
                    (e.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                            r()
                                .join()
                                .replace(/[\w\-:]+/g, function (e) {
                                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
                                }) +
                            ");return n}"
                    )(b, t.frag));
            }
            function c(e) {
                e || (e = t);
                var r = o(e);
                return !b.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || l(e, r), e;
            }
            var u,
                d,
                f = "3.7.3",
                p = e.html5 || {},
                m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                h = "_html5shiv",
                v = 0,
                y = {};
            !(function () {
                try {
                    var e = t.createElement("a");
                    (e.innerHTML = "<xyz></xyz>"),
                        (u = "hidden" in e),
                        (d =
                            1 == e.childNodes.length ||
                            (function () {
                                t.createElement("a");
                                var e = t.createDocumentFragment();
                                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
                            })());
                } catch (n) {
                    (u = !0), (d = !0);
                }
            })();
            var b = {
                elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: f,
                shivCSS: p.shivCSS !== !1,
                supportsUnknownElements: d,
                shivMethods: p.shivMethods !== !1,
                type: "default",
                shivDocument: c,
                createElement: i,
                createDocumentFragment: s,
                addElements: a,
            };
            (e.html5 = b), c(t), "object" == typeof module && module.exports && (module.exports = b);
        })("undefined" != typeof e ? e : this, t);
    var k = "Moz O ms Webkit",
        _ = w._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    w._domPrefixes = _;
    var P;
    !(function () {
        var e = {}.hasOwnProperty;
        P =
            r(e, "undefined") || r(e.call, "undefined")
                ? function (e, t) {
                      return t in e && r(e.constructor.prototype[t], "undefined");
                  }
                : function (t, n) {
                      return e.call(t, n);
                  };
    })(),
        (w._l = {}),
        (w.on = function (e, t) {
            this._l[e] || (this._l[e] = []),
                this._l[e].push(t),
                Modernizr.hasOwnProperty(e) &&
                    setTimeout(function () {
                        Modernizr._trigger(e, Modernizr[e]);
                    }, 0);
        }),
        (w._trigger = function (e, t) {
            if (this._l[e]) {
                var n = this._l[e];
                setTimeout(function () {
                    var e, r;
                    for (e = 0; e < n.length; e++) (r = n[e])(t);
                }, 0),
                    delete this._l[e];
            }
        }),
        Modernizr._q.push(function () {
            w.addTest = i;
        });
    var z = (function () {
        function e(e, t) {
            var a;
            return e
                ? ((t && "string" != typeof t) || (t = s(t || "div")),
                  (e = "on" + e),
                  (a = e in t),
                  !a && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), (a = "function" == typeof t[e]), t[e] !== n && (t[e] = n), t.removeAttribute(e)),
                  a)
                : !1;
        }
        var r = !("onblur" in t.documentElement);
        return e;
    })();
    (w.hasEvent = z),
        Modernizr.addTest("audio", function () {
            var e = s("audio"),
                t = !1;
            try {
                (t = !!e.canPlayType),
                    t &&
                        ((t = new Boolean(t)),
                        (t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")),
                        (t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")),
                        (t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
                        (t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
                        (t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")));
            } catch (n) {}
            return t;
        }),
        Modernizr.addTest("canvas", function () {
            var e = s("canvas");
            return !(!e.getContext || !e.getContext("2d"));
        }),
        Modernizr.addTest("canvastext", function () {
            return Modernizr.canvas === !1 ? !1 : "function" == typeof s("canvas").getContext("2d").fillText;
        }),
        Modernizr.addTest("video", function () {
            var e = s("video"),
                t = !1;
            try {
                (t = !!e.canPlayType),
                    t &&
                        ((t = new Boolean(t)),
                        (t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")),
                        (t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")),
                        (t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")),
                        (t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")),
                        (t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")));
            } catch (n) {}
            return t;
        }),
        Modernizr.addTest("cssgradients", function () {
            for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = C.length - 1; o > a; a++)
                (e = 0 === a ? "to " : ""), (r += t + C[a] + "linear-gradient(" + e + "left top, #9f9, white);");
            Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
            var i = s("a"),
                l = i.style;
            return (l.cssText = r), ("" + l.backgroundImage).indexOf("gradient") > -1;
        }),
        Modernizr.addTest("multiplebgs", function () {
            var e = s("a").style;
            return (e.cssText = "background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(e.background);
        }),
        Modernizr.addTest("opacity", function () {
            var e = s("a").style;
            return (e.cssText = C.join("opacity:.55;")), /^0.55$/.test(e.opacity);
        }),
        Modernizr.addTest("rgba", function () {
            var e = s("a").style;
            return (e.cssText = "background-color:rgba(150,255,150,.5)"), ("" + e.backgroundColor).indexOf("rgba") > -1;
        }),
        Modernizr.addTest("inlinesvg", function () {
            var e = s("div");
            return (e.innerHTML = "<svg/>"), "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
        });
    var N = s("input"),
        R = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        $ = {};
    Modernizr.input = (function (t) {
        for (var n = 0, r = t.length; r > n; n++) $[t[n]] = !!(t[n] in N);
        return $.list && ($.list = !(!s("datalist") || !e.HTMLDataListElement)), $;
    })(R);
    var A = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        j = {};
    (Modernizr.inputtypes = (function (e) {
        for (var r, a, o, i = e.length, s = "1)", l = 0; i > l; l++)
            N.setAttribute("type", (r = e[l])),
                (o = "text" !== N.type && "style" in N),
                o &&
                    ((N.value = s),
                    (N.style.cssText = "position:absolute;visibility:hidden;"),
                    /^range$/.test(r) && N.style.WebkitAppearance !== n
                        ? (S.appendChild(N), (a = t.defaultView), (o = a.getComputedStyle && "textfield" !== a.getComputedStyle(N, null).WebkitAppearance && 0 !== N.offsetHeight), S.removeChild(N))
                        : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? N.checkValidity && N.checkValidity() === !1 : N.value != s)),
                (j[e[l]] = !!o);
        return j;
    })(A)),
        Modernizr.addTest("hsla", function () {
            var e = s("a").style;
            return (e.cssText = "background-color:hsla(120,40%,100%,.5)"), c(e.backgroundColor, "rgba") || c(e.backgroundColor, "hsla");
        });
    var B = "CSS" in e && "supports" in e.CSS,
        L = "supportsCSS" in e;
    Modernizr.addTest("supports", B || L);
    var F = {}.toString;
    Modernizr.addTest("svgclippaths", function () {
        return !!t.createElementNS && /SVGClipPath/.test(F.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
    });
    var M = (function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t
            ? function (e) {
                  var n = t(e);
                  return (n && n.matches) || !1;
              }
            : function (t) {
                  var n = !1;
                  return (
                      d("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                          n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
                      }),
                      n
                  );
              };
    })();
    w.mq = M;
    var O = (w.testStyles = d),
        V = (function () {
            var e = navigator.userAgent,
                t = e.match(/w(eb)?osbrowser/gi),
                n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
            return t || n;
        })();
    V
        ? Modernizr.addTest("fontface", !1)
        : O('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
              var r = t.getElementById("smodernizr"),
                  a = r.sheet || r.styleSheet,
                  o = a ? (a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "") : "",
                  i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
              Modernizr.addTest("fontface", i);
          }),
        O('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (e) {
            Modernizr.addTest("generatedcontent", e.offsetHeight >= 6);
        });
    var q = w._config.usePrefixes ? k.split(" ") : [];
    w._cssomPrefixes = q;
    var H = function (t) {
        var r,
            a = C.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (((t = t.replace(/^@/, "")), (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"), r in o)) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = C[i],
                l = s.toUpperCase() + "_" + r;
            if (l in o) return "@-" + s.toLowerCase() + "-" + t;
        }
        return !1;
    };
    w.atRule = H;
    var U = { elem: s("modernizr") };
    Modernizr._q.push(function () {
        delete U.elem;
    });
    var D = { style: U.elem.style };
    Modernizr._q.unshift(function () {
        delete D.style;
    });
    var I = (w.testProp = function (e, t, r) {
        return v([e], n, t, r);
    });
    Modernizr.addTest("textshadow", I("textShadow", "1px 1px")), (w.testAllProps = y);
    w.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? H(e) : (-1 != e.indexOf("-") && (e = l(e)), t ? y(e, t, n) : y(e, "pfx"));
    };
    (w.testAllProps = b),
        Modernizr.addTest("cssanimations", b("animationName", "a", !0)),
        Modernizr.addTest("backgroundsize", b("backgroundSize", "100%", !0)),
        Modernizr.addTest("borderimage", b("borderImage", "url() 1", !0)),
        Modernizr.addTest("borderradius", b("borderRadius", "0px", !0)),
        Modernizr.addTest("boxshadow", b("boxShadow", "1px 1px", !0)),
        (function () {
            Modernizr.addTest("csscolumns", function () {
                var e = !1,
                    t = b("columnCount");
                try {
                    (e = !!t), e && (e = new Boolean(e));
                } catch (n) {}
                return e;
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++)
                (e = n[r].toLowerCase()), (t = b("column" + n[r])), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || b(n[r])), Modernizr.addTest("csscolumns." + e, t);
        })(),
        Modernizr.addTest("flexbox", b("flexBasis", "1px", !0)),
        Modernizr.addTest("cssreflections", b("boxReflect", "above", !0)),
        Modernizr.addTest("csstransforms", function () {
            return -1 === navigator.userAgent.indexOf("Android 2.") && b("transform", "scale(1)", !0);
        }),
        Modernizr.addTest("csstransforms3d", function () {
            var e = !!b("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in S.style)) {
                var n,
                    r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? (n = "@supports (perspective: 1px)") : ((n = "@media (transform-3d)"), t && (n += ",(-webkit-transform-3d)")),
                    (n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
                    O(r + n, function (t) {
                        e = 7 === t.offsetWidth && 18 === t.offsetHeight;
                    });
            }
            return e;
        }),
        Modernizr.addTest("csstransitions", b("transition", "all", !0)),
        a(),
        o(x),
        delete w.addTest,
        delete w.addAsyncTest;
    for (var W = 0; W < Modernizr._q.length; W++) Modernizr._q[W]();
    e.Modernizr = Modernizr;
})(window, document);
