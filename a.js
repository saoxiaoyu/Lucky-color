(function(e) {
    function o(o) {
        for (var i, t, a = o[0], _ = o[1], u = o[2], m = 0, p = []; m < a.length; m++)
            t = a[m],
            Object.prototype.hasOwnProperty.call(s, t) && s[t] && p.push(s[t][0]),
            s[t] = 0;
        for (i in _)
            Object.prototype.hasOwnProperty.call(_, i) && (e[i] = _[i]);
        l && l(o);
        while (p.length)
            p.shift()();
        return r.push.apply(r, u || []),
        n()
    }
    function n() {
        for (var e, o = 0; o < r.length; o++) {
            for (var n = r[o], i = !0, a = 1; a < n.length; a++) {
                var _ = n[a];
                0 !== s[_] && (i = !1)
            }
            i && (r.splice(o--, 1),
            e = t(t.s = n[0]))
        }
        return e
    }
    var i = {}
      , s = {
        app: 0
    }
      , r = [];
    function t(o) {
        if (i[o])
            return i[o].exports;
        var n = i[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, t),
        n.l = !0,
        n.exports
    }
    t.m = e,
    t.c = i,
    t.d = function(e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: n
        })
    }
    ,
    t.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, o) {
        if (1 & o && (e = t(e)),
        8 & o)
            return e;
        if (4 & o && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (t.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & o && "string" != typeof e)
            for (var i in e)
                t.d(n, i, function(o) {
                    return e[o]
                }
                .bind(null, i));
        return n
    }
    ,
    t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return t.d(o, "a", o),
        o
    }
    ,
    t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }
    ,
    t.p = "/colorfu/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || []
      , _ = a.push.bind(a);
    a.push = o,
    a = a.slice();
    for (var u = 0; u < a.length; u++)
        o(a[u]);
    var l = _;
    r.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, o, n) {
        e.exports = n("56d7")
    },
    "086e": function(e, o, n) {},
    "0a1b": function(e) {
        e.exports = JSON.parse('{"text":{"content":"Have a nice day. 🌞","fontSize":114,"fontFamily":"Hannotate SC","type":"dot","color":"#0081FF","mode":"none","padding":0,"dy":22,"fillColor":"#9ACDFF","size":30,"strokeColor":"#8EC7FF","lineWidth":2,"width":50,"height":50,"rotation":45,"foregroundColor":"#FFD700","arcRadius":1},"background":{"type":"wave","color":"#FFF2C3","mode":"pattern","foregroundColor":"#FFEEB1","lineWidth":4,"width":60,"rotation":0,"fillColor":"#F1F9E3","size":35,"strokeColor":"#DCEDC1","height":50,"arcRadius":14}}')
    },
    "0cf1": function(e, o, n) {
        "use strict";
        n("80cf")
    },
    "0d74": function(e, o, n) {
        "use strict";
        n("b15c")
    },
    "0f57": function(e, o, n) {
        "use strict";
        n("4cc9")
    },
    1477: function(e, o, n) {},
    1693: function(e) {
        e.exports = JSON.parse('{"text":{"content":"保持好心情 ♪","fontSize":122,"fontFamily":"Wawati SC","type":"dot","color":"#3281E1","mode":"none","padding":0,"dy":0,"fillColor":"#FFFFFF","size":4,"strokeColor":"#FFFFFF","lineWidth":1,"width":18,"height":18,"rotation":3},"background":{"type":"dot","color":"#FFFFFF","mode":"pattern","foregroundColor":"#F2B6CC","lineWidth":1,"width":100,"rotation":45,"fillColor":"#E8F4F8","size":49,"strokeColor":"#E1F3F8","height":100,"arcRadius":13}}')
    },
    "177c": function(e, o, n) {
        "use strict";
        n("3e76")
    },
    "179b": function(e) {
        e.exports = JSON.parse('{"text":{"content":"Good Night","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#fff","mode":"autoFit","padding":0,"dy":30},"background":{"mode":"image","imageURL":"https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439202510.webp"}}')
    },
    "196d": function(e, o, n) {
        "use strict";
        n("c405")
    },
    "1ac0": function(e) {
        e.exports = JSON.parse('{"text":{"content":"Spring","fontSize":279,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#FFDC34","mode":"autoFit","padding":0,"dy":60},"background":{"type":"line","color":"#4DD599","mode":"pattern","foregroundColor":"#00918E","lineWidth":189,"width":204,"rotation":-22}}')
    },
    "1b79": function(e, o, n) {},
    "1c64": function(e, o, n) {},
    "1e2e": function(e) {
        e.exports = JSON.parse('{"text":{"content":"我有这脸\\n洗澡都不关门","fontSize":200,"fontFamily":"Wawati SC","type":"none","color":"#FFD460","mode":"autoFit","padding":0,"dy":0},"background":{"type":"none","color":"#ea5455","mode":"pattern"}}')
    },
    "1fee": function(e, o, n) {
        "use strict";
        n("39a5")
    },
    2118: function(e, o, n) {
        e.exports = n.p + "fonts/luckiest_guy.woff2"
    },
    "32ca": function(e, o, n) {
        "use strict";
        n("377a")
    },
    "33cc": function(e) {
        e.exports = JSON.parse('{"text":{"content":"Big world","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#fff","mode":"autoFit","padding":0,"dy":30},"background":{"mode":"image","imageURL":"https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439300868.webp"}}')
    },
    3585: function(e, o, n) {
        "use strict";
        n("1477")
    },
    "377a": function(e, o, n) {},
    "385f": function(e, o, n) {},
    "397a": function(e, o, n) {},
    "39a5": function(e, o, n) {},
    "3da8": function(e, o, n) {
        "use strict";
        n("5f25")
    },
    "3e76": function(e, o, n) {},
    4004: function(e) {
        e.exports = JSON.parse('{"text":{"content":"w(๑•̀ㅂ•́)و✧","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"line","rotation":45,"width":25,"height":25,"foregroundColor":"#000","color":"#89E089","mode":"autoFit","lineWidth":1.5,"padding":0,"dy":30},"background":{"mode":"pattern","color":"#fff","foregroundColor":"#ddd","type":"line","width":50,"lineWidth":1.5,"rotation":0}}')
    },
    4088: function(e, o, n) {
        "use strict";
        n("7882")
    },
    4375: function(e) {
        e.exports = JSON.parse('{"text":{"content":"🍺 + 🍺 = 🍻","fontSize":197,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#000","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#1977F3","mode":"pattern"}}')
    },
    "4a48": function(e) {
        e.exports = JSON.parse('{"text":{"content":"It\'s high noon","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#583d33","mode":"autoFit","padding":0,"dy":30},"background":{"type":"dot","color":"#9e3b37","mode":"pattern","fillColor":"#d87265","size":100,"strokeColor":"#d87265","lineWidth":1,"width":210,"height":210,"rotation":45}}')
    },
    "4cc9": function(e, o, n) {},
    "535e": function(e) {
        e.exports = JSON.parse('{"text":{"content":" I miss you. * ","fontSize":120,"fontFamily":"Xingkai SC","type":"dot","color":"#B5E4D0","mode":"none","padding":0,"dy":2,"fillColor":"#D2F6C5","size":37,"strokeColor":"#D2F6C5","lineWidth":1,"width":50,"height":50,"rotation":0},"background":{"type":"dot","color":"#DF6E97","mode":"pattern","foregroundColor":"#FEFFC8","lineWidth":1,"width":50,"height":50,"arcRadius":0,"rotation":45,"fillColor":"#E1A2B9","size":3,"strokeColor":"#E1A2B9"}}')
    },
    "56d7": function(e, o, n) {
        "use strict";
        n.r(o);
        n("1ea3"),
        n("bdaf");
        var i = n("225f")
          , s = n.n(i)
          , r = (n("ac3b"),
        n("2eeb"))
          , t = n.n(r)
          , a = (n("c615"),
        n("7d96"))
          , _ = n.n(a)
          , u = (n("23e2"),
        n("a1f5"))
          , l = n.n(u)
          , m = (n("eb3d"),
        n("266d"))
          , p = n.n(m)
          , c = (n("d0a3"),
        n("77df"))
          , d = n.n(c)
          , v = (n("cd52"),
        n("affb"))
          , g = n.n(v)
          , f = (n("47f0"),
        n("3549"))
          , j = n.n(f)
          , k = (n("6d6a"),
        n("c3a8"))
          , h = n.n(k)
          , b = (n("ee4b"),
        n("36f3"))
          , w = n.n(b)
          , y = (n("f673"),
        n("b3a0"))
          , S = n.n(y)
          , x = (n("dc33"),
        n("26fb"))
          , C = n.n(x)
          , F = (n("9fe7"),
        n("060e"))
          , z = n.n(F)
          , L = (n("d8f4"),
        n("2a87"))
          , I = n.n(L)
          , E = (n("961d"),
        n("7135"))
          , O = n.n(E)
          , M = (n("ccb3"),
        n("51e8"))
          , D = n.n(M)
          , B = (n("2876"),
        n("ecc8"))
          , T = n.n(B)
          , N = (n("c117"),
        n("a248"))
          , R = n.n(N)
          , W = (n("02b0"),
        n("32ad"))
          , H = n.n(W)
          , P = (n("fe2a"),
        n("3173"))
          , U = n.n(P)
          , A = (n("0cd6"),
        n("0459"))
          , q = n.n(A)
          , Z = (n("fac9"),
        n("bc58"))
          , J = n.n(Z)
          , G = (n("807c"),
        n("d361"))
          , $ = n.n(G)
          , V = (n("9ff1"),
        n("195b"))
          , Y = n.n(V)
          , X = (n("eab5"),
        n("83b8"))
          , K = n.n(X)
          , Q = (n("ba35"),
        n("3d7a"))
          , ee = n.n(Q)
          , oe = (n("5c76"),
        n("d5aa"))
          , ne = n.n(oe)
          , ie = (n("2630"),
        n("3b6b"))
          , se = n.n(ie)
          , re = (n("8dcf"),
        n("0b00"))
          , te = n.n(re)
          , ae = (n("9524"),
        n("7694"))
          , _e = n.n(ae)
          , ue = n("1f37")
          , le = n("7a15")
          , me = n.n(le)
          , pe = (n("752d"),
        function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                attrs: {
                    id: "app"
                }
            }, [o("div", {
                attrs: {
                    id: "app-container"
                }
            }, [o("nav-header"), o("keep-alive", {
                attrs: {
                    exclude: "editor"
                }
            }, [o("router-view")], 1)], 1)])
        }
        )
          , ce = []
          , de = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "nav-header-container"
            }, [o("span", {
                staticClass: "nav-logo",
                on: {
                    click: e.goHome
                }
            }, [e._v("Lucky-Color")]), o("el-menu", {
                attrs: {
                    mode: "horizontal",
                    router: !0,
                    "default-active": e.path,
                    "background-color": "#24292f",
                    "text-color": "#ffffff",
                    "active-text-color": "#999999"
                }
            }, [o("el-menu-item", {
                attrs: {
                    index: "/"
                }
            }
            , [e._v("首页")]), o("el-menu-item", {
                attrs: {
                    index: "/editor"
                }
            }, [e._v("创作")]), o("el-menu-item", {
                attrs: {
                    index: "/about"
                }
            }, [e._v("关于")]), o("el-menu-item", {
                attrs: {
                    index: ""
                }
            }, [o("a", {
                attrs: {
                    href: "https://www.xiaoyu.ac.cn",
                    target: "_blank"
                }
            }, [e._v("博客")])])], 1)], 1)
        }
          , ve = []
          , ge = (n("149f"),
        {
            data() {
                return {
                    path: this.$router.currentRoute.path
                }
            },
            watch: {
                $route(e) {
                    const {path: o} = e;
                    this.path = o
                }
            },
            methods: {
                goHome() {
                    this.$router.push("/")
                }
            }
        })
          , fe = ge
          , je = (n("3585"),
        n("e607"))
          , ke = Object(je["a"])(fe, de, ve, !1, null, null, null)
          , he = ke.exports
          , be = {
            name: "App",
            components: {
                NavHeader: he
            }
        }
          , we = be
          , ye = (n("32ca"),
        Object(je["a"])(we, pe, ce, !1, null, null, null))
          , Se = ye.exports
          , xe = n("f038")
          , Ce = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "home-container"
            }, [o("div", {
                staticClass: "top-container"
            }, [o("div", {
                staticClass: "top-text"
            }, [o("h1", [e._v("所思即所获,所见即所得")]), o("p", [e._v(" 创建简约海报、壁纸只需动动手指")]), o("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [o("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleStarted
                }
            }, [e._v("GO")]), o("el-button", {
                on: {
                    click: e.handleStory
                }
            }, [e._v("About")])], 1)]), o("div", {
                ref: "deviceContainer",
                staticClass: "device-container"
            }, [o("div", {
                staticClass: "phone-container",
                style: {
                    transform: `scale(0.3, 0.3) translateX(${e.translateX}px)`,
                    bottom: e.position.offsetY + "px",
                    right: -e.position.offsetX + "px"
                }
            }, [o("div", {
                staticClass: "device device-iphone-x device-spacegray screen-container transition"
            }, [o("div", {
                staticClass: "device-frame"
            }, [o("el-carousel", {
                style: {
                    width: e.deviceSize.width + "px"
                },
                attrs: {
                    height: e.deviceSize.height + "px"
                }
            }, e._l(e.phoneExamples, (function(n) {
                return o("el-carousel-item", {
                    key: n.mode
                }, [o("div", {
                    style: {
                        cursor: e.progress >= 1 ? "pointer" : "default"
                    },
                    on: {
                        click: function(o) {
                            return e.handleSelectExample(n, "phone")
                        }
                    }
                }, [o("wallpaper", {
                    attrs: {
                        options: n,
                        width: e.deviceSize.width,
                        height: e.deviceSize.height
                    }
                })], 1)])
            }
            )), 1)], 1), o("div", {
                staticClass: "device-stripe transition"
            }), o("div", {
                staticClass: "device-header transition"
            }), o("div", {
                staticClass: "device-sensors transition"
            }), o("div", {
                staticClass: "device-btns transition"
            }), o("div", {
                staticClass: "device-power transition"
            })])])])]), o("scale", {
                attrs: {
                    progress: e.macProgress,
                    from: e.position.from,
                    to: e.position.to,
                    fixed: !0,
                    offsetY: e.progress >= 1 ? 200 : 0
                },
                on: {
                    onResize: e.handleResize
                }
            }, [o("device", {
                attrs: {
                    width: e.screenSize.width,
                    height: e.screenSize.height
                }
            }, [o("el-carousel", {
                style: {
                    width: e.screenSize.width + "px"
                },
                attrs: {
                    height: e.screenSize.height + "px"
                }
            }, e._l(e.examples, (function(n) {
                return o("el-carousel-item", {
                    key: n.mode
                }, [o("div", {
                    style: {
                        cursor: e.progress >= 1 ? "pointer" : "default"
                    },
                    on: {
                        click: function(o) {
                            return e.handleSelectExample(n)
                        }
                    }
                }, [o("wallpaper", {
                    attrs: {
                        options: n,
                        width: e.screenSize.width,
                        height: e.screenSize.height
                    }
                })], 1)])
            }
            )), 1)], 1)], 1), o("gallery", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.progress > 0,
                    expression: "progress > 0"
                }]
            })], 1)
        }
          , Fe = []
          , ze = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                class: {
                    transition: e.animate
                },
                style: e.styleSize
            }, [o("canvas", {
                ref: "canvas",
                class: {
                    transition: e.animate
                },
                style: e.styleSize
            })])
        }
          , Le = []
          , Ie = (n("d3e8"),
        n("f7a4"))
          , Ee = n.n(Ie);
        function Oe(e, o, n) {
            const i = window.pixelRatio || 2;
            e.height = n * i,
            e.width = o * i;
            const s = e.getContext("2d");
            return s.scale(i, i),
            s
        }
        function Me() {
            return document.createElement("canvas")
        }
        function De(e, o, n, {backgroundColor: i, foregroundColor: s, lineWidth: r}) {
            e.fillStyle = i,
            e.fillRect(0, 0, o, n),
            e.strokeStyle = s,
            e.lineWidth = r,
            e.beginPath(),
            e.moveTo(o, 0),
            e.lineTo(o, n),
            e.stroke()
        }
        function Be(e, o, n, {backgroundColor: i, strokeColor: s, lineWidth: r, fillColor: t, size: a}) {
            e.fillStyle = i,
            e.fillRect(0, 0, o, n),
            e.strokeStyle = s,
            e.lineWidth = r,
            e.fillStyle = t,
            e.beginPath(),
            e.arc(o / 2, n / 2, a / 2, 0, 2 * Math.PI),
            e.fill(),
            e.stroke()
        }
        n("662d");
        function Te(e, o, n, {backgroundColor: i, foregroundColor: s, lineWidth: r, arcRadius: t}) {
            e.fillStyle = i,
            e.fillRect(0, 0, o, n),
            e.strokeStyle = s,
            e.lineWidth = r,
            e.lineCap = "square";
            const a = [{
                x: 1 / 4 * -o,
                y: n * (3 / 4)
            }, {
                x: o * (1 / 4),
                y: n * (1 / 4)
            }, {
                x: o * (3 / 4),
                y: n * (3 / 4)
            }, {
                x: o * (5 / 4),
                y: n * (1 / 4)
            }]
              , _ = We(a, t)
              , u = new Path2D(_);
            e.stroke(u)
        }
        const Ne = (e,o,n)=>(e.y - o.y) * (e.x - n.x) == (e.y - n.y) * (e.x - o.x)
          , Re = (e,o,n)=>{
            const i = {
                x: e.x - o.x,
                y: e.y - o.y
            }
              , s = Math.sqrt(i.x * i.x + i.y * i.y)
              , r = {
                x: i.x / s,
                y: i.y / s
            };
            return {
                x: o.x + r.x * n,
                y: o.y + r.y * n
            }
        }
        ;
        function We(e, o) {
            const n = e.slice(1).reduce((e,n,i,s)=>{
                let r = s[i + 1]
                  , t = e[e.length - 1];
                if (r && !Ne(t.point, n, r)) {
                    let i = Re(t.point, n, o)
                      , s = Re(r, n, o);
                    return e.concat({
                        point: n,
                        s: `L ${i.x} ${i.y} S ${n.x} ${n.y} ${s.x} ${s.y} `
                    })
                }
                return e.concat({
                    point: n,
                    s: `L ${n.x} ${n.y} `
                })
            }
            , [{
                point: e[0],
                s: `M ${e[0].x} ${e[0].y} `
            }]).map(e=>e.s).join("");
            return n
        }
        function He(e, o, n, {backgroundColor: i, strokeColor: s, lineWidth: r, fillColor: t, size: a, staggered: _}) {
            e.fillStyle = i,
            e.fillRect(0, 0, o, n),
            e.strokeStyle = s,
            e.lineWidth = r,
            e.fillStyle = t,
            e.beginPath(),
            _ ? (e.rect(o * (1 / 4) - a / 2, n * (1 / 4) - a / 2, a, a),
            e.rect(o * (3 / 4) - a / 2, n * (3 / 4) - a / 2, a, a)) : (e.rect(o * (1 / 4) - a / 2, n * (1 / 4) - a / 2, a, a),
            e.rect(o * (1 / 4) - a / 2, n * (3 / 4) - a / 2, a, a),
            e.rect(o * (3 / 4) - a / 2, n * (3 / 4) - a / 2, a, a),
            e.rect(o * (3 / 4) - a / 2, n * (1 / 4) - a / 2, a, a)),
            e.fill(),
            e.stroke()
        }
        function Pe(e, o, n, i, s) {
            const r = (e - o) / (n - o);
            return i * (1 - r) + s * r
        }
        function Ue(e, o, n) {
            return Math.min(n, Math.max(o, e))
        }
        function Ae(e, o) {
            const n = o * Math.PI / 180
              , i = {
                a: Math.cos(n) * e,
                b: Math.sin(n) * e,
                c: -Math.sin(n) * e,
                d: Math.cos(n) * e,
                e: 0,
                f: 0
            };
            return i
        }
        function qe(e, {type: o, width: n=50, height: i=50, rotation: s=0, repetition: r="repeat", ...t}) {
            const a = Me()
              , _ = Oe(a, n, i);
            switch (o) {
            case "line":
                De(_, n, i, t);
                break;
            case "dot":
                Be(_, n, i, t);
                break;
            case "wave":
                Te(_, n, i, t);
                break;
            case "square":
                He(_, n, i, t);
                break
            }
            const u = e.createPattern(a, r)
              , l = Ae(.5, s);
            return u.setTransform(l),
            u
        }
        function Ze(e, o, n, i) {
            const [s,r] = Ge(e, i)
              , t = o / s * .8
              , a = n / r
              , _ = Math.min(t, a);
            return i.fontSize * _
        }
        function Je(e, o) {
            const n = Ve();
            return n.style.fontSize = o.fontSize + "px",
            n.style.fontFamily = o.fontFamily,
            n.style.fontWeight = o.fontWeight,
            n.style.fontStyle = o.fontStyle,
            n.style.fontVariant = o.fontVariant,
            n.innerHTML = e,
            [n.clientWidth, n.clientHeight]
        }
        function Ge(e, o) {
            const n = e.split("\n");
            return n.reduce((e,n)=>{
                const [i,s] = Je(n, o)
                  , r = Math.max(e[0], i)
                  , t = e[1] + s;
                return [r, t]
            }
            , [-1 / 0, 0])
        }
        let $e;
        function Ve() {
            return $e || ($e = document.createElement("span"),
            $e.style.visibility = "hidden",
            $e.style.position = "absolute",
            $e.style.display = "inline",
            $e.style.left = "-10000px",
            $e.style.top = "-10000px",
            document.body.appendChild($e),
            $e)
        }
        function Ye(e, o, n, i) {
            const s = Oe(e, o, n)
              , {text: r, background: t} = i;
            Ke(s, o, n, t),
            Qe(s, o, n, r)
        }
        function Xe(e) {
            return !e || "none" === e
        }
        function Ke(e, o, n, {type: i, image: s, color: r, mode: t, ...a}) {
            if ("image" === t)
                eo(e, s, o, n);
            else {
                const s = Xe(i) ? r : qe(e, {
                    backgroundColor: r,
                    type: i,
                    ...a
                });
                e.fillStyle = s,
                e.fillRect(0, 0, o, n)
            }
        }
        function Qe(e, o, n, {color: i, type: s, fontSize: r, fontFamily: t, content: a, mode: _="none", padding: u=50, dy: l=0, ...m}) {
            const p = Xe(s) ? i : qe(e, {
                backgroundColor: i,
                type: s,
                ...m
            })
              , c = o - 2 * u
              , d = o - 2 * u
              , v = "autoFit" === _ ? Ze(a, c, d, {
                fontSize: 200,
                fontFamily: t
            }) : r;
            e.font = `bolder ${v}px ${t}`,
            e.textAlign = "center",
            e.textBaseline = "middle",
            e.fillStyle = p,
            e.save();
            const g = {
                fontSize: v,
                fontFamily: t
            }
              , f = o / 2
              , j = n / 2 + l;
            if ("constrain" === _) {
                const [o,n] = Ge(a, g)
                  , i = o > c ? c / o : 1
                  , s = n > d ? d / n : 1;
                e.translate(f, j),
                e.scale(i, s),
                e.translate(-f, -j)
            }
            oo(e, a, f, j, g),
            e.restore()
        }
        function eo(e, o, n, i) {
            const {width: s, height: r} = o
              , t = r / s
              , a = i / n;
            let _, u;
            t > a ? (_ = s,
            u = _ * a) : (u = r,
            _ = u / a);
            const l = (s - _) / 2
              , m = (r - u) / 2;
            e.drawImage(o, l, m, _, u, 0, 0, n, i)
        }
        function oo(e, o, n, i, s) {
            const r = o.split("\n")
              , [,t] = Je(r[0], s)
              , a = t * (r.length - 1)
              , _ = i - a / 2;
            for (let u = 0; u < r.length; u++) {
                const o = r[u];
                e.fillText(o, n, _ + u * t)
            }
        }
        function no(e) {
            const o = new Image;
            return o.src = e,
            new Promise((e,n)=>{
                o.onload = function() {
                    e(o)
                }
                ,
                o.onerror = function() {
                    n()
                }
            }
            )
        }
        function io(e, o) {
            return new FontFace(o,`url(${e})`).load()
        }
        function so(e, o, n) {
            const i = o.split(".")
              , s = i.pop()
              , r = i.reduce((e,o)=>e[o], e);
            ue["default"].set(r, s, n)
        }
        function ro(e, o) {
            const n = o.split(".");
            return n.reduce((e,o)=>e[o], e)
        }
        function to(e) {
            return Array.isArray(e) ? [...e.map(to)] : void 0 === e || null === e || "object" !== typeof e ? e : Object.entries(e).reduce((e,[o,n])=>(e[o] = to(n),
            e), {})
        }
        var ao = {
            props: {
                options: Object,
                width: Number,
                height: Number,
                animate: {
                    type: Boolean,
                    default: !0
                },
                styleWidth: [Number, String],
                styleHeight: [Number, String]
            },
            data() {
                return {
                    fontFace: void 0,
                    image: void 0,
                    loading: !1,
                    rendering: !1
                }
            },
            computed: {
                styleSize() {
                    const e = this.styleWidth || this.width
                      , o = this.styleHeight || this.height
                      , n = e=>"number" === typeof e ? e + "px" : e;
                    return {
                        width: n(e),
                        height: n(o)
                    }
                }
            },
            mounted() {
                this.render()
            },
            watch: {
                options: {
                    deep: !0,
                    handler(e, o) {
                        o.text.fontURL !== e.text.fontURL && (this.fontFace = void 0),
                        o.background.imageURL !== e.background.imageURL && (this.image = void 0),
                        this.render()
                    }
                },
                width() {
                    this.render()
                },
                height() {
                    this.render()
                }
            },
            methods: {
                async render() {
                    try {
                        if (this.rendering)
                            return;
                        this.rendering = !0,
                        await this.loadAssets();
                        const e = to(this.options);
                        this.image && (e.background.image = this.image),
                        Ye(this.$refs.canvas, this.width, this.height, e),
                        this.$emit("on-success", this.$refs.canvas),
                        this.rendering = !1
                    } catch (e) {
                        Ee.a.error("Failed to draw!"),
                        console.error(e),
                        this.rendering = !1,
                        this.loading = !1
                    }
                },
                async loadAssets() {
                    const {fontURL: e, fontFamily: o} = this.options.text
                      , {imageURL: n} = this.options.background
                      , i = e && (!this.fontFace || !this.fontFace.loaded)
                      , s = n && !this.image;
                    (i || s) && (this.loading = !0,
                    this.fontFace = i ? await io(e, o) : this.fontFace,
                    this.image = s ? await no(n) : this.image,
                    this.loading = !1)
                }
            }
        }
          , _o = ao
          , uo = (n("e357"),
        Object(je["a"])(_o, ze, Le, !1, null, null, null))
          , lo = uo.exports
          , mo = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "device device-macbook device-spacegray screen-container transition",
                style: e.transformStyles.container
            }, [o("div", {
                staticClass: "device-frame transition"
            }, [o("div", {
                staticClass: "transition",
                style: e.transformStyles.content
            }, [e._t("default")], 2)]), o("div", {
                staticClass: "device-stripe transition"
            }), o("div", {
                staticClass: "device-header transition"
            }), o("div", {
                staticClass: "device-sensors transition"
            }), o("div", {
                staticClass: "device-btns transition"
            }), o("div", {
                staticClass: "device-power transition"
            })])
        }
          , po = []
          , co = {
            props: {
                src: String,
                meta: Object,
                width: Number,
                height: Number
            },
            computed: {
                transformStyles() {
                    const e = 576
                      , o = 360
                      , n = 83
                      , i = 29
                      , s = this.width / e
                      , r = this.height / o;
                    return {
                        container: {
                            transformOrigin: `${n}px ${i}px`,
                            transform: `translate(${-n}px, ${-i}px) scale(${s}, ${r})`
                        },
                        content: {
                            transformOrigin: "left top",
                            transform: `scale(${1 / s}, ${1 / r})`
                        }
                    }
                }
            }
        }
          , vo = co
          , go = (n("af95"),
        Object(je["a"])(vo, mo, po, !1, null, null, null))
          , fo = go.exports
          , jo = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                style: [e.fixed && {
                    position: "absolute",
                    left: e.transformed.x + "px",
                    top: e.transformed.y + "px",
                    zIndex: e.zIndex
                }, {
                    transformOrigin: "left top",
                    transform: `scale(${e.transformed.scale}, ${e.transformed.scale})`,
                    width: e.transformed.width + "px",
                    height: e.transformed.height + "px"
                }, e.styles]
            }, [e._t("default")], 2)
        }
          , ko = []
          , ho = {
            props: {
                from: {
                    x: Number,
                    y: Number,
                    scale: Number
                },
                to: {
                    x: Number,
                    y: Number,
                    scale: Number
                },
                progress: Number,
                styles: Object,
                fixed: {
                    default: !1,
                    type: Boolean
                },
                zIndex: {
                    default: 10,
                    type: Number
                },
                offsetY: Number
            },
            computed: {
                transformed() {
                    const {from: e, to: o=e, progress: n, fixed: i} = this
                      , {x: s, y: r, scale: t} = e
                      , {x: a, y: _, scale: u} = o
                      , l = {
                        ...i && {
                            x: Pe(n, 0, 1, s, a)
                        },
                        ...i && {
                            y: Pe(n, 0, 1, r, _) + this.offsetY
                        },
                        scale: Pe(n, 0, 1, t, u)
                    };
                    return l
                }
            }
        }
          , bo = ho
          , wo = Object(je["a"])(bo, jo, ko, !1, null, null, null)
          , yo = wo.exports;
        const So = e=>({
            data: ()=>({
                scrollY: 0,
                realScrollY: 0
            }),
            computed: {
                progress() {
                    return Pe(this.scrollY, 0, e, 0, 1)
                }
            },
            methods: {
                handleMousewheel() {
                    const o = document.documentElement.scrollTop;
                    this.scrollY = Ue(o, 0, e);
                    const n = document.getElementById("app-container")
                      , i = document.getElementById("app");
                    o < e ? (i.style.width = "100%",
                    i.style.height = window.innerHeight + e + "px",
                    n.style.position = "fixed",
                    n.style.width = "100%",
                    n.style.marginTop = "0px") : (i.style.width = "auto",
                    i.style.height = "auto",
                    n.style.position = "static",
                    n.style.marginTop = e + "px")
                }
            },
            mounted() {
                window.scrollTo(0, 0)
            },
            activated() {
                const o = document.getElementById("app-container");
                if (this.scrollY < e) {
                    const n = document.getElementById("app");
                    n.style.width = "100%",
                    n.style.height = window.innerHeight + e + "px",
                    o.style.position = "fixed",
                    o.style.width = "100%",
                    o.style.marginTop = "0px",
                    window.scrollTo(0, this.scrollY)
                } else {
                    const o = document.getElementById("app-container");
                    o.style.marginTop = e + "px",
                    window.scrollTo(0, e)
                }
                window.addEventListener("wheel", this.handleMousewheel)
            },
            deactivated() {
                window.scrollTo(0, 0);
                const e = document.getElementById("app");
                e.style.width = "auto",
                e.style.height = "auto";
                const o = document.getElementById("app-container");
                o.style.position = "static",
                o.style.marginTop = "0px",
                window.removeEventListener("wheel", this.handleMousewheel)
            }
        })
          , xo = ()=>({
            data: ()=>({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            }),
            methods: {
                handleWindowResize() {
                    this.windowWidth = window.innerWidth,
                    this.windowHeight = window.innerHeight
                }
            },
            mounted() {
                window.addEventListener("resize", this.handleWindowResize)
            },
            destroyed() {
                window.removeEventListener("resize", this.handleWindowResize)
            }
        })
          , Co = e=>({
            data() {
                return {
                    [e + "X"]: 0,
                    [e + "Y"]: 0,
                    [e + "Width"]: 0,
                    [e + "Height"]: 0
                }
            },
            mounted() {
                const o = this.$refs[e];
                if (!o)
                    return;
                const {top: n, left: i, right: s, bottom: r} = o.getBoundingClientRect();
                this[e + "X"] = i,
                this[e + "Y"] = n,
                this[e + "Width"] = s - i,
                this[e + "Height"] = r - n
            }
        });
        var Fo = n("179b");
        const zo = {
            name: "Another Planet",
            type: "image",
            options: Fo
        };
        var Lo = n("4004");
        const Io = {
            name: "Angry",
            options: Lo
        };
        var Eo = n("f215");
        const Oo = {
            name: "Welcome",
            options: Eo
        };
        var Mo = n("b206");
        const Do = {
            name: "挑战自我",
            options: Mo
        };
        var Bo = n("fa59");
        const To = {
            name: "Falling Down",
            type: "image",
            options: Bo
        };
        var No = n("fc19");
        const Ro = {
            name: "排列",
            options: No
        }
          , Wo = Oo.options
          , Ho = Io.options
          , Po = zo.options
          , Uo = Ro.options
          , Ao = To.options
          , qo = Do.options;
        var Zo = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "gallery-container",
                staticStyle: {
                    "margin-bottom": "50px"
                }
            }, [o("div", {
                staticClass: "device-radio"
            }, [o("i", {
                staticClass: "el-icon-monitor device-icon",
                style: {
                    color: "pc" === e.activeType ? "#409eff" : "#000"
                },
                on: {
                    click: function(o) {
                        e.activeType = "pc"
                    }
                }
            }), o("i", {
                staticClass: "el-icon-mobile device-icon",
                style: {
                    color: "phone" === e.activeType ? "#409eff" : "#000"
                },
                on: {
                    click: function(o) {
                        e.activeType = "phone"
                    }
                }
            })]), 1 === e.gallery.length ? o("div", {
                staticClass: "gallery-card-container",
                style: {
                    "grid-template-columns": `repeat(${"pc" === e.activeType ? 4 : 6}, 1fr)`
                }
            }, e._l(e.gallery[0].wallpapers, (function(n) {
                return o("div", {
                    key: n.name,
                    on: {
                        click: ()=>e.handleClickCard(e.responsive(n.options))
                    }
                }, [o("div", {
                    staticStyle: {
                        margin: "20px"
                    }
                }, [o("div", {
                    staticClass: "gallery-card",
                    style: {
                        paddingBottom: e.deviceSize[1] / e.deviceSize[0] * 100 + "%"
                    }
                }, [o("div", {
                    staticClass: "gallery-card-content"
                }, [o("wallpaper", {
                    attrs: {
                        width: e.deviceSize[0],
                        height: e.deviceSize[1],
                        styleHeight: "100%",
                        styleWidth: "100%",
                        options: e.responsive(n.options)
                    }
                })], 1)])]), o("div", [o("span", [e._v(e._s(n.name) + " "), "image" === n.type ? o("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        content: "图片来自网络",
                        placement: "top"
                    }
                }, [o("i", {
                    staticClass: "el-icon-warning-outline",
                    staticStyle: {
                        cursor: "pointer"
                    }
                })]) : e._e()], 1)])])
            }
            )), 0) : e._e()])
        }
          , Jo = []
          , Go = n("9bef");
        const $o = {
            name: "钢铁侠的一生",
            options: Go
        };
        var Vo = n("7dca");
        const Yo = {
            name: "雷神的力量",
            options: Vo
        };
        var Xo = n("d751");
        const Ko = {
            name: "浩克的秘密",
            options: Xo
        };
        var Qo = n("9e79");
        const en = {
            name: "篮球之神",
            options: Qo
        };
        var on = n("4a48");
        const nn = {
            name: "Cassidy's Gentle",
            options: on
        };
        var sn = n("7523");
        const rn = {
            name: "Naughty Tracer",
            options: sn
        };
        var tn = n("1ac0");
        const an = {
            name: "What a beautiful thing",
            options: tn
        };
        var _n = n("bcb9");
        const un = {
            name: "Eat Red Sun",
            type: "image",
            options: _n
        };
        var ln = n("33cc");
        const mn = {
            name: "Big World",
            type: "image",
            options: ln
        };
        var pn = n("fdc6");
        const cn = {
            name: "Face challenge",
            type: "image",
            options: pn
        };
        var dn = n("bd6d");
        const vn = {
            name: "做你自己",
            options: dn
        };
        var gn = n("535e");
        const fn = {
            name: "我想你",
            options: gn
        };
        var jn = n("1693");
        const kn = {
            name: "保持好心情",
            options: jn
        };
        var hn = n("0a1b");
        const bn = {
            name: "美好的一天",
            options: hn
        };
        var wn = n("fe82");
        const yn = {
            name: "科比",
            options: wn
        };
        var Sn = n("7894");
        const xn = {
            name: "洞察",
            options: Sn
        };
        var Cn = n("4375");
        const Fn = {
            name: "啤酒",
            options: Cn
        };
        var zn = n("8bc9");
        const Ln = {
            name: "孱弱",
            options: zn
        };
        var In = n("a753");
        const En = {
            name: "生命",
            options: In
        };
        var On = n("1e2e");
        const Mn = {
            name: "Pretty Face",
            options: On
        };
        var Dn = n("f49d");
        const Bn = {
            name: "目标",
            options: Dn
        }
          , Tn = {
            name: "all",
            wallpapers: [$o, Yo, Ko, en, En, Do, Mn, Bn, yn, nn, rn, an, vn, kn, fn, bn, xn, Fn, Ln, Ro, un, mn, To, cn]
        }
          , Nn = [Tn];
        function Rn(e, o, n="pc") {
            localStorage.setItem("cd-example", JSON.stringify(o)),
            localStorage.setItem("cd-type", n),
            e.push({
                path: "editor"
            })
        }
        function Wn(e, o=1) {
            const n = to(e)
              , i = ro(n, "text.dy") || 0;
            so(n, "text.mode", "autoFit"),
            so(n, "text.dy", Math.min(i, 30)),
            so(n, "text.padding", 0);
            const {text: s, background: r} = n;
            return [s, r].forEach(e=>{
                for (const n of Object.keys(e)) {
                    const i = e[n];
                    "number" === typeof i && "rotation" !== n && (e[n] = i * o)
                }
            }
            ),
            n
        }
        var Hn = {
            components: {
                Wallpaper: lo
            },
            data() {
                return {
                    gallery: Nn,
                    windowWidth: screen.width,
                    windowHeight: screen.height,
                    activeType: "pc"
                }
            },
            computed: {
                deviceSize() {
                    return "pc" === this.activeType ? [screen.width, screen.height] : [375, 667]
                }
            },
            name: "gallery",
            methods: {
                handleClickCard(e) {
                    Rn(this.$router, e, this.activeType)
                },
                responsive(e) {
                    if ("pc" === this.activeType)
                        return e;
                    {
                        const o = this.deviceSize[1] / screen.height;
                        return Wn(e, o)
                    }
                }
            }
        }
          , Pn = Hn
          , Un = (n("4088"),
        Object(je["a"])(Pn, Zo, Jo, !1, null, null, null))
          , An = Un.exports
          , qn = {
            components: {
                Wallpaper: lo,
                Device: fo,
                Scale: yo,
                Gallery: An
            },
            name: "home",
            data() {
                return {
                    disabled: !1,
                    examples: [Wo, Ho, Po],
                    phoneExamples: [qo, Ao, Uo].map(Wn),
                    screenSize: {},
                    deviceSize: {
                        width: 375,
                        height: 812
                    }
                }
            },
            mixins: [So(200), xo(), Co("deviceContainer")],
            watch: {
                progress: {
                    immediate: !0,
                    handler() {
                        this.computedScreenSize()
                    }
                },
                windowWidth() {
                    this.computedScreenSize()
                },
                windowHeight() {
                    this.computedScreenSize()
                }
            },
            computed: {
                position() {
                    const e = .625
                      , o = .7
                      , n = this.deviceContainerHeight / this.deviceContainerWidth;
                    let i, s;
                    return n > e ? (i = this.deviceContainerWidth * o,
                    s = i * e) : (s = this.deviceContainerHeight * o,
                    i = s / e),
                    {
                        from: {
                            x: 0,
                            y: 0,
                            scale: 1
                        },
                        to: {
                            x: this.deviceContainerX + (this.deviceContainerWidth - i) / 2,
                            y: this.deviceContainerY + (this.deviceContainerHeight - s) / 2,
                            scale: i / this.windowWidth
                        },
                        offsetY: (this.deviceContainerHeight - s) / 2,
                        offsetX: (this.deviceContainerWidth - i) / 2
                    }
                },
                translateX() {
                    return Pe(this.phoneProgress, 0, 1, 1e3, 0)
                },
                macProgress() {
                    const e = Ue(this.progress, 0, .8);
                    return Pe(e, 0, .8, 0, 1)
                },
                phoneProgress() {
                    const e = Ue(this.progress, .8, 1);
                    return Pe(e, .8, 1, 0, 1)
                }
            },
            methods: {
                handleResize({width: e, height: o}) {
                    this.screenSize = {
                        width: e,
                        height: o
                    }
                },
                handleStarted() {
                    this.$router.push({
                        path: "/editor"
                    })
                },
                handleSelectExample(e, o) {
                    this.progress < 1 || Rn(this.$router, e, o)
                },
                handleStory() {
                    this.$router.push({
                        path: "/about"
                    })
                },
                computedScreenSize() {
                    const e = .625
                      , o = this.windowWidth * e
                      , n = this.windowHeight
                      , i = o
                      , s = this.macProgress <= 0 ? n : this.macProgress >= 1 ? i : this.screenSize.height;
                    this.screenSize = {
                        width: this.windowWidth,
                        height: s
                    }
                }
            }
        }
          , Zn = qn
          , Jn = (n("c4d9"),
        Object(je["a"])(Zn, Ce, Fe, !1, null, null, null))
          , Gn = Jn.exports
          , $n = function() {
            var e = this
              , o = e._self._c;
            return o("el-container", {
                staticClass: "editor-container"
            }, [o("el-aside", {
                attrs: {
                    width: "300px"
                }
            }, [o("attribute-tree", {
                attrs: {
                    options: e.attribute,
                    values: e.example
                },
                on: {
                    update: e.handleUpdateExample
                }
            })], 1), o("el-container", [o("div", {
                staticClass: "main-container"
            }, [o("div", {
                staticClass: "tools-container"
            }, [o("div", {
                staticClass: "tools"
            }, [o("div", {
                staticClass: "tool-item"
            }, [o("el-dropdown", {
                attrs: {
                    size: "medium"
                },
                on: {
                    command: function(o) {
                        e.activeDevice = o
                    }
                }
            }, [o("span", {
                staticClass: "el-dropdown-link"
            }, [e._v(" Size: " + e._s(e.devices[e.activeDevice].name)), o("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            })]), o("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, e._l(e.devices, (function(n, i) {
                return o("el-dropdown-item", {
                    key: n.key,
                    attrs: {
                        divided: n.divided,
                        command: i
                    }
                }, [e._v(e._s(n.name))])
            }
            )), 1)], 1)], 1), o("div", {
                staticClass: "tool-item"
            }, [o("el-input-number", {
                attrs: {
                    value: e.deviceSize[0],
                    "controls-position": "right",
                    min: 1,
                    size: "mini",
                    disabled: 0 !== e.activeDevice
                },
                on: {
                    change: function(o) {
                        e.customWidth = o
                    }
                }
            }), o("i", {
                staticClass: "el-icon-sort icon-switch",
                on: {
                    click: function(o) {
                        e.rotate = !e.rotate
                    }
                }
            }), o("el-input-number", {
                attrs: {
                    value: e.deviceSize[1],
                    "controls-position": "right",
                    min: 1,
                    size: "mini",
                    disabled: 0 !== e.activeDevice
                },
                on: {
                    change: function(o) {
                        e.customHeight = o
                    }
                }
            }), o("span", {
                staticClass: "scale-text"
            }, [e._v(" " + e._s((100 * e.transformed.scale).toFixed(1) + "%") + " ")])], 1), o("div", {
                staticClass: "tool-item"
            }, [o("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: "预览",
                    placement: "bottom"
                }
            }, [o("i", {
                staticClass: "el-icon-view",
                on: {
                    click: e.handlePreview
                }
            })])], 1), o("div", {
                staticClass: "tool-item"
            }, [o("el-dropdown", {
                attrs: {
                    size: "medium",
                    placement: "bottom"
                },
                on: {
                    command: function(o) {
                        "image" === o ? e.handleDownloadImage() : e.handleDownloadFile()
                    }
                }
            }, [o("span", {
                staticClass: "el-dropdown-link"
            }, [o("i", {
                staticClass: "el-icon-download"
            })]), o("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [o("el-dropdown-item", {
                attrs: {
                    command: "image"
                }
            }, [o("i", {
                staticClass: "el-icon-picture-outline el-icon--left"
            }), e._v(" 图片 ")]), o("el-dropdown-item", {
                attrs: {
                    command: "file"
                }
            }, [o("i", {
                staticClass: "el-icon-files el-icon--left"
            }), e._v(" Json文件 ")])], 1)], 1)], 1)])]), o("div", {
                ref: "preview",
                staticClass: "preview-container"
            }, [o("div", {
                class: {
                    preview: e.fullscreen
                },
                style: e.wallpaperStyles
            }, [o("wallpaper", {
                attrs: {
                    options: e.example,
                    width: e.deviceSize[0],
                    height: e.deviceSize[1],
                    animate: !1
                },
                on: {
                    "on-success": function(o) {
                        e.canvas = o
                    }
                }
            })], 1)])])])], 1)
        }
          , Vn = []
          , Yn = function() {
            var e = this
              , o = e._self._c;
            return "container" === e.options.type ? o("div", e._l(e.options.children, (function(n) {
                return o("attribute-tree", {
                    key: n.key,
                    attrs: {
                        options: n,
                        values: e.values
                    },
                    on: {
                        update: e.handleUpdate
                    }
                })
            }
            )), 1) : "collapse" === e.options.type ? o("collapse", {
                attrs: {
                    name: e.options.name,
                    defaultOpen: e.options.defaultOpen,
                    indent: e.options.indent
                }
            }, e._l(e.options.children, (function(n) {
                return o("attribute-tree", {
                    key: n.key,
                    attrs: {
                        options: n,
                        values: e.values
                    },
                    on: {
                        update: e.handleUpdate
                    }
                })
            }
            )), 1) : "section" === e.options.type ? o("group", {
                attrs: {
                    name: e.options.name,
                    help: e.options.help
                }
            }, e._l(e.options.children, (function(n) {
                return o("attribute-tree", {
                    key: n.key,
                    attrs: {
                        options: n,
                        values: e.values
                    },
                    on: {
                        update: e.handleUpdate
                    }
                })
            }
            )), 1) : "number" === e.options.type ? o("input-number", {
                attrs: {
                    min: e.options.min,
                    max: e.options.max,
                    step: e.options.step || 1,
                    name: e.options.name
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }) : "color-palette" === e.options.type ? o("color-palette") : "color" === e.options.type ? o("color-field", {
                attrs: {
                    name: e.options.name,
                    "color-key": e.options.key
                },
                on: {
                    update: e.handleUpdate
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }) : o("field", {
                attrs: {
                    name: e.options.name,
                    flex: "image" === e.options.type ? "col" : "row"
                }
            }, ["text" === e.options.type ? o("el-input", {
                attrs: {
                    placeholder: e.options.placeholder,
                    size: "small"
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }) : e._e(), "symbol-text" === e.options.type ? o("symbol-input", {
                attrs: {
                    placeholder: e.options.placeholder,
                    size: "small"
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }) : e._e(), "image" === e.options.type ? o("image-picker", {
                attrs: {
                    allowOnline: !1
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }) : e._e(), "select" === e.options.type ? o("el-select", {
                style: {
                    width: e.options.width || "160px"
                },
                attrs: {
                    size: "small",
                    filterable: ""
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }, e._l(e.options.options, (function(n) {
                return o("el-option", {
                    key: n.value,
                    attrs: {
                        label: n.label,
                        value: n.value
                    }
                }, [n.template ? o("span", {
                    domProps: {
                        innerHTML: e._s(n.template)
                    }
                }) : e._e()])
            }
            )), 1) : e._e(), "select-group" === e.options.type ? o("el-select", {
                style: {
                    width: e.options.width || "160px"
                },
                attrs: {
                    size: "small",
                    filterable: ""
                },
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            }, e._l(e.options.groups, (function(n) {
                return o("el-option-group", {
                    key: n.label,
                    attrs: {
                        label: n.label
                    }
                }, e._l(n.options, (function(n) {
                    return o("el-option", {
                        key: n.value,
                        attrs: {
                            label: n.label,
                            value: n.value
                        }
                    }, [n.template ? o("span", {
                        domProps: {
                            innerHTML: e._s(n.template)
                        }
                    }) : e._e()])
                }
                )), 1)
            }
            )), 1) : e._e(), "radio" === e.options.type ? o("div", {
                staticClass: "radio-container"
            }, e._l(e.options.options, (function(n) {
                return o("el-radio", {
                    key: n.value,
                    attrs: {
                        label: n.value,
                        size: "small"
                    },
                    model: {
                        value: e.value,
                        callback: function(o) {
                            e.value = o
                        },
                        expression: "value"
                    }
                }, [e._v(" " + e._s(n.label) + " ")])
            }
            )), 1) : e._e(), "boolean" === e.options.type ? o("div", [o("el-checkbox", {
                model: {
                    value: e.value,
                    callback: function(o) {
                        e.value = o
                    },
                    expression: "value"
                }
            })], 1) : e._e()], 1)
        }
          , Xn = []
          , Kn = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                class: [e.containerClass, "row" === e.flex ? e.rowClass : e.colClass]
            }, [o("div", {
                staticClass: "input-label"
            }, [e._t("name", (function() {
                return [e._v(e._s(e.name))]
            }
            ))], 2), e._t("default")], 2)
        }
          , Qn = []
          , ei = {
            props: {
                name: String,
                flex: {
                    default: "row",
                    type: String
                }
            },
            data() {
                return {
                    containerClass: "field-container",
                    rowClass: "row",
                    colClass: "col"
                }
            }
        }
          , oi = ei
          , ni = (n("196d"),
        Object(je["a"])(oi, Kn, Qn, !1, null, "55b03386", null))
          , ii = ni.exports
          , si = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "group-container"
            }, [o("div", {
                staticClass: "group-container-header"
            }, [o("span", {
                staticClass: "group-container-name"
            }, [e.help ? o("el-popover", {
                staticClass: "item",
                attrs: {
                    effect: "dark",
                    width: "300",
                    trigger: "hover",
                    placement: "bottom-start"
                }
            }, [o("div", {
                staticClass: "group-help-content",
                domProps: {
                    innerHTML: e._s(e.help)
                }
            }), o("i", {
                staticClass: "el-icon-bell group-help-icon",
                attrs: {
                    slot: "reference"
                },
                slot: "reference"
            })]) : e._e(), e._v(" " + e._s(e.name) + " ")], 1)]), o("div", {
                staticClass: "group-children"
            }, [e._t("default")], 2)])
        }
          , ri = []
          , ti = {
            props: {
                name: String,
                help: String
            },
            data() {
                return {
                    visible: !0
                }
            }
        }
          , ai = ti
          , _i = (n("e753"),
        Object(je["a"])(ai, si, ri, !1, null, null, null))
          , ui = _i.exports
          , li = function() {
            var e = this
              , o = e._self._c;
            return o("div", [o("el-upload", {
                class: ["image-uploader", {
                    "image-height": "" === e.imageURL
                }, {
                    "image-dash-border": e.uploaded
                }],
                attrs: {
                    action: "",
                    "auto-upload": !1,
                    "on-change": e.handleChange,
                    "on-remove": e.handleRemove,
                    limit: 1
                }
            }, ["" !== e.imageURL ? o("img", {
                staticClass: "image",
                attrs: {
                    src: e.imageURL,
                    alt: "invalid url"
                },
                on: {
                    mouseenter: function(o) {
                        e.hover = !0
                    },
                    error: e.handleErrorImage
                }
            }) : o("i", {
                staticClass: "el-icon-plus image-uploader-icon",
                on: {
                    mouseenter: function(o) {
                        e.hover = !0
                    }
                }
            }), e.hover ? o("div", {
                staticClass: "image-overlay",
                on: {
                    mouseleave: function(o) {
                        e.hover = !1
                    },
                    click: e.handleClickOverlay
                }
            }, [e.allowOnline ? o("div", [e.uploaded ? e._e() : o("el-button", {
                attrs: {
                    icon: "el-icon-upload",
                    type: "primary"
                }
            }, [e._v("Local")]), e.uploaded ? e._e() : o("el-button", {
                attrs: {
                    icon: "el-icon-upload",
                    type: "primary"
                },
                on: {
                    click: e.handleUploadOnline
                }
            }, [e._v("Online")])], 1) : e._e()]) : e._e()]), o("el-dialog", {
                attrs: {
                    title: "Upload online image",
                    visible: e.showUploadDialog,
                    "append-to-body": ""
                },
                on: {
                    "update:visible": function(o) {
                        e.showUploadDialog = o
                    }
                }
            }, [o("el-input", {
                model: {
                    value: e.onlineImageURL,
                    callback: function(o) {
                        e.onlineImageURL = o
                    },
                    expression: "onlineImageURL"
                }
            }), o("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [o("el-button", {
                on: {
                    click: function(o) {
                        e.showUploadDialog = !1
                    }
                }
            }, [e._v("Cancel")]), o("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleConfirmOnline
                }
            }, [e._v("Confirm")])], 1)], 1)], 1)
        }
          , mi = []
          , pi = n("31bf");
        function ci(e) {
            const o = new FileReader;
            return o.readAsDataURL(e),
            new Promise(e=>{
                o.onload = ()=>{
                    e(o.result)
                }
            }
            )
        }
        function di(e, o) {
            const n = document.createElement("a");
            n.download = o,
            n.href = e.toDataURL("image/png"),
            document.body.appendChild(n),
            n.click(),
            n.remove()
        }
        function vi(e, o) {
            const n = new File([JSON.stringify(e)],o + ".json",{
                type: "text/plain;charset=utf-8"
            });
            Object(pi["saveAs"])(n)
        }
        var gi = {
            model: {
                prop: "imageURL",
                event: "change"
            },
            props: {
                imageURL: String,
                cacheImage: {
                    type: Boolean,
                    default: !0
                },
                allowOnline: {
                    type: Boolean,
                    default: !0
                }
            },
            data() {
                return {
                    uploaded: !1,
                    hover: !1,
                    showUploadDialog: !1,
                    onlineImageURL: "",
                    preImageURL: ""
                }
            },
            watch: {
                imageURL(e, o) {
                    this.preImageURL = o
                }
            },
            methods: {
                async handleChange(e) {
                    const o = await ci(e.raw);
                    this.uploaded = !0,
                    this.$emit("change", o)
                },
                handleRemove() {
                    this.uploaded = !1,
                    this.hover = !1,
                    this.cacheImage || this.$emit("change", "")
                },
                handleUploadOnline(e) {
                    e.stopPropagation(),
                    this.showUploadDialog = !0
                },
                handleClickOverlay(e) {
                    this.uploaded && (Ee.a.error("Please delete uploaded image first!"),
                    e.stopPropagation())
                },
                handleConfirmOnline() {
                    this.onlineImageURL ? this.$emit("change", this.onlineImageURL) : Ee.a.error("Please provide non-empty url!"),
                    this.showUploadDialog = !1
                },
                handleErrorImage() {
                    Ee.a.error("Invalid image url!"),
                    this.$emit("change", this.preImageURL)
                }
            }
        }
          , fi = gi
          , ji = (n("f46a"),
        Object(je["a"])(fi, li, mi, !1, null, null, null))
          , ki = ji.exports
          , hi = function() {
            var e = this
              , o = e._self._c;
            return o("field", {
                attrs: {
                    name: e.name
                },
                scopedSlots: e._u([{
                    key: "name",
                    fn: function() {
                        return [o("span", {
                            style: e.cursorStyle,
                            on: {
                                mousedown: e.handleMouseDown
                            }
                        }, [e._v(e._s(e.name))])]
                    },
                    proxy: !0
                }])
            }, [o("el-input-number", {
                attrs: {
                    "controls-position": "right",
                    min: e.min,
                    max: e.max,
                    step: e.step,
                    size: "small"
                },
                model: {
                    value: e.numberValue,
                    callback: function(o) {
                        e.numberValue = o
                    },
                    expression: "numberValue"
                }
            }), e.showOverlay ? o("div", {
                staticClass: "input-number-overlay",
                style: e.cursorStyle,
                on: {
                    mouseup: e.handleMouseUp,
                    mousemove: e.handleMouseMove
                }
            }) : e._e()], 1)
        }
          , bi = []
          , wi = {
            components: {
                Field: ii
            },
            props: {
                min: {
                    type: Number,
                    default: -1 / 0
                },
                max: {
                    type: Number,
                    default: 1 / 0
                },
                value: Number,
                step: Number,
                name: String
            },
            data() {
                return {
                    showOverlay: !1,
                    x: 0,
                    initValue: 0
                }
            },
            computed: {
                numberValue: {
                    get() {
                        return this.value
                    },
                    set(e) {
                        this.$emit("input", e)
                    }
                },
                cursorStyle() {
                    let e;
                    return e = this.value <= this.min ? "e-resize" : this.value >= this.max ? "w-resize" : "ew-resize",
                    {
                        cursor: e
                    }
                }
            },
            methods: {
                handleMouseDown({clientX: e}) {
                    this.showOverlay = !0,
                    this.x = e,
                    this.initValue = this.value
                },
                handleMouseUp() {
                    this.showOverlay = !1
                },
                handleMouseMove({clientX: e}) {
                    const o = e - this.x
                      , n = this.initValue + o;
                    this.$emit("input", n)
                }
            }
        }
          , yi = wi
          , Si = (n("e6d5"),
        Object(je["a"])(yi, hi, bi, !1, null, null, null))
          , xi = Si.exports
          , Ci = function() {
            var e = this
              , o = e._self._c;
            return o("div", [o("field", {
                attrs: {
                    name: e.name
                }
            }, [o("span", {
                staticClass: "collapse-icon-container"
            }, [o("i", {
                staticClass: "collapse-icon el-icon-arrow-up",
                style: e.iconStyle,
                on: {
                    click: function(o) {
                        e.open = !e.open
                    }
                }
            })])]), o("el-collapse-transition", [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.open,
                    expression: "open"
                }],
                staticClass: "collapse-children",
                style: {
                    paddingLeft: e.indent ? "1em" : 0
                }
            }, [e._t("default")], 2)])], 1)
        }
          , Fi = []
          , zi = {
            components: {
                Field: ii
            },
            props: {
                name: String,
                indent: {
                    type: Boolean,
                    default: !0
                },
                defaultOpen: {
                    type: Boolean,
                    default: !0
                },
                maxHeight: {
                    type: Number,
                    default: 500
                }
            },
            data() {
                return {
                    open: this.defaultOpen
                }
            },
            computed: {
                iconStyle() {
                    return {
                        transform: `rotateZ(${this.open ? 0 : 180}deg)`
                    }
                },
                childrenStyle() {
                    return this.open ? {} : {
                        height: "0px"
                    }
                }
            }
        }
          , Li = zi
          , Ii = (n("e415"),
        Object(je["a"])(Li, Ci, Fi, !1, null, null, null))
          , Ei = Ii.exports
          , Oi = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "symbol-input-container"
            }, [o("el-popover", {
                attrs: {
                    placement: "top",
                    width: "300",
                    trigger: "focus"
                }
            }, [o("div", {
                staticClass: "emoji-input-popover"
            }, [o("el-tabs", {
                attrs: {
                    value: "first"
                }
            }, [o("el-tab-pane", {
                attrs: {
                    label: "w(ﾟДﾟ)w",
                    name: "first"
                }
            }, [o("emoticon-picker", {
                on: {
                    input: e.handleInput
                }
            })], 1), o("el-tab-pane", {
                attrs: {
                    label: "Emoji 😆",
                    name: "second"
                }
            }, [o("emoji-picker", {
                on: {
                    input: e.handleInput
                }
            })], 1)], 1)], 1), o("el-input", {
                style: {
                    width: "200px"
                },
                attrs: {
                    slot: "reference",
                    id: "emojiInput",
                    placeholder: e.placeholder,
                    size: e.size,
                    type: "textarea",
                    autosize: ""
                },
                slot: "reference",
                model: {
                    value: e.textValue,
                    callback: function(o) {
                        e.textValue = o
                    },
                    expression: "textValue"
                }
            })], 1)], 1)
        }
          , Mi = []
          , Di = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "emoji-picker-container"
            }, [o("el-tabs", {
                attrs: {
                    "tab-position": "bottom"
                },
                model: {
                    value: e.selectedName,
                    callback: function(o) {
                        e.selectedName = o
                    },
                    expression: "selectedName"
                }
            }, e._l(e.emojiGroups, (function(n) {
                return o("el-tab-pane", {
                    key: n.name,
                    attrs: {
                        label: n.emoji,
                        name: n.name
                    }
                }, [o("div", {
                    staticClass: "emoji-picker-content"
                }, e._l(e.emojis, (function(n) {
                    return o("span", {
                        key: n.name,
                        staticClass: "emoji-picker-item",
                        on: {
                            click: ()=>e.handleClick(n)
                        }
                    }, [e._v(e._s(n.emoji))])
                }
                )), 0)])
            }
            )), 1)], 1)
        }
          , Bi = []
          , Ti = n("c604");
        const Ni = Object.keys(Ti).map(e=>({
            name: e,
            emoji: Ti[e][0].emoji
        }));
        var Ri = {
            data() {
                return {
                    emojiGroups: Ni,
                    selectedName: Ni[0].name
                }
            },
            computed: {
                emojis() {
                    return Ti[this.selectedName]
                }
            },
            methods: {
                handleClick(e) {
                    this.$emit("input", e.emoji)
                }
            }
        }
          , Wi = Ri
          , Hi = (n("1fee"),
        Object(je["a"])(Wi, Di, Bi, !1, null, null, null))
          , Pi = Hi.exports
          , Ui = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "emoticon-picker-container"
            }, [o("div", {
                staticClass: "emoticon-picker-header"
            }, [o("el-button", {
                attrs: {
                    type: "primary",
                    size: "mini"
                },
                on: {
                    click: e.generateEmotion
                }
            }, [e._v("Refresh")]), o("span", {
                staticClass: "emoticon-picker-item",
                on: {
                    click: ()=>e.handleClick(e.randomEmoticon)
                }
            }, [e._v(e._s(e.randomEmoticon))])], 1), o("div", {
                staticClass: "emoticon-picker-content"
            }, e._l(e.faces, (function(n) {
                return o("span", {
                    key: n,
                    staticClass: "emoticon-picker-item",
                    on: {
                        click: ()=>e.handleClick(n)
                    }
                }, [e._v(e._s(n))])
            }
            )), 0)])
        }
          , Ai = []
          , qi = n("bb51")
          , Zi = n.n(qi)
          , Ji = n("7786")
          , Gi = {
            data() {
                return {
                    randomEmoticon: Zi()(),
                    faces: Ji
                }
            },
            methods: {
                generateEmotion() {
                    this.randomEmoticon = Zi()()
                },
                handleClick(e) {
                    this.$emit("input", e)
                }
            }
        }
          , $i = Gi
          , Vi = (n("0f57"),
        Object(je["a"])($i, Ui, Ai, !1, null, null, null))
          , Yi = Vi.exports
          , Xi = {
            components: {
                EmojiPicker: Pi,
                EmoticonPicker: Yi
            },
            props: {
                placeholder: String,
                size: String,
                value: String
            },
            computed: {
                textValue: {
                    get() {
                        return this.value
                    },
                    set(e) {
                        this.$emit("input", e)
                    }
                }
            },
            methods: {
                handleInput(e) {
                    const o = document.getElementById("emojiInput")
                      , {selectionStart: n, selectionEnd: i} = o;
                    if (void 0 === n || void 0 === i)
                        return;
                    const s = this.textValue.substring(0, n) + e + this.textValue.substring(i);
                    o.value = s,
                    o.focus(),
                    o.selectionStart = n + e.length,
                    o.selectionEnd = n + e.length,
                    this.textValue = s
                }
            }
        }
          , Ki = Xi
          , Qi = (n("abb8"),
        Object(je["a"])(Ki, Oi, Mi, !1, null, null, null))
          , es = Qi.exports
          , os = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "color-palette-container",
                style: {
                    borderColor: e.over ? "#409EFF" : "#d9d9d9"
                },
                on: {
                    dragover: e.handleDragover,
                    drop: e.handleDrop,
                    dragleave: function(o) {
                        e.over = !1
                    }
                }
            }, [0 === e.colors.length ? o("div", {
                staticClass: "color-empty-wrapper",
                on: {
                    mouseover: function(o) {
                        e.showButtons = !0
                    },
                    mouseleave: function(o) {
                        e.showButtons = !1
                    }
                }
            }, [o("el-empty", {
                style: {
                    opacity: e.showButtons ? 0 : 1
                },
                attrs: {
                    description: "拖拽颜色到此处添加。"
                }
            }), e.showButtons ? o("div", {
                staticClass: "color-palette-btns"
            }, [o("el-button", {
                attrs: {
                    icon: "el-icon-plus",
                    type: "primary",
                    size: "small"
                },
                on: {
                    click: function(o) {
                        e.showColorsStore = !0
                    }
                }
            }, [e._v("预设配色")]), o("el-button", {
                attrs: {
                    icon: "el-icon-plus",
                    type: "primary",
                    size: "small"
                },
                on: {
                    click: function(o) {
                        e.showImageExtractor = !0
                    }
                }
            }, [e._v("从图片导入")])], 1) : e._e()], 1) : o("div", {
                staticClass: "color-palette-colors"
            }, [e._l(e.colors, (function(n) {
                return o("span", {
                    key: n,
                    staticClass: "color-palette-item",
                    style: {
                        background: n
                    },
                    attrs: {
                        draggable: "true"
                    },
                    on: {
                        dragstart: o=>e.handleDragStart(o, n)
                    }
                })
            }
            )), o("el-popover", {
                attrs: {
                    placement: "bottom",
                    trigger: "hover"
                }
            }, [o("el-button", {
                attrs: {
                    icon: "el-icon-plus",
                    type: "primary",
                    size: "small"
                },
                on: {
                    click: function(o) {
                        e.showColorsStore = !0
                    }
                }
            }, [e._v("预设配色")]), o("el-button", {
                attrs: {
                    icon: "el-icon-plus",
                    type: "primary",
                    size: "small"
                },
                on: {
                    click: function(o) {
                        e.showImageExtractor = !0
                    }
                }
            }, [e._v("从图片导入")]), o("i", {
                staticClass: "el-icon-circle-plus-outline",
                style: {
                    float: "left",
                    cursor: "pointer",
                    lineHeight: "30px"
                },
                attrs: {
                    slot: "reference"
                },
                slot: "reference"
            })], 1)], 2), o("el-dialog", {
                attrs: {
                    title: "预设配色",
                    width: "1000px",
                    visible: e.showColorsStore
                },
                on: {
                    "update:visible": function(o) {
                        e.showColorsStore = o
                    }
                }
            }, [o("el-tabs", {
                attrs: {
                    value: e.colorStore[0].name
                }
            }, e._l(e.colorStore, (function(n) {
                return o("el-tab-pane", {
                    key: n.name,
                    attrs: {
                        label: n.name,
                        name: n.name
                    }
                }, [o("p", {
                    staticClass: "color-palette-des",
                    domProps: {
                        innerHTML: e._s(n.des)
                    }
                }), o("div", {
                    staticClass: "color-palette-tab-container"
                }, e._l(n.colors, (function(n) {
                    return o("div", {
                        key: n.name || n.values.join("")
                    }, [o("div", {
                        on: {
                            click: ()=>e.handleAddColors(n.values)
                        }
                    }, [o("el-card", {
                        style: {
                            width: e.cardSize + "px",
                            height: e.cardSize + "px",
                            margin: "0px 8px",
                            cursor: "pointer"
                        },
                        attrs: {
                            shadow: "hover"
                        }
                    }, e._l(n.values, (function(i) {
                        return o("div", {
                            key: i,
                            style: {
                                background: i,
                                width: "100%",
                                height: e.cardSize / (n.values.length || 1) + "px"
                            }
                        })
                    }
                    )), 0)], 1), o("div", {
                        style: {
                            height: "30px",
                            width: e.cardSize + "px",
                            margin: " 6px 8px"
                        }
                    }, [o("span", [e._v(e._s(n.name || "Learn More"))]), n.link ? o("span", {
                        staticClass: "color-palette-link"
                    }, [o("el-link", {
                        attrs: {
                            href: n.link,
                            target: "_blank",
                            underline: !1
                        }
                    }, [o("i", {
                        staticClass: "el-icon-link",
                        staticStyle: {
                            "font-size": "16px"
                        }
                    })])], 1) : e._e()])])
                }
                )), 0)])
            }
            )), 1), o("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [o("el-button", {
                on: {
                    click: function(o) {
                        e.showColorsStore = !1
                    }
                }
            }, [e._v("Cancel")])], 1)], 1), o("el-dialog", {
                attrs: {
                    title: "从图像中提取颜色",
                    visible: e.showImageExtractor
                },
                on: {
                    "update:visible": function(o) {
                        e.showImageExtractor = o
                    }
                }
            }, [o("image-color-picker", {
                model: {
                    value: e.selectedImageColors,
                    callback: function(o) {
                        e.selectedImageColors = o
                    },
                    expression: "selectedImageColors"
                }
            }), o("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [o("el-button", {
                on: {
                    click: e.handleCloseImageColorPicker
                }
            }, [e._v("Cancel")]), o("el-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 !== e.selectedImageColors.length,
                    expression: "selectedImageColors.length !== 0"
                }],
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleAddImageColors
                }
            }, [e._v("Add")])], 1)], 1)], 1)
        }
          , ns = [];
        const is = {
            name: "品牌",
            des: "来自各大品牌的配色",
            colors: [{
                name: "蚂蚁集团",
                values: ["#147bfb"],
                link: "https://www.antgroup.com/"
            }, {
                name: "阿里巴巴",
                values: ["#DD4B22"],
                link: "https://www.alibabagroup.com/cn/global/home"
            }, {
                name: "哔哩哔哩",
                values: ["#fa729a"],
                link: "https://www.bilibili.com/"
            }, {
                name: "语雀",
                values: ["#30CD7A", "#7FE160"],
                link: "https://www.yuque.com/"
            }, {
                name: "抖音",
                values: ["#111111", "#10faef", "#ff0050"],
                link: "https://www.douyin.com/"
            }, {
                name: "微软",
                values: ["#00ACEE", "#8cc33c", "#fbc30c", "#f26323"],
                link: "https://www.microsoft.com/zh-cn"
            }, {
                name: "谷歌",
                values: ["#4484f1", "#35a454", "#F8BA03", "#ed6828"],
                link: "https://www.google.com/"
            }, {
                name: "X（原Twitter）",
                values: ["#1ca4f4"],
                link: "https://twitter.com"
            }, {
                name: "Facebook",
                values: ["#1977F3"],
                link: "https://www.facebook.com/"
            }, {
                name: "Github",
                values: ["#24292e"],
                link: "https://github.com/"
            }, {
                name: "Figma",
                values: ["#fe5303", "#b757ff", "#00d5ff", "#03ed81"],
                link: "https://www.figma.com"
            }, {
                name: "AntV",
                values: ["#792ef7", "#f99220"],
                link: "https://antv.vision"
            }, ]
        }
          , ss = {
            name: "NBA",
            des: "<span>来自一些 <a href='https://china.nba.com/' target='_blank'>NBA</a>球队的配色</span>",
            colors: [{
                name: "波士顿凯尔特人",
                values: ["#145b33"]
            }, {
                name: "洛杉矶湖人",
                values: ["#FBB82C", "#4F237C"]
            }, {
                name: "金州勇士",
                values: ["#004AB9", "#FDCE26"]
            }, {
                name: "芝加哥公牛",
                values: ["#c40827", "#10090a"]
            }, {
                name: "俄克拉荷马雷霆",
                values: ["#18385e", "#c75849", "#5ca0bf"]
            }, {
                name: "圣安东尼奥马刺",
                values: ["#090a0a", "#747677", "#d7d9da"]
            }]
        }
          , rs = {
            name: "Color Hunt",
            owner: !1,
            des: "<span>一个很棒的配色网站<a href='https://colorhunt.co/' target='_blank'>Color Hunt</a>.</span>",
            colors: [{
                values: ["#110133", "#00918E", "#4DD599", "#FFDC34"],
                link: "https://colorhunt.co/palette/11013300918e4dd599ffdc34"
            }, {
                values: ["#222831", "#393E46", "#00ADB5", "#EEEEEE"],
                link: "https://colorhunt.co/palette/222831393e4600adb5eeeeee"
            }, {
                values: ["#383E56", "#F69E7B", "#EEDAD1", "#D4B5B0"],
                link: "https://colorhunt.co/palette/383e56f69e7beedad1d4b5b0"
            }, {
                values: ["#08D9D6", "#252A34", "#FF2E63", "#EAEAEA"],
                link: "https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea"
            }, {
                values: ["#A8E6CF", "#DCEDC1", "#FFD3B6", "#FFAAA5"],
                link: "https://colorhunt.co/palette/a8e6cfdcedc1ffd3b6ffaaa5"
            }, {
                values: ["#3A0088", "#930077", "#E61C5D", "#FFBD39"],
                link: "https://colorhunt.co/palette/3a0088930077e61c5dffbd39"
            }, {
                values: ["#222831", "#393E46", "#FFD369", "#EEEEEE"],
                link: "https://colorhunt.co/palette/222831393e46ffd369eeeeee"
            }, {
                values: ["#28DF99", "#99F3BD", "#D2F6C5", "#F6F7D4"],
                link: "https://colorhunt.co/palette/28df9999f3bdd2f6c5f6f7d4"
            }, {
                values: ["#2D4059", "#ea5455", "#F07B3F", "#FFD460"],
                link: "https://colorhunt.co/palette/2d4059ea5455f07b3fffd460"
            }, {
                values: ["#FFA45B", "#FFDA77", "#FBF6F0", "#AEE6E6"],
                link: "https://colorhunt.co/palette/ffa45bffda77fbf6f0aee6e6"
            }, {
                values: ["#FFC93C", "#07689F", "#40A8C4", "#A2D5F2"],
                link: "https://colorhunt.co/palette/ffc93c07689f40a8c4a2d5f2"
            }, {
                values: ["#483434", "#6B4F4F", "#EED6C4", "#FFF3E4"],
                link: "https://colorhunt.co/palette/4834346b4f4feed6c4fff3e4"
            }]
        }
          , ts = {
            name: "守望先锋",
            des: "<span>来自<a href='https://ow.blizzard.cn/home' target='_blank'>守望先锋</a>英雄的配色</span>",
            colors: [{
                name: "卡西迪",
                values: ["#583d33", "#9e3b37", "#d87265"],
                link: "https://ow.blizzard.cn/heroes/cassidy"
            }, {
                name: "卢西奥",
                values: ["#6f9636", "#92d25e", "#f7e700"],
                link: "https://ow.blizzard.cn/heroes/lucio"
            }, {
                name: "安娜",
                values: ["#294775", "#437bd2", "#d1cfcf"],
                link: "https://ow.blizzard.cn/heroes/ana"
            }, {
                name: "猎空",
                values: ["#372923", "#e97e18", "#efd496"],
                link: "https://ow.blizzard.cn/heroes/tracer"
            }, {
                name: "艾什",
                values: ["#3c3234", "#82695c", "#fbe88a"],
                link: "https://ow.blizzard.cn/heroes/ashe"
            }, {
                name: "西格玛",
                values: ["#3b4766", "#5f7890", "#5eb3b5"],
                link: "https://ow.blizzard.cn/heroes/sigma"
            }, {
                name: "黑影",
                values: ["#3f1a7e", "#695fb4", "#d0a3e6"],
                link: "https://ow.blizzard.cn/heroes/sombra"
            }, {
                name: "回声",
                values: ["#3aa3f6", "#59baf7", "#daeaed"],
                link: "https://ow.blizzard.cn/heroes/echo"
            }, {
                name: "死神",
                values: ["#0c111b", "#5c6067", "#aeaba8"],
                link: "https://ow.blizzard.cn/heroes/reaper"
            }, {
                name: "D.Va",
                values: ["#645a8d", "#6566b9", "#ed9ec3"],
                link: "https://ow.blizzard.cn/heroes/dva"
            }, {
                name: "末日铁拳",
                values: ["#6b5546", "#99725c", "#a09679"],
                link: "https://ow.blizzard.cn/heroes/doomfist"
            }, {
                name: "黑百合",
                values: ["#3d4981", "#9fb4e2", "#f0e4eb"],
                link: "https://ow.blizzard.cn/heroes/widowmaker"
            }]
        }
          , as = {
            name: "漫威",
            des: "<span>来自<a href='https://www.marvel.com/' target='_blank'>漫威</a>中角色的配色</span>",
            colors: [{
                name: "绯红女巫",
                values: ["#bd3232", "#d98b94"],
                link: "https://www.marvel.com/characters/scarlet-witch-wanda-maximoff"
            }, {
                name: "钢铁侠",
                values: ["#b93233", "#eabe4f"],
                link: "https://www.marvel.com/characters/iron-man-tony-stark"
            }, {
                name: "美国队长",
                values: ["#4992cd", "#d93343"],
                link: "https://www.marvel.com/characters/captain-america-steve-rogers"
            }, {
                name: "蜘蛛侠",
                values: ["#f45552", "#6f9cf6"],
                link: "https://www.marvel.com/characters/spider-man-peter-parker"
            }, {
                name: "雷神",
                values: ["#ecdc75", "#8c9ed9"],
                link: "https://www.marvel.com/characters/thor-thor-odinson"
            }, {
                name: "浩克",
                values: ["#7bbc5c", "#836cc1"],
                link: "https://www.marvel.com/characters/hulk-bruce-banner"
            }]
        }
          , _s = {
            name: "艺术品",
            des: "来自著名艺术品的配色",
            colors: [{
                name: "IKB 79",
                values: ["#1f1cc1"],
                link: "https://en.wikipedia.org/wiki/International_Klein_Blue"
            }, {
                name: "蒙德里安",
                values: ["#D6281D", "#e8d365", "#055C9F"],
                link: "https://en.wikipedia.org/wiki/Piet_Mondrian"
            }, {
                name: "日出·印象",
                values: ["#566c70", "#a5babd", "#D4715E"],
                link: "https://en.wikipedia.org/wiki/Impression,_Sunrise"
            }, {
                name: "蒙娜丽莎",
                values: ["#2c1f26", "#65452c", "#66734b", "#9ba069"],
                link: "https://en.wikipedia.org/wiki/Mona_Lisa"
            }, {
                name: "召唤使徒马太",
                values: ["#0d0b07", "#3f2b1a", "#6d4928", "#ac864d"],
                link: "https://en.wikipedia.org/wiki/The_Calling_of_St_Matthew_(Caravaggio)"
            }, {
                name: "星月夜",
                values: ["#1a366c", "#4c6389", "#7792c1", "#CEB03E"],
                link: "https://en.wikipedia.org/wiki/The_Starry_Night"
            }]
        }
          , us = [is, as, ts, ss, _s, rs];
        var ls = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "image-color-picker-container"
            }, [o("image-picker", {
                attrs: {
                    allowOnline: !1,
                    cacheImage: !1
                },
                model: {
                    value: e.imageURL,
                    callback: function(o) {
                        e.imageURL = o
                    },
                    expression: "imageURL"
                }
            }), o("div", {
                staticClass: "image-color-picker-colors"
            }, [e.imageColors.length ? o("div", {
                staticStyle: {
                    color: "#606266",
                    "font-size": "14px"
                }
            }, [e._v(" Click to select " + e._s(e.maxCount === 1 / 0 ? "" : `up to ${e.maxCount} `) + "colors you want to use. ")]) : e._e(), e._l(e.imageColors, (function(n, i) {
                return o("span", {
                    key: n,
                    staticClass: "image-color-picker-color-item",
                    style: {
                        backgroundColor: n,
                        borderColor: -1 === e.selectedImageColorIndex.indexOf(i) ? n : "#409eff"
                    },
                    on: {
                        click: ()=>e.handleClickImageColorItem(i)
                    }
                })
            }
            ))], 2)], 1)
        }
          , ms = []
          , ps = n("7aa5");
        const cs = (e,o,n)=>"#" + [e, o, n].map(e=>{
            const o = e.toString(16);
            return 1 === o.length ? "0" + o : o
        }
        ).join("")
          , ds = new ps["a"];
        var vs = {
            props: {
                maxCount: {
                    type: Number,
                    default: 1 / 0
                },
                value: {
                    type: Array,
                    default: ()=>[]
                }
            },
            components: {
                ImagePicker: ki
            },
            data() {
                return {
                    imageURL: "",
                    imageColors: []
                }
            },
            computed: {
                selectedImageColorIndex: {
                    get() {
                        return console.log({
                            value: this.value
                        }),
                        this.value.map(e=>this.imageColors.findIndex(o=>e === o)).filter(e=>-1 !== e)
                    },
                    set(e) {
                        const o = e.map(e=>this.imageColors[e]);
                        this.$emit("input", o)
                    }
                }
            },
            watch: {
                imageURL: {
                    immediate: !0,
                    async handler(e) {
                        if ("" === e)
                            return this.imageColors = [],
                            void (this.selectedImageColorIndex = []);
                        try {
                            const o = await no(e)
                              , n = ds.getPalette(o).map(e=>cs(...e));
                            this.imageColors = n
                        } catch (o) {
                            Ee.a.error("Extract colors from image failed!")
                        }
                    }
                }
            },
            methods: {
                handleClickImageColorItem(e) {
                    const o = this.selectedImageColorIndex.indexOf(e)
                      , n = [...this.selectedImageColorIndex];
                    if (-1 === o) {
                        if (this.selectedImageColorIndex.length >= this.maxCount)
                            return void Ee.a.error(`Only can select ${this.maxCount} colors.`);
                        n.push(e)
                    } else
                        n.splice(o, 1);
                    this.selectedImageColorIndex = n
                }
            }
        }
          , gs = vs
          , fs = (n("0d74"),
        Object(je["a"])(gs, ls, ms, !1, null, null, null))
          , js = fs.exports
          , ks = {
            data() {
                return {
                    showColorsStore: !1,
                    colorStore: us,
                    cardSize: 200,
                    colors: [],
                    showButtons: !1,
                    showImageExtractor: !1,
                    selectedImageColors: [],
                    over: !1
                }
            },
            components: {
                ImageColorPicker: js
            },
            methods: {
                handleDragover(e) {
                    e.preventDefault(),
                    e.dataTransfer.dropEffect = "move",
                    this.over = !0
                },
                handleDrop(e) {
                    const o = e.dataTransfer.getData("drag-color")
                      , {value: n} = JSON.parse(o);
                    this.handleAddColors([n]),
                    this.over = !1
                },
                handleAddImageColors() {
                    const e = [...this.selectedImageColors];
                    this.handleAddColors(e),
                    this.handleCloseImageColorPicker()
                },
                handleCloseImageColorPicker() {
                    this.showImageExtractor = !1,
                    this.selectedImageColors = []
                },
                handleAddColors(e) {
                    if (0 === e.length)
                        return;
                    const o = new Set(this.colors)
                      , n = e.filter(e=>!o.has(e));
                    e.length !== n.length && Ee.a.warning("Repeat colors will not be added."),
                    this.colors.push(...n),
                    this.showColorsStore = !1
                },
                handleDeleteColor(e) {
                    this.colors.splice(e, 1)
                },
                handleDragStart(e, o) {
                    const n = JSON.stringify({
                        value: o
                    });
                    e.dataTransfer.setData("drag-color", n)
                }
            }
        }
          , hs = ks
          , bs = (n("3da8"),
        Object(je["a"])(hs, os, ns, !1, null, null, null))
          , ws = bs.exports
          , ys = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "color-field",
                style: {
                    background: e.over ? "#eee" : "white"
                },
                attrs: {
                    draggable: ""
                },
                on: {
                    dragover: e.handleDragover,
                    drop: e.handleDrop,
                    dragleave: function(o) {
                        e.over = !1
                    },
                    dragstart: e.handleDragStart
                }
            }, [o("field", {
                attrs: {
                    name: e.name
                }
            }, [o("el-color-picker", {
                attrs: {
                    size: "small",
                    predefine: e.predefineColors
                },
                model: {
                    value: e.color,
                    callback: function(o) {
                        e.color = o
                    },
                    expression: "color"
                }
            })], 1)], 1)
        }
          , Ss = []
          , xs = {
            props: {
                name: String,
                value: String,
                colorKey: String
            },
            components: {
                Field: ii
            },
            data() {
                return {
                    over: !1,
                    predefineColors: ["#ff4500", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585"]
                }
            },
            computed: {
                color: {
                    get() {
                        return this.value
                    },
                    set(e) {
                        this.$emit("input", e)
                    }
                }
            },
            methods: {
                handleDragStart(e) {
                    const o = JSON.stringify({
                        value: this.value,
                        key: this.colorKey
                    });
                    e.dataTransfer.setData("drag-color", o)
                },
                handleDragover(e) {
                    e.preventDefault(),
                    e.dataTransfer.dropEffect = "move",
                    this.over = !0
                },
                handleDrop(e) {
                    const o = e.dataTransfer.getData("drag-color")
                      , {value: n, key: i} = JSON.parse(o);
                    this.$emit("input", n),
                    this.over = !1,
                    i && this.$emit("update", {
                        key: i,
                        value: this.value
                    })
                }
            }
        }
          , Cs = xs
          , Fs = (n("f36a"),
        Object(je["a"])(Cs, ys, Ss, !1, null, null, null))
          , zs = Fs.exports
          , Ls = {
            name: "attribute-tree",
            components: {
                Field: ii,
                Group: ui,
                ImagePicker: ki,
                InputNumber: xi,
                Collapse: Ei,
                SymbolInput: es,
                ColorPalette: ws,
                ColorField: zs
            },
            props: {
                options: Object,
                values: Object
            },
            computed: {
                value: {
                    get() {
                        const {key: e} = this.options;
                        if (e)
                            return ro(this.values, e)
                    },
                    set(e) {
                        const {key: o, relations: n=[]} = this.options;
                        if (o) {
                            this.handleUpdate({
                                key: o,
                                value: e
                            });
                            for (const {trigger: o, actions: i} of n)
                                if (o === e)
                                    for (const {key: e, value: n, force: s} of i) {
                                        const o = ro(this.values, e);
                                        (void 0 === o || s) && this.handleUpdate({
                                            key: e,
                                            value: n
                                        })
                                    }
                        }
                    }
                }
            },
            methods: {
                handleUpdate(e) {
                    this.$emit("update", e)
                }
            }
        }
          , Is = Ls
          , Es = (n("a8c9"),
        Object(je["a"])(Is, Yn, Xn, !1, null, null, null))
          , Os = Es.exports;
        function Ms() {
            return [{
                type: "color",
                key: "color",
                name: "背景颜色",
                defaultValue: "#000"
            }, {
                type: "color",
                key: "foregroundColor",
                name: "线条颜色",
                defaultValue: "#89E089"
            }, {
                type: "number",
                key: "lineWidth",
                name: "线宽",
                defaultValue: 1,
                min: 1
            }, {
                type: "number",
                key: "width",
                name: "间隔宽度",
                min: 10,
                defaultValue: 50
            }, {
                type: "number",
                key: "rotation",
                name: "旋转角度",
                defaultValue: 0
            }]
        }
        function Ds() {
            return [{
                type: "color",
                key: "color",
                name: "背景颜色",
                defaultValue: "#000"
            }, {
                type: "color",
                key: "fillColor",
                name: "填充颜色",
                defaultValue: "#000"
            }, {
                type: "number",
                key: "size",
                name: "大小",
                defaultValue: 50,
                min: 0
            }, {
                type: "color",
                key: "strokeColor",
                name: "半径",
                defaultValue: "#000"
            }, {
                type: "number",
                key: "lineWidth",
                name: "线宽",
                defaultValue: 0,
                min: 1
            }, {
                type: "number",
                key: "width",
                name: "X轴间隔",
                min: 10,
                defaultValue: 110
            }, {
                type: "number",
                key: "height",
                name: "Y轴间隔",
                min: 10,
                defaultValue: 110
            }, {
                type: "number",
                key: "rotation",
                name: "旋转",
                defaultValue: 0
            }]
        }
        function Bs() {
            return [{
                type: "color",
                key: "color",
                name: "背景颜色",
                defaultValue: "#000"
            }, {
                type: "color",
                key: "foregroundColor",
                name: "线条颜色",
                defaultValue: "#89E089"
            }, {
                type: "number",
                key: "lineWidth",
                name: "线宽",
                defaultValue: 30,
                min: 0
            }, {
                type: "number",
                key: "width",
                name: "X轴间隔",
                min: 10,
                defaultValue: 130
            }, {
                type: "number",
                key: "height",
                name: "Y轴间隔",
                min: 10,
                defaultValue: 130
            }, {
                type: "number",
                key: "arcRadius",
                name: "弧径",
                defaultValue: 30
            }, {
                type: "number",
                key: "rotation",
                name: "旋转",
                defaultValue: 0
            }]
        }
        function Ts() {
            return [{
                type: "color",
                key: "color",
                name: "背景颜色",
                defaultValue: "#000"
            }, {
                type: "color",
                key: "fillColor",
                name: "填充颜色",
                defaultValue: "#000"
            }, {
                type: "number",
                key: "size",
                name: "大小",
                defaultValue: 20,
                min: 0
            }, {
                type: "color",
                key: "strokeColor",
                name: "半径",
                defaultValue: "#000"
            }, {
                type: "number",
                key: "lineWidth",
                name: "线宽",
                defaultValue: 0,
                min: 0
            }, {
                type: "number",
                key: "width",
                name: "X轴间隔",
                min: 10,
                defaultValue: 40
            }, {
                type: "number",
                key: "height",
                name: "Y轴间隔",
                min: 10,
                defaultValue: 40
            }, {
                type: "number",
                key: "rotation",
                name: "旋转",
                defaultValue: 0
            }, {
                type: "boolean",
                key: "staggered",
                name: "交错",
                defaultValue: !0
            }]
        }
        const Ns = {
            line: Ms,
            dot: Ds,
            wave: Bs,
            square: Ts
        };
        function Rs(e, o) {
            const n = ro(e, o + ".type")
              , i = Ns[n] || Ms;
            return i(e).map(({key: e, ...n})=>({
                key: `${o}.${e}`,
                ...n
            }))
        }
        function Ws(e, o) {
            const n = Rs(e, o);
            return n.filter(e=>"color" !== e.type)
        }
        function Hs(e, o, n) {
            const i = Rs(e, o);
            return i.filter(e=>"color" === e.type).map(({name: e, ...o})=>({
                name: `${n} - ${e}`,
                ...o
            }))
        }
        function Ps(e, o) {
            return Object.entries(Ns).map(([n,i])=>({
                trigger: n,
                actions: i(e).map(({key: e, defaultValue: n})=>({
                    key: `${o}.${e}`,
                    value: n
                }))
            }))
        }
        var Us = function(e) {
            if ("string" != typeof e)
                return !1;
            var o = "Arial";
            if (e.toLowerCase() == o.toLowerCase())
                return !0;
            var n = "a"
              , i = 100
              , s = 100
              , r = 100
              , t = document.createElement("canvas")
              , a = t.getContext("2d");
            t.width = s,
            t.height = r,
            a.textAlign = "center",
            a.fillStyle = "black",
            a.textBaseline = "middle";
            var _ = function(e) {
                a.clearRect(0, 0, s, r),
                a.font = i + "px " + e + ", " + o,
                a.fillText(n, s / 2, r / 2);
                var t = a.getImageData(0, 0, s, r).data;
                return [].slice.call(t).filter((function(e) {
                    return 0 != e
                }
                ))
            };
            return _(o).join("") !== _(e).join("")
        }
          , As = {
            windows: [{
                ch: "宋体",
                en: "SimSun"
            }, {
                ch: "黑体",
                en: "SimHei"
            }, {
                ch: "微软雅黑",
                en: "Microsoft Yahei"
            }, {
                ch: "微软正黑体",
                en: "Microsoft JhengHei"
            }, {
                ch: "楷体",
                en: "KaiTi"
            }, {
                ch: "新宋体",
                en: "NSimSun"
            }, {
                ch: "仿宋",
                en: "FangSong"
            }],
            "OS X": [{
                ch: "苹方",
                en: "PingFang SC"
            }, {
                ch: "华文黑体",
                en: "STHeiti"
            }, {
                ch: "华文楷体",
                en: "STKaiti"
            }, {
                ch: "华文宋体",
                en: "STSong"
            }, {
                ch: "华文仿宋",
                en: "STFangsong"
            }, {
                ch: "华文中宋",
                en: "STZhongsong"
            }, {
                ch: "华文琥珀",
                en: "STHupo"
            }, {
                ch: "华文新魏",
                en: "STXinwei"
            }, {
                ch: "华文隶书",
                en: "STLiti"
            }, {
                ch: "华文行楷",
                en: "STXingkai"
            }, {
                ch: "冬青黑体简",
                en: "Hiragino Sans GB"
            }, {
                ch: "兰亭黑-简",
                en: "Lantinghei SC"
            }, {
                ch: "翩翩体-简",
                en: "Hanzipen SC"
            }, {
                ch: "手札体-简",
                en: "Hannotate SC"
            }, {
                ch: "宋体-简",
                en: "Songti SC"
            }, {
                ch: "娃娃体-简",
                en: "Wawati SC"
            }, {
                ch: "魏碑-简",
                en: "Weibei SC"
            }, {
                ch: "行楷-简",
                en: "Xingkai SC"
            }, {
                ch: "雅痞-简",
                en: "Yapi SC"
            }, {
                ch: "圆体-简",
                en: "Yuanti SC"
            }],
            office: [{
                ch: "幼圆",
                en: "YouYuan"
            }, {
                ch: "隶书",
                en: "LiSu"
            }, {
                ch: "华文细黑",
                en: "STXihei"
            }, {
                ch: "华文楷体",
                en: "STKaiti"
            }, {
                ch: "华文宋体",
                en: "STSong"
            }, {
                ch: "华文仿宋",
                en: "STFangsong"
            }, {
                ch: "华文中宋",
                en: "STZhongsong"
            }, {
                ch: "华文彩云",
                en: "STCaiyun"
            }, {
                ch: "华文琥珀",
                en: "STHupo"
            }, {
                ch: "华文新魏",
                en: "STXinwei"
            }, {
                ch: "华文隶书",
                en: "STLiti"
            }, {
                ch: "华文行楷",
                en: "STXingkai"
            }, {
                ch: "方正舒体",
                en: "FZShuTi"
            }, {
                ch: "方正姚体",
                en: "FZYaoti"
            }],
            open: [{
                ch: "思源黑体",
                en: "Source Han Sans CN"
            }, {
                ch: "思源宋体",
                en: "Source Han Serif SC"
            }, {
                ch: "文泉驿微米黑",
                en: "WenQuanYi Micro Hei"
            }],
            hanyi: [{
                ch: "汉仪旗黑 40S",
                en: "HYQihei 40S"
            }, {
                ch: "汉仪旗黑 50S",
                en: "HYQihei 50S"
            }, {
                ch: "汉仪旗黑 60S",
                en: "HYQihei 60S"
            }, {
                ch: "汉仪大宋简",
                en: "HYDaSongJ"
            }, {
                ch: "汉仪楷体",
                en: "HYKaiti"
            }, {
                ch: "汉仪家书简",
                en: "HYJiaShuJ"
            }, {
                ch: "汉仪PP体简",
                en: "HYPPTiJ"
            }, {
                ch: "汉仪乐喵体简",
                en: "HYLeMiaoTi"
            }, {
                ch: "汉仪小麦体",
                en: "HYXiaoMaiTiJ"
            }, {
                ch: "汉仪程行体",
                en: "HYChengXingJ"
            }, {
                ch: "汉仪黑荔枝",
                en: "HYHeiLiZhiTiJ"
            }, {
                ch: "汉仪雅酷黑W",
                en: "HYYaKuHeiW"
            }, {
                ch: "汉仪大黑简",
                en: "HYDaHeiJ"
            }, {
                ch: "汉仪尚魏手书W",
                en: "HYShangWeiShouShuW"
            }],
            fangzheng: [{
                ch: "方正粗雅宋简体",
                en: "FZYaSongS-B-GB"
            }, {
                ch: "方正报宋简体",
                en: "FZBaoSong-Z04S"
            }, {
                ch: "方正粗圆简体",
                en: "FZCuYuan-M03S"
            }, {
                ch: "方正大标宋简体",
                en: "FZDaBiaoSong-B06S"
            }, {
                ch: "方正大黑简体",
                en: "FZDaHei-B02S"
            }, {
                ch: "方正仿宋简体",
                en: "FZFangSong-Z02S"
            }, {
                ch: "方正黑体简体",
                en: "FZHei-B01S"
            }, {
                ch: "方正琥珀简体",
                en: "FZHuPo-M04S"
            }, {
                ch: "方正楷体简体",
                en: "FZKai-Z03S"
            }, {
                ch: "方正隶变简体",
                en: "FZLiBian-S02S"
            }, {
                ch: "方正隶书简体",
                en: "FZLiShu-S01S"
            }, {
                ch: "方正美黑简体",
                en: "FZMeiHei-M07S"
            }, {
                ch: "方正书宋简体",
                en: "FZShuSong-Z01S"
            }, {
                ch: "方正舒体简体",
                en: "FZShuTi-S05S"
            }, {
                ch: "方正水柱简体",
                en: "FZShuiZhu-M08S"
            }, {
                ch: "方正宋黑简体",
                en: "FZSongHei-B07S"
            }, {
                ch: "方正宋三简体",
                en: "FZSong"
            }, {
                ch: "方正魏碑简体",
                en: "FZWeiBei-S03S"
            }, {
                ch: "方正细等线简体",
                en: "FZXiDengXian-Z06S"
            }, {
                ch: "方正细黑一简体",
                en: "FZXiHei I-Z08S"
            }, {
                ch: "方正细圆简体",
                en: "FZXiYuan-M01S"
            }, {
                ch: "方正小标宋简体",
                en: "FZXiaoBiaoSong-B05S"
            }, {
                ch: "方正行楷简体",
                en: "FZXingKai-S04S"
            }, {
                ch: "方正姚体简体",
                en: "FZYaoTi-M06S"
            }, {
                ch: "方正中等线简体",
                en: "FZZhongDengXian-Z07S"
            }, {
                ch: "方正准圆简体",
                en: "FZZhunYuan-M02S"
            }, {
                ch: "方正综艺简体",
                en: "FZZongYi-M05S"
            }, {
                ch: "方正彩云简体",
                en: "FZCaiYun-M09S"
            }, {
                ch: "方正隶二简体",
                en: "FZLiShu II-S06S"
            }, {
                ch: "方正康体简体",
                en: "FZKangTi-S07S"
            }, {
                ch: "方正超粗黑简体",
                en: "FZChaoCuHei-M10S"
            }, {
                ch: "方正新报宋简体",
                en: "FZNew BaoSong-Z12S"
            }, {
                ch: "方正新舒体简体",
                en: "FZNew ShuTi-S08S"
            }, {
                ch: "方正黄草简体",
                en: "FZHuangCao-S09S"
            }, {
                ch: "方正少儿简体",
                en: "FZShaoEr-M11S"
            }, {
                ch: "方正稚艺简体",
                en: "FZZhiYi-M12S"
            }, {
                ch: "方正细珊瑚简体",
                en: "FZXiShanHu-M13S"
            }, {
                ch: "方正粗宋简体",
                en: "FZCuSong-B09S"
            }, {
                ch: "方正平和简体",
                en: "FZPingHe-S11S"
            }, {
                ch: "方正华隶简体",
                en: "FZHuaLi-M14S"
            }, {
                ch: "方正瘦金书简体",
                en: "FZShouJinShu-S10S"
            }, {
                ch: "方正细倩简体",
                en: "FZXiQian-M15S"
            }, {
                ch: "方正中倩简体",
                en: "FZZhongQian-M16S"
            }, {
                ch: "方正粗倩简体",
                en: "FZCuQian-M17S"
            }, {
                ch: "方正胖娃简体",
                en: "FZPangWa-M18S"
            }, {
                ch: "方正宋一简体",
                en: "FZSongYi-Z13S"
            }, {
                ch: "方正剪纸简体",
                en: "FZJianZhi-M23S"
            }, {
                ch: "方正流行体简体",
                en: "FZLiuXingTi-M26S"
            }, {
                ch: "方正祥隶简体",
                en: "FZXiangLi-S17S"
            }, {
                ch: "方正粗活意简体",
                en: "FZCuHuoYi-M25S"
            }, {
                ch: "方正胖头鱼简体",
                en: "FZPangTouYu-M24S"
            }, {
                ch: "方正卡通简体",
                en: "FZKaTong-M19S"
            }, {
                ch: "方正艺黑简体",
                en: "FZYiHei-M20S"
            }, {
                ch: "方正水黑简体",
                en: "FZShuiHei-M21S"
            }, {
                ch: "方正古隶简体",
                en: "FZGuLi-S12S"
            }, {
                ch: "方正幼线简体",
                en: "FZYouXian-Z09S"
            }, {
                ch: "方正启体简体",
                en: "FZQiTi-S14S"
            }, {
                ch: "方正小篆体",
                en: "FZXiaoZhuanTi-S13T"
            }, {
                ch: "方正硬笔楷书简体",
                en: "FZYingBiKaiShu-S15S"
            }, {
                ch: "方正毡笔黑简体",
                en: "FZZhanBiHei-M22S"
            }, {
                ch: "方正硬笔行书简体",
                en: "FZYingBiXingShu-S16S"
            }]
        };
        const qs = [];
        for (var Zs in As)
            As[Zs].forEach(e=>{
                Us(e.en) && qs.push(e)
            }
            );
        const Js = Array.from(new Set(qs.map(e=>e.en)))
          , Gs = Js.map(e=>({
            name: e,
            fontURL: void 0
        }));
        var $s = n("2118")
          , Vs = n.n($s);
        const Ys = [{
            name: "Luckiest Guy",
            fontURL: Vs.a,
            type: "en"
        }];
        function Xs(e) {
            return {
                value: e.name,
                label: e.name + (e.type ? ` (${e.type})` : ""),
                template: `<span style="font-family:${e.name}">${e.name}</span>`,
                url: e.fontURL
            }
        }
        function Ks(e) {
            return [{
                type: "symbol-text",
                key: "text.content",
                name: "内容",
                placeholder: "Please input title"
            }, {
                name: "字体",
                type: "collapse",
                defaultOpen: !1,
                children: [{
                    type: "select-group",
                    key: "text.fontFamily",
                    name: "字体库",
                    groups: [{
                        label: "Online Fonts",
                        options: Ys.map(Xs)
                    }, {
                        label: "System Fonts",
                        options: Gs.map(Xs)
                    }],
                    relations: [...Ys, ...Gs].map(e=>({
                        trigger: e.name,
                        actions: [{
                            key: "text.fontURL",
                            value: e.fontURL,
                            force: !0
                        }]
                    }))
                }, {
                    type: "select",
                    key: "text.mode",
                    name: "尺寸",
                    options: [{
                        value: "none",
                        label: "正常"
                    }, {
                        value: "autoFit",
                        label: "自适应"
                    }, {
                        value: "constrain",
                        label: "自定义"
                    }],
                    relations: [{
                        trigger: "none",
                        actions: [{
                            key: "text.fontSize",
                            value: 200
                        }]
                    }, {
                        trigger: "autoFit",
                        actions: [{
                            key: "text.padding",
                            value: 0
                        }, {
                            key: "text.dy",
                            value: 0
                        }]
                    }, {
                        trigger: "constrain",
                        actions: [{
                            key: "text.fontSize",
                            value: 200
                        }, {
                            key: "text.padding",
                            value: 50
                        }, {
                            key: "text.dy",
                            value: 0
                        }]
                    }]
                }, ...Qs(e)]
            }, {
                type: "collapse",
                name: "样式",
                defaultOpen: !1,
                children: [{
                    type: "select",
                    key: "text.type",
                    name: "类型",
                    options: [{
                        value: "none",
                        label: "无"
                    }, {
                        value: "line",
                        label: "线条"
                    }, {
                        value: "dot",
                        label: "圆点"
                    }, {
                        value: "wave",
                        label: "波浪"
                    }, {
                        value: "square",
                        label: "方块"
                    }],
                    relations: Ps(e, "text")
                }, ...er(e)]
            }]
        }
        function Qs(e) {
            const o = ro(e, "text.mode")
              , n = {
                type: "number",
                key: "text.fontSize",
                name: "字体大小",
                min: 50
            }
              , i = {
                type: "number",
                key: "text.padding",
                name: "缩放",
                min: 0
            }
              , s = {
                type: "number",
                key: "text.dy",
                name: "Y轴偏移"
            };
            return "none" === o ? [n, s] : "autoFit" === o ? [i, s] : "constrain" === o ? [n, i, s] : void 0
        }
        function er(e) {
            const o = ro(e, "text.type");
            return o && "none" !== o ? Ws(e, "text") : []
        }
        var or = n("aa79")
          , nr = n.n(or);
        const ir = nr.a;
        function sr(e) {
            return [{
                type: "radio",
                key: "background.mode",
                name: "类型",
                options: [{
                    value: "image",
                    label: "图片"
                }, {
                    value: "pattern",
                    label: "默认"
                }],
                relations: [{
                    trigger: "image",
                    actions: [{
                        key: "background.imageURL",
                        value: ir
                    }]
                }, {
                    trigger: "pattern",
                    actions: [{
                        key: "background.type",
                        value: "none"
                    }, {
                        key: "background.color",
                        value: "#000000"
                    }]
                }]
            }, ...rr(e)]
        }
        function rr(e) {
            const o = ro(e, "background.mode");
            return "image" === o ? [{
                type: "image",
                key: "background.imageURL",
                name: "Image"
            }] : [{
                type: "collapse",
                name: "样式",
                defaultOpen: !1,
                children: [{
                    type: "select",
                    key: "background.type",
                    name: "类型",
                    options: [{
                        value: "none",
                        label: "无"
                    }, {
                        value: "line",
                        label: "线条"
                    }, {
                        value: "dot",
                        label: "圆点"
                    }, {
                        value: "wave",
                        label: "波浪"
                    }, {
                        value: "square",
                        label: "方块"
                    }],
                    relations: [{
                        trigger: "none",
                        actions: [{
                            key: "background.color",
                            value: "#000000"
                        }]
                    }, ...Ps(e, "background")]
                }, ...tr(e)]
            }]
        }
        function tr(e) {
            const o = ro(e, "background.type");
            return o && "none" !== o ? Ws(e, "background") : []
        }
        function ar(e) {
            return [..._r(e), ...ur(e)]
        }
        function _r(e) {
            const o = ro(e, "text.type");
            return o && "none" !== o ? Hs(e, "text", "字体") : [{
                type: "color",
                key: "text.color",
                name: "字体颜色"
            }]
        }
        function ur(e) {
            const o = ro(e, "background.mode")
              , n = ro(e, "background.type");
            return "image" === o ? [] : n && "none" !== n ? Hs(e, "background", "背景") : [{
                type: "color",
                key: "background.color",
                name: "背景颜色"
            }]
        }
        function lr(e) {
            return {
                type: "container",
                children: [{
                    type: "section",
                    name: "Colors",
                    help: '\n        <p style="color: #606266;font-size:14px;line-height: 1.4;">如何自定义配色</p>\n        <img  src="https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706441305845.gif" />\n        ',
                    children: [{
                        type: "collapse",
                        name: "调色板",
                        defaultOpen: !0,
                        indent: !1,
                        children: [{
                            type: "color-palette"
                        }]
                    }, ...ar(e)]
                }, {
                    type: "section",
                    name: "字体设置",
                    children: Ks(e)
                }, {
                    type: "section",
                    name: "背景设置",     
                    children: sr(e)
                }]
            }
        }
        const mr = ()=>({
            data() {
                return {
                    fullscreen: !1
                }
            },
            mounted() {
                document.addEventListener("fullscreenchange", this.handleFullscreenChange)
            },
            destroyed() {
                document.removeEventListener("fullscreenchange", this.handleFullscreenChange)
            },
            methods: {
                handleFullscreenChange() {
                    this.fullscreen = !!document.fullscreenElement
                }
            }
        });
        var pr = {
            components: {
                Wallpaper: lo,
                AttributeTree: Os
            },
            name: "editor",
            data() {
                const e = localStorage.getItem("cd-example")
                  , o = localStorage.getItem("cd-type");
                return {
                    example: e ? JSON.parse(e) : Wo,
                    activeDevice: "pc" === o ? 1 : 7,
                    customWidth: screen.width,
                    customHeight: screen.height,
                    rotate: !1,
                    devices: [{
                        name: "Custom"
                    }, {
                        name: "PC",
                        width: screen.width,
                        height: screen.height,
                        divided: !0
                    }, {
                        name: "Moto G4",
                        width: 360,
                        height: 640,
                        divided: !0
                    }, {
                        name: "Galaxy S5",
                        width: 360,
                        height: 640
                    }, {
                        name: "Pixel 2",
                        width: 411,
                        height: 731
                    }, {
                        name: "Pixel 2 XL",
                        width: 411,
                        height: 823
                    }, {
                        name: "IPhone 5/SE",
                        width: 320,
                        height: 568
                    }, {
                        name: "IPhone 6/7/8",
                        width: 375,
                        height: 667
                    }, {
                        name: "IPhone 6/7/8 Plus",
                        width: 414,
                        height: 736
                    }, {
                        name: "IPhone X",
                        width: 375,
                        height: 812
                    }, {
                        name: "IPad",
                        width: 768,
                        height: 1024
                    }, {
                        name: "IPad Pro",
                        width: 1024,
                        height: 1366
                    }, {
                        name: "Surface Duo",
                        width: 540,
                        height: 720
                    }, {
                        name: "Galaxy Fold",
                        width: 280,
                        height: 653
                    }, {
                        name: "Nest Hub",
                        width: 1024,
                        height: 600
                    }, {
                        name: "Nest Hub Max",
                        width: 1280,
                        height: 800
                    }]
                }
            },
            mixins: [xo(), mr(), Co("preview")],
            watch: {
                deviceSize(e, o) {
                    const [,n] = o
                      , [,i] = e
                      , s = i / n;
                    this.example = Wn(this.example, s)
                }
            },
            computed: {
                wallpaperStyles() {
                    const {transformed: {translateX: e, translateY: o, scale: n}} = this;
                    return this.fullscreen ? {} : {
                        transform: `translate(${e}px, ${o}px) scale(${n}, ${n})`,
                        transformOrigin: "left top"
                    }
                },
                deviceSize() {
                    let e, o;
                    if (0 === this.activeDevice)
                        e = this.customWidth,
                        o = this.customHeight;
                    else {
                        const {width: n, height: i} = this.devices[this.activeDevice];
                        e = n,
                        o = i
                    }
                    return this.rotate && ([e,o] = [o, e]),
                    [e, o]
                },
                attribute() {
                    return lr(this.example)
                },
                transformed() {
                    const {previewWidth: e, previewHeight: o} = this
                      , [n,i] = this.deviceSize
                      , s = 50
                      , r = e - 2 * s
                      , t = o - 2 * s
                      , a = t / i
                      , _ = r / n
                      , u = Math.min(a, _, 1)
                      , l = (e - n * u) / 2
                      , m = (o - i * u) / 2;
                    return {
                        scale: u,
                        translateX: l,
                        translateY: m
                    }
                }
            },
            methods: {
                handleUpdateExample({key: e, value: o}) {
                    this.example = to(this.example),
                    so(this.example, e, o)
                },
                handleDownloadImage() {
                    try {
                        di(this.canvas, "wallpaper")
                    } catch (e) {
                        Ee.a.error({
                            message: "The online image can't be downloaded, You can take a screenshot in preview mode or upload local image!",
                            duration: 5e3
                        }),
                        console.log(e)
                    }
                },
                handleDownloadFile() {
                    vi(this.example, "index")
                },
                handleHelp() {
                    this.$router.push("/about")
                },
                async handlePreview() {
                    try {
                        await document.documentElement.requestFullscreen()
                    } catch {
                        Ee.a.success("Failed to enter full screen")
                    }
                }
            }
        }
          , cr = pr
          , dr = (n("177c"),
        Object(je["a"])(cr, $n, Vn, !1, null, null, null))
          , vr = dr.exports
          , gr = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "about-container"
            }, [o("div", {
                staticClass: "about-header"
            }, [o("div", [o("h1", [e._v("About")]), o("p", [e._v(' 写 "福 "字是中国新年的传统，人们会在红纸上写一个大大的 "福 "字，贴在门上，表达对新年的美好期盼。 ')]), o("p", [e._v(" 我认为这就是一个很好的例子，人们用文字和颜色来表达自己的情感或想法。 ")]), o("p", [e._v(" 如果能用更多的颜色和文字来制作壁纸，表达更多的情感，那会怎样呢？不仅能让壁纸变得漂亮，还能让壁纸变得有意义。 ")]), o("p", [e._v(" LuckySheep提供了一些颜色、图案和文字，你甚至可以从图像中提取颜色。找到它们背后的故事，书写属于你自己的篇章✨。")]), o("p", [o("el-select", {
                model: {
                    value: e.selectedValue,
                    callback: function(o) {
                        e.selectedValue = o
                    },
                    expression: "selectedValue"
                }
            }, e._l(e.types, (function(e) {
                return o("el-option", {
                    key: e.value,
                    attrs: {
                        label: e.label,
                        value: e.value
                    }
                })
            }
            )), 1), "color" === e.selectedValue ? o("el-select", {
                model: {
                    value: e.selectedMode,
                    callback: function(o) {
                        e.selectedMode = o
                    },
                    expression: "selectedMode"
                }
            }, e._l(e.modes, (function(e) {
                return o("el-option", {
                    key: e.value,
                    attrs: {
                        label: e.label,
                        value: e.value
                    }
                })
            }
            )), 1) : e._e()], 1)]), o("img", {
                staticClass: "about-image",
                attrs: {
                    src: "https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439569529.webp",
                    width: "32%"
                }
            })]), o("div", {
                staticClass: "about-body"
            }, ["emoji" === e.selectedValue ? o("div", [o("div", {
                staticClass: "about-emoji-container"
            }, e._l(e.emojis, (function(n) {
                return o("span", {
                    key: n.emoji,
                    on: {
                        click: ()=>e.handleClickEmoji(n.emoji)
                    }
                }, [e._v(e._s(n.emoji))])
            }
            )), 0), o("p", [e._v(" These emojis are from "), o("el-link", {
                attrs: {
                    type: "primary",
                    href: "https://github.com/muan/emoji",
                    target: "_blank"
                }
            }, [e._v("muan / emoji")]), e._v(" ❤️. ")], 1)]) : e._e(), "emoticon" === e.selectedValue ? o("div", {
                staticStyle: {
                    "text-align": "left"
                }
            }, e._l(e.faces, (function(n) {
                return o("span", {
                    key: n,
                    staticClass: "about-emoticon-item",
                    on: {
                        click: ()=>e.handleClickEmoticon(n)
                    }
                }, [e._v(e._s(n))])
            }
            )), 0) : e._e(), "color" === e.selectedValue && "store" === e.selectedMode ? o("div", e._l(e.colorStore, (function(n) {
                return o("div", {
                    key: n.name,
                    staticClass: "about-color-collection"
                }, [o("h2", [e._v(e._s(n.name))]), o("p", {
                    staticClass: "about-color-collection-des",
                    domProps: {
                        innerHTML: e._s(n.des)
                    }
                }), o("div", {
                    staticClass: "about-color-container"
                }, e._l(n.colors, (function(n) {
                    return o("div", {
                        key: n.name,
                        staticClass: "about-color-item"
                    }, [o("div", {
                        staticClass: "about-color-item-wrapper",
                        style: {
                            height: e.cardSize + "px"
                        },
                        on: {
                            click: ()=>e.handleClickColors(n.name || "ColorFu", n.values)
                        }
                    }, e._l(n.values, (function(i) {
                        return o("div", {
                            key: i,
                            style: {
                                background: i,
                                width: "100%",
                                height: e.cardSize / (n.values.length || 1) + "px"
                            }
                        })
                    }
                    )), 0), o("span", {
                        staticClass: "about-color-name"
                    }, [n.link ? o("el-link", {
                        attrs: {
                            href: n.link,
                            target: "_blank"
                        }
                    }, [e._v(e._s(n.name || "Learn More"))]) : o("span", [e._v(e._s(n.name || "Learn More"))])], 1)])
                }
                )), 0)])
            }
            )), 0) : e._e(), "color" === e.selectedValue && "image" === e.selectedMode ? o("div", {
                staticStyle: {
                    "text-align": "left",
                    "margin-bottom": "2em"
                }
            }, [o("image-color-picker", {
                attrs: {
                    maxCount: 4
                },
                model: {
                    value: e.selectedImageColors,
                    callback: function(o) {
                        e.selectedImageColors = o
                    },
                    expression: "selectedImageColors"
                }
            }), o("el-button", {
                staticClass: "storey-make-button",
                attrs: {
                    type: "primary",
                    disabled: 0 === e.selectedImageColors.length
                },
                on: {
                    click: ()=>e.handleClickColors("ColorFu", e.selectedImageColors)
                }
            }, [e._v("Make Wallpaper")])], 1) : e._e(), "pattern" === e.selectedValue ? o("div", {
                staticClass: "about-pattern-container"
            }, e._l(e.patterns, (function(n) {
                return o("div", {
                    key: n.label,
                    staticClass: "about-pattern-item",
                    on: {
                        click: ()=>e.handleClickPattern(n.label, n.textColor, n.options)
                    }
                }, [o("pattern-card", {
                    attrs: {
                        options: n.options,
                        size: e.patternSize,
                        name: n.label
                    }
                })], 1)
            }
            )), 0) : e._e()])])
        }
          , fr = []
          , jr = function() {
            var e = this
              , o = e._self._c;
            return o("div", {
                staticClass: "pattern-card-container"
            }, [o("canvas", {
                ref: "canvas",
                staticClass: "pattern"
            }), o("span", [e._v(e._s(e.name))])])
        }
          , kr = []
          , hr = {
            props: {
                options: Object,
                size: {
                    type: Number,
                    default: 300
                },
                name: String
            },
            mounted() {
                const e = this.$refs.canvas
                  , o = Oe(e, this.size, this.size)
                  , {color: n} = this.options;
                o.fillStyle = qe(o, {
                    ...this.options,
                    backgroundColor: n
                }),
                o.fillRect(0, 0, this.size, this.size)
            }
        }
          , br = hr
          , wr = (n("0cf1"),
        Object(je["a"])(br, jr, kr, !1, null, null, null))
          , yr = wr.exports;
        const Sr = [{
            label: "线条",
            textColor: "#FFDC34",
            options: {
                type: "line",
                color: "#4DD599",
                mode: "pattern",
                foregroundColor: "#00918E",
                lineWidth: 189,
                width: 204,
                rotation: -22
            }
        }, {
            label: "波浪",
            textColor: "#372923",
            options: {
                type: "wave",
                color: "#e97e18",
                mode: "pattern",
                foregroundColor: "#efd496",
                lineWidth: 30,
                width: 130,
                height: 130,
                arcRadius: 30,
                rotation: -30
            }
        }, {
            label: "圆圈",
            textColor: "#583d33",
            options: {
                type: "dot",
                color: "#9e3b37",
                mode: "pattern",
                fillColor: "#d87265",
                size: 80,
                strokeColor: "#d87265",
                lineWidth: 1,
                width: 150,
                height: 150,
                rotation: 45
            }
        }, {
            label: "方块",
            textColor: "#FFD460",
            options: {
                type: "square",
                color: "#2D4059",
                mode: "pattern",
                fillColor: "#ea5455",
                size: 50,
                strokeColor: "#ea5455",
                lineWidth: 0,
                width: 100,
                height: 100,
                rotation: 0,
                staggered: !0
            }
        }]
          , xr = Object.values(Ti).flat();
        function Cr(e) {
            return e.length <= 3 ? 100 : 4 === e.length ? 80 : 30
        }
        var Fr = {
            data() {
                return {
                    types: [{
                        value: "color",
                        label: "预设配色 🌈"
                    }, {
                        value: "pattern",
                        label: "简约背景 👨‍👩‍👧‍👧"
                    }, {
                        value: "emoji",
                        label: "表情包 😆"
                    }, {
                        value: "emoticon",
                        label: "w(ﾟДﾟ)w"
                    }],
                    modes: [{
                        value: "store",
                        label: "预设配色🏳️‍🌈"
                    }, {
                        value: "image",
                        label: "从图片导入🏞️"
                    }],
                    selectedValue: "color",
                    selectedMode: "store",
                    emojis: xr,
                    faces: Ji,
                    patterns: Sr,
                    colorStore: us,
                    cardSize: 200,
                    selectedImageColors: [],
                    patternSize: screen.width / 2
                }
            },
            components: {
                ImageColorPicker: js,
                PatternCard: yr
            },
            methods: {
                handleClickEmoticon(e) {
                    const o = {
                        text: {
                            content: e,
                            fontSize: 200,
                            fontFamily: "Luckiest Guy",
                            fontURL: "./fonts/luckiest_guy.woff2",
                            type: "none",
                            color: "#000000",
                            mode: "autoFit",
                            padding: 0,
                            dy: 30
                        },
                        background: {
                            type: "none",
                            color: "#FBB82C",
                            mode: "pattern"
                        }
                    };
                    Rn(this.$router, o)
                },
                handleClickEmoji(e) {
                    const o = {
                        text: {
                            content: e,
                            fontSize: 100,
                            fontFamily: "Luckiest Guy",
                            fontURL: "./fonts/luckiest_guy.woff2",
                            type: "none",
                            color: "#000",
                            mode: "none",
                            padding: 0,
                            dy: 0
                        },
                        background: {
                            type: "none",
                            color: "#4DD599",
                            mode: "pattern"
                        }
                    };
                    Rn(this.$router, o)
                },
                handleClickColors(e, o) {
                    let n;
                    if (1 === o.length)
                        n = {
                            text: {
                                content: e,
                                fontSize: 200,
                                fontFamily: "Luckiest Guy",
                                fontURL: "./fonts/luckiest_guy.woff2",
                                type: "none",
                                color: "#ffffff",
                                mode: "autoFit",
                                padding: 0,
                                dy: Cr(e)
                            },
                            background: {
                                type: "none",
                                color: o[0],
                                mode: "pattern"
                            }
                        };
                    else if (2 === o.length)
                        n = {
                            text: {
                                content: e,
                                fontSize: 200,
                                fontFamily: "Luckiest Guy",
                                fontURL: "./fonts/luckiest_guy.woff2",
                                type: "none",
                                color: o[1],
                                mode: "autoFit",
                                padding: 0,
                                dy: Cr(e)
                            },
                            background: {
                                type: "none",
                                color: o[0],
                                mode: "pattern"
                            }
                        };
                    else if (3 === o.length) {
                        const [i,s,r] = o;
                        n = {
                            text: {
                                content: e,
                                fontSize: 200,
                                fontFamily: "Luckiest Guy",
                                fontURL: "./fonts/luckiest_guy.woff2",
                                type: "none",
                                color: i,
                                mode: "autoFit",
                                padding: 0,
                                dy: Cr(e)
                            },
                            background: {
                                type: "dot",
                                color: s,
                                mode: "pattern",
                                fillColor: r,
                                size: 100,
                                strokeColor: r,
                                lineWidth: 1,
                                width: 210,
                                height: 210,
                                rotation: 45
                            }
                        }
                    } else if (4 === o.length) {
                        const [i,s,r,t] = o;
                        n = {
                            text: {
                                content: e,
                                fontSize: 200,
                                fontFamily: "Luckiest Guy",
                                fontURL: "./fonts/luckiest_guy.woff2",
                                type: "line",
                                rotation: 45,
                                width: 25,
                                height: 25,
                                foregroundColor: t,
                                color: r,
                                mode: "autoFit",
                                lineWidth: 1.5,
                                padding: 0,
                                dy: Cr(e)
                            },
                            background: {
                                mode: "pattern",
                                color: i,
                                foregroundColor: s,
                                type: "line",
                                width: 50,
                                lineWidth: 1.5,
                                rotation: 0
                            }
                        }
                    }
                    Rn(this.$router, n)
                },
                handleClickPattern(e, o, n) {
                    const i = {
                        text: {
                            content: e,
                            fontSize: 200,
                            fontFamily: "Luckiest Guy",
                            fontURL: "./fonts/luckiest_guy.woff2",
                            type: "none",
                            color: o,
                            mode: "autoFit",
                            padding: 0,
                            dy: Cr(e)
                        },
                        background: n
                    };
                    Rn(this.$router, i)
                }
            }
        }
          , zr = Fr
          , Lr = (n("a5de"),
        Object(je["a"])(zr, gr, fr, !1, null, null, null))
          , Ir = Lr.exports;
        ue["default"].use(xe["a"]);
        const Er = [{
            path: "/",
            component: Gn
        }, {
            path: "/editor",
            component: vr,
            name: "editor"
        }, {
            path: "/about",
            component: Ir,
            name: "about"
        }]
          , Or = new xe["a"]({
            routes: Er,
            mode: "hash",
            base: "/colorfu"
        });
        var Mr = Or
          , Dr = (n("8968"),
        n("4280"))
          , Br = n.n(Dr)
          , Tr = n("1df5")
          , Nr = n.n(Tr);
        ue["default"].config.productionTip = !1,
        ue["default"].use(_e.a),
        ue["default"].use(te.a),
        ue["default"].use(se.a),
        ue["default"].use(ne.a),
        ue["default"].use(ee.a),
        ue["default"].use(K.a),
        ue["default"].use(Y.a),
        ue["default"].use($.a),
        ue["default"].use(J.a),
        ue["default"].use(q.a),
        ue["default"].use(U.a),
        ue["default"].use(H.a),
        ue["default"].use(R.a),
        ue["default"].use(T.a),
        ue["default"].use(D.a),
        ue["default"].use(O.a),
        ue["default"].use(I.a),
        ue["default"].use(z.a),
        ue["default"].use(C.a),
        ue["default"].use(S.a),
        ue["default"].use(w.a),
        ue["default"].use(h.a),
        ue["default"].use(j.a),
        ue["default"].use(g.a),
        ue["default"].use(d.a),
        ue["default"].use(p.a),
        ue["default"].use(l.a),
        ue["default"].use(_.a),
        ue["default"].use(t.a),
        ue["default"].use(s.a),
        ue["default"].component(me.a.name, me.a),
        Br.a.use(Nr.a),
        new ue["default"]({
            render: e=>e(Se),
            router: Mr
        }).$mount("#app")
    },
    "5f25": function(e, o, n) {},
    "6c42": function(e, o, n) {},
    7523: function(e) {
        e.exports = JSON.parse('{"text":{"content":"Déjà Vu","fontSize":629,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#372923","mode":"constrain","padding":139,"dy":123},"background":{"type":"wave","color":"#e97e18","mode":"pattern","foregroundColor":"#efd496","lineWidth":30,"width":130,"height":130,"arcRadius":30,"rotation":29}}')
    },
    7786: function(e) {
        e.exports = JSON.parse('["w(ﾟДﾟ)w","(ノへ￣、)","(￣_,￣ )","ヽ(✿ﾟ▽ﾟ)ノ","(๑•̀ㅂ•́)و✧","(￣ε(#￣)☆","φ(≧ω≦*)♪","o(￣皿￣///)","Σ( ° △ °|||)︴","（づ￣3￣）づ╭❤～","(～￣(OO)￣)ブ","凸(艹皿艹 )","(* ￣3)(ε￣ *)","(*￣rǒ￣)","┗|｀O′|┛ 嗷~~","︿(￣︶￣)︿","(u‿ฺu✿ฺ)","Hi~ o(*￣▽￣*)ブ","♪(^∇^*)","o(*≧▽≦)ツ┏━┓","╰(*°▽°*)╯","（○｀ 3′○）","o(*^＠^*)o","(°ー°〃)","○|￣|_ =3","o(￣ヘ￣o＃)","（＝。＝）","~~( ﹁ ﹁ ) ~~~","(ーー゛)","(ー`´ー)","(#`O′)","o(一︿一+)o","o(≧口≦)o","ㄟ( ▔, ▔ )ㄏ","(o_ _)ﾉ","(⊙﹏⊙)","(ˉ▽￣～) 切~~","（＊￣（エ）￣）","┑(￣Д ￣)┍","(＠_＠;)","━┳━　━┳━","(☆´益`)c","（´Д`）","┗( T﹏T )┛","(。﹏。*)","o( =•ω•= )m","≡ω≡","(*￣(エ)￣)","(✿◡‿◡)","(*/ω＼*)","┭┮﹏┭┮","ヾ(￣▽￣)Bye~Bye~","( ﹁ ﹁ ) ~→","Ψ(￣∀￣)Ψ","✧(≖ ◡ ≖✿)","━━(￣ー￣*|||━━","ヽ(*。>Д<)o゜","┌(。Д。)┐","○|￣|_","o(￣▽￣)ｄ","(；′⌒`)","X﹏X","*<|:-) "]')
    },
    7882: function(e, o, n) {},
    7894: function(e) {
        e.exports = JSON.parse('{"text":{"content":"👁️","fontSize":100,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#000","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#4DD599","mode":"pattern"}}')
    },
    "79f6": function(e, o, n) {},
    "7dca": function(e) {
        e.exports = JSON.parse('{"text":{"content":"Not from hammer","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#ecdc75","mode":"autoFit","padding":0,"dy":30},"background":{"type":"none","color":"#8c9ed9","mode":"pattern"}}')
    },
    "80cf": function(e, o, n) {},
    8399: function(e, o, n) {},
    8968: function(e, o, n) {},
    "8ae6": function(e, o, n) {},
    "8bc9": function(e) {
        e.exports = JSON.parse('{"text":{"content":"🌶️🐔","fontSize":197,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#000","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#F8BA03","mode":"pattern"}}')
    },
    "9bef": function(e) {
        e.exports = JSON.parse('{"text":{"content":"A warm heart","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#eabe4f","mode":"autoFit","padding":0,"dy":30},"background":{"type":"none","color":"#b93233","mode":"pattern"}}')
    },
    "9e79": function(e) {
        e.exports = JSON.parse('{"text":{"content":"Air Jordan","fontSize":687,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#10090a","mode":"constrain","padding":76,"dy":74},"background":{"type":"none","color":"#c40827","mode":"pattern"}}')
    },
    a5de: function(e, o, n) {
        "use strict";
        n("1b79")
    },
    a753: function(e) {
        e.exports = JSON.parse('{"text":{"content":"生\\n生\\n不\\n息","fontSize":150,"fontFamily":"Hannotate SC","type":"none","color":"#7FE160","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#30CD7A","mode":"pattern"}}')
    },
    a8c9: function(e, o, n) {
        "use strict";
        n("086e")
    },
    aa79: function(e, o, n) {
        e.exports = "https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439202510.webp"
    },
    abb8: function(e, o, n) {
        "use strict";
        n("fd84")
    },
    af95: function(e, o, n) {
        "use strict";
        n("8399")
    },
    b15c: function(e, o, n) {},
    b206: function(e) {
        e.exports = JSON.parse('{"text":{"content":"无\\n极\\n限","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#ffffff","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#24292e","mode":"pattern"}}')
    },
    bcb9: function(e) {
        e.exports = JSON.parse('{"text":{"content":"o(￣▽￣)ｄ","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#fff","mode":"autoFit","padding":0,"dy":30},"background":{"mode":"image","imageURL":"https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439435287.webp"}}')
    },
    bd6d: function(e) {
        e.exports = JSON.parse('{"text":{"content":"Be yourself. 🌹","fontSize":100,"fontFamily":"Hanzipen SC","type":"none","color":"#222831","mode":"none","padding":0,"dy":33},"background":{"type":"line","color":"#FFD369","mode":"pattern","foregroundColor":"#FEFFC8","lineWidth":1,"width":23,"height":81,"arcRadius":0,"rotation":45,"fillColor":"#FFFFFF","size":3,"strokeColor":"#FFFFFF"}}')
    },
    c405: function(e, o, n) {},
    c4d9: function(e, o, n) {
        "use strict";
        n("6c42")
    },
    c604: function(e) {
        e.exports = JSON.parse('{"Smileys & Emotion":[{"emoji":"😀","skin_tone_support":false,"name":"grinning face","slug":"grinning_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😃","skin_tone_support":false,"name":"grinning face with big eyes","slug":"grinning_face_with_big_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😄","skin_tone_support":false,"name":"grinning face with smiling eyes","slug":"grinning_face_with_smiling_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😁","skin_tone_support":false,"name":"beaming face with smiling eyes","slug":"beaming_face_with_smiling_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😆","skin_tone_support":false,"name":"grinning squinting face","slug":"grinning_squinting_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😅","skin_tone_support":false,"name":"grinning face with sweat","slug":"grinning_face_with_sweat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤣","skin_tone_support":false,"name":"rolling on the floor laughing","slug":"rolling_on_the_floor_laughing","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"😂","skin_tone_support":false,"name":"face with tears of joy","slug":"face_with_tears_of_joy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙂","skin_tone_support":false,"name":"slightly smiling face","slug":"slightly_smiling_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🙃","skin_tone_support":false,"name":"upside-down face","slug":"upside_down_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😉","skin_tone_support":false,"name":"winking face","slug":"winking_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😊","skin_tone_support":false,"name":"smiling face with smiling eyes","slug":"smiling_face_with_smiling_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😇","skin_tone_support":false,"name":"smiling face with halo","slug":"smiling_face_with_halo","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥰","skin_tone_support":false,"name":"smiling face with hearts","slug":"smiling_face_with_hearts","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"😍","skin_tone_support":false,"name":"smiling face with heart-eyes","slug":"smiling_face_with_heart_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤩","skin_tone_support":false,"name":"star-struck","slug":"star_struck","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"😘","skin_tone_support":false,"name":"face blowing a kiss","slug":"face_blowing_a_kiss","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😗","skin_tone_support":false,"name":"kissing face","slug":"kissing_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🙂","skin_tone_support":false,"name":"smiling face","slug":"smiling_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😚","skin_tone_support":false,"name":"kissing face with closed eyes","slug":"kissing_face_with_closed_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😙","skin_tone_support":false,"name":"kissing face with smiling eyes","slug":"kissing_face_with_smiling_eyes","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😋","skin_tone_support":false,"name":"face savoring food","slug":"face_savoring_food","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😛","skin_tone_support":false,"name":"face with tongue","slug":"face_with_tongue","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😜","skin_tone_support":false,"name":"winking face with tongue","slug":"winking_face_with_tongue","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤪","skin_tone_support":false,"name":"zany face","slug":"zany_face","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"😝","skin_tone_support":false,"name":"squinting face with tongue","slug":"squinting_face_with_tongue","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤑","skin_tone_support":false,"name":"money-mouth face","slug":"money_mouth_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤗","skin_tone_support":false,"name":"hugging face","slug":"hugging_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤭","skin_tone_support":false,"name":"face with hand over mouth","slug":"face_with_hand_over_mouth","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤫","skin_tone_support":false,"name":"shushing face","slug":"shushing_face","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤔","skin_tone_support":false,"name":"thinking face","slug":"thinking_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤐","skin_tone_support":false,"name":"zipper-mouth face","slug":"zipper_mouth_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤨","skin_tone_support":false,"name":"face with raised eyebrow","slug":"face_with_raised_eyebrow","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"😐","skin_tone_support":false,"name":"neutral face","slug":"neutral_face","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"😑","skin_tone_support":false,"name":"expressionless face","slug":"expressionless_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😶","skin_tone_support":false,"name":"face without mouth","slug":"face_without_mouth","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😶‍🌫️","skin_tone_support":false,"name":"face in clouds","slug":"face_in_clouds","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"😏","skin_tone_support":false,"name":"smirking face","slug":"smirking_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😒","skin_tone_support":false,"name":"unamused face","slug":"unamused_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙄","skin_tone_support":false,"name":"face with rolling eyes","slug":"face_with_rolling_eyes","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😬","skin_tone_support":false,"name":"grimacing face","slug":"grimacing_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😮‍💨","skin_tone_support":false,"name":"face exhaling","slug":"face_exhaling","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"🤥","skin_tone_support":false,"name":"lying face","slug":"lying_face","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"😌","skin_tone_support":false,"name":"relieved face","slug":"relieved_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😔","skin_tone_support":false,"name":"pensive face","slug":"pensive_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😪","skin_tone_support":false,"name":"sleepy face","slug":"sleepy_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤤","skin_tone_support":false,"name":"drooling face","slug":"drooling_face","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"😴","skin_tone_support":false,"name":"sleeping face","slug":"sleeping_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😷","skin_tone_support":false,"name":"face with medical mask","slug":"face_with_medical_mask","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤒","skin_tone_support":false,"name":"face with thermometer","slug":"face_with_thermometer","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤕","skin_tone_support":false,"name":"face with head-bandage","slug":"face_with_head_bandage","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤢","skin_tone_support":false,"name":"nauseated face","slug":"nauseated_face","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤮","skin_tone_support":false,"name":"face vomiting","slug":"face_vomiting","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤧","skin_tone_support":false,"name":"sneezing face","slug":"sneezing_face","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥵","skin_tone_support":false,"name":"hot face","slug":"hot_face","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥶","skin_tone_support":false,"name":"cold face","slug":"cold_face","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥴","skin_tone_support":false,"name":"woozy face","slug":"woozy_face","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"😵","skin_tone_support":false,"name":"knocked-out face","slug":"knocked_out_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😵‍💫","skin_tone_support":false,"name":"face with spiral eyes","slug":"face_with_spiral_eyes","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"🤯","skin_tone_support":false,"name":"exploding head","slug":"exploding_head","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤠","skin_tone_support":false,"name":"cowboy hat face","slug":"cowboy_hat_face","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥳","skin_tone_support":false,"name":"partying face","slug":"partying_face","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"😎","skin_tone_support":false,"name":"smiling face with sunglasses","slug":"smiling_face_with_sunglasses","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤓","skin_tone_support":false,"name":"nerd face","slug":"nerd_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🧐","skin_tone_support":false,"name":"face with monocle","slug":"face_with_monocle","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"😕","skin_tone_support":false,"name":"confused face","slug":"confused_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😟","skin_tone_support":false,"name":"worried face","slug":"worried_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🙁","skin_tone_support":false,"name":"slightly frowning face","slug":"slightly_frowning_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"☹️","skin_tone_support":false,"name":"frowning face","slug":"frowning_face","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"😮","skin_tone_support":false,"name":"face with open mouth","slug":"face_with_open_mouth","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😯","skin_tone_support":false,"name":"hushed face","slug":"hushed_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😲","skin_tone_support":false,"name":"astonished face","slug":"astonished_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😳","skin_tone_support":false,"name":"flushed face","slug":"flushed_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥺","skin_tone_support":false,"name":"pleading face","slug":"pleading_face","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"😦","skin_tone_support":false,"name":"frowning face with open mouth","slug":"frowning_face_with_open_mouth","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😧","skin_tone_support":false,"name":"anguished face","slug":"anguished_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😨","skin_tone_support":false,"name":"fearful face","slug":"fearful_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😰","skin_tone_support":false,"name":"anxious face with sweat","slug":"anxious_face_with_sweat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😥","skin_tone_support":false,"name":"sad but relieved face","slug":"sad_but_relieved_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😢","skin_tone_support":false,"name":"crying face","slug":"crying_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😭","skin_tone_support":false,"name":"loudly crying face","slug":"loudly_crying_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😱","skin_tone_support":false,"name":"face screaming in fear","slug":"face_screaming_in_fear","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😖","skin_tone_support":false,"name":"confounded face","slug":"confounded_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😣","skin_tone_support":false,"name":"persevering face","slug":"persevering_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😞","skin_tone_support":false,"name":"disappointed face","slug":"disappointed_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😓","skin_tone_support":false,"name":"downcast face with sweat","slug":"downcast_face_with_sweat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😩","skin_tone_support":false,"name":"weary face","slug":"weary_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😫","skin_tone_support":false,"name":"tired face","slug":"tired_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥱","skin_tone_support":false,"name":"yawning face","slug":"yawning_face","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"😤","skin_tone_support":false,"name":"face with steam from nose","slug":"face_with_steam_from_nose","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😡","skin_tone_support":false,"name":"pouting face","slug":"pouting_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😠","skin_tone_support":false,"name":"angry face","slug":"angry_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤬","skin_tone_support":false,"name":"face with symbols on mouth","slug":"face_with_symbols_on_mouth","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"😈","skin_tone_support":false,"name":"smiling face with horns","slug":"smiling_face_with_horns","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"👿","skin_tone_support":false,"name":"angry face with horns","slug":"angry_face_with_horns","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💀","skin_tone_support":false,"name":"skull","slug":"skull","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☠️","skin_tone_support":false,"name":"skull and crossbones","slug":"skull_and_crossbones","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💩","skin_tone_support":false,"name":"pile of poo","slug":"pile_of_poo","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤡","skin_tone_support":false,"name":"clown face","slug":"clown_face","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"👹","skin_tone_support":false,"name":"ogre","slug":"ogre","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👺","skin_tone_support":false,"name":"goblin","slug":"goblin","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👻","skin_tone_support":false,"name":"ghost","slug":"ghost","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👽","skin_tone_support":false,"name":"alien","slug":"alien","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👾","skin_tone_support":false,"name":"alien monster","slug":"alien_monster","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤖","skin_tone_support":false,"name":"robot","slug":"robot","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"😺","skin_tone_support":false,"name":"grinning cat","slug":"grinning_cat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😸","skin_tone_support":false,"name":"grinning cat with smiling eyes","slug":"grinning_cat_with_smiling_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😹","skin_tone_support":false,"name":"cat with tears of joy","slug":"cat_with_tears_of_joy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😻","skin_tone_support":false,"name":"smiling cat with heart-eyes","slug":"smiling_cat_with_heart_eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😼","skin_tone_support":false,"name":"cat with wry smile","slug":"cat_with_wry_smile","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😽","skin_tone_support":false,"name":"kissing cat","slug":"kissing_cat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙀","skin_tone_support":false,"name":"weary cat","slug":"weary_cat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😿","skin_tone_support":false,"name":"crying cat","slug":"crying_cat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"😾","skin_tone_support":false,"name":"pouting cat","slug":"pouting_cat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙈","skin_tone_support":false,"name":"see-no-evil monkey","slug":"see_no_evil_monkey","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙉","skin_tone_support":false,"name":"hear-no-evil monkey","slug":"hear_no_evil_monkey","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙊","skin_tone_support":false,"name":"speak-no-evil monkey","slug":"speak_no_evil_monkey","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💋","skin_tone_support":false,"name":"kiss mark","slug":"kiss_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💌","skin_tone_support":false,"name":"love letter","slug":"love_letter","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💘","skin_tone_support":false,"name":"heart with arrow","slug":"heart_with_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💝","skin_tone_support":false,"name":"heart with ribbon","slug":"heart_with_ribbon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💖","skin_tone_support":false,"name":"sparkling heart","slug":"sparkling_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💗","skin_tone_support":false,"name":"growing heart","slug":"growing_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💓","skin_tone_support":false,"name":"beating heart","slug":"beating_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💞","skin_tone_support":false,"name":"revolving hearts","slug":"revolving_hearts","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💕","skin_tone_support":false,"name":"two hearts","slug":"two_hearts","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💟","skin_tone_support":false,"name":"heart decoration","slug":"heart_decoration","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❣️","skin_tone_support":false,"name":"heart exclamation","slug":"heart_exclamation","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💔","skin_tone_support":false,"name":"broken heart","slug":"broken_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❤️‍🔥","skin_tone_support":false,"name":"heart on fire","slug":"heart_on_fire","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"❤️‍🩹","skin_tone_support":false,"name":"mending heart","slug":"mending_heart","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"❤️","skin_tone_support":false,"name":"red heart","slug":"red_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧡","skin_tone_support":false,"name":"orange heart","slug":"orange_heart","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"💛","skin_tone_support":false,"name":"yellow heart","slug":"yellow_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💚","skin_tone_support":false,"name":"green heart","slug":"green_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💙","skin_tone_support":false,"name":"blue heart","slug":"blue_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💜","skin_tone_support":false,"name":"purple heart","slug":"purple_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤎","skin_tone_support":false,"name":"brown heart","slug":"brown_heart","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🖤","skin_tone_support":false,"name":"black heart","slug":"black_heart","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤍","skin_tone_support":false,"name":"white heart","slug":"white_heart","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"💯","skin_tone_support":false,"name":"hundred points","slug":"hundred_points","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💢","skin_tone_support":false,"name":"anger symbol","slug":"anger_symbol","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💥","skin_tone_support":false,"name":"collision","slug":"collision","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💫","skin_tone_support":false,"name":"dizzy","slug":"dizzy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💦","skin_tone_support":false,"name":"sweat droplets","slug":"sweat_droplets","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💨","skin_tone_support":false,"name":"dashing away","slug":"dashing_away","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕳️","skin_tone_support":false,"name":"hole","slug":"hole","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"💣","skin_tone_support":false,"name":"bomb","slug":"bomb","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💬","skin_tone_support":false,"name":"speech balloon","slug":"speech_balloon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👁️‍🗨️","skin_tone_support":false,"name":"eye in speech bubble","slug":"eye_in_speech_bubble","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🗨️","skin_tone_support":false,"name":"left speech bubble","slug":"left_speech_bubble","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🗯️","skin_tone_support":false,"name":"right anger bubble","slug":"right_anger_bubble","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"💭","skin_tone_support":false,"name":"thought balloon","slug":"thought_balloon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💤","skin_tone_support":false,"name":"zzz","slug":"zzz","unicode_version":"0.6","emoji_version":"0.6"}],"People & Body":[{"emoji":"👋","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"waving hand","slug":"waving_hand","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤚","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"raised back of hand","slug":"raised_back_of_hand","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🖐️","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"hand with fingers splayed","slug":"hand_with_fingers_splayed","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"✋","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"raised hand","slug":"raised_hand","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🖖","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"vulcan salute","slug":"vulcan_salute","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"👌","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"OK hand","slug":"ok_hand","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤏","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"pinching hand","slug":"pinching_hand","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"✌️","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"victory hand","slug":"victory_hand","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤞","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"crossed fingers","slug":"crossed_fingers","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤟","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"love-you gesture","slug":"love_you_gesture","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤘","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"sign of the horns","slug":"sign_of_the_horns","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🤙","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"call me hand","slug":"call_me_hand","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"👈","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"backhand index pointing left","slug":"backhand_index_pointing_left","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👉","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"backhand index pointing right","slug":"backhand_index_pointing_right","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👆","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"backhand index pointing up","slug":"backhand_index_pointing_up","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🖕","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"middle finger","slug":"middle_finger","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"👇","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"backhand index pointing down","slug":"backhand_index_pointing_down","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☝️","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"index pointing up","slug":"index_pointing_up","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👍","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"thumbs up","slug":"thumbs_up","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👎","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"thumbs down","slug":"thumbs_down","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✊","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"raised fist","slug":"raised_fist","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👊","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"oncoming fist","slug":"oncoming_fist","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤛","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"left-facing fist","slug":"left_facing_fist","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤜","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"right-facing fist","slug":"right_facing_fist","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"👏","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"clapping hands","slug":"clapping_hands","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙌","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"raising hands","slug":"raising_hands","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👐","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"open hands","slug":"open_hands","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤲","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"palms up together","slug":"palms_up_together","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤝","skin_tone_support":false,"name":"handshake","slug":"handshake","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🙏","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"folded hands","slug":"folded_hands","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✍️","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"writing hand","slug":"writing_hand","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"💅","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"nail polish","slug":"nail_polish","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤳","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"selfie","slug":"selfie","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"💪","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"flexed biceps","slug":"flexed_biceps","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦾","skin_tone_support":false,"name":"mechanical arm","slug":"mechanical_arm","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦿","skin_tone_support":false,"name":"mechanical leg","slug":"mechanical_leg","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦵","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"leg","slug":"leg","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦶","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"foot","slug":"foot","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👂","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"ear","slug":"ear","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦻","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"ear with hearing aid","slug":"ear_with_hearing_aid","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👃","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"nose","slug":"nose","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧠","skin_tone_support":false,"name":"brain","slug":"brain","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🦷","skin_tone_support":false,"name":"tooth","slug":"tooth","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦴","skin_tone_support":false,"name":"bone","slug":"bone","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👀","skin_tone_support":false,"name":"eyes","slug":"eyes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👁️","skin_tone_support":false,"name":"eye","slug":"eye","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"👅","skin_tone_support":false,"name":"tongue","slug":"tongue","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👄","skin_tone_support":false,"name":"mouth","slug":"mouth","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👶","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"baby","slug":"baby","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧒","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"child","slug":"child","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"👦","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"boy","slug":"boy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👧","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"girl","slug":"girl","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧑","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"person","slug":"person","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"👱","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person blond hair","slug":"person_blond_hair","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👨","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"man","slug":"man","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧔","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"person beard","slug":"person_beard","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧔‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"man beard","slug":"man_beard","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"🧔‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"woman beard","slug":"woman_beard","unicode_version":"13.1","emoji_version":"13.1"},{"emoji":"👨‍🦰","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"man red hair","slug":"man_red_hair","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👨‍🦱","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"man curly hair","slug":"man_curly_hair","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👨‍🦳","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"man white hair","slug":"man_white_hair","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👨‍🦲","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"man bald","slug":"man_bald","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👩","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"woman","slug":"woman","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👩‍🦰","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"woman red hair","slug":"woman_red_hair","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧑‍🦰","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person red hair","slug":"person_red_hair","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👩‍🦱","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"woman curly hair","slug":"woman_curly_hair","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧑‍🦱","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person curly hair","slug":"person_curly_hair","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👩‍🦳","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"woman white hair","slug":"woman_white_hair","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧑‍🦳","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person white hair","slug":"person_white_hair","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👩‍🦲","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"woman bald","slug":"woman_bald","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧑‍🦲","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person bald","slug":"person_bald","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👱‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman blond hair","slug":"woman_blond_hair","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👱‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man blond hair","slug":"man_blond_hair","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧓","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"older person","slug":"older_person","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"👴","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"old man","slug":"old_man","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👵","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"old woman","slug":"old_woman","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙍","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person frowning","slug":"person_frowning","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙍‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man frowning","slug":"man_frowning","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙍‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman frowning","slug":"woman_frowning","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙎","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person pouting","slug":"person_pouting","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙎‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man pouting","slug":"man_pouting","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙎‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman pouting","slug":"woman_pouting","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙅","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person gesturing NO","slug":"person_gesturing_no","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙅‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man gesturing NO","slug":"man_gesturing_no","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙅‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman gesturing NO","slug":"woman_gesturing_no","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙆","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person gesturing OK","slug":"person_gesturing_ok","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙆‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man gesturing OK","slug":"man_gesturing_ok","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙆‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman gesturing OK","slug":"woman_gesturing_ok","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💁","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person tipping hand","slug":"person_tipping_hand","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💁‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man tipping hand","slug":"man_tipping_hand","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💁‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman tipping hand","slug":"woman_tipping_hand","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙋","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person raising hand","slug":"person_raising_hand","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙋‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man raising hand","slug":"man_raising_hand","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙋‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman raising hand","slug":"woman_raising_hand","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧏","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"deaf person","slug":"deaf_person","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧏‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"deaf man","slug":"deaf_man","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧏‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"deaf woman","slug":"deaf_woman","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🙇","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person bowing","slug":"person_bowing","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🙇‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man bowing","slug":"man_bowing","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🙇‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman bowing","slug":"woman_bowing","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤦","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person facepalming","slug":"person_facepalming","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤦‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man facepalming","slug":"man_facepalming","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤦‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman facepalming","slug":"woman_facepalming","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤷","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person shrugging","slug":"person_shrugging","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤷‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man shrugging","slug":"man_shrugging","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤷‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman shrugging","slug":"woman_shrugging","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍⚕️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"health worker","slug":"health_worker","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍⚕️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man health worker","slug":"man_health_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍⚕️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman health worker","slug":"woman_health_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🎓","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"student","slug":"student","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🎓","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man student","slug":"man_student","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🎓","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman student","slug":"woman_student","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🏫","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"teacher","slug":"teacher","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🏫","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man teacher","slug":"man_teacher","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🏫","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman teacher","slug":"woman_teacher","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍⚖️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"judge","slug":"judge","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍⚖️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man judge","slug":"man_judge","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍⚖️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman judge","slug":"woman_judge","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🌾","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"farmer","slug":"farmer","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🌾","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man farmer","slug":"man_farmer","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🌾","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman farmer","slug":"woman_farmer","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🍳","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"cook","slug":"cook","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🍳","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man cook","slug":"man_cook","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🍳","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman cook","slug":"woman_cook","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🔧","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"mechanic","slug":"mechanic","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🔧","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man mechanic","slug":"man_mechanic","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🔧","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman mechanic","slug":"woman_mechanic","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🏭","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"factory worker","slug":"factory_worker","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🏭","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man factory worker","slug":"man_factory_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🏭","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman factory worker","slug":"woman_factory_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍💼","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"office worker","slug":"office_worker","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍💼","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man office worker","slug":"man_office_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍💼","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman office worker","slug":"woman_office_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🔬","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"scientist","slug":"scientist","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🔬","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man scientist","slug":"man_scientist","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🔬","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman scientist","slug":"woman_scientist","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍💻","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"technologist","slug":"technologist","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍💻","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man technologist","slug":"man_technologist","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍💻","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman technologist","slug":"woman_technologist","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🎤","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"singer","slug":"singer","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🎤","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man singer","slug":"man_singer","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🎤","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman singer","slug":"woman_singer","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🎨","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"artist","slug":"artist","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🎨","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man artist","slug":"man_artist","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🎨","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman artist","slug":"woman_artist","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍✈️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"pilot","slug":"pilot","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍✈️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man pilot","slug":"man_pilot","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍✈️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman pilot","slug":"woman_pilot","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🚀","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"astronaut","slug":"astronaut","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🚀","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man astronaut","slug":"man_astronaut","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🚀","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman astronaut","slug":"woman_astronaut","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧑‍🚒","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"firefighter","slug":"firefighter","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🚒","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man firefighter","slug":"man_firefighter","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍🚒","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman firefighter","slug":"woman_firefighter","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👮","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"police officer","slug":"police_officer","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👮‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man police officer","slug":"man_police_officer","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👮‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman police officer","slug":"woman_police_officer","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🕵️","skin_tone_support":true,"skin_tone_support_unicode_version":"2.0","name":"detective","slug":"detective","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕵️‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man detective","slug":"man_detective","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🕵️‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman detective","slug":"woman_detective","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💂","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"guard","slug":"guard","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💂‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man guard","slug":"man_guard","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💂‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman guard","slug":"woman_guard","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👷","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"construction worker","slug":"construction_worker","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👷‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man construction worker","slug":"man_construction_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👷‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman construction worker","slug":"woman_construction_worker","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤴","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"prince","slug":"prince","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"👸","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"princess","slug":"princess","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👳","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person wearing turban","slug":"person_wearing_turban","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👳‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man wearing turban","slug":"man_wearing_turban","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👳‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman wearing turban","slug":"woman_wearing_turban","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👲","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person with skullcap","slug":"person_with_skullcap","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧕","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman with headscarf","slug":"woman_with_headscarf","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤵","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person in tuxedo","slug":"person_in_tuxedo","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤵‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"man in tuxedo","slug":"man_in_tuxedo","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🤵‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"woman in tuxedo","slug":"woman_in_tuxedo","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"👰","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person with veil","slug":"person_with_veil","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👰‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"man with veil","slug":"man_with_veil","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"👰‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"woman with veil","slug":"woman_with_veil","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🤰","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"pregnant woman","slug":"pregnant_woman","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤱","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"breast-feeding","slug":"breast_feeding","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"👩‍🍼","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"woman feeding baby","slug":"woman_feeding_baby","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"👨‍🍼","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"man feeding baby","slug":"man_feeding_baby","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🧑‍🍼","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"person feeding baby","slug":"person_feeding_baby","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"👼","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"baby angel","slug":"baby_angel","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎅","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"Santa Claus","slug":"santa_claus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤶","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"Mrs. Claus","slug":"mrs_claus","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🧑‍🎄","skin_tone_support":true,"skin_tone_support_unicode_version":"13.0","name":"mx claus","slug":"mx_claus","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🦸","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"superhero","slug":"superhero","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦸‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"man superhero","slug":"man_superhero","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦸‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"woman superhero","slug":"woman_superhero","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦹","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"supervillain","slug":"supervillain","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦹‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"man supervillain","slug":"man_supervillain","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦹‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"11.0","name":"woman supervillain","slug":"woman_supervillain","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧙","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"mage","slug":"mage","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧙‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man mage","slug":"man_mage","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧙‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman mage","slug":"woman_mage","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧚","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"fairy","slug":"fairy","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧚‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man fairy","slug":"man_fairy","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧚‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman fairy","slug":"woman_fairy","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧛","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"vampire","slug":"vampire","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧛‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man vampire","slug":"man_vampire","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧛‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman vampire","slug":"woman_vampire","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧜","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"merperson","slug":"merperson","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧜‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"merman","slug":"merman","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧜‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"mermaid","slug":"mermaid","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧝","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"elf","slug":"elf","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧝‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man elf","slug":"man_elf","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧝‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman elf","slug":"woman_elf","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧞","skin_tone_support":false,"name":"genie","slug":"genie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧞‍♂️","skin_tone_support":false,"name":"man genie","slug":"man_genie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧞‍♀️","skin_tone_support":false,"name":"woman genie","slug":"woman_genie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧟","skin_tone_support":false,"name":"zombie","slug":"zombie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧟‍♂️","skin_tone_support":false,"name":"man zombie","slug":"man_zombie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧟‍♀️","skin_tone_support":false,"name":"woman zombie","slug":"woman_zombie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"💆","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person getting massage","slug":"person_getting_massage","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💆‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man getting massage","slug":"man_getting_massage","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💆‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman getting massage","slug":"woman_getting_massage","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💇","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person getting haircut","slug":"person_getting_haircut","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💇‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man getting haircut","slug":"man_getting_haircut","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💇‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman getting haircut","slug":"woman_getting_haircut","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚶","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person walking","slug":"person_walking","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚶‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man walking","slug":"man_walking","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚶‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman walking","slug":"woman_walking","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧍","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"person standing","slug":"person_standing","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧍‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"man standing","slug":"man_standing","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧍‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"woman standing","slug":"woman_standing","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧎","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"person kneeling","slug":"person_kneeling","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧎‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"man kneeling","slug":"man_kneeling","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧎‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"woman kneeling","slug":"woman_kneeling","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧑‍🦯","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person with white cane","slug":"person_with_white_cane","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🦯","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"man with white cane","slug":"man_with_white_cane","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👩‍🦯","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"woman with white cane","slug":"woman_with_white_cane","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧑‍🦼","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person in motorized wheelchair","slug":"person_in_motorized_wheelchair","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🦼","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"man in motorized wheelchair","slug":"man_in_motorized_wheelchair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👩‍🦼","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"woman in motorized wheelchair","slug":"woman_in_motorized_wheelchair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧑‍🦽","skin_tone_support":true,"skin_tone_support_unicode_version":"12.1","name":"person in manual wheelchair","slug":"person_in_manual_wheelchair","unicode_version":"12.1","emoji_version":"12.1"},{"emoji":"👨‍🦽","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"man in manual wheelchair","slug":"man_in_manual_wheelchair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👩‍🦽","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"woman in manual wheelchair","slug":"woman_in_manual_wheelchair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🏃","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person running","slug":"person_running","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏃‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man running","slug":"man_running","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏃‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman running","slug":"woman_running","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"💃","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"woman dancing","slug":"woman_dancing","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕺","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"man dancing","slug":"man_dancing","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🕴️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"person in suit levitating","slug":"person_in_suit_levitating","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"👯","skin_tone_support":false,"name":"people with bunny ears","slug":"people_with_bunny_ears","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👯‍♂️","skin_tone_support":false,"name":"men with bunny ears","slug":"men_with_bunny_ears","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👯‍♀️","skin_tone_support":false,"name":"women with bunny ears","slug":"women_with_bunny_ears","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧖","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"person in steamy room","slug":"person_in_steamy_room","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧖‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man in steamy room","slug":"man_in_steamy_room","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧖‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman in steamy room","slug":"woman_in_steamy_room","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧗","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"person climbing","slug":"person_climbing","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧗‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man climbing","slug":"man_climbing","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧗‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman climbing","slug":"woman_climbing","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🤺","skin_tone_support":false,"name":"person fencing","slug":"person_fencing","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🏇","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"horse racing","slug":"horse_racing","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⛷️","skin_tone_support":false,"name":"skier","slug":"skier","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏂","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"snowboarder","slug":"snowboarder","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏌️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"person golfing","slug":"person_golfing","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏌️‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man golfing","slug":"man_golfing","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏌️‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman golfing","slug":"woman_golfing","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏄","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person surfing","slug":"person_surfing","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏄‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man surfing","slug":"man_surfing","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏄‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman surfing","slug":"woman_surfing","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚣","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person rowing boat","slug":"person_rowing_boat","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚣‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man rowing boat","slug":"man_rowing_boat","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚣‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman rowing boat","slug":"woman_rowing_boat","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏊","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person swimming","slug":"person_swimming","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏊‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man swimming","slug":"man_swimming","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏊‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman swimming","slug":"woman_swimming","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"⛹️","skin_tone_support":true,"skin_tone_support_unicode_version":"2.0","name":"person bouncing ball","slug":"person_bouncing_ball","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⛹️‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man bouncing ball","slug":"man_bouncing_ball","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"⛹️‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman bouncing ball","slug":"woman_bouncing_ball","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏋️","skin_tone_support":true,"skin_tone_support_unicode_version":"2.0","name":"person lifting weights","slug":"person_lifting_weights","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏋️‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man lifting weights","slug":"man_lifting_weights","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏋️‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman lifting weights","slug":"woman_lifting_weights","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚴","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person biking","slug":"person_biking","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚴‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man biking","slug":"man_biking","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚴‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman biking","slug":"woman_biking","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚵","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person mountain biking","slug":"person_mountain_biking","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚵‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man mountain biking","slug":"man_mountain_biking","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🚵‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman mountain biking","slug":"woman_mountain_biking","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤸","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person cartwheeling","slug":"person_cartwheeling","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤸‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man cartwheeling","slug":"man_cartwheeling","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤸‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman cartwheeling","slug":"woman_cartwheeling","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤼","skin_tone_support":false,"name":"people wrestling","slug":"people_wrestling","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤼‍♂️","skin_tone_support":false,"name":"men wrestling","slug":"men_wrestling","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤼‍♀️","skin_tone_support":false,"name":"women wrestling","slug":"women_wrestling","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤽","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person playing water polo","slug":"person_playing_water_polo","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤽‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man playing water polo","slug":"man_playing_water_polo","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤽‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman playing water polo","slug":"woman_playing_water_polo","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤾","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person playing handball","slug":"person_playing_handball","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤾‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man playing handball","slug":"man_playing_handball","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤾‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman playing handball","slug":"woman_playing_handball","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤹","skin_tone_support":true,"skin_tone_support_unicode_version":"3.0","name":"person juggling","slug":"person_juggling","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🤹‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"man juggling","slug":"man_juggling","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🤹‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"woman juggling","slug":"woman_juggling","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🧘","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"person in lotus position","slug":"person_in_lotus_position","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧘‍♂️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"man in lotus position","slug":"man_in_lotus_position","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧘‍♀️","skin_tone_support":true,"skin_tone_support_unicode_version":"5.0","name":"woman in lotus position","slug":"woman_in_lotus_position","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🛀","skin_tone_support":true,"skin_tone_support_unicode_version":"1.0","name":"person taking bath","slug":"person_taking_bath","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛌","skin_tone_support":true,"skin_tone_support_unicode_version":"4.0","name":"person in bed","slug":"person_in_bed","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🧑‍🤝‍🧑","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"people holding hands","slug":"people_holding_hands","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👭","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"women holding hands","slug":"women_holding_hands","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"👫","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"woman and man holding hands","slug":"woman_and_man_holding_hands","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👬","skin_tone_support":true,"skin_tone_support_unicode_version":"12.0","name":"men holding hands","slug":"men_holding_hands","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💏","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"kiss","slug":"kiss","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👩‍❤️‍💋‍👨","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"kiss woman, man","slug":"kiss_woman_man","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍❤️‍💋‍👨","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"kiss man, man","slug":"kiss_man_man","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍❤️‍💋‍👩","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"kiss woman, woman","slug":"kiss_woman_woman","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"💑","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"couple with heart","slug":"couple_with_heart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👩‍❤️‍👨","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"couple with heart woman, man","slug":"couple_with_heart_woman_man","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍❤️‍👨","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"couple with heart man, man","slug":"couple_with_heart_man_man","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍❤️‍👩","skin_tone_support":true,"skin_tone_support_unicode_version":"13.1","name":"couple with heart woman, woman","slug":"couple_with_heart_woman_woman","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👪","skin_tone_support":false,"name":"family","slug":"family","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👨‍👩‍👦","skin_tone_support":false,"name":"family man, woman, boy","slug":"family_man_woman_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👩‍👧","skin_tone_support":false,"name":"family man, woman, girl","slug":"family_man_woman_girl","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👩‍👧‍👦","skin_tone_support":false,"name":"family man, woman, girl, boy","slug":"family_man_woman_girl_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👩‍👦‍👦","skin_tone_support":false,"name":"family man, woman, boy, boy","slug":"family_man_woman_boy_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👩‍👧‍👧","skin_tone_support":false,"name":"family man, woman, girl, girl","slug":"family_man_woman_girl_girl","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👨‍👦","skin_tone_support":false,"name":"family man, man, boy","slug":"family_man_man_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👨‍👧","skin_tone_support":false,"name":"family man, man, girl","slug":"family_man_man_girl","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👨‍👧‍👦","skin_tone_support":false,"name":"family man, man, girl, boy","slug":"family_man_man_girl_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👨‍👦‍👦","skin_tone_support":false,"name":"family man, man, boy, boy","slug":"family_man_man_boy_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👨‍👧‍👧","skin_tone_support":false,"name":"family man, man, girl, girl","slug":"family_man_man_girl_girl","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍👩‍👦","skin_tone_support":false,"name":"family woman, woman, boy","slug":"family_woman_woman_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍👩‍👧","skin_tone_support":false,"name":"family woman, woman, girl","slug":"family_woman_woman_girl","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍👩‍👧‍👦","skin_tone_support":false,"name":"family woman, woman, girl, boy","slug":"family_woman_woman_girl_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍👩‍👦‍👦","skin_tone_support":false,"name":"family woman, woman, boy, boy","slug":"family_woman_woman_boy_boy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👩‍👩‍👧‍👧","skin_tone_support":false,"name":"family woman, woman, girl, girl","slug":"family_woman_woman_girl_girl","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"👨‍👦","skin_tone_support":false,"name":"family man, boy","slug":"family_man_boy","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👨‍👦‍👦","skin_tone_support":false,"name":"family man, boy, boy","slug":"family_man_boy_boy","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👨‍👧","skin_tone_support":false,"name":"family man, girl","slug":"family_man_girl","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👨‍👧‍👦","skin_tone_support":false,"name":"family man, girl, boy","slug":"family_man_girl_boy","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👨‍👧‍👧","skin_tone_support":false,"name":"family man, girl, girl","slug":"family_man_girl_girl","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍👦","skin_tone_support":false,"name":"family woman, boy","slug":"family_woman_boy","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍👦‍👦","skin_tone_support":false,"name":"family woman, boy, boy","slug":"family_woman_boy_boy","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍👧","skin_tone_support":false,"name":"family woman, girl","slug":"family_woman_girl","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍👧‍👦","skin_tone_support":false,"name":"family woman, girl, boy","slug":"family_woman_girl_boy","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"👩‍👧‍👧","skin_tone_support":false,"name":"family woman, girl, girl","slug":"family_woman_girl_girl","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🗣️","skin_tone_support":false,"name":"speaking head","slug":"speaking_head","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"👤","skin_tone_support":false,"name":"bust in silhouette","slug":"bust_in_silhouette","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👥","skin_tone_support":false,"name":"busts in silhouette","slug":"busts_in_silhouette","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"👣","skin_tone_support":false,"name":"footprints","slug":"footprints","unicode_version":"0.6","emoji_version":"0.6"}],"Animals & Nature":[{"emoji":"🐵","skin_tone_support":false,"name":"monkey face","slug":"monkey_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐒","skin_tone_support":false,"name":"monkey","slug":"monkey","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦍","skin_tone_support":false,"name":"gorilla","slug":"gorilla","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦧","skin_tone_support":false,"name":"orangutan","slug":"orangutan","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🐶","skin_tone_support":false,"name":"dog face","slug":"dog_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐕","skin_tone_support":false,"name":"dog","slug":"dog","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🦮","skin_tone_support":false,"name":"guide dog","slug":"guide_dog","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🐕‍🦺","skin_tone_support":false,"name":"service dog","slug":"service_dog","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🐩","skin_tone_support":false,"name":"poodle","slug":"poodle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐺","skin_tone_support":false,"name":"wolf","slug":"wolf","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦊","skin_tone_support":false,"name":"fox","slug":"fox","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦝","skin_tone_support":false,"name":"raccoon","slug":"raccoon","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🐱","skin_tone_support":false,"name":"cat face","slug":"cat_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐈","skin_tone_support":false,"name":"cat","slug":"cat","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🐈‍⬛","skin_tone_support":false,"name":"black cat","slug":"black_cat","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🦁","skin_tone_support":false,"name":"lion","slug":"lion","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐯","skin_tone_support":false,"name":"tiger face","slug":"tiger_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐅","skin_tone_support":false,"name":"tiger","slug":"tiger","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐆","skin_tone_support":false,"name":"leopard","slug":"leopard","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐴","skin_tone_support":false,"name":"horse face","slug":"horse_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐎","skin_tone_support":false,"name":"horse","slug":"horse","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦄","skin_tone_support":false,"name":"unicorn","slug":"unicorn","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🦓","skin_tone_support":false,"name":"zebra","slug":"zebra","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🦌","skin_tone_support":false,"name":"deer","slug":"deer","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🐮","skin_tone_support":false,"name":"cow face","slug":"cow_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐂","skin_tone_support":false,"name":"ox","slug":"ox","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐃","skin_tone_support":false,"name":"water buffalo","slug":"water_buffalo","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐄","skin_tone_support":false,"name":"cow","slug":"cow","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐷","skin_tone_support":false,"name":"pig face","slug":"pig_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐖","skin_tone_support":false,"name":"pig","slug":"pig","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐗","skin_tone_support":false,"name":"boar","slug":"boar","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐽","skin_tone_support":false,"name":"pig nose","slug":"pig_nose","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐏","skin_tone_support":false,"name":"ram","slug":"ram","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐑","skin_tone_support":false,"name":"ewe","slug":"ewe","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐐","skin_tone_support":false,"name":"goat","slug":"goat","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐪","skin_tone_support":false,"name":"camel","slug":"camel","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐫","skin_tone_support":false,"name":"two-hump camel","slug":"two_hump_camel","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦙","skin_tone_support":false,"name":"llama","slug":"llama","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦒","skin_tone_support":false,"name":"giraffe","slug":"giraffe","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🐘","skin_tone_support":false,"name":"elephant","slug":"elephant","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦏","skin_tone_support":false,"name":"rhinoceros","slug":"rhinoceros","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦛","skin_tone_support":false,"name":"hippopotamus","slug":"hippopotamus","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🐭","skin_tone_support":false,"name":"mouse face","slug":"mouse_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐁","skin_tone_support":false,"name":"mouse","slug":"mouse","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐀","skin_tone_support":false,"name":"rat","slug":"rat","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐹","skin_tone_support":false,"name":"hamster","slug":"hamster","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐰","skin_tone_support":false,"name":"rabbit face","slug":"rabbit_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐇","skin_tone_support":false,"name":"rabbit","slug":"rabbit","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐿️","skin_tone_support":false,"name":"chipmunk","slug":"chipmunk","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🦔","skin_tone_support":false,"name":"hedgehog","slug":"hedgehog","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🦇","skin_tone_support":false,"name":"bat","slug":"bat","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🐻","skin_tone_support":false,"name":"bear","slug":"bear","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐻‍❄️","skin_tone_support":false,"name":"polar bear","slug":"polar_bear","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🐨","skin_tone_support":false,"name":"koala","slug":"koala","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐼","skin_tone_support":false,"name":"panda","slug":"panda","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦥","skin_tone_support":false,"name":"sloth","slug":"sloth","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦦","skin_tone_support":false,"name":"otter","slug":"otter","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦨","skin_tone_support":false,"name":"skunk","slug":"skunk","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦘","skin_tone_support":false,"name":"kangaroo","slug":"kangaroo","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦡","skin_tone_support":false,"name":"badger","slug":"badger","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🐾","skin_tone_support":false,"name":"paw prints","slug":"paw_prints","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦃","skin_tone_support":false,"name":"turkey","slug":"turkey","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐔","skin_tone_support":false,"name":"chicken","slug":"chicken","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐓","skin_tone_support":false,"name":"rooster","slug":"rooster","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐣","skin_tone_support":false,"name":"hatching chick","slug":"hatching_chick","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐤","skin_tone_support":false,"name":"baby chick","slug":"baby_chick","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐥","skin_tone_support":false,"name":"front-facing baby chick","slug":"front_facing_baby_chick","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐦","skin_tone_support":false,"name":"bird","slug":"bird","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐧","skin_tone_support":false,"name":"penguin","slug":"penguin","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕊️","skin_tone_support":false,"name":"dove","slug":"dove","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🦅","skin_tone_support":false,"name":"eagle","slug":"eagle","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦆","skin_tone_support":false,"name":"duck","slug":"duck","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦢","skin_tone_support":false,"name":"swan","slug":"swan","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦉","skin_tone_support":false,"name":"owl","slug":"owl","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦩","skin_tone_support":false,"name":"flamingo","slug":"flamingo","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦚","skin_tone_support":false,"name":"peacock","slug":"peacock","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦜","skin_tone_support":false,"name":"parrot","slug":"parrot","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🐸","skin_tone_support":false,"name":"frog","slug":"frog","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐊","skin_tone_support":false,"name":"crocodile","slug":"crocodile","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐢","skin_tone_support":false,"name":"turtle","slug":"turtle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦎","skin_tone_support":false,"name":"lizard","slug":"lizard","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🐍","skin_tone_support":false,"name":"snake","slug":"snake","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐲","skin_tone_support":false,"name":"dragon face","slug":"dragon_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐉","skin_tone_support":false,"name":"dragon","slug":"dragon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🦕","skin_tone_support":false,"name":"sauropod","slug":"sauropod","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🦖","skin_tone_support":false,"name":"T-Rex","slug":"t_rex","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🐳","skin_tone_support":false,"name":"spouting whale","slug":"spouting_whale","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐋","skin_tone_support":false,"name":"whale","slug":"whale","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🐬","skin_tone_support":false,"name":"dolphin","slug":"dolphin","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐟","skin_tone_support":false,"name":"fish","slug":"fish","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐠","skin_tone_support":false,"name":"tropical fish","slug":"tropical_fish","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐡","skin_tone_support":false,"name":"blowfish","slug":"blowfish","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦈","skin_tone_support":false,"name":"shark","slug":"shark","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🐙","skin_tone_support":false,"name":"octopus","slug":"octopus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐚","skin_tone_support":false,"name":"spiral shell","slug":"spiral_shell","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐌","skin_tone_support":false,"name":"snail","slug":"snail","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦋","skin_tone_support":false,"name":"butterfly","slug":"butterfly","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🐛","skin_tone_support":false,"name":"bug","slug":"bug","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐜","skin_tone_support":false,"name":"ant","slug":"ant","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐝","skin_tone_support":false,"name":"honeybee","slug":"honeybee","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🐞","skin_tone_support":false,"name":"lady beetle","slug":"lady_beetle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🦗","skin_tone_support":false,"name":"cricket","slug":"cricket","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🕷️","skin_tone_support":false,"name":"spider","slug":"spider","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕸️","skin_tone_support":false,"name":"spider web","slug":"spider_web","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🦂","skin_tone_support":false,"name":"scorpion","slug":"scorpion","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🦟","skin_tone_support":false,"name":"mosquito","slug":"mosquito","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦠","skin_tone_support":false,"name":"microbe","slug":"microbe","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"💐","skin_tone_support":false,"name":"bouquet","slug":"bouquet","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌸","skin_tone_support":false,"name":"cherry blossom","slug":"cherry_blossom","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💮","skin_tone_support":false,"name":"white flower","slug":"white_flower","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏵️","skin_tone_support":false,"name":"rosette","slug":"rosette","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌹","skin_tone_support":false,"name":"rose","slug":"rose","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥀","skin_tone_support":false,"name":"wilted flower","slug":"wilted_flower","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🌺","skin_tone_support":false,"name":"hibiscus","slug":"hibiscus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌻","skin_tone_support":false,"name":"sunflower","slug":"sunflower","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌼","skin_tone_support":false,"name":"blossom","slug":"blossom","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌷","skin_tone_support":false,"name":"tulip","slug":"tulip","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌱","skin_tone_support":false,"name":"seedling","slug":"seedling","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌲","skin_tone_support":false,"name":"evergreen tree","slug":"evergreen_tree","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌳","skin_tone_support":false,"name":"deciduous tree","slug":"deciduous_tree","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌴","skin_tone_support":false,"name":"palm tree","slug":"palm_tree","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌵","skin_tone_support":false,"name":"cactus","slug":"cactus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌾","skin_tone_support":false,"name":"sheaf of rice","slug":"sheaf_of_rice","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌿","skin_tone_support":false,"name":"herb","slug":"herb","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☘️","skin_tone_support":false,"name":"shamrock","slug":"shamrock","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🍀","skin_tone_support":false,"name":"four leaf clover","slug":"four_leaf_clover","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍁","skin_tone_support":false,"name":"maple leaf","slug":"maple_leaf","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍂","skin_tone_support":false,"name":"fallen leaf","slug":"fallen_leaf","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍃","skin_tone_support":false,"name":"leaf fluttering in wind","slug":"leaf_fluttering_in_wind","unicode_version":"0.6","emoji_version":"0.6"}],"Food & Drink":[{"emoji":"🍇","skin_tone_support":false,"name":"grapes","slug":"grapes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍈","skin_tone_support":false,"name":"melon","slug":"melon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍉","skin_tone_support":false,"name":"watermelon","slug":"watermelon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍊","skin_tone_support":false,"name":"tangerine","slug":"tangerine","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍋","skin_tone_support":false,"name":"lemon","slug":"lemon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🍌","skin_tone_support":false,"name":"banana","slug":"banana","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍍","skin_tone_support":false,"name":"pineapple","slug":"pineapple","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥭","skin_tone_support":false,"name":"mango","slug":"mango","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🍎","skin_tone_support":false,"name":"red apple","slug":"red_apple","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍏","skin_tone_support":false,"name":"green apple","slug":"green_apple","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍐","skin_tone_support":false,"name":"pear","slug":"pear","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🍑","skin_tone_support":false,"name":"peach","slug":"peach","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍒","skin_tone_support":false,"name":"cherries","slug":"cherries","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍓","skin_tone_support":false,"name":"strawberry","slug":"strawberry","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥝","skin_tone_support":false,"name":"kiwi fruit","slug":"kiwi_fruit","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🍅","skin_tone_support":false,"name":"tomato","slug":"tomato","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥥","skin_tone_support":false,"name":"coconut","slug":"coconut","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥑","skin_tone_support":false,"name":"avocado","slug":"avocado","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🍆","skin_tone_support":false,"name":"eggplant","slug":"eggplant","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥔","skin_tone_support":false,"name":"potato","slug":"potato","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥕","skin_tone_support":false,"name":"carrot","slug":"carrot","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🌽","skin_tone_support":false,"name":"ear of corn","slug":"ear_of_corn","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌶️","skin_tone_support":false,"name":"hot pepper","slug":"hot_pepper","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🥒","skin_tone_support":false,"name":"cucumber","slug":"cucumber","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥬","skin_tone_support":false,"name":"leafy green","slug":"leafy_green","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥦","skin_tone_support":false,"name":"broccoli","slug":"broccoli","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧄","skin_tone_support":false,"name":"garlic","slug":"garlic","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧅","skin_tone_support":false,"name":"onion","slug":"onion","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🍄","skin_tone_support":false,"name":"mushroom","slug":"mushroom","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥜","skin_tone_support":false,"name":"peanuts","slug":"peanuts","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🌰","skin_tone_support":false,"name":"chestnut","slug":"chestnut","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍞","skin_tone_support":false,"name":"bread","slug":"bread","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥐","skin_tone_support":false,"name":"croissant","slug":"croissant","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥖","skin_tone_support":false,"name":"baguette bread","slug":"baguette_bread","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥨","skin_tone_support":false,"name":"pretzel","slug":"pretzel","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥯","skin_tone_support":false,"name":"bagel","slug":"bagel","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥞","skin_tone_support":false,"name":"pancakes","slug":"pancakes","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🧇","skin_tone_support":false,"name":"waffle","slug":"waffle","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧀","skin_tone_support":false,"name":"cheese wedge","slug":"cheese_wedge","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🍖","skin_tone_support":false,"name":"meat on bone","slug":"meat_on_bone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍗","skin_tone_support":false,"name":"poultry leg","slug":"poultry_leg","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥩","skin_tone_support":false,"name":"cut of meat","slug":"cut_of_meat","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥓","skin_tone_support":false,"name":"bacon","slug":"bacon","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🍔","skin_tone_support":false,"name":"hamburger","slug":"hamburger","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍟","skin_tone_support":false,"name":"french fries","slug":"french_fries","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍕","skin_tone_support":false,"name":"pizza","slug":"pizza","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌭","skin_tone_support":false,"name":"hot dog","slug":"hot_dog","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥪","skin_tone_support":false,"name":"sandwich","slug":"sandwich","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🌮","skin_tone_support":false,"name":"taco","slug":"taco","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌯","skin_tone_support":false,"name":"burrito","slug":"burrito","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥙","skin_tone_support":false,"name":"stuffed flatbread","slug":"stuffed_flatbread","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🧆","skin_tone_support":false,"name":"falafel","slug":"falafel","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🥚","skin_tone_support":false,"name":"egg","slug":"egg","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🍳","skin_tone_support":false,"name":"cooking","slug":"cooking","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥘","skin_tone_support":false,"name":"shallow pan of food","slug":"shallow_pan_of_food","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🍲","skin_tone_support":false,"name":"pot of food","slug":"pot_of_food","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥣","skin_tone_support":false,"name":"bowl with spoon","slug":"bowl_with_spoon","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥗","skin_tone_support":false,"name":"green salad","slug":"green_salad","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🍿","skin_tone_support":false,"name":"popcorn","slug":"popcorn","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🧈","skin_tone_support":false,"name":"butter","slug":"butter","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧂","skin_tone_support":false,"name":"salt","slug":"salt","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥫","skin_tone_support":false,"name":"canned food","slug":"canned_food","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🍱","skin_tone_support":false,"name":"bento box","slug":"bento_box","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍘","skin_tone_support":false,"name":"rice cracker","slug":"rice_cracker","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍙","skin_tone_support":false,"name":"rice ball","slug":"rice_ball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍚","skin_tone_support":false,"name":"cooked rice","slug":"cooked_rice","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍛","skin_tone_support":false,"name":"curry rice","slug":"curry_rice","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍜","skin_tone_support":false,"name":"steaming bowl","slug":"steaming_bowl","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍝","skin_tone_support":false,"name":"spaghetti","slug":"spaghetti","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍠","skin_tone_support":false,"name":"roasted sweet potato","slug":"roasted_sweet_potato","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍢","skin_tone_support":false,"name":"oden","slug":"oden","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍣","skin_tone_support":false,"name":"sushi","slug":"sushi","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍤","skin_tone_support":false,"name":"fried shrimp","slug":"fried_shrimp","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍥","skin_tone_support":false,"name":"fish cake with swirl","slug":"fish_cake_with_swirl","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥮","skin_tone_support":false,"name":"moon cake","slug":"moon_cake","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🍡","skin_tone_support":false,"name":"dango","slug":"dango","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥟","skin_tone_support":false,"name":"dumpling","slug":"dumpling","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥠","skin_tone_support":false,"name":"fortune cookie","slug":"fortune_cookie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥡","skin_tone_support":false,"name":"takeout box","slug":"takeout_box","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🦀","skin_tone_support":false,"name":"crab","slug":"crab","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🦞","skin_tone_support":false,"name":"lobster","slug":"lobster","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦐","skin_tone_support":false,"name":"shrimp","slug":"shrimp","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦑","skin_tone_support":false,"name":"squid","slug":"squid","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦪","skin_tone_support":false,"name":"oyster","slug":"oyster","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🍦","skin_tone_support":false,"name":"soft ice cream","slug":"soft_ice_cream","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍧","skin_tone_support":false,"name":"shaved ice","slug":"shaved_ice","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍨","skin_tone_support":false,"name":"ice cream","slug":"ice_cream","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍩","skin_tone_support":false,"name":"doughnut","slug":"doughnut","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍪","skin_tone_support":false,"name":"cookie","slug":"cookie","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎂","skin_tone_support":false,"name":"birthday cake","slug":"birthday_cake","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍰","skin_tone_support":false,"name":"shortcake","slug":"shortcake","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧁","skin_tone_support":false,"name":"cupcake","slug":"cupcake","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥧","skin_tone_support":false,"name":"pie","slug":"pie","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🍫","skin_tone_support":false,"name":"chocolate bar","slug":"chocolate_bar","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍬","skin_tone_support":false,"name":"candy","slug":"candy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍭","skin_tone_support":false,"name":"lollipop","slug":"lollipop","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍮","skin_tone_support":false,"name":"custard","slug":"custard","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍯","skin_tone_support":false,"name":"honey pot","slug":"honey_pot","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍼","skin_tone_support":false,"name":"baby bottle","slug":"baby_bottle","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥛","skin_tone_support":false,"name":"glass of milk","slug":"glass_of_milk","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"☕","skin_tone_support":false,"name":"hot beverage","slug":"hot_beverage","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍵","skin_tone_support":false,"name":"teacup without handle","slug":"teacup_without_handle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍶","skin_tone_support":false,"name":"sake","slug":"sake","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍾","skin_tone_support":false,"name":"bottle with popping cork","slug":"bottle_with_popping_cork","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🍷","skin_tone_support":false,"name":"wine glass","slug":"wine_glass","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍸","skin_tone_support":false,"name":"cocktail glass","slug":"cocktail_glass","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍹","skin_tone_support":false,"name":"tropical drink","slug":"tropical_drink","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍺","skin_tone_support":false,"name":"beer mug","slug":"beer_mug","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🍻","skin_tone_support":false,"name":"clinking beer mugs","slug":"clinking_beer_mugs","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥂","skin_tone_support":false,"name":"clinking glasses","slug":"clinking_glasses","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥃","skin_tone_support":false,"name":"tumbler glass","slug":"tumbler_glass","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥤","skin_tone_support":false,"name":"cup with straw","slug":"cup_with_straw","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧃","skin_tone_support":false,"name":"beverage box","slug":"beverage_box","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧉","skin_tone_support":false,"name":"mate","slug":"mate","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧊","skin_tone_support":false,"name":"ice","slug":"ice","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🥢","skin_tone_support":false,"name":"chopsticks","slug":"chopsticks","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🍽️","skin_tone_support":false,"name":"fork and knife with plate","slug":"fork_and_knife_with_plate","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🍴","skin_tone_support":false,"name":"fork and knife","slug":"fork_and_knife","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥄","skin_tone_support":false,"name":"spoon","slug":"spoon","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🔪","skin_tone_support":false,"name":"kitchen knife","slug":"kitchen_knife","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏺","skin_tone_support":false,"name":"amphora","slug":"amphora","unicode_version":"1.0","emoji_version":"1.0"}],"Travel & Places":[{"emoji":"🌍","skin_tone_support":false,"name":"globe showing Europe-Africa","slug":"globe_showing_europe_africa","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌎","skin_tone_support":false,"name":"globe showing Americas","slug":"globe_showing_americas","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌏","skin_tone_support":false,"name":"globe showing Asia-Australia","slug":"globe_showing_asia_australia","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌐","skin_tone_support":false,"name":"globe with meridians","slug":"globe_with_meridians","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🗺️","skin_tone_support":false,"name":"world map","slug":"world_map","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🗾","skin_tone_support":false,"name":"map of Japan","slug":"map_of_japan","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧭","skin_tone_support":false,"name":"compass","slug":"compass","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🏔️","skin_tone_support":false,"name":"snow-capped mountain","slug":"snow_capped_mountain","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⛰️","skin_tone_support":false,"name":"mountain","slug":"mountain","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌋","skin_tone_support":false,"name":"volcano","slug":"volcano","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗻","skin_tone_support":false,"name":"mount fuji","slug":"mount_fuji","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏕️","skin_tone_support":false,"name":"camping","slug":"camping","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏖️","skin_tone_support":false,"name":"beach with umbrella","slug":"beach_with_umbrella","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏜️","skin_tone_support":false,"name":"desert","slug":"desert","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏝️","skin_tone_support":false,"name":"desert island","slug":"desert_island","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏞️","skin_tone_support":false,"name":"national park","slug":"national_park","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏟️","skin_tone_support":false,"name":"stadium","slug":"stadium","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏛️","skin_tone_support":false,"name":"classical building","slug":"classical_building","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏗️","skin_tone_support":false,"name":"building construction","slug":"building_construction","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🧱","skin_tone_support":false,"name":"brick","slug":"brick","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🏘️","skin_tone_support":false,"name":"houses","slug":"houses","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏚️","skin_tone_support":false,"name":"derelict house","slug":"derelict_house","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏠","skin_tone_support":false,"name":"house","slug":"house","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏡","skin_tone_support":false,"name":"house with garden","slug":"house_with_garden","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏢","skin_tone_support":false,"name":"office building","slug":"office_building","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏣","skin_tone_support":false,"name":"Japanese post office","slug":"japanese_post_office","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏤","skin_tone_support":false,"name":"post office","slug":"post_office","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏥","skin_tone_support":false,"name":"hospital","slug":"hospital","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏦","skin_tone_support":false,"name":"bank","slug":"bank","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏨","skin_tone_support":false,"name":"hotel","slug":"hotel","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏩","skin_tone_support":false,"name":"love hotel","slug":"love_hotel","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏪","skin_tone_support":false,"name":"convenience store","slug":"convenience_store","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏫","skin_tone_support":false,"name":"school","slug":"school","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏬","skin_tone_support":false,"name":"department store","slug":"department_store","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏭","skin_tone_support":false,"name":"factory","slug":"factory","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏯","skin_tone_support":false,"name":"Japanese castle","slug":"japanese_castle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏰","skin_tone_support":false,"name":"castle","slug":"castle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💒","skin_tone_support":false,"name":"wedding","slug":"wedding","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗼","skin_tone_support":false,"name":"Tokyo tower","slug":"tokyo_tower","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗽","skin_tone_support":false,"name":"Statue of Liberty","slug":"statue_of_liberty","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛪","skin_tone_support":false,"name":"church","slug":"church","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕌","skin_tone_support":false,"name":"mosque","slug":"mosque","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛕","skin_tone_support":false,"name":"hindu temple","slug":"hindu_temple","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🕍","skin_tone_support":false,"name":"synagogue","slug":"synagogue","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⛩️","skin_tone_support":false,"name":"shinto shrine","slug":"shinto_shrine","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕋","skin_tone_support":false,"name":"kaaba","slug":"kaaba","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⛲","skin_tone_support":false,"name":"fountain","slug":"fountain","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛺","skin_tone_support":false,"name":"tent","slug":"tent","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌁","skin_tone_support":false,"name":"foggy","slug":"foggy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌃","skin_tone_support":false,"name":"night with stars","slug":"night_with_stars","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏙️","skin_tone_support":false,"name":"cityscape","slug":"cityscape","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌄","skin_tone_support":false,"name":"sunrise over mountains","slug":"sunrise_over_mountains","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌅","skin_tone_support":false,"name":"sunrise","slug":"sunrise","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌆","skin_tone_support":false,"name":"cityscape at dusk","slug":"cityscape_at_dusk","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌇","skin_tone_support":false,"name":"sunset","slug":"sunset","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌉","skin_tone_support":false,"name":"bridge at night","slug":"bridge_at_night","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♨️","skin_tone_support":false,"name":"hot springs","slug":"hot_springs","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎠","skin_tone_support":false,"name":"carousel horse","slug":"carousel_horse","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎡","skin_tone_support":false,"name":"ferris wheel","slug":"ferris_wheel","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎢","skin_tone_support":false,"name":"roller coaster","slug":"roller_coaster","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💈","skin_tone_support":false,"name":"barber pole","slug":"barber_pole","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎪","skin_tone_support":false,"name":"circus tent","slug":"circus_tent","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚂","skin_tone_support":false,"name":"locomotive","slug":"locomotive","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚃","skin_tone_support":false,"name":"railway car","slug":"railway_car","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚄","skin_tone_support":false,"name":"high-speed train","slug":"high_speed_train","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚅","skin_tone_support":false,"name":"bullet train","slug":"bullet_train","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚆","skin_tone_support":false,"name":"train","slug":"train","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚇","skin_tone_support":false,"name":"metro","slug":"metro","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚈","skin_tone_support":false,"name":"light rail","slug":"light_rail","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚉","skin_tone_support":false,"name":"station","slug":"station","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚊","skin_tone_support":false,"name":"tram","slug":"tram","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚝","skin_tone_support":false,"name":"monorail","slug":"monorail","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚞","skin_tone_support":false,"name":"mountain railway","slug":"mountain_railway","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚋","skin_tone_support":false,"name":"tram car","slug":"tram_car","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚌","skin_tone_support":false,"name":"bus","slug":"bus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚍","skin_tone_support":false,"name":"oncoming bus","slug":"oncoming_bus","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🚎","skin_tone_support":false,"name":"trolleybus","slug":"trolleybus","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚐","skin_tone_support":false,"name":"minibus","slug":"minibus","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚑","skin_tone_support":false,"name":"ambulance","slug":"ambulance","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚒","skin_tone_support":false,"name":"fire engine","slug":"fire_engine","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚓","skin_tone_support":false,"name":"police car","slug":"police_car","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚔","skin_tone_support":false,"name":"oncoming police car","slug":"oncoming_police_car","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🚕","skin_tone_support":false,"name":"taxi","slug":"taxi","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚖","skin_tone_support":false,"name":"oncoming taxi","slug":"oncoming_taxi","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚗","skin_tone_support":false,"name":"automobile","slug":"automobile","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚘","skin_tone_support":false,"name":"oncoming automobile","slug":"oncoming_automobile","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🚙","skin_tone_support":false,"name":"sport utility vehicle","slug":"sport_utility_vehicle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚚","skin_tone_support":false,"name":"delivery truck","slug":"delivery_truck","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚛","skin_tone_support":false,"name":"articulated lorry","slug":"articulated_lorry","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚜","skin_tone_support":false,"name":"tractor","slug":"tractor","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏎️","skin_tone_support":false,"name":"racing car","slug":"racing_car","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏍️","skin_tone_support":false,"name":"motorcycle","slug":"motorcycle","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🛵","skin_tone_support":false,"name":"motor scooter","slug":"motor_scooter","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🦽","skin_tone_support":false,"name":"manual wheelchair","slug":"manual_wheelchair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🦼","skin_tone_support":false,"name":"motorized wheelchair","slug":"motorized_wheelchair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🛺","skin_tone_support":false,"name":"auto rickshaw","slug":"auto_rickshaw","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🚲","skin_tone_support":false,"name":"bicycle","slug":"bicycle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛴","skin_tone_support":false,"name":"kick scooter","slug":"kick_scooter","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🛹","skin_tone_support":false,"name":"skateboard","slug":"skateboard","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🚏","skin_tone_support":false,"name":"bus stop","slug":"bus_stop","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛣️","skin_tone_support":false,"name":"motorway","slug":"motorway","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🛤️","skin_tone_support":false,"name":"railway track","slug":"railway_track","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🛢️","skin_tone_support":false,"name":"oil drum","slug":"oil_drum","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⛽","skin_tone_support":false,"name":"fuel pump","slug":"fuel_pump","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚨","skin_tone_support":false,"name":"police car light","slug":"police_car_light","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚥","skin_tone_support":false,"name":"horizontal traffic light","slug":"horizontal_traffic_light","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚦","skin_tone_support":false,"name":"vertical traffic light","slug":"vertical_traffic_light","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛑","skin_tone_support":false,"name":"stop sign","slug":"stop_sign","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🚧","skin_tone_support":false,"name":"construction","slug":"construction","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚓","skin_tone_support":false,"name":"anchor","slug":"anchor","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛵","skin_tone_support":false,"name":"sailboat","slug":"sailboat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛶","skin_tone_support":false,"name":"canoe","slug":"canoe","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🚤","skin_tone_support":false,"name":"speedboat","slug":"speedboat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛳️","skin_tone_support":false,"name":"passenger ship","slug":"passenger_ship","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⛴️","skin_tone_support":false,"name":"ferry","slug":"ferry","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🛥️","skin_tone_support":false,"name":"motor boat","slug":"motor_boat","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🚢","skin_tone_support":false,"name":"ship","slug":"ship","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✈️","skin_tone_support":false,"name":"airplane","slug":"airplane","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛩️","skin_tone_support":false,"name":"small airplane","slug":"small_airplane","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🛫","skin_tone_support":false,"name":"airplane departure","slug":"airplane_departure","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛬","skin_tone_support":false,"name":"airplane arrival","slug":"airplane_arrival","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🪂","skin_tone_support":false,"name":"parachute","slug":"parachute","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"💺","skin_tone_support":false,"name":"seat","slug":"seat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚁","skin_tone_support":false,"name":"helicopter","slug":"helicopter","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚟","skin_tone_support":false,"name":"suspension railway","slug":"suspension_railway","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚠","skin_tone_support":false,"name":"mountain cableway","slug":"mountain_cableway","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚡","skin_tone_support":false,"name":"aerial tramway","slug":"aerial_tramway","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛰️","skin_tone_support":false,"name":"satellite","slug":"satellite","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🚀","skin_tone_support":false,"name":"rocket","slug":"rocket","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛸","skin_tone_support":false,"name":"flying saucer","slug":"flying_saucer","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🛎️","skin_tone_support":false,"name":"bellhop bell","slug":"bellhop_bell","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🧳","skin_tone_support":false,"name":"luggage","slug":"luggage","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"⌛","skin_tone_support":false,"name":"hourglass done","slug":"hourglass_done","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏳","skin_tone_support":false,"name":"hourglass not done","slug":"hourglass_not_done","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⌚","skin_tone_support":false,"name":"watch","slug":"watch","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏰","skin_tone_support":false,"name":"alarm clock","slug":"alarm_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏱️","skin_tone_support":false,"name":"stopwatch","slug":"stopwatch","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⏲️","skin_tone_support":false,"name":"timer clock","slug":"timer_clock","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🕰️","skin_tone_support":false,"name":"mantelpiece clock","slug":"mantelpiece_clock","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕛","skin_tone_support":false,"name":"twelve o’clock","slug":"twelve_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕧","skin_tone_support":false,"name":"twelve-thirty","slug":"twelve_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕐","skin_tone_support":false,"name":"one o’clock","slug":"one_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕜","skin_tone_support":false,"name":"one-thirty","slug":"one_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕑","skin_tone_support":false,"name":"two o’clock","slug":"two_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕝","skin_tone_support":false,"name":"two-thirty","slug":"two_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕒","skin_tone_support":false,"name":"three o’clock","slug":"three_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕞","skin_tone_support":false,"name":"three-thirty","slug":"three_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕓","skin_tone_support":false,"name":"four o’clock","slug":"four_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕟","skin_tone_support":false,"name":"four-thirty","slug":"four_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕔","skin_tone_support":false,"name":"five o’clock","slug":"five_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕠","skin_tone_support":false,"name":"five-thirty","slug":"five_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕕","skin_tone_support":false,"name":"six o’clock","slug":"six_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕡","skin_tone_support":false,"name":"six-thirty","slug":"six_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕖","skin_tone_support":false,"name":"seven o’clock","slug":"seven_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕢","skin_tone_support":false,"name":"seven-thirty","slug":"seven_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕗","skin_tone_support":false,"name":"eight o’clock","slug":"eight_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕣","skin_tone_support":false,"name":"eight-thirty","slug":"eight_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕘","skin_tone_support":false,"name":"nine o’clock","slug":"nine_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕤","skin_tone_support":false,"name":"nine-thirty","slug":"nine_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕙","skin_tone_support":false,"name":"ten o’clock","slug":"ten_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕥","skin_tone_support":false,"name":"ten-thirty","slug":"ten_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🕚","skin_tone_support":false,"name":"eleven o’clock","slug":"eleven_o_clock","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕦","skin_tone_support":false,"name":"eleven-thirty","slug":"eleven_thirty","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌑","skin_tone_support":false,"name":"new moon","slug":"new_moon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌒","skin_tone_support":false,"name":"waxing crescent moon","slug":"waxing_crescent_moon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌓","skin_tone_support":false,"name":"first quarter moon","slug":"first_quarter_moon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌔","skin_tone_support":false,"name":"waxing gibbous moon","slug":"waxing_gibbous_moon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌕","skin_tone_support":false,"name":"full moon","slug":"full_moon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌖","skin_tone_support":false,"name":"waning gibbous moon","slug":"waning_gibbous_moon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌗","skin_tone_support":false,"name":"last quarter moon","slug":"last_quarter_moon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌘","skin_tone_support":false,"name":"waning crescent moon","slug":"waning_crescent_moon","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌙","skin_tone_support":false,"name":"crescent moon","slug":"crescent_moon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌚","skin_tone_support":false,"name":"new moon face","slug":"new_moon_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌛","skin_tone_support":false,"name":"first quarter moon face","slug":"first_quarter_moon_face","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌜","skin_tone_support":false,"name":"last quarter moon face","slug":"last_quarter_moon_face","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌡️","skin_tone_support":false,"name":"thermometer","slug":"thermometer","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"☀️","skin_tone_support":false,"name":"sun","slug":"sun","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌝","skin_tone_support":false,"name":"full moon face","slug":"full_moon_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🌞","skin_tone_support":false,"name":"sun with face","slug":"sun_with_face","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🪐","skin_tone_support":false,"name":"ringed planet","slug":"ringed_planet","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"⭐","skin_tone_support":false,"name":"star","slug":"star","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌟","skin_tone_support":false,"name":"glowing star","slug":"glowing_star","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌠","skin_tone_support":false,"name":"shooting star","slug":"shooting_star","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌌","skin_tone_support":false,"name":"milky way","slug":"milky_way","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☁️","skin_tone_support":false,"name":"cloud","slug":"cloud","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛅","skin_tone_support":false,"name":"sun behind cloud","slug":"sun_behind_cloud","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛈️","skin_tone_support":false,"name":"cloud with lightning and rain","slug":"cloud_with_lightning_and_rain","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌤️","skin_tone_support":false,"name":"sun behind small cloud","slug":"sun_behind_small_cloud","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌥️","skin_tone_support":false,"name":"sun behind large cloud","slug":"sun_behind_large_cloud","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌦️","skin_tone_support":false,"name":"sun behind rain cloud","slug":"sun_behind_rain_cloud","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌧️","skin_tone_support":false,"name":"cloud with rain","slug":"cloud_with_rain","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌨️","skin_tone_support":false,"name":"cloud with snow","slug":"cloud_with_snow","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌩️","skin_tone_support":false,"name":"cloud with lightning","slug":"cloud_with_lightning","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌪️","skin_tone_support":false,"name":"tornado","slug":"tornado","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌫️","skin_tone_support":false,"name":"fog","slug":"fog","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌬️","skin_tone_support":false,"name":"wind face","slug":"wind_face","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🌀","skin_tone_support":false,"name":"cyclone","slug":"cyclone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌈","skin_tone_support":false,"name":"rainbow","slug":"rainbow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌂","skin_tone_support":false,"name":"closed umbrella","slug":"closed_umbrella","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☂️","skin_tone_support":false,"name":"umbrella","slug":"umbrella","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"☔","skin_tone_support":false,"name":"umbrella with rain drops","slug":"umbrella_with_rain_drops","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛱️","skin_tone_support":false,"name":"umbrella on ground","slug":"umbrella_on_ground","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⚡","skin_tone_support":false,"name":"high voltage","slug":"high_voltage","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❄️","skin_tone_support":false,"name":"snowflake","slug":"snowflake","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☃️","skin_tone_support":false,"name":"snowman","slug":"snowman","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⛄","skin_tone_support":false,"name":"snowman without snow","slug":"snowman_without_snow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☄️","skin_tone_support":false,"name":"comet","slug":"comet","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔥","skin_tone_support":false,"name":"fire","slug":"fire","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💧","skin_tone_support":false,"name":"droplet","slug":"droplet","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🌊","skin_tone_support":false,"name":"water wave","slug":"water_wave","unicode_version":"0.6","emoji_version":"0.6"}],"Activities":[{"emoji":"🎃","skin_tone_support":false,"name":"jack-o-lantern","slug":"jack_o_lantern","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎄","skin_tone_support":false,"name":"Christmas tree","slug":"christmas_tree","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎆","skin_tone_support":false,"name":"fireworks","slug":"fireworks","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎇","skin_tone_support":false,"name":"sparkler","slug":"sparkler","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧨","skin_tone_support":false,"name":"firecracker","slug":"firecracker","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"✨","skin_tone_support":false,"name":"sparkles","slug":"sparkles","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎈","skin_tone_support":false,"name":"balloon","slug":"balloon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎉","skin_tone_support":false,"name":"party popper","slug":"party_popper","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎊","skin_tone_support":false,"name":"confetti ball","slug":"confetti_ball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎋","skin_tone_support":false,"name":"tanabata tree","slug":"tanabata_tree","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎍","skin_tone_support":false,"name":"pine decoration","slug":"pine_decoration","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎎","skin_tone_support":false,"name":"Japanese dolls","slug":"japanese_dolls","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎏","skin_tone_support":false,"name":"carp streamer","slug":"carp_streamer","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎐","skin_tone_support":false,"name":"wind chime","slug":"wind_chime","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎑","skin_tone_support":false,"name":"moon viewing ceremony","slug":"moon_viewing_ceremony","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧧","skin_tone_support":false,"name":"red envelope","slug":"red_envelope","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🎀","skin_tone_support":false,"name":"ribbon","slug":"ribbon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎁","skin_tone_support":false,"name":"wrapped gift","slug":"wrapped_gift","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎗️","skin_tone_support":false,"name":"reminder ribbon","slug":"reminder_ribbon","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎟️","skin_tone_support":false,"name":"admission tickets","slug":"admission_tickets","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎫","skin_tone_support":false,"name":"ticket","slug":"ticket","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎖️","skin_tone_support":false,"name":"military medal","slug":"military_medal","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏆","skin_tone_support":false,"name":"trophy","slug":"trophy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏅","skin_tone_support":false,"name":"sports medal","slug":"sports_medal","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥇","skin_tone_support":false,"name":"1st place medal","slug":"1st_place_medal","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥈","skin_tone_support":false,"name":"2nd place medal","slug":"2nd_place_medal","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥉","skin_tone_support":false,"name":"3rd place medal","slug":"3rd_place_medal","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"⚽","skin_tone_support":false,"name":"soccer ball","slug":"soccer_ball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚾","skin_tone_support":false,"name":"baseball","slug":"baseball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥎","skin_tone_support":false,"name":"softball","slug":"softball","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🏀","skin_tone_support":false,"name":"basketball","slug":"basketball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏐","skin_tone_support":false,"name":"volleyball","slug":"volleyball","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏈","skin_tone_support":false,"name":"american football","slug":"american_football","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏉","skin_tone_support":false,"name":"rugby football","slug":"rugby_football","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🎾","skin_tone_support":false,"name":"tennis","slug":"tennis","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥏","skin_tone_support":false,"name":"flying disc","slug":"flying_disc","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🎳","skin_tone_support":false,"name":"bowling","slug":"bowling","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏏","skin_tone_support":false,"name":"cricket game","slug":"cricket_game","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏑","skin_tone_support":false,"name":"field hockey","slug":"field_hockey","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏒","skin_tone_support":false,"name":"ice hockey","slug":"ice_hockey","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥍","skin_tone_support":false,"name":"lacrosse","slug":"lacrosse","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🏓","skin_tone_support":false,"name":"ping pong","slug":"ping_pong","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏸","skin_tone_support":false,"name":"badminton","slug":"badminton","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🥊","skin_tone_support":false,"name":"boxing glove","slug":"boxing_glove","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥋","skin_tone_support":false,"name":"martial arts uniform","slug":"martial_arts_uniform","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🥅","skin_tone_support":false,"name":"goal net","slug":"goal_net","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"⛳","skin_tone_support":false,"name":"flag in hole","slug":"flag_in_hole","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛸️","skin_tone_support":false,"name":"ice skate","slug":"ice_skate","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎣","skin_tone_support":false,"name":"fishing pole","slug":"fishing_pole","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🤿","skin_tone_support":false,"name":"diving mask","slug":"diving_mask","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🎽","skin_tone_support":false,"name":"running shirt","slug":"running_shirt","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎿","skin_tone_support":false,"name":"skis","slug":"skis","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛷","skin_tone_support":false,"name":"sled","slug":"sled","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🥌","skin_tone_support":false,"name":"curling stone","slug":"curling_stone","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🎯","skin_tone_support":false,"name":"bullseye","slug":"bullseye","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🪀","skin_tone_support":false,"name":"yo-yo","slug":"yo_yo","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🪁","skin_tone_support":false,"name":"kite","slug":"kite","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🎱","skin_tone_support":false,"name":"pool 8 ball","slug":"pool_8_ball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔮","skin_tone_support":false,"name":"crystal ball","slug":"crystal_ball","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧿","skin_tone_support":false,"name":"nazar amulet","slug":"nazar_amulet","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🎮","skin_tone_support":false,"name":"video game","slug":"video_game","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕹️","skin_tone_support":false,"name":"joystick","slug":"joystick","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎰","skin_tone_support":false,"name":"slot machine","slug":"slot_machine","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎲","skin_tone_support":false,"name":"game die","slug":"game_die","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧩","skin_tone_support":false,"name":"puzzle piece","slug":"puzzle_piece","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧸","skin_tone_support":false,"name":"teddy bear","slug":"teddy_bear","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"♠️","skin_tone_support":false,"name":"spade suit","slug":"spade_suit","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♥️","skin_tone_support":false,"name":"heart suit","slug":"heart_suit","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♦️","skin_tone_support":false,"name":"diamond suit","slug":"diamond_suit","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♣️","skin_tone_support":false,"name":"club suit","slug":"club_suit","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♟️","skin_tone_support":false,"name":"chess pawn","slug":"chess_pawn","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🃏","skin_tone_support":false,"name":"joker","slug":"joker","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🀄","skin_tone_support":false,"name":"mahjong red dragon","slug":"mahjong_red_dragon","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎴","skin_tone_support":false,"name":"flower playing cards","slug":"flower_playing_cards","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎭","skin_tone_support":false,"name":"performing arts","slug":"performing_arts","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🖼️","skin_tone_support":false,"name":"framed picture","slug":"framed_picture","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎨","skin_tone_support":false,"name":"artist palette","slug":"artist_palette","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧵","skin_tone_support":false,"name":"thread","slug":"thread","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧶","skin_tone_support":false,"name":"yarn","slug":"yarn","unicode_version":"11.0","emoji_version":"11.0"}],"Objects":[{"emoji":"👓","skin_tone_support":false,"name":"glasses","slug":"glasses","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕶️","skin_tone_support":false,"name":"sunglasses","slug":"sunglasses","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🥽","skin_tone_support":false,"name":"goggles","slug":"goggles","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥼","skin_tone_support":false,"name":"lab coat","slug":"lab_coat","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🦺","skin_tone_support":false,"name":"safety vest","slug":"safety_vest","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👔","skin_tone_support":false,"name":"necktie","slug":"necktie","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👕","skin_tone_support":false,"name":"t-shirt","slug":"t_shirt","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👖","skin_tone_support":false,"name":"jeans","slug":"jeans","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧣","skin_tone_support":false,"name":"scarf","slug":"scarf","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧤","skin_tone_support":false,"name":"gloves","slug":"gloves","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧥","skin_tone_support":false,"name":"coat","slug":"coat","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🧦","skin_tone_support":false,"name":"socks","slug":"socks","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"👗","skin_tone_support":false,"name":"dress","slug":"dress","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👘","skin_tone_support":false,"name":"kimono","slug":"kimono","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥻","skin_tone_support":false,"name":"sari","slug":"sari","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🩱","skin_tone_support":false,"name":"one-piece swimsuit","slug":"one_piece_swimsuit","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🩲","skin_tone_support":false,"name":"briefs","slug":"briefs","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🩳","skin_tone_support":false,"name":"shorts","slug":"shorts","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👙","skin_tone_support":false,"name":"bikini","slug":"bikini","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👚","skin_tone_support":false,"name":"woman’s clothes","slug":"woman_s_clothes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👛","skin_tone_support":false,"name":"purse","slug":"purse","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👜","skin_tone_support":false,"name":"handbag","slug":"handbag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👝","skin_tone_support":false,"name":"clutch bag","slug":"clutch_bag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛍️","skin_tone_support":false,"name":"shopping bags","slug":"shopping_bags","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎒","skin_tone_support":false,"name":"backpack","slug":"backpack","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👞","skin_tone_support":false,"name":"man’s shoe","slug":"man_s_shoe","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👟","skin_tone_support":false,"name":"running shoe","slug":"running_shoe","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🥾","skin_tone_support":false,"name":"hiking boot","slug":"hiking_boot","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🥿","skin_tone_support":false,"name":"flat shoe","slug":"flat_shoe","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"👠","skin_tone_support":false,"name":"high-heeled shoe","slug":"high_heeled_shoe","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👡","skin_tone_support":false,"name":"woman’s sandal","slug":"woman_s_sandal","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🩰","skin_tone_support":false,"name":"ballet shoes","slug":"ballet_shoes","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"👢","skin_tone_support":false,"name":"woman’s boot","slug":"woman_s_boot","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👑","skin_tone_support":false,"name":"crown","slug":"crown","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"👒","skin_tone_support":false,"name":"woman’s hat","slug":"woman_s_hat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎩","skin_tone_support":false,"name":"top hat","slug":"top_hat","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎓","skin_tone_support":false,"name":"graduation cap","slug":"graduation_cap","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧢","skin_tone_support":false,"name":"billed cap","slug":"billed_cap","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"⛑️","skin_tone_support":false,"name":"rescue worker’s helmet","slug":"rescue_worker_s_helmet","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📿","skin_tone_support":false,"name":"prayer beads","slug":"prayer_beads","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💄","skin_tone_support":false,"name":"lipstick","slug":"lipstick","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💍","skin_tone_support":false,"name":"ring","slug":"ring","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💎","skin_tone_support":false,"name":"gem stone","slug":"gem_stone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔇","skin_tone_support":false,"name":"muted speaker","slug":"muted_speaker","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔈","skin_tone_support":false,"name":"speaker low volume","slug":"speaker_low_volume","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🔉","skin_tone_support":false,"name":"speaker medium volume","slug":"speaker_medium_volume","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔊","skin_tone_support":false,"name":"speaker high volume","slug":"speaker_high_volume","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📢","skin_tone_support":false,"name":"loudspeaker","slug":"loudspeaker","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📣","skin_tone_support":false,"name":"megaphone","slug":"megaphone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📯","skin_tone_support":false,"name":"postal horn","slug":"postal_horn","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔔","skin_tone_support":false,"name":"bell","slug":"bell","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔕","skin_tone_support":false,"name":"bell with slash","slug":"bell_with_slash","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🎼","skin_tone_support":false,"name":"musical score","slug":"musical_score","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎵","skin_tone_support":false,"name":"musical note","slug":"musical_note","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎶","skin_tone_support":false,"name":"musical notes","slug":"musical_notes","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎙️","skin_tone_support":false,"name":"studio microphone","slug":"studio_microphone","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎚️","skin_tone_support":false,"name":"level slider","slug":"level_slider","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎛️","skin_tone_support":false,"name":"control knobs","slug":"control_knobs","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎤","skin_tone_support":false,"name":"microphone","slug":"microphone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎧","skin_tone_support":false,"name":"headphone","slug":"headphone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📻","skin_tone_support":false,"name":"radio","slug":"radio","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎷","skin_tone_support":false,"name":"saxophone","slug":"saxophone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎸","skin_tone_support":false,"name":"guitar","slug":"guitar","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎹","skin_tone_support":false,"name":"musical keyboard","slug":"musical_keyboard","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎺","skin_tone_support":false,"name":"trumpet","slug":"trumpet","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎻","skin_tone_support":false,"name":"violin","slug":"violin","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🪕","skin_tone_support":false,"name":"banjo","slug":"banjo","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🥁","skin_tone_support":false,"name":"drum","slug":"drum","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"📱","skin_tone_support":false,"name":"mobile phone","slug":"mobile_phone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📲","skin_tone_support":false,"name":"mobile phone with arrow","slug":"mobile_phone_with_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☎️","skin_tone_support":false,"name":"telephone","slug":"telephone","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📞","skin_tone_support":false,"name":"telephone receiver","slug":"telephone_receiver","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📟","skin_tone_support":false,"name":"pager","slug":"pager","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📠","skin_tone_support":false,"name":"fax machine","slug":"fax_machine","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔋","skin_tone_support":false,"name":"battery","slug":"battery","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔌","skin_tone_support":false,"name":"electric plug","slug":"electric_plug","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💻","skin_tone_support":false,"name":"laptop","slug":"laptop","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🖥️","skin_tone_support":false,"name":"desktop computer","slug":"desktop_computer","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🖨️","skin_tone_support":false,"name":"printer","slug":"printer","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⌨️","skin_tone_support":false,"name":"keyboard","slug":"keyboard","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🖱️","skin_tone_support":false,"name":"computer mouse","slug":"computer_mouse","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🖲️","skin_tone_support":false,"name":"trackball","slug":"trackball","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"💽","skin_tone_support":false,"name":"computer disk","slug":"computer_disk","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💾","skin_tone_support":false,"name":"floppy disk","slug":"floppy_disk","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💿","skin_tone_support":false,"name":"optical disk","slug":"optical_disk","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📀","skin_tone_support":false,"name":"dvd","slug":"dvd","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧮","skin_tone_support":false,"name":"abacus","slug":"abacus","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🎥","skin_tone_support":false,"name":"movie camera","slug":"movie_camera","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎞️","skin_tone_support":false,"name":"film frames","slug":"film_frames","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📽️","skin_tone_support":false,"name":"film projector","slug":"film_projector","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🎬","skin_tone_support":false,"name":"clapper board","slug":"clapper_board","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📺","skin_tone_support":false,"name":"television","slug":"television","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📷","skin_tone_support":false,"name":"camera","slug":"camera","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📸","skin_tone_support":false,"name":"camera with flash","slug":"camera_with_flash","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"📹","skin_tone_support":false,"name":"video camera","slug":"video_camera","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📼","skin_tone_support":false,"name":"videocassette","slug":"videocassette","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔍","skin_tone_support":false,"name":"magnifying glass tilted left","slug":"magnifying_glass_tilted_left","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔎","skin_tone_support":false,"name":"magnifying glass tilted right","slug":"magnifying_glass_tilted_right","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🕯️","skin_tone_support":false,"name":"candle","slug":"candle","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"💡","skin_tone_support":false,"name":"light bulb","slug":"light_bulb","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔦","skin_tone_support":false,"name":"flashlight","slug":"flashlight","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏮","skin_tone_support":false,"name":"red paper lantern","slug":"red_paper_lantern","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🪔","skin_tone_support":false,"name":"diya lamp","slug":"diya_lamp","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"📔","skin_tone_support":false,"name":"notebook with decorative cover","slug":"notebook_with_decorative_cover","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📕","skin_tone_support":false,"name":"closed book","slug":"closed_book","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📖","skin_tone_support":false,"name":"open book","slug":"open_book","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📗","skin_tone_support":false,"name":"green book","slug":"green_book","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📘","skin_tone_support":false,"name":"blue book","slug":"blue_book","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📙","skin_tone_support":false,"name":"orange book","slug":"orange_book","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📚","skin_tone_support":false,"name":"books","slug":"books","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📓","skin_tone_support":false,"name":"notebook","slug":"notebook","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📒","skin_tone_support":false,"name":"ledger","slug":"ledger","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📃","skin_tone_support":false,"name":"page with curl","slug":"page_with_curl","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📜","skin_tone_support":false,"name":"scroll","slug":"scroll","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📄","skin_tone_support":false,"name":"page facing up","slug":"page_facing_up","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📰","skin_tone_support":false,"name":"newspaper","slug":"newspaper","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗞️","skin_tone_support":false,"name":"rolled-up newspaper","slug":"rolled_up_newspaper","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📑","skin_tone_support":false,"name":"bookmark tabs","slug":"bookmark_tabs","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔖","skin_tone_support":false,"name":"bookmark","slug":"bookmark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏷️","skin_tone_support":false,"name":"label","slug":"label","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"💰","skin_tone_support":false,"name":"money bag","slug":"money_bag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💴","skin_tone_support":false,"name":"yen banknote","slug":"yen_banknote","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💵","skin_tone_support":false,"name":"dollar banknote","slug":"dollar_banknote","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💶","skin_tone_support":false,"name":"euro banknote","slug":"euro_banknote","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💷","skin_tone_support":false,"name":"pound banknote","slug":"pound_banknote","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"💸","skin_tone_support":false,"name":"money with wings","slug":"money_with_wings","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💳","skin_tone_support":false,"name":"credit card","slug":"credit_card","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🧾","skin_tone_support":false,"name":"receipt","slug":"receipt","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"💹","skin_tone_support":false,"name":"chart increasing with yen","slug":"chart_increasing_with_yen","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✉️","skin_tone_support":false,"name":"envelope","slug":"envelope","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📧","skin_tone_support":false,"name":"e-mail","slug":"e_mail","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📨","skin_tone_support":false,"name":"incoming envelope","slug":"incoming_envelope","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📩","skin_tone_support":false,"name":"envelope with arrow","slug":"envelope_with_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📤","skin_tone_support":false,"name":"outbox tray","slug":"outbox_tray","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📥","skin_tone_support":false,"name":"inbox tray","slug":"inbox_tray","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📦","skin_tone_support":false,"name":"package","slug":"package","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📫","skin_tone_support":false,"name":"closed mailbox with raised flag","slug":"closed_mailbox_with_raised_flag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📪","skin_tone_support":false,"name":"closed mailbox with lowered flag","slug":"closed_mailbox_with_lowered_flag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📬","skin_tone_support":false,"name":"open mailbox with raised flag","slug":"open_mailbox_with_raised_flag","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📭","skin_tone_support":false,"name":"open mailbox with lowered flag","slug":"open_mailbox_with_lowered_flag","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📮","skin_tone_support":false,"name":"postbox","slug":"postbox","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗳️","skin_tone_support":false,"name":"ballot box with ballot","slug":"ballot_box_with_ballot","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"✏️","skin_tone_support":false,"name":"pencil","slug":"pencil","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✒️","skin_tone_support":false,"name":"black nib","slug":"black_nib","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🖋️","skin_tone_support":false,"name":"fountain pen","slug":"fountain_pen","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🖊️","skin_tone_support":false,"name":"pen","slug":"pen","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🖌️","skin_tone_support":false,"name":"paintbrush","slug":"paintbrush","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🖍️","skin_tone_support":false,"name":"crayon","slug":"crayon","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📝","skin_tone_support":false,"name":"memo","slug":"memo","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💼","skin_tone_support":false,"name":"briefcase","slug":"briefcase","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📁","skin_tone_support":false,"name":"file folder","slug":"file_folder","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📂","skin_tone_support":false,"name":"open file folder","slug":"open_file_folder","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗂️","skin_tone_support":false,"name":"card index dividers","slug":"card_index_dividers","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📅","skin_tone_support":false,"name":"calendar","slug":"calendar","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📆","skin_tone_support":false,"name":"tear-off calendar","slug":"tear_off_calendar","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗒️","skin_tone_support":false,"name":"spiral notepad","slug":"spiral_notepad","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🗓️","skin_tone_support":false,"name":"spiral calendar","slug":"spiral_calendar","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📇","skin_tone_support":false,"name":"card index","slug":"card_index","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📈","skin_tone_support":false,"name":"chart increasing","slug":"chart_increasing","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📉","skin_tone_support":false,"name":"chart decreasing","slug":"chart_decreasing","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📊","skin_tone_support":false,"name":"bar chart","slug":"bar_chart","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📋","skin_tone_support":false,"name":"clipboard","slug":"clipboard","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📌","skin_tone_support":false,"name":"pushpin","slug":"pushpin","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📍","skin_tone_support":false,"name":"round pushpin","slug":"round_pushpin","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📎","skin_tone_support":false,"name":"paperclip","slug":"paperclip","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🖇️","skin_tone_support":false,"name":"linked paperclips","slug":"linked_paperclips","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"📏","skin_tone_support":false,"name":"straight ruler","slug":"straight_ruler","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📐","skin_tone_support":false,"name":"triangular ruler","slug":"triangular_ruler","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✂️","skin_tone_support":false,"name":"scissors","slug":"scissors","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗃️","skin_tone_support":false,"name":"card file box","slug":"card_file_box","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🗄️","skin_tone_support":false,"name":"file cabinet","slug":"file_cabinet","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🗑️","skin_tone_support":false,"name":"wastebasket","slug":"wastebasket","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🔒","skin_tone_support":false,"name":"locked","slug":"locked","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔓","skin_tone_support":false,"name":"unlocked","slug":"unlocked","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔏","skin_tone_support":false,"name":"locked with pen","slug":"locked_with_pen","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔐","skin_tone_support":false,"name":"locked with key","slug":"locked_with_key","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔑","skin_tone_support":false,"name":"key","slug":"key","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🗝️","skin_tone_support":false,"name":"old key","slug":"old_key","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🔨","skin_tone_support":false,"name":"hammer","slug":"hammer","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🪓","skin_tone_support":false,"name":"axe","slug":"axe","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"⛏️","skin_tone_support":false,"name":"pick","slug":"pick","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⚒️","skin_tone_support":false,"name":"hammer and pick","slug":"hammer_and_pick","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛠️","skin_tone_support":false,"name":"hammer and wrench","slug":"hammer_and_wrench","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🗡️","skin_tone_support":false,"name":"dagger","slug":"dagger","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⚔️","skin_tone_support":false,"name":"crossed swords","slug":"crossed_swords","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔫","skin_tone_support":false,"name":"water pistol","slug":"water_pistol","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏹","skin_tone_support":false,"name":"bow and arrow","slug":"bow_and_arrow","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛡️","skin_tone_support":false,"name":"shield","slug":"shield","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🔧","skin_tone_support":false,"name":"wrench","slug":"wrench","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔩","skin_tone_support":false,"name":"nut and bolt","slug":"nut_and_bolt","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚙️","skin_tone_support":false,"name":"gear","slug":"gear","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🗜️","skin_tone_support":false,"name":"clamp","slug":"clamp","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⚖️","skin_tone_support":false,"name":"balance scale","slug":"balance_scale","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🦯","skin_tone_support":false,"name":"white cane","slug":"white_cane","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🔗","skin_tone_support":false,"name":"link","slug":"link","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛓️","skin_tone_support":false,"name":"chains","slug":"chains","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🧰","skin_tone_support":false,"name":"toolbox","slug":"toolbox","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧲","skin_tone_support":false,"name":"magnet","slug":"magnet","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"⚗️","skin_tone_support":false,"name":"alembic","slug":"alembic","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🧪","skin_tone_support":false,"name":"test tube","slug":"test_tube","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧫","skin_tone_support":false,"name":"petri dish","slug":"petri_dish","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧬","skin_tone_support":false,"name":"dna","slug":"dna","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🔬","skin_tone_support":false,"name":"microscope","slug":"microscope","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔭","skin_tone_support":false,"name":"telescope","slug":"telescope","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"📡","skin_tone_support":false,"name":"satellite antenna","slug":"satellite_antenna","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💉","skin_tone_support":false,"name":"syringe","slug":"syringe","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🩸","skin_tone_support":false,"name":"drop of blood","slug":"drop_of_blood","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"💊","skin_tone_support":false,"name":"pill","slug":"pill","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🩹","skin_tone_support":false,"name":"adhesive bandage","slug":"adhesive_bandage","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🩺","skin_tone_support":false,"name":"stethoscope","slug":"stethoscope","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🚪","skin_tone_support":false,"name":"door","slug":"door","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛏️","skin_tone_support":false,"name":"bed","slug":"bed","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🛋️","skin_tone_support":false,"name":"couch and lamp","slug":"couch_and_lamp","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🪑","skin_tone_support":false,"name":"chair","slug":"chair","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🚽","skin_tone_support":false,"name":"toilet","slug":"toilet","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚿","skin_tone_support":false,"name":"shower","slug":"shower","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛁","skin_tone_support":false,"name":"bathtub","slug":"bathtub","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🪒","skin_tone_support":false,"name":"razor","slug":"razor","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🧴","skin_tone_support":false,"name":"lotion bottle","slug":"lotion_bottle","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧷","skin_tone_support":false,"name":"safety pin","slug":"safety_pin","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧹","skin_tone_support":false,"name":"broom","slug":"broom","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧺","skin_tone_support":false,"name":"basket","slug":"basket","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧻","skin_tone_support":false,"name":"roll of paper","slug":"roll_of_paper","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧼","skin_tone_support":false,"name":"soap","slug":"soap","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧽","skin_tone_support":false,"name":"sponge","slug":"sponge","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🧯","skin_tone_support":false,"name":"fire extinguisher","slug":"fire_extinguisher","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🛒","skin_tone_support":false,"name":"shopping cart","slug":"shopping_cart","unicode_version":"3.0","emoji_version":"3.0"},{"emoji":"🚬","skin_tone_support":false,"name":"cigarette","slug":"cigarette","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚰️","skin_tone_support":false,"name":"coffin","slug":"coffin","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⚱️","skin_tone_support":false,"name":"funeral urn","slug":"funeral_urn","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🗿","skin_tone_support":false,"name":"moai","slug":"moai","unicode_version":"0.6","emoji_version":"0.6"}],"Symbols":[{"emoji":"🏧","skin_tone_support":false,"name":"ATM sign","slug":"atm_sign","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚮","skin_tone_support":false,"name":"litter in bin sign","slug":"litter_in_bin_sign","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚰","skin_tone_support":false,"name":"potable water","slug":"potable_water","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"♿","skin_tone_support":false,"name":"wheelchair symbol","slug":"wheelchair_symbol","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚹","skin_tone_support":false,"name":"men’s room","slug":"men_s_room","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚺","skin_tone_support":false,"name":"women’s room","slug":"women_s_room","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚻","skin_tone_support":false,"name":"restroom","slug":"restroom","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚼","skin_tone_support":false,"name":"baby symbol","slug":"baby_symbol","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚾","skin_tone_support":false,"name":"water closet","slug":"water_closet","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛂","skin_tone_support":false,"name":"passport control","slug":"passport_control","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛃","skin_tone_support":false,"name":"customs","slug":"customs","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛄","skin_tone_support":false,"name":"baggage claim","slug":"baggage_claim","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🛅","skin_tone_support":false,"name":"left luggage","slug":"left_luggage","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⚠️","skin_tone_support":false,"name":"warning","slug":"warning","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚸","skin_tone_support":false,"name":"children crossing","slug":"children_crossing","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⛔","skin_tone_support":false,"name":"no entry","slug":"no_entry","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚫","skin_tone_support":false,"name":"prohibited","slug":"prohibited","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚳","skin_tone_support":false,"name":"no bicycles","slug":"no_bicycles","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚭","skin_tone_support":false,"name":"no smoking","slug":"no_smoking","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚯","skin_tone_support":false,"name":"no littering","slug":"no_littering","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚱","skin_tone_support":false,"name":"non-potable water","slug":"non_potable_water","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🚷","skin_tone_support":false,"name":"no pedestrians","slug":"no_pedestrians","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"📵","skin_tone_support":false,"name":"no mobile phones","slug":"no_mobile_phones","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔞","skin_tone_support":false,"name":"no one under eighteen","slug":"no_one_under_eighteen","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☢️","skin_tone_support":false,"name":"radioactive","slug":"radioactive","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"☣️","skin_tone_support":false,"name":"biohazard","slug":"biohazard","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⬆️","skin_tone_support":false,"name":"up arrow","slug":"up_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↗️","skin_tone_support":false,"name":"up-right arrow","slug":"up_right_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"➡️","skin_tone_support":false,"name":"right arrow","slug":"right_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↘️","skin_tone_support":false,"name":"down-right arrow","slug":"down_right_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⬇️","skin_tone_support":false,"name":"down arrow","slug":"down_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↙️","skin_tone_support":false,"name":"down-left arrow","slug":"down_left_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⬅️","skin_tone_support":false,"name":"left arrow","slug":"left_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↖️","skin_tone_support":false,"name":"up-left arrow","slug":"up_left_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↕️","skin_tone_support":false,"name":"up-down arrow","slug":"up_down_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↔️","skin_tone_support":false,"name":"left-right arrow","slug":"left_right_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↩️","skin_tone_support":false,"name":"right arrow curving left","slug":"right_arrow_curving_left","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"↪️","skin_tone_support":false,"name":"left arrow curving right","slug":"left_arrow_curving_right","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⤴️","skin_tone_support":false,"name":"right arrow curving up","slug":"right_arrow_curving_up","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⤵️","skin_tone_support":false,"name":"right arrow curving down","slug":"right_arrow_curving_down","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔃","skin_tone_support":false,"name":"clockwise vertical arrows","slug":"clockwise_vertical_arrows","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔄","skin_tone_support":false,"name":"counterclockwise arrows button","slug":"counterclockwise_arrows_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔙","skin_tone_support":false,"name":"BACK arrow","slug":"back_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔚","skin_tone_support":false,"name":"END arrow","slug":"end_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔛","skin_tone_support":false,"name":"ON! arrow","slug":"on_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔜","skin_tone_support":false,"name":"SOON arrow","slug":"soon_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔝","skin_tone_support":false,"name":"TOP arrow","slug":"top_arrow","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🛐","skin_tone_support":false,"name":"place of worship","slug":"place_of_worship","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"⚛️","skin_tone_support":false,"name":"atom symbol","slug":"atom_symbol","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🕉️","skin_tone_support":false,"name":"om","slug":"om","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"✡️","skin_tone_support":false,"name":"star of David","slug":"star_of_david","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"☸️","skin_tone_support":false,"name":"wheel of dharma","slug":"wheel_of_dharma","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"☯️","skin_tone_support":false,"name":"yin yang","slug":"yin_yang","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"✝️","skin_tone_support":false,"name":"latin cross","slug":"latin_cross","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"☦️","skin_tone_support":false,"name":"orthodox cross","slug":"orthodox_cross","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"☪️","skin_tone_support":false,"name":"star and crescent","slug":"star_and_crescent","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"☮️","skin_tone_support":false,"name":"peace symbol","slug":"peace_symbol","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🕎","skin_tone_support":false,"name":"menorah","slug":"menorah","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔯","skin_tone_support":false,"name":"dotted six-pointed star","slug":"dotted_six_pointed_star","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♈","skin_tone_support":false,"name":"Aries","slug":"aries","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♉","skin_tone_support":false,"name":"Taurus","slug":"taurus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♊","skin_tone_support":false,"name":"Gemini","slug":"gemini","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♋","skin_tone_support":false,"name":"Cancer","slug":"cancer","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♌","skin_tone_support":false,"name":"Leo","slug":"leo","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♍","skin_tone_support":false,"name":"Virgo","slug":"virgo","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♎","skin_tone_support":false,"name":"Libra","slug":"libra","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♏","skin_tone_support":false,"name":"Scorpio","slug":"scorpio","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♐","skin_tone_support":false,"name":"Sagittarius","slug":"sagittarius","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♑","skin_tone_support":false,"name":"Capricorn","slug":"capricorn","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♒","skin_tone_support":false,"name":"Aquarius","slug":"aquarius","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♓","skin_tone_support":false,"name":"Pisces","slug":"pisces","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⛎","skin_tone_support":false,"name":"Ophiuchus","slug":"ophiuchus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔀","skin_tone_support":false,"name":"shuffle tracks button","slug":"shuffle_tracks_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔁","skin_tone_support":false,"name":"repeat button","slug":"repeat_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔂","skin_tone_support":false,"name":"repeat single button","slug":"repeat_single_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"▶️","skin_tone_support":false,"name":"play button","slug":"play_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏩","skin_tone_support":false,"name":"fast-forward button","slug":"fast_forward_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏭️","skin_tone_support":false,"name":"next track button","slug":"next_track_button","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⏯️","skin_tone_support":false,"name":"play or pause button","slug":"play_or_pause_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"◀️","skin_tone_support":false,"name":"reverse button","slug":"reverse_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏪","skin_tone_support":false,"name":"fast reverse button","slug":"fast_reverse_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏮️","skin_tone_support":false,"name":"last track button","slug":"last_track_button","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🔼","skin_tone_support":false,"name":"upwards button","slug":"upwards_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏫","skin_tone_support":false,"name":"fast up button","slug":"fast_up_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔽","skin_tone_support":false,"name":"downwards button","slug":"downwards_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏬","skin_tone_support":false,"name":"fast down button","slug":"fast_down_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⏸️","skin_tone_support":false,"name":"pause button","slug":"pause_button","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⏹️","skin_tone_support":false,"name":"stop button","slug":"stop_button","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⏺️","skin_tone_support":false,"name":"record button","slug":"record_button","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"⏏️","skin_tone_support":false,"name":"eject button","slug":"eject_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🎦","skin_tone_support":false,"name":"cinema","slug":"cinema","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔅","skin_tone_support":false,"name":"dim button","slug":"dim_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔆","skin_tone_support":false,"name":"bright button","slug":"bright_button","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"📶","skin_tone_support":false,"name":"antenna bars","slug":"antenna_bars","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📳","skin_tone_support":false,"name":"vibration mode","slug":"vibration_mode","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📴","skin_tone_support":false,"name":"mobile phone off","slug":"mobile_phone_off","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♀️","skin_tone_support":false,"name":"female sign","slug":"female_sign","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"♂️","skin_tone_support":false,"name":"male sign","slug":"male_sign","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"⚧️","skin_tone_support":false,"name":"transgender symbol","slug":"transgender_symbol","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"✖️","skin_tone_support":false,"name":"multiply","slug":"multiply","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"➕","skin_tone_support":false,"name":"plus","slug":"plus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"➖","skin_tone_support":false,"name":"minus","slug":"minus","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"➗","skin_tone_support":false,"name":"divide","slug":"divide","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"♾️","skin_tone_support":false,"name":"infinity","slug":"infinity","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"‼️","skin_tone_support":false,"name":"double exclamation mark","slug":"double_exclamation_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⁉️","skin_tone_support":false,"name":"exclamation question mark","slug":"exclamation_question_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❓","skin_tone_support":false,"name":"red question mark","slug":"red_question_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❔","skin_tone_support":false,"name":"white question mark","slug":"white_question_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❕","skin_tone_support":false,"name":"white exclamation mark","slug":"white_exclamation_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❗","skin_tone_support":false,"name":"red exclamation mark","slug":"red_exclamation_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"〰️","skin_tone_support":false,"name":"wavy dash","slug":"wavy_dash","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💱","skin_tone_support":false,"name":"currency exchange","slug":"currency_exchange","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💲","skin_tone_support":false,"name":"heavy dollar sign","slug":"heavy_dollar_sign","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚕️","skin_tone_support":false,"name":"medical symbol","slug":"medical_symbol","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"♻️","skin_tone_support":false,"name":"recycling symbol","slug":"recycling_symbol","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚜️","skin_tone_support":false,"name":"fleur-de-lis","slug":"fleur_de_lis","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🔱","skin_tone_support":false,"name":"trident emblem","slug":"trident_emblem","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"📛","skin_tone_support":false,"name":"name badge","slug":"name_badge","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔰","skin_tone_support":false,"name":"Japanese symbol for beginner","slug":"japanese_symbol_for_beginner","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⭕","skin_tone_support":false,"name":"hollow red circle","slug":"hollow_red_circle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✅","skin_tone_support":false,"name":"check mark button","slug":"check_mark_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"☑️","skin_tone_support":false,"name":"check box with check","slug":"check_box_with_check","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✔️","skin_tone_support":false,"name":"check mark","slug":"check_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❌","skin_tone_support":false,"name":"cross mark","slug":"cross_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❎","skin_tone_support":false,"name":"cross mark button","slug":"cross_mark_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"➰","skin_tone_support":false,"name":"curly loop","slug":"curly_loop","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"➿","skin_tone_support":false,"name":"double curly loop","slug":"double_curly_loop","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"〽️","skin_tone_support":false,"name":"part alternation mark","slug":"part_alternation_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✳️","skin_tone_support":false,"name":"eight-spoked asterisk","slug":"eight_spoked_asterisk","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"✴️","skin_tone_support":false,"name":"eight-pointed star","slug":"eight_pointed_star","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"❇️","skin_tone_support":false,"name":"sparkle","slug":"sparkle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"©️","skin_tone_support":false,"name":"copyright","slug":"copyright","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"®️","skin_tone_support":false,"name":"registered","slug":"registered","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"™️","skin_tone_support":false,"name":"trade mark","slug":"trade_mark","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"#️⃣","skin_tone_support":false,"name":"keycap #","slug":"keycap_","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"*️⃣","skin_tone_support":false,"name":"keycap *","slug":"keycap_","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"0️⃣","skin_tone_support":false,"name":"keycap 0","slug":"keycap_0","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"1️⃣","skin_tone_support":false,"name":"keycap 1","slug":"keycap_1","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"2️⃣","skin_tone_support":false,"name":"keycap 2","slug":"keycap_2","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"3️⃣","skin_tone_support":false,"name":"keycap 3","slug":"keycap_3","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"4️⃣","skin_tone_support":false,"name":"keycap 4","slug":"keycap_4","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"5️⃣","skin_tone_support":false,"name":"keycap 5","slug":"keycap_5","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"6️⃣","skin_tone_support":false,"name":"keycap 6","slug":"keycap_6","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"7️⃣","skin_tone_support":false,"name":"keycap 7","slug":"keycap_7","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"8️⃣","skin_tone_support":false,"name":"keycap 8","slug":"keycap_8","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"9️⃣","skin_tone_support":false,"name":"keycap 9","slug":"keycap_9","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔟","skin_tone_support":false,"name":"keycap 10","slug":"keycap_10","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔠","skin_tone_support":false,"name":"input latin uppercase","slug":"input_latin_uppercase","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔡","skin_tone_support":false,"name":"input latin lowercase","slug":"input_latin_lowercase","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔢","skin_tone_support":false,"name":"input numbers","slug":"input_numbers","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔣","skin_tone_support":false,"name":"input symbols","slug":"input_symbols","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔤","skin_tone_support":false,"name":"input latin letters","slug":"input_latin_letters","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🅰️","skin_tone_support":false,"name":"A button (blood type)","slug":"a_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆎","skin_tone_support":false,"name":"AB button (blood type)","slug":"ab_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🅱️","skin_tone_support":false,"name":"B button (blood type)","slug":"b_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆑","skin_tone_support":false,"name":"CL button","slug":"cl_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆒","skin_tone_support":false,"name":"COOL button","slug":"cool_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆓","skin_tone_support":false,"name":"FREE button","slug":"free_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"ℹ️","skin_tone_support":false,"name":"information","slug":"information","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆔","skin_tone_support":false,"name":"ID button","slug":"id_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"Ⓜ️","skin_tone_support":false,"name":"circled M","slug":"circled_m","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆕","skin_tone_support":false,"name":"NEW button","slug":"new_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆖","skin_tone_support":false,"name":"NG button","slug":"ng_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🅾️","skin_tone_support":false,"name":"O button (blood type)","slug":"o_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆗","skin_tone_support":false,"name":"OK button","slug":"ok_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🅿️","skin_tone_support":false,"name":"P button","slug":"p_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆘","skin_tone_support":false,"name":"SOS button","slug":"sos_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆙","skin_tone_support":false,"name":"UP! button","slug":"up_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🆚","skin_tone_support":false,"name":"VS button","slug":"vs_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈁","skin_tone_support":false,"name":"Japanese “here” button","slug":"japanese_here_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈂️","skin_tone_support":false,"name":"Japanese “service charge” button","slug":"japanese_service_charge_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈷️","skin_tone_support":false,"name":"Japanese “monthly amount” button","slug":"japanese_monthly_amount_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈶","skin_tone_support":false,"name":"Japanese “not free of charge” button","slug":"japanese_not_free_of_charge_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈯","skin_tone_support":false,"name":"Japanese “reserved” button","slug":"japanese_reserved_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🉐","skin_tone_support":false,"name":"Japanese “bargain” button","slug":"japanese_bargain_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈹","skin_tone_support":false,"name":"Japanese “discount” button","slug":"japanese_discount_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈚","skin_tone_support":false,"name":"Japanese “free of charge” button","slug":"japanese_free_of_charge_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈲","skin_tone_support":false,"name":"Japanese “prohibited” button","slug":"japanese_prohibited_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🉑","skin_tone_support":false,"name":"Japanese “acceptable” button","slug":"japanese_acceptable_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈸","skin_tone_support":false,"name":"Japanese “application” button","slug":"japanese_application_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈴","skin_tone_support":false,"name":"Japanese “passing grade” button","slug":"japanese_passing_grade_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈳","skin_tone_support":false,"name":"Japanese “vacancy” button","slug":"japanese_vacancy_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"㊗️","skin_tone_support":false,"name":"Japanese “congratulations” button","slug":"japanese_congratulations_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"㊙️","skin_tone_support":false,"name":"Japanese “secret” button","slug":"japanese_secret_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈺","skin_tone_support":false,"name":"Japanese “open for business” button","slug":"japanese_open_for_business_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🈵","skin_tone_support":false,"name":"Japanese “no vacancy” button","slug":"japanese_no_vacancy_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔴","skin_tone_support":false,"name":"red circle","slug":"red_circle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🟠","skin_tone_support":false,"name":"orange circle","slug":"orange_circle","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟡","skin_tone_support":false,"name":"yellow circle","slug":"yellow_circle","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟢","skin_tone_support":false,"name":"green circle","slug":"green_circle","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🔵","skin_tone_support":false,"name":"blue circle","slug":"blue_circle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🟣","skin_tone_support":false,"name":"purple circle","slug":"purple_circle","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟤","skin_tone_support":false,"name":"brown circle","slug":"brown_circle","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"⚫","skin_tone_support":false,"name":"black circle","slug":"black_circle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⚪","skin_tone_support":false,"name":"white circle","slug":"white_circle","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🟥","skin_tone_support":false,"name":"red square","slug":"red_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟧","skin_tone_support":false,"name":"orange square","slug":"orange_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟨","skin_tone_support":false,"name":"yellow square","slug":"yellow_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟩","skin_tone_support":false,"name":"green square","slug":"green_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟦","skin_tone_support":false,"name":"blue square","slug":"blue_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟪","skin_tone_support":false,"name":"purple square","slug":"purple_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"🟫","skin_tone_support":false,"name":"brown square","slug":"brown_square","unicode_version":"12.0","emoji_version":"12.0"},{"emoji":"⬛","skin_tone_support":false,"name":"black large square","slug":"black_large_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"⬜","skin_tone_support":false,"name":"white large square","slug":"white_large_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"◼️","skin_tone_support":false,"name":"black medium square","slug":"black_medium_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"◻️","skin_tone_support":false,"name":"white medium square","slug":"white_medium_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"◾","skin_tone_support":false,"name":"black medium-small square","slug":"black_medium_small_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"◽","skin_tone_support":false,"name":"white medium-small square","slug":"white_medium_small_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"▪️","skin_tone_support":false,"name":"black small square","slug":"black_small_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"▫️","skin_tone_support":false,"name":"white small square","slug":"white_small_square","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔶","skin_tone_support":false,"name":"large orange diamond","slug":"large_orange_diamond","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔷","skin_tone_support":false,"name":"large blue diamond","slug":"large_blue_diamond","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔸","skin_tone_support":false,"name":"small orange diamond","slug":"small_orange_diamond","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔹","skin_tone_support":false,"name":"small blue diamond","slug":"small_blue_diamond","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔺","skin_tone_support":false,"name":"red triangle pointed up","slug":"red_triangle_pointed_up","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔻","skin_tone_support":false,"name":"red triangle pointed down","slug":"red_triangle_pointed_down","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"💠","skin_tone_support":false,"name":"diamond with a dot","slug":"diamond_with_a_dot","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔘","skin_tone_support":false,"name":"radio button","slug":"radio_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔳","skin_tone_support":false,"name":"white square button","slug":"white_square_button","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🔲","skin_tone_support":false,"name":"black square button","slug":"black_square_button","unicode_version":"0.6","emoji_version":"0.6"}],"Flags":[{"emoji":"🏁","skin_tone_support":false,"name":"chequered flag","slug":"chequered_flag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🚩","skin_tone_support":false,"name":"triangular flag","slug":"triangular_flag","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🎌","skin_tone_support":false,"name":"crossed flags","slug":"crossed_flags","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🏴","skin_tone_support":false,"name":"black flag","slug":"black_flag","unicode_version":"1.0","emoji_version":"1.0"},{"emoji":"🏳️","skin_tone_support":false,"name":"white flag","slug":"white_flag","unicode_version":"0.7","emoji_version":"0.7"},{"emoji":"🏳️‍🌈","skin_tone_support":false,"name":"rainbow flag","slug":"rainbow_flag","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🏳️‍⚧️","skin_tone_support":false,"name":"transgender flag","slug":"transgender_flag","unicode_version":"13.0","emoji_version":"13.0"},{"emoji":"🏴‍☠️","skin_tone_support":false,"name":"pirate flag","slug":"pirate_flag","unicode_version":"11.0","emoji_version":"11.0"},{"emoji":"🇦🇨","skin_tone_support":false,"name":"flag Ascension Island","slug":"flag_ascension_island","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇩","skin_tone_support":false,"name":"flag Andorra","slug":"flag_andorra","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇪","skin_tone_support":false,"name":"flag United Arab Emirates","slug":"flag_united_arab_emirates","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇫","skin_tone_support":false,"name":"flag Afghanistan","slug":"flag_afghanistan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇬","skin_tone_support":false,"name":"flag Antigua & Barbuda","slug":"flag_antigua_barbuda","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇮","skin_tone_support":false,"name":"flag Anguilla","slug":"flag_anguilla","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇱","skin_tone_support":false,"name":"flag Albania","slug":"flag_albania","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇲","skin_tone_support":false,"name":"flag Armenia","slug":"flag_armenia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇴","skin_tone_support":false,"name":"flag Angola","slug":"flag_angola","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇶","skin_tone_support":false,"name":"flag Antarctica","slug":"flag_antarctica","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇷","skin_tone_support":false,"name":"flag Argentina","slug":"flag_argentina","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇸","skin_tone_support":false,"name":"flag American Samoa","slug":"flag_american_samoa","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇹","skin_tone_support":false,"name":"flag Austria","slug":"flag_austria","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇺","skin_tone_support":false,"name":"flag Australia","slug":"flag_australia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇼","skin_tone_support":false,"name":"flag Aruba","slug":"flag_aruba","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇽","skin_tone_support":false,"name":"flag Åland Islands","slug":"flag_aland_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇦🇿","skin_tone_support":false,"name":"flag Azerbaijan","slug":"flag_azerbaijan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇦","skin_tone_support":false,"name":"flag Bosnia & Herzegovina","slug":"flag_bosnia_herzegovina","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇧","skin_tone_support":false,"name":"flag Barbados","slug":"flag_barbados","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇩","skin_tone_support":false,"name":"flag Bangladesh","slug":"flag_bangladesh","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇪","skin_tone_support":false,"name":"flag Belgium","slug":"flag_belgium","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇫","skin_tone_support":false,"name":"flag Burkina Faso","slug":"flag_burkina_faso","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇬","skin_tone_support":false,"name":"flag Bulgaria","slug":"flag_bulgaria","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇭","skin_tone_support":false,"name":"flag Bahrain","slug":"flag_bahrain","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇮","skin_tone_support":false,"name":"flag Burundi","slug":"flag_burundi","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇯","skin_tone_support":false,"name":"flag Benin","slug":"flag_benin","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇱","skin_tone_support":false,"name":"flag St. Barthélemy","slug":"flag_st_barthelemy","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇲","skin_tone_support":false,"name":"flag Bermuda","slug":"flag_bermuda","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇳","skin_tone_support":false,"name":"flag Brunei","slug":"flag_brunei","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇴","skin_tone_support":false,"name":"flag Bolivia","slug":"flag_bolivia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇶","skin_tone_support":false,"name":"flag Caribbean Netherlands","slug":"flag_caribbean_netherlands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇷","skin_tone_support":false,"name":"flag Brazil","slug":"flag_brazil","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇸","skin_tone_support":false,"name":"flag Bahamas","slug":"flag_bahamas","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇹","skin_tone_support":false,"name":"flag Bhutan","slug":"flag_bhutan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇻","skin_tone_support":false,"name":"flag Bouvet Island","slug":"flag_bouvet_island","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇼","skin_tone_support":false,"name":"flag Botswana","slug":"flag_botswana","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇾","skin_tone_support":false,"name":"flag Belarus","slug":"flag_belarus","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇧🇿","skin_tone_support":false,"name":"flag Belize","slug":"flag_belize","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇦","skin_tone_support":false,"name":"flag Canada","slug":"flag_canada","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇨","skin_tone_support":false,"name":"flag Cocos (Keeling) Islands","slug":"flag_cocos_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇩","skin_tone_support":false,"name":"flag Congo - Kinshasa","slug":"flag_congo_kinshasa","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇫","skin_tone_support":false,"name":"flag Central African Republic","slug":"flag_central_african_republic","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇬","skin_tone_support":false,"name":"flag Congo - Brazzaville","slug":"flag_congo_brazzaville","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇭","skin_tone_support":false,"name":"flag Switzerland","slug":"flag_switzerland","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇮","skin_tone_support":false,"name":"flag Côte d’Ivoire","slug":"flag_cote_d_ivoire","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇰","skin_tone_support":false,"name":"flag Cook Islands","slug":"flag_cook_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇱","skin_tone_support":false,"name":"flag Chile","slug":"flag_chile","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇲","skin_tone_support":false,"name":"flag Cameroon","slug":"flag_cameroon","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇳","skin_tone_support":false,"name":"flag China","slug":"flag_china","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇨🇴","skin_tone_support":false,"name":"flag Colombia","slug":"flag_colombia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇵","skin_tone_support":false,"name":"flag Clipperton Island","slug":"flag_clipperton_island","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇷","skin_tone_support":false,"name":"flag Costa Rica","slug":"flag_costa_rica","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇺","skin_tone_support":false,"name":"flag Cuba","slug":"flag_cuba","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇻","skin_tone_support":false,"name":"flag Cape Verde","slug":"flag_cape_verde","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇼","skin_tone_support":false,"name":"flag Curaçao","slug":"flag_curacao","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇽","skin_tone_support":false,"name":"flag Christmas Island","slug":"flag_christmas_island","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇾","skin_tone_support":false,"name":"flag Cyprus","slug":"flag_cyprus","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇨🇿","skin_tone_support":false,"name":"flag Czechia","slug":"flag_czechia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇩🇪","skin_tone_support":false,"name":"flag Germany","slug":"flag_germany","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇩🇬","skin_tone_support":false,"name":"flag Diego Garcia","slug":"flag_diego_garcia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇩🇯","skin_tone_support":false,"name":"flag Djibouti","slug":"flag_djibouti","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇩🇰","skin_tone_support":false,"name":"flag Denmark","slug":"flag_denmark","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇩🇲","skin_tone_support":false,"name":"flag Dominica","slug":"flag_dominica","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇩🇴","skin_tone_support":false,"name":"flag Dominican Republic","slug":"flag_dominican_republic","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇩🇿","skin_tone_support":false,"name":"flag Algeria","slug":"flag_algeria","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇦","skin_tone_support":false,"name":"flag Ceuta & Melilla","slug":"flag_ceuta_melilla","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇨","skin_tone_support":false,"name":"flag Ecuador","slug":"flag_ecuador","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇪","skin_tone_support":false,"name":"flag Estonia","slug":"flag_estonia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇬","skin_tone_support":false,"name":"flag Egypt","slug":"flag_egypt","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇭","skin_tone_support":false,"name":"flag Western Sahara","slug":"flag_western_sahara","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇷","skin_tone_support":false,"name":"flag Eritrea","slug":"flag_eritrea","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇸","skin_tone_support":false,"name":"flag Spain","slug":"flag_spain","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇪🇹","skin_tone_support":false,"name":"flag Ethiopia","slug":"flag_ethiopia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇪🇺","skin_tone_support":false,"name":"flag European Union","slug":"flag_european_union","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇫🇮","skin_tone_support":false,"name":"flag Finland","slug":"flag_finland","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇫🇯","skin_tone_support":false,"name":"flag Fiji","slug":"flag_fiji","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇫🇰","skin_tone_support":false,"name":"flag Falkland Islands","slug":"flag_falkland_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇫🇲","skin_tone_support":false,"name":"flag Micronesia","slug":"flag_micronesia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇫🇴","skin_tone_support":false,"name":"flag Faroe Islands","slug":"flag_faroe_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇫🇷","skin_tone_support":false,"name":"flag France","slug":"flag_france","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇬🇦","skin_tone_support":false,"name":"flag Gabon","slug":"flag_gabon","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇧","skin_tone_support":false,"name":"flag United Kingdom","slug":"flag_united_kingdom","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇬🇩","skin_tone_support":false,"name":"flag Grenada","slug":"flag_grenada","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇪","skin_tone_support":false,"name":"flag Georgia","slug":"flag_georgia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇫","skin_tone_support":false,"name":"flag French Guiana","slug":"flag_french_guiana","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇬","skin_tone_support":false,"name":"flag Guernsey","slug":"flag_guernsey","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇭","skin_tone_support":false,"name":"flag Ghana","slug":"flag_ghana","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇮","skin_tone_support":false,"name":"flag Gibraltar","slug":"flag_gibraltar","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇱","skin_tone_support":false,"name":"flag Greenland","slug":"flag_greenland","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇲","skin_tone_support":false,"name":"flag Gambia","slug":"flag_gambia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇳","skin_tone_support":false,"name":"flag Guinea","slug":"flag_guinea","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇵","skin_tone_support":false,"name":"flag Guadeloupe","slug":"flag_guadeloupe","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇶","skin_tone_support":false,"name":"flag Equatorial Guinea","slug":"flag_equatorial_guinea","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇷","skin_tone_support":false,"name":"flag Greece","slug":"flag_greece","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇸","skin_tone_support":false,"name":"flag South Georgia & South Sandwich Islands","slug":"flag_south_georgia_south_sandwich_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇹","skin_tone_support":false,"name":"flag Guatemala","slug":"flag_guatemala","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇺","skin_tone_support":false,"name":"flag Guam","slug":"flag_guam","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇼","skin_tone_support":false,"name":"flag Guinea-Bissau","slug":"flag_guinea_bissau","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇬🇾","skin_tone_support":false,"name":"flag Guyana","slug":"flag_guyana","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇭🇰","skin_tone_support":false,"name":"flag Hong Kong SAR China","slug":"flag_hong_kong_sar_china","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇭🇲","skin_tone_support":false,"name":"flag Heard & McDonald Islands","slug":"flag_heard_mcdonald_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇭🇳","skin_tone_support":false,"name":"flag Honduras","slug":"flag_honduras","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇭🇷","skin_tone_support":false,"name":"flag Croatia","slug":"flag_croatia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇭🇹","skin_tone_support":false,"name":"flag Haiti","slug":"flag_haiti","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇭🇺","skin_tone_support":false,"name":"flag Hungary","slug":"flag_hungary","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇨","skin_tone_support":false,"name":"flag Canary Islands","slug":"flag_canary_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇩","skin_tone_support":false,"name":"flag Indonesia","slug":"flag_indonesia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇪","skin_tone_support":false,"name":"flag Ireland","slug":"flag_ireland","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇱","skin_tone_support":false,"name":"flag Israel","slug":"flag_israel","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇲","skin_tone_support":false,"name":"flag Isle of Man","slug":"flag_isle_of_man","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇳","skin_tone_support":false,"name":"flag India","slug":"flag_india","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇴","skin_tone_support":false,"name":"flag British Indian Ocean Territory","slug":"flag_british_indian_ocean_territory","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇶","skin_tone_support":false,"name":"flag Iraq","slug":"flag_iraq","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇷","skin_tone_support":false,"name":"flag Iran","slug":"flag_iran","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇸","skin_tone_support":false,"name":"flag Iceland","slug":"flag_iceland","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇮🇹","skin_tone_support":false,"name":"flag Italy","slug":"flag_italy","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇯🇪","skin_tone_support":false,"name":"flag Jersey","slug":"flag_jersey","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇯🇲","skin_tone_support":false,"name":"flag Jamaica","slug":"flag_jamaica","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇯🇴","skin_tone_support":false,"name":"flag Jordan","slug":"flag_jordan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇯🇵","skin_tone_support":false,"name":"flag Japan","slug":"flag_japan","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇰🇪","skin_tone_support":false,"name":"flag Kenya","slug":"flag_kenya","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇬","skin_tone_support":false,"name":"flag Kyrgyzstan","slug":"flag_kyrgyzstan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇭","skin_tone_support":false,"name":"flag Cambodia","slug":"flag_cambodia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇮","skin_tone_support":false,"name":"flag Kiribati","slug":"flag_kiribati","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇲","skin_tone_support":false,"name":"flag Comoros","slug":"flag_comoros","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇳","skin_tone_support":false,"name":"flag St. Kitts & Nevis","slug":"flag_st_kitts_nevis","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇵","skin_tone_support":false,"name":"flag North Korea","slug":"flag_north_korea","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇷","skin_tone_support":false,"name":"flag South Korea","slug":"flag_south_korea","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇰🇼","skin_tone_support":false,"name":"flag Kuwait","slug":"flag_kuwait","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇾","skin_tone_support":false,"name":"flag Cayman Islands","slug":"flag_cayman_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇰🇿","skin_tone_support":false,"name":"flag Kazakhstan","slug":"flag_kazakhstan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇦","skin_tone_support":false,"name":"flag Laos","slug":"flag_laos","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇧","skin_tone_support":false,"name":"flag Lebanon","slug":"flag_lebanon","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇨","skin_tone_support":false,"name":"flag St. Lucia","slug":"flag_st_lucia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇮","skin_tone_support":false,"name":"flag Liechtenstein","slug":"flag_liechtenstein","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇰","skin_tone_support":false,"name":"flag Sri Lanka","slug":"flag_sri_lanka","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇷","skin_tone_support":false,"name":"flag Liberia","slug":"flag_liberia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇸","skin_tone_support":false,"name":"flag Lesotho","slug":"flag_lesotho","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇹","skin_tone_support":false,"name":"flag Lithuania","slug":"flag_lithuania","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇺","skin_tone_support":false,"name":"flag Luxembourg","slug":"flag_luxembourg","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇻","skin_tone_support":false,"name":"flag Latvia","slug":"flag_latvia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇱🇾","skin_tone_support":false,"name":"flag Libya","slug":"flag_libya","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇦","skin_tone_support":false,"name":"flag Morocco","slug":"flag_morocco","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇨","skin_tone_support":false,"name":"flag Monaco","slug":"flag_monaco","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇩","skin_tone_support":false,"name":"flag Moldova","slug":"flag_moldova","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇪","skin_tone_support":false,"name":"flag Montenegro","slug":"flag_montenegro","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇫","skin_tone_support":false,"name":"flag St. Martin","slug":"flag_st_martin","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇬","skin_tone_support":false,"name":"flag Madagascar","slug":"flag_madagascar","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇭","skin_tone_support":false,"name":"flag Marshall Islands","slug":"flag_marshall_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇰","skin_tone_support":false,"name":"flag North Macedonia","slug":"flag_north_macedonia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇱","skin_tone_support":false,"name":"flag Mali","slug":"flag_mali","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇲","skin_tone_support":false,"name":"flag Myanmar (Burma)","slug":"flag_myanmar","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇳","skin_tone_support":false,"name":"flag Mongolia","slug":"flag_mongolia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇴","skin_tone_support":false,"name":"flag Macao SAR China","slug":"flag_macao_sar_china","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇵","skin_tone_support":false,"name":"flag Northern Mariana Islands","slug":"flag_northern_mariana_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇶","skin_tone_support":false,"name":"flag Martinique","slug":"flag_martinique","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇷","skin_tone_support":false,"name":"flag Mauritania","slug":"flag_mauritania","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇸","skin_tone_support":false,"name":"flag Montserrat","slug":"flag_montserrat","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇹","skin_tone_support":false,"name":"flag Malta","slug":"flag_malta","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇺","skin_tone_support":false,"name":"flag Mauritius","slug":"flag_mauritius","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇻","skin_tone_support":false,"name":"flag Maldives","slug":"flag_maldives","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇼","skin_tone_support":false,"name":"flag Malawi","slug":"flag_malawi","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇽","skin_tone_support":false,"name":"flag Mexico","slug":"flag_mexico","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇾","skin_tone_support":false,"name":"flag Malaysia","slug":"flag_malaysia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇲🇿","skin_tone_support":false,"name":"flag Mozambique","slug":"flag_mozambique","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇦","skin_tone_support":false,"name":"flag Namibia","slug":"flag_namibia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇨","skin_tone_support":false,"name":"flag New Caledonia","slug":"flag_new_caledonia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇪","skin_tone_support":false,"name":"flag Niger","slug":"flag_niger","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇫","skin_tone_support":false,"name":"flag Norfolk Island","slug":"flag_norfolk_island","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇬","skin_tone_support":false,"name":"flag Nigeria","slug":"flag_nigeria","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇮","skin_tone_support":false,"name":"flag Nicaragua","slug":"flag_nicaragua","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇱","skin_tone_support":false,"name":"flag Netherlands","slug":"flag_netherlands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇴","skin_tone_support":false,"name":"flag Norway","slug":"flag_norway","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇵","skin_tone_support":false,"name":"flag Nepal","slug":"flag_nepal","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇷","skin_tone_support":false,"name":"flag Nauru","slug":"flag_nauru","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇺","skin_tone_support":false,"name":"flag Niue","slug":"flag_niue","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇳🇿","skin_tone_support":false,"name":"flag New Zealand","slug":"flag_new_zealand","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇴🇲","skin_tone_support":false,"name":"flag Oman","slug":"flag_oman","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇦","skin_tone_support":false,"name":"flag Panama","slug":"flag_panama","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇪","skin_tone_support":false,"name":"flag Peru","slug":"flag_peru","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇫","skin_tone_support":false,"name":"flag French Polynesia","slug":"flag_french_polynesia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇬","skin_tone_support":false,"name":"flag Papua New Guinea","slug":"flag_papua_new_guinea","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇭","skin_tone_support":false,"name":"flag Philippines","slug":"flag_philippines","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇰","skin_tone_support":false,"name":"flag Pakistan","slug":"flag_pakistan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇱","skin_tone_support":false,"name":"flag Poland","slug":"flag_poland","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇲","skin_tone_support":false,"name":"flag St. Pierre & Miquelon","slug":"flag_st_pierre_miquelon","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇳","skin_tone_support":false,"name":"flag Pitcairn Islands","slug":"flag_pitcairn_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇷","skin_tone_support":false,"name":"flag Puerto Rico","slug":"flag_puerto_rico","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇸","skin_tone_support":false,"name":"flag Palestinian Territories","slug":"flag_palestinian_territories","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇹","skin_tone_support":false,"name":"flag Portugal","slug":"flag_portugal","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇼","skin_tone_support":false,"name":"flag Palau","slug":"flag_palau","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇵🇾","skin_tone_support":false,"name":"flag Paraguay","slug":"flag_paraguay","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇶🇦","skin_tone_support":false,"name":"flag Qatar","slug":"flag_qatar","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇷🇪","skin_tone_support":false,"name":"flag Réunion","slug":"flag_reunion","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇷🇴","skin_tone_support":false,"name":"flag Romania","slug":"flag_romania","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇷🇸","skin_tone_support":false,"name":"flag Serbia","slug":"flag_serbia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇷🇺","skin_tone_support":false,"name":"flag Russia","slug":"flag_russia","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇷🇼","skin_tone_support":false,"name":"flag Rwanda","slug":"flag_rwanda","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇦","skin_tone_support":false,"name":"flag Saudi Arabia","slug":"flag_saudi_arabia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇧","skin_tone_support":false,"name":"flag Solomon Islands","slug":"flag_solomon_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇨","skin_tone_support":false,"name":"flag Seychelles","slug":"flag_seychelles","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇩","skin_tone_support":false,"name":"flag Sudan","slug":"flag_sudan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇪","skin_tone_support":false,"name":"flag Sweden","slug":"flag_sweden","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇬","skin_tone_support":false,"name":"flag Singapore","slug":"flag_singapore","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇭","skin_tone_support":false,"name":"flag St. Helena","slug":"flag_st_helena","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇮","skin_tone_support":false,"name":"flag Slovenia","slug":"flag_slovenia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇯","skin_tone_support":false,"name":"flag Svalbard & Jan Mayen","slug":"flag_svalbard_jan_mayen","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇰","skin_tone_support":false,"name":"flag Slovakia","slug":"flag_slovakia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇱","skin_tone_support":false,"name":"flag Sierra Leone","slug":"flag_sierra_leone","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇲","skin_tone_support":false,"name":"flag San Marino","slug":"flag_san_marino","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇳","skin_tone_support":false,"name":"flag Senegal","slug":"flag_senegal","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇴","skin_tone_support":false,"name":"flag Somalia","slug":"flag_somalia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇷","skin_tone_support":false,"name":"flag Suriname","slug":"flag_suriname","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇸","skin_tone_support":false,"name":"flag South Sudan","slug":"flag_south_sudan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇹","skin_tone_support":false,"name":"flag São Tomé & Príncipe","slug":"flag_sao_tome_principe","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇻","skin_tone_support":false,"name":"flag El Salvador","slug":"flag_el_salvador","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇽","skin_tone_support":false,"name":"flag Sint Maarten","slug":"flag_sint_maarten","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇾","skin_tone_support":false,"name":"flag Syria","slug":"flag_syria","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇸🇿","skin_tone_support":false,"name":"flag Eswatini","slug":"flag_eswatini","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇦","skin_tone_support":false,"name":"flag Tristan da Cunha","slug":"flag_tristan_da_cunha","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇨","skin_tone_support":false,"name":"flag Turks & Caicos Islands","slug":"flag_turks_caicos_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇩","skin_tone_support":false,"name":"flag Chad","slug":"flag_chad","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇫","skin_tone_support":false,"name":"flag French Southern Territories","slug":"flag_french_southern_territories","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇬","skin_tone_support":false,"name":"flag Togo","slug":"flag_togo","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇭","skin_tone_support":false,"name":"flag Thailand","slug":"flag_thailand","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇯","skin_tone_support":false,"name":"flag Tajikistan","slug":"flag_tajikistan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇰","skin_tone_support":false,"name":"flag Tokelau","slug":"flag_tokelau","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇱","skin_tone_support":false,"name":"flag Timor-Leste","slug":"flag_timor_leste","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇲","skin_tone_support":false,"name":"flag Turkmenistan","slug":"flag_turkmenistan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇳","skin_tone_support":false,"name":"flag Tunisia","slug":"flag_tunisia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇴","skin_tone_support":false,"name":"flag Tonga","slug":"flag_tonga","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇷","skin_tone_support":false,"name":"flag Turkey","slug":"flag_turkey","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇹","skin_tone_support":false,"name":"flag Trinidad & Tobago","slug":"flag_trinidad_tobago","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇻","skin_tone_support":false,"name":"flag Tuvalu","slug":"flag_tuvalu","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇼","skin_tone_support":false,"name":"flag Taiwan","slug":"flag_taiwan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇹🇿","skin_tone_support":false,"name":"flag Tanzania","slug":"flag_tanzania","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇺🇦","skin_tone_support":false,"name":"flag Ukraine","slug":"flag_ukraine","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇺🇬","skin_tone_support":false,"name":"flag Uganda","slug":"flag_uganda","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇺🇲","skin_tone_support":false,"name":"flag U.S. Outlying Islands","slug":"flag_u_s_outlying_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇺🇳","skin_tone_support":false,"name":"flag United Nations","slug":"flag_united_nations","unicode_version":"4.0","emoji_version":"4.0"},{"emoji":"🇺🇸","skin_tone_support":false,"name":"flag United States","slug":"flag_united_states","unicode_version":"0.6","emoji_version":"0.6"},{"emoji":"🇺🇾","skin_tone_support":false,"name":"flag Uruguay","slug":"flag_uruguay","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇺🇿","skin_tone_support":false,"name":"flag Uzbekistan","slug":"flag_uzbekistan","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇦","skin_tone_support":false,"name":"flag Vatican City","slug":"flag_vatican_city","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇨","skin_tone_support":false,"name":"flag St. Vincent & Grenadines","slug":"flag_st_vincent_grenadines","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇪","skin_tone_support":false,"name":"flag Venezuela","slug":"flag_venezuela","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇬","skin_tone_support":false,"name":"flag British Virgin Islands","slug":"flag_british_virgin_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇮","skin_tone_support":false,"name":"flag U.S. Virgin Islands","slug":"flag_u_s_virgin_islands","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇳","skin_tone_support":false,"name":"flag Vietnam","slug":"flag_vietnam","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇻🇺","skin_tone_support":false,"name":"flag Vanuatu","slug":"flag_vanuatu","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇼🇫","skin_tone_support":false,"name":"flag Wallis & Futuna","slug":"flag_wallis_futuna","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇼🇸","skin_tone_support":false,"name":"flag Samoa","slug":"flag_samoa","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇽🇰","skin_tone_support":false,"name":"flag Kosovo","slug":"flag_kosovo","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇾🇪","skin_tone_support":false,"name":"flag Yemen","slug":"flag_yemen","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇾🇹","skin_tone_support":false,"name":"flag Mayotte","slug":"flag_mayotte","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇿🇦","skin_tone_support":false,"name":"flag South Africa","slug":"flag_south_africa","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇿🇲","skin_tone_support":false,"name":"flag Zambia","slug":"flag_zambia","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🇿🇼","skin_tone_support":false,"name":"flag Zimbabwe","slug":"flag_zimbabwe","unicode_version":"2.0","emoji_version":"2.0"},{"emoji":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","skin_tone_support":false,"name":"flag England","slug":"flag_england","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","skin_tone_support":false,"name":"flag Scotland","slug":"flag_scotland","unicode_version":"5.0","emoji_version":"5.0"},{"emoji":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","skin_tone_support":false,"name":"flag Wales","slug":"flag_wales","unicode_version":"5.0","emoji_version":"5.0"}]}')
    },
    d751: function(e) {
        e.exports = JSON.parse('{"text":{"content":"Always Angry","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#836cc1","mode":"autoFit","padding":0,"dy":30},"background":{"type":"none","color":"#7bbc5c","mode":"pattern"}}')
    },
    e357: function(e, o, n) {
        "use strict";
        n("1c64")
    },
    e415: function(e, o, n) {
        "use strict";
        n("397a")
    },
    e6d5: function(e, o, n) {
        "use strict";
        n("385f")
    },
    e753: function(e, o, n) {
        "use strict";
        n("79f6")
    },
    f1e9: function(e, o, n) {},
    f215: function(e) {
        e.exports = JSON.parse('{"text":{"content":"Welcome!!!","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#000000","mode":"autoFit","padding":0,"dy":30},"background":{"type":"none","color":"#FBB82C","mode":"pattern"}}')
    },
    f36a: function(e, o, n) {
        "use strict";
        n("8ae6")
    },
    f46a: function(e, o, n) {
        "use strict";
        n("f1e9")
    },
    f49d: function(e) {
        e.exports = JSON.parse('{"text":{"content":"梦想和爱\\n健康和学习","fontSize":200,"fontFamily":"Yuanti SC","type":"none","color":"#FFA45B","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#FBF6F0","mode":"pattern"}}')
    },
    fa59: function(e) {
        e.exports = JSON.parse('{"text":{"content":"falling down","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#fff","mode":"autoFit","padding":0,"dy":30},"background":{"mode":"image","imageURL":"https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439457370.webp"}}')
    },
    fc19: function(e) {
        e.exports = JSON.parse('{"text":{"content":"🍋🌳👇🐷🙋‍♀️","fontSize":121,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#000","mode":"none","padding":0,"dy":0},"background":{"type":"none","color":"#ed6828","mode":"pattern"}}')
    },
    fd84: function(e, o, n) {},
    fdc6: function(e) {
        e.exports = JSON.parse('{"text":{"content":"Face challenge","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"none","color":"#fff","mode":"autoFit","padding":0,"dy":30},"background":{"mode":"image","imageURL":"https://jsd.cdn.zzko.cn/gh/saoxiaoyu/picx-images-hosting@master/20230826/1706439492573.webp"}}')
    },
    fe82: function(e) {
        e.exports = JSON.parse('{"text":{"content":"Mamba forever","fontSize":200,"fontFamily":"Luckiest Guy","fontURL":"./fonts/luckiest_guy.woff2","type":"line","rotation":45,"width":25,"height":25,"foregroundColor":"#EEEEEE","color":"#FFD369","mode":"autoFit","lineWidth":1.5,"padding":0,"dy":30},"background":{"mode":"pattern","color":"#222831","foregroundColor":"#393E46","type":"line","width":50,"lineWidth":1.5,"rotation":0}}')
    }
});
//# sourceMappingURL=app.b82e531e.js.map
