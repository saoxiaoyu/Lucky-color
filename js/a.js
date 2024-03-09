function d(t, E) {
    const w = l();
    return d = function (h, o) {
        h = h - 0x89;
        let B = w[h];
        return B;
    }, d(t, E);
}
(function (t, E) {
    const lK = d, w = t();
    while (!![]) {
        try {
            const h = -parseInt(lK(0x152)) / 0x1 + -parseInt(lK(0x2ee)) / 0x2 * (-parseInt(lK(0x2c4)) / 0x3) + parseInt(lK(0x4c8)) / 0x4 * (-parseInt(lK(0x3be)) / 0x5) + -parseInt(lK(0x44f)) / 0x6 + parseInt(lK(0x3b7)) / 0x7 + -parseInt(lK(0x46a)) / 0x8 + parseInt(lK(0x1b7)) / 0x9;
            if (h === E)
                break;
            else
                w['push'](w['shift']());
        } catch (o) {
            w['push'](w['shift']());
        }
    }
}(l, 0xe0442), function (E) {
    const d3 = d, h = (function () {
            let c = !![];
            return function (A, P) {
                const v = c ? function () {
                    const lp = d;
                    if (P) {
                        const f = P[lp(0x3b0)](A, arguments);
                        return P = null, f;
                    }
                } : function () {
                };
                return c = ![], v;
            };
        }()), L = (function () {
            let c = !![];
            return function (A, P) {
                const v = c ? function () {
                    const lS = d;
                    if (P) {
                        const f = P[lS(0x3b0)](A, arguments);
                        return P = null, f;
                    }
                } : function () {
                };
                return c = ![], v;
            };
        }());
    function G(c) {
        const lN = d, A = h(this, function () {
                const lO = d, g = function () {
                        const lI = d;
                        let t1;
                        try {
                            t1 = Function('return\x20(function()\x20' + lI(0x496) + ');')();
                        } catch (t2) {
                            t1 = window;
                        }
                        return t1;
                    }, j = g(), D = new RegExp(lO(0x187), 'g'), z = lO(0x1ea)[lO(0x488)](D, '')[lO(0x487)](';');
                let R, Z, b, K;
                const S = function (t1, t2, t3) {
                        const lr = lO;
                        if (t1['length'] != t2)
                            return ![];
                        for (let t4 = 0x0; t4 < t2; t4++) {
                            for (let t5 = 0x0; t5 < t3[lr(0xa9)]; t5 += 0x2) {
                                if (t4 == t3[t5] && t1[lr(0x348)](t4) != t3[t5 + 0x1])
                                    return ![];
                            }
                        }
                        return !![];
                    }, I = function (t1, t2, t3) {
                        return S(t2, t3, t1);
                    }, O = function (t1, t2, t3) {
                        return I(t2, t1, t3);
                    }, U = function (t1, t2, t3) {
                        return O(t2, t3, t1);
                    };
                for (let t1 in j) {
                    if (S(t1, 0x8, [
                            0x7,
                            0x74,
                            0x5,
                            0x65,
                            0x3,
                            0x75,
                            0x0,
                            0x64
                        ])) {
                        R = t1;
                        break;
                    }
                }
                for (let t2 in j[R]) {
                    if (U(0x6, t2, [
                            0x5,
                            0x6e,
                            0x0,
                            0x64
                        ])) {
                        Z = t2;
                        break;
                    }
                }
                for (let t3 in j[R]) {
                    if (O(t3, [
                            0x7,
                            0x6e,
                            0x0,
                            0x6c
                        ], 0x8)) {
                        b = t3;
                        break;
                    }
                }
                if (!('~' > Z))
                    for (let t4 in j[R][b]) {
                        if (I([
                                0x7,
                                0x65,
                                0x0,
                                0x68
                            ], t4, 0x8)) {
                            K = t4;
                            break;
                        }
                    }
                if (!R || !j[R])
                    return;
                const N = j[R][Z], T = !!j[R][b] && j[R][b][K], M = N || T;
                if (!M)
                    return;
                let t0 = ![];
                for (let t5 = 0x0; t5 < z['length']; t5++) {
                    const t6 = z[t5], t7 = t6[0x0] === String['fromCharCode'](0x2e) ? t6[lO(0x19d)](0x1) : t6, t8 = M[lO(0xa9)] - t7[lO(0xa9)], t9 = M[lO(0x26d)](t7, t8), tt = t9 !== -0x1 && t9 === t8;
                    tt && ((M[lO(0xa9)] == t6['length'] || t6[lO(0x26d)]('.') === 0x0) && (t0 = !![]));
                }
                if (!t0) {
                    const tE = new RegExp(lO(0x26e), 'g'), tw = lO(0x4e0)[lO(0x488)](tE, '');
                    j[R][b] = tw;
                }
            });
        A();
        const P = L(this, function () {
            const lU = d;
            let g;
            try {
                const z = Function(lU(0x4d4) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                g = z();
            } catch (R) {
                g = window;
            }
            const j = g[lU(0x24a)] = g[lU(0x24a)] || {}, D = [
                    lU(0x352),
                    lU(0x479),
                    lU(0xf3),
                    'error',
                    lU(0x172),
                    'table',
                    lU(0x1b6)
                ];
            for (let Z = 0x0; Z < D[lU(0xa9)]; Z++) {
                const b = L[lU(0x442)][lU(0x1e1)][lU(0x38e)](L), K = D[Z], S = j[K] || b;
                b[lU(0x1ab)] = L[lU(0x38e)](L), b['toString'] = S[lU(0x48d)][lU(0x38e)](S), j[K] = b;
            }
        });
        P();
        for (var v, f, q = c[0x0], Y = c[0x1], k = c[0x2], V = 0x0, X = []; V < q[lN(0xa9)]; V++)
            f = q[V], Object[lN(0x1e1)]['hasOwnProperty'][lN(0x278)](F, f) && F[f] && X[lN(0x4b3)](F[f][0x0]), F[f] = 0x0;
        for (v in Y)
            Object['prototype'][lN(0x46f)][lN(0x278)](Y, v) && (E[v] = Y[v]);
        y && y(c);
        while (X[lN(0xa9)])
            X[lN(0x117)]()();
        return W[lN(0x4b3)][lN(0x3b0)](W, k || []), x();
    }
    function x() {
        const lT = d;
        for (var c, A = 0x0; A < W['length']; A++) {
            for (var P = W[A], v = !0x0, f = 0x1; f < P[lT(0xa9)]; f++) {
                var q = P[f];
                0x0 !== F[q] && (v = !0x1);
            }
            v && (W['splice'](A--, 0x1), c = C(C['s'] = P[0x0]));
        }
        return c;
    }
    var J = {}, F = { 'app': 0x0 }, W = [];
    function C(c) {
        const lM = d;
        if (J[c])
            return J[c][lM(0x248)];
        var A = J[c] = {
            'i': c,
            'l': !0x1,
            'exports': {}
        };
        return E[c][lM(0x278)](A['exports'], A, A['exports'], C), A['l'] = !0x0, A[lM(0x248)];
    }
    C['m'] = E, C['c'] = J, C['d'] = function (c, A, P) {
        C['o'](c, A) || Object['defineProperty'](c, A, {
            'enumerable': !0x0,
            'get': P
        });
    }, C['r'] = function (c) {
        const d0 = d;
        'undefined' !== typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](c, Symbol[d0(0x1c6)], { 'value': d0(0x133) }), Object[d0(0x34a)](c, d0(0x1a7), { 'value': !0x0 });
    }, C['t'] = function (c, A) {
        const d1 = d;
        if (0x1 & A && (c = C(c)), 0x8 & A)
            return c;
        if (0x4 & A && d1(0x47b) === typeof c && c && c[d1(0x1a7)])
            return c;
        var P = Object[d1(0x491)](null);
        if (C['r'](P), Object[d1(0x34a)](P, d1(0x39d), {
                'enumerable': !0x0,
                'value': c
            }), 0x2 & A && d1(0x159) != typeof c) {
            for (var v in c)
                C['d'](P, v, function (f) {
                    return c[f];
                }[d1(0x38e)](null, v));
        }
        return P;
    }, C['n'] = function (c) {
        var A = c && c['__esModule'] ? function () {
            return c['default'];
        } : function () {
            return c;
        };
        return C['d'](A, 'a', A), A;
    }, C['o'] = function (c, A) {
        const d2 = d;
        return Object[d2(0x1e1)][d2(0x46f)]['call'](c, A);
    }, C['p'] = d3(0x11a);
    var m = window[d3(0x132)] = window[d3(0x132)] || [], H = m[d3(0x4b3)]['bind'](m);
    m['push'] = G, m = m[d3(0x19d)]();
    for (var Q = 0x0; Q < m[d3(0xa9)]; Q++)
        G(m[Q]);
    var y = H;
    W['push']([
        0x0,
        d3(0x92)
    ]), x();
}({
    0x0: function (t, E, w) {
        const d4 = d;
        t[d4(0x248)] = w('56d7');
    },
    '086e': function (t, E, w) {
    },
    '0a1b': function (t) {
        const d5 = d;
        t[d5(0x248)] = JSON[d5(0x311)](d5(0x25b));
    },
    '0cf1': function (t, E, w) {
        'use strict';
        const d6 = d;
        w(d6(0x13f));
    },
    '0d74': function (t, E, w) {
        'use strict';
        const d7 = d;
        w(d7(0x173));
    },
    '0f57': function (t, E, w) {
        'use strict';
        w('4cc9');
    },
    0x5c5: function (t, E, w) {
    },
    0x69d: function (t) {
        const d8 = d;
        t[d8(0x248)] = JSON[d8(0x311)](d8(0x4a3));
    },
    '177c': function (t, E, w) {
        'use strict';
        const d9 = d;
        w(d9(0xcb));
    },
    '179b': function (t) {
        const dt = d;
        t['exports'] = JSON[dt(0x311)](dt(0x1f4));
    },
    '196d': function (t, E, w) {
        'use strict';
        const dE = d;
        w(dE(0x205));
    },
    '1ac0': function (t) {
        const dw = d;
        t['exports'] = JSON[dw(0x311)]('{\x22text\x22:{\x22content\x22:\x22Spring\x22,\x22fontSize\x22:279,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#FFDC34\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:60},\x22background\x22:{\x22type\x22:\x22line\x22,\x22color\x22:\x22#4DD599\x22,\x22mode\x22:\x22pattern\x22,\x22foregroundColor\x22:\x22#00918E\x22,\x22lineWidth\x22:189,\x22width\x22:204,\x22rotation\x22:-22}}');
    },
    '1b79': function (t, E, w) {
    },
    '1c64': function (t, E, w) {
    },
    '1e2e': function (t) {
        const dh = d;
        t[dh(0x248)] = JSON[dh(0x311)]('{\x22text\x22:{\x22content\x22:\x22我有这脸\x5cn洗澡都不关门\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Wawati\x20SC\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#FFD460\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#ea5455\x22,\x22mode\x22:\x22pattern\x22}}');
    },
    '1fee': function (t, E, w) {
        'use strict';
        const dB = d;
        w(dB(0x4e1));
    },
    0x846: function (t, E, w) {
        const dl = d;
        t[dl(0x248)] = w['p'] + dl(0x25f);
    },
    '32ca': function (t, E, w) {
        'use strict';
        const dd = d;
        w(dd(0x3d1));
    },
    '33cc': function (t) {
        const dL = d;
        t['exports'] = JSON[dL(0x311)](dL(0x3e8));
    },
    0xe01: function (t, E, w) {
        'use strict';
        const dG = d;
        w(dG(0x3b9));
    },
    '377a': function (t, E, w) {
    },
    '385f': function (t, E, w) {
    },
    '397a': function (t, E, w) {
    },
    '39a5': function (t, E, w) {
    },
    '3da8': function (t, E, w) {
        'use strict';
        w('5f25');
    },
    '3e76': function (t, E, w) {
    },
    0xfa4: function (t) {
        const dx = d;
        t[dx(0x248)] = JSON['parse'](dx(0x457));
    },
    0xff8: function (t, E, w) {
        'use strict';
        const dJ = d;
        w(dJ(0x10a));
    },
    0x1117: function (t) {
        const di = d;
        t[di(0x248)] = JSON[di(0x311)](di(0x37e));
    },
    '4a48': function (t) {
        const dF = d;
        t['exports'] = JSON[dF(0x311)](dF(0xe8));
    },
    '4cc9': function (t, E, w) {
    },
    '535e': function (t) {
        const dW = d;
        t[dW(0x248)] = JSON['parse']('{\x22text\x22:{\x22content\x22:\x22\x20I\x20miss\x20you.\x20*\x20\x22,\x22fontSize\x22:120,\x22fontFamily\x22:\x22Xingkai\x20SC\x22,\x22type\x22:\x22dot\x22,\x22color\x22:\x22#B5E4D0\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:2,\x22fillColor\x22:\x22#D2F6C5\x22,\x22size\x22:37,\x22strokeColor\x22:\x22#D2F6C5\x22,\x22lineWidth\x22:1,\x22width\x22:50,\x22height\x22:50,\x22rotation\x22:0},\x22background\x22:{\x22type\x22:\x22dot\x22,\x22color\x22:\x22#DF6E97\x22,\x22mode\x22:\x22pattern\x22,\x22foregroundColor\x22:\x22#FEFFC8\x22,\x22lineWidth\x22:1,\x22width\x22:50,\x22height\x22:50,\x22arcRadius\x22:0,\x22rotation\x22:45,\x22fillColor\x22:\x22#E1A2B9\x22,\x22size\x22:3,\x22strokeColor\x22:\x22#E1A2B9\x22}}');
    },
    '56d7': function (t0, t1, t2) {
        'use strict';
        const dC = d;
        t2['r'](t1), (t2(dC(0x156)), t2('bdaf'));
        var t3 = t2(dC(0x443)), t4 = t2['n'](t3), t5 = (t2('ac3b'), t2(dC(0x4b9))), t6 = t2['n'](t5), t7 = (t2(dC(0x9e)), t2(dC(0x3ba))), t8 = t2['n'](t7), t9 = (t2(dC(0x2bc)), t2(dC(0x3a7))), tt = t2['n'](t9), tE = (t2(dC(0x2a6)), t2(dC(0x121))), tw = t2['n'](tE), th = (t2(dC(0x2e9)), t2('77df')), tB = t2['n'](th), tl = (t2(dC(0x2a9)), t2('affb')), td = t2['n'](tl), tL = (t2(dC(0x383)), t2(dC(0x444))), tG = t2['n'](tL), tx = (t2(dC(0x257)), t2(dC(0x1c3))), tJ = t2['n'](tx), tF = (t2(dC(0x3c9)), t2(dC(0x497))), tW = t2['n'](tF), tC = (t2(dC(0x41e)), t2(dC(0xa5))), tm = t2['n'](tC), tH = (t2('dc33'), t2(dC(0x425))), tQ = t2['n'](tH), ty = (t2(dC(0x9c)), t2(dC(0x321))), tc = t2['n'](ty), tA = (t2(dC(0x3f8)), t2(dC(0x2fa))), tP = t2['n'](tA), tv = (t2(dC(0x43c)), t2(dC(0x332))), tf = t2['n'](tv), tq = (t2(dC(0x358)), t2(dC(0x28a))), ta = t2['n'](tq), tY = (t2('2876'), t2(dC(0x29d))), tk = t2['n'](tY), tV = (t2(dC(0x3ec)), t2(dC(0x131))), tX = t2['n'](tV), tg = (t2(dC(0x22e)), t2(dC(0x1da))), tj = t2['n'](tg), tD = (t2(dC(0xa8)), t2(dC(0x3df))), tu = t2['n'](tD), tz = (t2(dC(0x2a0)), t2(dC(0x395))), tR = t2['n'](tz), tZ = (t2(dC(0xcf)), t2(dC(0xba))), tb = t2['n'](tZ), tK = (t2(dC(0x48f)), t2(dC(0x4ac))), tp = t2['n'](tK), tS = (t2(dC(0x3c7)), t2(dC(0x297))), tI = t2['n'](tS), tO = (t2(dC(0x455)), t2(dC(0x2e2))), tU = t2['n'](tO), tN = (t2(dC(0x14d)), t2('3d7a')), tT = t2['n'](tN), tM = (t2('5c76'), t2(dC(0x281))), E0 = t2['n'](tM), E1 = (t2(dC(0x2ae)), t2(dC(0x11e))), E2 = t2['n'](E1), E3 = (t2(dC(0x27d)), t2('0b00')), E4 = t2['n'](E3), E5 = (t2(dC(0x240)), t2('7694')), E6 = t2['n'](E5), E7 = t2('1f37'), E8 = t2(dC(0x16b)), E9 = t2['n'](E8), Et = (t2('752d'), function () {
                const dm = dC;
                var lm = this, lH = lm[dm(0x1a3)]['_c'];
                return lH(dm(0x197), { 'attrs': { 'id': dm(0x19b) } }, [lH(dm(0x197), { 'attrs': { 'id': dm(0x15f) } }, [
                        lH('nav-header'),
                        lH(dm(0x41b), { 'attrs': { 'exclude': dm(0x41f) } }, [lH(dm(0x260))], 0x1)
                    ], 0x1)]);
            }), EE = [], Ew = function () {
                const dH = dC;
                var lm = this, lH = lm[dH(0x1a3)]['_c'];
                return lH('div', { 'staticClass': 'nav-header-container' }, [
                    lH(dH(0x394), {
                        'staticClass': 'nav-logo',
                        'on': { 'click': lm[dH(0x436)] }
                    }, [lm['_v'](dH(0x1ae))]),
                    lH('el-menu', {
                        'attrs': {
                            'mode': dH(0x4eb),
                            'router': !0x0,
                            'default-active': lm['path'],
                            'background-color': dH(0x359),
                            'text-color': dH(0xf5),
                            'active-text-color': '#999999'
                        }
                    }, [
                        lH('el-menu-item', { 'attrs': { 'index': '/' } }, [lm['_v']('首页')]),
                        lH(dH(0x2c1), { 'attrs': { 'index': dH(0x3ae) } }, [lm['_v']('创作')]),
                        lH(dH(0x2c1), { 'attrs': { 'index': dH(0x3de) } }, [lm['_v']('关于')]),
                        lH('el-menu-item', { 'attrs': { 'index': '' } }, [lH('a', {
                                'attrs': {
                                    'href': dH(0x3f4),
                                    'target': dH(0x4a2)
                                }
                            }, [lm['_v']('博客')])])
                    ], 0x1)
                ], 0x1);
            }, Eh = [], EB = (t2(dC(0x243)), {
                'data'() {
                    const dQ = dC;
                    return { 'path': this[dQ(0x365)][dQ(0x4e4)][dQ(0x355)] };
                },
                'watch': {
                    '$route'(lm) {
                        const dy = dC, {path: lH} = lm;
                        this[dy(0x355)] = lH;
                    }
                },
                'methods': {
                    'goHome'() {
                        const de = dC;
                        this['$router'][de(0x4b3)]('/');
                    }
                }
            }), El = EB, Ed = (t2('3585'), t2(dC(0x15c))), EL = Object(Ed['a'])(El, Ew, Eh, !0x1, null, null, null), EG = EL[dC(0x248)], Ex = {
                'name': dC(0x2f1),
                'components': { 'NavHeader': EG }
            }, EJ = Ex, EF = (t2(dC(0x388)), Object(Ed['a'])(EJ, Et, EE, !0x1, null, null, null)), EW = EF[dC(0x248)], EC = t2(dC(0x42b)), Em = function () {
                const dc = dC;
                var lm = this, lH = lm['_self']['_c'];
                return lH('div', { 'staticClass': dc(0x1c4) }, [
                    lH('div', { 'staticClass': dc(0x440) }, [
                        lH(dc(0x197), { 'staticClass': dc(0x3a3) }, [
                            lH('h1', [lm['_v']('所思即所获,所见即所得')]),
                            lH('p', [lm['_v'](dc(0x288))]),
                            lH('div', { 'staticStyle': { 'display': dc(0x276) } }, [
                                lH(dc(0x30f), {
                                    'attrs': { 'type': dc(0x492) },
                                    'on': { 'click': lm[dc(0x2e6)] }
                                }, [lm['_v']('GO')]),
                                lH(dc(0x30f), { 'on': { 'click': lm['handlestory'] } }, [lm['_v']('about')])
                            ], 0x1)
                        ]),
                        lH('div', {
                            'ref': dc(0x480),
                            'staticClass': dc(0x2a5)
                        }, [lH(dc(0x197), {
                                'staticClass': dc(0x148),
                                'style': {
                                    'transform': dc(0xb0) + lm['translateX'] + dc(0x4ed),
                                    'bottom': lm['position'][dc(0x495)] + 'px',
                                    'right': -lm['position'][dc(0x33f)] + 'px'
                                }
                            }, [lH('div', { 'staticClass': dc(0x15b) }, [
                                    lH(dc(0x197), { 'staticClass': dc(0x424) }, [lH(dc(0x2c5), {
                                            'style': { 'width': lm[dc(0x4b7)][dc(0xb1)] + 'px' },
                                            'attrs': { 'height': lm['deviceSize'][dc(0xab)] + 'px' }
                                        }, lm['_l'](lm[dc(0x194)], function (lQ) {
                                            const dA = dc;
                                            return lH(dA(0x2b8), { 'key': lQ['mode'] }, [lH(dA(0x197), {
                                                    'style': { 'cursor': lm[dA(0x2dd)] >= 0x1 ? dA(0x357) : dA(0x39d) },
                                                    'on': {
                                                        'click': function (ly) {
                                                            const dP = dA;
                                                            return lm[dP(0x167)](lQ, dP(0x422));
                                                        }
                                                    }
                                                }, [lH(dA(0x33e), {
                                                        'attrs': {
                                                            'options': lQ,
                                                            'width': lm[dA(0x4b7)][dA(0xb1)],
                                                            'height': lm['deviceSize']['height']
                                                        }
                                                    })], 0x1)]);
                                        }), 0x1)], 0x1),
                                    lH(dc(0x197), { 'staticClass': dc(0x391) }),
                                    lH(dc(0x197), { 'staticClass': dc(0x418) }),
                                    lH(dc(0x197), { 'staticClass': dc(0x434) }),
                                    lH(dc(0x197), { 'staticClass': 'device-btns\x20transition' }),
                                    lH(dc(0x197), { 'staticClass': dc(0xcc) })
                                ])])])
                    ]),
                    lH(dc(0x1fc), {
                        'attrs': {
                            'progress': lm[dc(0x4d1)],
                            'from': lm[dc(0xdc)]['from'],
                            'to': lm[dc(0xdc)]['to'],
                            'fixed': !0x0,
                            'offsetY': lm[dc(0x2dd)] >= 0x1 ? 0xc8 : 0x0
                        },
                        'on': { 'onResize': lm[dc(0x421)] }
                    }, [lH(dc(0x24e), {
                            'attrs': {
                                'width': lm[dc(0x127)][dc(0xb1)],
                                'height': lm[dc(0x127)][dc(0xab)]
                            }
                        }, [lH(dc(0x2c5), {
                                'style': { 'width': lm[dc(0x127)][dc(0xb1)] + 'px' },
                                'attrs': { 'height': lm[dc(0x127)][dc(0xab)] + 'px' }
                            }, lm['_l'](lm[dc(0x45f)], function (lQ) {
                                const dv = dc;
                                return lH(dv(0x2b8), { 'key': lQ['mode'] }, [lH(dv(0x197), {
                                        'style': { 'cursor': lm['progress'] >= 0x1 ? dv(0x357) : dv(0x39d) },
                                        'on': {
                                            'click': function (ly) {
                                                const df = dv;
                                                return lm[df(0x167)](lQ);
                                            }
                                        }
                                    }, [lH(dv(0x33e), {
                                            'attrs': {
                                                'options': lQ,
                                                'width': lm[dv(0x127)][dv(0xb1)],
                                                'height': lm[dv(0x127)]['height']
                                            }
                                        })], 0x1)]);
                            }), 0x1)], 0x1)], 0x1),
                    lH('gallery', {
                        'directives': [{
                                'name': dc(0x445),
                                'rawName': dc(0x256),
                                'value': lm[dc(0x2dd)] > 0x0,
                                'expression': dc(0x31f)
                            }]
                    })
                ], 0x1);
            }, EH = [], EQ = function () {
                const dq = dC;
                var lm = this, lH = lm['_self']['_c'];
                return lH(dq(0x197), {
                    'directives': [{
                            'name': dq(0x2b2),
                            'rawName': dq(0x4ce),
                            'value': lm[dq(0x2b2)],
                            'expression': dq(0x2b2)
                        }],
                    'class': { 'transition': lm[dq(0x4cf)] },
                    'style': lm[dq(0x4d6)]
                }, [lH(dq(0x464), {
                        'ref': dq(0x464),
                        'class': { 'transition': lm['animate'] },
                        'style': lm['styleSize']
                    })]);
            }, Ey = [], Ec = (t2(dC(0x485)), t2(dC(0x10f))), EA = t2['n'](Ec);
        function EP(lm, lH, lQ) {
            const da = dC, ly = window[da(0x4e3)] || 0x2;
            lm[da(0xab)] = lQ * ly, lm[da(0xb1)] = lH * ly;
            const lc = lm[da(0x1f3)]('2d');
            return lc[da(0x1fc)](ly, ly), lc;
        }
        function Ev() {
            const dY = dC;
            return document[dY(0x29e)](dY(0x464));
        }
        function Ef(lm, lH, lQ, {
            backgroundColor: ly,
            foregroundColor: lc,
            lineWidth: lA
        }) {
            const dn = dC;
            lm[dn(0x459)] = ly, lm[dn(0x267)](0x0, 0x0, lH, lQ), lm[dn(0x1d4)] = lc, lm[dn(0x35e)] = lA, lm[dn(0x14e)](), lm[dn(0x387)](lH, 0x0), lm['lineTo'](lH, lQ), lm[dn(0x3a1)]();
        }
        function Eq(lm, lH, lQ, {
            backgroundColor: ly,
            strokeColor: lc,
            lineWidth: lA,
            fillColor: lP,
            size: lv
        }) {
            const dk = dC;
            lm['fillStyle'] = ly, lm[dk(0x267)](0x0, 0x0, lH, lQ), lm[dk(0x1d4)] = lc, lm[dk(0x35e)] = lA, lm[dk(0x459)] = lP, lm['beginPath'](), lm[dk(0x233)](lH / 0x2, lQ / 0x2, lv / 0x2, 0x0, 0x2 * Math['PI']), lm[dk(0x403)](), lm[dk(0x3a1)]();
        }
        t2(dC(0xec));
        function Ea(lm, lH, lQ, {
            backgroundColor: ly,
            foregroundColor: lc,
            lineWidth: lA,
            arcRadius: lP
        }) {
            const dV = dC;
            lm[dV(0x459)] = ly, lm['fillRect'](0x0, 0x0, lH, lQ), lm['strokeStyle'] = lc, lm[dV(0x35e)] = lA, lm[dV(0x3e7)] = dV(0x4cb);
            const lv = [
                    {
                        'x': 0x1 / 0x4 * -lH,
                        'y': lQ * (0x3 / 0x4)
                    },
                    {
                        'x': lH * (0x1 / 0x4),
                        'y': lQ * (0x1 / 0x4)
                    },
                    {
                        'x': lH * (0x3 / 0x4),
                        'y': lQ * (0x3 / 0x4)
                    },
                    {
                        'x': lH * (0x5 / 0x4),
                        'y': lQ * (0x1 / 0x4)
                    }
                ], lf = EV(lv, lP), lq = new Path2D(lf);
            lm[dV(0x3a1)](lq);
        }
        const EY = (lm, lH, lQ) => (lm['y'] - lH['y']) * (lm['x'] - lQ['x']) == (lm['y'] - lQ['y']) * (lm['x'] - lH['x']), Ek = (lm, lH, lQ) => {
                const dX = dC, ly = {
                        'x': lm['x'] - lH['x'],
                        'y': lm['y'] - lH['y']
                    }, lc = Math[dX(0x423)](ly['x'] * ly['x'] + ly['y'] * ly['y']), lA = {
                        'x': ly['x'] / lc,
                        'y': ly['y'] / lc
                    };
                return {
                    'x': lH['x'] + lA['x'] * lQ,
                    'y': lH['y'] + lA['y'] * lQ
                };
            };
        function EV(lm, lH) {
            const dg = dC, lQ = lm[dg(0x19d)](0x1)[dg(0x4ee)]((ly, lc, lA, lP) => {
                    const dj = dg;
                    let lv = lP[lA + 0x1], lf = ly[ly['length'] - 0x1];
                    if (lv && !EY(lf['point'], lc, lv)) {
                        let lq = Ek(lf['point'], lc, lH), la = Ek(lv, lc, lH);
                        return ly[dj(0x179)]({
                            'point': lc,
                            's': 'L\x20' + lq['x'] + '\x20' + lq['y'] + dj(0x139) + lc['x'] + '\x20' + lc['y'] + '\x20' + la['x'] + '\x20' + la['y'] + '\x20'
                        });
                    }
                    return ly[dj(0x179)]({
                        'point': lc,
                        's': 'L\x20' + lc['x'] + '\x20' + lc['y'] + '\x20'
                    });
                }, [{
                        'point': lm[0x0],
                        's': 'M\x20' + lm[0x0]['x'] + '\x20' + lm[0x0]['y'] + '\x20'
                    }])[dg(0xa0)](ly => ly['s'])[dg(0x2f7)]('');
            return lQ;
        }
        function EX(lm, lH, lQ, {
            backgroundColor: ly,
            strokeColor: lc,
            lineWidth: lA,
            fillColor: lP,
            size: lv,
            staggered: lf
        }) {
            const dD = dC;
            lm[dD(0x459)] = ly, lm[dD(0x267)](0x0, 0x0, lH, lQ), lm['strokeStyle'] = lc, lm[dD(0x35e)] = lA, lm[dD(0x459)] = lP, lm['beginPath'](), lf ? (lm['rect'](lH * (0x1 / 0x4) - lv / 0x2, lQ * (0x1 / 0x4) - lv / 0x2, lv, lv), lm[dD(0x379)](lH * (0x3 / 0x4) - lv / 0x2, lQ * (0x3 / 0x4) - lv / 0x2, lv, lv)) : (lm[dD(0x379)](lH * (0x1 / 0x4) - lv / 0x2, lQ * (0x1 / 0x4) - lv / 0x2, lv, lv), lm[dD(0x379)](lH * (0x1 / 0x4) - lv / 0x2, lQ * (0x3 / 0x4) - lv / 0x2, lv, lv), lm[dD(0x379)](lH * (0x3 / 0x4) - lv / 0x2, lQ * (0x3 / 0x4) - lv / 0x2, lv, lv), lm['rect'](lH * (0x3 / 0x4) - lv / 0x2, lQ * (0x1 / 0x4) - lv / 0x2, lv, lv)), lm[dD(0x403)](), lm['stroke']();
        }
        function Eg(lm, lH, lQ, ly, lc) {
            const lA = (lm - lH) / (lQ - lH);
            return ly * (0x1 - lA) + lc * lA;
        }
        function Ej(lm, lH, lQ) {
            const du = dC;
            return Math[du(0x3a6)](lQ, Math[du(0x22c)](lH, lm));
        }
        function ED(lm, lH) {
            const dz = dC, lQ = lH * Math['PI'] / 0xb4, ly = {
                    'a': Math[dz(0x4c9)](lQ) * lm,
                    'b': Math[dz(0x13e)](lQ) * lm,
                    'c': -Math[dz(0x13e)](lQ) * lm,
                    'd': Math['cos'](lQ) * lm,
                    'e': 0x0,
                    'f': 0x0
                };
            return ly;
        }
        function Eu(lm, {
            type: lH,
            width: lQ = 0x32,
            height: ly = 0x32,
            rotation: lc = 0x0,
            repetition: lA = dC(0x3b2),
            ...lP
        }) {
            const dR = dC, lv = Ev(), lf = EP(lv, lQ, ly);
            switch (lH) {
            case dR(0x3a8):
                Ef(lf, lQ, ly, lP);
                break;
            case dR(0x20d):
                Eq(lf, lQ, ly, lP);
                break;
            case dR(0x3b5):
                Ea(lf, lQ, ly, lP);
                break;
            case dR(0x4cb):
                EX(lf, lQ, ly, lP);
                break;
            }
            const lq = lm[dR(0x4c5)](lv, lA), la = ED(0.5, lc);
            return lq[dR(0x4bf)](la), lq;
        }
        function Ez(lm, lH, lQ, ly) {
            const ds = dC, [lc, lA] = EZ(lm, ly), lP = lH / lc * 0.8, lv = lQ / lA, lf = Math[ds(0x3a6)](lP, lv);
            return ly[ds(0x4cc)] * lf;
        }
        function ER(lm, lH) {
            const dZ = dC, lQ = EK();
            return lQ['style'][dZ(0x4cc)] = lH[dZ(0x4cc)] + 'px', lQ['style']['fontFamily'] = lH[dZ(0x1a0)], lQ[dZ(0x4d0)][dZ(0xe7)] = lH[dZ(0xe7)], lQ['style'][dZ(0x186)] = lH[dZ(0x186)], lQ[dZ(0x4d0)]['fontVariant'] = lH[dZ(0x380)], lQ[dZ(0x20b)] = lm, [
                lQ[dZ(0x4b2)],
                lQ['clientHeight']
            ];
        }
        function EZ(lm, lH) {
            const db = dC, lQ = lm[db(0x487)]('\x0a');
            return lQ['reduce']((ly, lc) => {
                const dK = db, [lA, lP] = ER(lc, lH), lv = Math[dK(0x22c)](ly[0x0], lA), lf = ly[0x1] + lP;
                return [
                    lv,
                    lf
                ];
            }, [
                -0x1 / 0x0,
                0x0
            ]);
        }
        let Eb;
        function EK() {
            const dp = dC;
            return Eb || (Eb = document[dp(0x29e)](dp(0x394)), Eb[dp(0x4d0)][dp(0x298)] = dp(0x474), Eb['style'][dp(0xdc)] = 'absolute', Eb[dp(0x4d0)][dp(0x407)] = dp(0x3fa), Eb[dp(0x4d0)]['left'] = dp(0x406), Eb['style'][dp(0x237)] = dp(0x406), document[dp(0x4bd)][dp(0x416)](Eb), Eb);
        }
        function Ep(lm, lH, lQ, ly) {
            const lc = EP(lm, lH, lQ), {
                    text: lA,
                    background: lP
                } = ly;
            EI(lc, lH, lQ, lP), EO(lc, lH, lQ, lA);
        }
        function ES(lm) {
            const dS = dC;
            return !lm || dS(0x399) === lm;
        }
        function EI(lm, lH, lQ, {
            type: ly,
            image: lc,
            color: lA,
            mode: lP,
            ...lv
        }) {
            const dI = dC;
            if (dI(0x19c) === lP)
                EU(lm, lc, lH, lQ);
            else {
                const lf = ES(ly) ? lA : Eu(lm, {
                    'backgroundColor': lA,
                    'type': ly,
                    ...lv
                });
                lm[dI(0x459)] = lf, lm['fillRect'](0x0, 0x0, lH, lQ);
            }
        }
        function EO(lm, lH, lQ, {
            color: ly,
            type: lc,
            fontSize: lA,
            fontFamily: lP,
            content: lv,
            mode: lf = dC(0x399),
            padding: lq = 0x32,
            dy: la = 0x0,
            ...lY
        }) {
            const dO = dC, lk = ES(lc) ? ly : Eu(lm, {
                    'backgroundColor': ly,
                    'type': lc,
                    ...lY
                }), lV = lH - 0x2 * lq, lX = lH - 0x2 * lq, lg = dO(0x2ab) === lf ? Ez(lv, lV, lX, {
                    'fontSize': 0xc8,
                    'fontFamily': lP
                }) : lA;
            lm[dO(0x3fc)] = dO(0x307) + lg + 'px\x20' + lP, lm[dO(0x1f8)] = dO(0x4f8), lm['textBaseline'] = dO(0x2e0), lm['fillStyle'] = lk, lm['save']();
            const lj = {
                    'fontSize': lg,
                    'fontFamily': lP
                }, lD = lH / 0x2, lu = lQ / 0x2 + la;
            if (dO(0x41a) === lf) {
                const [lz, lR] = EZ(lv, lj), lZ = lz > lV ? lV / lz : 0x1, lb = lR > lX ? lX / lR : 0x1;
                lm[dO(0x4c2)](lD, lu), lm['scale'](lZ, lb), lm[dO(0x4c2)](-lD, -lu);
            }
            EN(lm, lv, lD, lu, lj), lm[dO(0x29c)]();
        }
        function EU(lm, lH, lQ, ly) {
            const dr = dC, {
                    width: lc,
                    height: lA
                } = lH, lP = lA / lc, lv = ly / lQ;
            let lf, lq;
            lP > lv ? (lf = lc, lq = lf * lv) : (lq = lA, lf = lq / lv);
            const la = (lc - lf) / 0x2, lY = (lA - lq) / 0x2;
            lm[dr(0x482)](lH, la, lY, lf, lq, 0x0, 0x0, lQ, ly);
        }
        function EN(lm, lH, lQ, ly, lc) {
            const dU = dC, lA = lH['split']('\x0a'), [, lP] = ER(lA[0x0], lc), lv = lP * (lA[dU(0xa9)] - 0x1), lf = ly - lv / 0x2;
            for (let lq = 0x0; lq < lA['length']; lq++) {
                const la = lA[lq];
                lm[dU(0x25c)](la, lQ, lf + lq * lP);
            }
        }
        function ET(lm) {
            const dN = dC, lH = new Image();
            return lH[dN(0xd1)] = lm, new Promise((lQ, ly) => {
                const dT = dN;
                lH[dT(0x1dd)] = function () {
                    lQ(lH);
                }, lH[dT(0x453)] = function () {
                    ly();
                };
            });
        }
        function EM(lm, lH) {
            const dM = dC;
            return new FontFace(lH, dM(0x438) + lm + ')')['load']();
        }
        function w0(lm, lH, lQ) {
            const L0 = dC, ly = lH[L0(0x487)]('.'), lc = ly[L0(0x3d9)](), lA = ly[L0(0x4ee)]((lP, lv) => lP[lv], lm);
            E7[L0(0x39d)][L0(0xe5)](lA, lc, lQ);
        }
        function w1(lm, lH) {
            const L1 = dC, lQ = lH[L1(0x487)]('.');
            return lQ[L1(0x4ee)]((ly, lc) => ly[lc], lm);
        }
        function w2(lm) {
            const L2 = dC;
            return Array[L2(0x467)](lm) ? [...lm[L2(0xa0)](w2)] : void 0x0 === lm || null === lm || L2(0x47b) !== typeof lm ? lm : Object[L2(0x3f5)](lm)[L2(0x4ee)]((lH, [lQ, ly]) => (lH[lQ] = w2(ly), lH), {});
        }
        var w3 = {
                'props': {
                    'options': Object,
                    'width': Number,
                    'height': Number,
                    'animate': {
                        'type': Boolean,
                        'default': !0x0
                    },
                    'styleWidth': [
                        Number,
                        String
                    ],
                    'styleHeight': [
                        Number,
                        String
                    ]
                },
                'data'() {
                    return {
                        'fontFace': void 0x0,
                        'image': void 0x0,
                        'loading': !0x1,
                        'rendering': !0x1
                    };
                },
                'computed': {
                    'styleSize'() {
                        const L3 = dC, lm = this[L3(0x430)] || this[L3(0xb1)], lH = this[L3(0x93)] || this[L3(0xab)], lQ = ly => L3(0x3d6) === typeof ly ? ly + 'px' : ly;
                        return {
                            'width': lQ(lm),
                            'height': lQ(lH)
                        };
                    }
                },
                'mounted'() {
                    const L4 = dC;
                    this[L4(0x3ac)]();
                },
                'watch': {
                    'options': {
                        'deep': !0x0,
                        'handler'(lm, lH) {
                            const L5 = dC;
                            lH['text'][L5(0x3e1)] !== lm['text'][L5(0x3e1)] && (this[L5(0x17d)] = void 0x0), lH['background'][L5(0x111)] !== lm[L5(0x38b)][L5(0x111)] && (this[L5(0x19c)] = void 0x0), this['render']();
                        }
                    },
                    'width'() {
                        const L6 = dC;
                        this[L6(0x3ac)]();
                    },
                    'height'() {
                        const L7 = dC;
                        this[L7(0x3ac)]();
                    }
                },
                'methods': {
                    async 'render'() {
                        const L8 = dC;
                        try {
                            if (this[L8(0x386)])
                                return;
                            this[L8(0x386)] = !0x0, await this[L8(0x402)]();
                            const lm = w2(this[L8(0x171)]);
                            this[L8(0x19c)] && (lm[L8(0x38b)][L8(0x19c)] = this[L8(0x19c)]), Ep(this[L8(0x12e)][L8(0x464)], this[L8(0xb1)], this[L8(0xab)], lm), this[L8(0x254)](L8(0x2ed), this['$refs'][L8(0x464)]), this[L8(0x386)] = !0x1;
                        } catch (lH) {
                            EA['a'][L8(0x42c)](L8(0x208)), console[L8(0x42c)](lH), this['rendering'] = !0x1, this[L8(0x2b2)] = !0x1;
                        }
                    },
                    async 'loadAssets'() {
                        const L9 = dC, {
                                fontURL: lm,
                                fontFamily: lH
                            } = this[L9(0x171)][L9(0x454)], {imageURL: lQ} = this[L9(0x171)][L9(0x38b)], ly = lm && (!this['fontFace'] || !this[L9(0x17d)][L9(0x126)]), lc = lQ && !this[L9(0x19c)];
                        (ly || lc) && (this[L9(0x2b2)] = !0x0, this[L9(0x17d)] = ly ? await EM(lm, lH) : this[L9(0x17d)], this[L9(0x19c)] = lc ? await ET(lQ) : this[L9(0x19c)], this[L9(0x2b2)] = !0x1);
                    }
                }
            }, w4 = w3, w5 = (t2(dC(0x437)), Object(Ed['a'])(w4, EQ, Ey, !0x1, null, null, null)), w6 = w5[dC(0x248)], w7 = function () {
                const Lt = dC;
                var lm = this, lH = lm[Lt(0x1a3)]['_c'];
                return lH(Lt(0x197), {
                    'staticClass': Lt(0x49a),
                    'style': lm[Lt(0x2a2)][Lt(0x14c)]
                }, [
                    lH(Lt(0x197), { 'staticClass': Lt(0x8b) }, [lH(Lt(0x197), {
                            'staticClass': Lt(0x3f0),
                            'style': lm['transformStyles'][Lt(0x30d)]
                        }, [lm['_t'](Lt(0x39d))], 0x2)]),
                    lH('div', { 'staticClass': Lt(0x391) }),
                    lH(Lt(0x197), { 'staticClass': Lt(0x418) }),
                    lH(Lt(0x197), { 'staticClass': Lt(0x434) }),
                    lH('div', { 'staticClass': 'device-btns\x20transition' }),
                    lH(Lt(0x197), { 'staticClass': 'device-power\x20transition' })
                ]);
            }, w8 = [], w9 = {
                'props': {
                    'src': String,
                    'meta': Object,
                    'width': Number,
                    'height': Number
                },
                'computed': {
                    'transformStyles'() {
                        const LE = dC, lm = 0x240, lH = 0x168, lQ = 0x53, ly = 0x1d, lc = this['width'] / lm, lA = this['height'] / lH;
                        return {
                            'container': {
                                'transformOrigin': lQ + LE(0x3d8) + ly + 'px',
                                'transform': LE(0x195) + -lQ + LE(0x1b5) + -ly + LE(0x17f) + lc + ',\x20' + lA + ')'
                            },
                            'content': {
                                'transformOrigin': 'left\x20top',
                                'transform': LE(0x201) + 0x1 / lc + ',\x20' + 0x1 / lA + ')'
                            }
                        };
                    }
                }
            }, wt = w9, wE = (t2('af95'), Object(Ed['a'])(wt, w7, w8, !0x1, null, null, null)), ww = wE['exports'], wh = function () {
                const Lw = dC;
                var lm = this, lH = lm[Lw(0x1a3)]['_c'];
                return lH(Lw(0x197), {
                    'style': [
                        lm[Lw(0x3d5)] && {
                            'position': Lw(0xbb),
                            'left': lm[Lw(0x96)]['x'] + 'px',
                            'top': lm['transformed']['y'] + 'px',
                            'zIndex': lm['zIndex']
                        },
                        {
                            'transformOrigin': Lw(0xa7),
                            'transform': Lw(0x201) + lm[Lw(0x96)][Lw(0x1fc)] + ',\x20' + lm[Lw(0x96)][Lw(0x1fc)] + ')',
                            'width': lm[Lw(0x96)]['width'] + 'px',
                            'height': lm[Lw(0x96)][Lw(0xab)] + 'px'
                        },
                        lm[Lw(0x411)]
                    ]
                }, [lm['_t'](Lw(0x39d))], 0x2);
            }, wB = [], wl = {
                'props': {
                    'from': {
                        'x': Number,
                        'y': Number,
                        'scale': Number
                    },
                    'to': {
                        'x': Number,
                        'y': Number,
                        'scale': Number
                    },
                    'progress': Number,
                    'styles': Object,
                    'fixed': {
                        'default': !0x1,
                        'type': Boolean
                    },
                    'zIndex': {
                        'default': 0xa,
                        'type': Number
                    },
                    'offsetY': Number
                },
                'computed': {
                    'transformed'() {
                        const Lh = dC, {
                                from: lm,
                                to: lH = lm,
                                progress: lQ,
                                fixed: ly
                            } = this, {
                                x: lc,
                                y: lA,
                                scale: lP
                            } = lm, {
                                x: lv,
                                y: lf,
                                scale: lq
                            } = lH, la = {
                                ...ly && { 'x': Eg(lQ, 0x0, 0x1, lc, lv) },
                                ...ly && { 'y': Eg(lQ, 0x0, 0x1, lA, lf) + this[Lh(0x495)] },
                                'scale': Eg(lQ, 0x0, 0x1, lP, lq)
                            };
                        return la;
                    }
                }
            }, wd = wl, wL = Object(Ed['a'])(wd, wh, wB, !0x1, null, null, null), wG = wL[dC(0x248)];
        const wx = lm => ({
                'data': () => ({
                    'scrollY': 0x0,
                    'realScrollY': 0x0
                }),
                'computed': {
                    'progress'() {
                        const Lo = dC;
                        return Eg(this[Lo(0x9d)], 0x0, lm, 0x0, 0x1);
                    }
                },
                'methods': {
                    'handleMousewheel'() {
                        const LB = dC, lH = document[LB(0x4dc)]['scrollTop'];
                        this[LB(0x9d)] = Ej(lH, 0x0, lm);
                        const lQ = document[LB(0x31c)](LB(0x15f)), ly = document[LB(0x31c)]('app');
                        lH < lm ? (ly[LB(0x4d0)][LB(0xb1)] = LB(0x149), ly['style'][LB(0xab)] = window[LB(0x2d5)] + lm + 'px', lQ[LB(0x4d0)]['position'] = 'fixed', lQ[LB(0x4d0)][LB(0xb1)] = LB(0x149), lQ[LB(0x4d0)][LB(0x3bb)] = '0px') : (ly['style']['width'] = LB(0x102), ly[LB(0x4d0)][LB(0xab)] = LB(0x102), lQ[LB(0x4d0)][LB(0xdc)] = LB(0x45e), lQ[LB(0x4d0)][LB(0x3bb)] = lm + 'px');
                    }
                },
                'mounted'() {
                    const Ll = dC;
                    window[Ll(0x471)](0x0, 0x0);
                },
                'activated'() {
                    const Ld = dC, lH = document[Ld(0x31c)](Ld(0x15f));
                    if (this[Ld(0x9d)] < lm) {
                        const lQ = document[Ld(0x31c)]('app');
                        lQ['style']['width'] = Ld(0x149), lQ[Ld(0x4d0)]['height'] = window[Ld(0x2d5)] + lm + 'px', lH[Ld(0x4d0)][Ld(0xdc)] = Ld(0x3d5), lH[Ld(0x4d0)][Ld(0xb1)] = Ld(0x149), lH[Ld(0x4d0)][Ld(0x3bb)] = '0px', window[Ld(0x471)](0x0, this[Ld(0x9d)]);
                    } else {
                        const ly = document[Ld(0x31c)](Ld(0x15f));
                        ly[Ld(0x4d0)][Ld(0x3bb)] = lm + 'px', window[Ld(0x471)](0x0, lm);
                    }
                    window['addEventListener'](Ld(0x35a), this[Ld(0x14a)]);
                },
                'deactivated'() {
                    const LL = dC;
                    window[LL(0x471)](0x0, 0x0);
                    const lH = document[LL(0x31c)](LL(0x19b));
                    lH[LL(0x4d0)][LL(0xb1)] = LL(0x102), lH['style']['height'] = 'auto';
                    const lQ = document['getElementById'](LL(0x15f));
                    lQ['style'][LL(0xdc)] = LL(0x45e), lQ[LL(0x4d0)][LL(0x3bb)] = LL(0x250), window[LL(0x3a2)]('wheel', this[LL(0x14a)]);
                }
            }), wJ = () => ({
                'data': () => ({
                    'windowWidth': window['innerWidth'],
                    'windowHeight': window['innerHeight']
                }),
                'methods': {
                    'handleWindowResize'() {
                        const LG = dC;
                        this[LG(0x4fe)] = window[LG(0x40f)], this[LG(0x4be)] = window[LG(0x2d5)];
                    }
                },
                'mounted'() {
                    const Lx = dC;
                    window[Lx(0x27b)](Lx(0x1a9), this[Lx(0x1d2)]);
                },
                'destroyed'() {
                    const LJ = dC;
                    window[LJ(0x3a2)](LJ(0x1a9), this[LJ(0x1d2)]);
                }
            }), wF = lm => ({
                'data'() {
                    const Li = dC;
                    return {
                        [lm + 'X']: 0x0,
                        [lm + 'Y']: 0x0,
                        [lm + 'Width']: 0x0,
                        [lm + Li(0x466)]: 0x0
                    };
                },
                'mounted'() {
                    const LF = dC, lH = this[LF(0x12e)][lm];
                    if (!lH)
                        return;
                    const {
                        top: lQ,
                        left: ly,
                        right: lc,
                        bottom: lA
                    } = lH[LF(0x4fb)]();
                    this[lm + 'X'] = ly, this[lm + 'Y'] = lQ, this[lm + LF(0x49d)] = lc - ly, this[lm + LF(0x466)] = lA - lQ;
                }
            });
        var wW = t2(dC(0xcd));
        const wC = {
            'name': 'Another\x20Planet',
            'type': dC(0x19c),
            'options': wW
        };
        var wm = t2(dC(0x230));
        const wH = {
            'name': dC(0xd0),
            'options': wm
        };
        var wQ = t2(dC(0x381));
        const wy = {
            'name': dC(0x310),
            'options': wQ
        };
        var wc = t2(dC(0xd6));
        const wA = {
            'name': dC(0x366),
            'options': wc
        };
        var wP = t2('fa59');
        const wv = {
            'name': '坠落',
            'type': dC(0x19c),
            'options': wP
        };
        var wf = t2(dC(0x2c9));
        const wq = {
                'name': '排列',
                'options': wf
            }, wa = wy[dC(0x171)], wY = wH['options'], wk = wC[dC(0x171)], wV = wq[dC(0x171)], wX = wv[dC(0x171)], wg = wA[dC(0x171)];
        var wj = function () {
                const LW = dC;
                var lm = this, lH = lm[LW(0x1a3)]['_c'];
                return lH(LW(0x197), {
                    'staticClass': LW(0x408),
                    'staticStyle': { 'margin-bottom': LW(0x17e) }
                }, [
                    lH('div', { 'staticClass': 'device-radio' }, [
                        lH('i', {
                            'staticClass': 'el-icon-monitor\x20device-icon',
                            'style': { 'color': 'pc' === lm[LW(0xef)] ? '#409eff' : LW(0x177) },
                            'on': {
                                'click': function (lQ) {
                                    const LC = LW;
                                    lm[LC(0xef)] = 'pc';
                                }
                            }
                        }),
                        lH('i', {
                            'staticClass': LW(0x2bd),
                            'style': { 'color': LW(0x422) === lm[LW(0xef)] ? '#409eff' : LW(0x177) },
                            'on': {
                                'click': function (lQ) {
                                    const Lm = LW;
                                    lm[Lm(0xef)] = Lm(0x422);
                                }
                            }
                        })
                    ]),
                    0x1 === lm['gallery']['length'] ? lH('div', {
                        'staticClass': LW(0x328),
                        'style': { 'grid-template-columns': LW(0x4c6) + ('pc' === lm['activeType'] ? 0x4 : 0x6) + ',\x201fr)' }
                    }, lm['_l'](lm[LW(0x4d3)][0x0][LW(0x137)], function (lQ) {
                        const LH = LW;
                        return lH(LH(0x197), {
                            'key': lQ[LH(0x34e)],
                            'on': { 'click': () => lm['handleClickCard'](lm[LH(0x39a)](lQ[LH(0x171)])) }
                        }, [
                            lH(LH(0x197), { 'staticStyle': { 'margin': LH(0x1d0) } }, [lH(LH(0x197), {
                                    'staticClass': LH(0x293),
                                    'style': { 'paddingBottom': lm['deviceSize'][0x1] / lm[LH(0x4b7)][0x0] * 0x64 + '%' }
                                }, [lH(LH(0x197), { 'staticClass': LH(0x1ac) }, [lH(LH(0x33e), {
                                            'attrs': {
                                                'width': lm[LH(0x4b7)][0x0],
                                                'height': lm[LH(0x4b7)][0x1],
                                                'styleHeight': '100%',
                                                'styleWidth': LH(0x149),
                                                'options': lm[LH(0x39a)](lQ[LH(0x171)])
                                            }
                                        })], 0x1)])]),
                            lH('div', [lH(LH(0x394), [
                                    lm['_v'](lm['_s'](lQ['name']) + '\x20'),
                                    LH(0x19c) === lQ[LH(0x1c7)] ? lH(LH(0x264), {
                                        'attrs': {
                                            'effect': LH(0x282),
                                            'content': LH(0x1fd),
                                            'placement': LH(0x237)
                                        }
                                    }, [lH('i', {
                                            'staticClass': LH(0x1cd),
                                            'staticStyle': { 'cursor': 'pointer' }
                                        })]) : lm['_e']()
                                ], 0x1)])
                        ]);
                    }), 0x0) : lm['_e']()
                ]);
            }, wD = [], wu = t2(dC(0x16d));
        const wz = {
            'name': dC(0x3e0),
            'options': wu
        };
        var wR = t2(dC(0x3da));
        const wZ = {
            'name': dC(0x3bf),
            'options': wR
        };
        var wb = t2(dC(0x89));
        const wK = {
            'name': dC(0x313),
            'options': wb
        };
        var wp = t2(dC(0x3d2));
        const wS = {
            'name': '篮球之神',
            'options': wp
        };
        var wI = t2(dC(0x1ce));
        const wO = {
            'name': '温柔',
            'options': wI
        };
        var wU = t2(dC(0x24c));
        const wN = {
            'name': '顽皮',
            'options': wU
        };
        var wT = t2('1ac0');
        const wM = {
            'name': '好事成双',
            'options': wT
        };
        var h0 = t2(dC(0x356));
        const h1 = {
            'name': '正当红',
            'type': 'image',
            'options': h0
        };
        var h2 = t2(dC(0x398));
        const h3 = {
            'name': dC(0x43f),
            'type': dC(0x19c),
            'options': h2
        };
        var h4 = t2(dC(0x8a));
        const h5 = {
            'name': dC(0x2b5),
            'type': 'image',
            'options': h4
        };
        var h6 = t2(dC(0x378));
        const h7 = {
            'name': dC(0x140),
            'options': h6
        };
        var h8 = t2(dC(0x2b4));
        const h9 = {
            'name': dC(0x43a),
            'options': h8
        };
        var ht = t2(dC(0x2fe));
        const hE = {
            'name': dC(0x47f),
            'options': ht
        };
        var hw = t2(dC(0x4aa));
        const hh = {
            'name': dC(0x1d7),
            'options': hw
        };
        var hB = t2(dC(0x477));
        const hl = {
            'name': '科比',
            'options': hB
        };
        var hd = t2(dC(0x231));
        const hL = {
            'name': '洞察',
            'options': hd
        };
        var hG = t2('4375');
        const hx = {
            'name': '啤酒',
            'options': hG
        };
        var hJ = t2('8bc9');
        const hF = {
            'name': '孱弱',
            'options': hJ
        };
        var hW = t2('a753');
        const hC = {
            'name': '生命',
            'options': hW
        };
        var hm = t2(dC(0x344));
        const hH = {
            'name': '俊俏',
            'options': hm
        };
        var hQ = t2(dC(0x2d4));
        const hy = {
                'name': '目标',
                'options': hQ
            }, hc = {
                'name': 'all',
                'wallpapers': [
                    wz,
                    wZ,
                    wK,
                    wS,
                    hC,
                    wA,
                    hH,
                    hy,
                    hl,
                    wO,
                    wN,
                    wM,
                    h7,
                    hE,
                    h9,
                    hh,
                    hL,
                    hx,
                    hF,
                    wq,
                    h1,
                    h3,
                    wv,
                    h5
                ]
            }, hA = [hc];
        function hP(lm, lH, lQ = 'pc') {
            const LQ = dC;
            localStorage[LQ(0x319)]('cd-example', JSON['stringify'](lH)), localStorage[LQ(0x319)]('cd-type', lQ), lm[LQ(0x4b3)]({ 'path': LQ(0x41f) });
        }
        function hv(lm, lH = 0x1) {
            const Ly = dC, lQ = w2(lm), ly = w1(lQ, Ly(0x3e9)) || 0x0;
            w0(lQ, Ly(0x40c), Ly(0x2ab)), w0(lQ, Ly(0x3e9), Math[Ly(0x3a6)](ly, 0x1e)), w0(lQ, 'text.padding', 0x0);
            const {
                text: lc,
                background: lA
            } = lQ;
            return [
                lc,
                lA
            ][Ly(0x42a)](lP => {
                const Le = Ly;
                for (const lv of Object[Le(0x118)](lP)) {
                    const lf = lP[lv];
                    'number' === typeof lf && 'rotation' !== lv && (lP[lv] = lf * lH);
                }
            }), lQ;
        }
        var hf = {
                'components': { 'Wallpaper': w6 },
                'data'() {
                    const Lc = dC;
                    return {
                        'gallery': hA,
                        'windowWidth': screen[Lc(0xb1)],
                        'windowHeight': screen[Lc(0xab)],
                        'activeType': 'pc'
                    };
                },
                'computed': {
                    'deviceSize'() {
                        const LA = dC;
                        return 'pc' === this[LA(0xef)] ? [
                            screen[LA(0xb1)],
                            screen[LA(0xab)]
                        ] : [
                            0x177,
                            0x29b
                        ];
                    }
                },
                'name': dC(0x4d3),
                'methods': {
                    'handleClickCard'(lm) {
                        const LP = dC;
                        hP(this[LP(0x365)], lm, this[LP(0xef)]);
                    },
                    'responsive'(lm) {
                        const Lv = dC;
                        if ('pc' === this['activeType'])
                            return lm;
                        {
                            const lH = this['deviceSize'][0x1] / screen[Lv(0xab)];
                            return hv(lm, lH);
                        }
                    }
                }
            }, hq = hf, ha = (t2(dC(0x331)), Object(Ed['a'])(hq, wj, wD, !0x1, null, null, null)), hY = ha[dC(0x248)], hk = {
                'components': {
                    'Wallpaper': w6,
                    'Device': ww,
                    'Scale': wG,
                    'Gallery': hY
                },
                'name': dC(0x460),
                'data'() {
                    const Lf = dC;
                    return {
                        'disabled': !0x1,
                        'examples': [
                            wa,
                            wY,
                            wk
                        ],
                        'phoneExamples': [
                            wg,
                            wX,
                            wV
                        ][Lf(0xa0)](hv),
                        'screenSize': {},
                        'deviceSize': {
                            'width': 0x177,
                            'height': 0x32c
                        }
                    };
                },
                'mixins': [
                    wx(0xc8),
                    wJ(),
                    wF(dC(0x480))
                ],
                'watch': {
                    'progress': {
                        'immediate': !0x0,
                        'handler'() {
                            const Lq = dC;
                            this[Lq(0xa1)]();
                        }
                    },
                    'windowWidth'() {
                        this['computedScreenSize']();
                    },
                    'windowHeight'() {
                        this['computedScreenSize']();
                    }
                },
                'computed': {
                    'position'() {
                        const La = dC, lm = 0.625, lH = 0.7, lQ = this[La(0x91)] / this[La(0x315)];
                        let ly, lc;
                        return lQ > lm ? (ly = this['deviceContainerWidth'] * lH, lc = ly * lm) : (lc = this[La(0x91)] * lH, ly = lc / lm), {
                            'from': {
                                'x': 0x0,
                                'y': 0x0,
                                'scale': 0x1
                            },
                            'to': {
                                'x': this['deviceContainerX'] + (this[La(0x315)] - ly) / 0x2,
                                'y': this[La(0x255)] + (this[La(0x91)] - lc) / 0x2,
                                'scale': ly / this['windowWidth']
                            },
                            'offsetY': (this[La(0x91)] - lc) / 0x2,
                            'offsetX': (this[La(0x315)] - ly) / 0x2
                        };
                    },
                    'translateX'() {
                        const LY = dC;
                        return Eg(this[LY(0x30a)], 0x0, 0x1, 0x3e8, 0x0);
                    },
                    'macProgress'() {
                        const Ln = dC, lm = Ej(this[Ln(0x2dd)], 0x0, 0.8);
                        return Eg(lm, 0x0, 0.8, 0x0, 0x1);
                    },
                    'phoneProgress'() {
                        const Lk = dC, lm = Ej(this[Lk(0x2dd)], 0.8, 0x1);
                        return Eg(lm, 0.8, 0x1, 0x0, 0x1);
                    }
                },
                'methods': {
                    'handleResize'({
                        width: lm,
                        height: lH
                    }) {
                        this['screenSize'] = {
                            'width': lm,
                            'height': lH
                        };
                    },
                    'handleStarted'() {
                        const LV = dC;
                        this[LV(0x365)][LV(0x4b3)]({ 'path': LV(0x3ae) });
                    },
                    'handleSelectExample'(lm, lH) {
                        const LX = dC;
                        this[LX(0x2dd)] < 0x1 || hP(this['$router'], lm, lH);
                    },
                    'handlestory'() {
                        const Lg = dC;
                        this[Lg(0x365)][Lg(0x4b3)]({ 'path': Lg(0x3de) });
                    },
                    'computedScreenSize'() {
                        const Lj = dC, lm = 0.625, lH = this[Lj(0x4fe)] * lm, lQ = this[Lj(0x4be)], ly = lH, lc = this[Lj(0x4d1)] <= 0x0 ? lQ : this[Lj(0x4d1)] >= 0x1 ? ly : this[Lj(0x127)]['height'];
                        this[Lj(0x127)] = {
                            'width': this[Lj(0x4fe)],
                            'height': lc
                        };
                    }
                }
            }, hV = hk, hX = (t2(dC(0x227)), Object(Ed['a'])(hV, Em, EH, !0x1, null, null, null)), hg = hX[dC(0x248)], hj = function () {
                const LD = dC;
                var lm = this, lH = lm[LD(0x1a3)]['_c'];
                return lH('el-container', { 'staticClass': LD(0x10e) }, [
                    lH(LD(0x146), { 'attrs': { 'width': LD(0x142) } }, [lH(LD(0x441), {
                            'attrs': {
                                'options': lm[LD(0x136)],
                                'values': lm[LD(0x45d)]
                            },
                            'on': { 'update': lm['handleUpdateExample'] }
                        })], 0x1),
                    lH(LD(0x1b9), [lH(LD(0x197), { 'staticClass': 'main-container' }, [
                            lH(LD(0x197), { 'staticClass': 'tools-container' }, [lH(LD(0x197), { 'staticClass': LD(0x2df) }, [
                                    lH(LD(0x197), { 'staticClass': LD(0x202) }, [lH('el-dropdown', {
                                            'attrs': { 'size': LD(0x23b) },
                                            'on': {
                                                'command': function (lQ) {
                                                    const Lu = LD;
                                                    lm[Lu(0x204)] = lQ;
                                                }
                                            }
                                        }, [
                                            lH(LD(0x394), { 'staticClass': LD(0x3b4) }, [
                                                lm['_v'](LD(0x291) + lm['_s'](lm[LD(0x405)][lm[LD(0x204)]][LD(0x34e)])),
                                                lH('i', { 'staticClass': LD(0x1ba) })
                                            ]),
                                            lH(LD(0x1cb), {
                                                'attrs': { 'slot': LD(0xb6) },
                                                'slot': 'dropdown'
                                            }, lm['_l'](lm[LD(0x405)], function (lQ, ly) {
                                                const Lz = LD;
                                                return lH(Lz(0x129), {
                                                    'key': lQ['key'],
                                                    'attrs': {
                                                        'divided': lQ[Lz(0x21e)],
                                                        'command': ly
                                                    }
                                                }, [lm['_v'](lm['_s'](lQ[Lz(0x34e)]))]);
                                            }), 0x1)
                                        ], 0x1)], 0x1),
                                    lH(LD(0x197), { 'staticClass': LD(0x202) }, [
                                        lH(LD(0x404), {
                                            'attrs': {
                                                'value': lm[LD(0x4b7)][0x0],
                                                'controls-position': LD(0x123),
                                                'min': 0x1,
                                                'size': 'mini',
                                                'disabled': 0x0 !== lm[LD(0x204)]
                                            },
                                            'on': {
                                                'change': function (lQ) {
                                                    const LR = LD;
                                                    lm[LR(0x41d)] = lQ;
                                                }
                                            }
                                        }),
                                        lH('i', {
                                            'staticClass': 'el-icon-sort\x20icon-switch',
                                            'on': {
                                                'click': function (lQ) {
                                                    const Ls = LD;
                                                    lm[Ls(0x295)] = !lm['rotate'];
                                                }
                                            }
                                        }),
                                        lH(LD(0x404), {
                                            'attrs': {
                                                'value': lm[LD(0x4b7)][0x1],
                                                'controls-position': LD(0x123),
                                                'min': 0x1,
                                                'size': LD(0x48c),
                                                'disabled': 0x0 !== lm[LD(0x204)]
                                            },
                                            'on': {
                                                'change': function (lQ) {
                                                    const LZ = LD;
                                                    lm[LZ(0x104)] = lQ;
                                                }
                                            }
                                        }),
                                        lH(LD(0x394), { 'staticClass': LD(0x414) }, [lm['_v']('\x20' + lm['_s']((0x64 * lm[LD(0x96)][LD(0x1fc)])[LD(0x1f2)](0x1) + '%') + '\x20')])
                                    ], 0x1),
                                    lH(LD(0x197), { 'staticClass': LD(0x202) }, [lH(LD(0x264), {
                                            'attrs': {
                                                'effect': LD(0x282),
                                                'content': '预览',
                                                'placement': LD(0x38c)
                                            }
                                        }, [lH('i', {
                                                'staticClass': LD(0x238),
                                                'on': { 'click': lm[LD(0x221)] }
                                            })])], 0x1),
                                    lH(LD(0x197), { 'staticClass': LD(0x202) }, [lH(LD(0x3ce), {
                                            'attrs': {
                                                'size': LD(0x23b),
                                                'placement': LD(0x38c)
                                            },
                                            'on': {
                                                'command': function (lQ) {
                                                    const Lb = LD;
                                                    Lb(0x19c) === lQ ? lm[Lb(0xeb)]() : lm['handleDownloadFile']();
                                                }
                                            }
                                        }, [
                                            lH(LD(0x394), { 'staticClass': 'el-dropdown-link' }, [lH('i', { 'staticClass': LD(0x4af) })]),
                                            lH(LD(0x1cb), {
                                                'attrs': { 'slot': LD(0xb6) },
                                                'slot': LD(0xb6)
                                            }, [
                                                lH(LD(0x129), { 'attrs': { 'command': 'image' } }, [
                                                    lH('i', { 'staticClass': LD(0x4f6) }),
                                                    lm['_v']('\x20图片\x20')
                                                ]),
                                                lH(LD(0x129), { 'attrs': { 'command': 'file' } }, [
                                                    lH('i', { 'staticClass': LD(0x3ab) }),
                                                    lm['_v'](LD(0x2a4))
                                                ])
                                            ], 0x1)
                                        ], 0x1)], 0x1)
                                ])]),
                            lH(LD(0x197), {
                                'ref': 'preview',
                                'staticClass': LD(0x317)
                            }, [lH(LD(0x197), {
                                    'class': { 'preview': lm['fullscreen'] },
                                    'style': lm[LD(0x16f)]
                                }, [lH(LD(0x33e), {
                                        'attrs': {
                                            'options': lm['example'],
                                            'width': lm[LD(0x4b7)][0x0],
                                            'height': lm[LD(0x4b7)][0x1],
                                            'animate': !0x1
                                        },
                                        'on': {
                                            'on-success': function (lQ) {
                                                lm['canvas'] = lQ;
                                            }
                                        }
                                    })], 0x1)])
                        ])])
                ], 0x1);
            }, hD = [], hu = function () {
                const LK = dC;
                var lm = this, lH = lm[LK(0x1a3)]['_c'];
                return LK(0x14c) === lm[LK(0x171)]['type'] ? lH('div', lm['_l'](lm[LK(0x171)][LK(0x2bb)], function (lQ) {
                    const Lp = LK;
                    return lH('attribute-tree', {
                        'key': lQ[Lp(0x1e9)],
                        'attrs': {
                            'options': lQ,
                            'values': lm[Lp(0x346)]
                        },
                        'on': { 'update': lm['handleUpdate'] }
                    });
                }), 0x1) : LK(0x4e8) === lm[LK(0x171)]['type'] ? lH('collapse', {
                    'attrs': {
                        'name': lm[LK(0x171)][LK(0x34e)],
                        'defaultOpen': lm[LK(0x171)][LK(0x220)],
                        'indent': lm[LK(0x171)][LK(0x2bf)]
                    }
                }, lm['_l'](lm['options'][LK(0x2bb)], function (lQ) {
                    const LS = LK;
                    return lH(LS(0x441), {
                        'key': lQ[LS(0x1e9)],
                        'attrs': {
                            'options': lQ,
                            'values': lm['values']
                        },
                        'on': { 'update': lm[LS(0xc2)] }
                    });
                }), 0x1) : LK(0xb2) === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x44e), {
                    'attrs': {
                        'name': lm['options']['name'],
                        'help': lm['options'][LK(0x340)]
                    }
                }, lm['_l'](lm[LK(0x171)][LK(0x2bb)], function (lQ) {
                    const LI = LK;
                    return lH('attribute-tree', {
                        'key': lQ[LI(0x1e9)],
                        'attrs': {
                            'options': lQ,
                            'values': lm[LI(0x346)]
                        },
                        'on': { 'update': lm[LI(0xc2)] }
                    });
                }), 0x1) : LK(0x3d6) === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x2f8), {
                    'attrs': {
                        'min': lm[LK(0x171)][LK(0x3a6)],
                        'max': lm[LK(0x171)]['max'],
                        'step': lm[LK(0x171)]['step'] || 0x1,
                        'name': lm[LK(0x171)][LK(0x34e)]
                    },
                    'model': {
                        'value': lm[LK(0x3ad)],
                        'callback': function (lQ) {
                            const LO = LK;
                            lm[LO(0x3ad)] = lQ;
                        },
                        'expression': LK(0x3ad)
                    }
                }) : LK(0x3c4) === lm[LK(0x171)][LK(0x1c7)] ? lH('color-palette') : 'color' === lm[LK(0x171)]['type'] ? lH(LK(0x3e5), {
                    'attrs': {
                        'name': lm[LK(0x171)][LK(0x34e)],
                        'color-key': lm['options'][LK(0x1e9)]
                    },
                    'on': { 'update': lm['handleUpdate'] },
                    'model': {
                        'value': lm['value'],
                        'callback': function (lQ) {
                            const Lr = LK;
                            lm[Lr(0x3ad)] = lQ;
                        },
                        'expression': LK(0x3ad)
                    }
                }) : lH('field', {
                    'attrs': {
                        'name': lm[LK(0x171)][LK(0x34e)],
                        'flex': 'image' === lm[LK(0x171)][LK(0x1c7)] ? 'col' : 'row'
                    }
                }, [
                    LK(0x454) === lm[LK(0x171)]['type'] ? lH('el-input', {
                        'attrs': {
                            'placeholder': lm[LK(0x171)][LK(0x462)],
                            'size': 'small'
                        },
                        'model': {
                            'value': lm['value'],
                            'callback': function (lQ) {
                                const LU = LK;
                                lm[LU(0x3ad)] = lQ;
                            },
                            'expression': 'value'
                        }
                    }) : lm['_e'](),
                    'symbol-text' === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x1db), {
                        'attrs': {
                            'placeholder': lm['options'][LK(0x462)],
                            'size': LK(0x448)
                        },
                        'model': {
                            'value': lm[LK(0x3ad)],
                            'callback': function (lQ) {
                                const LN = LK;
                                lm[LN(0x3ad)] = lQ;
                            },
                            'expression': 'value'
                        }
                    }) : lm['_e'](),
                    LK(0x19c) === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x45a), {
                        'attrs': { 'allowOnline': !0x1 },
                        'model': {
                            'value': lm[LK(0x3ad)],
                            'callback': function (lQ) {
                                const LT = LK;
                                lm[LT(0x3ad)] = lQ;
                            },
                            'expression': LK(0x3ad)
                        }
                    }) : lm['_e'](),
                    LK(0x4a9) === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x384), {
                        'style': { 'width': lm[LK(0x171)][LK(0xb1)] || '160px' },
                        'attrs': {
                            'size': LK(0x448),
                            'filterable': ''
                        },
                        'model': {
                            'value': lm['value'],
                            'callback': function (lQ) {
                                const LM = LK;
                                lm[LM(0x3ad)] = lQ;
                            },
                            'expression': LK(0x3ad)
                        }
                    }, lm['_l'](lm[LK(0x171)][LK(0x171)], function (lQ) {
                        const G0 = LK;
                        return lH(G0(0x24b), {
                            'key': lQ[G0(0x3ad)],
                            'attrs': {
                                'label': lQ[G0(0x286)],
                                'value': lQ[G0(0x3ad)]
                            }
                        }, [lQ[G0(0x349)] ? lH(G0(0x394), { 'domProps': { 'innerHTML': lm['_s'](lQ['template']) } }) : lm['_e']()]);
                    }), 0x1) : lm['_e'](),
                    LK(0x1f9) === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x384), {
                        'style': { 'width': lm[LK(0x171)]['width'] || LK(0x2c0) },
                        'attrs': {
                            'size': LK(0x448),
                            'filterable': ''
                        },
                        'model': {
                            'value': lm[LK(0x3ad)],
                            'callback': function (lQ) {
                                lm['value'] = lQ;
                            },
                            'expression': LK(0x3ad)
                        }
                    }, lm['_l'](lm[LK(0x171)]['groups'], function (lQ) {
                        const G1 = LK;
                        return lH('el-option-group', {
                            'key': lQ['label'],
                            'attrs': { 'label': lQ[G1(0x286)] }
                        }, lm['_l'](lQ['options'], function (ly) {
                            const G2 = G1;
                            return lH(G2(0x24b), {
                                'key': ly[G2(0x3ad)],
                                'attrs': {
                                    'label': ly[G2(0x286)],
                                    'value': ly[G2(0x3ad)]
                                }
                            }, [ly['template'] ? lH('span', { 'domProps': { 'innerHTML': lm['_s'](ly[G2(0x349)]) } }) : lm['_e']()]);
                        }), 0x1);
                    }), 0x1) : lm['_e'](),
                    LK(0x165) === lm[LK(0x171)][LK(0x1c7)] ? lH(LK(0x197), { 'staticClass': 'radio-container' }, lm['_l'](lm[LK(0x171)][LK(0x171)], function (lQ) {
                        const G3 = LK;
                        return lH(G3(0x25a), {
                            'key': lQ[G3(0x3ad)],
                            'attrs': {
                                'label': lQ[G3(0x3ad)],
                                'size': G3(0x448)
                            },
                            'model': {
                                'value': lm[G3(0x3ad)],
                                'callback': function (ly) {
                                    const G4 = G3;
                                    lm[G4(0x3ad)] = ly;
                                },
                                'expression': G3(0x3ad)
                            }
                        }, [lm['_v']('\x20' + lm['_s'](lQ[G3(0x286)]) + '\x20')]);
                    }), 0x1) : lm['_e'](),
                    LK(0x9f) === lm[LK(0x171)][LK(0x1c7)] ? lH('div', [lH(LK(0x4ec), {
                            'model': {
                                'value': lm['value'],
                                'callback': function (lQ) {
                                    const G5 = LK;
                                    lm[G5(0x3ad)] = lQ;
                                },
                                'expression': LK(0x3ad)
                            }
                        })], 0x1) : lm['_e']()
                ], 0x1);
            }, hz = [], hR = function () {
                const G6 = dC;
                var lm = this, lH = lm[G6(0x1a3)]['_c'];
                return lH('div', {
                    'class': [
                        lm['containerClass'],
                        G6(0x37a) === lm['flex'] ? lm['rowClass'] : lm[G6(0xf4)]
                    ]
                }, [
                    lH('div', { 'staticClass': G6(0x362) }, [lm['_t'](G6(0x34e), function () {
                            const G7 = G6;
                            return [lm['_v'](lm['_s'](lm[G7(0x34e)]))];
                        })], 0x2),
                    lm['_t'](G6(0x39d))
                ], 0x2);
            }, hZ = [], hb = {
                'props': {
                    'name': String,
                    'flex': {
                        'default': dC(0x37a),
                        'type': String
                    }
                },
                'data'() {
                    const G8 = dC;
                    return {
                        'containerClass': G8(0x28e),
                        'rowClass': G8(0x37a),
                        'colClass': G8(0x232)
                    };
                }
            }, hK = hb, hp = (t2(dC(0x120)), Object(Ed['a'])(hK, hR, hZ, !0x1, null, dC(0x2b7), null)), hS = hp[dC(0x248)], hI = function () {
                const G9 = dC;
                var lm = this, lH = lm['_self']['_c'];
                return lH(G9(0x197), { 'staticClass': 'group-container' }, [
                    lH(G9(0x197), { 'staticClass': 'group-container-header' }, [lH(G9(0x394), { 'staticClass': 'group-container-name' }, [
                            lm['help'] ? lH('el-popover', {
                                'staticClass': G9(0x324),
                                'attrs': {
                                    'effect': 'dark',
                                    'width': G9(0xfb),
                                    'trigger': G9(0x235),
                                    'placement': G9(0x178)
                                }
                            }, [
                                lH(G9(0x197), {
                                    'staticClass': G9(0x192),
                                    'domProps': { 'innerHTML': lm['_s'](lm[G9(0x340)]) }
                                }),
                                lH('i', {
                                    'staticClass': G9(0x296),
                                    'attrs': { 'slot': 'reference' },
                                    'slot': G9(0x47a)
                                })
                            ]) : lm['_e'](),
                            lm['_v']('\x20' + lm['_s'](lm['name']) + '\x20')
                        ], 0x1)]),
                    lH('div', { 'staticClass': G9(0x225) }, [lm['_t'](G9(0x39d))], 0x2)
                ]);
            }, hO = [], hU = {
                'props': {
                    'name': String,
                    'help': String
                },
                'data'() {
                    return { 'visible': !0x0 };
                }
            }, hN = hU, hT = (t2(dC(0x103)), Object(Ed['a'])(hN, hI, hO, !0x1, null, null, null)), hM = hT['exports'], o0 = function () {
                const Gt = dC;
                var lm = this, lH = lm['_self']['_c'];
                return lH(Gt(0x197), [
                    lH(Gt(0x47e), {
                        'class': [
                            Gt(0x48b),
                            { 'image-height': '' === lm[Gt(0x111)] },
                            { 'image-dash-border': lm[Gt(0x4fa)] }
                        ],
                        'attrs': {
                            'action': '',
                            'auto-upload': !0x1,
                            'on-change': lm[Gt(0x268)],
                            'on-remove': lm['handleRemove'],
                            'limit': 0x1
                        }
                    }, [
                        '' !== lm[Gt(0x111)] ? lH(Gt(0x449), {
                            'staticClass': 'image',
                            'attrs': {
                                'src': lm[Gt(0x111)],
                                'alt': Gt(0x8f)
                            },
                            'on': {
                                'mouseenter': function (lQ) {
                                    lm['hover'] = !0x0;
                                },
                                'error': lm[Gt(0x3cb)]
                            }
                        }) : lH('i', {
                            'staticClass': Gt(0x24f),
                            'on': {
                                'mouseenter': function (lQ) {
                                    lm['hover'] = !0x0;
                                }
                            }
                        }),
                        lm[Gt(0x235)] ? lH('div', {
                            'staticClass': Gt(0x499),
                            'on': {
                                'mouseleave': function (lQ) {
                                    lm['hover'] = !0x1;
                                },
                                'click': lm[Gt(0x339)]
                            }
                        }, [lm[Gt(0x31d)] ? lH('div', [
                                lm[Gt(0x4fa)] ? lm['_e']() : lH(Gt(0x30f), {
                                    'attrs': {
                                        'icon': 'el-icon-upload',
                                        'type': Gt(0x492)
                                    }
                                }, [lm['_v'](Gt(0x16c))]),
                                lm[Gt(0x4fa)] ? lm['_e']() : lH(Gt(0x30f), {
                                    'attrs': {
                                        'icon': 'el-icon-upload',
                                        'type': Gt(0x492)
                                    },
                                    'on': { 'click': lm['handleUploadOnline'] }
                                }, [lm['_v'](Gt(0x4ad))])
                            ], 0x1) : lm['_e']()]) : lm['_e']()
                    ]),
                    lH(Gt(0x14f), {
                        'attrs': {
                            'title': 'Upload\x20online\x20image',
                            'visible': lm[Gt(0x18b)],
                            'append-to-body': ''
                        },
                        'on': {
                            'update:visible': function (lQ) {
                                lm['showUploadDialog'] = lQ;
                            }
                        }
                    }, [
                        lH(Gt(0x21a), {
                            'model': {
                                'value': lm[Gt(0x3d0)],
                                'callback': function (lQ) {
                                    const GE = Gt;
                                    lm[GE(0x3d0)] = lQ;
                                },
                                'expression': Gt(0x3d0)
                            }
                        }),
                        lH(Gt(0x394), {
                            'staticClass': Gt(0xd2),
                            'attrs': { 'slot': Gt(0x11f) },
                            'slot': 'footer'
                        }, [
                            lH(Gt(0x30f), {
                                'on': {
                                    'click': function (lQ) {
                                        const Gw = Gt;
                                        lm[Gw(0x18b)] = !0x1;
                                    }
                                }
                            }, [lm['_v']('Cancel')]),
                            lH(Gt(0x30f), {
                                'attrs': { 'type': Gt(0x492) },
                                'on': { 'click': lm['handleConfirmOnline'] }
                            }, [lm['_v'](Gt(0x1c8))])
                        ], 0x1)
                    ], 0x1)
                ], 0x1);
            }, o1 = [], o2 = t2(dC(0x493));
        function o3(lm) {
            const Gh = dC, lH = new FileReader();
            return lH[Gh(0x12f)](lm), new Promise(lQ => {
                const Go = Gh;
                lH[Go(0x1dd)] = () => {
                    const GB = Go;
                    lQ(lH[GB(0x3cf)]);
                };
            });
        }
        function o4(lm, lH) {
            const Gl = dC, lQ = document[Gl(0x29e)]('a');
            lQ[Gl(0x34b)] = lH, lQ[Gl(0x325)] = lm[Gl(0x108)](Gl(0x345)), document[Gl(0x4bd)][Gl(0x416)](lQ), lQ[Gl(0x1bf)](), lQ['remove']();
        }
        function o5(lm, lH) {
            const Gd = dC, lQ = new File([JSON[Gd(0xca)](lm)], lH + Gd(0x24d), { 'type': Gd(0x3af) });
            Object(o2[Gd(0x1af)])(lQ);
        }
        var o6 = {
                'model': {
                    'prop': dC(0x111),
                    'event': dC(0x4ba)
                },
                'props': {
                    'imageURL': String,
                    'cacheImage': {
                        'type': Boolean,
                        'default': !0x0
                    },
                    'allowOnline': {
                        'type': Boolean,
                        'default': !0x0
                    }
                },
                'data'() {
                    return {
                        'uploaded': !0x1,
                        'hover': !0x1,
                        'showUploadDialog': !0x1,
                        'onlineImageURL': '',
                        'preImageURL': ''
                    };
                },
                'watch': {
                    'imageURL'(lm, lH) {
                        this['preImageURL'] = lH;
                    }
                },
                'methods': {
                    async 'handleChange'(lm) {
                        const GL = dC, lH = await o3(lm[GL(0x185)]);
                        this[GL(0x4fa)] = !0x0, this[GL(0x254)](GL(0x4ba), lH);
                    },
                    'handleRemove'() {
                        const GG = dC;
                        this[GG(0x4fa)] = !0x1, this['hover'] = !0x1, this[GG(0x4e9)] || this['$emit'](GG(0x4ba), '');
                    },
                    'handleUploadOnline'(lm) {
                        const Gx = dC;
                        lm[Gx(0x410)](), this[Gx(0x18b)] = !0x0;
                    },
                    'handleClickOverlay'(lm) {
                        const GJ = dC;
                        this[GJ(0x4fa)] && (EA['a'][GJ(0x42c)](GJ(0x347)), lm[GJ(0x410)]());
                    },
                    'handleConfirmOnline'() {
                        const Gi = dC;
                        this['onlineImageURL'] ? this[Gi(0x254)]('change', this[Gi(0x3d0)]) : EA['a'][Gi(0x42c)](Gi(0x31b)), this[Gi(0x18b)] = !0x1;
                    },
                    'handleErrorImage'() {
                        const GF = dC;
                        EA['a'][GF(0x42c)](GF(0x3f6)), this['$emit'](GF(0x4ba), this['preImageURL']);
                    }
                }
            }, o7 = o6, o8 = (t2(dC(0xb5)), Object(Ed['a'])(o7, o0, o1, !0x1, null, null, null)), o9 = o8[dC(0x248)], ot = function () {
                const GW = dC;
                var lm = this, lH = lm['_self']['_c'];
                return lH(GW(0x452), {
                    'attrs': { 'name': lm[GW(0x34e)] },
                    'scopedSlots': lm['_u']([{
                            'key': GW(0x34e),
                            'fn': function () {
                                const GC = GW;
                                return [lH(GC(0x394), {
                                        'style': lm[GC(0x2aa)],
                                        'on': { 'mousedown': lm[GC(0xff)] }
                                    }, [lm['_v'](lm['_s'](lm[GC(0x34e)]))])];
                            },
                            'proxy': !0x0
                        }])
                }, [
                    lH(GW(0x404), {
                        'attrs': {
                            'controls-position': GW(0x123),
                            'min': lm[GW(0x3a6)],
                            'max': lm[GW(0x22c)],
                            'step': lm[GW(0x1fe)],
                            'size': GW(0x448)
                        },
                        'model': {
                            'value': lm[GW(0x1d1)],
                            'callback': function (lQ) {
                                const Gm = GW;
                                lm[Gm(0x1d1)] = lQ;
                            },
                            'expression': GW(0x1d1)
                        }
                    }),
                    lm[GW(0xc3)] ? lH(GW(0x197), {
                        'staticClass': GW(0x27c),
                        'style': lm[GW(0x2aa)],
                        'on': {
                            'mouseup': lm[GW(0xb9)],
                            'mousemove': lm[GW(0x184)]
                        }
                    }) : lm['_e']()
                ], 0x1);
            }, oE = [], ow = {
                'components': { 'Field': hS },
                'props': {
                    'min': {
                        'type': Number,
                        'default': -0x1 / 0x0
                    },
                    'max': {
                        'type': Number,
                        'default': 0x1 / 0x0
                    },
                    'value': Number,
                    'step': Number,
                    'name': String
                },
                'data'() {
                    return {
                        'showOverlay': !0x1,
                        'x': 0x0,
                        'initValue': 0x0
                    };
                },
                'computed': {
                    'numberValue': {
                        'get'() {
                            const GH = dC;
                            return this[GH(0x3ad)];
                        },
                        'set'(lm) {
                            const GQ = dC;
                            this[GQ(0x254)](GQ(0x45b), lm);
                        }
                    },
                    'cursorStyle'() {
                        const Gy = dC;
                        let lm;
                        return lm = this[Gy(0x3ad)] <= this['min'] ? Gy(0x343) : this[Gy(0x3ad)] >= this[Gy(0x22c)] ? Gy(0x3b8) : Gy(0x426), { 'cursor': lm };
                    }
                },
                'methods': {
                    'handleMouseDown'({clientX: lm}) {
                        const Ge = dC;
                        this[Ge(0xc3)] = !0x0, this['x'] = lm, this[Ge(0x37d)] = this[Ge(0x3ad)];
                    },
                    'handleMouseUp'() {
                        this['showOverlay'] = !0x1;
                    },
                    'handleMouseMove'({clientX: lm}) {
                        const Gc = dC, lH = lm - this['x'], lQ = this[Gc(0x37d)] + lH;
                        this[Gc(0x254)](Gc(0x45b), lQ);
                    }
                }
            }, oh = ow, oB = (t2(dC(0xaf)), Object(Ed['a'])(oh, ot, oE, !0x1, null, null, null)), ol = oB['exports'], od = function () {
                const GA = dC;
                var lm = this, lH = lm[GA(0x1a3)]['_c'];
                return lH(GA(0x197), [
                    lH('field', { 'attrs': { 'name': lm['name'] } }, [lH(GA(0x394), { 'staticClass': GA(0x4d7) }, [lH('i', {
                                'staticClass': GA(0x3b1),
                                'style': lm[GA(0x13d)],
                                'on': {
                                    'click': function (lQ) {
                                        lm['open'] = !lm['open'];
                                    }
                                }
                            })])]),
                    lH(GA(0x125), [lH('div', {
                            'directives': [{
                                    'name': GA(0x445),
                                    'rawName': GA(0x256),
                                    'value': lm['open'],
                                    'expression': GA(0x1c5)
                                }],
                            'staticClass': GA(0x4c7),
                            'style': { 'paddingLeft': lm['indent'] ? GA(0x287) : 0x0 }
                        }, [lm['_t']('default')], 0x2)])
                ], 0x1);
            }, oL = [], oG = {
                'components': { 'Field': hS },
                'props': {
                    'name': String,
                    'indent': {
                        'type': Boolean,
                        'default': !0x0
                    },
                    'defaultOpen': {
                        'type': Boolean,
                        'default': !0x0
                    },
                    'maxHeight': {
                        'type': Number,
                        'default': 0x1f4
                    }
                },
                'data'() {
                    return { 'open': this['defaultOpen'] };
                },
                'computed': {
                    'iconStyle'() {
                        const GP = dC;
                        return { 'transform': 'rotateZ(' + (this[GP(0x1c5)] ? 0x0 : 0xb4) + 'deg)' };
                    },
                    'childrenStyle'() {
                        const Gv = dC;
                        return this[Gv(0x1c5)] ? {} : { 'height': Gv(0x250) };
                    }
                }
            }, ox = oG, oJ = (t2(dC(0x2b3)), Object(Ed['a'])(ox, od, oL, !0x1, null, null, null)), oF = oJ[dC(0x248)], oW = function () {
                const Gf = dC;
                var lm = this, lH = lm[Gf(0x1a3)]['_c'];
                return lH(Gf(0x197), { 'staticClass': 'symbol-input-container' }, [lH('el-popover', {
                        'attrs': {
                            'placement': Gf(0x237),
                            'width': '300',
                            'trigger': 'focus'
                        }
                    }, [
                        lH(Gf(0x197), { 'staticClass': Gf(0x1e5) }, [lH('el-tabs', { 'attrs': { 'value': Gf(0x4d2) } }, [
                                lH(Gf(0x26b), {
                                    'attrs': {
                                        'label': 'w(ﾟДﾟ)w',
                                        'name': 'first'
                                    }
                                }, [lH(Gf(0x2e7), { 'on': { 'input': lm[Gf(0x18f)] } })], 0x1),
                                lH('el-tab-pane', {
                                    'attrs': {
                                        'label': Gf(0xb8),
                                        'name': Gf(0xe6)
                                    }
                                }, [lH('emoji-picker', { 'on': { 'input': lm[Gf(0x18f)] } })], 0x1)
                            ], 0x1)], 0x1),
                        lH('el-input', {
                            'style': { 'width': Gf(0xdf) },
                            'attrs': {
                                'slot': Gf(0x47a),
                                'id': Gf(0xaa),
                                'placeholder': lm['placeholder'],
                                'size': lm[Gf(0x28b)],
                                'type': Gf(0x2e4),
                                'autosize': ''
                            },
                            'slot': Gf(0x47a),
                            'model': {
                                'value': lm[Gf(0x217)],
                                'callback': function (lQ) {
                                    const Gq = Gf;
                                    lm[Gq(0x217)] = lQ;
                                },
                                'expression': Gf(0x217)
                            }
                        })
                    ], 0x1)], 0x1);
            }, oC = [], om = function () {
                const Ga = dC;
                var lm = this, lH = lm[Ga(0x1a3)]['_c'];
                return lH(Ga(0x197), { 'staticClass': Ga(0x470) }, [lH(Ga(0x20f), {
                        'attrs': { 'tab-position': 'bottom' },
                        'model': {
                            'value': lm[Ga(0x372)],
                            'callback': function (lQ) {
                                const GY = Ga;
                                lm[GY(0x372)] = lQ;
                            },
                            'expression': Ga(0x372)
                        }
                    }, lm['_l'](lm[Ga(0x2ef)], function (lQ) {
                        const Gn = Ga;
                        return lH(Gn(0x26b), {
                            'key': lQ[Gn(0x34e)],
                            'attrs': {
                                'label': lQ[Gn(0x484)],
                                'name': lQ[Gn(0x34e)]
                            }
                        }, [lH(Gn(0x197), { 'staticClass': Gn(0x2eb) }, lm['_l'](lm[Gn(0x269)], function (ly) {
                                const Gk = Gn;
                                return lH(Gk(0x394), {
                                    'key': ly[Gk(0x34e)],
                                    'staticClass': 'emoji-picker-item',
                                    'on': { 'click': () => lm[Gk(0x183)](ly) }
                                }, [lm['_v'](lm['_s'](ly[Gk(0x484)]))]);
                            }), 0x0)]);
                    }), 0x1)], 0x1);
            }, oH = [], oQ = t2('c604');
        const oy = Object[dC(0x118)](oQ)[dC(0xa0)](lm => ({
            'name': lm,
            'emoji': oQ[lm][0x0][dC(0x484)]
        }));
        var oc = {
                'data'() {
                    return {
                        'emojiGroups': oy,
                        'selectedName': oy[0x0]['name']
                    };
                },
                'computed': {
                    'emojis'() {
                        const GV = dC;
                        return oQ[this[GV(0x372)]];
                    }
                },
                'methods': {
                    'handleClick'(lm) {
                        const GX = dC;
                        this[GX(0x254)]('input', lm[GX(0x484)]);
                    }
                }
            }, oA = oc, oP = (t2('1fee'), Object(Ed['a'])(oA, om, oH, !0x1, null, null, null)), ov = oP[dC(0x248)], of = function () {
                const Gg = dC;
                var lm = this, lH = lm[Gg(0x1a3)]['_c'];
                return lH('div', { 'staticClass': Gg(0x4f7) }, [
                    lH(Gg(0x197), { 'staticClass': Gg(0x213) }, [
                        lH('el-button', {
                            'attrs': {
                                'type': Gg(0x492),
                                'size': Gg(0x48c)
                            },
                            'on': { 'click': lm[Gg(0xf1)] }
                        }, [lm['_v'](Gg(0x1b3))]),
                        lH(Gg(0x394), {
                            'staticClass': 'emoticon-picker-item',
                            'on': { 'click': () => lm[Gg(0x183)](lm[Gg(0x38d)]) }
                        }, [lm['_v'](lm['_s'](lm[Gg(0x38d)]))])
                    ], 0x1),
                    lH('div', { 'staticClass': Gg(0x283) }, lm['_l'](lm['faces'], function (lQ) {
                        const Gj = Gg;
                        return lH(Gj(0x394), {
                            'key': lQ,
                            'staticClass': Gj(0x2de),
                            'on': { 'click': () => lm['handleClick'](lQ) }
                        }, [lm['_v'](lm['_s'](lQ))]);
                    }), 0x0)
                ]);
            }, oq = [], oa = t2(dC(0x1d9)), oY = t2['n'](oa), ok = t2(dC(0x401)), oV = {
                'data'() {
                    return {
                        'randomEmoticon': oY()(),
                        'faces': ok
                    };
                },
                'methods': {
                    'generateEmotion'() {
                        const GD = dC;
                        this[GD(0x38d)] = oY()();
                    },
                    'handleClick'(lm) {
                        const Gu = dC;
                        this[Gu(0x254)](Gu(0x45b), lm);
                    }
                }
            }, oX = oV, og = (t2('0f57'), Object(Ed['a'])(oX, of, oq, !0x1, null, null, null)), oj = og[dC(0x248)], oD = {
                'components': {
                    'EmojiPicker': ov,
                    'EmoticonPicker': oj
                },
                'props': {
                    'placeholder': String,
                    'size': String,
                    'value': String
                },
                'computed': {
                    'textValue': {
                        'get'() {
                            const Gz = dC;
                            return this[Gz(0x3ad)];
                        },
                        'set'(lm) {
                            const GR = dC;
                            this[GR(0x254)](GR(0x45b), lm);
                        }
                    }
                },
                'methods': {
                    'handleInput'(lm) {
                        const Gs = dC, lH = document[Gs(0x31c)]('emojiInput'), {
                                selectionStart: lQ,
                                selectionEnd: ly
                            } = lH;
                        if (void 0x0 === lQ || void 0x0 === ly)
                            return;
                        const lc = this[Gs(0x217)][Gs(0x2d6)](0x0, lQ) + lm + this['textValue'][Gs(0x2d6)](ly);
                        lH[Gs(0x3ad)] = lc, lH[Gs(0x1fb)](), lH[Gs(0x2ad)] = lQ + lm[Gs(0xa9)], lH['selectionEnd'] = lQ + lm[Gs(0xa9)], this[Gs(0x217)] = lc;
                    }
                }
            }, ou = oD, oz = (t2(dC(0x26a)), Object(Ed['a'])(ou, oW, oC, !0x1, null, null, null)), oR = oz['exports'], oZ = function () {
                const GZ = dC;
                var lm = this, lH = lm[GZ(0x1a3)]['_c'];
                return lH(GZ(0x197), {
                    'staticClass': GZ(0x4df),
                    'style': { 'borderColor': lm[GZ(0xa3)] ? GZ(0x427) : GZ(0x8e) },
                    'on': {
                        'dragover': lm[GZ(0x3ff)],
                        'drop': lm[GZ(0x377)],
                        'dragleave': function (lQ) {
                            const Gb = GZ;
                            lm[Gb(0xa3)] = !0x1;
                        }
                    }
                }, [
                    0x0 === lm[GZ(0x17a)][GZ(0xa9)] ? lH(GZ(0x197), {
                        'staticClass': GZ(0x247),
                        'on': {
                            'mouseover': function (lQ) {
                                const GK = GZ;
                                lm[GK(0x279)] = !0x0;
                            },
                            'mouseleave': function (lQ) {
                                lm['showButtons'] = !0x1;
                            }
                        }
                    }, [
                        lH(GZ(0x35c), {
                            'style': { 'opacity': lm[GZ(0x279)] ? 0x0 : 0x1 },
                            'attrs': { 'description': GZ(0xbc) }
                        }),
                        lm['showButtons'] ? lH('div', { 'staticClass': GZ(0x15a) }, [
                            lH(GZ(0x30f), {
                                'attrs': {
                                    'icon': GZ(0x20c),
                                    'type': GZ(0x492),
                                    'size': 'small'
                                },
                                'on': {
                                    'click': function (lQ) {
                                        lm['showColorsStore'] = !0x0;
                                    }
                                }
                            }, [lm['_v'](GZ(0x1a5))]),
                            lH(GZ(0x30f), {
                                'attrs': {
                                    'icon': GZ(0x20c),
                                    'type': GZ(0x492),
                                    'size': GZ(0x448)
                                },
                                'on': {
                                    'click': function (lQ) {
                                        const Gp = GZ;
                                        lm[Gp(0x226)] = !0x0;
                                    }
                                }
                            }, [lm['_v']('从图片导入')])
                        ], 0x1) : lm['_e']()
                    ], 0x1) : lH(GZ(0x197), { 'staticClass': 'color-palette-colors' }, [
                        lm['_l'](lm[GZ(0x17a)], function (lQ) {
                            const GS = GZ;
                            return lH(GS(0x394), {
                                'key': lQ,
                                'staticClass': 'color-palette-item',
                                'style': { 'background': lQ },
                                'attrs': { 'draggable': 'true' },
                                'on': { 'dragstart': ly => lm[GS(0x43e)](ly, lQ) }
                            });
                        }),
                        lH(GZ(0x4b5), {
                            'attrs': {
                                'placement': GZ(0x38c),
                                'trigger': 'hover'
                            }
                        }, [
                            lH('el-button', {
                                'attrs': {
                                    'icon': 'el-icon-plus',
                                    'type': 'primary',
                                    'size': GZ(0x448)
                                },
                                'on': {
                                    'click': function (lQ) {
                                        const GI = GZ;
                                        lm[GI(0x2d1)] = !0x0;
                                    }
                                }
                            }, [lm['_v'](GZ(0x1a5))]),
                            lH('el-button', {
                                'attrs': {
                                    'icon': 'el-icon-plus',
                                    'type': GZ(0x492),
                                    'size': GZ(0x448)
                                },
                                'on': {
                                    'click': function (lQ) {
                                        lm['showImageExtractor'] = !0x0;
                                    }
                                }
                            }, [lm['_v']('从图片导入')]),
                            lH('i', {
                                'staticClass': GZ(0x3c6),
                                'style': {
                                    'float': GZ(0x3e6),
                                    'cursor': GZ(0x357),
                                    'lineHeight': GZ(0x4cd)
                                },
                                'attrs': { 'slot': GZ(0x47a) },
                                'slot': 'reference'
                            })
                        ], 0x1)
                    ], 0x2),
                    lH('el-dialog', {
                        'attrs': {
                            'title': GZ(0x1a5),
                            'width': '1000px',
                            'visible': lm[GZ(0x2d1)]
                        },
                        'on': {
                            'update:visible': function (lQ) {
                                const GO = GZ;
                                lm[GO(0x2d1)] = lQ;
                            }
                        }
                    }, [
                        lH(GZ(0x20f), { 'attrs': { 'value': lm[GZ(0x19e)][0x0][GZ(0x34e)] } }, lm['_l'](lm['colorStore'], function (lQ) {
                            const Gr = GZ;
                            return lH(Gr(0x26b), {
                                'key': lQ[Gr(0x34e)],
                                'attrs': {
                                    'label': lQ[Gr(0x34e)],
                                    'name': lQ[Gr(0x34e)]
                                }
                            }, [
                                lH('p', {
                                    'staticClass': Gr(0xa4),
                                    'domProps': { 'innerHTML': lm['_s'](lQ[Gr(0xbd)]) }
                                }),
                                lH(Gr(0x197), { 'staticClass': Gr(0x329) }, lm['_l'](lQ[Gr(0x17a)], function (ly) {
                                    const GU = Gr;
                                    return lH('div', { 'key': ly['name'] || ly[GU(0x346)][GU(0x2f7)]('') }, [
                                        lH('div', { 'on': { 'click': () => lm['handleAddColors'](ly[GU(0x346)]) } }, [lH(GU(0x28f), {
                                                'style': {
                                                    'width': lm[GU(0x2a8)] + 'px',
                                                    'height': lm[GU(0x2a8)] + 'px',
                                                    'margin': GU(0x32b),
                                                    'cursor': GU(0x357)
                                                },
                                                'attrs': { 'shadow': GU(0x235) }
                                            }, lm['_l'](ly['values'], function (lc) {
                                                const GN = GU;
                                                return lH(GN(0x197), {
                                                    'key': lc,
                                                    'style': {
                                                        'background': lc,
                                                        'width': GN(0x149),
                                                        'height': lm[GN(0x2a8)] / (ly[GN(0x346)][GN(0xa9)] || 0x1) + 'px'
                                                    }
                                                });
                                            }), 0x0)], 0x1),
                                        lH(GU(0x197), {
                                            'style': {
                                                'height': GU(0x4cd),
                                                'width': lm[GU(0x2a8)] + 'px',
                                                'margin': GU(0x4bc)
                                            }
                                        }, [
                                            lH('span', [lm['_v'](lm['_s'](ly['name'] || GU(0x390)))]),
                                            ly['link'] ? lH(GU(0x394), { 'staticClass': GU(0x22a) }, [lH('el-link', {
                                                    'attrs': {
                                                        'href': ly[GU(0xea)],
                                                        'target': GU(0x4a2),
                                                        'underline': !0x1
                                                    }
                                                }, [lH('i', {
                                                        'staticClass': GU(0x8c),
                                                        'staticStyle': { 'font-size': '16px' }
                                                    })])], 0x1) : lm['_e']()
                                        ])
                                    ]);
                                }), 0x0)
                            ]);
                        }), 0x1),
                        lH(GZ(0x394), {
                            'staticClass': GZ(0xd2),
                            'attrs': { 'slot': GZ(0x11f) },
                            'slot': 'footer'
                        }, [lH(GZ(0x30f), {
                                'on': {
                                    'click': function (lQ) {
                                        const GT = GZ;
                                        lm[GT(0x2d1)] = !0x1;
                                    }
                                }
                            }, [lm['_v'](GZ(0xf8))])], 0x1)
                    ], 0x1),
                    lH(GZ(0x14f), {
                        'attrs': {
                            'title': '从图像中提取颜色',
                            'visible': lm[GZ(0x226)]
                        },
                        'on': {
                            'update:visible': function (lQ) {
                                lm['showImageExtractor'] = lQ;
                            }
                        }
                    }, [
                        lH(GZ(0xf2), {
                            'model': {
                                'value': lm[GZ(0x3c5)],
                                'callback': function (lQ) {
                                    const GM = GZ;
                                    lm[GM(0x3c5)] = lQ;
                                },
                                'expression': GZ(0x3c5)
                            }
                        }),
                        lH(GZ(0x394), {
                            'staticClass': GZ(0xd2),
                            'attrs': { 'slot': GZ(0x11f) },
                            'slot': 'footer'
                        }, [
                            lH(GZ(0x30f), { 'on': { 'click': lm['handleCloseImageColorPicker'] } }, [lm['_v']('Cancel')]),
                            lH('el-button', {
                                'directives': [{
                                        'name': GZ(0x445),
                                        'rawName': 'v-show',
                                        'value': 0x0 !== lm[GZ(0x3c5)][GZ(0xa9)],
                                        'expression': GZ(0xc9)
                                    }],
                                'attrs': { 'type': GZ(0x492) },
                                'on': { 'click': lm[GZ(0x4a1)] }
                            }, [lm['_v'](GZ(0x419))])
                        ], 0x1)
                    ], 0x1)
                ], 0x1);
            }, ob = [];
        const oK = {
                'name': '品牌',
                'des': dC(0x3ee),
                'colors': [
                    {
                        'name': '蚂蚁集团',
                        'values': [dC(0x17b)],
                        'link': dC(0x1c9)
                    },
                    {
                        'name': dC(0x30c),
                        'values': [dC(0x23a)],
                        'link': dC(0x2cb)
                    },
                    {
                        'name': dC(0x153),
                        'values': ['#fa729a'],
                        'link': dC(0x2dc)
                    },
                    {
                        'name': '语雀',
                        'values': [
                            dC(0x413),
                            dC(0x367)
                        ],
                        'link': 'https://www.yuque.com/'
                    },
                    {
                        'name': '抖音',
                        'values': [
                            dC(0x417),
                            dC(0x280),
                            '#ff0050'
                        ],
                        'link': dC(0xd9)
                    },
                    {
                        'name': '微软',
                        'values': [
                            dC(0x46b),
                            dC(0x23d),
                            dC(0xfc),
                            dC(0x3bc)
                        ],
                        'link': 'https://www.microsoft.com/zh-cn'
                    },
                    {
                        'name': '谷歌',
                        'values': [
                            '#4484f1',
                            dC(0xc5),
                            '#F8BA03',
                            dC(0x174)
                        ],
                        'link': 'https://www.google.com/'
                    },
                    {
                        'name': dC(0x351),
                        'values': [dC(0x4d9)],
                        'link': dC(0x15e)
                    },
                    {
                        'name': dC(0x35d),
                        'values': [dC(0x3ea)],
                        'link': dC(0x1d3)
                    },
                    {
                        'name': dC(0x21f),
                        'values': [dC(0xac)],
                        'link': 'https://github.com/'
                    },
                    {
                        'name': dC(0xbe),
                        'values': [
                            dC(0x14b),
                            dC(0x2e8),
                            '#00d5ff',
                            '#03ed81'
                        ],
                        'link': dC(0x4ea)
                    },
                    {
                        'name': dC(0x3f2),
                        'values': [
                            dC(0x144),
                            '#f99220'
                        ],
                        'link': dC(0x147)
                    }
                ]
            }, op = {
                'name': 'NBA',
                'des': dC(0x18e),
                'colors': [
                    {
                        'name': '波士顿凯尔特人',
                        'values': ['#145b33']
                    },
                    {
                        'name': '洛杉矶湖人',
                        'values': [
                            dC(0x1de),
                            dC(0xc7)
                        ]
                    },
                    {
                        'name': dC(0x239),
                        'values': [
                            '#004AB9',
                            dC(0x1e4)
                        ]
                    },
                    {
                        'name': dC(0x37c),
                        'values': [
                            dC(0x481),
                            dC(0x3e3)
                        ]
                    },
                    {
                        'name': '俄克拉荷马雷霆',
                        'values': [
                            '#18385e',
                            dC(0x45c),
                            dC(0x242)
                        ]
                    },
                    {
                        'name': dC(0x354),
                        'values': [
                            '#090a0a',
                            dC(0x1ed),
                            dC(0x18a)
                        ]
                    }
                ]
            }, oS = {
                'name': dC(0x35b),
                'owner': !0x1,
                'des': dC(0x3fe),
                'colors': [
                    {
                        'values': [
                            dC(0x336),
                            dC(0x158),
                            '#4DD599',
                            dC(0x265)
                        ],
                        'link': dC(0x29a)
                    },
                    {
                        'values': [
                            '#222831',
                            dC(0x3bd),
                            dC(0x203),
                            dC(0x4f5)
                        ],
                        'link': 'https://colorhunt.co/palette/222831393e4600adb5eeeeee'
                    },
                    {
                        'values': [
                            dC(0x2c3),
                            dC(0x2d0),
                            dC(0x432),
                            dC(0x196)
                        ],
                        'link': dC(0x11c)
                    },
                    {
                        'values': [
                            dC(0xc1),
                            '#252A34',
                            dC(0x169),
                            '#EAEAEA'
                        ],
                        'link': dC(0x110)
                    },
                    {
                        'values': [
                            dC(0x193),
                            dC(0x294),
                            dC(0xf7),
                            dC(0x39c)
                        ],
                        'link': dC(0x246)
                    },
                    {
                        'values': [
                            dC(0x4f3),
                            dC(0x38a),
                            dC(0x216),
                            '#FFBD39'
                        ],
                        'link': dC(0x472)
                    },
                    {
                        'values': [
                            dC(0x215),
                            dC(0x3bd),
                            dC(0x30e),
                            dC(0x4f5)
                        ],
                        'link': dC(0x266)
                    },
                    {
                        'values': [
                            dC(0x3c1),
                            dC(0x469),
                            dC(0x4a4),
                            dC(0xb7)
                        ],
                        'link': 'https://colorhunt.co/palette/28df9999f3bdd2f6c5f6f7d4'
                    },
                    {
                        'values': [
                            '#2D4059',
                            dC(0x2ba),
                            dC(0xa2),
                            dC(0x2a1)
                        ],
                        'link': 'https://colorhunt.co/palette/2d4059ea5455f07b3fffd460'
                    },
                    {
                        'values': [
                            dC(0x3c8),
                            dC(0x44c),
                            dC(0x4b4),
                            dC(0x1ee)
                        ],
                        'link': dC(0x39f)
                    },
                    {
                        'values': [
                            dC(0x309),
                            '#07689F',
                            dC(0x289),
                            dC(0x335)
                        ],
                        'link': 'https://colorhunt.co/palette/ffc93c07689f40a8c4a2d5f2'
                    },
                    {
                        'values': [
                            dC(0x199),
                            dC(0x15d),
                            dC(0x1ca),
                            '#FFF3E4'
                        ],
                        'link': dC(0x18c)
                    }
                ]
            }, oI = {
                'name': dC(0x2d9),
                'des': dC(0x188),
                'colors': [
                    {
                        'name': dC(0x253),
                        'values': [
                            '#583d33',
                            '#9e3b37',
                            dC(0x3ef)
                        ],
                        'link': dC(0x3a4)
                    },
                    {
                        'name': dC(0x12d),
                        'values': [
                            dC(0x33a),
                            dC(0x12a),
                            '#f7e700'
                        ],
                        'link': dC(0x40d)
                    },
                    {
                        'name': '安娜',
                        'values': [
                            '#294775',
                            dC(0x323),
                            dC(0x1cf)
                        ],
                        'link': 'https://ow.blizzard.cn/heroes/ana'
                    },
                    {
                        'name': '猎空',
                        'values': [
                            '#372923',
                            dC(0x4db),
                            '#efd496'
                        ],
                        'link': dC(0x3aa)
                    },
                    {
                        'name': '艾什',
                        'values': [
                            dC(0x439),
                            '#82695c',
                            dC(0x2d2)
                        ],
                        'link': dC(0x476)
                    },
                    {
                        'name': dC(0x2cf),
                        'values': [
                            '#3b4766',
                            dC(0x400),
                            dC(0x4f1)
                        ],
                        'link': 'https://ow.blizzard.cn/heroes/sigma'
                    },
                    {
                        'name': '黑影',
                        'values': [
                            '#3f1a7e',
                            dC(0x1ad),
                            dC(0x2e3)
                        ],
                        'link': dC(0x17c)
                    },
                    {
                        'name': '回声',
                        'values': [
                            dC(0x44a),
                            '#59baf7',
                            '#daeaed'
                        ],
                        'link': dC(0x338)
                    },
                    {
                        'name': '死神',
                        'values': [
                            dC(0x26f),
                            dC(0x155),
                            dC(0x10b)
                        ],
                        'link': dC(0x261)
                    },
                    {
                        'name': 'D.Va',
                        'values': [
                            dC(0x49b),
                            dC(0x113),
                            '#ed9ec3'
                        ],
                        'link': dC(0x3cc)
                    },
                    {
                        'name': dC(0x3eb),
                        'values': [
                            '#6b5546',
                            dC(0x473),
                            '#a09679'
                        ],
                        'link': dC(0x25e)
                    },
                    {
                        'name': dC(0x458),
                        'values': [
                            '#3d4981',
                            '#9fb4e2',
                            dC(0x1eb)
                        ],
                        'link': dC(0x389)
                    }
                ]
            }, oO = {
                'name': '漫威',
                'des': dC(0x350),
                'colors': [
                    {
                        'name': '绯红女巫',
                        'values': [
                            dC(0x40b),
                            '#d98b94'
                        ],
                        'link': dC(0x2af)
                    },
                    {
                        'name': dC(0x1a4),
                        'values': [
                            '#b93233',
                            dC(0x292)
                        ],
                        'link': dC(0x409)
                    },
                    {
                        'name': dC(0x157),
                        'values': [
                            dC(0x32d),
                            dC(0x2f0)
                        ],
                        'link': dC(0x4ae)
                    },
                    {
                        'name': '蜘蛛侠',
                        'values': [
                            '#f45552',
                            '#6f9cf6'
                        ],
                        'link': 'https://www.marvel.com/characters/spider-man-peter-parker'
                    },
                    {
                        'name': '雷神',
                        'values': [
                            dC(0x415),
                            '#8c9ed9'
                        ],
                        'link': dC(0xdd)
                    },
                    {
                        'name': '浩克',
                        'values': [
                            '#7bbc5c',
                            dC(0x47c)
                        ],
                        'link': dC(0x374)
                    }
                ]
            }, oU = {
                'name': dC(0x4ef),
                'des': dC(0x428),
                'colors': [
                    {
                        'name': dC(0xe2),
                        'values': ['#1f1cc1'],
                        'link': dC(0x8d)
                    },
                    {
                        'name': dC(0x330),
                        'values': [
                            dC(0x145),
                            '#e8d365',
                            dC(0x189)
                        ],
                        'link': 'https://en.wikipedia.org/wiki/Piet_Mondrian'
                    },
                    {
                        'name': dC(0x31a),
                        'values': [
                            '#566c70',
                            '#a5babd',
                            dC(0x3fb)
                        ],
                        'link': dC(0x3ed)
                    },
                    {
                        'name': dC(0xd4),
                        'values': [
                            '#2c1f26',
                            dC(0x369),
                            dC(0x164),
                            '#9ba069'
                        ],
                        'link': dC(0x1c2)
                    },
                    {
                        'name': '召唤使徒马太',
                        'values': [
                            dC(0x498),
                            dC(0x154),
                            dC(0x1aa),
                            dC(0x21c)
                        ],
                        'link': dC(0x451)
                    },
                    {
                        'name': dC(0x97),
                        'values': [
                            '#1a366c',
                            dC(0x3f3),
                            dC(0x2c7),
                            dC(0x4b8)
                        ],
                        'link': dC(0x1c1)
                    }
                ]
            }, oN = [
                oK,
                oO,
                oI,
                op,
                oU,
                oS
            ];
        var oT = function () {
                const x0 = dC;
                var lm = this, lH = lm[x0(0x1a3)]['_c'];
                return lH('div', { 'staticClass': x0(0x2b0) }, [
                    lH('image-picker', {
                        'attrs': {
                            'allowOnline': !0x1,
                            'cacheImage': !0x1
                        },
                        'model': {
                            'value': lm[x0(0x111)],
                            'callback': function (lQ) {
                                const x1 = x0;
                                lm[x1(0x111)] = lQ;
                            },
                            'expression': x0(0x111)
                        }
                    }),
                    lH(x0(0x197), { 'staticClass': x0(0x3c3) }, [
                        lm[x0(0xc0)][x0(0xa9)] ? lH(x0(0x197), {
                            'staticStyle': {
                                'color': x0(0x2b6),
                                'font-size': x0(0x435)
                            }
                        }, [lm['_v'](x0(0xd7) + lm['_s'](lm[x0(0x4f9)] === 0x1 / 0x0 ? '' : x0(0x3a9) + lm[x0(0x4f9)] + '\x20') + x0(0x4e5))]) : lm['_e'](),
                        lm['_l'](lm[x0(0xc0)], function (lQ, ly) {
                            const x2 = x0;
                            return lH(x2(0x394), {
                                'key': lQ,
                                'staticClass': x2(0x4ab),
                                'style': {
                                    'backgroundColor': lQ,
                                    'borderColor': -0x1 === lm[x2(0x478)]['indexOf'](ly) ? lQ : x2(0x166)
                                },
                                'on': { 'click': () => lm[x2(0x28d)](ly) }
                            });
                        })
                    ], 0x2)
                ], 0x1);
            }, oM = [], B0 = t2(dC(0x2a7));
        const B1 = (lm, lH, lQ) => '#' + [
                lm,
                lH,
                lQ
            ]['map'](ly => {
                const x3 = dC, lc = ly[x3(0x48d)](0x10);
                return 0x1 === lc['length'] ? '0' + lc : lc;
            })[dC(0x2f7)](''), B2 = new B0['a']();
        var B3 = {
                'props': {
                    'maxCount': {
                        'type': Number,
                        'default': 0x1 / 0x0
                    },
                    'value': {
                        'type': Array,
                        'default': () => []
                    }
                },
                'components': { 'ImagePicker': o9 },
                'data'() {
                    return {
                        'imageURL': '',
                        'imageColors': []
                    };
                },
                'computed': {
                    'selectedImageColorIndex': {
                        'get'() {
                            const x4 = dC;
                            return console['log']({ 'value': this['value'] }), this['value']['map'](lm => this[x4(0xc0)][x4(0x322)](lH => lm === lH))['filter'](lm => -0x1 !== lm);
                        },
                        'set'(lm) {
                            const x5 = dC, lH = lm[x5(0xa0)](lQ => this[x5(0xc0)][lQ]);
                            this[x5(0x254)]('input', lH);
                        }
                    }
                },
                'watch': {
                    'imageURL': {
                        'immediate': !0x0,
                        async 'handler'(lm) {
                            const x6 = dC;
                            if ('' === lm)
                                return this['imageColors'] = [], void (this['selectedImageColorIndex'] = []);
                            try {
                                const lH = await ET(lm), lQ = B2['getPalette'](lH)['map'](ly => B1(...ly));
                                this['imageColors'] = lQ;
                            } catch (ly) {
                                EA['a'][x6(0x42c)](x6(0x46e));
                            }
                        }
                    }
                },
                'methods': {
                    'handleClickImageColorItem'(lm) {
                        const x7 = dC, lH = this[x7(0x478)][x7(0x26d)](lm), lQ = [...this[x7(0x478)]];
                        if (-0x1 === lH) {
                            if (this['selectedImageColorIndex']['length'] >= this[x7(0x4f9)])
                                return void EA['a'][x7(0x42c)](x7(0x1f5) + this[x7(0x4f9)] + '\x20colors.');
                            lQ['push'](lm);
                        } else
                            lQ[x7(0x218)](lH, 0x1);
                        this[x7(0x478)] = lQ;
                    }
                }
            }, B4 = B3, B5 = (t2(dC(0x3d4)), Object(Ed['a'])(B4, oT, oM, !0x1, null, null, null)), B6 = B5[dC(0x248)], B7 = {
                'data'() {
                    return {
                        'showColorsStore': !0x1,
                        'colorStore': oN,
                        'cardSize': 0xc8,
                        'colors': [],
                        'showButtons': !0x1,
                        'showImageExtractor': !0x1,
                        'selectedImageColors': [],
                        'over': !0x1
                    };
                },
                'components': { 'ImageColorPicker': B6 },
                'methods': {
                    'handleDragover'(lm) {
                        const x8 = dC;
                        lm[x8(0x3dd)](), lm[x8(0x2fc)][x8(0x143)] = x8(0x48a), this[x8(0xa3)] = !0x0;
                    },
                    'handleDrop'(lm) {
                        const x9 = dC, lH = lm[x9(0x2fc)]['getData']('drag-color'), {value: lQ} = JSON[x9(0x311)](lH);
                        this[x9(0x306)]([lQ]), this[x9(0xa3)] = !0x1;
                    },
                    'handleAddImageColors'() {
                        const xt = dC, lm = [...this[xt(0x3c5)]];
                        this[xt(0x306)](lm), this[xt(0x33c)]();
                    },
                    'handleCloseImageColorPicker'() {
                        const xE = dC;
                        this[xE(0x226)] = !0x1, this[xE(0x3c5)] = [];
                    },
                    'handleAddColors'(lm) {
                        const xw = dC;
                        if (0x0 === lm['length'])
                            return;
                        const lH = new Set(this[xw(0x17a)]), lQ = lm['filter'](ly => !lH[xw(0xed)](ly));
                        lm['length'] !== lQ[xw(0xa9)] && EA['a'][xw(0x2be)](xw(0x13a)), this['colors']['push'](...lQ), this[xw(0x2d1)] = !0x1;
                    },
                    'handleDeleteColor'(lm) {
                        const xh = dC;
                        this[xh(0x17a)][xh(0x218)](lm, 0x1);
                    },
                    'handleDragStart'(lm, lH) {
                        const xo = dC, lQ = JSON[xo(0xca)]({ 'value': lH });
                        lm[xo(0x2fc)]['setData'](xo(0x285), lQ);
                    }
                }
            }, B8 = B7, B9 = (t2(dC(0x4de)), Object(Ed['a'])(B8, oZ, ob, !0x1, null, null, null)), Bt = B9['exports'], BE = function () {
                const xB = dC;
                var lm = this, lH = lm[xB(0x1a3)]['_c'];
                return lH(xB(0x197), {
                    'staticClass': 'color-field',
                    'style': { 'background': lm[xB(0xa3)] ? xB(0x130) : xB(0x36d) },
                    'attrs': { 'draggable': '' },
                    'on': {
                        'dragover': lm[xB(0x3ff)],
                        'drop': lm['handleDrop'],
                        'dragleave': function (lQ) {
                            lm['over'] = !0x1;
                        },
                        'dragstart': lm[xB(0x43e)]
                    }
                }, [lH(xB(0x452), { 'attrs': { 'name': lm[xB(0x34e)] } }, [lH('el-color-picker', {
                            'attrs': {
                                'size': xB(0x448),
                                'predefine': lm['predefineColors']
                            },
                            'model': {
                                'value': lm[xB(0xe0)],
                                'callback': function (lQ) {
                                    const xl = xB;
                                    lm[xl(0xe0)] = lQ;
                                },
                                'expression': 'color'
                            }
                        })], 0x1)], 0x1);
            }, Bw = [], Bh = {
                'props': {
                    'name': String,
                    'value': String,
                    'colorKey': String
                },
                'components': { 'Field': hS },
                'data'() {
                    const xd = dC;
                    return {
                        'over': !0x1,
                        'predefineColors': [
                            xd(0x32f),
                            xd(0x1e0),
                            xd(0x39b),
                            xd(0x10c),
                            xd(0x181),
                            xd(0x465),
                            xd(0x2c2)
                        ]
                    };
                },
                'computed': {
                    'color': {
                        'get'() {
                            const xL = dC;
                            return this[xL(0x3ad)];
                        },
                        'set'(lm) {
                            const xG = dC;
                            this[xG(0x254)]('input', lm);
                        }
                    }
                },
                'methods': {
                    'handleDragStart'(lm) {
                        const xx = dC, lH = JSON[xx(0xca)]({
                                'value': this[xx(0x3ad)],
                                'key': this[xx(0x4e6)]
                            });
                        lm[xx(0x2fc)][xx(0x489)](xx(0x285), lH);
                    },
                    'handleDragover'(lm) {
                        const xJ = dC;
                        lm[xJ(0x3dd)](), lm[xJ(0x2fc)][xJ(0x143)] = 'move', this[xJ(0xa3)] = !0x0;
                    },
                    'handleDrop'(lm) {
                        const xi = dC, lH = lm[xi(0x2fc)][xi(0x1f1)]('drag-color'), {
                                value: lQ,
                                key: ly
                            } = JSON[xi(0x311)](lH);
                        this['$emit'](xi(0x45b), lQ), this['over'] = !0x1, ly && this['$emit'](xi(0x141), {
                            'key': ly,
                            'value': this['value']
                        });
                    }
                }
            }, BB = Bh, Bl = (t2('f36a'), Object(Ed['a'])(BB, BE, Bw, !0x1, null, null, null)), Bd = Bl[dC(0x248)], BL = {
                'name': 'attribute-tree',
                'components': {
                    'Field': hS,
                    'Group': hM,
                    'ImagePicker': o9,
                    'InputNumber': ol,
                    'Collapse': oF,
                    'SymbolInput': oR,
                    'ColorPalette': Bt,
                    'ColorField': Bd
                },
                'props': {
                    'options': Object,
                    'values': Object
                },
                'computed': {
                    'value': {
                        'get'() {
                            const xF = dC, {key: lm} = this[xF(0x171)];
                            if (lm)
                                return w1(this[xF(0x346)], lm);
                        },
                        'set'(lm) {
                            const xW = dC, {
                                    key: lH,
                                    relations: lQ = []
                                } = this[xW(0x171)];
                            if (lH) {
                                this[xW(0xc2)]({
                                    'key': lH,
                                    'value': lm
                                });
                                for (const {
                                            trigger: ly,
                                            actions: lc
                                        } of lQ)
                                    if (ly === lm)
                                        for (const {
                                                    key: lA,
                                                    value: lP,
                                                    force: lv
                                                } of lc) {
                                            const lf = w1(this[xW(0x346)], lA);
                                            (void 0x0 === lf || lv) && this[xW(0xc2)]({
                                                'key': lA,
                                                'value': lP
                                            });
                                        }
                            }
                        }
                    }
                },
                'methods': {
                    'handleUpdate'(lm) {
                        this['$emit']('update', lm);
                    }
                }
            }, BG = BL, Bx = (t2(dC(0x34c)), Object(Ed['a'])(BG, hu, hz, !0x1, null, null, null)), BJ = Bx[dC(0x248)];
        function BF() {
            const xC = dC;
            return [
                {
                    'type': xC(0xe0),
                    'key': xC(0xe0),
                    'name': xC(0x4b0),
                    'defaultValue': xC(0x177)
                },
                {
                    'type': xC(0xe0),
                    'key': xC(0x212),
                    'name': xC(0x47d),
                    'defaultValue': '#89E089'
                },
                {
                    'type': xC(0x3d6),
                    'key': 'lineWidth',
                    'name': '线宽',
                    'defaultValue': 0x1,
                    'min': 0x1
                },
                {
                    'type': xC(0x3d6),
                    'key': 'width',
                    'name': xC(0xc8),
                    'min': 0xa,
                    'defaultValue': 0x32
                },
                {
                    'type': 'number',
                    'key': xC(0xee),
                    'name': '旋转角度',
                    'defaultValue': 0x0
                }
            ];
        }
        function BW() {
            const xm = dC;
            return [
                {
                    'type': xm(0xe0),
                    'key': xm(0xe0),
                    'name': xm(0x4b0),
                    'defaultValue': '#000'
                },
                {
                    'type': xm(0xe0),
                    'key': xm(0x305),
                    'name': xm(0x46c),
                    'defaultValue': xm(0x177)
                },
                {
                    'type': xm(0x3d6),
                    'key': 'size',
                    'name': '大小',
                    'defaultValue': 0x32,
                    'min': 0x0
                },
                {
                    'type': xm(0xe0),
                    'key': 'strokeColor',
                    'name': '半径',
                    'defaultValue': xm(0x177)
                },
                {
                    'type': xm(0x3d6),
                    'key': xm(0x35e),
                    'name': '线宽',
                    'defaultValue': 0x0,
                    'min': 0x1
                },
                {
                    'type': xm(0x3d6),
                    'key': xm(0xb1),
                    'name': xm(0x23f),
                    'min': 0xa,
                    'defaultValue': 0x6e
                },
                {
                    'type': 'number',
                    'key': xm(0xab),
                    'name': xm(0x160),
                    'min': 0xa,
                    'defaultValue': 0x6e
                },
                {
                    'type': xm(0x3d6),
                    'key': xm(0xee),
                    'name': '旋转',
                    'defaultValue': 0x0
                }
            ];
        }
        function BC() {
            const xH = dC;
            return [
                {
                    'type': xH(0xe0),
                    'key': xH(0xe0),
                    'name': xH(0x4b0),
                    'defaultValue': xH(0x177)
                },
                {
                    'type': xH(0xe0),
                    'key': xH(0x212),
                    'name': xH(0x47d),
                    'defaultValue': xH(0x4a8)
                },
                {
                    'type': xH(0x3d6),
                    'key': xH(0x35e),
                    'name': '线宽',
                    'defaultValue': 0x1e,
                    'min': 0x0
                },
                {
                    'type': 'number',
                    'key': xH(0xb1),
                    'name': xH(0x23f),
                    'min': 0xa,
                    'defaultValue': 0x82
                },
                {
                    'type': xH(0x3d6),
                    'key': xH(0xab),
                    'name': xH(0x160),
                    'min': 0xa,
                    'defaultValue': 0x82
                },
                {
                    'type': 'number',
                    'key': 'arcRadius',
                    'name': '弧径',
                    'defaultValue': 0x1e
                },
                {
                    'type': xH(0x3d6),
                    'key': xH(0xee),
                    'name': '旋转',
                    'defaultValue': 0x0
                }
            ];
        }
        function Bm() {
            const xQ = dC;
            return [
                {
                    'type': xQ(0xe0),
                    'key': xQ(0xe0),
                    'name': xQ(0x4b0),
                    'defaultValue': xQ(0x177)
                },
                {
                    'type': xQ(0xe0),
                    'key': xQ(0x305),
                    'name': xQ(0x46c),
                    'defaultValue': xQ(0x177)
                },
                {
                    'type': xQ(0x3d6),
                    'key': 'size',
                    'name': '大小',
                    'defaultValue': 0x14,
                    'min': 0x0
                },
                {
                    'type': 'color',
                    'key': xQ(0x114),
                    'name': '半径',
                    'defaultValue': '#000'
                },
                {
                    'type': xQ(0x3d6),
                    'key': 'lineWidth',
                    'name': '线宽',
                    'defaultValue': 0x0,
                    'min': 0x0
                },
                {
                    'type': xQ(0x3d6),
                    'key': 'width',
                    'name': 'X轴间隔',
                    'min': 0xa,
                    'defaultValue': 0x28
                },
                {
                    'type': 'number',
                    'key': xQ(0xab),
                    'name': xQ(0x160),
                    'min': 0xa,
                    'defaultValue': 0x28
                },
                {
                    'type': xQ(0x3d6),
                    'key': 'rotation',
                    'name': '旋转',
                    'defaultValue': 0x0
                },
                {
                    'type': xQ(0x9f),
                    'key': xQ(0x249),
                    'name': '交错',
                    'defaultValue': !0x0
                }
            ];
        }
        const BH = {
            'line': BF,
            'dot': BW,
            'wave': BC,
            'square': Bm
        };
        function BQ(lm, lH) {
            const xy = dC, lQ = w1(lm, lH + xy(0x23e)), ly = BH[lQ] || BF;
            return ly(lm)[xy(0xa0)](({
                key: lc,
                ...lA
            }) => ({
                'key': lH + '.' + lc,
                ...lA
            }));
        }
        function By(lm, lH) {
            const xe = dC, lQ = BQ(lm, lH);
            return lQ[xe(0x219)](ly => xe(0xe0) !== ly[xe(0x1c7)]);
        }
        function Bc(lm, lH, lQ) {
            const xc = dC, ly = BQ(lm, lH);
            return ly[xc(0x219)](lc => 'color' === lc[xc(0x1c7)])[xc(0xa0)](({
                name: lc,
                ...lA
            }) => ({
                'name': lQ + xc(0x150) + lc,
                ...lA
            }));
        }
        function BA(lm, lH) {
            const xA = dC;
            return Object[xA(0x3f5)](BH)['map'](([lQ, ly]) => ({
                'trigger': lQ,
                'actions': ly(lm)[xA(0xa0)](({
                    key: lc,
                    defaultValue: lA
                }) => ({
                    'key': lH + '.' + lc,
                    'value': lA
                }))
            }));
        }
        var BP = function (lm) {
                const xP = dC;
                if (xP(0x159) != typeof lm)
                    return !0x1;
                var lH = xP(0xf9);
                if (lm[xP(0x12c)]() == lH['toLowerCase']())
                    return !0x0;
                var lQ = 'a', ly = 0x64, lc = 0x64, lA = 0x64, lP = document['createElement'](xP(0x464)), lv = lP['getContext']('2d');
                lP[xP(0xb1)] = lc, lP[xP(0xab)] = lA, lv[xP(0x1f8)] = xP(0x4f8), lv[xP(0x459)] = xP(0x3e2), lv[xP(0x360)] = xP(0x2e0);
                var lf = function (lq) {
                    const xv = xP;
                    lv[xv(0x19a)](0x0, 0x0, lc, lA), lv[xv(0x3fc)] = ly + 'px\x20' + lq + ',\x20' + lH, lv[xv(0x25c)](lQ, lc / 0x2, lA / 0x2);
                    var la = lv[xv(0x98)](0x0, 0x0, lc, lA)[xv(0x25d)];
                    return [][xv(0x19d)][xv(0x278)](la)[xv(0x219)](function (lY) {
                        return 0x0 != lY;
                    });
                };
                return lf(lH)[xP(0x2f7)]('') !== lf(lm)[xP(0x2f7)]('');
            }, Bv = {
                'windows': [
                    {
                        'ch': '宋体',
                        'en': dC(0x290)
                    },
                    {
                        'ch': '黑体',
                        'en': dC(0x1ec)
                    },
                    {
                        'ch': dC(0x252),
                        'en': 'Microsoft\x20Yahei'
                    },
                    {
                        'ch': dC(0x3f1),
                        'en': dC(0x33d)
                    },
                    {
                        'ch': '楷体',
                        'en': 'KaiTi'
                    },
                    {
                        'ch': dC(0x4c0),
                        'en': dC(0x42f)
                    },
                    {
                        'ch': '仿宋',
                        'en': dC(0x1a1)
                    }
                ],
                'OS\x20X': [
                    {
                        'ch': '苹方',
                        'en': dC(0x175)
                    },
                    {
                        'ch': dC(0x2db),
                        'en': dC(0x3f9)
                    },
                    {
                        'ch': dC(0x210),
                        'en': dC(0x456)
                    },
                    {
                        'ch': dC(0x49f),
                        'en': dC(0x1c0)
                    },
                    {
                        'ch': dC(0x44b),
                        'en': dC(0x312)
                    },
                    {
                        'ch': dC(0x490),
                        'en': dC(0x1a2)
                    },
                    {
                        'ch': dC(0x429),
                        'en': dC(0x3f7)
                    },
                    {
                        'ch': dC(0x4a0),
                        'en': dC(0x4b1)
                    },
                    {
                        'ch': dC(0x277),
                        'en': 'STLiti'
                    },
                    {
                        'ch': dC(0x4a5),
                        'en': dC(0xe4)
                    },
                    {
                        'ch': dC(0x49c),
                        'en': 'Hiragino\x20Sans\x20GB'
                    },
                    {
                        'ch': '兰亭黑-简',
                        'en': dC(0x370)
                    },
                    {
                        'ch': dC(0x44d),
                        'en': dC(0xd5)
                    },
                    {
                        'ch': dC(0x198),
                        'en': 'Hannotate\x20SC'
                    },
                    {
                        'ch': '宋体-简',
                        'en': dC(0x170)
                    },
                    {
                        'ch': dC(0xb3),
                        'en': dC(0x100)
                    },
                    {
                        'ch': dC(0x236),
                        'en': dC(0x211)
                    },
                    {
                        'ch': '行楷-简',
                        'en': dC(0x1bc)
                    },
                    {
                        'ch': dC(0x34d),
                        'en': dC(0x2c6)
                    },
                    {
                        'ch': dC(0x3dc),
                        'en': dC(0x1b2)
                    }
                ],
                'office': [
                    {
                        'ch': '幼圆',
                        'en': dC(0x334)
                    },
                    {
                        'ch': '隶书',
                        'en': 'LiSu'
                    },
                    {
                        'ch': dC(0x446),
                        'en': dC(0x112)
                    },
                    {
                        'ch': dC(0x210),
                        'en': 'STKaiti'
                    },
                    {
                        'ch': dC(0x49f),
                        'en': dC(0x1c0)
                    },
                    {
                        'ch': dC(0x44b),
                        'en': dC(0x312)
                    },
                    {
                        'ch': '华文中宋',
                        'en': dC(0x1a2)
                    },
                    {
                        'ch': dC(0x105),
                        'en': dC(0x376)
                    },
                    {
                        'ch': dC(0x429),
                        'en': dC(0x3f7)
                    },
                    {
                        'ch': dC(0x4a0),
                        'en': 'STXinwei'
                    },
                    {
                        'ch': dC(0x277),
                        'en': 'STLiti'
                    },
                    {
                        'ch': '华文行楷',
                        'en': 'STXingkai'
                    },
                    {
                        'ch': dC(0x364),
                        'en': dC(0x4c3)
                    },
                    {
                        'ch': dC(0x2ca),
                        'en': dC(0x1ef)
                    }
                ],
                'open': [
                    {
                        'ch': '思源黑体',
                        'en': dC(0x2fb)
                    },
                    {
                        'ch': dC(0xbf),
                        'en': dC(0x304)
                    },
                    {
                        'ch': dC(0x19f),
                        'en': 'WenQuanYi\x20Micro\x20Hei'
                    }
                ],
                'hanyi': [
                    {
                        'ch': dC(0x16a),
                        'en': 'HYQihei\x2040S'
                    },
                    {
                        'ch': dC(0x263),
                        'en': dC(0x229)
                    },
                    {
                        'ch': dC(0x361),
                        'en': dC(0x95)
                    },
                    {
                        'ch': '汉仪大宋简',
                        'en': dC(0x222)
                    },
                    {
                        'ch': '汉仪楷体',
                        'en': dC(0x16e)
                    },
                    {
                        'ch': dC(0x35f),
                        'en': 'HYJiaShuJ'
                    },
                    {
                        'ch': dC(0x200),
                        'en': dC(0x412)
                    },
                    {
                        'ch': dC(0x4ca),
                        'en': dC(0x2a3)
                    },
                    {
                        'ch': dC(0x2d8),
                        'en': dC(0x385)
                    },
                    {
                        'ch': '汉仪程行体',
                        'en': dC(0x1dc)
                    },
                    {
                        'ch': dC(0x29f),
                        'en': dC(0x300)
                    },
                    {
                        'ch': dC(0x342),
                        'en': dC(0x1f0)
                    },
                    {
                        'ch': dC(0x223),
                        'en': dC(0x138)
                    },
                    {
                        'ch': dC(0x28c),
                        'en': dC(0x274)
                    }
                ],
                'fangzheng': [
                    {
                        'ch': dC(0xdb),
                        'en': dC(0x207)
                    },
                    {
                        'ch': dC(0x37f),
                        'en': dC(0xae)
                    },
                    {
                        'ch': '方正粗圆简体',
                        'en': dC(0x320)
                    },
                    {
                        'ch': dC(0x29b),
                        'en': 'FZDaBiaoSong-B06S'
                    },
                    {
                        'ch': dC(0x2f2),
                        'en': dC(0x20a)
                    },
                    {
                        'ch': dC(0x363),
                        'en': dC(0x22d)
                    },
                    {
                        'ch': '方正黑体简体',
                        'en': dC(0x1df)
                    },
                    {
                        'ch': dC(0x43d),
                        'en': 'FZHuPo-M04S'
                    },
                    {
                        'ch': dC(0x433),
                        'en': 'FZKai-Z03S'
                    },
                    {
                        'ch': dC(0x36e),
                        'en': dC(0x337)
                    },
                    {
                        'ch': dC(0x162),
                        'en': dC(0x1b0)
                    },
                    {
                        'ch': '方正美黑简体',
                        'en': dC(0x375)
                    },
                    {
                        'ch': dC(0x431),
                        'en': 'FZShuSong-Z01S'
                    },
                    {
                        'ch': dC(0x124),
                        'en': dC(0x38f)
                    },
                    {
                        'ch': dC(0x180),
                        'en': dC(0x373)
                    },
                    {
                        'ch': dC(0x40e),
                        'en': dC(0xd3)
                    },
                    {
                        'ch': '方正宋三简体',
                        'en': 'FZSong'
                    },
                    {
                        'ch': dC(0x33b),
                        'en': dC(0x271)
                    },
                    {
                        'ch': dC(0x4fc),
                        'en': dC(0x420)
                    },
                    {
                        'ch': dC(0x27e),
                        'en': dC(0x4f2)
                    },
                    {
                        'ch': '方正细圆简体',
                        'en': dC(0x27f)
                    },
                    {
                        'ch': '方正小标宋简体',
                        'en': dC(0x41c)
                    },
                    {
                        'ch': dC(0x2da),
                        'en': dC(0x99)
                    },
                    {
                        'ch': dC(0x2ac),
                        'en': dC(0x302)
                    },
                    {
                        'ch': dC(0x353),
                        'en': dC(0x3a5)
                    },
                    {
                        'ch': dC(0x26c),
                        'en': dC(0x3d3)
                    },
                    {
                        'ch': dC(0x36c),
                        'en': dC(0x486)
                    },
                    {
                        'ch': dC(0x1f6),
                        'en': 'FZCaiYun-M09S'
                    },
                    {
                        'ch': dC(0x245),
                        'en': dC(0x48e)
                    },
                    {
                        'ch': '方正康体简体',
                        'en': 'FZKangTi-S07S'
                    },
                    {
                        'ch': dC(0x42d),
                        'en': dC(0x2ff)
                    },
                    {
                        'ch': '方正新报宋简体',
                        'en': 'FZNew\x20BaoSong-Z12S'
                    },
                    {
                        'ch': dC(0xf6),
                        'en': dC(0x42e)
                    },
                    {
                        'ch': dC(0x2f4),
                        'en': dC(0x2ce)
                    },
                    {
                        'ch': dC(0x115),
                        'en': dC(0x3b3)
                    },
                    {
                        'ch': dC(0x1a6),
                        'en': 'FZZhiYi-M12S'
                    },
                    {
                        'ch': dC(0x40a),
                        'en': 'FZXiShanHu-M13S'
                    },
                    {
                        'ch': dC(0x392),
                        'en': 'FZCuSong-B09S'
                    },
                    {
                        'ch': '方正平和简体',
                        'en': dC(0x1fa)
                    },
                    {
                        'ch': dC(0x447),
                        'en': dC(0x258)
                    },
                    {
                        'ch': dC(0x109),
                        'en': 'FZShouJinShu-S10S'
                    },
                    {
                        'ch': dC(0x163),
                        'en': dC(0xe3)
                    },
                    {
                        'ch': dC(0x4d5),
                        'en': dC(0x36b)
                    },
                    {
                        'ch': dC(0x168),
                        'en': dC(0x327)
                    },
                    {
                        'ch': dC(0x2f9),
                        'en': dC(0xe9)
                    },
                    {
                        'ch': dC(0x36a),
                        'en': dC(0x318)
                    },
                    {
                        'ch': dC(0x3ca),
                        'en': dC(0x284)
                    },
                    {
                        'ch': dC(0x1d6),
                        'en': 'FZLiuXingTi-M26S'
                    },
                    {
                        'ch': dC(0x1e2),
                        'en': dC(0x22b)
                    },
                    {
                        'ch': dC(0x18d),
                        'en': dC(0x4b6)
                    },
                    {
                        'ch': dC(0xf0),
                        'en': dC(0x244)
                    },
                    {
                        'ch': dC(0x214),
                        'en': 'FZKaTong-M19S'
                    },
                    {
                        'ch': '方正艺黑简体',
                        'en': dC(0x450)
                    },
                    {
                        'ch': '方正水黑简体',
                        'en': dC(0x2ec)
                    },
                    {
                        'ch': dC(0x273),
                        'en': dC(0xfa)
                    },
                    {
                        'ch': dC(0x106),
                        'en': 'FZYouXian-Z09S'
                    },
                    {
                        'ch': dC(0x32c),
                        'en': dC(0x461)
                    },
                    {
                        'ch': dC(0x468),
                        'en': dC(0x224)
                    },
                    {
                        'ch': dC(0x4da),
                        'en': dC(0x4c1)
                    },
                    {
                        'ch': dC(0x4dd),
                        'en': 'FZZhanBiHei-M22S'
                    },
                    {
                        'ch': dC(0x49e),
                        'en': dC(0x1d5)
                    }
                ]
            };
        const Bf = [];
        for (var Bq in Bv)
            Bv[Bq][dC(0x42a)](lm => {
                BP(lm['en']) && Bf['push'](lm);
            });
        const Ba = Array[dC(0x1e8)](new Set(Bf['map'](lm => lm['en']))), BY = Ba[dC(0xa0)](lm => ({
                'name': lm,
                'fontURL': void 0x0
            }));
        var Bk = t2(dC(0x2c8)), BV = t2['n'](Bk);
        const BX = [{
                'name': dC(0x151),
                'fontURL': BV['a'],
                'type': 'en'
            }];
        function Bg(lm) {
            const xf = dC;
            return {
                'value': lm[xf(0x34e)],
                'label': lm['name'] + (lm[xf(0x1c7)] ? '\x20(' + lm['type'] + ')' : ''),
                'template': xf(0x4bb) + lm['name'] + '\x22>' + lm[xf(0x34e)] + xf(0x13c),
                'url': lm['fontURL']
            };
        }
        function Bj(lm) {
            const xq = dC;
            return [
                {
                    'type': xq(0x161),
                    'key': xq(0x182),
                    'name': '内容',
                    'placeholder': 'Please\x20input\x20title'
                },
                {
                    'name': '字体',
                    'type': xq(0x4e8),
                    'defaultOpen': !0x1,
                    'children': [
                        {
                            'type': xq(0x1f9),
                            'key': xq(0x1ff),
                            'name': xq(0x2d3),
                            'groups': [
                                {
                                    'label': xq(0x2b9),
                                    'options': BX[xq(0xa0)](Bg)
                                },
                                {
                                    'label': xq(0x1bd),
                                    'options': BY[xq(0xa0)](Bg)
                                }
                            ],
                            'relations': [
                                ...BX,
                                ...BY
                            ][xq(0xa0)](lH => ({
                                'trigger': lH[xq(0x34e)],
                                'actions': [{
                                        'key': xq(0x11b),
                                        'value': lH['fontURL'],
                                        'force': !0x0
                                    }]
                            }))
                        },
                        {
                            'type': xq(0x4a9),
                            'key': xq(0x40c),
                            'name': '尺寸',
                            'options': [
                                {
                                    'value': xq(0x399),
                                    'label': '正常'
                                },
                                {
                                    'value': 'autoFit',
                                    'label': '自适应'
                                },
                                {
                                    'value': xq(0x41a),
                                    'label': xq(0x2e5)
                                }
                            ],
                            'relations': [
                                {
                                    'trigger': xq(0x399),
                                    'actions': [{
                                            'key': xq(0x3b6),
                                            'value': 0xc8
                                        }]
                                },
                                {
                                    'trigger': xq(0x2ab),
                                    'actions': [
                                        {
                                            'key': xq(0x11d),
                                            'value': 0x0
                                        },
                                        {
                                            'key': xq(0x3e9),
                                            'value': 0x0
                                        }
                                    ]
                                },
                                {
                                    'trigger': xq(0x41a),
                                    'actions': [
                                        {
                                            'key': xq(0x3b6),
                                            'value': 0xc8
                                        },
                                        {
                                            'key': 'text.padding',
                                            'value': 0x32
                                        },
                                        {
                                            'key': xq(0x3e9),
                                            'value': 0x0
                                        }
                                    ]
                                }
                            ]
                        },
                        ...BD(lm)
                    ]
                },
                {
                    'type': xq(0x4e8),
                    'name': '样式',
                    'defaultOpen': !0x1,
                    'children': [
                        {
                            'type': 'select',
                            'key': xq(0x21d),
                            'name': '类型',
                            'options': [
                                {
                                    'value': xq(0x399),
                                    'label': '无'
                                },
                                {
                                    'value': 'line',
                                    'label': '线条'
                                },
                                {
                                    'value': xq(0x20d),
                                    'label': '圆点'
                                },
                                {
                                    'value': xq(0x3b5),
                                    'label': '波浪'
                                },
                                {
                                    'value': xq(0x4cb),
                                    'label': '方块'
                                }
                            ],
                            'relations': BA(lm, xq(0x454))
                        },
                        ...Bu(lm)
                    ]
                }
            ];
        }
        function BD(lm) {
            const xa = dC, lH = w1(lm, xa(0x40c)), lQ = {
                    'type': xa(0x3d6),
                    'key': 'text.fontSize',
                    'name': xa(0x2fd),
                    'min': 0x32
                }, ly = {
                    'type': xa(0x3d6),
                    'key': 'text.padding',
                    'name': '缩放',
                    'min': 0x0
                }, lc = {
                    'type': xa(0x3d6),
                    'key': xa(0x3e9),
                    'name': xa(0x32a)
                };
            return xa(0x399) === lH ? [
                lQ,
                lc
            ] : xa(0x2ab) === lH ? [
                ly,
                lc
            ] : 'constrain' === lH ? [
                lQ,
                ly,
                lc
            ] : void 0x0;
        }
        function Bu(lm) {
            const xY = dC, lH = w1(lm, xY(0x21d));
            return lH && xY(0x399) !== lH ? By(lm, 'text') : [];
        }
        var Bz = t2(dC(0x190)), BR = t2['n'](Bz);
        const BZ = BR['a'];
        function Bb(lm) {
            const xn = dC;
            return [
                {
                    'type': 'radio',
                    'key': 'background.mode',
                    'name': '类型',
                    'options': [
                        {
                            'value': 'image',
                            'label': '图片'
                        },
                        {
                            'value': 'pattern',
                            'label': '默认'
                        }
                    ],
                    'relations': [
                        {
                            'trigger': xn(0x19c),
                            'actions': [{
                                    'key': xn(0x241),
                                    'value': BZ
                                }]
                        },
                        {
                            'trigger': xn(0x46d),
                            'actions': [
                                {
                                    'key': xn(0x301),
                                    'value': xn(0x399)
                                },
                                {
                                    'key': 'background.color',
                                    'value': '#000000'
                                }
                            ]
                        }
                    ]
                },
                ...BK(lm)
            ];
        }
        function BK(lm) {
            const xk = dC, lH = w1(lm, xk(0xde));
            return 'image' === lH ? [{
                    'type': xk(0x19c),
                    'key': xk(0x241),
                    'name': xk(0x30b)
                }] : [{
                    'type': 'collapse',
                    'name': '样式',
                    'defaultOpen': !0x1,
                    'children': [
                        {
                            'type': xk(0x4a9),
                            'key': xk(0x301),
                            'name': '类型',
                            'options': [
                                {
                                    'value': 'none',
                                    'label': '无'
                                },
                                {
                                    'value': xk(0x3a8),
                                    'label': '线条'
                                },
                                {
                                    'value': xk(0x20d),
                                    'label': '圆点'
                                },
                                {
                                    'value': xk(0x3b5),
                                    'label': '波浪'
                                },
                                {
                                    'value': xk(0x4cb),
                                    'label': '方块'
                                }
                            ],
                            'relations': [
                                {
                                    'trigger': xk(0x399),
                                    'actions': [{
                                            'key': xk(0x2f3),
                                            'value': '#000000'
                                        }]
                                },
                                ...BA(lm, xk(0x38b))
                            ]
                        },
                        ...Bp(lm)
                    ]
                }];
        }
        function Bp(lm) {
            const xV = dC, lH = w1(lm, xV(0x301));
            return lH && 'none' !== lH ? By(lm, xV(0x38b)) : [];
        }
        function BS(lm) {
            return [
                ...BI(lm),
                ...BO(lm)
            ];
        }
        function BI(lm) {
            const xX = dC, lH = w1(lm, xX(0x21d));
            return lH && xX(0x399) !== lH ? Bc(lm, xX(0x454), '字体') : [{
                    'type': xX(0xe0),
                    'key': xX(0xa6),
                    'name': xX(0x463)
                }];
        }
        function BO(lm) {
            const xg = dC, lH = w1(lm, xg(0xde)), lQ = w1(lm, xg(0x301));
            return xg(0x19c) === lH ? [] : lQ && xg(0x399) !== lQ ? Bc(lm, xg(0x38b), '背景') : [{
                    'type': 'color',
                    'key': xg(0x2f3),
                    'name': xg(0x4b0)
                }];
        }
        function BU(lm) {
            const xj = dC;
            return {
                'type': xj(0x14c),
                'children': [
                    {
                        'type': xj(0xb2),
                        'name': xj(0x107),
                        'help': xj(0x393),
                        'children': [
                            {
                                'type': xj(0x4e8),
                                'name': '调色板',
                                'defaultOpen': !0x0,
                                'indent': !0x1,
                                'children': [{ 'type': xj(0x3c4) }]
                            },
                            ...BS(lm)
                        ]
                    },
                    {
                        'type': xj(0xb2),
                        'name': xj(0x128),
                        'children': Bj(lm)
                    },
                    {
                        'type': xj(0xb2),
                        'name': xj(0xb4),
                        'children': Bb(lm)
                    }
                ]
            };
        }
        const BN = () => ({
            'data'() {
                return { 'fullscreen': !0x1 };
            },
            'mounted'() {
                const xD = dC;
                document['addEventListener'](xD(0x2e1), this[xD(0x134)]);
            },
            'destroyed'() {
                const xu = dC;
                document[xu(0x3a2)](xu(0x2e1), this[xu(0x134)]);
            },
            'methods': {
                'handleFullscreenChange'() {
                    const xz = dC;
                    this['fullscreen'] = !!document[xz(0x43b)];
                }
            }
        });
        var BT = {
                'components': {
                    'Wallpaper': w6,
                    'AttributeTree': BJ
                },
                'name': 'editor',
                'data'() {
                    const xR = dC, lm = localStorage[xR(0x191)](xR(0x22f)), lH = localStorage[xR(0x191)](xR(0x371));
                    return {
                        'example': lm ? JSON[xR(0x311)](lm) : wa,
                        'activeDevice': 'pc' === lH ? 0x1 : 0x7,
                        'customWidth': screen[xR(0xb1)],
                        'customHeight': screen['height'],
                        'rotate': !0x1,
                        'devices': [
                            { 'name': xR(0x270) },
                            {
                                'name': 'PC',
                                'width': screen[xR(0xb1)],
                                'height': screen['height'],
                                'divided': !0x0
                            },
                            {
                                'name': 'Moto\x20G4',
                                'width': 0x168,
                                'height': 0x280,
                                'divided': !0x0
                            },
                            {
                                'name': xR(0xfd),
                                'width': 0x168,
                                'height': 0x280
                            },
                            {
                                'name': xR(0x135),
                                'width': 0x19b,
                                'height': 0x2db
                            },
                            {
                                'name': 'Pixel\x202\x20XL',
                                'width': 0x19b,
                                'height': 0x337
                            },
                            {
                                'name': xR(0x101),
                                'width': 0x140,
                                'height': 0x238
                            },
                            {
                                'name': xR(0x2f5),
                                'width': 0x177,
                                'height': 0x29b
                            },
                            {
                                'name': xR(0x275),
                                'width': 0x19e,
                                'height': 0x2e0
                            },
                            {
                                'name': xR(0x333),
                                'width': 0x177,
                                'height': 0x32c
                            },
                            {
                                'name': xR(0xd8),
                                'width': 0x300,
                                'height': 0x400
                            },
                            {
                                'name': xR(0x122),
                                'width': 0x400,
                                'height': 0x556
                            },
                            {
                                'name': xR(0x4e7),
                                'width': 0x21c,
                                'height': 0x2d0
                            },
                            {
                                'name': xR(0xe1),
                                'width': 0x118,
                                'height': 0x28d
                            },
                            {
                                'name': xR(0x36f),
                                'width': 0x400,
                                'height': 0x258
                            },
                            {
                                'name': xR(0x39e),
                                'width': 0x500,
                                'height': 0x320
                            }
                        ]
                    };
                },
                'mixins': [
                    wJ(),
                    BN(),
                    wF(dC(0x10d))
                ],
                'watch': {
                    'deviceSize'(lm, lH) {
                        const xs = dC, [, lQ] = lH, [, ly] = lm, lc = ly / lQ;
                        this['example'] = hv(this[xs(0x45d)], lc);
                    }
                },
                'computed': {
                    'wallpaperStyles'() {
                        const xZ = dC, {
                                transformed: {
                                    translateX: lm,
                                    translateY: lH,
                                    scale: lQ
                                }
                            } = this;
                        return this['fullscreen'] ? {} : {
                            'transform': xZ(0x195) + lm + xZ(0x1b5) + lH + xZ(0x17f) + lQ + ',\x20' + lQ + ')',
                            'transformOrigin': xZ(0xa7)
                        };
                    },
                    'deviceSize'() {
                        const xb = dC;
                        let lm, lH;
                        if (0x0 === this[xb(0x204)])
                            lm = this['customWidth'], lH = this[xb(0x104)];
                        else {
                            const {
                                width: lQ,
                                height: ly
                            } = this[xb(0x405)][this[xb(0x204)]];
                            lm = lQ, lH = ly;
                        }
                        return this[xb(0x295)] && ([lm, lH] = [
                            lH,
                            lm
                        ]), [
                            lm,
                            lH
                        ];
                    },
                    'attribute'() {
                        const xK = dC;
                        return BU(this[xK(0x45d)]);
                    },
                    'transformed'() {
                        const xp = dC, {
                                previewWidth: lm,
                                previewHeight: lH
                            } = this, [lQ, ly] = this['deviceSize'], lc = 0x32, lA = lm - 0x2 * lc, lP = lH - 0x2 * lc, lv = lP / ly, lf = lA / lQ, lq = Math[xp(0x3a6)](lv, lf, 0x1), la = (lm - lQ * lq) / 0x2, lY = (lH - ly * lq) / 0x2;
                        return {
                            'scale': lq,
                            'translateX': la,
                            'translateY': lY
                        };
                    }
                },
                'methods': {
                    'handleUpdateExample'({
                        key: lm,
                        value: lH
                    }) {
                        const xS = dC;
                        this[xS(0x45d)] = w2(this[xS(0x45d)]), w0(this['example'], lm, lH);
                    },
                    'handleDownloadImage'() {
                        const xI = dC;
                        try {
                            o4(this['canvas'], xI(0x33e));
                        } catch (lm) {
                            EA['a'][xI(0x42c)]({
                                'message': xI(0x32e),
                                'duration': 0x1388
                            }), console['log'](lm);
                        }
                    },
                    'handleDownloadFile'() {
                        const xO = dC;
                        o5(this[xO(0x45d)], xO(0x119));
                    },
                    'handleHelp'() {
                        const xr = dC;
                        this[xr(0x365)][xr(0x4b3)](xr(0x3de));
                    },
                    async 'handlePreview'() {
                        const xU = dC;
                        try {
                            await document[xU(0x4dc)][xU(0x3fd)]();
                        } catch {
                            EA['a'][xU(0x4d8)](xU(0x4e2));
                        }
                    }
                }
            }, BM = BT, l0 = (t2(dC(0x176)), Object(Ed['a'])(BM, hj, hD, !0x1, null, null, null)), l1 = l0[dC(0x248)], l2 = function () {
                const xN = dC;
                var lm = this, lH = lm[xN(0x1a3)]['_c'];
                return lH(xN(0x197), { 'staticClass': xN(0x4c4) }, [
                    lH(xN(0x197), { 'staticClass': 'about-header' }, [
                        lH(xN(0x197), [
                            lH('h1', [lm['_v'](xN(0x13b))]),
                            lH('p', [lm['_v'](xN(0x494))]),
                            lH('p', [lm['_v']('\x20我认为这就是一个很好的例子，人们用文字和颜色来表达自己的情感或想法。\x20')]),
                            lH('p', [lm['_v'](xN(0x34f))]),
                            lH('p', [lm['_v'](xN(0x1a8))]),
                            lH('p', [
                                lH(xN(0x384), {
                                    'model': {
                                        'value': lm[xN(0x299)],
                                        'callback': function (lQ) {
                                            const xT = xN;
                                            lm[xT(0x299)] = lQ;
                                        },
                                        'expression': 'selectedValue'
                                    }
                                }, lm['_l'](lm[xN(0x483)], function (lQ) {
                                    const xM = xN;
                                    return lH(xM(0x24b), {
                                        'key': lQ[xM(0x3ad)],
                                        'attrs': {
                                            'label': lQ[xM(0x286)],
                                            'value': lQ[xM(0x3ad)]
                                        }
                                    });
                                }), 0x1),
                                xN(0xe0) === lm[xN(0x299)] ? lH(xN(0x384), {
                                    'model': {
                                        'value': lm[xN(0xfe)],
                                        'callback': function (lQ) {
                                            lm['selectedMode'] = lQ;
                                        },
                                        'expression': xN(0xfe)
                                    }
                                }, lm['_l'](lm['modes'], function (lQ) {
                                    const J0 = xN;
                                    return lH(J0(0x24b), {
                                        'key': lQ[J0(0x3ad)],
                                        'attrs': {
                                            'label': lQ[J0(0x286)],
                                            'value': lQ[J0(0x3ad)]
                                        }
                                    });
                                }), 0x1) : lm['_e']()
                            ], 0x1)
                        ]),
                        lH(xN(0x449), {
                            'staticClass': xN(0x206),
                            'attrs': {
                                'src': 'https://saoxiaoyu.github.io/picx-images-hosting/FU.b8nczrkeo.avif',
                                'width': '32%'
                            }
                        })
                    ]),
                    lH(xN(0x197), { 'staticClass': xN(0x3c2) }, [
                        xN(0x484) === lm[xN(0x299)] ? lH(xN(0x197), [
                            lH(xN(0x197), { 'staticClass': 'about-emoji-container' }, lm['_l'](lm[xN(0x269)], function (lQ) {
                                const J1 = xN;
                                return lH('span', {
                                    'key': lQ[J1(0x484)],
                                    'on': { 'click': () => lm['handleClickEmoji'](lQ[J1(0x484)]) }
                                }, [lm['_v'](lm['_s'](lQ['emoji']))]);
                            }), 0x0),
                            lH('p', [
                                lm['_v'](xN(0x4fd)),
                                lH(xN(0xc4), {
                                    'attrs': {
                                        'type': xN(0x492),
                                        'href': 'https://github.com/muan/emoji',
                                        'target': xN(0x4a2)
                                    }
                                }, [lm['_v']('muan\x20/\x20emoji')]),
                                lm['_v'](xN(0x1d8))
                            ], 0x1)
                        ]) : lm['_e'](),
                        'emoticon' === lm['selectedValue'] ? lH(xN(0x197), { 'staticStyle': { 'text-align': xN(0x3e6) } }, lm['_l'](lm['faces'], function (lQ) {
                            const J2 = xN;
                            return lH(J2(0x394), {
                                'key': lQ,
                                'staticClass': 'about-emoticon-item',
                                'on': { 'click': () => lm[J2(0x3cd)](lQ) }
                            }, [lm['_v'](lm['_s'](lQ))]);
                        }), 0x0) : lm['_e'](),
                        xN(0xe0) === lm['selectedValue'] && 'store' === lm[xN(0xfe)] ? lH(xN(0x197), lm['_l'](lm[xN(0x19e)], function (lQ) {
                            const J3 = xN;
                            return lH(J3(0x197), {
                                'key': lQ[J3(0x34e)],
                                'staticClass': 'about-color-collection'
                            }, [
                                lH('h2', [lm['_v'](lm['_s'](lQ[J3(0x34e)]))]),
                                lH('p', {
                                    'staticClass': J3(0x3c0),
                                    'domProps': { 'innerHTML': lm['_s'](lQ['des']) }
                                }),
                                lH(J3(0x197), { 'staticClass': J3(0x234) }, lm['_l'](lQ[J3(0x17a)], function (ly) {
                                    const J4 = J3;
                                    return lH(J4(0x197), {
                                        'key': ly[J4(0x34e)],
                                        'staticClass': J4(0x27a)
                                    }, [
                                        lH(J4(0x197), {
                                            'staticClass': 'about-color-item-wrapper',
                                            'style': { 'height': lm[J4(0x2a8)] + 'px' },
                                            'on': { 'click': () => lm[J4(0x12b)](ly[J4(0x34e)] || J4(0x326), ly[J4(0x346)]) }
                                        }, lm['_l'](ly[J4(0x346)], function (lc) {
                                            const J5 = J4;
                                            return lH(J5(0x197), {
                                                'key': lc,
                                                'style': {
                                                    'background': lc,
                                                    'width': '100%',
                                                    'height': lm[J5(0x2a8)] / (ly[J5(0x346)][J5(0xa9)] || 0x1) + 'px'
                                                }
                                            });
                                        }), 0x0),
                                        lH(J4(0x394), { 'staticClass': J4(0x1cc) }, [ly['link'] ? lH(J4(0xc4), {
                                                'attrs': {
                                                    'href': ly[J4(0xea)],
                                                    'target': J4(0x4a2)
                                                }
                                            }, [lm['_v'](lm['_s'](ly[J4(0x34e)] || J4(0x390)))]) : lH(J4(0x394), [lm['_v'](lm['_s'](ly[J4(0x34e)] || 'Learn\x20More'))])], 0x1)
                                    ]);
                                }), 0x0)
                            ]);
                        }), 0x0) : lm['_e'](),
                        xN(0xe0) === lm[xN(0x299)] && xN(0x19c) === lm[xN(0xfe)] ? lH('div', {
                            'staticStyle': {
                                'text-align': xN(0x3e6),
                                'margin-bottom': xN(0xda)
                            }
                        }, [
                            lH(xN(0xf2), {
                                'attrs': { 'maxCount': 0x4 },
                                'model': {
                                    'value': lm[xN(0x3c5)],
                                    'callback': function (lQ) {
                                        lm['selectedImageColors'] = lQ;
                                    },
                                    'expression': xN(0x3c5)
                                }
                            }),
                            lH(xN(0x30f), {
                                'staticClass': xN(0x2cc),
                                'attrs': {
                                    'type': 'primary',
                                    'disabled': 0x0 === lm['selectedImageColors'][xN(0xa9)]
                                },
                                'on': { 'click': () => lm['handleClickColors'](xN(0x326), lm[xN(0x3c5)]) }
                            }, [lm['_v']('制作壁纸')])
                        ], 0x1) : lm['_e'](),
                        xN(0x46d) === lm[xN(0x299)] ? lH(xN(0x197), { 'staticClass': xN(0x314) }, lm['_l'](lm['patterns'], function (lQ) {
                            const J6 = xN;
                            return lH(J6(0x197), {
                                'key': lQ[J6(0x286)],
                                'staticClass': J6(0x3e4),
                                'on': { 'click': () => lm[J6(0x1b1)](lQ[J6(0x286)], lQ[J6(0x1e6)], lQ[J6(0x171)]) }
                            }, [lH(J6(0x20e), {
                                    'attrs': {
                                        'options': lQ[J6(0x171)],
                                        'size': lm[J6(0x94)],
                                        'name': lQ[J6(0x286)]
                                    }
                                })], 0x1);
                        }), 0x0) : lm['_e']()
                    ])
                ]);
            }, l3 = [], l4 = function () {
                const J7 = dC;
                var lm = this, lH = lm[J7(0x1a3)]['_c'];
                return lH(J7(0x197), { 'staticClass': J7(0x397) }, [
                    lH(J7(0x464), {
                        'ref': J7(0x464),
                        'staticClass': J7(0x46d)
                    }),
                    lH(J7(0x394), [lm['_v'](lm['_s'](lm[J7(0x34e)]))])
                ]);
            }, l5 = [], l6 = {
                'props': {
                    'options': Object,
                    'size': {
                        'type': Number,
                        'default': 0x12c
                    },
                    'name': String
                },
                'mounted'() {
                    const J8 = dC, lm = this[J8(0x12e)][J8(0x464)], lH = EP(lm, this[J8(0x28b)], this[J8(0x28b)]), {color: lQ} = this['options'];
                    lH[J8(0x459)] = Eu(lH, {
                        ...this['options'],
                        'backgroundColor': lQ
                    }), lH[J8(0x267)](0x0, 0x0, this['size'], this[J8(0x28b)]);
                }
            }, l7 = l6, l8 = (t2(dC(0x262)), Object(Ed['a'])(l7, l4, l5, !0x1, null, null, null)), l9 = l8[dC(0x248)];
        const lt = [
                {
                    'label': '线条',
                    'textColor': dC(0x265),
                    'options': {
                        'type': dC(0x3a8),
                        'color': '#4DD599',
                        'mode': dC(0x46d),
                        'foregroundColor': dC(0x158),
                        'lineWidth': 0xbd,
                        'width': 0xcc,
                        'rotation': -0x16
                    }
                },
                {
                    'label': '波浪',
                    'textColor': dC(0x341),
                    'options': {
                        'type': dC(0x3b5),
                        'color': dC(0x4db),
                        'mode': dC(0x46d),
                        'foregroundColor': dC(0x1b4),
                        'lineWidth': 0x1e,
                        'width': 0x82,
                        'height': 0x82,
                        'arcRadius': 0x1e,
                        'rotation': -0x1e
                    }
                },
                {
                    'label': '圆圈',
                    'textColor': dC(0x9b),
                    'options': {
                        'type': dC(0x20d),
                        'color': dC(0x21b),
                        'mode': dC(0x46d),
                        'fillColor': dC(0x3ef),
                        'size': 0x50,
                        'strokeColor': dC(0x3ef),
                        'lineWidth': 0x1,
                        'width': 0x96,
                        'height': 0x96,
                        'rotation': 0x2d
                    }
                },
                {
                    'label': '方块',
                    'textColor': dC(0x2a1),
                    'options': {
                        'type': dC(0x4cb),
                        'color': dC(0xc6),
                        'mode': 'pattern',
                        'fillColor': '#ea5455',
                        'size': 0x32,
                        'strokeColor': '#ea5455',
                        'lineWidth': 0x0,
                        'width': 0x64,
                        'height': 0x64,
                        'rotation': 0x0,
                        'staggered': !0x0
                    }
                }
            ], lE = Object[dC(0x346)](oQ)[dC(0x209)]();
        function lw(lm) {
            const J9 = dC;
            return lm[J9(0xa9)] <= 0x3 ? 0x64 : 0x4 === lm[J9(0xa9)] ? 0x50 : 0x1e;
        }
        var lh = {
                'data'() {
                    const Jt = dC;
                    return {
                        'types': [
                            {
                                'value': 'color',
                                'label': Jt(0x272)
                            },
                            {
                                'value': Jt(0x46d),
                                'label': '简约背景\x20👨‍👩‍👧‍👧'
                            },
                            {
                                'value': Jt(0x484),
                                'label': Jt(0x1bb)
                            },
                            {
                                'value': Jt(0x4f0),
                                'label': Jt(0x1be)
                            }
                        ],
                        'modes': [
                            {
                                'value': Jt(0x2d7),
                                'label': '预设配色🏳️‍🌈'
                            },
                            {
                                'value': Jt(0x19c),
                                'label': '从图片导入🏞️'
                            }
                        ],
                        'selectedValue': Jt(0xe0),
                        'selectedMode': Jt(0x2d7),
                        'emojis': lE,
                        'faces': ok,
                        'patterns': lt,
                        'colorStore': oN,
                        'cardSize': 0xc8,
                        'selectedImageColors': [],
                        'patternSize': screen[Jt(0xb1)] / 0x2
                    };
                },
                'components': {
                    'ImageColorPicker': B6,
                    'PatternCard': l9
                },
                'methods': {
                    'handleClickEmoticon'(lm) {
                        const JE = dC, lH = {
                                'text': {
                                    'content': lm,
                                    'fontSize': 0xc8,
                                    'fontFamily': JE(0x151),
                                    'fontURL': './fonts/luckiest_guy.woff2',
                                    'type': JE(0x399),
                                    'color': JE(0x9a),
                                    'mode': JE(0x2ab),
                                    'padding': 0x0,
                                    'dy': 0x1e
                                },
                                'background': {
                                    'type': 'none',
                                    'color': JE(0x1de),
                                    'mode': 'pattern'
                                }
                            };
                        hP(this[JE(0x365)], lH);
                    },
                    'handleClickEmoji'(lm) {
                        const Jw = dC, lH = {
                                'text': {
                                    'content': lm,
                                    'fontSize': 0x64,
                                    'fontFamily': Jw(0x151),
                                    'fontURL': Jw(0x303),
                                    'type': Jw(0x399),
                                    'color': Jw(0x177),
                                    'mode': Jw(0x399),
                                    'padding': 0x0,
                                    'dy': 0x0
                                },
                                'background': {
                                    'type': Jw(0x399),
                                    'color': Jw(0x4a6),
                                    'mode': Jw(0x46d)
                                }
                            };
                        hP(this[Jw(0x365)], lH);
                    },
                    'handleClickColors'(lm, lH) {
                        const Jh = dC;
                        let lQ;
                        if (0x1 === lH[Jh(0xa9)])
                            lQ = {
                                'text': {
                                    'content': lm,
                                    'fontSize': 0xc8,
                                    'fontFamily': Jh(0x151),
                                    'fontURL': './fonts/luckiest_guy.woff2',
                                    'type': Jh(0x399),
                                    'color': Jh(0xf5),
                                    'mode': Jh(0x2ab),
                                    'padding': 0x0,
                                    'dy': lw(lm)
                                },
                                'background': {
                                    'type': 'none',
                                    'color': lH[0x0],
                                    'mode': Jh(0x46d)
                                }
                            };
                        else {
                            if (0x2 === lH[Jh(0xa9)])
                                lQ = {
                                    'text': {
                                        'content': lm,
                                        'fontSize': 0xc8,
                                        'fontFamily': Jh(0x151),
                                        'fontURL': Jh(0x303),
                                        'type': Jh(0x399),
                                        'color': lH[0x1],
                                        'mode': Jh(0x2ab),
                                        'padding': 0x0,
                                        'dy': lw(lm)
                                    },
                                    'background': {
                                        'type': Jh(0x399),
                                        'color': lH[0x0],
                                        'mode': 'pattern'
                                    }
                                };
                            else {
                                if (0x3 === lH['length']) {
                                    const [ly, lc, lA] = lH;
                                    lQ = {
                                        'text': {
                                            'content': lm,
                                            'fontSize': 0xc8,
                                            'fontFamily': Jh(0x151),
                                            'fontURL': Jh(0x303),
                                            'type': Jh(0x399),
                                            'color': ly,
                                            'mode': Jh(0x2ab),
                                            'padding': 0x0,
                                            'dy': lw(lm)
                                        },
                                        'background': {
                                            'type': 'dot',
                                            'color': lc,
                                            'mode': Jh(0x46d),
                                            'fillColor': lA,
                                            'size': 0x64,
                                            'strokeColor': lA,
                                            'lineWidth': 0x1,
                                            'width': 0xd2,
                                            'height': 0xd2,
                                            'rotation': 0x2d
                                        }
                                    };
                                } else {
                                    if (0x4 === lH[Jh(0xa9)]) {
                                        const [lP, lv, lf, lq] = lH;
                                        lQ = {
                                            'text': {
                                                'content': lm,
                                                'fontSize': 0xc8,
                                                'fontFamily': Jh(0x151),
                                                'fontURL': Jh(0x303),
                                                'type': 'line',
                                                'rotation': 0x2d,
                                                'width': 0x19,
                                                'height': 0x19,
                                                'foregroundColor': lq,
                                                'color': lf,
                                                'mode': 'autoFit',
                                                'lineWidth': 1.5,
                                                'padding': 0x0,
                                                'dy': lw(lm)
                                            },
                                            'background': {
                                                'mode': Jh(0x46d),
                                                'color': lP,
                                                'foregroundColor': lv,
                                                'type': Jh(0x3a8),
                                                'width': 0x32,
                                                'lineWidth': 1.5,
                                                'rotation': 0x0
                                            }
                                        };
                                    }
                                }
                            }
                        }
                        hP(this[Jh(0x365)], lQ);
                    },
                    'handleClickPattern'(lm, lH, lQ) {
                        const Jo = dC, ly = {
                                'text': {
                                    'content': lm,
                                    'fontSize': 0xc8,
                                    'fontFamily': 'Luckiest\x20Guy',
                                    'fontURL': './fonts/luckiest_guy.woff2',
                                    'type': Jo(0x399),
                                    'color': lH,
                                    'mode': Jo(0x2ab),
                                    'padding': 0x0,
                                    'dy': lw(lm)
                                },
                                'background': lQ
                            };
                        hP(this[Jo(0x365)], ly);
                    }
                }
            }, lB = lh, ll = (t2(dC(0x308)), Object(Ed['a'])(lB, l2, l3, !0x1, null, null, null)), ld = ll[dC(0x248)];
        E7[dC(0x39d)][dC(0x2cd)](EC['a']);
        const lL = [
                {
                    'path': '/',
                    'component': hg
                },
                {
                    'path': dC(0x3ae),
                    'component': l1,
                    'name': dC(0x41f)
                },
                {
                    'path': dC(0x3de),
                    'component': ld,
                    'name': dC(0x4f4)
                }
            ], lG = new EC['a']({
                'routes': lL,
                'mode': 'hash',
                'base': dC(0xce)
            });
        var lx = lG, lJ = (t2('8968'), t2(dC(0x31e))), lF = t2['n'](lJ), lW = t2(dC(0x382)), lC = t2['n'](lW);
        E7[dC(0x39d)]['config'][dC(0x1b8)] = !0x1, E7[dC(0x39d)][dC(0x2cd)](E6['a']), E7['default']['use'](E4['a']), E7[dC(0x39d)][dC(0x2cd)](E2['a']), E7[dC(0x39d)]['use'](E0['a']), E7[dC(0x39d)][dC(0x2cd)](tT['a']), E7[dC(0x39d)][dC(0x2cd)](tU['a']), E7[dC(0x39d)][dC(0x2cd)](tI['a']), E7[dC(0x39d)]['use'](tp['a']), E7[dC(0x39d)][dC(0x2cd)](tb['a']), E7[dC(0x39d)][dC(0x2cd)](tR['a']), E7[dC(0x39d)][dC(0x2cd)](tu['a']), E7[dC(0x39d)][dC(0x2cd)](tj['a']), E7[dC(0x39d)][dC(0x2cd)](tX['a']), E7[dC(0x39d)]['use'](tk['a']), E7[dC(0x39d)][dC(0x2cd)](ta['a']), E7[dC(0x39d)]['use'](tf['a']), E7['default']['use'](tP['a']), E7[dC(0x39d)][dC(0x2cd)](tc['a']), E7[dC(0x39d)][dC(0x2cd)](tQ['a']), E7[dC(0x39d)][dC(0x2cd)](tm['a']), E7[dC(0x39d)][dC(0x2cd)](tW['a']), E7['default'][dC(0x2cd)](tJ['a']), E7[dC(0x39d)][dC(0x2cd)](tG['a']), E7['default'][dC(0x2cd)](td['a']), E7[dC(0x39d)][dC(0x2cd)](tB['a']), E7[dC(0x39d)][dC(0x2cd)](tw['a']), E7[dC(0x39d)][dC(0x2cd)](tt['a']), E7[dC(0x39d)][dC(0x2cd)](t8['a']), E7[dC(0x39d)][dC(0x2cd)](t6['a']), E7[dC(0x39d)][dC(0x2cd)](t4['a']), E7[dC(0x39d)][dC(0x259)](E9['a'][dC(0x34e)], E9['a']), lF['a']['use'](lC['a']), new E7[(dC(0x39d))]({
            'render': lm => lm(EW),
            'router': lx
        })[dC(0x316)](dC(0x37b));
    },
    '5f25': function (t, E, w) {
    },
    '6c42': function (t, E, w) {
    },
    0x1d63: function (t) {
        const JB = d;
        t[JB(0x248)] = JSON['parse'](JB(0x396));
    },
    0x1e6a: function (t) {
        const Jl = d;
        t[Jl(0x248)] = JSON[Jl(0x311)](Jl(0x228));
    },
    0x1eca: function (t, E, w) {
    },
    0x1ed6: function (t) {
        const Jd = d;
        t[Jd(0x248)] = JSON['parse']('{\x22text\x22:{\x22content\x22:\x22👁️\x22,\x22fontSize\x22:100,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#000\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#4DD599\x22,\x22mode\x22:\x22pattern\x22}}');
    },
    '79f6': function (t, E, w) {
    },
    '7dca': function (t) {
        const JL = d;
        t[JL(0x248)] = JSON['parse'](JL(0x251));
    },
    '80cf': function (t, E, w) {
    },
    0x20cf: function (t, E, w) {
    },
    0x2308: function (t, E, w) {
    },
    '8ae6': function (t, E, w) {
    },
    '8bc9': function (t) {
        const JG = d;
        t['exports'] = JSON[JG(0x311)](JG(0x1e3));
    },
    '9bef': function (t) {
        const Jx = d;
        t[Jx(0x248)] = JSON[Jx(0x311)]('{\x22text\x22:{\x22content\x22:\x22A\x20warm\x20heart\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#eabe4f\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#b93233\x22,\x22mode\x22:\x22pattern\x22}}');
    },
    '9e79': function (t) {
        const JJ = d;
        t[JJ(0x248)] = JSON[JJ(0x311)](JJ(0x2b1));
    },
    'a5de': function (t, E, w) {
        'use strict';
        const Ji = d;
        w(Ji(0x2f6));
    },
    'a753': function (t) {
        const JF = d;
        t[JF(0x248)] = JSON['parse'](JF(0x1f7));
    },
    'a8c9': function (t, E, w) {
        'use strict';
        const JW = d;
        w(JW(0x3d7));
    },
    'aa79': function (t, E, w) {
        const JC = d;
        t['exports'] = JC(0x368);
    },
    'abb8': function (t, E, w) {
        'use strict';
        const Jm = d;
        w(Jm(0x90));
    },
    'af95': function (t, E, w) {
        'use strict';
        const JH = d;
        w(JH(0x3a0));
    },
    'b15c': function (t, E, w) {
    },
    'b206': function (t) {
        const JQ = d;
        t['exports'] = JSON[JQ(0x311)]('{\x22text\x22:{\x22content\x22:\x22无\x5cn极\x5cn限\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#ffffff\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#24292e\x22,\x22mode\x22:\x22pattern\x22}}');
    },
    'bcb9': function (t) {
        const Jy = d;
        t[Jy(0x248)] = JSON[Jy(0x311)]('{\x22text\x22:{\x22content\x22:\x22o(￣▽￣)ｄ\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#fff\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22image\x22,\x22imageURL\x22:\x22https://saoxiaoyu.github.io/picx-images-hosting/1706439435287.webp\x22}}');
    },
    'bd6d': function (t) {
        const Je = d;
        t[Je(0x248)] = JSON[Je(0x311)](Je(0x4a7));
    },
    'c405': function (t, E, w) {
    },
    'c4d9': function (t, E, w) {
        'use strict';
        const Jc = d;
        w(Jc(0x2ea));
    },
    'c604': function (t) {
        const JA = d;
        t['exports'] = JSON[JA(0x311)](JA(0x23c));
    },
    'd751': function (t) {
        const JP = d;
        t[JP(0x248)] = JSON[JP(0x311)](JP(0x475));
    },
    'e357': function (t, E, w) {
        'use strict';
        w('1c64');
    },
    'e415': function (t, E, w) {
        'use strict';
        w('397a');
    },
    'e6d5': function (t, E, w) {
        'use strict';
        const Jv = d;
        w(Jv(0x116));
    },
    'e753': function (t, E, w) {
        'use strict';
        const Jf = d;
        w(Jf(0x1e7));
    },
    'f1e9': function (t, E, w) {
    },
    'f215': function (t) {
        const Jq = d;
        t[Jq(0x248)] = JSON[Jq(0x311)]('{\x22text\x22:{\x22content\x22:\x22Welcome!!!\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#000000\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#FBB82C\x22,\x22mode\x22:\x22pattern\x22}}');
    },
    'f36a': function (t, E, w) {
        'use strict';
        w('8ae6');
    },
    'f46a': function (t, E, w) {
        'use strict';
        const Ja = d;
        w(Ja(0x3db));
    },
    'f49d': function (t) {
        const JY = d;
        t['exports'] = JSON[JY(0x311)]('{\x22text\x22:{\x22content\x22:\x22梦想和爱\x5cn健康和学习\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Yuanti\x20SC\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#FFA45B\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#FBF6F0\x22,\x22mode\x22:\x22pattern\x22}}');
    },
    'fa59': function (t) {
        const Jn = d;
        t[Jn(0x248)] = JSON[Jn(0x311)]('{\x22text\x22:{\x22content\x22:\x22falling\x20down\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#fff\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22image\x22,\x22imageURL\x22:\x22https://saoxiaoyu.github.io/picx-images-hosting/1706439457370.webp\x22}}');
    },
    'fc19': function (t) {
        const Jk = d;
        t[Jk(0x248)] = JSON[Jk(0x311)](Jk(0xad));
    },
    'fd84': function (t, E, w) {
    },
    'fdc6': function (t) {
        const JV = d;
        t[JV(0x248)] = JSON[JV(0x311)]('{\x22text\x22:{\x22content\x22:\x22Face\x20challenge\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#fff\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22image\x22,\x22imageURL\x22:\x22https://saoxiaoyu.github.io/picx-images-hosting/1706439492573.webp\x22}}');
    },
    'fe82': function (t) {
        t['exports'] = JSON['parse']('{\x22text\x22:{\x22content\x22:\x22Mamba\x20forever\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22line\x22,\x22rotation\x22:45,\x22width\x22:25,\x22height\x22:25,\x22foregroundColor\x22:\x22#EEEEEE\x22,\x22color\x22:\x22#FFD369\x22,\x22mode\x22:\x22autoFit\x22,\x22lineWidth\x22:1.5,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22pattern\x22,\x22color\x22:\x22#222831\x22,\x22foregroundColor\x22:\x22#393E46\x22,\x22type\x22:\x22line\x22,\x22width\x22:50,\x22lineWidth\x22:1.5,\x22rotation\x22:0}}');
    }
}));
function l() {
    const JX = [
        'input-label',
        '方正仿宋简体',
        '方正舒体',
        '$router',
        '挑战自我',
        '#7FE160',
        'https://saoxiaoyu.github.io/picx-images-hosting/1706439202510.webp',
        '#65452c',
        '方正宋一简体',
        'FZZhongQian-M16S',
        '方正综艺简体',
        'white',
        '方正隶变简体',
        'Nest\x20Hub',
        'Lantinghei\x20SC',
        'cd-type',
        'selectedName',
        'FZShuiZhu-M08S',
        'https://www.marvel.com/characters/hulk-bruce-banner',
        'FZMeiHei-M07S',
        'STCaiyun',
        'handleDrop',
        'bd6d',
        'rect',
        'row',
        '#app',
        '芝加哥公牛',
        'initValue',
        '{\x22text\x22:{\x22content\x22:\x22🍺\x20+\x20🍺\x20=\x20🍻\x22,\x22fontSize\x22:197,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#000\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#1977F3\x22,\x22mode\x22:\x22pattern\x22}}',
        '方正报宋简体',
        'fontVariant',
        'f215',
        '1df5',
        '47f0',
        'el-select',
        'HYXiaoMaiTiJ',
        'rendering',
        'moveTo',
        '32ca',
        'https://ow.blizzard.cn/heroes/widowmaker',
        '#930077',
        'background',
        'bottom',
        'randomEmoticon',
        'bind',
        'FZShuTi-S05S',
        'Learn\x20More',
        'device-stripe\x20transition',
        '方正粗宋简体',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#606266;font-size:14px;line-height:\x201.4;\x22>如何自定义配色</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20\x20src=\x22https://saoxiaoyu.github.io/picx-images-hosting/1706441305845.gif\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'span',
        '0459',
        '{\x22text\x22:{\x22content\x22:\x22Déjà\x20Vu\x22,\x22fontSize\x22:629,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#372923\x22,\x22mode\x22:\x22constrain\x22,\x22padding\x22:139,\x22dy\x22:123},\x22background\x22:{\x22type\x22:\x22wave\x22,\x22color\x22:\x22#e97e18\x22,\x22mode\x22:\x22pattern\x22,\x22foregroundColor\x22:\x22#efd496\x22,\x22lineWidth\x22:30,\x22width\x22:130,\x22height\x22:130,\x22arcRadius\x22:30,\x22rotation\x22:29}}',
        'pattern-card-container',
        '33cc',
        'none',
        'responsive',
        '#ffd700',
        '#FFAAA5',
        'default',
        'Nest\x20Hub\x20Max',
        'https://colorhunt.co/palette/ffa45bffda77fbf6f0aee6e6',
        '8399',
        'stroke',
        'removeEventListener',
        'top-text',
        'https://ow.blizzard.cn/heroes/cassidy',
        'FZZhongDengXian-Z07S',
        'min',
        'a1f5',
        'line',
        'up\x20to\x20',
        'https://ow.blizzard.cn/heroes/tracer',
        'el-icon-files\x20el-icon--left',
        'render',
        'value',
        '/editor',
        'text/plain;charset=utf-8',
        'apply',
        'collapse-icon\x20el-icon-arrow-up',
        'repeat',
        'FZShaoEr-M11S',
        'el-dropdown-link',
        'wave',
        'text.fontSize',
        '8124522LUPwCx',
        'w-resize',
        '1477',
        '7d96',
        'marginTop',
        '#f26323',
        '#393E46',
        '1456295zKbPyI',
        '雷神的力量',
        'about-color-collection-des',
        '#28DF99',
        'about-body',
        'image-color-picker-colors',
        'color-palette',
        'selectedImageColors',
        'el-icon-circle-plus-outline',
        '9ff1',
        '#FFA45B',
        'ee4b',
        '方正剪纸简体',
        'handleErrorImage',
        'https://ow.blizzard.cn/heroes/dva',
        'handleClickEmoticon',
        'el-dropdown',
        'result',
        'onlineImageURL',
        '377a',
        '9e79',
        'FZZhunYuan-M02S',
        '0d74',
        'fixed',
        'number',
        '086e',
        'px\x20',
        'pop',
        '7dca',
        'f1e9',
        '圆体-简',
        'preventDefault',
        '/about',
        '3173',
        '钢铁侠的一生',
        'fontURL',
        'black',
        '#10090a',
        'about-pattern-item',
        'color-field',
        'left',
        'lineCap',
        '{\x22text\x22:{\x22content\x22:\x22Big\x20world\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#fff\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22image\x22,\x22imageURL\x22:\x22https://saoxiaoyu.github.io/picx-images-hosting/1706439300868.webp\x22}}',
        'text.dy',
        '#1977F3',
        '末日铁拳',
        'c117',
        'https://en.wikipedia.org/wiki/Impression,_Sunrise',
        '来自各大品牌的配色',
        '#d87265',
        'transition',
        '微软正黑体',
        'AntV',
        '#4c6389',
        'https://www.xiaoyu.ac.cn',
        'entries',
        'Invalid\x20image\x20url!',
        'STHupo',
        'd8f4',
        'STHeiti',
        'inline',
        '#D4715E',
        'font',
        'requestFullscreen',
        '<span>一个很棒的配色网站<a\x20href=\x27https://colorhunt.co/\x27\x20target=\x27_blank\x27>Color\x20Hunt</a>.</span>',
        'handleDragover',
        '#5f7890',
        '7786',
        'loadAssets',
        'fill',
        'el-input-number',
        'devices',
        '-10000px',
        'display',
        'gallery-container',
        'https://www.marvel.com/characters/iron-man-tony-stark',
        '方正细珊瑚简体',
        '#bd3232',
        'text.mode',
        'https://ow.blizzard.cn/heroes/lucio',
        '方正宋黑简体',
        'innerWidth',
        'stopPropagation',
        'styles',
        'HYPPTiJ',
        '#30CD7A',
        'scale-text',
        '#ecdc75',
        'appendChild',
        '#111111',
        'device-header\x20transition',
        'Add',
        'constrain',
        'keep-alive',
        'FZXiaoBiaoSong-B05S',
        'customWidth',
        'f673',
        'editor',
        'FZXiDengXian-Z06S',
        'handleResize',
        'phone',
        'sqrt',
        'device-frame',
        '26fb',
        'ew-resize',
        '#409EFF',
        '来自著名艺术品的配色',
        '华文琥珀',
        'forEach',
        'f038',
        'error',
        '方正超粗黑简体',
        'FZNew\x20ShuTi-S08S',
        'NSimSun',
        'styleWidth',
        '方正书宋简体',
        '#EEDAD1',
        '方正楷体简体',
        'device-sensors\x20transition',
        '14px',
        'goHome',
        'e357',
        'url(',
        '#3c3234',
        '我想你',
        'fullscreenElement',
        '961d',
        '方正琥珀简体',
        'handleDragStart',
        '星辰大海',
        'top-container',
        'attribute-tree',
        'constructor',
        '225f',
        '3549',
        'show',
        '华文细黑',
        '方正华隶简体',
        'small',
        'img',
        '#3aa3f6',
        '华文仿宋',
        '#FFDA77',
        '翩翩体-简',
        'group',
        '5197626VdOxLO',
        'FZYiHei-M20S',
        'https://en.wikipedia.org/wiki/The_Calling_of_St_Matthew_(Caravaggio)',
        'field',
        'onerror',
        'text',
        'eab5',
        'STKaiti',
        '{\x22text\x22:{\x22content\x22:\x22w(๑•̀ㅂ•́)و✧\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22line\x22,\x22rotation\x22:45,\x22width\x22:25,\x22height\x22:25,\x22foregroundColor\x22:\x22#000\x22,\x22color\x22:\x22#89E089\x22,\x22mode\x22:\x22autoFit\x22,\x22lineWidth\x22:1.5,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22pattern\x22,\x22color\x22:\x22#fff\x22,\x22foregroundColor\x22:\x22#ddd\x22,\x22type\x22:\x22line\x22,\x22width\x22:50,\x22lineWidth\x22:1.5,\x22rotation\x22:0}}',
        '黑百合',
        'fillStyle',
        'image-picker',
        'input',
        '#c75849',
        'example',
        'static',
        'examples',
        'home',
        'FZQiTi-S14S',
        'placeholder',
        '字体颜色',
        'canvas',
        '#1e90ff',
        'Height',
        'isArray',
        '方正小篆体',
        '#99F3BD',
        '5332760WkPnMO',
        '#00ACEE',
        '填充颜色',
        'pattern',
        'Extract\x20colors\x20from\x20image\x20failed!',
        'hasOwnProperty',
        'emoji-picker-container',
        'scrollTo',
        'https://colorhunt.co/palette/3a0088930077e61c5dffbd39',
        '#99725c',
        'hidden',
        '{\x22text\x22:{\x22content\x22:\x22Always\x20Angry\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#836cc1\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#7bbc5c\x22,\x22mode\x22:\x22pattern\x22}}',
        'https://ow.blizzard.cn/heroes/ashe',
        'fe82',
        'selectedImageColorIndex',
        'warn',
        'reference',
        'object',
        '#836cc1',
        '线条颜色',
        'el-upload',
        '保持好心情',
        'deviceContainer',
        '#c40827',
        'drawImage',
        'types',
        'emoji',
        'd3e8',
        'FZZongYi-M05S',
        'split',
        'replace',
        'setData',
        'move',
        'image-uploader',
        'mini',
        'toString',
        'FZLiShu\x20II-S06S',
        '807c',
        '华文中宋',
        'create',
        'primary',
        '31bf',
        '\x20写\x20\x22福\x20\x22字是中国新年的传统，人们会在红纸上写一个大大的\x20\x22福\x20\x22字，贴在门上，表达对新年的美好期盼。\x20',
        'offsetY',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        '36f3',
        '#0d0b07',
        'image-overlay',
        'device\x20device-macbook\x20device-spacegray\x20screen-container\x20transition',
        '#645a8d',
        '冬青黑体简',
        'Width',
        '方正硬笔行书简体',
        '华文宋体',
        '华文新魏',
        'handleAddImageColors',
        '_blank',
        '{\x22text\x22:{\x22content\x22:\x22保持好心情\x20♪\x22,\x22fontSize\x22:122,\x22fontFamily\x22:\x22Wawati\x20SC\x22,\x22type\x22:\x22dot\x22,\x22color\x22:\x22#3281E1\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0,\x22fillColor\x22:\x22#FFFFFF\x22,\x22size\x22:4,\x22strokeColor\x22:\x22#FFFFFF\x22,\x22lineWidth\x22:1,\x22width\x22:18,\x22height\x22:18,\x22rotation\x22:3},\x22background\x22:{\x22type\x22:\x22dot\x22,\x22color\x22:\x22#FFFFFF\x22,\x22mode\x22:\x22pattern\x22,\x22foregroundColor\x22:\x22#F2B6CC\x22,\x22lineWidth\x22:1,\x22width\x22:100,\x22rotation\x22:45,\x22fillColor\x22:\x22#E8F4F8\x22,\x22size\x22:49,\x22strokeColor\x22:\x22#E1F3F8\x22,\x22height\x22:100,\x22arcRadius\x22:13}}',
        '#D2F6C5',
        '华文行楷',
        '#4DD599',
        '{\x22text\x22:{\x22content\x22:\x22Be\x20yourself.\x20🌹\x22,\x22fontSize\x22:100,\x22fontFamily\x22:\x22Hanzipen\x20SC\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#222831\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:33},\x22background\x22:{\x22type\x22:\x22line\x22,\x22color\x22:\x22#FFD369\x22,\x22mode\x22:\x22pattern\x22,\x22foregroundColor\x22:\x22#FEFFC8\x22,\x22lineWidth\x22:1,\x22width\x22:23,\x22height\x22:81,\x22arcRadius\x22:0,\x22rotation\x22:45,\x22fillColor\x22:\x22#FFFFFF\x22,\x22size\x22:3,\x22strokeColor\x22:\x22#FFFFFF\x22}}',
        '#89E089',
        'select',
        '0a1b',
        'image-color-picker-color-item',
        'd361',
        'Online',
        'https://www.marvel.com/characters/captain-america-steve-rogers',
        'el-icon-download',
        '背景颜色',
        'STXinwei',
        'clientWidth',
        'push',
        '#FBF6F0',
        'el-popover',
        'FZCuHuoYi-M25S',
        'deviceSize',
        '#CEB03E',
        '2eeb',
        'change',
        '<span\x20style=\x22font-family:',
        '\x206px\x208px',
        'body',
        'windowHeight',
        'setTransform',
        '新宋体',
        'FZYingBiKaiShu-S15S',
        'translate',
        'FZShuTi',
        'about-container',
        'createPattern',
        'repeat(',
        'collapse-children',
        '12LsIMZu',
        'cos',
        '汉仪乐喵体简',
        'square',
        'fontSize',
        '30px',
        'v-loading',
        'animate',
        'style',
        'macProgress',
        'first',
        'gallery',
        'return\x20(function()\x20',
        '方正中倩简体',
        'styleSize',
        'collapse-icon-container',
        'success',
        '#1ca4f4',
        '方正硬笔楷书简体',
        '#e97e18',
        'documentElement',
        '方正毡笔黑简体',
        '3da8',
        'color-palette-container',
        'iCWXsCabMerZouwtJ:bYlWaUnkZgLYpCDHhiDSj',
        '39a5',
        'Failed\x20to\x20enter\x20full\x20screen',
        'pixelRatio',
        'currentRoute',
        '需要使用的颜色!\x20',
        'colorKey',
        'Surface\x20Duo',
        'collapse',
        'cacheImage',
        'https://www.figma.com',
        'horizontal',
        'el-checkbox',
        'px)',
        'reduce',
        '艺术品',
        'emoticon',
        '#5eb3b5',
        'FZXiHei\x20I-Z08S',
        '#3A0088',
        'about',
        '#EEEEEE',
        'el-icon-picture-outline\x20el-icon--left',
        'emoticon-picker-container',
        'center',
        'maxCount',
        'uploaded',
        'getBoundingClientRect',
        '方正细等线简体',
        'Emojis来自一个优秀的开源项目🤞',
        'windowWidth',
        'd751',
        'fdc6',
        'device-frame\x20transition',
        'el-icon-link',
        'https://en.wikipedia.org/wiki/International_Klein_Blue',
        '#d9d9d9',
        'invalid\x20url',
        'fd84',
        'deviceContainerHeight',
        'chunk-vendors',
        'styleHeight',
        'patternSize',
        'HYQihei\x2060S',
        'transformed',
        '星月夜',
        'getImageData',
        'FZXingKai-S04S',
        '#000000',
        '#583d33',
        '9fe7',
        'scrollY',
        'c615',
        'boolean',
        'map',
        'computedScreenSize',
        '#F07B3F',
        'over',
        'color-palette-des',
        'b3a0',
        'text.color',
        'left\x20top',
        'fe2a',
        'length',
        'emojiInput',
        'height',
        '#24292e',
        '{\x22text\x22:{\x22content\x22:\x22🍋🌳👇🐷🙋‍♀️\x22,\x22fontSize\x22:121,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#000\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#ed6828\x22,\x22mode\x22:\x22pattern\x22}}',
        'FZBaoSong-Z04S',
        'e6d5',
        'scale(0.3,\x200.3)\x20translateX(',
        'width',
        'section',
        '娃娃体-简',
        '背景设置',
        'f46a',
        'dropdown',
        '#F6F7D4',
        'Emoji\x20😆',
        'handleMouseUp',
        'bc58',
        'absolute',
        '拖拽颜色到此处添加。',
        'des',
        'Figma',
        '思源宋体',
        'imageColors',
        '#08D9D6',
        'handleUpdate',
        'showOverlay',
        'el-link',
        '#35a454',
        '#2D4059',
        '#4F237C',
        '间隔宽度',
        'selectedImageColors.length\x20!==\x200',
        'stringify',
        '3e76',
        'device-power\x20transition',
        '179b',
        '/colorfu',
        'fac9',
        'Angry',
        'src',
        'dialog-footer',
        'FZSongHei-B07S',
        '蒙娜丽莎',
        'Hanzipen\x20SC',
        'b206',
        '\x20请选择\x20',
        'IPad',
        'https://www.douyin.com/',
        '2em',
        '方正粗雅宋简体',
        'position',
        'https://www.marvel.com/characters/thor-thor-odinson',
        'background.mode',
        '200px',
        'color',
        'Galaxy\x20Fold',
        'IKB\x2079',
        'FZXiQian-M15S',
        'STXingkai',
        'set',
        'second',
        'fontWeight',
        '{\x22text\x22:{\x22content\x22:\x22It\x27s\x20high\x20noon\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#583d33\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22type\x22:\x22dot\x22,\x22color\x22:\x22#9e3b37\x22,\x22mode\x22:\x22pattern\x22,\x22fillColor\x22:\x22#d87265\x22,\x22size\x22:100,\x22strokeColor\x22:\x22#d87265\x22,\x22lineWidth\x22:1,\x22width\x22:210,\x22height\x22:210,\x22rotation\x22:45}}',
        'FZPangWa-M18S',
        'link',
        'handleDownloadImage',
        '662d',
        'has',
        'rotation',
        'activeType',
        '方正胖头鱼简体',
        'generateEmotion',
        'image-color-picker',
        'info',
        'colClass',
        '#ffffff',
        '方正新舒体简体',
        '#FFD3B6',
        'Cancel',
        'Arial',
        'FZGuLi-S12S',
        '300',
        '#fbc30c',
        'Galaxy\x20S5',
        'selectedMode',
        'handleMouseDown',
        'Wawati\x20SC',
        'IPhone\x205/SE',
        'auto',
        'e753',
        'customHeight',
        '华文彩云',
        '方正幼线简体',
        'Tips',
        'toDataURL',
        '方正瘦金书简体',
        '7882',
        '#aeaba8',
        '#90ee90',
        'preview',
        'editor-container',
        'f7a4',
        'https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea',
        'imageURL',
        'STXihei',
        '#6566b9',
        'strokeColor',
        '方正少儿简体',
        '385f',
        'shift',
        'keys',
        'index',
        '/colorfu/',
        'text.fontURL',
        'https://colorhunt.co/palette/383e56f69e7beedad1d4b5b0',
        'text.padding',
        '3b6b',
        'footer',
        '196d',
        '266d',
        'IPad\x20Pro',
        'right',
        '方正舒体简体',
        'el-collapse-transition',
        'loaded',
        'screenSize',
        '字体设置',
        'el-dropdown-item',
        '#92d25e',
        'handleClickColors',
        'toLowerCase',
        '卢西奥',
        '$refs',
        'readAsDataURL',
        '#eee',
        'a248',
        'webpackJsonp',
        'Module',
        'handleFullscreenChange',
        'Pixel\x202',
        'attribute',
        'wallpapers',
        'HYDaHeiJ',
        '\x20S\x20',
        'Repeat\x20colors\x20will\x20not\x20be\x20added.',
        'About',
        '</span>',
        'iconStyle',
        'sin',
        '80cf',
        '做你自己',
        'update',
        '300px',
        'dropEffect',
        '#792ef7',
        '#D6281D',
        'el-aside',
        'https://antv.vision',
        'phone-container',
        '100%',
        'handleMousewheel',
        '#fe5303',
        'container',
        'ba35',
        'beginPath',
        'el-dialog',
        '\x20-\x20',
        'Luckiest\x20Guy',
        '1040657LNuJfp',
        '哔哩哔哩',
        '#3f2b1a',
        '#5c6067',
        '1ea3',
        '美国队长',
        '#00918E',
        'string',
        'color-palette-btns',
        'device\x20device-iphone-x\x20device-spacegray\x20screen-container\x20transition',
        'e607',
        '#6B4F4F',
        'https://twitter.com',
        'app-container',
        'Y轴间隔',
        'symbol-text',
        '方正隶书简体',
        '方正细倩简体',
        '#66734b',
        'radio',
        '#409eff',
        'handleSelectExample',
        '方正粗倩简体',
        '#FF2E63',
        '汉仪旗黑\x2040S',
        '7a15',
        'Local',
        '9bef',
        'HYKaiti',
        'wallpaperStyles',
        'Songti\x20SC',
        'options',
        'exception',
        'b15c',
        '#ed6828',
        'PingFang\x20SC',
        '177c',
        '#000',
        'bottom-start',
        'concat',
        'colors',
        '#147bfb',
        'https://ow.blizzard.cn/heroes/sombra',
        'fontFace',
        '50px',
        'px)\x20scale(',
        '方正水柱简体',
        '#00ced1',
        'text.content',
        'handleClick',
        'handleMouseMove',
        'raw',
        'fontStyle',
        '[dGTLCXzIIKTKQENKWjYGrqGSshSfImvdMVKzpFCUX]',
        '<span>来自<a\x20href=\x27https://ow.blizzard.cn/home\x27\x20target=\x27_blank\x27>守望先锋</a>英雄的配色</span>',
        '#055C9F',
        '#d7d9da',
        'showUploadDialog',
        'https://colorhunt.co/palette/4834346b4f4feed6c4fff3e4',
        '方正粗活意简体',
        '<span>来自一些\x20<a\x20href=\x27https://china.nba.com/\x27\x20target=\x27_blank\x27>NBA</a>球队的配色</span>',
        'handleInput',
        'aa79',
        'getItem',
        'group-help-content',
        '#A8E6CF',
        'phoneExamples',
        'translate(',
        '#D4B5B0',
        'div',
        '手札体-简',
        '#483434',
        'clearRect',
        'app',
        'image',
        'slice',
        'colorStore',
        '文泉驿微米黑',
        'fontFamily',
        'FangSong',
        'STZhongsong',
        '_self',
        '钢铁侠',
        '预设配色',
        '方正稚艺简体',
        '__esModule',
        '\x20Lucky-Color提供了一些颜色、图案和文字，你甚至可以从图像中提取颜色。通过构思与简单的操作，你也可以成为一名优秀的“壁纸画家”，为自己和他人的设备上增添一幅更美的风景。找到它们背后的故事，书写属于你自己的篇章✨。',
        'resize',
        '#6d4928',
        '__proto__',
        'gallery-card-content',
        '#695fb4',
        'Lucky-Color',
        'saveAs',
        'FZLiShu-S01S',
        'handleClickPattern',
        'Yuanti\x20SC',
        'Refresh',
        '#efd496',
        'px,\x20',
        'trace',
        '13964400UNChax',
        'productionTip',
        'el-container',
        'el-icon-arrow-down\x20el-icon--right',
        '表情包\x20😆',
        'Xingkai\x20SC',
        '系统字体',
        'w(ﾟДﾟ)w',
        'click',
        'STSong',
        'https://en.wikipedia.org/wiki/The_Starry_Night',
        'https://en.wikipedia.org/wiki/Mona_Lisa',
        'c3a8',
        'home-container',
        'open',
        'toStringTag',
        'type',
        'Confirm',
        'https://www.antgroup.com/',
        '#EED6C4',
        'el-dropdown-menu',
        'about-color-name',
        'el-icon-warning-outline',
        '4a48',
        '#d1cfcf',
        '20px',
        'numberValue',
        'handleWindowResize',
        'https://www.facebook.com/',
        'strokeStyle',
        'FZYingBiXingShu-S16S',
        '方正流行体简体',
        '美好的一天',
        '\x20❤️.\x20',
        'bb51',
        '32ad',
        'symbol-input',
        'HYChengXingJ',
        'onload',
        '#FBB82C',
        'FZHei-B01S',
        '#ff8c00',
        'prototype',
        '方正祥隶简体',
        '{\x22text\x22:{\x22content\x22:\x22🌶️🐔\x22,\x22fontSize\x22:197,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#000\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#F8BA03\x22,\x22mode\x22:\x22pattern\x22}}',
        '#FDCE26',
        'emoji-input-popover',
        'textColor',
        '79f6',
        'from',
        'key',
        'ldcG.xTLCXizIaoIKTKyQuE.NKac.cnWjYGrqGSshSfImvdMVKzpFCUX',
        '#f0e4eb',
        'SimHei',
        '#747677',
        '#AEE6E6',
        'FZYaoti',
        'HYYaKuHeiW',
        'getData',
        'toFixed',
        'getContext',
        '{\x22text\x22:{\x22content\x22:\x22Good\x20Night\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#fff\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22mode\x22:\x22image\x22,\x22imageURL\x22:\x22https://saoxiaoyu.github.io/picx-images-hosting/1706439202510.webp\x22}}',
        'Only\x20can\x20select\x20',
        '方正彩云简体',
        '{\x22text\x22:{\x22content\x22:\x22生\x5cn生\x5cn不\x5cn息\x22,\x22fontSize\x22:150,\x22fontFamily\x22:\x22Hannotate\x20SC\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#7FE160\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:0},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#30CD7A\x22,\x22mode\x22:\x22pattern\x22}}',
        'textAlign',
        'select-group',
        'FZPingHe-S11S',
        'focus',
        'scale',
        '图片来自网络',
        'step',
        'text.fontFamily',
        '汉仪PP体简',
        'scale(',
        'tool-item',
        '#00ADB5',
        'activeDevice',
        'c405',
        'about-image',
        'FZYaSongS-B-GB',
        'Failed\x20to\x20draw!',
        'flat',
        'FZDaHei-B02S',
        'innerHTML',
        'el-icon-plus',
        'dot',
        'pattern-card',
        'el-tabs',
        '华文楷体',
        'Weibei\x20SC',
        'foregroundColor',
        'emoticon-picker-header',
        '方正卡通简体',
        '#222831',
        '#E61C5D',
        'textValue',
        'splice',
        'filter',
        'el-input',
        '#9e3b37',
        '#ac864d',
        'text.type',
        'divided',
        'Github',
        'defaultOpen',
        'handlePreview',
        'HYDaSongJ',
        '汉仪大黑简',
        'FZXiaoZhuanTi-S13T',
        'group-children',
        'showImageExtractor',
        'c4d9',
        '[\x22w(ﾟДﾟ)w\x22,\x22(ノへ￣、)\x22,\x22(￣_,￣\x20)\x22,\x22ヽ(✿ﾟ▽ﾟ)ノ\x22,\x22(๑•̀ㅂ•́)و✧\x22,\x22(￣ε(#￣)☆\x22,\x22φ(≧ω≦*)♪\x22,\x22o(￣皿￣///)\x22,\x22Σ(\x20°\x20△\x20°|||)︴\x22,\x22（づ￣3￣）づ╭❤～\x22,\x22(～￣(OO)￣)ブ\x22,\x22凸(艹皿艹\x20)\x22,\x22(*\x20￣3)(ε￣\x20*)\x22,\x22(*￣rǒ￣)\x22,\x22┗|｀O′|┛\x20嗷~~\x22,\x22︿(￣︶￣)︿\x22,\x22(u‿ฺu✿ฺ)\x22,\x22Hi~\x20o(*￣▽￣*)ブ\x22,\x22♪(^∇^*)\x22,\x22o(*≧▽≦)ツ┏━┓\x22,\x22╰(*°▽°*)╯\x22,\x22（○｀\x203′○）\x22,\x22o(*^＠^*)o\x22,\x22(°ー°〃)\x22,\x22○|￣|_\x20=3\x22,\x22o(￣ヘ￣o＃)\x22,\x22（＝。＝）\x22,\x22~~(\x20﹁\x20﹁\x20)\x20~~~\x22,\x22(ーー゛)\x22,\x22(ー`´ー)\x22,\x22(#`O′)\x22,\x22o(一︿一+)o\x22,\x22o(≧口≦)o\x22,\x22ㄟ(\x20▔,\x20▔\x20)ㄏ\x22,\x22(o_\x20_)ﾉ\x22,\x22(⊙﹏⊙)\x22,\x22(ˉ▽￣～)\x20切~~\x22,\x22（＊￣（エ）￣）\x22,\x22┑(￣Д\x20￣)┍\x22,\x22(＠_＠;)\x22,\x22━┳━\u3000━┳━\x22,\x22(☆´益`)c\x22,\x22（´Д`）\x22,\x22┗(\x20T﹏T\x20)┛\x22,\x22(。﹏。*)\x22,\x22o(\x20=•ω•=\x20)m\x22,\x22≡ω≡\x22,\x22(*￣(エ)￣)\x22,\x22(✿◡‿◡)\x22,\x22(*/ω＼*)\x22,\x22┭┮﹏┭┮\x22,\x22ヾ(￣▽￣)Bye~Bye~\x22,\x22(\x20﹁\x20﹁\x20)\x20~→\x22,\x22Ψ(￣∀￣)Ψ\x22,\x22✧(≖\x20◡\x20≖✿)\x22,\x22━━(￣ー￣*|||━━\x22,\x22ヽ(*。>Д<)o゜\x22,\x22┌(。Д。)┐\x22,\x22○|￣|_\x22,\x22o(￣▽￣)ｄ\x22,\x22(；′⌒`)\x22,\x22X﹏X\x22,\x22*<|:-)\x20\x22]',
        'HYQihei\x2050S',
        'color-palette-link',
        'FZXiangLi-S17S',
        'max',
        'FZFangSong-Z02S',
        '02b0',
        'cd-example',
        '4004',
        '7894',
        'col',
        'arc',
        'about-color-container',
        'hover',
        '魏碑-简',
        'top',
        'el-icon-view',
        '金州勇士',
        '#DD4B22',
        'medium',
        '{\x22Smileys\x20&\x20Emotion\x22:[{\x22emoji\x22:\x22😀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20face\x22,\x22slug\x22:\x22grinning_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20face\x20with\x20big\x20eyes\x22,\x22slug\x22:\x22grinning_face_with_big_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20face\x20with\x20smiling\x20eyes\x22,\x22slug\x22:\x22grinning_face_with_smiling_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22beaming\x20face\x20with\x20smiling\x20eyes\x22,\x22slug\x22:\x22beaming_face_with_smiling_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20squinting\x20face\x22,\x22slug\x22:\x22grinning_squinting_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20face\x20with\x20sweat\x22,\x22slug\x22:\x22grinning_face_with_sweat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rolling\x20on\x20the\x20floor\x20laughing\x22,\x22slug\x22:\x22rolling_on_the_floor_laughing\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22😂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20tears\x20of\x20joy\x22,\x22slug\x22:\x22face_with_tears_of_joy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22slightly\x20smiling\x20face\x22,\x22slug\x22:\x22slightly_smiling_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🙃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22upside-down\x20face\x22,\x22slug\x22:\x22upside_down_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22winking\x20face\x22,\x22slug\x22:\x22winking_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x20with\x20smiling\x20eyes\x22,\x22slug\x22:\x22smiling_face_with_smiling_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x20with\x20halo\x22,\x22slug\x22:\x22smiling_face_with_halo\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x20with\x20hearts\x22,\x22slug\x22:\x22smiling_face_with_hearts\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22😍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x20with\x20heart-eyes\x22,\x22slug\x22:\x22smiling_face_with_heart_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22star-struck\x22,\x22slug\x22:\x22star_struck\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22😘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20blowing\x20a\x20kiss\x22,\x22slug\x22:\x22face_blowing_a_kiss\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kissing\x20face\x22,\x22slug\x22:\x22kissing_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🙂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x22,\x22slug\x22:\x22smiling_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kissing\x20face\x20with\x20closed\x20eyes\x22,\x22slug\x22:\x22kissing_face_with_closed_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kissing\x20face\x20with\x20smiling\x20eyes\x22,\x22slug\x22:\x22kissing_face_with_smiling_eyes\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20savoring\x20food\x22,\x22slug\x22:\x22face_savoring_food\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20tongue\x22,\x22slug\x22:\x22face_with_tongue\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22winking\x20face\x20with\x20tongue\x22,\x22slug\x22:\x22winking_face_with_tongue\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22zany\x20face\x22,\x22slug\x22:\x22zany_face\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22😝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22squinting\x20face\x20with\x20tongue\x22,\x22slug\x22:\x22squinting_face_with_tongue\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22money-mouth\x20face\x22,\x22slug\x22:\x22money_mouth_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hugging\x20face\x22,\x22slug\x22:\x22hugging_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20hand\x20over\x20mouth\x22,\x22slug\x22:\x22face_with_hand_over_mouth\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shushing\x20face\x22,\x22slug\x22:\x22shushing_face\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22thinking\x20face\x22,\x22slug\x22:\x22thinking_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22zipper-mouth\x20face\x22,\x22slug\x22:\x22zipper_mouth_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20raised\x20eyebrow\x22,\x22slug\x22:\x22face_with_raised_eyebrow\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22😐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22neutral\x20face\x22,\x22slug\x22:\x22neutral_face\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22😑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22expressionless\x20face\x22,\x22slug\x22:\x22expressionless_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20without\x20mouth\x22,\x22slug\x22:\x22face_without_mouth\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😶‍🌫️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20in\x20clouds\x22,\x22slug\x22:\x22face_in_clouds\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22😏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smirking\x20face\x22,\x22slug\x22:\x22smirking_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22unamused\x20face\x22,\x22slug\x22:\x22unamused_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20rolling\x20eyes\x22,\x22slug\x22:\x22face_with_rolling_eyes\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grimacing\x20face\x22,\x22slug\x22:\x22grimacing_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😮‍💨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20exhaling\x22,\x22slug\x22:\x22face_exhaling\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22🤥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lying\x20face\x22,\x22slug\x22:\x22lying_face\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22😌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22relieved\x20face\x22,\x22slug\x22:\x22relieved_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pensive\x20face\x22,\x22slug\x22:\x22pensive_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sleepy\x20face\x22,\x22slug\x22:\x22sleepy_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22drooling\x20face\x22,\x22slug\x22:\x22drooling_face\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22😴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sleeping\x20face\x22,\x22slug\x22:\x22sleeping_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20medical\x20mask\x22,\x22slug\x22:\x22face_with_medical_mask\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20thermometer\x22,\x22slug\x22:\x22face_with_thermometer\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20head-bandage\x22,\x22slug\x22:\x22face_with_head_bandage\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22nauseated\x20face\x22,\x22slug\x22:\x22nauseated_face\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20vomiting\x22,\x22slug\x22:\x22face_vomiting\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sneezing\x20face\x22,\x22slug\x22:\x22sneezing_face\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hot\x20face\x22,\x22slug\x22:\x22hot_face\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cold\x20face\x22,\x22slug\x22:\x22cold_face\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woozy\x20face\x22,\x22slug\x22:\x22woozy_face\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22😵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22knocked-out\x20face\x22,\x22slug\x22:\x22knocked_out_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😵‍💫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20spiral\x20eyes\x22,\x22slug\x22:\x22face_with_spiral_eyes\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22🤯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22exploding\x20head\x22,\x22slug\x22:\x22exploding_head\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cowboy\x20hat\x20face\x22,\x22slug\x22:\x22cowboy_hat_face\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22partying\x20face\x22,\x22slug\x22:\x22partying_face\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22😎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x20with\x20sunglasses\x22,\x22slug\x22:\x22smiling_face_with_sunglasses\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22nerd\x20face\x22,\x22slug\x22:\x22nerd_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🧐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20monocle\x22,\x22slug\x22:\x22face_with_monocle\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22😕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22confused\x20face\x22,\x22slug\x22:\x22confused_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22worried\x20face\x22,\x22slug\x22:\x22worried_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🙁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22slightly\x20frowning\x20face\x22,\x22slug\x22:\x22slightly_frowning_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22☹️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22frowning\x20face\x22,\x22slug\x22:\x22frowning_face\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22😮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20open\x20mouth\x22,\x22slug\x22:\x22face_with_open_mouth\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hushed\x20face\x22,\x22slug\x22:\x22hushed_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22astonished\x20face\x22,\x22slug\x22:\x22astonished_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flushed\x20face\x22,\x22slug\x22:\x22flushed_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pleading\x20face\x22,\x22slug\x22:\x22pleading_face\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22😦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22frowning\x20face\x20with\x20open\x20mouth\x22,\x22slug\x22:\x22frowning_face_with_open_mouth\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22anguished\x20face\x22,\x22slug\x22:\x22anguished_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fearful\x20face\x22,\x22slug\x22:\x22fearful_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22anxious\x20face\x20with\x20sweat\x22,\x22slug\x22:\x22anxious_face_with_sweat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sad\x20but\x20relieved\x20face\x22,\x22slug\x22:\x22sad_but_relieved_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crying\x20face\x22,\x22slug\x22:\x22crying_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22loudly\x20crying\x20face\x22,\x22slug\x22:\x22loudly_crying_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20screaming\x20in\x20fear\x22,\x22slug\x22:\x22face_screaming_in_fear\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22confounded\x20face\x22,\x22slug\x22:\x22confounded_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22persevering\x20face\x22,\x22slug\x22:\x22persevering_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22disappointed\x20face\x22,\x22slug\x22:\x22disappointed_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22downcast\x20face\x20with\x20sweat\x22,\x22slug\x22:\x22downcast_face_with_sweat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22weary\x20face\x22,\x22slug\x22:\x22weary_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tired\x20face\x22,\x22slug\x22:\x22tired_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yawning\x20face\x22,\x22slug\x22:\x22yawning_face\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22😤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20steam\x20from\x20nose\x22,\x22slug\x22:\x22face_with_steam_from_nose\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pouting\x20face\x22,\x22slug\x22:\x22pouting_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22angry\x20face\x22,\x22slug\x22:\x22angry_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22face\x20with\x20symbols\x20on\x20mouth\x22,\x22slug\x22:\x22face_with_symbols_on_mouth\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22😈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20face\x20with\x20horns\x22,\x22slug\x22:\x22smiling_face_with_horns\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22👿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22angry\x20face\x20with\x20horns\x22,\x22slug\x22:\x22angry_face_with_horns\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22skull\x22,\x22slug\x22:\x22skull\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☠️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22skull\x20and\x20crossbones\x22,\x22slug\x22:\x22skull_and_crossbones\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pile\x20of\x20poo\x22,\x22slug\x22:\x22pile_of_poo\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clown\x20face\x22,\x22slug\x22:\x22clown_face\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22👹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ogre\x22,\x22slug\x22:\x22ogre\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22goblin\x22,\x22slug\x22:\x22goblin\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ghost\x22,\x22slug\x22:\x22ghost\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22alien\x22,\x22slug\x22:\x22alien\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22alien\x20monster\x22,\x22slug\x22:\x22alien_monster\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22robot\x22,\x22slug\x22:\x22robot\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22😺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20cat\x22,\x22slug\x22:\x22grinning_cat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grinning\x20cat\x20with\x20smiling\x20eyes\x22,\x22slug\x22:\x22grinning_cat_with_smiling_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cat\x20with\x20tears\x20of\x20joy\x22,\x22slug\x22:\x22cat_with_tears_of_joy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22smiling\x20cat\x20with\x20heart-eyes\x22,\x22slug\x22:\x22smiling_cat_with_heart_eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cat\x20with\x20wry\x20smile\x22,\x22slug\x22:\x22cat_with_wry_smile\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kissing\x20cat\x22,\x22slug\x22:\x22kissing_cat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22weary\x20cat\x22,\x22slug\x22:\x22weary_cat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crying\x20cat\x22,\x22slug\x22:\x22crying_cat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22😾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pouting\x20cat\x22,\x22slug\x22:\x22pouting_cat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22see-no-evil\x20monkey\x22,\x22slug\x22:\x22see_no_evil_monkey\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hear-no-evil\x20monkey\x22,\x22slug\x22:\x22hear_no_evil_monkey\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speak-no-evil\x20monkey\x22,\x22slug\x22:\x22speak_no_evil_monkey\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kiss\x20mark\x22,\x22slug\x22:\x22kiss_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22love\x20letter\x22,\x22slug\x22:\x22love_letter\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heart\x20with\x20arrow\x22,\x22slug\x22:\x22heart_with_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heart\x20with\x20ribbon\x22,\x22slug\x22:\x22heart_with_ribbon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sparkling\x20heart\x22,\x22slug\x22:\x22sparkling_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22growing\x20heart\x22,\x22slug\x22:\x22growing_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22beating\x20heart\x22,\x22slug\x22:\x22beating_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22revolving\x20hearts\x22,\x22slug\x22:\x22revolving_hearts\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22two\x20hearts\x22,\x22slug\x22:\x22two_hearts\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heart\x20decoration\x22,\x22slug\x22:\x22heart_decoration\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❣️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heart\x20exclamation\x22,\x22slug\x22:\x22heart_exclamation\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22broken\x20heart\x22,\x22slug\x22:\x22broken_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❤️‍🔥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heart\x20on\x20fire\x22,\x22slug\x22:\x22heart_on_fire\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22❤️‍🩹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mending\x20heart\x22,\x22slug\x22:\x22mending_heart\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22❤️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20heart\x22,\x22slug\x22:\x22red_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22orange\x20heart\x22,\x22slug\x22:\x22orange_heart\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22💛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yellow\x20heart\x22,\x22slug\x22:\x22yellow_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22green\x20heart\x22,\x22slug\x22:\x22green_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22blue\x20heart\x22,\x22slug\x22:\x22blue_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22purple\x20heart\x22,\x22slug\x22:\x22purple_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22brown\x20heart\x22,\x22slug\x22:\x22brown_heart\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🖤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20heart\x22,\x22slug\x22:\x22black_heart\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20heart\x22,\x22slug\x22:\x22white_heart\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22💯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hundred\x20points\x22,\x22slug\x22:\x22hundred_points\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22anger\x20symbol\x22,\x22slug\x22:\x22anger_symbol\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22collision\x22,\x22slug\x22:\x22collision\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dizzy\x22,\x22slug\x22:\x22dizzy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sweat\x20droplets\x22,\x22slug\x22:\x22sweat_droplets\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dashing\x20away\x22,\x22slug\x22:\x22dashing_away\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕳️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hole\x22,\x22slug\x22:\x22hole\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22💣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bomb\x22,\x22slug\x22:\x22bomb\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speech\x20balloon\x22,\x22slug\x22:\x22speech_balloon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👁️‍🗨️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eye\x20in\x20speech\x20bubble\x22,\x22slug\x22:\x22eye_in_speech_bubble\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🗨️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22left\x20speech\x20bubble\x22,\x22slug\x22:\x22left_speech_bubble\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🗯️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22right\x20anger\x20bubble\x22,\x22slug\x22:\x22right_anger_bubble\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22💭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22thought\x20balloon\x22,\x22slug\x22:\x22thought_balloon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22zzz\x22,\x22slug\x22:\x22zzz\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22}],\x22People\x20&\x20Body\x22:[{\x22emoji\x22:\x22👋\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22waving\x20hand\x22,\x22slug\x22:\x22waving_hand\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤚\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22raised\x20back\x20of\x20hand\x22,\x22slug\x22:\x22raised_back_of_hand\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🖐️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22hand\x20with\x20fingers\x20splayed\x22,\x22slug\x22:\x22hand_with_fingers_splayed\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22✋\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22raised\x20hand\x22,\x22slug\x22:\x22raised_hand\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🖖\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22vulcan\x20salute\x22,\x22slug\x22:\x22vulcan_salute\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22👌\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22OK\x20hand\x22,\x22slug\x22:\x22ok_hand\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤏\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22pinching\x20hand\x22,\x22slug\x22:\x22pinching_hand\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22✌️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22victory\x20hand\x22,\x22slug\x22:\x22victory_hand\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤞\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22crossed\x20fingers\x22,\x22slug\x22:\x22crossed_fingers\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤟\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22love-you\x20gesture\x22,\x22slug\x22:\x22love_you_gesture\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤘\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22sign\x20of\x20the\x20horns\x22,\x22slug\x22:\x22sign_of_the_horns\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🤙\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22call\x20me\x20hand\x22,\x22slug\x22:\x22call_me_hand\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22👈\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22backhand\x20index\x20pointing\x20left\x22,\x22slug\x22:\x22backhand_index_pointing_left\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👉\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22backhand\x20index\x20pointing\x20right\x22,\x22slug\x22:\x22backhand_index_pointing_right\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👆\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22backhand\x20index\x20pointing\x20up\x22,\x22slug\x22:\x22backhand_index_pointing_up\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🖕\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22middle\x20finger\x22,\x22slug\x22:\x22middle_finger\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22👇\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22backhand\x20index\x20pointing\x20down\x22,\x22slug\x22:\x22backhand_index_pointing_down\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☝️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22index\x20pointing\x20up\x22,\x22slug\x22:\x22index_pointing_up\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👍\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22thumbs\x20up\x22,\x22slug\x22:\x22thumbs_up\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👎\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22thumbs\x20down\x22,\x22slug\x22:\x22thumbs_down\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✊\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22raised\x20fist\x22,\x22slug\x22:\x22raised_fist\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👊\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22oncoming\x20fist\x22,\x22slug\x22:\x22oncoming_fist\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤛\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22left-facing\x20fist\x22,\x22slug\x22:\x22left_facing_fist\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤜\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22right-facing\x20fist\x22,\x22slug\x22:\x22right_facing_fist\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22👏\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22clapping\x20hands\x22,\x22slug\x22:\x22clapping_hands\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙌\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22raising\x20hands\x22,\x22slug\x22:\x22raising_hands\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👐\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22open\x20hands\x22,\x22slug\x22:\x22open_hands\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤲\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22palms\x20up\x20together\x22,\x22slug\x22:\x22palms_up_together\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22handshake\x22,\x22slug\x22:\x22handshake\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🙏\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22folded\x20hands\x22,\x22slug\x22:\x22folded_hands\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✍️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22writing\x20hand\x22,\x22slug\x22:\x22writing_hand\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22💅\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22nail\x20polish\x22,\x22slug\x22:\x22nail_polish\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22selfie\x22,\x22slug\x22:\x22selfie\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22💪\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22flexed\x20biceps\x22,\x22slug\x22:\x22flexed_biceps\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mechanical\x20arm\x22,\x22slug\x22:\x22mechanical_arm\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mechanical\x20leg\x22,\x22slug\x22:\x22mechanical_leg\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦵\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22leg\x22,\x22slug\x22:\x22leg\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦶\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22foot\x22,\x22slug\x22:\x22foot\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👂\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22ear\x22,\x22slug\x22:\x22ear\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦻\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22ear\x20with\x20hearing\x20aid\x22,\x22slug\x22:\x22ear_with_hearing_aid\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👃\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22nose\x22,\x22slug\x22:\x22nose\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22brain\x22,\x22slug\x22:\x22brain\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🦷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tooth\x22,\x22slug\x22:\x22tooth\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bone\x22,\x22slug\x22:\x22bone\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eyes\x22,\x22slug\x22:\x22eyes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👁️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eye\x22,\x22slug\x22:\x22eye\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22👅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tongue\x22,\x22slug\x22:\x22tongue\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mouth\x22,\x22slug\x22:\x22mouth\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👶\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22baby\x22,\x22slug\x22:\x22baby\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧒\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22child\x22,\x22slug\x22:\x22child\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22👦\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22boy\x22,\x22slug\x22:\x22boy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👧\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22girl\x22,\x22slug\x22:\x22girl\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧑\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22person\x22,\x22slug\x22:\x22person\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22👱\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20blond\x20hair\x22,\x22slug\x22:\x22person_blond_hair\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22man\x22,\x22slug\x22:\x22man\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧔\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22person\x20beard\x22,\x22slug\x22:\x22person_beard\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧔‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22man\x20beard\x22,\x22slug\x22:\x22man_beard\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22🧔‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22woman\x20beard\x22,\x22slug\x22:\x22woman_beard\x22,\x22unicode_version\x22:\x2213.1\x22,\x22emoji_version\x22:\x2213.1\x22},{\x22emoji\x22:\x22👨‍🦰\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22man\x20red\x20hair\x22,\x22slug\x22:\x22man_red_hair\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👨‍🦱\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22man\x20curly\x20hair\x22,\x22slug\x22:\x22man_curly_hair\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👨‍🦳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22man\x20white\x20hair\x22,\x22slug\x22:\x22man_white_hair\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👨‍🦲\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22man\x20bald\x22,\x22slug\x22:\x22man_bald\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👩\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22woman\x22,\x22slug\x22:\x22woman\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👩‍🦰\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22woman\x20red\x20hair\x22,\x22slug\x22:\x22woman_red_hair\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧑‍🦰\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20red\x20hair\x22,\x22slug\x22:\x22person_red_hair\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👩‍🦱\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22woman\x20curly\x20hair\x22,\x22slug\x22:\x22woman_curly_hair\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧑‍🦱\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20curly\x20hair\x22,\x22slug\x22:\x22person_curly_hair\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👩‍🦳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22woman\x20white\x20hair\x22,\x22slug\x22:\x22woman_white_hair\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧑‍🦳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20white\x20hair\x22,\x22slug\x22:\x22person_white_hair\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👩‍🦲\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22woman\x20bald\x22,\x22slug\x22:\x22woman_bald\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧑‍🦲\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20bald\x22,\x22slug\x22:\x22person_bald\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👱‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20blond\x20hair\x22,\x22slug\x22:\x22woman_blond_hair\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👱‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20blond\x20hair\x22,\x22slug\x22:\x22man_blond_hair\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧓\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22older\x20person\x22,\x22slug\x22:\x22older_person\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22👴\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22old\x20man\x22,\x22slug\x22:\x22old_man\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👵\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22old\x20woman\x22,\x22slug\x22:\x22old_woman\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙍\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20frowning\x22,\x22slug\x22:\x22person_frowning\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙍‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20frowning\x22,\x22slug\x22:\x22man_frowning\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙍‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20frowning\x22,\x22slug\x22:\x22woman_frowning\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙎\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20pouting\x22,\x22slug\x22:\x22person_pouting\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙎‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20pouting\x22,\x22slug\x22:\x22man_pouting\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙎‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20pouting\x22,\x22slug\x22:\x22woman_pouting\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙅\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20gesturing\x20NO\x22,\x22slug\x22:\x22person_gesturing_no\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙅‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20gesturing\x20NO\x22,\x22slug\x22:\x22man_gesturing_no\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙅‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20gesturing\x20NO\x22,\x22slug\x22:\x22woman_gesturing_no\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙆\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20gesturing\x20OK\x22,\x22slug\x22:\x22person_gesturing_ok\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙆‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20gesturing\x20OK\x22,\x22slug\x22:\x22man_gesturing_ok\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙆‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20gesturing\x20OK\x22,\x22slug\x22:\x22woman_gesturing_ok\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💁\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20tipping\x20hand\x22,\x22slug\x22:\x22person_tipping_hand\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💁‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20tipping\x20hand\x22,\x22slug\x22:\x22man_tipping_hand\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💁‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20tipping\x20hand\x22,\x22slug\x22:\x22woman_tipping_hand\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙋\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20raising\x20hand\x22,\x22slug\x22:\x22person_raising_hand\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙋‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20raising\x20hand\x22,\x22slug\x22:\x22man_raising_hand\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙋‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20raising\x20hand\x22,\x22slug\x22:\x22woman_raising_hand\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧏\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22deaf\x20person\x22,\x22slug\x22:\x22deaf_person\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧏‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22deaf\x20man\x22,\x22slug\x22:\x22deaf_man\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧏‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22deaf\x20woman\x22,\x22slug\x22:\x22deaf_woman\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🙇\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20bowing\x22,\x22slug\x22:\x22person_bowing\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🙇‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20bowing\x22,\x22slug\x22:\x22man_bowing\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🙇‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20bowing\x22,\x22slug\x22:\x22woman_bowing\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤦\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20facepalming\x22,\x22slug\x22:\x22person_facepalming\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤦‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20facepalming\x22,\x22slug\x22:\x22man_facepalming\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤦‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20facepalming\x22,\x22slug\x22:\x22woman_facepalming\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤷\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20shrugging\x22,\x22slug\x22:\x22person_shrugging\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤷‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20shrugging\x22,\x22slug\x22:\x22man_shrugging\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤷‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20shrugging\x22,\x22slug\x22:\x22woman_shrugging\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍⚕️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22health\x20worker\x22,\x22slug\x22:\x22health_worker\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍⚕️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20health\x20worker\x22,\x22slug\x22:\x22man_health_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍⚕️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20health\x20worker\x22,\x22slug\x22:\x22woman_health_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🎓\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22student\x22,\x22slug\x22:\x22student\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🎓\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20student\x22,\x22slug\x22:\x22man_student\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🎓\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20student\x22,\x22slug\x22:\x22woman_student\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🏫\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22teacher\x22,\x22slug\x22:\x22teacher\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🏫\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20teacher\x22,\x22slug\x22:\x22man_teacher\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🏫\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20teacher\x22,\x22slug\x22:\x22woman_teacher\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍⚖️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22judge\x22,\x22slug\x22:\x22judge\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍⚖️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20judge\x22,\x22slug\x22:\x22man_judge\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍⚖️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20judge\x22,\x22slug\x22:\x22woman_judge\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🌾\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22farmer\x22,\x22slug\x22:\x22farmer\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🌾\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20farmer\x22,\x22slug\x22:\x22man_farmer\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🌾\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20farmer\x22,\x22slug\x22:\x22woman_farmer\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🍳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22cook\x22,\x22slug\x22:\x22cook\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🍳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20cook\x22,\x22slug\x22:\x22man_cook\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🍳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20cook\x22,\x22slug\x22:\x22woman_cook\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🔧\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22mechanic\x22,\x22slug\x22:\x22mechanic\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🔧\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20mechanic\x22,\x22slug\x22:\x22man_mechanic\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🔧\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20mechanic\x22,\x22slug\x22:\x22woman_mechanic\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🏭\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22factory\x20worker\x22,\x22slug\x22:\x22factory_worker\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🏭\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20factory\x20worker\x22,\x22slug\x22:\x22man_factory_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🏭\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20factory\x20worker\x22,\x22slug\x22:\x22woman_factory_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍💼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22office\x20worker\x22,\x22slug\x22:\x22office_worker\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍💼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20office\x20worker\x22,\x22slug\x22:\x22man_office_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍💼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20office\x20worker\x22,\x22slug\x22:\x22woman_office_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🔬\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22scientist\x22,\x22slug\x22:\x22scientist\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🔬\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20scientist\x22,\x22slug\x22:\x22man_scientist\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🔬\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20scientist\x22,\x22slug\x22:\x22woman_scientist\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍💻\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22technologist\x22,\x22slug\x22:\x22technologist\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍💻\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20technologist\x22,\x22slug\x22:\x22man_technologist\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍💻\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20technologist\x22,\x22slug\x22:\x22woman_technologist\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🎤\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22singer\x22,\x22slug\x22:\x22singer\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🎤\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20singer\x22,\x22slug\x22:\x22man_singer\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🎤\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20singer\x22,\x22slug\x22:\x22woman_singer\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🎨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22artist\x22,\x22slug\x22:\x22artist\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🎨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20artist\x22,\x22slug\x22:\x22man_artist\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🎨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20artist\x22,\x22slug\x22:\x22woman_artist\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍✈️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22pilot\x22,\x22slug\x22:\x22pilot\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍✈️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20pilot\x22,\x22slug\x22:\x22man_pilot\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍✈️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20pilot\x22,\x22slug\x22:\x22woman_pilot\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🚀\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22astronaut\x22,\x22slug\x22:\x22astronaut\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🚀\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20astronaut\x22,\x22slug\x22:\x22man_astronaut\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🚀\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20astronaut\x22,\x22slug\x22:\x22woman_astronaut\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧑‍🚒\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22firefighter\x22,\x22slug\x22:\x22firefighter\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🚒\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20firefighter\x22,\x22slug\x22:\x22man_firefighter\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍🚒\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20firefighter\x22,\x22slug\x22:\x22woman_firefighter\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👮\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22police\x20officer\x22,\x22slug\x22:\x22police_officer\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👮‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20police\x20officer\x22,\x22slug\x22:\x22man_police_officer\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👮‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20police\x20officer\x22,\x22slug\x22:\x22woman_police_officer\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🕵️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x222.0\x22,\x22name\x22:\x22detective\x22,\x22slug\x22:\x22detective\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕵️‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20detective\x22,\x22slug\x22:\x22man_detective\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🕵️‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20detective\x22,\x22slug\x22:\x22woman_detective\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💂\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22guard\x22,\x22slug\x22:\x22guard\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💂‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20guard\x22,\x22slug\x22:\x22man_guard\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💂‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20guard\x22,\x22slug\x22:\x22woman_guard\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👷\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22construction\x20worker\x22,\x22slug\x22:\x22construction_worker\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👷‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20construction\x20worker\x22,\x22slug\x22:\x22man_construction_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👷‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20construction\x20worker\x22,\x22slug\x22:\x22woman_construction_worker\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤴\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22prince\x22,\x22slug\x22:\x22prince\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22👸\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22princess\x22,\x22slug\x22:\x22princess\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👳\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20wearing\x20turban\x22,\x22slug\x22:\x22person_wearing_turban\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👳‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20wearing\x20turban\x22,\x22slug\x22:\x22man_wearing_turban\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👳‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20wearing\x20turban\x22,\x22slug\x22:\x22woman_wearing_turban\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👲\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20with\x20skullcap\x22,\x22slug\x22:\x22person_with_skullcap\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧕\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20with\x20headscarf\x22,\x22slug\x22:\x22woman_with_headscarf\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤵\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20in\x20tuxedo\x22,\x22slug\x22:\x22person_in_tuxedo\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤵‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22man\x20in\x20tuxedo\x22,\x22slug\x22:\x22man_in_tuxedo\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🤵‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22woman\x20in\x20tuxedo\x22,\x22slug\x22:\x22woman_in_tuxedo\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22👰\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20with\x20veil\x22,\x22slug\x22:\x22person_with_veil\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👰‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22man\x20with\x20veil\x22,\x22slug\x22:\x22man_with_veil\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22👰‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22woman\x20with\x20veil\x22,\x22slug\x22:\x22woman_with_veil\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🤰\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22pregnant\x20woman\x22,\x22slug\x22:\x22pregnant_woman\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤱\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22breast-feeding\x22,\x22slug\x22:\x22breast_feeding\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22👩‍🍼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22woman\x20feeding\x20baby\x22,\x22slug\x22:\x22woman_feeding_baby\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22👨‍🍼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22man\x20feeding\x20baby\x22,\x22slug\x22:\x22man_feeding_baby\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🧑‍🍼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22person\x20feeding\x20baby\x22,\x22slug\x22:\x22person_feeding_baby\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22👼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22baby\x20angel\x22,\x22slug\x22:\x22baby_angel\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎅\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22Santa\x20Claus\x22,\x22slug\x22:\x22santa_claus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤶\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22Mrs.\x20Claus\x22,\x22slug\x22:\x22mrs_claus\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🧑‍🎄\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.0\x22,\x22name\x22:\x22mx\x20claus\x22,\x22slug\x22:\x22mx_claus\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🦸\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22superhero\x22,\x22slug\x22:\x22superhero\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦸‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22man\x20superhero\x22,\x22slug\x22:\x22man_superhero\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦸‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22woman\x20superhero\x22,\x22slug\x22:\x22woman_superhero\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦹\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22supervillain\x22,\x22slug\x22:\x22supervillain\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦹‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22man\x20supervillain\x22,\x22slug\x22:\x22man_supervillain\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦹‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2211.0\x22,\x22name\x22:\x22woman\x20supervillain\x22,\x22slug\x22:\x22woman_supervillain\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧙\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22mage\x22,\x22slug\x22:\x22mage\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧙‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20mage\x22,\x22slug\x22:\x22man_mage\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧙‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20mage\x22,\x22slug\x22:\x22woman_mage\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧚\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22fairy\x22,\x22slug\x22:\x22fairy\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧚‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20fairy\x22,\x22slug\x22:\x22man_fairy\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧚‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20fairy\x22,\x22slug\x22:\x22woman_fairy\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧛\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22vampire\x22,\x22slug\x22:\x22vampire\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧛‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20vampire\x22,\x22slug\x22:\x22man_vampire\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧛‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20vampire\x22,\x22slug\x22:\x22woman_vampire\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧜\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22merperson\x22,\x22slug\x22:\x22merperson\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧜‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22merman\x22,\x22slug\x22:\x22merman\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧜‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22mermaid\x22,\x22slug\x22:\x22mermaid\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧝\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22elf\x22,\x22slug\x22:\x22elf\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧝‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20elf\x22,\x22slug\x22:\x22man_elf\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧝‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20elf\x22,\x22slug\x22:\x22woman_elf\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22genie\x22,\x22slug\x22:\x22genie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧞‍♂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22man\x20genie\x22,\x22slug\x22:\x22man_genie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧞‍♀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woman\x20genie\x22,\x22slug\x22:\x22woman_genie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22zombie\x22,\x22slug\x22:\x22zombie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧟‍♂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22man\x20zombie\x22,\x22slug\x22:\x22man_zombie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧟‍♀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woman\x20zombie\x22,\x22slug\x22:\x22woman_zombie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22💆\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20getting\x20massage\x22,\x22slug\x22:\x22person_getting_massage\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💆‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20getting\x20massage\x22,\x22slug\x22:\x22man_getting_massage\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💆‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20getting\x20massage\x22,\x22slug\x22:\x22woman_getting_massage\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💇\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20getting\x20haircut\x22,\x22slug\x22:\x22person_getting_haircut\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💇‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20getting\x20haircut\x22,\x22slug\x22:\x22man_getting_haircut\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💇‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20getting\x20haircut\x22,\x22slug\x22:\x22woman_getting_haircut\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚶\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20walking\x22,\x22slug\x22:\x22person_walking\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚶‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20walking\x22,\x22slug\x22:\x22man_walking\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚶‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20walking\x22,\x22slug\x22:\x22woman_walking\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧍\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22person\x20standing\x22,\x22slug\x22:\x22person_standing\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧍‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22man\x20standing\x22,\x22slug\x22:\x22man_standing\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧍‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22woman\x20standing\x22,\x22slug\x22:\x22woman_standing\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧎\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22person\x20kneeling\x22,\x22slug\x22:\x22person_kneeling\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧎‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22man\x20kneeling\x22,\x22slug\x22:\x22man_kneeling\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧎‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22woman\x20kneeling\x22,\x22slug\x22:\x22woman_kneeling\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧑‍🦯\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20with\x20white\x20cane\x22,\x22slug\x22:\x22person_with_white_cane\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🦯\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22man\x20with\x20white\x20cane\x22,\x22slug\x22:\x22man_with_white_cane\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👩‍🦯\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22woman\x20with\x20white\x20cane\x22,\x22slug\x22:\x22woman_with_white_cane\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧑‍🦼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20in\x20motorized\x20wheelchair\x22,\x22slug\x22:\x22person_in_motorized_wheelchair\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🦼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22man\x20in\x20motorized\x20wheelchair\x22,\x22slug\x22:\x22man_in_motorized_wheelchair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👩‍🦼\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22woman\x20in\x20motorized\x20wheelchair\x22,\x22slug\x22:\x22woman_in_motorized_wheelchair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧑‍🦽\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.1\x22,\x22name\x22:\x22person\x20in\x20manual\x20wheelchair\x22,\x22slug\x22:\x22person_in_manual_wheelchair\x22,\x22unicode_version\x22:\x2212.1\x22,\x22emoji_version\x22:\x2212.1\x22},{\x22emoji\x22:\x22👨‍🦽\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22man\x20in\x20manual\x20wheelchair\x22,\x22slug\x22:\x22man_in_manual_wheelchair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👩‍🦽\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22woman\x20in\x20manual\x20wheelchair\x22,\x22slug\x22:\x22woman_in_manual_wheelchair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🏃\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20running\x22,\x22slug\x22:\x22person_running\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏃‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20running\x22,\x22slug\x22:\x22man_running\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏃‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20running\x22,\x22slug\x22:\x22woman_running\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22💃\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22woman\x20dancing\x22,\x22slug\x22:\x22woman_dancing\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕺\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22man\x20dancing\x22,\x22slug\x22:\x22man_dancing\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🕴️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22person\x20in\x20suit\x20levitating\x22,\x22slug\x22:\x22person_in_suit_levitating\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22👯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22people\x20with\x20bunny\x20ears\x22,\x22slug\x22:\x22people_with_bunny_ears\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👯‍♂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22men\x20with\x20bunny\x20ears\x22,\x22slug\x22:\x22men_with_bunny_ears\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👯‍♀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22women\x20with\x20bunny\x20ears\x22,\x22slug\x22:\x22women_with_bunny_ears\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧖\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22person\x20in\x20steamy\x20room\x22,\x22slug\x22:\x22person_in_steamy_room\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧖‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20in\x20steamy\x20room\x22,\x22slug\x22:\x22man_in_steamy_room\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧖‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20in\x20steamy\x20room\x22,\x22slug\x22:\x22woman_in_steamy_room\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧗\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22person\x20climbing\x22,\x22slug\x22:\x22person_climbing\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧗‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20climbing\x22,\x22slug\x22:\x22man_climbing\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧗‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20climbing\x22,\x22slug\x22:\x22woman_climbing\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🤺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22person\x20fencing\x22,\x22slug\x22:\x22person_fencing\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🏇\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22horse\x20racing\x22,\x22slug\x22:\x22horse_racing\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⛷️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22skier\x22,\x22slug\x22:\x22skier\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏂\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22snowboarder\x22,\x22slug\x22:\x22snowboarder\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏌️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22person\x20golfing\x22,\x22slug\x22:\x22person_golfing\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏌️‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20golfing\x22,\x22slug\x22:\x22man_golfing\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏌️‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20golfing\x22,\x22slug\x22:\x22woman_golfing\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏄\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20surfing\x22,\x22slug\x22:\x22person_surfing\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏄‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20surfing\x22,\x22slug\x22:\x22man_surfing\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏄‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20surfing\x22,\x22slug\x22:\x22woman_surfing\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚣\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20rowing\x20boat\x22,\x22slug\x22:\x22person_rowing_boat\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚣‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20rowing\x20boat\x22,\x22slug\x22:\x22man_rowing_boat\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚣‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20rowing\x20boat\x22,\x22slug\x22:\x22woman_rowing_boat\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏊\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20swimming\x22,\x22slug\x22:\x22person_swimming\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏊‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20swimming\x22,\x22slug\x22:\x22man_swimming\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏊‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20swimming\x22,\x22slug\x22:\x22woman_swimming\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22⛹️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x222.0\x22,\x22name\x22:\x22person\x20bouncing\x20ball\x22,\x22slug\x22:\x22person_bouncing_ball\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⛹️‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20bouncing\x20ball\x22,\x22slug\x22:\x22man_bouncing_ball\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22⛹️‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20bouncing\x20ball\x22,\x22slug\x22:\x22woman_bouncing_ball\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏋️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x222.0\x22,\x22name\x22:\x22person\x20lifting\x20weights\x22,\x22slug\x22:\x22person_lifting_weights\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏋️‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20lifting\x20weights\x22,\x22slug\x22:\x22man_lifting_weights\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏋️‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20lifting\x20weights\x22,\x22slug\x22:\x22woman_lifting_weights\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚴\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20biking\x22,\x22slug\x22:\x22person_biking\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚴‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20biking\x22,\x22slug\x22:\x22man_biking\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚴‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20biking\x22,\x22slug\x22:\x22woman_biking\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚵\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20mountain\x20biking\x22,\x22slug\x22:\x22person_mountain_biking\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚵‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20mountain\x20biking\x22,\x22slug\x22:\x22man_mountain_biking\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🚵‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20mountain\x20biking\x22,\x22slug\x22:\x22woman_mountain_biking\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤸\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20cartwheeling\x22,\x22slug\x22:\x22person_cartwheeling\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤸‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20cartwheeling\x22,\x22slug\x22:\x22man_cartwheeling\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤸‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20cartwheeling\x22,\x22slug\x22:\x22woman_cartwheeling\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22people\x20wrestling\x22,\x22slug\x22:\x22people_wrestling\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤼‍♂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22men\x20wrestling\x22,\x22slug\x22:\x22men_wrestling\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤼‍♀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22women\x20wrestling\x22,\x22slug\x22:\x22women_wrestling\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤽\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20playing\x20water\x20polo\x22,\x22slug\x22:\x22person_playing_water_polo\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤽‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20playing\x20water\x20polo\x22,\x22slug\x22:\x22man_playing_water_polo\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤽‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20playing\x20water\x20polo\x22,\x22slug\x22:\x22woman_playing_water_polo\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤾\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20playing\x20handball\x22,\x22slug\x22:\x22person_playing_handball\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤾‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20playing\x20handball\x22,\x22slug\x22:\x22man_playing_handball\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤾‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20playing\x20handball\x22,\x22slug\x22:\x22woman_playing_handball\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤹\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x223.0\x22,\x22name\x22:\x22person\x20juggling\x22,\x22slug\x22:\x22person_juggling\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🤹‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22man\x20juggling\x22,\x22slug\x22:\x22man_juggling\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🤹‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22woman\x20juggling\x22,\x22slug\x22:\x22woman_juggling\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🧘\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22person\x20in\x20lotus\x20position\x22,\x22slug\x22:\x22person_in_lotus_position\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧘‍♂️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22man\x20in\x20lotus\x20position\x22,\x22slug\x22:\x22man_in_lotus_position\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧘‍♀️\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x225.0\x22,\x22name\x22:\x22woman\x20in\x20lotus\x20position\x22,\x22slug\x22:\x22woman_in_lotus_position\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🛀\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x221.0\x22,\x22name\x22:\x22person\x20taking\x20bath\x22,\x22slug\x22:\x22person_taking_bath\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛌\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x224.0\x22,\x22name\x22:\x22person\x20in\x20bed\x22,\x22slug\x22:\x22person_in_bed\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🧑‍🤝‍🧑\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22people\x20holding\x20hands\x22,\x22slug\x22:\x22people_holding_hands\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👭\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22women\x20holding\x20hands\x22,\x22slug\x22:\x22women_holding_hands\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22👫\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22woman\x20and\x20man\x20holding\x20hands\x22,\x22slug\x22:\x22woman_and_man_holding_hands\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👬\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2212.0\x22,\x22name\x22:\x22men\x20holding\x20hands\x22,\x22slug\x22:\x22men_holding_hands\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💏\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22kiss\x22,\x22slug\x22:\x22kiss\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👩‍❤️‍💋‍👨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22kiss\x20woman,\x20man\x22,\x22slug\x22:\x22kiss_woman_man\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍❤️‍💋‍👨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22kiss\x20man,\x20man\x22,\x22slug\x22:\x22kiss_man_man\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍❤️‍💋‍👩\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22kiss\x20woman,\x20woman\x22,\x22slug\x22:\x22kiss_woman_woman\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22💑\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22couple\x20with\x20heart\x22,\x22slug\x22:\x22couple_with_heart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👩‍❤️‍👨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22couple\x20with\x20heart\x20woman,\x20man\x22,\x22slug\x22:\x22couple_with_heart_woman_man\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍❤️‍👨\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22couple\x20with\x20heart\x20man,\x20man\x22,\x22slug\x22:\x22couple_with_heart_man_man\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍❤️‍👩\x22,\x22skin_tone_support\x22:true,\x22skin_tone_support_unicode_version\x22:\x2213.1\x22,\x22name\x22:\x22couple\x20with\x20heart\x20woman,\x20woman\x22,\x22slug\x22:\x22couple_with_heart_woman_woman\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x22,\x22slug\x22:\x22family\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👨‍👩‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20woman,\x20boy\x22,\x22slug\x22:\x22family_man_woman_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👩‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20woman,\x20girl\x22,\x22slug\x22:\x22family_man_woman_girl\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👩‍👧‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20woman,\x20girl,\x20boy\x22,\x22slug\x22:\x22family_man_woman_girl_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👩‍👦‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20woman,\x20boy,\x20boy\x22,\x22slug\x22:\x22family_man_woman_boy_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👩‍👧‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20woman,\x20girl,\x20girl\x22,\x22slug\x22:\x22family_man_woman_girl_girl\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👨‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20man,\x20boy\x22,\x22slug\x22:\x22family_man_man_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👨‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20man,\x20girl\x22,\x22slug\x22:\x22family_man_man_girl\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👨‍👧‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20man,\x20girl,\x20boy\x22,\x22slug\x22:\x22family_man_man_girl_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👨‍👦‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20man,\x20boy,\x20boy\x22,\x22slug\x22:\x22family_man_man_boy_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👨‍👧‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20man,\x20girl,\x20girl\x22,\x22slug\x22:\x22family_man_man_girl_girl\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍👩‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20woman,\x20boy\x22,\x22slug\x22:\x22family_woman_woman_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍👩‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20woman,\x20girl\x22,\x22slug\x22:\x22family_woman_woman_girl\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍👩‍👧‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20woman,\x20girl,\x20boy\x22,\x22slug\x22:\x22family_woman_woman_girl_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍👩‍👦‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20woman,\x20boy,\x20boy\x22,\x22slug\x22:\x22family_woman_woman_boy_boy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👩‍👩‍👧‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20woman,\x20girl,\x20girl\x22,\x22slug\x22:\x22family_woman_woman_girl_girl\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22👨‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20boy\x22,\x22slug\x22:\x22family_man_boy\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👨‍👦‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20boy,\x20boy\x22,\x22slug\x22:\x22family_man_boy_boy\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👨‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20girl\x22,\x22slug\x22:\x22family_man_girl\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👨‍👧‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20girl,\x20boy\x22,\x22slug\x22:\x22family_man_girl_boy\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👨‍👧‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20man,\x20girl,\x20girl\x22,\x22slug\x22:\x22family_man_girl_girl\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20boy\x22,\x22slug\x22:\x22family_woman_boy\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍👦‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20boy,\x20boy\x22,\x22slug\x22:\x22family_woman_boy_boy\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20girl\x22,\x22slug\x22:\x22family_woman_girl\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍👧‍👦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20girl,\x20boy\x22,\x22slug\x22:\x22family_woman_girl_boy\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22👩‍👧‍👧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22family\x20woman,\x20girl,\x20girl\x22,\x22slug\x22:\x22family_woman_girl_girl\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🗣️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speaking\x20head\x22,\x22slug\x22:\x22speaking_head\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22👤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bust\x20in\x20silhouette\x22,\x22slug\x22:\x22bust_in_silhouette\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22busts\x20in\x20silhouette\x22,\x22slug\x22:\x22busts_in_silhouette\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22👣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22footprints\x22,\x22slug\x22:\x22footprints\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22}],\x22Animals\x20&\x20Nature\x22:[{\x22emoji\x22:\x22🐵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22monkey\x20face\x22,\x22slug\x22:\x22monkey_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22monkey\x22,\x22slug\x22:\x22monkey\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22gorilla\x22,\x22slug\x22:\x22gorilla\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22orangutan\x22,\x22slug\x22:\x22orangutan\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🐶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dog\x20face\x22,\x22slug\x22:\x22dog_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dog\x22,\x22slug\x22:\x22dog\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🦮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22guide\x20dog\x22,\x22slug\x22:\x22guide_dog\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🐕‍🦺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22service\x20dog\x22,\x22slug\x22:\x22service_dog\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🐩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22poodle\x22,\x22slug\x22:\x22poodle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wolf\x22,\x22slug\x22:\x22wolf\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fox\x22,\x22slug\x22:\x22fox\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22raccoon\x22,\x22slug\x22:\x22raccoon\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🐱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cat\x20face\x22,\x22slug\x22:\x22cat_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cat\x22,\x22slug\x22:\x22cat\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🐈‍⬛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20cat\x22,\x22slug\x22:\x22black_cat\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🦁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lion\x22,\x22slug\x22:\x22lion\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tiger\x20face\x22,\x22slug\x22:\x22tiger_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tiger\x22,\x22slug\x22:\x22tiger\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22leopard\x22,\x22slug\x22:\x22leopard\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22horse\x20face\x22,\x22slug\x22:\x22horse_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22horse\x22,\x22slug\x22:\x22horse\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22unicorn\x22,\x22slug\x22:\x22unicorn\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🦓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22zebra\x22,\x22slug\x22:\x22zebra\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🦌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22deer\x22,\x22slug\x22:\x22deer\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🐮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cow\x20face\x22,\x22slug\x22:\x22cow_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ox\x22,\x22slug\x22:\x22ox\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22water\x20buffalo\x22,\x22slug\x22:\x22water_buffalo\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cow\x22,\x22slug\x22:\x22cow\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pig\x20face\x22,\x22slug\x22:\x22pig_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pig\x22,\x22slug\x22:\x22pig\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22boar\x22,\x22slug\x22:\x22boar\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pig\x20nose\x22,\x22slug\x22:\x22pig_nose\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ram\x22,\x22slug\x22:\x22ram\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ewe\x22,\x22slug\x22:\x22ewe\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22goat\x22,\x22slug\x22:\x22goat\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22camel\x22,\x22slug\x22:\x22camel\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22two-hump\x20camel\x22,\x22slug\x22:\x22two_hump_camel\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22llama\x22,\x22slug\x22:\x22llama\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22giraffe\x22,\x22slug\x22:\x22giraffe\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🐘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22elephant\x22,\x22slug\x22:\x22elephant\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rhinoceros\x22,\x22slug\x22:\x22rhinoceros\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hippopotamus\x22,\x22slug\x22:\x22hippopotamus\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🐭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mouse\x20face\x22,\x22slug\x22:\x22mouse_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mouse\x22,\x22slug\x22:\x22mouse\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rat\x22,\x22slug\x22:\x22rat\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hamster\x22,\x22slug\x22:\x22hamster\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rabbit\x20face\x22,\x22slug\x22:\x22rabbit_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rabbit\x22,\x22slug\x22:\x22rabbit\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐿️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chipmunk\x22,\x22slug\x22:\x22chipmunk\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🦔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hedgehog\x22,\x22slug\x22:\x22hedgehog\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🦇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bat\x22,\x22slug\x22:\x22bat\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🐻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bear\x22,\x22slug\x22:\x22bear\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐻‍❄️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22polar\x20bear\x22,\x22slug\x22:\x22polar_bear\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🐨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22koala\x22,\x22slug\x22:\x22koala\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22panda\x22,\x22slug\x22:\x22panda\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sloth\x22,\x22slug\x22:\x22sloth\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22otter\x22,\x22slug\x22:\x22otter\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22skunk\x22,\x22slug\x22:\x22skunk\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kangaroo\x22,\x22slug\x22:\x22kangaroo\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22badger\x22,\x22slug\x22:\x22badger\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🐾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22paw\x20prints\x22,\x22slug\x22:\x22paw_prints\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22turkey\x22,\x22slug\x22:\x22turkey\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chicken\x22,\x22slug\x22:\x22chicken\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rooster\x22,\x22slug\x22:\x22rooster\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hatching\x20chick\x22,\x22slug\x22:\x22hatching_chick\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22baby\x20chick\x22,\x22slug\x22:\x22baby_chick\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22front-facing\x20baby\x20chick\x22,\x22slug\x22:\x22front_facing_baby_chick\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bird\x22,\x22slug\x22:\x22bird\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22penguin\x22,\x22slug\x22:\x22penguin\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕊️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dove\x22,\x22slug\x22:\x22dove\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🦅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eagle\x22,\x22slug\x22:\x22eagle\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22duck\x22,\x22slug\x22:\x22duck\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22swan\x22,\x22slug\x22:\x22swan\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22owl\x22,\x22slug\x22:\x22owl\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flamingo\x22,\x22slug\x22:\x22flamingo\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22peacock\x22,\x22slug\x22:\x22peacock\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22parrot\x22,\x22slug\x22:\x22parrot\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🐸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22frog\x22,\x22slug\x22:\x22frog\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crocodile\x22,\x22slug\x22:\x22crocodile\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22turtle\x22,\x22slug\x22:\x22turtle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lizard\x22,\x22slug\x22:\x22lizard\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🐍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22snake\x22,\x22slug\x22:\x22snake\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dragon\x20face\x22,\x22slug\x22:\x22dragon_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dragon\x22,\x22slug\x22:\x22dragon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🦕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sauropod\x22,\x22slug\x22:\x22sauropod\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🦖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22T-Rex\x22,\x22slug\x22:\x22t_rex\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🐳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spouting\x20whale\x22,\x22slug\x22:\x22spouting_whale\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22whale\x22,\x22slug\x22:\x22whale\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🐬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dolphin\x22,\x22slug\x22:\x22dolphin\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fish\x22,\x22slug\x22:\x22fish\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tropical\x20fish\x22,\x22slug\x22:\x22tropical_fish\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22blowfish\x22,\x22slug\x22:\x22blowfish\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shark\x22,\x22slug\x22:\x22shark\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🐙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22octopus\x22,\x22slug\x22:\x22octopus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spiral\x20shell\x22,\x22slug\x22:\x22spiral_shell\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22snail\x22,\x22slug\x22:\x22snail\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22butterfly\x22,\x22slug\x22:\x22butterfly\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🐛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bug\x22,\x22slug\x22:\x22bug\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ant\x22,\x22slug\x22:\x22ant\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22honeybee\x22,\x22slug\x22:\x22honeybee\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🐞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lady\x20beetle\x22,\x22slug\x22:\x22lady_beetle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🦗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cricket\x22,\x22slug\x22:\x22cricket\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🕷️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spider\x22,\x22slug\x22:\x22spider\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕸️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spider\x20web\x22,\x22slug\x22:\x22spider_web\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🦂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22scorpion\x22,\x22slug\x22:\x22scorpion\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🦟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mosquito\x22,\x22slug\x22:\x22mosquito\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22microbe\x22,\x22slug\x22:\x22microbe\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22💐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bouquet\x22,\x22slug\x22:\x22bouquet\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cherry\x20blossom\x22,\x22slug\x22:\x22cherry_blossom\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20flower\x22,\x22slug\x22:\x22white_flower\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏵️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rosette\x22,\x22slug\x22:\x22rosette\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rose\x22,\x22slug\x22:\x22rose\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wilted\x20flower\x22,\x22slug\x22:\x22wilted_flower\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🌺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hibiscus\x22,\x22slug\x22:\x22hibiscus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sunflower\x22,\x22slug\x22:\x22sunflower\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22blossom\x22,\x22slug\x22:\x22blossom\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tulip\x22,\x22slug\x22:\x22tulip\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22seedling\x22,\x22slug\x22:\x22seedling\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22evergreen\x20tree\x22,\x22slug\x22:\x22evergreen_tree\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22deciduous\x20tree\x22,\x22slug\x22:\x22deciduous_tree\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22palm\x20tree\x22,\x22slug\x22:\x22palm_tree\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cactus\x22,\x22slug\x22:\x22cactus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sheaf\x20of\x20rice\x22,\x22slug\x22:\x22sheaf_of_rice\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22herb\x22,\x22slug\x22:\x22herb\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☘️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shamrock\x22,\x22slug\x22:\x22shamrock\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🍀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22four\x20leaf\x20clover\x22,\x22slug\x22:\x22four_leaf_clover\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22maple\x20leaf\x22,\x22slug\x22:\x22maple_leaf\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fallen\x20leaf\x22,\x22slug\x22:\x22fallen_leaf\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22leaf\x20fluttering\x20in\x20wind\x22,\x22slug\x22:\x22leaf_fluttering_in_wind\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22}],\x22Food\x20&\x20Drink\x22:[{\x22emoji\x22:\x22🍇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22grapes\x22,\x22slug\x22:\x22grapes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22melon\x22,\x22slug\x22:\x22melon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22watermelon\x22,\x22slug\x22:\x22watermelon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tangerine\x22,\x22slug\x22:\x22tangerine\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lemon\x22,\x22slug\x22:\x22lemon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🍌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22banana\x22,\x22slug\x22:\x22banana\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pineapple\x22,\x22slug\x22:\x22pineapple\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mango\x22,\x22slug\x22:\x22mango\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🍎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20apple\x22,\x22slug\x22:\x22red_apple\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22green\x20apple\x22,\x22slug\x22:\x22green_apple\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pear\x22,\x22slug\x22:\x22pear\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🍑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22peach\x22,\x22slug\x22:\x22peach\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cherries\x22,\x22slug\x22:\x22cherries\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22strawberry\x22,\x22slug\x22:\x22strawberry\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kiwi\x20fruit\x22,\x22slug\x22:\x22kiwi_fruit\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🍅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tomato\x22,\x22slug\x22:\x22tomato\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22coconut\x22,\x22slug\x22:\x22coconut\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22avocado\x22,\x22slug\x22:\x22avocado\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🍆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eggplant\x22,\x22slug\x22:\x22eggplant\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22potato\x22,\x22slug\x22:\x22potato\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22carrot\x22,\x22slug\x22:\x22carrot\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🌽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ear\x20of\x20corn\x22,\x22slug\x22:\x22ear_of_corn\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌶️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hot\x20pepper\x22,\x22slug\x22:\x22hot_pepper\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🥒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cucumber\x22,\x22slug\x22:\x22cucumber\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22leafy\x20green\x22,\x22slug\x22:\x22leafy_green\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22broccoli\x22,\x22slug\x22:\x22broccoli\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22garlic\x22,\x22slug\x22:\x22garlic\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22onion\x22,\x22slug\x22:\x22onion\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🍄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mushroom\x22,\x22slug\x22:\x22mushroom\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22peanuts\x22,\x22slug\x22:\x22peanuts\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🌰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chestnut\x22,\x22slug\x22:\x22chestnut\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bread\x22,\x22slug\x22:\x22bread\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22croissant\x22,\x22slug\x22:\x22croissant\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22baguette\x20bread\x22,\x22slug\x22:\x22baguette_bread\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pretzel\x22,\x22slug\x22:\x22pretzel\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bagel\x22,\x22slug\x22:\x22bagel\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pancakes\x22,\x22slug\x22:\x22pancakes\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🧇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22waffle\x22,\x22slug\x22:\x22waffle\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cheese\x20wedge\x22,\x22slug\x22:\x22cheese_wedge\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🍖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22meat\x20on\x20bone\x22,\x22slug\x22:\x22meat_on_bone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22poultry\x20leg\x22,\x22slug\x22:\x22poultry_leg\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cut\x20of\x20meat\x22,\x22slug\x22:\x22cut_of_meat\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bacon\x22,\x22slug\x22:\x22bacon\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🍔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hamburger\x22,\x22slug\x22:\x22hamburger\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22french\x20fries\x22,\x22slug\x22:\x22french_fries\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pizza\x22,\x22slug\x22:\x22pizza\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hot\x20dog\x22,\x22slug\x22:\x22hot_dog\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sandwich\x22,\x22slug\x22:\x22sandwich\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🌮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22taco\x22,\x22slug\x22:\x22taco\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22burrito\x22,\x22slug\x22:\x22burrito\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22stuffed\x20flatbread\x22,\x22slug\x22:\x22stuffed_flatbread\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🧆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22falafel\x22,\x22slug\x22:\x22falafel\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🥚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22egg\x22,\x22slug\x22:\x22egg\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🍳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cooking\x22,\x22slug\x22:\x22cooking\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shallow\x20pan\x20of\x20food\x22,\x22slug\x22:\x22shallow_pan_of_food\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🍲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pot\x20of\x20food\x22,\x22slug\x22:\x22pot_of_food\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bowl\x20with\x20spoon\x22,\x22slug\x22:\x22bowl_with_spoon\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22green\x20salad\x22,\x22slug\x22:\x22green_salad\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🍿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22popcorn\x22,\x22slug\x22:\x22popcorn\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🧈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22butter\x22,\x22slug\x22:\x22butter\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22salt\x22,\x22slug\x22:\x22salt\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22canned\x20food\x22,\x22slug\x22:\x22canned_food\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🍱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bento\x20box\x22,\x22slug\x22:\x22bento_box\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rice\x20cracker\x22,\x22slug\x22:\x22rice_cracker\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rice\x20ball\x22,\x22slug\x22:\x22rice_ball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cooked\x20rice\x22,\x22slug\x22:\x22cooked_rice\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22curry\x20rice\x22,\x22slug\x22:\x22curry_rice\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22steaming\x20bowl\x22,\x22slug\x22:\x22steaming_bowl\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spaghetti\x22,\x22slug\x22:\x22spaghetti\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22roasted\x20sweet\x20potato\x22,\x22slug\x22:\x22roasted_sweet_potato\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oden\x22,\x22slug\x22:\x22oden\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sushi\x22,\x22slug\x22:\x22sushi\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fried\x20shrimp\x22,\x22slug\x22:\x22fried_shrimp\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fish\x20cake\x20with\x20swirl\x22,\x22slug\x22:\x22fish_cake_with_swirl\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22moon\x20cake\x22,\x22slug\x22:\x22moon_cake\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🍡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dango\x22,\x22slug\x22:\x22dango\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dumpling\x22,\x22slug\x22:\x22dumpling\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fortune\x20cookie\x22,\x22slug\x22:\x22fortune_cookie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22takeout\x20box\x22,\x22slug\x22:\x22takeout_box\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🦀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crab\x22,\x22slug\x22:\x22crab\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🦞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lobster\x22,\x22slug\x22:\x22lobster\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shrimp\x22,\x22slug\x22:\x22shrimp\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22squid\x22,\x22slug\x22:\x22squid\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oyster\x22,\x22slug\x22:\x22oyster\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🍦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22soft\x20ice\x20cream\x22,\x22slug\x22:\x22soft_ice_cream\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shaved\x20ice\x22,\x22slug\x22:\x22shaved_ice\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ice\x20cream\x22,\x22slug\x22:\x22ice_cream\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22doughnut\x22,\x22slug\x22:\x22doughnut\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cookie\x22,\x22slug\x22:\x22cookie\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22birthday\x20cake\x22,\x22slug\x22:\x22birthday_cake\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shortcake\x22,\x22slug\x22:\x22shortcake\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cupcake\x22,\x22slug\x22:\x22cupcake\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pie\x22,\x22slug\x22:\x22pie\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🍫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chocolate\x20bar\x22,\x22slug\x22:\x22chocolate_bar\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22candy\x22,\x22slug\x22:\x22candy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lollipop\x22,\x22slug\x22:\x22lollipop\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22custard\x22,\x22slug\x22:\x22custard\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22honey\x20pot\x22,\x22slug\x22:\x22honey_pot\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22baby\x20bottle\x22,\x22slug\x22:\x22baby_bottle\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22glass\x20of\x20milk\x22,\x22slug\x22:\x22glass_of_milk\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22☕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hot\x20beverage\x22,\x22slug\x22:\x22hot_beverage\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22teacup\x20without\x20handle\x22,\x22slug\x22:\x22teacup_without_handle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sake\x22,\x22slug\x22:\x22sake\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bottle\x20with\x20popping\x20cork\x22,\x22slug\x22:\x22bottle_with_popping_cork\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🍷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wine\x20glass\x22,\x22slug\x22:\x22wine_glass\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cocktail\x20glass\x22,\x22slug\x22:\x22cocktail_glass\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tropical\x20drink\x22,\x22slug\x22:\x22tropical_drink\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22beer\x20mug\x22,\x22slug\x22:\x22beer_mug\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🍻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clinking\x20beer\x20mugs\x22,\x22slug\x22:\x22clinking_beer_mugs\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clinking\x20glasses\x22,\x22slug\x22:\x22clinking_glasses\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tumbler\x20glass\x22,\x22slug\x22:\x22tumbler_glass\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cup\x20with\x20straw\x22,\x22slug\x22:\x22cup_with_straw\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22beverage\x20box\x22,\x22slug\x22:\x22beverage_box\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mate\x22,\x22slug\x22:\x22mate\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ice\x22,\x22slug\x22:\x22ice\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🥢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chopsticks\x22,\x22slug\x22:\x22chopsticks\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🍽️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fork\x20and\x20knife\x20with\x20plate\x22,\x22slug\x22:\x22fork_and_knife_with_plate\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🍴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fork\x20and\x20knife\x22,\x22slug\x22:\x22fork_and_knife\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spoon\x22,\x22slug\x22:\x22spoon\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🔪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kitchen\x20knife\x22,\x22slug\x22:\x22kitchen_knife\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22amphora\x22,\x22slug\x22:\x22amphora\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22}],\x22Travel\x20&\x20Places\x22:[{\x22emoji\x22:\x22🌍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22globe\x20showing\x20Europe-Africa\x22,\x22slug\x22:\x22globe_showing_europe_africa\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22globe\x20showing\x20Americas\x22,\x22slug\x22:\x22globe_showing_americas\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22globe\x20showing\x20Asia-Australia\x22,\x22slug\x22:\x22globe_showing_asia_australia\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22globe\x20with\x20meridians\x22,\x22slug\x22:\x22globe_with_meridians\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🗺️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22world\x20map\x22,\x22slug\x22:\x22world_map\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🗾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22map\x20of\x20Japan\x22,\x22slug\x22:\x22map_of_japan\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22compass\x22,\x22slug\x22:\x22compass\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🏔️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22snow-capped\x20mountain\x22,\x22slug\x22:\x22snow_capped_mountain\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⛰️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mountain\x22,\x22slug\x22:\x22mountain\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22volcano\x22,\x22slug\x22:\x22volcano\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mount\x20fuji\x22,\x22slug\x22:\x22mount_fuji\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏕️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22camping\x22,\x22slug\x22:\x22camping\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏖️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22beach\x20with\x20umbrella\x22,\x22slug\x22:\x22beach_with_umbrella\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏜️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22desert\x22,\x22slug\x22:\x22desert\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏝️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22desert\x20island\x22,\x22slug\x22:\x22desert_island\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏞️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22national\x20park\x22,\x22slug\x22:\x22national_park\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏟️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22stadium\x22,\x22slug\x22:\x22stadium\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏛️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22classical\x20building\x22,\x22slug\x22:\x22classical_building\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏗️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22building\x20construction\x22,\x22slug\x22:\x22building_construction\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🧱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22brick\x22,\x22slug\x22:\x22brick\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🏘️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22houses\x22,\x22slug\x22:\x22houses\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏚️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22derelict\x20house\x22,\x22slug\x22:\x22derelict_house\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22house\x22,\x22slug\x22:\x22house\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22house\x20with\x20garden\x22,\x22slug\x22:\x22house_with_garden\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22office\x20building\x22,\x22slug\x22:\x22office_building\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20post\x20office\x22,\x22slug\x22:\x22japanese_post_office\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22post\x20office\x22,\x22slug\x22:\x22post_office\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hospital\x22,\x22slug\x22:\x22hospital\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bank\x22,\x22slug\x22:\x22bank\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hotel\x22,\x22slug\x22:\x22hotel\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22love\x20hotel\x22,\x22slug\x22:\x22love_hotel\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22convenience\x20store\x22,\x22slug\x22:\x22convenience_store\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22school\x22,\x22slug\x22:\x22school\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22department\x20store\x22,\x22slug\x22:\x22department_store\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22factory\x22,\x22slug\x22:\x22factory\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20castle\x22,\x22slug\x22:\x22japanese_castle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22castle\x22,\x22slug\x22:\x22castle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wedding\x22,\x22slug\x22:\x22wedding\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Tokyo\x20tower\x22,\x22slug\x22:\x22tokyo_tower\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Statue\x20of\x20Liberty\x22,\x22slug\x22:\x22statue_of_liberty\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22church\x22,\x22slug\x22:\x22church\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mosque\x22,\x22slug\x22:\x22mosque\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hindu\x20temple\x22,\x22slug\x22:\x22hindu_temple\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🕍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22synagogue\x22,\x22slug\x22:\x22synagogue\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⛩️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shinto\x20shrine\x22,\x22slug\x22:\x22shinto_shrine\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kaaba\x22,\x22slug\x22:\x22kaaba\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⛲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fountain\x22,\x22slug\x22:\x22fountain\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tent\x22,\x22slug\x22:\x22tent\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22foggy\x22,\x22slug\x22:\x22foggy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22night\x20with\x20stars\x22,\x22slug\x22:\x22night_with_stars\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏙️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cityscape\x22,\x22slug\x22:\x22cityscape\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sunrise\x20over\x20mountains\x22,\x22slug\x22:\x22sunrise_over_mountains\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sunrise\x22,\x22slug\x22:\x22sunrise\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cityscape\x20at\x20dusk\x22,\x22slug\x22:\x22cityscape_at_dusk\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sunset\x22,\x22slug\x22:\x22sunset\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bridge\x20at\x20night\x22,\x22slug\x22:\x22bridge_at_night\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♨️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hot\x20springs\x22,\x22slug\x22:\x22hot_springs\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22carousel\x20horse\x22,\x22slug\x22:\x22carousel_horse\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ferris\x20wheel\x22,\x22slug\x22:\x22ferris_wheel\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22roller\x20coaster\x22,\x22slug\x22:\x22roller_coaster\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22barber\x20pole\x22,\x22slug\x22:\x22barber_pole\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22circus\x20tent\x22,\x22slug\x22:\x22circus_tent\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22locomotive\x22,\x22slug\x22:\x22locomotive\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22railway\x20car\x22,\x22slug\x22:\x22railway_car\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22high-speed\x20train\x22,\x22slug\x22:\x22high_speed_train\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bullet\x20train\x22,\x22slug\x22:\x22bullet_train\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22train\x22,\x22slug\x22:\x22train\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22metro\x22,\x22slug\x22:\x22metro\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22light\x20rail\x22,\x22slug\x22:\x22light_rail\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22station\x22,\x22slug\x22:\x22station\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tram\x22,\x22slug\x22:\x22tram\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22monorail\x22,\x22slug\x22:\x22monorail\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mountain\x20railway\x22,\x22slug\x22:\x22mountain_railway\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tram\x20car\x22,\x22slug\x22:\x22tram_car\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bus\x22,\x22slug\x22:\x22bus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oncoming\x20bus\x22,\x22slug\x22:\x22oncoming_bus\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🚎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22trolleybus\x22,\x22slug\x22:\x22trolleybus\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22minibus\x22,\x22slug\x22:\x22minibus\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ambulance\x22,\x22slug\x22:\x22ambulance\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fire\x20engine\x22,\x22slug\x22:\x22fire_engine\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22police\x20car\x22,\x22slug\x22:\x22police_car\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oncoming\x20police\x20car\x22,\x22slug\x22:\x22oncoming_police_car\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🚕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22taxi\x22,\x22slug\x22:\x22taxi\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oncoming\x20taxi\x22,\x22slug\x22:\x22oncoming_taxi\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22automobile\x22,\x22slug\x22:\x22automobile\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oncoming\x20automobile\x22,\x22slug\x22:\x22oncoming_automobile\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🚙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sport\x20utility\x20vehicle\x22,\x22slug\x22:\x22sport_utility_vehicle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22delivery\x20truck\x22,\x22slug\x22:\x22delivery_truck\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22articulated\x20lorry\x22,\x22slug\x22:\x22articulated_lorry\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tractor\x22,\x22slug\x22:\x22tractor\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏎️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22racing\x20car\x22,\x22slug\x22:\x22racing_car\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏍️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22motorcycle\x22,\x22slug\x22:\x22motorcycle\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🛵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22motor\x20scooter\x22,\x22slug\x22:\x22motor_scooter\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🦽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22manual\x20wheelchair\x22,\x22slug\x22:\x22manual_wheelchair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🦼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22motorized\x20wheelchair\x22,\x22slug\x22:\x22motorized_wheelchair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🛺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22auto\x20rickshaw\x22,\x22slug\x22:\x22auto_rickshaw\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🚲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bicycle\x22,\x22slug\x22:\x22bicycle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kick\x20scooter\x22,\x22slug\x22:\x22kick_scooter\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🛹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22skateboard\x22,\x22slug\x22:\x22skateboard\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🚏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bus\x20stop\x22,\x22slug\x22:\x22bus_stop\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛣️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22motorway\x22,\x22slug\x22:\x22motorway\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🛤️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22railway\x20track\x22,\x22slug\x22:\x22railway_track\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🛢️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22oil\x20drum\x22,\x22slug\x22:\x22oil_drum\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⛽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fuel\x20pump\x22,\x22slug\x22:\x22fuel_pump\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22police\x20car\x20light\x22,\x22slug\x22:\x22police_car_light\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22horizontal\x20traffic\x20light\x22,\x22slug\x22:\x22horizontal_traffic_light\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22vertical\x20traffic\x20light\x22,\x22slug\x22:\x22vertical_traffic_light\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22stop\x20sign\x22,\x22slug\x22:\x22stop_sign\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🚧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22construction\x22,\x22slug\x22:\x22construction\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22anchor\x22,\x22slug\x22:\x22anchor\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sailboat\x22,\x22slug\x22:\x22sailboat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22canoe\x22,\x22slug\x22:\x22canoe\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🚤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speedboat\x22,\x22slug\x22:\x22speedboat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛳️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22passenger\x20ship\x22,\x22slug\x22:\x22passenger_ship\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⛴️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ferry\x22,\x22slug\x22:\x22ferry\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🛥️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22motor\x20boat\x22,\x22slug\x22:\x22motor_boat\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🚢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ship\x22,\x22slug\x22:\x22ship\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✈️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22airplane\x22,\x22slug\x22:\x22airplane\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛩️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22small\x20airplane\x22,\x22slug\x22:\x22small_airplane\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🛫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22airplane\x20departure\x22,\x22slug\x22:\x22airplane_departure\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22airplane\x20arrival\x22,\x22slug\x22:\x22airplane_arrival\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🪂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22parachute\x22,\x22slug\x22:\x22parachute\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22💺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22seat\x22,\x22slug\x22:\x22seat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22helicopter\x22,\x22slug\x22:\x22helicopter\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22suspension\x20railway\x22,\x22slug\x22:\x22suspension_railway\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mountain\x20cableway\x22,\x22slug\x22:\x22mountain_cableway\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22aerial\x20tramway\x22,\x22slug\x22:\x22aerial_tramway\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛰️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22satellite\x22,\x22slug\x22:\x22satellite\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🚀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rocket\x22,\x22slug\x22:\x22rocket\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flying\x20saucer\x22,\x22slug\x22:\x22flying_saucer\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🛎️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bellhop\x20bell\x22,\x22slug\x22:\x22bellhop_bell\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🧳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22luggage\x22,\x22slug\x22:\x22luggage\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22⌛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hourglass\x20done\x22,\x22slug\x22:\x22hourglass_done\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hourglass\x20not\x20done\x22,\x22slug\x22:\x22hourglass_not_done\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⌚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22watch\x22,\x22slug\x22:\x22watch\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22alarm\x20clock\x22,\x22slug\x22:\x22alarm_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏱️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22stopwatch\x22,\x22slug\x22:\x22stopwatch\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⏲️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22timer\x20clock\x22,\x22slug\x22:\x22timer_clock\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🕰️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mantelpiece\x20clock\x22,\x22slug\x22:\x22mantelpiece_clock\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22twelve\x20o’clock\x22,\x22slug\x22:\x22twelve_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22twelve-thirty\x22,\x22slug\x22:\x22twelve_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22one\x20o’clock\x22,\x22slug\x22:\x22one_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22one-thirty\x22,\x22slug\x22:\x22one_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22two\x20o’clock\x22,\x22slug\x22:\x22two_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22two-thirty\x22,\x22slug\x22:\x22two_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22three\x20o’clock\x22,\x22slug\x22:\x22three_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22three-thirty\x22,\x22slug\x22:\x22three_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22four\x20o’clock\x22,\x22slug\x22:\x22four_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22four-thirty\x22,\x22slug\x22:\x22four_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22five\x20o’clock\x22,\x22slug\x22:\x22five_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22five-thirty\x22,\x22slug\x22:\x22five_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22six\x20o’clock\x22,\x22slug\x22:\x22six_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22six-thirty\x22,\x22slug\x22:\x22six_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22seven\x20o’clock\x22,\x22slug\x22:\x22seven_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22seven-thirty\x22,\x22slug\x22:\x22seven_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eight\x20o’clock\x22,\x22slug\x22:\x22eight_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eight-thirty\x22,\x22slug\x22:\x22eight_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22nine\x20o’clock\x22,\x22slug\x22:\x22nine_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22nine-thirty\x22,\x22slug\x22:\x22nine_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ten\x20o’clock\x22,\x22slug\x22:\x22ten_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ten-thirty\x22,\x22slug\x22:\x22ten_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🕚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eleven\x20o’clock\x22,\x22slug\x22:\x22eleven_o_clock\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eleven-thirty\x22,\x22slug\x22:\x22eleven_thirty\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22new\x20moon\x22,\x22slug\x22:\x22new_moon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22waxing\x20crescent\x20moon\x22,\x22slug\x22:\x22waxing_crescent_moon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22first\x20quarter\x20moon\x22,\x22slug\x22:\x22first_quarter_moon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22waxing\x20gibbous\x20moon\x22,\x22slug\x22:\x22waxing_gibbous_moon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22full\x20moon\x22,\x22slug\x22:\x22full_moon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22waning\x20gibbous\x20moon\x22,\x22slug\x22:\x22waning_gibbous_moon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22last\x20quarter\x20moon\x22,\x22slug\x22:\x22last_quarter_moon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22waning\x20crescent\x20moon\x22,\x22slug\x22:\x22waning_crescent_moon\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crescent\x20moon\x22,\x22slug\x22:\x22crescent_moon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22new\x20moon\x20face\x22,\x22slug\x22:\x22new_moon_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22first\x20quarter\x20moon\x20face\x22,\x22slug\x22:\x22first_quarter_moon_face\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22last\x20quarter\x20moon\x20face\x22,\x22slug\x22:\x22last_quarter_moon_face\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌡️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22thermometer\x22,\x22slug\x22:\x22thermometer\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22☀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sun\x22,\x22slug\x22:\x22sun\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22full\x20moon\x20face\x22,\x22slug\x22:\x22full_moon_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🌞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sun\x20with\x20face\x22,\x22slug\x22:\x22sun_with_face\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🪐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ringed\x20planet\x22,\x22slug\x22:\x22ringed_planet\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22⭐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22star\x22,\x22slug\x22:\x22star\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22glowing\x20star\x22,\x22slug\x22:\x22glowing_star\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shooting\x20star\x22,\x22slug\x22:\x22shooting_star\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22milky\x20way\x22,\x22slug\x22:\x22milky_way\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☁️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cloud\x22,\x22slug\x22:\x22cloud\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sun\x20behind\x20cloud\x22,\x22slug\x22:\x22sun_behind_cloud\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛈️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cloud\x20with\x20lightning\x20and\x20rain\x22,\x22slug\x22:\x22cloud_with_lightning_and_rain\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌤️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sun\x20behind\x20small\x20cloud\x22,\x22slug\x22:\x22sun_behind_small_cloud\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌥️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sun\x20behind\x20large\x20cloud\x22,\x22slug\x22:\x22sun_behind_large_cloud\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌦️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sun\x20behind\x20rain\x20cloud\x22,\x22slug\x22:\x22sun_behind_rain_cloud\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌧️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cloud\x20with\x20rain\x22,\x22slug\x22:\x22cloud_with_rain\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌨️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cloud\x20with\x20snow\x22,\x22slug\x22:\x22cloud_with_snow\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌩️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cloud\x20with\x20lightning\x22,\x22slug\x22:\x22cloud_with_lightning\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌪️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tornado\x22,\x22slug\x22:\x22tornado\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌫️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fog\x22,\x22slug\x22:\x22fog\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌬️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wind\x20face\x22,\x22slug\x22:\x22wind_face\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🌀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cyclone\x22,\x22slug\x22:\x22cyclone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rainbow\x22,\x22slug\x22:\x22rainbow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22closed\x20umbrella\x22,\x22slug\x22:\x22closed_umbrella\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22umbrella\x22,\x22slug\x22:\x22umbrella\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22☔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22umbrella\x20with\x20rain\x20drops\x22,\x22slug\x22:\x22umbrella_with_rain_drops\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛱️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22umbrella\x20on\x20ground\x22,\x22slug\x22:\x22umbrella_on_ground\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⚡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22high\x20voltage\x22,\x22slug\x22:\x22high_voltage\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❄️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22snowflake\x22,\x22slug\x22:\x22snowflake\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☃️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22snowman\x22,\x22slug\x22:\x22snowman\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⛄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22snowman\x20without\x20snow\x22,\x22slug\x22:\x22snowman_without_snow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☄️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22comet\x22,\x22slug\x22:\x22comet\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fire\x22,\x22slug\x22:\x22fire\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22droplet\x22,\x22slug\x22:\x22droplet\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🌊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22water\x20wave\x22,\x22slug\x22:\x22water_wave\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22}],\x22Activities\x22:[{\x22emoji\x22:\x22🎃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22jack-o-lantern\x22,\x22slug\x22:\x22jack_o_lantern\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Christmas\x20tree\x22,\x22slug\x22:\x22christmas_tree\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fireworks\x22,\x22slug\x22:\x22fireworks\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sparkler\x22,\x22slug\x22:\x22sparkler\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22firecracker\x22,\x22slug\x22:\x22firecracker\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22✨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sparkles\x22,\x22slug\x22:\x22sparkles\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22balloon\x22,\x22slug\x22:\x22balloon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22party\x20popper\x22,\x22slug\x22:\x22party_popper\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22confetti\x20ball\x22,\x22slug\x22:\x22confetti_ball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tanabata\x20tree\x22,\x22slug\x22:\x22tanabata_tree\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pine\x20decoration\x22,\x22slug\x22:\x22pine_decoration\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20dolls\x22,\x22slug\x22:\x22japanese_dolls\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22carp\x20streamer\x22,\x22slug\x22:\x22carp_streamer\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wind\x20chime\x22,\x22slug\x22:\x22wind_chime\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22moon\x20viewing\x20ceremony\x22,\x22slug\x22:\x22moon_viewing_ceremony\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20envelope\x22,\x22slug\x22:\x22red_envelope\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🎀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ribbon\x22,\x22slug\x22:\x22ribbon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wrapped\x20gift\x22,\x22slug\x22:\x22wrapped_gift\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎗️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22reminder\x20ribbon\x22,\x22slug\x22:\x22reminder_ribbon\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎟️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22admission\x20tickets\x22,\x22slug\x22:\x22admission_tickets\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ticket\x22,\x22slug\x22:\x22ticket\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎖️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22military\x20medal\x22,\x22slug\x22:\x22military_medal\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22trophy\x22,\x22slug\x22:\x22trophy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sports\x20medal\x22,\x22slug\x22:\x22sports_medal\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x221st\x20place\x20medal\x22,\x22slug\x22:\x221st_place_medal\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x222nd\x20place\x20medal\x22,\x22slug\x22:\x222nd_place_medal\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x223rd\x20place\x20medal\x22,\x22slug\x22:\x223rd_place_medal\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22⚽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22soccer\x20ball\x22,\x22slug\x22:\x22soccer_ball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22baseball\x22,\x22slug\x22:\x22baseball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22softball\x22,\x22slug\x22:\x22softball\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🏀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22basketball\x22,\x22slug\x22:\x22basketball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22volleyball\x22,\x22slug\x22:\x22volleyball\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22american\x20football\x22,\x22slug\x22:\x22american_football\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rugby\x20football\x22,\x22slug\x22:\x22rugby_football\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🎾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tennis\x22,\x22slug\x22:\x22tennis\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flying\x20disc\x22,\x22slug\x22:\x22flying_disc\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🎳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bowling\x22,\x22slug\x22:\x22bowling\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cricket\x20game\x22,\x22slug\x22:\x22cricket_game\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22field\x20hockey\x22,\x22slug\x22:\x22field_hockey\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ice\x20hockey\x22,\x22slug\x22:\x22ice_hockey\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lacrosse\x22,\x22slug\x22:\x22lacrosse\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🏓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ping\x20pong\x22,\x22slug\x22:\x22ping_pong\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22badminton\x22,\x22slug\x22:\x22badminton\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🥊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22boxing\x20glove\x22,\x22slug\x22:\x22boxing_glove\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22martial\x20arts\x20uniform\x22,\x22slug\x22:\x22martial_arts_uniform\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🥅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22goal\x20net\x22,\x22slug\x22:\x22goal_net\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22⛳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20in\x20hole\x22,\x22slug\x22:\x22flag_in_hole\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛸️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ice\x20skate\x22,\x22slug\x22:\x22ice_skate\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fishing\x20pole\x22,\x22slug\x22:\x22fishing_pole\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🤿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22diving\x20mask\x22,\x22slug\x22:\x22diving_mask\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🎽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22running\x20shirt\x22,\x22slug\x22:\x22running_shirt\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22skis\x22,\x22slug\x22:\x22skis\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sled\x22,\x22slug\x22:\x22sled\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🥌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22curling\x20stone\x22,\x22slug\x22:\x22curling_stone\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🎯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bullseye\x22,\x22slug\x22:\x22bullseye\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🪀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yo-yo\x22,\x22slug\x22:\x22yo_yo\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🪁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kite\x22,\x22slug\x22:\x22kite\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🎱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pool\x208\x20ball\x22,\x22slug\x22:\x22pool_8_ball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crystal\x20ball\x22,\x22slug\x22:\x22crystal_ball\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22nazar\x20amulet\x22,\x22slug\x22:\x22nazar_amulet\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🎮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22video\x20game\x22,\x22slug\x22:\x22video_game\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕹️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22joystick\x22,\x22slug\x22:\x22joystick\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22slot\x20machine\x22,\x22slug\x22:\x22slot_machine\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22game\x20die\x22,\x22slug\x22:\x22game_die\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22puzzle\x20piece\x22,\x22slug\x22:\x22puzzle_piece\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22teddy\x20bear\x22,\x22slug\x22:\x22teddy_bear\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22♠️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spade\x20suit\x22,\x22slug\x22:\x22spade_suit\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♥️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heart\x20suit\x22,\x22slug\x22:\x22heart_suit\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♦️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22diamond\x20suit\x22,\x22slug\x22:\x22diamond_suit\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♣️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22club\x20suit\x22,\x22slug\x22:\x22club_suit\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♟️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chess\x20pawn\x22,\x22slug\x22:\x22chess_pawn\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🃏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22joker\x22,\x22slug\x22:\x22joker\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🀄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mahjong\x20red\x20dragon\x22,\x22slug\x22:\x22mahjong_red_dragon\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flower\x20playing\x20cards\x22,\x22slug\x22:\x22flower_playing_cards\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22performing\x20arts\x22,\x22slug\x22:\x22performing_arts\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🖼️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22framed\x20picture\x22,\x22slug\x22:\x22framed_picture\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22artist\x20palette\x22,\x22slug\x22:\x22artist_palette\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22thread\x22,\x22slug\x22:\x22thread\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yarn\x22,\x22slug\x22:\x22yarn\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22}],\x22Objects\x22:[{\x22emoji\x22:\x22👓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22glasses\x22,\x22slug\x22:\x22glasses\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕶️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sunglasses\x22,\x22slug\x22:\x22sunglasses\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🥽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22goggles\x22,\x22slug\x22:\x22goggles\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lab\x20coat\x22,\x22slug\x22:\x22lab_coat\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🦺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22safety\x20vest\x22,\x22slug\x22:\x22safety_vest\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22necktie\x22,\x22slug\x22:\x22necktie\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22t-shirt\x22,\x22slug\x22:\x22t_shirt\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22jeans\x22,\x22slug\x22:\x22jeans\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22scarf\x22,\x22slug\x22:\x22scarf\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22gloves\x22,\x22slug\x22:\x22gloves\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22coat\x22,\x22slug\x22:\x22coat\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🧦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22socks\x22,\x22slug\x22:\x22socks\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22👗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dress\x22,\x22slug\x22:\x22dress\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22kimono\x22,\x22slug\x22:\x22kimono\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sari\x22,\x22slug\x22:\x22sari\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🩱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22one-piece\x20swimsuit\x22,\x22slug\x22:\x22one_piece_swimsuit\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🩲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22briefs\x22,\x22slug\x22:\x22briefs\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🩳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shorts\x22,\x22slug\x22:\x22shorts\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bikini\x22,\x22slug\x22:\x22bikini\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woman’s\x20clothes\x22,\x22slug\x22:\x22woman_s_clothes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22purse\x22,\x22slug\x22:\x22purse\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22handbag\x22,\x22slug\x22:\x22handbag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clutch\x20bag\x22,\x22slug\x22:\x22clutch_bag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛍️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shopping\x20bags\x22,\x22slug\x22:\x22shopping_bags\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22backpack\x22,\x22slug\x22:\x22backpack\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22man’s\x20shoe\x22,\x22slug\x22:\x22man_s_shoe\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22running\x20shoe\x22,\x22slug\x22:\x22running_shoe\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🥾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hiking\x20boot\x22,\x22slug\x22:\x22hiking_boot\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🥿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flat\x20shoe\x22,\x22slug\x22:\x22flat_shoe\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22👠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22high-heeled\x20shoe\x22,\x22slug\x22:\x22high_heeled_shoe\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woman’s\x20sandal\x22,\x22slug\x22:\x22woman_s_sandal\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🩰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ballet\x20shoes\x22,\x22slug\x22:\x22ballet_shoes\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22👢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woman’s\x20boot\x22,\x22slug\x22:\x22woman_s_boot\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crown\x22,\x22slug\x22:\x22crown\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22👒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22woman’s\x20hat\x22,\x22slug\x22:\x22woman_s_hat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22top\x20hat\x22,\x22slug\x22:\x22top_hat\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22graduation\x20cap\x22,\x22slug\x22:\x22graduation_cap\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22billed\x20cap\x22,\x22slug\x22:\x22billed_cap\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22⛑️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rescue\x20worker’s\x20helmet\x22,\x22slug\x22:\x22rescue_worker_s_helmet\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22prayer\x20beads\x22,\x22slug\x22:\x22prayer_beads\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lipstick\x22,\x22slug\x22:\x22lipstick\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ring\x22,\x22slug\x22:\x22ring\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22gem\x20stone\x22,\x22slug\x22:\x22gem_stone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22muted\x20speaker\x22,\x22slug\x22:\x22muted_speaker\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speaker\x20low\x20volume\x22,\x22slug\x22:\x22speaker_low_volume\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🔉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speaker\x20medium\x20volume\x22,\x22slug\x22:\x22speaker_medium_volume\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22speaker\x20high\x20volume\x22,\x22slug\x22:\x22speaker_high_volume\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22loudspeaker\x22,\x22slug\x22:\x22loudspeaker\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22megaphone\x22,\x22slug\x22:\x22megaphone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22postal\x20horn\x22,\x22slug\x22:\x22postal_horn\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bell\x22,\x22slug\x22:\x22bell\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bell\x20with\x20slash\x22,\x22slug\x22:\x22bell_with_slash\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🎼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22musical\x20score\x22,\x22slug\x22:\x22musical_score\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22musical\x20note\x22,\x22slug\x22:\x22musical_note\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22musical\x20notes\x22,\x22slug\x22:\x22musical_notes\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎙️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22studio\x20microphone\x22,\x22slug\x22:\x22studio_microphone\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎚️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22level\x20slider\x22,\x22slug\x22:\x22level_slider\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎛️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22control\x20knobs\x22,\x22slug\x22:\x22control_knobs\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22microphone\x22,\x22slug\x22:\x22microphone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22headphone\x22,\x22slug\x22:\x22headphone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22radio\x22,\x22slug\x22:\x22radio\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22saxophone\x22,\x22slug\x22:\x22saxophone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22guitar\x22,\x22slug\x22:\x22guitar\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22musical\x20keyboard\x22,\x22slug\x22:\x22musical_keyboard\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22trumpet\x22,\x22slug\x22:\x22trumpet\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22violin\x22,\x22slug\x22:\x22violin\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🪕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22banjo\x22,\x22slug\x22:\x22banjo\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🥁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22drum\x22,\x22slug\x22:\x22drum\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22📱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mobile\x20phone\x22,\x22slug\x22:\x22mobile_phone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mobile\x20phone\x20with\x20arrow\x22,\x22slug\x22:\x22mobile_phone_with_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☎️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22telephone\x22,\x22slug\x22:\x22telephone\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22telephone\x20receiver\x22,\x22slug\x22:\x22telephone_receiver\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pager\x22,\x22slug\x22:\x22pager\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fax\x20machine\x22,\x22slug\x22:\x22fax_machine\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22battery\x22,\x22slug\x22:\x22battery\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22electric\x20plug\x22,\x22slug\x22:\x22electric_plug\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22laptop\x22,\x22slug\x22:\x22laptop\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🖥️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22desktop\x20computer\x22,\x22slug\x22:\x22desktop_computer\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🖨️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22printer\x22,\x22slug\x22:\x22printer\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⌨️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keyboard\x22,\x22slug\x22:\x22keyboard\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🖱️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22computer\x20mouse\x22,\x22slug\x22:\x22computer_mouse\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🖲️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22trackball\x22,\x22slug\x22:\x22trackball\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22💽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22computer\x20disk\x22,\x22slug\x22:\x22computer_disk\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22floppy\x20disk\x22,\x22slug\x22:\x22floppy_disk\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22optical\x20disk\x22,\x22slug\x22:\x22optical_disk\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dvd\x22,\x22slug\x22:\x22dvd\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22abacus\x22,\x22slug\x22:\x22abacus\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🎥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22movie\x20camera\x22,\x22slug\x22:\x22movie_camera\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎞️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22film\x20frames\x22,\x22slug\x22:\x22film_frames\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📽️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22film\x20projector\x22,\x22slug\x22:\x22film_projector\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🎬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clapper\x20board\x22,\x22slug\x22:\x22clapper_board\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22television\x22,\x22slug\x22:\x22television\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22camera\x22,\x22slug\x22:\x22camera\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22camera\x20with\x20flash\x22,\x22slug\x22:\x22camera_with_flash\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22📹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22video\x20camera\x22,\x22slug\x22:\x22video_camera\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22videocassette\x22,\x22slug\x22:\x22videocassette\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22magnifying\x20glass\x20tilted\x20left\x22,\x22slug\x22:\x22magnifying_glass_tilted_left\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22magnifying\x20glass\x20tilted\x20right\x22,\x22slug\x22:\x22magnifying_glass_tilted_right\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🕯️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22candle\x22,\x22slug\x22:\x22candle\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22💡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22light\x20bulb\x22,\x22slug\x22:\x22light_bulb\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flashlight\x22,\x22slug\x22:\x22flashlight\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20paper\x20lantern\x22,\x22slug\x22:\x22red_paper_lantern\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🪔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22diya\x20lamp\x22,\x22slug\x22:\x22diya_lamp\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22📔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22notebook\x20with\x20decorative\x20cover\x22,\x22slug\x22:\x22notebook_with_decorative_cover\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22closed\x20book\x22,\x22slug\x22:\x22closed_book\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22open\x20book\x22,\x22slug\x22:\x22open_book\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22green\x20book\x22,\x22slug\x22:\x22green_book\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22blue\x20book\x22,\x22slug\x22:\x22blue_book\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22orange\x20book\x22,\x22slug\x22:\x22orange_book\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22books\x22,\x22slug\x22:\x22books\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22notebook\x22,\x22slug\x22:\x22notebook\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ledger\x22,\x22slug\x22:\x22ledger\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22page\x20with\x20curl\x22,\x22slug\x22:\x22page_with_curl\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22scroll\x22,\x22slug\x22:\x22scroll\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22page\x20facing\x20up\x22,\x22slug\x22:\x22page_facing_up\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22newspaper\x22,\x22slug\x22:\x22newspaper\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗞️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rolled-up\x20newspaper\x22,\x22slug\x22:\x22rolled_up_newspaper\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bookmark\x20tabs\x22,\x22slug\x22:\x22bookmark_tabs\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bookmark\x22,\x22slug\x22:\x22bookmark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏷️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22label\x22,\x22slug\x22:\x22label\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22💰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22money\x20bag\x22,\x22slug\x22:\x22money_bag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yen\x20banknote\x22,\x22slug\x22:\x22yen_banknote\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dollar\x20banknote\x22,\x22slug\x22:\x22dollar_banknote\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22euro\x20banknote\x22,\x22slug\x22:\x22euro_banknote\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pound\x20banknote\x22,\x22slug\x22:\x22pound_banknote\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22💸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22money\x20with\x20wings\x22,\x22slug\x22:\x22money_with_wings\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22credit\x20card\x22,\x22slug\x22:\x22credit_card\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🧾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22receipt\x22,\x22slug\x22:\x22receipt\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22💹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chart\x20increasing\x20with\x20yen\x22,\x22slug\x22:\x22chart_increasing_with_yen\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✉️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22envelope\x22,\x22slug\x22:\x22envelope\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22e-mail\x22,\x22slug\x22:\x22e_mail\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22incoming\x20envelope\x22,\x22slug\x22:\x22incoming_envelope\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22envelope\x20with\x20arrow\x22,\x22slug\x22:\x22envelope_with_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22outbox\x20tray\x22,\x22slug\x22:\x22outbox_tray\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22inbox\x20tray\x22,\x22slug\x22:\x22inbox_tray\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22package\x22,\x22slug\x22:\x22package\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22closed\x20mailbox\x20with\x20raised\x20flag\x22,\x22slug\x22:\x22closed_mailbox_with_raised_flag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22closed\x20mailbox\x20with\x20lowered\x20flag\x22,\x22slug\x22:\x22closed_mailbox_with_lowered_flag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22open\x20mailbox\x20with\x20raised\x20flag\x22,\x22slug\x22:\x22open_mailbox_with_raised_flag\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22open\x20mailbox\x20with\x20lowered\x20flag\x22,\x22slug\x22:\x22open_mailbox_with_lowered_flag\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22postbox\x22,\x22slug\x22:\x22postbox\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗳️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ballot\x20box\x20with\x20ballot\x22,\x22slug\x22:\x22ballot_box_with_ballot\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22✏️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pencil\x22,\x22slug\x22:\x22pencil\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✒️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20nib\x22,\x22slug\x22:\x22black_nib\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🖋️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fountain\x20pen\x22,\x22slug\x22:\x22fountain_pen\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🖊️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pen\x22,\x22slug\x22:\x22pen\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🖌️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22paintbrush\x22,\x22slug\x22:\x22paintbrush\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🖍️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crayon\x22,\x22slug\x22:\x22crayon\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22memo\x22,\x22slug\x22:\x22memo\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22briefcase\x22,\x22slug\x22:\x22briefcase\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22file\x20folder\x22,\x22slug\x22:\x22file_folder\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22open\x20file\x20folder\x22,\x22slug\x22:\x22open_file_folder\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22card\x20index\x20dividers\x22,\x22slug\x22:\x22card_index_dividers\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22calendar\x22,\x22slug\x22:\x22calendar\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22tear-off\x20calendar\x22,\x22slug\x22:\x22tear_off_calendar\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗒️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spiral\x20notepad\x22,\x22slug\x22:\x22spiral_notepad\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🗓️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22spiral\x20calendar\x22,\x22slug\x22:\x22spiral_calendar\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📇\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22card\x20index\x22,\x22slug\x22:\x22card_index\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chart\x20increasing\x22,\x22slug\x22:\x22chart_increasing\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chart\x20decreasing\x22,\x22slug\x22:\x22chart_decreasing\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bar\x20chart\x22,\x22slug\x22:\x22bar_chart\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clipboard\x22,\x22slug\x22:\x22clipboard\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pushpin\x22,\x22slug\x22:\x22pushpin\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22round\x20pushpin\x22,\x22slug\x22:\x22round_pushpin\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22paperclip\x22,\x22slug\x22:\x22paperclip\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🖇️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22linked\x20paperclips\x22,\x22slug\x22:\x22linked_paperclips\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22📏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22straight\x20ruler\x22,\x22slug\x22:\x22straight_ruler\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22triangular\x20ruler\x22,\x22slug\x22:\x22triangular_ruler\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22scissors\x22,\x22slug\x22:\x22scissors\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗃️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22card\x20file\x20box\x22,\x22slug\x22:\x22card_file_box\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🗄️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22file\x20cabinet\x22,\x22slug\x22:\x22file_cabinet\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🗑️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wastebasket\x22,\x22slug\x22:\x22wastebasket\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🔒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22locked\x22,\x22slug\x22:\x22locked\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22unlocked\x22,\x22slug\x22:\x22unlocked\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22locked\x20with\x20pen\x22,\x22slug\x22:\x22locked_with_pen\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22locked\x20with\x20key\x22,\x22slug\x22:\x22locked_with_key\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22key\x22,\x22slug\x22:\x22key\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🗝️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22old\x20key\x22,\x22slug\x22:\x22old_key\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🔨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hammer\x22,\x22slug\x22:\x22hammer\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🪓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22axe\x22,\x22slug\x22:\x22axe\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22⛏️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pick\x22,\x22slug\x22:\x22pick\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⚒️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hammer\x20and\x20pick\x22,\x22slug\x22:\x22hammer_and_pick\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛠️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hammer\x20and\x20wrench\x22,\x22slug\x22:\x22hammer_and_wrench\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🗡️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dagger\x22,\x22slug\x22:\x22dagger\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⚔️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crossed\x20swords\x22,\x22slug\x22:\x22crossed_swords\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22water\x20pistol\x22,\x22slug\x22:\x22water_pistol\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bow\x20and\x20arrow\x22,\x22slug\x22:\x22bow_and_arrow\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛡️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shield\x22,\x22slug\x22:\x22shield\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🔧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wrench\x22,\x22slug\x22:\x22wrench\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22nut\x20and\x20bolt\x22,\x22slug\x22:\x22nut_and_bolt\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚙️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22gear\x22,\x22slug\x22:\x22gear\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🗜️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clamp\x22,\x22slug\x22:\x22clamp\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⚖️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22balance\x20scale\x22,\x22slug\x22:\x22balance_scale\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🦯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20cane\x22,\x22slug\x22:\x22white_cane\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🔗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22link\x22,\x22slug\x22:\x22link\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛓️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chains\x22,\x22slug\x22:\x22chains\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🧰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22toolbox\x22,\x22slug\x22:\x22toolbox\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22magnet\x22,\x22slug\x22:\x22magnet\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22⚗️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22alembic\x22,\x22slug\x22:\x22alembic\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🧪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22test\x20tube\x22,\x22slug\x22:\x22test_tube\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22petri\x20dish\x22,\x22slug\x22:\x22petri_dish\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dna\x22,\x22slug\x22:\x22dna\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🔬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22microscope\x22,\x22slug\x22:\x22microscope\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22telescope\x22,\x22slug\x22:\x22telescope\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22📡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22satellite\x20antenna\x22,\x22slug\x22:\x22satellite_antenna\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22syringe\x22,\x22slug\x22:\x22syringe\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🩸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22drop\x20of\x20blood\x22,\x22slug\x22:\x22drop_of_blood\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22💊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pill\x22,\x22slug\x22:\x22pill\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🩹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22adhesive\x20bandage\x22,\x22slug\x22:\x22adhesive_bandage\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🩺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22stethoscope\x22,\x22slug\x22:\x22stethoscope\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🚪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22door\x22,\x22slug\x22:\x22door\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛏️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bed\x22,\x22slug\x22:\x22bed\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🛋️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22couch\x20and\x20lamp\x22,\x22slug\x22:\x22couch_and_lamp\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🪑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chair\x22,\x22slug\x22:\x22chair\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🚽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22toilet\x22,\x22slug\x22:\x22toilet\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shower\x22,\x22slug\x22:\x22shower\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bathtub\x22,\x22slug\x22:\x22bathtub\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🪒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22razor\x22,\x22slug\x22:\x22razor\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🧴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22lotion\x20bottle\x22,\x22slug\x22:\x22lotion_bottle\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22safety\x20pin\x22,\x22slug\x22:\x22safety_pin\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22broom\x22,\x22slug\x22:\x22broom\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22basket\x22,\x22slug\x22:\x22basket\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22roll\x20of\x20paper\x22,\x22slug\x22:\x22roll_of_paper\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22soap\x22,\x22slug\x22:\x22soap\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sponge\x22,\x22slug\x22:\x22sponge\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🧯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fire\x20extinguisher\x22,\x22slug\x22:\x22fire_extinguisher\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🛒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shopping\x20cart\x22,\x22slug\x22:\x22shopping_cart\x22,\x22unicode_version\x22:\x223.0\x22,\x22emoji_version\x22:\x223.0\x22},{\x22emoji\x22:\x22🚬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cigarette\x22,\x22slug\x22:\x22cigarette\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚰️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22coffin\x22,\x22slug\x22:\x22coffin\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⚱️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22funeral\x20urn\x22,\x22slug\x22:\x22funeral_urn\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🗿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22moai\x22,\x22slug\x22:\x22moai\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22}],\x22Symbols\x22:[{\x22emoji\x22:\x22🏧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ATM\x20sign\x22,\x22slug\x22:\x22atm_sign\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22litter\x20in\x20bin\x20sign\x22,\x22slug\x22:\x22litter_in_bin_sign\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22potable\x20water\x22,\x22slug\x22:\x22potable_water\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22♿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wheelchair\x20symbol\x22,\x22slug\x22:\x22wheelchair_symbol\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22men’s\x20room\x22,\x22slug\x22:\x22men_s_room\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22women’s\x20room\x22,\x22slug\x22:\x22women_s_room\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22restroom\x22,\x22slug\x22:\x22restroom\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22baby\x20symbol\x22,\x22slug\x22:\x22baby_symbol\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22water\x20closet\x22,\x22slug\x22:\x22water_closet\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22passport\x20control\x22,\x22slug\x22:\x22passport_control\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22customs\x22,\x22slug\x22:\x22customs\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22baggage\x20claim\x22,\x22slug\x22:\x22baggage_claim\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🛅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22left\x20luggage\x22,\x22slug\x22:\x22left_luggage\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⚠️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22warning\x22,\x22slug\x22:\x22warning\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22children\x20crossing\x22,\x22slug\x22:\x22children_crossing\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⛔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20entry\x22,\x22slug\x22:\x22no_entry\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22prohibited\x22,\x22slug\x22:\x22prohibited\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20bicycles\x22,\x22slug\x22:\x22no_bicycles\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20smoking\x22,\x22slug\x22:\x22no_smoking\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20littering\x22,\x22slug\x22:\x22no_littering\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22non-potable\x20water\x22,\x22slug\x22:\x22non_potable_water\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🚷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20pedestrians\x22,\x22slug\x22:\x22no_pedestrians\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22📵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20mobile\x20phones\x22,\x22slug\x22:\x22no_mobile_phones\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔞\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22no\x20one\x20under\x20eighteen\x22,\x22slug\x22:\x22no_one_under_eighteen\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☢️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22radioactive\x22,\x22slug\x22:\x22radioactive\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22☣️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22biohazard\x22,\x22slug\x22:\x22biohazard\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⬆️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22up\x20arrow\x22,\x22slug\x22:\x22up_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↗️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22up-right\x20arrow\x22,\x22slug\x22:\x22up_right_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22➡️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22right\x20arrow\x22,\x22slug\x22:\x22right_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↘️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22down-right\x20arrow\x22,\x22slug\x22:\x22down_right_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⬇️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22down\x20arrow\x22,\x22slug\x22:\x22down_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↙️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22down-left\x20arrow\x22,\x22slug\x22:\x22down_left_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⬅️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22left\x20arrow\x22,\x22slug\x22:\x22left_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↖️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22up-left\x20arrow\x22,\x22slug\x22:\x22up_left_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↕️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22up-down\x20arrow\x22,\x22slug\x22:\x22up_down_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↔️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22left-right\x20arrow\x22,\x22slug\x22:\x22left_right_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↩️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22right\x20arrow\x20curving\x20left\x22,\x22slug\x22:\x22right_arrow_curving_left\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22↪️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22left\x20arrow\x20curving\x20right\x22,\x22slug\x22:\x22left_arrow_curving_right\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⤴️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22right\x20arrow\x20curving\x20up\x22,\x22slug\x22:\x22right_arrow_curving_up\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⤵️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22right\x20arrow\x20curving\x20down\x22,\x22slug\x22:\x22right_arrow_curving_down\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔃\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22clockwise\x20vertical\x20arrows\x22,\x22slug\x22:\x22clockwise_vertical_arrows\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔄\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22counterclockwise\x20arrows\x20button\x22,\x22slug\x22:\x22counterclockwise_arrows_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22BACK\x20arrow\x22,\x22slug\x22:\x22back_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22END\x20arrow\x22,\x22slug\x22:\x22end_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ON!\x20arrow\x22,\x22slug\x22:\x22on_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22SOON\x20arrow\x22,\x22slug\x22:\x22soon_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔝\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22TOP\x20arrow\x22,\x22slug\x22:\x22top_arrow\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🛐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22place\x20of\x20worship\x22,\x22slug\x22:\x22place_of_worship\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22⚛️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22atom\x20symbol\x22,\x22slug\x22:\x22atom_symbol\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🕉️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22om\x22,\x22slug\x22:\x22om\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22✡️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22star\x20of\x20David\x22,\x22slug\x22:\x22star_of_david\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22☸️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wheel\x20of\x20dharma\x22,\x22slug\x22:\x22wheel_of_dharma\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22☯️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yin\x20yang\x22,\x22slug\x22:\x22yin_yang\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22✝️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22latin\x20cross\x22,\x22slug\x22:\x22latin_cross\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22☦️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22orthodox\x20cross\x22,\x22slug\x22:\x22orthodox_cross\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22☪️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22star\x20and\x20crescent\x22,\x22slug\x22:\x22star_and_crescent\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22☮️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22peace\x20symbol\x22,\x22slug\x22:\x22peace_symbol\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🕎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22menorah\x22,\x22slug\x22:\x22menorah\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dotted\x20six-pointed\x20star\x22,\x22slug\x22:\x22dotted_six_pointed_star\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Aries\x22,\x22slug\x22:\x22aries\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♉\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Taurus\x22,\x22slug\x22:\x22taurus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♊\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Gemini\x22,\x22slug\x22:\x22gemini\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♋\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Cancer\x22,\x22slug\x22:\x22cancer\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Leo\x22,\x22slug\x22:\x22leo\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♍\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Virgo\x22,\x22slug\x22:\x22virgo\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Libra\x22,\x22slug\x22:\x22libra\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♏\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Scorpio\x22,\x22slug\x22:\x22scorpio\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Sagittarius\x22,\x22slug\x22:\x22sagittarius\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Capricorn\x22,\x22slug\x22:\x22capricorn\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Aquarius\x22,\x22slug\x22:\x22aquarius\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Pisces\x22,\x22slug\x22:\x22pisces\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⛎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Ophiuchus\x22,\x22slug\x22:\x22ophiuchus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔀\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22shuffle\x20tracks\x20button\x22,\x22slug\x22:\x22shuffle_tracks_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22repeat\x20button\x22,\x22slug\x22:\x22repeat_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔂\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22repeat\x20single\x20button\x22,\x22slug\x22:\x22repeat_single_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22▶️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22play\x20button\x22,\x22slug\x22:\x22play_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fast-forward\x20button\x22,\x22slug\x22:\x22fast_forward_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏭️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22next\x20track\x20button\x22,\x22slug\x22:\x22next_track_button\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⏯️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22play\x20or\x20pause\x20button\x22,\x22slug\x22:\x22play_or_pause_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22◀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22reverse\x20button\x22,\x22slug\x22:\x22reverse_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fast\x20reverse\x20button\x22,\x22slug\x22:\x22fast_reverse_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏮️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22last\x20track\x20button\x22,\x22slug\x22:\x22last_track_button\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🔼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22upwards\x20button\x22,\x22slug\x22:\x22upwards_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fast\x20up\x20button\x22,\x22slug\x22:\x22fast_up_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22downwards\x20button\x22,\x22slug\x22:\x22downwards_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fast\x20down\x20button\x22,\x22slug\x22:\x22fast_down_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⏸️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pause\x20button\x22,\x22slug\x22:\x22pause_button\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⏹️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22stop\x20button\x22,\x22slug\x22:\x22stop_button\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⏺️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22record\x20button\x22,\x22slug\x22:\x22record_button\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22⏏️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eject\x20button\x22,\x22slug\x22:\x22eject_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🎦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cinema\x22,\x22slug\x22:\x22cinema\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22dim\x20button\x22,\x22slug\x22:\x22dim_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔆\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22bright\x20button\x22,\x22slug\x22:\x22bright_button\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22📶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22antenna\x20bars\x22,\x22slug\x22:\x22antenna_bars\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22vibration\x20mode\x22,\x22slug\x22:\x22vibration_mode\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22mobile\x20phone\x20off\x22,\x22slug\x22:\x22mobile_phone_off\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♀️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22female\x20sign\x22,\x22slug\x22:\x22female_sign\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22♂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22male\x20sign\x22,\x22slug\x22:\x22male_sign\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22⚧️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22transgender\x20symbol\x22,\x22slug\x22:\x22transgender_symbol\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22✖️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22multiply\x22,\x22slug\x22:\x22multiply\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22➕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22plus\x22,\x22slug\x22:\x22plus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22➖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22minus\x22,\x22slug\x22:\x22minus\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22➗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22divide\x22,\x22slug\x22:\x22divide\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22♾️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22infinity\x22,\x22slug\x22:\x22infinity\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22‼️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22double\x20exclamation\x20mark\x22,\x22slug\x22:\x22double_exclamation_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⁉️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22exclamation\x20question\x20mark\x22,\x22slug\x22:\x22exclamation_question_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20question\x20mark\x22,\x22slug\x22:\x22red_question_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20question\x20mark\x22,\x22slug\x22:\x22white_question_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20exclamation\x20mark\x22,\x22slug\x22:\x22white_exclamation_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20exclamation\x20mark\x22,\x22slug\x22:\x22red_exclamation_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22〰️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22wavy\x20dash\x22,\x22slug\x22:\x22wavy_dash\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22currency\x20exchange\x22,\x22slug\x22:\x22currency_exchange\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22heavy\x20dollar\x20sign\x22,\x22slug\x22:\x22heavy_dollar_sign\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚕️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22medical\x20symbol\x22,\x22slug\x22:\x22medical_symbol\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22♻️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22recycling\x20symbol\x22,\x22slug\x22:\x22recycling_symbol\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚜️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22fleur-de-lis\x22,\x22slug\x22:\x22fleur_de_lis\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🔱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22trident\x20emblem\x22,\x22slug\x22:\x22trident_emblem\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22📛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22name\x20badge\x22,\x22slug\x22:\x22name_badge\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20symbol\x20for\x20beginner\x22,\x22slug\x22:\x22japanese_symbol_for_beginner\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⭕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22hollow\x20red\x20circle\x22,\x22slug\x22:\x22hollow_red_circle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✅\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22check\x20mark\x20button\x22,\x22slug\x22:\x22check_mark_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22☑️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22check\x20box\x20with\x20check\x22,\x22slug\x22:\x22check_box_with_check\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✔️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22check\x20mark\x22,\x22slug\x22:\x22check_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cross\x20mark\x22,\x22slug\x22:\x22cross_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22cross\x20mark\x20button\x22,\x22slug\x22:\x22cross_mark_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22➰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22curly\x20loop\x22,\x22slug\x22:\x22curly_loop\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22➿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22double\x20curly\x20loop\x22,\x22slug\x22:\x22double_curly_loop\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22〽️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22part\x20alternation\x20mark\x22,\x22slug\x22:\x22part_alternation_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✳️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eight-spoked\x20asterisk\x22,\x22slug\x22:\x22eight_spoked_asterisk\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22✴️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22eight-pointed\x20star\x22,\x22slug\x22:\x22eight_pointed_star\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22❇️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22sparkle\x22,\x22slug\x22:\x22sparkle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22©️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22copyright\x22,\x22slug\x22:\x22copyright\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22®️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22registered\x22,\x22slug\x22:\x22registered\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22™️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22trade\x20mark\x22,\x22slug\x22:\x22trade_mark\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22#️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x20#\x22,\x22slug\x22:\x22keycap_\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22*️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x20*\x22,\x22slug\x22:\x22keycap_\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x220️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x200\x22,\x22slug\x22:\x22keycap_0\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x221️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x201\x22,\x22slug\x22:\x22keycap_1\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x222️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x202\x22,\x22slug\x22:\x22keycap_2\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x223️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x203\x22,\x22slug\x22:\x22keycap_3\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x224️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x204\x22,\x22slug\x22:\x22keycap_4\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x225️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x205\x22,\x22slug\x22:\x22keycap_5\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x226️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x206\x22,\x22slug\x22:\x22keycap_6\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x227️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x207\x22,\x22slug\x22:\x22keycap_7\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x228️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x208\x22,\x22slug\x22:\x22keycap_8\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x229️⃣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x209\x22,\x22slug\x22:\x22keycap_9\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔟\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22keycap\x2010\x22,\x22slug\x22:\x22keycap_10\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22input\x20latin\x20uppercase\x22,\x22slug\x22:\x22input_latin_uppercase\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22input\x20latin\x20lowercase\x22,\x22slug\x22:\x22input_latin_lowercase\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22input\x20numbers\x22,\x22slug\x22:\x22input_numbers\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22input\x20symbols\x22,\x22slug\x22:\x22input_symbols\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22input\x20latin\x20letters\x22,\x22slug\x22:\x22input_latin_letters\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🅰️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22A\x20button\x20(blood\x20type)\x22,\x22slug\x22:\x22a_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆎\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22AB\x20button\x20(blood\x20type)\x22,\x22slug\x22:\x22ab_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🅱️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22B\x20button\x20(blood\x20type)\x22,\x22slug\x22:\x22b_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22CL\x20button\x22,\x22slug\x22:\x22cl_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆒\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22COOL\x20button\x22,\x22slug\x22:\x22cool_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆓\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22FREE\x20button\x22,\x22slug\x22:\x22free_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22ℹ️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22information\x22,\x22slug\x22:\x22information\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆔\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22ID\x20button\x22,\x22slug\x22:\x22id_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22Ⓜ️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22circled\x20M\x22,\x22slug\x22:\x22circled_m\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆕\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22NEW\x20button\x22,\x22slug\x22:\x22new_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆖\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22NG\x20button\x22,\x22slug\x22:\x22ng_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🅾️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22O\x20button\x20(blood\x20type)\x22,\x22slug\x22:\x22o_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆗\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22OK\x20button\x22,\x22slug\x22:\x22ok_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🅿️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22P\x20button\x22,\x22slug\x22:\x22p_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22SOS\x20button\x22,\x22slug\x22:\x22sos_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆙\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22UP!\x20button\x22,\x22slug\x22:\x22up_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🆚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22VS\x20button\x22,\x22slug\x22:\x22vs_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“here”\x20button\x22,\x22slug\x22:\x22japanese_here_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈂️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“service\x20charge”\x20button\x22,\x22slug\x22:\x22japanese_service_charge_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈷️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“monthly\x20amount”\x20button\x22,\x22slug\x22:\x22japanese_monthly_amount_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“not\x20free\x20of\x20charge”\x20button\x22,\x22slug\x22:\x22japanese_not_free_of_charge_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“reserved”\x20button\x22,\x22slug\x22:\x22japanese_reserved_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🉐\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“bargain”\x20button\x22,\x22slug\x22:\x22japanese_bargain_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“discount”\x20button\x22,\x22slug\x22:\x22japanese_discount_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈚\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“free\x20of\x20charge”\x20button\x22,\x22slug\x22:\x22japanese_free_of_charge_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“prohibited”\x20button\x22,\x22slug\x22:\x22japanese_prohibited_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🉑\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“acceptable”\x20button\x22,\x22slug\x22:\x22japanese_acceptable_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“application”\x20button\x22,\x22slug\x22:\x22japanese_application_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“passing\x20grade”\x20button\x22,\x22slug\x22:\x22japanese_passing_grade_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“vacancy”\x20button\x22,\x22slug\x22:\x22japanese_vacancy_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22㊗️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“congratulations”\x20button\x22,\x22slug\x22:\x22japanese_congratulations_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22㊙️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“secret”\x20button\x22,\x22slug\x22:\x22japanese_secret_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“open\x20for\x20business”\x20button\x22,\x22slug\x22:\x22japanese_open_for_business_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🈵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22Japanese\x20“no\x20vacancy”\x20button\x22,\x22slug\x22:\x22japanese_no_vacancy_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20circle\x22,\x22slug\x22:\x22red_circle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🟠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22orange\x20circle\x22,\x22slug\x22:\x22orange_circle\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟡\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yellow\x20circle\x22,\x22slug\x22:\x22yellow_circle\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟢\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22green\x20circle\x22,\x22slug\x22:\x22green_circle\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🔵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22blue\x20circle\x22,\x22slug\x22:\x22blue_circle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🟣\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22purple\x20circle\x22,\x22slug\x22:\x22purple_circle\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟤\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22brown\x20circle\x22,\x22slug\x22:\x22brown_circle\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22⚫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20circle\x22,\x22slug\x22:\x22black_circle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⚪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20circle\x22,\x22slug\x22:\x22white_circle\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🟥\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20square\x22,\x22slug\x22:\x22red_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22orange\x20square\x22,\x22slug\x22:\x22orange_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22yellow\x20square\x22,\x22slug\x22:\x22yellow_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22green\x20square\x22,\x22slug\x22:\x22green_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22blue\x20square\x22,\x22slug\x22:\x22blue_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22purple\x20square\x22,\x22slug\x22:\x22purple_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22🟫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22brown\x20square\x22,\x22slug\x22:\x22brown_square\x22,\x22unicode_version\x22:\x2212.0\x22,\x22emoji_version\x22:\x2212.0\x22},{\x22emoji\x22:\x22⬛\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20large\x20square\x22,\x22slug\x22:\x22black_large_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22⬜\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20large\x20square\x22,\x22slug\x22:\x22white_large_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22◼️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20medium\x20square\x22,\x22slug\x22:\x22black_medium_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22◻️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20medium\x20square\x22,\x22slug\x22:\x22white_medium_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22◾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20medium-small\x20square\x22,\x22slug\x22:\x22black_medium_small_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22◽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20medium-small\x20square\x22,\x22slug\x22:\x22white_medium_small_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22▪️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20small\x20square\x22,\x22slug\x22:\x22black_small_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22▫️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20small\x20square\x22,\x22slug\x22:\x22white_small_square\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22large\x20orange\x20diamond\x22,\x22slug\x22:\x22large_orange_diamond\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22large\x20blue\x20diamond\x22,\x22slug\x22:\x22large_blue_diamond\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22small\x20orange\x20diamond\x22,\x22slug\x22:\x22small_orange_diamond\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22small\x20blue\x20diamond\x22,\x22slug\x22:\x22small_blue_diamond\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20triangle\x20pointed\x20up\x22,\x22slug\x22:\x22red_triangle_pointed_up\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22red\x20triangle\x20pointed\x20down\x22,\x22slug\x22:\x22red_triangle_pointed_down\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22💠\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22diamond\x20with\x20a\x20dot\x22,\x22slug\x22:\x22diamond_with_a_dot\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔘\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22radio\x20button\x22,\x22slug\x22:\x22radio_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20square\x20button\x22,\x22slug\x22:\x22white_square_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🔲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20square\x20button\x22,\x22slug\x22:\x22black_square_button\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22}],\x22Flags\x22:[{\x22emoji\x22:\x22🏁\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22chequered\x20flag\x22,\x22slug\x22:\x22chequered_flag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🚩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22triangular\x20flag\x22,\x22slug\x22:\x22triangular_flag\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🎌\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22crossed\x20flags\x22,\x22slug\x22:\x22crossed_flags\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🏴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22black\x20flag\x22,\x22slug\x22:\x22black_flag\x22,\x22unicode_version\x22:\x221.0\x22,\x22emoji_version\x22:\x221.0\x22},{\x22emoji\x22:\x22🏳️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22white\x20flag\x22,\x22slug\x22:\x22white_flag\x22,\x22unicode_version\x22:\x220.7\x22,\x22emoji_version\x22:\x220.7\x22},{\x22emoji\x22:\x22🏳️‍🌈\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22rainbow\x20flag\x22,\x22slug\x22:\x22rainbow_flag\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🏳️‍⚧️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22transgender\x20flag\x22,\x22slug\x22:\x22transgender_flag\x22,\x22unicode_version\x22:\x2213.0\x22,\x22emoji_version\x22:\x2213.0\x22},{\x22emoji\x22:\x22🏴‍☠️\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22pirate\x20flag\x22,\x22slug\x22:\x22pirate_flag\x22,\x22unicode_version\x22:\x2211.0\x22,\x22emoji_version\x22:\x2211.0\x22},{\x22emoji\x22:\x22🇦🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ascension\x20Island\x22,\x22slug\x22:\x22flag_ascension_island\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Andorra\x22,\x22slug\x22:\x22flag_andorra\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20United\x20Arab\x20Emirates\x22,\x22slug\x22:\x22flag_united_arab_emirates\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Afghanistan\x22,\x22slug\x22:\x22flag_afghanistan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Antigua\x20&\x20Barbuda\x22,\x22slug\x22:\x22flag_antigua_barbuda\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Anguilla\x22,\x22slug\x22:\x22flag_anguilla\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Albania\x22,\x22slug\x22:\x22flag_albania\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Armenia\x22,\x22slug\x22:\x22flag_armenia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Angola\x22,\x22slug\x22:\x22flag_angola\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Antarctica\x22,\x22slug\x22:\x22flag_antarctica\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Argentina\x22,\x22slug\x22:\x22flag_argentina\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20American\x20Samoa\x22,\x22slug\x22:\x22flag_american_samoa\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Austria\x22,\x22slug\x22:\x22flag_austria\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Australia\x22,\x22slug\x22:\x22flag_australia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Aruba\x22,\x22slug\x22:\x22flag_aruba\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Åland\x20Islands\x22,\x22slug\x22:\x22flag_aland_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇦🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Azerbaijan\x22,\x22slug\x22:\x22flag_azerbaijan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bosnia\x20&\x20Herzegovina\x22,\x22slug\x22:\x22flag_bosnia_herzegovina\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Barbados\x22,\x22slug\x22:\x22flag_barbados\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bangladesh\x22,\x22slug\x22:\x22flag_bangladesh\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Belgium\x22,\x22slug\x22:\x22flag_belgium\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Burkina\x20Faso\x22,\x22slug\x22:\x22flag_burkina_faso\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bulgaria\x22,\x22slug\x22:\x22flag_bulgaria\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bahrain\x22,\x22slug\x22:\x22flag_bahrain\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Burundi\x22,\x22slug\x22:\x22flag_burundi\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Benin\x22,\x22slug\x22:\x22flag_benin\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Barthélemy\x22,\x22slug\x22:\x22flag_st_barthelemy\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bermuda\x22,\x22slug\x22:\x22flag_bermuda\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Brunei\x22,\x22slug\x22:\x22flag_brunei\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bolivia\x22,\x22slug\x22:\x22flag_bolivia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Caribbean\x20Netherlands\x22,\x22slug\x22:\x22flag_caribbean_netherlands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Brazil\x22,\x22slug\x22:\x22flag_brazil\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bahamas\x22,\x22slug\x22:\x22flag_bahamas\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bhutan\x22,\x22slug\x22:\x22flag_bhutan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Bouvet\x20Island\x22,\x22slug\x22:\x22flag_bouvet_island\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Botswana\x22,\x22slug\x22:\x22flag_botswana\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Belarus\x22,\x22slug\x22:\x22flag_belarus\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇧🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Belize\x22,\x22slug\x22:\x22flag_belize\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Canada\x22,\x22slug\x22:\x22flag_canada\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cocos\x20(Keeling)\x20Islands\x22,\x22slug\x22:\x22flag_cocos_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Congo\x20-\x20Kinshasa\x22,\x22slug\x22:\x22flag_congo_kinshasa\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Central\x20African\x20Republic\x22,\x22slug\x22:\x22flag_central_african_republic\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Congo\x20-\x20Brazzaville\x22,\x22slug\x22:\x22flag_congo_brazzaville\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Switzerland\x22,\x22slug\x22:\x22flag_switzerland\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Côte\x20d’Ivoire\x22,\x22slug\x22:\x22flag_cote_d_ivoire\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cook\x20Islands\x22,\x22slug\x22:\x22flag_cook_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Chile\x22,\x22slug\x22:\x22flag_chile\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cameroon\x22,\x22slug\x22:\x22flag_cameroon\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20China\x22,\x22slug\x22:\x22flag_china\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇨🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Colombia\x22,\x22slug\x22:\x22flag_colombia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Clipperton\x20Island\x22,\x22slug\x22:\x22flag_clipperton_island\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Costa\x20Rica\x22,\x22slug\x22:\x22flag_costa_rica\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cuba\x22,\x22slug\x22:\x22flag_cuba\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cape\x20Verde\x22,\x22slug\x22:\x22flag_cape_verde\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Curaçao\x22,\x22slug\x22:\x22flag_curacao\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Christmas\x20Island\x22,\x22slug\x22:\x22flag_christmas_island\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cyprus\x22,\x22slug\x22:\x22flag_cyprus\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇨🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Czechia\x22,\x22slug\x22:\x22flag_czechia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇩🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Germany\x22,\x22slug\x22:\x22flag_germany\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇩🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Diego\x20Garcia\x22,\x22slug\x22:\x22flag_diego_garcia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇩🇯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Djibouti\x22,\x22slug\x22:\x22flag_djibouti\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇩🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Denmark\x22,\x22slug\x22:\x22flag_denmark\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇩🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Dominica\x22,\x22slug\x22:\x22flag_dominica\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇩🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Dominican\x20Republic\x22,\x22slug\x22:\x22flag_dominican_republic\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇩🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Algeria\x22,\x22slug\x22:\x22flag_algeria\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ceuta\x20&\x20Melilla\x22,\x22slug\x22:\x22flag_ceuta_melilla\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ecuador\x22,\x22slug\x22:\x22flag_ecuador\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Estonia\x22,\x22slug\x22:\x22flag_estonia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Egypt\x22,\x22slug\x22:\x22flag_egypt\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Western\x20Sahara\x22,\x22slug\x22:\x22flag_western_sahara\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Eritrea\x22,\x22slug\x22:\x22flag_eritrea\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Spain\x22,\x22slug\x22:\x22flag_spain\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇪🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ethiopia\x22,\x22slug\x22:\x22flag_ethiopia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇪🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20European\x20Union\x22,\x22slug\x22:\x22flag_european_union\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇫🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Finland\x22,\x22slug\x22:\x22flag_finland\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇫🇯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Fiji\x22,\x22slug\x22:\x22flag_fiji\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇫🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Falkland\x20Islands\x22,\x22slug\x22:\x22flag_falkland_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇫🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Micronesia\x22,\x22slug\x22:\x22flag_micronesia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇫🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Faroe\x20Islands\x22,\x22slug\x22:\x22flag_faroe_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇫🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20France\x22,\x22slug\x22:\x22flag_france\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇬🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Gabon\x22,\x22slug\x22:\x22flag_gabon\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20United\x20Kingdom\x22,\x22slug\x22:\x22flag_united_kingdom\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇬🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Grenada\x22,\x22slug\x22:\x22flag_grenada\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Georgia\x22,\x22slug\x22:\x22flag_georgia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20French\x20Guiana\x22,\x22slug\x22:\x22flag_french_guiana\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guernsey\x22,\x22slug\x22:\x22flag_guernsey\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ghana\x22,\x22slug\x22:\x22flag_ghana\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Gibraltar\x22,\x22slug\x22:\x22flag_gibraltar\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Greenland\x22,\x22slug\x22:\x22flag_greenland\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Gambia\x22,\x22slug\x22:\x22flag_gambia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guinea\x22,\x22slug\x22:\x22flag_guinea\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guadeloupe\x22,\x22slug\x22:\x22flag_guadeloupe\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Equatorial\x20Guinea\x22,\x22slug\x22:\x22flag_equatorial_guinea\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Greece\x22,\x22slug\x22:\x22flag_greece\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20South\x20Georgia\x20&\x20South\x20Sandwich\x20Islands\x22,\x22slug\x22:\x22flag_south_georgia_south_sandwich_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guatemala\x22,\x22slug\x22:\x22flag_guatemala\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guam\x22,\x22slug\x22:\x22flag_guam\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guinea-Bissau\x22,\x22slug\x22:\x22flag_guinea_bissau\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇬🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Guyana\x22,\x22slug\x22:\x22flag_guyana\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇭🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Hong\x20Kong\x20SAR\x20China\x22,\x22slug\x22:\x22flag_hong_kong_sar_china\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇭🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Heard\x20&\x20McDonald\x20Islands\x22,\x22slug\x22:\x22flag_heard_mcdonald_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇭🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Honduras\x22,\x22slug\x22:\x22flag_honduras\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇭🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Croatia\x22,\x22slug\x22:\x22flag_croatia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇭🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Haiti\x22,\x22slug\x22:\x22flag_haiti\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇭🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Hungary\x22,\x22slug\x22:\x22flag_hungary\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Canary\x20Islands\x22,\x22slug\x22:\x22flag_canary_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Indonesia\x22,\x22slug\x22:\x22flag_indonesia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ireland\x22,\x22slug\x22:\x22flag_ireland\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Israel\x22,\x22slug\x22:\x22flag_israel\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Isle\x20of\x20Man\x22,\x22slug\x22:\x22flag_isle_of_man\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20India\x22,\x22slug\x22:\x22flag_india\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20British\x20Indian\x20Ocean\x20Territory\x22,\x22slug\x22:\x22flag_british_indian_ocean_territory\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Iraq\x22,\x22slug\x22:\x22flag_iraq\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Iran\x22,\x22slug\x22:\x22flag_iran\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Iceland\x22,\x22slug\x22:\x22flag_iceland\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇮🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Italy\x22,\x22slug\x22:\x22flag_italy\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇯🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Jersey\x22,\x22slug\x22:\x22flag_jersey\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇯🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Jamaica\x22,\x22slug\x22:\x22flag_jamaica\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇯🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Jordan\x22,\x22slug\x22:\x22flag_jordan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇯🇵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Japan\x22,\x22slug\x22:\x22flag_japan\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇰🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Kenya\x22,\x22slug\x22:\x22flag_kenya\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Kyrgyzstan\x22,\x22slug\x22:\x22flag_kyrgyzstan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cambodia\x22,\x22slug\x22:\x22flag_cambodia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Kiribati\x22,\x22slug\x22:\x22flag_kiribati\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Comoros\x22,\x22slug\x22:\x22flag_comoros\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Kitts\x20&\x20Nevis\x22,\x22slug\x22:\x22flag_st_kitts_nevis\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20North\x20Korea\x22,\x22slug\x22:\x22flag_north_korea\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20South\x20Korea\x22,\x22slug\x22:\x22flag_south_korea\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇰🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Kuwait\x22,\x22slug\x22:\x22flag_kuwait\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Cayman\x20Islands\x22,\x22slug\x22:\x22flag_cayman_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇰🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Kazakhstan\x22,\x22slug\x22:\x22flag_kazakhstan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Laos\x22,\x22slug\x22:\x22flag_laos\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Lebanon\x22,\x22slug\x22:\x22flag_lebanon\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Lucia\x22,\x22slug\x22:\x22flag_st_lucia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Liechtenstein\x22,\x22slug\x22:\x22flag_liechtenstein\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Sri\x20Lanka\x22,\x22slug\x22:\x22flag_sri_lanka\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Liberia\x22,\x22slug\x22:\x22flag_liberia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Lesotho\x22,\x22slug\x22:\x22flag_lesotho\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Lithuania\x22,\x22slug\x22:\x22flag_lithuania\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Luxembourg\x22,\x22slug\x22:\x22flag_luxembourg\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Latvia\x22,\x22slug\x22:\x22flag_latvia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇱🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Libya\x22,\x22slug\x22:\x22flag_libya\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Morocco\x22,\x22slug\x22:\x22flag_morocco\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Monaco\x22,\x22slug\x22:\x22flag_monaco\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Moldova\x22,\x22slug\x22:\x22flag_moldova\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Montenegro\x22,\x22slug\x22:\x22flag_montenegro\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Martin\x22,\x22slug\x22:\x22flag_st_martin\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Madagascar\x22,\x22slug\x22:\x22flag_madagascar\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Marshall\x20Islands\x22,\x22slug\x22:\x22flag_marshall_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20North\x20Macedonia\x22,\x22slug\x22:\x22flag_north_macedonia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mali\x22,\x22slug\x22:\x22flag_mali\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Myanmar\x20(Burma)\x22,\x22slug\x22:\x22flag_myanmar\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mongolia\x22,\x22slug\x22:\x22flag_mongolia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Macao\x20SAR\x20China\x22,\x22slug\x22:\x22flag_macao_sar_china\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Northern\x20Mariana\x20Islands\x22,\x22slug\x22:\x22flag_northern_mariana_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇶\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Martinique\x22,\x22slug\x22:\x22flag_martinique\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mauritania\x22,\x22slug\x22:\x22flag_mauritania\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Montserrat\x22,\x22slug\x22:\x22flag_montserrat\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Malta\x22,\x22slug\x22:\x22flag_malta\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mauritius\x22,\x22slug\x22:\x22flag_mauritius\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Maldives\x22,\x22slug\x22:\x22flag_maldives\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Malawi\x22,\x22slug\x22:\x22flag_malawi\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mexico\x22,\x22slug\x22:\x22flag_mexico\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Malaysia\x22,\x22slug\x22:\x22flag_malaysia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇲🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mozambique\x22,\x22slug\x22:\x22flag_mozambique\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Namibia\x22,\x22slug\x22:\x22flag_namibia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20New\x20Caledonia\x22,\x22slug\x22:\x22flag_new_caledonia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Niger\x22,\x22slug\x22:\x22flag_niger\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Norfolk\x20Island\x22,\x22slug\x22:\x22flag_norfolk_island\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Nigeria\x22,\x22slug\x22:\x22flag_nigeria\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Nicaragua\x22,\x22slug\x22:\x22flag_nicaragua\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Netherlands\x22,\x22slug\x22:\x22flag_netherlands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Norway\x22,\x22slug\x22:\x22flag_norway\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇵\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Nepal\x22,\x22slug\x22:\x22flag_nepal\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Nauru\x22,\x22slug\x22:\x22flag_nauru\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Niue\x22,\x22slug\x22:\x22flag_niue\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇳🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20New\x20Zealand\x22,\x22slug\x22:\x22flag_new_zealand\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇴🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Oman\x22,\x22slug\x22:\x22flag_oman\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Panama\x22,\x22slug\x22:\x22flag_panama\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Peru\x22,\x22slug\x22:\x22flag_peru\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20French\x20Polynesia\x22,\x22slug\x22:\x22flag_french_polynesia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Papua\x20New\x20Guinea\x22,\x22slug\x22:\x22flag_papua_new_guinea\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Philippines\x22,\x22slug\x22:\x22flag_philippines\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Pakistan\x22,\x22slug\x22:\x22flag_pakistan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Poland\x22,\x22slug\x22:\x22flag_poland\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Pierre\x20&\x20Miquelon\x22,\x22slug\x22:\x22flag_st_pierre_miquelon\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Pitcairn\x20Islands\x22,\x22slug\x22:\x22flag_pitcairn_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Puerto\x20Rico\x22,\x22slug\x22:\x22flag_puerto_rico\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Palestinian\x20Territories\x22,\x22slug\x22:\x22flag_palestinian_territories\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Portugal\x22,\x22slug\x22:\x22flag_portugal\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Palau\x22,\x22slug\x22:\x22flag_palau\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇵🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Paraguay\x22,\x22slug\x22:\x22flag_paraguay\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇶🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Qatar\x22,\x22slug\x22:\x22flag_qatar\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇷🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Réunion\x22,\x22slug\x22:\x22flag_reunion\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇷🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Romania\x22,\x22slug\x22:\x22flag_romania\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇷🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Serbia\x22,\x22slug\x22:\x22flag_serbia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇷🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Russia\x22,\x22slug\x22:\x22flag_russia\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇷🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Rwanda\x22,\x22slug\x22:\x22flag_rwanda\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Saudi\x20Arabia\x22,\x22slug\x22:\x22flag_saudi_arabia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇧\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Solomon\x20Islands\x22,\x22slug\x22:\x22flag_solomon_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Seychelles\x22,\x22slug\x22:\x22flag_seychelles\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Sudan\x22,\x22slug\x22:\x22flag_sudan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Sweden\x22,\x22slug\x22:\x22flag_sweden\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Singapore\x22,\x22slug\x22:\x22flag_singapore\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Helena\x22,\x22slug\x22:\x22flag_st_helena\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Slovenia\x22,\x22slug\x22:\x22flag_slovenia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Svalbard\x20&\x20Jan\x20Mayen\x22,\x22slug\x22:\x22flag_svalbard_jan_mayen\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Slovakia\x22,\x22slug\x22:\x22flag_slovakia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Sierra\x20Leone\x22,\x22slug\x22:\x22flag_sierra_leone\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20San\x20Marino\x22,\x22slug\x22:\x22flag_san_marino\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Senegal\x22,\x22slug\x22:\x22flag_senegal\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Somalia\x22,\x22slug\x22:\x22flag_somalia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Suriname\x22,\x22slug\x22:\x22flag_suriname\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20South\x20Sudan\x22,\x22slug\x22:\x22flag_south_sudan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20São\x20Tomé\x20&\x20Príncipe\x22,\x22slug\x22:\x22flag_sao_tome_principe\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20El\x20Salvador\x22,\x22slug\x22:\x22flag_el_salvador\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇽\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Sint\x20Maarten\x22,\x22slug\x22:\x22flag_sint_maarten\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Syria\x22,\x22slug\x22:\x22flag_syria\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇸🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Eswatini\x22,\x22slug\x22:\x22flag_eswatini\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tristan\x20da\x20Cunha\x22,\x22slug\x22:\x22flag_tristan_da_cunha\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Turks\x20&\x20Caicos\x20Islands\x22,\x22slug\x22:\x22flag_turks_caicos_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇩\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Chad\x22,\x22slug\x22:\x22flag_chad\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20French\x20Southern\x20Territories\x22,\x22slug\x22:\x22flag_french_southern_territories\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Togo\x22,\x22slug\x22:\x22flag_togo\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇭\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Thailand\x22,\x22slug\x22:\x22flag_thailand\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇯\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tajikistan\x22,\x22slug\x22:\x22flag_tajikistan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tokelau\x22,\x22slug\x22:\x22flag_tokelau\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇱\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Timor-Leste\x22,\x22slug\x22:\x22flag_timor_leste\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Turkmenistan\x22,\x22slug\x22:\x22flag_turkmenistan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tunisia\x22,\x22slug\x22:\x22flag_tunisia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇴\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tonga\x22,\x22slug\x22:\x22flag_tonga\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇷\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Turkey\x22,\x22slug\x22:\x22flag_turkey\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Trinidad\x20&\x20Tobago\x22,\x22slug\x22:\x22flag_trinidad_tobago\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇻\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tuvalu\x22,\x22slug\x22:\x22flag_tuvalu\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Taiwan\x22,\x22slug\x22:\x22flag_taiwan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇹🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Tanzania\x22,\x22slug\x22:\x22flag_tanzania\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇺🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Ukraine\x22,\x22slug\x22:\x22flag_ukraine\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇺🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Uganda\x22,\x22slug\x22:\x22flag_uganda\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇺🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20U.S.\x20Outlying\x20Islands\x22,\x22slug\x22:\x22flag_u_s_outlying_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇺🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20United\x20Nations\x22,\x22slug\x22:\x22flag_united_nations\x22,\x22unicode_version\x22:\x224.0\x22,\x22emoji_version\x22:\x224.0\x22},{\x22emoji\x22:\x22🇺🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20United\x20States\x22,\x22slug\x22:\x22flag_united_states\x22,\x22unicode_version\x22:\x220.6\x22,\x22emoji_version\x22:\x220.6\x22},{\x22emoji\x22:\x22🇺🇾\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Uruguay\x22,\x22slug\x22:\x22flag_uruguay\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇺🇿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Uzbekistan\x22,\x22slug\x22:\x22flag_uzbekistan\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Vatican\x20City\x22,\x22slug\x22:\x22flag_vatican_city\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇨\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20St.\x20Vincent\x20&\x20Grenadines\x22,\x22slug\x22:\x22flag_st_vincent_grenadines\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Venezuela\x22,\x22slug\x22:\x22flag_venezuela\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇬\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20British\x20Virgin\x20Islands\x22,\x22slug\x22:\x22flag_british_virgin_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇮\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20U.S.\x20Virgin\x20Islands\x22,\x22slug\x22:\x22flag_u_s_virgin_islands\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇳\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Vietnam\x22,\x22slug\x22:\x22flag_vietnam\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇻🇺\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Vanuatu\x22,\x22slug\x22:\x22flag_vanuatu\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇼🇫\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Wallis\x20&\x20Futuna\x22,\x22slug\x22:\x22flag_wallis_futuna\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇼🇸\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Samoa\x22,\x22slug\x22:\x22flag_samoa\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇽🇰\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Kosovo\x22,\x22slug\x22:\x22flag_kosovo\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇾🇪\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Yemen\x22,\x22slug\x22:\x22flag_yemen\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇾🇹\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Mayotte\x22,\x22slug\x22:\x22flag_mayotte\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇿🇦\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20South\x20Africa\x22,\x22slug\x22:\x22flag_south_africa\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇿🇲\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Zambia\x22,\x22slug\x22:\x22flag_zambia\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🇿🇼\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Zimbabwe\x22,\x22slug\x22:\x22flag_zimbabwe\x22,\x22unicode_version\x22:\x222.0\x22,\x22emoji_version\x22:\x222.0\x22},{\x22emoji\x22:\x22🏴󠁧󠁢󠁥󠁮󠁧󠁿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20England\x22,\x22slug\x22:\x22flag_england\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🏴󠁧󠁢󠁳󠁣󠁴󠁿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Scotland\x22,\x22slug\x22:\x22flag_scotland\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22},{\x22emoji\x22:\x22🏴󠁧󠁢󠁷󠁬󠁳󠁿\x22,\x22skin_tone_support\x22:false,\x22name\x22:\x22flag\x20Wales\x22,\x22slug\x22:\x22flag_wales\x22,\x22unicode_version\x22:\x225.0\x22,\x22emoji_version\x22:\x225.0\x22}]}',
        '#8cc33c',
        '.type',
        'X轴间隔',
        '9524',
        'background.imageURL',
        '#5ca0bf',
        '149f',
        'FZPangTouYu-M24S',
        '方正隶二简体',
        'https://colorhunt.co/palette/a8e6cfdcedc1ffd3b6ffaaa5',
        'color-empty-wrapper',
        'exports',
        'staggered',
        'console',
        'el-option',
        '7523',
        '.json',
        'device',
        'el-icon-plus\x20image-uploader-icon',
        '0px',
        '{\x22text\x22:{\x22content\x22:\x22Not\x20from\x20hammer\x22,\x22fontSize\x22:200,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#ecdc75\x22,\x22mode\x22:\x22autoFit\x22,\x22padding\x22:0,\x22dy\x22:30},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#8c9ed9\x22,\x22mode\x22:\x22pattern\x22}}',
        '微软雅黑',
        '卡西迪',
        '$emit',
        'deviceContainerY',
        'v-show',
        '6d6a',
        'FZHuaLi-M14S',
        'component',
        'el-radio',
        '{\x22text\x22:{\x22content\x22:\x22Have\x20a\x20nice\x20day.\x20🌞\x22,\x22fontSize\x22:114,\x22fontFamily\x22:\x22Hannotate\x20SC\x22,\x22type\x22:\x22dot\x22,\x22color\x22:\x22#0081FF\x22,\x22mode\x22:\x22none\x22,\x22padding\x22:0,\x22dy\x22:22,\x22fillColor\x22:\x22#9ACDFF\x22,\x22size\x22:30,\x22strokeColor\x22:\x22#8EC7FF\x22,\x22lineWidth\x22:2,\x22width\x22:50,\x22height\x22:50,\x22rotation\x22:45,\x22foregroundColor\x22:\x22#FFD700\x22,\x22arcRadius\x22:1},\x22background\x22:{\x22type\x22:\x22wave\x22,\x22color\x22:\x22#FFF2C3\x22,\x22mode\x22:\x22pattern\x22,\x22foregroundColor\x22:\x22#FFEEB1\x22,\x22lineWidth\x22:4,\x22width\x22:60,\x22rotation\x22:0,\x22fillColor\x22:\x22#F1F9E3\x22,\x22size\x22:35,\x22strokeColor\x22:\x22#DCEDC1\x22,\x22height\x22:50,\x22arcRadius\x22:14}}',
        'fillText',
        'data',
        'https://ow.blizzard.cn/heroes/doomfist',
        'fonts/luckiest_guy.woff2',
        'router-view',
        'https://ow.blizzard.cn/heroes/reaper',
        '0cf1',
        '汉仪旗黑\x2050S',
        'el-tooltip',
        '#FFDC34',
        'https://colorhunt.co/palette/222831393e46ffd369eeeeee',
        'fillRect',
        'handleChange',
        'emojis',
        'abb8',
        'el-tab-pane',
        '方正准圆简体',
        'indexOf',
        '[iCWXsCMerZwJYWUZgLYpCDHhiDSj]',
        '#0c111b',
        'Custom',
        'FZWeiBei-S03S',
        '预设配色\x20🌈',
        '方正古隶简体',
        'HYShangWeiShouShuW',
        'IPhone\x206/7/8\x20Plus',
        'flex',
        '华文隶书',
        'call',
        'showButtons',
        'about-color-item',
        'addEventListener',
        'input-number-overlay',
        '8dcf',
        '方正细黑一简体',
        'FZXiYuan-M01S',
        '#10faef',
        'd5aa',
        'dark',
        'emoticon-picker-content',
        'FZJianZhi-M23S',
        'drag-color',
        'label',
        '1em',
        '\x20创建简约海报、壁纸只需动动手指',
        '#40A8C4',
        '51e8',
        'size',
        '汉仪尚魏手书W',
        'handleClickImageColorItem',
        'field-container',
        'el-card',
        'SimSun',
        '\x20Size:\x20',
        '#eabe4f',
        'gallery-card',
        '#DCEDC1',
        'rotate',
        'el-icon-bell\x20group-help-icon',
        '195b',
        'visibility',
        'selectedValue',
        'https://colorhunt.co/palette/11013300918e4dd599ffdc34',
        '方正大标宋简体',
        'restore',
        'ecc8',
        'createElement',
        '汉仪黑荔枝',
        '0cd6',
        '#FFD460',
        'transformStyles',
        'HYLeMiaoTi',
        '\x20Json文件\x20',
        'device-container',
        'eb3d',
        '7aa5',
        'cardSize',
        'cd52',
        'cursorStyle',
        'autoFit',
        '方正姚体简体',
        'selectionStart',
        '2630',
        'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff',
        'image-color-picker-container',
        '{\x22text\x22:{\x22content\x22:\x22Air\x20Jordan\x22,\x22fontSize\x22:687,\x22fontFamily\x22:\x22Luckiest\x20Guy\x22,\x22fontURL\x22:\x22./fonts/luckiest_guy.woff2\x22,\x22type\x22:\x22none\x22,\x22color\x22:\x22#10090a\x22,\x22mode\x22:\x22constrain\x22,\x22padding\x22:76,\x22dy\x22:74},\x22background\x22:{\x22type\x22:\x22none\x22,\x22color\x22:\x22#c40827\x22,\x22mode\x22:\x22pattern\x22}}',
        'loading',
        'e415',
        '535e',
        '面对恐惧',
        '#606266',
        '55b03386',
        'el-carousel-item',
        '在线字体',
        '#ea5455',
        'children',
        '23e2',
        'el-icon-mobile\x20device-icon',
        'warning',
        'indent',
        '160px',
        'el-menu-item',
        '#c71585',
        '#383E56',
        '17592dwupdA',
        'el-carousel',
        'Yapi\x20SC',
        '#7792c1',
        '2118',
        'fc19',
        '方正姚体',
        'https://www.alibabagroup.com/cn/global/home',
        'storey-make-button',
        'use',
        'FZHuangCao-S09S',
        '西格玛',
        '#F69E7B',
        'showColorsStore',
        '#fbe88a',
        '字体库',
        'f49d',
        'innerHeight',
        'substring',
        'store',
        '汉仪小麦体',
        '守望先锋',
        '方正行楷简体',
        '华文黑体',
        'https://www.bilibili.com/',
        'progress',
        'emoticon-picker-item',
        'tools',
        'middle',
        'fullscreenchange',
        '83b8',
        '#d0a3e6',
        'textarea',
        '自定义',
        'handleStarted',
        'emoticon-picker',
        '#b757ff',
        'd0a3',
        '6c42',
        'emoji-picker-content',
        'FZShuiHei-M21S',
        'on-success',
        '564mVxXND',
        'emojiGroups',
        '#d93343',
        'App',
        '方正大黑简体',
        'background.color',
        '方正黄草简体',
        'IPhone\x206/7/8',
        '1b79',
        'join',
        'input-number',
        '方正胖娃简体',
        '2a87',
        'Source\x20Han\x20Sans\x20CN',
        'dataTransfer',
        '字体大小',
        '1693',
        'FZChaoCuHei-M10S',
        'HYHeiLiZhiTiJ',
        'background.type',
        'FZYaoTi-M06S',
        './fonts/luckiest_guy.woff2',
        'Source\x20Han\x20Serif\x20SC',
        'fillColor',
        'handleAddColors',
        'bolder\x20',
        'a5de',
        '#FFC93C',
        'phoneProgress',
        'Image',
        '阿里巴巴',
        'content',
        '#FFD369',
        'el-button',
        'Welcome',
        'parse',
        'STFangsong',
        '浩克的秘密',
        'about-pattern-container',
        'deviceContainerWidth',
        '$mount',
        'preview-container',
        'FZSongYi-Z13S',
        'setItem',
        '日出·印象',
        '网址为空！',
        'getElementById',
        'allowOnline',
        '4280',
        'progress\x20>\x200',
        'FZCuYuan-M03S',
        '060e',
        'findIndex',
        '#437bd2',
        'item',
        'href',
        'ColorFu',
        'FZCuQian-M17S',
        'gallery-card-container',
        'color-palette-tab-container',
        'Y轴偏移',
        '0px\x208px',
        '方正启体简体',
        '#4992cd',
        '在线图片由于版权问题无法下载，您可以上传本地图片进行编辑!',
        '#ff4500',
        '蒙德里安',
        '4088',
        '7135',
        'IPhone\x20X',
        'YouYuan',
        '#A2D5F2',
        '#110133',
        'FZLiBian-S02S',
        'https://ow.blizzard.cn/heroes/echo',
        'handleClickOverlay',
        '#6f9636',
        '方正魏碑简体',
        'handleCloseImageColorPicker',
        'Microsoft\x20JhengHei',
        'wallpaper',
        'offsetX',
        'help',
        '#372923',
        '汉仪雅酷黑W',
        'e-resize',
        '1e2e',
        'image/png',
        'values',
        '请先删除上传的图片！',
        'charCodeAt',
        'template',
        'defineProperty',
        'download',
        'a8c9',
        '雅痞-简',
        'name',
        '\x20如果能用更多的颜色和文字来制作壁纸，表达更多的情感，那会怎样呢？不仅能让壁纸变得漂亮，还能让壁纸变得有意义。\x20',
        '<span>来自<a\x20href=\x27https://www.marvel.com/\x27\x20target=\x27_blank\x27>漫威</a>中角色的配色</span>',
        'X（原Twitter）',
        'log',
        '方正中等线简体',
        '圣安东尼奥马刺',
        'path',
        'bcb9',
        'pointer',
        'ccb3',
        '#24292f',
        'wheel',
        'Color\x20Hunt',
        'el-empty',
        'Facebook',
        'lineWidth',
        '汉仪家书简',
        'textBaseline',
        '汉仪旗黑\x2060S'
    ];
    l = function () {
        return JX;
    };
    return l();
}