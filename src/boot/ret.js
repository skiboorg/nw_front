!(function (e) {
    var n = {};
    function o(i) {
        if (n[i]) return n[i].exports;
        var a = (n[i] = { i: i, l: !1, exports: {} });
        return e[i].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
    }
    (o.m = e),
        (o.c = n),
        (o.d = function (e, n, i) {
            o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
        }),
        (o.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (e, n) {
            if ((1 & n && (e = o(e)), 8 & n)) return e;
            if (4 & n && "object" === typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((o.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
                for (var a in e)
                    o.d(
                        i,
                        a,
                        function (n) {
                            return e[n];
                        }.bind(null, a)
                    );
            return i;
        }),
        (o.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(n, "a", n), n;
        }),
        (o.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (o.p = "/packs/"),
        o((o.s = 508));
})([
    function (e, n, o) {
        "use strict";
        function i(e) {
            return (i =
                "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var a = o(14),
            c = Object.prototype.toString;
        function t(e) {
            return "[object Array]" === c.call(e);
        }
        function s(e) {
            return "undefined" === typeof e;
        }
        function r(e) {
            return null !== e && "object" === i(e);
        }
        function p(e) {
            if ("[object Object]" !== c.call(e)) return !1;
            var n = Object.getPrototypeOf(e);
            return null === n || n === Object.prototype;
        }
        function m(e) {
            return "[object Function]" === c.call(e);
        }
        function d(e, n) {
            if (null !== e && "undefined" !== typeof e)
                if (("object" !== i(e) && (e = [e]), t(e))) for (var o = 0, a = e.length; o < a; o++) n.call(null, e[o], o, e);
                else for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && n.call(null, e[c], c, e);
        }
        e.exports = {
            isArray: t,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === c.call(e);
            },
            isBuffer: function (e) {
                return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
            },
            isFormData: function (e) {
                return "undefined" !== typeof FormData && e instanceof FormData;
            },
            isArrayBufferView: function (e) {
                return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
            },
            isString: function (e) {
                return "string" === typeof e;
            },
            isNumber: function (e) {
                return "number" === typeof e;
            },
            isObject: r,
            isPlainObject: p,
            isUndefined: s,
            isDate: function (e) {
                return "[object Date]" === c.call(e);
            },
            isFile: function (e) {
                return "[object File]" === c.call(e);
            },
            isBlob: function (e) {
                return "[object Blob]" === c.call(e);
            },
            isFunction: m,
            isStream: function (e) {
                return r(e) && m(e.pipe);
            },
            isURLSearchParams: function (e) {
                return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return ("undefined" === typeof navigator || ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) && "undefined" !== typeof window && "undefined" !== typeof document;
            },
            forEach: d,
            merge: function e() {
                var n = {};
                function o(o, i) {
                    p(n[i]) && p(o) ? (n[i] = e(n[i], o)) : p(o) ? (n[i] = e({}, o)) : t(o) ? (n[i] = o.slice()) : (n[i] = o);
                }
                for (var i = 0, a = arguments.length; i < a; i++) d(arguments[i], o);
                return n;
            },
            extend: function (e, n, o) {
                return (
                    d(n, function (n, i) {
                        e[i] = o && "function" === typeof n ? a(n, o) : n;
                    }),
                    e
                );
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
            stripBOM: function (e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
            },
        };
    },
    ,
    ,
    function (e, n, o) {
        e.exports = o(26);
    },
    ,
    ,
    function (e, n) {
        var o,
            i,
            a = (e.exports = {});
        function c() {
            throw new Error("setTimeout has not been defined");
        }
        function t() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
            if (o === setTimeout) return setTimeout(e, 0);
            if ((o === c || !o) && setTimeout) return (o = setTimeout), setTimeout(e, 0);
            try {
                return o(e, 0);
            } catch (n) {
                try {
                    return o.call(null, e, 0);
                } catch (n) {
                    return o.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                o = "function" === typeof setTimeout ? setTimeout : c;
            } catch (e) {
                o = c;
            }
            try {
                i = "function" === typeof clearTimeout ? clearTimeout : t;
            } catch (e) {
                i = t;
            }
        })();
        var r,
            p = [],
            m = !1,
            d = -1;
        function l() {
            m && r && ((m = !1), r.length ? (p = r.concat(p)) : (d = -1), p.length && u());
        }
        function u() {
            if (!m) {
                var e = s(l);
                m = !0;
                for (var n = p.length; n; ) {
                    for (r = p, p = []; ++d < n; ) r && r[d].run();
                    (d = -1), (n = p.length);
                }
                (r = null),
                    (m = !1),
                    (function (e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === t || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
                        try {
                            i(e);
                        } catch (n) {
                            try {
                                return i.call(null, e);
                            } catch (n) {
                                return i.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function g(e, n) {
            (this.fun = e), (this.array = n);
        }
        function f() {}
        (a.nextTick = function (e) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
            p.push(new g(e, n)), 1 !== p.length || m || s(u);
        }),
            (g.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (a.title = "browser"),
            (a.browser = !0),
            (a.env = {}),
            (a.argv = []),
            (a.version = ""),
            (a.versions = {}),
            (a.on = f),
            (a.addListener = f),
            (a.once = f),
            (a.off = f),
            (a.removeListener = f),
            (a.removeAllListeners = f),
            (a.emit = f),
            (a.prependListener = f),
            (a.prependOnceListener = f),
            (a.listeners = function (e) {
                return [];
            }),
            (a.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (a.cwd = function () {
                return "/";
            }),
            (a.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (a.umask = function () {
                return 0;
            });
    },
    ,
    function (e, n, o) {
        e.exports = o(27);
    },
    ,
    ,
    ,
    ,
    ,
    function (e, n, o) {
        "use strict";
        e.exports = function (e, n) {
            return function () {
                for (var o = new Array(arguments.length), i = 0; i < o.length; i++) o[i] = arguments[i];
                return e.apply(n, o);
            };
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        function a(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        e.exports = function (e, n, o) {
            if (!n) return e;
            var c;
            if (o) c = o(n);
            else if (i.isURLSearchParams(n)) c = n.toString();
            else {
                var t = [];
                i.forEach(n, function (e, n) {
                    null !== e &&
                        "undefined" !== typeof e &&
                        (i.isArray(e) ? (n += "[]") : (e = [e]),
                        i.forEach(e, function (e) {
                            i.isDate(e) ? (e = e.toISOString()) : i.isObject(e) && (e = JSON.stringify(e)), t.push(a(n) + "=" + a(e));
                        }));
                }),
                    (c = t.join("&"));
            }
            if (c) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)), (e += (-1 === e.indexOf("?") ? "?" : "&") + c);
            }
            return e;
        };
    },
    function (e, n, o) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
        };
    },
    function (e, n, o) {
        "use strict";
        (function (n) {
            var i = o(0),
                a = o(32),
                c = { "Content-Type": "application/x-www-form-urlencoded" };
            function t(e, n) {
                !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = n);
            }
            var s,
                r = {
                    adapter: (("undefined" !== typeof XMLHttpRequest || ("undefined" !== typeof n && "[object process]" === Object.prototype.toString.call(n))) && (s = o(18)), s),
                    transformRequest: [
                        function (e, n) {
                            return (
                                a(n, "Accept"),
                                a(n, "Content-Type"),
                                i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e)
                                    ? e
                                    : i.isArrayBufferView(e)
                                    ? e.buffer
                                    : i.isURLSearchParams(e)
                                    ? (t(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                                    : i.isObject(e)
                                    ? (t(n, "application/json;charset=utf-8"), JSON.stringify(e))
                                    : e
                            );
                        },
                    ],
                    transformResponse: [
                        function (e) {
                            if ("string" === typeof e)
                                try {
                                    e = JSON.parse(e);
                                } catch (n) {}
                            return e;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300;
                    },
                };
            (r.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                i.forEach(["delete", "get", "head"], function (e) {
                    r.headers[e] = {};
                }),
                i.forEach(["post", "put", "patch"], function (e) {
                    r.headers[e] = i.merge(c);
                }),
                (e.exports = r);
        }.call(this, o(6)));
    },
    function (e, n, o) {
        "use strict";
        var i = o(0),
            a = o(33),
            c = o(35),
            t = o(15),
            s = o(36),
            r = o(39),
            p = o(40),
            m = o(19);
        e.exports = function (e) {
            return new Promise(function (n, o) {
                var d = e.data,
                    l = e.headers;
                i.isFormData(d) && delete l["Content-Type"];
                var u = new XMLHttpRequest();
                if (e.auth) {
                    var g = e.auth.username || "",
                        f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    l.Authorization = "Basic " + btoa(g + ":" + f);
                }
                var h = s(e.baseURL, e.url);
                if (
                    (u.open(e.method.toUpperCase(), t(h, e.params, e.paramsSerializer), !0),
                    (u.timeout = e.timeout),
                    (u.onreadystatechange = function () {
                        if (u && 4 === u.readyState && (0 !== u.status || (u.responseURL && 0 === u.responseURL.indexOf("file:")))) {
                            var i = "getAllResponseHeaders" in u ? r(u.getAllResponseHeaders()) : null,
                                c = { data: e.responseType && "text" !== e.responseType ? u.response : u.responseText, status: u.status, statusText: u.statusText, headers: i, config: e, request: u };
                            a(n, o, c), (u = null);
                        }
                    }),
                    (u.onabort = function () {
                        u && (o(m("Request aborted", e, "ECONNABORTED", u)), (u = null));
                    }),
                    (u.onerror = function () {
                        o(m("Network Error", e, null, u)), (u = null);
                    }),
                    (u.ontimeout = function () {
                        var n = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (n = e.timeoutErrorMessage), o(m(n, e, "ECONNABORTED", u)), (u = null);
                    }),
                    i.isStandardBrowserEnv())
                ) {
                    var b = (e.withCredentials || p(h)) && e.xsrfCookieName ? c.read(e.xsrfCookieName) : void 0;
                    b && (l[e.xsrfHeaderName] = b);
                }
                if (
                    ("setRequestHeader" in u &&
                        i.forEach(l, function (e, n) {
                            "undefined" === typeof d && "content-type" === n.toLowerCase() ? delete l[n] : u.setRequestHeader(n, e);
                        }),
                    i.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
                    e.responseType)
                )
                    try {
                        u.responseType = e.responseType;
                    } catch (_) {
                        if ("json" !== e.responseType) throw _;
                    }
                "function" === typeof e.onDownloadProgress && u.addEventListener("progress", e.onDownloadProgress),
                    "function" === typeof e.onUploadProgress && u.upload && u.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken &&
                        e.cancelToken.promise.then(function (e) {
                            u && (u.abort(), o(e), (u = null));
                        }),
                    d || (d = null),
                    u.send(d);
            });
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(34);
        e.exports = function (e, n, o, a, c) {
            var t = new Error(e);
            return i(t, n, o, a, c);
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        e.exports = function (e, n) {
            n = n || {};
            var o = {},
                a = ["url", "method", "data"],
                c = ["headers", "auth", "proxy", "params"],
                t = [
                    "baseURL",
                    "transformRequest",
                    "transformResponse",
                    "paramsSerializer",
                    "timeout",
                    "timeoutMessage",
                    "withCredentials",
                    "adapter",
                    "responseType",
                    "xsrfCookieName",
                    "xsrfHeaderName",
                    "onUploadProgress",
                    "onDownloadProgress",
                    "decompress",
                    "maxContentLength",
                    "maxBodyLength",
                    "maxRedirects",
                    "transport",
                    "httpAgent",
                    "httpsAgent",
                    "cancelToken",
                    "socketPath",
                    "responseEncoding",
                ],
                s = ["validateStatus"];
            function r(e, n) {
                return i.isPlainObject(e) && i.isPlainObject(n) ? i.merge(e, n) : i.isPlainObject(n) ? i.merge({}, n) : i.isArray(n) ? n.slice() : n;
            }
            function p(a) {
                i.isUndefined(n[a]) ? i.isUndefined(e[a]) || (o[a] = r(void 0, e[a])) : (o[a] = r(e[a], n[a]));
            }
            i.forEach(a, function (e) {
                i.isUndefined(n[e]) || (o[e] = r(void 0, n[e]));
            }),
                i.forEach(c, p),
                i.forEach(t, function (a) {
                    i.isUndefined(n[a]) ? i.isUndefined(e[a]) || (o[a] = r(void 0, e[a])) : (o[a] = r(void 0, n[a]));
                }),
                i.forEach(s, function (i) {
                    i in n ? (o[i] = r(e[i], n[i])) : i in e && (o[i] = r(void 0, e[i]));
                });
            var m = a.concat(c).concat(t).concat(s),
                d = Object.keys(e)
                    .concat(Object.keys(n))
                    .filter(function (e) {
                        return -1 === m.indexOf(e);
                    });
            return i.forEach(d, p), o;
        };
    },
    function (e, n, o) {
        "use strict";
        function i(e) {
            this.message = e;
        }
        (i.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (i.prototype.__CANCEL__ = !0),
            (e.exports = i);
    },
    ,
    ,
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/hemp_compass-291e56c239f5670e1e0363e2898b7508.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_compass-f956c0df878091fe1b68ba0c14c01499.png";
    },
    function (e, n, o) {
        var i = (function (e) {
            "use strict";
            var n = Object.prototype,
                o = n.hasOwnProperty,
                i = "function" === typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                c = i.asyncIterator || "@@asyncIterator",
                t = i.toStringTag || "@@toStringTag";
            function s(e, n, o) {
                return Object.defineProperty(e, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }), e[n];
            }
            try {
                s({}, "");
            } catch (A) {
                s = function (e, n, o) {
                    return (e[n] = o);
                };
            }
            function r(e, n, o, i) {
                var a = n && n.prototype instanceof d ? n : d,
                    c = Object.create(a.prototype),
                    t = new k(i || []);
                return (
                    (c._invoke = (function (e, n, o) {
                        var i = "suspendedStart";
                        return function (a, c) {
                            if ("executing" === i) throw new Error("Generator is already running");
                            if ("completed" === i) {
                                if ("throw" === a) throw c;
                                return S();
                            }
                            for (o.method = a, o.arg = c; ; ) {
                                var t = o.delegate;
                                if (t) {
                                    var s = v(t, o);
                                    if (s) {
                                        if (s === m) continue;
                                        return s;
                                    }
                                }
                                if ("next" === o.method) o.sent = o._sent = o.arg;
                                else if ("throw" === o.method) {
                                    if ("suspendedStart" === i) throw ((i = "completed"), o.arg);
                                    o.dispatchException(o.arg);
                                } else "return" === o.method && o.abrupt("return", o.arg);
                                i = "executing";
                                var r = p(e, n, o);
                                if ("normal" === r.type) {
                                    if (((i = o.done ? "completed" : "suspendedYield"), r.arg === m)) continue;
                                    return { value: r.arg, done: o.done };
                                }
                                "throw" === r.type && ((i = "completed"), (o.method = "throw"), (o.arg = r.arg));
                            }
                        };
                    })(e, o, t)),
                    c
                );
            }
            function p(e, n, o) {
                try {
                    return { type: "normal", arg: e.call(n, o) };
                } catch (A) {
                    return { type: "throw", arg: A };
                }
            }
            e.wrap = r;
            var m = {};
            function d() {}
            function l() {}
            function u() {}
            var g = {};
            g[a] = function () {
                return this;
            };
            var f = Object.getPrototypeOf,
                h = f && f(f(L([])));
            h && h !== n && o.call(h, a) && (g = h);
            var b = (u.prototype = d.prototype = Object.create(g));
            function _(e) {
                ["next", "throw", "return"].forEach(function (n) {
                    s(e, n, function (e) {
                        return this._invoke(n, e);
                    });
                });
            }
            function y(e, n) {
                var i;
                this._invoke = function (a, c) {
                    function t() {
                        return new n(function (i, t) {
                            !(function i(a, c, t, s) {
                                var r = p(e[a], e, c);
                                if ("throw" !== r.type) {
                                    var m = r.arg,
                                        d = m.value;
                                    return d && "object" === typeof d && o.call(d, "__await")
                                        ? n.resolve(d.__await).then(
                                              function (e) {
                                                  i("next", e, t, s);
                                              },
                                              function (e) {
                                                  i("throw", e, t, s);
                                              }
                                          )
                                        : n.resolve(d).then(
                                              function (e) {
                                                  (m.value = e), t(m);
                                              },
                                              function (e) {
                                                  return i("throw", e, t, s);
                                              }
                                          );
                                }
                                s(r.arg);
                            })(a, c, i, t);
                        });
                    }
                    return (i = i ? i.then(t, t) : t());
                };
            }
            function v(e, n) {
                var o = e.iterator[n.method];
                if (void 0 === o) {
                    if (((n.delegate = null), "throw" === n.method)) {
                        if (e.iterator.return && ((n.method = "return"), (n.arg = void 0), v(e, n), "throw" === n.method)) return m;
                        (n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return m;
                }
                var i = p(o, e.iterator, n.arg);
                if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m;
                var a = i.arg;
                return a
                    ? a.done
                        ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = void 0)), (n.delegate = null), m)
                        : a
                    : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), m);
            }
            function x(e) {
                var n = { tryLoc: e[0] };
                1 in e && (n.catchLoc = e[1]), 2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])), this.tryEntries.push(n);
            }
            function w(e) {
                var n = e.completion || {};
                (n.type = "normal"), delete n.arg, (e.completion = n);
            }
            function k(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(x, this), this.reset(!0);
            }
            function L(e) {
                if (e) {
                    var n = e[a];
                    if (n) return n.call(e);
                    if ("function" === typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            c = function n() {
                                for (; ++i < e.length; ) if (o.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                                return (n.value = void 0), (n.done = !0), n;
                            };
                        return (c.next = c);
                    }
                }
                return { next: S };
            }
            function S() {
                return { value: void 0, done: !0 };
            }
            return (
                (l.prototype = b.constructor = u),
                (u.constructor = l),
                (l.displayName = s(u, t, "GeneratorFunction")),
                (e.isGeneratorFunction = function (e) {
                    var n = "function" === typeof e && e.constructor;
                    return !!n && (n === l || "GeneratorFunction" === (n.displayName || n.name));
                }),
                (e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : ((e.__proto__ = u), s(e, t, "GeneratorFunction")), (e.prototype = Object.create(b)), e;
                }),
                (e.awrap = function (e) {
                    return { __await: e };
                }),
                _(y.prototype),
                (y.prototype[c] = function () {
                    return this;
                }),
                (e.AsyncIterator = y),
                (e.async = function (n, o, i, a, c) {
                    void 0 === c && (c = Promise);
                    var t = new y(r(n, o, i, a), c);
                    return e.isGeneratorFunction(o)
                        ? t
                        : t.next().then(function (e) {
                              return e.done ? e.value : t.next();
                          });
                }),
                _(b),
                s(b, t, "Generator"),
                (b[a] = function () {
                    return this;
                }),
                (b.toString = function () {
                    return "[object Generator]";
                }),
                (e.keys = function (e) {
                    var n = [];
                    for (var o in e) n.push(o);
                    return (
                        n.reverse(),
                        function o() {
                            for (; n.length; ) {
                                var i = n.pop();
                                if (i in e) return (o.value = i), (o.done = !1), o;
                            }
                            return (o.done = !0), o;
                        }
                    );
                }),
                (e.values = L),
                (k.prototype = {
                    constructor: k,
                    reset: function (e) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(w), !e))
                            for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var n = this;
                        function i(o, i) {
                            return (t.type = "throw"), (t.arg = e), (n.next = o), i && ((n.method = "next"), (n.arg = void 0)), !!i;
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var c = this.tryEntries[a],
                                t = c.completion;
                            if ("root" === c.tryLoc) return i("end");
                            if (c.tryLoc <= this.prev) {
                                var s = o.call(c, "catchLoc"),
                                    r = o.call(c, "finallyLoc");
                                if (s && r) {
                                    if (this.prev < c.catchLoc) return i(c.catchLoc, !0);
                                    if (this.prev < c.finallyLoc) return i(c.finallyLoc);
                                } else if (s) {
                                    if (this.prev < c.catchLoc) return i(c.catchLoc, !0);
                                } else {
                                    if (!r) throw new Error("try statement without catch or finally");
                                    if (this.prev < c.finallyLoc) return i(c.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, n) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i];
                            if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var c = a;
                                break;
                            }
                        }
                        c && ("break" === e || "continue" === e) && c.tryLoc <= n && n <= c.finallyLoc && (c = null);
                        var t = c ? c.completion : {};
                        return (t.type = e), (t.arg = n), c ? ((this.method = "next"), (this.next = c.finallyLoc), m) : this.complete(t);
                    },
                    complete: function (e, n) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === e.type && n && (this.next = n),
                            m
                        );
                    },
                    finish: function (e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), w(o), m;
                        }
                    },
                    catch: function (e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc === e) {
                                var i = o.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    w(o);
                                }
                                return a;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, n, o) {
                        return (this.delegate = { iterator: L(e), resultName: n, nextLoc: o }), "next" === this.method && (this.arg = void 0), m;
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = i;
        } catch (a) {
            Function("r", "regeneratorRuntime = r")(i);
        }
    },
    function (e, n, o) {
        "use strict";
        var i = o(0),
            a = o(14),
            c = o(28),
            t = o(20);
        function s(e) {
            var n = new c(e),
                o = a(c.prototype.request, n);
            return i.extend(o, c.prototype, n), i.extend(o, n), o;
        }
        var r = s(o(17));
        (r.Axios = c),
            (r.create = function (e) {
                return s(t(r.defaults, e));
            }),
            (r.Cancel = o(21)),
            (r.CancelToken = o(41)),
            (r.isCancel = o(16)),
            (r.all = function (e) {
                return Promise.all(e);
            }),
            (r.spread = o(42)),
            (r.isAxiosError = o(43)),
            (e.exports = r),
            (e.exports.default = r);
    },
    function (e, n, o) {
        "use strict";
        var i = o(0),
            a = o(15),
            c = o(29),
            t = o(30),
            s = o(20);
        function r(e) {
            (this.defaults = e), (this.interceptors = { request: new c(), response: new c() });
        }
        (r.prototype.request = function (e) {
            "string" === typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
                (e = s(this.defaults, e)).method ? (e.method = e.method.toLowerCase()) : this.defaults.method ? (e.method = this.defaults.method.toLowerCase()) : (e.method = "get");
            var n = [t, void 0],
                o = Promise.resolve(e);
            for (
                this.interceptors.request.forEach(function (e) {
                    n.unshift(e.fulfilled, e.rejected);
                }),
                    this.interceptors.response.forEach(function (e) {
                        n.push(e.fulfilled, e.rejected);
                    });
                n.length;

            )
                o = o.then(n.shift(), n.shift());
            return o;
        }),
            (r.prototype.getUri = function (e) {
                return (e = s(this.defaults, e)), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
            }),
            i.forEach(["delete", "get", "head", "options"], function (e) {
                r.prototype[e] = function (n, o) {
                    return this.request(s(o || {}, { method: e, url: n, data: (o || {}).data }));
                };
            }),
            i.forEach(["post", "put", "patch"], function (e) {
                r.prototype[e] = function (n, o, i) {
                    return this.request(s(i || {}, { method: e, url: n, data: o }));
                };
            }),
            (e.exports = r);
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        function a() {
            this.handlers = [];
        }
        (a.prototype.use = function (e, n) {
            return this.handlers.push({ fulfilled: e, rejected: n }), this.handlers.length - 1;
        }),
            (a.prototype.eject = function (e) {
                this.handlers[e] && (this.handlers[e] = null);
            }),
            (a.prototype.forEach = function (e) {
                i.forEach(this.handlers, function (n) {
                    null !== n && e(n);
                });
            }),
            (e.exports = a);
    },
    function (e, n, o) {
        "use strict";
        var i = o(0),
            a = o(31),
            c = o(16),
            t = o(17);
        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
            return (
                s(e),
                (e.headers = e.headers || {}),
                (e.data = a(e.data, e.headers, e.transformRequest)),
                (e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
                i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (n) {
                    delete e.headers[n];
                }),
                (e.adapter || t.adapter)(e).then(
                    function (n) {
                        return s(e), (n.data = a(n.data, n.headers, e.transformResponse)), n;
                    },
                    function (n) {
                        return c(n) || (s(e), n && n.response && (n.response.data = a(n.response.data, n.response.headers, e.transformResponse))), Promise.reject(n);
                    }
                )
            );
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        e.exports = function (e, n, o) {
            return (
                i.forEach(o, function (o) {
                    e = o(e, n);
                }),
                e
            );
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        e.exports = function (e, n) {
            i.forEach(e, function (o, i) {
                i !== n && i.toUpperCase() === n.toUpperCase() && ((e[n] = o), delete e[i]);
            });
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(19);
        e.exports = function (e, n, o) {
            var a = o.config.validateStatus;
            o.status && a && !a(o.status) ? n(i("Request failed with status code " + o.status, o.config, null, o.request, o)) : e(o);
        };
    },
    function (e, n, o) {
        "use strict";
        e.exports = function (e, n, o, i, a) {
            return (
                (e.config = n),
                o && (e.code = o),
                (e.request = i),
                (e.response = a),
                (e.isAxiosError = !0),
                (e.toJSON = function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                    };
                }),
                e
            );
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        e.exports = i.isStandardBrowserEnv()
            ? {
                  write: function (e, n, o, a, c, t) {
                      var s = [];
                      s.push(e + "=" + encodeURIComponent(n)),
                          i.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()),
                          i.isString(a) && s.push("path=" + a),
                          i.isString(c) && s.push("domain=" + c),
                          !0 === t && s.push("secure"),
                          (document.cookie = s.join("; "));
                  },
                  read: function (e) {
                      var n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                      return n ? decodeURIComponent(n[3]) : null;
                  },
                  remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              };
    },
    function (e, n, o) {
        "use strict";
        var i = o(37),
            a = o(38);
        e.exports = function (e, n) {
            return e && !i(n) ? a(e, n) : n;
        };
    },
    function (e, n, o) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    },
    function (e, n, o) {
        "use strict";
        e.exports = function (e, n) {
            return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0),
            a = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ];
        e.exports = function (e) {
            var n,
                o,
                c,
                t = {};
            return e
                ? (i.forEach(e.split("\n"), function (e) {
                      if (((c = e.indexOf(":")), (n = i.trim(e.substr(0, c)).toLowerCase()), (o = i.trim(e.substr(c + 1))), n)) {
                          if (t[n] && a.indexOf(n) >= 0) return;
                          t[n] = "set-cookie" === n ? (t[n] ? t[n] : []).concat([o]) : t[n] ? t[n] + ", " + o : o;
                      }
                  }),
                  t)
                : t;
        };
    },
    function (e, n, o) {
        "use strict";
        var i = o(0);
        e.exports = i.isStandardBrowserEnv()
            ? (function () {
                  var e,
                      n = /(msie|trident)/i.test(navigator.userAgent),
                      o = document.createElement("a");
                  function a(e) {
                      var i = e;
                      return (
                          n && (o.setAttribute("href", i), (i = o.href)),
                          o.setAttribute("href", i),
                          {
                              href: o.href,
                              protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                              host: o.host,
                              search: o.search ? o.search.replace(/^\?/, "") : "",
                              hash: o.hash ? o.hash.replace(/^#/, "") : "",
                              hostname: o.hostname,
                              port: o.port,
                              pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname,
                          }
                      );
                  }
                  return (
                      (e = a(window.location.href)),
                      function (n) {
                          var o = i.isString(n) ? a(n) : n;
                          return o.protocol === e.protocol && o.host === e.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              };
    },
    function (e, n, o) {
        "use strict";
        var i = o(21);
        function a(e) {
            if ("function" !== typeof e) throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
                n = e;
            });
            var o = this;
            e(function (e) {
                o.reason || ((o.reason = new i(e)), n(o.reason));
            });
        }
        (a.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (a.source = function () {
                var e;
                return {
                    token: new a(function (n) {
                        e = n;
                    }),
                    cancel: e,
                };
            }),
            (e.exports = a);
    },
    function (e, n, o) {
        "use strict";
        e.exports = function (e) {
            return function (n) {
                return e.apply(null, n);
            };
        };
    },
    function (e, n, o) {
        "use strict";
        function i(e) {
            return (i =
                "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        e.exports = function (e) {
            return "object" === i(e) && !0 === e.isAxiosError;
        };
    },
    ,
    ,
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/death_boid_compass-3dae3e2a8243e02b04b0888f738b34b6.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/death_plant_compass-221fa6da31fa30ce365a263f6b1a1d21.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/death_stone_compass-d32ce28f5489e9f9ed9f04826afb0f29.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/earth_boid_compass-4bf89abe7d5bbc70bbf62eb9af1f9aa4.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/earth_plant_compass-e01a72a9bea2b6adc322693bde3b37cf.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/earth_stone_compass-af0848509f95d6c6790aac0e56b165f4.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/fire_boid_compass-1bc4ec61f9a5d91fc9500e816061f372.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/fire_plant_compass-73342e7354460e78989926dabff3b38b.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/fire_stone_compass-535d2ba71622527d5759efe029b7d032.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/fruit_compass-471de2e395cfc1aaa5f29befeaf9e73d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/gold_compass-2789096637ecc4d5faa77f16b6c80bfe.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/herb_compass-fdaee2f144d0d1118c710c92be0c18e8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/iron_compass-bb6df808bf8203957784ae8d46533ca8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/ironwood_compass-9845f9fef7fb0253c185917751b522f3.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/life_boid_compass-c0592964bcd85fc729027f5bec075379.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/life_plant_compass-796dfcee1d83f74111e705c4fadddbde.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/life_stone_compass-e34aad74b76d99ac40df2720f0ed9b2a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/lodestone_compass-18dccd97e59ac3b337a02b94e029b243.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/oil_compass-8d9d850c808072d3e7371b9a8d003d49.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/orichalcum_compass-4895a8dabf71e35213716533e2100f1d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/platinum_compass-b24a2424c9e93909d1607b893d0304f1.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/silver_compass-611c86b0000d7b7b5c868a426138ff6a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/spirit_boid_compass-8edfd16bcde0f1d7ec45375754eaeb78.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/spirit_plant_compass-2e6bd29fef5a432ecc55be6f514be176.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/spirit_stone_compass-6429d9ac6119ec1b85b8d70918ba0dcd.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/starmetal_compass-a5d2ffe6ca26d383fb57134a5b7293df.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/water_boid_compass-3c6213ce9d35e27769605973499ad6fe.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/water_plant_compass-cf4a07eb88d4fd817f0925abacebdf98.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/water_stone_compass-0fef4739e42852aed40b0ca923f4e249.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/wind_boid_compass-8c12464d88448cd01f53cfb3c4b242e1.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/wind_plant_compass-c89c473795bcfb46cd0b02e96de352c7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/wind_stone_compass-ea4e725a02d81f0fb91939e887a09007.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/wyrdwood_compass-14fca04d72e37390af260b16cd043062.png";
    },
    ,
    ,
    ,
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/fortress-b84232385465b2a446bdcd1e5273465a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/barleyt1-df52c46f8ff310ce0bb7b057092c69e2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/berryt1-ad76f52f62a80b72dbc2997bf33601c7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/broccolit1-ba89b48934413f054e9bf9e5fd3e536a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/cabbaget1-55c21616c4dac29d824771506d40cb4c.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/carrott1-d1061885f6d6918a7a2a196c169c35b5.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/cornt1-4df0c8d4a90d2d43f1fef588eb09f42d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/cranberryt1-43266f8e57923451b3ea344f857edfda.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/melont1-26c129b69b42613c57bd389f8477bd4c.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/nutt1-8c1cf2ab8dfb507e2bf5f5323169c413.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/potatot1-14787334c9f8681517210143a6cf780b.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/saltpetert1-93f899fb8f63123ed8e6b27d3dfa2770.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/squasht1-6aac2fbaf630a1e01b36bf20a8387902.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/strawberryt1-33bf19032d876d1960d54b583ca6771c.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/wheatt1-a41e81a977f709656bb291bc401ae2ce.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_capital-d4c7db29f45214c4c36c1321a0fe9449.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_fort-8385d1b82179635d864dfc64d01e601e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/abandoned_campsite-c5ac4fa37cdc95b1e982c4090551fdca.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/abandoned_farm_mill-0930020c7880413da286b1271df64c7e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/abandoned_farm_village-47297974442f154a62aaa1df63f4c992.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/abandoned_fishing_village-208cb3dc6d8ec484f6e5aaa62244cf77.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/abandoned_village-4ea67634cdb2854c790659bad98a8619.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/abandonedcity-1703af405ddf3f52e11a5a19ae2897ee.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_buttress-b6d979cb2dbb6db5c5613c2d03ebc757.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_lighthouse-ee5c7a76b8b25e9a60a87339c68ad644.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_lookout-e3649a48e0cdb447363056dd6d14b456.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_malevolence-0bbca28022d8023058a4d50b40bc43a2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_ruins-aec211a8576eb0318de6af4b3525860f.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_ruins_spheres-db2177953141ced58ba53090ba0abfd9.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_shrine-204d32ae37787cc81ffe3db146c52668.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_spite-311443f37e3860d7f32499250d5219ec.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_temple_lg-f3d4930d7b0795d4e928f6676cba06c8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_temple_sm-3763a7cc35c78cb90a30af2e1f1c1b88.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_tower-e3649a48e0cdb447363056dd6d14b456.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ancient_watchtower-ee5c7a76b8b25e9a60a87339c68ad644.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_camp-798fef832abae4deadee1f0bd5bf5a78.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_cave-c825c38080614dea7525ae78cb4ef2a3.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_grove-e8bc60cf0d0611510d85d2cc98e5081a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_grovealtar-32741057d9a5686ddf1caae06c144675.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_ruins-a4e63082b94cf9bde7cb0f04325b1e0f.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_spriggan-2faaa8ee6904e8da7f45d1e44b90dcc5.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/angryearth_village-94a783eacd598851409d419d4fa0f1f7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/arena_spriggan_angryearth-2faaa8ee6904e8da7f45d1e44b90dcc5.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/azure_tree-6625cfe85d5cde0c8ce156b2f88cb0e6.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/azurefissure-1589656ee0469e831530acea0211e427.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/battlefield_fort-b84232385465b2a446bdcd1e5273465a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/bear_den-b4bd5ea09433f2687370e2571ecca627.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/buildings_damned-fc919dbf82a9dfb31dff49dac4f6445d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/cave-0ea91f34eafba785dc6f9040d1f8f62a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/constructionsite-b881ed0d44a2644db8b2c836b7bbb397.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damned_campsite-9beef71a6ec6f9063e1c76855e4fe2c3.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damned_compass-61ca51e0ac3d3009bad3469dd42ec422.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damned_compass_danger-c034cd6667ba61c43a6fc796a0bd324a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damned_major_compass-5f48cce0d02a00ddef98ef1981ea76f1.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damned_major_compass_danger-113c47b7197af52e8451f8eaad61bb06.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damned_mine-c82c7df425e05353ac1b0657f2241b7d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damnedcapitalcity-b84232385465b2a446bdcd1e5273465a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damnedfortress-130fcce9f27cfe10a5d812677a9dfd66.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/damnedtrench-61ae34bdd0fd8c2600d3576350f2b327.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/den_bear_elemental-8b3573ae51605bd00a0a384732101156.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/elemental_bear-20762fbb4bd14236b8438e66bd9fa819.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/elemental_wolf_ice-20762fbb4bd14236b8438e66bd9fa819.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/excavation-c632f537c7502d8e4117327577fd4644.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/farmingvillage-47297974442f154a62aaa1df63f4c992.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/fort-294b6b5603b0d52012c7c9b1e713f059.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/graveyard-2c88375d63f00e6e347fc12029907b3d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hero_shipwreck-00ecf9cc09b0a3f3ca3f9bddd8dd4cd6.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/icon_nature_buffalo-d75e261eff607684b774d9cb9c2fbe7b.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/lumbermill-3b8d1080c736fa9d2bb45d5ef7c39803.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/military_camp-e7a0b094ce96a53bae66b80498ac5e47.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/mine-926eb60a7111bd12cfd1c19e304cbb30.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/oilfield-fa5228481b84f82066b0d55fc13774bb.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/ore-c92f3209e238fed1d52a34c1b7eceb4e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost-e645cef65f62a0801cfb2adfa6f50a70.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost_alchemy-e645cef65f62a0801cfb2adfa6f50a70.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost_blacksmith-e645cef65f62a0801cfb2adfa6f50a70.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost_compass-e353e61a55176a5de6703fd531d36e59.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost_damned-e645cef65f62a0801cfb2adfa6f50a70.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost_lawless-3f3da35763a7f2f2b63185e5057886cd.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpost_outfitting-e645cef65f62a0801cfb2adfa6f50a70.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/outpostdiamond-496af43f5d3c39ec426b0d4b85f0888f.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/poi_lawless-8efc2f592a687815b558fd4489726a3e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/resource_run-c92f3209e238fed1d52a34c1b7eceb4e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/shattered_obelisk-b497b35e4f66fc3ac6b199c5b5ccda01.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/shipwreck-eff48758b800cc59af3de4dffcdc3233.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/shrine_air-7028b4a7f677739c5b83eab4d63351bd.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/shrine_earth-e835e8b2cb58da4a23803a0c980d14f2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/shrine_fire-e1ff99c7b12aaf4975e1701ee4a466ab.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/shrine_water-c0bb71981cd275d80d71c2f46992d057.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/wolf_den-65c6434b127cb6336523eb19c8617877.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/township-1703af405ddf3f52e11a5a19ae2897ee.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, o) {
        "use strict";
        o.r(n),
            (n.default = {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: { name: "Monarch's Bluff" },
                        geometry: {
                            type: "MultiPolygon",
                            coordinates: [
                                [
                                    [
                                        [8240, 2762],
                                        [8232, 2810],
                                        [8248, 2854],
                                        [8264, 2862],
                                        [8280, 2894],
                                        [8180, 2928],
                                        [8224, 3006],
                                        [8216, 3062],
                                        [8248, 3074],
                                        [8376, 3086],
                                        [8368, 3162],
                                        [8272, 3200],
                                        [8148, 3208],
                                        [7968, 3224],
                                        [7888, 3252],
                                        [7840, 3362],
                                        [7708, 3286],
                                        [7668, 3194],
                                        [7452, 3210],
                                        [7488, 3082],
                                        [7480, 2994],
                                        [7488, 2924],
                                        [7524, 2846],
                                        [7520, 2800],
                                        [7576, 2762],
                                        [7660, 2802],
                                        [7808, 2826],
                                        [7872, 2838],
                                        [7920, 2860],
                                        [8100, 2814],
                                        [8240, 2762],
                                    ],
                                    [
                                        [8216, 3062],
                                        [8224, 3006],
                                        [8180, 2928],
                                        [8280, 2894],
                                        [8232, 2810],
                                        [8256, 2682],
                                        [8352, 2628],
                                        [8368, 2600],
                                        [8328, 2564],
                                        [8208, 2504],
                                        [8216, 2452],
                                        [8256, 2382],
                                        [8256, 2336],
                                        [8188, 2326],
                                        [8128, 2344],
                                        [8132, 2422],
                                        [8076, 2470],
                                        [8040, 2464],
                                        [7972, 2410],
                                        [7984, 2364],
                                        [8032, 2340],
                                        [8060, 2304],
                                        [8044, 2276],
                                        [8008, 2260],
                                        [7924, 2302],
                                        [7840, 2308],
                                        [7768, 2238],
                                        [7732, 2260],
                                        [7664, 2246],
                                        [7604, 2202],
                                        [7476, 2064],
                                        [7404, 2014],
                                        [7312, 2021],
                                        [7244, 2058],
                                        [7184, 2060],
                                        [7164, 2046],
                                        [7160, 1990],
                                        [7140, 1961],
                                        [7032, 1943],
                                        [6824, 1841],
                                        [6680, 1915],
                                        [6680, 1997],
                                        [6648, 2044],
                                        [6640, 2106],
                                        [6692, 2310],
                                        [6636, 2504],
                                        [6468, 2580],
                                        [6300, 2818],
                                        [6320, 2964],
                                        [6348, 3054],
                                        [6372, 3084],
                                        [6356, 3122],
                                        [6364, 3144],
                                        [6248, 3140],
                                        [6144, 3216],
                                        [6144, 3474],
                                        [6168, 3550],
                                        [6208, 3566],
                                        [6208, 3604],
                                        [6176, 3640],
                                        [6204, 3696],
                                        [6284, 3704],
                                        [6300, 3666],
                                        [6344, 3650],
                                        [6544, 3752],
                                        [6616, 3818],
                                        [6712, 3842],
                                        [6844, 3772],
                                        [7016, 3714],
                                        [7040, 3732],
                                        [7056, 3796],
                                        [7052, 3866],
                                        [7100, 3904],
                                        [7136, 3884],
                                        [7200, 3888],
                                        [7280, 3928],
                                        [7356, 3926],
                                        [7372, 4012],
                                        [7404, 4028],
                                        [7396, 4096],
                                        [7460, 4164],
                                        [7516, 4192],
                                        [7484, 4356],
                                        [7516, 4464],
                                        [7600, 4468],
                                        [7692, 4496],
                                        [7848, 4392],
                                        [7932, 4396],
                                        [7964, 4356],
                                        [7968, 4312],
                                        [8060, 4332],
                                        [8108, 4248],
                                        [8392, 4228],
                                        [8448, 4108],
                                        [8448, 4002],
                                        [8488, 3916],
                                        [8416, 3736],
                                        [8456, 3690],
                                        [8592, 3708],
                                        [8688, 3676],
                                        [8824, 3658],
                                        [8832, 3594],
                                        [8808, 3526],
                                        [8832, 3482],
                                        [8816, 3386],
                                        [8808, 3344],
                                        [8760, 3278],
                                        [8664, 3256],
                                        [8544, 3276],
                                        [8368, 3162],
                                        [8376, 3086],
                                        [8216, 3062],
                                    ],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Brightwoods" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [10528, 6500],
                                    [10608, 6472],
                                    [10624, 6320],
                                    [10544, 6220],
                                    [10400, 6120],
                                    [10320, 5904],
                                    [10320, 5836],
                                    [10400, 5540],
                                    [10408, 5452],
                                    [10488, 5224],
                                    [10488, 4988],
                                    [10480, 4936],
                                    [10464, 4888],
                                    [10416, 4872],
                                    [10416, 4860],
                                    [10376, 4844],
                                    [10344, 4816],
                                    [10304, 4792],
                                    [10256, 4776],
                                    [10200, 4760],
                                    [10144, 4708],
                                    [10064, 4700],
                                    [10008, 4660],
                                    [9984, 4664],
                                    [9968, 4720],
                                    [9944, 4760],
                                    [9912, 4784],
                                    [9888, 4820],
                                    [9848, 4828],
                                    [9792, 4860],
                                    [9752, 4908],
                                    [9744, 4960],
                                    [9680, 5040],
                                    [9480, 5072],
                                    [9416, 5116],
                                    [9376, 5124],
                                    [9312, 5104],
                                    [9240, 5112],
                                    [9216, 5128],
                                    [9112, 5124],
                                    [9072, 5152],
                                    [8992, 5272],
                                    [8944, 5352],
                                    [8928, 5488],
                                    [8896, 5532],
                                    [8768, 5568],
                                    [8648, 5576],
                                    [8568, 5540],
                                    [8424, 5436],
                                    [8376, 5436],
                                    [8272, 5560],
                                    [8248, 5648],
                                    [8288, 5944],
                                    [8248, 6012],
                                    [8264, 6044],
                                    [8256, 6092],
                                    [8248, 6112],
                                    [8232, 6128],
                                    [8288, 6184],
                                    [8424, 6240],
                                    [8472, 6256],
                                    [8608, 6196],
                                    [8640, 6316],
                                    [8648, 6380],
                                    [8712, 6428],
                                    [8696, 6468],
                                    [8672, 6632],
                                    [8768, 6684],
                                    [8888, 6676],
                                    [9032, 6684],
                                    [9224, 6812],
                                    [9360, 6816],
                                    [9520, 6800],
                                    [9648, 6760],
                                    [9816, 6728],
                                    [9936, 6724],
                                    [10048, 6652],
                                    [10208, 6628],
                                    [10320, 6592],
                                    [10408, 6492],
                                    [10528, 6500],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Everfall" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [10392, 3984],
                                    [10432, 4180],
                                    [10568, 4336],
                                    [10576, 4368],
                                    [10584, 4456],
                                    [10600, 4576],
                                    [10576, 4700],
                                    [10576, 4736],
                                    [10544, 4784],
                                    [10504, 4800],
                                    [10488, 4824],
                                    [10432, 4832],
                                    [10416, 4860],
                                    [10376, 4844],
                                    [10344, 4816],
                                    [10304, 4792],
                                    [10256, 4776],
                                    [10200, 4760],
                                    [10144, 4708],
                                    [10064, 4700],
                                    [10008, 4660],
                                    [9984, 4664],
                                    [9968, 4720],
                                    [9944, 4760],
                                    [9912, 4784],
                                    [9888, 4820],
                                    [9848, 4828],
                                    [9792, 4860],
                                    [9752, 4908],
                                    [9744, 4960],
                                    [9680, 5040],
                                    [9480, 5072],
                                    [9416, 5116],
                                    [9376, 5124],
                                    [9312, 5104],
                                    [9240, 5112],
                                    [9216, 5128],
                                    [9112, 5124],
                                    [9072, 5152],
                                    [8992, 5272],
                                    [8944, 5352],
                                    [8928, 5488],
                                    [8896, 5532],
                                    [8768, 5568],
                                    [8648, 5576],
                                    [8568, 5540],
                                    [8424, 5436],
                                    [8376, 5436],
                                    [8312, 5232],
                                    [8280, 5076],
                                    [8216, 4880],
                                    [8116, 4884],
                                    [7932, 4836],
                                    [7836, 4660],
                                    [7776, 4592],
                                    [7788, 4484],
                                    [7768, 4456],
                                    [7848, 4392],
                                    [7932, 4396],
                                    [7968, 4356],
                                    [7968, 4316],
                                    [8060, 4332],
                                    [8108, 4248],
                                    [8392, 4228],
                                    [8448, 4108],
                                    [8448, 4002],
                                    [8488, 3916],
                                    [8464, 3874],
                                    [8416, 3736],
                                    [8456, 3690],
                                    [8592, 3708],
                                    [8688, 3676],
                                    [8720, 3674],
                                    [8752, 3664],
                                    [8824, 3658],
                                    [8832, 3594],
                                    [8808, 3526],
                                    [8832, 3484],
                                    [8816, 3436],
                                    [8816, 3386],
                                    [8832, 3382],
                                    [8912, 3456],
                                    [9048, 3450],
                                    [9144, 3380],
                                    [9248, 3410],
                                    [9304, 3444],
                                    [9416, 3410],
                                    [9440, 3384],
                                    [9768, 3290],
                                    [9752, 3248],
                                    [9768, 3164],
                                    [9832, 3158],
                                    [9928, 3120],
                                    [10016, 3094],
                                    [10216, 3132],
                                    [10240, 3206],
                                    [10272, 3416],
                                    [10336, 3722],
                                    [10392, 3830],
                                    [10392, 3984],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Great Cleave" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [9568, 8504],
                                    [9448, 8504],
                                    [9080, 8552],
                                    [9032, 8600],
                                    [8736, 8672],
                                    [8296, 8672],
                                    [8180, 8520],
                                    [8180, 8456],
                                    [8100, 8376],
                                    [8080, 8288],
                                    [8040, 8136],
                                    [7940, 8056],
                                    [7936, 7960],
                                    [7880, 7876],
                                    [7784, 7800],
                                    [7772, 7732],
                                    [7712, 7696],
                                    [7692, 7640],
                                    [7692, 7572],
                                    [7728, 7508],
                                    [7780, 7460],
                                    [7852, 7348],
                                    [8216, 7224],
                                    [8440, 7272],
                                    [8464, 7252],
                                    [8576, 7208],
                                    [8664, 6996],
                                    [8704, 6936],
                                    [8712, 6892],
                                    [8672, 6816],
                                    [8664, 6732],
                                    [8672, 6632],
                                    [8768, 6684],
                                    [8888, 6676],
                                    [9032, 6684],
                                    [9224, 6812],
                                    [9360, 6816],
                                    [9520, 6800],
                                    [9648, 6760],
                                    [9816, 6728],
                                    [9936, 6724],
                                    [10048, 6652],
                                    [10208, 6628],
                                    [10320, 6592],
                                    [10408, 6492],
                                    [10528, 6500],
                                    [10520, 6600],
                                    [10352, 6736],
                                    [10408, 7244],
                                    [10440, 7344],
                                    [10320, 7592],
                                    [10328, 7816],
                                    [10336, 7888],
                                    [10304, 8424],
                                    [10104, 8376],
                                    [9800, 8480],
                                    [9568, 8504],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Windsward" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [9464, 2208],
                                    [9576, 2126],
                                    [9760, 1890],
                                    [9800, 1957],
                                    [9960, 2090],
                                    [10048, 2200],
                                    [10104, 2172],
                                    [10216, 2166],
                                    [10240, 2276],
                                    [10328, 2354],
                                    [10280, 2446],
                                    [10288, 2556],
                                    [10216, 2668],
                                    [10160, 2762],
                                    [10240, 2846],
                                    [10264, 2974],
                                    [10248, 3048],
                                    [10232, 3084],
                                    [10216, 3132],
                                    [10016, 3094],
                                    [9928, 3120],
                                    [9832, 3158],
                                    [9768, 3164],
                                    [9752, 3248],
                                    [9768, 3290],
                                    [9440, 3384],
                                    [9416, 3410],
                                    [9304, 3444],
                                    [9248, 3410],
                                    [9144, 3380],
                                    [9048, 3450],
                                    [8912, 3456],
                                    [8832, 3382],
                                    [8816, 3386],
                                    [8808, 3344],
                                    [8760, 3278],
                                    [8664, 3256],
                                    [8544, 3276],
                                    [8512, 3246],
                                    [8424, 3206],
                                    [8368, 3162],
                                    [8376, 3086],
                                    [8248, 3074],
                                    [8216, 3062],
                                    [8224, 3006],
                                    [8180, 2928],
                                    [8280, 2894],
                                    [8264, 2862],
                                    [8248, 2854],
                                    [8232, 2810],
                                    [8256, 2682],
                                    [8352, 2628],
                                    [8368, 2600],
                                    [8328, 2564],
                                    [8264, 2526],
                                    [8208, 2504],
                                    [8216, 2452],
                                    [8256, 2382],
                                    [8256, 2336],
                                    [8320, 2238],
                                    [8336, 2156],
                                    [8400, 2116],
                                    [8448, 2082],
                                    [8480, 2036],
                                    [8560, 2002],
                                    [8680, 2046],
                                    [8800, 2036],
                                    [8896, 2086],
                                    [8952, 2122],
                                    [9024, 2056],
                                    [9080, 2098],
                                    [9128, 2066],
                                    [9216, 2068],
                                    [9320, 2144],
                                    [9464, 2208],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "First Light" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [9320, 2144],
                                    [9464, 2208],
                                    [9576, 2126],
                                    [9760, 1890],
                                    [9800, 1826],
                                    [9808, 1786],
                                    [9840, 1691],
                                    [9832, 1568],
                                    [9944, 1515],
                                    [10112, 1527],
                                    [10240, 1407],
                                    [10208, 1100],
                                    [10128, 1003.5],
                                    [10104, 836],
                                    [9824, 676],
                                    [10032, 464.25],
                                    [10096, 243.25],
                                    [10072, 151.625],
                                    [10032, 102.75],
                                    [9816, 130.75],
                                    [9688, 138.875],
                                    [9472, 199.5],
                                    [9352, 230.375],
                                    [9216, 224.625],
                                    [9072, 280.5],
                                    [8984, 348.5],
                                    [8960, 487.75],
                                    [8912, 496],
                                    [8872, 497.5],
                                    [8840, 529],
                                    [8808, 542],
                                    [8752, 557.5],
                                    [8704, 578],
                                    [8608, 634],
                                    [8552, 658],
                                    [8496, 649.5],
                                    [8448, 665],
                                    [8376, 667.5],
                                    [8344, 674],
                                    [8312, 822],
                                    [8248, 903],
                                    [8224, 976],
                                    [8216, 1076],
                                    [8216, 1170],
                                    [8208, 1265],
                                    [8184, 1309],
                                    [8188, 1369],
                                    [8200, 1415],
                                    [8200, 1489],
                                    [8184, 1555],
                                    [8152, 1605],
                                    [8180, 1766],
                                    [8192, 1830],
                                    [8184, 2011],
                                    [8296, 2080],
                                    [8336, 2156],
                                    [8400, 2116],
                                    [8448, 2082],
                                    [8480, 2036],
                                    [8560, 2002],
                                    [8680, 2046],
                                    [8800, 2036],
                                    [8896, 2086],
                                    [8952, 2122],
                                    [9024, 2056],
                                    [9080, 2098],
                                    [9128, 2066],
                                    [9216, 2068],
                                    [9320, 2144],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Cutless Keys" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [8256, 2336],
                                    [8320, 2196],
                                    [8336, 2156],
                                    [8296, 2080],
                                    [8184, 2011],
                                    [8192, 1830],
                                    [8180, 1766],
                                    [8152, 1605],
                                    [8184, 1555],
                                    [8200, 1489],
                                    [8200, 1415],
                                    [8188, 1369],
                                    [8184, 1309],
                                    [8208, 1265],
                                    [8216, 1170],
                                    [8216, 1076],
                                    [8224, 976],
                                    [8248, 903],
                                    [8312, 822],
                                    [8344, 674],
                                    [8312, 636.5],
                                    [8272, 588.5],
                                    [8208, 526.5],
                                    [8184, 464.25],
                                    [8180, 343],
                                    [8156, 304.75],
                                    [8100, 259.25],
                                    [8072, 191.875],
                                    [8020, 112],
                                    [7896, 74.6875],
                                    [7740, 66.8125],
                                    [7640, 74.0625],
                                    [7532, 90.0625],
                                    [7452, 118],
                                    [7268, 171.625],
                                    [7180, 215.75],
                                    [7128, 209],
                                    [7068, 159.625],
                                    [6980, 127],
                                    [6928, 123.875],
                                    [6872, 94.5],
                                    [6784, 71.6875],
                                    [6712, 86.625],
                                    [6284, 48.0625],
                                    [6284, 48.09375],
                                    [6200, 58.34375],
                                    [6144, 110],
                                    [6144, 197.75],
                                    [6180, 269.25],
                                    [6252, 332.5],
                                    [6300, 418],
                                    [6304, 491.25],
                                    [6284, 591],
                                    [6244, 669],
                                    [6220, 766.5],
                                    [6212, 898],
                                    [6272, 1000.5],
                                    [6364, 1062],
                                    [6440, 1136],
                                    [6484, 1241],
                                    [6484, 1444],
                                    [6468, 1532],
                                    [6532, 1648],
                                    [6600, 1691],
                                    [6760, 1710],
                                    [6796, 1734],
                                    [6824, 1841],
                                    [6904, 1878],
                                    [6972, 1904],
                                    [7032, 1943],
                                    [7072, 1956],
                                    [7140, 1961],
                                    [7160, 1990],
                                    [7164, 2007],
                                    [7164, 2046],
                                    [7184, 2060],
                                    [7244, 2058],
                                    [7312, 2021],
                                    [7404, 2014],
                                    [7476, 2064],
                                    [7604, 2202],
                                    [7664, 2246],
                                    [7732, 2260],
                                    [7768, 2238],
                                    [7800, 2280],
                                    [7840, 2308],
                                    [7924, 2302],
                                    [7956, 2278],
                                    [8008, 2260],
                                    [8044, 2276],
                                    [8060, 2304],
                                    [8032, 2340],
                                    [7984, 2364],
                                    [7972, 2410],
                                    [8e3, 2442],
                                    [8040, 2464],
                                    [8076, 2470],
                                    [8132, 2422],
                                    [8140, 2400],
                                    [8120, 2368],
                                    [8128, 2344],
                                    [8188, 2326],
                                    [8256, 2336],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Shattered Mountain" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [8392, 8800],
                                    [8576, 8944],
                                    [8616, 9176],
                                    [8648, 9336],
                                    [8624, 9552],
                                    [8704, 9760],
                                    [8904, 9896],
                                    [9088, 9840],
                                    [9224, 9744],
                                    [9392, 9752],
                                    [9552, 9896],
                                    [9728, 9888],
                                    [9928, 9808],
                                    [10272, 9976],
                                    [10448, 1e4],
                                    [10696, 9920],
                                    [10800, 9776],
                                    [10744, 9392],
                                    [10800, 9272],
                                    [11056, 9256],
                                    [11008, 9152],
                                    [10992, 8968],
                                    [11e3, 8888],
                                    [10728, 8776],
                                    [10544, 8712],
                                    [10304, 8424],
                                    [10104, 8376],
                                    [9800, 8480],
                                    [9568, 8504],
                                    [9448, 8504],
                                    [9080, 8552],
                                    [9032, 8600],
                                    [8736, 8672],
                                    [8296, 8672],
                                    [8392, 8800],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Mourningdale" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [11936.3935546875, 6439.00390625],
                                    [11879.65234375, 6352.20947265625],
                                    [11916.6201171875, 6315.06298828125],
                                    [12024.5859375, 6290.05615234375],
                                    [12099.0029296875, 6193.35546875],
                                    [12181.5712890625, 6139.22998046875],
                                    [12219.16015625, 6137.92919921875],
                                    [12262.5263671875, 6132.3837890625],
                                    [12298.6875, 6111.8544921875],
                                    [12335.0947265625, 6100.091796875],
                                    [12376.0048828125, 6096.232421875],
                                    [12411.98046875, 6080.16064453125],
                                    [12442.7734375, 6051.18359375],
                                    [12507.7529296875, 6019.9267578125],
                                    [12558.36328125, 6002.951171875],
                                    [12601.1904296875, 5999.935546875],
                                    [12636.7275390625, 6020.36083984375],
                                    [12668.7763671875, 6047.4599609375],
                                    [12699.88671875, 6039.93603515625],
                                    [12749.662109375, 5991.7119140625],
                                    [12781.2373046875, 6005.07080078125],
                                    [12846.8173828125, 6000.212890625],
                                    [12908.75, 6013.57177734375],
                                    [12929.396484375, 6037.85986328125],
                                    [12992.544921875, 6037.85986328125],
                                    [13069.052734375, 6008.71435546875],
                                    [13195.169921875, 5939.3505859375],
                                    [13273.9921875, 5882.59814453125],
                                    [13318.1328125, 5896.7861328125],
                                    [13316.552734375, 5967.224609375],
                                    [13335.271484375, 6013.97998046875],
                                    [13387.509765625, 6093.890625],
                                    [13418.18359375, 6123.1318359375],
                                    [13461.0029296875, 6141.6220703125],
                                    [13530.0224609375, 6154.46142578125],
                                    [13623.84375, 6100.76123046875],
                                    [13745.43359375, 6079.583984375],
                                    [13881.6279296875, 6065.27734375],
                                    [13977.0703125, 6060.65478515625],
                                    [14057.1064453125, 6044.38818359375],
                                    [14098.3603515625, 6192.3056640625],
                                    [14130.4658203125, 6331.43994140625],
                                    [14125.3837890625, 6481.37255859375],
                                    [14097.1103515625, 6550.67138671875],
                                    [14047.236328125, 6626.77490234375],
                                    [14039.146484375, 6696.80810546875],
                                    [14071.6083984375, 6867.5849609375],
                                    [14121.7421875, 6933.04541015625],
                                    [14214.8359375, 6961.1826171875],
                                    [14286.240234375, 7009.03369140625],
                                    [14310.3779296875, 7065.97314453125],
                                    [14315.6787109375, 7243.9013671875],
                                    [14301.36328125, 7295.193359375],
                                    [14282.166015625, 7343.06689453125],
                                    [14273.9853515625, 7395.8681640625],
                                    [14281.9638671875, 7456.12060546875],
                                    [14280.111328125, 7499.810546875],
                                    [14269.2529296875, 7549.14306640625],
                                    [14248.9697265625, 7603.40576171875],
                                    [14228.9599609375, 7650.06005859375],
                                    [14258.5458984375, 7733.2939453125],
                                    [14268.701171875, 7821.73388671875],
                                    [14256.4873046875, 7864.408203125],
                                    [14264.7822265625, 7905.8017578125],
                                    [14331.6279296875, 7971.94482421875],
                                    [14331.62890625, 8035.4111328125],
                                    [14293.8876953125, 8139.27685546875],
                                    [14282.9697265625, 8200.833984375],
                                    [14275.0625, 8296.8154296875],
                                    [14257.7353515625, 8347.3701171875],
                                    [14197.1826171875, 8399.51953125],
                                    [14166.33203125, 8428.0869140625],
                                    [14135.0849609375, 8474.462890625],
                                    [14109.7822265625, 8506.1728515625],
                                    [14088.0703125, 8564.109375],
                                    [14090.18359375, 8628.541015625],
                                    [14097.79296875, 8703.3623046875],
                                    [14068.5400390625, 8755.3203125],
                                    [14007.427734375, 8789.275390625],
                                    [13944.1279296875, 8805.9755859375],
                                    [13913.7666015625, 8843.9384765625],
                                    [13900.1015625, 8896.9541015625],
                                    [13871.0712890625, 8967.076171875],
                                    [13809.4921875, 8999.2294921875],
                                    [13773.6865234375, 9006.0390625],
                                    [13730.1728515625, 8993.5107421875],
                                    [13635.65625, 8942.693359375],
                                    [13573.052734375, 8857.6875],
                                    [13560.3828125, 8830.0146484375],
                                    [13454.8779296875, 8688.9521484375],
                                    [13406.447265625, 8677.775390625],
                                    [13326.9736328125, 8711.3037109375],
                                    [13248.740234375, 8670.3251953125],
                                    [13108.41796875, 8649.21484375],
                                    [12926.8935546875, 8732.291015625],
                                    [12870.35546875, 8798.921875],
                                    [12757.0791015625, 8785.34375],
                                    [12692.5078125, 8734.3125],
                                    [12576.0478515625, 8695.2197265625],
                                    [12484.478515625, 8693.8359375],
                                    [12300.806640625, 8738.7060546875],
                                    [12233.8251953125, 8729.357421875],
                                    [12178.7177734375, 8738.5693359375],
                                    [12166.7060546875, 8664.3134765625],
                                    [12195.412109375, 8635.005859375],
                                    [12228.697265625, 8625.1796875],
                                    [12240.005859375, 8617.224609375],
                                    [12201.912109375, 8593.9970703125],
                                    [12206.66796875, 8538.091796875],
                                    [12168.72265625, 8503.853515625],
                                    [12133.302734375, 8496.7060546875],
                                    [12115.2822265625, 8470.7314453125],
                                    [12103.9560546875, 8414.51953125],
                                    [12108.7197265625, 8334.333984375],
                                    [12125.056640625, 8262.22265625],
                                    [12150.1923828125, 8192.056640625],
                                    [12179.6552734375, 8130.5439453125],
                                    [12180.525390625, 8077.25146484375],
                                    [12138.7998046875, 8036.89697265625],
                                    [12103.275390625, 8005.341796875],
                                    [12065.9599609375, 7985.9111328125],
                                    [12045.7802734375, 7958.0029296875],
                                    [12049.5947265625, 7919.806640625],
                                    [12082.6103515625, 7908.60498046875],
                                    [12118.2890625, 7908.9599609375],
                                    [12185.08203125, 7934.7919921875],
                                    [12215.7958984375, 7927.580078125],
                                    [12244.6474609375, 7871.818359375],
                                    [12244.8623046875, 7831.74560546875],
                                    [12241.5087890625, 7782.666015625],
                                    [12218.8740234375, 7732.78271484375],
                                    [12191.2724609375, 7694.3779296875],
                                    [12186.0947265625, 7667.9638671875],
                                    [12199.6533203125, 7616.13232421875],
                                    [12289.8125, 7529.6279296875],
                                    [12378.7177734375, 7482.4111328125],
                                    [12427.1845703125, 7488.26171875],
                                    [12460.35546875, 7516.82421875],
                                    [12513.3271484375, 7528.54833984375],
                                    [12562.4013671875, 7523.8037109375],
                                    [12628.1962890625, 7476.8076171875],
                                    [12668.48046875, 7314.33544921875],
                                    [12661.7646484375, 7162.60546875],
                                    [12483.35546875, 7010.765625],
                                    [12380.861328125, 6822.86376953125],
                                    [12259.3896484375, 6724.16796875],
                                    [12211.3740234375, 6666.21728515625],
                                    [12090.021484375, 6646.8525390625],
                                    [11955.7587890625, 6573.26611328125],
                                    [11936.3935546875, 6439.00390625],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Edengrove" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [12136, 8784],
                                    [11944, 8776],
                                    [11872, 8912],
                                    [11696, 9096],
                                    [11568, 9176],
                                    [11384, 9248],
                                    [11312, 9248],
                                    [11200, 9288],
                                    [11056, 9256],
                                    [11008, 9152],
                                    [10992, 8968],
                                    [11e3, 8888],
                                    [10728, 8776],
                                    [10544, 8712],
                                    [10304, 8424],
                                    [10336, 7888],
                                    [10328, 7816],
                                    [10320, 7592],
                                    [10440, 7344],
                                    [10408, 7244],
                                    [10352, 6736],
                                    [10520, 6600],
                                    [10744, 6640],
                                    [10832, 6624],
                                    [10944, 6720],
                                    [10992, 6716],
                                    [11112, 6604],
                                    [11184, 6580],
                                    [11184, 6548],
                                    [11328, 6452],
                                    [11384, 6416],
                                    [11464, 6392],
                                    [11560, 6364],
                                    [11592, 6380],
                                    [11656, 6356],
                                    [11720, 6348],
                                    [11736, 6340],
                                    [11784, 6336],
                                    [11840, 6364],
                                    [11880, 6352],
                                    [11936, 6440],
                                    [11952, 6572],
                                    [12088, 6648],
                                    [12208, 6668],
                                    [12256, 6724],
                                    [12384, 6824],
                                    [12480, 7012],
                                    [12664, 7164],
                                    [12672, 7316],
                                    [12632, 7476],
                                    [12560, 7524],
                                    [12512, 7528],
                                    [12464, 7516],
                                    [12424, 7488],
                                    [12376, 7484],
                                    [12288, 7528],
                                    [12200, 7616],
                                    [12184, 7668],
                                    [12192, 7696],
                                    [12216, 7732],
                                    [12240, 7784],
                                    [12248, 7832],
                                    [12248, 7872],
                                    [12216, 7928],
                                    [12184, 7936],
                                    [12120, 7908],
                                    [12080, 7908],
                                    [12048, 7920],
                                    [12048, 7960],
                                    [12064, 7984],
                                    [12104, 8004],
                                    [12136, 8036],
                                    [12184, 8076],
                                    [12176, 8132],
                                    [12152, 8192],
                                    [12128, 8264],
                                    [12112, 8336],
                                    [12104, 8416],
                                    [12112, 8472],
                                    [12136, 8496],
                                    [12168, 8504],
                                    [12208, 8536],
                                    [12200, 8592],
                                    [12240, 8616],
                                    [12232, 8624],
                                    [12192, 8632],
                                    [12168, 8664],
                                    [12176, 8736],
                                    [12136, 8784],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Weaver's Fen" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [10320.1748046875, 5902.75927734375],
                                    [10321.3466796875, 5837.58544921875],
                                    [10403.2216796875, 5541.033203125],
                                    [10409.166015625, 5450.06982421875],
                                    [10490.1611328125, 5225.7900390625],
                                    [10489.65234375, 4986.51708984375],
                                    [10481.8984375, 4936.38134765625],
                                    [10461.08203125, 4889.20068359375],
                                    [10413.3671875, 4873.27001953125],
                                    [10413.9658203125, 4858.296875],
                                    [10430.46484375, 4830.8837890625],
                                    [10491.103515625, 4822.2548828125],
                                    [10507.728515625, 4801.9599609375],
                                    [10542.34375, 4785.46142578125],
                                    [10574.45703125, 4736.76708984375],
                                    [10578.138671875, 4698.63232421875],
                                    [10603.205078125, 4574.29052734375],
                                    [10671.9208984375, 4575.69091796875],
                                    [10726.8115234375, 4606.060546875],
                                    [10786.4375, 4618.9814453125],
                                    [10845.5498046875, 4612.34619140625],
                                    [10893.2490234375, 4567.71337890625],
                                    [10911.330078125, 4510.22021484375],
                                    [10887.630859375, 4420.6806640625],
                                    [10903.2763671875, 4381.51123046875],
                                    [10957.1708984375, 4343.18603515625],
                                    [11078.986328125, 4295.4072265625],
                                    [11173.927734375, 4278.55810546875],
                                    [11248.01171875, 4248.3896484375],
                                    [11296.06640625, 4226.83056640625],
                                    [11330.197265625, 4229.04833984375],
                                    [11357.87890625, 4239.66455078125],
                                    [11401.75, 4237.990234375],
                                    [11461.6845703125, 4210.36962890625],
                                    [11479.80078125, 4185.478515625],
                                    [11475.990234375, 4120.2109375],
                                    [11505.4599609375, 4088.77490234375],
                                    [11554.9521484375, 4094.4638671875],
                                    [11611.4697265625, 4148.1513671875],
                                    [11675.1650390625, 4134.8056640625],
                                    [11730.37109375, 4109.236328125],
                                    [11780.482421875, 4045.655029296875],
                                    [11817.3916015625, 4022.696044921875],
                                    [11830.259765625, 4087.663818359375],
                                    [11837.7109375, 4147.4130859375],
                                    [11886.6533203125, 4296.46533203125],
                                    [11921.916015625, 4399.2333984375],
                                    [11921.5439453125, 4426.4853515625],
                                    [11906.7041015625, 4466.79345703125],
                                    [11887.642578125, 4578.443359375],
                                    [11910.396484375, 4722.845703125],
                                    [11853.91796875, 4738.7431640625],
                                    [11802.357421875, 4739.50927734375],
                                    [11791.08203125, 4763.10595703125],
                                    [11807.23828125, 4801.08740234375],
                                    [11809.1884765625, 4835.58251953125],
                                    [11796.5361328125, 4877.9453125],
                                    [11776.58203125, 4916.9091796875],
                                    [11769.53515625, 4949.82861328125],
                                    [11768.36328125, 4993.01806640625],
                                    [11774.8291015625, 5046.99169921875],
                                    [11781.412109375, 5073.15185546875],
                                    [11801.853515625, 5083.12841796875],
                                    [11830.3388671875, 5073.169921875],
                                    [11887.93359375, 5036.111328125],
                                    [11936.6337890625, 5013.80029296875],
                                    [12041.2529296875, 4979.43798828125],
                                    [12120.5283203125, 4966.78564453125],
                                    [12150.619140625, 4993.755859375],
                                    [12155.587890625, 5033.9951171875],
                                    [12164.2861328125, 5078.90478515625],
                                    [12183.0234375, 5113.1640625],
                                    [12207.9326171875, 5155.650390625],
                                    [12247.9873046875, 5191.16455078125],
                                    [12305.134765625, 5215.73974609375],
                                    [12382.08203125, 5221.63134765625],
                                    [12441.7763671875, 5226.39990234375],
                                    [12517.47265625, 5268.21728515625],
                                    [12555.2421875, 5310.0419921875],
                                    [12610.6708984375, 5341.46484375],
                                    [12679.5185546875, 5404.82666015625],
                                    [12683.2841796875, 5548.7685546875],
                                    [12611.4091796875, 5544.90771484375],
                                    [12546.02734375, 5557.126953125],
                                    [12488.7587890625, 5584.13232421875],
                                    [12460.958984375, 5586.837890625],
                                    [12441.8203125, 5571.73046875],
                                    [12394.431640625, 5554.73486328125],
                                    [12374.35546875, 5556.29052734375],
                                    [12315.0361328125, 5579.38818359375],
                                    [12295.5888671875, 5580.7412109375],
                                    [12274.4560546875, 5566.69189453125],
                                    [12248.9287109375, 5562.9638671875],
                                    [12220.43359375, 5551.1982421875],
                                    [12198.087890625, 5553.64697265625],
                                    [12149.5390625, 5590.443359375],
                                    [12129.490234375, 5622.35302734375],
                                    [12113.5361328125, 5654.42822265625],
                                    [12099.830078125, 5705.8935546875],
                                    [12082.201171875, 5730.81982421875],
                                    [12065.86328125, 5748.31689453125],
                                    [12044.4052734375, 5838.091796875],
                                    [12015.255859375, 5916.19873046875],
                                    [12032.96484375, 5964.56689453125],
                                    [12080.5126953125, 6029.943359375],
                                    [12181.5712890625, 6139.22998046875],
                                    [12099.0029296875, 6193.35546875],
                                    [12024.5859375, 6290.05615234375],
                                    [11916.6201171875, 6315.06298828125],
                                    [11879.65234375, 6352.20947265625],
                                    [11837.2578125, 6365.16943359375],
                                    [11782.75, 6335.60791015625],
                                    [11735.7724609375, 6338.08544921875],
                                    [11723.865234375, 6349],
                                    [11654.41015625, 6356.93798828125],
                                    [11595.865234375, 6381.744140625],
                                    [11561.1376953125, 6365.86865234375],
                                    [11464.8896484375, 6392.6591796875],
                                    [11380.5498046875, 6415.48046875],
                                    [11325.9775390625, 6453.185546875],
                                    [11183.0947265625, 6548.4404296875],
                                    [11181.1083984375, 6579.2001953125],
                                    [11109.66796875, 6602.021484375],
                                    [10988.61328125, 6716.12890625],
                                    [10947.9326171875, 6721.08984375],
                                    [10834.8173828125, 6624.84228515625],
                                    [10742.5390625, 6639.72607421875],
                                    [10518.986328125, 6598.044921875],
                                    [10526.771484375, 6499.61376953125],
                                    [10606.6015625, 6473.02978515625],
                                    [10622.2734375, 6321.37890625],
                                    [10546.67578125, 6221.79638671875],
                                    [10401.083984375, 6119.49755859375],
                                    [10320.1748046875, 5902.75927734375],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Restless Shore" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [11991.1728515625, 4662.56640625],
                                    [12064.458984375, 4607.85205078125],
                                    [12150.87109375, 4598.55322265625],
                                    [12243.01953125, 4610.91259765625],
                                    [12322.669921875, 4642.962890625],
                                    [12445.0712890625, 4687.7890625],
                                    [12540.2900390625, 4739.50732421875],
                                    [12624.427734375, 4785.74169921875],
                                    [12672.7421875, 4817.47216796875],
                                    [12716.2646484375, 4856.482421875],
                                    [12760.4462890625, 4874.06396484375],
                                    [12815.330078125, 4892.91796875],
                                    [12857.96484375, 4913.46826171875],
                                    [12888.236328125, 4954.7080078125],
                                    [12904.4658203125, 5002.455078125],
                                    [12908.896484375, 5048.6474609375],
                                    [12923.330078125, 5100.68115234375],
                                    [12928.0625, 5154.884765625],
                                    [12908.3134765625, 5206.73974609375],
                                    [12868.0849609375, 5231.326171875],
                                    [12841.955078125, 5268.65576171875],
                                    [12819.1328125, 5302.82666015625],
                                    [12801.509765625, 5353.90673828125],
                                    [12765.2548828125, 5369.001953125],
                                    [12733.3720703125, 5395.1337890625],
                                    [12679.5185546875, 5404.82666015625],
                                    [12683.2841796875, 5548.7685546875],
                                    [12611.4091796875, 5544.90771484375],
                                    [12546.02734375, 5557.126953125],
                                    [12488.7587890625, 5584.13232421875],
                                    [12460.958984375, 5586.837890625],
                                    [12441.8203125, 5571.73046875],
                                    [12394.431640625, 5554.73486328125],
                                    [12374.35546875, 5556.29052734375],
                                    [12315.0361328125, 5579.38818359375],
                                    [12295.5888671875, 5580.7412109375],
                                    [12274.4560546875, 5566.69189453125],
                                    [12248.9287109375, 5562.9638671875],
                                    [12220.43359375, 5551.1982421875],
                                    [12198.087890625, 5553.64697265625],
                                    [12149.5390625, 5590.443359375],
                                    [12129.490234375, 5622.35302734375],
                                    [12113.5361328125, 5654.42822265625],
                                    [12099.830078125, 5705.8935546875],
                                    [12082.201171875, 5730.81982421875],
                                    [12065.86328125, 5748.31689453125],
                                    [12044.4052734375, 5838.091796875],
                                    [12015.255859375, 5916.19873046875],
                                    [12032.96484375, 5964.56689453125],
                                    [12080.5126953125, 6029.943359375],
                                    [12181.5712890625, 6139.22998046875],
                                    [12219.16015625, 6137.92919921875],
                                    [12262.5263671875, 6132.3837890625],
                                    [12298.6875, 6111.8544921875],
                                    [12335.0947265625, 6100.091796875],
                                    [12376.0048828125, 6096.232421875],
                                    [12411.98046875, 6080.16064453125],
                                    [12442.7734375, 6051.18359375],
                                    [12507.7529296875, 6019.9267578125],
                                    [12558.36328125, 6002.951171875],
                                    [12601.1904296875, 5999.935546875],
                                    [12636.7275390625, 6020.36083984375],
                                    [12668.7763671875, 6047.4599609375],
                                    [12699.88671875, 6039.93603515625],
                                    [12749.662109375, 5991.7119140625],
                                    [12781.2373046875, 6005.07080078125],
                                    [12846.8173828125, 6000.212890625],
                                    [12908.75, 6013.57177734375],
                                    [12929.396484375, 6037.85986328125],
                                    [12992.544921875, 6037.85986328125],
                                    [13069.052734375, 6008.71435546875],
                                    [13195.169921875, 5939.3505859375],
                                    [13273.9921875, 5882.59814453125],
                                    [13318.1328125, 5896.7861328125],
                                    [13316.552734375, 5967.224609375],
                                    [13335.271484375, 6013.97998046875],
                                    [13387.509765625, 6093.890625],
                                    [13418.18359375, 6123.1318359375],
                                    [13461.0029296875, 6141.6220703125],
                                    [13530.0224609375, 6154.46142578125],
                                    [13623.84375, 6100.76123046875],
                                    [13745.43359375, 6079.583984375],
                                    [13881.6279296875, 6065.27734375],
                                    [13977.0703125, 6060.65478515625],
                                    [14057.1064453125, 6044.38818359375],
                                    [14041.2373046875, 6005.35888671875],
                                    [13964.990234375, 5893.37109375],
                                    [13869.892578125, 5850.4267578125],
                                    [13852.759765625, 5787.17333984375],
                                    [13870.9599609375, 5713.8017578125],
                                    [13948.865234375, 5669.3994140625],
                                    [14000.3203125, 5595.953125],
                                    [14034.4365234375, 5510.80517578125],
                                    [14043.037109375, 5425.0029296875],
                                    [14063.3173828125, 5337.89697265625],
                                    [14110.3447265625, 5316.521484375],
                                    [14202.2587890625, 5310.10888671875],
                                    [14215.0849609375, 5284.4580078125],
                                    [14200.12109375, 5233.15771484375],
                                    [14217.2197265625, 5194.681640625],
                                    [14264.4462890625, 5159.00146484375],
                                    [14276.7099609375, 5091.7841796875],
                                    [14272.927734375, 5022.59619140625],
                                    [14277.9248046875, 4937.228515625],
                                    [14271.791015625, 4838.21875],
                                    [14269.5849609375, 4762.787109375],
                                    [14240.8525390625, 4684.0986328125],
                                    [14207.0615234375, 4639.357421875],
                                    [14153.427734375, 4611.8662109375],
                                    [14072.923828125, 4590.0986328125],
                                    [14007.912109375, 4583.41748046875],
                                    [13953.02734375, 4594.0751953125],
                                    [13920.69921875, 4616.06884765625],
                                    [13892.2236328125, 4631.6611328125],
                                    [13870.5791015625, 4622.517578125],
                                    [13846.3828125, 4591.8310546875],
                                    [13829.634765625, 4553.58642578125],
                                    [13824.080078125, 4492.7685546875],
                                    [13824.8466796875, 4420.2314453125],
                                    [13800.11328125, 4341.16259765625],
                                    [13752.4912109375, 4309.6650390625],
                                    [13672.4453125, 4297.56005859375],
                                    [13602.275390625, 4269.05517578125],
                                    [13510.99609375, 4254.7763671875],
                                    [13432.294921875, 4257.16259765625],
                                    [13349.9052734375, 4236.8642578125],
                                    [13295.5283203125, 4201.4462890625],
                                    [13237.04296875, 4157.6162109375],
                                    [13171.767578125, 4126.53173828125],
                                    [13094.0927734375, 4115.634765625],
                                    [12991.888671875, 4128.59375],
                                    [12903.7470703125, 4140.591796875],
                                    [12821.931640625, 4138.27392578125],
                                    [12745.1279296875, 4128.802734375],
                                    [12690.25390625, 4105.11376953125],
                                    [12629.9462890625, 4096.240234375],
                                    [12566.78125, 4107.8623046875],
                                    [12518.7958984375, 4118.53369140625],
                                    [12452.66015625, 4120.609375],
                                    [12379.8671875, 4108.072265625],
                                    [12231.974609375, 3975.47802734375],
                                    [12146.451171875, 3882.53125],
                                    [12083.919921875, 3903.688232421875],
                                    [12030.6572265625, 4058.1103515625],
                                    [12000.0625, 4059.737548828125],
                                    [11963.1787109375, 4018.48583984375],
                                    [11915.4013671875, 4007.5029296875],
                                    [11817.392578125, 4022.696044921875],
                                    [11830.259765625, 4087.663818359375],
                                    [11837.7109375, 4147.4130859375],
                                    [11886.6533203125, 4296.46533203125],
                                    [11921.916015625, 4399.2333984375],
                                    [11921.5439453125, 4426.4853515625],
                                    [11906.7041015625, 4466.79345703125],
                                    [11887.642578125, 4578.443359375],
                                    [11910.396484375, 4722.845703125],
                                    [11991.1728515625, 4662.56640625],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Reekwater" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [10569.1328125, 4336.8935546875],
                                    [10429.6865234375, 4178.37353515625],
                                    [10395.3310546875, 3983.27197265625],
                                    [10392.9423828125, 3829.86376953125],
                                    [10338.90625, 3722.845703125],
                                    [10270.65234375, 3416.12255859375],
                                    [10238.4150390625, 3206.179931640625],
                                    [10218.41796875, 3131.08935546875],
                                    [10230.318359375, 3083.164306640625],
                                    [10251.7861328125, 3047.407470703125],
                                    [10261.3447265625, 2973.08056640625],
                                    [10239.51953125, 2845.892578125],
                                    [10162.9560546875, 2762.271240234375],
                                    [10219.5888671875, 2667.79248046875],
                                    [10287.537109375, 2556.001953125],
                                    [10283.1328125, 2446.239990234375],
                                    [10330.3349609375, 2353.887451171875],
                                    [10237.1728515625, 2276.859375],
                                    [10215.2236328125, 2166.32568359375],
                                    [10383.9140625, 2072.281494140625],
                                    [10621.28515625, 2054.562255859375],
                                    [10758.611328125, 2081.69384765625],
                                    [10896.33984375, 2091.489990234375],
                                    [10964.3896484375, 2143.412109375],
                                    [11030.76171875, 2219.0361328125],
                                    [11078.8828125, 2280.308837890625],
                                    [11102.63671875, 2359.1474609375],
                                    [11107.1328125, 2438.883056640625],
                                    [11145.130859375, 2510.328125],
                                    [11239.9658203125, 2544.678955078125],
                                    [11305.44921875, 2567.673095703125],
                                    [11344.017578125, 2539.234619140625],
                                    [11379.1611328125, 2498.686767578125],
                                    [11433.8701171875, 2483.491943359375],
                                    [11507.0478515625, 2484.27099609375],
                                    [11554.96484375, 2504.953369140625],
                                    [11590.8984375, 2548.271240234375],
                                    [11625.6240234375, 2581.2900390625],
                                    [11658.9765625, 2595.606201171875],
                                    [11694.34375, 2581.784423828125],
                                    [11719.7314453125, 2546.650390625],
                                    [11743.1513671875, 2521.71337890625],
                                    [11800.91015625, 2493.582763671875],
                                    [11862.166015625, 2470.25537109375],
                                    [11915.9765625, 2448.3857421875],
                                    [11973.9228515625, 2441.62255859375],
                                    [12043.7578125, 2493.86328125],
                                    [12107.130859375, 2541.8408203125],
                                    [12133.798828125, 2578.63134765625],
                                    [12202.462890625, 2729.56591796875],
                                    [12260.36328125, 2992.8369140625],
                                    [12268.8740234375, 3106.74365234375],
                                    [12249.94921875, 3287.966796875],
                                    [12262.6162109375, 3386.972900390625],
                                    [12269.5927734375, 3581.923095703125],
                                    [12243.2822265625, 3766.89697265625],
                                    [12192.01171875, 3851.04345703125],
                                    [12146.4501953125, 3882.53125],
                                    [12083.9208984375, 3903.688232421875],
                                    [12030.6572265625, 4058.1103515625],
                                    [12000.0625, 4059.737548828125],
                                    [11963.1787109375, 4018.48583984375],
                                    [11915.4013671875, 4007.5029296875],
                                    [11817.3916015625, 4022.696044921875],
                                    [11780.482421875, 4045.655029296875],
                                    [11730.37109375, 4109.236328125],
                                    [11675.1650390625, 4134.8056640625],
                                    [11611.4697265625, 4148.1513671875],
                                    [11554.9521484375, 4094.4638671875],
                                    [11505.4599609375, 4088.77490234375],
                                    [11475.990234375, 4120.2109375],
                                    [11479.80078125, 4185.478515625],
                                    [11461.6845703125, 4210.36962890625],
                                    [11401.75, 4237.990234375],
                                    [11357.87890625, 4239.66455078125],
                                    [11330.197265625, 4229.04833984375],
                                    [11296.06640625, 4226.83056640625],
                                    [11248.01171875, 4248.3896484375],
                                    [11173.927734375, 4278.55810546875],
                                    [11078.986328125, 4295.4072265625],
                                    [10957.1708984375, 4343.18603515625],
                                    [10903.2763671875, 4381.51123046875],
                                    [10887.630859375, 4420.6806640625],
                                    [10911.330078125, 4510.22021484375],
                                    [10893.2490234375, 4567.71337890625],
                                    [10845.5498046875, 4612.34619140625],
                                    [10786.4375, 4618.9814453125],
                                    [10726.8115234375, 4606.060546875],
                                    [10671.9208984375, 4575.69091796875],
                                    [10603.205078125, 4574.29052734375],
                                    [10586.40234375, 4455.38232421875],
                                    [10572.7412109375, 4367.53857421875],
                                    [10569.1328125, 4336.8935546875],
                                ],
                            ],
                        },
                    },
                    {
                        type: "Feature",
                        properties: { name: "Queensport" },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [6244, 3698],
                                    [6284, 3704],
                                    [6300, 3666],
                                    [6348, 3652],
                                    [6344, 3652],
                                    [6400, 3690],
                                    [6408, 3690],
                                    [6544, 3754],
                                    [6616, 3818],
                                    [6712, 3842],
                                    [6844, 3774],
                                    [6844, 3772],
                                    [7012, 3712],
                                    [7016, 3716],
                                    [7036, 3730],
                                    [7044, 3734],
                                    [7052, 3794],
                                    [7060, 3798],
                                    [7052, 3868],
                                    [7048, 3866],
                                    [7100, 3902],
                                    [7100, 3906],
                                    [7136, 3886],
                                    [7136, 3884],
                                    [7200, 3888],
                                    [7200, 3890],
                                    [7280, 3928],
                                    [7356, 3926],
                                    [7372, 4012],
                                    [7404, 4028],
                                    [7396, 4094],
                                    [7396, 4096],
                                    [7460, 4164],
                                    [7516, 4192],
                                    [7484, 4316],
                                    [7484, 4356],
                                    [7516, 4464],
                                    [7600, 4468],
                                    [7692, 4496],
                                    [7756, 4448],
                                    [7768, 4456],
                                    [7788, 4484],
                                    [7776, 4592],
                                    [7836, 4660],
                                    [7932, 4836],
                                    [8116, 4884],
                                    [8216, 4880],
                                    [8280, 5076],
                                    [8312, 5232],
                                    [8376, 5436],
                                    [8272, 5560],
                                    [8248, 5648],
                                    [8288, 5944],
                                    [8248, 6012],
                                    [8264, 6044],
                                    [8256, 6092],
                                    [8248, 6112],
                                    [8232, 6128],
                                    [8040, 6140],
                                    [7980, 6176],
                                    [7840, 6220],
                                    [7724, 6220],
                                    [7680, 6220],
                                    [7628, 6260],
                                    [7564, 6292],
                                    [7492, 6300],
                                    [7452, 6256],
                                    [7400, 6240],
                                    [7368, 6168],
                                    [7284, 5836],
                                    [7344, 5768],
                                    [7296, 5660],
                                    [7228, 5580],
                                    [7156, 5384],
                                    [7148, 5260],
                                    [6976, 5208],
                                    [6944, 5056],
                                    [6980, 4976],
                                    [6960, 4936],
                                    [6920, 4836],
                                    [6784, 4800],
                                    [6736, 4728],
                                    [6764, 4592],
                                    [6656, 4492],
                                    [6580, 4436],
                                    [6472, 4428],
                                    [6300, 4220],
                                    [6256, 4120],
                                    [6212, 4088],
                                    [6248, 4022],
                                    [6248, 3984],
                                    [6216, 3916],
                                    [6224, 3860],
                                    [6240, 3812],
                                    [6220, 3742],
                                    [6244, 3698],
                                ],
                            ],
                        },
                    },
                ],
            });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/alchemy1_compass-535d2ba71622527d5759efe029b7d032.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/grain_compass-51305eb91b47a4a4a7893983013fc4f7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/herbt1-068ac557a08b083708eb8c219d1982ae.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/gatherables/vegetable_compass-58a3f90eb1f26865c941d67e0a9afa5d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_capital_selected-9b37bc6667db0c773f369a3f5787c9a8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_discovered-784e0657fc15f8c887975898c2ecb4da.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_fort_selected-4656b6c5c5c5d2c26a7bd9f3730233b7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_house-b8fef31e1d7edd28c3b34624653997ce.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_house_disabled-bce620675d347cc04e760e4e7f419192.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_house_selected-d5381a24620dc52378d2036417a01eef.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_house_selected_disabled-67abf9be2f819fddab7fd11c5dd4f3eb.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_territory-c06d22149df9b3b41d544464d7fd1375.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/icon_map_territory_selected-d529e8bf8c63aaf6a9b6cd337dec11c5.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/lastdeathposition-fbb8035da808e9bbffbd4f94e318ad64.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/map_settlementclaimed-3f92254e678d9e9c1c2dac62868ca812.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/bear_compass-82afae60209e0a7f6716dae1ef33d9ee.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/bear_elemental_compass-d14bcd35792e35fa37607be69aee3af9.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/bison_compass-4e3f261cff3513cf0cf6794f21b4d26a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/boar_compass-0b2b737496acfcc89a4424bb7033e7e2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/damned_compass-4df252cc8468f55fb85d8e7f0fafd2a1.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/elk_compass-7af87e8b51fb264e9f393e447b15fee5.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/elkbuck_compass-1754434c9347ef73078b399edf9aed75.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/ghost_compass-2fd3d2da9e812eb2e8029f47b916ecd2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/turkey_compass-4193c790e0b0ec1257f1bad92fbbc908.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/withered_compass-403752dd96bc07eec3dbbcc8da1ea614.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/npcs/wolf_compass-ab228eff626157a13bfcd9466de07cfb.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/player-586b68650a166800b09630c4e234a693.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_100m-23e3535f1a1b1ba60d482184742a8e1e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_15m-56e35989a3cf68a0b1ce2cc6aec6aad7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_20m-1d0db2c8c5baee541cb5430393e668ac.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_25m-cf5cea3190c57d56f4c9a70080bc7067.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_30m-772a47286ecd6e6925eaa13d43662d31.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_40m-1b9a9e826fd5003ca1dec34c011dfac8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_50m-553aab6b2cc688ad1b8d7ef7a5536622.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_60m-14dce1d3501091b1ec74c684ee7605ba.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/claim_80m-500f00a236b0b91c15a59f44cb2682e0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/abandoned_campsite-3a21cead1cd0def4d4be91706ad4f1f7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/abandoned_farm_mill-cd728b545570f1e1e845c17988124f04.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/abandoned_farm_village-7048cf1f3d574988b77ad2000f43705b.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/abandoned_fishing_village-da1147116934164d5f6c69823f0b8da8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/abandoned_village-5f0833ecfc5cf81ab14974ec056d2759.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/abandonedcity-c99baac976d98b0c38117d07e4c95748.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_buttress-4e797d1a70a11c5995a078acd33609f0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_lighthouse-dd6212946eccda14d6114f77162392d8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_lookout-8ada0e25b2f2ee77a33fe9343e30936d.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_malevolence-397db5b88c7d2e4b47e2b0f06c32ea61.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_ruins-a54a9d58685cf397d3cafea52bd98773.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_ruins_spheres-9e1631740a2a79e1294baf716c9d2335.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_shrine-43a80328432e34b6e9046cbd1dbdabe5.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_spite-64ce830fd505213065811aecdafca572.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_temple_lg-94b5d9ac42d266573d44af3a829f9623.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_temple_sm-3851b54419deb51fda88ae74359aca21.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_tower-42c0814a87ad24bcb9e74b807f21765a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ancient_watchtower-dd6212946eccda14d6114f77162392d8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_camp-7bce35b68c7ef2035adc5f41abcd1b6b.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_cave-c6e994dc139b3395b4f8ea8ba3dedde0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_grove-67ac2e4114924c308f773c8f34b3727e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_grovealtar-a59415a61dab2f37688dc818b448ce13.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_ruins-2112ef23d7e0a4183ba8eb12d18edc1e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_spriggan-47f6e6ca28f4a043ca117b48d9f7c0c0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/angryearth_village-7804e880eb795d06bf59da3dd115c024.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/azure_tree-51cc467af30fe2a2bd9fdf359b6bff59.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/azurefissure-e157d8ba4aeda5262bdd7bd661a3681a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/battlefield_fort-0eafe667f42584c5509479c39258f757.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/bear_den-d7e3acd09501757bca0a6a1aa5fba28e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/buildings_damned-f6f1921c7748803830d8af3058b73307.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/cave-61ae34bdd0fd8c2600d3576350f2b327.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_100m-23e3535f1a1b1ba60d482184742a8e1e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_15m-56e35989a3cf68a0b1ce2cc6aec6aad7.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_20m-1d0db2c8c5baee541cb5430393e668ac.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_25m-cf5cea3190c57d56f4c9a70080bc7067.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_30m-772a47286ecd6e6925eaa13d43662d31.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_40m-1b9a9e826fd5003ca1dec34c011dfac8.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_50m-553aab6b2cc688ad1b8d7ef7a5536622.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_60m-14dce1d3501091b1ec74c684ee7605ba.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_80m-500f00a236b0b91c15a59f44cb2682e0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/claim_compass-f956c0df878091fe1b68ba0c14c01499.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/constructionsite-6f2fd1b15b611a6bf1ee03817afbb906.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/damned_compass-47ed56a7e1992263eeca69b82ade8adb.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/damned_major_compass-5949a1cc5a5dafde49aab9b398a9b1cc.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/damnedcapitalcity-0eafe667f42584c5509479c39258f757.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/damnedfortress-00d68ec9467fedab0e4768c14c7f7209.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/damnedtrench-61ae34bdd0fd8c2600d3576350f2b327.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/den_bear_elemental-20762fbb4bd14236b8438e66bd9fa819.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/elemental_bear-20762fbb4bd14236b8438e66bd9fa819.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/elemental_wolf_ice-20762fbb4bd14236b8438e66bd9fa819.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/excavation-bedf1ca4db93986e1ba83272dbd5f27e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/farmingvillage-7048cf1f3d574988b77ad2000f43705b.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/fort-f009c58077bfe95d87491ece62d6782f.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/graveyard-0ba0bef9760ee6b67888d8d31f86b9d9.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/icon_nature_buffalo-fd01635feaf65c894ac2cd5a42db130f.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/lumbermill-f516afd1b0c9f6593fc0dcc62276e865.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/military_camp-c2d566b790c1f00d24c4294054881f3e.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/mine-2e06a11b0c880924a05992abbae6b6f2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/oilfield-665eda5107f8171863c544d33eb308b2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/ore-aeb676f1a4559847948f701034c867d0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost-f338302e31b7ee1bca49e0780c57c6db.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost_alchemy-f338302e31b7ee1bca49e0780c57c6db.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost_blacksmith-f338302e31b7ee1bca49e0780c57c6db.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost_compass-e353e61a55176a5de6703fd531d36e59.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost_damned-f338302e31b7ee1bca49e0780c57c6db.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost_lawless-33e2d2ed561926fe087e294faf2fe94a.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpost_outfitting-f338302e31b7ee1bca49e0780c57c6db.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/outpostdiamond-496af43f5d3c39ec426b0d4b85f0888f.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/poi_lawless-dfe0cc6b2cbe654586224d8058c8afdf.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/resource_run-aeb676f1a4559847948f701034c867d0.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/shipwreck-7233d68d36dc62ddc9fe03b5dee29a83.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/shrine_air-7028b4a7f677739c5b83eab4d63351bd.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/shrine_earth-e835e8b2cb58da4a23803a0c980d14f2.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/shrine_fire-e1ff99c7b12aaf4975e1701ee4a466ab.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/shrine_water-c0bb71981cd275d80d71c2f46992d057.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pois/hires/wolf_den-b7739c86be84906793703263d7c83b2c.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/pulse-0d2b8863c08314e6a4da80a1618e4031.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/respawnguildpoint-a5899b5d36325fcf09b9044903cd9762.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/respawnpoint-6172a83f66d683391cb6cfd10726aafc.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/respawnpoint_last-3b2ba732e3648734eec05f3a1e9e6294.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/respawnpointcentered-fa5d4c380a5a03d41dd48e5f2acb3549.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/respawnpublicpoint-a5899b5d36325fcf09b9044903cd9762.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/traildot-e826486a13034a8a2416b14b628e1934.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/waypoint-1b8de207a84d80eb80e5980249033e12.png";
    },
    function (e, n, o) {
        e.exports = o.p + "media/map_images/icon/waypoint_compass-4685f0dacf03eafabae8f0f151bcc8ea.png";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, o) {
        "use strict";
        o.r(n);
        var i = o(3),
            a = o.n(i),
            c = o(172),
            t = o.n(c),
            s = o(82),
            r = o.n(s),
            p = o(97),
            m = o.n(p),
            d = o(98),
            l = o.n(d),
            u = o(99),
            g = o.n(u),
            f = o(111),
            h = o.n(f),
            b = o(123),
            _ = o.n(b),
            y = o(137),
            v = o.n(y),
            x = o(160),
            w = o.n(x),
            k = o(100),
            S = o.n(k),
            A = o(112),
            E = o.n(A),
            U = o(124),
            z = o.n(U),
            B = o(138),
            j = o.n(B),
            F = o(149),
            T = o.n(F),
            C = o(161),
            I = o.n(C),
            O = o(101),
            P = o.n(O),
            N = o(113),
            R = o.n(N),
            M = o(125),
            q = o.n(M),
            D = o(139),
            G = o.n(D),
            H = o(150),
            W = o.n(H),
            V = o(162),
            J = o.n(V),
            X = o(102),
            $ = o.n(X),
            K = o(114),
            Y = o.n(K),
            Z = o(126),
            Q = o.n(Z),
            ee = o(140),
            ne = o.n(ee),
            oe = o(151),
            ie = o.n(oe),
            ae = o(163),
            ce = o.n(ae),
            te = o(103),
            se = o.n(te),
            re = o(115),
            pe = o.n(re),
            me = o(127),
            de = o.n(me),
            le = o(141),
            ue = o.n(le),
            ge = o(152),
            fe = o.n(ge),
            he = o(164),
            be = o.n(he),
            _e = o(104),
            ye = o.n(_e),
            ve = o(116),
            xe = o.n(ve),
            we = o(128),
            ke = o.n(we),
            Le = o(25),
            Se = o.n(Le),
            Ae = o(142),
            Ee = o.n(Ae),
            Ue = o(153),
            ze = o.n(Ue),
            Be = o(165),
            je = o.n(Be),
            Fe = o(105),
            Te = o.n(Fe),
            Ce = o(117),
            Ie = o.n(Ce),
            Oe = o(129),
            Pe = o.n(Oe),
            Ne = o(131),
            Re = o.n(Ne),
            Me = o(143),
            qe = o.n(Me),
            De = o(154),
            Ge = o.n(De),
            He = o(166),
            We = o.n(He),
            Ve = o(106),
            Je = o.n(Ve),
            Xe = o(118),
            $e = o.n(Xe),
            Ke = o(130),
            Ye = o.n(Ke),
            Ze = o(132),
            Qe = o.n(Ze),
            en = o(144),
            nn = o.n(en),
            on = o(155),
            an = o.n(on),
            cn = o(167),
            tn = o.n(cn),
            sn = o(107),
            rn = o.n(sn),
            pn = o(119),
            mn = o.n(pn),
            dn = o(133),
            ln = o.n(dn),
            un = o(145),
            gn = o.n(un),
            fn = o(156),
            hn = o.n(fn),
            bn = o(168),
            _n = o.n(bn),
            yn = o(108),
            vn = o.n(yn),
            xn = o(120),
            wn = o.n(xn),
            kn = o(134),
            Ln = o.n(kn),
            Sn = o(146),
            An = o.n(Sn),
            En = o(157),
            Un = o.n(En),
            zn = o(169),
            Bn = o.n(zn),
            jn = o(109),
            Fn = o.n(jn),
            Tn = o(121),
            Cn = o.n(Tn),
            In = o(135),
            On = o.n(In),
            Pn = o(147),
            Nn = o.n(Pn),
            Rn = o(158),
            Mn = o.n(Rn),
            qn = o(170),
            Dn = o.n(qn),
            Gn = o(110),
            Hn = o.n(Gn),
            Wn = o(122),
            Vn = o.n(Wn),
            Jn = o(136),
            Xn = o.n(Jn),
            $n = o(148),
            Kn = o.n($n),
            Yn = o(159),
            Zn = o.n(Yn),
            Qn = o(171),
            eo = o.n(Qn),
            no = o(58),
            oo = o.n(no),
            io = o(67),
            ao = o.n(io),
            co = o(56),
            to = o.n(co),
            so = o(66),
            ro = o.n(so),
            po = o(71),
            mo = o.n(po),
            lo = o(65),
            uo = o.n(lo),
            go = o(64),
            fo = o.n(go),
            ho = o(78),
            bo = o.n(ho),
            _o = o(59),
            yo = o.n(_o),
            vo = o(63),
            xo = o.n(vo),
            wo = o(57),
            ko = o.n(wo),
            Lo = o(24),
            So = o.n(Lo),
            Ao = o(50),
            Eo = o.n(Ao),
            Uo = o(51),
            zo = o.n(Uo),
            Bo = o(49),
            jo = o.n(Bo),
            Fo = o(53),
            To = o.n(Fo),
            Co = o(54),
            Io = o.n(Co),
            Oo = o(52),
            Po = o.n(Oo),
            No = o(76),
            Ro = o.n(No),
            Mo = o(77),
            qo = o.n(Mo),
            Do = o(75),
            Go = o.n(Do),
            Ho = o(73),
            Wo = o.n(Ho),
            Vo = o(74),
            Jo = o.n(Vo),
            Xo = o(72),
            $o = o.n(Xo),
            Ko = o(61),
            Yo = o.n(Ko),
            Zo = o(62),
            Qo = o.n(Zo),
            ei = o(60),
            ni = o.n(ei),
            oi = o(47),
            ii = o.n(oi),
            ai = o(48),
            ci = o.n(ai),
            ti = o(46),
            si = o.n(ti),
            ri = o(69),
            pi = o.n(ri),
            mi = o(70),
            di = o.n(mi),
            li = o(68),
            ui = o.n(li),
            gi = o(55),
            fi = o.n(gi),
            hi = o(83),
            bi = o.n(hi),
            _i = o(84),
            yi = o.n(_i),
            vi = o(85),
            xi = o.n(vi),
            wi = o(86),
            ki = o.n(wi),
            Li = o(87),
            Si = o.n(Li),
            Ai = o(88),
            Ei = o.n(Ai),
            Ui = o(89),
            zi = o.n(Ui),
            Bi = o(90),
            ji = o.n(Bi),
            Fi = o(91),
            Ti = o.n(Fi),
            Ci = o(92),
            Ii = o.n(Ci),
            Oi = o(94),
            Pi = o.n(Oi),
            Ni = o(95),
            Ri = o.n(Ni),
            Mi = o(96),
            qi = o.n(Mi),
            Di = o(93),
            Gi = o.n(Di);
        o(185);
        function Hi(e, n, o, i, a, c, t) {
            try {
                var s = e[c](t),
                    r = s.value;
            } catch (p) {
                return void o(p);
            }
            s.done ? n(r) : Promise.resolve(r).then(i, a);
        }
        function Wi(e) {
            return function () {
                var n = this,
                    o = arguments;
                return new Promise(function (i, a) {
                    var c = e.apply(n, o);
                    function t(e) {
                        Hi(c, i, a, t, s, "next", e);
                    }
                    function s(e) {
                        Hi(c, i, a, t, s, "throw", e);
                    }
                    t(void 0);
                });
            };
        }
        o(509);
        var Vi = o(8),
            Ji = {
                named_mob: "Named Mob",
                chest: "Chest",
                ancient_chest: "Ancient Chest",
                abandoned_supplies: "Abandoned Supplies",
                farming_supplies: "Farming Supplies",
                blacksmith_supplies: "Blacksmith Supplies",
                alchemy_supplies: "Alchemy Supplies",
                outfitting_supplies: "Outfitting Supplies",
                engineering_supplies: "Engineering Supplies",
                cooking_supplies: "Cooking Supplies",
                tanning_supplies: "Tanning Supplies",
                weaving_supplies: "Weaving Supplies",
                smelting_supplies: "Smelting Supplies",
                carpentry_supplies: "Carpentry Supplies",
                journal: "Journal Note",
                iron: "Iron",
                starmetal: "Starmetal",
                orichalcum: "Orichalcum",
                silver: "Silver",
                gold: "Gold",
                platinum: "Platinum",
                oil: "Oil",
                wyrdwood: "Wyrdwood",
                ironwood: "Ironwood",
                lodestone: "Lodestone",
                herbs: "Herbs",
                fibers: "Hemp",
                silk: "Silk",
                wireweave: "Wirefibers",
                earthspine: "Earthspine",
                earthcrag: "Earthcrag",
                earthshell: "Earthshell",
                dragonglory: "Dragonglory",
                scorchstone: "Scorchstone",
                salamander: "Salamander Snail",
                shockbulb: "Shockbulb",
                shockspire: "Shockspire",
                beetle: "Lightning Beetle",
                rivercress: "Rivercress",
                springstone: "Springstone",
                spinefish: "Spinefish",
                lifebloom: "Lifebloom",
                lifejewel: "Lifejewel",
                lifemoth: "Lifemoth",
                blightroot: "Blightroot",
                blightcrag: "Blightcrag",
                blightmoth: "Blightmoth",
                soulsprout: "Soulsprout",
                soulspire: "Soulspire",
                soulwyrm: "Soulwyrm",
                wheat: "Wheat",
                strawberries: "Strawberries",
                cranberries: "Cranberries",
                broccoli: "broccoli",
                melons: "Melons",
                squash: "Squash",
                barley: "Barley",
                potatoes: "Potatoes",
                corn: "Corn",
                carrots: "Carrots",
                cabbage: "Cabbage",
                berry: "Berry",
                honey: "Honey",
                nuts: "Nuts",
                fruits: "Fruits",
                grains: "Grains",
                turkey_nest: "Turkey Nest",
                turkey: "Turkey",
                pig: "Pig",
                elk: "Elk",
                bear: "Bear",
                wolf: "Wolf",
                goat: "Goat",
                sheep: "Sheep",
                churro: "Churro",
                alligator: "Alligator",
                cow: "Cow",
                fishing_hole: "Fishing Hole",
                crystal: "Crystal",
                saltpeter: "Saltpeter",
                boar: "Boar",
                bison: "Bison",
                red_fungus: "Red Fungus",
                orange_fungus: "Orange Fungus",
                yellow_fungus: "Yellow Fungus",
                green_fungus: "Green Fungus",
                blue_fungus: "Blue Fungus",
                purple_fungus: "Purple Fungus",
                white_fungus: "White Fungus",
                tan_fungus: "Tan Fungus",
                brown_fungus: "Brown Fungus",
                black_fungus: "Black Fungus",
                pink_fungus: "Pink Fungus",
                cyan_fungus: "Cyan Fungus",
            };
        document.addEventListener(
            "DOMContentLoaded",
            Wi(
                a.a.mark(function e() {
                    var n, o, i, c, t, s, r, p, m, d, l, u, g, f, h;
                    return a.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (f = function (e, n, o, i) {
                                            if ("poi" === e) n ? o.pois.addTo(i) : i.removeLayer(o.pois), n;
                                            else {
                                                if (!o.resources[e]) return;
                                                n ? o.resources[e].addTo(i) : i.removeLayer(o.resources[e]), (g[e] = n);
                                            }
                                        }),
                                        (document.querySelector("#toggle_all").onclick = wc),
                                        document.getElementById("close-map-controls").addEventListener("click", function () {
                                            document.getElementById("map-controls").classList.toggle("active");
                                        }),
                                        document.getElementById("map-controls-icon").addEventListener("click", function () {
                                            document.getElementById("map-controls").classList.toggle("active");
                                        }),
                                        (n = ["general", "mining", "wood", "cloth", "alchemy1", "alchemy2", "alchemy3", "cooking", "animals", "dyes"]).forEach(function (e) {
                                            document.getElementById("collapse-".concat(e)).addEventListener("click", function () {
                                                document.getElementById("collapse-".concat(e)).classList.remove("active"),
                                                    document.getElementById("expand-".concat(e)).classList.add("active"),
                                                    document.getElementById("group-".concat(e)).classList.add("collapsed");
                                            }),
                                                document.getElementById("expand-".concat(e)).addEventListener("click", function () {
                                                    n.forEach(function (n) {
                                                        e !== n &&
                                                            (document.getElementById("collapse-".concat(n)).classList.remove("active"),
                                                            document.getElementById("expand-".concat(n)).classList.add("active"),
                                                            document.getElementById("group-".concat(n)).classList.add("collapsed"));
                                                    }),
                                                        document.getElementById("collapse-".concat(e)).classList.add("active"),
                                                        document.getElementById("expand-".concat(e)).classList.remove("active"),
                                                        document.getElementById("group-".concat(e)).classList.remove("collapsed");
                                                }),
                                                (document.getElementById("toggle_".concat(e)).onclick = wc);
                                        }),
                                        (L.CRS.MySimple = L.extend({}, L.CRS.Simple, { transformation: new L.Transformation(1 / 16, 0, -1 / 16, 0) })),
                                        (o = L.map("map", { crs: L.CRS.MySimple, attributionControl: !1, zoomControl: !1, preferCanvas: !0 })),
                                        L.control.zoom({ position: "topright" }).addTo(o),
                                        (i = L.latLng(0, 0)),
                                        (c = L.latLng(14336, 14336)),
                                        (t = L.latLngBounds(i, c)),
                                        L.tileLayer("/tiles/{z}/map_y{y}_x{x}.jpg", { minZoom: 0, maxZoom: 6, noWrap: !0, tileSize: 1024, bounds: t }).addTo(o),
                                        (s = new URLSearchParams(window.location.search)).has("lng") && s.has("lat")
                                            ? (s.has("target") &&
                                                  ((r = L.marker([s.get("lat"), s.get("lng")])).bindPopup(
                                                      '<div class="poi-marker"><b>'
                                                          .concat(decodeURIComponent(s.get("target")), '</b><br><a href="https://newworldfans.com/map?lng=')
                                                          .concat(s.get("lng"), "&lat=")
                                                          .concat(s.get("lat"), '">Link</a></div></div>')
                                                  ),
                                                  r.addTo(o)),
                                              o.setView([s.get("lat"), s.get("lng")], 4))
                                            : o.setView([5750, 8e3], 1),
                                        (e.next = 20),
                                        kc(o)
                                    );
                                case 20:
                                    (p = e.sent),
                                        o.on("click", function (e) {
                                            document.getElementById("map").dataset.mapAdmin &&
                                                ((window.innerWidth <= 800 && window.innerHeight <= 600) ||
                                                    (document.getElementById("newMarkerModal") && (document.getElementById("newMarkerModal").classList.toggle("is-active"), (document.getElementById("markerFormLatLng").value = e.latlng))));
                                        }),
                                        (m = document.getElementById("submitMarkerForm")) &&
                                            m.addEventListener(
                                                "click",
                                                Wi(
                                                    a.a.mark(function e() {
                                                        var n;
                                                        return a.a.wrap(function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        if (
                                                                            (((n = {}).latlng = document.getElementById("markerFormLatLng").value),
                                                                            (n.type = document.getElementById("markerFormType").value),
                                                                            (n.name = document.getElementById("markerFormNameInput").value),
                                                                            (n.description = document.getElementById("markerFormDescription").value),
                                                                            (n.category = document.getElementById("markerFormCategoryInput").value),
                                                                            (n.level = document.getElementById("markerFormLevelSelect").value),
                                                                            (n.icon_path = document.getElementById("markerFormIconSelect").value),
                                                                            n.latlng && n.type)
                                                                        ) {
                                                                            e.next = 10;
                                                                            break;
                                                                        }
                                                                        return e.abrupt("return");
                                                                    case 10:
                                                                        if ("resource" !== n.type || n.category || n.tier) {
                                                                            e.next = 12;
                                                                            break;
                                                                        }
                                                                        return e.abrupt("return");
                                                                    case 12:
                                                                        if ("poi" !== n.type || n.name) {
                                                                            e.next = 14;
                                                                            break;
                                                                        }
                                                                        return e.abrupt("return");
                                                                    case 14:
                                                                        return (e.next = 16), Vi.post("/api/v1/map/add_marker", n);
                                                                    case 16:
                                                                        if (201 !== e.sent.status) {
                                                                            e.next = 24;
                                                                            break;
                                                                        }
                                                                        return (e.next = 20), kc(o);
                                                                    case 20:
                                                                        (p = e.sent),
                                                                            document.getElementById("newMarkerModal").classList.toggle("is-active"),
                                                                            (document.getElementById("markerFormNameInput").value = ""),
                                                                            (document.getElementById("markerFormDescription").value = "");
                                                                    case 24:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        }, e);
                                                    })
                                                )
                                            ),
                                        (d = document.getElementById("cancelMarkerForm")) &&
                                            d.addEventListener("click", function () {
                                                document.getElementById("newMarkerModal").classList.toggle("is-active");
                                            }),
                                        (l = document.getElementById("cancelDialog")) &&
                                            l.addEventListener("click", function (e) {
                                                document.getElementById("newMarkerModal").classList.toggle("is-active");
                                            }),
                                        (u = document.getElementById("markerFormType")) &&
                                            u.addEventListener("change", function () {
                                                switch (this.value) {
                                                    case "poi":
                                                        (document.getElementById("markerFormCategory").style.display = "none"),
                                                            (document.getElementById("markerFormLevel").style.display = "block"),
                                                            (document.getElementById("markerFormName").style.display = "block"),
                                                            (document.getElementById("markerFormIcon").style.display = "block");
                                                        break;
                                                    case "resource":
                                                        (document.getElementById("markerFormCategory").style.display = "block"),
                                                            (document.getElementById("markerFormLevel").style.display = "none"),
                                                            (document.getElementById("markerFormName").style.display = "none"),
                                                            (document.getElementById("markerFormIcon").style.display = "none");
                                                }
                                            }),
                                        !0,
                                        (g = {
                                            named_mob: !0,
                                            chest: !0,
                                            ancient_chest: !0,
                                            abandoned_supplies: !0,
                                            farming_supplies: !0,
                                            blacksmith_supplies: !0,
                                            alchemy_supplies: !0,
                                            outfitting_supplies: !0,
                                            engineering_supplies: !0,
                                            cooking_supplies: !0,
                                            tanning_supplies: !0,
                                            weaving_supplies: !0,
                                            smelting_supplies: !0,
                                            carpentry_supplies: !0,
                                            journal: !0,
                                            iron: !0,
                                            starmetal: !0,
                                            orichalcum: !0,
                                            silver: !0,
                                            gold: !0,
                                            platinum: !0,
                                            oil: !0,
                                            wyrdwood: !0,
                                            ironwood: !0,
                                            lodestone: !0,
                                            fibers: !0,
                                            silk: !0,
                                            wireweave: !0,
                                            earthspine: !0,
                                            earthcrag: !0,
                                            earthshell: !0,
                                            dragonglory: !0,
                                            scorchstone: !0,
                                            salamander: !0,
                                            shockbulb: !0,
                                            shockspire: !0,
                                            beetle: !0,
                                            rivercress: !0,
                                            springstone: !0,
                                            spinefish: !0,
                                            lifebloom: !0,
                                            lifejewel: !0,
                                            lifemoth: !0,
                                            blightroot: !0,
                                            blightcrag: !0,
                                            blightmoth: !0,
                                            soulsprout: !0,
                                            soulspire: !0,
                                            soulwyrm: !0,
                                            wheat: !0,
                                            strawberries: !0,
                                            cranberries: !0,
                                            broccoli: !0,
                                            melons: !0,
                                            squash: !0,
                                            barley: !0,
                                            potatoes: !0,
                                            corn: !0,
                                            carrots: !0,
                                            cabbage: !0,
                                            berry: !0,
                                            honey: !0,
                                            nuts: !0,
                                            fruits: !0,
                                            grains: !0,
                                            turkey_nest: !0,
                                            turkey: !0,
                                            pig: !0,
                                            elk: !0,
                                            bear: !0,
                                            wolf: !0,
                                            goat: !0,
                                            sheep: !0,
                                            churro: !0,
                                            alligator: !0,
                                            cow: !0,
                                            fishing_hole: !0,
                                            crystal: !0,
                                            saltpeter: !0,
                                            boar: !0,
                                            bison: !0,
                                            red_fungus: !0,
                                            orange_fungus: !0,
                                            yellow_fungus: !0,
                                            green_fungus: !0,
                                            blue_fungus: !0,
                                            purple_fungus: !0,
                                            white_fungus: !0,
                                            tan_fungus: !0,
                                            brown_fungus: !0,
                                            black_fungus: !0,
                                            pink_fungus: !0,
                                            cyan_fungus: !0,
                                        }),
                                        (h = document.getElementsByClassName("marker-toggle")),
                                        Array.from(h).forEach(function (e) {
                                            var n = e.value;
                                            e.addEventListener("click", function () {
                                                f(n, e.checked, p, o);
                                            });
                                        });
                                case 34:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                })
            )
        );
        var Xi = (function () {
                var e = Wi(
                    a.a.mark(function e(n, o) {
                        var i, c;
                        return a.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (i = { pois: [], resources: {} }), (e.prev = 1), (e.next = 4), Vi.get("/api/v1/map/poi");
                                        case 4:
                                            return (
                                                e.sent.data.forEach(function (e) {
                                                    var n, o;
                                                    if (e.icon_path) {
                                                        switch (e.icon_path) {
                                                            case "township.png":
                                                                o = Ki;
                                                                break;
                                                            case "fortress.png":
                                                                o = Yi;
                                                                break;
                                                            case "icon_capital.png":
                                                                o = Zi;
                                                                break;
                                                            case "icon_map_fort.png":
                                                                o = Qi;
                                                                break;
                                                            case "abandoned_campsite.png":
                                                                o = ea;
                                                                break;
                                                            case "ancient_shrine.png":
                                                                o = na;
                                                                break;
                                                            case "angryearth_village.png":
                                                                o = oa;
                                                                break;
                                                            case "damned_mine.png":
                                                                o = ia;
                                                                break;
                                                            case "outpost_lawless.png":
                                                                o = aa;
                                                                break;
                                                            case "abandoned_farm_mill.png":
                                                                o = ca;
                                                                break;
                                                            case "ancient_spite.png":
                                                                o = ta;
                                                                break;
                                                            case "arena_spriggan_angryearth.png":
                                                                o = sa;
                                                                break;
                                                            case "damnedcapitalcity.png":
                                                                o = ra;
                                                                break;
                                                            case "icon_nature_buffalo.png":
                                                                o = pa;
                                                                break;
                                                            case "outpost_outfitting.png":
                                                                o = ma;
                                                                break;
                                                            case "abandoned_farm_village.png":
                                                                o = da;
                                                                break;
                                                            case "ancient_temple_lg.png":
                                                                o = la;
                                                                break;
                                                            case "azure_tree.png":
                                                                o = ua;
                                                                break;
                                                            case "damnedfortress.png":
                                                                o = ga;
                                                                break;
                                                            case "lumbermill.png":
                                                                o = fa;
                                                                break;
                                                            case "outpostdiamond.png":
                                                                o = ha;
                                                                break;
                                                            case "abandoned_fishing_village.png":
                                                                o = ba;
                                                                break;
                                                            case "ancient_temple_sm.png":
                                                                o = _a;
                                                                break;
                                                            case "azurefissure.png":
                                                                o = ya;
                                                                break;
                                                            case "damnedtrench.png":
                                                                o = va;
                                                                break;
                                                            case "military_camp.png":
                                                                o = xa;
                                                                break;
                                                            case "poi_lawless.png":
                                                                o = wa;
                                                                break;
                                                            case "abandoned_village.png":
                                                                o = ka;
                                                                break;
                                                            case "ancient_tower.png":
                                                                o = La;
                                                                break;
                                                            case "battlefield_fort.png":
                                                                o = Sa;
                                                                break;
                                                            case "den_bear_elemental.png":
                                                                o = Aa;
                                                                break;
                                                            case "mine.png":
                                                                o = Ea;
                                                                break;
                                                            case "resource_run.png":
                                                                o = Ua;
                                                                break;
                                                            case "abandonedcity.png":
                                                                o = za;
                                                                break;
                                                            case "ancient_watchtower.png":
                                                                o = Ba;
                                                                break;
                                                            case "bear_den.png":
                                                                o = ja;
                                                                break;
                                                            case "claim_compass.png":
                                                                o = Fa;
                                                                break;
                                                            case "elemental_bear.png":
                                                                o = Ta;
                                                                break;
                                                            case "oilfield.png":
                                                                o = Ca;
                                                                break;
                                                            case "shattered_obelisk.png":
                                                                o = Ia;
                                                                break;
                                                            case "ancient_buttress.png":
                                                                o = Oa;
                                                                break;
                                                            case "angryearth_camp.png":
                                                                o = Pa;
                                                                break;
                                                            case "buildings_damned.png":
                                                                o = Na;
                                                                break;
                                                            case "constructionsite.png":
                                                                o = Ra;
                                                                break;
                                                            case "elemental_wolf_ice.png":
                                                                o = Ma;
                                                                break;
                                                            case "ore.png":
                                                                o = qa;
                                                                break;
                                                            case "shipwreck.png":
                                                                o = Da;
                                                                break;
                                                            case "ancient_lighthouse.png":
                                                                o = Ga;
                                                                break;
                                                            case "angryearth_cave.png":
                                                                o = Ha;
                                                                break;
                                                            case "cave.png":
                                                                o = Wa;
                                                                break;
                                                            case "damned_campsite.png":
                                                                o = Va;
                                                                break;
                                                            case "excavation.png":
                                                                o = Ja;
                                                                break;
                                                            case "outpost.png":
                                                                o = Xa;
                                                                break;
                                                            case "shrine_air.png":
                                                                o = $a;
                                                                break;
                                                            case "ancient_lookout.png":
                                                                o = Ka;
                                                                break;
                                                            case "angryearth_grove.png":
                                                                o = Ya;
                                                                break;
                                                            case "damned_compass.png":
                                                                o = Za;
                                                                break;
                                                            case "farmingvillage.png":
                                                                o = Qa;
                                                                break;
                                                            case "outpost_alchemy.png":
                                                                o = ec;
                                                                break;
                                                            case "shrine_earth.png":
                                                                o = nc;
                                                                break;
                                                            case "ancient_malevolence.png":
                                                                o = oc;
                                                                break;
                                                            case "angryearth_grovealtar.png":
                                                                o = ic;
                                                                break;
                                                            case "damned_compass_danger.png":
                                                                o = ac;
                                                                break;
                                                            case "fort.png":
                                                                o = cc;
                                                                break;
                                                            case "outpost_blacksmith.png":
                                                                o = tc;
                                                                break;
                                                            case "shrine_fire.png":
                                                                o = sc;
                                                                break;
                                                            case "ancient_ruins.png":
                                                                o = rc;
                                                                break;
                                                            case "angryearth_ruins.png":
                                                                o = pc;
                                                                break;
                                                            case "damned_major_compass.png":
                                                                o = mc;
                                                                break;
                                                            case "graveyard.png":
                                                                o = dc;
                                                                break;
                                                            case "outpost_compass.png":
                                                                o = lc;
                                                                break;
                                                            case "shrine_water.png":
                                                                o = uc;
                                                                break;
                                                            case "ancient_ruins_spheres.png":
                                                                o = gc;
                                                                break;
                                                            case "angryearth_spriggan.png":
                                                                o = fc;
                                                                break;
                                                            case "damned_major_compass_danger.png":
                                                                o = hc;
                                                                break;
                                                            case "hero_shipwreck.png":
                                                                o = bc;
                                                                break;
                                                            case "outpost_damned.png":
                                                                o = _c;
                                                                break;
                                                            case "wolf_den.png":
                                                                o = yc;
                                                        }
                                                        n = L.marker([e.lat, e.lng], { icon: o });
                                                    } else n = L.marker([e.lat, e.lng]);
                                                    document.getElementById("map").dataset.mapAdmin
                                                        ? n.bindPopup(
                                                              '<div class="poi-marker"><b>'
                                                                  .concat(e.name, "</b><br>")
                                                                  .concat(e.description, '<div class="marker-id">#')
                                                                  .concat(e.id, '<br><a href="https://newworldfans.com/map?lng=')
                                                                  .concat(e.lng, "&lat=")
                                                                  .concat(e.lat, '">Link</a></div></div>')
                                                          )
                                                        : n.bindPopup(
                                                              '<div class="poi-marker"><b>'
                                                                  .concat(e.name, "</b><br>")
                                                                  .concat(e.description, '<br><a href="https://newworldfans.com/map?lng=')
                                                                  .concat(e.lng, "&lat=")
                                                                  .concat(e.lat, '">Link</a></div>')
                                                          ),
                                                        i.pois.push(n);
                                                }),
                                                (e.next = 8),
                                                Vi.get("/api/v1/map/resource")
                                            );
                                        case 8:
                                            (c = e.sent),
                                                (document.getElementById("map-loading").style.display = "none"),
                                                c.data.forEach(function (e) {
                                                    if (e.category) {
                                                        var n;
                                                        switch (e.category) {
                                                            case "named_mob":
                                                            case "chest":
                                                            case "ancient_chest":
                                                            case "abandoned_supplies":
                                                            case "farming_supplies":
                                                            case "blacksmith_supplies":
                                                            case "alchemy_supplies":
                                                            case "outfitting_supplies":
                                                            case "engineering_supplies":
                                                            case "cooking_supplies":
                                                            case "tanning_supplies":
                                                            case "weaving_supplies":
                                                            case "smelting_supplies":
                                                            case "carpentry_supplies":
                                                            case "journal":
                                                                n = Se.a;
                                                                break;
                                                            case "iron":
                                                                n = oo.a;
                                                                break;
                                                            case "silver":
                                                                n = ao.a;
                                                                break;
                                                            case "gold":
                                                                n = to.a;
                                                                break;
                                                            case "platinum":
                                                                n = ro.a;
                                                                break;
                                                            case "starmetal":
                                                                n = mo.a;
                                                                break;
                                                            case "orichalcum":
                                                                n = uo.a;
                                                                break;
                                                            case "oil":
                                                                n = fo.a;
                                                                break;
                                                            case "wyrdwood":
                                                                n = bo.a;
                                                                break;
                                                            case "ironwood":
                                                                n = yo.a;
                                                                break;
                                                            case "lodestone":
                                                                n = xo.a;
                                                                break;
                                                            case "herbs":
                                                                n = ko.a;
                                                                break;
                                                            case "fibers":
                                                            case "silk":
                                                            case "wireweave":
                                                                n = So.a;
                                                                break;
                                                            case "earthspine":
                                                                n = Eo.a;
                                                                break;
                                                            case "earthcrag":
                                                                n = zo.a;
                                                                break;
                                                            case "earthshell":
                                                                n = jo.a;
                                                                break;
                                                            case "dragonglory":
                                                                n = To.a;
                                                                break;
                                                            case "scorchstone":
                                                                n = Io.a;
                                                                break;
                                                            case "salamander":
                                                                n = Po.a;
                                                                break;
                                                            case "shockbulb":
                                                                n = Ro.a;
                                                                break;
                                                            case "shockspire":
                                                                n = qo.a;
                                                                break;
                                                            case "beetle":
                                                                n = Go.a;
                                                                break;
                                                            case "rivercress":
                                                                n = Wo.a;
                                                                break;
                                                            case "springstone":
                                                                n = Jo.a;
                                                                break;
                                                            case "spinefish":
                                                                n = $o.a;
                                                                break;
                                                            case "lifebloom":
                                                                n = Yo.a;
                                                                break;
                                                            case "lifejewel":
                                                                n = Qo.a;
                                                                break;
                                                            case "lifemoth":
                                                                n = ni.a;
                                                                break;
                                                            case "blightroot":
                                                                n = ii.a;
                                                                break;
                                                            case "blightcrag":
                                                                n = ci.a;
                                                                break;
                                                            case "blightmoth":
                                                                n = si.a;
                                                                break;
                                                            case "soulsprout":
                                                                n = pi.a;
                                                                break;
                                                            case "soulspire":
                                                                n = di.a;
                                                                break;
                                                            case "soulwyrm":
                                                                n = ui.a;
                                                                break;
                                                            case "strawberries":
                                                                n = Ri.a;
                                                                break;
                                                            case "cranberries":
                                                                n = zi.a;
                                                                break;
                                                            case "broccoli":
                                                                n = xi.a;
                                                                break;
                                                            case "melons":
                                                                n = ji.a;
                                                                break;
                                                            case "squash":
                                                                n = Pi.a;
                                                                break;
                                                            case "barley":
                                                                n = bi.a;
                                                                break;
                                                            case "potatoes":
                                                                n = Ii.a;
                                                                break;
                                                            case "corn":
                                                                n = Ei.a;
                                                                break;
                                                            case "carrots":
                                                                n = Si.a;
                                                                break;
                                                            case "cabbage":
                                                                n = ki.a;
                                                                break;
                                                            case "berry":
                                                                n = yi.a;
                                                                break;
                                                            case "nuts":
                                                                n = Ti.a;
                                                                break;
                                                            case "wheat":
                                                            case "grains":
                                                                n = qi.a;
                                                                break;
                                                            case "saltpeter":
                                                                n = Gi.a;
                                                                break;
                                                            case "fruits":
                                                            case "honey":
                                                            case "turkey_nest":
                                                            case "turkey":
                                                            case "pig":
                                                            case "elk":
                                                            case "bear":
                                                            case "wolf":
                                                            case "goat":
                                                            case "sheep":
                                                            case "churro":
                                                            case "alligator":
                                                            case "cow":
                                                            case "fishing_hole":
                                                            case "crystal":
                                                            case "boar":
                                                            case "bison":
                                                            case "red_fungus":
                                                            case "orange_fungus":
                                                            case "yellow_fungus":
                                                            case "green_fungus":
                                                            case "blue_fungus":
                                                            case "purple_fungus":
                                                            case "white_fungus":
                                                            case "tan_fungus":
                                                            case "brown_fungus":
                                                            case "black_fungus":
                                                            case "pink_fungus":
                                                            case "cyan_fungus":
                                                                n = fi.a;
                                                                break;
                                                            default:
                                                                n = Se.a;
                                                        }
                                                        var a = L.canvasMarker(L.latLng([e.lat, e.lng]), { radius: 20, img: { url: n, size: [54, 54], offset: { x: 0, y: 0 } } });
                                                        document.getElementById("map").dataset.mapAdmin
                                                            ? a.bindPopup(
                                                                  '<div class="resource-marker"><b>'
                                                                      .concat(Ji[e.category], "</b><br>")
                                                                      .concat(e.description, '<div class="marker-id">#')
                                                                      .concat(e.id, "<br>slice id: ")
                                                                      .concat(e.slice_asset_id, '<br><a href="https://newworldfans.com/map?lng=')
                                                                      .concat(e.lng, "&lat=")
                                                                      .concat(e.lat, '">Link</a></div></div>')
                                                              )
                                                            : a.bindPopup(
                                                                  '<div class="resource-marker"><b>'
                                                                      .concat(Ji[e.category], "</b><br>")
                                                                      .concat(e.description, '<br><a href="https://newworldfans.com/map?lng=')
                                                                      .concat(e.lng, "&lat=")
                                                                      .concat(e.lat, '">Link</a></div>')
                                                              ),
                                                            void 0 === i.resources[e.category] && (i.resources[e.category] = []),
                                                            i.resources[e.category].push(a),
                                                            (o.resources[e.category] = L.layerGroup());
                                                    } else console.log("resource category missing");
                                                }),
                                                (e.next = 16);
                                            break;
                                        case 13:
                                            (e.prev = 13), (e.t0 = e.catch(1)), console.error(e.t0);
                                        case 16:
                                            return e.abrupt("return", i);
                                        case 17:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[1, 13]]
                        );
                    })
                );
                return function (n, o) {
                    return e.apply(this, arguments);
                };
            })(),
            $i = function (e, n, o) {
                o.pois.forEach(function (e) {
                    e.addTo(n.pois);
                }),
                    Object.keys(o.resources).forEach(function (e) {
                        o.resources[e].forEach(function (o) {
                            o.addTo(n.resources[e]);
                        });
                    }),
                    n.pois.addTo(e),
                    Object.keys(n.resources).forEach(function (o) {
                        n.resources[o].addTo(e);
                    });
            },
            Ki = L.icon({ iconUrl: t.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Yi = L.icon({ iconUrl: r.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Zi = L.icon({ iconUrl: m.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Qi = L.icon({ iconUrl: l.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ea = L.icon({ iconUrl: g.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            na = L.icon({ iconUrl: h.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            oa = L.icon({ iconUrl: _.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ia = L.icon({ iconUrl: v.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            aa = L.icon({ iconUrl: w.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ca = L.icon({ iconUrl: S.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ta = L.icon({ iconUrl: E.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            sa = L.icon({ iconUrl: z.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ra = L.icon({ iconUrl: j.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            pa = L.icon({ iconUrl: T.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ma = L.icon({ iconUrl: I.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            da = L.icon({ iconUrl: P.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            la = L.icon({ iconUrl: R.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ua = L.icon({ iconUrl: q.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ga = L.icon({ iconUrl: G.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            fa = L.icon({ iconUrl: W.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ha = L.icon({ iconUrl: J.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ba = L.icon({ iconUrl: $.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            _a = L.icon({ iconUrl: Y.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ya = L.icon({ iconUrl: Q.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            va = L.icon({ iconUrl: ne.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            xa = L.icon({ iconUrl: ie.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            wa = L.icon({ iconUrl: ce.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ka = L.icon({ iconUrl: se.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            La = L.icon({ iconUrl: pe.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Sa = L.icon({ iconUrl: de.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Aa = L.icon({ iconUrl: ue.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ea = L.icon({ iconUrl: fe.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ua = L.icon({ iconUrl: be.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            za = L.icon({ iconUrl: ye.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ba = L.icon({ iconUrl: xe.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ja = L.icon({ iconUrl: ke.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Fa = L.icon({ iconUrl: Se.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ta = L.icon({ iconUrl: Ee.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ca = L.icon({ iconUrl: ze.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ia = L.icon({ iconUrl: je.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Oa = L.icon({ iconUrl: Te.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Pa = L.icon({ iconUrl: Ie.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Na = L.icon({ iconUrl: Pe.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ra = L.icon({ iconUrl: Re.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ma = L.icon({ iconUrl: qe.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            qa = L.icon({ iconUrl: Ge.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Da = L.icon({ iconUrl: We.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ga = L.icon({ iconUrl: Je.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ha = L.icon({ iconUrl: $e.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Wa = L.icon({ iconUrl: Ye.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Va = L.icon({ iconUrl: Qe.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ja = L.icon({ iconUrl: nn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Xa = L.icon({ iconUrl: an.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            $a = L.icon({ iconUrl: tn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ka = L.icon({ iconUrl: rn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Ya = L.icon({ iconUrl: mn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Za = L.icon({ iconUrl: ln.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            Qa = L.icon({ iconUrl: gn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ec = L.icon({ iconUrl: hn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            nc = L.icon({ iconUrl: _n.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            oc = L.icon({ iconUrl: vn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ic = L.icon({ iconUrl: wn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            ac = L.icon({ iconUrl: Ln.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            cc = L.icon({ iconUrl: An.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            tc = L.icon({ iconUrl: Un.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            sc = L.icon({ iconUrl: Bn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            rc = L.icon({ iconUrl: Fn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            pc = L.icon({ iconUrl: Cn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            mc = L.icon({ iconUrl: On.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            dc = L.icon({ iconUrl: Nn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            lc = L.icon({ iconUrl: Mn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            uc = L.icon({ iconUrl: Dn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            gc = L.icon({ iconUrl: Hn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            fc = L.icon({ iconUrl: Vn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            hc = L.icon({ iconUrl: Xn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            bc = L.icon({ iconUrl: Kn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            _c = L.icon({ iconUrl: Zn.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            yc = L.icon({ iconUrl: eo.a, iconSize: [54, 54], popupAnchor: [0, 0] });
        L.icon({ iconUrl: Se.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Se.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: oo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ao.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: to.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ro.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: mo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: uo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: fo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: bo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: yo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: xo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ko.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: So.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: So.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: So.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Eo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: zo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: jo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: To.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Io.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Po.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Ro.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: qo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Go.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Wo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Jo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: $o.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Yo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: Qo.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ni.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ii.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ci.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: si.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: pi.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: di.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: ui.a, iconSize: [54, 54], popupAnchor: [0, 0] }),
            L.icon({ iconUrl: fi.a, iconSize: [54, 54], popupAnchor: [0, 0] });
        function vc(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                o = [];
            if ("all" !== e)
                (o = document.querySelectorAll(".".concat(e, "-marker-toggle"))).forEach(function (e) {
                    (e.checked = n), e.dispatchEvent(new Event("click", { bubbles: !0 }));
                });
            else {
                o = document.querySelectorAll(".marker-toggle");
                var i = document.querySelectorAll(".category-toggle-check");
                o.forEach(function (e) {
                    (e.checked = n), e.dispatchEvent(new Event("click", { bubbles: !0 }));
                }),
                    i.forEach(function (e) {
                        (e.checked = n), (e.onclick = n ? wc : xc);
                    });
            }
        }
        function xc(e) {
            vc(e.target.id.split("_")[1]), (this.onclick = wc);
        }
        function wc(e) {
            vc(e.target.id.split("_")[1], !1), (this.onclick = xc);
        }
        function kc(e) {
            return Lc.apply(this, arguments);
        }
        function Lc() {
            return (Lc = Wi(
                a.a.mark(function e(n) {
                    var o, i;
                    return a.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        o &&
                                            o.pois &&
                                            o.resources &&
                                            (n.removeLayer(o.pois),
                                            o.resources.forEach(function (e) {
                                                n.removeLayer(e);
                                            })),
                                        (o = { pois: L.layerGroup(), resources: {} }),
                                        (e.next = 4),
                                        Xi(n, o)
                                    );
                                case 4:
                                    return (i = e.sent), $i(n, o, i), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                })
            )).apply(this, arguments);
        }
    },
    function (e, n, o) {
        var i = {
            "./icon/fortress": 82,
            "./icon/fortress.png": 82,
            "./icon/gatherables/alchemy1_compass": 333,
            "./icon/gatherables/alchemy1_compass.png": 333,
            "./icon/gatherables/barleyt1": 83,
            "./icon/gatherables/barleyt1.png": 83,
            "./icon/gatherables/berryt1": 84,
            "./icon/gatherables/berryt1.png": 84,
            "./icon/gatherables/broccolit1": 85,
            "./icon/gatherables/broccolit1.png": 85,
            "./icon/gatherables/cabbaget1": 86,
            "./icon/gatherables/cabbaget1.png": 86,
            "./icon/gatherables/carrott1": 87,
            "./icon/gatherables/carrott1.png": 87,
            "./icon/gatherables/cornt1": 88,
            "./icon/gatherables/cornt1.png": 88,
            "./icon/gatherables/cranberryt1": 89,
            "./icon/gatherables/cranberryt1.png": 89,
            "./icon/gatherables/death_boid_compass": 46,
            "./icon/gatherables/death_boid_compass.png": 46,
            "./icon/gatherables/death_plant_compass": 47,
            "./icon/gatherables/death_plant_compass.png": 47,
            "./icon/gatherables/death_stone_compass": 48,
            "./icon/gatherables/death_stone_compass.png": 48,
            "./icon/gatherables/earth_boid_compass": 49,
            "./icon/gatherables/earth_boid_compass.png": 49,
            "./icon/gatherables/earth_plant_compass": 50,
            "./icon/gatherables/earth_plant_compass.png": 50,
            "./icon/gatherables/earth_stone_compass": 51,
            "./icon/gatherables/earth_stone_compass.png": 51,
            "./icon/gatherables/fire_boid_compass": 52,
            "./icon/gatherables/fire_boid_compass.png": 52,
            "./icon/gatherables/fire_plant_compass": 53,
            "./icon/gatherables/fire_plant_compass.png": 53,
            "./icon/gatherables/fire_stone_compass": 54,
            "./icon/gatherables/fire_stone_compass.png": 54,
            "./icon/gatherables/fruit_compass": 55,
            "./icon/gatherables/fruit_compass.png": 55,
            "./icon/gatherables/gold_compass": 56,
            "./icon/gatherables/gold_compass.png": 56,
            "./icon/gatherables/grain_compass": 334,
            "./icon/gatherables/grain_compass.png": 334,
            "./icon/gatherables/hemp_compass": 24,
            "./icon/gatherables/hemp_compass.png": 24,
            "./icon/gatherables/herb_compass": 57,
            "./icon/gatherables/herb_compass.png": 57,
            "./icon/gatherables/herbt1": 335,
            "./icon/gatherables/herbt1.png": 335,
            "./icon/gatherables/iron_compass": 58,
            "./icon/gatherables/iron_compass.png": 58,
            "./icon/gatherables/ironwood_compass": 59,
            "./icon/gatherables/ironwood_compass.png": 59,
            "./icon/gatherables/life_boid_compass": 60,
            "./icon/gatherables/life_boid_compass.png": 60,
            "./icon/gatherables/life_plant_compass": 61,
            "./icon/gatherables/life_plant_compass.png": 61,
            "./icon/gatherables/life_stone_compass": 62,
            "./icon/gatherables/life_stone_compass.png": 62,
            "./icon/gatherables/lodestone_compass": 63,
            "./icon/gatherables/lodestone_compass.png": 63,
            "./icon/gatherables/melont1": 90,
            "./icon/gatherables/melont1.png": 90,
            "./icon/gatherables/nutt1": 91,
            "./icon/gatherables/nutt1.png": 91,
            "./icon/gatherables/oil_compass": 64,
            "./icon/gatherables/oil_compass.png": 64,
            "./icon/gatherables/orichalcum_compass": 65,
            "./icon/gatherables/orichalcum_compass.png": 65,
            "./icon/gatherables/platinum_compass": 66,
            "./icon/gatherables/platinum_compass.png": 66,
            "./icon/gatherables/potatot1": 92,
            "./icon/gatherables/potatot1.png": 92,
            "./icon/gatherables/saltpetert1": 93,
            "./icon/gatherables/saltpetert1.png": 93,
            "./icon/gatherables/silver_compass": 67,
            "./icon/gatherables/silver_compass.png": 67,
            "./icon/gatherables/spirit_boid_compass": 68,
            "./icon/gatherables/spirit_boid_compass.png": 68,
            "./icon/gatherables/spirit_plant_compass": 69,
            "./icon/gatherables/spirit_plant_compass.png": 69,
            "./icon/gatherables/spirit_stone_compass": 70,
            "./icon/gatherables/spirit_stone_compass.png": 70,
            "./icon/gatherables/squasht1": 94,
            "./icon/gatherables/squasht1.png": 94,
            "./icon/gatherables/starmetal_compass": 71,
            "./icon/gatherables/starmetal_compass.png": 71,
            "./icon/gatherables/strawberryt1": 95,
            "./icon/gatherables/strawberryt1.png": 95,
            "./icon/gatherables/vegetable_compass": 336,
            "./icon/gatherables/vegetable_compass.png": 336,
            "./icon/gatherables/water_boid_compass": 72,
            "./icon/gatherables/water_boid_compass.png": 72,
            "./icon/gatherables/water_plant_compass": 73,
            "./icon/gatherables/water_plant_compass.png": 73,
            "./icon/gatherables/water_stone_compass": 74,
            "./icon/gatherables/water_stone_compass.png": 74,
            "./icon/gatherables/wheatt1": 96,
            "./icon/gatherables/wheatt1.png": 96,
            "./icon/gatherables/wind_boid_compass": 75,
            "./icon/gatherables/wind_boid_compass.png": 75,
            "./icon/gatherables/wind_plant_compass": 76,
            "./icon/gatherables/wind_plant_compass.png": 76,
            "./icon/gatherables/wind_stone_compass": 77,
            "./icon/gatherables/wind_stone_compass.png": 77,
            "./icon/gatherables/wyrdwood_compass": 78,
            "./icon/gatherables/wyrdwood_compass.png": 78,
            "./icon/icon_capital": 97,
            "./icon/icon_capital.png": 97,
            "./icon/icon_capital_selected": 337,
            "./icon/icon_capital_selected.png": 337,
            "./icon/icon_discovered": 338,
            "./icon/icon_discovered.png": 338,
            "./icon/icon_map_fort": 98,
            "./icon/icon_map_fort.png": 98,
            "./icon/icon_map_fort_selected": 339,
            "./icon/icon_map_fort_selected.png": 339,
            "./icon/icon_map_house": 340,
            "./icon/icon_map_house.png": 340,
            "./icon/icon_map_house_disabled": 341,
            "./icon/icon_map_house_disabled.png": 341,
            "./icon/icon_map_house_selected": 342,
            "./icon/icon_map_house_selected.png": 342,
            "./icon/icon_map_house_selected_disabled": 343,
            "./icon/icon_map_house_selected_disabled.png": 343,
            "./icon/icon_map_territory": 344,
            "./icon/icon_map_territory.png": 344,
            "./icon/icon_map_territory_selected": 345,
            "./icon/icon_map_territory_selected.png": 345,
            "./icon/lastdeathposition": 346,
            "./icon/lastdeathposition.png": 346,
            "./icon/map_settlementclaimed": 347,
            "./icon/map_settlementclaimed.png": 347,
            "./icon/npcs/bear_compass": 348,
            "./icon/npcs/bear_compass.png": 348,
            "./icon/npcs/bear_elemental_compass": 349,
            "./icon/npcs/bear_elemental_compass.png": 349,
            "./icon/npcs/bison_compass": 350,
            "./icon/npcs/bison_compass.png": 350,
            "./icon/npcs/boar_compass": 351,
            "./icon/npcs/boar_compass.png": 351,
            "./icon/npcs/damned_compass": 352,
            "./icon/npcs/damned_compass.png": 352,
            "./icon/npcs/elk_compass": 353,
            "./icon/npcs/elk_compass.png": 353,
            "./icon/npcs/elkbuck_compass": 354,
            "./icon/npcs/elkbuck_compass.png": 354,
            "./icon/npcs/ghost_compass": 355,
            "./icon/npcs/ghost_compass.png": 355,
            "./icon/npcs/turkey_compass": 356,
            "./icon/npcs/turkey_compass.png": 356,
            "./icon/npcs/withered_compass": 357,
            "./icon/npcs/withered_compass.png": 357,
            "./icon/npcs/wolf_compass": 358,
            "./icon/npcs/wolf_compass.png": 358,
            "./icon/player": 359,
            "./icon/player.png": 359,
            "./icon/pois/abandoned_campsite": 99,
            "./icon/pois/abandoned_campsite.png": 99,
            "./icon/pois/abandoned_farm_mill": 100,
            "./icon/pois/abandoned_farm_mill.png": 100,
            "./icon/pois/abandoned_farm_village": 101,
            "./icon/pois/abandoned_farm_village.png": 101,
            "./icon/pois/abandoned_fishing_village": 102,
            "./icon/pois/abandoned_fishing_village.png": 102,
            "./icon/pois/abandoned_village": 103,
            "./icon/pois/abandoned_village.png": 103,
            "./icon/pois/abandonedcity": 104,
            "./icon/pois/abandonedcity.png": 104,
            "./icon/pois/ancient_buttress": 105,
            "./icon/pois/ancient_buttress.png": 105,
            "./icon/pois/ancient_lighthouse": 106,
            "./icon/pois/ancient_lighthouse.png": 106,
            "./icon/pois/ancient_lookout": 107,
            "./icon/pois/ancient_lookout.png": 107,
            "./icon/pois/ancient_malevolence": 108,
            "./icon/pois/ancient_malevolence.png": 108,
            "./icon/pois/ancient_ruins": 109,
            "./icon/pois/ancient_ruins.png": 109,
            "./icon/pois/ancient_ruins_spheres": 110,
            "./icon/pois/ancient_ruins_spheres.png": 110,
            "./icon/pois/ancient_shrine": 111,
            "./icon/pois/ancient_shrine.png": 111,
            "./icon/pois/ancient_spite": 112,
            "./icon/pois/ancient_spite.png": 112,
            "./icon/pois/ancient_temple_lg": 113,
            "./icon/pois/ancient_temple_lg.png": 113,
            "./icon/pois/ancient_temple_sm": 114,
            "./icon/pois/ancient_temple_sm.png": 114,
            "./icon/pois/ancient_tower": 115,
            "./icon/pois/ancient_tower.png": 115,
            "./icon/pois/ancient_watchtower": 116,
            "./icon/pois/ancient_watchtower.png": 116,
            "./icon/pois/angryearth_camp": 117,
            "./icon/pois/angryearth_camp.png": 117,
            "./icon/pois/angryearth_cave": 118,
            "./icon/pois/angryearth_cave.png": 118,
            "./icon/pois/angryearth_grove": 119,
            "./icon/pois/angryearth_grove.png": 119,
            "./icon/pois/angryearth_grovealtar": 120,
            "./icon/pois/angryearth_grovealtar.png": 120,
            "./icon/pois/angryearth_ruins": 121,
            "./icon/pois/angryearth_ruins.png": 121,
            "./icon/pois/angryearth_spriggan": 122,
            "./icon/pois/angryearth_spriggan.png": 122,
            "./icon/pois/angryearth_village": 123,
            "./icon/pois/angryearth_village.png": 123,
            "./icon/pois/arena_spriggan_angryearth": 124,
            "./icon/pois/arena_spriggan_angryearth.png": 124,
            "./icon/pois/azure_tree": 125,
            "./icon/pois/azure_tree.png": 125,
            "./icon/pois/azurefissure": 126,
            "./icon/pois/azurefissure.png": 126,
            "./icon/pois/battlefield_fort": 127,
            "./icon/pois/battlefield_fort.png": 127,
            "./icon/pois/bear_den": 128,
            "./icon/pois/bear_den.png": 128,
            "./icon/pois/buildings_damned": 129,
            "./icon/pois/buildings_damned.png": 129,
            "./icon/pois/cave": 130,
            "./icon/pois/cave.png": 130,
            "./icon/pois/claim_100m": 360,
            "./icon/pois/claim_100m.png": 360,
            "./icon/pois/claim_15m": 361,
            "./icon/pois/claim_15m.png": 361,
            "./icon/pois/claim_20m": 362,
            "./icon/pois/claim_20m.png": 362,
            "./icon/pois/claim_25m": 363,
            "./icon/pois/claim_25m.png": 363,
            "./icon/pois/claim_30m": 364,
            "./icon/pois/claim_30m.png": 364,
            "./icon/pois/claim_40m": 365,
            "./icon/pois/claim_40m.png": 365,
            "./icon/pois/claim_50m": 366,
            "./icon/pois/claim_50m.png": 366,
            "./icon/pois/claim_60m": 367,
            "./icon/pois/claim_60m.png": 367,
            "./icon/pois/claim_80m": 368,
            "./icon/pois/claim_80m.png": 368,
            "./icon/pois/claim_compass": 25,
            "./icon/pois/claim_compass.png": 25,
            "./icon/pois/constructionsite": 131,
            "./icon/pois/constructionsite.png": 131,
            "./icon/pois/damned_campsite": 132,
            "./icon/pois/damned_campsite.png": 132,
            "./icon/pois/damned_compass": 133,
            "./icon/pois/damned_compass.png": 133,
            "./icon/pois/damned_compass_danger": 134,
            "./icon/pois/damned_compass_danger.png": 134,
            "./icon/pois/damned_major_compass": 135,
            "./icon/pois/damned_major_compass.png": 135,
            "./icon/pois/damned_major_compass_danger": 136,
            "./icon/pois/damned_major_compass_danger.png": 136,
            "./icon/pois/damned_mine": 137,
            "./icon/pois/damned_mine.png": 137,
            "./icon/pois/damnedcapitalcity": 138,
            "./icon/pois/damnedcapitalcity.png": 138,
            "./icon/pois/damnedfortress": 139,
            "./icon/pois/damnedfortress.png": 139,
            "./icon/pois/damnedtrench": 140,
            "./icon/pois/damnedtrench.png": 140,
            "./icon/pois/den_bear_elemental": 141,
            "./icon/pois/den_bear_elemental.png": 141,
            "./icon/pois/elemental_bear": 142,
            "./icon/pois/elemental_bear.png": 142,
            "./icon/pois/elemental_wolf_ice": 143,
            "./icon/pois/elemental_wolf_ice.png": 143,
            "./icon/pois/excavation": 144,
            "./icon/pois/excavation.png": 144,
            "./icon/pois/farmingvillage": 145,
            "./icon/pois/farmingvillage.png": 145,
            "./icon/pois/fort": 146,
            "./icon/pois/fort.png": 146,
            "./icon/pois/graveyard": 147,
            "./icon/pois/graveyard.png": 147,
            "./icon/pois/hero_shipwreck": 148,
            "./icon/pois/hero_shipwreck.png": 148,
            "./icon/pois/hires/abandoned_campsite": 369,
            "./icon/pois/hires/abandoned_campsite.png": 369,
            "./icon/pois/hires/abandoned_farm_mill": 370,
            "./icon/pois/hires/abandoned_farm_mill.png": 370,
            "./icon/pois/hires/abandoned_farm_village": 371,
            "./icon/pois/hires/abandoned_farm_village.png": 371,
            "./icon/pois/hires/abandoned_fishing_village": 372,
            "./icon/pois/hires/abandoned_fishing_village.png": 372,
            "./icon/pois/hires/abandoned_village": 373,
            "./icon/pois/hires/abandoned_village.png": 373,
            "./icon/pois/hires/abandonedcity": 374,
            "./icon/pois/hires/abandonedcity.png": 374,
            "./icon/pois/hires/ancient_buttress": 375,
            "./icon/pois/hires/ancient_buttress.png": 375,
            "./icon/pois/hires/ancient_lighthouse": 376,
            "./icon/pois/hires/ancient_lighthouse.png": 376,
            "./icon/pois/hires/ancient_lookout": 377,
            "./icon/pois/hires/ancient_lookout.png": 377,
            "./icon/pois/hires/ancient_malevolence": 378,
            "./icon/pois/hires/ancient_malevolence.png": 378,
            "./icon/pois/hires/ancient_ruins": 379,
            "./icon/pois/hires/ancient_ruins.png": 379,
            "./icon/pois/hires/ancient_ruins_spheres": 380,
            "./icon/pois/hires/ancient_ruins_spheres.png": 380,
            "./icon/pois/hires/ancient_shrine": 381,
            "./icon/pois/hires/ancient_shrine.png": 381,
            "./icon/pois/hires/ancient_spite": 382,
            "./icon/pois/hires/ancient_spite.png": 382,
            "./icon/pois/hires/ancient_temple_lg": 383,
            "./icon/pois/hires/ancient_temple_lg.png": 383,
            "./icon/pois/hires/ancient_temple_sm": 384,
            "./icon/pois/hires/ancient_temple_sm.png": 384,
            "./icon/pois/hires/ancient_tower": 385,
            "./icon/pois/hires/ancient_tower.png": 385,
            "./icon/pois/hires/ancient_watchtower": 386,
            "./icon/pois/hires/ancient_watchtower.png": 386,
            "./icon/pois/hires/angryearth_camp": 387,
            "./icon/pois/hires/angryearth_camp.png": 387,
            "./icon/pois/hires/angryearth_cave": 388,
            "./icon/pois/hires/angryearth_cave.png": 388,
            "./icon/pois/hires/angryearth_grove": 389,
            "./icon/pois/hires/angryearth_grove.png": 389,
            "./icon/pois/hires/angryearth_grovealtar": 390,
            "./icon/pois/hires/angryearth_grovealtar.png": 390,
            "./icon/pois/hires/angryearth_ruins": 391,
            "./icon/pois/hires/angryearth_ruins.png": 391,
            "./icon/pois/hires/angryearth_spriggan": 392,
            "./icon/pois/hires/angryearth_spriggan.png": 392,
            "./icon/pois/hires/angryearth_village": 393,
            "./icon/pois/hires/angryearth_village.png": 393,
            "./icon/pois/hires/azure_tree": 394,
            "./icon/pois/hires/azure_tree.png": 394,
            "./icon/pois/hires/azurefissure": 395,
            "./icon/pois/hires/azurefissure.png": 395,
            "./icon/pois/hires/battlefield_fort": 396,
            "./icon/pois/hires/battlefield_fort.png": 396,
            "./icon/pois/hires/bear_den": 397,
            "./icon/pois/hires/bear_den.png": 397,
            "./icon/pois/hires/buildings_damned": 398,
            "./icon/pois/hires/buildings_damned.png": 398,
            "./icon/pois/hires/cave": 399,
            "./icon/pois/hires/cave.png": 399,
            "./icon/pois/hires/claim_100m": 400,
            "./icon/pois/hires/claim_100m.png": 400,
            "./icon/pois/hires/claim_15m": 401,
            "./icon/pois/hires/claim_15m.png": 401,
            "./icon/pois/hires/claim_20m": 402,
            "./icon/pois/hires/claim_20m.png": 402,
            "./icon/pois/hires/claim_25m": 403,
            "./icon/pois/hires/claim_25m.png": 403,
            "./icon/pois/hires/claim_30m": 404,
            "./icon/pois/hires/claim_30m.png": 404,
            "./icon/pois/hires/claim_40m": 405,
            "./icon/pois/hires/claim_40m.png": 405,
            "./icon/pois/hires/claim_50m": 406,
            "./icon/pois/hires/claim_50m.png": 406,
            "./icon/pois/hires/claim_60m": 407,
            "./icon/pois/hires/claim_60m.png": 407,
            "./icon/pois/hires/claim_80m": 408,
            "./icon/pois/hires/claim_80m.png": 408,
            "./icon/pois/hires/claim_compass": 409,
            "./icon/pois/hires/claim_compass.png": 409,
            "./icon/pois/hires/constructionsite": 410,
            "./icon/pois/hires/constructionsite.png": 410,
            "./icon/pois/hires/damned_compass": 411,
            "./icon/pois/hires/damned_compass.png": 411,
            "./icon/pois/hires/damned_major_compass": 412,
            "./icon/pois/hires/damned_major_compass.png": 412,
            "./icon/pois/hires/damnedcapitalcity": 413,
            "./icon/pois/hires/damnedcapitalcity.png": 413,
            "./icon/pois/hires/damnedfortress": 414,
            "./icon/pois/hires/damnedfortress.png": 414,
            "./icon/pois/hires/damnedtrench": 415,
            "./icon/pois/hires/damnedtrench.png": 415,
            "./icon/pois/hires/den_bear_elemental": 416,
            "./icon/pois/hires/den_bear_elemental.png": 416,
            "./icon/pois/hires/elemental_bear": 417,
            "./icon/pois/hires/elemental_bear.png": 417,
            "./icon/pois/hires/elemental_wolf_ice": 418,
            "./icon/pois/hires/elemental_wolf_ice.png": 418,
            "./icon/pois/hires/excavation": 419,
            "./icon/pois/hires/excavation.png": 419,
            "./icon/pois/hires/farmingvillage": 420,
            "./icon/pois/hires/farmingvillage.png": 420,
            "./icon/pois/hires/fort": 421,
            "./icon/pois/hires/fort.png": 421,
            "./icon/pois/hires/graveyard": 422,
            "./icon/pois/hires/graveyard.png": 422,
            "./icon/pois/hires/icon_nature_buffalo": 423,
            "./icon/pois/hires/icon_nature_buffalo.png": 423,
            "./icon/pois/hires/lumbermill": 424,
            "./icon/pois/hires/lumbermill.png": 424,
            "./icon/pois/hires/military_camp": 425,
            "./icon/pois/hires/military_camp.png": 425,
            "./icon/pois/hires/mine": 426,
            "./icon/pois/hires/mine.png": 426,
            "./icon/pois/hires/oilfield": 427,
            "./icon/pois/hires/oilfield.png": 427,
            "./icon/pois/hires/ore": 428,
            "./icon/pois/hires/ore.png": 428,
            "./icon/pois/hires/outpost": 429,
            "./icon/pois/hires/outpost.png": 429,
            "./icon/pois/hires/outpost_alchemy": 430,
            "./icon/pois/hires/outpost_alchemy.png": 430,
            "./icon/pois/hires/outpost_blacksmith": 431,
            "./icon/pois/hires/outpost_blacksmith.png": 431,
            "./icon/pois/hires/outpost_compass": 432,
            "./icon/pois/hires/outpost_compass.png": 432,
            "./icon/pois/hires/outpost_damned": 433,
            "./icon/pois/hires/outpost_damned.png": 433,
            "./icon/pois/hires/outpost_lawless": 434,
            "./icon/pois/hires/outpost_lawless.png": 434,
            "./icon/pois/hires/outpost_outfitting": 435,
            "./icon/pois/hires/outpost_outfitting.png": 435,
            "./icon/pois/hires/outpostdiamond": 436,
            "./icon/pois/hires/outpostdiamond.png": 436,
            "./icon/pois/hires/poi_lawless": 437,
            "./icon/pois/hires/poi_lawless.png": 437,
            "./icon/pois/hires/resource_run": 438,
            "./icon/pois/hires/resource_run.png": 438,
            "./icon/pois/hires/shipwreck": 439,
            "./icon/pois/hires/shipwreck.png": 439,
            "./icon/pois/hires/shrine_air": 440,
            "./icon/pois/hires/shrine_air.png": 440,
            "./icon/pois/hires/shrine_earth": 441,
            "./icon/pois/hires/shrine_earth.png": 441,
            "./icon/pois/hires/shrine_fire": 442,
            "./icon/pois/hires/shrine_fire.png": 442,
            "./icon/pois/hires/shrine_water": 443,
            "./icon/pois/hires/shrine_water.png": 443,
            "./icon/pois/hires/wolf_den": 444,
            "./icon/pois/hires/wolf_den.png": 444,
            "./icon/pois/icon_nature_buffalo": 149,
            "./icon/pois/icon_nature_buffalo.png": 149,
            "./icon/pois/lumbermill": 150,
            "./icon/pois/lumbermill.png": 150,
            "./icon/pois/military_camp": 151,
            "./icon/pois/military_camp.png": 151,
            "./icon/pois/mine": 152,
            "./icon/pois/mine.png": 152,
            "./icon/pois/oilfield": 153,
            "./icon/pois/oilfield.png": 153,
            "./icon/pois/ore": 154,
            "./icon/pois/ore.png": 154,
            "./icon/pois/outpost": 155,
            "./icon/pois/outpost.png": 155,
            "./icon/pois/outpost_alchemy": 156,
            "./icon/pois/outpost_alchemy.png": 156,
            "./icon/pois/outpost_blacksmith": 157,
            "./icon/pois/outpost_blacksmith.png": 157,
            "./icon/pois/outpost_compass": 158,
            "./icon/pois/outpost_compass.png": 158,
            "./icon/pois/outpost_damned": 159,
            "./icon/pois/outpost_damned.png": 159,
            "./icon/pois/outpost_lawless": 160,
            "./icon/pois/outpost_lawless.png": 160,
            "./icon/pois/outpost_outfitting": 161,
            "./icon/pois/outpost_outfitting.png": 161,
            "./icon/pois/outpostdiamond": 162,
            "./icon/pois/outpostdiamond.png": 162,
            "./icon/pois/poi_lawless": 163,
            "./icon/pois/poi_lawless.png": 163,
            "./icon/pois/resource_run": 164,
            "./icon/pois/resource_run.png": 164,
            "./icon/pois/shattered_obelisk": 165,
            "./icon/pois/shattered_obelisk.png": 165,
            "./icon/pois/shipwreck": 166,
            "./icon/pois/shipwreck.png": 166,
            "./icon/pois/shrine_air": 167,
            "./icon/pois/shrine_air.png": 167,
            "./icon/pois/shrine_earth": 168,
            "./icon/pois/shrine_earth.png": 168,
            "./icon/pois/shrine_fire": 169,
            "./icon/pois/shrine_fire.png": 169,
            "./icon/pois/shrine_water": 170,
            "./icon/pois/shrine_water.png": 170,
            "./icon/pois/wolf_den": 171,
            "./icon/pois/wolf_den.png": 171,
            "./icon/pulse": 445,
            "./icon/pulse.png": 445,
            "./icon/respawnguildpoint": 446,
            "./icon/respawnguildpoint.png": 446,
            "./icon/respawnpoint": 447,
            "./icon/respawnpoint.png": 447,
            "./icon/respawnpoint_last": 448,
            "./icon/respawnpoint_last.png": 448,
            "./icon/respawnpointcentered": 449,
            "./icon/respawnpointcentered.png": 449,
            "./icon/respawnpublicpoint": 450,
            "./icon/respawnpublicpoint.png": 450,
            "./icon/township": 172,
            "./icon/township.png": 172,
            "./icon/traildot": 451,
            "./icon/traildot.png": 451,
            "./icon/waypoint": 452,
            "./icon/waypoint.png": 452,
            "./icon/waypoint_compass": 453,
            "./icon/waypoint_compass.png": 453,
        };
        function a(e) {
            var n = c(e);
            return o(n);
        }
        function c(e) {
            if (!o.o(i, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = c),
            (e.exports = a),
            (a.id = 509);
    },
]);
