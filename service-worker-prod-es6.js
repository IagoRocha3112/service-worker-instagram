

(function () {
    var global = this;
    var __BUNDLE_START_TIME__ = this.nativePerformanceNow ? nativePerformanceNow() : Date.now(),
        __DEV__ = false,
        process = this.process || {};
    process.env = process.env || {};
    process.env.NODE_ENV = process.env.NODE_ENV || "production";
    !(function (t) {
        "use strict";
        function e() {
            return (s = Object.create(null));
        }
        function r(t) {
            const e = t,
                r = s[e];
            return r && r.isInitialized ? r.publicModule.exports : i(e, r);
        }
        function n(t) {
            const e = t;
            if (s[e] && s[e].importedDefault !== f) return s[e].importedDefault;
            const n = r(e),
                o = n && n.__esModule ? n.default : n;
            return (s[e].importedDefault = o);
        }
        function o(t) {
            const e = t;
            if (s[e] && s[e].importedAll !== f) return s[e].importedAll;
            const n = r(e);
            let o;
            if (n && n.__esModule) o = n;
            else {
                if (((o = {}), n)) for (const t in n) a.call(n, t) && (o[t] = n[t]);
                o.default = n;
            }
            return (s[e].importedAll = o);
        }
        function i(e, r) {
            if (!p && t.ErrorUtils) {
                p = !0;
                let n;
                try {
                    n = c(e, r);
                } catch (e) {
                    t.ErrorUtils.reportFatalError(e);
                }
                return (p = !1), n;
            }
            return c(e, r);
        }
        function l(t) {
            return { segmentId: t >>> h, localId: t & m };
        }
        function c(e, i) {
            if (!i && I.length > 0) {
                const t = l(e),
                    r = t.segmentId,
                    n = t.localId,
                    o = I[r];
                null != o && (o(n), (i = s[e]));
            }
            const c = t.nativeRequire;
            if (!i && c) {
                const t = l(e),
                    r = t.segmentId;
                c(t.localId, r), (i = s[e]);
            }
            if (!i) throw u(e);
            if (i.hasError) throw d(e, i.error);
            i.isInitialized = !0;
            const f = i,
                a = f.factory,
                p = f.dependencyMap;
            try {
                const l = i.publicModule;
                if (((l.id = e), g.length > 0)) for (let t = 0; t < g.length; ++t) g[t].cb(e, l);
                return a(t, r, n, o, l, l.exports, p), (i.factory = void 0), (i.dependencyMap = void 0), l.exports;
            } catch (t) {
                throw ((i.hasError = !0), (i.error = t), (i.isInitialized = !1), (i.publicModule.exports = void 0), t);
            }
        }
        function u(t) {
            let e = 'Requiring unknown module "' + t + '".';
            return Error(e);
        }
        function d(t, e) {
            const r = t;
            return Error('Requiring module "' + r + '", which threw an exception: ' + e);
        }
        (t.__r = r),
            (t.__d = function (t, e, r) {
                null == s[e] && (s[e] = { dependencyMap: r, factory: t, hasError: !1, importedAll: f, importedDefault: f, isInitialized: !1, publicModule: { exports: {} } });
            }),
            (t.__c = e),
            (t.__registerSegment = function (t, e) {
                I[t] = e;
            });
        var s = e();
        const f = {},
            a = {}.hasOwnProperty;
        (r.importDefault = n), (r.importAll = o);
        let p = !1;
        const h = 16,
            m = 65535;
        (r.unpackModuleId = l),
            (r.packModuleId = function (t) {
                return (t.segmentId << h) + t.localId;
            });
        const g = [];
        r.registerHook = function (t) {
            const e = { cb: t };
            return (
                g.push(e),
                {
                    release: () => {
                        for (let t = 0; t < g.length; ++t)
                            if (g[t] === e) {
                                g.splice(t, 1);
                                break;
                            }
                    },
                }
            );
        };
        const I = [];
    })("undefined" != typeof global ? global : "undefined" != typeof window ? window : this);
    __s = { js: {}, css: {} };
    var __d = this.__d;
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function t(t) {
                if (!t.headers.has("date")) return null;
                const n = t.headers.get("date") || "",
                    o = new Date(n).getTime();
                return isNaN(o) ? null : o;
            }
            function n(n, o) {
                const s = t(n);
                if (null === s) return !0;
                return s >= Date.now() - 1e3 * o;
            }
            function o(t, n) {
                let o;
                for (let s = 0; s < t.length; s++) {
                    const c = t[s];
                    if (c.url === n) {
                        o = c;
                        break;
                    }
                }
                return o;
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            const s = new URLSearchParams(location.search),
                c = "true" === s.get("enableHtmlCaching"),
                l = "true" === s.get("enableAddToHomeScreen"),
                u = s.get("x-user-agent") || "",
                f = s.get("__rollout") || "",
                { htmlCache: h, sharedData: w } = r(d[0]).SW_CACHE_NAMES,
                p = [],
                _ = new Request("/", { credentials: "include", headers: new Headers({ "X-SW-HTML": "true", "X-USER-AGENT": u }) }),
                v = new (r(d[1]).CacheableResponse)({ statuses: [200] });
            if (
                (self.addEventListener("error", (t) => {
                    r(d[2]).logErrorEvent("sw_uncaught_error", t.error);
                }),
                self.addEventListener("unhandledrejection", (t) => {
                    const { reason: n } = t;
                    r(d[2]).logErrorEvent("sw_rejected_promise", n instanceof Error ? n : new Error(n));
                }),
                self.addEventListener("install", function (t) {
                    t.waitUntil(self.skipWaiting());
                }),
                self.addEventListener("activate", function (t) {
                    t.waitUntil(
                        (async function () {
                            self.registration.navigationPreload && (c ? await self.registration.navigationPreload.disable() : await self.registration.navigationPreload.enable());
                        })()
                    ),
                        t.waitUntil(
                            (async function () {
                                const t = await caches.keys();
                                if (
                                    (await Promise.all(
                                        t
                                            .filter(function (t) {
                                                return -1 === r(d[0]).SW_CACHE_NAME_VALUES.indexOf(t);
                                            })
                                            .map(function (t) {
                                                return caches.delete(t);
                                            })
                                    ),
                                    self.indexedDB &&
                                        self.indexedDB.deleteDatabase &&
                                        r(d[0]).REDUDANT_IDB_CACHES.forEach(function (t) {
                                            self.indexedDB.deleteDatabase(t);
                                        }),
                                    c)
                                ) {
                                    const t = await caches.open(h);
                                    if (!(await t.match(_))) {
                                        const n = await fetch(_);
                                        v.isResponseCacheable(n) && (await t.put(_, n.clone()));
                                    }
                                }
                            })()
                        ),
                        t.waitUntil(self.clients.claim());
                }),
                c)
            ) {
                p.push(
                    i(d[3]).registerRoute(new RegExp("//[a-zA-Z0-9.:]*/(\\?[a-zA-Z0-9_&=]*)?$"), async function () {
                        const t = await caches.open(h),
                            o = await t.match(_);
                        if (o && n(o, 604800)) return o;
                        {
                            const n = await fetch(_);
                            return v.isResponseCacheable(n) && t.put(_, n.clone()), n;
                        }
                    })
                ),
                    p.push(
                        i(d[3]).registerRoute(
                            new RegExp("/accounts/[a-zA-Z0-9_]*/$"),
                            async function ({ event: t }) {
                                const n = fetch(t.request);
                                return t.waitUntil(caches.delete(w)), n;
                            },
                            "POST"
                        )
                    ),
                    p.push(
                        i(d[3]).registerRoute(
                            "/accounts/logout/ajax/",
                            async function ({ event: t }) {
                                r(d[2]).logEvent("sw_cleanup_on_logout");
                                const n = fetch(t.request);
                                return (
                                    p.map((n) => {
                                        t.waitUntil(i(d[3]).unregisterRoute(n));
                                    }),
                                    (p.length = 0),
                                    t.waitUntil(
                                        caches.keys().then(function (t) {
                                            return Promise.all(
                                                t.map(function (t) {
                                                    return caches.delete(t);
                                                })
                                            );
                                        })
                                    ),
                                    self.registration && self.registration.unregister && t.waitUntil(self.registration.unregister()),
                                    n
                                );
                            },
                            "POST"
                        )
                    ),
                    p.push(
                        i(d[3]).registerRoute(
                            function ({ event: t }) {
                                return "navigate" === t.request.mode;
                            },
                            async function ({ event: t }) {
                                return fetch(t.request, { headers: new Headers({ "X-USER-AGENT": u, "X-ROLLOUT": f }) });
                            }
                        )
                    );
            } else
                l &&
                    self.registration.navigationPreload &&
                    p.push(
                        i(d[3]).registerRoute("/", async function ({ event: t }) {
                            if (t.preloadResponse) {
                                const n = await t.preloadResponse;
                                if (n) return n;
                            }
                            return fetch(t.request);
                        })
                    );
            self.addEventListener("push", function (t) {
                t.waitUntil(
                    (async function () {
                        try {
                            const n = t.data;
                            if (n && "function" == typeof n.json) {
                                const t = n.json(),
                                    { collapse_key: o } = t.params,
                                    s = t.type || o;
                                return await r(d[4]).updateAppBadgeFromNotificationPayload(t), await r(d[5]).handleNotificationWithPayload(s, t);
                            }
                            return await r(d[5]).handleNotificationWithoutPayload();
                        } catch (t) {
                            return r(d[2]).logErrorEvent("notif_handler_error", t), r(d[5]).handleNotificationFallback();
                        }
                    })()
                );
            }),
                self.addEventListener("notificationclose", function (t) {
                    var n, o;
                    const { pushId: s, targetUserId: c, uri: l } = (t.notification && t.notification.data) || {},
                        u = new URL(l).pathname;
                    r(d[2]).logNotificationEvent("web_push_dismissed", { target_user_id: null !== (n = c) && void 0 !== n ? n : "", landing_page_url: null !== (o = r(d[6]).sanitizeReferrer(u)) && void 0 !== o ? o : "", ndid: s });
                }),
                self.addEventListener("notificationclick", function (t) {
                    t.waitUntil(
                        (async function () {
                            var n, s, c;
                            const l = t.notification;
                            l.close();
                            const { data: u } = l;
                            u || r(d[2]).logEvent("notif_click_no_data");
                            const { action: f, pushId: h, targetUserId: w, uri: p } = u,
                                _ = (null !== (n = null === f || void 0 === f ? void 0 : f.uri) && void 0 !== n ? n : p) || new URL(self.location.origin).href,
                                v = o(await clients.matchAll({ type: "window", includeUncontrolled: !0 }), _),
                                E = new URL(_).pathname;
                            return (
                                r(d[2]).logNotificationEvent("web_push_browser_clicked", {
                                    target_user_id: null !== (s = w) && void 0 !== s ? s : "",
                                    landing_page_url: null !== (c = r(d[6]).sanitizeReferrer(E)) && void 0 !== c ? c : "",
                                    ndid: h,
                                }),
                                v ? (v.focus(), await v.navigate(_)) : await clients.openWindow(_)
                            );
                        })()
                    );
                });
            var E = p;
            e.default = E;
        },
        0,
        [1, 2, 3, 4, 5, 6, 7]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            const t = { swConfig: "sw-config-v2", htmlCache: "html-cache-v2", sharedData: "shared-data-v2", loggingParams: "logging-params-v3" },
                s = Object.keys(t).map((s) => t[s]);
            (e.SW_CACHE_NAMES = t),
                (e.REDUDANT_IDB_CACHES = ["html-cache-v1", "html-cache-v2", "shared-data-v1", "shared-data-v2", "bundles-cache-v1", "bundles-cache-v2"]),
                (e.SW_CACHE_NAME_VALUES = s),
                (e.TRANSLATIONS = "/translations"),
                (e.SHARED_DATA_PATH = "/data/shared_data/"),
                (e.LOGGING_PARAMS = "/data/logging_params/");
        },
        1,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            for (var t in r(d[1])) e[t] = r(d[1])[t];
        },
        2,
        [8, 9]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            try {
                self.workbox.v["workbox:cacheable-response:3.6.3"] = 1;
            } catch (o) {}
        },
        8,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]), (e.CacheableResponse = r(d[1]).CacheableResponse), (e.Plugin = r(d[2]).Plugin);
        },
        9,
        [8, 10, 11]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.CacheableResponse = class {
                constructor(s = {}) {
                    (this._statuses = s.statuses), (this._headers = s.headers);
                }
                isResponseCacheable(s) {
                    let t = !0;
                    return this._statuses && (t = this._statuses.includes(s.status)), this._headers && t && (t = Object.keys(this._headers).some((t) => s.headers.get(t) === this._headers[t])), t;
                }
            };
        },
        10,
        [8]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.Plugin = class {
                constructor(s) {
                    this._cacheableResponse = new (r(d[1]).CacheableResponse)(s);
                }
                cacheWillUpdate({ response: s }) {
                    return this._cacheableResponse.isResponseCacheable(s) ? s : null;
                }
            };
        },
        11,
        [8, 10]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.logEvent = function (n, t) {
                    return r(d[0]).logPigeonEvent("instagram_web_client_events", { ...t, event_name: n });
                }),
                (e.logNotificationEvent = function (n, t) {
                    i(d[1]).log(() => ({ ...t, web_push_event_name: n }));
                }),
                (e.logPushabilityEvent = function (n) {
                    return r(d[0]).logPigeonEvent("push_notification_setting", { ...n });
                }),
                (e.logErrorEvent = function (n, t, o) {
                    const { message: s, name: _, stack: l } = t;
                    return Promise.all([r(d[0]).logPigeonEvent("instagram_web_client_events", { ...o, event_name: n, errorMessage: s, name: _, stack: l }), r(d[0]).logErrorToLogView(t)]);
                });
        },
        3,
        [12, 13]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function n() {
                return caches
                    .open(r(d[1]).SW_CACHE_NAMES.loggingParams)
                    .then((n) => (n ? n.match(r(d[1]).LOGGING_PARAMS) : Promise.reject(new Error("Unable to load logging params, cache storage unsupported"))))
                    .then((n) => (n ? n.json() : Promise.reject(new Error("Unable to load logging params, cache storage unsupported"))))
                    .then((n) => n || Promise.reject(new Error("Unable to load logging params, error parsing response")));
            }
            function o(n) {
                return Object.keys(n)
                    .map((o) => `${encodeURIComponent(o)}=${encodeURIComponent(n[o] || "")}`)
                    .join("&");
            }
            function t(n) {
                return `${n.toString(16)}-${(~~(16777215 * Math.random())).toString(16)}`;
            }
            function s(n, o, s, c) {
                const { appId: p, deviceId: l, graphToken: u, mid: h, rollout: _, userId: f } = s,
                    w = Date.now();
                let A = o;
                "pigeon" === c && (A = { ...A, app_id: p, ig_userid: f, mid: h, pk: f, rollout_hash: _ });
                const P = { time: w / 1e3, name: n, extra: A },
                    v = { app_ver: "1.0.0", app_id: p, device_id: l, log_type: "client_event", session_id: t(w), seq: "falco" === c ? 0 : 1, data: [P] };
                return { access_token: u, message: JSON.stringify(v) };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            const { ErrorNormalizeUtils: c } = i(d[0]),
                p = {
                    log: (t, c) =>
                        n()
                            .then((n) => {
                                const { userAgent: p } = n,
                                    l = new Headers();
                                l.append("Content-Type", "application/x-www-form-urlencoded"), l.append("Accept", "*/*");
                                const u = o(s(t, c, n, "falco"));
                                return fetch(new Request("/logging/falco", { method: "POST", cache: "no-cache", mode: "cors", userAgent: p, headers: l, body: u }));
                            })
                            .catch((n) => Promise.resolve()),
                };
            (e.getExperiments = function () {
                return new Promise((o, t) => {
                    n()
                        .then((n) => {
                            const { experiments: t } = n;
                            o(t);
                        })
                        .catch((n) => {
                            o({});
                        });
                });
            }),
                (e.logPigeonEvent = function (t, c) {
                    return n()
                        .then((n) => {
                            const { userAgent: p } = n,
                                l = new Headers();
                            l.append("Content-Type", "application/x-www-form-urlencoded"), l.append("Accept", "*/*");
                            const u = o(s(t, c, n, "pigeon"));
                            return fetch(new Request(i(d[2]), { method: "POST", cache: "no-cache", mode: "cors", userAgent: p, headers: l, body: u }));
                        })
                        .catch((n) => Promise.resolve());
                }),
                (e.logErrorToLogView = async function (o) {
                    return n()
                        .then((n) => {
                            var t;
                            const s = o;
                            let p;
                            p = i(d[3])._("ig_fb_error_normalize") ? c.normalizeError(s) : r(d[4]).normalizeError(s);
                            const { appId: l, bundleVariant: u, deploymentStage: h, frontend_env: _, isPrerelease: f, rollout: w, userAgent: A } = n || {},
                                { column: P, line: v, message: y, name: b, script: E, stack: S } = p || {},
                                I = new Headers();
                            I.append("Content-Type", "application/json"), I.append("X-IG-App-ID", null !== (t = l) && void 0 !== t ? t : ""), I.append("X-Instagram-AJAX", w);
                            const j = {
                                bundle_variant: u,
                                deployment_stage: h,
                                line: v,
                                column: P,
                                frontend_env: _,
                                is_prerelease: f,
                                message: y,
                                name: b,
                                ref: r(d[5]).sanitizeReferrer(location.href),
                                rollout_hash: w,
                                script: E,
                                stack: S,
                                timestamp: Date.now(),
                            };
                            return fetch(new Request("/client_error/", { method: "POST", cache: "no-cache", userAgent: A, headers: I, body: JSON.stringify(j) }));
                        })
                        .catch((n) => Promise.resolve());
                }),
                (e.FalcoLogger = p);
        },
        12,
        [14, 1, 15, 16, 17, 7]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i(d[0]));
        },
        14,
        [18]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function t(t, ...n) {
                const o = new Error(t);
                if (void 0 === o.stack)
                    try {
                        throw o;
                    } catch (t) {}
                return (o.messageFormat = t), (o.messageParams = n.map((t) => String(t))), (o.taalOpcodes = [k.PREVIOUS_FRAME]), o;
            }
            function n() {
                const t = $();
                if (t > B + T) {
                    const n = t - x;
                    for (const [t, o] of z) o.lastAccessed < n && z.delete(t);
                    B = t;
                }
            }
            function o(t) {
                n();
                const o = $(),
                    l = z.get(t);
                if (null == l) return z.set(t, { dropped: 0, logged: [o], lastAccessed: o }), 1;
                const { dropped: s, logged: u } = l;
                for (l.lastAccessed = o; u[0] < o - T; ) u.shift();
                return u.length < I ? ((l.dropped = 0), u.push(o), s + 1) : (l.dropped++, null);
            }
            function l(n) {
                let o = null;
                return (
                    null == n || "object" != typeof n
                        ? (o = t("Non-object thrown: %s", String(n)))
                        : "string" != typeof n.message
                        ? (o = t("Non-error thrown: %s, keys: %s", String(n), JSON.stringify(Object.keys(n).sort())))
                        : Object.isExtensible && !Object.isExtensible(n) && (o = t("Non-extensible thrown: %s", String(n.message))),
                    null != o ? ((o.taalOpcodes = o.taalOpcodes || []), o.taalOpcodes.push(k.PREVIOUS_FRAME), o) : n
                );
            }
            function s(n) {
                var o;
                const s = null != n.error ? l(n.error) : t(n.message || "");
                null == s.fileName && null != n.filename && (s.fileName = n.filename),
                    null == s.line && null != n.lineno && (s.line = n.lineno),
                    null == s.column && null != n.colno && (s.column = n.colno),
                    (s.guardList = [V]),
                    (s.loggingSource = "ONERROR"),
                    null === (o = C) || void 0 === o || o.reportError(s);
            }
            function u(t) {
                return null != t.type
                    ? t.type
                    : "GUARDED" == t.loggingSource || "ERROR_BOUNDARY" == t.loggingSource
                    ? "fatal"
                    : "SyntaxError" == t.name
                    ? "fatal"
                    : ("ONERROR" == t.loggingSource && t.message.indexOf("ResizeObserver loop") >= 0 && (t.type = "warn"), null != t.stack && t.stack.indexOf("chrome-extension://") >= 0 && (t.type = "warn"), "error");
            }
            function c(t, n) {
                let o = 0,
                    l = t.replace(/%s/g, () => (o < n.length ? n[o++] : "NOPARAM"));
                return o < n.length && (l += ` PARAMS${JSON.stringify(n.slice(o))}`), l;
            }
            function p(t) {
                ee.push(t), ee.length > Z && ee.shift();
            }
            function f(...t) {
                let n = 0;
                for (const o of t)
                    if (null != o) {
                        const t = o.length;
                        for (let l = 0; l < t; l++) n = (n << 5) - n + o.charCodeAt(l);
                    }
                let o = "";
                for (let t = 0; t < 6; t++) (o = te.charAt(31 & n) + o), (n >>= 5);
                return o;
            }
            function h(t) {
                const { name: n, message: o, stack: l } = t;
                if (null == l) return null;
                if (null != n && null != o && "" !== o) {
                    const t = `${n}: ${o}\n`;
                    if (l.startsWith(t)) return l.substr(t.length);
                    if (l === `${n}: ${o}`) return null;
                }
                if (null != n) {
                    const t = `${n}\n`;
                    if (l.startsWith(t)) return l.substr(t.length);
                }
                if (null != o && "" !== o) {
                    const t = `: ${o}\n`,
                        n = l.indexOf(t),
                        s = l.substring(0, n);
                    if (/^\w+$/.test(s)) return l.substring(n + t.length);
                }
                return l.replace(oe, "");
            }
            function E(t) {
                const n = t.trim();
                let o,
                    l,
                    s,
                    u = n;
                if (n.includes("charset=utf-8;base64,")) u = "<inlined-file>";
                else {
                    let t;
                    for (const o of ne) if (null != (t = n.match(o))) break;
                    null != t && 4 === t.length ? ((o = t[1]), (l = parseInt(t[2], 10)), (s = parseInt(t[3], 10)), (u = n.substring(0, n.length - t[0].length))) : (u = n), (u = u.replace(/^at /, "").trim());
                }
                const c = { identifier: u, script: o, line: l, column: s };
                return (c.text = b(c)), c;
            }
            function v(t) {
                return null == t || "" === t ? [] : t.split(/\n\n/)[0].split("\n").map(E);
            }
            function S(t) {
                return v(h(t));
            }
            function y(t) {
                if (null == t || "" === t) return null;
                const n = t.split("\n");
                return n.splice(0, 1), n.map((t) => t.trim());
            }
            function b({ identifier: t, script: n, line: o, column: l }) {
                let s = `    at ${null !== t && void 0 !== t ? t : "<unknown>"}`;
                return null != n && null != o && null != l && (s += ` (${n}:${o}:${l})`), s;
            }
            function O(t) {
                var n, o, l, s, c, p, h, v, b;
                const _ = S(t),
                    F = null !== (n = t.taalOpcodes) && void 0 !== n ? n : [];
                let R = t.framesToPop;
                if (null != R) for (R = Math.min(R, _.length); R-- > 0; ) F.unshift(k.PREVIOUS_FRAME);
                const w = null !== (o = t.messageFormat) && void 0 !== o ? o : t.message,
                    L = (null !== (l = t.messageParams) && void 0 !== l ? l : []).map((t) => String(t)),
                    P = y(t.componentStack),
                    M = null == P ? null : P.map(E);
                let N = t.metadata ? t.metadata.format() : new q().format();
                0 === N.length && (N = void 0);
                const j = _.map((t) => t.text).join("\n"),
                    A = null !== (s = t.errorName) && void 0 !== s ? s : t.name,
                    D = u(t),
                    { loggingSource: U, project: G } = t;
                let I = null !== (c = t.lineNumber) && void 0 !== c ? c : t.line,
                    T = null !== (p = t.columnNumber) && void 0 !== p ? p : t.column,
                    x = null !== (h = t.fileName) && void 0 !== h ? h : t.sourceURL;
                const z = _.length > 0;
                z && null == I && (I = _[0].line), z && null == T && (T = _[0].column), z && null == x && (x = _[0].script);
                const B = {
                    blameModule: t.blameModule,
                    column: null == T ? null : String(T),
                    clientTime: Math.floor(Date.now() / 1e3),
                    componentStackFrames: M,
                    deferredSource: null != t.deferredSource ? O(t.deferredSource) : null,
                    extra: null !== (v = t.extra) && void 0 !== v ? v : {},
                    fbtrace_id: t.fbtrace_id,
                    guardList: null !== (b = t.guardList) && void 0 !== b ? b : [],
                    hash: f(A, j, D, G, U),
                    isNormalizedError: !0,
                    line: null == I ? null : String(I),
                    loggingSource: U,
                    message: Q.toReadableMessage(t),
                    messageFormat: w,
                    messageParams: L,
                    metadata: N,
                    name: A,
                    page_time: Math.floor($()),
                    project: G,
                    reactComponentStack: P,
                    script: x,
                    serverHash: t.serverHash,
                    stack: j,
                    stackFrames: _,
                    type: D,
                    xFBDebug: re.getAll(),
                };
                null != t.forcedKey && (B.forcedKey = t.forcedKey), F.length > 0 && (B.taalOpcodes = F);
                const K = g.location;
                K && (B.windowLocationURL = K.href);
                for (const t in B) null == B[t] && delete B[t];
                return B;
            }
            function _(t, n) {
                var o = t.indexOf(n);
                -1 !== o && t.splice(o, 1);
            }
            function F(t) {
                return String(t);
            }
            function R(t) {
                return null == t ? null : String(t);
            }
            function w(t, n) {
                const o = {};
                return (
                    n &&
                        n.forEach((t) => {
                            o[t] = !0;
                        }),
                    Object.keys(t).forEach((n) => {
                        t[n] ? (o[n] = !0) : o[n] && delete o[n];
                    }),
                    Object.keys(o)
                );
            }
            function L(t) {
                return (null !== t && void 0 !== t ? t : []).map((t) => ({ column: R(t.column), identifier: t.identifier, line: R(t.line), script: t.script }));
            }
            function P(t) {
                const n = String(t);
                return n.length > ge ? n.substring(0, 1021) + "..." : n;
            }
            function M(t, n) {
                var o, l, s, u;
                const c = {
                        appId: R(n.appId),
                        cavalry_lid: n.cavalry_lid,
                        access_token: D.access_token,
                        ancestor_hash: t.hash,
                        bundle_variant: null !== (o = n.bundle_variant) && void 0 !== o ? o : null,
                        clientTime: F(t.clientTime),
                        column: t.column,
                        componentStackFrames: L(t.componentStackFrames),
                        events: t.events,
                        extra: w(t.extra, n.extra),
                        forcedKey: t.forcedKey,
                        frontend_env: null !== (l = n.frontend_env) && void 0 !== l ? l : null,
                        guardList: t.guardList,
                        line: t.line,
                        loggingFramework: n.loggingFramework,
                        messageFormat: P(t.messageFormat),
                        messageParams: t.messageParams.map(P),
                        name: t.name,
                        sample_weight: R(n.sample_weight),
                        script: t.script,
                        site_category: n.site_category,
                        stackFrames: L(t.stackFrames),
                        type: t.type,
                        page_time: R(t.page_time),
                        project: t.project,
                        push_phase: n.push_phase,
                        report_source: n.report_source,
                        report_source_ref: n.report_source_ref,
                        rollout_hash: null !== (s = n.rollout_hash) && void 0 !== s ? s : null,
                        script_path: n.script_path,
                        server_revision: R(n.server_revision),
                        spin: R(n.spin),
                        svn_rev: String(n.client_revision),
                        additional_client_revisions: Array.from(null !== (u = n.additional_client_revisions) && void 0 !== u ? u : []).map(F),
                        taalOpcodes: null == t.taalOpcodes ? null : t.taalOpcodes.map((t) => t),
                        web_session_id: n.web_session_id,
                        version: "3",
                        xFBDebug: t.xFBDebug,
                    },
                    { blameModule: p, deferredSource: f } = t;
                return (
                    null != p && (c.blameModule = String(p)),
                    f && f.stackFrames && (c.deferredSource = { stackFrames: L(f.stackFrames) }),
                    t.metadata && (c.metadata = t.metadata),
                    t.loadingUrls && (c.loadingUrls = t.loadingUrls),
                    null != t.serverHash && (c.serverHash = t.serverHash),
                    null != t.windowLocationURL && (c.windowLocationURL = t.windowLocationURL),
                    null != t.loggingSource && (c.loggingSource = t.loggingSource),
                    c
                );
            }
            function N(n) {
                if (!he) return;
                const o = n.reason;
                let s;
                if (null == o || "object" != typeof o || (null != o.name && "" !== o.name && null != o.message && "" !== o.message)) (s = l(o)).loggingSource || (s.loggingSource = "ONUNHANDLEDREJECTION");
                else
                    try {
                        (s = t("UnhandledRejection: %s", JSON.stringify(o))).loggingSource = "ONUNHANDLEDREJECTION";
                    } catch (n) {
                        (s = t("UnhandledRejection: (circular) %s", Object.keys(o).join(","))).loggingSource = "ONUNHANDLEDREJECTION";
                    }
                he.reportError(s), n.preventDefault();
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            const k = { PREVIOUS_FILE: 1, PREVIOUS_FRAME: 2, PREVIOUS_DIR: 3, FORCED_KEY: 4 };
            let j = !1;
            var A = {
                errorListener(t) {
                    const n = g.console,
                        o = n[t.type] ? t.type : "error";
                    if ("fatal" === t.type || ("error" === o && !j)) {
                        const o = t.message;
                        n.error("ErrorUtils caught an error:\n\n" + o + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs."), (j = !0);
                    }
                },
            };
            const D = { access_token: null },
                U = g.performance || g.msPerformance || g.webkitPerformance || {};
            var G;
            if (U.now) G = () => U.now();
            else {
                const t = g._cstart,
                    n = Date.now();
                let o = "number" == typeof t && t < n ? t : n,
                    l = 0;
                G = () => {
                    const t = Date.now();
                    let n = t - o;
                    return n < l && (n = t - (o -= l - n)), (l = n), n;
                };
            }
            var $ = G;
            const I = 6,
                T = 6e4,
                x = 6e5,
                z = new Map();
            let B = 0;
            var K = { shouldLog: (t) => o(t.hash) };
            const V = "undefined" == typeof window ? "<self.onerror>" : "<window.onerror>";
            let C;
            var H = {
                setup(t) {
                    "function" == typeof g.addEventListener && null == C && ((C = t), g.addEventListener("error", s));
                },
            };
            const J = [],
                W = {
                    pushGuard(t) {
                        J.unshift(t);
                    },
                    popGuard() {
                        J.shift();
                    },
                    inGuard: () => 0 !== J.length,
                    cloneGuardList: () => J.map((t) => t.name),
                    findDeferredSource() {
                        for (const t of J) if (null != t.deferredSource) return t.deferredSource;
                    },
                };
            let X = [];
            class q {
                constructor() {
                    this.metadata = [...X];
                }
                addEntries(...t) {
                    return this.metadata.push(...t), this;
                }
                addEntry(t, n, o) {
                    return this.metadata.push([t, n, o]), this;
                }
                isEmpty() {
                    return 0 === this.metadata.length;
                }
                clearEntries() {
                    this.metadata = [];
                }
                format() {
                    const t = [];
                    return (
                        this.metadata.forEach((n) => {
                            if (n && n.length) {
                                const o = n.map((t) => (null != t ? String(t).replace(/:/g, "_") : "")).join(":");
                                t.push(o);
                            }
                        }),
                        t
                    );
                }
                getAll() {
                    return this.metadata;
                }
                static addGlobalMetadata(t, n, o) {
                    X.push([t, n, o]);
                }
                static getGlobalMetadata() {
                    return X;
                }
                static unsetGlobalMetadata(t, n) {
                    X = X.filter((o) => !(Array.isArray(o) && o[0] === t && o[1] === n));
                }
            }
            const Y = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 },
                Q = {
                    aggregateError: function (t, n) {
                        var o, l;
                        if (Object.isFrozen(t)) return;
                        n.type && (!t.type || Y[t.type] > Y[n.type]) && (t.type = n.type);
                        const s = n.metadata;
                        if (null != s) {
                            var u;
                            const n = null !== (u = t.metadata) && void 0 !== u ? u : new q();
                            null != s && n.addEntries(...s.getAll()), (t.metadata = n);
                        }
                        null != n.project && (t.project = n.project),
                            null != n.errorName && (t.errorName = n.errorName),
                            null != n.componentStack && (t.componentStack = n.componentStack),
                            null != n.deferredSource && (t.deferredSource = n.deferredSource),
                            null != n.blameModule && (t.blameModule = n.blameModule),
                            null != n.loggingSource && (t.loggingSource = n.loggingSource);
                        let c = null !== (o = t.messageFormat) && void 0 !== o ? o : t.message;
                        const p = null !== (l = t.messageParams) && void 0 !== l ? l : [];
                        if (c !== n.messageFormat && null != n.messageFormat) {
                            var f;
                            (c += ` [Caught in: ${n.messageFormat}]`), p.push(...(null !== (f = n.messageParams) && void 0 !== f ? f : []));
                        }
                        (t.messageFormat = c), (t.messageParams = p);
                        const h = n.forcedKey,
                            E = t.forcedKey,
                            v = null != h && null != E ? `${h}_${E}` : null !== h && void 0 !== h ? h : E;
                        t.forcedKey = v;
                    },
                    toReadableMessage: function (t) {
                        var n;
                        return c(null !== (n = t.messageFormat) && void 0 !== n ? n : t.message, t.messageParams || []);
                    },
                    toStringParams: function (t) {
                        return (null !== t && void 0 !== t ? t : []).map((t) => String(t));
                    },
                },
                Z = 5,
                ee = [];
            var re = {
                add: p,
                addFromXHR: function (t) {
                    const n = t.getAllResponseHeaders();
                    if (null != n && n.indexOf("X-FB-Debug") >= 0) {
                        const n = t.getResponseHeader("X-FB-Debug");
                        n && p(n);
                    }
                },
                getAll: function () {
                    return ee;
                },
            };
            const te = "abcdefghijklmnopqrstuvwxyz012345",
                ne = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/],
                oe = /^\w+:\s.*?\n/g;
            null != Error.stackTraceLimit && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);
            var ae = {
                formatStackFrame: b,
                normalizeError: O,
                ifNormalizedError: function (t) {
                    return null != t && "object" == typeof t && !0 === t.isNormalizedError ? t : null;
                },
            };
            const le = [],
                se = [];
            let ie = !1;
            const ue = {
                history: se,
                addListener(t, n = !1) {
                    le.push(t),
                        n ||
                            se.forEach((n) => {
                                var o;
                                return t(n, null !== (o = n.loggingSource) && void 0 !== o ? o : "DEPRECATED");
                            });
                },
                unshiftListener(t) {
                    le.unshift(t);
                },
                removeListener(t) {
                    _(le, t);
                },
                reportError(t) {
                    const n = ae.normalizeError(t);
                    ue.reportNormalizedError(n);
                },
                reportNormalizedError(t) {
                    if (ie) return !1;
                    const n = W.cloneGuardList();
                    if ((t.componentStackFrames && n.unshift("<global.react>"), n.length > 0 && (t.guardList = n), null == t.deferredSource)) {
                        const n = W.findDeferredSource();
                        null != n && (t.deferredSource = ae.normalizeError(n));
                    }
                    se.length > 50 && se.splice(25, 1), se.push(t), (ie = !0);
                    for (let n = 0; n < le.length; n++)
                        try {
                            var o;
                            le[n](t, null !== (o = t.loggingSource) && void 0 !== o ? o : "DEPRECATED");
                        } catch (t) {}
                    return (ie = !1), !0;
                },
            };
            ue.addListener(A.errorListener);
            let ce = !1;
            const de = {
                    applyWithGuard(t, n, o, s) {
                        if (
                            (W.pushGuard({ name: (null === s || void 0 === s ? void 0 : s.name) || (t.name ? `func_name:${t.name}` : null) || "<anonymous guard>", deferredSource: null === s || void 0 === s ? void 0 : s.deferredSource }),
                            ce)
                        )
                            try {
                                return t.apply(n, o);
                            } finally {
                                W.popGuard();
                            }
                        try {
                            return Function.prototype.apply.call(t, n, o);
                        } catch (n) {
                            try {
                                var u;
                                const { deferredSource: c, onError: p, onNormalizedError: f } = null !== s && void 0 !== s ? s : {},
                                    h = l(n),
                                    E = {
                                        deferredSource: c,
                                        loggingSource: "GUARDED",
                                        project: null !== (u = null === s || void 0 === s ? void 0 : s.project) && void 0 !== u ? u : "ErrorGuard",
                                        type: null === s || void 0 === s ? void 0 : s.errorType,
                                    };
                                Q.aggregateError(h, E);
                                const v = ae.normalizeError(h);
                                null == h && t && ((v.extra[t.toString().substring(0, 100)] = "function"), null != o && o.length && (v.extra[Array.from(o).toString().substring(0, 100)] = "args")),
                                    (v.guardList = W.cloneGuardList()),
                                    p && p(h),
                                    f && f(v),
                                    ue.reportNormalizedError(v);
                            } catch (t) {}
                        } finally {
                            W.popGuard();
                        }
                    },
                    guard(t, n) {
                        function o(...o) {
                            return de.applyWithGuard(t, this, o, n);
                        }
                        return t.__SMmeta && (o.__SMmeta = t.__SMmeta), o;
                    },
                    inGuard: () => W.inGuard(),
                    skipGuardGlobal(t) {
                        ce = t;
                    },
                },
                ge = 1024,
                me = [];
            let pe = 0;
            var fe = {
                createErrorPayload: M,
                postError: function (t, n, o) {
                    if ((pe++, 0 === n.sample_weight)) return !1;
                    const l = K.shouldLog(t);
                    if (null == l) return !1;
                    const s = M(t, n);
                    return Object.assign(s, { ancestors: me.slice(), clientWeight: F(l), page_position: F(pe) }), me.length < 15 && me.push(t.hash), o(s), !0;
                },
            };
            let he = null,
                Ee = !1;
            var ve = {
                    onunhandledrejection: N,
                    setup: function (t) {
                        (he = t), "function" != typeof g.addEventListener || Ee || ((Ee = !0), g.addEventListener("unhandledrejection", N));
                    },
                },
                Se = {
                    preSetup(t) {
                        (null != t && !0 === t.ignoreOnError) || H.setup(ue), (null != t && !0 === t.ignoreOnUnahndledRejection) || ve.setup(ue);
                    },
                    setup(t, n) {
                        ue.addListener((o) => {
                            fe.postError(o, t, n);
                        });
                    },
                };
            class ye {
                constructor(t) {
                    (this.project = t), (this.events = []), (this.metadata = new q()), (this.taalOpcodes = []);
                }
                $FBLogMessage1(t, n, ...o) {
                    const l = String(n),
                        { events: s, project: u, metadata: c, blameModule: p, forcedKey: f } = this;
                    let h,
                        E = this.error;
                    if (this.normalizedError) {
                        const n = { message: `${this.normalizedError.messageFormat} [Caught in: ${l}]`, params: [...this.normalizedError.messageParams, ...o], forcedKey: f };
                        h = Object.assign({}, this.normalizedError, { message: n.message, messageFormat: n.message, messageParams: Q.toStringParams(n.params), project: u, type: t, loggingSource: "FBLOGGER" });
                    } else if (E)
                        this.taalOpcodes.length > 0 && new ye("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"),
                            Q.aggregateError(E, { messageFormat: l, messageParams: Q.toStringParams(o), errorName: E.name, forcedKey: f, project: u, type: t, loggingSource: "FBLOGGER" }),
                            (h = ae.normalizeError(E));
                    else {
                        if (void 0 === (E = new Error(l)).stack)
                            try {
                                throw E;
                            } catch (t) {}
                        (E.messageFormat = l),
                            (E.messageParams = Q.toStringParams(o)),
                            (E.blameModule = p),
                            (E.forcedKey = f),
                            (E.project = u),
                            (E.type = t),
                            (E.loggingSource = "FBLOGGER"),
                            (E.taalOpcodes = [k.PREVIOUS_FRAME, k.PREVIOUS_FRAME, ...this.taalOpcodes]),
                            ((h = ae.normalizeError(E)).name = "FBLogger");
                    }
                    return c.isEmpty() || (h.metadata = c.format()), s.length > 0 && (null != h.events ? h.events.push(...s) : (h.events = s)), ue.reportNormalizedError(h), E;
                }
                fatal(t, ...n) {
                    this.$FBLogMessage1("fatal", t, ...n);
                }
                mustfix(t, ...n) {
                    this.$FBLogMessage1("error", t, ...n);
                }
                warn(t, ...n) {
                    this.$FBLogMessage1("warn", t, ...n);
                }
                info(t, ...n) {
                    this.$FBLogMessage1("info", t, ...n);
                }
                debug(t, ...n) {}
                mustfixThrow(n, ...o) {
                    let l = this.$FBLogMessage1("error", n, ...o);
                    throw (l || (((l = t("mustfixThrow does not support catchingNormalizedError")).taalOpcodes = l.taalOpcodes || []), l.taalOpcodes.push(k.PREVIOUS_FRAME)), l);
                }
                catching(t) {
                    return t instanceof Error ? (this.error = t) : new ye("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"), this;
                }
                catchingNormalizedError(t) {
                    return (this.normalizedError = t), this;
                }
                event(t) {
                    return this.events.push(t), this;
                }
                blameToModule(t) {
                    return (this.blameModule = t), this;
                }
                blameToPreviousFile() {
                    return this.taalOpcodes.push(k.PREVIOUS_FILE), this;
                }
                blameToPreviousFrame() {
                    return this.taalOpcodes.push(k.PREVIOUS_FRAME), this;
                }
                blameToPreviousDirectory() {
                    return this.taalOpcodes.push(k.PREVIOUS_DIR), this;
                }
                addToCategoryKey(t) {
                    return (this.forcedKey = t), this;
                }
                addMetadata(t, n, o) {
                    return this.metadata.addEntry(t, n, o), this;
                }
            }
            const be = (t, n) => {
                const o = new ye(t);
                return null != n ? o.event(`${t}.${n}`) : o;
            };
            be.addGlobalMetadata = (t, n, o) => {
                q.addGlobalMetadata(t, n, o);
            };
            var Oe = {
                    blameToPreviousFile(t) {
                        var n;
                        return (t.taalOpcodes = null !== (n = t.taalOpcodes) && void 0 !== n ? n : []), t.taalOpcodes.push(k.PREVIOUS_FILE), t;
                    },
                    blameToPreviousFrame(t) {
                        var n;
                        return (t.taalOpcodes = null !== (n = t.taalOpcodes) && void 0 !== n ? n : []), t.taalOpcodes.push(k.PREVIOUS_FRAME), t;
                    },
                    blameToPreviousDirectory(t) {
                        var n;
                        return (t.taalOpcodes = null !== (n = t.taalOpcodes) && void 0 !== n ? n : []), t.taalOpcodes.push(k.PREVIOUS_DIR), t;
                    },
                },
                _e = {
                    err: t,
                    ErrorBrowserConsole: A,
                    ErrorDynamicData: D,
                    ErrorFilter: K,
                    ErrorGlobalEventHandler: H,
                    ErrorGuard: de,
                    ErrorGuardState: W,
                    ErrorMetadata: q,
                    ErrorNormalizeUtils: ae,
                    ErrorPoster: fe,
                    ErrorPubSub: ue,
                    ErrorSerializer: Q,
                    ErrorSetup: Se,
                    ErrorXFBDebug: re,
                    FBLogger: be,
                    getErrorSafe: l,
                    getSimpleHash: f,
                    TAAL: Oe,
                    TAALOpcode: k,
                };
            e.default = _e;
        },
        18,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = "https://graph.instagram.com/logging_client_events";
        },
        15,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var t = { _: (t) => r(d[0]).passesGatekeeper(t) };
            e.default = t;
        },
        16,
        [19]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function n(n) {
                if (!w)
                    try {
                        throw new Error("Accessing config before it has been initialized");
                    } catch (n) {
                        (n.framesToPop = 1), (n.name = "Config Error"), window.__bufferedErrors && window.__bufferedErrors.push({ error: n });
                    }
                try {
                    return n(w || window._sharedData || window.__initialData.data);
                } catch (n) {
                    return null;
                }
            }
            function t() {
                return window && window._cached_shared_Data ? window._cached_shared_Data : {};
            }
            function o() {
                return n((n) => n.platform) || r(d[0]).appPlatformTypes.UNKNOWN;
            }
            function u() {
                return o() === r(d[0]).appPlatformTypes.ANDROID;
            }
            function c() {
                return o() === r(d[0]).appPlatformTypes.IOS;
            }
            function s() {
                const n = o();
                return n === r(d[0]).appPlatformTypes.OSMETA_DEFAULT || n === r(d[0]).appPlatformTypes.OSMETA_TIZEN || n === r(d[0]).appPlatformTypes.OSMETA_WINDOWS_TABLET;
            }
            function f() {
                const t = n((n) => n.entry_data);
                return t ? Object.keys(t) : [];
            }
            function l() {
                return n((n) => {
                    var t;
                    return n.config.viewerId || (null === (t = n.config.viewer) || void 0 === t ? void 0 : t.id);
                });
            }
            function p() {
                return n((n) => n.country_code) || null;
            }
            function _() {
                return n((n) => n.consent_dialog_config);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            let w = null;
            const y = i(d[2])(function () {
                    return r(d[3]).canUseDOM && r(d[1]).isMobile() && window.matchMedia("(display-mode: standalone)").matches;
                }),
                h = i(d[2])(function () {
                    return "DE" === p();
                }),
                E = i(d[2])(function () {
                    const n = p();
                    return "DE" === n || "AT" === n;
                });
            (e.SERVER_CHECK_KEYS = { HASHTAG_FOLLOW_ENABLE: "hfe" }),
                (e.setRawConfig = function (n) {
                    const t = { ...n };
                    t.to_cache && (Object.assign(t, t.to_cache), delete t.to_cache, delete t.cache_schema_version), (w = t);
                }),
                (e.getCachedSharedData = t),
                (e.getDeploymentStage = function () {
                    return n((n) => n.deployment_stage);
                }),
                (e.isC1f = function () {
                    return !!n((n) => "c1f" === n.frontend_env);
                }),
                (e.getFrontendEnv = function () {
                    return n((n) => n.frontend_env) || "prod";
                }),
                (e.getRolloutHash = function () {
                    return t().rollout_hash || n((n) => n.rollout_hash) || "<unknown>";
                }),
                (e.enableInCurrentDeployment = function (t) {
                    const o = n((n) => n.mid_pct);
                    return null != o && o < t;
                }),
                (e.getAppPlatform = o),
                (e.isAndroid = u),
                (e.isIOS = c),
                (e.isOSMETA = s),
                (e.isIOSOrOSMETA = function () {
                    return c() || s();
                }),
                (e.doesPlatformSupportNativeApp = function () {
                    return !r(d[1]).isOculusBrowser() && (u() || c() || s());
                }),
                (e.isProgressiveWebApp = y),
                (e.getIGAppID = function () {
                    return r(d[1]).isIgLite() ? r(d[0]).igLiteAppId : r(d[1]).isWindowsPWA() ? r(d[0]).instagramWindowsPWAAppId : r(d[1]).isDesktop() ? r(d[0]).instagramWebDesktopFBAppId : r(d[0]).instagramWebFBAppId;
                }),
                (e.getAppVersion = function () {
                    return r(d[1]).getIgLiteVersion() || r(d[0]).appVersionForLogging;
                }),
                (e.getGraphTokenForApp = function () {
                    return r(d[1]).isIgLite()
                        ? `${r(d[0]).igLiteAppId}|${r(d[0]).igLiteClientToken}`
                        : r(d[1]).isDesktop()
                        ? `${r(d[0]).instagramWebDesktopFBAppId}|${r(d[0]).instagramWebDesktopClientToken}`
                        : `${r(d[0]).instagramWebFBAppId}|${r(d[0]).instagramWebClientToken}`;
                }),
                (e.getPageEntrypoints = f),
                (e.isErrorEntrypoint = function () {
                    if (!i(d[4])._("ig/acquisition:enable_404_react_routing")) return !1;
                    const n = f();
                    return 1 === n.length && "HttpErrorPage" === n[0];
                }),
                (e.isGatedContentEntrypoint = function () {
                    const n = f();
                    return 1 === n.length && "HttpGatedContentPage" === n[0];
                }),
                (e.getViewerData_DO_NOT_USE = function () {
                    return n((n) => n.config.viewer);
                }),
                (e.getViewerId = l),
                (e.getViewerIdOrZero = function () {
                    var n;
                    return null !== (n = l()) && void 0 !== n ? n : "0";
                }),
                (e.isLoggedIn = function () {
                    return !!l();
                }),
                (e.getCSRFToken = function () {
                    return i(d[5])(i(d[6]).CSRFTOKEN) || n((n) => n.config.csrf_token) || window._csrf_token;
                }),
                (e.isWhitelistedCrawlBot = function () {
                    return !!n((n) => n.is_whitelisted_crawl_bot);
                }),
                (e.getConnectionQualityRating = function () {
                    return n((n) => n.connection_quality_rating) || "UNKNOWN";
                }),
                (e.getCountryCode = p),
                (e.isGermanyCountryCode = h),
                (e.isLoggedOutReportableCountryCode = E),
                (e.probablyHasApp = function () {
                    return !!n((n) => n.probably_has_app);
                }),
                (e.getLanguageCode = function () {
                    return n((n) => n.language_code);
                }),
                (e.getConsentDialogConfig = _),
                (e.needsToConfirmCookies = function () {
                    const n = _();
                    return !!(null === n || void 0 === n ? void 0 : n.should_show_consent_dialog);
                }),
                (e.passesGatekeeper = function (t) {
                    const o = n((n) => n.gatekeepers);
                    return !!o && !0 === o[t];
                }),
                (e.getGatekeepers = function () {
                    return n((n) => n.gatekeepers) || {};
                }),
                (e.getKnobxValue = function (t) {
                    const o = n((n) => n.knobx),
                        u = o && o[t];
                    return null == u ? null : u;
                }),
                (e.getQEMap = function () {
                    return n((n) => n.qe) || {};
                }),
                (e.mergeQEValues = function (n) {
                    w && (w.qe = { ...w.qe, ...n });
                }),
                (e.getLocale = function () {
                    return n((n) => n.locale) || "en_US";
                }),
                (e.getNonce = function () {
                    return n((n) => n.nonce) || "";
                }),
                (e.getZeroFeature = function () {
                    return n((n) => n.zero_data.zero_features) || [];
                }),
                (e.getZeroNUXPreference = function () {
                    return n((n) => n.zero_data.nux_preference) || {};
                }),
                (e.getZeroCarrierSignalPings = function () {
                    return n((n) => n.zero_data.carrier_signal_pings) || [];
                }),
                (e.getZeroHostMap = function () {
                    return n((n) => n.zero_data.zero_hosts_map) || {};
                }),
                (e.getJsRewriteBlacklist = function () {
                    return n((n) => n.zero_data.js_rewrite_blacklist) || [];
                }),
                (e.getZeroCarrierName = function () {
                    const t = r(d[7])(3480);
                    return n((n) => n.zero_data.carrier_name) || t;
                }),
                (e.getZeroCarrierId = function () {
                    return n((n) => n.zero_data.carrier_id) || 0;
                }),
                (e.passesServerChecks = function (t) {
                    const o = n((n) => n.server_checks);
                    return !!o && !0 === o[t];
                }),
                (e.getInitialDirectBadgeCountAsJSONString = function () {
                    return n((n) => {
                        var t;
                        return null === (t = n.config.viewer) || void 0 === t ? void 0 : t.badge_count;
                    });
                }),
                (e.getBundleVariant = function () {
                    return t().bundle_variant || n((n) => n.bundle_variant);
                }),
                (e.getDeviceId = function () {
                    var t;
                    return null !== (t = n((n) => n.device_id)) && void 0 !== t ? t : "";
                }),
                (e.getEncryptionPublicKey = function () {
                    return n((n) => n.encryption.public_key);
                }),
                (e.getEncryptionKeyId = function () {
                    return n((n) => n.encryption.key_id);
                }),
                (e.getEncryptionVersion = function () {
                    return n((n) => n.encryption.version);
                }),
                (e.isDevServer = function () {
                    return !0 === n((n) => n.is_dev);
                }),
                (e.isE2EServer = function () {
                    return !0 === n((n) => n.is_e2e);
                }),
                (e.getBDSignalCollectionConfig = function () {
                    return n((n) => n.signal_collection_config);
                }),
                (e.getBrowserPushPublicKey = function () {
                    return n((n) => n.browser_push_pub_key);
                });
        },
        19,
        [20, 21, 22, 23, 24, 25, 26, 27]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            (e.appPlatformTypes = {
                UNKNOWN: "unknown",
                IOS: "ios",
                ANDROID: "android",
                BLACKBERRY: "blackberry",
                WINDOWSPHONE: "windows_phone",
                WEB: "web",
                WINDOWSPHONE10: "windows_phone_10",
                WINDOWSNT10: "windows_nt_10",
                OSMETA_WINDOWS_PHONE: "osmeta_windows_phone",
                OSMETA_WINDOWS_TABLET: "osmeta_windows_tablet",
                OSMETA_TIZEN: "osmeta_tizen",
                OSMETA_DEFAULT: "osmeta_default",
            }),
                (e.appPlatformIndex = { UNKNOWN: -1, IOS: 0, ANDROID: 1 }),
                (e.appleAppStoreAppId = "389801252"),
                (e.appleAppStoreUrl = "https://itunes.apple.com/app/instagram/id389801252"),
                (e.instagramFBAppId = "124024574287414"),
                (e.instagramWebFBAppId = "1217981644879628"),
                (e.instagramWebDesktopFBAppId = "936619743392459"),
                (e.igLiteAppId = "152431142231154"),
                (e.instagramWindowsPWAAppId = "487152425211411"),
                (e.wwwCometFBAppId = "2220391788200892"),
                (e.instagramGoogleClientId = "51884436741-uudfu5nafa5ufh5e4fks8jv5aa8rgddd.apps.googleusercontent.com"),
                (e.appVersionForLogging = "1.0.0"),
                (e.instagramWebClientToken = "65a937f07619e8d4dce239c462a447ce"),
                (e.instagramWebDesktopClientToken = "3cdb3f896252a1db29679cb4554db266"),
                (e.igLiteClientToken = "0c20b150a63e609a804abbb9925df651"),
                (e.googlePlayUrl = "https://play.google.com/store/apps/details?id=com.instagram.android"),
                (e.googlePlayInstagramLiteCarbonUrl = "https://play.google.com/store/apps/details?id=com.instagram.lite"),
                (e.windowsPhoneAppStoreUrl = "http://www.windowsphone.com/s?appid=3222a126-7f20-4273-ab4a-161120b21aea"),
                (e.osmetaWindowsPhoneAppStoreUrl = "https://www.microsoft.com/en-us/store/apps/instagram/9nblggh5l9xt"),
                (e.unknownDownloadUrl = "/download/"),
                (e.pressSiteUrl = "https://about.instagram.com/blog/");
        },
        20,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function n(n) {
                return s("os", n);
            }
            function t(n) {
                return s("engine", n);
            }
            function o(n) {
                return "browser" === n ? O.getBrowser() : "engine" === n ? O.getEngine() : O.getOS();
            }
            function s(n, t) {
                const s = o(n);
                if (s.name === t) return !0;
                if (!t.startsWith(s.name)) return !1;
                const u = t.slice(s.name.length);
                return !!s.version && i(d[2]).contains(u, s.version);
            }
            function u(n) {
                return s("browser", n);
            }
            function c() {
                return !C();
            }
            function f() {
                return null != O.ua.match(/\WiPad\W/);
            }
            function w() {
                return !A() && (F(/Instagram/) || E());
            }
            function l() {
                return F(/igtv/);
            }
            function h() {
                return F(/Twitter/);
            }
            function b() {
                return u("Facebook");
            }
            function p() {
                return b() || h() || O.getBrowser().name.includes("Webview");
            }
            function B() {
                if (c() || A()) return !1;
                return [/Twitter/, /Line/, /KAKAOTALK/, /YJApp/, /Pinterest/, /buzzfeed/, /Flipboard/, /CaWebApp/, /NAVER/, /lucra/].some(F);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            class W {
                constructor(n) {
                    const t = new (i(d[0]))(n);
                    (this.ua = t.getUA()),
                        (this.getBrowser = i(d[1])(() => t.getBrowser())),
                        (this.getEngine = i(d[1])(() => t.getEngine())),
                        (this.getOS = i(d[1])(() => t.getOS())),
                        (this.getDevice = i(d[1])(() => t.getDevice())),
                        (this.getCPU = i(d[1])(() => t.getCPU()));
                }
            }
            let O = new W();
            const I = i(d[1])(() => {
                    if (A()) {
                        const n = O.ua.match(/InstagramLite (\d+(.\d+)*)/);
                        if (n && n[1]) return n[1];
                    }
                    return null;
                }),
                v = i(d[3])((n) => {
                    if (A()) {
                        const t = I();
                        if (null != t) return i(d[2]).contains(n, t);
                    }
                    return !1;
                }),
                A = i(d[1])(() => -1 !== O.ua.indexOf("InstagramLite")),
                E = i(d[1])(() => -1 !== O.ua.indexOf("InstagramCarbon")),
                S = i(d[1])(() => (-1 !== O.ua.indexOf("Windows NT") && window.matchMedia("(display-mode: minimal-ui)").matches) || x()),
                x = i(d[1])(() => -1 !== O.ua.indexOf("Windows NT") && -1 !== O.ua.indexOf("MSAppHost") && null != window.Windows),
                C = i(d[1])(() => (-1 !== O.ua.indexOf("Mobi") || w()) && !f()),
                F = i(d[3])((n) => n.test(O.ua)),
                T = i(d[1])(() => {
                    return (
                        !!("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) ||
                        window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled),(heartz)").matches
                    );
                });
            (e._updateParser = function (n) {
                O = new W(n);
            }),
                (e.isOS = n),
                (e.isEngine = t),
                (e.isBrowser = u),
                (e.getBrowserString = function () {
                    const n = O.getBrowser();
                    return `${n.name} ${n.version}`;
                }),
                (e.isDesktop = c),
                (e.getIgLiteVersion = I),
                (e.isIgLiteVersion = v),
                (e.isIgLite = A),
                (e.isIgCarbon = E),
                (e.isWindowsPWA = S),
                (e.isLegacyEdgePWA = x),
                (e.isMobile = C),
                (e.isEdge = function () {
                    return u("Edge");
                }),
                (e.isOculusBrowser = function () {
                    return u("Oculus Browser");
                }),
                (e.isOpera = function () {
                    return O.getBrowser().name.startsWith("Opera");
                }),
                (e.isOperaWithUnsupportedFullscreen = function () {
                    return u("Opera < 50");
                }),
                (e.isIE = function () {
                    return u("IE") || u("IEMobile");
                }),
                (e.isUAMatch = F),
                (e.isIGWebview = w),
                (e.isIGTVWebview = l),
                (e.isTwitterWebview = h),
                (e.isFBWebview = b),
                (e.isWebview = p),
                (e.isInAppBrowser = B),
                (e.isBrokenDeeplinkingInAppBrowser = function () {
                    return C() && r(d[4]).isAndroid() ? [/Pinterest/, /Snapchat/].some(F) : !(!C() || !r(d[4]).isIOS()) && [/Pinterest/].some(F);
                }),
                (e.isUCBrowser = function () {
                    return u("UCBrowser");
                }),
                (e.isUCBrowserWithUnsupportedFullscreen = function () {
                    return u("UCBrowser < 12");
                }),
                (e.isFirefox = function () {
                    return u("Firefox");
                }),
                (e.isTouchDevice = T),
                (e.isChromeWithBuggyInputFile = function () {
                    return !!(n("Android") && u("Chrome") && O.getBrowser().version && O.getBrowser().version.startsWith("66.0."));
                }),
                (e.isIgLiteEligible = function () {
                    return i(d[5])._("ig_web_iglite") && n("Android > 4.4");
                }),
                (e.isBrowserWithFlexboxRelativeHeightIssue = function () {
                    return n("Android < 6") || n("iOS < 11");
                }),
                (e.isVapidEligible = function () {
                    return (u("Chrome >= 70") || u("Firefox >= 70") || u("Edge >= 78")) && (c() || n("Android"));
                }),
                (e.isMobileSafari = function () {
                    return (t("WebKit") || u("Safari")) && T();
                }),
                (e.isSupportedBrowser = function () {
                    const o = n("iOS") && u("Firefox") && O.getEngine().version >= "604";
                    return u("Chrome") || u("Firefox") || u("Edge") || u("Safari")
                        ? u("Chrome >= 57") || u("Firefox >= 52") || u("Edge >= 16") || u("Safari >= 11") || o
                        : t("Gecko") || t("EdgeHTML") || t("Blink") || t("WebKit") || w() || l() || p() || B();
                });
        },
        21,
        [28, 29, 30, 31, 19, 16]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            !(function (s, o) {
                "use strict";
                var n = "model",
                    t = "name",
                    w = "type",
                    l = "vendor",
                    u = "version",
                    c = "architecture",
                    b = "console",
                    p = "mobile",
                    f = "tablet",
                    h = "smarttv",
                    v = function (s, o) {
                        var n = {};
                        for (var t in s) o[t] && o[t].length % 2 == 0 ? (n[t] = o[t].concat(s[t])) : (n[t] = s[t]);
                        return n;
                    },
                    k = function (s, o) {
                        return "string" == typeof s && -1 !== o.toLowerCase().indexOf(s.toLowerCase());
                    },
                    x = function (s) {
                        return s.toLowerCase();
                    },
                    T = function (s) {
                        return "string" == typeof s ? s.replace(/[^\d\.]/g, "").split(".")[0] : o;
                    },
                    y = function (s) {
                        return s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                    },
                    A = {
                        rgx: function (s, n) {
                            for (var t, w, l, u, c, b, p = 0; p < n.length && !c; ) {
                                var f = n[p],
                                    h = n[p + 1];
                                for (t = w = 0; t < f.length && !c; )
                                    if ((c = f[t++].exec(s)))
                                        for (l = 0; l < h.length; l++)
                                            (b = c[++w]),
                                                "object" == typeof (u = h[l]) && u.length > 0
                                                    ? 2 == u.length
                                                        ? "function" == typeof u[1]
                                                            ? (this[u[0]] = u[1].call(this, b))
                                                            : (this[u[0]] = u[1])
                                                        : 3 == u.length
                                                        ? "function" != typeof u[1] || (u[1].exec && u[1].test)
                                                            ? (this[u[0]] = b ? b.replace(u[1], u[2]) : o)
                                                            : (this[u[0]] = b ? u[1].call(this, b, u[2]) : o)
                                                        : 4 == u.length && (this[u[0]] = b ? u[3].call(this, b.replace(u[1], u[2])) : o)
                                                    : (this[u] = b || o);
                                p += 2;
                            }
                        },
                        str: function (s, n) {
                            for (var t in n)
                                if ("object" == typeof n[t] && n[t].length > 0) {
                                    for (var w = 0; w < n[t].length; w++) if (k(n[t][w], s)) return "?" === t ? o : t;
                                } else if (k(n[t], s)) return "?" === t ? o : t;
                            return s;
                        },
                    },
                    S = { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } },
                    E = { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } },
                    N = {
                        windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } },
                    },
                    _ = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [t, u],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [[t, "Opera Mini"], u],
                            [/\s(opr)\/([\w\.]+)/i],
                            [[t, "Opera"], u],
                            [
                                /(kindle)\/([\w\.]+)/i,
                                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                                /(?:ms|\()(ie)\s([\w\.]+)/i,
                                /(rekonq)\/([\w\.]*)/i,
                                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                            ],
                            [t, u],
                            [/(konqueror)\/([\w\.]+)/i],
                            [[t, "Konqueror"], u],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [[t, "IE"], u],
                            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                            [[t, "Edge"], u],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [[t, "Yandex"], u],
                            [/(Avast)\/([\w\.]+)/i],
                            [[t, "Avast Secure Browser"], u],
                            [/(AVG)\/([\w\.]+)/i],
                            [[t, "AVG Secure Browser"], u],
                            [/(puffin)\/([\w\.]+)/i],
                            [[t, "Puffin"], u],
                            [/(focus)\/([\w\.]+)/i],
                            [[t, "Firefox Focus"], u],
                            [/(opt)\/([\w\.]+)/i],
                            [[t, "Opera Touch"], u],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [[t, "UCBrowser"], u],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [[t, /_/g, " "], u],
                            [/(windowswechat qbcore)\/([\w\.]+)/i],
                            [[t, "WeChat(Win) Desktop"], u],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [[t, "WeChat"], u],
                            [/(brave)\/([\w\.]+)/i],
                            [[t, "Brave"], u],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [t, u],
                            [/(QQ)\/([\d\.]+)/i],
                            [t, u],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [t, u],
                            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                            [t, u],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [t, u],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [t],
                            [/(LBBROWSER)/i],
                            [t],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [u, [t, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [u, [t, "Facebook"]],
                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                            [t, u],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [u, [t, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [[t, /(.+)/, "$1 WebView"], u],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [[t, /(.+(?:g|us))(.+)/, "$1 $2"], u],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [u, [t, "Android Browser"]],
                            [/(sailfishbrowser)\/([\w\.]+)/i],
                            [[t, "Sailfish Browser"], u],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [t, u],
                            [/(dolfin)\/([\w\.]+)/i],
                            [[t, "Dolphin"], u],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [[t, "360 Browser"]],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [[t, "Chrome"], u],
                            [/(coast)\/([\w\.]+)/i],
                            [[t, "Opera Coast"], u],
                            [/fxios\/([\w\.-]+)/i],
                            [u, [t, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [u, [t, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [u, t],
                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [[t, "GSA"], u],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [t, [u, A.str, S.oldsafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [t, u],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [[t, "Netscape"], u],
                            [
                                /(swiftfox)/i,
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                /(links)\s\(([\w\.]+)/i,
                                /(gobrowser)\/?([\w\.]*)/i,
                                /(ice\s?browser)\/v?([\w\._]+)/i,
                                /(mosaic)[\/\s]([\w\.]+)/i,
                            ],
                            [t, u],
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [[c, "amd64"]],
                            [/(ia32(?=;))/i],
                            [[c, x]],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [[c, "ia32"]],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [[c, "arm"]],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [[c, /ower/, "", x]],
                            [/(sun4\w)[;\)]/i],
                            [[c, "sparc"]],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [[c, x]],
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                            [n, l, [w, f]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [n, [l, "Apple"], [w, f]],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [n, "Apple TV"],
                                [l, "Apple"],
                                [w, h],
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [l, n, [w, f]],
                            [/(kf[A-z]+)\sbuild\/.+silk\//i],
                            [n, [l, "Amazon"], [w, f]],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                            [
                                [n, A.str, E.amazon.model],
                                [l, "Amazon"],
                                [w, p],
                            ],
                            [/android.+aft([bms])\sbuild/i],
                            [n, [l, "Amazon"], [w, h]],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [n, l, [w, p]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [n, [l, "Apple"], [w, p]],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [l, n, [w, p]],
                            [/\(bb10;\s(\w+)/i],
                            [n, [l, "BlackBerry"], [w, p]],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                            [n, [l, "Asus"], [w, f]],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [l, "Sony"],
                                [n, "Xperia Tablet"],
                                [w, f],
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [n, [l, "Sony"], [w, p]],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [l, n, [w, b]],
                            [/android.+;\s(shield)\sbuild/i],
                            [n, [l, "Nvidia"], [w, b]],
                            [/(playstation\s[34portablevi]+)/i],
                            [n, [l, "Sony"], [w, b]],
                            [/(sprint\s(\w+))/i],
                            [
                                [l, A.str, E.sprint.vendor],
                                [n, A.str, E.sprint.model],
                                [w, p],
                            ],
                            [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [l, [n, /_/g, " "], [w, p]],
                            [/(nexus\s9)/i],
                            [n, [l, "HTC"], [w, f]],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                            [n, [l, "Huawei"], [w, p]],
                            [/android.+(bah2?-a?[lw]\d{2})/i],
                            [n, [l, "Huawei"], [w, f]],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [l, n, [w, p]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [n, [l, "Microsoft"], [w, b]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [n, /\./g, " "],
                                [l, "Microsoft"],
                                [w, p],
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [n, [l, "Motorola"], [w, p]],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [n, [l, "Motorola"], [w, f]],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [l, y],
                                [n, y],
                                [w, h],
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [n, /^/, "SmartTV"],
                                [l, "Samsung"],
                                [w, h],
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [n, [l, "Sharp"], [w, h]],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [[l, "Samsung"], n, [w, f]],
                            [/smart-tv.+(samsung)/i],
                            [l, [w, h], n],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [[l, "Samsung"], n, [w, p]],
                            [/sie-(\w*)/i],
                            [n, [l, "Siemens"], [w, p]],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [[l, "Nokia"], n, [w, p]],
                            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [n, [l, "Acer"], [w, f]],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [n, [l, "LG"], [w, f]],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [[l, "LG"], n, [w, f]],
                            [/(lg) netcast\.tv/i],
                            [l, n, [w, h]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [n, [l, "LG"], [w, p]],
                            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                            [l, n, [w, f]],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [n, [l, "Lenovo"], [w, f]],
                            [/(lenovo)[_\s-]?([\w-]+)/i],
                            [l, n, [w, p]],
                            [/linux;.+((jolla));/i],
                            [l, n, [w, p]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [l, n, [w, "wearable"]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [l, n, [w, p]],
                            [/crkey/i],
                            [
                                [n, "Chromecast"],
                                [l, "Google"],
                                [w, h],
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [n, [l, "Google"], [w, "wearable"]],
                            [/android.+;\s(pixel c)[\s)]/i],
                            [n, [l, "Google"], [w, f]],
                            [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                            [n, [l, "Google"], [w, p]],
                            [
                                /android.+;\s(\w+)\s+build\/hm\1/i,
                                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
                            ],
                            [
                                [n, /_/g, " "],
                                [l, "Xiaomi"],
                                [w, p],
                            ],
                            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [n, /_/g, " "],
                                [l, "Xiaomi"],
                                [w, f],
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [n, [l, "Meizu"], [w, p]],
                            [/(mz)-([\w-]{2,})/i],
                            [[l, "Meizu"], n, [w, p]],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                            [n, [l, "OnePlus"], [w, p]],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [n, [l, "RCA"], [w, f]],
                            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                            [n, [l, "Dell"], [w, f]],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [n, [l, "Verizon"], [w, f]],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [[l, "Barnes & Noble"], n, [w, f]],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [n, [l, "NuVision"], [w, f]],
                            [/android.+;\s(k88)\sbuild/i],
                            [n, [l, "ZTE"], [w, f]],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [n, [l, "Swiss"], [w, p]],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [n, [l, "Swiss"], [w, f]],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [n, [l, "Zeki"], [w, f]],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [[l, "Dragon Touch"], n, [w, f]],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [n, [l, "Insignia"], [w, f]],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [n, [l, "NextBook"], [w, f]],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [[l, "Voice"], n, [w, p]],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [[l, "LvTel"], n, [w, p]],
                            [/android.+;\s(PH-1)\s/i],
                            [n, [l, "Essential"], [w, p]],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [n, [l, "Envizen"], [w, f]],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [l, n, [w, f]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [n, [l, "MachSpeed"], [w, f]],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [l, n, [w, f]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [n, [l, "Rotor"], [w, f]],
                            [/android.+(KS(.+))\s+build/i],
                            [n, [l, "Amazon"], [w, f]],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [l, n, [w, f]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [[w, x], l, n],
                            [/[\s\/\(](smart-?tv)[;\)]/i],
                            [[w, h]],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [n, [l, "Generic"]],
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [u, [t, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [u, [t, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [t, u],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [u, t],
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [t, u],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [t, [u, A.str, N.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [t, "Windows"],
                                [u, A.str, N.windows.version],
                            ],
                            [/\((bb)(10);/i],
                            [[t, "BlackBerry"], u],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                            [t, u],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [[t, "Symbian"], u],
                            [/\((series40);/i],
                            [t],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [[t, "Firefox OS"], u],
                            [
                                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                                /(mint)[\/\s\(]?(\w*)/i,
                                /(mageia|vectorlinux)[;\s]/i,
                                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                /(hurd|linux)\s?([\w\.]*)/i,
                                /(gnu)\s?([\w\.]*)/i,
                            ],
                            [t, u],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [[t, "Chromium OS"], u],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [[t, "Solaris"], u],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [t, u],
                            [/(haiku)\s(\w+)/i],
                            [t, u],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [u, /_/g, "."],
                                [t, "iOS"],
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [t, "Mac OS"],
                                [u, /_/g, "."],
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [t, u],
                        ],
                    },
                    B = function (n, t) {
                        if (("object" == typeof n && ((t = n), (n = o)), !(this instanceof B))) return new B(n, t).getResult();
                        var w = n || (s && s.navigator && s.navigator.userAgent ? s.navigator.userAgent : ""),
                            l = t ? v(_, t) : _;
                        return (
                            (this.getBrowser = function () {
                                var s = { name: o, version: o };
                                return A.rgx.call(s, w, l.browser), (s.major = T(s.version)), s;
                            }),
                            (this.getCPU = function () {
                                var s = { architecture: o };
                                return A.rgx.call(s, w, l.cpu), s;
                            }),
                            (this.getDevice = function () {
                                var s = { vendor: o, model: o, type: o };
                                return A.rgx.call(s, w, l.device), s;
                            }),
                            (this.getEngine = function () {
                                var s = { name: o, version: o };
                                return A.rgx.call(s, w, l.engine), s;
                            }),
                            (this.getOS = function () {
                                var s = { name: o, version: o };
                                return A.rgx.call(s, w, l.os), s;
                            }),
                            (this.getResult = function () {
                                return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
                            }),
                            (this.getUA = function () {
                                return w;
                            }),
                            (this.setUA = function (s) {
                                return (w = s), this;
                            }),
                            this
                        );
                    };
                (B.VERSION = "0.7.21"),
                    (B.BROWSER = { NAME: t, MAJOR: "major", VERSION: u }),
                    (B.CPU = { ARCHITECTURE: c }),
                    (B.DEVICE = { MODEL: n, VENDOR: l, TYPE: w, CONSOLE: b, MOBILE: p, SMARTTV: h, TABLET: f, WEARABLE: "wearable", EMBEDDED: "embedded" }),
                    (B.ENGINE = { NAME: t, VERSION: u }),
                    (B.OS = { NAME: t, VERSION: u }),
                    void 0 !== e
                        ? (void 0 !== m && m.exports && (e = m.exports = B), (e.UAParser = B))
                        : "function" == typeof define && define.amd
                        ? define(function () {
                              return B;
                          })
                        : s && (s.UAParser = B);
                var M = s && (s.jQuery || s.Zepto);
                if (M && !M.ua) {
                    var z = new B();
                    (M.ua = z.getResult()),
                        (M.ua.get = function () {
                            return z.getUA();
                        }),
                        (M.ua.set = function (s) {
                            z.setUA(s);
                            var o = z.getResult();
                            for (var n in o) M.ua[n] = o[n];
                        });
                }
            })("object" == typeof window ? window : this);
        },
        28,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                return r(d[0])(2, n);
            };
        },
        29,
        [32]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = "Expected a function";
            m.exports = function (t, o) {
                var f;
                if ("function" != typeof o) throw new TypeError(n);
                return (
                    (t = r(d[0])(t)),
                    function () {
                        return --t > 0 && (f = o.apply(this, arguments)), t <= 1 && (o = void 0), f;
                    }
                );
            };
        },
        32,
        [33]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                var t = r(d[0])(n),
                    o = t % 1;
                return t == t ? (o ? t - o : t) : 0;
            };
        },
        33,
        [34]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = 1 / 0,
                t = 1.7976931348623157e308;
            m.exports = function (u) {
                if (!u) return 0 === u ? u : 0;
                if ((u = r(d[0])(u)) === n || u === -1 / 0) return (u < 0 ? -1 : 1) * t;
                return u == u ? u : 0;
            };
        },
        34,
        [35]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = NaN,
                f = /^\s+|\s+$/g,
                n = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                o = parseInt;
            m.exports = function (p) {
                if ("number" == typeof p) return p;
                if (r(d[0])(p)) return t;
                if (r(d[1])(p)) {
                    var c = "function" == typeof p.valueOf ? p.valueOf() : p;
                    p = r(d[1])(c) ? c + "" : c;
                }
                if ("string" != typeof p) return 0 === p ? p : +p;
                p = p.replace(f, "");
                var v = u.test(p);
                return v || s.test(p) ? o(p.slice(2), v ? 2 : 8) : n.test(p) ? t : +p;
            };
        },
        35,
        [36, 37]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var o = "[object Symbol]";
            m.exports = function (t) {
                return "symbol" == typeof t || (r(d[0])(t) && r(d[1])(t) == o);
            };
        },
        36,
        [38, 39]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                return null != n && "object" == typeof n;
            };
        },
        38,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = "[object Null]",
                t = "[object Undefined]",
                o = r(d[0]) ? r(d[0]).toStringTag : void 0;
            m.exports = function (c) {
                return null == c ? (void 0 === c ? t : n) : o && o in Object(c) ? r(d[1])(c) : r(d[2])(c);
            };
        },
        39,
        [40, 41, 42]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = r(d[0]).Symbol;
        },
        40,
        [43]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = "object" == typeof self && self && self.Object === Object && self,
                f = r(d[0]) || t || Function("return this")();
            m.exports = f;
        },
        43,
        [44]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = "object" == typeof g && g && g.Object === Object && g;
            m.exports = t;
        },
        44,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = Object.prototype,
                o = t.hasOwnProperty,
                n = t.toString,
                c = r(d[0]) ? r(d[0]).toStringTag : void 0;
            m.exports = function (t) {
                var l = o.call(t, c),
                    v = t[c];
                try {
                    t[c] = void 0;
                } catch (t) {}
                var p = n.call(t);
                return l ? (t[c] = v) : delete t[c], p;
            };
        },
        41,
        [40]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = Object.prototype.toString;
            m.exports = function (n) {
                return t.call(n);
            };
        },
        42,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                var t = typeof n;
                return null != n && ("object" == t || "function" == t);
            };
        },
        37,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function n(n, u) {
                var c = n.split(F);
                return c.length > 1
                    ? c.some(function (n) {
                          return k.contains(n, u);
                      })
                    : ((n = c[0].trim()), t(n, u));
            }
            function t(n, t) {
                var c = n.split($);
                if (((c.length > 0 && c.length <= 2) || r(d[0])(!1), 1 === c.length)) return u(c[0], t);
                var o = c[0],
                    f = c[1];
                return (I(o) && I(f)) || r(d[0])(!1), u(">=" + o, t) && u("<=" + f, t);
            }
            function u(n, t) {
                if ("" === (n = n.trim())) return !0;
                var u = t.split(w),
                    p = v(n),
                    I = p.modifier,
                    x = p.rangeComponents;
                switch (I) {
                    case "<":
                        return c(u, x);
                    case "<=":
                        return o(u, x);
                    case ">=":
                        return s(u, x);
                    case ">":
                        return l(u, x);
                    case "~":
                    case "~>":
                        return h(u, x);
                    default:
                        return f(u, x);
                }
            }
            function c(n, t) {
                return -1 === _(n, t);
            }
            function o(n, t) {
                var u = _(n, t);
                return -1 === u || 0 === u;
            }
            function f(n, t) {
                return 0 === _(n, t);
            }
            function s(n, t) {
                var u = _(n, t);
                return 1 === u || 0 === u;
            }
            function l(n, t) {
                return 1 === _(n, t);
            }
            function h(n, t) {
                var u = t.slice(),
                    o = t.slice();
                o.length > 1 && o.pop();
                var f = o.length - 1,
                    l = parseInt(o[f], 10);
                return p(l) && (o[f] = l + 1 + ""), s(n, u) && c(n, o);
            }
            function v(n) {
                var t = n.split(w),
                    u = t[0].match(b);
                return u || r(d[0])(!1), { modifier: u[1], rangeComponents: [u[2]].concat(t.slice(1)) };
            }
            function p(n) {
                return !isNaN(n) && isFinite(n);
            }
            function I(n) {
                return !v(n).modifier;
            }
            function x(n, t) {
                for (var u = n.length; u < t; u++) n[u] = "0";
            }
            function y(n, t) {
                x((n = n.slice()), (t = t.slice()).length);
                for (var u = 0; u < t.length; u++) {
                    var c = t[u].match(/^[x*]$/i);
                    if (c && ((t[u] = n[u] = "0"), "*" === c[0] && u === t.length - 1)) for (var o = u; o < n.length; o++) n[o] = "0";
                }
                return x(t, n.length), [n, t];
            }
            function C(n, t) {
                var u = n.match(j)[1],
                    c = t.match(j)[1],
                    o = parseInt(u, 10),
                    f = parseInt(c, 10);
                return p(o) && p(f) && o !== f ? N(o, f) : N(n, t);
            }
            function N(n, t) {
                return typeof n != typeof t && r(d[0])(!1), n > t ? 1 : n < t ? -1 : 0;
            }
            function _(n, t) {
                for (var u = y(n, t), c = u[0], o = u[1], f = 0; f < o.length; f++) {
                    var s = C(c[f], o[f]);
                    if (s) return s;
                }
                return 0;
            }
            var w = /\./,
                F = /\|\|/,
                $ = /\s+\-\s+/,
                b = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
                j = /^(\d*)(.*)/,
                k = {
                    contains: function (t, u) {
                        return n(t.trim(), u.trim());
                    },
                };
            m.exports = k;
        },
        30,
        [45]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            var n = function (n) {};
            m.exports = function (o, t, f, s, u, c, l, v) {
                if ((n(t), !o)) {
                    var p;
                    if (void 0 === t) p = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var h = [f, s, u, c, l, v],
                            w = 0;
                        (p = new Error(
                            t.replace(/%s/g, function () {
                                return h[w++];
                            })
                        )).name = "Invariant Violation";
                    }
                    throw ((p.framesToPop = 1), p);
                }
            };
        },
        45,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function n(c, o) {
                if ("function" != typeof c || (null != o && "function" != typeof o)) throw new TypeError(t);
                var f = function () {
                    var n = arguments,
                        t = o ? o.apply(this, n) : n[0],
                        u = f.cache;
                    if (u.has(t)) return u.get(t);
                    var h = c.apply(this, n);
                    return (f.cache = u.set(t, h) || u), h;
                };
                return (f.cache = new (n.Cache || r(d[0]))()), f;
            }
            var t = "Expected a function";
            (n.Cache = r(d[0])), (m.exports = n);
        },
        31,
        [46]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function t(t) {
                var o = -1,
                    p = null == t ? 0 : t.length;
                for (this.clear(); ++o < p; ) {
                    var l = t[o];
                    this.set(l[0], l[1]);
                }
            }
            (t.prototype.clear = r(d[0])), (t.prototype.delete = r(d[1])), (t.prototype.get = r(d[2])), (t.prototype.has = r(d[3])), (t.prototype.set = r(d[4])), (m.exports = t);
        },
        46,
        [47, 48, 49, 50, 51]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function () {
                (this.size = 0), (this.__data__ = { hash: new (r(d[0]))(), map: new (r(d[1]) || r(d[2]))(), string: new (r(d[0]))() });
            };
        },
        47,
        [52, 53, 54]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function t(t) {
                var o = -1,
                    p = null == t ? 0 : t.length;
                for (this.clear(); ++o < p; ) {
                    var l = t[o];
                    this.set(l[0], l[1]);
                }
            }
            (t.prototype.clear = r(d[0])), (t.prototype.delete = r(d[1])), (t.prototype.get = r(d[2])), (t.prototype.has = r(d[3])), (t.prototype.set = r(d[4])), (m.exports = t);
        },
        52,
        [55, 56, 57, 58, 59]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function () {
                (this.__data__ = r(d[0]) ? r(d[0])(null) : {}), (this.size = 0);
            };
        },
        55,
        [60]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = r(d[0])(Object, "create");
            m.exports = t;
        },
        60,
        [61]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n, o) {
                var t = r(d[0])(n, o);
                return r(d[1])(t) ? t : void 0;
            };
        },
        61,
        [62, 63]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n, o) {
                return null == n ? void 0 : n[o];
            };
        },
        62,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = /^\[object .+?Constructor\]$/,
                o = Function.prototype,
                n = Object.prototype,
                c = o.toString,
                p = n.hasOwnProperty,
                u = RegExp(
                    "^" +
                        c
                            .call(p)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                        "$"
                );
            m.exports = function (o) {
                return !(!r(d[0])(o) || r(d[1])(o)) && (r(d[2])(o) ? u : t).test(r(d[3])(o));
            };
        },
        63,
        [37, 64, 65, 66]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = (function () {
                var n = /[^.]+$/.exec((r(d[0]) && r(d[0]).keys && r(d[0]).keys.IE_PROTO) || "");
                return n ? "Symbol(src)_1." + n : "";
            })();
            m.exports = function (t) {
                return !!n && n in t;
            };
        },
        64,
        [67]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = r(d[0])["__core-js_shared__"];
        },
        67,
        [43]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = "[object AsyncFunction]",
                t = "[object Function]",
                o = "[object GeneratorFunction]",
                c = "[object Proxy]";
            m.exports = function (u) {
                if (!r(d[0])(u)) return !1;
                var b = r(d[1])(u);
                return b == t || b == o || b == n || b == c;
            };
        },
        65,
        [37, 39]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = Function.prototype.toString;
            m.exports = function (n) {
                if (null != n) {
                    try {
                        return t.call(n);
                    } catch (t) {}
                    try {
                        return n + "";
                    } catch (t) {}
                }
                return "";
            };
        },
        66,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t) {
                var s = this.has(t) && delete this.__data__[t];
                return (this.size -= s ? 1 : 0), s;
            };
        },
        56,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var _ = "__lodash_hash_undefined__",
                t = Object.prototype.hasOwnProperty;
            m.exports = function (n) {
                var o = this.__data__;
                if (r(d[0])) {
                    var h = o[n];
                    return h === _ ? void 0 : h;
                }
                return t.call(o, n) ? o[n] : void 0;
            };
        },
        57,
        [60]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = Object.prototype.hasOwnProperty;
            m.exports = function (o) {
                var n = this.__data__;
                return r(d[0]) ? void 0 !== n[o] : t.call(n, o);
            };
        },
        58,
        [60]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var _ = "__lodash_hash_undefined__";
            m.exports = function (s, t) {
                var h = this.__data__;
                return (this.size += this.has(s) ? 0 : 1), (h[s] = r(d[0]) && void 0 === t ? _ : t), this;
            };
        },
        59,
        [60]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = r(d[0])(r(d[1]), "Map");
            m.exports = n;
        },
        53,
        [61, 43]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function t(t) {
                var o = -1,
                    p = null == t ? 0 : t.length;
                for (this.clear(); ++o < p; ) {
                    var l = t[o];
                    this.set(l[0], l[1]);
                }
            }
            (t.prototype.clear = r(d[0])), (t.prototype.delete = r(d[1])), (t.prototype.get = r(d[2])), (t.prototype.has = r(d[3])), (t.prototype.set = r(d[4])), (m.exports = t);
        },
        54,
        [68, 69, 70, 71, 72]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function () {
                (this.__data__ = []), (this.size = 0);
            };
        },
        68,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var t = Array.prototype.splice;
            m.exports = function (n) {
                var o = this.__data__,
                    p = r(d[0])(o, n);
                return !(p < 0 || (p == o.length - 1 ? o.pop() : t.call(o, p, 1), --this.size, 0));
            };
        },
        69,
        [73]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n, t) {
                for (var f = n.length; f--; ) if (r(d[0])(n[f][0], t)) return f;
                return -1;
            };
        },
        73,
        [74]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n, t) {
                return n === t || (n != n && t != t);
            };
        },
        74,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t) {
                var _ = this.__data__,
                    n = r(d[0])(_, t);
                return n < 0 ? void 0 : _[n][1];
            };
        },
        70,
        [73]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t) {
                return r(d[0])(this.__data__, t) > -1;
            };
        },
        71,
        [73]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t, s) {
                var _ = this.__data__,
                    n = r(d[0])(_, t);
                return n < 0 ? (++this.size, _.push([t, s])) : (_[n][1] = s), this;
            };
        },
        72,
        [73]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t) {
                var n = r(d[0])(this, t).delete(t);
                return (this.size -= n ? 1 : 0), n;
            };
        },
        48,
        [75]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t, n) {
                var _ = t.__data__;
                return r(d[0])(n) ? _["string" == typeof n ? "string" : "hash"] : _.map;
            };
        },
        75,
        [76]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                var o = typeof n;
                return "string" == o || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== n : null === n;
            };
        },
        76,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (t) {
                return r(d[0])(this, t).get(t);
            };
        },
        49,
        [75]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                return r(d[0])(this, n).has(n);
            };
        },
        50,
        [75]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (s, t) {
                var n = r(d[0])(this, s),
                    h = n.size;
                return n.set(s, t), (this.size += n.size == h ? 0 : 1), this;
            };
        },
        51,
        [75]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            m.exports = function (n) {
                let t,
                    u = n;
                return function (...n) {
                    return !n.length || r(d[0])(0), u && ((t = u()), (u = null)), t;
                };
            };
        },
        22,
        [77]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            r(d[0]);
            m.exports = function (n, o, ...t) {
                if (!n) {
                    if (void 0 === o) {
                        const n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        throw ((n.framesToPop = 1), n);
                    }
                    {
                        const n = new Error(o);
                        throw ((n.name = "Invariant Violation"), (n.messageFormat = o), (n.messageParams = t.map((n) => String(n))), n.stack, (n.framesToPop = 1), n);
                    }
                }
            };
        },
        77,
        [78]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            var n = function (...t) {
                return (t = t.map((n) => String(n)))[0].split("%s").length !== t.length ? n("ex args number mismatch: %s", JSON.stringify(t)) : n._prefix + JSON.stringify(t) + n._suffix;
            };
            (n._prefix = "<![EX["), (n._suffix = "]]>"), (m.exports = n);
        },
        78,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            const n = !("undefined" == typeof window || !window.document || !window.document.createElement || window._ssr),
                t = { canUseDOM: n, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent), canUseViewport: n && !!window.screen, isInWorker: !n };
            m.exports = t;
        },
        23,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var t = { _: (t) => r(d[0]).getKnobxValue(t) };
            e.default = t;
        },
        24,
        [19]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function n(n, o, t) {
                t = t || {};
                var c = u(n) + "=" + u(o);
                null == o && (t.maxage = -1),
                    t.maxage && (t.expires = new Date(+new Date() + t.maxage)),
                    t.path && (c += "; path=" + t.path),
                    t.domain && (c += "; domain=" + t.domain),
                    t.expires && (c += "; expires=" + t.expires.toUTCString()),
                    t.secure && (c += "; secure"),
                    (document.cookie = c);
            }
            function o() {
                var n;
                try {
                    n = document.cookie;
                } catch (n) {
                    return "undefined" != typeof console && "function" == typeof console.error && console.error(n.stack || n), {};
                }
                return c(n);
            }
            function t(n) {
                return o()[n];
            }
            function c(n) {
                var o,
                    t = {},
                    c = n.split(/ *; */);
                if ("" == c[0]) return t;
                for (var u = 0; u < c.length; ++u) t[s((o = c[u].split("="))[0])] = s(o[1]);
                return t;
            }
            function u(n) {
                try {
                    return encodeURIComponent(n);
                } catch (o) {
                    f("error `encode(%o)` - %o", n, o);
                }
            }
            function s(n) {
                try {
                    return decodeURIComponent(n);
                } catch (o) {
                    f("error `decode(%o)` - %o", n, o);
                }
            }
            var f = r(d[0])("cookie");
            m.exports = function (c, u, s) {
                switch (arguments.length) {
                    case 3:
                    case 2:
                        return n(c, u, s);
                    case 1:
                        return t(c);
                    default:
                        return o();
                }
            };
        },
        25,
        [79]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function o() {
                var o;
                try {
                    o = e.storage.debug;
                } catch (o) {}
                return "env" in ("undefined" == typeof process ? {} : process) && (o = process.env.DEBUG), o;
            }
            ((e = m.exports = r(d[0])).log = function () {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }),
                (e.formatArgs = function () {
                    var o = arguments,
                        n = this.useColors;
                    if (((o[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + o[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff)), !n)) return o;
                    var t = "color: " + this.color,
                        c = 0,
                        s = 0;
                    return (
                        (o = [o[0], t, "color: inherit"].concat(Array.prototype.slice.call(o, 1)))[0].replace(/%[a-z%]/g, function (o) {
                            "%%" !== o && (c++, "%c" === o && (s = c));
                        }),
                        o.splice(s, 0, t),
                        o
                    );
                }),
                (e.save = function (o) {
                    try {
                        null == o ? e.storage.removeItem("debug") : (e.storage.debug = o);
                    } catch (o) {}
                }),
                (e.load = o),
                (e.useColors = function () {
                    return (
                        ("undefined" != typeof document && "WebkitAppearance" in document.documentElement.style) ||
                        (window.console && (console.firebug || (console.exception && console.table))) ||
                        (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31)
                    );
                }),
                (e.storage =
                    "undefined" != typeof chrome && void 0 !== chrome.storage
                        ? chrome.storage.local
                        : (function () {
                              try {
                                  return window.localStorage;
                              } catch (o) {}
                          })()),
                (e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"]),
                (e.formatters.j = function (o) {
                    return JSON.stringify(o);
                }),
                e.enable(o());
        },
        79,
        [80]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function n() {
                return e.colors[t++ % e.colors.length];
            }
            function o(o) {
                function t() {}
                function l() {
                    var o = l,
                        t = +new Date(),
                        c = t - (s || t);
                    (o.diff = c), (o.prev = s), (o.curr = t), (s = t), null == o.useColors && (o.useColors = e.useColors()), null == o.color && o.useColors && (o.color = n());
                    for (var u = new Array(arguments.length), f = 0; f < u.length; f++) u[f] = arguments[f];
                    (u[0] = e.coerce(u[0])), "string" != typeof u[0] && (u = ["%o"].concat(u));
                    var p = 0;
                    (u[0] = u[0].replace(/%([a-z%])/g, function (n, s) {
                        if ("%%" === n) return n;
                        p++;
                        var t = e.formatters[s];
                        if ("function" == typeof t) {
                            var l = u[p];
                            (n = t.call(o, l)), u.splice(p, 1), p--;
                        }
                        return n;
                    })),
                        (u = e.formatArgs.apply(o, u));
                    (l.log || e.log || console.log.bind(console)).apply(o, u);
                }
                (t.enabled = !1), (l.enabled = !0);
                var c = e.enabled(o) ? l : t;
                return (c.namespace = o), c;
            }
            ((e = m.exports = o.debug = o).coerce = function (n) {
                return n instanceof Error ? n.stack || n.message : n;
            }),
                (e.disable = function () {
                    e.enable("");
                }),
                (e.enable = function (n) {
                    e.save(n);
                    for (var o = (n || "").split(/[\s,]+/), s = o.length, t = 0; t < s; t++)
                        o[t] && ("-" === (n = o[t].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + n.substr(1) + "$")) : e.names.push(new RegExp("^" + n + "$")));
                }),
                (e.enabled = function (n) {
                    var o, s;
                    for (o = 0, s = e.skips.length; o < s; o++) if (e.skips[o].test(n)) return !1;
                    for (o = 0, s = e.names.length; o < s; o++) if (e.names[o].test(n)) return !0;
                    return !1;
                }),
                (e.humanize = r(d[0])),
                (e.names = []),
                (e.skips = []),
                (e.formatters = {});
            var s,
                t = 0;
        },
        80,
        [81]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function s(s) {
                if (!((s = String(s)).length > 1e4)) {
                    var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(s);
                    if (n) {
                        var c = parseFloat(n[1]);
                        switch ((n[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return c * f;
                            case "days":
                            case "day":
                            case "d":
                                return c * l;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return c * h;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return c * u;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return c * o;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return c;
                            default:
                                return;
                        }
                    }
                }
            }
            function n(s) {
                return s >= l ? Math.round(s / l) + "d" : s >= h ? Math.round(s / h) + "h" : s >= u ? Math.round(s / u) + "m" : s >= o ? Math.round(s / o) + "s" : s + "ms";
            }
            function c(s) {
                return t(s, l, "day") || t(s, h, "hour") || t(s, u, "minute") || t(s, o, "second") || s + " ms";
            }
            function t(s, n, c) {
                if (!(s < n)) return s < 1.5 * n ? Math.floor(s / n) + " " + c : Math.ceil(s / n) + " " + c + "s";
            }
            var o = 1e3,
                u = 6e4,
                h = 36e5,
                l = 864e5,
                f = 315576e5;
            m.exports = function (t, o) {
                o = o || {};
                var u = typeof t;
                if ("string" === u && t.length > 0) return s(t);
                if ("number" === u && !1 === isNaN(t)) return o.long ? c(t) : n(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
            };
        },
        81,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            const _ = Object.freeze({
                    ADD_TO_HOMESCREEN: "ig_a2hs_dismiss",
                    APP_INSTALL_BANNER: "ig_aib_du",
                    COOKIE_BANNER: "ig_cb",
                    CSRFTOKEN: "csrftoken",
                    DESKTOP_APP_UPSELL: "ig_dau_dismiss",
                    DESKTOP_REGISTRATION_UPSELL: "ig_dru_dismiss",
                    FOLLOW_ALL_FB: "ig_follow_all_fb",
                    HIDE_SWITCHER: "ig_sh",
                    GDPR_SIGNUP: "ig_gdpr_signup",
                    LANGUAGE_CODE: "ig_lang",
                    MACHINEID: "mid",
                    NOTIFICIATIONS: "ig_notifications_dismiss",
                    NOTIFICIATIONS_SESSIONS: "ig_notifications_sessions_dismiss",
                    OPEN_IN_APP: "ig_oia_dismiss",
                    PROMOTED_TRAFFIC: "ig_promoted_dismiss",
                    USER_ID: "ds_user_id",
                }),
                s = Object.values(_);
            var O = _;
            (e.default = O),
                (e.isKnownCookie = function (_) {
                    return s.includes(_);
                });
        },
        26,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function t(t, n) {
                return void 0 !== n ? i(d[0])(r(d[1]).strs[t], n) : r(d[1]).strs[t];
            }
            (t.getStringDev = function (t, n, s) {
                let u = null !== t && r(d[1]).strs[t] ? r(d[1]).strs[t] : s;
                return null !== n ? i(d[0])(u, n) : u;
            }),
                (m.exports = t);
        },
        27,
        [82, 83]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function n(n) {
                return n;
            }
            m.exports = function (t, u) {
                if (!u) return t;
                "object" == typeof u || r(d[0])(0);
                var c = "\\{([^}]+)\\}(" + r(d[1]).endsInPunct.punct_char_class + "*)",
                    o = new RegExp(c, "g"),
                    p = [],
                    l = [],
                    s = t
                        .replace(o, function (n, t, c) {
                            var o = u[t];
                            return o && "object" == typeof o ? (p.push(o), l.push(t), "" + c) : null === o ? "" : o + (r(d[1]).endsInPunct(o) ? "" : c);
                        })
                        .split("")
                        .map(r(d[1]).applyPhonologicalRules);
                if (1 === s.length) return s[0];
                for (var f = [s[0]], h = 0; h < p.length; h++) f.push(n(p[h]), s[h + 1]);
                return f;
            };
        },
        82,
        [77, 84]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            function n(t) {
                return "string" == typeof t && t.match(new RegExp(n.punct_char_class + "[)\"'»༻༽’”›〉》」』】〕〗〙〛〞〟﴿＇）］\\s]*$"));
            }
            var t;
            (n.punct_char_class = "[.!?。！？।…ຯ᠁ฯ．]"),
                (m.exports = {
                    endsInPunct: n,
                    applyPhonologicalRules: function (n) {
                        if (t) {
                            var c = [],
                                s = [];
                            for (var p in t.patterns) {
                                var l = t.patterns[p];
                                for (var o in t.meta) {
                                    var u = new RegExp(o.slice(1, -1), "g"),
                                        f = t.meta[o];
                                    (p = p.replace(u, f)), (l = l.replace(u, f));
                                }
                                c.push(p), s.push(l);
                            }
                            for (var v = 0; v < c.length; v++) {
                                var h = new RegExp(c[v].slice(1, -1), "g");
                                "javascript" == s[v]
                                    ? n.replace(h, function (n) {
                                          return n.slice(1).toLowerCase();
                                      })
                                    : (n = n.replace(h, s[v]));
                            }
                        }
                        return n.replace(/\x01/g, "");
                    },
                    setPhonologicalRules: function (n) {
                        t = n;
                    },
                });
        },
        84,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            (e.strs = [
                "Articles of incorporation",
                "Language",
                "am",
                "If you believe this content shouldn't have been removed, you may file an appeal by filling out {appeal form link}",
                "Your name or organization's name",
                "Removed on {date}.",
                "{username} liked your video.",
                "There was a problem processing your request. Please try again later.",
                "th",
                "Learn More",
                "Following",
                "WhatsApp Icon",
                "Share to Direct",
                "Categories",
                "Your Key",
                "Reminder that this video is blocked in the following locations:",
                "Update your password to keep your account safe. You'll be logged out of all sessions except this one, so anyone trying to get into your account will no longer have access.",
                "Instagram will send updates to this email address.",
                "Email and SMS",
                "Story Unavailable",
                "Send",
                "Open",
                "I believe this account violates Instagram's community guidelines",
                "Write a caption...",
                "Filled Physical Address Circle Checkmark",
                "Community",
                "Add a profile photo so your friends know it's you.",
                "hundred-million",
                "Intellectual Property Guidelines",
                "Edit",
                "Finishing upload.",
                "Entertainment",
                "Send Text Message",
                "Continue",
                "Follow Requsts",
                "We Couldn't Create an Account for You",
                "PayPal",
                "Show More Posts",
                "I want a private account",
                "Posts intended to sell or distribute drugs",
                "Send Separately",
                "Connect to Facebook",
                "Country name or code",
                "Fade",
                "Privacy Policy",
                "Private Account",
                "chevron",
                "See All Followers",
                "Log Into Another Account",
                "Former full names",
                "You have previously logged into {application name} with Facebook.",
                "Using Data",
                "We've removed the video you posted at {time of day} on {date} because it included the following content:",
                "LIVE",
                "Enter your Instagram password to reset your PIN.",
                "Checkmark outline icon",
                "Toggle audio",
                'Enter the key in your authentication app to link it to Instagram. If your app requires an account name, title it "Instagram" so it\'s easy to find.',
                "We were unable to send you a login link. Visit the Instagram Help Center for more information on how to access your account.",
                "They will now be able to request to follow you on Instagram. Instagram won't let them know you unblocked them.",
                "COVID-19 survey icon",
                "+ Add Link",
                "Forwarded a message",
                "Camera",
                "Manage your new business account on desktop with Business Suite or Creator Studio.",
                "Add front of ID photo",
                "Done",
                "Flexible Profile Controls",
                "Cancel",
                "If you have permission to share everything in the video including the audio, like the soundtrack or music, you can appeal the removal and have your video re-posted. Remember that people should only post videos they have the right to share. Posting content you don't own may result in action being taken against your account.",
                "Because you synced your profile photo, your photo and interactions will also be removed from Facebook.",
                "Require Security Code",
                "Reply",
                "Emails from Instagram",
                "Manage Data Settings",
                "No Results",
                "Enter Your Date of Birth",
                "Unable to load suggestions.",
                "Add a profile photo",
                "Two-factor authentication protects your account by requiring an additional code when you log in on a device we don't recognize.",
                "Learn More",
                "Protecting your privacy is our top priority, and we're constantly working to prevent issues like this. We're very sorry this happened. Thank you for participating in the Android beta program and for your help improving the Instagram app for everyone. If you have any questions, please contact us at {email} .",
                "Learn more",
                "Supporting this research is part of our efforts to support social good initiatives as described in our {Data Policy}.",
                "Enter Confirmation Code",
                "Sign up",
                "Instagram Lite",
                "Instagram, Facebook",
                "Switch Display Language",
                "Your phone number",
                "You Cannot Update Your Age",
                "Hi {username}, {application name} is requesting to do the following:",
                "Unfollow",
                "Log in with Google",
                "Create a Facebook Page",
                "With an invalid phone number, we failed to send an SMS to you.",
                "Expired on",
                "{broadcaster's username} has waved to you 👋",
                "Enable Two-Factor Authentication",
                "{weeks} weeks ago",
                "Firefox",
                "Share your first photo",
                "Circle check icon on pin create success page",
                "Activities",
                "{Bold text if your appeal for photo is rejected} the Rights Holder may request a takedown of the photo, which will permanently remove it from Instagram.",
                "For your security, confirm the code for {cardName} you used on Facebook. All of your saved payment methods will be available for this and future Facebook Pay payments.",
                "Copyright or trademark infringement",
                "Suggested Profiles",
                "This voluntary survey conducted by Carnegie Mellon University Delphi Research Center asks health questions to track the spread of coronavirus. It’ll take 3-5 minutes, and you’ll leave Instagram to take it.",
                "Enter Your Facebook Pay PIN",
                "Lock iconr",
                "Follow to see their photos and videos.",
                "This will remove the video from this gallery",
                "Show on My Profile",
                "Manage Contacts",
                "Current Phone Number:",
                "Removing the application should provide you with the break you're looking for. All of your photos and profile data will still be saved, but you will no longer receive push notifications, and then you can come back to your account when you like by reinstalling Instagram.",
                "See Location",
                "By signing up, you agree to our {=Terms} & {=Privacy Policy} .",
                "change your email address or resend confirmation",
                "Harassment or bullying",
                "You can continue using Instagram or Facebook to log into other apps and websites",
                "Done",
                "Only you and {username} can see this comment. If you approve it, it'll be visible to everyone.",
                "Removing Followers",
                "Get the Instagram App",
                "We can help you reset your password using your Instagram username, phone number, or the email address linked to your account.",
                "Hate speech or symbols guidelines",
                "Thank you for dogfooding Instagram and for your help improving the app for everyone. If you have any questions, please contact us at {email} .",
                "You can unblock them anytime from their profile.",
                "Instagram app",
                "Remove Gift Aid",
                "Follow",
                "Show IP Violation Reports",
                "Auto-generated captions added to your video help people with hearing impairments. They are only available on the iOS and Android apps and may take a few minutes to appear.",
                "{name of the user who tagged the other user in the photo} tagged you in a photo.",
                "These are apps and websites you removed from your account. This means they may still have access to info you previously shared, but can't make additional requests for private info.",
                "Instagram",
                "Account privacy changes",
                "Confirm",
                "User",
                "This conversation is spam or a scam",
                "Mobile phone icon",
                "Delete this video",
                "Sale or promotion of drugs",
                "No recent searches.",
                "Resend Code.",
                "Push Notifications",
                "More Options",
                "View your payment methods",
                "Open Instagram",
                "Social media",
                "Email and SMS Notifications",
                "Message Requests",
                "The email you've entered doesn't match any account.",
                "Your photo matches a photo owned by {reference owner name}.",
                "Sent a post",
                "Cookie Settings",
                "Live Video Ended",
                "Send",
                "People will be able to call or text you at this number. Standard messaging rates apply.",
                "Not now",
                "Follow Hashtags",
                "Select All",
                "Back",
                "For your security, please log in to your PayPal account. By doing so, you'll authorize Facebook Pay to use your saved payment info for this and future payments on Instagram.",
                "Cancel",
                "Top Accounts",
                "Paid partnership with {username of sponsor 1}, {username of sponsor 2}",
                "Continue as {username}",
                "Delete Story?",
                "Linking to social networks",
                "Expand",
                "More options",
                "IGTV",
                "Delete All",
                "Get More Help",
                "You can only see the total number of likes on your posts.",
                "Apps and Websites",
                "Instagram Is Better on the App",
                "Done",
                "We created these policies to support and protect our community on Instagram.",
                "Log in",
                "You should now be able to use this email address to sign up for an Instagram account or add it to an existing account.",
                "Video upload failed.",
                "Vignette",
                "If you pay Income Tax above the basic rate and wish to receive additional tax relief, you must include all your Gift Aid donations on your Self Assessment tax return or ask HRMC to adjust your tax code.",
                "Get the app to share your first photo or video.",
                "Log Out",
                "Not {username}?",
                "• Receive information about your activity from apps and websites to help personalize content, serve relevant ads and provide a safer experience",
                "Before you can make this donation, we need to confirm some information. This helps us protect you from unauthorized payments.",
                "Directories",
                "Ads you've interacted with",
                "If you leave now, you will lose any changes you've made.",
                "Animated checkmark",
                "Back to Log In",
                "Locations",
                "Get Started",
                "Profiles",
                "Birthday cupcake",
                "Sunday",
                "Activity",
                "Something went wrong. Try again in a few minutes.",
                "{location_name} on Instagram • Photos and Videos",
                "You choose which friends to follow. We'll never post to Facebook without your permission.",
                "You need to finish reviewing these data settings to continue using Instagram. Are you sure you want to leave?",
                "Select",
                "Blog",
                "I have all rights necessary to upload this content on Instagram.",
                "Recent posts from all hashtags are temporarily hidden to help prevent the spread of possible false information and harmful content related to the election. {link that reads learn more}",
                "{username} forwarded a message",
                "Enter valid card number",
                "Restore this video",
                "Forgot Password?",
                "Can’t Send Message",
                "Which Best Describes You?",
                "Login Activity",
                "We’re providing you with control over certain cookies we use on and off Facebook Products to:",
                "Accessibility",
                "Saturation",
                "th",
                "How do I know if I have permission to use this video?",
                "Request submitted",
                "Download Requested",
                "Add Credit or Debit Card",
                "Resend Code",
                "Problem With Approval",
                "Cancel",
                "Hashtags",
                "Post {actionType} {prepositionType} {violationText}",
                "What This Means For Your Photo",
                "Read the {full_terms} and {data_policy}",
                "Options",
                "© {year} Instagram",
                "Discard Video",
                "Apr",
                "Video",
                "All of the material in the photo is your original content and you own the rights to it.",
                "Use the Instagram app to see this message",
                "Personal Information",
                "Pause",
                "Direct icon",
                "Submit",
                "Contacts Syncing",
                "th",
                "Sent a story",
                "If you're unable to receive a security code, use one of your {=backup codes}",
                "If you think someone is in immediate danger, call local law enforcement.",
                "th",
                "Post",
                "Confirm Your Email to Get into Instagram",
                "Continue",
                "• The cookies and similar technologies we use help apps and websites share information about you with Instagram. We use this information to personalize your experience, including the ads you see, and help businesses analyse and measure ad performance.",
                "Apps and Websites",
                "Nudity or pornography",
                "Profile photo removed.",
                "Including alcohol, tobacco, weight loss products or cosmetic procedures",
                "Where Your Video Will Appear",
                "The Facebook Audience Network is a way for advertisers to show you ads in apps and websites off the {Facebook Company Products}. One of the ways Audience Network shows relevant ads is by using your ad preferences to determine which ads you may be interested in seeing. You can control this in your {ad settings}.",
                "For supporting or appreciating a brand, celebrity or organization",
                "Active yesterday",
                "Disappearing Message",
                "Send to your phone",
                "Some of your previous posts didn't follow our {Community Guidelines}. Following our guidelines is the only way to prevent your account from being deleted, including your posts, archive, messages and followers.",
                "Press Command-C to copy.",
                "Search history",
                "There was a problem changing your password. Please try again soon.",
                "See More Posts From {username}",
                "Download Your Data",
                "Write a caption…",
                "Sent a story highlight",
                "Terms",
                "Get Started",
                "Cancel",
                "Suggested",
                "Advanced Settings",
                "Retry",
                "Comment",
                "Open in Instagram",
                "Videos must be one minute or less.",
                "IGTV",
                "It may take up to 48 hours to collect this data and send it to you, and you can only request a file every four days. Please wait before requesting another download.",
                "Close",
                "Place Icon",
                "Post Unavailable",
                "You sent a story highlight",
                "We'll send a code to the number you choose.",
                "Change Your Password to Secure Your Account",
                "Reset PIN",
                "Request New Code",
                "Print smaller for up-close scans, and larger for scans from a distance.",
                "Business icon",
                "1 day ago",
                "{replierUsername} replied to {recipientUsername}",
                "Close icon",
                "Private account",
                "I don't like this comment",
                "Back",
                "{count} more",
                "Expand to add Alt Text",
                "Use Security Code",
                "Add phone number",
                "Learn More",
                "Followed by {username1} and {username2}",
                "File Too Small",
                "Confirmation Code",
                "Are you sure you want to delete this photo from your story?",
                "report warning icon",
                "Your video must be between {minDurationInSeconds} and {maxDurationInMinutes} minutes long, landscape or portrait, an MP4 file and less than {maxVideoSizeInGigabytes} GB.",
                "{follower count} followers {media count} posts",
                "You already have the maximum number of accounts active",
                "Former bio texts",
                "Are you {age}?",
                "Video must be an MP4 file.",
                "text message",
                "Your photo is blocked in all locations, which means people won't be able to view, like, or comment on it.",
                "Add WhatsApp to Your Profile",
                "Undo?",
                "Use Creator Studio to publish to IGTV, schedule and draft IGTV videos in advance, view IGTV insights, and more.",
                "Secure Donations",
                "Not Now",
                "IGTV",
                "Someone You've Blocked is in This Group",
                "Confirm Phone Number to Get Back Into Instagram",
                "Accept",
                "Next",
                "Accept cookies that come from companies other than Instagram, which are used to optimize services including personalizing content (including ads), measuring ads, producing analytics and providing a safer experience?",
                "Download App",
                "How do I know if I have permission to use this photo?",
                "Group Name",
                "Delete Video",
                "Wed",
                "By submitting a dispute, you give the rights holder, {reference owner name} , permission to review your photo and basic public information about your account. They will have 7 days to respond.",
                "Use Instagram with",
                "Concerned about my data",
                "Remove comments",
                "Decline",
                "Create Account",
                "Go to Profile",
                "After you've set up your authentication app, copy the 6-digit code it creates, come back to Instagram, and enter it on the next screen to finish setting up.",
                "Year:",
                "New Feed Items Available",
                "x icon next to an item in the shopping bag that can be clicked to remove that item from the bag",
                "An admin will need to approve your request to add a new member.{username} will see all previous messages from this conversation.",
                "Remove",
                "Switch to the app for better ways to send photos, videos, GIFs and more.",
                "View your saved posts",
                "Something Went Wrong",
                "Remove",
                "Your video was added.",
                "Drag photos and videos here.",
                "Want to use In-Stream video ads?",
                "You can choose to see fewer ads about certain topics using Ad Topics in your Settings.",
                "This will remove the photo from this gallery",
                "You're now following {username}",
                "Enter a new Facebook Pay PIN.",
                "Save login info on this browser",
                "View bag",
                "Global business/brand/organization",
                "If you recognize this device and location, we'll keep your account logged in.",
                "New Post",
                "Learn More",
                "Send Confirmation",
                "Post icon",
                "Chats",
                "Sharing Information with Apps and Websites",
                "Cover",
                "Update",
                "We sent the confirmation code to your email {email}.",
                "Confirm New Password",
                "Follow people on Instagram to see what they share",
                "Clear All",
                "up facing chevron, indicating that the section is open and can be collapsed",
                "Restore video icon",
                "Show contact info on profile",
                "We use cookies to help provide, personalize and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance, and to provide a safer experience for you. You can learn more about how we use cookies in our {Cookie Policy}.",
                "Enter 3-digit code",
                "Call",
                "I don't like this message",
                "People",
                "We care about your privacy on Instagram, so we wanted to let you know about a technical issue we recently found and fixed. It impacted certain Instagram accounts, including yours, that were using unreleased versions of Instagram as part of the Instagram Android beta program.",
                "Confirm",
                "Apply for Instagram Verification",
                "{number of posts} POSTS",
                "Story loading placeholder",
                "What You Can Do",
                "Tips for getting started",
                "Help Center",
                "{username} sent a story highlight",
                "Former genders",
                "Log In With Facebook",
                "Help Us Confirm It's You",
                "Sign up to see photos and videos from your friends.",
                "Watch Story",
                "Ineligible Video",
                "Driver's license",
                "Unlike",
                "Subtotal ({number of items} items)",
                "Personal information shared to blackmail or harass",
                "Emoji Sliders",
                "These cookies help other companies to share information with us about your activity on their apps and websites. We use the information we receive to help personalize and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance, and to provide services off of Instagram, like using Instagram to log into other apps and websites.",
                "Dig Into More Topics That Inspire You",
                "When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won't be affected",
                "Choosing Who Can See Your Story",
                "Your Account May Be Deleted",
                "Learn More",
                "Create PIN",
                "Recent Stories",
                "Description",
                "Done",
                "We re-sent the confirmation code to your number ending in {phone_number}",
                "Log In",
                "{number of contacts shown} Synced Contacts",
                "Terms and Data Policy Updates",
                "Next",
                "Your Instagram Information",
                "Your request to verify this account is currently under review. You can expect a response within 30 days.",
                "Remove",
                "Our Cookies on Other Apps and Websites",
                "Enter zip code",
                "See More Item Chevron",
                "View 1 comment",
                "Donate",
                "Go to Notification Settings",
                "Audio is playing",
                "Use the App",
                "Their chat will be moved to your Message Requests, so they won't see when you've read it.",
                "Cover",
                "Don't close this page until your video is finished uploading.",
                "Drafts",
                "Restricted Account",
                "Impersonation",
                "This account may not have been removed from your Accounts Center. You can check to see if it was removed and try again if it wasn't.",
                "Switch to Personal Account",
                "Show",
                "We care about your privacy. We want to make sure you understand how Facebook Payments International collects personal information, why data is collected and how it's used and stored.",
                "There was a problem logging you into Instagram. Please try again soon.",
                "Your post has been uploaded",
                "Message",
                "We may still receive aggregate information about activity on other apps and websites for measurement purposes, but this will not include your individual cookie information",
                "You can change this later by going to the ··· menu at the top of your post.",
                "Accept cookies from Instagram on this browser?",
                "Messaging is better in the app",
                "Report",
                "Impressum/Terms/NetzDG/UrhDaG",
                "We'll notify you a day before and 15 minutes before the event.",
                "Required Information",
                "Phone Number",
                "Internet Explorer",
                "Can't find people to follow",
                "Your password has been reset.",
                "Video must be longer than {duration} seconds.",
                "Sorry, this link doesn't work anymore. To reactivate your account, log in with your username and password.",
                "Jan",
                "Sent",
                "Select a category for your account",
                "Link no longer valid",
                "Saved Image",
                "{minutes}m",
                "Add Instagram to your Home screen?",
                "Why do I need to provide my birthday?",
                "Welcome to Instagram, {username}",
                "Call",
                "Dismiss",
                "Buy on Instagram",
                "Can't Log in With Facebook",
                "Opt Out",
                "Use your Phone Number",
                "{Bold text if your appeal for video is rejected} the Rights Holder may request a takedown of the video, which will permanently remove it from Instagram.",
                "Select your {age} to continue. See {other options}",
                "{number of products} PRODUCTS",
                "Submitting a request for verification does not guarantee that your account will be verified.",
                "We cannot send you a code at this time. Please try again later.",
                "If you change your mind, you'll have to request to follow @{username} again.",
                "Support",
                "Data Policy",
                "• Once you agree, what you share may be immediately sent overseas by online transmission.",
                "ID Photo",
                "{username}'s profile picture",
                "Unfilled Physical Address Circle Checkmark",
                "Enter the 6-digit code we sent to your number ending in {phoneNumber} to finish setting up two-factor authentication.",
                "Payment Method",
                "Subscribe to:",
                "Unblock this user",
                "Facebook Pay",
                "European Digital Advertising Alliance",
                "There was a problem deactivating your account. Please try again later.",
                "Manage Contacts",
                "Sorry! We're having trouble sending you a verification code right now. Please try again later.",
                "July",
                "Violence or threat of violence",
                "People won't be notified when you block them. Any new comments they make on your posts won't be visible to anyone but them.",
                "Image from {collectionName} saved collection",
                "Donations can't be more than {value}",
                "Embed Code Copied!",
                "Most recent",
                "Rotate your device to continue editing your story.",
                "Thu",
                "About",
                "Log in to save",
                "Don't have an account? {link that reads Sign up}",
                "You're all set!",
                "Remove",
                "You can disable your account instead of deleting it. This means your account will be hidden until you reactivate it by logging back in.",
                "See More",
                "Seen by {firstUsername}, {secondUsername}",
                "{loginLink} to like or comment.",
                "Opera",
                "Switch to the app for a better way to use stickers, share stories, and more.",
                "or",
                "Location-Based Features (Required)",
                "Link {value}",
                "Protecting your privacy is very important to us, and we're constantly working to ensure that issues like this don't occur. We're sorry this happened. If you have any questions, please contact us at {email} .",
                "Facebook wordmark and family of apps logo",
                "Login",
                "Where You're Logged in",
                "Former links in bio",
                "Sell Products From Spring in the Instagram App",
                "Required Information",
                "Delete",
                "To learn more about the choices that advertisers provide generally for individuals to influence how information about their online activities over time and across third-party Web sites or online services is collected and used, visit the Network Advertising Initiative at {http://www.networkadvertising.org/managing/opt_out.asp}, the Digital Advertising Alliance at {http://www.aboutads.info/}, or the European Digital Advertising Alliance at {http://youronlinechoices.eu/}",
                "Tue",
                "Google Chrome",
                "",
                "Photos or videos of extreme graphic violence",
                "We've detected repeated automated behavior from your account. Confirm your information using the Instagram app to try to log in.",
                "Spam or Scam",
                "Full Name",
                "Use Less Data",
                "Can't load stickers",
                "Continue",
                "{learn more link} about these cookies and similar technologies, how they're used and where you can manage them.",
                "Download Nametag",
                "Reminder emails",
                "How does the DMCA counter-notification process work?",
                "This photo is blocked because it may contain content owned by {reference owner name}",
                "Phone Number",
                "Get Backup Codes",
                "Someone I know",
                "Comments have been turned off.",
                "Go to who.int",
                "Your account has already been reactivated. To start using Instagram again, log in with your username and password.",
                "By signing up, you agree to our {=Terms} . Learn how we collect, use and share your data in our {Data Policy} and how we use cookies and similar technology in our {Cookies Policy} .",
                "Add People",
                "Apps and Websites",
                "Subtotal (1 item)",
                "Restore Video",
                "Block {Username of current profile}?",
                "Must be a JPG or PNG file. The minimum recommended size is 492 x 762 pixels.",
                "Settings icon on Facebook Pay learn more page",
                "Delete Contacts?",
                "Ad Guidelines",
                "Sign Up with Phone Number",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. We have these guidelines because we want to encourage safety and compliance with local legal restrictions that may apply.",
                "When you request a review, we'll review your comment to determine if it violates our {communityGuidelinesLink}. All review decisions are final.",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. Even if you didn't mean to offend, our guidelines encourage people to express themselves in a way that's respectful to everyone.",
                "Loading...",
                "Direct",
                "We work hard to protect the password you use for your Instagram account. We recently discovered that, when you used the Download Your Data tool, your password may have been displayed in the URL in your web browser once your data was downloaded, as well as stored in our systems. We have now changed the tool so this no longer happens, and we are deleting passwords that may have been logged by our internal systems. Nothing we see suggests anyone else used your password. Just to be safe, you may want to update your Instagram password below, as well as anywhere else you use the same password. You may also want to clear your browser history.",
                "Are you sure you want remove yourself from this post?",
                "Save",
                "Why you were reported",
                "Load more comments",
                "Remove Video",
                "Follow Requests",
                "Learn more",
                "Original (Unsupported size)",
                "Next",
                "Learn More",
                "Thank you for your report. We will remove this message if it violates our Community Guidelines.",
                "{number of new posts} new post",
                "Information Format",
                "We don’t sell your information to anyone. Learn more about cookies and how we use them in our {Cookie Policy}.",
                "Share",
                "New Posts",
                "Eligible for commission",
                "Data Policy",
                "Link icon on Facebook Pay learn more page",
                "Log in with Instagram",
                "I agree",
                "This video is blocked because it may contain content owned by {reference owner name}",
                "Confirm Phone Number",
                "Activity On Your Posts",
                "Guides",
                "Facebook",
                "If you believe this content shouldn't have been restricted, you can contact the complaining party directly to resolve your issue.",
                "Your Account Was Compromised",
                "Former phone numbers",
                "Send Login Link",
                "Remove Email",
                "Change Password",
                "Discard",
                "Please confirm that you are younger than 13 years old.",
                "Edit",
                "email",
                "Business Categories",
                "Show or hide additional media previews",
                "Gift Aid allows charities to receive more money.",
                "Keep as is",
                "This message puts people at risk",
                "{number of new posts} new posts",
                "How do I know whether I should file a counter-notification?",
                "One of the ways we use cookies is to show you useful and relevant ads on and off Instagram. You can read more about the ways we use cookies in our {Cookie Policy}. You also have a number of choices outside your Instagram controls that are described below.",
                "Username",
                "Try It",
                "Remove",
                "Authorize",
                "Block",
                "Watching Stories Uses Data",
                "Following",
                "Two-factor authentication lets you protect your account every time you log in on a phone or a computer we don't recognize.",
                "Replying to {username}",
                "On the app, you can interact with photos and videos shared in today's stories.",
                "Find a Size That Fits",
                "Story by {username}, seen",
                "Add a username. You can change this at anytime.",
                "Allow",
                "other likes",
                "Offers to buy or sell marijuana and hard drugs.",
                "This is an invalid or expired link.",
                "this form.",
                "{username} replied to you",
                "Connect a Facebook Page",
                "Leave",
                "Your payments are securely processed with Facebook Pay. Your payment info will be saved for next time. {Learn More}",
                "Saved",
                "When you switch back to a personal account, in-app insights will be turned off and insights from all your content, including content and insights for promotions, will be permanently removed.",
                "Options",
                "Unable to upload. This file type is not supported.",
                "Message Requests",
                "Where Your Video Is Visible",
                "Keep Watching",
                "Go Back",
                "Your Messages",
                "Instagram icon",
                "No Photos",
                "Enter valid ZIP code",
                "Sign up with email or phone number",
                "Log in to search",
                "It looks like you shared your password with a service to help you get more likes or followers, which goes against our {community guidelines link}.",
                "Log in to see all comments",
                "Remove Authentication App?",
                "You'll need the latest version of Instagram to submit a report.",
                "Video",
                "Phone",
                "Print a Nametag That's Easy to Scan",
                "We have a zero tolerance policy around threats to post intimate images of others.",
                "Instagram wont tell {Username of current profile} they were removed from your followers",
                "Leave without resetting PIN?",
                "Available on Google Play",
                "Your electronic signature",
                "This logout couldn't be completed. Please check your network settings and try again.",
                "Instagram",
                "Exploring Is Better in the App",
                "We'll let you know once we've reviewed your request for a verified badge.",
                "Logouts",
                "Add extra security to your account",
                "We remove posts encouraging or promoting self injury, which includes suicide, cutting and eating disorders. We may also remove posts identifying victims of self injury if the post attacks or makes fun of them.",
                "Error icon",
                "payment terms",
                "Active now",
                "Reminder that this video is blocked in all locations.",
                "Send Message",
                "If you don't enter your PIN, you won't be able to use your Facebook payment info to complete checkout.",
                "Locations",
                "Stick to Flat Surfaces",
                "Nudity or pornography",
                "Chevron icon to see all Follow Requests",
                "Business Can't Be Found",
                "You can opt out of seeing online interest-based ads from Facebook and other participating companies through the {Digital Advertising Alliance} in the US, the {Digital Advertising Alliance of Canada} in Canada or the {European Interactive Digital Advertising Alliance} in Europe, or through your mobile device settings if you are using Android, iOS 13 or an earlier version of iOS. Please note that ad blockers and tools that restrict our cookie use may interfere with these controls.",
                "To help them measure participation properly, we’ll share a random ID number and statistical number that doesn’t identify you and they’ll tell us about completions.",
                "Adding your number will help you log in more easily, recover your account, and find people to follow.",
                "Trim",
                "1 item",
                "{name of the user} started following you.",
                "Verification Request Submitted",
                "Photos and Videos of {location}",
                "Optional",
                "Copy",
                "Data Download",
                "We will send a confirmation code via SMS to your phone.",
                "Open in Instagram",
                "Posts showing sexual intercourse, genitals or close-ups of fully-nude buttocks",
                "Cancel",
                "You can try again later or use another account.",
                "User not found.",
                "We care about your privacy, so we wanted to let you know about a technical issue we recently found and fixed. It impacted certain Instagram accounts, including yours, that were using unreleased versions of Instagram as part of our dogfooding process.",
                "Managing Photos of You",
                "Security Code",
                "We require a government-issued photo ID that shows your name and date of birth (e.g. driver's license, passport or national identification card) or official business documents (tax filing, recent utility bill, article of incorporation) in order to review your request.",
                "Thanks for your donation",
                "Log In",
                "Update your profile before {time their account will be disabled} , or your account will be disabled for violating our Community Guidelines. {learn more link} about our impersonation policy.",
                "We won’t use cookies from other companies to help personalize ads for you off of Facebook Products, or to measure their performance",
                "Show More Removed Content",
                "I want to change my username or account information",
                "Search & Explore",
                "Keep",
                "Resharing to Stories",
                "Get free Wi-Fi and follow {name}",
                "Couldn't send code.",
                "{date} at {time}",
                "Some of your previous posts didn't follow our {Community Guidelines}. If you post something that goes against our guidelines again, your account will be deleted, including your posts, archive, messages and followers.",
                "Are you sure?",
                "Followed by {username} and 1 other",
                "Edit Two-Factor Authentication Setting",
                "Add Location...",
                "Once you follow people, you'll see them here.",
                "Briefly explain what happened.",
                "Prefer Not To Say",
                "{translated category name} accounts on instagram",
                "If you go back now, you will lose your video",
                "{username} will now see ads relevant to more of their interests based on their activity across Facebook Products.",
                "Create username",
                "Learn More",
                "Add articles, social media accounts and other links that show your account is in the public interest. Paid or promotional content won't be considered.",
                "Ad settings",
                "Log in to view this post",
                "Confirm Email",
                "Browsing Instagram won't use data. You'll use data only when you choose to view videos or stories.",
                "filled in lock icon",
                "Connect",
                "Add Your Birthday",
                "These are apps and websites you removed from your account. This means they may still have information you previously shared, but can't make additional requests. You can ask an app to delete your information. To do it, review their Privacy Policy for details and contact information. If you contact an app, they may need your User ID.",
                "You can block them directly from their profile. If you do, they won't be able to find your profile, posts or story or send you messages on Instagram. Instagram won't let them know you blocked them.",
                "Down Chevron Icon",
                "What was removed",
                "Add to Home screen",
                "Use the app",
                "{username} isn't currently following any hashtags.",
                "Error",
                "Sorry! We're having trouble verifying your verification code right now. Please try again later.",
                "We usually let you request a review when you think your post shouldn't have been removed.",
                "Confirm it's You to Login",
                "Use your own birthday, even if this account is for a business, a pet, or something else",
                "Your Facebook email address, {email}, is associated with accounts on Facebook and Instagram, but the accounts have not been connected.",
                "Profile picture for app",
                "Peer-to-peer sales of firearms, explosives and ammunition.",
                "Switch Back",
                "Data Policy",
                "{firstUsername} and {secondUsername}",
                "Load more comments",
                "There was an issue letting the system know this login wasn't you. Please check your network settings and try again.",
                "To show you more relevant ads, we receive and use data that advertisers and other partners provide to us about your activity on their websites and apps, as well as certain offline interactions, such as purchases. You can control whether you see ads based on your activity off of Instagram through Data About Your Activity From Partners in your Settings.",
                "Former business email addresses",
                "With an invalid email, we failed to send an email to you.",
                "Network bandwidth",
                "Controls in Your Facebook Account",
                "When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won't be affected.",
                "Log in to connect with your world on Instagram",
                "Objects",
                "Email",
                "Go To Creator Studio",
                "Thank you for watching",
                "Download it for free.",
                "Matching Content Notice",
                "Because you synced your profile photo, your photo will change on both Instagram and Facebook.",
                "Two-Factor Authentication is On",
                "Choose a reason for hiding this ad:",
                "payment methods, delivery address, name, email",
                "I want to delete a photo I uploaded",
                "Profile saved.",
                "Remember Login Info?",
                "Show category on profile",
                "Show that the public figure, celebrity or brand your account represents is in the public interest.",
                "Protected Payments",
                "learn more about them in our Press Center.",
                "Switching to a creator account will make your Instagram account public. Anyone will be able to see your content and all pending follow requests will be approved.",
                "If you opt out, we'll only send you emails to help you log in when you request them.",
                "User icon",
                "Blocked Commenters",
                "Cancel Gift Aid",
                "For advertising and measurement services off of Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies on Instagram and Facebook. These companies also use cookies.",
                "Stories",
                "You'll enter your PIN as a security check on some payments. To use your PIN for all payments, visit Facebook Pay Settings.",
                "Learn more",
                "Authentication App",
                "Privacy and Security",
                "{username1}, {username2} and 1 other",
                "Add WhatsApp",
                "Discover People",
                "News/media",
                "Report Under NetzDG",
                "Other people can add your posts to their stories. Your username will always show up with your post.",
                "Public Profile Info (Required)",
                "WhatsApp",
                "Former usernames",
                "Please enter a valid date of birth.",
                "All of the material in the video is your original content and you own the rights to it.",
                "Switch Accounts",
                "You have successfully confirmed your email.",
                "Video Chat",
                "Write a message...",
                "If you're unable to use one of your backup codes, you can get one from your {=auth app codes}",
                "Wednesday",
                "Review changes to our Terms and Data Policy",
                "Approve",
                "Save",
                "Business email",
                "Learn more",
                "More about this sharing:",
                "Sign Up",
                "Posted {Date} at {Time}",
                "Reporting Intimate Images",
                "Deleting removes the chat from your inbox, but no one else's inbox.",
                "Reminder that this photo can still be seen in the following locations:",
                "Your full name",
                "Manage Email Preferences",
                "st",
                "Accounts you unfollowed",
                "If you're unable to use a login code from an authentication app, you can get one by {=sms code} or use one of your {=backup codes}",
                "Description",
                "{seconds}s",
                "Report as sale or promotion of drugs?",
                "Not Now",
                "More accounts like {Userlink}",
                "Uses less space. Free on Google Play.",
                "Unblock",
                "There was a problem revoking access. Please try again later.",
                "These are apps and websites you've used Instagram to log into and have recently used. They can request info you chose to share with them.",
                "Opt Out of Login Help Emails",
                "Audio Image",
                "down facing chevron, indicating that the section is closed and can be opened",
                "You have not authorized any applications to access your Instagram account.",
                "IP addresses for non-active sessions",
                "We sent an SMS to {phoneNumber} with a link to get back into your account.",
                "Leave",
                "{instagramUsername} and {facebookPageName}",
                "See Resources",
                "You're about to temporarily disable your account. Go ahead?",
                "Ad preferences",
                "Profile Information (Required)",
                "Feed",
                "If your appeal is approved",
                "content_removed_img",
                "We removed your {contentTypeText} because it goes against our {brandedContentPoliciesLink}. Certain goods, services, or brands cannot be promoted with branded content, including tobacco products, weapons, ammunition or explosives. In addition, some categories, including social issues, elections, or politics, are only allowed in branded content posts if the paying partner has been authorized to run related ads.",
                "Comment Options",
                "Sign up",
                "Add your phone number so you can reset your password, find friends and more.",
                "If you remove your authentication app, you'll only get security codes by text message.",
                "Done.",
                "Email Removed",
                "Ads",
                "Your account doesn't have any information to show here.",
                "See photos and videos from your friends.",
                "We can send you a text message to help you get back into your account.",
                "Facebook Pay",
                "Your Account Is at Risk of Being Deleted",
                "Save Info",
                "Send Report",
                "Use the App",
                "seconds",
                "This email is taken by another account.",
                "Next",
                "City/Town",
                "Share Live Broadcast",
                "Where Your Video Will Be Visible",
                "They won't be able to find your profile, posts or story on Instagram. Instagram won't let them know you blocked them",
                "Checkmark filled icon",
                "Open Stories",
                "Visit your profile and tap {link_back_to_instagram_home_page} to find your shopping bag.",
                "Continue",
                "Media Creator icon",
                "Get free Wi-Fi access and follow this business to see their latest posts. Or, you can follow the business later.",
                "They can't see when you're online or when you've read their messages. You can unrestrict them from their profile.",
                "Get it from Microsoft",
                "Intellectual property violation",
                "{username} sent a story",
                "Go to post",
                "Restricted Account",
                "We’ll use limited information from other apps and websites for security and integrity purposes, but it will not be used to show you personalized ads",
                "Next",
                "Done",
                "Report a child under the age of 13 on Instagram?",
                "Reset PIN",
                "View Shop",
                "If you'd like to learn more about what else you can do about harassment or bullying, we'd like to help",
                "Next",
                "Connect to Facebook",
                "Reach Your Customers",
                "When you log in, you can read comments from all users on this post.",
                "Choose how you want photos of you added to your profile.",
                "Cameras should be able to capture your entire nametag.",
                "Safari",
                "Seen today",
                "1 year old",
                "Thank you for helping keep the Instagram community safe and fun for everyone. Remember, we don't reveal who submitted reports to the person who posted the photo, video or comment.",
                "• The connection allows the app or website to authenticate your account and receive information that you may choose to share, like your email address.",
                "View Account Data",
                "Let us know",
                "Preview of photo to be uploaded",
                "When you log in, you'll see more great stuff that's based on your interests.",
                "Post",
                "Request Download",
                "If you report someone's message, Instagram doesn't tell them who reported it.",
                "Address",
                "Terms",
                "We've noticed unusual activity from your account and have temporarily restricted certain actions.",
                "Decline",
                "OK",
                "Embed",
                "Block Comments From",
                "If you report someone's post, Instagram doesn't tell them who reported it.",
                "off-Facebook activity",
                "Created a second account",
                "Physical Address",
                "{Button to log in} or {Button to sign up}",
                "Tuesday",
                "Chrome",
                "Text",
                "Agree to Terms of Use",
                "{dateString} at {timeString}",
                "Remove Current Photo",
                "Sent {username}'s story highlight",
                "th",
                "You can review or change the information you share with apps and websites in your {=app and web} settings. These settings are different from the {=privacy} settings that control who can see your content on Instagram.",
                "Settings",
                "• The cookies and similar technologies we use help apps and websites share information about you with Instagram and Facebook. We use this information to personalize your experience, including the ads you see, and help businesses analyse and measure ad performance.",
                "Save",
                "Unmute",
                "Post Profile Photo?",
                "Reacted to your story: {emoji}",
                "Confirm Age",
                "Allow the use of cookies by Instagram and Facebook?",
                "Log In",
                "Related Accounts",
                "Update to the latest version of Instagram to see and send messages.",
                "{list of items}, {last item}",
                "Audo is muted.",
                "Preparing video...",
                "Providing your birthday improves the features and ads you see, and helps us keep the Instagram community safe. You can find your birthday in your Personal Information Account Settings.",
                "No Messages",
                "{=app name} {=privacy policy} and {=terms}.",
                "for",
                "Why are you reporting this comment?",
                "Who is being harassed or bullied?",
                "Mute",
                "Next",
                "Not Now",
                "This email address is used to log in to accounts on Facebook and Instagram, but the accounts aren't linked. Link your accounts to log in more easily.",
                "Are you {age} years old?",
                "Instagram icon",
                "Posting inappropriate content",
                "Remove Phone Number?",
                "Only you can see what you've saved",
                "Got it. You've unsubscribed from Instagram's news emails.",
                "Use Text Message",
                "The PIN entered is incorrect. {remainingAttempts} attempts left.",
                "{full_name} (@{username}) • Instagram photos and videos",
                "The video labeled {filename} is too long. To continue, choose a shorter video or post to IGTV instead.",
                "{count} active now",
                "By {action text}, you agree to {Instsagram's terms} and {data policies terms}. 2.60% + 0.30 USD will be deducted from your contribution to cover fees.",
                "Resend SMS",
                "If your appeal is approved",
                "Posting annoying content",
                "Turn Off",
                "data policies",
                "You mentioned {username} in your story",
                "You'll now get all login help emails.",
                "Circle check icon",
                "Instagram has been a part of Facebook since 2012, and we're making some corporate changes. Going forward, our Terms will reflect that Facebook Inc. is responsible for Instagram. The Instagram app and the way we process data are not changing.",
                "If you don't enter your card security code, you won't be able to use your Facebook payment info to complete checkout.",
                "Self-harm (eating disorder, cutting, or suicidal content)",
                "Connect Your Payment Info",
                "Remove Tag",
                "Please explain what's wrong",
                "Email",
                "Continue",
                "Step 1: Confirm authenticity",
                "You can remove from this collection or remove it from everything you've saved.",
                "See More Comments on This Post",
                "Card Number",
                "Write Alt Text Right Chevron",
                "Add to your story",
                "Find it for free on the App Store.",
                "Trouble getting started",
                "To help people connect on Instagram, you can choose to have your contacts periodically synced and stored on our servers. You pick which contacts to follow. Disconnect anytime to stop syncing. {learnMoreLink}",
                "Get payments chat support",
                "Your payments are securely processed with Facebook Pay. {Learn More}",
                "Log in with Facebook",
                "Unsend Message?",
                "Plus icon",
                "Enter valid ZIP code",
                "Please try again later.",
                "When you use Instagram to log into other apps and websites, we use cookies and similar technologies to enable the experience and create a secure connection.",
                "Unsend",
                "Credit card's image",
                "Enter Wi-Fi Code",
                "Product",
                "Text Message",
                "Passport",
                "This link will only work for 4 days after we send it. Because it may contain personal information, be sure to keep the link private and only download the file to your own computer.",
                "In addition, your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings they make available and how they work at any time. As of 5 October 2020, you may find additional information about the controls offered by popular browsers at the links below. Certain parts of the {Facebook Products} may not work properly if you have disabled browser cookie use.",
                "Monetizaton",
                "Pick a username for your account. You can always change it later.",
                "No",
                "Specific threats of physical harm, theft or vandalism",
                "Learn about brands you can buy from directly on Instagram.",
                "Full Name",
                "days",
                "Accounts you hide stories from",
                "Follow the next steps to help us get you back into your account.",
                "Watch Again on Instagram",
                "Go to the App",
                "Can’t Send Message",
                "Your friend {full (real) name of the user who joined} is on Instagram as {username of the user who joined}",
                "Instagram is committed to protecting everyone's intellectual property, so we're letting you know that your photo contains material that you may not have the rights to use.",
                "User icon",
                "Remove",
                "Welcome to Instagram",
                "{scope title}",
                "Network Error",
                "Next",
                "Replied to your story",
                "Download Your Data",
                "Profile Info",
                "Learn how to report it.",
                "{count} likes",
                "We'll remember your login info for you. You won't need to enter it when you log in again.",
                "Skip",
                "{link that reads Switch Accounts} or {link that reads sign up}",
                "Account Activity",
                "Search",
                "{name of the user} commented: {comment text from user}",
                "Original",
                "Report",
                "{count} others",
                "Terms of Use",
                "Add Manually",
                "All monetized videos are reviewed.",
                "Government and politics",
                "Text (SMS) Messages",
                "Search icon.",
                "Log Out",
                "I am the legal guardian of {username} and authorized to approve.",
                "When you log into an app or website with Instagram:",
                "Guides Are Only in the App",
                "We'll remember your login info for {username}. You won't need to enter it when you log in again.",
                "Jul",
                "Report",
                "Confirm PIN",
                "There was a problem sending the email.",
                "See this Instagram guide by @{username}",
                "Enter the last 4 digits of your Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN).",
                "Confirm",
                "About cookies and similar technologies on other apps and websites",
                "Didn't enter the right phone number?",
                "Privacy Policy",
                "Approval Required to Join",
                "Live",
                "Profiles Directory",
                "• Instagram to securely connect with apps and websites to log you in with your Instagram account",
                "Use these to log in if you're unable to receive a security code via text or authentication app.",
                "Learn more about the University of Maryland at {link}",
                "Cancel",
                "Share to...",
                "Professional Account",
                "We can save your login info on this app so you don't need to enter it again.",
                "shopping cart with circle drawn around it.",
                "Authentication App",
                "No posts yet.",
                "Your Story Has Been Removed",
                "Nominate",
                "If you signed up with Facebook, you'll need to {create a password} and log back in.",
                "When people ask to follow you, you'll see their requests here.",
                "{username}: sent a message",
                "Would you like to continue using Facebook to login?",
                "We Couldn't Find Your Account",
                "Business tools",
                "Similar Account Suggestions",
                "Change your password to continue using Instagram. If you share your new password with one of these services, you may get blocked from following, liking or commenting.",
                "No Posts Yet",
                "Learn more about our {help center link} on COVID-19 and vaccines.",
                "Create a PIN to use whenever you make a payment on Instagram.",
                "I just don't like it",
                "Reminder that this video will still be seen in the following locations:",
                "Username",
                "th",
                "When {username} posts, you'll see their photos and videos here.",
                "Learn more.",
                "Unblock",
                "Watch Video",
                "Connect a Facebook Page to share IGTV videos with your Facebook audience. You can connect a different Page by going to Linked Accounts in your Instagram app Settings.",
                "Seen yesterday",
                "Sign up with Facebook",
                "Phone Number Confirmed",
                "Error icon",
                "You can watch {username}'s live video on the Instagram app.",
                "View Drafts",
                "Backup Codes",
                "This media isn't supported.",
                "ten-thousand",
                "Media (Optional)",
                "{count} follower",
                "Something Went Wrong",
                "The file labeled {filename} is too small. To continue, choose a file larger than 1 KB.",
                "Best for retailers, local businesses, brands, organizations and service providers.",
                "We won’t use cookies from other companies to help personalize ads for you off of Instagram, or to measure their performance",
                "Video Sound Off",
                "Intellectual property violation",
                "Menu",
                "Blocked",
                "{count} posts",
                "Requested",
                "Removed",
                "Story Sharing",
                "Your Cart is Empty",
                "Suggested",
                "Enter date of birth mm/dd/yyyy",
                "No account found.",
                "{Submit an appeal text bolded} if you still believe this was a mistake and have permission to use this video.",
                "Close",
                "Sending your donation...",
                "Linked to Facebook",
                "In some cases, this includes information that recognized health organizations say could mislead people about how to cure or prevent a disease or that could discourage people from seeking medical treatment.",
                'Instagram complies with the notice and takedown procedures defined in section 512(c) of the DigitalMillennium Copyright Act ("DMCA"). While Instagram does not tolerate copyright infringement,we also do not tolerate false claims of infringement. If your content was removed under the notice andcounter-notice procedures of the DMCA, and you believe it was removed as a result of mistake ormisidentification, you are able to file a DMCA counter-notification.',
                "Back to Instagram",
                "Shop {merchant name} (@{merchant username})",
                "You have no removed applications that had access to your Instagram account.",
                "Submit Dispute",
                "File is Too Large",
                "Saved",
                "Photo",
                "Filtering Comments",
                "We'll send you a security code when we need to confirm that it's you logging in.",
                "Cancel",
                "Video must be between {minDurationInSeconds} seconds and {maxDurationInMinutes} minutes long.",
                "We're preparing your draft: {videoTitle}. We'll let you know when it's ready.",
                "You can appeal to the Rights Holder, {reference owner name}, if you disagree with the outcome of your dispute. Once submitted they will have {days} days to respond.",
                "Our Terms are now more clear about the service we provide, and what we expect from every member of our community to keep Instagram a safe place for everyone. Here are some updates we want to make sure you know about:",
                "We won't ask for a code next time",
                "Email",
                "With a professional account, you can get access to insights about your followers and account performance, new contact options and more.",
                "Log in to view posts from {username}",
                "Jun",
                "Unsending will remove the message for everyone. People may have seen it already.",
                "This Was Me",
                "OK",
                "Locations in {country name}",
                "Active",
                "Hashtags you follow",
                "Was This You?",
                "Digital Advertising Alliance",
                "Reminder that this video will be blocked in the following locations:",
                "Get Help Faster",
                "We want to let you know that we recently found and fixed a technical issue that impacted a small number of Instagram accounts, including yours.",
                "Suspicious Activity",
                "You can create and react to stickers in the Instagram app.",
                "This profile is pretending to be someone else",
                "More options",
                "It's small, fast and saves data.",
                "Contact content owner",
                "See Comment",
                "We use spam reports as a signal to understand problems we're having with spam on Instagram. If you think this post violates our {link_to_instagram_community_guidelines} or {link_to_instagram_terms_of_use} and should be removed, mark it as inappropriate.",
                "Your item has been saved.",
                "Related Hashtags",
                "Forgot password?",
                "An error has occurred. Please try again later.",
                "Tap to tag people",
                "Pages, groups, profiles and Instagram accounts that repeatedly post false information about COVID-19, vaccines and health might face restrictions, including reduced distribution of their posts, removal from recommendations and being unpublished or disabled.",
                "Admin records",
                "We'll use your feedback to understand problems we're having with spam on Instagram.",
                "Learn More",
                "Couldn't Upload",
                "You have explicit permission from the rights owner to use this content.",
                "Read the Full Terms of Use",
                "Can't Add WhatsApp to Your Profile",
                "Phone Confirm Page",
                "Switch to the app to see what’s in this guide.",
                "{age} years old",
                "See More Posts With #{hashtag}",
                "Know right away when people follow you or like and comment on your photos.",
                "Delete Item",
                "Find More Accounts Like {name}",
                "You will be able to get back to your account once we've confirmed your identity. {Learn more}",
                "Cover photo must be vertical and a JPG file. 9:16 aspect ratio is best.",
                "th",
                "By doing so, you'll authorize Facebook Pay to use your saved payment info for this and future payments on Instagram",
                "See All",
                "Enter {authMethod}",
                "I don't want this account to be able to see my photos or videos or search for me",
                "Unrestrict",
                "App Store",
                "Required field",
                "policies",
                "Removed on",
                "Terms and Data Policy",
                "A file has been selected",
                "You may receive SMS updates from Instagram and can opt out at any time.",
                "{count} posts",
                "Select From Computer",
                "Unable to upload. One or more file types you selected are not supported.",
                "Posts with captions that encourage violence or attack anyone based on who they are",
                "Food & Drink",
                "Post Unavailable",
                "Logins",
                "Log in to view stories",
                "Support",
                "Done",
                "Under 18",
                "Cancel",
                "Got it. You've unsubscribed from Instagram's product emails.",
                "Remove Email?",
                "Live Now",
                "Checkout",
                "Provide, personalize and improve content and services for you",
                "Save Your Login Info?",
                "Check",
                "Enter Your Instagram Password for {username}",
                "Facebook icon",
                "New password",
                "Your feedback is important in helping us keep the Instagram community safe.",
                "If an agreement is reached to restore the reported content, please have the complaining party email us with their consent.",
                "{hours} hours ago",
                "View and edit",
                "Security",
                "PayPal Policies",
                "Notification",
                "{username1}, {username2} and {remainingCount} others",
                "the menu",
                "Sent you a message",
                "Have an account? {link that reads Log in}",
                'Please click "yes" below to confirm this is your Instagram account. If it\'s not your account, please click "no" to return to the Login Screen. Then, log in to confirm your account.',
                "NO. {guide item number}",
                "Download Instagram",
                "Please add a valid address so people can navigate to your location in maps.",
                "Currently, you can only donate up to {donation amount limit, should not be translated since the rule is regulated in euro} during any 31-day period on Instagram. Try lowering your amount or donate again when you are eligible.",
                "You can disconnect your payment info at any time in Facebook Pay. Your Facebook Pay information, including payment methods, delivery address, name, email and payment history, will only be accessible on Facebook. You'll still see your Instagram orders in Instagram.",
                "{like count} like",
                "Log In With PayPal",
                "Added by {username}",
                "Emails About Shopping Brands",
                "Report",
                "{username} liked your guide.",
                "Comment Controls",
                "Upload failed.",
                "Save password on this browser",
                "We couldn't find a Facebook account for {username}. Try resetting your password.",
                "Post",
                "Some of your previous posts didn't follow our {Community Guidelines}. If you learn and follow our guidelines, you can prevent your account from being deleted.",
                "Get notifications by text message.",
                "Request Review",
                "What cookie settings can I control?",
                "Find Facebook Friends",
                "Submit",
                "Add Phone Number to Get Back Into Instagram",
                "Sorry, your password was incorrect. Please double-check your password.",
                "Switched to business account",
                "Each code can only be used once. You can also get new codes if you're worried this set has been stolen, or if you've already used most of them.",
                "with {username}",
                "Email",
                "text",
                "This video will be blocked on {date} at {time} because it may contain content owned by {reference owner name}",
                "Welcome • Instagram",
                "Password changes",
                "Accept",
                "{status of the authorization}",
                "The link you followed may be broken, or the page may have been removed. {link_back_to_instagram_home_page}",
                "Hashtag",
                "Account Privacy",
                "We provide ads without telling advertisers who you are. The policy has more information about what we do share with advertisers and partners. We never sell your data.",
                "Failed to save.",
                "When people tag you in photos, they'll appear here.",
                "When you log in, you can see all posts people share about this location.",
                "Due to ownership restrictions, your video is blocked in some countries, but fully available in:",
                "Video must be shorter than {duration} seconds.",
                "False information overlay icon",
                "See More",
                "Report #:",
                "SMS Sent",
                "Your contact information",
                "See More Suggestions",
                "There was a problem saving your profile. Please try again soon.",
                "You can control whether you see ads based on your activity off of Instagram through Data About Your Activity From Partners in your Settings. If you’ve enabled connected experiences across your Instagram and Facebook accounts, you can also adjust your Facebook ad experience through this setting.",
                "Categories",
                "More about advertising on Instagram:",
                "Any new comments from people you block won't be visible to anyone but them.",
                "When you connect an app or website to Instagram:",
                "Tap to retry",
                "Not Now",
                "Zip Code",
                "Login failed",
                "Insights icon",
                "Send private photos and messages to a friend or group.",
                "August",
                "Please ensure no other users or tools have access to your account and that you are following our Terms of Use.",
                "1w",
                "Drag to move, or tap to remove.",
                "Sign Up with Email Address",
                "Use these to get back into your account when your phone isn't available.",
                "Temporarily Disable Account",
                "Reach More People",
                "There was a problem declining tester invite. Please try again later.",
                "Create an Instagram Shop for the product's catalog to see the effect",
                "Between 13 and 18",
                "Similar Accounts",
                "Log in to follow people on Instagram.",
                "Login Info",
                "Required",
                "We restricted visibility to your content based on a report from a music rights holder that it infringes their music rights:",
                "{number of tagged people} people",
                "System notification icon",
                "Entering this information won't affect personal details on your Facebook profile.",
                "Discard",
                "Next Page Chevron",
                "Enter your name and date of birth as shown on your government-issued ID. We also need your registered home address.",
                "Switched to Personal Account",
                "SMS sent.",
                "Billing address same as postal address",
                "{weeks}w",
                "Log In to Instagram",
                "Login with Facebook.",
                "Revoke Access",
                "Sent to: {email}",
                "Suggested Accounts",
                "IGTV Video",
                "Turn this on?",
                "Use the Instagram app to see this type of message.",
                "Watching Videos Uses Data",
                "Account Restricted",
                "False information",
                "Your privacy is very important to us and we're constantly working to ensure that issues like this don't occur. If you have any questions, please contact us at {email}.",
                "When you log in, you can see all posts people share with this hashtag.",
                "You'll now get all password reset emails.",
                "If you are uncertain whether you should file a DMCA counter-notification, we recommend that you seekthe advice of an attorney, ideally one who specializes in intellectual property law. There maybe adverse legal consequences if you submit a false DMCA counter-notification or submit one in bad faith.If you file a false counter-notification, you could be liable for damages and attorney's fees undersection 512(f) of the DMCA, among other things.",
                "Sent. Check your email!",
                "Music",
                "No Facebook Page found. You must have a Page to share an IGTV video to Facebook. {Learn More}",
                "CLOSE FRIENDS",
                "Add Security with a PIN",
                "Email",
                "Add Event",
                "{count} following",
                "Download not working?",
                "Data Policy",
                "Share",
                "Complete Profile",
                "Can't Add Account",
                "Account",
                "visit the Help Center",
                "Enter future date",
                "It looks like you misspelled your email address. Did you mean to use {filled email domain} ?",
                "Content that targets people to degrade or shame them",
                "Thanks for reporting this",
                "Log in to view {username}'s profile",
                "We’ll remember your cookie choices and apply them anywhere you’re logged into Instagram and where you use your accounts to log into other Facebook products. You can review or change your choices at any time in your cookie settings.",
                "Browse more posts by logging in",
                "Image for deleted comtent",
                "Update App",
                "Account Data",
                "Business Profile Info",
                "Brightness",
                "Advertisers with your contact info",
                "Based on the category you selected, you may be a creator. You can edit this anytime.",
                "Continue as @{username}",
                "phone number",
                "{follower count} Followers",
                "Also known as (Optional)",
                "Uploading",
                "Controlling Cookies With Browser Settings",
                "Enter the 6-digit code generated by your authentication app.",
                "You'll need to manually set up two-factor authentication using this key if you have multiple authentication apps installed or if you want to set it up with an app installed on another device.",
                "Update Mobile Number",
                "Confirm Email",
                "Thank you for your report. We will remove this message if it violates our Community Guidelines.",
                "If you don’t allow these cookies:",
                "We updated our intellectual property licenses, but your rights aren't changing. You still own your photos and videos.",
                "See more...",
                "Change Profile Photo",
                "We won’t share information about who you are with CMU Delphi Research, and they won’t share your survey responses with us.",
                'The screen will start to "wiggle" and finally an "X" will appear on the application icon.',
                "Do you want to allow {username} to send you messages from now on? They'll only know you've seen their request if you accept it.",
                "Hide comments that contain any of the words or phrases you type above from your posts.",
                "Stories are better in the app",
                "Adding Gift Aid to your donation means for every £1 you give, 25p will be added at no extra cost to you.",
                "Upload Photo",
                "Your Comment Has Been Removed",
                "For the next {days to snooze} days, you'll only get login help emails from devices where you've used Instagram before.",
                "This effect is not available. Try again later.",
                "Tap to play",
                "Your photo was blocked because it may contain content that belongs to someone else.",
                "Agree to Terms",
                "Select to remove",
                "Turning Comments Off",
                "Sorry, there was a problem. Please try again.",
                "We can save your login info on this browser so you don't need to enter it again.",
                "You have unsaved changes. Are you sure you want to cancel?",
                "Done",
                "The effect by {username} is ready to be viewed in Instagram.",
                "Circle Check",
                "Add a profile photo",
                "Tap {link_back_to_instagram_home_page} at the bottom of your feed.",
                "Alt text describes your photos for people with visual impairments. Alt text will be automatically created for your photos or you can choose to write your own.",
                "Install an app like Google Authenticator or Duo Mobile, then return to Instagram to finish setting up.",
                "Unblock",
                "City",
                "We're preparing your video: {videoTitle}. We'll let you know when it's ready.",
                "Captions longer than 125 characters appear truncated in feed.",
                "Verified accounts have blue checkmarks next to their names to show that Instagram has confirmed they're the real presence of the public figures, celebrities and brands they represent.",
                "Confirm PIN",
                "Connect With Your Friends Using Stories",
                "Other things you can do",
                "Sign up for an account.",
                "Confirmation Code",
                "Allow the use of cookies by Instagram?",
                "Instagram Lite",
                "Thanks for Providing Your Info",
                "View Profile",
                "Confirm Your Phone Number",
                "Try Again",
                "Profile saved!",
                "PINNED",
                "Comment {actionType} {prepositionType} {violationText}",
                "You’ll be logged out of apps and websites where you’ve used your Instagram accounts to log in, and won’t be able to use your accounts to log back in",
                "Notifications are off for messages you move here, but you can turn them on anytime.",
                "Facebook Logo",
                "Submit",
                "Your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings they make available and how they work at any time. As of 5 October 2020, you may find additional information about the controls offered by popular browsers at the links below. Certain parts of Facebook Products may not work properly if you have disabled browser cookies. Please be aware that these controls are distinct from the controls that Instagram and Facebook offer.",
                "Log In",
                "There was a problem loading your inbox.",
                "Confirm This Login?",
                "appeal this decision",
                "Your Story",
                "Compose",
                "Learn more",
                "Select Embed Code",
                "Get Now",
                "Password changed.",
                "No results found.",
                "th",
                "Continue as {username}",
                "Made to save space and data. Download for free on Google Play.",
                "Email",
                "September",
                "On the app, you can keep up with all posts that have this hashtag.",
                "A Note About Your Account",
                "Next",
                "Reels",
                "Instagram Password",
                "Warning",
                "Account Recovery",
                "You sent a story",
                "Temporarily disable my account",
                "Account Unrestricted",
                "Our Cookies on Other Apps and Websites",
                "I want to delete a comment I left",
                "Music",
                "These cookies are required to use Facebook Company Products. They’re necessary for these sites to work as intended.",
                "There was an error and your draft couldn't be saved.",
                "More Growth Tools",
                "Avoid altering the design or printing on dark or patterned colors.",
                "Story icon",
                "Payments Terms of Service",
                "Thanks! You've resubscribed to Instagram's news emails.",
                "Dismiss",
                "Your account has been reactivated",
                "To prevent your account from being temporarily restricted or permanently disabled, ensure that no other users or tools have access to your account and that you're following our {Terms of Use}.",
                "Return to Home",
                "We were unable to send you a login link.",
                "Shopping Bag Emails",
                "Think We Made a Mistake?",
                "• Instagram and Facebook to receive information about your activity from apps and websites to help personalize content, serve relevant ads and provide a safer experience. This information is shared across Instagram and Facebook because you added these accounts to your Accounts Center",
                "Dismiss",
                "Please confirm that you want to log into {app name} using the {username} Instagram account",
                "Drug use",
                "Essential Cookies",
                "You won't get messages from this group unless someone adds you back to the chat.",
                "Can't add this video. IGTV videos should be vertical or horizontal, with dimensions of 16:9 or 9:16.",
                "Clear All",
                "More Information About Online Advertising",
                "You can create and react to stickers in the Instagram app. Get it for free from the {app store} or the {play store}.",
                "Checkpoint starts/ends",
                "· The funds used aren't the proceeds from the sale of goods or provision of services; nor another person or third party",
                "Please log in again to get your file of the things you've shared on Instagram.",
                "Keyword Explore Page",
                "update your password",
                "Choose File",
                "You'll get a code from your security app.",
                "Create PIN",
                "Removed by {username}",
                "See More",
                "Confirm Log In?",
                "{Delete this photo text bolded} if you don't have the rights to use all of the content in it. This won't affect your account.",
                "{minutes} minutes ago",
                "I don't want a user following me",
                "Connect to Facebook",
                "Your Post Has Been Removed",
                "Save",
                "Our team will review the account and if it violates our {link_to_instagram_community_guidelines} or {link_to_instagram_terms_of_use} , we'll remove it.",
                "Cancel",
                "{count} like",
                "The password you entered is incorrect. Please try again.",
                "Your Facebook email address, {email}, already has an account with Instagram.",
                "We'll ask for a security code when we need to confirm that it's you logging in.",
                "View More",
                "Other",
                "We recently found that your Instagram password had been stored internally in a readable format. We've fixed the issue and found no sign that your stored password was improperly accessed or abused.",
                "May",
                "Ok",
                "Saved Collection",
                "Change",
                "GIF",
                "If you leave now, your change may not be saved.",
                "Allow Ads",
                "Logging Out",
                "Confirm Your Info on the App to Get Back to Your Account",
                "Please try again later.",
                "Please fill out all required fields.",
                "Follow Requests",
                "Connect to Instagram",
                "This Wasn’t Me",
                "Move messages from {username} into:",
                "• You can edit the information {app name} will receive. You may choose to cancel without sharing, but you won't be able to connect Instagram to {app name}.",
                "create a password",
                "{days} days ago",
                "Turn on Notifications",
                "The video file you selected could not be uploaded.",
                "AM",
                "Click photo to tag people",
                "You can choose more than one at a time.",
                "minutes",
                "RETRY",
                "Graphic violence",
                "Unblock {Username of current profile}?",
                "Enter Wi-Fi Code Instead",
                "@{username} • Instagram photos and videos • Page {page}",
                "You should only submit a dispute if you have permission to use all of the content in your photo.",
                "New Story",
                "Your email",
                "Confirm the Security Code for",
                "Reply to {username}...",
                "Remove Tag",
                "Thank you for reviewing our updated Data Policy and agreeing to our new Terms.",
                "Replying to yourself",
                "Your Instagram Data",
                "+ {count}",
                "The username you entered doesn't belong to an account. Please check your username and try again.",
                "Ask a Parent/Guardian",
                "{username} sent a post",
                "You should only submit a dispute if you have permission to use all of the content in your video.",
                "You now have more tools to connect with your audience on Instagram.",
                "Carousel",
                "We'll send a text message with a login code, or you can use a security app of your choice.",
                "Save",
                "Two-Factor Authentication",
                "As a precaution, we encourage you to look at your follower list and make sure that only the people you want to be following you are. Protecting your privacy is our top priority, and we're constantly working to ensure that problems like this don't occur. We are very sorry this happened. If you have any questions, please contact us at {email} .",
                "Edited",
                "Something Went Wrong",
                "Okay",
                "How It Works",
                "You can learn more about keeping your account secure on {help center link}.",
                "My account was hacked",
                "Report User",
                "Place",
                "We created our {communityGuidelinesLink} to support and protect our community, and we removed your post because we’re concerned it may encourage self-harm or suicidal behavior. We understand this may not be your intention. We care about your safety, and if you’re going through something difficult, we’d like to help. We encourage you to get support through our resources.",
                "If you go back now, you will lose your photo",
                "Right chevron",
                "Get New Contact Options",
                "Copy Link",
                "th",
                "Mobile Number or Email",
                "Delete chat.",
                "Title",
                "Stories Are Better in the App",
                "You should only allow third-party applications that you trust and understand how they will use this information about you. See their {=privacy policy} and {=terms}. You can remove this app at any time by visiting your {=settings}.",
                "Log in",
                "Date of birth",
                "There was a problem logging out from your account. Please try again later.",
                "Personal Information Settings",
                "This message is spam or a scam",
                "Full name",
                "This link will only work for the next four days. Because it may contain personal information, be sure to keep the link private and only download the archive to your own computer.",
                "Do more with stories on Instagram Lite",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink}. If you post something that goes against our guidelines again, your account may be deleted, including your posts, archive, messages and followers.",
                "You have restricted {username}.",
                "Cancel",
                "The file labeled {filename} could not be uploaded. To continue, choose an mp4 file.",
                "{media author username} can see the total number of people who liked this post.",
                "When you upload your contacts to Instagram, you'll see them here.",
                "Facebook",
                "We recently found that your Instagram password was stored internally in a readable format. We've fixed the issue and found no sign it was improperly accessed or abused by anyone internally. We're very sorry this happened, and we'll continue to improve how we protect your information.",
                "Let people share your story as messages",
                "Failed to log in, try again.",
                "Hide on My Profile",
                "Approved!",
                "branded content policies",
                "Learn more",
                "{Link to return to a previous step in this flow} or {Link to skip this entire flow}",
                "Skip",
                "Verified",
                "Privacy",
                "st",
                "{count} like",
                "See all comments by logging in",
                "New Post",
                "Cross icon to close Facebook Pay learn more page",
                "Step 2: Confirm notability",
                "Close {authMethod} Entry?",
                "Facebook Pay will use payment info from your Facebook account to complete checkout. Your payment info and history will be connected across Instagram, Facebook and Messenger. {Learn More}",
                "This comment puts people at risk",
                "The files you've selected are not supported.",
                "Message Unavailable",
                "Instagram Share",
                "If you didn't get it, we can {resendCode}.",
                "Thanks for letting us know",
                "You're Not Old Enough to Use Instagram",
                "Video Has No Audio",
                "Switch accounts",
                "Audience (Optional)",
                "We couldn't find anything for that search.",
                "Push Notifications",
                "We restricted visibility to your content based on a report from the following party that it infringes their music rights:",
                "Viewers",
                "Menu",
                "Next",
                "Tap photo to tag people.",
                "Tax filing",
                "{username} will still see the same number of ads but they may be less relevant.",
                "Day:",
                "Facebook Apps and Services",
                "A third party reported that your content infringes their copyright.",
                "Ads icon",
                "Links (Optional)",
                "This is because some of your previous posts have been found to violate a third party's music rights or {Community Guidelines}.",
                "Allow Resharing to Stories",
                "Additional Methods",
                "Why was my content removed?",
                "Admin",
                "Fitness",
                "Photos of you",
                "Add To Chat",
                "Viewer count icon",
                "Tagged Post",
                "Remove",
                "{username} will see ads that may be less relevant to their interests.",
                "We weren't able to connect your account using the PIN you entered. You can still connect by logging into your linked PayPal account.",
                "In addition, receiving multiple takedown requests can result in your account being suspended.",
                "Getting help is faster and easier on the latest version of the app.",
                "Follow",
                "View This Fundraiser in the Instagram App",
                "{numberOfPeople} People",
                "Parent/Guardian First Name",
                "Follow the next steps within {number of days before user is disabled} days so we can try to get you back into your account before it's disabled.",
                "View replies",
                "You are eligible to get Gift Aid if:",
                "by {username}",
                "Tag another person",
                "Most Popular",
                "Your feedback is important in helping us keep the Instagram community safe.",
                "Session Logged Out",
                "1 POST",
                "1 hour ago",
                "Couldn't delete post.",
                "Location icon",
                "Get the app.",
                "Remember Login Info",
                "Is {birthday} your birthday?",
                "{name of the user who liked the photo} liked your post.",
                "With videos longer than a minute, you can do more.",
                "Go to the Instagram app to add other contact buttons, create promotions, and get insights about your followers.",
                "Relationships",
                "Send Confirmation",
                "IG Success Checkmark",
                "0 years old",
                "Email Sent",
                "February",
                "Change Your Password to Secure Your Account",
                "Privacy and Security Help",
                "This version is no longer supported. To log in, update your app to the latest version.",
                "Your Instagram business category isn't supported on WhatsApp.",
                "Accounts Center is only available in our mobile apps. Go to Accounts Center in the settings of your Instagram, Facebook or Messenger app to manage connected experiences, like logging in across accounts and story and post sharing.",
                "Too busy/too distracting",
                "Looks like you requested to delete this account. Learn more in the Help Center: https://help.instagram.com",
                "Download",
                "Let us know.",
                "You sent {username}'s story",
                "Direct - secure inbox",
                "Edit",
                "Country/region",
                "Edit Video",
                "Remove Claim",
                "Your post could not be uploaded. Please try again.",
                "Posts promoting the use of hard drugs",
                "Donations must be at least {value}",
                "If you have permission to share everything in the video including the audio, like the soundtrack or music, you can appeal the block and have your video unblocked.",
                "Make Private",
                "Move",
                "Temporarily Disable Your Account",
                "We noticed unusual activity from your account. Confirm your identity from the Instagram app to get back to your account.",
                "Hate speech or symbols",
                "Toggle selection",
                "Add to Collection",
                "Privacy Policy",
                "Seen {hours}h ago",
                "Dismiss",
                "[?]",
                "Sign Up",
                "Can't open the Google Play Store?",
                "Tag People",
                "Add a name",
                "Suggestions For You",
                "Instagram filled play",
                "Profile Update",
                "20+ Requests",
                "By switching to this free professional account, you'll get access to insights about your followers and account performance, new contact options and more.",
                "Replied to you",
                "Recognized devices",
                "View Shop",
                "Keep Account",
                "Close",
                "More options",
                "Sale of illegal or regulated goods",
                "If you lose your phone or can't receive a code via text message or an authentication app, you can use these codes to get back into your account. Save them in a safe place.",
                "Block",
                "IGTV",
                "Undo",
                "See Every Post From {username}",
                "Delete",
                "Enter Confirmation Code",
                "It's sexually inappropriate",
                "Attempting to log in.",
                "Browse Your Favorite Topics",
                "Sat",
                "Tap for more",
                "like this",
                "Log Out",
                "This login couldn't be confirmed. Please check your network settings and try again.",
                "Why are you reporting this message?",
                "Unblock",
                "Not Now",
                "There was a problem saving your keywords. Please try again soon.",
                "Discover more free photos when you sign up.",
                "Off-Facebook activity",
                "This file is too small. To continue, choose a file larger than 1 KB.",
                "Next",
                "Confirmation Sent",
                "This Account is Private",
                "Entity header",
                "You can get new codes if you're worried this set has been stolen, or if you've used a lot of them.",
                "Keeping Your Data Safe",
                "Sharing…",
                "Sorry! We're having trouble creating your account right now. Please try again later.",
                "Filter",
                "You have unseen notifications.",
                "Share Post",
                "The rights holder, {reference owner name} rejected your dispute because they believe the photo contains their content.",
                "Update with Facebook",
                "Business",
                "{Submit a dispute text bolded} if you have permission to use all the content in your photo. By submitting a dispute, you give {owner name}, who has issued this claim, permission to review your photo. They can also review the entire post, if you've shared it publicly. They will have {number of days} days to respond.",
                "Instagram video by @{username} • {datetime}",
                "Yes, Log In",
                "Something Went Wrong",
                "GIF",
                "",
                "Consent Page",
                "Make Admin",
                "This link doesn't work anymore because your account has been deleted. To keep using Instagram, create a new account.",
                "Password",
                "Story Video Overlay",
                "Security and login emails from Instagram in the last 14 days will appear here. You can use it to verify which emails are real and which are fake.",
                "Enter your Facebook Pay PIN to confirm your payment.",
                "{username} won't know they've been moved. You can move them back to Primary anytime.",
                "Hashtags Directory",
                "Suggested Profiles",
                "Help",
                "Get Instagram Lite",
                "Animals & Nature",
                "Tap the application icon and hold it for a few seconds.",
                "Mute Messages",
                "Hate speech or symbols",
                "We recently found, and quickly fixed, a technical issue that impacted a small number of Instagram accounts, including yours.",
                "Your Post Goes Against Our Community Guidelines",
                "Connected to Facebook",
                "Travel & Places",
                "Connect With Your Card Security Code?",
                "Food & Drink",
                "Rights Holder:",
                "Continue",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. We have these guidelines because we want our community to feel respected and safe.",
                "Get a Free Professional Account",
                "Send",
                "Change",
                "Enter state",
                "Confirm the Instagram business profile you want to connect to {applicationName}.",
                "Add your name and bio so friends can find you.",
                "October",
                "Ok",
                "Are you sure?",
                "Not Now",
                "Hide",
                "Gallery posts cannot include videos longer than one minute.",
                "Instagram photo by {fullName} • {datetime}",
                "Data Policy",
                "Sorry, this link is broken. To keep your account, log in with your username and password.",
                "You'll see all the people who follow you here.",
                "Allow",
                "Synced Profile Photo",
                "Share to WhatsApp",
                "Sports",
                "Privacy concerns",
                "Get New Codes",
                "Change Page",
                "Apps and Websites",
                "Live {actionType}",
                "Proceed to Checkout",
                "OK",
                "Learn More",
                "Caption",
                "I don't like this conversation",
                "Go Back",
                "When you press the button below, your photos, comments and likes will be hidden until you reactivate your account by logging back in.",
                "List all the names the person or organization your account represents is known by. Include different names and the same name in other languages.",
                "Submit Appeal",
                "For the next {days to snooze} days, you'll only get password reset emails from devices where you've used Instagram before.",
                "Thanks for letting us know that you did not request a password reset. Your password has not been changed.",
                "By continuing, {=app name} will receive ongoing access to your information and Instagram will record when {=app name} accesses it. {=learn more} about this sharing and the settings you have.",
                "Quizzes",
                "I don't want to see this account's photos or videos in my feed",
                "Save",
                "You can appeal to the Rights Holder, {reference owner name}, if you disagree with the outcome of your dispute. Once submitted they will have 7 days to respond.",
                "Chevron to see all suggested users",
                "This web browser is no longer supported.",
                "Attempting to buy, sell, or transfer any aspect of your account goes against our {Terms of Use} and {Community Guidelines}.",
                "Password",
                "Reporting Accounts or Posts",
                "If you stay in this group, you'll see messages from accounts that you've restricted.",
                "{firstUsername}, {secondUsername}",
                "Press Control-C to copy.",
                "To checkout on Instagram, download the app.",
                "Report",
                "Approve or ignore requests",
                "You can allow the use of all cookies, or you can choose more options. We’ll remember your cookie choices and apply them anywhere you’re logged into Instagram, and where you use your accounts to log into other Facebook Products. You can review or change your choices at any time in your cookie settings.",
                "Already follow {username}? {=Log in} to see their photos and videos.",
                "Enter your phone number and we'll send you a password reset link to get back into your account.",
                "Create promotions on Instagram to reach more customers and build your business.",
                "We're sorry, but something went wrong. Please try again",
                'Tap on the "X" and when asked whether to proceed, select "Delete".',
                "When you log in, you can see all their photos, videos and story updates.",
                "Not Now",
                "copyright",
                "Sent {username}'s story",
                "Username or email",
                "It contains nudity or pornography",
                "Stay in Group",
                "Edit",
                "There are no files available for {username}.",
                "Not You?",
                "You need to enter the date you were born",
                "Reset Password",
                "Cookie Policy",
                "Change Number",
                "Close",
                "Recent",
                "Business Address",
                "Edit options",
                "Suggestions For You",
                "You are currently logged in as {username}.",
                "Decline",
                "Jobs",
                "Switch to the app for better ways to send photos, disappearing messages, and more.",
                "This video's aspect ratio isn't supported.",
                "Where Your Photo Is Visible",
                "Ad preferences",
                "Confirm that {email} is your email address, or enter a new email address or phone number. This helps us keep your account secure and lets you get into Instagram if you forget your password.",
                "{number of items} items",
                "INTERNAL",
                "1h",
                "Enter your Wi-Fi code",
                "For advertising and measurement services off of Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies on Instagram. These companies also use cookies.",
                "You'll get a code from your security app. If you don't have one, we'll recommend one to download.",
                "Connections",
                "We remove profiles with:",
                "Two-Factor Authentication",
                "Copy Embed Code",
                "See All",
                "Resubscribe",
                "You can create a PIN or use your device's face or fingerprint recognition to confirm payments.",
                "Cancel",
                "Unfollow",
                "Privacy Policy",
                "Go Back",
                "These are apps and websites you've used Instagram to log into and may not have used in a while. They may still have information you previously shared, but their ability to make additional requests for private info has expired. You can ask an app to delete your information. To do it, review their Privacy Policy for details and contact information. If you contact an app, they may need your User ID.",
                "About These Cookies",
                "Turn Off Commenting",
                "1 ACCOUNT",
                "Accounts Center",
                "Mail icon",
                "Only you can see your contacts, but Instagram uses the info you've uploaded about your contacts to make friend suggestions for you and others and to provide a better experience for everyone.",
                "Use the Instagram app to view this type of message.",
                "Clear Search History",
                "Privacy Policy",
                "Uploading…",
                "IGTV",
                "Cellular Data Use",
                "Update App",
                "from Facebook",
                "Search",
                "Poll",
                "Your friend {name of the facebook friend who joined} is on Instagram as {username of the user who joined}",
                "Options in Help Center",
                "th",
                "Thank you for reviewing our updated {data_policy} and agreeing to our new {terms_of_service} .",
                "Your feedback helps us make Instagram better for you and your friends.",
                "Want to Keep Using This Account?",
                "Thank you for reporting this problem.",
                "Underage Account",
                "Tap to reveal.",
                "When you log in, you can read all comments and add your own.",
                "Private Account",
                "Activity",
                "Appeal to post video",
                "Copied",
                "Unable to Connect",
                "Under 13",
                "You",
                "View",
                "They requested videos containing this content to be blocked everywhere except in the following countries where they own the rights:",
                "Confirm New PIN",
                "Your account has been disabled. Follow the next steps within 30 days so you can request a review.",
                "Requests aren't marked as seen until you accept them.",
                "Close",
                "This story is no longer available",
                "To:",
                "People can't view, like, or comment on your video in locations where it's blocked. Your video is blocked in:",
                "Your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings they make available and how they work at any time. As of 5 October 2020, you may find additional information about the controls offered by popular browsers at the links below. Certain parts of Facebook Products may not work properly if you have disabled browser cookies. Please be aware that these controls are distinct from the controls that Instagram offers.",
                "Your photo was added.",
                "Share",
                "Add Extra Security With Two-Factor Authentication",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. If you post something that goes against our guidelines again, your account may be deleted, including your posts, archive, messages and followers.",
                "Active now",
                "Set Up Your Professional Account",
                "Read the Full Terms of Use",
                "Open this link on a mobile device to see the effect",
                "You replied to {username}",
                "Nametag",
                "Hashtags you follow",
                "Removed",
                "Thanks!",
                "Confirmation Sent",
                "Contacts successfully followed.",
                "OK",
                "Too many ads",
                "Keeping Our Community Authentic",
                "Edit options",
                "{like count} likes",
                "If you leave this page now, your edits will be discarded.",
                "Instagram is committed to protecting everyone's intellectual property, so we're letting you know that your video contains material that you may not have the rights to use.",
                "Failed to Load.",
                "Cover photo upload failed.",
                "Switch to a Creator Account?",
                "Next, add WhatsApp to your profile.",
                "Choose Size",
                "{count} post",
                "Instagram adheres to the Self-Regulatory Principles for Online Behavioral Advertising and participates in the opt-out programs established by the {Digital Advertising Alliance}, the {Digital Advertising Alliance of Canada} and the {European Interactive Digital Advertising Alliance}. You can opt out from all participating companies through these sites.",
                "Enter Code",
                "December",
                "Add From Saved",
                "You should only allow third-party applications that you trust and understand how they will use this information about you. See their {=privacy policy}. You can remove this app at any time by visiting your {=settings}.",
                "Declined",
                "Facebook Pay Is Now on Instagram",
                "Follow",
                "Choose where you want us to send you a security code when we need to confirm that it's you logging in. {link to the help center in this paragraph}",
                "May",
                "Activity Status",
                "This file is too large. To continue, choose a file under 100 MB.",
                "You need to complete your age information to use Instagram.",
                "You've opted out of emails to help you log in. We'll only send you these emails when you request them.",
                "Got it. You've unsubscribed from Instagram's research emails. We won't contact you about opportunities to participate in future research projects.",
                "Some of your previous posts didn't follow our {Community Guidelines}. If you post something that goes against our guidelines again, your account may be deleted, including your posts, archive, messages and followers.",
                "These are apps and websites you've used Instagram to log into and may not have used in a while. They may still have access to info you previously shared, but their ability to make additional requests for private info has expired.",
                "Community Guidelines",
                "Learn more about similar account suggestions",
                "The email address {email} has been removed from {username}'s account.",
                "Reset PIN",
                "Authentication App Confirmed",
                "Get Help",
                "Submit a dispute",
                "Enter first and last name",
                "authentication app",
                "If you don’t allow our use of these cookies:",
                "Questions",
                "{=app name} {=privacy policy}",
                "Try it Out",
                "Make sure you have permission to use all of the audio in your video before you restore it. If you don't have permission to use this audio, restoring could result in removal of your video and further action against your account.",
                "You've Been Removed as the Parent/Guardian",
                "New",
                "Music",
                "Write alt text...",
                "You reacted to their story: {emoji}",
                "Close override modal",
                "Submit",
                "They won't be able to find your profile, posts or story on Instagram. Instagram won't let them know you blocked them.",
                "first log out",
                "Delete Collection?",
                "Sent",
                "Preparing video",
                "© {year} Instagram from Facebook",
                "People You Follow and Your Followers",
                "Nametag",
                "Post to IGTV",
                "There was an error updating your cart.",
                "Approve",
                "All {category name}",
                "Videos must be one hour or less.",
                "Decline All",
                "Button: Select category",
                "Move to Primary",
                "Cookies From Other Companies",
                "Use the Instagram app.",
                "Secure Your Account",
                "Reply",
                "Get Access to Your Account",
                "The Account is Private",
                "Harassment or bullying guidelines",
                "{guide author full name} on Instagram: {guide title}",
                "Location Sharing",
                "You can continue with your donation on Instagram.",
                "Free Photos from {carrier name}",
                "Recent utility bill",
                "Your mailing address",
                "Connect Your Payment Info",
                "+ {remainingUserCount}",
                "Stories from people you follow will show up here.",
                "Get the App to Use Stickers",
                "Report a problem with the map",
                "Only people {story owner username} has added to their close friends list can see this photo.",
                "Are you sure you want to remove yourself as tester of {name}",
                "Limit unwanted interactions without having to block or unfollow someone you know.",
                "Cookies From Other Companies",
                "Edit Comment Settings",
                "th",
                "Trouble Logging In?",
                "Unable to load upcoming events.",
                "Comments",
                "This means we won't be able to review your comment again, though your feedback helps us learn as we build tools to keep our community safe.",
                "IGTV",
                "rd",
                "Change Phone Number",
                "Title field must be filled out",
                "You've already reviewed our updated Data Policy and agreed to our new Terms.",
                "View all {count} comments",
                "1 PRODUCT",
                "Help show you relevant ads and measure their performance",
                "Forgot Password for {username}?",
                "Confirm Your Email to Get Back into Instagram",
                "More Information",
                "Might be posting my intellectual property without authorization",
                "New Collection",
                "Enter last 4 digits of SSN",
                "We can use and share information for research, especially in ways that help us keep our community safe on Instagram, like to understand and prevent bullying and harassment.",
                "Desktop icon",
                "Account Privacy",
                "Post",
                "Send",
                "Date joined",
                "Describe the people who follow your account. Include who they are, what they're interested in and why they follow you.",
                "We need your ID to help confirm who you are. It must show your name, date of birth, photo, the date of issue, expiration date and country of issue.",
                "Share",
                "Photos & Videos",
                "Your report will help keep Instagram free of spam.",
                "Visual Arts",
                "View All",
                "Comment icon",
                "You can only see the total number of views and likes on your posts.",
                "Your code was resent.",
                "Close",
                "Other emails from Instagram in the last 14 days that aren't about security or login will appear here. You can use it to verify which emails are real and which are fake.",
                "Other",
                "Manage your new creator account on desktop with Business Suite or Creator Studio.",
                "Make it easy for people visiting your profile to contact you on WhatsApp.",
                "Privacy and Security",
                "For your security, please enter your PIN.",
                "Failed to post.",
                "If you signed up through Facebook, you'll need to {create a password} and log back in.",
                "You may receive SMS updates from Instagram and can opt out at anytime.",
                "Permissions",
                "I find it offensive",
                "Your phone number won't be visible on your account. For additional information, please see our {data policy link}. Instagram doesn't charge for this service. Standard messaging rates apply.",
                "Download Information - Part {number}",
                "Yes, I'm sure",
                "Verified",
                "Turn This On?",
                "{username}, important information about your Instagram account",
                "Posts that encourage violence or attacks anyone based on their religious, ethnic or sexual background",
                "Report as regulated goods?",
                "Decline",
                "Enter the code we sent to your number ending in {lastFourDigits}.",
                "Get New Codes",
                "Intellectual property violation",
                "This item is no longer available",
                "Are you sure?",
                "I want to unfollow a user",
                "Add New Payment Method",
                "Your Post Goes Against Our Branded Content Policies",
                "The PIN entered is incorrect. 1 attempt left.",
                "Privacy and Security",
                "Choose a reason for reporting this post:",
                "Active today",
                "Beauty",
                "Log Out",
                "Post has been saved",
                "Dialog header image",
                "Portrait (9:16)",
                "entering your payment info",
                "We usually review IDs within 24 hours. You'll receive a notification when when we have an update.",
                "Couldn't post comment.",
                "Done Editing",
                "Select a country/region",
                "Submit Appeal",
                "Post a Preview",
                "June",
                "Profiles",
                "@{username} on Instagram: “{caption}”",
                "Copy Link",
                "There was a problem saving your keywords.",
                "Based on the category you selected, you may be a business. You can edit this anytime.",
                "Continue as {fullName}",
                "Your video matches {overlap duration} seconds of video owned by {reference owner name}.",
                "We usually let you request a review when you think your comment shouldn't have been removed.",
                "Unfollow",
                "Tooltip icon",
                "Not Now",
                "Download Instagram Lite",
                "We recently found and fixed a technical issue and wanted to let you know about it. For a period of time in November, changes to your blocked accounts on Instagram may not have been saved. We've fixed the issue and made sure accounts you intended to block are blocked. You can visit Blocked Accounts in settings anytime to see who you've blocked on Instagram.",
                "Messenger",
                "Report as nudity or pornography?",
                "Your ad may not appear the way you created it. To preview your ads, visit Ads Manager.",
                "Learn more about CMU Delphi Research Center at {link}",
                "Crop Portrait Icon",
                "This link has expired. To reactivate your account, log in with your username and password.",
                "age",
                "Review Video",
                "Watch on Instagram Lite",
                "Blocked {Username of current profile}.",
                "You're already following {username}",
                "Professional Account",
                "Phone Number Added",
                "payment history",
                "Give Approval",
                "Remove Tag",
                "Celebrity username",
                "Male",
                "Continue as {username}",
                "Share to...",
                "Change Password",
                "{Delete this video text bolded} if you don't have the rights to use all of the content in it. This won't affect your account.",
                "Back to Instagram",
                "Done",
                "To access Instagram, log in now using the phone number, email, or username associated with your Instagram account.",
                "Your billing info and payment method stay private. Your donation and contact info is shared with the organization.",
                "When you delete this collection, the photos and videos will still be saved.",
                "Features on our products will not be affected",
                "Manage Sync Settings",
                "Your Guide Goes Against Our Community Guidelines",
                "Enter valid email",
                "Sign up with {email} or {phone number}",
                "Phone number, username, or email",
                "Where Your Photo Is Blocked",
                "Want to remove something",
                "Are you sure you want to log out of your account?",
                "Share to Twitter",
                "Report this account",
                "Current follow requests",
                "Video may use unsupported encoding or be corrupted",
                "This is because some of your previous posts didn't follow our {Community Guidelines}. If you post something that goes against our guidelines again, your account may be disabled, and your posts, archive, messages and followers will be permanently removed.",
                "How would you like to be reached?",
                "You may receive SMS updates from Instagram and can opt out of them at any time.",
                "Use Authentication App",
                "Your phone number ending in {This is the last 4 digits of the user's phone number} was added to your account. We'll now ask for a login code any time you log in on a phone or computer we don't recognize.",
                "th",
                "Creator Studio icon",
                "Leave Chat",
                "You own your photos and videos, period. Advertising does not change this.",
                "If you're unable to use a security code from your backup codes, you can get one by {=resend it} or use one from your {=auth app codes}",
                "Followed by {username1}, {username2}, {username3} + {more text}",
                "Two-Factor Authentication",
                "st",
                "[FB-Only] Toggle Theme",
                "Sorry, this link doesn't work anymore. To keep your account, log in with your username and password.",
                "Search",
                "If you don’t want these cookies:",
                "This video doesn't follow the Content Monetization Policies.",
                "Enter the confirmation code we sent to {email}.",
                "Post",
                "Tester Invites",
                "The issue affected certain beta testers who had more than one Instagram account logged in on their device. For a few hours between June 4, 2018, and June 5, 2018, it caused some posts or stories published from one account to be posted to another account logged in on the same device. As a precaution, we encourage you to look at your profile and make sure any posts from June 4 and June 5 were shared from the intended account.",
                "Write alt text…",
                "Checkout in App",
                "SMS was resent.",
                "Add keywords, separated by commas",
                "Account Warning",
                "Nudity or pornography",
                "Map Data Legal Notices",
                "Learn More",
                "Terms",
                "Your backup codes can get you back into your account if you're unable to receive a security code via text or authentication app. Make sure you keep them in a safe place.",
                "Comment Filtering",
                "Profile Update",
                "Username",
                "Didn't get a security code? We can {=resend it} .",
                "Home",
                "We couldn't connect to Instagram. Make sure you're connected to the internet and try again.",
                "Don't use my contact info",
                "Log into an Existing Account",
                "Upload",
                "Former business names",
                "Settings",
                "Comments",
                "See this Instagram video by @{username}",
                "Get the full Instagram experience",
                "Your account is at risk of being disabled because it has shared multiple posts that have false information about COVID-19 or vaccines.",
                "Safari Mobile",
                "The PIN entered is incorrect. Please try again",
                "Limit Login Help Emails",
                "Can't Connect Now",
                "Skip",
                "Include your account when recommending similar accounts people might want to follow.",
                "We were unable to locate any businesses from your {applicationName} account. Please try again.",
                "Done",
                "Sound",
                "{firstUsername}, {secondUsername} and {remainingUserCount} more",
                "Appeal",
                "Something went wrong. Please try again from WhatsApp.",
                "SMS Sent Error",
                "Logging in lets you dig into lots more posts, profiles and hashtags.",
                "New Password",
                "Enter the confirmation code we sent to {phoneNumber}.",
                "Learn About Your Followers",
                "removed",
                "Reclaim Account",
                "You'll now get all login help emails.",
                "Block User?",
                "Back",
                "Confirmed just now",
                "Eating disorders, cutting or promoting suicide",
                "Uploading...",
                "Digital Advertising Alliance of Canada",
                "What This Means For Your Video",
                "We’ll be able to better personalize ads for you off Instagram, and measure their performance",
                "Tell Us",
                "Remove From Group",
                "Audio",
                "If you don't contact the content owner or remove your photo, the block may go into effect after {Date when the photo block will go into effect}.",
                "Cookie Policy",
                "Learn More",
                "Remove as Admin",
                "Circle Check",
                "Terms",
                "The PIN entered is incorrect. Please reset your PIN",
                "These cookies help other companies to share information with us about your activity on their apps and websites. We use the information we receive to help personalize and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance, and to provide services off of Facebook Products, like using Instagram or Facebook to log into other apps and websites.",
                "Instagram uses this to make some features work, personalize content, help people find places and more. You can always change this later in your phone's settings.",
                "Declined follow requests",
                "To continue, please re-enter your password",
                "Continue with the account you used before?",
                "Sign Up for Instagram",
                "Log in With Instagram",
                "January",
                "Download Your Data",
                "Are You a Business?",
                "Instagram logo badge",
                "Use Data To Watch",
                "Bio",
                "Terminations",
                "Dismiss",
                "Made to save space and data. Download for free on Google Play.",
                "Your Instagram Business Account is Ready",
                "OK",
                "Members",
                "Log in to load more comments",
                "· You aren't receiving a benefit from this donation",
                "Location icon.",
                "Contact",
                "You can only disable your account once a week.",
                "Mentioned you in their story",
                "Connect Contacts",
                "You'll need to enter your username and password the next time you log in as {username}",
                "Unblock {username}",
                "Learn More",
                "Block",
                "The group won't know it's been moved. You can move the group back to Primary any time.",
                "For a brief time in November, the issue prevented you from changing the privacy setting of your account from public to private. We fixed the issue, and your account is now private. You can review and edit your followers from your profile to be sure you are comfortable with the accounts following you.",
                "Filters",
                "Your photo matches a photo owned by someone else.",
                "Use the Instagram app to see and support this fundraiser.",
                "Advanced Settings",
                "Cancel",
                "Requests (99+)",
                "Music Questions",
                "Required",
                "Learn More",
                "Request Download",
                "Email:",
                "Full Terms",
                "We’ll be able to better personalize ads for you off Facebook Products, and measure their performance",
                "Active 1h ago",
                "To re-post your video, please agree:",
                "Remember",
                "Plus icon",
                "How to use hashtags",
                "Preview of pasted item",
                "Upload failed. {Try Again}",
                "tapping Donate",
                "I understand and wish to continue",
                "If you remove your phone number, you'll only get security codes from your authentication app.",
                "Liked by {username}",
                "Log in",
                "Add {amount} for free shipping",
                "Known As",
                "Chevron to select Self-Harm Help option component",
                "{Delete this video text bolded} to remove the video and any comments from your account.",
                "Upload a Video",
                "Log in to see more posts",
                "Unsaved Changes",
                "An item in your cart is no longer available.",
                "Are you sure?",
                "Remove Follower?",
                "Why are you reporting this account?",
                "Save",
                "Public Business Information",
                "When someone likes or comments on one of your posts, you'll see it here.",
                "Log in to view posts",
                "Change Password",
                "Mar",
                "Enter valid state",
                "{number of places} PLACES",
                "Added to bag",
                "Add Collection",
                "Block",
                "Thursday",
                "Get to Instagram quickly and easily by adding it to your Home screen.",
                "Video Settings",
                "{maxBadgeCount}+",
                "There was a problem accepting tester invite. Please try again later.",
                "Want more IGTV features? Try Creator Studio",
                "Instagram",
                "Message...",
                "Pictures & Videos",
                "No File Available",
                "We're very sorry this happened, and we'll continue to improve how we protect your information. To learn more about changing your password or keeping your account secure, you can {help center link}.",
                "Session updates",
                "Question",
                "userhelp@instagram.com",
                "You replied to their story",
                "Landscape (16:9)",
                "Contrast",
                "Ad settings",
                "Abusive Content",
                "Get notifications you may have missed.",
                "Tap to remove",
                "Continue as {fb_username}",
                "Accounts you follow",
                "Try Again",
                "Phone",
                "{text}",
                "Reason for rejection:",
                "Log in to watch again",
                "Forgot Password?",
                "Polls",
                "Fashion",
                "Confirmation Sent",
                "Get more advanced insights and reach more people with promotions.",
                "Crop",
                "Former profile photos",
                "Before you temporarily disable your account, you might want to take a look at these articles in our Help Center.",
                "Cover photo must be portrait instead of landscape.",
                "Get the App",
                "Me or someone I know",
                "See All Posts From {name}",
                "You'll get a code from your security app.",
                "{number of accounts} ACCOUNTS",
                "Enter New Email Address",
                "Leave",
                "Post Options",
                "We'll send a code to the number you choose.",
                "Sorry! We're having trouble verifying your email right now. Please try again later.",
                "Upcoming event icon",
                "This video is too long. To continue, choose a video that is one minute or less.",
                "Watch All",
                "Profile options",
                "Email Confirmation",
                "Skip",
                "You are about to remove {email} from your account. Please make sure this is correct before proceeding.",
                "Paid partnership",
                "You have no expired applications that had access to your Instagram account.",
                "Report inappropriate",
                "Create New Account",
                "Forward",
                "Document type",
                "To use less cellular data, photos and videos may appear at a lower resolution when you're off Wi-Fi and videos won't play automatically.",
                "Sep",
                "Edit Video",
                "Your friend is on Instagram as {username of the user who joined}",
                "Instagram takes safety seriously. If someone created an Instagram account pretending to be a celebrity, you can report it to us. Please enter the username of the person being impersonated below.",
                "Here is the file you requested with the information about your account {username}.",
                "Email",
                "Orders and Payments",
                "Please confirm the content you wish to appeal",
                "Top posts from # {hashtag} are currently hidden because the community has reported some content that may not meet Instagram's community guidelines. {link that reads learn more}",
                "Report a Problem",
                "Accept",
                "Text",
                "Item unavailable",
                "Details",
                "There was a problem opening the camera. Try again.",
                "Problem Creating Your Account",
                "Terms",
                "This shopping experience is only available in the Instagram app.",
                "Followed by {username}",
                "March",
                "You can start using the latest version of Instagram instead.",
                "Log in to comment",
                "For {fullname}",
                "Nothing is more important to us than the safety and security of the Instagram community. People put their trust in us by sharing moments of their lives on Instagram. So we will never make any compromises when it comes to safeguarding your data.",
                "Clear Search History?",
                "Try changing your settings later.",
                "Add",
                "Accept All",
                "Delete",
                "Thanks For Submitting Your Information",
                "Submit",
                "Read the Full Data Policy",
                "Submit",
                "Everyone",
                "99+",
                "Enter PIN",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. If you post something that goes against our guidelines again, your account will be deleted, including your posts, archive, messages and followers.",
                "Crop Square Icon",
                "Link expired",
                "You forwarded a message",
                "Mon",
                "Choose a reason for reporting this post. We won't tell {Medianame of the person being reported} who reported them.",
                "Follow Requests",
                "You can manage how different data is used to personalize ads with these tools.",
                "About us",
                "Email",
                "Next",
                "months",
                "Security Code",
                "Mobile Number",
                "more",
                "Cancel",
                "Upcoming event thumbnail",
                'Saved to "{collection name}".',
                "Reels",
                "Control",
                "Send to",
                "Posting Is Better in the App",
                "Tap to Refresh",
                "At Facebook, which builds Instagram, we believe that personalizing the content you see improves your experience. We use cookies and similar technologies to show you relevant content and to improve how our Products work.",
                "This message shouldn't be on Instagram",
                "There was an error and your video couldn't be posted.",
                "Something went wrong, please try again later.",
                "Discover People",
                "Enter your Instagram password to continue.",
                "Profile",
                "Unblocked {Username of current profile}.",
                "Enter the code we sent to {phone_number}.",
                "Other",
                "If you requested your information in an HTML format, you'll be able to navigate your files more easily by opening the index.html file first.",
                "Continue to Help Center",
                "You previously connected {application name} to your Instagram account.",
                "Submit a dispute",
                "Sale or promotion of firearms",
                "th",
                "Hashtags",
                "Your payment info is now connected across accounts. You can change this in Settings.",
                "Currently, you can only donate up to {donation amount limit, should not be translated since the rule is regulated in euro} in a single donation. Try lowering your amount or donate again when you are eligible.",
                "We can send you a login link to help you get back into your account.",
                "Round trip time",
                "Select Country",
                "Experience Life's Moments in Stories",
                "Poll",
                "Cancel",
                "Videos",
                "Learn More.",
                "We also have a new Data Policy that explains how data is collected, shared and used in the Facebook Products, including Instagram. The policy addresses newer features like stories, direct messaging, activity status and the creative tools in our cameras. We wanted to make sure you knew about this new information in the policy.",
                "Find People to Follow",
                "Unsaved Changes",
                "This video format isn't supported.",
                "Flag Product",
                "Confirm Your Info on the App",
                "Change Email Address",
                "If you remove your authentication app, you'll only get security codes by text message. You can add it back from the Instagram app.",
                "Cancel",
                "{username} said you were their parent or guardian.",
                "Share Anyway",
                "Belongs to an underage child",
                "Delete",
                "April",
                "Add your profile photo from Facebook",
                "Photos or videos of sexual intercourse",
                "Devices & Networks",
                "Requests ({count})",
                "Delete",
                "Switch to the app for more ways to filter, edit, and share your photos and videos.",
                "Instagram will be able to access {payment methods, delivery address, name, email} and {payment history} from Facebook.",
                "Reason for dispute",
                "Close Accounts Center",
                "Confirm your information using the Instagram app to try to get back to your account.",
                "Comments on this post have been limited.",
                "Graphic violence",
                "New Post",
                "Discard Photo?",
                "Video must be no more than {maxVideoSizeInBytes}GB",
                "Recovery Codes",
                "{previous items}; {last item}",
                "rd",
                "Log in using your Instagram account:",
                "Switch to the App",
                "Messenger",
                "Never Miss a Post About This Location",
                "Error",
                "Switch Accounts",
                "Accounts Center",
                "Open App",
                "Harassment or bullying",
                "IGTV is a new space to be creative and engage your audience with longer videos.",
                "• The app or website will be able to continue accessing the information you've shared with it. For example, if you allow an editing app to access your photos, the app is able to access new photos you add to Instagram.",
                "Save",
                "Submit",
                "Alt Text",
                "Search categories",
                "Remove From Saved and Collections?",
                "Get a Copy of Your Information",
                "There was a problem saving your profile.",
                "Please enter a valid email address.",
                "Company",
                "Follow {username} to like or comment.",
                "Facebook logo",
                "Follow your friends",
                "Email confirmation",
                "Cookie Policy (Required)",
                "Create a New Account",
                "{numberOfUsers} people are typing...",
                "People won't be able to view, like, or comment on your video in locations where it's blocked. Your video would only be visible in:",
                "Top Images and Videos",
                "New Phone Number",
                "Ads",
                "Authorization Request",
                "+ New Collection",
                "If you believe this content shouldn't have been removed, you can contact the complaining party directly to resolve your issue.",
                "Admin Approval Needed",
                "Click and drag to reorder",
                "Former email addresses",
                "See Trusted Devices",
                "Followed by {username1}, {username2}, and {username3}",
                "We'll send a code to ****{This is the last 4 digits of the user's phone number}.",
                "See {count} More Posts From {username}",
                "Create Channel",
                "Gamer",
                "Yesterday {Timestamp of the message}",
                "Confirm",
                "Visit Link",
                "Enter Your PIN",
                "Find people to follow and start sharing photos. You can change your username anytime.",
                "This post is unavailable.",
                "Someone You've Restricted is in This Group",
                "If you report someone's comment, Instagram doesn't tell them who reported it.",
                "General",
                "Address Line 2 (optional)",
                "Clip",
                "Copy Link",
                "{username}, we care about your privacy on Instagram, so we want to let you know that we recently found, and quickly fixed, a technical issue that impacted 124 Instagram accounts, including yours.",
                "Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.",
                "What Kind of Account Is This?",
                "Play",
                "Cookie settings",
                "This is required to log in and allows Instagram to:",
                "Log In to Get Your File",
                "The video labeled {filename} is too long for a gallery post. To continue, choose a shorter video.",
                "Show Activity Status",
                "Ineligible Account",
                "Billing Address",
                "Restore Video",
                "Follow Requests",
                "@generated",
                "Chats",
                "th",
                "Connection can't happen now. You can connect your payment info from Settings.",
                "Recent posts from # {hashtag} are hidden because some posts may not follow Instagram's Community Guidelines. {link that reads learn more}",
                "You acknowledge that you are a UK taxpayer and understand that if you pay less Income Tax or Capital Gains Tax than the amount of Gift Aid claimed on all your donations in the current tax year, it is your responsibility to pay any difference. You confirm that all of the above statements apply and confirm that you want to Gift Aid your donation.",
                "Due to ownership restrictions, your video is blocked worldwide.",
                "Other companies will receive information about you by using cookies",
                "If you have an Instagram account, you can manage how different data is used to personalize ads with these tools.",
                "Go Back",
                "We can only send you a new code every {time between requests in seconds} seconds.",
                "Log Out",
                "Add Phone Number",
                "Open App",
                "th",
                "Sorry! We're having trouble sending you a confirmation code right now. Please try again later.",
                "Comment",
                "Make Public",
                "Button: Select document type",
                "Enter PIN",
                "By submitting a dispute, you give the rights holder, {reference owner name} permission to review your photo and basic public information about your account. They will have {number of days} days to respond.",
                "Your Files Have Expired",
                "Facebook logo badge",
                "th",
                "{seconds} seconds ago",
                "When {Username of current user} posts, you'll see their photos and videos here.",
                "Install App",
                "Stories",
                "Gift Aid has been added.",
                "Seen by {count}",
                "Dec",
                "the Help Center",
                "· You've used your own money to make this donation",
                "the bag icon",
                "Forgot PIN?",
                "Share to Facebook",
                "Watch Live Video",
                "Change Phone Number",
                "{username} can show any of these questions on screen.",
                "We'll email you a link to a file with your information. You can receive it in HTML, which may be easier to view, or JSON, which may be easier to import to another service.",
                "{list of items} or {last item}",
                "Save",
                "If you're concerned about the recent update to our Terms and Data Policy, you can {press center post}",
                "Add Gift Aid to your donation.",
                "The file labeled {filename} is too large. To continue, choose a file under 1 GB.",
                "Report Inappropriate",
                "Undo",
                "Now you can create and share posts directly from your computer.",
                "Chevron icon to see Nomination media",
                "We'll send you a security code to get you back into your account.",
                "Extra Security With Facebook Pay",
                "Story {actionType} {prepositionType} {violationText}",
                "Video Call",
                "{learn more} in our Help Center",
                "Add Gift Aid",
                "Remove",
                "Your account has been temporarily disabled. To reactivate it, log back in.",
                "When you request a review, we'll review your post to determine if it violates our {communityGuidelinesLink}. All review decisions are final.",
                "Log in to see more",
                "Keyword",
                "Report as violence or threat of violence?",
                "Phone Number",
                "Suggested Profiles Directory",
                "Next",
                "Block this user?",
                "We've blocked the video you posted at {time of day} on {date} because it included the following content:",
                "Limit Password Reset Emails",
                "OK",
                "Learn more",
                "People viewed your video more than {viewcount} times.",
                "Seen {mins}m ago",
                "Report",
                "Add PayPal",
                "Submit an appeal",
                "Learn more about changing your username",
                "Birthdays",
                "Email, Phone, or Username",
                "Account Warning",
                "Replying to {username}",
                "Send a Photo of your ID",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink}. Even if you didn't mean to offend, our guidelines encourage people to express themselves in a way that's respectful to everyone.",
                "Report as self injury?",
                "Turning on Authentication App is not supported in the web now. Sorry for any inconvenience.",
                "Your contact info and payment method will be securely saved for next time.",
                "Create promotions on Instagram to help reach more people and build your community.",
                "1 other",
                "Instagram's terms",
                "Use the Instagram app to open a shop to easily sell your products from Spring.",
                "Get tips about Instagram's tools.",
                "Safari",
                "This information will be displayed on your profile publicly so people can contact you. You can edit or remove this information at any time.",
                "Cancel",
                "Stories Are Better in the App",
                "Keep",
                "Limit Login Help Emails",
                "Video file could not be read by this browser.",
                "Enter one of the 8-digit codes provided when you set up two-factor authentication.",
                "Help people discover your account by using the name you're known by: either your full name, nickname, or business name.",
                "Go back to Instagram.",
                "No Posts Yet",
                "Post",
                "Go to Profile",
                "Your video is blocked in all locations, which means people can't view, like, or comment on it.",
                "Get",
                "Posts of nude or partially nude children",
                "This voluntary survey conducted by the Univesity of Maryland (UMD) asks health questions to track the spread of coronavirus. It’ll take 3-5 minutes, and you’ll leave Instagram to take it.",
                "Add Facebook Photo",
                "To show you better ads, we use data that advertisers and other partners provide us with about your activity off Facebook Company Products, including websites and apps. You can control whether we use this data to show you ads in your {ad settings}.",
                "Enter a 6-digit login code generated by an authentication app.",
                "Other Ways You Can Control Your Information",
                "#{tag_name} hashtag on Instagram • Photos and Videos",
                "Your Account May Be Deleted",
                "Privacy",
                "Video File Unreadable",
                "Replied to a story highlight",
                "This comment is spam or a scam",
                "Get App",
                "There was a problem giving approval.",
                "ad settings",
                "Authorized by you on",
                "Tag Another Person",
                "Login Activity",
                "Hashtag",
                "Spinner placeholder",
                "Exploring is better in the app",
                "Decline?",
                "Add Extra Security With Two-Factor Authentication",
                "Deleting Comments",
                "Hide comments that contain commonly reported keywords from your posts.",
                "Email Sent Error",
                "Phone Number",
                "Next",
                "Accept cookies?",
                "Enter your username or email and we'll send you a link to get back into your account.",
                "Embed",
                "Instagram App",
                "Check your internet connection and try again.",
                "Back To Login",
                "1 week ago",
                "Videos must be between {minLengthInMinutes} and {maxLengthInMinutes} minutes long.",
                "{previous items}; {following items}",
                "Appeal",
                "Since you said this wasn't you, update your password to keep your account safe. You'll be logged out everywhere else, so anyone trying to get into your account will no longer have access.",
                "Log in to see photos and videos from your friends.",
                "For advertising and measurement services off of Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies. These companies also use cookies. You can learn more in our Cookie Policies on {Instagram} and {Facebook}.",
                "Posts or threats to post nude photos of you",
                "Image from {username}",
                "Aug",
                "Appeal to post photo",
                "Alt text describes your photos for people with visual impairments.",
                "You can review your off-Facebook activity, which is a summary of activity that businesses and organizations share with us about your interactions with them, such as visiting their apps or websites. They use our {Business tools}, such as Facebook Login or Facebook pixel, to share this information with us. This helps us do things such as give you a more personalized experience on Facebook. Learn more about {off-Facebook activity}, how we use it and how you can manage it.",
                "Sent. You're Finished!",
                "There was a problem resetting your password. Please try again soon.",
                "Emoji",
                "Some features on our products may not work",
                "Your instagram account was deactivated as part of an ongoing study. If you continue to log into your account, you may not be eligible for the deactivation payment you signed up for.",
                "Want to keep using this account?",
                "If you have permission to share everything in the video including the audio, like the soundtrack or music, you can appeal the block and have your video unblocked. Remember that people should only post videos they have the right to share. Posting content you don't own may result in action being taken against your account.",
                "other options",
                "Former links in bio",
                "Shop {name of the product} by {merchant user name} on Instagram",
                "Hashtags",
                "{username} won't know they've been moved. You can move them back to General anytime.",
                "Disappearing",
                "Privacy and Security Help",
                "The PIN entered is incorrect. Please try again.",
                "others",
                "Restrict",
                "Cookies Policy",
                "Copy Link",
                "We'll review your info and if we can confirm it, you'll be able to request a review in the Help Center within approximately 24 hours.",
                "We’ll remember your cookie choices and apply them anywhere you’re logged into Instagram or Facebook and where you use your accounts to log into other Facebook products. You can review or change your choices at any time in your cookie settings.",
                "Controls in Your Instagram Account",
                "Payments Gift Aid",
                "Change Privacy?",
                "Last 4 digits of SSN",
                "You can log into these accounts because they're in your Accounts Center.",
                "Get the App",
                "Delete",
                "Update Your App",
                "Allow Selected Cookies",
                "You've requested to follow {username}",
                "Write Alt Text",
                "Instagram decides which ads to show you",
                "Log in to view this Live video",
                "Photo for tag placement",
                "Log in to view likes",
                "Create Your Channel",
                "Account options",
                "Liked by {username} and {other users}",
                "Tag:",
                "Upload failed.",
                "Turn On",
                "There was an error submitting your bug report. Please try again later.",
                "Sign Up",
                "Sorry, this link is broken. To reactivate your account, log in with your username and password.",
                "Disable Two-Factor Authentication",
                "Are you sure?",
                "Change Photo",
                "In most cases, you'll be able to change your username back to {username} for another 14 days.",
                "Profile photo",
                "Be the first to {like this}",
                "Add New Video",
                "Enter 4-digit code",
                "Confirmation Code",
                "Please enter a valid email address.",
                "Violence or dangerous organizations guidelines",
                "Your Story",
                "Alternatively, you may submit an appeal by filling out {appeal form link}",
                "More camera effects. More stickers. More ways to message. Only on the app.",
                "No",
                "Get the full experience on Instagram Lite",
                "Seen just now",
                "{Submit an appeal text bolded} if you still believe this was a mistake and have permission to use this photo.",
                "Are you sure you want to remove this invite?",
                "Reminder that this video can still be seen in the following locations:",
                "The advertising companies we work with generally use cookies and similar technologies as part of their services. To learn more about how advertisers generally use cookies and the choices they offer, you can review the following resources:",
                "Restrict Account",
                "Removing Content From Your Explore",
                "We updated how we use information to show activity on Instagram, so people can see when you've interacted with an ad the same way we do on a regular post.",
                "Accounts following you",
                "Log Out",
                "By submitting a dispute, you give the rights holder, {reference owner name} permission to review your video and basic public information about your account. They will have {number of days} days to respond.",
                "Tag Another Person",
                "th",
                "Your shopping bag is only available in the Instagram app.",
                "Remove from Collection",
                "Log in to see more",
                "Settings saved.",
                "{count} like",
                "You'll control if others can see their new comments on your posts.",
                "{application name} would like to receive the following information about {username}:",
                "Log in to share",
                "• You can change this setting at any time in your {=cookie settings}.",
                "Yes",
                "Instagram filled heart",
                "If you report someone's profile, Instagram doesn't tell them who reported it.",
                "The effect is ready to be viewed in Instagram",
                "The best Instagram experience is on the app.",
                "Instagram respects the copyrights of others, and we prohibit users from uploading, posting or otherwise transmitting on Instagram any materials that infringe another party's copyrights.",
                "You’ll be logged out of apps and websites where you’ve used your Instagram or Facebook accounts to log in, and won’t be able to use your accounts to log back in",
                "Moved to General",
                "Play Count Icon",
                "New Video Post",
                "Never Miss Posts From {name}",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink}. Following our guidelines is the only way to prevent your account from being deleted, including your posts, archive, messages and followers.",
                "Approve This Comment?",
                "Email Address",
                "Eye icon on Facebook Pay learn more page",
                "1d",
                "Report account",
                "Discard Post?",
                "Enter your information",
                "Unblock {username}?",
                "Donation Visibility",
                "Edit Accounts",
                "By {action text}, you agree to our {payment terms}.",
                "Ad Report",
                "You need to log back in.",
                "Birthdays on Instagram",
                "Manage Accounts",
                "{name of the user who liked the photo} liked your photo.",
                "Your Facebook profile picture",
                "Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.",
                "Your Account Has Been Disabled",
                "Notifications",
                "Your dispute was rejected",
                "Simplified Messaging",
                "Retry",
                "Keep Your Nametag Clean",
                "A celebrity or a public figure",
                "Dismiss",
                "Choosing Who Can Reply to Your Story",
                "Visit",
                "You can allow the use of all cookies, or you can choose more options. We’ll remember your cookie choices and apply them anywhere you’re logged into Instagram or Facebook, and where you use your accounts to log into other Facebook Products. You can review or change your choices at any time in your cookie settings.",
                "{Bold text if your appeal for video is approved} the original video you shared won't be blocked.",
                "If you allow these cookies:",
                "Browse",
                "You have no sandbox invites from other applications",
                "Followers",
                "You can remove this video if you're not sure if you have permission to share any part of it.",
                "Log in",
                "OK",
                "Attach Evidence",
                "Community Guidelines",
                "You already have the maximum number of accounts saved. You can manage saved accounts when logged out.",
                "Clear searches you made for accounts, locations or hashtags on Explore.",
                "Profile Picture",
                "Switch to the app for better ways to create, share, and archive stories.",
                "If you don't recognize this activity, change your password.",
                "Typo?",
                "We use cookies to help provide, personalize and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance, and to provide a safer experience for you. You can learn more about how we use cookies in our Cookie Policies on {Instagram} and {Facebook}.",
                "Primary",
                "Log in to follow",
                "You and {username} are already following each other!",
                "Data Policy (Required)",
                "Select Event",
                "Connect to Facebook",
                "Include caption",
                "Photos of hate speech or symbols, like swastikas or white power hand signs",
                "Two-Factor Authentication",
                "Once you follow hashtags, you'll see them here.",
                "Are you sure you want to leave? Your video upload will be canceled",
                "Change Password",
                "Sent from: {sender_email}",
                "Find People",
                "Drag and Drop a Video File",
                "PIN Created",
                "Parental Approval",
                "Never Miss a Post With #{hashtag} Tagged",
                "You can only post content to Instagram if it doesn't violate the intellectual property rights of another party, including {trademarks}. Generally, trademark infringement occurs when:",
                "Directory",
                "Confirm Account",
                "Submit",
                "State",
                "Current browser",
                "The group won't know it's been moved. You can move the group back to General any time.",
                "Comments",
                "You previously logged into {application name} with Instagram.",
                "Collection Name",
                "Your photo was posted.",
                "Keywords saved.",
                "Delete Collection",
                "Home",
                "Block",
                "Connect to Facebook",
                "Street Address",
                "Use the latest version of the Instagram mobile app to set up In-Stream video ads and start earning money.",
                "Are you sure you want to delete this video from your story?",
                "Facebook Company Products",
                "Share via Email",
                "Reach more people by making your videos visible on IGTV and your Facebook Page.",
                "Date of birth",
                "By allowing, {=app name} will receive ongoing access to your information and Instagram will record when {=app name} accesses it. {=learn more} about this sharing and the settings you have.",
                "Item unavailable no photo icon",
                "Find More Accounts Like This",
                "We were unable to remove your account from Accounts Center. Please try again later.",
                "Enter the 6-digit code we sent to: {phone number}",
                "Learn More",
                "Where Your Video Will Be Blocked",
                "Video Has No Sound",
                "Unfollow {username} so you won''t see any of their photos, videos or story in your feed.",
                "Skip",
                "Harassment or bullying",
                "Ask for Approval",
                "View replies ({hidden replies})",
                "Nudity or sexual activity guidelines",
                "Electronic Signature",
                "Turn On",
                "Appeal",
                "Report",
                "Hate speech or symbols",
                "{category name, already translated} Accounts",
                "Link Facebook and Instagram accounts",
                "Rotate your device to add to your story.",
                "Switch to a Business Account?",
                "Emails From Instagram",
                "Cancel",
                "Your name will be shared with the organization receiving your donation. Instagram will send updates to this email address.",
                "Category",
                "Thank you for submitting your information",
                "Manage Contacts",
                "Get insights about your followers and see how your posts are performing.",
                "All Posts",
                "Continue",
                "First Name on your ID",
                "1 Person",
                "Sign up • Instagram",
                "You can share this photo as your first post.",
                "We sent an email to {email} with a link to get back into your account.",
                "Remove Photo From Instagram and Facebook?",
                "A celebrity or public figure",
                "Please take a moment to review some changes to our {termsLink} and {dataPolicyLink} . Your Instagram experience isn't changing, and you still own your photos and videos. We are giving you better ways to access your data and understand how it's used. By continuing to use Instagram on or after July 14, 2018, you're agreeing to these updates.",
                "1 PLACE",
                "More posts from {UserLink}",
                "Upload failed. Only images can be posted.",
                "Age Requirements",
                'Uploading "{videoTitle}"',
                "You won't be able to undo this. If you clear your search history, you may still see accounts you've searched for as suggested results.",
                "Change phone number",
                "Continue in browser",
                "{Contact content owner text bolded} if you believe you have the rights to use this content, contact {reference owner name} at {content owner email link}.",
                "Button: Select link type",
                "Incorrect Password",
                "Countries",
                "Live video",
                "The rights holder, {reference owner name} rejected your dispute because they believe the video contains their content.",
                "Delete All?",
                "Confirmation Code",
                "Remove an Account",
                "MM/YY",
                "Tagged",
                "If you have permission to share everything in the video including the audio, like the soundtrack or music, you can appeal the removal and have your video re-posted.",
                "Profiles",
                "See this Instagram post by @{username}",
                "These business apps are third party integrations with your business on Facebook that you've enabled. They can access information you choose to share with them and manage features for your Facebook business assets. Business apps maintain an ongoing connection with your business on Facebook. This business app (and those you have authorized to use it on your behalf) will be able to perform tasks until you choose to manually disconnect it.",
                "IGTV and Facebook Page",
                "Try logging in with your password. Once you log in, you can enable logging in across accounts in your Accounts Center.",
                "User ID",
                "Follow @{username}?",
                "Your video has been viewed more than {viewcount} times.",
                "You must select a photo ID file to upload",
                "About",
                "Please enter a valid email address.",
                "Confirmation Sent",
                "Get Started",
                "Enter PIN",
                "Don't Allow",
                "{username} + {othersCount} others",
                "Voice",
                "Sign up to see photos and videos from friends and discover other accounts you'll love.",
                "Month:",
                "Manage Facebook Pay",
                "Get Instagram App",
                "You cannot upload more than 10 files. Delete one or more files to upload another one.",
                "Locations",
                "Review changes to our Terms and Data Policy.",
                "Facebook Pay branding logo",
                "Use Instagram Lite",
                "Add Photo ID Icon",
                "How You Get Authentication Codes",
                "Only get login help emails from devices where you've used Instagram before. This setting will last for the next {days to snooze} days.",
                "Please explain why you believe this content should not have been removed.",
                "Post did not upload.",
                "Message Unavailable",
                "Something went wrong. Please try again.",
                "If you allow our use of these cookies:",
                "Profile photo added.",
                "Switch Account",
                "Camera effects, interactive stickers and private messages. Only on the app.",
                "Follow the link in the email we sent to {email} to confirm your email address and get access to your Instagram account.",
                "{count} active today",
                "Most Recent Pictures and Videos",
                "Copy Link",
                "Female",
                "They requested photos containing this content to be blocked everywhere except in the following countries where they own the rights:",
                "Policies",
                "Discover stories by logging in",
                "Seen",
                "Name",
                "Phone",
                "Not Now",
                "You replied to yourself",
                "Learn More",
                "Enter name and password",
                "Survey",
                "Sensitive Content Screens",
                "Accept Cookies",
                "Take Survey",
                "Search...",
                "th",
                "OK",
                "Crop Landscape Icon",
                "Birthdays",
                "You've blocked someone in this group. If you stay in this group, you'll be able to see their messages and they can see yours.",
                "download your data",
                "You won't need a code to log in.",
                "Event",
                "Cookies Policy",
                "Suggested",
                "Block",
                "Files must be over 1 KB.",
                "Add New IGTV Video",
                "{change-number} or {resend-sms}",
                "Register",
                "+{whatsapp phone }",
                "Upload Complete",
                "Square (1:1)",
                "Deleted",
                "{count} likes",
                "Sun",
                "th",
                "We remove posts that include copyright or trademark infringement. If someone is using your photos without your permission or impersonating you, we may also remove the content and disable the account. To learn more about reporting an intellectual property violation, visit our Help Center.",
                "See More Posts About This Location",
                "Here is the file you requested with the photos, comments, profile information and other data you've shared on Instagram as {username}.",
                "Enter Password",
                "Trusted Devices",
                "A verified badge is a check that appears next to an Instagram account's name to indicate that the account is the authentic presence of a notable public figure, celebrity, global brand or entity it represents.",
                "Not Now",
                "File must be smaller than {maxPhotoIdFileSizeMb} MB",
                "Switch",
                "Keyword Filters",
                "Tagged",
                "Login Activity",
                "Underage child",
                "You can create and react to stickers in the Instagram app. Enter your phone number and we'll send you a free download link.",
                "What You Can Do",
                "See All Suggestions",
                "ZIP Code",
                "Thanks!",
                "Create",
                "New Photo Post",
                "Change your name",
                "Update Your App",
                "Done",
                "User's Facebook profile picture",
                "Deselect All",
                "Instagram's Terms of Service prohibit children under 13 from using the app. We investigate each report. Providing false info may lead to your account being suspended.",
                "Not Now",
                "Learn about new Instagram features.",
                "Other ways you can control your information",
                "Followed by {username1}, {username2}, {username3} +{count} more",
                "This won't be a part of your public profile.",
                "This is a lock icon.",
                "Profile",
                "Instagram Lite",
                "Oct",
                "Learn more",
                "This comment shouldn't be on Instagram",
                "{fullName} on Instagram: “{caption}”",
                "Language",
                "Only people {story owner username} has added to their close friends list can see this video.",
                "Find Facebook Friends",
                "Confirm Your PayPal Log In for",
                "Collections",
                "Edit",
                "Our team will review the post and if it violates our {link_to_instagram_community_guidelines} or {link_to_instagram_terms_of_use} , we'll remove it.",
                "We won’t share information about who you are with UMD, and they won’t share your survey responses with us.",
                "Can't add this video. Video dimensions should be between 9:16 and 1.91:1.",
                "Video",
                "Enter confirmation code",
                "Facebook Page",
                "WhatsApp Already Added",
                "18 or older",
                "Unable to upload. Videos longer than 60 seconds are not supported.",
                "Facebook",
                "Terms",
                "OK",
                "You replied",
                "Connect your Instagram account {username} to your {applicationName} account. Your {applicationName} products will be imported to Instagram, and insights on your products’ performance will be shared with {applicationName}.",
                "Provide a safer experience for you and to analyze the use of our systems",
                "tapping Next",
                "Turning off two-factor authentication means you won't need to enter a security code when you log in.",
                "You already have the maximum number of accounts saved.",
                "You choose with friends to follow. We'll never post to Facebook without your permission.",
                "Switch to the app",
                "Accounts",
                "Video Sound On",
                "Accept Terms",
                "Make sure you are signed in to this accidental second account in order to avoid deleting your main account. You are signed in as {username} . If this is incorrect, {first log out} and then log in with the correct account.",
                "Get reminders about products in your shopping bag.",
                "If someone is in immediate danger, call local emergency services. Don't wait.",
                "Add your name so friends can find you.",
                "Reporting Comments",
                "Change Password",
                "Experience the best version of Instagram by getting the app.",
                "Commentary Account",
                "Terms of Use (Required)",
                "Your login, {emailOrPhone}, is used for both Facebook and Instagram, but they aren't linked. Link your accounts to log in more easily.",
                "Download Instagram Lite to send and receive messages on Direct.",
                "Clear",
                "If you temporarily disabled your account, logging in to change your password will not reactivate your account.",
                "{likes} likes",
                "Refresh suggestion",
                "Draft Failed to Save",
                "Tap photo to tag people.",
                "Options",
                "Open the report numbers below to learn more about why you were reported and what content was removed.",
                "In This Photo",
                "During our investigation of this issue, we noticed that you may have recently shared your Instagram password with another app. To keep your account secure, avoid sharing your password with third parties.",
                "Try logging in with your password. Once you log in, you can enable logging in with accounts in your Accounts Center.",
                "Use the latest version of the Instagram mobile app to set up IGTV ads and start earning money.",
                "Watch Now",
                'Follow the instructions provided by your website or mobile browser (usually located within the "Help", "Tools" or "Edit" facility) to modify your cookie settings. Please note that if you set your browser to disable cookies or other technologies, you may not be able to access certain parts of our Service and other parts of our Service may not work properly.',
                "Posts and commments promoting the use of hard drugs.",
                "Messages",
                "Download APK",
                "Like",
                "video",
                "If you're unable to use a security code from your backup codes, you can get one by {=resend it}",
                "Report as hate speech or symbols?",
                "A third party reported that your content infringes their trademark.",
                "Theme icon",
                "Block {username}?",
                "Authorized by you on {date}.",
                "Fri",
                "Play Store",
                "Profile",
                "Muted",
                "Terms",
                "Related:",
                "Cancel",
                "This undo couldn't be completed. Please check your network settings and try again.",
                "Self-harm (eating disorder, cutting, or suicidal content)",
                "Accessibility",
                "{hours}h",
                "Select a document type",
                "If your account goes against these terms again, it may be permanently removed, including your posts, archive, messages and followers.",
                "{previous items}, {following items}",
                "{username1}, {username2}",
                "Account Info",
                "Terms",
                "I Agree to the Terms",
                "Reactions",
                "OK",
                "{learnMoreLink} about Photos of You.",
                "No, Thanks",
                "View Collection",
                "Election pin icon",
                "We'll only use the information you submit to determine if your account meets our verification criteria.",
                "New Message",
                "Icon to represent media such as images or videos",
                "Confirmation",
                "Camera",
                "Two-Factor Authentication Is On",
                "There was a problem saving your settings.",
                "Keywords saved!",
                "Enter Amount",
                "Facebook Family Logo",
                "Active {hours}h ago",
                "{list of items} and {last item}",
                "Change Category",
                "No, Stay Deactivated",
                "Done",
                "Open Questions Modal",
                "Direct",
                "Reminder",
                "Suggested",
                "Your video could be blocked soon because it may contain music, audio or video that belongs to someone else.",
                "Link copied to clipboard.",
                "Unblock",
                "Remove",
                "Delete All",
                "Sorry, this page isn't available.",
                "Report a photo, video or comment",
                "{story owner username} will be able to see that you viewed their story.",
                "Like",
                "Report as intellectual property violation?",
                "Suggested",
                "Log in",
                "Blocked",
                "Discard Video?",
                "We need to delete your account because you said you were younger than 13. You can {download_your_data} so you have a copy of what you've shared on Instagram.",
                "You are no longer listed as the parent/guardian of {username} .",
                "Live {actionType} {prepositionType} {violationText}",
                "Use Facebook",
                "Please enter a smaller amount",
                "We'll save this info to make your next payment on Instagram easier.",
                "Enter Security Code",
                "There is no page for this original audio because the creator has a private account.",
                "Confirm Your Birthday",
                "IGTV Video Requirements",
                "Portrait (4:5)",
                "Edit",
                "We want to keep Instagram a safe place for everyone. We don't allow false information that could contribute to physical harm.",
                "Data Saver",
                "Yes",
                "Tag a person",
                "Add a contact button to your profile to make it easier for people to get in touch with you.",
                "Help us better understand the issues with this content.",
                "Loading suggestions…",
                "If your appeal is rejected",
                "Confirm",
                "We're having trouble reaching our servers. Please check your connection and try again.",
                "1 post",
                "On the app, you can keep up with all posts about this location.",
                "Instagram video by {fullName} • {datetime}",
                "Confirm Password",
                "Switched to Personal Account",
                "Birthday",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink}. If you learn and follow our guidelines, you can prevent your account from being deleted.",
                "{name of the user who tagged the other user in the photo} took a photo of you.",
                "Post {actionType}",
                "Thanks! You've resubscribed to Instagram's reminder emails.",
                "Community Guidelines",
                "Where Your Video Is Blocked",
                "Stories let you see what people are sharing in inspiring new ways.",
                "The issue, which started on November 19, 2018, caused the privacy setting of your account to switch from private to public. We fixed the issue and restored your account to private on November 20, 2018. If new accounts followed you during that time, we removed those followers.",
                "An update about your Instagram account",
                "Log in to see photos and videos from friends and discover other accounts you'll love.",
                "1 active today",
                "Post",
                "Video Failed to Post",
                "Go to the mobile app to learn about your followers with insights, display and edit contact buttons, reach customers with promotions and more.",
                "We've detected automated behavior on your account.",
                "Give Feedback",
                "You sent a post",
                "Like",
                "See Resources",
                "A temporary problem occurred when trying to complete your request. Please try again later.",
                "Add Photo or Video",
                "Connect Page",
                "Delete",
                "Up Chevron Icon",
                "Locations in {city name}, {country name}",
                "Shop",
                "Friday",
                "Seen by {username}",
                "Discover more free photos when you sign up.",
                "We'll now ask for a login code any time you log in on a phone or computer we don't recognize.",
                "Sorry, something went wrong loading your info from Facebook. We're looking into it. In the meantime, you can sign up through the app, or try again later.",
                "Product Unavailable",
                "Use {email suggestion} instead",
                "The security code you entered doesn't match {cardName}",
                "Close Application Install Modal",
                "Keep Reviewing",
                "I want to block a user",
                "Your bank needs you to answer a question before we can continue.",
                "Get help",
                "Unfollow @{username}?",
                "Turn Off",
                "90M",
                "Usertags",
                "Smileys & People",
                "Are you Sure you Want to Reactivate Your Account?",
                "Close",
                "This will be shared with {reference owner name} so they may contact you about your appeal.",
                "Log in With Instagram",
                "Start a Message",
                "Nametag Helps People Follow You Quickly",
                "{Delete this photo text bolded} to remove the photo and any comments from your account.",
                "Offers to buy or sell explosives",
                "Connect to Facebook",
                "Choose the option that best describes the purpose of your account. This will be visible on your profile and replace any existing or future categories.",
                "Your video will be blocked in all locations, which means people won't be able to view, like, or comment on it.",
                "1m",
                "Firefox",
                "No",
                "Instagram's Music Guidelines",
                "Access to this account has been restricted in your country for legal reasons",
                "Go to the mobile app to learn about {username}'s followers with insights, display and edit contact buttons, reach customers with promotions and more.",
                "• You can edit the information {app name} will receive. You may choose to go back to exit without sharing, but you may not use Instagram to log into {app name}.",
                "Paid partnership with {username of sponsor}",
                "Old Password",
                "th",
                "Cancel",
                "Switching to a business account will make your Instagram account public. Anyone will be able to see your content and all pending follow requests will be approved.",
                "Set Up Manually",
                "Comment icon",
                "Add Photos",
                "News emails",
                "Former usernames",
                "Remove Account?",
                "Move to General",
                "This video isn't supported.",
                "Video icon",
                "Enter your email, phone, or username and we'll send you a link to get back into your account.",
                "Payment",
                "Discover What You're Missing on the App",
                "View Thread Details",
                "'Button: Select country/region'",
                "Done",
                "Share Photos",
                "Share Longer Videos",
                "Log in to like",
                "Typing...",
                "Custom",
                "We’ll use information from other apps and websites to show you relevant ads, unless you have not provided consent to our use of data from partners for ads, or otherwise restricted our use of information from other apps and websites using either Data About Your Activity From Partners or your device settings, in which case we will continue to honor your choices.",
                "Switch to Instagram",
                "Let us know if you want to cancel this Gift Aid declaration, if your name or home address changes, or if you no longer pay sufficient tax on your income or captial gains.",
                "You can block them anytime from their profile.",
                "Tagged accounts",
                "Continue",
                "Your Instagram Creator Account is Ready",
                "Authorize",
                "Suggested Profiles",
                "Expired on {date}.",
                "trademark",
                "Public Business Information",
                "This is required for connecting to apps and websites, and allows Instagram to:",
                "By signing up, you agree to our {=Terms} , {Data Policy} and {Cookies Policy} .",
                "Thank you for helping keep the Instagram community safe and fun for everyone. Your report is anonymous, except if you're reporting an intellectual property infringement.",
                "Access to Your Content Has Been Restricted",
                "Change it",
                "Digital creator/blogger/influencer",
                "Switch to a Personal Account?",
                "It refers to a political candidate or issue",
                "Followed by {username} and {number of other users} others",
                "Continue as {facebook user name}",
                "Chevron icon",
                "Your report is anonymous, except if you're reporting an intellectual property infringement.",
                "All Categories",
                "Help Us Confirm Your Identity",
                "Allow Sharing",
                "- link opens in new window",
                "Save Draft",
                "OK",
                "Tap to tag people",
                "Key icon on Facebook Pay learn more page",
                "Allow Instagram to use cookies and similar technologies on other apps and websites?",
                "Notifications",
                "Discard Photo?",
                "By doing so, you'll authorize Facebook Pay to use your saved payment info for this and future payments on Instagram.",
                "Due to ownership restrictions, your video is blocked in the following countries where they own the rights:",
                "th",
                "They won't be able to find your profile, posts or story on Instagram. Instagram won't let them know you blocked them.",
                "Log In",
                "A new inbox makes it easier to manage message requests and connect with fans.",
                "Files must be under 1 GB.",
                "Continue with Facebook",
                "You can also {change_or_resend_link}",
                "Your password has been reset. Please try logging in again.",
                "Live",
                "Getting Started",
                "Posts",
                "Allow Instagram to use cookies and similar technologies on other apps and websites?",
                "You requested to delete {username}. If you want to keep it, you have until {date} to let us know. Otherwise, all your posts and information will be deleted. {help center link}.",
                "Clear Search History",
                "Your video matches {overlap duration} seconds of video owned by someone else.",
                "Learn more about Facebook Pay",
                "Done",
                "Creator",
                "Thanks!",
                "Street Address",
                "{username} wants to send you a message",
                "I Agree",
                "People can't view, like, or comment on your photo in locations where it's blocked. Your photo is blocked in:",
                "See Hashtag",
                "Access to your content has been restricted based on a report from a third party that the content violates their music rights or {communityGuidelines}.",
                "Payments are processed securely.",
                "Accessibility",
                "Messaging Is Better in the App",
                "False news icon",
                "Website",
                "Update Instagram Lite",
                "{Plus sign and plural indicating the number of user's remaining credit cards} more",
                "OK",
                "If you made a mistake, you can appeal this decision to let us know.",
                "Allow accounts you follow and anyone you message to see when you were last active on Instagram apps. When this is turned off, you won't be able to see the activity status of other accounts.",
                "Appeal",
                "Are you sure you want to delete this post?",
                "Nov",
                "Use the App",
                "Watch This Live Video on the App",
                "Learn More",
                "Security Code",
                "Your video must be between half a second and {maxDurationInMinutes} minutes long, landscape or portrait, an MP4 file and less than {maxVideoSizeInGigabytes} GB.",
                "Supported file types: image/jpeg, image/png, video/mp4 and video/quicktime.",
                "A Note About Your Password",
                "{Submit a dispute text bolded} if you have permission to use all the content in your photo. By submitting a dispute, you give {reference owner name} , who has issued this claim, permission to review your photo. They can also review the entire post, if you've shared it publicly. They will have 7 days to respond.",
                "Go to Feed",
                "Your Instagram username and browser information will be automatically included in your report.",
                "If you're unable to receive a login code from an authentication app, you can use one of your {=backup codes}",
                "Details",
                "Lock icon",
                "URL",
                "Back",
                "Photo",
                "Self injury",
                "The video labeled {filename} is too long. To continue, choose a shorter video.",
                "Email is invalid",
                "Add Profile Photo",
                "LEARN MORE",
                "We understand that you may be too busy to use Instagram and suggest removing the application from your phone through the following steps:",
                "Thanks! You've resubscribed to Instagram's research emails. We will include you in future feedback projects.",
                "Your contact info makes it easier for people to email, call or take an action from buttons that will appear on your profile. You can display or hide these anytime.",
                "N/A",
                "{username}'s profile picture",
                "Reels",
                "This is you!",
                "ID Photo",
                "{likes} like",
                'Remove all posts from your account that have notices about false information related to COVID-19 or vaccines in the next 48 hours to avoid being disabled. These posts are covered with a dark background that says "False Information" and either "COVID-19" or "vaccines" on them. If you do not remove these posts within 48 hours, or if your account continues to share false information about COVID-19 or vaccines, it will be disabled.',
                "Download Information",
                "Instagram",
                "Press",
                "We want to show you ads from businesses that are interesting and relevant to you. Learn more about how {business} .",
                "We remove:",
                "Intellectual property violation",
                "Edit Profile",
                "Enter the 6-digit code generated by your authentication app.",
                "See more information about coronavirus (COVID-19) from the World Health Organization. {Learn more}",
                "Story {actionType}",
                "View Story",
                "You can use an authentication app to quickly generate security codes without a text message.",
                "Please provide any additional details.",
                "Drug use",
                "{instagram business name}",
                "By {action text}, you agree to our {Terms} and {Policies}.",
                "It looks like your account could be confused with another verified account. You need to add info to your profile so people don't mistake you for the brand, celebrity or organization they're looking for.",
                "Added",
                "This account is private. Follow to see photos.",
                "Warning icon glyph",
                "Removing this from saved will also remove it from collections.",
                "Terms",
                "People you follow",
                "IGTV",
                "We work hard to protect the password you use for your Instagram account. We recently discovered that, when you used the Download Your Data tool, your password may have been displayed in the URL in your web browser once your data was downloaded, as well as stored in our systems. We have now changed the tool so this no longer happens, and we are deleting passwords that may have been logged by our internal systems. Nothing we see suggests anyone else used your password. Just to be safe, you may want to {link} on Instagram, as well as anywhere else you use the same password. You may also want to clear your browser history.",
                "Give feedback on Instagram.",
                "Posting spam",
                "Free Photos from {carrier name}",
                "Post deleted.",
                "Something went wrong. Try again in a few minutes.",
                "Your account has been logged out of a session in {location} on {device}",
                "{count} Requests",
                "Upload failed.",
                "Discover",
                "Create your channel to start sharing longer videos with your Instagram audience.",
                "We need to delete your account. You can download your data within the next 14 days so you can have a copy of what you've shared on Instagram. You can also {appeal this decision}",
                "You can continue using Instagram to log into other apps and websites",
                "Choose a video to upload.",
                "Contact",
                "Accounts you blocked",
                "Post unavailable eye off icon",
                "I'm not their parent/guardian",
                "The last {number of files} files were not uploaded. You cannot choose more than 10 to upload",
                "Feedback Emails",
                "We've started creating a file of your information and will email a link to {email address} once it's ready. It may take up to 48 hours to collect this information and send it to you.",
                "Your account doesn't follow the Partner Monetization Policies.",
                "Select From Computer",
                "This profile already has a WhatsApp number as a contact option. If you continue, that number will be replaced by +{whatsapp phone }.",
                "Card icon on Facebook Pay learn more page",
                "Thanks! You've resubscribed to Instagram's product emails.",
                "two right facing rainbow colored chevron, indicating this product is supported for native checkout",
                "Your Carrier",
                "Instagram Lite Is No Longer Supported",
                "News article",
                "Story by {username}, not seen",
                "Delete",
                "• Choosing 'Allow' will not affect your current settings for apps and websites in your Ad Preferences or device settings.",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. Our guidelines are based on our global community, and some audiences may be sensitive to different things.",
                "Turn This Off?",
                "Save",
                "We monitor payments on Instagram to detect unauthorized activity.",
                "Limit Password Reset Emails",
                "{app_name} uses your information to improve your experience. To learn more about how an app can use this information, view their {privacy_policy} . If you contact this app to get support or provide feedback, they may need your User {asid}",
                "PIN doesn’t match. Please try again.",
                "Posted {A timestamp that states how long ago this media was posted.}",
                "Optional Cookies",
                "Reporting Content You Don't Like",
                "Contact Us",
                "Enable Location Services",
                "Next",
                "Done",
                "Got it",
                "Dropdown",
                "Credit or Debit Card",
                "Allow Only Essential Cookies",
                "Report as spam?",
                "Interested in IGTV Ads?",
                "Symbols",
                "Video must be between {minDurationInSeconds} and {maxDurationInMinutes} minutes long.",
                "We removed your content because a third party reported that it infringes their intellectual property rights.",
                "Rotate",
                "With Facebook Pay, you can use payment info from your linked Facebook account for faster checkout.",
                "Confirm Instagram Account",
                "Your Facebook friend {name of the contact who joined} is on Instagram as {name of the user who joined}",
                "Log In:",
                "Comments",
                "Are You a Creator?",
                "Block {username} if you don't want them to see your photos, videos or story or find you on Instagram.",
                "You can use your ad preferences to learn why you’re seeing a particular ad and control how we use information that we collect to show you ads.",
                "Business Categories • Discover business accounts by category on Instagram",
                "checkmark",
                "Unblocked",
                "Force reset password icon",
                "Me",
                "warning icon",
                "You requested to delete {username}. If you want to keep it, you have until {date} to let us know. Otherwise, all your posts and information will be deleted. {Learn More}",
                "Report as sale or promotion of firearms?",
                "We don’t sell your information to anyone. Learn more about cookies and how we use them in our Cookie Policies on {Instagram} and {Facebook}.",
                "We can send you an email to help you get back into your account.",
                "Choose a reason for reporting this account. We won't tell {Username of the person being reported} who reported them.",
                "WhatsApp Added",
                "Page Not Found",
                "It's violent or prohibited content",
                "View Profile",
                "Thank you",
                "Your name",
                "{Submit a dispute text bolded} if you have permission to use all the content in your video. By submitting a dispute, you give {reference owner name} , who has issued this claim, permission to review your video. They can also review the entire post, if you've shared it publicly. They will have 7 days to respond.",
                "Guide",
                "Find a location",
                "{amount} · {count}",
                "Uses less space. Free on Google Play.",
                "Start Saving",
                "Your video doesn't meet requirements.",
                "Preparing video. We'll notify you when it's ready.",
                "November",
                "Professional account settings saved.",
                "Best for public figures, content producers, artists and influencers.",
                "Full Name",
                "Report Under CPA",
                "{duration} Remaining",
                "Are you sure you want to delete your contacts from Instagram?",
                "Allow All Cookies",
                "Dispute block",
                "hours",
                "See Post",
                "Confirm",
                "See More of the Conversation",
                "Previous",
                "Because you are under 18, you will need to contact us to update your birthday for Instagram",
                "Yes",
                "Delete Post?",
                "It's a scam or it's misleading",
                "This conversation shouldn't be on Instagram",
                "Tags",
                "{Restore this video text bolded} if you think this is a mistake and you have permission to use all of the content in your video. Your video will be posted as is.",
                "This means we won't be able to review your post again, though your feedback helps us learn as we build tools to keep our community safe.",
                "When you follow people, you'll see the photos and videos they post here.",
                "They will now be able to see your posts and follow you on Instagram. Instagram won't let them known you unblocked them.",
                "{Submit a dispute text bolded} if you have permission to use all the content in your video. By submitting a dispute, you give {owner name}, who has issued this claim, permission to review your video. They can also review the entire post, if you've shared it publicly. They will have {number of days} days to respond.",
                "Support",
                "Settings icon",
                "Thank you! You're all set.",
                "Offers to buy or sell firearms and ammunition",
                "• Receive information about your activity from apps and websites to help personalize content, serve relevant ads and provide a safer experience",
                "Home & Garden",
                "Got it. You've unsubscribed from Instagram's reminder emails.",
                "Review Blocked Video",
                "Type",
                "WhatsApp is now a contact option on your {whatsapp business name} profile.",
                "Please attach a photo of your ID",
                "Your photo lets your friends know it's you.",
                "Remove Authentication App?",
                "Shield icon on Facebook Pay learn more page",
                "Shopping Icon",
                "Add file",
                "We weren't able to connect your account using the info you provided. You can still enter your payment information to check out.",
                "No one has seen this yet.",
                "Report this account for impersonating a celebrity?",
                "Required",
                "Add Profile Photo",
                "Last Name on your ID",
                "The last file was not added. You cannot choose more than 10 to upload.",
                "Some cookies are essential to use our services. To continue to Instagram, review the available cookie controls and make any optional selections you’d like before accepting below.",
                "Watch Again on the App",
                "We noticed unusual activity from your account so we've logged you out.",
                "Zip Code",
                "Enter the 6-digit security code we just sent you to verify your account.",
                "Send Email",
                "View Map Info",
                "Your privacy is very important to us and we're constantly working to ensure that issues like this don't occur. If you have any questions, please contact us at {email}.",
                "Reminder that this photo is blocked in the following locations:",
                "Expired",
                "View Guide",
                "Your Followers",
                "New Post",
                "If you don't contact the content owner or remove your video, the block may go into effect after {Date when the video block will go into effect}.",
                "Your Story Goes Against Our Community Guidelines",
                "Sign up",
                "See More Posts",
                "Enter your PIN again to confirm.",
                "resend the code",
                "For advertising and measurement services off of Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies. These companies also use cookies. You can learn more in our {Cookie Policy}.",
                "Finding notable accounts to follow",
                "{Learn more} about how you can use music on Instagram.",
                "Follow this account to see their photos and videos",
                "The file you've selected is not supported.",
                "Please explain in detail why you believe your dispute should've been approved.",
                "{count} view",
                "Already follow {username}? Switch to the app or log in to see their photos and videos.",
                "Specific threats of physical harm, theft, vandalism or financial harm",
                "Review Blocked Photo",
                "Submit",
                "We're sorry, but something went wrong. Please try again in a few minutes.",
                "{instagram business category}",
                "Don't like this profile?",
                "What you should know:",
                "Couldn't link to Facebook",
                "Show posts",
                "Get Reminder",
                "Thanks For Letting Us Know",
                "All Suggestions",
                "{count} views",
                "For offering opinions on a brand, celebrity or organization",
                "Done",
                "Continue for free Wi-Fi",
                "Hashtags",
                "Add Extra Security With a PIN",
                "Create a test Instagram Account to set up a test Facebook Shop.",
                "View as {story viewer username}?",
                "Not Now",
                "Change Password",
                "Delete tagged user",
                "Connecting to Facebook will help you and others find friends.",
                "Dance",
                "Business phone number",
                "Just need a break",
                "",
                "Confirm",
                "Done",
                "Start Sharing to IGTV",
                "Your Account May Be Deleted",
                "Live Video",
                "See All",
                "Without cookies from other sites, Instagram may not be able to embed tools from other websites that enable these features and help improve your experience.",
                "Show More Posts from {username}",
                "Monday",
                "Your Video Has Been Blocked",
                "Network type",
                "Share to Messenger",
                "Save login info",
                "Cancel Reminder",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. We have these guidelines because violence can make some people feel unsafe on Instagram.",
                "Choose a category that best describes what you do. You'll have the option to display or hide this on your profile.",
                "Spam",
                "Ratings For the App",
                "Use Direct on Instagram Lite",
                "See All",
                "Active {mins}m ago",
                "· You are a UK taxpayer",
                "Create New Account",
                "{username} is active now",
                "Parent/Guardian Last Name",
                "Log in for more posts",
                "Ads icon",
                "Your ability to receive or make payments will be paused until we have confirmed your identity.",
                "See More Posts From {name}",
                "Did you know your VKontakte friend {full name of the contact who joined} is on Instagram as {username of the user who joined}?",
                "Cancel",
                "Try Again",
                "Former business phone numbers",
                "Just a moment...",
                "backup codes",
                "Auto-Generated Captions",
                "National identification card",
                "PM",
                "Frequently Used",
                "Ads Interests",
                "We'll now ask for a login code any time you log in on a phone or computer we don't recognize.",
                "1 minute ago",
                "Customizing Your Experience",
                "Linked to Facebook as {name}",
                "Take a Survey for COVID-19 Health Research",
                "Added on {Added at authorizedAt time}",
                "Top posts",
                "Allow Comments From",
                "Remove Account",
                "Date Upgraded to Cross App Messaging",
                "Review Your Contact Info",
                "{Bold text if your appeal for video is approved} the original video you shared will be restored to your account.",
                "Just one more step",
                "Turning this on means we'll send you a security code when we need to confirm that it's you logging in.",
                "Follow Back",
                "Add a profile photo so your friends know it's you.",
                "nd",
                "Gender",
                "Edit Draft",
                "Find More Features on the App",
                "Regulated goods",
                "Report as harassment or bullying?",
                "Add Extra Security With a PIN",
                "Add an official identification document for yourself or your business.",
                "Facebook Products",
                "Edit Profile",
                "The issue, which started on April 5, 2018, caused the privacy setting of your account to switch from private to public. We fixed the issue and restored your account to private on April 9, 2018. If new accounts followed you during that time, we removed those followers between April 9 and April 10.",
                "Community Guidelines",
                "City/Town",
                "Cancel",
                "report",
                "It's spam",
                "Get the full experience.",
                "Free Photos from {carrier name}",
                "{Copyrighted album or song name} by {Copyright owner}",
                "This includes information that recognized organizations with local or international knowledge have told us could incite violence or cause physical harm off Instagram.",
                "{count} likes",
                "Report {username} for impersonating a celebrity?",
                "Because you reported {The username of the account being reported} 's profile, we've also blocked the account.",
                "Broken link",
                "Comment {actionType}",
                "Get Started",
                "Edit ID photo",
                "We weren't able to connect your account using the PIN you entered. You can still connect by entering the security code for {cardName} that you used on Facebook.",
                "We have fewer reviewers available right now because of the coronavirus (COVID-19) outbreak. We're trying to prioritize reviewing content with the most potential for harm.",
                "• Securely connect with apps and websites to log you in with your Instagram account",
                "Search",
                "Cancel",
                "Send Report",
                "Chevron icon to see cookie consent section",
                "Graphic injury, unlawful activity, dangerous or criminal organizations",
                "Quick Reactions",
                "The issue affected some Facebook and Instagram employees who had more than one Instagram account logged in on their device. Between June 1, 2018, and June 5, 2018, it caused some posts or stories published from one account to be posted to another account logged in on the same device. As a precaution, we encourage you to look at your profile and make sure any posts from June 1 - June 5 were shared from the intended account.",
                "Locations in {city name}",
                "Find People",
                "Moved to Primary",
                "API",
                "Log In Again",
                "Block this user",
                "Direct Messaging icon",
                "New Post",
                "When you log in and follow them, you'll see every post they share.",
                "Profile Completed",
                "Sent!",
                "Start capturing and sharing your moments.",
                "Location",
                "Stories Activity",
                "Why are you reporting this conversation?",
                "{username}'s profile picture",
                "Voice Message",
                "Why are you disabling your account?",
                "@{username} • Instagram photos and videos",
                "Report",
                "Questions",
                "If your appeal is rejected",
                "Delete Chat",
                "Something else",
                "Some experiences that won’t work without cookies from other companies include posting gifs in posts and comments, and viewing videos.",
                "Inbox",
                "{days}d",
                "Once you're connected to Wi-Fi, you can also explore the business's Instagram account.",
                "Your General Messages",
                "Previews Have Been Turned On",
                "Apply for Instagram verification",
                "These {numMessages} messages will be deleted.",
                "Add Automatically",
                "This info will be saved with Facebook Pay, and will be available for you to use on Instagram, Facebook and Messenger.",
                "All monetized videos must include previews. Previews appear on feed and your profile.",
                "Push Notifications",
                "Use Default Keywords",
                "Instagram keeps your personal information safe. Agree to all terms to create a new account.",
                "Your Video Has Been Removed",
                "Forgot your password?",
                "Done",
                "Add Phone Number",
                "nd",
                "Terms of Use",
                "To unblock your video, please agree:",
                "Feb",
                "You can't sign up for Instagram based on the information you provided.",
                "{whatsapp business name}",
                "Hi {username} ,",
                "Explore",
                "Learn More",
                "Previews appear on your profile and feed",
                "Failed to add to bag",
                "Tell us why",
                "Remove File",
                "By using this embed, you agree to Instagram's {apiTermsOfUseLink} .",
                "What is the DMCA, and how does it affect me?",
                "{name of the user} mentioned you in a comment: {comment text from user}",
                "Contact Info",
                "Get Instagram Lite",
                "Choose a Security Method",
                "Delete Chat?",
                "Next",
                "No posts",
                "Toggle selection",
                "Leave Without Reviewing?",
                "Because the policy also covers Facebook, it includes information about facial recognition. We don't use facial recognition technology on Instagram. If we introduce it, we'll let you know and give you a choice.",
                "Download Your Data",
                "Authentication App Confirmed",
                "Cancel",
                "Continue as {username}",
                "Like friends' posts, share your moments, and discover accounts to love.",
                "Download the app to start sharing photos and videos.",
                "{scope description}",
                "{full_name} (@{username}) • Instagram photos and videos • Page {page}",
                "We've started creating a file of things you've shared on Instagram and will email a link to {email address}. It may take up to 48 hours to collect this data and send it to you.",
                "Delete Photo",
                "• Apps and websites may request access to the information you've shared from Instagram. These requests are automatically logged by our systems and are not controlled by your device settings.",
                "Video is Too Long",
                "The policy has more information about what we collect from your activity and our partners, how we connect information across the Facebook Companies and how we personalize your experience, including ads.",
                "Follow the next steps within 1 day so we can try to get you back into your account before it's disabled.",
                "Followed by {username}",
                "Discard Draft",
                "{Learn more} about what we remove.",
                "Agree to all {(plural) number of terms} terms and conditions",
                "No",
                "OK",
                "Follow the next steps to help us remove the restrictions on your account.",
                "Discard Video?",
                "Cart",
                "Contact Content Owner",
                "Remove",
                "Other",
                "You can choose to hide or display contact info and buttons on your profile.",
                "Yes",
                "You sent {username}'s story highlight",
                "Discover People",
                "Remove",
                "You have restricted {username}",
                "Log In With Google",
                "Delete Comment",
                "• The connection allows the app or website to authenticate your account and receive information that you may choose to share, like your photos.",
                "Business Accounts",
                "Tagged People",
                "Your Comment Goes Against Our Community Guidelines",
                "Activity Feed",
                "Free Shipping",
                "Made to save space and data. Free on Google Play.",
                "{count} following",
                "Add Location",
                "Are you having a problem with {username}?",
                "Learn more about cookies and how we use them in our {Cookie Policy}.",
                "Switch to the app for a better way to find what you love.",
                "Connect to Facebook",
                "{username} is typing...",
                "Phone Number",
                "More",
                "Connect to Facebook to find friends to follow.",
                "Privacy",
                "Countdowns",
                "Email (Optional)",
                "Managing Your Account",
                "Seen by {firstUsername}, {secondUsername} + {remainingUserCount}",
                "People You Follow",
                "th",
                "Find it for free on Google Play.",
                "Edit Collection",
                "We've noticed unusual activity from your account and have temporarily restricted certain actions until {date on which the restriction enrollment expires}.",
                "Locate the Instagram application.",
                "Age",
                "{Bold text if your appeal for photo is approved} the original photo you shared will be restored to your account.",
                "Fan Account",
                "You can only post content to Instagram if it doesn't violate the intellectual property rights of another party, including {copyright}. The best way to ensure your content doesn't violate copyright law is to only post content you've created yourself. Your use of someone else'scontent may still be infringing their copyright, even if you:",
                "Add a comment…",
                "Connect With Your PayPal Account?",
                "Followers",
                "Submit",
                "In This Video",
                "Unfollowed",
                "resend it",
                "Filter: {filter title}",
                "People can scan your nametag with the Instagram camera to easily follow you. Download and print your nametag, then stick it on your products, posters and more.",
                "View Post",
                "We sent the confirmation code to your number ending in {phone_number}",
                "Phone Number",
                "API Terms of Use",
                "LIVE FUNDRAISER",
                "• {app name} may use what you share for user identification and other purposes as per its {=term} and {=privacy} during its service period.",
                "Delete Comment",
                "The link we sent to {email address} only works for four days. You can request another copy of your data.",
                "You are otherwise allowed to use the content. For example, you are claiming a fair use of the material or the content is in the public domain.",
                "Effects",
                "See Facebook Payments Terms",
                "Ask Parent/Guardian",
                "Security Verification",
                "If you remove {name}, it may delete your {name} account and activity. {name} may also still have access to info you previously shared, but can't make additional requests for private info.",
                "Switch to Professional Account",
                "Follow Requests",
                "• Securely connect your Instagram account to other apps and websites",
                "Racist, homophobic or sexist slurs",
                "See more by logging in",
                "By submitting a dispute, you give the rights holder, {reference owner name} , permission to review your video and basic public information about your account. They will have 7 days to respond.",
                "Instagram from Facebook",
                "Continue as {username}",
                "See this Instagram photo by @{username}",
                "Delete All",
                "Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.",
                "An error occurred. Please try again.",
                "Your photo was added.",
                "Your video doesn't meet requirements. {Learn More}",
                "{Log in} to like this",
                "{username} wants to let us show them ads based on more of their interests. We learn about people's interests based on their activity across Facebook Products. If you don't approve, {username} will still see the same number of ads but they may be less relevant.",
                "View Insights",
                "Related categories",
                "Profile",
                "Change Password",
                "Not Specified",
                "Trusted Devices",
                "Temperature",
                "Log Out?",
                "Likes",
                "Likes",
                "Instagram photo by @{username} • {datetime}",
                "Suggested for You",
                "Unfollow",
                "Review and Agree",
                "Details of Appeal",
                "INFO YOU'RE SHARING WITH THIS APP",
                "Video Glyph",
                "Phone confirmation",
                "Saturday",
                "Delete this photo",
                "Open shopping menu",
                "Blocking Accounts",
                "Select a State",
                "Choose File",
                "Reminder that this photo is blocked in all locations.",
                "This message puts people at risk",
                "Go Back",
                "Change username",
                "You blocked {username}.",
                "Video has no audio.",
                "{count} followers",
                "Select a category",
                "Share",
                "Submit",
                "Hide replies",
                "Photos of You",
                "See More Photos From {name}",
                "Birthdays on Instagram",
                "Select a Category",
                "Security Code",
                "See {other options}",
                "Reset",
                "Find it for free on the Windows Store.",
                "Please select an option.",
                "Former business addresses",
                "Proactive Fraud Monitoring",
                "Notification sent",
                "• If you would like the information we receive from apps and websites to only be shared with Instagram, remove your Instagram and Facebook accounts from {=accounts center}.",
                "Available on the App Store",
                "Cities in {country name}",
                "Forgot Password?",
                "Dismiss",
                "These messages are from people you've restricted or don't follow. They won't know you viewed their request until you allow them to message you.",
                "Confirm new password",
                "Show Less Removed Content",
                "Get Instagram Lite",
                "We receive different kinds of information from your device, like how you tap and scroll, which can help distinguish humans from bots and detect fraud.",
                "Posts that contain credible threats",
                "We use cookies to help personalize content, serve relevant ads and provide a safer experience. Learn more about cookie uses and controls in our {Cookie Policy}. You can review your controls at any time.",
                "Think we made a mistake?",
                "Now",
                "Sorry, something went wrong creating your account. Please try again soon.",
                "Former bio texts",
                "th",
                "Trust this device",
                "Think this is an unauthorized use of your intellectual property? {link_to_learn_how_to_report_it}",
                "Add Extra Security to Your Account",
                "Switch To a Professional Account to Continue",
                "and",
                "This is required to log in and allows:",
                "Sorry! We're having trouble verifying your confirmation code right now. Please try again later.",
                "We'll review your info and if we can confirm it, you'll be able to access your account within approximately 24 hours.",
                "Category",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink} on {violationText}. Following our guidelines is the only way to prevent your account from being deleted, including your posts, archive, messages and followers.",
                "WORK",
                "Log In to PayPal",
                "Error",
                "If you're unable to receive a security code by text message, you can get one from your {=auth app codes} or use one of your {=backup codes}",
                "Finish removing comments",
                "Back to Login",
                "1 Follower",
                "You can log in with your linked Facebook account.",
                "Something went wrong. Please try again.",
                "Would you like to continue sharing information about {username}?",
                "We removed your {contentTypeText} because it goes against our {communityGuidelinesLink}. If you post something that goes against our guidelines again, your account will be deleted, including your posts, archive, messages and followers.",
                "Something Went Wrong",
                "View {PayPal Policy} and your payment method rights.",
                "Anyone will be able to see your photos and videos on Instagram. You will no longer need to approve followers.",
                "Only get password reset emails from devices where you've used Instagram before. This setting will last for the next {days to snooze} days.",
                "Select Post Link",
                "th",
                "Preparing Draft",
                "Forgot PIN?",
                "Ways to Use Nametag",
                "You can only change your name twice within 14 days.",
                "Photo Outline Icon",
                "Paused",
                "Log in to view this story",
                "We have fewer reviewers available right now and are trying hard to prioritize reports with the most potential for harm.",
                "You're All Set!",
                "Learn More",
                "pm",
                "Enter Code",
                "Settings",
                "The people listed here are contacts you've uploaded to Instagram. To remove your synced contacts, tap Delete All. Your contacts will be re-uploaded the next time Instagram syncs your contacts unless you go to your device settings and turn off access to contacts.",
                "Username",
                "You won't be able to confirm some payments until you reset your PIN.",
                "Create New Account",
                "Get a new code",
                "Image is blurred to protect you from unwanted content.",
                "Cookies",
                "We use spam reports as a signal to understand problems we're having with spam on Instagram. If you think this account violates our {link_to_instagram_community_guidelines} or {link_to_instagram_terms_of_use} and should be removed, mark it as inappropriate.",
                "Request Not Completed",
                "Close Friends Only",
                "Cancel",
                "Upon submission of an effective DMCA counter-notification, we will promptly forward it to thereporting party. If the reporting party does not notify us that they have filed an actionseeking a court order to restrain you from engaging in infringing activity on Instagramrelated to the material in question within 10-14 business days,we will promptly restore eligible content under the DMCA.In rare instances, we may not be able to restore content due to technical limitations. In that event,we'll send you an update letting you know you may repost the content to the site at your discretionAn effective DMCA counter-notification must contain your name, address andtelephone number, among other information, and the party who reported your content can usethat information to assist them in filing an action against you in court. This means that Instagramis required to pass the contact information you provide in the counter-notification to the reporting party.Restored content will not be counted against you if your account is ever reviewedfor potentially violating our policies about repeat infringment.",
                "Product emails",
                "Instagram",
                "Get the Instagram App",
                "Log in to continue",
                "Dropdown Icon for Country Selector",
                "{count} Request",
                "Save photos and videos to your collection.",
                "Phone",
                "Search",
                "Survey Details",
                "Keep Account",
                "When you share photos, they will appear on your profile.",
                "Disclosure Page",
                "You have unsaved changes. Are you sure you want to cancel?",
                "Tap to see preview.",
                "You sent a message",
                "Profile Photo",
                "Your payment took too long to process, but it may have been completed. Please check your email for a receipt.",
            ]),
                (e.isSubset = !1);
        },
        83,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function t(t) {
                return t
                    ? t
                          .split(/\n\n/)[0]
                          .replace(f, "")
                          .split("\n")
                          .filter((t) => t.length)
                          .map((t) => {
                              let n,
                                  s = 0,
                                  l = 0,
                                  o = t.trim();
                              const f = o.match(p);
                              f && ((s = parseInt(f[2])), (l = parseInt(f[4])), (o = o.slice(0, -f[0].length)));
                              const h = o.match(c) || o.match(u);
                              if (h) {
                                  o = o.substring(h[1].length + 1);
                                  const t = h[1].match(v);
                                  n = t ? t[2] : "";
                              }
                              return { identifier: n || "", script: o, line: s, column: l, text: "    at" + (null != n ? " " + n + " (" : " ") + o + (s ? ":" + s : "") + (l ? ":" + l : "") + (null != n ? ")" : "") };
                          })
                    : [];
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            const { ErrorMetadata: n, FBLogger: s } = i(d[0]),
                l = /^https?:\/\//i,
                o = /^Type Mismatch for/,
                c = new RegExp("(.*?)(\\s)(?:" + ["Unknown script code", "Function code", "eval code"].join("|") + ")$"),
                u = /(.*)(@|\s)[^\s]+$/,
                p = /(:(\d+)(:(\d+))?)$/,
                f = /[()]|\[.*?\]|^\w+:\s.*?\n/g,
                v = /(at)?\s*(.*)([^\s]+|$)/;
            (e.ExtendedError = class extends Error {}),
                (e.normalizeError = function (c) {
                    var u, p, f, v, h, E;
                    if (!c) return null;
                    const _ = c ? t(null !== (u = c.stackTrace) && void 0 !== u ? u : c.stack) : [];
                    let R = !1;
                    if ((c && _.length && !_[0].line && !_[0].column && (c.framesToPop = (c.framesToPop || 0) + 1), c && null != c.framesToPop)) {
                        let t,
                            n = c.framesToPop;
                        for (; n > 0 && _.length > 0; ) (t = _.shift()), n--, (R = !0);
                        o.test(c.message) && 2 === c.framesToPop && t && l.test(t.script) && (c.message += " at " + t.script + (t.line ? ":" + t.line : "") + (t.column ? ":" + t.column : "")), delete c.framesToPop;
                    }
                    let T = c.metadata ? c.metadata.format() : new n().format();
                    0 === T.length && (T = void 0);
                    const M = {
                        line: null !== (p = c.line) && void 0 !== p ? p : 0,
                        column: null !== (f = c.column) && void 0 !== f ? f : 0,
                        name: c.name,
                        message: null !== (v = c.messageFormat) && void 0 !== v ? v : c.message,
                        type: null !== (h = c.type) && void 0 !== h ? h : "",
                        script: (null === c || void 0 === c ? void 0 : c.fileName) || (null === c || void 0 === c ? void 0 : c.sourceURL) || "",
                        stack: _.map(function (t) {
                            return t.text;
                        }).join("\n"),
                        stackFrames: _,
                        metadata: T,
                    };
                    if (
                        (R && (delete M.script, delete M.line, delete M.column),
                        _[0] && ((M.script = null != M.script ? M.script : _[0].script), (M.line = null != M.line ? M.line : _[0].line), (M.column = null != M.column ? M.column : _[0].column)),
                        !M.name && M.message)
                    ) {
                        const t = M.message.indexOf(":");
                        t > 0 ? ((M.name = M.message.substr(0, t)), (M.message = M.message.substr(t + 1).trim())) : (M.name = M.message);
                    }
                    M.message = String(M.message);
                    for (const t in M) null == M[t] && delete M[t];
                    if (r(d[1]).isC1f() && !(null === (E = M.script) || void 0 === E ? void 0 : E.endsWith(".js"))) {
                        var P, w;
                        s("ig_web_no_js_script")
                            .catching(c)
                            .addMetadata("IG_WEB", "ERROR_INTERNAL", null !== (P = M.script) && void 0 !== P ? P : "NO_SCRIPT")
                            .addMetadata("IG_WEB", "ERROR_MESSAGE", null !== (w = M.message) && void 0 !== w ? w : "NO_MESSAGE")
                            .info("Found errorMessage with no script");
                    }
                    return M;
                });
        },
        17,
        [14, 19]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            function n(n) {
                if (null == n) return n;
                const t = i(d[0]).parse(n);
                if (null == t || (null == t.query && null == t.fragment)) return n;
                let u = n;
                return (
                    [
                        [/(password=)(?:.*?)(?=#|&|%23|%26|$)/g, `$1${l}`],
                        [/(access_?token=)(?:.*?)(?=#|&|%23|%26|$)/g, `$1${l}`],
                    ].forEach(([n, t]) => (u = u.replace(n, t))),
                    u
                );
            }
            function t(n) {
                if (null == n) return n;
                return n.replace(/(\/direct\/t\/)\d+/g, `$1${l}`);
            }
            function u(n) {
                if (null == n) return n;
                const t = n;
                return t.includes("direct_v2") ? t.replace(/\/\d+/g, `/${l}`) : t;
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            const c = /https?:\/\/(.*?)(\/.*)?$/,
                l = "--sanitized--";
            (e.getReferrerDomain = function (n) {
                const t = null != n && "" !== n ? c.exec(n) : null;
                return t && t.length > 0 ? t[1] : "";
            }),
                (e.sanitizeReferrer = function (c) {
                    return u(t(n(c)));
                }),
                (e.sanitizeErrorStack = function (n) {
                    return u(t(n));
                });
        },
        7,
        [85]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            const t = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"),
                u = {
                    parse: function (u) {
                        if ("" === u.trim()) return null;
                        const n = u.match(t),
                            l = {};
                        return (
                            (l.uri = n[0] ? n[0] : null),
                            (l.scheme = n[1] ? n[1].substr(0, n[1].length - 1) : null),
                            (l.authority = n[2] ? n[2].substr(2) : null),
                            (l.userinfo = n[3] ? n[3].substr(0, n[3].length - 1) : null),
                            (l.host = n[2] ? n[4] : null),
                            (l.port = n[5] && n[5].substr(1) ? parseInt(n[5].substr(1), 10) : null),
                            (l.path = n[6] ? n[6] : null),
                            (l.query = n[7] ? n[7].substr(1) : null),
                            (l.fragment = n[8] ? n[8].substr(1) : null),
                            (l.isGenericURI = null === l.authority && !!l.scheme),
                            l
                        );
                    },
                };
            m.exports = u;
        },
        85,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = class {
                static log(t) {
                    r(d[0]).FalcoLogger.log("instagram_web_notification", t());
                }
            };
        },
        13,
        [12]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]), (e.default = i(d[1]));
            for (var t in r(d[2])) e[t] = r(d[2])[t];
        },
        4,
        [86, 87, 88]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            try {
                self.workbox.v["workbox:routing:3.6.3"] = 1;
            } catch (o) {}
        },
        86,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            const t = new (class extends r(d[6]).Router {
                registerRoute(t, o, n = "GET") {
                    let s;
                    if ("string" == typeof t) {
                        const c = new URL(t, location);
                        s = new (r(d[1]).Route)(({ url: t }) => t.href === c.href, o, n);
                    } else if (t instanceof RegExp) s = new (r(d[2]).RegExpRoute)(t, o, n);
                    else if ("function" == typeof t) s = new (r(d[1]).Route)(t, o, n);
                    else {
                        if (!(t instanceof r(d[1]).Route)) throw new (r(d[3]).WorkboxError)("unsupported-route-type", { moduleName: "workbox-routing", className: "DefaultRouter", funcName: "registerRoute", paramName: "capture" });
                        s = t;
                    }
                    return super.registerRoute(s), s;
                }
                registerNavigationRoute(t, o = {}) {
                    const n = r(d[4]).cacheNames.getPrecacheName(o.cacheName),
                        s = new (r(d[5]).NavigationRoute)(
                            () =>
                                caches
                                    .match(t, { cacheName: n })
                                    .then((o) => {
                                        if (o) return o;
                                        throw new Error(`The cache ${n} did not have an entry for ` + `${t}.`);
                                    })
                                    .catch((o) => fetch(t)),
                            { whitelist: o.whitelist, blacklist: o.blacklist }
                        );
                    return super.registerRoute(s), s;
                }
            })();
            self.addEventListener("fetch", (o) => {
                const n = t.handleRequest(o);
                n && o.respondWith(n);
            });
            var o = t;
            e.default = o;
        },
        87,
        [86, 89, 90, 91, 92, 93, 94]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.Route = class {
                constructor(t, s, o) {
                    (this.handler = i(d[1])(s)), (this.match = t), (this.method = o || r(d[2]).defaultMethod);
                }
            };
        },
        89,
        [86, 95, 96]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.default = (t) => (t && "object" == typeof t ? t : { handle: t });
        },
        95,
        [86]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            (e.defaultMethod = "GET"), (e.validMethods = ["DELETE", "GET", "HEAD", "PATCH", "POST", "PUT"]);
        },
        96,
        [86]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.RegExpRoute = class extends r(d[1]).Route {
                constructor(n, t, o) {
                    super(
                        ({ url: t }) => {
                            const o = n.exec(t.href);
                            return o ? (t.origin !== location.origin && 0 !== o.index ? null : o.slice(1)) : null;
                        },
                        t,
                        o
                    );
                }
            };
        },
        90,
        [86, 89]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.WorkboxError = class extends Error {
                constructor(s, t) {
                    super(i(d[1])(s, t)), (this.name = s), (this.details = t);
                }
            };
        },
        91,
        [97, 98]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            try {
                self.workbox.v["workbox:core:3.6.3"] = 1;
            } catch (o) {}
        },
        97,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            var t = (t, ...n) => {
                let u = t;
                return n.length > 0 && (u += ` :: ${JSON.stringify(n)}`), u;
            };
            e.default = t;
        },
        98,
        [97]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            const t = { prefix: "workbox", suffix: self.registration.scope, googleAnalytics: "googleAnalytics", precache: "precache", runtime: "runtime" },
                c = (c) => [t.prefix, c, t.suffix].filter((t) => t.length > 0).join("-"),
                o = {
                    updateDetails: (c) => {
                        Object.keys(t).forEach((o) => {
                            void 0 !== c[o] && (t[o] = c[o]);
                        });
                    },
                    getGoogleAnalyticsName: (o) => o || c(t.googleAnalytics),
                    getPrecacheName: (o) => o || c(t.precache),
                    getRuntimeName: (o) => o || c(t.runtime),
                };
            e.cacheNames = o;
        },
        92,
        [97]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.NavigationRoute = class extends r(d[1]).Route {
                constructor(t, { whitelist: s = [/./], blacklist: c = [] } = {}) {
                    super((...t) => this._match(...t), t), (this._whitelist = s), (this._blacklist = c);
                }
                _match({ event: t, url: s }) {
                    if ("navigate" !== t.request.mode) return !1;
                    const c = s.pathname + s.search;
                    return !this._blacklist.some((t) => t.test(c)) && !!this._whitelist.some((t) => t.test(c));
                }
            };
        },
        93,
        [86, 89]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
            e.Router = class {
                constructor() {
                    this._routes = new Map();
                }
                handleRequest(t) {
                    const s = new URL(t.request.url);
                    if (!s.protocol.startsWith("http")) return;
                    let o = null,
                        n = null,
                        h = null;
                    const u = this._findHandlerAndParams(t, s);
                    if (((n = u.handler), (h = u.params), (o = u.route), !n && this._defaultHandler && (n = this._defaultHandler), !n)) return;
                    let l;
                    try {
                        l = n.handle({ url: s, event: t, params: h });
                    } catch (t) {
                        l = Promise.reject(t);
                    }
                    return l && this._catchHandler && (l = l.catch((o) => this._catchHandler.handle({ url: s, event: t, err: o }))), l;
                }
                _findHandlerAndParams(t, s) {
                    const o = this._routes.get(t.request.method) || [];
                    for (const n of o) {
                        let o = n.match({ url: s, event: t });
                        if (o) return Array.isArray(o) && 0 === o.length ? (o = void 0) : ((o.constructor === Object && 0 === Object.keys(o).length) || !0 === o) && (o = void 0), { route: n, params: o, handler: n.handler };
                    }
                    return { handler: void 0, params: void 0 };
                }
                setDefaultHandler(t) {
                    this._defaultHandler = i(d[1])(t);
                }
                setCatchHandler(t) {
                    this._catchHandler = i(d[1])(t);
                }
                registerRoute(t) {
                    this._routes.has(t.method) || this._routes.set(t.method, []), this._routes.get(t.method).push(t);
                }
                unregisterRoute(t) {
                    if (!this._routes.has(t.method)) throw new (r(d[2]).WorkboxError)("unregister-route-but-not-found-with-method", { method: t.method });
                    const s = this._routes.get(t.method).indexOf(t);
                    if (!(s > -1)) throw new (r(d[2]).WorkboxError)("unregister-route-route-not-registered");
                    this._routes.get(t.method).splice(s, 1);
                }
            };
        },
        94,
        [86, 95, 91]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]), (e.RegExpRoute = r(d[1]).RegExpRoute), (e.Route = r(d[2]).Route), (e.Router = r(d[3]).Router), (e.NavigationRoute = r(d[4]).NavigationRoute);
        },
        88,
        [86, 90, 89, 94, 93]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            async function t() {
                return (await clients.matchAll({ type: "window", includeUncontrolled: !0 })).some((t) => "visible" === t.visibilityState);
            }
            function n(t) {
                navigator && navigator.setAppBadge && navigator.setAppBadge(t);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.updateAppBadgeFromNotificationPayload = async function (o) {
                    const { SuppressBadge: s, badge: c } = o.params;
                    "1" === s || void 0 === c || (await t()) || n(parseInt(c));
                });
        },
        5,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            async function t(t, n, o, u) {
                var l, _;
                const { a: f, i: p, it: h, pi: T, u: w, web: v } = n.params,
                    y = `${c}${o}`;
                let N = {},
                    E = String(Date.now());
                return (
                    v && ((N = JSON.parse(v)), (E = v)),
                    await s({
                        body: null !== (l = n.message) && void 0 !== l ? l : h,
                        icon: !0 === (null === u || void 0 === u ? void 0 : u.defaultIcon) ? I : null !== (_ = f) && void 0 !== _ ? _ : p,
                        data: { uri: `${y}?utm_source=web_push_encrypted&ndid=${T}`, details: N, notifType: t, pushId: T, targetUserId: w, ...(null === u || void 0 === u ? void 0 : u.additionalKeys) },
                        tag: E,
                    })
                );
            }
            async function n(t) {
                const { u: n } = t.params;
                r(d[1]).logPushabilityEvent({ instagram_id: n, status: Notification && Notification.permission === r(d[3]).NOTIFICATION_PERMISSION.granted ? "enabled" : "disabled", raw_client_time: Date.now() });
            }
            async function o(n, o) {
                const { s: s } = o.params,
                    u = `/web/notifications/live/${s}/`;
                return await t(n, o, u, { additionalKeys: { senderUserId: s } });
            }
            function s(t) {
                var n;
                const { body: o, icon: s, data: u = {}, tag: c } = t,
                    { notifType: l, pushId: _, targetUserId: p, uri: h } = u,
                    T = new URL(h).pathname,
                    w = { body: o, data: u, tag: null != c && "" !== c ? c : "InstagramWeb", icon: null !== (n = s) && void 0 !== n ? n : I, badge: f };
                return self.registration
                    .showNotification("Instagram", w)
                    .then((t) => {
                        var n, o, s;
                        return (
                            r(d[1]).logNotificationEvent("web_push_impression", {
                                target_user_id: null !== (n = p) && void 0 !== n ? n : "",
                                landing_page_url: null !== (o = r(d[4]).sanitizeReferrer(T)) && void 0 !== o ? o : "",
                                ndid: null !== (s = _) && void 0 !== s ? s : "",
                            }),
                            Promise.resolve(t)
                        );
                    })
                    .catch((t) => (r(d[1]).logErrorEvent("show_notification_failed", t, { notifType: l, uri: r(d[4]).sanitizeReferrer(h), pushId: _ }), Promise.reject(t)));
            }
            function u(t) {
                self.registration.getNotifications().then((n) => {
                    n.forEach((n) => {
                        var o, s;
                        (null === n || void 0 === n ? void 0 : null === (o = n.data) || void 0 === o ? void 0 : o.senderUserId) === t &&
                            (null === n || void 0 === n ? void 0 : null === (s = n.data) || void 0 === s ? void 0 : s.notifType) === r(d[0]).IG_NOTIFICATION_TYPE.LIVE_BROADCAST &&
                            n.close();
                    });
                });
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            const c = "https://www.instagram.com",
                l = "/direct/inbox/",
                _ = "/accounts/activity/",
                I = "/static/images/ico/xxhdpi_launcher.png/99cf3909d459.png",
                f = "/static/images/ico/glyph-grey.png/f22685fc317a.png";
            (e.handleNotificationWithPayload = async function (s, c) {
                if (s === r(d[0]).IG_NOTIFICATION_TYPE.DIRECT_V2_DELETE_ITEM) return await t(s, c, l, { defaultIcon: !0 });
                if (s.startsWith("direct_v2")) return await t(s, c, l);
                if (s === r(d[0]).IG_NOTIFICATION_TYPE.SILENT_PUSH || s === r(d[0]).IG_NOTIFICATION_TYPE.REACHABILITY_SILENT_PUSH) return await n(c);
                if (s === r(d[0]).IG_NOTIFICATION_TYPE.LIVE_BROADCAST) return await o(s, c);
                if (s === r(d[0]).IG_NOTIFICATION_TYPE.LIVE_BROADCAST_REVOKE) {
                    const t = c.params.s;
                    return await u(t);
                }
                if (s === r(d[0]).IG_NOTIFICATION_TYPE.POST) {
                    const n = new URL(c.params.ig).pathname;
                    return await t(s, c, n);
                }
                return await t(s, c, _);
            }),
                (e.handleNotificationWithoutPayload = async function () {
                    r(d[1]).logEvent("push_arrived_no_payload");
                    const t = await fetch("/push/web/get_push_info", { method: "GET", credentials: "same-origin", headers: { "x-requested-with": "XMLHttpRequest" } });
                    if (t.status >= 200 && t.status < 300) {
                        const o = await t.json();
                        if (o && o.body && "string" == typeof o.body) {
                            var n;
                            const { body: t, data: u } = o,
                                c = new URL(u.uri);
                            return c.searchParams.set("ndid", null !== (n = u.pushId) && void 0 !== n ? n : ""), await s({ body: t, data: { ...u, uri: c, notifType: "sw_generic", targetUserId: u.user_id } });
                        }
                        return r(d[1]).logEvent("empty_payload_from_get_push_info"), Promise.resolve();
                    }
                    throw new Error(t.statusText);
                }),
                (e.handleNotificationFallback = function () {
                    return r(d[2])
                        .loadTranslations()
                        .then((t) => s({ body: t.pushBody, data: { uri: "https://www.instagram.com", notifType: "sw_error_fallback", targetUserId: "" } }));
                }),
                (e.createAndShowNotification = t),
                (e.handleSilentPush = n),
                (e.showNotification = s),
                (e.revokeBroadcastNotification = u);
        },
        6,
        [99, 3, 100, 101, 7]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.IG_NOTIFICATION_TYPE = {
                DIRECT_V2_CHANNEL: "direct_v2_channel",
                DIRECT_V2_GENERIC: "direct_v2_generic",
                DIRECT_V2_HASHTAG: "direct_v2_hashtag",
                DIRECT_V2_ITEM_SEEN: "direct_v2_item_seen",
                DIRECT_V2_LIKE: "direct_v2_like",
                DIRECT_V2_LOCATION: "direct_v2_location",
                DIRECT_V2_MEDIA: "direct_v2_media",
                DIRECT_V2_MEDIA_SHARE: "direct_v2_media_share",
                DIRECT_V2_PENDING: "direct_v2_pending",
                DIRECT_V2_PROFILE: "direct_v2_profile",
                DIRECT_V2_RAVEN: "direct_v2_raven",
                DIRECT_V2_REEL_MENTION: "direct_v2_reel_mention",
                DIRECT_V2_REEL_SHARE: "direct_v2_reel_share",
                DIRECT_V2_SENT_USER_REACTION: "direct_v2_user_reaction",
                DIRECT_V2_TEXT: "direct_v2_text",
                LIVE_BROADCAST: "live_broadcast",
                LIVE_BROADCAST_REVOKE: "live_broadcast_revoke",
                POST: "post",
                SILENT_PUSH: "silent_push",
                DIRECT_V2_DELETE_ITEM: "direct_v2_delete_item",
                REACHABILITY_SILENT_PUSH: "reachability_silent_push",
            };
        },
        99,
        []
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            let t = null;
            const { swConfig: n } = r(d[0]).SW_CACHE_NAMES;
            (e.storeTranslations = function (t) {
                return window && window.caches
                    ? window.caches.open(n).then((n) => (n ? n.put(r(d[0]).TRANSLATIONS, new Response(JSON.stringify(t))) : Promise.reject("Unable to store translations, cache storage unsupported")))
                    : Promise.reject("Unable to store translations, cache storage unsupported");
            }),
                (e.loadTranslations = function () {
                    return caches
                        .open(n)
                        .then((t) => (t ? t.match(r(d[0]).TRANSLATIONS) : Promise.reject("Unable to load translations, cache storage unsupported")))
                        .then((t) => (t ? t.json() : Promise.reject("Unable to load translations, cache storage unsupported")))
                        .then((n) => (n ? (t = n) : Promise.reject("Unable to load translations, error parsing response")));
                }),
                (e.getFbt = function (n) {
                    return (t && t[n]) || "";
                });
        },
        100,
        [1]
    );
    __d(
        function (g, r, i, a, m, e, d) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.NOTIFICATION_PERMISSION = { default: "default", denied: "denied", granted: "granted" };
        },
        101,
        []
    );
    global.__r(0);
}.call({}));
