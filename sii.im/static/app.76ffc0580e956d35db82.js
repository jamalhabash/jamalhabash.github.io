! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "static/", e(0)
}([function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    var r = n(24),
        o = i(r),
        s = n(3),
        a = i(s),
        l = n(1),
        c = i(l),
        u = n(38);
    u.sync(c.default, a.default), a.default.start(o.default, "#simon-evans-portfolio")
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(2),
        o = i(r),
        s = n(39),
        a = i(s);
    o.default.use(a.default), o.default.config.debug = !0, e.default = new a.default.Store
}, function(t) {
    "use strict";

    function e(t, n, r) {
        if (i(t, n)) return void(t[n] = r);
        if (t._isVue) return void e(t._data, n, r);
        var o = t.__ob__;
        if (!o) return void(t[n] = r);
        if (o.convert(n, r), o.dep.notify(), o.vms)
            for (var s = o.vms.length; s--;) {
                var a = o.vms[s];
                a._proxy(n), a._digest()
            }
        return r
    }

    function n(t, e) {
        if (i(t, e)) {
            delete t[e];
            var n = t.__ob__;
            if (!n) return void(t._isVue && (delete t._data[e], t._digest()));
            if (n.dep.notify(), n.vms)
                for (var r = n.vms.length; r--;) {
                    var o = n.vms[r];
                    o._unproxy(e), o._digest()
                }
        }
    }

    function i(t, e) {
        return Bi.call(t, e)
    }

    function r(t) {
        return Wi.test(t)
    }

    function o(t) {
        var e = (t + "").charCodeAt(0);
        return 36 === e || 95 === e
    }

    function s(t) {
        return null == t ? "" : "" + t
    }

    function a(t) {
        if ("string" != typeof t) return t;
        var e = +t;
        return isNaN(e) ? t : e
    }

    function l(t) {
        return "true" === t || "false" !== t && t
    }

    function c(t) {
        var e = t.charCodeAt(0),
            n = t.charCodeAt(t.length - 1);
        return e !== n || 34 !== e && 39 !== e ? t : t.slice(1, -1)
    }

    function u(t) {
        return t.replace(Vi, h)
    }

    function h(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function p(t) {
        return t.replace(zi, "$1-$2").replace(zi, "$1-$2").toLowerCase()
    }

    function f(t) {
        return t.replace(Ui, h)
    }

    function d(t, e) {
        return function(n) {
            var i = arguments.length;
            return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
        }
    }

    function v(t, e) {
        e = e || 0;
        for (var n = t.length - e, i = Array(n); n--;) i[n] = t[n + e];
        return i
    }

    function g(t, e) {
        for (var n = Object.keys(e), i = n.length; i--;) t[n[i]] = e[n[i]];
        return t
    }

    function m(t) {
        return null !== t && "object" == typeof t
    }

    function y(t) {
        return Xi.call(t) === Gi
    }

    function b(t, e, n, i) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!i,
            writable: !0,
            configurable: !0
        })
    }

    function _(t, e) {
        var n, i, r, o, s, a = function l() {
            var a = Date.now() - o;
            e > a && a >= 0 ? n = setTimeout(l, e - a) : (n = null, s = t.apply(r, i), n || (r = i = null))
        };
        return function() {
            return r = this, i = arguments, o = Date.now(), n || (n = setTimeout(a, e)), s
        }
    }

    function w(t, e) {
        for (var n = t.length; n--;)
            if (t[n] === e) return n;
        return -1
    }

    function x(t) {
        var e = function n() {
            return n.cancelled ? void 0 : t.apply(this, arguments)
        };
        return e.cancel = function() {
            e.cancelled = !0
        }, e
    }

    function k(t, e) {
        return t == e || !(!m(t) || !m(e)) && JSON.stringify(t) === JSON.stringify(e)
    }

    function C(t) {
        return /native code/.test("" + t)
    }

    function T(t) {
        this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = Object.create(null)
    }

    function A() {
        return fr.charCodeAt(gr + 1)
    }

    function j() {
        return fr.charCodeAt(++gr)
    }

    function $() {
        return gr >= vr
    }

    function E() {
        for (; A() === Er;) j()
    }

    function S(t) {
        return t === Tr || t === Ar
    }

    function N(t) {
        return Sr[t]
    }

    function O(t, e) {
        return Nr[t] === e
    }

    function D() {
        for (var t, e = j(); !$();)
            if (t = j(), t === $r) j();
            else if (t === e) break
    }

    function R(t) {
        for (var e = 0, n = t; !$();)
            if (t = A(), S(t)) D();
            else if (n === t && e++, O(n, t) && e--, j(), 0 === e) break
    }

    function M() {
        for (var t = gr; !$();)
            if (mr = A(), S(mr)) D();
            else if (N(mr)) R(mr);
        else if (mr === jr) {
            if (j(), mr = A(), mr !== jr) {
                yr !== wr && yr !== Cr || (yr = xr);
                break
            }
            j()
        } else {
            if (mr === Er && (yr === kr || yr === Cr)) {
                E();
                break
            }
            yr === xr && (yr = kr), j()
        }
        return fr.slice(t + 1, gr) || null
    }

    function L() {
        for (var t = []; !$();) t.push(P());
        return t
    }

    function P() {
        var t, e = {};
        return yr = xr, e.name = M().trim(), yr = Cr, t = H(), t.length && (e.args = t), e
    }

    function H() {
        for (var t = []; !$() && yr !== xr;) {
            var e = M();
            if (!e) break;
            t.push(F(e))
        }
        return t
    }

    function F(t) {
        if (_r.test(t)) return {
            value: a(t),
            dynamic: !1
        };
        var e = c(t),
            n = e === t;
        return {
            value: n ? t : e,
            dynamic: n
        }
    }

    function I(t) {
        var e = br.get(t);
        if (e) return e;
        fr = t, dr = {}, vr = fr.length, gr = -1, mr = "", yr = wr;
        var n;
        return fr.indexOf("|") < 0 ? dr.expression = fr.trim() : (dr.expression = M().trim(), n = L(), n.length && (dr.filters = n)), br.put(t, dr), dr
    }

    function q(t) {
        return t.replace(Dr, "\\$&")
    }

    function B() {
        var t = q(qr.delimiters[0]),
            e = q(qr.delimiters[1]),
            n = q(qr.unsafeDelimiters[0]),
            i = q(qr.unsafeDelimiters[1]);
        Mr = RegExp(n + "((?:.|\\n)+?)" + i + "|" + t + "((?:.|\\n)+?)" + e, "g"), Lr = RegExp("^" + n + "((?:.|\\n)+?)" + i + "$"), Rr = new T(1e3)
    }

    function W(t) {
        Rr || B();
        var e = Rr.get(t);
        if (e) return e;
        if (!Mr.test(t)) return null;
        for (var n, i, r, o, s, a, l = [], c = Mr.lastIndex = 0; n = Mr.exec(t);) i = n.index, i > c && l.push({
            value: t.slice(c, i)
        }), r = Lr.test(n[0]), o = r ? n[1] : n[2], s = o.charCodeAt(0), a = 42 === s, o = a ? o.slice(1) : o, l.push({
            tag: !0,
            value: o.trim(),
            html: r,
            oneTime: a
        }), c = i + n[0].length;
        return c < t.length && l.push({
            value: t.slice(c)
        }), Rr.put(t, l), l
    }

    function V(t, e) {
        return t.length > 1 ? t.map(function(t) {
            return z(t, e)
        }).join("+") : z(t[0], e, !0)
    }

    function z(t, e, n) {
        return t.tag ? t.oneTime && e ? '"' + e.$eval(t.value) + '"' : U(t.value, n) : '"' + t.value + '"'
    }

    function U(t, e) {
        if (Pr.test(t)) {
            var n = I(t);
            return n.filters ? "this._applyFilters(" + n.expression + ",null," + JSON.stringify(n.filters) + ",false)" : "(" + t + ")"
        }
        return e ? t : "(" + t + ")"
    }

    function X(t, e, n, i) {
        Q(t, 1, function() {
            e.appendChild(t)
        }, n, i)
    }

    function G(t, e, n, i) {
        Q(t, 1, function() {
            ne(t, e)
        }, n, i)
    }

    function J(t, e, n) {
        Q(t, -1, function() {
            re(t)
        }, e, n)
    }

    function Q(t, e, n, i, r) {
        var o = t.__v_trans;
        if (!o || !o.hooks && !or || !i._isCompiled || i.$parent && !i.$parent._isCompiled) return n(), void(r && r());
        var s = e > 0 ? "enter" : "leave";
        o[s](n, r)
    }

    function Y(t) {
        return "string" == typeof t && (t = document.querySelector(t)), t
    }

    function K(t) {
        if (!t) return !1;
        var e = t.ownerDocument.documentElement,
            n = t.parentNode;
        return e === t || e === n || !(!n || 1 !== n.nodeType || !e.contains(n))
    }

    function Z(t, e) {
        var n = t.getAttribute(e);
        return null !== n && t.removeAttribute(e), n
    }

    function te(t, e) {
        var n = Z(t, ":" + e);
        return null === n && (n = Z(t, "v-bind:" + e)), n
    }

    function ee(t, e) {
        return t.hasAttribute(e) || t.hasAttribute(":" + e) || t.hasAttribute("v-bind:" + e)
    }

    function ne(t, e) {
        e.parentNode.insertBefore(t, e)
    }

    function ie(t, e) {
        e.nextSibling ? ne(t, e.nextSibling) : e.parentNode.appendChild(t)
    }

    function re(t) {
        t.parentNode.removeChild(t)
    }

    function oe(t, e) {
        e.firstChild ? ne(t, e.firstChild) : e.appendChild(t)
    }

    function se(t, e) {
        var n = t.parentNode;
        n && n.replaceChild(e, t)
    }

    function ae(t, e, n, i) {
        t.addEventListener(e, n, i)
    }

    function le(t, e, n) {
        t.removeEventListener(e, n)
    }

    function ce(t) {
        var e = t.className;
        return "object" == typeof e && (e = e.baseVal || ""), e
    }

    function ue(t, e) {
        er && !/svg$/.test(t.namespaceURI) ? t.className = e : t.setAttribute("class", e)
    }

    function he(t, e) {
        if (t.classList) t.classList.add(e);
        else {
            var n = " " + ce(t) + " ";
            n.indexOf(" " + e + " ") < 0 && ue(t, (n + e).trim())
        }
    }

    function pe(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
            for (var n = " " + ce(t) + " ", i = " " + e + " "; n.indexOf(i) >= 0;) n = n.replace(i, " ");
            ue(t, n.trim())
        }
        t.className || t.removeAttribute("class")
    }

    function fe(t, e) {
        var n, i;
        if (ge(t) && we(t.content) && (t = t.content), t.hasChildNodes())
            for (de(t), i = e ? document.createDocumentFragment() : document.createElement("div"); n = t.firstChild;) i.appendChild(n);
        return i
    }

    function de(t) {
        for (var e; e = t.firstChild, ve(e);) t.removeChild(e);
        for (; e = t.lastChild, ve(e);) t.removeChild(e)
    }

    function ve(t) {
        return t && (3 === t.nodeType && !t.data.trim() || 8 === t.nodeType)
    }

    function ge(t) {
        return t.tagName && "template" === t.tagName.toLowerCase()
    }

    function me(t, e) {
        var n = qr.debug ? document.createComment(t) : document.createTextNode(e ? " " : "");
        return n.__v_anchor = !0, n
    }

    function ye(t) {
        if (t.hasAttributes())
            for (var e = t.attributes, n = 0, i = e.length; i > n; n++) {
                var r = e[n].name;
                if (Vr.test(r)) return u(r.replace(Vr, ""))
            }
    }

    function be(t, e, n) {
        for (var i; t !== e;) i = t.nextSibling, n(t), t = i;
        n(e)
    }

    function _e(t, e, n, i, r) {
        function o() {
            if (a++, s && a >= l.length) {
                for (var t = 0; t < l.length; t++) i.appendChild(l[t]);
                r && r()
            }
        }
        var s = !1,
            a = 0,
            l = [];
        be(t, e, function(t) {
            t === e && (s = !0), l.push(t), J(t, n, o)
        })
    }

    function we(t) {
        return t && 11 === t.nodeType
    }

    function xe(t) {
        if (t.outerHTML) return t.outerHTML;
        var e = document.createElement("div");
        return e.appendChild(t.cloneNode(!0)), e.innerHTML
    }

    function ke(t, e) {
        var n = t.tagName.toLowerCase(),
            i = t.hasAttributes();
        if (zr.test(n) || Ur.test(n)) {
            if (i) return Ce(t, e)
        } else {
            if (Ne(e, "components", n)) return {
                id: n
            };
            var r = i && Ce(t, e);
            if (r) return r
        }
    }

    function Ce(t, e) {
        var n = t.getAttribute("is");
        if (null != n) {
            if (Ne(e, "components", n)) return t.removeAttribute("is"), {
                id: n
            }
        } else if (n = te(t, "is"), null != n) return {
            id: n,
            dynamic: !0
        }
    }

    function Te(t, n) {
        var r, o, s;
        for (r in n) o = t[r], s = n[r], i(t, r) ? m(o) && m(s) && Te(o, s) : e(t, r, s);
        return t
    }

    function Ae(t, e) {
        var n = Object.create(t || null);
        return e ? g(n, Ee(e)) : n
    }

    function je(t) {
        if (t.components)
            for (var e, n = t.components = Ee(t.components), i = Object.keys(n), r = 0, o = i.length; o > r; r++) {
                var s = i[r];
                zr.test(s) || Ur.test(s) || (e = n[s], y(e) && (n[s] = Li.extend(e)))
            }
    }

    function $e(t) {
        var e, n, i = t.props;
        if (Ji(i))
            for (t.props = {}, e = i.length; e--;) n = i[e], "string" == typeof n ? t.props[n] = null : n.name && (t.props[n.name] = n);
        else if (y(i)) {
            var r = Object.keys(i);
            for (e = r.length; e--;) n = i[r[e]], "function" == typeof n && (i[r[e]] = {
                type: n
            })
        }
    }

    function Ee(t) {
        if (Ji(t)) {
            for (var e, n = {}, i = t.length; i--;) {
                e = t[i];
                var r = "function" == typeof e ? e.options && e.options.name || e.id : e.name || e.id;
                r && (n[r] = e)
            }
            return n
        }
        return t
    }

    function Se(t, e, n) {
        function r(i) {
            var r = Xr[i] || Gr;
            s[i] = r(t[i], e[i], n, i)
        }
        je(e), $e(e);
        var o, s = {};
        if (e.extends && (t = "function" == typeof e.extends ? Se(t, e.extends.options, n) : Se(t, e.extends, n)), e.mixins)
            for (var a = 0, l = e.mixins.length; l > a; a++) {
                var c = e.mixins[a],
                    u = c.prototype instanceof Li ? c.options : c;
                t = Se(t, u, n)
            }
        for (o in t) r(o);
        for (o in e) i(t, o) || r(o);
        return s
    }

    function Ne(t, e, n) {
        if ("string" == typeof n) {
            var i, r = t[e],
                o = r[n] || r[i = u(n)] || r[i.charAt(0).toUpperCase() + i.slice(1)];
            return o
        }
    }

    function Oe() {
        this.id = Jr++, this.subs = []
    }

    function De(t) {
        Zr = !1, t(), Zr = !0
    }

    function Re(t) {
        if (this.value = t, this.dep = new Oe, b(t, "__ob__", this), Ji(t)) {
            var e = Qi ? Me : Le;
            e(t, Yr, Kr), this.observeArray(t)
        } else this.walk(t)
    }

    function Me(t, e) {
        t.__proto__ = e
    }

    function Le(t, e, n) {
        for (var i = 0, r = n.length; r > i; i++) {
            var o = n[i];
            b(t, o, e[o])
        }
    }

    function Pe(t, e) {
        if (t && "object" == typeof t) {
            var n;
            return i(t, "__ob__") && t.__ob__ instanceof Re ? n = t.__ob__ : Zr && (Ji(t) || y(t)) && Object.isExtensible(t) && !t._isVue && (n = new Re(t)), n && e && n.addVm(e), n
        }
    }

    function He(t, e, n) {
        var i = new Oe,
            r = Object.getOwnPropertyDescriptor(t, e);
        if (!r || r.configurable !== !1) {
            var o = r && r.get,
                s = r && r.set,
                a = Pe(n);
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var e = o ? o.call(t) : n;
                    if (Oe.target && (i.depend(), a && a.dep.depend(), Ji(e)))
                        for (var r, s = 0, l = e.length; l > s; s++) r = e[s], r && r.__ob__ && r.__ob__.dep.depend();
                    return e
                },
                set: function(e) {
                    var r = o ? o.call(t) : n;
                    e !== r && (s ? s.call(t, e) : n = e, a = Pe(e), i.notify())
                }
            })
        }
    }

    function Fe(t) {
        t.prototype._init = function(t) {
            t = t || {}, this.$el = null, this.$parent = t.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = eo++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1, this._unlinkFn = null, this._context = t._context || this.$parent, this._scope = t._scope, this._frag = t._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), t = this.$options = Se(this.constructor.options, t, this), this._updateRef(), this._data = {}, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el)
        }
    }

    function Ie(t) {
        if (void 0 === t) return "eof";
        var e = t.charCodeAt(0);
        switch (e) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
            case 48:
                return t;
            case 95:
            case 36:
                return "ident";
            case 32:
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "ws"
        }
        return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : 49 > e || e > 57 ? "else" : "number"
    }

    function qe(t) {
        var e = t.trim();
        return ("0" !== t.charAt(0) || !isNaN(t)) && (r(e) ? c(e) : "*" + e)
    }

    function Be(t) {
        function e() {
            var e = t[u + 1];
            return h === po && "'" === e || h === fo && '"' === e ? (u++, i = "\\" + e, f[io](), !0) : void 0
        }
        var n, i, r, o, s, a, l, c = [],
            u = -1,
            h = ao,
            p = 0,
            f = [];
        for (f[ro] = function() {
                void 0 !== r && (c.push(r), r = void 0)
            }, f[io] = function() {
                void 0 === r ? r = i : r += i
            }, f[oo] = function() {
                f[io](), p++
            }, f[so] = function() {
                if (p > 0) p--, h = ho, f[io]();
                else {
                    if (p = 0, r = qe(r), r === !1) return !1;
                    f[ro]()
                }
            }; null != h;)
            if (u++, n = t[u], "\\" !== n || !e()) {
                if (o = Ie(n), l = mo[h], s = l[o] || l.else || go, s === go) return;
                if (h = s[0], a = f[s[1]], a && (i = s[2], i = void 0 === i ? n : i, a() === !1)) return;
                if (h === vo) return c.raw = t, c
            }
    }

    function We(t) {
        var e = no.get(t);
        return e || (e = Be(t), e && no.put(t, e)), e
    }

    function Ve(t, e) {
        return Ze(e).get(t)
    }

    function ze(t, n, i) {
        var r = t;
        if ("string" == typeof n && (n = Be(n)), !n || !m(t)) return !1;
        for (var o, s, a = 0, l = n.length; l > a; a++) o = t, s = n[a], "*" === s.charAt(0) && (s = Ze(s.slice(1)).get.call(r, r)), l - 1 > a ? (t = t[s], m(t) || (t = {}, e(o, s, t))) : Ji(t) ? t.$set(s, i) : s in t ? t[s] = i : e(t, s, i);
        return !0
    }

    function Ue() {}

    function Xe(t, e) {
        var n = No.length;
        return No[n] = e ? t.replace(To, "\\n") : t, '"' + n + '"'
    }

    function Ge(t) {
        var e = t.charAt(0),
            n = t.slice(1);
        return wo.test(n) ? t : (n = n.indexOf('"') > -1 ? n.replace(jo, Je) : n, e + "scope." + n)
    }

    function Je(t, e) {
        return No[e]
    }

    function Qe(t) {
        ko.test(t), No.length = 0;
        var e = t.replace(Ao, Xe).replace(Co, "");
        return e = (" " + e).replace(Eo, Ge).replace(jo, Je), Ye(e)
    }

    function Ye(t) {
        try {
            return Function("scope", "return " + t + ";")
        } catch (t) {
            return Ue
        }
    }

    function Ke(t) {
        var e = We(t);
        return e ? function(t, n) {
            ze(t, e, n)
        } : void 0
    }

    function Ze(t, e) {
        t = t.trim();
        var n = bo.get(t);
        if (n) return e && !n.set && (n.set = Ke(n.exp)), n;
        var i = {
            exp: t
        };
        return i.get = tn(t) && t.indexOf("[") < 0 ? Ye("scope." + t) : Qe(t), e && (i.set = Ke(t)), bo.put(t, i), i
    }

    function tn(t) {
        return $o.test(t) && !So.test(t) && "Math." !== t.slice(0, 5)
    }

    function en() {
        Do.length = 0, Ro.length = 0, Mo = {}, Lo = {}, Po = !1
    }

    function nn() {
        for (var t = !0; t;) t = !1, rn(Do), rn(Ro), Do.length ? t = !0 : (Ki && qr.devtools && Ki.emit("flush"), en())
    }

    function rn(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                i = n.id;
            Mo[i] = null, n.run()
        }
        t.length = 0
    }

    function on(t) {
        var e = t.id;
        if (null == Mo[e]) {
            var n = t.user ? Ro : Do;
            Mo[e] = n.length, n.push(t), Po || (Po = !0, ur(nn))
        }
    }

    function sn(t, e, n, i) {
        i && g(this, i);
        var r = "function" == typeof e;
        if (this.vm = t, t._watchers.push(this), this.expression = e, this.cb = n, this.id = ++Ho, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new hr, this.newDepIds = new hr, this.prevError = null, r) this.getter = e, this.setter = void 0;
        else {
            var o = Ze(e, this.twoWay);
            this.getter = o.get, this.setter = o.set
        }
        this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1
    }

    function an(t, e) {
        var n = void 0,
            i = void 0;
        e || (e = Fo, e.clear());
        var r = Ji(t),
            o = m(t);
        if ((r || o) && Object.isExtensible(t)) {
            if (t.__ob__) {
                var s = t.__ob__.dep.id;
                if (e.has(s)) return;
                e.add(s)
            }
            if (r)
                for (n = t.length; n--;) an(t[n], e);
            else if (o)
                for (i = Object.keys(t), n = i.length; n--;) an(t[i[n]], e)
        }
    }

    function ln(t) {
        return ge(t) && we(t.content)
    }

    function cn(t, e) {
        var n = e ? t : t.trim(),
            i = qo.get(n);
        if (i) return i;
        var r = document.createDocumentFragment(),
            o = t.match(Vo),
            s = zo.test(t),
            a = Uo.test(t);
        if (o || s || a) {
            var l = o && o[1],
                c = Wo[l] || Wo.efault,
                u = c[0],
                h = c[1],
                p = c[2],
                f = document.createElement("div");
            for (f.innerHTML = h + t + p; u--;) f = f.lastChild;
            for (var d; d = f.firstChild;) r.appendChild(d)
        } else r.appendChild(document.createTextNode(t));
        return e || de(r), qo.put(n, r), r
    }

    function un(t) {
        if (ln(t)) return cn(t.innerHTML);
        if ("SCRIPT" === t.tagName) return cn(t.textContent);
        for (var e, n = hn(t), i = document.createDocumentFragment(); e = n.firstChild;) i.appendChild(e);
        return de(i), i
    }

    function hn(t) {
        if (!t.querySelectorAll) return t.cloneNode();
        var e, n, i, r = t.cloneNode(!0);
        if (Xo) {
            var o = r;
            if (ln(t) && (t = t.content, o = r.content), n = t.querySelectorAll("template"), n.length)
                for (i = o.querySelectorAll("template"), e = i.length; e--;) i[e].parentNode.replaceChild(hn(n[e]), i[e])
        }
        if (Go)
            if ("TEXTAREA" === t.tagName) r.value = t.value;
            else if (n = t.querySelectorAll("textarea"), n.length)
            for (i = r.querySelectorAll("textarea"), e = i.length; e--;) i[e].value = n[e].value;
        return r
    }

    function pn(t, e, n) {
        var i, r;
        return we(t) ? (de(t), e ? hn(t) : t) : ("string" == typeof t ? n || "#" !== t.charAt(0) ? r = cn(t, n) : (r = Bo.get(t), r || (i = document.getElementById(t.slice(1)), i && (r = un(i), Bo.put(t, r)))) : t.nodeType && (r = un(t)), r && e ? hn(r) : r)
    }

    function fn(t, e, n, i, r, o) {
        this.children = [], this.childFrags = [], this.vm = e, this.scope = r, this.inserted = !1, this.parentFrag = o, o && o.childFrags.push(this), this.unlink = t(e, n, i, r, this);
        var s = this.single = 1 === n.childNodes.length && !n.childNodes[0].__v_anchor;
        s ? (this.node = n.childNodes[0], this.before = dn, this.remove = vn) : (this.node = me("fragment-start"), this.end = me("fragment-end"), this.frag = n, oe(this.node, n), n.appendChild(this.end), this.before = gn, this.remove = mn), this.node.__v_frag = this
    }

    function dn(t, e) {
        this.inserted = !0;
        var n = e !== !1 ? G : ne;
        n(this.node, t, this.vm), K(this.node) && this.callHook(yn)
    }

    function vn() {
        this.inserted = !1;
        var t = K(this.node),
            e = this;
        this.beforeRemove(), J(this.node, this.vm, function() {
            t && e.callHook(bn), e.destroy()
        })
    }

    function gn(t, e) {
        this.inserted = !0;
        var n = this.vm,
            i = e !== !1 ? G : ne;
        be(this.node, this.end, function(e) {
            i(e, t, n)
        }), K(this.node) && this.callHook(yn)
    }

    function mn() {
        this.inserted = !1;
        var t = this,
            e = K(this.node);
        this.beforeRemove(), _e(this.node, this.end, this.vm, this.frag, function() {
            e && t.callHook(bn), t.destroy()
        })
    }

    function yn(t) {
        !t._isAttached && K(t.$el) && t._callHook("attached")
    }

    function bn(t) {
        t._isAttached && !K(t.$el) && t._callHook("detached")
    }

    function _n(t, e) {
        this.vm = t;
        var n, i = "string" == typeof e;
        i || ge(e) && !e.hasAttribute("v-if") ? n = pn(e, !0) : (n = document.createDocumentFragment(), n.appendChild(e)), this.template = n;
        var r, o = t.constructor.cid;
        if (o > 0) {
            var s = o + (i ? e : xe(e));
            r = Yo.get(s), r || (r = Jn(n, t.$options, !0), Yo.put(s, r))
        } else r = Jn(n, t.$options, !0);
        this.linker = r
    }

    function wn(t, e, n) {
        var i = t.node.previousSibling;
        if (i) {
            for (t = i.__v_frag; !(t && t.forId === n && t.inserted || i === e);) {
                if (i = i.previousSibling, !i) return;
                t = i.__v_frag
            }
            return t
        }
    }

    function xn(t) {
        for (var e = -1, n = Array(Math.floor(t)); ++e < t;) n[e] = e;
        return n
    }

    function kn(t, e, n, i) {
        return i ? "$index" === i ? t : i.charAt(0).match(/\w/) ? Ve(n, i) : n[i] : e || n
    }

    function Cn(t) {
        var e = t.node;
        if (t.end)
            for (; !e.__vue__ && e !== t.end && e.nextSibling;) e = e.nextSibling;
        return e.__vue__
    }

    function Tn(t, e, n) {
        for (var i, r, o, s = e ? [] : null, a = 0, l = t.options.length; l > a; a++)
            if (i = t.options[a], o = n ? i.hasAttribute("selected") : i.selected) {
                if (r = i.hasOwnProperty("_value") ? i._value : i.value, !e) return r;
                s.push(r)
            }
        return s
    }

    function An(t, e) {
        for (var n = t.length; n--;)
            if (k(t[n], e)) return n;
        return -1
    }

    function jn(t, e) {
        var n = e.map(function(t) {
            var e = t.charCodeAt(0);
            return e > 47 && 58 > e ? parseInt(t, 10) : 1 === t.length && (e = t.toUpperCase().charCodeAt(0), e > 64 && 91 > e) ? e : ys[t]
        });
        return n = [].concat.apply([], n),
            function(e) {
                return n.indexOf(e.keyCode) > -1 ? t.call(this, e) : void 0
            }
    }

    function $n(t) {
        return function(e) {
            return e.stopPropagation(), t.call(this, e)
        }
    }

    function En(t) {
        return function(e) {
            return e.preventDefault(), t.call(this, e)
        }
    }

    function Sn(t) {
        return function(e) {
            return e.target === e.currentTarget ? t.call(this, e) : void 0
        }
    }

    function Nn(t) {
        if (ks[t]) return ks[t];
        var e = On(t);
        return ks[t] = ks[e] = e, e
    }

    function On(t) {
        t = p(t);
        var e = u(t),
            n = e.charAt(0).toUpperCase() + e.slice(1);
        Cs || (Cs = document.createElement("div"));
        var i, r = _s.length;
        if ("filter" !== e && e in Cs.style) return {
            kebab: t,
            camel: e
        };
        for (; r--;)
            if (i = ws[r] + n, i in Cs.style) return {
                kebab: _s[r] + t,
                camel: i
            }
    }

    function Dn(t) {
        var e = [];
        if (Ji(t))
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                if (r)
                    if ("string" == typeof r) e.push(r);
                    else
                        for (var o in r) r[o] && e.push(o)
            } else if (m(t))
                for (var s in t) t[s] && e.push(s);
        return e
    }

    function Rn(t, e, n) {
        if (e = e.trim(), -1 === e.indexOf(" ")) return void n(t, e);
        for (var i = e.split(/\s+/), r = 0, o = i.length; o > r; r++) n(t, i[r])
    }

    function Mn(t, e, n) {
        function i() {
            ++o < r ? t[o].call(e, i) : n()
        }
        var r = t.length,
            o = 0;
        t[0].call(e, i)
    }

    function Ln(t, e, n) {
        for (var i, o, s, a, l, c, h, f = [], d = n.$options.propsData, v = Object.keys(e), g = v.length; g--;) o = v[g], i = e[o] || Is, l = u(o), qs.test(l) && (h = {
            name: o,
            path: l,
            options: i,
            mode: Fs.ONE_WAY,
            raw: null
        }, s = p(o), null === (a = te(t, s)) && (null !== (a = te(t, s + ".sync")) ? h.mode = Fs.TWO_WAY : null !== (a = te(t, s + ".once")) && (h.mode = Fs.ONE_TIME)), null !== a ? (h.raw = a, c = I(a), a = c.expression, h.filters = c.filters, r(a) && !c.filters ? h.optimizedLiteral = !0 : h.dynamic = !0, h.parentPath = a) : null !== (a = Z(t, s)) ? h.raw = a : d && null !== (a = d[o] || d[l]) && (h.raw = a), f.push(h));
        return Pn(f)
    }

    function Pn(t) {
        return function(e, n) {
            e._props = {};
            for (var r, o, s, u, h, f = e.$options.propsData, d = t.length; d--;)
                if (r = t[d], h = r.raw, o = r.path, s = r.options, e._props[o] = r, f && i(f, o) && Fn(e, r, f[o]), null === h) Fn(e, r, void 0);
                else if (r.dynamic) r.mode === Fs.ONE_TIME ? (u = (n || e._context || e).$get(r.parentPath), Fn(e, r, u)) : e._context ? e._bindDir({
                name: "prop",
                def: Ws,
                prop: r
            }, null, null, n) : Fn(e, r, e.$get(r.parentPath));
            else if (r.optimizedLiteral) {
                var v = c(h);
                u = v === h ? l(a(h)) : v, Fn(e, r, u)
            } else u = s.type === Boolean && ("" === h || h === p(r.name)) || h, Fn(e, r, u)
        }
    }

    function Hn(t, e, n, i) {
        var r = e.dynamic && tn(e.parentPath),
            o = n;
        void 0 === o && (o = qn(t, e)), o = Wn(e, o, t);
        var s = o !== n;
        Bn(e, o, t) || (o = void 0), r && !s ? De(function() {
            i(o)
        }) : i(o)
    }

    function Fn(t, e, n) {
        Hn(t, e, n, function(n) {
            He(t, e.path, n)
        })
    }

    function In(t, e, n) {
        Hn(t, e, n, function(n) {
            t[e.path] = n
        })
    }

    function qn(t, e) {
        var n = e.options;
        if (!i(n, "default")) return n.type !== Boolean && void 0;
        var r = n.default;
        return m(r), "function" == typeof r && n.type !== Function ? r.call(t) : r
    }

    function Bn(t, e) {
        if (!t.options.required && (null === t.raw || null == e)) return !0;
        var n = t.options,
            i = n.type,
            r = !i,
            o = [];
        if (i) {
            Ji(i) || (i = [i]);
            for (var s = 0; s < i.length && !r; s++) {
                var a = Vn(e, i[s]);
                o.push(a.expectedType), r = a.valid
            }
        }
        if (!r) return !1;
        var l = n.validator;
        return !(l && !l(e))
    }

    function Wn(t, e) {
        var n = t.options.coerce;
        return n && "function" == typeof n ? n(e) : e
    }

    function Vn(t, e) {
        var n, i;
        return e === String ? (i = "string", n = typeof t === i) : e === Number ? (i = "number", n = typeof t === i) : e === Boolean ? (i = "boolean", n = typeof t === i) : e === Function ? (i = "function", n = typeof t === i) : e === Object ? (i = "object", n = y(t)) : e === Array ? (i = "array", n = Ji(t)) : n = t instanceof e, {
            valid: n,
            expectedType: i
        }
    }

    function zn(t) {
        Vs.push(t), zs || (zs = !0, ur(Un))
    }

    function Un() {
        for (var t = document.documentElement.offsetHeight, e = 0; e < Vs.length; e++) Vs[e]();
        return Vs = [], zs = !1, t
    }

    function Xn(t, e, n, i) {
        this.id = e, this.el = t, this.enterClass = n && n.enterClass || e + "-enter", this.leaveClass = n && n.leaveClass || e + "-leave", this.hooks = n, this.vm = i, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = n && n.type;
        var r = this;
        ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function(t) {
            r[t] = d(r[t], r)
        })
    }

    function Gn(t) {
        if (/svg$/.test(t.namespaceURI)) {
            var e = t.getBoundingClientRect();
            return !(e.width || e.height)
        }
        return !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }

    function Jn(t, e, n) {
        var i = n || !e._asComponent ? ni(t, e) : null,
            r = i && i.terminal || bi(t) || !t.hasChildNodes() ? null : li(t.childNodes, e);
        return function(t, e, n, o, s) {
            var a = v(e.childNodes),
                l = Qn(function() {
                    i && i(t, e, n, o, s), r && r(t, a, n, o, s)
                }, t);
            return Kn(t, l)
        }
    }

    function Qn(t, e) {
        e._directives = [];
        var n = e._directives.length;
        t();
        var i = e._directives.slice(n);
        Yn(i);
        for (var r = 0, o = i.length; o > r; r++) i[r]._bind();
        return i
    }

    function Yn(t) {
        if (0 !== t.length) {
            var e, n, i, r, o = {},
                s = 0,
                a = [];
            for (e = 0, n = t.length; n > e; e++) {
                var l = t[e],
                    c = l.descriptor.def.priority || sa,
                    u = o[c];
                u || (u = o[c] = [], a.push(c)), u.push(l)
            }
            for (a.sort(function(t, e) {
                    return t > e ? -1 : t === e ? 0 : 1
                }), e = 0, n = a.length; n > e; e++) {
                var h = o[a[e]];
                for (i = 0, r = h.length; r > i; i++) t[s++] = h[i]
            }
        }
    }

    function Kn(t, e, n, i) {
        function r(r) {
            Zn(t, e, r), n && i && Zn(n, i)
        }
        return r.dirs = e, r
    }

    function Zn(t, e) {
        for (var n = e.length; n--;) e[n]._teardown()
    }

    function ti(t, e, n, i) {
        var r = Ln(e, n, t),
            o = Qn(function() {
                r(t, i)
            }, t);
        return Kn(t, o)
    }

    function ei(t, e, n) {
        var i, r, o = e._containerAttrs,
            s = e._replacerAttrs;
        return 11 !== t.nodeType && (e._asComponent ? (o && n && (i = vi(o, n)), s && (r = vi(s, e))) : r = vi(t.attributes, e)), e._containerAttrs = e._replacerAttrs = null,
            function(t, e, n) {
                var o, s = t._context;
                s && i && (o = Qn(function() {
                    i(s, e, null, n)
                }, s));
                var a = Qn(function() {
                    r && r(t, e)
                }, t);
                return Kn(t, a, s, o)
            }
    }

    function ni(t, e) {
        var n = t.nodeType;
        return 1 !== n || bi(t) ? 3 === n && t.data.trim() ? ri(t, e) : null : ii(t, e)
    }

    function ii(t, e) {
        if ("TEXTAREA" === t.tagName) {
            if (null !== Z(t, "v-pre")) return fi;
            var n = W(t.value);
            n && (t.setAttribute(":value", V(n)), t.value = "")
        }
        var i, r = t.hasAttributes(),
            o = r && v(t.attributes);
        return r && (i = pi(t, o, e)), i || (i = ui(t, e)), i || (i = hi(t, e)), !i && r && (i = vi(o, e)), i
    }

    function ri(t, e) {
        if (t._skip) return oi;
        var n = W(t.wholeText);
        if (!n) return null;
        for (var i = t.nextSibling; i && 3 === i.nodeType;) i._skip = !0, i = i.nextSibling;
        for (var r, o, s = document.createDocumentFragment(), a = 0, l = n.length; l > a; a++) o = n[a], r = o.tag ? si(o, e) : document.createTextNode(o.value), s.appendChild(r);
        return ai(n, s, e)
    }

    function oi(t, e) {
        re(e)
    }

    function si(t) {
        function e(e) {
            if (!t.descriptor) {
                var n = I(t.value);
                t.descriptor = {
                    name: e,
                    def: Ls[e],
                    expression: n.expression,
                    filters: n.filters
                }
            }
        }
        var n;
        return t.oneTime ? n = document.createTextNode(t.value) : t.html ? (n = document.createComment("v-html"), e("html")) : (n = document.createTextNode(" "), e("text")), n
    }

    function ai(t, e) {
        return function(n, i, r, o) {
            for (var a, l, c, u = e.cloneNode(!0), h = v(u.childNodes), p = 0, f = t.length; f > p; p++) a = t[p], l = a.value, a.tag && (c = h[p], a.oneTime ? (l = (o || n).$eval(l), a.html ? se(c, pn(l, !0)) : c.data = s(l)) : n._bindDir(a.descriptor, c, r, o));
            se(i, u)
        }
    }

    function li(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) r = t[s], n = ni(r, e), i = n && n.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : li(r.childNodes, e), o.push(n, i);
        return o.length ? ci(o) : null
    }

    function ci(t) {
        return function(e, n, i, r, o) {
            for (var s, a, l, c = 0, u = 0, h = t.length; h > c; u++) {
                s = n[u], a = t[c++], l = t[c++];
                var p = v(s.childNodes);
                a && a(e, s, i, r, o), l && l(e, p, i, r, o)
            }
        }
    }

    function ui(t, e) {
        var n = t.tagName.toLowerCase();
        if (!zr.test(n)) {
            var i = Ne(e, "elementDirectives", n);
            return i ? di(t, n, "", e, i) : void 0
        }
    }

    function hi(t, e) {
        var n = ke(t, e);
        if (n) {
            var i = ye(t),
                r = {
                    name: "component",
                    ref: i,
                    expression: n.id,
                    def: ta.component,
                    modifiers: {
                        literal: !n.dynamic
                    }
                },
                o = function(t, e, n, o, s) {
                    i && He((o || t).$refs, i, null), t._bindDir(r, e, n, o, s)
                };
            return o.terminal = !0, o
        }
    }

    function pi(t, e, n) {
        if (null !== Z(t, "v-pre")) return fi;
        if (t.hasAttribute("v-else")) {
            var i = t.previousElementSibling;
            if (i && i.hasAttribute("v-if")) return fi
        }
        for (var r, o, s, a, l, c, u, h, p, f, d = 0, v = e.length; v > d; d++) r = e[d], o = r.name.replace(ra, ""), (l = o.match(ia)) && (p = Ne(n, "directives", l[1]), p && p.terminal && (!f || (p.priority || aa) > f.priority) && (f = p, u = r.name, a = gi(r.name), s = r.value, c = l[1], h = l[2]));
        return f ? di(t, c, s, n, f, u, h, a) : void 0
    }

    function fi() {}

    function di(t, e, n, i, r, o, s, a) {
        var l = I(n),
            c = {
                name: e,
                arg: s,
                expression: l.expression,
                filters: l.filters,
                raw: n,
                attr: o,
                modifiers: a,
                def: r
            };
        "for" !== e && "router-view" !== e || (c.ref = ye(t));
        var u = function(t, e, n, i, r) {
            c.ref && He((i || t).$refs, c.ref, null), t._bindDir(c, e, n, i, r)
        };
        return u.terminal = !0, u
    }

    function vi(t, e) {
        function n(t, e, n) {
            var i = n && yi(n),
                r = !i && I(o);
            v.push({
                name: t,
                attr: s,
                raw: a,
                def: e,
                arg: c,
                modifiers: u,
                expression: r && r.expression,
                filters: r && r.filters,
                interp: n,
                hasOneTime: i
            })
        }
        for (var i, r, o, s, a, l, c, u, h, p, f, d = t.length, v = []; d--;)
            if (i = t[d], r = s = i.name, o = a = i.value, p = W(o), c = null, u = gi(r), r = r.replace(ra, ""), p) o = V(p), c = r, n("bind", Ls.bind, p);
            else if (oa.test(r)) u.literal = !ea.test(r), n("transition", ta.transition);
        else if (na.test(r)) c = r.replace(na, ""), n("on", Ls.on);
        else if (ea.test(r)) l = r.replace(ea, ""), "style" === l || "class" === l ? n(l, ta[l]) : (c = l, n("bind", Ls.bind));
        else if (f = r.match(ia)) {
            if (l = f[1], c = f[2], "else" === l) continue;
            h = Ne(e, "directives", l, !0), h && n(l, h)
        }
        return v.length ? mi(v) : void 0
    }

    function gi(t) {
        var e = Object.create(null),
            n = t.match(ra);
        if (n)
            for (var i = n.length; i--;) e[n[i].slice(1)] = !0;
        return e
    }

    function mi(t) {
        return function(e, n, i, r, o) {
            for (var s = t.length; s--;) e._bindDir(t[s], n, i, r, o)
        }
    }

    function yi(t) {
        for (var e = t.length; e--;)
            if (t[e].oneTime) return !0
    }

    function bi(t) {
        return "SCRIPT" === t.tagName && (!t.hasAttribute("type") || "text/javascript" === t.getAttribute("type"))
    }

    function _i(t, e) {
        return e && (e._containerAttrs = xi(t)), ge(t) && (t = pn(t)), e && (e._asComponent && !e.template && (e.template = "<slot></slot>"), e.template && (e._content = fe(t), t = wi(t, e))), we(t) && (oe(me("v-start", !0), t), t.appendChild(me("v-end", !0))), t
    }

    function wi(t, e) {
        var n = e.template,
            i = pn(n, !0);
        if (i) {
            var r = i.firstChild;
            if (!r) return i;
            var o = r.tagName && r.tagName.toLowerCase();
            return e.replace ? (t === document.body, i.childNodes.length > 1 || 1 !== r.nodeType || "component" === o || Ne(e, "components", o) || ee(r, "is") || Ne(e, "elementDirectives", o) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? i : (e._replacerAttrs = xi(r), ki(t, r), r)) : (t.appendChild(i), t)
        }
    }

    function xi(t) {
        return 1 === t.nodeType && t.hasAttributes() ? v(t.attributes) : void 0
    }

    function ki(t, e) {
        for (var n, i, r = t.attributes, o = r.length; o--;) n = r[o].name, i = r[o].value, e.hasAttribute(n) || la.test(n) ? "class" === n && !W(i) && (i = i.trim()) && i.split(/\s+/).forEach(function(t) {
            he(e, t)
        }) : e.setAttribute(n, i)
    }

    function Ci(t, e) {
        if (e) {
            for (var n, i, r = t._slotContents = Object.create(null), o = 0, s = e.children.length; s > o; o++) n = e.children[o], (i = n.getAttribute("slot")) && (r[i] || (r[i] = [])).push(n);
            for (i in r) r[i] = Ti(r[i], e);
            if (e.hasChildNodes()) {
                var a = e.childNodes;
                if (1 === a.length && 3 === a[0].nodeType && !a[0].data.trim()) return;
                r.default = Ti(e.childNodes, e)
            }
        }
    }

    function Ti(t, e) {
        var n = document.createDocumentFragment();
        t = v(t);
        for (var i = 0, r = t.length; r > i; i++) {
            var o = t[i];
            !ge(o) || o.hasAttribute("v-if") || o.hasAttribute("v-for") || (e.removeChild(o), o = pn(o, !0)), n.appendChild(o)
        }
        return n
    }

    function Ai(t) {
        function e() {}

        function n(t, e) {
            var n = new sn(e, t, null, {
                lazy: !0
            });
            return function() {
                return n.dirty && n.evaluate(), Oe.target && n.depend(), n.value
            }
        }
        Object.defineProperty(t.prototype, "$data", {
            get: function() {
                return this._data
            },
            set: function(t) {
                t !== this._data && this._setData(t)
            }
        }), t.prototype._initState = function() {
            this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed()
        }, t.prototype._initProps = function() {
            var t = this.$options,
                e = t.el,
                n = t.props;
            e = t.el = Y(e), this._propsUnlinkFn = e && 1 === e.nodeType && n ? ti(this, e, n, this._scope) : null
        }, t.prototype._initData = function() {
            var t = this.$options.data,
                e = this._data = t ? t() : {};
            y(e) || (e = {});
            var n, r, o = this._props,
                s = Object.keys(e);
            for (n = s.length; n--;) r = s[n], o && i(o, r) || this._proxy(r);
            Pe(e, this)
        }, t.prototype._setData = function(t) {
            t = t || {};
            var e = this._data;
            this._data = t;
            var n, r, o;
            for (n = Object.keys(e), o = n.length; o--;) r = n[o], r in t || this._unproxy(r);
            for (n = Object.keys(t), o = n.length; o--;) r = n[o], i(this, r) || this._proxy(r);
            e.__ob__.removeVm(this), Pe(t, this), this._digest()
        }, t.prototype._proxy = function(t) {
            if (!o(t)) {
                var e = this;
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return e._data[t]
                    },
                    set: function(n) {
                        e._data[t] = n
                    }
                })
            }
        }, t.prototype._unproxy = function(t) {
            o(t) || delete this[t]
        }, t.prototype._digest = function() {
            for (var t = 0, e = this._watchers.length; e > t; t++) this._watchers[t].update(!0)
        }, t.prototype._initComputed = function() {
            var t = this.$options.computed;
            if (t)
                for (var i in t) {
                    var r = t[i],
                        o = {
                            enumerable: !0,
                            configurable: !0
                        };
                    "function" == typeof r ? (o.get = n(r, this), o.set = e) : (o.get = r.get ? r.cache !== !1 ? n(r.get, this) : d(r.get, this) : e, o.set = r.set ? d(r.set, this) : e), Object.defineProperty(this, i, o)
                }
        }, t.prototype._initMethods = function() {
            var t = this.$options.methods;
            if (t)
                for (var e in t) this[e] = d(t[e], this)
        }, t.prototype._initMeta = function() {
            var t = this.$options._meta;
            if (t)
                for (var e in t) He(this, e, t[e])
        }
    }

    function ji(t) {
        function e(t, e) {
            for (var n, i, r, o = e.attributes, s = 0, a = o.length; a > s; s++) n = o[s].name, ua.test(n) && (n = n.replace(ua, ""), i = o[s].value, tn(i) && (i += ".apply(this, $arguments)"), r = (t._scope || t._context).$eval(i, !0), r._fromParent = !0, t.$on(n.replace(ua), r))
        }

        function n(t, e, n) {
            if (n) {
                var r, o, s, a;
                for (o in n)
                    if (r = n[o], Ji(r))
                        for (s = 0, a = r.length; a > s; s++) i(t, e, o, r[s]);
                    else i(t, e, o, r)
            }
        }

        function i(t, e, n, r, o) {
            var s = typeof r;
            if ("function" === s) t[e](n, r, o);
            else if ("string" === s) {
                var a = t.$options.methods,
                    l = a && a[r];
                l && t[e](n, l, o)
            } else r && "object" === s && i(t, e, n, r.handler, r)
        }

        function r() {
            this._isAttached || (this._isAttached = !0, this.$children.forEach(o))
        }

        function o(t) {
            !t._isAttached && K(t.$el) && t._callHook("attached")
        }

        function s() {
            this._isAttached && (this._isAttached = !1, this.$children.forEach(a))
        }

        function a(t) {
            t._isAttached && !K(t.$el) && t._callHook("detached")
        }
        t.prototype._initEvents = function() {
            var t = this.$options;
            t._asComponent && e(this, t.el), n(this, "$on", t.events), n(this, "$watch", t.watch)
        }, t.prototype._initDOMHooks = function() {
            this.$on("hook:attached", r), this.$on("hook:detached", s)
        }, t.prototype._callHook = function(t) {
            this.$emit("pre-hook:" + t);
            var e = this.$options[t];
            if (e)
                for (var n = 0, i = e.length; i > n; n++) e[n].call(this);
            this.$emit("hook:" + t)
        }
    }

    function $i() {}

    function Ei(t, e, n, i, r, o) {
        this.vm = e, this.el = n, this.descriptor = t, this.name = t.name, this.expression = t.expression, this.arg = t.arg, this.modifiers = t.modifiers, this.filters = t.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = i, this._scope = r, this._frag = o
    }

    function Si(t) {
        t.prototype._updateRef = function(t) {
            var e = this.$options._ref;
            if (e) {
                var n = (this._scope || this._context).$refs;
                t ? n[e] === this && (n[e] = null) : n[e] = this
            }
        }, t.prototype._compile = function(t) {
            var e = this.$options,
                n = t;
            if (t = _i(t, e), this._initElement(t), 1 !== t.nodeType || null === Z(t, "v-pre")) {
                var i = this._context && this._context.$options,
                    r = ei(t, e, i);
                Ci(this, e._content);
                var o, s = this.constructor;
                e._linkerCachable && (o = s.linker, o || (o = s.linker = Jn(t, e)));
                var a = r(this, t, this._scope),
                    l = o ? o(this, t) : Jn(t, e)(this, t);
                this._unlinkFn = function() {
                    a(), l(!0)
                }, e.replace && se(n, t), this._isCompiled = !0, this._callHook("compiled")
            }
        }, t.prototype._initElement = function(t) {
            we(t) ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile")
        }, t.prototype._bindDir = function(t, e, n, i, r) {
            this._directives.push(new Ei(t, this, e, n, i, r))
        }, t.prototype._destroy = function(t, e) {
            if (this._isBeingDestroyed) return void(e || this._cleanup());
            var n, i, r = this,
                o = function() {
                    !n || i || e || r._cleanup()
                };
            t && this.$el && (i = !0, this.$remove(function() {
                i = !1, o()
            })), this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;
            var s, a = this.$parent;
            for (a && !a._isBeingDestroyed && (a.$children.$remove(this), this._updateRef(!0)), s = this.$children.length; s--;) this.$children[s].$destroy();
            for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), s = this._watchers.length; s--;) this._watchers[s].teardown();
            this.$el && (this.$el.__vue__ = null), n = !0, o()
        }, t.prototype._cleanup = function() {
            this._isDestroyed || (this._frag && this._frag.children.$remove(this), this._data && this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off())
        }
    }

    function Ni(t) {
        t.prototype._applyFilters = function(t, e, n, i) {
            var r, o, s, a, l, c, u, h, p;
            for (c = 0, u = n.length; u > c; c++)
                if (r = n[i ? u - c - 1 : c], o = Ne(this.$options, "filters", r.name, !0), o && (o = i ? o.write : o.read || o, "function" == typeof o)) {
                    if (s = i ? [t, e] : [t], l = i ? 2 : 1, r.args)
                        for (h = 0, p = r.args.length; p > h; h++) a = r.args[h], s[h + l] = a.dynamic ? this.$get(a.value) : a.value;
                    t = o.apply(this, s)
                }
            return t
        }, t.prototype._resolveComponent = function(e, n) {
            var i;
            if (i = "function" == typeof e ? e : Ne(this.$options, "components", e, !0))
                if (i.options) n(i);
                else if (i.resolved) n(i.resolved);
            else if (i.requested) i.pendingCallbacks.push(n);
            else {
                i.requested = !0;
                var r = i.pendingCallbacks = [n];
                i.call(this, function(e) {
                    y(e) && (e = t.extend(e)), i.resolved = e;
                    for (var n = 0, o = r.length; o > n; n++) r[n](e)
                }, function() {})
            }
        }
    }

    function Oi(t) {
        function e(t) {
            return JSON.parse(JSON.stringify(t))
        }
        t.prototype.$get = function(t, e) {
            var n = Ze(t);
            if (n) {
                if (e) {
                    var i = this;
                    return function() {
                        i.$arguments = v(arguments);
                        var t = n.get.call(i, i);
                        return i.$arguments = null, t
                    }
                }
                try {
                    return n.get.call(this, this)
                } catch (t) {}
            }
        }, t.prototype.$set = function(t, e) {
            var n = Ze(t, !0);
            n && n.set && n.set.call(this, this, e)
        }, t.prototype.$delete = function(t) {
            n(this._data, t)
        }, t.prototype.$watch = function(t, e, n) {
            var i, r = this;
            "string" == typeof t && (i = I(t), t = i.expression);
            var o = new sn(r, t, e, {
                deep: n && n.deep,
                sync: n && n.sync,
                filters: i && i.filters,
                user: !n || n.user !== !1
            });
            return n && n.immediate && e.call(r, o.value),
                function() {
                    o.teardown()
                }
        }, t.prototype.$eval = function(t, e) {
            if (ha.test(t)) {
                var n = I(t),
                    i = this.$get(n.expression, e);
                return n.filters ? this._applyFilters(i, null, n.filters) : i
            }
            return this.$get(t, e)
        }, t.prototype.$interpolate = function(t) {
            var e = W(t),
                n = this;
            return e ? 1 === e.length ? n.$eval(e[0].value) + "" : e.map(function(t) {
                return t.tag ? n.$eval(t.value) : t.value
            }).join("") : t
        }, t.prototype.$log = function(t) {
            var n = t ? Ve(this._data, t) : this._data;
            if (n && (n = e(n)), !t) {
                var i;
                for (i in this.$options.computed) n[i] = e(this[i]);
                if (this._props)
                    for (i in this._props) n[i] = e(this[i])
            }
            console.log(n)
        }
    }

    function Di(t) {
        function e(t, e, i, r, o, s) {
            e = n(e);
            var a = !K(e),
                l = r === !1 || a ? o : s,
                c = !a && !t._isAttached && !K(t.$el);
            return t._isFragment ? (be(t._fragmentStart, t._fragmentEnd, function(n) {
                l(n, e, t)
            }), i && i()) : l(t.$el, e, t, i), c && t._callHook("attached"), t
        }

        function n(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }

        function i(t, e, n, i) {
            e.appendChild(t), i && i()
        }

        function r(t, e, n, i) {
            ne(t, e), i && i()
        }

        function o(t, e, n) {
            re(t), n && n()
        }
        t.prototype.$nextTick = function(t) {
            ur(t, this)
        }, t.prototype.$appendTo = function(t, n, r) {
            return e(this, t, n, r, i, X)
        }, t.prototype.$prependTo = function(t, e, i) {
            return t = n(t), t.hasChildNodes() ? this.$before(t.firstChild, e, i) : this.$appendTo(t, e, i), this
        }, t.prototype.$before = function(t, n, i) {
            return e(this, t, n, i, r, G)
        }, t.prototype.$after = function(t, e, i) {
            return t = n(t), t.nextSibling ? this.$before(t.nextSibling, e, i) : this.$appendTo(t.parentNode, e, i), this
        }, t.prototype.$remove = function(t, e) {
            if (!this.$el.parentNode) return t && t();
            var n = this._isAttached && K(this.$el);
            n || (e = !1);
            var i = this,
                r = function() {
                    n && i._callHook("detached"), t && t()
                };
            if (this._isFragment) _e(this._fragmentStart, this._fragmentEnd, this, this._fragment, r);
            else {
                var s = e === !1 ? o : J;
                s(this.$el, this, r)
            }
            return this
        }
    }

    function Ri(t) {
        function e(t, e, i) {
            var r = t.$parent;
            if (r && i && !n.test(e))
                for (; r;) r._eventsCount[e] = (r._eventsCount[e] || 0) + i, r = r.$parent
        }
        t.prototype.$on = function(t, n) {
            return (this._events[t] || (this._events[t] = [])).push(n), e(this, t, 1), this
        }, t.prototype.$once = function(t, e) {
            function n() {
                i.$off(t, n), e.apply(this, arguments)
            }
            var i = this;
            return n.fn = e, this.$on(t, n), this
        }, t.prototype.$off = function(t, n) {
            var i;
            if (!arguments.length) {
                if (this.$parent)
                    for (t in this._events) i = this._events[t], i && e(this, t, -i.length);
                return this._events = {}, this
            }
            if (i = this._events[t], !i) return this;
            if (1 === arguments.length) return e(this, t, -i.length), this._events[t] = null, this;
            for (var r, o = i.length; o--;)
                if (r = i[o], r === n || r.fn === n) {
                    e(this, t, -1), i.splice(o, 1);
                    break
                }
            return this
        }, t.prototype.$emit = function(t) {
            var e = "string" == typeof t;
            t = e ? t : t.name;
            var n = this._events[t],
                i = e || !n;
            if (n) {
                n = n.length > 1 ? v(n) : n;
                var r = e && n.some(function(t) {
                    return t._fromParent
                });
                r && (i = !1);
                for (var o = v(arguments, 1), s = 0, a = n.length; a > s; s++) {
                    var l = n[s],
                        c = l.apply(this, o);
                    c !== !0 || r && !l._fromParent || (i = !0)
                }
            }
            return i
        }, t.prototype.$broadcast = function(t) {
            var e = "string" == typeof t;
            if (t = e ? t : t.name, this._eventsCount[t]) {
                var n = this.$children,
                    i = v(arguments);
                e && (i[0] = {
                    name: t,
                    source: this
                });
                for (var r = 0, o = n.length; o > r; r++) {
                    var s = n[r],
                        a = s.$emit.apply(s, i);
                    a && s.$broadcast.apply(s, i)
                }
                return this
            }
        }, t.prototype.$dispatch = function(t) {
            var e = this.$emit.apply(this, arguments);
            if (e) {
                var n = this.$parent,
                    i = v(arguments);
                for (i[0] = {
                        name: t,
                        source: this
                    }; n;) e = n.$emit.apply(n, i), n = e ? n.$parent : null;
                return this
            }
        };
        var n = /^hook:/
    }

    function Mi(t) {
        function e() {
            this._isAttached = !0, this._isReady = !0, this._callHook("ready")
        }
        t.prototype.$mount = function(t) {
            return this._isCompiled ? void 0 : (t = Y(t), t || (t = document.createElement("div")), this._compile(t), this._initDOMHooks(), K(this.$el) ? (this._callHook("attached"), e.call(this)) : this.$once("hook:attached", e), this)
        }, t.prototype.$destroy = function(t, e) {
            this._destroy(t, e)
        }, t.prototype.$compile = function(t, e, n, i) {
            return Jn(t, this.$options, !0)(this, t, e, n, i)
        }
    }

    function Li(t) {
        this._init(t)
    }

    function Pi(t, e, n) {
        return n = n ? parseInt(n, 10) : 0, e = a(e), "number" == typeof e ? t.slice(n, n + e) : t
    }

    function Hi(t, e, n) {
        if (t = va(t), null == e) return t;
        if ("function" == typeof e) return t.filter(e);
        e = ("" + e).toLowerCase();
        for (var i, r, o, s, a = "in" === n ? 3 : 2, l = Array.prototype.concat.apply([], v(arguments, a)), c = [], u = 0, h = t.length; h > u; u++)
            if (i = t[u], o = i && i.$value || i, s = l.length) {
                for (; s--;)
                    if (r = l[s], "$key" === r && Ii(i.$key, e) || Ii(Ve(o, r), e)) {
                        c.push(i);
                        break
                    }
            } else Ii(i, e) && c.push(i);
        return c
    }

    function Fi(t) {
        function e(t, e, n) {
            var r = i[n];
            return r && ("$key" !== r && (m(t) && "$value" in t && (t = t.$value), m(e) && "$value" in e && (e = e.$value)), t = m(t) ? Ve(t, r) : t, e = m(e) ? Ve(e, r) : e), t === e ? 0 : t > e ? o : -o
        }
        var n = null,
            i = void 0;
        t = va(t);
        var r = v(arguments, 1),
            o = r[r.length - 1];
        "number" == typeof o ? (o = 0 > o ? -1 : 1, r = r.length > 1 ? r.slice(0, -1) : r) : o = 1;
        var s = r[0];
        return s ? ("function" == typeof s ? n = function(t, e) {
            return s(t, e) * o
        } : (i = Array.prototype.concat.apply([], r), n = function(t, r, o) {
            return o = o || 0, o < i.length - 1 ? e(t, r, o) || n(t, r, o + 1) : e(t, r, o)
        }), t.slice().sort(n)) : t
    }

    function Ii(t, e) {
        var n;
        if (y(t)) {
            var i = Object.keys(t);
            for (n = i.length; n--;)
                if (Ii(t[i[n]], e)) return !0
        } else if (Ji(t)) {
            for (n = t.length; n--;)
                if (Ii(t[n], e)) return !0
        } else if (null != t) return ("" + t).toLowerCase().indexOf(e) > -1
    }

    function qi(t) {
        function i(t) {
            return Function("return function " + f(t) + " (options) { this._init(options) }")()
        }
        t.options = {
            directives: Ls,
            elementDirectives: da,
            filters: ma,
            transitions: {},
            components: {},
            partials: {},
            replace: !0
        }, t.util = to, t.config = qr, t.set = e, t.delete = n, t.nextTick = ur, t.compiler = ca, t.FragmentFactory = _n, t.internalDirectives = ta, t.parsers = {
            path: yo,
            text: Hr,
            template: Jo,
            directive: Or,
            expression: Oo
        }, t.cid = 0;
        var r = 1;
        t.extend = function(t) {
            t = t || {};
            var e = this,
                n = 0 === e.cid;
            if (n && t._Ctor) return t._Ctor;
            var o = t.name || e.options.name,
                s = i(o || "VueComponent");
            return s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.cid = r++, s.options = Se(e.options, t), s.super = e, s.extend = e.extend, qr._assetTypes.forEach(function(t) {
                s[t] = e[t]
            }), o && (s.options.components[o] = s), n && (t._Ctor = s), s
        }, t.use = function(t) {
            if (!t.installed) {
                var e = v(arguments, 1);
                return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this
            }
        }, t.mixin = function(e) {
            t.options = Se(t.options, e)
        }, qr._assetTypes.forEach(function(e) {
            t[e] = function(n, i) {
                return i ? ("component" === e && y(i) && (i.name || (i.name = n), i = t.extend(i)), this.options[e + "s"][n] = i, i) : this.options[e + "s"][n]
            }
        }), g(t.transition, Wr)
    }
    var Bi = Object.prototype.hasOwnProperty,
        Wi = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
        Vi = /-(\w)/g,
        zi = /([^-])([A-Z])/g,
        Ui = /(?:^|[-_\/])(\w)/g,
        Xi = Object.prototype.toString,
        Gi = "[object Object]",
        Ji = Array.isArray,
        Qi = "__proto__" in {},
        Yi = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
        Ki = Yi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        Zi = Yi && window.navigator.userAgent.toLowerCase(),
        tr = Zi && Zi.indexOf("trident") > 0,
        er = Zi && Zi.indexOf("msie 9.0") > 0,
        nr = Zi && Zi.indexOf("android") > 0,
        ir = Zi && /iphone|ipad|ipod|ios/.test(Zi),
        rr = void 0,
        or = void 0,
        sr = void 0,
        ar = void 0;
    if (Yi && !er) {
        var lr = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
            cr = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;
        rr = lr ? "WebkitTransition" : "transition", or = lr ? "webkitTransitionEnd" : "transitionend", sr = cr ? "WebkitAnimation" : "animation", ar = cr ? "webkitAnimationEnd" : "animationend"
    }
    var ur = function() {
            function t() {
                n = !1;
                var t = e.slice(0);
                e.length = 0;
                for (var i = 0; i < t.length; i++) t[i]()
            }
            var e = [],
                n = !1,
                i = void 0;
            if ("undefined" != typeof Promise && C(Promise)) {
                var r = Promise.resolve(),
                    o = function() {};
                i = function() {
                    r.then(t), ir && setTimeout(o)
                }
            } else if ("undefined" != typeof MutationObserver) {
                var s = 1,
                    a = new MutationObserver(t),
                    l = document.createTextNode(s + "");
                a.observe(l, {
                    characterData: !0
                }), i = function() {
                    s = (s + 1) % 2, l.data = s + ""
                }
            } else i = setTimeout;
            return function(r, o) {
                var s = o ? function() {
                    r.call(o)
                } : r;
                e.push(s), n || (n = !0, i(t, 0))
            }
        }(),
        hr = void 0;
    "undefined" != typeof Set && C(Set) ? hr = Set : (hr = function() {
        this.set = Object.create(null)
    }, hr.prototype.has = function(t) {
        return void 0 !== this.set[t]
    }, hr.prototype.add = function(t) {
        this.set[t] = 1
    }, hr.prototype.clear = function() {
        this.set = Object.create(null)
    });
    var pr = T.prototype;
    pr.put = function(t, e) {
        var n, i = this.get(t, !0);
        return i || (this.size === this.limit && (n = this.shift()), i = {
            key: t
        }, this._keymap[t] = i, this.tail ? (this.tail.newer = i, i.older = this.tail) : this.head = i, this.tail = i, this.size++), i.value = e, n
    }, pr.shift = function() {
        var t = this.head;
        return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0, this.size--), t
    }, pr.get = function(t, e) {
        var n = this._keymap[t];
        return void 0 !== n ? n === this.tail ? e ? n : n.value : (n.newer && (n === this.head && (this.head = n.newer), n.newer.older = n.older), n.older && (n.older.newer = n.newer), n.newer = void 0, n.older = this.tail, this.tail && (this.tail.newer = n), this.tail = n, e ? n : n.value) : void 0
    };
    var fr, dr, vr, gr, mr, yr, br = new T(1e3),
        _r = /^in$|^-?\d+/,
        wr = 0,
        xr = 1,
        kr = 2,
        Cr = 3,
        Tr = 34,
        Ar = 39,
        jr = 124,
        $r = 92,
        Er = 32,
        Sr = {
            91: 1,
            123: 1,
            40: 1
        },
        Nr = {
            91: 93,
            123: 125,
            40: 41
        },
        Or = Object.freeze({
            parseDirective: I
        }),
        Dr = /[-.*+?^${}()|[\]\/\\]/g,
        Rr = void 0,
        Mr = void 0,
        Lr = void 0,
        Pr = /[^|]\|[^|]/,
        Hr = Object.freeze({
            compileRegex: B,
            parseText: W,
            tokensToExp: V
        }),
        Fr = ["{{", "}}"],
        Ir = ["{{{", "}}}"],
        qr = Object.defineProperties({
            debug: !1,
            silent: !1,
            async: !0,
            warnExpressionErrors: !0,
            devtools: !1,
            _delimitersChanged: !0,
            _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"],
            _propBindingModes: {
                ONE_WAY: 0,
                TWO_WAY: 1,
                ONE_TIME: 2
            },
            _maxUpdateCount: 100
        }, {
            delimiters: {
                get: function() {
                    return Fr
                },
                set: function(t) {
                    Fr = t, B()
                },
                configurable: !0,
                enumerable: !0
            },
            unsafeDelimiters: {
                get: function() {
                    return Ir
                },
                set: function(t) {
                    Ir = t, B()
                },
                configurable: !0,
                enumerable: !0
            }
        }),
        Br = void 0,
        Wr = Object.freeze({
            appendWithTransition: X,
            beforeWithTransition: G,
            removeWithTransition: J,
            applyTransition: Q
        }),
        Vr = /^v-ref:/,
        zr = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,
        Ur = /^(slot|partial|component)$/i,
        Xr = qr.optionMergeStrategies = Object.create(null);
    Xr.data = function(t, e, n) {
        return n ? t || e ? function() {
            var i = "function" == typeof e ? e.call(n) : e,
                r = "function" == typeof t ? t.call(n) : void 0;
            return i ? Te(i, r) : r
        } : void 0 : e ? "function" != typeof e ? t : t ? function() {
            return Te(e.call(this), t.call(this))
        } : e : t
    }, Xr.el = function(t, e, n) {
        if (n || !e || "function" == typeof e) {
            var i = e || t;
            return n && "function" == typeof i ? i.call(n) : i
        }
    }, Xr.init = Xr.created = Xr.ready = Xr.attached = Xr.detached = Xr.beforeCompile = Xr.compiled = Xr.beforeDestroy = Xr.destroyed = Xr.activate = function(t, e) {
        return e ? t ? t.concat(e) : Ji(e) ? e : [e] : t
    }, qr._assetTypes.forEach(function(t) {
        Xr[t + "s"] = Ae
    }), Xr.watch = Xr.events = function(t, e) {
        if (!e) return t;
        if (!t) return e;
        var n = {};
        g(n, t);
        for (var i in e) {
            var r = n[i],
                o = e[i];
            r && !Ji(r) && (r = [r]), n[i] = r ? r.concat(o) : [o]
        }
        return n
    }, Xr.props = Xr.methods = Xr.computed = function(t, e) {
        if (!e) return t;
        if (!t) return e;
        var n = Object.create(null);
        return g(n, t), g(n, e), n
    };
    var Gr = function(t, e) {
            return void 0 === e ? t : e
        },
        Jr = 0;
    Oe.target = null, Oe.prototype.addSub = function(t) {
        this.subs.push(t)
    }, Oe.prototype.removeSub = function(t) {
        this.subs.$remove(t)
    }, Oe.prototype.depend = function() {
        Oe.target.addDep(this)
    }, Oe.prototype.notify = function() {
        for (var t = v(this.subs), e = 0, n = t.length; n > e; e++) t[e].update()
    };
    var Qr = Array.prototype,
        Yr = Object.create(Qr);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
        var e = Qr[t];
        b(Yr, t, function() {
            for (var n = arguments.length, i = Array(n); n--;) i[n] = arguments[n];
            var r, o = e.apply(this, i),
                s = this.__ob__;
            switch (t) {
                case "push":
                    r = i;
                    break;
                case "unshift":
                    r = i;
                    break;
                case "splice":
                    r = i.slice(2)
            }
            return r && s.observeArray(r), s.dep.notify(), o
        })
    }), b(Qr, "$set", function(t, e) {
        return t >= this.length && (this.length = +t + 1), this.splice(t, 1, e)[0]
    }), b(Qr, "$remove", function(t) {
        if (this.length) {
            var e = w(this, t);
            return e > -1 ? this.splice(e, 1) : void 0
        }
    });
    var Kr = Object.getOwnPropertyNames(Yr),
        Zr = !0;
    Re.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0, i = e.length; i > n; n++) this.convert(e[n], t[e[n]])
    }, Re.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; n > e; e++) Pe(t[e])
    }, Re.prototype.convert = function(t, e) {
        He(this.value, t, e)
    }, Re.prototype.addVm = function(t) {
        (this.vms || (this.vms = [])).push(t)
    }, Re.prototype.removeVm = function(t) {
        this.vms.$remove(t)
    };
    var to = Object.freeze({
            defineReactive: He,
            set: e,
            del: n,
            hasOwn: i,
            isLiteral: r,
            isReserved: o,
            _toString: s,
            toNumber: a,
            toBoolean: l,
            stripQuotes: c,
            camelize: u,
            hyphenate: p,
            classify: f,
            bind: d,
            toArray: v,
            extend: g,
            isObject: m,
            isPlainObject: y,
            def: b,
            debounce: _,
            indexOf: w,
            cancellable: x,
            looseEqual: k,
            isArray: Ji,
            hasProto: Qi,
            inBrowser: Yi,
            devtools: Ki,
            isIE: tr,
            isIE9: er,
            isAndroid: nr,
            isIOS: ir,
            get transitionProp() {
                return rr
            },
            get transitionEndEvent() {
                return or
            },
            get animationProp() {
                return sr
            },
            get animationEndEvent() {
                return ar
            },
            nextTick: ur,
            get _Set() {
                return hr
            },
            query: Y,
            inDoc: K,
            getAttr: Z,
            getBindAttr: te,
            hasBindAttr: ee,
            before: ne,
            after: ie,
            remove: re,
            prepend: oe,
            replace: se,
            on: ae,
            off: le,
            setClass: ue,
            addClass: he,
            removeClass: pe,
            extractContent: fe,
            trimNode: de,
            isTemplate: ge,
            createAnchor: me,
            findRef: ye,
            mapNodeRange: be,
            removeNodeRange: _e,
            isFragment: we,
            getOuterHTML: xe,
            mergeOptions: Se,
            resolveAsset: Ne,
            checkComponentAttr: ke,
            commonTagRE: zr,
            reservedTagRE: Ur,
            get warn() {
                return Br
            }
        }),
        eo = 0,
        no = new T(1e3),
        io = 0,
        ro = 1,
        oo = 2,
        so = 3,
        ao = 0,
        lo = 1,
        co = 2,
        uo = 3,
        ho = 4,
        po = 5,
        fo = 6,
        vo = 7,
        go = 8,
        mo = [];
    mo[ao] = {
        ws: [ao],
        ident: [uo, io],
        "[": [ho],
        eof: [vo]
    }, mo[lo] = {
        ws: [lo],
        ".": [co],
        "[": [ho],
        eof: [vo]
    }, mo[co] = {
        ws: [co],
        ident: [uo, io]
    }, mo[uo] = {
        ident: [uo, io],
        0: [uo, io],
        number: [uo, io],
        ws: [lo, ro],
        ".": [co, ro],
        "[": [ho, ro],
        eof: [vo, ro]
    }, mo[ho] = {
        "'": [po, io],
        '"': [fo, io],
        "[": [ho, oo],
        "]": [lo, so],
        eof: go,
        "else": [ho, io]
    }, mo[po] = {
        "'": [ho, io],
        eof: go,
        "else": [po, io]
    }, mo[fo] = {
        '"': [ho, io],
        eof: go,
        "else": [fo, io]
    };
    var yo = Object.freeze({
            parsePath: We,
            getPath: Ve,
            setPath: ze
        }),
        bo = new T(1e3),
        _o = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
        wo = RegExp("^(" + _o.replace(/,/g, "\\b|") + "\\b)"),
        xo = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",
        ko = RegExp("^(" + xo.replace(/,/g, "\\b|") + "\\b)"),
        Co = /\s/g,
        To = /\n/g,
        Ao = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,
        jo = /"(\d+)"/g,
        $o = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
        Eo = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
        So = /^(?:true|false|null|undefined|Infinity|NaN)$/,
        No = [],
        Oo = Object.freeze({
            parseExpression: Ze,
            isSimplePath: tn
        }),
        Do = [],
        Ro = [],
        Mo = {},
        Lo = {},
        Po = !1,
        Ho = 0;
    sn.prototype.get = function() {
        this.beforeGet();
        var t, e = this.scope || this.vm;
        try {
            t = this.getter.call(e, e)
        } catch (t) {}
        return this.deep && an(t), this.preProcess && (t = this.preProcess(t)), this.filters && (t = e._applyFilters(t, null, this.filters, !1)), this.postProcess && (t = this.postProcess(t)), this.afterGet(), t
    }, sn.prototype.set = function(t) {
        var e = this.scope || this.vm;
        this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));
        try {
            this.setter.call(e, e, t)
        } catch (t) {}
        var n = e.$forContext;
        if (n && n.alias === this.expression) {
            if (n.filters) return;
            n._withLock(function() {
                e.$key ? n.rawValue[e.$key] = t : n.rawValue.$set(e.$index, t)
            })
        }
    }, sn.prototype.beforeGet = function() {
        Oe.target = this
    }, sn.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
    }, sn.prototype.afterGet = function() {
        Oe.target = null;
        for (var t = this.deps.length; t--;) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
    }, sn.prototype.update = function(t) {
        this.lazy ? this.dirty = !0 : this.sync || !qr.async ? this.run() : (this.shallow = this.queued ? !!t && this.shallow : !!t, this.queued = !0, on(this))
    }, sn.prototype.run = function() {
        if (this.active) {
            var t = this.get();
            if (t !== this.value || (m(t) || this.deep) && !this.shallow) {
                var e = this.value;
                this.value = t, this.prevError, this.cb.call(this.vm, t, e)
            }
            this.queued = this.shallow = !1
        }
    }, sn.prototype.evaluate = function() {
        var t = Oe.target;
        this.value = this.get(), this.dirty = !1, Oe.target = t
    }, sn.prototype.depend = function() {
        for (var t = this.deps.length; t--;) this.deps[t].depend()
    }, sn.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);
            for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
            this.active = !1, this.vm = this.cb = this.value = null
        }
    };
    var Fo = new hr,
        Io = {
            bind: function() {
                this.attr = 3 === this.el.nodeType ? "data" : "textContent"
            },
            update: function(t) {
                this.el[this.attr] = s(t)
            }
        },
        qo = new T(1e3),
        Bo = new T(1e3),
        Wo = {
            efault: [0, "", ""],
            legend: [1, "<fieldset>", "</fieldset>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
        };
    Wo.td = Wo.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], Wo.option = Wo.optgroup = [1, '<select multiple="multiple">', "</select>"], Wo.thead = Wo.tbody = Wo.colgroup = Wo.caption = Wo.tfoot = [1, "<table>", "</table>"], Wo.g = Wo.defs = Wo.symbol = Wo.use = Wo.image = Wo.text = Wo.circle = Wo.ellipse = Wo.line = Wo.path = Wo.polygon = Wo.polyline = Wo.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];
    var Vo = /<([\w:-]+)/,
        zo = /&#?\w+?;/,
        Uo = /<!--/,
        Xo = function() {
            if (Yi) {
                var t = document.createElement("div");
                return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML
            }
            return !1
        }(),
        Go = function() {
            if (Yi) {
                var t = document.createElement("textarea");
                return t.placeholder = "t", "t" === t.cloneNode(!0).value
            }
            return !1
        }(),
        Jo = Object.freeze({
            cloneNode: hn,
            parseTemplate: pn
        }),
        Qo = {
            bind: function() {
                8 === this.el.nodeType && (this.nodes = [], this.anchor = me("v-html"), se(this.el, this.anchor))
            },
            update: function(t) {
                t = s(t), this.nodes ? this.swap(t) : this.el.innerHTML = t
            },
            swap: function(t) {
                for (var e = this.nodes.length; e--;) re(this.nodes[e]);
                var n = pn(t, !0, !0);
                this.nodes = v(n.childNodes), ne(n, this.anchor)
            }
        };
    fn.prototype.callHook = function(t) {
        var e, n;
        for (e = 0, n = this.childFrags.length; n > e; e++) this.childFrags[e].callHook(t);
        for (e = 0, n = this.children.length; n > e; e++) t(this.children[e])
    }, fn.prototype.beforeRemove = function() {
        var t, e;
        for (t = 0, e = this.childFrags.length; e > t; t++) this.childFrags[t].beforeRemove(!1);
        for (t = 0, e = this.children.length; e > t; t++) this.children[t].$destroy(!1, !0);
        var n = this.unlink.dirs;
        for (t = 0, e = n.length; e > t; t++) n[t]._watcher && n[t]._watcher.teardown()
    }, fn.prototype.destroy = function() {
        this.parentFrag && this.parentFrag.childFrags.$remove(this), this.node.__v_frag = null, this.unlink()
    };
    var Yo = new T(5e3);
    _n.prototype.create = function(t, e, n) {
        var i = hn(this.template);
        return new fn(this.linker, this.vm, i, t, e, n)
    };
    var Ko = 700,
        Zo = 800,
        ts = 850,
        es = 1100,
        ns = 1500,
        is = 1500,
        rs = 1750,
        os = 2100,
        ss = 2200,
        as = 2300,
        ls = 0,
        cs = {
            priority: ss,
            terminal: !0,
            params: ["track-by", "stagger", "enter-stagger", "leave-stagger"],
            bind: function() {
                var t = this.expression.match(/(.*) (?:in|of) (.*)/);
                if (t) {
                    var e = t[1].match(/\((.*),(.*)\)/);
                    e ? (this.iterator = e[1].trim(), this.alias = e[2].trim()) : this.alias = t[1].trim(), this.expression = t[2]
                }
                if (this.alias) {
                    this.id = "__v-for__" + ++ls;
                    var n = this.el.tagName;
                    this.isOption = ("OPTION" === n || "OPTGROUP" === n) && "SELECT" === this.el.parentNode.tagName, this.start = me("v-for-start"), this.end = me("v-for-end"), se(this.el, this.end), ne(this.start, this.end), this.cache = Object.create(null), this.factory = new _n(this.vm, this.el)
                }
            },
            update: function(t) {
                this.diff(t), this.updateRef(), this.updateModel()
            },
            diff: function(t) {
                var e, n, r, o, s, a, l = t[0],
                    c = this.fromObject = m(l) && i(l, "$key") && i(l, "$value"),
                    u = this.params.trackBy,
                    h = this.frags,
                    p = this.frags = Array(t.length),
                    f = this.alias,
                    d = this.iterator,
                    v = this.start,
                    g = this.end,
                    y = K(v),
                    b = !h;
                for (e = 0, n = t.length; n > e; e++) l = t[e], o = c ? l.$key : null, s = c ? l.$value : l, a = !m(s), r = !b && this.getCachedFrag(s, e, o), r ? (r.reused = !0, r.scope.$index = e, o && (r.scope.$key = o), d && (r.scope[d] = null !== o ? o : e), (u || c || a) && De(function() {
                    r.scope[f] = s
                })) : (r = this.create(s, f, e, o), r.fresh = !b), p[e] = r, b && r.before(g);
                if (!b) {
                    var _ = 0,
                        w = h.length - p.length;
                    for (this.vm._vForRemoving = !0, e = 0, n = h.length; n > e; e++) r = h[e], r.reused || (this.deleteCachedFrag(r), this.remove(r, _++, w, y));
                    this.vm._vForRemoving = !1, _ && (this.vm._watchers = this.vm._watchers.filter(function(t) {
                        return t.active
                    }));
                    var x, k, C, T = 0;
                    for (e = 0, n = p.length; n > e; e++) r = p[e], x = p[e - 1], k = x ? x.staggerCb ? x.staggerAnchor : x.end || x.node : v, r.reused && !r.staggerCb ? (C = wn(r, v, this.id), C === x || C && wn(C, v, this.id) === x || this.move(r, k)) : this.insert(r, T++, k, y), r.reused = r.fresh = !1
                }
            },
            create: function(t, e, n, i) {
                var r = this._host,
                    o = this._scope || this.vm,
                    s = Object.create(o);
                s.$refs = Object.create(o.$refs), s.$els = Object.create(o.$els), s.$parent = o, s.$forContext = this, De(function() {
                    He(s, e, t)
                }), He(s, "$index", n), i ? He(s, "$key", i) : s.$key && b(s, "$key", null), this.iterator && He(s, this.iterator, null !== i ? i : n);
                var a = this.factory.create(r, s, this._frag);
                return a.forId = this.id, this.cacheFrag(t, a, n, i), a
            },
            updateRef: function() {
                var t = this.descriptor.ref;
                if (t) {
                    var e, n = (this._scope || this.vm).$refs;
                    this.fromObject ? (e = {}, this.frags.forEach(function(t) {
                        e[t.scope.$key] = Cn(t)
                    })) : e = this.frags.map(Cn), n[t] = e
                }
            },
            updateModel: function() {
                if (this.isOption) {
                    var t = this.start.parentNode,
                        e = t && t.__v_model;
                    e && e.forceUpdate()
                }
            },
            insert: function(t, e, n, i) {
                t.staggerCb && (t.staggerCb.cancel(), t.staggerCb = null);
                var r = this.getStagger(t, e, null, "enter");
                if (i && r) {
                    var o = t.staggerAnchor;
                    o || (o = t.staggerAnchor = me("stagger-anchor"), o.__v_frag = t), ie(o, n);
                    var s = t.staggerCb = x(function() {
                        t.staggerCb = null, t.before(o), re(o)
                    });
                    setTimeout(s, r)
                } else {
                    var a = n.nextSibling;
                    a || (ie(this.end, n), a = this.end), t.before(a)
                }
            },
            remove: function(t, e, n, i) {
                if (t.staggerCb) return t.staggerCb.cancel(), void(t.staggerCb = null);
                var r = this.getStagger(t, e, n, "leave");
                if (i && r) {
                    var o = t.staggerCb = x(function() {
                        t.staggerCb = null, t.remove()
                    });
                    setTimeout(o, r)
                } else t.remove()
            },
            move: function(t, e) {
                e.nextSibling || this.end.parentNode.appendChild(this.end), t.before(e.nextSibling, !1)
            },
            cacheFrag: function(t, e, n, r) {
                var o, s = this.params.trackBy,
                    a = this.cache,
                    l = !m(t);
                r || s || l ? (o = kn(n, r, t, s), a[o] || (a[o] = e)) : (o = this.id, i(t, o) ? null === t[o] && (t[o] = e) : Object.isExtensible(t) && b(t, o, e)), e.raw = t
            },
            getCachedFrag: function(t, e, n) {
                var i, r = this.params.trackBy,
                    o = !m(t);
                if (n || r || o) {
                    var s = kn(e, n, t, r);
                    i = this.cache[s]
                } else i = t[this.id];
                return i && (i.reused || i.fresh), i
            },
            deleteCachedFrag: function(t) {
                var e = t.raw,
                    n = this.params.trackBy,
                    r = t.scope,
                    o = r.$index,
                    s = i(r, "$key") && r.$key,
                    a = !m(e);
                if (n || s || a) {
                    var l = kn(o, s, e, n);
                    this.cache[l] = null
                } else e[this.id] = null, t.raw = null
            },
            getStagger: function(t, e, n, i) {
                i += "Stagger";
                var r = t.node.__v_trans,
                    o = r && r.hooks,
                    s = o && (o[i] || o.stagger);
                return s ? s.call(t, e, n) : e * parseInt(this.params[i] || this.params.stagger, 10)
            },
            _preProcess: function(t) {
                return this.rawValue = t, t
            },
            _postProcess: function(t) {
                if (Ji(t)) return t;
                if (y(t)) {
                    for (var e, n = Object.keys(t), i = n.length, r = Array(i); i--;) e = n[i], r[i] = {
                        $key: e,
                        $value: t[e]
                    };
                    return r
                }
                return "number" != typeof t || isNaN(t) || (t = xn(t)), t || []
            },
            unbind: function() {
                if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags)
                    for (var t, e = this.frags.length; e--;) t = this.frags[e], this.deleteCachedFrag(t), t.destroy()
            }
        },
        us = {
            priority: os,
            terminal: !0,
            bind: function() {
                var t = this.el;
                if (t.__vue__) this.invalid = !0;
                else {
                    var e = t.nextElementSibling;
                    e && null !== Z(e, "v-else") && (re(e), this.elseEl = e), this.anchor = me("v-if"), se(t, this.anchor)
                }
            },
            update: function(t) {
                this.invalid || (t ? this.frag || this.insert() : this.remove())
            },
            insert: function() {
                this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.factory || (this.factory = new _n(this.vm, this.el)), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor)
            },
            remove: function() {
                this.frag && (this.frag.remove(), this.frag = null), this.elseEl && !this.elseFrag && (this.elseFactory || (this.elseFactory = new _n(this.elseEl._context || this.vm, this.elseEl)), this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor))
            },
            unbind: function() {
                this.frag && this.frag.destroy(), this.elseFrag && this.elseFrag.destroy()
            }
        },
        hs = {
            bind: function() {
                var t = this.el.nextElementSibling;
                t && null !== Z(t, "v-else") && (this.elseEl = t)
            },
            update: function(t) {
                this.apply(this.el, t), this.elseEl && this.apply(this.elseEl, !t)
            },
            apply: function(t, e) {
                function n() {
                    t.style.display = e ? "" : "none"
                }
                K(t) ? Q(t, e ? 1 : -1, n, this.vm) : n()
            }
        },
        ps = {
            bind: function() {
                var t = this,
                    e = this.el,
                    n = "range" === e.type,
                    i = this.params.lazy,
                    r = this.params.number,
                    o = this.params.debounce,
                    s = !1;
                if (nr || n || (this.on("compositionstart", function() {
                        s = !0
                    }), this.on("compositionend", function() {
                        s = !1, i || t.listener()
                    })), this.focused = !1, n || i || (this.on("focus", function() {
                        t.focused = !0
                    }), this.on("blur", function() {
                        t.focused = !1, t._frag && !t._frag.inserted || t.rawListener()
                    })), this.listener = this.rawListener = function() {
                        if (!s && t._bound) {
                            var i = r || n ? a(e.value) : e.value;
                            t.set(i), ur(function() {
                                t._bound && !t.focused && t.update(t._watcher.value)
                            })
                        }
                    }, o && (this.listener = _(this.listener, o)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery) {
                    var l = jQuery.fn.on ? "on" : "bind";
                    jQuery(e)[l]("change", this.rawListener), i || jQuery(e)[l]("input", this.listener)
                } else this.on("change", this.rawListener), i || this.on("input", this.listener);
                !i && er && (this.on("cut", function() {
                    ur(t.listener)
                }), this.on("keyup", function(e) {
                    46 !== e.keyCode && 8 !== e.keyCode || t.listener()
                })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this.afterBind = this.listener)
            },
            update: function(t) {
                t = s(t), t !== this.el.value && (this.el.value = t)
            },
            unbind: function() {
                var t = this.el;
                if (this.hasjQuery) {
                    var e = jQuery.fn.off ? "off" : "unbind";
                    jQuery(t)[e]("change", this.listener), jQuery(t)[e]("input", this.listener)
                }
            }
        },
        fs = {
            bind: function() {
                var t = this,
                    e = this.el;
                this.getValue = function() {
                    if (e.hasOwnProperty("_value")) return e._value;
                    var n = e.value;
                    return t.params.number && (n = a(n)), n
                }, this.listener = function() {
                    t.set(t.getValue())
                }, this.on("change", this.listener), e.hasAttribute("checked") && (this.afterBind = this.listener)
            },
            update: function(t) {
                this.el.checked = k(t, this.getValue())
            }
        },
        ds = {
            bind: function() {
                var t = this,
                    e = this,
                    n = this.el;
                this.forceUpdate = function() {
                    e._watcher && e.update(e._watcher.get())
                };
                var i = this.multiple = n.hasAttribute("multiple");
                this.listener = function() {
                    var t = Tn(n, i);
                    t = e.params.number ? Ji(t) ? t.map(a) : a(t) : t, e.set(t)
                }, this.on("change", this.listener);
                var r = Tn(n, i, !0);
                (i && r.length || !i && null !== r) && (this.afterBind = this.listener), this.vm.$on("hook:attached", function() {
                    ur(t.forceUpdate)
                }), K(n) || ur(this.forceUpdate)
            },
            update: function(t) {
                var e = this.el;
                e.selectedIndex = -1;
                for (var n, i, r = this.multiple && Ji(t), o = e.options, s = o.length; s--;) n = o[s], i = n.hasOwnProperty("_value") ? n._value : n.value, n.selected = r ? An(t, i) > -1 : k(t, i)
            },
            unbind: function() {
                this.vm.$off("hook:attached", this.forceUpdate)
            }
        },
        vs = {
            bind: function() {
                function t() {
                    var t = n.checked;
                    return t && n.hasOwnProperty("_trueValue") ? n._trueValue : !t && n.hasOwnProperty("_falseValue") ? n._falseValue : t
                }
                var e = this,
                    n = this.el;
                this.getValue = function() {
                    return n.hasOwnProperty("_value") ? n._value : e.params.number ? a(n.value) : n.value
                }, this.listener = function() {
                    var i = e._watcher.get();
                    if (Ji(i)) {
                        var r = e.getValue(),
                            o = w(i, r);
                        n.checked ? 0 > o && e.set(i.concat(r)) : o > -1 && e.set(i.slice(0, o).concat(i.slice(o + 1)))
                    } else e.set(t())
                }, this.on("change", this.listener), n.hasAttribute("checked") && (this.afterBind = this.listener)
            },
            update: function(t) {
                var e = this.el;
                e.checked = Ji(t) ? w(t, this.getValue()) > -1 : e.hasOwnProperty("_trueValue") ? k(t, e._trueValue) : !!t
            }
        },
        gs = {
            text: ps,
            radio: fs,
            select: ds,
            checkbox: vs
        },
        ms = {
            priority: Zo,
            twoWay: !0,
            handlers: gs,
            params: ["lazy", "number", "debounce"],
            bind: function() {
                this.checkFilters(), this.hasRead && !this.hasWrite;
                var t, e = this.el,
                    n = e.tagName;
                if ("INPUT" === n) t = gs[e.type] || gs.text;
                else if ("SELECT" === n) t = gs.select;
                else {
                    if ("TEXTAREA" !== n) return;
                    t = gs.text
                }
                e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind
            },
            checkFilters: function() {
                var t = this.filters;
                if (t)
                    for (var e = t.length; e--;) {
                        var n = Ne(this.vm.$options, "filters", t[e].name);
                        ("function" == typeof n || n.read) && (this.hasRead = !0), n.write && (this.hasWrite = !0)
                    }
            },
            unbind: function() {
                this.el.__v_model = null, this._unbind && this._unbind()
            }
        },
        ys = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            "delete": [8, 46],
            up: 38,
            left: 37,
            right: 39,
            down: 40
        },
        bs = {
            priority: Ko,
            acceptStatement: !0,
            keyCodes: ys,
            bind: function() {
                if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
                    var t = this;
                    this.iframeBind = function() {
                        ae(t.el.contentWindow, t.arg, t.handler, t.modifiers.capture)
                    }, this.on("load", this.iframeBind)
                }
            },
            update: function(t) {
                if (this.descriptor.raw || (t = function() {}), "function" == typeof t) {
                    this.modifiers.stop && (t = $n(t)), this.modifiers.prevent && (t = En(t)), this.modifiers.self && (t = Sn(t));
                    var e = Object.keys(this.modifiers).filter(function(t) {
                        return "stop" !== t && "prevent" !== t && "self" !== t && "capture" !== t
                    });
                    e.length && (t = jn(t, e)), this.reset(), this.handler = t, this.iframeBind ? this.iframeBind() : ae(this.el, this.arg, this.handler, this.modifiers.capture)
                }
            },
            reset: function() {
                var t = this.iframeBind ? this.el.contentWindow : this.el;
                this.handler && le(t, this.arg, this.handler)
            },
            unbind: function() {
                this.reset()
            }
        },
        _s = ["-webkit-", "-moz-", "-ms-"],
        ws = ["Webkit", "Moz", "ms"],
        xs = /!important;?$/,
        ks = Object.create(null),
        Cs = null,
        Ts = {
            deep: !0,
            update: function(t) {
                "string" == typeof t ? this.el.style.cssText = t : this.handleObject(Ji(t) ? t.reduce(g, {}) : t || {})
            },
            handleObject: function(t) {
                var e, n, i = this.cache || (this.cache = {});
                for (e in i) e in t || (this.handleSingle(e, null), delete i[e]);
                for (e in t) n = t[e], n !== i[e] && (i[e] = n, this.handleSingle(e, n))
            },
            handleSingle: function(t, e) {
                if (t = Nn(t))
                    if (null != e && (e += ""), e) {
                        var n = xs.test(e) ? "important" : "";
                        n ? (e = e.replace(xs, "").trim(), this.el.style.setProperty(t.kebab, e, n)) : this.el.style[t.camel] = e
                    } else this.el.style[t.camel] = ""
            }
        },
        As = "http://www.w3.org/1999/xlink",
        js = /^xlink:/,
        $s = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
        Es = /^(?:value|checked|selected|muted)$/,
        Ss = /^(?:draggable|contenteditable|spellcheck)$/,
        Ns = {
            value: "_value",
            "true-value": "_trueValue",
            "false-value": "_falseValue"
        },
        Os = {
            priority: ts,
            bind: function() {
                var t = this.arg,
                    e = this.el.tagName;
                t || (this.deep = !0);
                var n = this.descriptor,
                    i = n.interp;
                i && (n.hasOneTime && (this.expression = V(i, this._scope || this.vm)), ($s.test(t) || "name" === t && ("PARTIAL" === e || "SLOT" === e)) && (this.el.removeAttribute(t), this.invalid = !0))
            },
            update: function(t) {
                if (!this.invalid) {
                    var e = this.arg;
                    this.arg ? this.handleSingle(e, t) : this.handleObject(t || {})
                }
            },
            handleObject: Ts.handleObject,
            handleSingle: function(t, e) {
                var n = this.el,
                    i = this.descriptor.interp;
                if (this.modifiers.camel && (t = u(t)), !i && Es.test(t) && t in n) {
                    var r = "value" === t && null == e ? "" : e;
                    n[t] !== r && (n[t] = r)
                }
                var o = Ns[t];
                if (!i && o) {
                    n[o] = e;
                    var s = n.__v_model;
                    s && s.listener()
                }
                return "value" === t && "TEXTAREA" === n.tagName ? void n.removeAttribute(t) : void(Ss.test(t) ? n.setAttribute(t, e ? "true" : "false") : null != e && e !== !1 ? "class" === t ? (n.__v_trans && (e += " " + n.__v_trans.id + "-transition"), ue(n, e)) : js.test(t) ? n.setAttributeNS(As, t, e === !0 ? "" : e) : n.setAttribute(t, e === !0 ? "" : e) : n.removeAttribute(t))
            }
        },
        Ds = {
            priority: ns,
            bind: function() {
                if (this.arg) {
                    var t = this.id = u(this.arg),
                        e = (this._scope || this.vm).$els;
                    i(e, t) ? e[t] = this.el : He(e, t, this.el)
                }
            },
            unbind: function() {
                var t = (this._scope || this.vm).$els;
                t[this.id] === this.el && (t[this.id] = null)
            }
        },
        Rs = {
            bind: function() {}
        },
        Ms = {
            bind: function() {
                var t = this.el;
                this.vm.$once("pre-hook:compiled", function() {
                    t.removeAttribute("v-cloak")
                })
            }
        },
        Ls = {
            text: Io,
            html: Qo,
            "for": cs,
            "if": us,
            show: hs,
            model: ms,
            on: bs,
            bind: Os,
            el: Ds,
            ref: Rs,
            cloak: Ms
        },
        Ps = {
            deep: !0,
            update: function(t) {
                t ? this.setClass("string" == typeof t ? t.trim().split(/\s+/) : Dn(t)) : this.cleanup()
            },
            setClass: function(t) {
                this.cleanup(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    i && Rn(this.el, i, he)
                }
                this.prevKeys = t
            },
            cleanup: function(t) {
                var e = this.prevKeys;
                if (e)
                    for (var n = e.length; n--;) {
                        var i = e[n];
                        (!t || t.indexOf(i) < 0) && Rn(this.el, i, pe)
                    }
            }
        },
        Hs = {
            priority: is,
            params: ["keep-alive", "transition-mode", "inline-template"],
            bind: function() {
                this.el.__vue__ || (this.keepAlive = this.params.keepAlive, this.keepAlive && (this.cache = {}), this.params.inlineTemplate && (this.inlineTemplate = fe(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this.anchor = me("v-component"), se(this.el, this.anchor), this.el.removeAttribute("is"), this.el.removeAttribute(":is"), this.descriptor.ref && this.el.removeAttribute("v-ref:" + p(this.descriptor.ref)), this.literal && this.setComponent(this.expression))
            },
            update: function(t) {
                this.literal || this.setComponent(t)
            },
            setComponent: function(t, e) {
                if (this.invalidatePending(), t) {
                    var n = this;
                    this.resolveComponent(t, function() {
                        n.mountComponent(e)
                    })
                } else this.unbuild(!0), this.remove(this.childVM, e), this.childVM = null
            },
            resolveComponent: function(t, e) {
                var n = this;
                this.pendingComponentCb = x(function(i) {
                    n.ComponentName = i.options.name || ("string" == typeof t ? t : null), n.Component = i, e()
                }), this.vm._resolveComponent(t, this.pendingComponentCb)
            },
            mountComponent: function(t) {
                this.unbuild(!0);
                var e = this,
                    n = this.Component.options.activate,
                    i = this.getCached(),
                    r = this.build();
                n && !i ? (this.waitingFor = r, Mn(n, r, function() {
                    e.waitingFor === r && (e.waitingFor = null, e.transition(r, t))
                })) : (i && r._updateRef(), this.transition(r, t))
            },
            invalidatePending: function() {
                this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null)
            },
            build: function(t) {
                var e = this.getCached();
                if (e) return e;
                if (this.Component) {
                    var n = {
                        name: this.ComponentName,
                        el: hn(this.el),
                        template: this.inlineTemplate,
                        parent: this._host || this.vm,
                        _linkerCachable: !this.inlineTemplate,
                        _ref: this.descriptor.ref,
                        _asComponent: !0,
                        _isRouterView: this._isRouterView,
                        _context: this.vm,
                        _scope: this._scope,
                        _frag: this._frag
                    };
                    t && g(n, t);
                    var i = new this.Component(n);
                    return this.keepAlive && (this.cache[this.Component.cid] = i), i
                }
            },
            getCached: function() {
                return this.keepAlive && this.cache[this.Component.cid]
            },
            unbuild: function(t) {
                this.waitingFor && (this.keepAlive || this.waitingFor.$destroy(), this.waitingFor = null);
                var e = this.childVM;
                return !e || this.keepAlive ? void(e && (e._inactive = !0, e._updateRef(!0))) : void e.$destroy(!1, t)
            },
            remove: function(t, e) {
                var n = this.keepAlive;
                if (t) {
                    this.pendingRemovals++, this.pendingRemovalCb = e;
                    var i = this;
                    t.$remove(function() {
                        i.pendingRemovals--, n || t._cleanup(), !i.pendingRemovals && i.pendingRemovalCb && (i.pendingRemovalCb(), i.pendingRemovalCb = null)
                    })
                } else e && e()
            },
            transition: function(t, e) {
                var n = this,
                    i = this.childVM;
                switch (i && (i._inactive = !0), t._inactive = !1, this.childVM = t, n.params.transitionMode) {
                    case "in-out":
                        t.$before(n.anchor, function() {
                            n.remove(i, e)
                        });
                        break;
                    case "out-in":
                        n.remove(i, function() {
                            t.$before(n.anchor, e)
                        });
                        break;
                    default:
                        n.remove(i), t.$before(n.anchor, e)
                }
            },
            unbind: function() {
                if (this.invalidatePending(), this.unbuild(), this.cache) {
                    for (var t in this.cache) this.cache[t].$destroy();
                    this.cache = null
                }
            }
        },
        Fs = qr._propBindingModes,
        Is = {},
        qs = /^[$_a-zA-Z]+[\w$]*$/,
        Bs = qr._propBindingModes,
        Ws = {
            bind: function() {
                var t = this.vm,
                    e = t._context,
                    n = this.descriptor.prop,
                    i = n.path,
                    r = n.parentPath,
                    o = n.mode === Bs.TWO_WAY,
                    s = this.parentWatcher = new sn(e, r, function(e) {
                        In(t, n, e)
                    }, {
                        twoWay: o,
                        filters: n.filters,
                        scope: this._scope
                    });
                if (Fn(t, n, s.value), o) {
                    var a = this;
                    t.$once("pre-hook:created", function() {
                        a.childWatcher = new sn(t, i, function(t) {
                            s.set(t)
                        }, {
                            sync: !0
                        })
                    })
                }
            },
            unbind: function() {
                this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown()
            }
        },
        Vs = [],
        zs = !1,
        Us = "transition",
        Xs = "animation",
        Gs = rr + "Duration",
        Js = sr + "Duration",
        Qs = Yi && window.requestAnimationFrame,
        Ys = Qs ? function(t) {
            Qs(function() {
                Qs(t)
            })
        } : function(t) {
            setTimeout(t, 50)
        },
        Ks = Xn.prototype;
    Ks.enter = function(t, e) {
        this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, he(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, zn(this.enterNextTick))
    }, Ks.enterNextTick = function() {
        var t = this;
        this.justEntered = !0, Ys(function() {
            t.justEntered = !1
        });
        var e = this.enterDone,
            n = this.getCssTransitionType(this.enterClass);
        this.pendingJsCb ? n === Us && pe(this.el, this.enterClass) : n === Us ? (pe(this.el, this.enterClass), this.setupCssCb(or, e)) : n === Xs ? this.setupCssCb(ar, e) : e()
    }, Ks.enterDone = function() {
        this.entered = !0, this.cancel = this.pendingJsCb = null, pe(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb()
    }, Ks.leave = function(t, e) {
        this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, he(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : zn(this.leaveNextTick)))
    }, Ks.leaveNextTick = function() {
        var t = this.getCssTransitionType(this.leaveClass);
        if (t) {
            var e = t === Us ? or : ar;
            this.setupCssCb(e, this.leaveDone)
        } else this.leaveDone()
    }, Ks.leaveDone = function() {
        this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), pe(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null
    }, Ks.cancelPending = function() {
        this.op = this.cb = null;
        var t = !1;
        this.pendingCssCb && (t = !0, le(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (pe(this.el, this.enterClass), pe(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null)
    }, Ks.callHook = function(t) {
        this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el)
    }, Ks.callHookWithCb = function(t) {
        var e = this.hooks && this.hooks[t];
        e && (e.length > 1 && (this.pendingJsCb = x(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb))
    }, Ks.getCssTransitionType = function(t) {
        if (!(!or || document.hidden || this.hooks && this.hooks.css === !1 || Gn(this.el))) {
            var e = this.type || this.typeCache[t];
            if (e) return e;
            var n = this.el.style,
                i = window.getComputedStyle(this.el),
                r = n[Gs] || i[Gs];
            if (r && "0s" !== r) e = Us;
            else {
                var o = n[Js] || i[Js];
                o && "0s" !== o && (e = Xs)
            }
            return e && (this.typeCache[t] = e), e
        }
    }, Ks.setupCssCb = function(t, e) {
        this.pendingCssEvent = t;
        var n = this,
            i = this.el,
            r = this.pendingCssCb = function(o) {
                o.target === i && (le(i, t, r), n.pendingCssEvent = n.pendingCssCb = null, !n.pendingJsCb && e && e())
            };
        ae(i, t, r)
    };
    var Zs = {
            priority: es,
            update: function(t, e) {
                var n = this.el,
                    i = Ne(this.vm.$options, "transitions", t);
                t = t || "v", e = e || "v", n.__v_trans = new Xn(n, t, i, this.vm), pe(n, e + "-transition"), he(n, t + "-transition")
            }
        },
        ta = {
            style: Ts,
            "class": Ps,
            component: Hs,
            prop: Ws,
            transition: Zs
        },
        ea = /^v-bind:|^:/,
        na = /^v-on:|^@/,
        ia = /^v-([^:]+)(?:$|:(.*)$)/,
        ra = /\.[^\.]+/g,
        oa = /^(v-bind:|:)?transition$/,
        sa = 1e3,
        aa = 2e3;
    fi.terminal = !0;
    var la = /[^\w\-:\.]/,
        ca = Object.freeze({
            compile: Jn,
            compileAndLinkProps: ti,
            compileRoot: ei,
            transclude: _i,
            resolveSlots: Ci
        }),
        ua = /^v-on:|^@/;
    Ei.prototype._bind = function() {
        var t = this.name,
            e = this.descriptor;
        if (("cloak" !== t || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
            var n = e.attr || "v-" + t;
            this.el.removeAttribute(n)
        }
        var i = e.def;
        if ("function" == typeof i ? this.update = i : g(this, i), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(e.raw);
        else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
            var r = this;
            this._update = this.update ? function(t, e) {
                r._locked || r.update(t, e)
            } : $i;
            var o = this._preProcess ? d(this._preProcess, this) : null,
                s = this._postProcess ? d(this._postProcess, this) : null,
                a = this._watcher = new sn(this.vm, this.expression, this._update, {
                    filters: this.filters,
                    twoWay: this.twoWay,
                    deep: this.deep,
                    preProcess: o,
                    postProcess: s,
                    scope: this._scope
                });
            this.afterBind ? this.afterBind() : this.update && this.update(a.value)
        }
    }, Ei.prototype._setupParams = function() {
        if (this.params) {
            var t = this.params;
            this.params = Object.create(null);
            for (var e, n, i, r = t.length; r--;) e = p(t[r]), i = u(e), n = te(this.el, e), null != n ? this._setupParamWatcher(i, n) : (n = Z(this.el, e), null != n && (this.params[i] = "" === n || n))
        }
    }, Ei.prototype._setupParamWatcher = function(t, e) {
        var n = this,
            i = !1,
            r = (this._scope || this.vm).$watch(e, function(e, r) {
                if (n.params[t] = e, i) {
                    var o = n.paramWatchers && n.paramWatchers[t];
                    o && o.call(n, e, r)
                } else i = !0
            }, {
                immediate: !0,
                user: !1
            });
        (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r)
    }, Ei.prototype._checkStatement = function() {
        var t = this.expression;
        if (t && this.acceptStatement && !tn(t)) {
            var e = Ze(t).get,
                n = this._scope || this.vm,
                i = function(t) {
                    n.$event = t, e.call(n, n), n.$event = null
                };
            return this.filters && (i = n._applyFilters(i, null, this.filters)), this.update(i), !0
        }
    }, Ei.prototype.set = function(t) {
        this.twoWay && this._withLock(function() {
            this._watcher.set(t)
        })
    }, Ei.prototype._withLock = function(t) {
        var e = this;
        e._locked = !0, t.call(e), ur(function() {
            e._locked = !1
        })
    }, Ei.prototype.on = function(t, e, n) {
        ae(this.el, t, e, n), (this._listeners || (this._listeners = [])).push([t, e])
    }, Ei.prototype._teardown = function() {
        if (this._bound) {
            this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();
            var t, e = this._listeners;
            if (e)
                for (t = e.length; t--;) le(this.el, e[t][0], e[t][1]);
            var n = this._paramUnwatchFns;
            if (n)
                for (t = n.length; t--;) n[t]();
            this.vm = this.el = this._watcher = this._listeners = null
        }
    };
    var ha = /[^|]\|[^|]/;
    Fe(Li), Ai(Li), ji(Li), Si(Li), Ni(Li), Oi(Li), Di(Li), Ri(Li), Mi(Li);
    var pa = {
            priority: as,
            params: ["name"],
            bind: function() {
                var t = this.params.name || "default",
                    e = this.vm._slotContents && this.vm._slotContents[t];
                e && e.hasChildNodes() ? this.compile(e.cloneNode(!0), this.vm._context, this.vm) : this.fallback()
            },
            compile: function(t, e, n) {
                if (t && e) {
                    if (this.el.hasChildNodes() && 1 === t.childNodes.length && 1 === t.childNodes[0].nodeType && t.childNodes[0].hasAttribute("v-if")) {
                        var i = document.createElement("template");
                        i.setAttribute("v-else", ""), i.innerHTML = this.el.innerHTML, i._context = this.vm, t.appendChild(i)
                    }
                    var r = n ? n._scope : this._scope;
                    this.unlink = e.$compile(t, n, r, this._frag)
                }
                t ? se(this.el, t) : re(this.el)
            },
            fallback: function() {
                this.compile(fe(this.el, !0), this.vm)
            },
            unbind: function() {
                this.unlink && this.unlink()
            }
        },
        fa = {
            priority: rs,
            params: ["name"],
            paramWatchers: {
                name: function(t) {
                    us.remove.call(this), t && this.insert(t)
                }
            },
            bind: function() {
                this.anchor = me("v-partial"), se(this.el, this.anchor), this.insert(this.params.name)
            },
            insert: function(t) {
                var e = Ne(this.vm.$options, "partials", t, !0);
                e && (this.factory = new _n(this.vm, e), us.insert.call(this))
            },
            unbind: function() {
                this.frag && this.frag.destroy()
            }
        },
        da = {
            slot: pa,
            partial: fa
        },
        va = cs._postProcess,
        ga = /(\d{3})(?=\d)/g,
        ma = {
            orderBy: Fi,
            filterBy: Hi,
            limitBy: Pi,
            json: {
                read: function(t, e) {
                    return "string" == typeof t ? t : JSON.stringify(t, null, arguments.length > 1 ? e : 2)
                },
                write: function(t) {
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
            },
            capitalize: function(t) {
                return t || 0 === t ? (t = "" + t, t.charAt(0).toUpperCase() + t.slice(1)) : ""
            },
            uppercase: function(t) {
                return t || 0 === t ? ("" + t).toUpperCase() : ""
            },
            lowercase: function(t) {
                return t || 0 === t ? ("" + t).toLowerCase() : ""
            },
            currency: function(t, e, n) {
                if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";
                e = null != e ? e : "$", n = null != n ? n : 2;
                var i = Math.abs(t).toFixed(n),
                    r = n ? i.slice(0, -1 - n) : i,
                    o = r.length % 3,
                    s = o > 0 ? r.slice(0, o) + (r.length > 3 ? "," : "") : "",
                    a = n ? i.slice(-1 - n) : "",
                    l = 0 > t ? "-" : "";
                return l + e + s + r.slice(o).replace(ga, "$1,") + a
            },
            pluralize: function(t) {
                var e = v(arguments, 1),
                    n = e.length;
                if (n > 1) {
                    var i = t % 10 - 1;
                    return i in e ? e[i] : e[n - 1]
                }
                return e[0] + (1 === t ? "" : "s")
            },
            debounce: function(t, e) {
                return t ? (e || (e = 300), _(t, e)) : void 0
            }
        };
    qi(Li), Li.version = "1.0.28", setTimeout(function() {
        qr.devtools && Ki && Ki.emit("init", Li)
    }, 0), t.exports = Li
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(29),
        o = i(r),
        s = n(35),
        a = i(s),
        l = n(30),
        c = i(l),
        u = n(32),
        h = i(u),
        p = n(26),
        f = i(p),
        d = n(31),
        v = i(d),
        g = n(36),
        m = i(g),
        y = n(27),
        b = i(y),
        _ = n(34),
        w = i(_),
        x = n(33),
        k = i(x),
        C = n(25),
        T = i(C),
        A = n(28),
        j = i(A),
        $ = n(23),
        E = i($),
        S = n(2),
        N = i(S),
        O = n(37),
        D = i(O);
    N.default.use(D.default);
    var R = new D.default({
        history: !1
    });
    R.map({
        "*": {
            component: E.default
        },
        "/": {
            component: o.default
        },
        "/work": {
            component: a.default
        },
        "/skills": {
            component: h.default
        },
        "/profile": {
            component: c.default
        },
        "/work/blackstone-chambers": {
            component: f.default
        },
        "/work/recycle-now": {
            component: v.default
        },
        "/work/wright-and-round": {
            component: m.default
        },
        "/work/east-renfrewshire-golf-club": {
            component: b.default
        },
        "/work/2C-properties": {
            component: w.default
        },
        "/work/the-cherington-practice": {
            component: k.default
        },
        "/work/biasi": {
            component: T.default
        },
        "/work/hatty-boots": {
            component: j.default
        }
    }), R.beforeEach(function(t) {
        window.scrollTo(0, 0), t.next()
    }), e.default = R
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = i(r),
        s = n(22),
        a = i(s),
        l = n(21),
        c = i(l);
    e.default = {
        store: o.default,
        components: {
            NavBar: a.default,
            LastBar: c.default
        }
    }
}, function(t) {
    t.exports = ""
}, function(t) {
    t.exports = ' <div class=navicon><span></span></div> <div class=nav-overlay> <div class=nav-overlay__inner> <ul> <li> <a v-link="{path:\'/\', exact: true}"> <svg class=nav-svg xmlns=http://www.w3.org/2000/svg width=8 height=8 viewBox="0 0 8 8"> <path d="M4 0l-4 3h1v4h2v-2h2v2h2v-4.03l1 .03-4-3z"/> </svg> </a> <ul> <li><a v-link="{path:\'/\', exact: true}">Home</a></li> </ul> </li> <li> <a v-link="{path:\'/work\'}"> <svg class=nav-svg xmlns=http://www.w3.org/2000/svg width=8 height=8 viewBox="0 0 8 8"> <path d="M3 0c-.55 0-1 .45-1 1v1h-1.91c-.06 0-.09.04-.09.09v2.41c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-2.41c0-.06-.04-.09-.09-.09h-1.91v-1c0-.55-.45-1-1-1h-2zm0 1h2v1h-2v-1zm-3 4.91v2c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-2c-.16.06-.32.09-.5.09h-7c-.18 0-.34-.04-.5-.09z"/> </svg> </a> <ul> <li><a v-link="{path:\'/work\'}">Work</a></li> </ul> </li> <li> <a v-link="{path:\'/profile\'}"> <svg class=nav-svg xmlns=http://www.w3.org/2000/svg width=8 height=8 viewBox="0 0 8 8"> <path d="M3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1.5 2.5c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5s.5.22.5.5-1 1.64-1 2.5c0 .86.67 1.5 1.5 1.5s1.5-.67 1.5-1.5h-1c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-.36 1-1.84 1-2.5 0-.81-.67-1.5-1.5-1.5z" transform=translate(2) /> </svg> </a> <ul> <li><a v-link="{path:\'/profile\'}">Profile</a></li> </ul> </li> <li> <a v-link="{path:\'/skills\'}"> <svg class=nav-svg xmlns=http://www.w3.org/2000/svg width=8 height=8 viewBox="0 0 8 8"> <path d="M5 0l-3 6h1l3-6h-1zm-4 1l-1 2 1 2h1l-1-2 1-2h-1zm5 0l1 2-1 2h1l1-2-1-2h-1z" transform="translate(0 1)"/> </svg> </a> <ul> <li><a v-link="{path:\'/skills\'}">Skills</a></li> </ul> </li> <li> <a href=mailto:hi@sii.im> <svg class=nav-svg xmlns=http://www.w3.org/2000/svg width=8 height=8 viewBox="0 0 8 8"> <path d="M0 0v1l4 2 4-2v-1h-8zm0 2v4h8v-4l-4 2-4-2z" transform="translate(0 1)"/> </svg> </a> <ul> <li><a href=mailto:hi@sii.im>Contact</a></li> </ul> </li> </ul> </div> </div> '
}, function(t) {
    t.exports = ' <section class="section section--home-canvas" id=homeCanvas transition=fade> <div class=welcome> <h1 class=welcome__heading>404 - Page not found</h1> <p class=welcome__info> Uh oh, looks like that page doesn\'t exist&hellip; </p> <a class="button button--primary welcome__button" v-link="{path:\'/\'}">Home</a> </div> </section> '
}, function(t) {
    t.exports = " <div> <nav> <nav-bar></nav-bar> </nav> <last-bar></last-bar> <div class=page> <router-view></router-view> </div> </div> "
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>Biasi</h1> <a class=banner__credit href=http://kalexiko.com>Agency: <span>Kalexiko</span></a> <a class=banner__url href=http://biasi.co.uk>URL: <span>biasi.co.uk</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/biasi/mock1.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Challenge</h3> <p> Biasi UK provide reliable, user-friendly heating solutions delivering superior performance. Approaching Kalexiko for their first mobile-friendly website, it was important to deliver a high-quality solution that would serve both customers and installers. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/biasi/website.png> <img src=/static/img/portfolio/biasi/website2.png> </div> <div class=page__wrapper> <div class=rich-text> <h3>Method</h3> <p> Working as part of the front-end team, I was tasked with building the page templates and integrating a solid solution for mobiles/tablets. Integrating with Kalexiko\'s custom CMS, I delivered a consistent and scalable front-end. </p> </div> </div> <img src=/static/img/portfolio/biasi/mock2.jpg> <a v-link="{path:\'/work/the-cherington-practice\'}" class=navigate-project> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">The Cherington Practice</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>Blackstone Chambers</h1> <a class=banner__credit href=http://torchbox.com>Agency: <span>Torchbox</span></a> <a class=banner__url href=http://blackstonechambers.com>URL: <span>blackstonechambers.com</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/blackstone-chambers/mock1.jpg> <div class=page__wrapper data-name-hook=section-challenge> <div class=rich-text> <h3>Challenge</h3> <p> Established in the 1950s, Blackstone Chambers is a leading set of barristers chambers in the Temple district of central London. Torchbox was asked to design and build a brand new website, incorporating mobile-first design and an emphasis on usability. This site is built with Wagtail, Torchbox\'s excellent Django-based CMS. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/blackstone-chambers/website.png> <img src=/static/img/portfolio/blackstone-chambers/website2.png> </div> <div class=page__wrapper data-name-hook=section-role> <div class=rich-text> <h3>Role</h3> <p> Joining the project part-way through, I worked alongside designers and backend developers to help improve the front-end performance of the website. Building Django templates, refactoring existing CSS/JS and improving mobile performance were amongst my duties. </p> </div> </div> <img src=/static/img/portfolio/blackstone-chambers/mock2.jpg> <div class=page__wrapper data-name-hook=section-method> <div class=rich-text> <h3>Method</h3> <p> Much of my time was spent on improving site performance. This included rewriting large parts of JavaScript, adding hardware-accelerated transitions where possible, and refactoring the front-end codebase as a whole. Due to the complexity and volume of JavaScript used, we opted to refactor much of it into reusable ES6 components. </p> </div> </div> <a v-link="{path:\'/work/wright-and-round\'}" class=navigate-project data-name-hook=section-next> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">Wright and Round</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>East Renfrewshire Golf Club</h1> <a class=banner__credit href=http://artworking.uk>Agency: <span>Artworking</span></a> <a class=banner__url href=http://eastrengolfclub.co.uk>URL: <span>eastrengolfclub.co.uk</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/east-renfrewshire-golf-club/mock2.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Challenge</h3> <p> East Renfrewshire Golf Club is a Top 100 golf course in Scotland, and wanted to showcase their excellent course, clubhouse and activities. With an image-led design, I was asked to implement a front-end solution that would help maintain their great reputation. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/east-renfrewshire-golf-club/website.png> <img src=/static/img/portfolio/east-renfrewshire-golf-club/website2.png> </div> <div class=page__wrapper> <div class=rich-text> <h3>Role</h3> <p> Leading the front-end team, I immediately looked at the specifications for the website\'s templates. With a large amount of custom pages, I lent on a reusable approach for the front-end components in order to prevent code bloat and poor performance. The CSS/JS reflects that approach, making future template building a breeze. </p> </div> </div> <img src=/static/img/portfolio/east-renfrewshire-golf-club/mock1.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Method</h3> <p> I worked closely with the design team while building the website, and the regular two-way feedback resulted in a great website that the client loves. It was important to make the JS as reusable as possible since multiple slideshows and other features become hard to maintain without proper structure. </p> </div> </div> <a v-link="{path:\'/profile\'}" class=navigate-project data-name-hook=section-next> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Learn more about me</span> <div class="button button--primary navigate-project__button">Profile</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>Hatty Boots</h1> <a class=banner__credit href=http://artworking.uk>Agency: <span>Artworking</span></a> <a class=banner__url href=http://hattyboots.com>URL: <span>hattyboots.com</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/hatty-boots/mock2.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Challenge</h3> <p> Hatty Boots specialises in handcrafted, embossed, and embellished cards from small, very talented UK designers. Artworking were approached to implement a Symfony-driven website that would help them catalogue, promote and sell their products. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/hatty-boots/website.png> <img src=/static/img/portfolio/hatty-boots/website2.png> </div> <div class=page__wrapper> <div class=rich-text> <h3>Role</h3> <p> I was tasked with building the front-end of the website, implementing a solution for their multi-level menu structure on both desktop and mobile. Presenting the products as best as possible was key, in addition to an intuitive purchase journey for users. </p> </div> </div> <img src=/static/img/portfolio/hatty-boots/mock1.jpg> <a v-link="{path:\'/work/east-renfrewshire-golf-club\'}" class=navigate-project> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">East Ren Golf Club</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <section class="section section--home-canvas" id=homeCanvas transition=fade> <div class=welcome> <h1 class=welcome__heading>Jamal Habash,<br/>Computer Engineering & Society</h1> <p class=welcome__info> Hi. I am a final-year engineering student learning how to develop ADAS and Automated Driving systems. Currently a member of the McMaster Engineering EcoCar3 ADAS Team.</p> <a class="button button--primary welcome__button" v-link="{path:\'/work\'}">Explore work</a> <a class="button button--primary welcome__button" v-link="{path:\'/profile\'}">View profile</a> </div> </section> '
}, function(t) {
    t.exports = ' <div class="page page--inner page--two" transition=fade> <div class=page__wrapper> <h1>Profile</h1> <div class="rich-text rich-text--slender"> <p> I\'m a full-time web developer at <a href=http://torchbox.com>Torchbox</a>, specialising in front-end development. </p> <p> I\'ve had the pleasure of working with some great organisations, including <a v-link="{path:\'/work/recycle-now\'}">Recycle Now</a>, NHS Health Research Authority, <a v-link="{path:\'/work/blackstone-chambers\'}">Blackstone Chambers</a>, The Chartered Institute of Physiotheraphy, and <a href="https://shakespeareweek.org.uk">The Shakespeare Birthplace Trust.</a> </p> <p> I enjoy building complex web applications, leading front-end teams and consulting on client-side architecture. I also enjoy getting involved with smaller <a href="https://sii.im/playground/">side projects.</a> </p> <p> My experience spans <a href=http://artworking.uk>small</a>, <a href=http://kalexiko.com>medium</a> and <a href=http://torchbox.com>large agencies</a>, in addition to occasional <a v-link="{path:\'/work/the-cherington-practice\'}">freelance projects</a>. </p> <p> Browse some of my <a v-link="{path:\'/work\'}">work</a>, view my <a v-link="{path:\'/skills\'}">skills</a>, or <a href=mailto:hi@sii.im>get in touch</a>. </p> <p> You can also find me on <a href=https://twitter.com/siimonevans>Twitter</a>, <a href=https://linkedin.com/in/simonevans1>LinkedIn</a>, <a href=https://github.com/SimonDEvans>Github</a>, <a href=http://codepen.io/SimonEvans/ >CodePen</a> and <a href=https://www.instagram.com/siimonevans/ >Instagram</a>. </p> <br/> <a class="button button--primary welcome__button" v-link="{path:\'/skills\'}">Explore my skills</a> </div> </div> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>Recycle Now</h1> <a class=banner__credit href=http://torchbox.com>Agency: <span>Torchbox</span></a> <a class=banner__url href=http://www.recyclenow.com/recycleweek-episode-1>URL: <span>recyclenow.com/recycleweek</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/recycle-now/mock2.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Challenge</h3> <p> Recycle Now approached Torchbox to build a video-based microsite, in order to help promote Recycle Week 2016. With a tight deadline, it was important to maintain excellent communication with the rest of the team and work closely with the client. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/recycle-now/website.png> <img src=/static/img/portfolio/recycle-now/website3.png class=mobile> </div> <div class=page__wrapper> <div class=rich-text> <h3>Role</h3> <p> Building a custom HTML5 video player was the most difficult aspect of the project, and my role within the team was largely to advise on best practice for this, before implementation. In addition, I implemented a scalable CSS architecture to provide a robust and maintainable solution for the future. </p> </div> </div> <img src=/static/img/portfolio/recycle-now/mock1.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Method</h3> <p> Due to the repetitive nature of the episode pages, this project was an ideal candidate for BEM and reusable components - a more traditional method would\'ve been costly. Writing the necessary code for the HTML5 video player was a fun and educational experience, integrating with Vimeo as a host for the videos used within the campaign. </p> </div> </div> <a v-link="{path:\'/work/blackstone-chambers\'}" class=navigate-project> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">Blackstone Chambers</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <div class="page page--inner page--lfm" transition=fade> <div class=page__wrapper> <h1>Skills</h1> <div class="rich-text rich-text--slender"> <p> I estimate for, architect, build, optimise and launch client-side solutions that users love to interact with. </p> <p> I love practising effective processes, such as feature-driven development, Kanban, Scrum, and simpler day-to-day strategies like GTD. </p> <p> I can lead teams or just be part of them through technical direction, architecture advice, knowledge sharing and encouragement of team discussion. </p> <p> Here is a selection of relevant technologies that I have experience with: </p> <div class="grid grid--skills"> <div class="grid__item one-quarter tablet--one-whole"> <h3>Languages</h3> <ul> <li>CSS3 <span>(SCSS, LESS)</span></li> <li>HTML5 <span>(POSH)</span></li> <li>JavaScript <span>(ES6)</span></li> <li>PHP</li> <li>Python</li> </ul> </div><div class="grid__item one-quarter tablet--one-whole"> <h3>Methods &amp; tools</h3> <ul> <li>BEM, ITCSS, OOCSS</li> <li>Atomic design, <a href=http://patternlab.io/ >Pattern Lab</a></li> <li>NPM scripts, Webpack, Gulp</li> <li>Progressive Web Apps</li> <li>UX principles and accessibility</li> </ul> </div><div class="grid__item one-quarter tablet--one-whole"> <h3>Frameworks &amp; Libs</h3> <ul> <li>Drupal <span>(7/8)</span></li> <li>Django <a href=https://wagtail.io/ ><span>(Wagtail)</span></a></li> <li>jQuery, React <span>(Redux)</span>, Vue</li> <li>Twig, Jinja, Mustache</li> <li>Google Apps &amp; APIs</li> </ul> </div><div class="grid__item one-quarter tablet--one-whole"> <h3>Additional</h3> <ul> <li>Git, SVN</li> <li>UNIX server administration</li> <li>Vagrant, Composer, Drush</li> <li>Photoshop, Sketch</li> <li>Agile, Waterfall</li> </ul> </div> </div> <br/> <br/> <a class="button button--primary welcome__button" v-link="{path:\'/profile\'}">View my profile</a> </div> </div> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>The Cherington Practice</h1> <a class=banner__credit href=http://artworking.uk>Agency: <span>Artworking</span></a> <a class=banner__url href=http://thecheringtonpractice.co.uk>URL: <span>thecheringtonpractice.co.uk</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/TCP/mock2.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Challenge</h3> <p> The client required a slick, user-friendly and optimised site that would perform equally well for both desktop and mobile users. As a freelance project, it was vital that the code I delivered was well documented and easy for future developers to integrate with a CMS of their choosing. </p> </div> </div> <div class=portfolio-web-image> <img src=/static/img/portfolio/TCP/website.png> </div> <div class=page__wrapper> <div class=rich-text> <h3>Role</h3> <p> Working with Artworking\'s design team, I was asked to build a fully responsive website with excellent user interaction. With a tight deadline, it was important to communicate well with Artworking in order to handover a solution everyone was happy with. </p> </div> </div> <img src=/static/img/portfolio/TCP/mock1.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Method</h3> <p> I used a lightweight front-end base, with strong emphasis on modular CSS classes that would be easy to extend in the future. With a focus on mobile users, I achieved a delightful experience through hardware accelerated transitions and excellent site interaction. </p> </div> </div> <a v-link="{path:\'/work/2C-properties\'}" class=navigate-project> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">2C Properties</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>2C Properties</h1> <a class=banner__credit href=http://artworking.uk>Agency: <span>Artworking</span></a> <a class=banner__url href=http://2cproperties.com>URL: <span>2cproperties.com</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/2C/mock1.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Challenge</h3> <p> 2C Properties provide specialised student accommodation only in Bristol\'s finest areas, and required a website to reflect their business\' excellent reputation. With two key target user areas of student\'s parents and students themselves, it was important to deliver a website that looks professional but approachable. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/2C/website.png> <img src=/static/img/portfolio/2C/website2.png> </div> <div class=page__wrapper> <div class=rich-text> <h3>Role</h3> <p> The client chose a Wordpress-driven solution, and I worked alongside a Wordpress developer while also taking on some of the PHP work myself. Leading the client-facing side of the website, I worked on componentising the design before adding subtle animations and interactions that would delight users. </p> </div> </div> <img src=/static/img/portfolio/2C/mock2.jpg> <div class=page__wrapper> <div class=rich-text> <h3>Method</h3> <p> After building a strong front-end base, I added additional features through full-screen navigation menus, custom map styles and subtle animations. Using multiple SVGs across the website, I used SVG sprite maps for easier organisation and delivery of assets, in addition to the \'srcset\' attribute for optimised image delivery. </p> </div> </div> <a v-link="{path:\'/work/hatty-boots\'}" class=navigate-project> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">Hatty Boots</div> </div> </div> </a> </div> '
}, function(t) {
    t.exports = ' <div class="page page--inner page--three page--lfm" transition=fade> <div class=page__wrapper> <h1>Selected Work</h1> </div> <div class=""> <ul class=portfolio-list> <li class=portfolio-list__item> <a v-link="{path:\'/work/recycle-now\'}"> <div class=portfolio-list__item-name>Recycle Now</div> <div class=portfolio-list__item-role>Front-end Lead</div> <div class=portfolio-list__item-agency>Torchbox, 2016</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/blackstone-chambers\'}"> <div class=portfolio-list__item-name>Blackstone Chambers</div> <div class=portfolio-list__item-role>Front-end</div> <div class=portfolio-list__item-agency>Torchbox, 2016</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/wright-and-round\'}"> <div class=portfolio-list__item-name>Wright and Round</div> <div class=portfolio-list__item-role>Front-end Lead</div> <div class=portfolio-list__item-agency>Artworking, 2015</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/biasi\'}"> <div class=portfolio-list__item-name>Biasi UK</div> <div class=portfolio-list__item-role>Front-end</div> <div class=portfolio-list__item-agency>Kalexiko, 2014</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/the-cherington-practice\'}"> <div class=portfolio-list__item-name>The Cherington Practice</div> <div class=portfolio-list__item-role>Front-end Lead</div> <div class=portfolio-list__item-agency>Freelance, 2016</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/2C-properties\'}"> <div class=portfolio-list__item-name>2C Properties</div> <div class=portfolio-list__item-role>Front-end Lead</div> <div class=portfolio-list__item-agency>Artworking, 2015</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/hatty-boots\'}"> <div class=portfolio-list__item-name>Hatty Boots</div> <div class=portfolio-list__item-role>Front-end Lead</div> <div class=portfolio-list__item-agency>Artworking, 2015</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> <li class=portfolio-list__item> <a v-link="{path:\'/work/east-renfrewshire-golf-club\'}"> <div class=portfolio-list__item-name>The East Renfrewshire Golf Club</div> <div class=portfolio-list__item-role>Front-end Lead</div> <div class=portfolio-list__item-agency>Artworking, 2015</div> <div class=portfolio-list__item-view> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 223.413 223.413"><path d="M57.18 223.413l-5.956-6.137 108.7-105.566L51.225 6.127 57.18 0l115.01 111.71"></path> </svg> </div> </a> </li> </ul> </div> </div> '
}, function(t) {
    t.exports = ' <a class=project-back-button v-link="{path:\'/work\'}"> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 31.49 31.49"><path d="M21.205 5.007c-.43-.444-1.143-.444-1.587 0-.43.43-.43 1.143 0 1.57l8.047 8.048H1.11c-.618 0-1.11.493-1.11 1.112 0 .62.492 1.127 1.11 1.127h26.555l-8.047 8.032c-.43.444-.43 1.16 0 1.587.444.444 1.16.444 1.587 0l9.952-9.952c.444-.428.444-1.142 0-1.57l-9.952-9.953z"/></svg> </a> <div class=banner> <div class=wrapper> <h1 class=banner__heading>Wright and Round</h1> <a class=banner__credit href=http://artworking.uk>Agency: <span>Artworking</span></a> <a class=banner__url href=http://wrightandround.com>URL: <span>wrightandround.com</span></a> </div> </div> <div class="page page--inner page--inner-slender page--lfm" transition=fade> <img src=/static/img/portfolio/wright-and-round/mock1.jpg> <div class=page__wrapper data-name-hook=section-challenge> <div class=rich-text> <h3>Challenge</h3> <p> Wright &amp; Round, established in 1875, is one of the oldest publishing houses in brass banding and its catalogue carries in excess of 5,000 titles. At Artworking, we were tasked with a total website rebuild, with key emphasis on a strong mobile presence and excellent UX. </p> </div> </div> <div class="portfolio-web-image portfolio-web-image--double"> <img src=/static/img/portfolio/wright-and-round/website.png> <img src=/static/img/portfolio/wright-and-round/website3.png> </div> <div class=page__wrapper data-name-hook=section-role> <div class=rich-text> <h3>Role</h3> <p> I was positioned as Front-end Lead, in addition to tackling UX and user interaction alongside a senior designer. Integrating with a Symfony-powered website for the first time, I had a great opportunity to improve my PHP skills. </p> </div> </div> <img src=/static/img/portfolio/wright-and-round/mock2.jpg> <div class=page__wrapper data-name-hook=section-method> <div class=rich-text> <h3>Method</h3> <p> With mobile users in mind, I provided some responsive magic to ensure the table layouts render nicely on all devices. Using BEM, ITCSS and OOCSS, I crafted a robust, maintainable and scalable codebase, while also providing an enjoyable experience for users. </p> </div> </div> <a v-link="{path:\'/work/biasi\'}" class=navigate-project data-name-hook=section-next> <div class=navigate-project__inner> <div class=navigate-project__info> <span>Navigate to next project</span> <div class="button button--primary navigate-project__button">Biasi</div> </div> </div> </a> </div> '
}, function(t, e, n) {
    var i, r, o = {};
    r = n(5), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(6), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(7), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    i = n(4), r = n(8), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(9), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(10), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(11), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(12), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(13), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(14), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(15), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(16), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(17), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(18), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(19), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t, e, n) {
    var i, r, o = {};
    r = n(20), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var s = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    r && (s.template = r), s.computed || (s.computed = {}), Object.keys(o).forEach(function(t) {
        var e = o[t];
        s.computed[t] = function() {
            return e
        }
    })
}, function(t) {
    ! function(e, n) {
        t.exports = n()
    }(this, function() {
        "use strict";

        function t(t, e, n) {
            this.path = t, this.matcher = e, this.delegate = n
        }

        function e(t) {
            this.routes = {}, this.children = {}, this.target = t
        }

        function n(e, i, r) {
            return function(o, s) {
                var a = e + o;
                return s ? void s(n(a, i, r)) : new t(e + o, i, r)
            }
        }

        function i(t, e, n) {
            for (var i = 0, r = 0, o = t.length; o > r; r++) i += t[r].path.length;
            e = e.substr(i);
            var s = {
                path: e,
                handler: n
            };
            t.push(s)
        }

        function r(t, e, n, o) {
            var s = e.routes;
            for (var a in s)
                if (s.hasOwnProperty(a)) {
                    var l = t.slice();
                    i(l, a, s[a]), e.children[a] ? r(l, e.children[a], n, o) : n.call(o, l)
                }
        }

        function o(t, i) {
            var o = new e;
            t(n("", o, this.delegate)), r([], o, function(t) {
                i ? i(this, t) : this.add(t)
            }, this)
        }

        function s(t) {
            z || "undefined" == typeof console || console.error("[vue-router] " + t)
        }

        function a(t, e) {
            try {
                return e ? decodeURIComponent(t) : decodeURI(t)
            } catch (n) {
                s("malformed URI" + (e ? " component: " : ": ") + t)
            }
        }

        function l(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function c(t) {
            this.string = t
        }

        function u(t) {
            this.name = t
        }

        function h(t) {
            this.name = t
        }

        function p() {}

        function f(t, e, n) {
            "/" === t.charAt(0) && (t = t.substr(1));
            var i = t.split("/"),
                r = [];
            n.val = "";
            for (var o = 0, s = i.length; s > o; o++) {
                var a, l = i[o];
                (a = l.match(/^:([^\/]+)$/)) ? (r.push(new u(a[1])), e.push(a[1]), n.val += "3") : (a = l.match(/^\*([^\/]+)$/)) ? (r.push(new h(a[1])), n.val += "2", e.push(a[1])) : "" === l ? (r.push(new p), n.val += "1") : (r.push(new c(l)), n.val += "4")
            }
            return n.val = +n.val, r
        }

        function d(t) {
            this.charSpec = t, this.nextStates = []
        }

        function v(t) {
            return t.sort(function(t, e) {
                return e.specificity.val - t.specificity.val
            })
        }

        function g(t, e) {
            for (var n = [], i = 0, r = t.length; r > i; i++) {
                var o = t[i];
                n = n.concat(o.match(e))
            }
            return n
        }

        function m(t) {
            this.queryParams = t || {}
        }

        function y(t, e, n) {
            for (var i = t.handlers, r = t.regex, o = e.match(r), s = 1, a = new m(n), l = 0, c = i.length; c > l; l++) {
                for (var u = i[l], h = u.names, p = {}, f = 0, d = h.length; d > f; f++) p[h[f]] = o[s++];
                a.push({
                    handler: u.handler,
                    params: p,
                    isDynamic: !!h.length
                })
            }
            return a
        }

        function b(t, e) {
            return e.eachChar(function(e) {
                t = t.put(e)
            }), t
        }

        function _(t) {
            return t = t.replace(/\+/gm, "%20"), a(t, !0)
        }

        function w(t) {
            "undefined" != typeof console && console.error("[vue-router] " + t)
        }

        function x(t, e, n) {
            var i = t.match(/(\?.*)$/);
            if (i && (i = i[1], t = t.slice(0, -i.length)), "?" === e.charAt(0)) return t + e;
            var r = t.split("/");
            n && r[r.length - 1] || r.pop();
            for (var o = e.replace(/^\//, "").split("/"), s = 0; s < o.length; s++) {
                var a = o[s];
                "." !== a && (".." === a ? r.pop() : r.push(a))
            }
            return "" !== r[0] && r.unshift(""), r.join("/")
        }

        function k(t) {
            return t && "function" == typeof t.then
        }

        function C(t, e) {
            var n = t && (t.$options || t.options);
            return n && n.route && n.route[e]
        }

        function T(t, e) {
            Q ? Q.$options.components._ = t.component : Q = {
                resolve: J.Vue.prototype._resolveComponent,
                $options: {
                    components: {
                        _: t.component
                    }
                }
            }, Q.resolve("_", function(n) {
                t.component = n, e(n)
            })
        }

        function A(t, e, n) {
            return void 0 === e && (e = {}), t = t.replace(/:([^\/]+)/g, function(n, i) {
                var r = e[i];
                return r || w('param "' + i + '" not found when generating path for "' + t + '" with params ' + JSON.stringify(e)), r || ""
            }), n && (t += G(n)), t
        }

        function j(t, e, n) {
            var i = t.childVM;
            if (!i || !e) return !1;
            if (t.Component !== e.component) return !1;
            var r = C(i, "canReuse");
            return "boolean" == typeof r ? r : !r || r.call(i, {
                to: n.to,
                from: n.from
            })
        }

        function $(t, e, n) {
            var i = t.childVM,
                r = C(i, "canDeactivate");
            r ? e.callHook(r, i, n, {
                expectBoolean: !0
            }) : n()
        }

        function E(t, e, n) {
            T(t, function(t) {
                if (!e.aborted) {
                    var i = C(t, "canActivate");
                    i ? e.callHook(i, null, n, {
                        expectBoolean: !0
                    }) : n()
                }
            })
        }

        function S(t, e, n) {
            var i = t.childVM,
                r = C(i, "deactivate");
            r ? e.callHooks(r, i, n) : n()
        }

        function N(t, e, n, i, r) {
            var o = e.activateQueue[n];
            if (!o) return R(t), t._bound && t.setComponent(null), void(i && i());
            var s = t.Component = o.component,
                a = C(s, "activate"),
                l = C(s, "data"),
                c = C(s, "waitForData");
            t.depth = n, t.activated = !1;
            var u = void 0,
                h = !(!l || c);
            if (r = r && t.childVM && t.childVM.constructor === s) u = t.childVM, u.$loadingRouteData = h;
            else if (R(t), t.unbuild(!0), u = t.build({
                    _meta: {
                        $loadingRouteData: h
                    },
                    created: function() {
                        this._routerView = t
                    }
                }), t.keepAlive) {
                u.$loadingRouteData = h;
                var p = u._keepAliveRouterView;
                p && (t.childView = p, u._keepAliveRouterView = null)
            }
            var f = function() {
                    u.$destroy()
                },
                d = function() {
                    if (r) return void(i && i());
                    var n = e.router;
                    n._rendered || n._transitionOnLoad ? t.transition(u) : (t.setCurrent ? t.setCurrent(u) : t.childVM = u, u.$before(t.anchor, null, !1)), i && i()
                },
                v = function() {
                    t.childView && N(t.childView, e, n + 1, null, r || t.keepAlive), d()
                },
                g = function() {
                    t.activated = !0, l && c ? D(u, e, l, v, f) : (l && D(u, e, l), v())
                };
            a ? e.callHooks(a, u, g, {
                cleanup: f,
                postActivate: !0
            }) : g()
        }

        function O(t, e) {
            var n = t.childVM,
                i = C(n, "data");
            i && D(n, e, i)
        }

        function D(t, e, n, i, r) {
            t.$loadingRouteData = !0, e.callHooks(n, t, function() {
                t.$loadingRouteData = !1, t.$emit("route-data-loaded", t), i && i()
            }, {
                cleanup: r,
                postActivate: !0,
                processData: function(e) {
                    var n = [];
                    return M(e) && Object.keys(e).forEach(function(i) {
                        var r = e[i];
                        k(r) ? n.push(r.then(function(e) {
                            t.$set(i, e)
                        })) : t.$set(i, r)
                    }), n.length ? n[0].constructor.all(n) : void 0
                }
            })
        }

        function R(t) {
            t.keepAlive && t.childVM && t.childView && (t.childVM._keepAliveRouterView = t.childView), t.childView = null
        }

        function M(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function L(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function P(t) {
            return t ? Array.prototype.slice.call(t) : []
        }

        function H(t) {
            var e = t.util,
                n = e.extend,
                i = e.isArray,
                r = e.defineReactive,
                o = t.prototype._init;
            t.prototype._init = function(t) {
                t = t || {};
                var e = t._parent || t.parent || this,
                    n = e.$router,
                    i = e.$route;
                n && (this.$router = n, n._children.push(this), this._defineMeta ? this._defineMeta("$route", i) : r(this, "$route", i)), o.call(this, t)
            };
            var s = t.prototype._destroy;
            t.prototype._destroy = function() {
                !this._isBeingDestroyed && this.$router && this.$router._children.$remove(this), s.apply(this, arguments)
            };
            var a = t.config.optionMergeStrategies,
                l = /^(data|activate|deactivate)$/;
            a && (a.route = function(t, e) {
                if (!e) return t;
                if (!t) return e;
                var r = {};
                n(r, t);
                for (var o in e) {
                    var s = r[o],
                        a = e[o];
                    r[o] = s && l.test(o) ? (i(s) ? s : [s]).concat(a) : a
                }
                return r
            })
        }

        function F(t) {
            var e = t.util,
                n = t.directive("_component") || t.internalDirectives.component,
                i = e.extend({}, n);
            e.extend(i, {
                _isRouterView: !0,
                bind: function() {
                    var t = this.vm.$route;
                    if (!t) return void w("<router-view> can only be used inside a router-enabled app.");
                    this._isDynamicLiteral = !0, n.bind.call(this);
                    for (var e = void 0, i = this.vm; i;) {
                        if (i._routerView) {
                            e = i._routerView;
                            break
                        }
                        i = i.$parent
                    }
                    if (e) this.parentView = e, e.childView = this;
                    else {
                        var r = t.router;
                        r._rootView = this
                    }
                    var o = t.router._currentTransition;
                    if (!e && o.done || e && e.activated) {
                        var s = e ? e.depth + 1 : 0;
                        N(this, o, s)
                    }
                },
                unbind: function() {
                    this.parentView && (this.parentView.childView = null), n.unbind.call(this)
                }
            }), t.elementDirective("router-view", i)
        }

        function I(t) {
            function e(t) {
                return t.protocol === location.protocol && t.hostname === location.hostname && t.port === location.port
            }

            function n(t, e, n) {
                if (e = e.trim(), -1 === e.indexOf(" ")) return void n(t, e);
                for (var i = e.split(/\s+/), r = 0, o = i.length; o > r; r++) n(t, i[r])
            }
            var i = t.util,
                r = i.bind,
                o = i.isObject,
                s = i.addClass,
                a = i.removeClass,
                l = t.directive("on").priority,
                c = "__vue-router-link-update__",
                u = 0;
            t.directive("link-active", {
                priority: 9999,
                bind: function() {
                    for (var t = this, e = u++ + "", n = this.el.querySelectorAll("[v-link]"), i = 0, r = n.length; r > i; i++) {
                        var o = n[i],
                            s = o.getAttribute(c),
                            a = s ? s + "," + e : e;
                        o.setAttribute(c, a)
                    }
                    this.vm.$on(c, this.cb = function(n, i) {
                        n.activeIds.indexOf(e) > -1 && n.updateClasses(i, t.el)
                    })
                },
                unbind: function() {
                    this.vm.$off(c, this.cb)
                }
            }), t.directive("link", {
                priority: l - 2,
                bind: function() {
                    var t = this.vm;
                    if (!t.$route) return void w("v-link can only be used inside a router-enabled app.");
                    this.router = t.$route.router, this.unwatch = t.$watch("$route", r(this.onRouteUpdate, this));
                    var e = this.el.getAttribute(c);
                    e && (this.el.removeAttribute(c), this.activeIds = e.split(",")), "A" === this.el.tagName && "_blank" === this.el.getAttribute("target") || (this.handler = r(this.onClick, this), this.el.addEventListener("click", this.handler))
                },
                update: function(t) {
                    this.target = t, o(t) && (this.append = t.append, this.exact = t.exact, this.prevActiveClass = this.activeClass, this.activeClass = t.activeClass), this.onRouteUpdate(this.vm.$route)
                },
                onClick: function(t) {
                    if (!(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || 0 !== t.button)) {
                        var n = this.target;
                        if (n) t.preventDefault(), this.router.go(n);
                        else {
                            for (var i = t.target;
                                "A" !== i.tagName && i !== this.el;) i = i.parentNode;
                            if ("A" === i.tagName && e(i)) {
                                t.preventDefault();
                                var r = i.pathname;
                                this.router.history.root && (r = r.replace(this.router.history.rootRE, "")), this.router.go({
                                    path: r,
                                    replace: n && n.replace,
                                    append: n && n.append
                                })
                            }
                        }
                    }
                },
                onRouteUpdate: function(t) {
                    var e = this.router.stringifyPath(this.target);
                    this.path !== e && (this.path = e, this.updateActiveMatch(), this.updateHref()), this.activeIds ? this.vm.$emit(c, this, t.path) : this.updateClasses(t.path, this.el)
                },
                updateActiveMatch: function() {
                    this.activeRE = this.path && !this.exact ? RegExp("^" + this.path.replace(/\/$/, "").replace(se, "").replace(oe, "\\$&") + "(\\/|$)") : null
                },
                updateHref: function() {
                    if ("A" === this.el.tagName) {
                        var t = this.path,
                            e = this.router,
                            n = "/" === t.charAt(0),
                            i = t && ("hash" === e.mode || n) ? e.history.formatPath(t, this.append) : t;
                        i ? this.el.href = i : this.el.removeAttribute("href")
                    }
                },
                updateClasses: function(t, e) {
                    var i = this.activeClass || this.router._linkActiveClass;
                    this.prevActiveClass && this.prevActiveClass !== i && n(e, this.prevActiveClass, a);
                    var r = this.path.replace(se, "");
                    t = t.replace(se, ""), this.exact ? r === t || "/" !== r.charAt(r.length - 1) && r === t.replace(re, "") ? n(e, i, s) : n(e, i, a) : this.activeRE && this.activeRE.test(t) ? n(e, i, s) : n(e, i, a)
                },
                unbind: function() {
                    this.el.removeEventListener("click", this.handler), this.unwatch && this.unwatch()
                }
            })
        }

        function q(t, e) {
            var n = e.component;
            le.util.isPlainObject(n) && (n = e.component = le.extend(n)), "function" != typeof n && (e.component = null, w('invalid component for route "' + t + '".'))
        }
        var B = {};
        B.classCallCheck = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, t.prototype = {
            to: function(t, e) {
                var n = this.delegate;
                if (n && n.willAddRoute && (t = n.willAddRoute(this.matcher.target, t)), this.matcher.add(this.path, t), e) {
                    if (0 === e.length) throw Error("You must have an argument in the function passed to `to`");
                    this.matcher.addChild(this.path, t, e, this.delegate)
                }
                return this
            }
        }, e.prototype = {
            add: function(t, e) {
                this.routes[t] = e
            },
            addChild: function(t, i, r, o) {
                var s = new e(i);
                this.children[t] = s;
                var a = n(t, s, o);
                o && o.contextEntered && o.contextEntered(i, a), r(a)
            }
        };
        var W = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"],
            V = RegExp("(\\" + W.join("|\\") + ")", "g"),
            z = !1;
        c.prototype = {
            eachChar: function(t) {
                for (var e, n = this.string, i = 0, r = n.length; r > i; i++) e = n.charAt(i), t({
                    validChars: e
                })
            },
            regex: function() {
                return this.string.replace(V, "\\$1")
            },
            generate: function() {
                return this.string
            }
        }, u.prototype = {
            eachChar: function(t) {
                t({
                    invalidChars: "/",
                    repeat: !0
                })
            },
            regex: function() {
                return "([^/]+)"
            },
            generate: function(t) {
                var e = t[this.name];
                return null == e ? ":" + this.name : e
            }
        }, h.prototype = {
            eachChar: function(t) {
                t({
                    invalidChars: "",
                    repeat: !0
                })
            },
            regex: function() {
                return "(.+)"
            },
            generate: function(t) {
                var e = t[this.name];
                return null == e ? ":" + this.name : e
            }
        }, p.prototype = {
            eachChar: function() {},
            regex: function() {
                return ""
            },
            generate: function() {
                return ""
            }
        }, d.prototype = {
            get: function(t) {
                for (var e = this.nextStates, n = 0, i = e.length; i > n; n++) {
                    var r = e[n],
                        o = r.charSpec.validChars === t.validChars;
                    if (o = o && r.charSpec.invalidChars === t.invalidChars) return r
                }
            },
            put: function(t) {
                var e;
                return (e = this.get(t)) ? e : (e = new d(t), this.nextStates.push(e), t.repeat && e.nextStates.push(e), e)
            },
            match: function(t) {
                for (var e, n, i, r = this.nextStates, o = [], s = 0, a = r.length; a > s; s++) e = r[s], n = e.charSpec, void 0 !== (i = n.validChars) ? -1 !== i.indexOf(t) && o.push(e) : void 0 !== (i = n.invalidChars) && -1 === i.indexOf(t) && o.push(e);
                return o
            }
        };
        var U = Object.create || function(t) {
            function e() {}
            return e.prototype = t, new e
        };
        m.prototype = U({
            splice: Array.prototype.splice,
            slice: Array.prototype.slice,
            push: Array.prototype.push,
            length: 0,
            queryParams: null
        });
        var X = function() {
            this.rootState = new d, this.names = {}
        };
        X.prototype = {
            add: function(t, e) {
                for (var n, i = this.rootState, r = "^", o = {}, s = [], a = [], l = !0, c = 0, u = t.length; u > c; c++) {
                    var h = t[c],
                        d = [],
                        v = f(h.path, d, o);
                    a = a.concat(v);
                    for (var g = 0, m = v.length; m > g; g++) {
                        var y = v[g];
                        y instanceof p || (l = !1, i = i.put({
                            validChars: "/"
                        }), r += "/", i = b(i, y), r += y.regex())
                    }
                    var _ = {
                        handler: h.handler,
                        names: d
                    };
                    s.push(_)
                }
                l && (i = i.put({
                    validChars: "/"
                }), r += "/"), i.handlers = s, i.regex = RegExp(r + "$"), i.specificity = o, (n = e && e.as) && (this.names[n] = {
                    segments: a,
                    handlers: s
                })
            },
            handlersFor: function(t) {
                var e = this.names[t],
                    n = [];
                if (!e) throw Error("There is no route named " + t);
                for (var i = 0, r = e.handlers.length; r > i; i++) n.push(e.handlers[i]);
                return n
            },
            hasRoute: function(t) {
                return !!this.names[t]
            },
            generate: function(t, e) {
                var n = this.names[t],
                    i = "";
                if (!n) throw Error("There is no route named " + t);
                for (var r = n.segments, o = 0, s = r.length; s > o; o++) {
                    var a = r[o];
                    a instanceof p || (i += "/", i += a.generate(e))
                }
                return "/" !== i.charAt(0) && (i = "/" + i), e && e.queryParams && (i += this.generateQueryString(e.queryParams)), i
            },
            generateQueryString: function(t) {
                var e = [],
                    n = [];
                for (var i in t) t.hasOwnProperty(i) && n.push(i);
                n.sort();
                for (var r = 0, o = n.length; o > r; r++) {
                    i = n[r];
                    var s = t[i];
                    if (null != s) {
                        var a = encodeURIComponent(i);
                        if (l(s))
                            for (var c = 0, u = s.length; u > c; c++) {
                                var h = i + "[]=" + encodeURIComponent(s[c]);
                                e.push(h)
                            } else a += "=" + encodeURIComponent(s), e.push(a)
                    }
                }
                return 0 === e.length ? "" : "?" + e.join("&")
            },
            parseQueryString: function(t) {
                for (var e = t.split("&"), n = {}, i = 0; i < e.length; i++) {
                    var r, o = e[i].split("="),
                        s = _(o[0]),
                        a = s.length,
                        l = !1;
                    1 === o.length ? r = "true" : (a > 2 && "[]" === s.slice(a - 2) && (l = !0, s = s.slice(0, a - 2), n[s] || (n[s] = [])), r = o[1] ? _(o[1]) : ""), l ? n[s].push(r) : n[s] = r
                }
                return n
            },
            recognize: function(t, e) {
                z = e;
                var n, i, r, o, s = [this.rootState],
                    l = {},
                    c = !1;
                if (o = t.indexOf("?"), -1 !== o) {
                    var u = t.substr(o + 1, t.length);
                    t = t.substr(0, o), u && (l = this.parseQueryString(u))
                }
                if (t = a(t)) {
                    for ("/" !== t.charAt(0) && (t = "/" + t), n = t.length, n > 1 && "/" === t.charAt(n - 1) && (t = t.substr(0, n - 1), c = !0), i = 0, r = t.length; r > i && (s = g(s, t.charAt(i)), s.length); i++);
                    var h = [];
                    for (i = 0, r = s.length; r > i; i++) s[i].handlers && h.push(s[i]);
                    s = v(h);
                    var p = h[0];
                    return p && p.handlers ? (c && "(.+)$" === p.regex.source.slice(-5) && (t += "/"), y(p, t, l)) : void 0
                }
            }
        }, X.prototype.map = o;
        var G = X.prototype.generateQueryString,
            J = {},
            Q = void 0,
            Y = /#.*$/,
            K = function() {
                function t(e) {
                    var n = e.root,
                        i = e.onChange;
                    B.classCallCheck(this, t), n && "/" !== n ? ("/" !== n.charAt(0) && (n = "/" + n), this.root = n.replace(/\/$/, ""), this.rootRE = RegExp("^\\" + this.root)) : this.root = null, this.onChange = i;
                    var r = document.querySelector("base");
                    this.base = r && r.getAttribute("href")
                }
                return t.prototype.start = function() {
                    var t = this;
                    this.listener = function(e) {
                        var n = location.pathname + location.search;
                        t.root && (n = n.replace(t.rootRE, "")), t.onChange(n, e && e.state, location.hash)
                    }, window.addEventListener("popstate", this.listener), this.listener()
                }, t.prototype.stop = function() {
                    window.removeEventListener("popstate", this.listener)
                }, t.prototype.go = function(t, e, n) {
                    var i = this.formatPath(t, n);
                    e ? history.replaceState({}, "", i) : (history.replaceState({
                        pos: {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }
                    }, "", location.href), history.pushState({}, "", i));
                    var r = t.match(Y),
                        o = r && r[0];
                    t = i.replace(Y, "").replace(this.rootRE, ""), this.onChange(t, null, o)
                }, t.prototype.formatPath = function(t, e) {
                    return "/" === t.charAt(0) ? this.root ? this.root + "/" + t.replace(/^\//, "") : t : x(this.base || location.pathname, t, e)
                }, t
            }(),
            Z = function() {
                function t(e) {
                    var n = e.hashbang,
                        i = e.onChange;
                    B.classCallCheck(this, t), this.hashbang = n, this.onChange = i
                }
                return t.prototype.start = function() {
                    var t = this;
                    this.listener = function() {
                        var e = location.hash,
                            n = e.replace(/^#!?/, "");
                        "/" !== n.charAt(0) && (n = "/" + n);
                        var i = t.formatPath(n);
                        if (i !== e) return void location.replace(i);
                        var r = location.search && e.indexOf("?") > -1 ? "&" + location.search.slice(1) : location.search;
                        t.onChange(e.replace(/^#!?/, "") + r)
                    }, window.addEventListener("hashchange", this.listener), this.listener()
                }, t.prototype.stop = function() {
                    window.removeEventListener("hashchange", this.listener)
                }, t.prototype.go = function(t, e, n) {
                    t = this.formatPath(t, n), e ? location.replace(t) : location.hash = t
                }, t.prototype.formatPath = function(t, e) {
                    var n = "/" === t.charAt(0),
                        i = "#" + (this.hashbang ? "!" : "");
                    return n ? i + t : i + x(location.hash.replace(/^#!?/, ""), t, e)
                }, t
            }(),
            te = function() {
                function t(e) {
                    var n = e.onChange;
                    B.classCallCheck(this, t), this.onChange = n, this.currentPath = "/"
                }
                return t.prototype.start = function() {
                    this.onChange("/")
                }, t.prototype.stop = function() {}, t.prototype.go = function(t, e, n) {
                    t = this.currentPath = this.formatPath(t, n), this.onChange(t)
                }, t.prototype.formatPath = function(t, e) {
                    return "/" === t.charAt(0) ? t : x(this.currentPath, t, e)
                }, t
            }(),
            ee = function() {
                function t(e, n, i) {
                    B.classCallCheck(this, t), this.router = e, this.to = n, this.from = i, this.next = null, this.aborted = !1, this.done = !1
                }
                return t.prototype.abort = function() {
                    if (!this.aborted) {
                        this.aborted = !0;
                        var t = !this.from.path && "/" === this.to.path;
                        t || this.router.replace(this.from.path || "/")
                    }
                }, t.prototype.redirect = function(t) {
                    this.aborted || (this.aborted = !0, "string" == typeof t ? t = A(t, this.to.params, this.to.query) : (t.params = t.params || this.to.params, t.query = t.query || this.to.query), this.router.replace(t))
                }, t.prototype.start = function(t) {
                    for (var e = this, n = [], i = this.router._rootView; i;) n.unshift(i), i = i.childView;
                    var r = n.slice().reverse(),
                        o = this.activateQueue = P(this.to.matched).map(function(t) {
                            return t.handler
                        }),
                        s = void 0,
                        a = void 0;
                    for (s = 0; s < r.length && j(r[s], o[s], e); s++);
                    s > 0 && (a = r.slice(0, s), n = r.slice(s).reverse(), o = o.slice(s)), e.runQueue(n, $, function() {
                        e.runQueue(o, E, function() {
                            e.runQueue(n, S, function() {
                                if (e.router._onTransitionValidated(e), a && a.forEach(function(t) {
                                        return O(t, e)
                                    }), n.length) {
                                    var i = n[n.length - 1],
                                        r = a ? a.length : 0;
                                    N(i, e, r, t)
                                } else t()
                            })
                        })
                    })
                }, t.prototype.runQueue = function(t, e, n) {
                    function i(o) {
                        o < t.length ? e(t[o], r, function() {
                            i(o + 1)
                        }) : n()
                    }
                    var r = this;
                    i(0)
                }, t.prototype.callHook = function(t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = i.expectBoolean,
                        o = void 0 !== r && r,
                        s = i.postActivate,
                        a = void 0 !== s && s,
                        l = i.processData,
                        c = i.cleanup,
                        u = this,
                        h = !1,
                        p = function() {
                            c && c(), u.abort()
                        },
                        f = function(t) {
                            if (a ? v() : p(), t && !u.router._suppress) throw w("Uncaught error during transition: "), t instanceof Error ? t : Error(t)
                        },
                        d = function(t) {
                            try {
                                f(t)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                        },
                        v = function() {
                            return h ? void w("transition.next() should be called only once.") : (h = !0, u.aborted ? void(c && c()) : void(n && n()))
                        },
                        g = function(e) {
                            "boolean" == typeof e ? e ? v() : p() : k(e) ? e.then(function(t) {
                                t ? v() : p()
                            }, d) : t.length || v()
                        },
                        m = function(t) {
                            var e = void 0;
                            try {
                                e = l(t)
                            } catch (t) {
                                return f(t)
                            }
                            k(e) ? e.then(v, d) : v()
                        },
                        y = {
                            to: u.to,
                            from: u.from,
                            abort: p,
                            next: l ? m : v,
                            redirect: function() {
                                u.redirect.apply(u, arguments)
                            }
                        },
                        b = void 0;
                    try {
                        b = t.call(e, y)
                    } catch (t) {
                        return f(t)
                    }
                    o ? g(b) : k(b) ? l ? b.then(m, d) : b.then(v, d) : l && L(b) ? m(b) : t.length || v()
                }, t.prototype.callHooks = function(t, e, n, i) {
                    var r = this;
                    Array.isArray(t) ? this.runQueue(t, function(t, n, o) {
                        r.aborted || r.callHook(t, e, o, i)
                    }, n) : this.callHook(t, e, n, i)
                }, t
            }(),
            ne = /^(component|subRoutes|fullPath)$/,
            ie = function ue(t, e) {
                var n = this;
                B.classCallCheck(this, ue);
                var i = e._recognizer.recognize(t);
                i && ([].forEach.call(i, function(t) {
                    for (var e in t.handler) ne.test(e) || (n[e] = t.handler[e])
                }), this.query = i.queryParams, this.params = [].reduce.call(i, function(t, e) {
                    if (e.params)
                        for (var n in e.params) t[n] = e.params[n];
                    return t
                }, {})), this.path = t, this.matched = i || e._notFoundHandler, Object.defineProperty(this, "router", {
                    enumerable: !1,
                    value: e
                }), Object.freeze(this)
            },
            re = /\/$/,
            oe = /[-.*+?^${}()|[\]\/\\]/g,
            se = /\?.*$/,
            ae = {
                "abstract": te,
                hash: Z,
                html5: K
            },
            le = void 0,
            ce = function() {
                function t() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = n.hashbang,
                        r = void 0 === i || i,
                        o = n.abstract,
                        s = void 0 !== o && o,
                        a = n.history,
                        l = void 0 !== a && a,
                        c = n.saveScrollPosition,
                        u = void 0 !== c && c,
                        h = n.transitionOnLoad,
                        p = void 0 !== h && h,
                        f = n.suppressTransitionError,
                        d = void 0 !== f && f,
                        v = n.root,
                        g = void 0 === v ? null : v,
                        m = n.linkActiveClass,
                        y = void 0 === m ? "v-link-active" : m;
                    if (B.classCallCheck(this, t), !t.installed) throw Error("Please install the Router with Vue.use() before creating an instance.");
                    this.app = null, this._children = [], this._recognizer = new X, this._guardRecognizer = new X, this._started = !1, this._startCb = null, this._currentRoute = {}, this._currentTransition = null, this._previousTransition = null, this._notFoundHandler = null, this._notFoundRedirect = null, this._beforeEachHooks = [], this._afterEachHooks = [], this._rendered = !1, this._transitionOnLoad = p, this._root = g, this._abstract = s, this._hashbang = r;
                    var b = "undefined" != typeof window && window.history && window.history.pushState;
                    this._history = l && b, this._historyFallback = l && !b;
                    var _ = le.util.inBrowser;
                    this.mode = !_ || this._abstract ? "abstract" : this._history ? "html5" : "hash";
                    var w = ae[this.mode];
                    this.history = new w({
                        root: g,
                        hashbang: this._hashbang,
                        onChange: function(t, n, i) {
                            e._match(t, n, i)
                        }
                    }), this._saveScrollPosition = u, this._linkActiveClass = y, this._suppress = d
                }
                return t.prototype.map = function(t) {
                    for (var e in t) this.on(e, t[e]);
                    return this
                }, t.prototype.on = function(t, e) {
                    return "*" === t ? this._notFound(e) : this._addRoute(t, e, []), this
                }, t.prototype.redirect = function(t) {
                    for (var e in t) this._addRedirect(e, t[e]);
                    return this
                }, t.prototype.alias = function(t) {
                    for (var e in t) this._addAlias(e, t[e]);
                    return this
                }, t.prototype.beforeEach = function(t) {
                    return this._beforeEachHooks.push(t), this
                }, t.prototype.afterEach = function(t) {
                    return this._afterEachHooks.push(t), this
                }, t.prototype.go = function(t) {
                    var e = !1,
                        n = !1;
                    le.util.isObject(t) && (e = t.replace, n = t.append), t = this.stringifyPath(t), t && this.history.go(t, e, n)
                }, t.prototype.replace = function(t) {
                    "string" == typeof t && (t = {
                        path: t
                    }), t.replace = !0, this.go(t)
                }, t.prototype.start = function(t, e, n) {
                    if (this._started) return void w("already started.");
                    if (this._started = !0, this._startCb = n, !this.app) {
                        if (!t || !e) throw Error("Must start vue-router with a component and a root container.");
                        if (t instanceof le) throw Error("Must start vue-router with a component, not a Vue instance.");
                        this._appContainer = e;
                        var i = this._appConstructor = "function" == typeof t ? t : le.extend(t);
                        i.options.name = i.options.name || "RouterApp"
                    }
                    if (this._historyFallback) {
                        var r = window.location,
                            o = new K({
                                root: this._root
                            }),
                            s = o.root ? r.pathname.replace(o.rootRE, "") : r.pathname;
                        if (s && "/" !== s) return void r.assign((o.root || "") + "/" + this.history.formatPath(s) + r.search)
                    }
                    this.history.start()
                }, t.prototype.stop = function() {
                    this.history.stop(), this._started = !1
                }, t.prototype.stringifyPath = function(t) {
                    var e = "";
                    if (t && "object" == typeof t) {
                        if (t.name) {
                            var n = le.util.extend,
                                i = this._currentTransition && this._currentTransition.to.params,
                                r = t.params || {},
                                o = i ? n(n({}, i), r) : r;
                            e = encodeURI(this._recognizer.generate(t.name, o))
                        } else t.path && (e = encodeURI(t.path));
                        if (t.query) {
                            var s = this._recognizer.generateQueryString(t.query);
                            e += e.indexOf("?") > -1 ? "&" + s.slice(1) : s
                        }
                    } else e = encodeURI(t ? t + "" : "");
                    return e
                }, t.prototype._addRoute = function(t, e, n) {
                    if (q(t, e), e.path = t, e.fullPath = (n.reduce(function(t, e) {
                            return t + e.path
                        }, "") + t).replace("//", "/"), n.push({
                            path: t,
                            handler: e
                        }), this._recognizer.add(n, {
                            as: e.name
                        }), e.subRoutes)
                        for (var i in e.subRoutes) this._addRoute(i, e.subRoutes[i], n.slice())
                }, t.prototype._notFound = function(t) {
                    q("*", t), this._notFoundHandler = [{
                        handler: t
                    }]
                }, t.prototype._addRedirect = function(t, e) {
                    "*" === t ? this._notFoundRedirect = e : this._addGuard(t, e, this.replace)
                }, t.prototype._addAlias = function(t, e) {
                    this._addGuard(t, e, this._match)
                }, t.prototype._addGuard = function(t, e, n) {
                    var i = this;
                    this._guardRecognizer.add([{
                        path: t,
                        handler: function(t, r) {
                            var o = A(e, t.params, r);
                            n.call(i, o)
                        }
                    }])
                }, t.prototype._checkGuard = function(t) {
                    var e = this._guardRecognizer.recognize(t, !0);
                    return e ? (e[0].handler(e[0], e.queryParams), !0) : this._notFoundRedirect && (e = this._recognizer.recognize(t), !e) ? (this.replace(this._notFoundRedirect), !0) : void 0
                }, t.prototype._match = function(t, e, n) {
                    var i = this;
                    if (!this._checkGuard(t)) {
                        var r = this._currentRoute,
                            o = this._currentTransition;
                        if (o) {
                            if (o.to.path === t) return;
                            if (r.path === t) return o.aborted = !0, void(this._currentTransition = this._prevTransition);
                            o.aborted = !0
                        }
                        var s = new ie(t, this),
                            a = new ee(this, s, r);
                        this._prevTransition = o, this._currentTransition = a, this.app || ! function() {
                            var t = i;
                            i.app = new i._appConstructor({
                                el: i._appContainer,
                                created: function() {
                                    this.$router = t
                                },
                                _meta: {
                                    $route: s
                                }
                            })
                        }();
                        var l = this._beforeEachHooks,
                            c = function() {
                                a.start(function() {
                                    i._postTransition(s, e, n)
                                })
                            };
                        l.length ? a.runQueue(l, function(t, e, n) {
                            a === i._currentTransition && a.callHook(t, null, n, {
                                expectBoolean: !0
                            })
                        }, c) : c(), !this._rendered && this._startCb && this._startCb.call(null), this._rendered = !0
                    }
                }, t.prototype._onTransitionValidated = function(t) {
                    var e = this._currentRoute = t.to;
                    this.app.$route !== e && (this.app.$route = e, this._children.forEach(function(t) {
                        t.$route = e
                    })), this._afterEachHooks.length && this._afterEachHooks.forEach(function(e) {
                        return e.call(null, {
                            to: t.to,
                            from: t.from
                        })
                    }), this._currentTransition.done = !0
                }, t.prototype._postTransition = function(t, e, n) {
                    var i = e && e.pos;
                    i && this._saveScrollPosition ? le.nextTick(function() {
                        window.scrollTo(i.x, i.y)
                    }) : n && le.nextTick(function() {
                        var t = document.getElementById(n.slice(1));
                        t && window.scrollTo(window.scrollX, t.offsetTop)
                    })
                }, t
            }();
        return ce.installed = !1, ce.install = function(t) {
            return ce.installed ? void w("already installed.") : (le = t, H(le), F(le), I(le), J.Vue = le, void(ce.installed = !0))
        }, "undefined" != typeof window && window.Vue && window.Vue.use(ce), ce
    })
}, function(t, e) {
    function n(t) {
        var e = t._vm.constructor.set;
        t._dispatching = !0, e(t.state, "route", {
            path: "",
            query: null,
            params: null
        }), t._dispatching = !1, t.hotUpdate({
            modules: {
                route: {
                    mutations: {
                        "router/ROUTE_CHANGED": function(t, e) {
                            t.path = e.path, t.query = e.query, t.params = e.params
                        }
                    }
                }
            }
        })
    }
    e.sync = function(t, e) {
        n(t), t.router = e;
        var i, r = !1;
        t.watch(function(t) {
            return t.route
        }, function(t) {
            t.path !== i && (r = !0, i = t.path, e.go(t.path))
        }, {
            deep: !0,
            sync: !0
        }), e.afterEach(function(e) {
            if (r) return void(r = !1);
            var n = e.to;
            i = n.path, t.dispatch("router/ROUTE_CHANGED", {
                path: n.path,
                query: n.query,
                params: n.params
            })
        })
    }
}, function(t) {
    ! function(e, n) {
        t.exports = n()
    }(this, function() {
        "use strict";

        function t(t) {
            return t.reduce(function(t, e) {
                return Object.keys(e).forEach(function(n) {
                    var i = t[n];
                    i ? Array.isArray(i) ? i.push(e[n]) : t[n] = [t[n], e[n]] : t[n] = e[n]
                }), t
            }, {})
        }

        function e(t) {
            if (Array.isArray(t)) return t.map(e);
            if (t && "object" === (void 0 === t ? "undefined" : a.typeof(t))) {
                for (var n = {}, i = Object.keys(t), r = 0, o = i.length; o > r; r++) {
                    var s = i[r];
                    n[s] = e(t[s])
                }
                return n
            }
            return t
        }

        function n(t) {
            if (!l) {
                var e = t.$watch("__vuex__", function(t) {
                    return t
                });
                l = t._watchers[0].constructor, e()
            }
            return l
        }

        function i(t) {
            return c || (c = t._data.__ob__.dep.constructor), c
        }

        function r(t) {
            function e() {
                var t = this.$options,
                    e = t.store,
                    n = t.vuex;
                if (e ? this.$store = e : t.parent && t.parent.$store && (this.$store = t.parent.$store), n) {
                    this.$store || console.warn("[vuex] store not injected. make sure to provide the store option in your root component.");
                    var i = n.state,
                        r = n.getters,
                        s = n.actions;
                    if (i && !r && (console.warn("[vuex] vuex.state option will been deprecated in 1.0. Use vuex.getters instead."), r = i), r) {
                        t.computed = t.computed || {};
                        for (var l in r) o(this, l, r[l])
                    }
                    if (s) {
                        t.methods = t.methods || {};
                        for (var c in s) t.methods[c] = a(this.$store, s[c], c)
                    }
                }
            }

            function r() {
                throw Error("vuex getter properties are read-only.")
            }

            function o(t, e, n) {
                "function" != typeof n ? console.warn("[vuex] Getter bound to key 'vuex.getters." + e + "' is not a function.") : Object.defineProperty(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: s(t.$store, n),
                    set: r
                })
            }

            function s(t, e) {
                var r = t._getterCacheId;
                if (e[r]) return e[r];
                var o = t._vm,
                    s = n(o),
                    a = i(o),
                    l = new s(o, function(t) {
                        return e(t)
                    }, null, {
                        lazy: !0
                    }),
                    c = function() {
                        return l.dirty && l.evaluate(), a.target && l.depend(), l.value
                    };
                return e[r] = c, c
            }

            function a(t, e, n) {
                return "function" != typeof e && console.warn("[vuex] Action bound to key 'vuex.actions." + n + "' is not a function."),
                    function() {
                        for (var n = arguments.length, i = Array(n), r = 0; n > r; r++) i[r] = arguments[r];
                        return e.call.apply(e, [this, t].concat(i))
                    }
            }
            var l = t.prototype._init;
            t.prototype._init = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.init = t.init ? [e].concat(t.init) : e, l.call(this, t)
            };
            var c = t.config.optionMergeStrategies.computed;
            t.config.optionMergeStrategies.vuex = function(t, e) {
                return t ? e ? {
                    getters: c(t.getters, e.getters),
                    state: c(t.state, e.state),
                    actions: c(t.actions, e.actions)
                } : t : e
            }
        }

        function o(t) {
            return p ? void console.warn("[vuex] already installed. Vue.use(Vuex) should be called only once.") : (p = t, void r(p))
        }

        function s() {
            console.warn("[vuex] Vuex.createLogger has been deprecated.Use `import createLogger from 'vuex/logger' instead.")
        }
        var a = {};
        a.typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        }, a.classCallCheck = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, a.createClass = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), a.toConsumableArray = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        };
        var l = void 0,
            c = void 0,
            u = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            h = {
                onInit: function(t, e) {
                    u && (u.emit("vuex:init", e), u.on("vuex:travel-to-state", function(t) {
                        var n = e._vm._data;
                        e._dispatching = !0, Object.keys(t).forEach(function(e) {
                            n[e] = t[e]
                        }), e._dispatching = !1
                    }))
                },
                onMutation: function(t, e) {
                    u && u.emit("vuex:mutation", t, e)
                }
            },
            p = void 0,
            f = 0,
            d = function() {
                function i() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.state,
                        r = void 0 === n ? {} : n,
                        o = e.mutations,
                        s = void 0 === o ? {} : o,
                        l = e.modules,
                        c = void 0 === l ? {} : l,
                        u = e.middlewares,
                        h = void 0 === u ? [] : u,
                        d = e.strict,
                        v = void 0 !== d && d;
                    a.classCallCheck(this, i), this._getterCacheId = "vuex_store_" + f++, this._dispatching = !1, this._rootMutations = this._mutations = s, this._modules = c;
                    var g = this.dispatch;
                    if (this.dispatch = function() {
                            for (var e = arguments.length, n = Array(e), i = 0; e > i; i++) n[i] = arguments[i];
                            g.apply(t, n)
                        }, !p) throw Error("[vuex] must call Vue.use(Vuex) before creating a store instance.");
                    var m = p.config.silent;
                    p.config.silent = !0, this._vm = new p({
                        data: r
                    }), p.config.silent = m, this._setupModuleState(r, c), this._setupModuleMutations(c), this._setupMiddlewares(h, r), v && this._setupMutationCheck()
                }
                return a.createClass(i, [{
                    key: "dispatch",
                    value: function(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; e > i; i++) n[i - 1] = arguments[i];
                        var r = !1;
                        "object" === (void 0 === t ? "undefined" : a.typeof(t)) && t.type && 1 === arguments.length && (n = [t.payload], t.silent && (r = !0), t = t.type);
                        var o = this._mutations[t],
                            s = this.state;
                        o ? (this._dispatching = !0, Array.isArray(o) ? o.forEach(function(t) {
                            return t.apply(void 0, [s].concat(a.toConsumableArray(n)))
                        }) : o.apply(void 0, [s].concat(a.toConsumableArray(n))), this._dispatching = !1, r || this._applyMiddlewares(t, n)) : console.warn("[vuex] Unknown mutation: " + t)
                    }
                }, {
                    key: "watch",
                    value: function(t, e, n) {
                        var i = this;
                        return this._vm.$watch(function() {
                            return "function" == typeof t ? t(i.state) : i._vm.$get(t)
                        }, e, n)
                    }
                }, {
                    key: "hotUpdate",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.mutations,
                            n = t.modules;
                        this._rootMutations = this._mutations = e || this._rootMutations, this._setupModuleMutations(n || this._modules)
                    }
                }, {
                    key: "_setupModuleState",
                    value: function(t, e) {
                        Object.keys(e).forEach(function(n) {
                            p.set(t, n, e[n].state || {})
                        })
                    }
                }, {
                    key: "_setupModuleMutations",
                    value: function(e) {
                        var n = this._modules,
                            i = [this._rootMutations];
                        Object.keys(e).forEach(function(t) {
                            n[t] = e[t]
                        }), Object.keys(n).forEach(function(t) {
                            var e = n[t];
                            if (e && e.mutations) {
                                var r = {};
                                Object.keys(e.mutations).forEach(function(n) {
                                    var i = e.mutations[n];
                                    r[n] = function(e) {
                                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) r[o - 1] = arguments[o];
                                        i.apply(void 0, [e[t]].concat(r))
                                    }
                                }), i.push(r)
                            }
                        }), this._mutations = t(i)
                    }
                }, {
                    key: "_setupMutationCheck",
                    value: function() {
                        var t = this,
                            e = n(this._vm);
                        new e(this._vm, "$data", function() {
                            if (!t._dispatching) throw Error("[vuex] Do not mutate vuex store state outside mutation handlers.")
                        }, {
                            deep: !0,
                            sync: !0
                        })
                    }
                }, {
                    key: "_setupMiddlewares",
                    value: function(t, n) {
                        var i = this;
                        this._middlewares = [h].concat(t), this._needSnapshots = t.some(function(t) {
                            return t.snapshot
                        }), this._needSnapshots && console.log("[vuex] One or more of your middlewares are taking state snapshots for each mutation. Make sure to use them only during development.");
                        var r = this._prevSnapshot = this._needSnapshots ? e(n) : null;
                        this._middlewares.forEach(function(t) {
                            t.onInit && t.onInit(t.snapshot ? r : n, i)
                        })
                    }
                }, {
                    key: "_applyMiddlewares",
                    value: function(t, n) {
                        var i = this,
                            r = this.state,
                            o = this._prevSnapshot,
                            s = void 0,
                            a = void 0;
                        this._needSnapshots && (s = this._prevSnapshot = e(r), a = e(n)), this._middlewares.forEach(function(e) {
                            e.onMutation && (e.snapshot ? e.onMutation({
                                type: t,
                                payload: a
                            }, s, o, i) : e.onMutation({
                                type: t,
                                payload: n
                            }, r, i))
                        })
                    }
                }, {
                    key: "state",
                    get: function() {
                        return this._vm._data
                    },
                    set: function() {
                        throw Error("[vuex] Vuex root state is read only.")
                    }
                }]), i
            }();
        "undefined" != typeof window && window.Vue && o(window.Vue);
        var v = {
            Store: d,
            install: o,
            createLogger: s
        };
        return v
    })
}]), ! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = oe.type(t);
        return "function" === n || oe.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (oe.isFunction(e)) return oe.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return oe.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ve.test(e)) return oe.filter(e, t, n);
            e = oe.filter(e, t)
        }
        return oe.grep(t, function(t) {
            return Z.call(e, t) > -1 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return oe.each(t.match(we) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace($e, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : je.test(n) ? oe.parseJSON(n) : n
                } catch (r) {}
                Ae.set(t, e, n)
            } else n = void 0;
        return n
    }

    function c(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return oe.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (oe.cssNumber[e] ? "" : "px"),
            u = (oe.cssNumber[e] || "px" !== c && +l) && Se.exec(oe.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do o = o || ".5", u /= o, oe.style(t, e, u + c); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function u(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], n) : n
    }

    function h(t, e) {
        for (var n = 0, i = t.length; i > n; n++) Te.set(t[n], "globalEval", !e || Te.get(e[n], "globalEval"))
    }

    function p(t, e, n, i, r) {
        for (var o, s, a, l, c, p, f = e.createDocumentFragment(), d = [], v = 0, g = t.length; g > v; v++)
            if (o = t[v], o || 0 === o)
                if ("object" === oe.type(o)) oe.merge(d, o.nodeType ? [o] : o);
                else if (Pe.test(o)) {
            for (s = s || f.appendChild(e.createElement("div")), a = (Re.exec(o) || ["", ""])[1].toLowerCase(), l = Le[a] || Le._default, s.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], p = l[0]; p--;) s = s.lastChild;
            oe.merge(d, s.childNodes), s = f.firstChild, s.textContent = ""
        } else d.push(e.createTextNode(o));
        for (f.textContent = "", v = 0; o = d[v++];)
            if (i && oe.inArray(o, i) > -1) r && r.push(o);
            else if (c = oe.contains(o.ownerDocument, o), s = u(f.appendChild(o), "script"), c && h(s), n)
            for (p = 0; o = s[p++];) Me.test(o.type || "") && n.push(o);
        return f
    }

    function f() {
        return !0
    }

    function d() {
        return !1
    }

    function v() {
        try {
            return J.activeElement
        } catch (t) {}
    }

    function g(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) g(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = d;
        else if (!r) return t;
        return 1 === o && (s = r, r = function(t) {
            return oe().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = oe.guid++)), t.each(function() {
            oe.event.add(this, e, r, i, n)
        })
    }

    function m(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function b(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function _(t, e) {
        var n, i, r, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (Te.hasData(t) && (o = Te.access(t), s = Te.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; i > n; n++) oe.event.add(e, r, c[r][n])
            }
            Ae.hasData(t) && (a = Ae.access(t), l = oe.extend({}, a), Ae.set(e, l))
        }
    }

    function w(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && De.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function x(t, e, n, i) {
        e = Y.apply([], e);
        var r, o, s, a, l, c, h = 0,
            f = t.length,
            d = f - 1,
            v = e[0],
            g = oe.isFunction(v);
        if (g || f > 1 && "string" == typeof v && !ie.checkClone && We.test(v)) return t.each(function(r) {
            var o = t.eq(r);
            g && (e[0] = v.call(this, r, o.html())), x(o, e, n, i)
        });
        if (f && (r = p(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = oe.map(u(r, "script"), y), a = s.length; f > h; h++) l = r, h !== d && (l = oe.clone(l, !0, !0), a && oe.merge(s, u(l, "script"))), n.call(t[h], l, h);
            if (a)
                for (c = s[s.length - 1].ownerDocument, oe.map(s, b), h = 0; a > h; h++) l = s[h], Me.test(l.type || "") && !Te.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(ze, "")))
        }
        return t
    }

    function k(t, e, n) {
        for (var i, r = e ? oe.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(u(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && h(u(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function C(t, e) {
        var n = oe(e.createElement(t)).appendTo(e.body),
            i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function T(t) {
        var e = J,
            n = Xe[t];
        return n || (n = C(t, e), "none" !== n && n || (Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ue[0].contentDocument, e.write(), e.close(), n = C(t, e), Ue.detach()), Xe[t] = n), n
    }

    function A(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Qe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || oe.contains(t.ownerDocument, t) || (s = oe.style(t, e)), n && !ie.pixelMarginRight() && Je.test(s) && Ge.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function j(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function $(t) {
        if (t in rn) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = nn.length; n--;)
            if (t = nn[n] + e, t in rn) return t
    }

    function E(t, e, n) {
        var i = Se.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function S(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(t, n + Ne[o], !0, r)), i ? ("content" === n && (s -= oe.css(t, "padding" + Ne[o], !0, r)), "margin" !== n && (s -= oe.css(t, "border" + Ne[o] + "Width", !0, r))) : (s += oe.css(t, "padding" + Ne[o], !0, r), "padding" !== n && (s += oe.css(t, "border" + Ne[o] + "Width", !0, r)));
        return s
    }

    function N(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Qe(t),
            s = "border-box" === oe.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = A(t, e, o), (0 > r || null == r) && (r = t.style[e]), Je.test(r)) return r;
            i = s && (ie.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function O(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = Te.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (o[s] = Te.access(i, "olddisplay", T(i.nodeName)))) : (r = Oe(i), "none" === n && r || Te.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function D(t, e, n, i, r) {
        return new D.prototype.init(t, e, n, i, r)
    }

    function R() {
        return t.setTimeout(function() {
            on = void 0
        }), on = oe.now()
    }

    function M(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ne[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function L(t, e, n) {
        for (var i, r = (F.tweeners[e] || []).concat(F.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function P(t, e, n) {
        var i, r, o, s, a, l, c, u, h = this,
            p = {},
            f = t.style,
            d = t.nodeType && Oe(t),
            v = Te.get(t, "fxshow");
        n.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(t, "display"), u = "none" === c ? Te.get(t, "olddisplay") || T(t.nodeName) : c, "inline" === u && "none" === oe.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], an.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    d = !0
                }
                p[i] = v && v[i] || oe.style(t, i)
            } else c = void 0;
        if (oe.isEmptyObject(p)) "inline" === ("none" === c ? T(t.nodeName) : c) && (f.display = c);
        else {
            v ? "hidden" in v && (d = v.hidden) : v = Te.access(t, "fxshow", {}), o && (v.hidden = !d), d ? oe(t).show() : h.done(function() {
                oe(t).hide()
            }), h.done(function() {
                var e;
                Te.remove(t, "fxshow");
                for (e in p) oe.style(t, e, p[e])
            });
            for (i in p) s = L(d ? v[i] : 0, i, h), i in v || (v[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = oe.camelCase(n), r = e[i], o = t[n], oe.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = oe.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function F(t, e, n) {
        var i, r, o = 0,
            s = F.prefilters.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = on || R(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, n]), 1 > o && l ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: oe.extend({}, e),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: on || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = oe.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); s > o; o++)
            if (i = F.prefilters[o].call(c, t, u, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(u, L, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function I(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function B(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, oe.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            s = t === jn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function W(t, e) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && oe.extend(!0, t, i), t
    }

    function V(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(t, e, n, i) {
        var r, o, s, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = c[l + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function U(t, e, n, i) {
        var r;
        if (oe.isArray(e)) oe.each(e, function(e, r) {
            n || Nn.test(t) ? i(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== oe.type(e)) i(t, e);
        else
            for (r in e) U(t + "[" + r + "]", e[r], n, i)
    }

    function X(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var G = [],
        J = t.document,
        Q = G.slice,
        Y = G.concat,
        K = G.push,
        Z = G.indexOf,
        te = {},
        ee = te.toString,
        ne = te.hasOwnProperty,
        ie = {},
        re = "2.2.4",
        oe = function(t, e) {
            return new oe.fn.init(t, e)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(t, e) {
            return e.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function(t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return oe.each(this, t)
        },
        map: function(t) {
            return this.pushStack(oe.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    }, oe.extend = oe.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[e] = oe.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === oe.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && "" + t;
            return !oe.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
            if (t.constructor && !ne.call(t, "constructor") && !ne.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || ne.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? te[ee.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = oe.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ae, "ms-").replace(le, ce)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(se, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : Z.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o, s = 0,
                a = [];
            if (n(t))
                for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
            else
                for (s in t) o = e(t[s], s, i), null != o && a.push(o);
            return Y.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), oe.isFunction(t) ? (i = Q.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(Q.call(arguments)))
            }, r.guid = t.guid = t.guid || oe.guid++, r) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = G[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, c, h, f, d = e && e.ownerDocument,
                v = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v) return n;
            if (!i && ((e ? e.ownerDocument || e : I) !== O && N(e), e = e || O, R)) {
                if (11 !== v && (c = me.exec(t)))
                    if (r = c[1]) {
                        if (9 === v) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (d && (s = d.getElementById(r)) && H(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (c[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = c[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
                    }
                if (!(!w.qsa || z[t + " "] || M && M.test(t))) {
                    if (1 !== v) d = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(be, "\\$&") : e.setAttribute("id", a = F), h = T(t), o = h.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + p(h[o]);
                        f = h.join(","), d = ye.test(t) && u(e.parentNode) || e
                    }
                    if (f) try {
                        return K.apply(n, d.querySelectorAll(f)), n
                    } catch (g) {} finally {
                        a === F && e.removeAttribute("id")
                    }
                }
            }
            return j(t.replace(ae, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[F] = !0, t
        }

        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = B++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, s) {
                var a, l, c, u = [q, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (c = e[F] || (e[F] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[i]) && a[0] === q && a[1] === o) return u[2] = a[2];
                            if (l[i] = u, u[2] = t(e, n, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function v(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function m(t, e, n, r, o, s) {
            return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, s)), i(function(i, s, a, l) {
                var c, u, h, p = [],
                    f = [],
                    d = s.length,
                    m = i || v(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? m : g(m, p, t, a, l),
                    b = n ? o || (i ? t : d || r) ? [] : s : y;
                if (n && n(y, b, a, l), r)
                    for (c = g(b, f), r(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[f[u]] = !(y[f[u]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(h = b[u]) && (c = o ? te(i, h) : p[u]) > -1 && (i[c] = !(s[c] = h))
                    }
                } else b = g(b === s ? b.splice(d, b.length) : b), o ? o(null, s, b, l) : K.apply(s, b)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), c = f(function(t) {
                    return te(e, t) > -1
                }, s, !0), u = [function(t, n, i) {
                    var r = !o && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = x.relative[t[a].type]) u = [f(d(u), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                        return m(a > 1 && d(u), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    u.push(n)
                }
            return d(u)
        }

        function b(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, l, c) {
                    var u, h, p, f = 0,
                        d = "0",
                        v = i && [],
                        m = [],
                        y = $,
                        b = i || o && x.find.TAG("*", c),
                        _ = q += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && ($ = s === O || s || c); d !== w && null != (u = b[d]); d++) {
                        if (o && u) {
                            for (h = 0, s || u.ownerDocument === O || (N(u), a = !R); p = t[h++];)
                                if (p(u, s || O, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (q = _)
                        }
                        r && ((u = !p && u) && f--, i && v.push(u))
                    }
                    if (f += d, r && d !== f) {
                        for (h = 0; p = n[h++];) p(v, m, s, a);
                        if (i) {
                            if (f > 0)
                                for (; d--;) v[d] || m[d] || (m[d] = Q.call(l));
                            m = g(m)
                        }
                        K.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (q = _, $ = y), v
                };
            return r ? i(s) : s
        }
        var _, w, x, k, C, T, A, j, $, E, S, N, O, D, R, M, L, P, H, F = "sizzle" + 1 * new Date,
            I = t.document,
            q = 0,
            B = 0,
            W = n(),
            V = n(),
            z = n(),
            U = function(t, e) {
                return t === e && (S = !0), 0
            },
            X = 1 << 31,
            G = {}.hasOwnProperty,
            J = [],
            Q = J.pop,
            Y = J.push,
            K = J.push,
            Z = J.slice,
            te = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = RegExp(ne + "+", "g"),
            ae = RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = RegExp("^" + ne + "*," + ne + "*"),
            ce = RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = RegExp(oe),
            pe = RegExp("^" + ie + "$"),
            fe = {
                ID: RegExp("^#(" + ie + ")"),
                CLASS: RegExp("^\\.(" + ie + ")"),
                TAG: RegExp("^(" + ie + "|[*])"),
                ATTR: RegExp("^" + re),
                PSEUDO: RegExp("^" + oe),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: RegExp("^(?:" + ee + ")$", "i"),
                needsContext: RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            _e = RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function() {
                N()
            };
        try {
            K.apply(J = Z.call(I.childNodes), I.childNodes), J[I.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: J.length ? function(t, e) {
                    Y.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, N = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : I;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, D = O.documentElement, R = !C(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(O.getElementsByClassName), w.getById = r(function(t) {
                return D.appendChild(t).id = F, !O.getElementsByName || !O.getElementsByName(F).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && R) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(_e, we);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(_e, we);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && R ? e.getElementsByClassName(t) : void 0
            }, L = [], M = [], (w.qsa = ge.test(O.querySelectorAll)) && (r(function(t) {
                D.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + F + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || M.push(".#.+[+~]")
            }), r(function(t) {
                var e = O.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ge.test(P = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), L.push("!=", oe)
            }), M = M.length && RegExp(M.join("|")), L = L.length && RegExp(L.join("|")), e = ge.test(D.compareDocumentPosition), H = e || ge.test(D.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return S = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === I && H(I, t) ? -1 : e === O || e.ownerDocument === I && H(I, e) ? 1 : E ? te(E, t) - te(E, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return S = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !o) return t === O ? -1 : e === O ? 1 : r ? -1 : o ? 1 : E ? te(E, t) - te(E, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === I ? -1 : l[i] === I ? 1 : 0
            }, O) : O
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== O && N(t), n = n.replace(ue, "='$1']"), !(!w.matchesSelector || !R || z[n + " "] || L && L.test(n) || M && M.test(n))) try {
                var i = P.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && N(t), H(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && N(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
            return void 0 !== i ? i : w.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (S = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(U), S) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return E = null, t
        }, k = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(_e, we), t[3] = (t[3] || t[4] || t[5] || "").replace(_e, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(_e, we).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, u, h, p, f, d, v = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            m = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; v;) {
                                    for (p = e; p = p[v];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    d = v = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild], s && y) {
                                for (p = g, h = p[F] || (p[F] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], f = c[0] === q && c[1], b = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || d.pop();)
                                    if (1 === p.nodeType && ++b && p === e) {
                                        u[t] = [q, f, b];
                                        break
                                    }
                            } else if (y && (p = e, h = p[F] || (p[F] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), c = u[t] || [], f = c[0] === q && c[1], b = f), b === !1)
                                for (;
                                    (p = ++f && p && p[v] || (b = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (h = p[F] || (p[F] = {}), u = h[p.uniqueID] || (h[p.uniqueID] = {}), u[t] = [q, b]), p !== e)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = te(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = A(t.replace(ae, "$1"));
                    return r[F] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(_e, we),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_e, we).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === D
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return ve.test(t.nodeName)
                },
                input: function(t) {
                    return de.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[_] = a(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) x.pseudos[_] = l(_);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, T = e.tokenize = function(t, n) {
            var i, r, o, s, a, l, c, u = V[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = x.preFilter; a;) {
                i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : V(t, l).slice(0)
        }, A = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = z[t + " "];
            if (!o) {
                for (e || (e = T(t)), n = e.length; n--;) o = y(e[n]), o[F] ? i.push(o) : r.push(o);
                o = z(t, b(r, i)), o.selector = t
            }
            return o
        }, j = e.select = function(t, e, n, i) {
            var r, o, s, a, l, c = "function" == typeof t && t,
                h = !i && T(t = c.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && R && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(_e, we), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(_e, we), ye.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || A(t, h))(i, e, !R, n, !e || ye.test(t) && u(e.parentNode) || e), n
        }, w.sortStable = F.split("").sort(U).join("") === F, w.detectDuplicates = !!S, N(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ee, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var he = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && oe(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        pe = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        fe = oe.expr.match.needsContext,
        de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ve = /^.[^:#\[\.,]*$/;
    oe.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, oe.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(oe(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (oe.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) oe.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && fe.test(t) ? oe(t) : t || [], !1).length
        }
    });
    var ge, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || ge, "string" == typeof t) {
                if (i = "<" !== t[0] || ">" !== t[t.length - 1] || t.length < 3 ? me.exec(t) : [null, t, null], !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), de.test(i[1]) && oe.isPlainObject(e))
                        for (i in e) oe.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = J.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
        };
    ye.prototype = oe.fn, ge = oe(J);
    var be = /^(?:parents|prev(?:Until|All))/,
        _e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(t) {
            var e = oe(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (oe.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = fe.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Z.call(oe(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), oe.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return he(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return he(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return he(t, "nextSibling")
        },
        prevAll: function(t) {
            return he(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return he(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return he(t, "previousSibling", n)
        },
        siblings: function(t) {
            return pe((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return pe(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || oe.merge([], t.childNodes)
        }
    }, function(t, e) {
        oe.fn[t] = function(n, i) {
            var r = oe.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (_e[t] || oe.uniqueSort(r), be.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : oe.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            c = function() {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            u = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        oe.each(e, function(e, n) {
                            oe.isFunction(n) ? t.unique && u.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
                        })
                    }(arguments), n && !e && c()), this
                },
                remove: function() {
                    return oe.each(arguments, function(t, e) {
                        for (var n;
                            (n = oe.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(t) {
                    return t ? oe.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, oe.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(e, function(e, o) {
                                var s = oe.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && oe.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? oe.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, oe.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = Q.call(arguments),
                s = o.length,
                a = 1 !== s || t && oe.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : oe.Deferred(),
                c = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = Array(s), n = Array(s), i = Array(s); s > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, e)).done(c(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var xe;
    oe.fn.ready = function(t) {
        return oe.ready.promise().done(t), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (xe.resolveWith(J, [oe]), oe.fn.triggerHandler && (oe(J).triggerHandler("ready"), oe(J).off("ready"))))
        }
    }), oe.ready.promise = function(e) {
        return xe || (xe = oe.Deferred(), "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? t.setTimeout(oe.ready) : (J.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), xe.promise(e)
    }, oe.ready.promise();
    var ke = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === oe.type(n)) {
                r = !0;
                for (a in n) ke(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(oe(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        },
        Ce = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!Ce(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, Ce(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n;
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, oe.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    oe.isArray(e) ? i = e.concat(e.map(oe.camelCase)) : (r = oe.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(we) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === e || oe.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !oe.isEmptyObject(e)
        }
    };
    var Te = new a,
        Ae = new a,
        je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $e = /[A-Z]/g;
    oe.extend({
        hasData: function(t) {
            return Ae.hasData(t) || Te.hasData(t)
        },
        data: function(t, e, n) {
            return Ae.access(t, e, n)
        },
        removeData: function(t, e) {
            Ae.remove(t, e)
        },
        _data: function(t, e, n) {
            return Te.access(t, e, n)
        },
        _removeData: function(t, e) {
            Te.remove(t, e)
        }
    }), oe.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Ae.get(o), 1 === o.nodeType && !Te.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i])));
                    Te.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                Ae.set(this, t)
            }) : ke(this, function(e) {
                var n, i;
                if (o && void 0 === e) {
                    if (n = Ae.get(o, t) || Ae.get(o, t.replace($e, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = oe.camelCase(t), n = Ae.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else i = oe.camelCase(t), this.each(function() {
                    var n = Ae.get(this, i);
                    Ae.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Ae.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ae.remove(this, t)
            })
        }
    }), oe.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = Te.get(t, e), n && (!i || oe.isArray(n) ? i = Te.access(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = oe.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = oe._queueHooks(t, e),
                s = function() {
                    oe.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Te.get(t, n) || Te.access(t, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    Te.remove(t, [e + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = oe.queue(this, t, e);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                oe.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = oe.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = Te.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        Ne = ["Top", "Right", "Bottom", "Left"],
        Oe = function(t, e) {
            return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
        },
        De = /^(?:checkbox|radio)$/i,
        Re = /<([\w:-]+)/,
        Me = /^$|\/(?:java|ecma)script/i,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td;
    var Pe = /<|&#?\w+;/;
    ! function() {
        var t = J.createDocumentFragment(),
            e = t.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var He = /^key/,
        Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ie = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, h, p, f, d, v, g = Te.get(t);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return void 0 !== oe && oe.event.triggered !== e.type ? oe.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(we) || [""], c = e.length; c--;) a = Ie.exec(e[c]) || [], f = v = a[1], d = (a[2] || "").split(".").sort(), f && (h = oe.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = oe.event.special[f] || {}, u = oe.extend({
                    type: f,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && oe.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, c, u, h, p, f, d, v, g = Te.hasData(t) && Te.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(we) || [""], c = e.length; c--;)
                    if (a = Ie.exec(e[c]) || [], f = v = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = oe.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, p = l[f] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
                        s && !p.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || oe.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) oe.event.remove(t, f + e[c], n, i, !0);
                oe.isEmptyObject(l) && Te.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = oe.event.fix(t);
            var e, n, i, r, o, s = [],
                a = Q.call(arguments),
                l = (Te.get(this, "events") || {})[t.type] || [],
                c = oe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = oe.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[oe.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Fe.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new oe.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== v() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === v() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return oe.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, oe.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, oe.Event = function(t, e) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        oe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === i || oe.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), oe.fn.extend({
        on: function(t, e, n, i) {
            return g(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return g(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = d), this.each(function() {
                oe.event.remove(this, t, n, e)
            })
        }
    });
    var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Be = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^true\/(.*)/,
        ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(t) {
            return t.replace(qe, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                l = oe.contains(t.ownerDocument, t);
            if (!(ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))
                for (s = u(a), o = u(t), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || u(t), s = s || u(a), i = 0, r = o.length; r > i; i++) _(o[i], s[i]);
                else _(t, a);
            return s = u(a, "script"), s.length > 0 && h(s, !l && u(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, n, i, r = oe.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Ce(n)) {
                    if (e = n[Te.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, e.handle);
                        n[Te.expando] = void 0
                    }
                    n[Ae.expando] && (n[Ae.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: x,
        detach: function(t) {
            return k(this, t, !0)
        },
        remove: function(t) {
            return k(this, t)
        },
        text: function(t) {
            return ke(this, function(t) {
                return void 0 === t ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return x(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = m(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return x(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = m(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return x(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return x(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return oe.clone(this, t, e)
            })
        },
        html: function(t) {
            return ke(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Be.test(t) && !Le[(Re.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = oe.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return x(this, arguments, function(e) {
                var n = this.parentNode;
                oe.inArray(this, t) < 0 && (oe.cleanData(u(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        oe.fn[t] = function(t) {
            for (var n, i = [], r = oe(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(r[s])[e](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ue, Xe = {
            HTML: "block",
            BODY: "block"
        },
        Ge = /^margin/,
        Je = RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        Qe = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Ye = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        },
        Ke = J.documentElement;
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ke.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Ke.removeChild(s)
        }
        var n, i, r, o, s = J.createElement("div"),
            a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            pixelMarginRight: function() {
                return null == i && e(), r
            },
            reliableMarginLeft: function() {
                return null == i && e(), o
            },
            reliableMarginRight: function() {
                var e, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ke.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Ke.removeChild(s), a.removeChild(n), e
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        en = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nn = ["Webkit", "O", "Moz", "ms"],
        rn = J.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = A(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = oe.camelCase(e),
                    l = t.style;
                return e = oe.cssProps[a] || (oe.cssProps[a] = $(a) || a), s = oe.cssHooks[e] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Se.exec(n)) && r[1] && (n = c(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = oe.camelCase(e);
            return e = oe.cssProps[a] || (oe.cssProps[a] = $(a) || a), s = oe.cssHooks[e] || oe.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = A(t, e, i)), "normal" === r && e in en && (r = en[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(t, e) {
        oe.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Ze.test(oe.css(t, "display")) && 0 === t.offsetWidth ? Ye(t, tn, function() {
                    return N(t, e, i)
                }) : N(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r, o = i && Qe(t),
                    s = i && S(t, e, i, "border-box" === oe.css(t, "boxSizing", !1, o), o);
                return s && (r = Se.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = oe.css(t, e)), E(t, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = j(ie.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(A(t, "marginLeft")) || t.getBoundingClientRect().left - Ye(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = j(ie.reliableMarginRight, function(t, e) {
        return e ? Ye(t, {
            display: "inline-block"
        }, A, [t, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        oe.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ne[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ge.test(t) || (oe.cssHooks[t + e].set = E)
    }), oe.fn.extend({
        css: function(t, e) {
            return ke(this, function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (oe.isArray(e)) {
                    for (i = Qe(t), r = e.length; r > s; s++) o[e[s]] = oe.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = D, D.prototype = {
        constructor: D,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || oe.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[oe.cssProps[t.prop]] && !oe.cssHooks[t.prop] ? t.elem[t.prop] = t.now : oe.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, oe.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = D.prototype.init, oe.fx.step = {};
    var on, sn, an = /^(?:toggle|show|hide)$/,
        ln = /queueHooks$/;
    oe.Animation = oe.extend(F, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return c(n.elem, t, Se.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(we);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(e)
            },
            prefilters: [P],
            prefilter: function(t, e) {
                e ? F.prefilters.unshift(t) : F.prefilters.push(t)
            }
        }), oe.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? oe.extend({}, t) : {
                complete: n || !n && e || oe.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !oe.isFunction(e) && e
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Oe).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = oe.isEmptyObject(t),
                    o = oe.speed(e, n, i),
                    s = function() {
                        var e = F(this, oe.extend({}, t), o);
                        (r || Te.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = oe.timers,
                        s = Te.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && ln.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || oe.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = Te.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = oe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(t, e) {
            var n = oe.fn[e];
            oe.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, i, r)
            }
        }), oe.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            oe.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var t, e = 0,
                n = oe.timers;
            for (on = oe.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || oe.fx.stop(), on = void 0
        }, oe.fx.timer = function(t) {
            oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            sn || (sn = t.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            t.clearInterval(sn), sn = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, n) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t = J.createElement("input"),
                e = J.createElement("select"),
                n = e.appendChild(J.createElement("option"));
            t.type = "checkbox", ie.checkOn = "" !== t.value, ie.optSelected = n.selected, e.disabled = !0, ie.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", ie.radioValue = "t" === t.value
        }();
    var cn, un = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(t, e) {
            return ke(this, oe.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                oe.removeAttr(this, t)
            })
        }
    }), oe.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? void 0 === t.getAttribute ? oe.prop(t, e, n) : (1 === o && oe.isXMLDoc(t) || (e = e.toLowerCase(), r = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? cn : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = oe.find.attr(t, e), null == i ? void 0 : i)) : void 0
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(we);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), cn = {
        set: function(t, e, n) {
            return e === !1 ? oe.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = un[e] || oe.find.attr;
        un[e] = function(t, e, i) {
            var r, o;
            return i || (o = un[e], un[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, un[e] = o), r
        }
    });
    var hn = /^(?:input|select|textarea|button)$/i,
        pn = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(t, e) {
            return ke(this, oe.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[oe.propFix[t] || t]
            })
        }
    }), oe.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && oe.isXMLDoc(t) || (e = oe.propFix[e] || e, r = oe.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = oe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : hn.test(t.nodeName) || pn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var fn = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).addClass(t.call(this, e, I(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(we) || []; n = this[l++];)
                    if (r = I(n), i = 1 === n.nodeType && (" " + r + " ").replace(fn, " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).removeClass(t.call(this, e, I(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(we) || []; n = this[l++];)
                    if (r = I(n), i = 1 === n.nodeType && (" " + r + " ").replace(fn, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function(n) {
                oe(this).toggleClass(t.call(this, n, I(this), e), e)
            } : function() {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = oe(this), o = t.match(we) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = I(this), e && Te.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Te.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + I(n) + " ").replace(fn, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var dn = /\r/g,
        vn = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = oe.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, oe(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(dn, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = oe.find.attr(t, "value");
                    return null != e ? e : oe.trim(oe.text(t)).replace(vn, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (e = oe(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = oe.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(t, e) {
                return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) > -1 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var gn = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(e, n, i, r) {
            var o, s, a, l, c, u, h, p = [i || J],
                f = ne.call(e, "type") ? e.type : e,
                d = ne.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !gn.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[oe.expando] ? e : new oe.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), h = oe.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !oe.isWindow(i)) {
                    for (l = h.delegateType || f, gn.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || f, u = (Te.get(s, "events") || {})[e.type] && Te.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Ce(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !Ce(i) || c && oe.isFunction(i[f]) && !oe.isWindow(i) && (a = i[c], a && (i[c] = null), oe.event.triggered = f, i[f](), oe.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = oe.extend(new oe.Event, n, {
                type: t,
                isSimulated: !0
            });
            oe.event.trigger(i, null, e)
        }
    }), oe.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                oe.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? oe.event.trigger(t, e, n, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        oe.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), oe.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ie.focusin = "onfocusin" in t, ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            oe.event.simulate(e, t.target, oe.event.fix(t))
        };
        oe.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Te.access(i, e);
                r || i.addEventListener(t, n, !0), Te.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Te.access(i, e) - 1;
                r ? Te.access(i, e, r) : (i.removeEventListener(t, n, !0), Te.remove(i, e))
            }
        }
    });
    var mn = t.location,
        yn = oe.now(),
        bn = /\?/;
    oe.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, oe.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), n
    };
    var _n = /#.*$/,
        wn = /([?&])_=[^&]*/,
        xn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        Tn = /^\/\//,
        An = {},
        jn = {},
        $n = "*/".concat("*"),
        En = J.createElement("a");
    En.href = mn.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mn.href,
            type: "GET",
            isLocal: kn.test(mn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? W(W(t, oe.ajaxSettings), e) : W(oe.ajaxSettings, t)
        },
        ajaxPrefilter: q(An),
        ajaxTransport: q(jn),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var c, h, y, b, w, k = n;
                2 !== _ && (_ = 2, l && t.clearTimeout(l), r = void 0, s = a || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (b = V(p, x, i)), b = z(p, b, x, c), c ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, h = b.data, y = b.error, c = !y)) : (y = k, !e && k || (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || k) + "", c ? v.resolveWith(f, [h, k, x]) : v.rejectWith(f, [x, k, y]), x.statusCode(m), m = void 0, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? h : y]), g.fireWith(f, [x, k]), u && (d.trigger("ajaxComplete", [x, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, l, c, u, h, p = oe.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                v = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                b = {},
                _ = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === _) {
                            if (!a)
                                for (a = {}; e = xn.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return _ || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return _ || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > _)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (v.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, p.url = ((e || p.url || mn.href) + "").replace(_n, "").replace(Tn, mn.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                c = J.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = En.protocol + "//" + En.host != c.protocol + "//" + c.host
                } catch (k) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), B(An, p, n, x), 2 === _) return x;
            u = oe.event && p.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + yn++) : o + (bn.test(o) ? "&" : "?") + "_=" + yn++)), p.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $n + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(f, x, p) === !1 || 2 === _)) return x.abort();
            w = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[h](p[h]);
            if (r = B(jn, p, n, x)) {
                if (x.readyState = 1, u && d.trigger("ajaxSend", [x, p]), 2 === _) return x;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    _ = 1, r.send(y, i)
                } catch (k) {
                    if (_ >= 2) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return oe.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return oe.get(t, void 0, e, "script")
        }
    }), oe.each(["get", "post"], function(t, e) {
        oe[e] = function(t, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(t) && t))
        }
    }), oe._evalUrl = function(t) {
        return oe.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(t) {
            var e;
            return oe.isFunction(t) ? this.each(function(e) {
                oe(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = oe(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(oe.isFunction(t) ? function(e) {
                oe(this).wrapInner(t.call(this, e))
            } : function() {
                var e = oe(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = oe.isFunction(t);
            return this.each(function(n) {
                oe(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(t) {
        return !oe.expr.filters.visible(t)
    }, oe.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Sn = /%20/g,
        Nn = /\[\]$/,
        On = /\r?\n/g,
        Dn = /^(?:submit|button|image|reset|file)$/i,
        Rn = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) U(n, t[n], e, r);
        return i.join("&").replace(Sn, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && Rn.test(this.nodeName) && !Dn.test(t) && (this.checked || !De.test(t))
            }).map(function(t, e) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(On, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(On, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Mn = {
            0: 200,
            1223: 204
        },
        Ln = oe.ajaxSettings.xhr();
    ie.cors = !!Ln && "withCredentials" in Ln, ie.ajax = Ln = !!Ln, oe.ajaxTransport(function(e) {
        var n, i;
        return ie.cors || Ln && !e.crossDomain ? {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Mn[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return oe.globalEval(t), t
            }
        }
    }), oe.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), oe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = oe("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Pn = [],
        Hn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Pn.pop() || oe.expando + "_" + yn++;
            return this[t] = !0, t
        }
    }), oe.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (Hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Hn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Hn, "$1" + r) : e.jsonp !== !1 && (e.url += (bn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || oe.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? oe(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Pn.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var i = de.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = p([t], e, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var Fn = oe.fn.load;
    oe.fn.load = function(t, e, n) {
        if ("string" != typeof t && Fn) return Fn.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = oe.trim(t.slice(a)), t = t.slice(0, a)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && oe.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        oe.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), oe.expr.filters.animated = function(t) {
        return oe.grep(oe.timers, function(e) {
            return t === e.elem
        }).length
    }, oe.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, c, u = oe.css(t, "position"),
                h = oe(t),
                p = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), o = oe.css(t, "top"), l = oe.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, n, oe.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, oe.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                oe.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, oe.contains(e, i) ? (r = i.getBoundingClientRect(), n = X(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (i = t.offset()), i.top += oe.css(t[0], "borderTopWidth", !0), i.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - oe.css(n, "marginTop", !0),
                    left: e.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === oe.css(t, "position");) t = t.offsetParent;
                return t || Ke
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        oe.fn[t] = function(i) {
            return ke(this, function(t, i, r) {
                var o = X(t);
                return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), oe.each(["top", "left"], function(t, e) {
        oe.cssHooks[e] = j(ie.pixelPosition, function(t, n) {
            return n ? (n = A(t, e), Je.test(n) ? oe(t).position()[e] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        oe.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            oe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return ke(this, function(e, n, i) {
                    var r;
                    return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? oe.css(e, n, s) : oe.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var In = t.jQuery,
        qn = t.$;
    return oe.noConflict = function(e) {
        return t.$ === oe && (t.$ = qn), e && t.jQuery === oe && (t.jQuery = In), oe
    }, e || (t.jQuery = t.$ = oe), oe
}),
function() {
    function t() {
        window.addEventListener("resize", r, !1), r()
    }

    function e() {
        var t = Math.floor(s.height / 4),
            e = Math.floor(2 * t),
            n = Math.floor(0 * Math.random()) + 1,
            i = Math.floor(Math.random() * e + t) + 1;
        this.x = n, this.y = i, this.vx = 5 * Math.random() - 2, this.vy = 2 * Math.random() - 1, this.gravity = 0, c++, l[c] = this, this.id = c, this.size = 6 * Math.random() - 2, this.color = h, this.color2 = particleColor2, this.color3 = particleColor3, this.color_selector = 150 * Math.random() - 1
    }

    function n() {
        setInterval(function() {
            a.fillStyle = "#0d071e", a.fillRect(0, 0, s.width, s.height);
            for (var t = 0; u > t; t++) new e;
            for (var t in l) l[t].draw()
        }, 35)
    }

    function i() {
        a.fillRect(0, 0, s.width, s.height)
    }

    function r() {
        s.width = window.innerWidth, s.height = window.innerHeight, i()
    }

    function o() {
        $(".navicon").on("click", function() {
            $(this).toggleClass("navicon--toggled"), $(".nav-overlay").toggleClass("nav-overlay--show")
        }), $(".nav-overlay a").on("click", function() {
            $(".navicon").removeClass("navicon--toggled"), $(".nav-overlay").removeClass("nav-overlay--show")
        })
    }
    var s = document.getElementById("canvas"),
        a = s.getContext("2d"),
        l = {},
        c = 0,
        u = .1,
        h = "#493484";
    particleColor2 = "#493484", particleColor3 = "#1b103a", t(), e.prototype.draw = function() {
        this.x += this.vx, this.y += this.vy, this.vy += this.gravity, (this.x > s.width || this.y > s.height) && delete l[this.id], a.fillStyle = this.color_selector < 30 && this.color_selector > 10 ? this.color2 : this.color_selector < 10 ? this.color3 : this.color, a.fillRect(this.x, this.y, this.size, this.size)
    }, n(), setTimeout(function() {
        o()
    }, 500)
}();