import Fe from "react";
var qe = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ds() {
  if (xe)
    return H;
  xe = 1;
  var l = Fe, g = Symbol.for("react.element"), h = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, w = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(j, b, E) {
    var k, y = {}, R = null, $ = null;
    E !== void 0 && (R = "" + E), b.key !== void 0 && (R = "" + b.key), b.ref !== void 0 && ($ = b.ref);
    for (k in b)
      c.call(b, k) && !F.hasOwnProperty(k) && (y[k] = b[k]);
    if (j && j.defaultProps)
      for (k in b = j.defaultProps, b)
        y[k] === void 0 && (y[k] = b[k]);
    return { $$typeof: g, type: j, key: R, ref: $, props: y, _owner: w.current };
  }
  return H.Fragment = h, H.jsx = q, H.jsxs = q, H;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function ls() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Fe, g = Symbol.for("react.element"), h = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), j = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), z = Symbol.iterator, ae = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = z && e[z] || e[ae];
      return typeof s == "function" ? s : null;
    }
    var _ = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(e) {
      {
        for (var s = arguments.length, t = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++)
          t[o - 1] = arguments[o];
        u("error", e, t);
      }
    }
    function u(e, s, t) {
      {
        var o = _.ReactDebugCurrentFrame, n = o.getStackAddendum();
        n !== "" && (s += "%s", t = t.concat([n]));
        var d = t.map(function(r) {
          return String(r);
        });
        d.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var v = !1, Y = !1, J = !1, Z = !1, G = !1, I;
    I = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === F || G || e === w || e === E || e === k || Z || e === $ || v || Y || J || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === y || e.$$typeof === q || e.$$typeof === j || e.$$typeof === b || e.$$typeof === I || e.getModuleId !== void 0));
    }
    function P(e, s, t) {
      var o = e.displayName;
      if (o)
        return o;
      var n = s.displayName || s.name || "";
      return n !== "" ? t + "(" + n + ")" : t;
    }
    function x(e) {
      return e.displayName || "Context";
    }
    function p(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case h:
          return "Portal";
        case F:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var s = e;
            return x(s) + ".Consumer";
          case q:
            var t = e;
            return x(t._context) + ".Provider";
          case b:
            return P(e, e.render, "ForwardRef");
          case y:
            var o = e.displayName || null;
            return o !== null ? o : p(e.type) || "Memo";
          case R: {
            var n = e, d = n._payload, r = n._init;
            try {
              return p(r(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, N, A, S, W, Q, ge, Me;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function $e() {
      {
        if (D === 0) {
          N = console.log, A = console.info, S = console.warn, W = console.error, Q = console.group, ge = console.groupCollapsed, Me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ye() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: N
            }),
            info: O({}, e, {
              value: A
            }),
            warn: O({}, e, {
              value: S
            }),
            error: O({}, e, {
              value: W
            }),
            group: O({}, e, {
              value: Q
            }),
            groupCollapsed: O({}, e, {
              value: ge
            }),
            groupEnd: O({}, e, {
              value: Me
            })
          });
        }
        D < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = _.ReactCurrentDispatcher, ie;
    function V(e, s, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (n) {
            var o = n.stack.trim().match(/\n( *(at )?)/);
            ie = o && o[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var de = !1, ee;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ie();
    }
    function ke(e, s) {
      if (!e || de)
        return "";
      {
        var t = ee.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      de = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ne.current, ne.current = null, $e();
      try {
        if (s) {
          var r = function() {
            throw Error();
          };
          if (Object.defineProperty(r.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(r, []);
            } catch (T) {
              o = T;
            }
            Reflect.construct(e, [], r);
          } else {
            try {
              r.call();
            } catch (T) {
              o = T;
            }
            e.call(r.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            o = T;
          }
          e();
        }
      } catch (T) {
        if (T && o && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), C = o.stack.split(`
`), f = a.length - 1, M = C.length - 1; f >= 1 && M >= 0 && a[f] !== C[M]; )
            M--;
          for (; f >= 1 && M >= 0; f--, M--)
            if (a[f] !== C[M]) {
              if (f !== 1 || M !== 1)
                do
                  if (f--, M--, M < 0 || a[f] !== C[M]) {
                    var m = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, m), m;
                  }
                while (f >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        de = !1, ne.current = d, Ye(), Error.prepareStackTrace = n;
      }
      var U = e ? e.displayName || e.name : "", Te = U ? V(U) : "";
      return typeof e == "function" && ee.set(e, Te), Te;
    }
    function Ne(e, s, t) {
      return ke(e, !1);
    }
    function We(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function se(e, s, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, We(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case E:
          return V("Suspense");
        case k:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ne(e.render);
          case y:
            return se(e.type, s, t);
          case R: {
            var o = e, n = o._payload, d = o._init;
            try {
              return se(d(n), s, t);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Ce = {}, ye = _.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var s = e._owner, t = se(e.type, e._source, s ? s.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Le(e, s, t, o, n) {
      {
        var d = Function.call.bind(te);
        for (var r in e)
          if (d(e, r)) {
            var a = void 0;
            try {
              if (typeof e[r] != "function") {
                var C = Error((o || "React class") + ": " + t + " type `" + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[r] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              a = e[r](s, r, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (oe(n), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, r, typeof a), oe(null)), a instanceof Error && !(a.message in Ce) && (Ce[a.message] = !0, oe(n), i("Failed %s type: %s", t, a.message), oe(null));
          }
      }
    }
    var Ue = Array.isArray;
    function le(e) {
      return Ue(e);
    }
    function ze(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, t = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function me(e) {
      if (Be(e))
        return i("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), pe(e);
    }
    var K = _.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Ee, ve;
    ve = {};
    function Ge(e) {
      if (te.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (te.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, s) {
      if (typeof e.ref == "string" && K.current && s && K.current.stateNode !== s) {
        var t = p(K.current.type);
        ve[t] || (i('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(K.current.type), e.ref), ve[t] = !0);
      }
    }
    function Xe(e, s) {
      {
        var t = function() {
          we || (we = !0, i("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, s) {
      {
        var t = function() {
          Ee || (Ee = !0, i("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, s, t, o, n, d, r) {
      var a = {
        $$typeof: g,
        type: e,
        key: s,
        ref: t,
        props: r,
        _owner: d
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ve(e, s, t, o, n) {
      {
        var d, r = {}, a = null, C = null;
        t !== void 0 && (me(t), a = "" + t), Ke(s) && (me(s.key), a = "" + s.key), Ge(s) && (C = s.ref, He(s, n));
        for (d in s)
          te.call(s, d) && !Je.hasOwnProperty(d) && (r[d] = s[d]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (d in f)
            r[d] === void 0 && (r[d] = f[d]);
        }
        if (a || C) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(r, M), C && Ze(r, M);
        }
        return Qe(e, a, C, n, o, K.current, r);
      }
    }
    var ue = _.ReactCurrentOwner, Re = _.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var s = e._owner, t = se(e.type, e._source, s ? s.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Oe() {
      {
        if (ue.current) {
          var e = p(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function es(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + s + ":" + t + ".";
        }
        return "";
      }
    }
    var je = {};
    function ss(e) {
      {
        var s = Oe();
        if (!s) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (s = `

Check the top-level render call using <` + t + ">.");
        }
        return s;
      }
    }
    function _e(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ss(s);
        if (je[t])
          return;
        je[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ue.current && (o = " It was passed a child from " + p(e._owner.type) + "."), L(e), i('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), L(null);
      }
    }
    function Pe(e, s) {
      {
        if (typeof e != "object")
          return;
        if (le(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ce(o) && _e(o, s);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var n = B(e);
          if (typeof n == "function" && n !== e.entries)
            for (var d = n.call(e), r; !(r = d.next()).done; )
              ce(r.value) && _e(r.value, s);
        }
      }
    }
    function ts(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var t;
        if (typeof s == "function")
          t = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === b || s.$$typeof === y))
          t = s.propTypes;
        else
          return;
        if (t) {
          var o = p(s);
          Le(t, e.props, "prop", o, e);
        } else if (s.PropTypes !== void 0 && !be) {
          be = !0;
          var n = p(s);
          i("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", n || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && i("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function os(e) {
      {
        for (var s = Object.keys(e.props), t = 0; t < s.length; t++) {
          var o = s[t];
          if (o !== "children" && o !== "key") {
            L(e), i("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), i("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Se(e, s, t, o, n, d) {
      {
        var r = re(e);
        if (!r) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = es(n);
          C ? a += C : a += Oe();
          var f;
          e === null ? f = "null" : le(e) ? f = "array" : e !== void 0 && e.$$typeof === g ? (f = "<" + (p(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, i("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var M = Ve(e, s, t, n, d);
        if (M == null)
          return M;
        if (r) {
          var m = s.children;
          if (m !== void 0)
            if (o)
              if (le(m)) {
                for (var U = 0; U < m.length; U++)
                  Pe(m[U], e);
                Object.freeze && Object.freeze(m);
              } else
                i("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(m, e);
        }
        return e === c ? os(M) : ts(M), M;
      }
    }
    function as(e, s, t) {
      return Se(e, s, t, !0);
    }
    function rs(e, s, t) {
      return Se(e, s, t, !1);
    }
    var ns = rs, is = as;
    X.Fragment = c, X.jsx = ns, X.jsxs = is;
  }()), X;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = ds() : l.exports = ls();
})(qe);
const vs = qe.exports.jsx, Ms = () => /* @__PURE__ */ vs("button", {
  children: "Boop"
});
function us(l, g, h) {
  return g in l ? Object.defineProperty(l, g, {
    value: h,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : l[g] = h, l;
}
function Ae(l, g) {
  var h = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(l);
    g && (c = c.filter(function(w) {
      return Object.getOwnPropertyDescriptor(l, w).enumerable;
    })), h.push.apply(h, c);
  }
  return h;
}
function fe(l) {
  for (var g = 1; g < arguments.length; g++) {
    var h = arguments[g] != null ? arguments[g] : {};
    g % 2 ? Ae(Object(h), !0).forEach(function(c) {
      us(l, c, h[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : Ae(Object(h)).forEach(function(c) {
      Object.defineProperty(l, c, Object.getOwnPropertyDescriptor(h, c));
    });
  }
  return l;
}
var bs = (l) => function() {
  for (var g = arguments.length, h = new Array(g), c = 0; c < g; c++)
    h[c] = arguments[c];
  var w = Object.assign({}, ...h.map((b) => b.styles)), F = Object.keys(w), q = F.filter((b) => "mappings" in w[b]), j = (b) => {
    var E = [], k = {}, y = fe({}, b), R = !1;
    for (var $ of q) {
      var z = b[$];
      if (z != null) {
        var ae = w[$];
        R = !0;
        for (var B of ae.mappings)
          k[B] = z, y[B] == null && delete y[B];
      }
    }
    var _ = R ? fe(fe({}, k), y) : b;
    for (var i in _) {
      var u = _[i], v = w[i];
      try {
        if (v.mappings)
          continue;
        if (typeof u == "string" || typeof u == "number") {
          if (process.env.NODE_ENV !== "production" && !v.values[u].defaultClass)
            throw new Error();
          E.push(v.values[u].defaultClass);
        } else if (Array.isArray(u))
          for (var Y = 0; Y < u.length; Y++) {
            var J = u[Y];
            if (J != null) {
              var Z = v.responsiveArray[Y];
              if (process.env.NODE_ENV !== "production" && !v.values[J].conditions[Z])
                throw new Error();
              E.push(v.values[J].conditions[Z]);
            }
          }
        else
          for (var G in u) {
            var I = u[G];
            if (I != null) {
              if (process.env.NODE_ENV !== "production" && !v.values[I].conditions[G])
                throw new Error();
              E.push(v.values[I].conditions[G]);
            }
          }
      } catch (re) {
        throw process.env.NODE_ENV !== "production" && function() {
          class P extends Error {
            constructor(W) {
              super(W), this.name = "SprinklesError";
            }
          }
          var x = (S) => typeof S == "string" ? '"'.concat(S, '"') : S, p = (S, W, Q) => {
            throw new P('"'.concat(S, '" has no value ').concat(x(W), ". Possible values are ").concat(Object.keys(Q).map(x).join(", ")));
          };
          if (!v)
            throw new P('"'.concat(i, '" is not a valid sprinkle'));
          if ((typeof u == "string" || typeof u == "number") && (u in v.values || p(i, u, v.values), !v.values[u].defaultClass))
            throw new P('"'.concat(i, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(v.values[u].conditions).map(x).join(", ")));
          if (typeof u == "object") {
            if (!("conditions" in v.values[Object.keys(v.values)[0]]))
              throw new P('"'.concat(i, '" is not a conditional property'));
            if (Array.isArray(u)) {
              if (!("responsiveArray" in v))
                throw new P('"'.concat(i, '" does not support responsive arrays'));
              var O = v.responsiveArray.length;
              if (O < u.length)
                throw new P('"'.concat(i, '" only supports up to ').concat(O, " breakpoints. You passed ").concat(u.length));
              for (var D of u)
                v.values[D] || p(i, D, v.values);
            } else
              for (var N in u) {
                var A = u[N];
                if (A != null && (v.values[A] || p(i, A, v.values), !v.values[A].conditions[N]))
                  throw new P('"'.concat(i, '" has no condition named ').concat(x(N), ". Possible values are ").concat(Object.keys(v.values[A].conditions).map(x).join(", ")));
              }
          }
        }(), re;
      }
    }
    return l(E.join(" "));
  };
  return Object.assign(j, {
    properties: new Set(F)
  });
}, cs = (l) => l, fs = function() {
  return bs(cs)(...arguments);
}, hs = fs({ conditions: { defaultCondition: "lightMode", conditionNames: ["lightMode", "darkMode"], responsiveArray: void 0 }, styles: { color: { values: { blue50: { conditions: { lightMode: "sbv5se0", darkMode: "sbv5se1" }, defaultClass: "sbv5se0" }, blue100: { conditions: { lightMode: "sbv5se2", darkMode: "sbv5se3" }, defaultClass: "sbv5se2" }, blue200: { conditions: { lightMode: "sbv5se4", darkMode: "sbv5se5" }, defaultClass: "sbv5se4" }, blue300: { conditions: { lightMode: "sbv5se6", darkMode: "sbv5se7" }, defaultClass: "sbv5se6" }, blue400: { conditions: { lightMode: "sbv5se8", darkMode: "sbv5se9" }, defaultClass: "sbv5se8" }, blue500: { conditions: { lightMode: "sbv5sea", darkMode: "sbv5seb" }, defaultClass: "sbv5sea" }, blue600: { conditions: { lightMode: "sbv5sec", darkMode: "sbv5sed" }, defaultClass: "sbv5sec" }, blue700: { conditions: { lightMode: "sbv5see", darkMode: "sbv5sef" }, defaultClass: "sbv5see" }, blue800: { conditions: { lightMode: "sbv5seg", darkMode: "sbv5seh" }, defaultClass: "sbv5seg" }, blue900: { conditions: { lightMode: "sbv5sei", darkMode: "sbv5sej" }, defaultClass: "sbv5sei" }, cyan50: { conditions: { lightMode: "sbv5sek", darkMode: "sbv5sel" }, defaultClass: "sbv5sek" }, cyan100: { conditions: { lightMode: "sbv5sem", darkMode: "sbv5sen" }, defaultClass: "sbv5sem" }, cyan200: { conditions: { lightMode: "sbv5seo", darkMode: "sbv5sep" }, defaultClass: "sbv5seo" }, cyan300: { conditions: { lightMode: "sbv5seq", darkMode: "sbv5ser" }, defaultClass: "sbv5seq" }, cyan400: { conditions: { lightMode: "sbv5ses", darkMode: "sbv5set" }, defaultClass: "sbv5ses" }, cyan500: { conditions: { lightMode: "sbv5seu", darkMode: "sbv5sev" }, defaultClass: "sbv5seu" }, cyan600: { conditions: { lightMode: "sbv5sew", darkMode: "sbv5sex" }, defaultClass: "sbv5sew" }, cyan700: { conditions: { lightMode: "sbv5sey", darkMode: "sbv5sez" }, defaultClass: "sbv5sey" }, cyan800: { conditions: { lightMode: "sbv5se10", darkMode: "sbv5se11" }, defaultClass: "sbv5se10" }, cyan900: { conditions: { lightMode: "sbv5se12", darkMode: "sbv5se13" }, defaultClass: "sbv5se12" }, gray50: { conditions: { lightMode: "sbv5se14", darkMode: "sbv5se15" }, defaultClass: "sbv5se14" }, gray100: { conditions: { lightMode: "sbv5se16", darkMode: "sbv5se17" }, defaultClass: "sbv5se16" }, gray200: { conditions: { lightMode: "sbv5se18", darkMode: "sbv5se19" }, defaultClass: "sbv5se18" }, gray300: { conditions: { lightMode: "sbv5se1a", darkMode: "sbv5se1b" }, defaultClass: "sbv5se1a" }, gray400: { conditions: { lightMode: "sbv5se1c", darkMode: "sbv5se1d" }, defaultClass: "sbv5se1c" }, gray500: { conditions: { lightMode: "sbv5se1e", darkMode: "sbv5se1f" }, defaultClass: "sbv5se1e" }, gray600: { conditions: { lightMode: "sbv5se1g", darkMode: "sbv5se1h" }, defaultClass: "sbv5se1g" }, gray700: { conditions: { lightMode: "sbv5se1i", darkMode: "sbv5se1j" }, defaultClass: "sbv5se1i" }, gray800: { conditions: { lightMode: "sbv5se1k", darkMode: "sbv5se1l" }, defaultClass: "sbv5se1k" }, gray900: { conditions: { lightMode: "sbv5se1m", darkMode: "sbv5se1n" }, defaultClass: "sbv5se1m" }, green50: { conditions: { lightMode: "sbv5se1o", darkMode: "sbv5se1p" }, defaultClass: "sbv5se1o" }, green100: { conditions: { lightMode: "sbv5se1q", darkMode: "sbv5se1r" }, defaultClass: "sbv5se1q" }, green200: { conditions: { lightMode: "sbv5se1s", darkMode: "sbv5se1t" }, defaultClass: "sbv5se1s" }, green300: { conditions: { lightMode: "sbv5se1u", darkMode: "sbv5se1v" }, defaultClass: "sbv5se1u" }, green400: { conditions: { lightMode: "sbv5se1w", darkMode: "sbv5se1x" }, defaultClass: "sbv5se1w" }, green500: { conditions: { lightMode: "sbv5se1y", darkMode: "sbv5se1z" }, defaultClass: "sbv5se1y" }, green600: { conditions: { lightMode: "sbv5se20", darkMode: "sbv5se21" }, defaultClass: "sbv5se20" }, green700: { conditions: { lightMode: "sbv5se22", darkMode: "sbv5se23" }, defaultClass: "sbv5se22" }, green800: { conditions: { lightMode: "sbv5se24", darkMode: "sbv5se25" }, defaultClass: "sbv5se24" }, green900: { conditions: { lightMode: "sbv5se26", darkMode: "sbv5se27" }, defaultClass: "sbv5se26" }, pink50: { conditions: { lightMode: "sbv5se28", darkMode: "sbv5se29" }, defaultClass: "sbv5se28" }, pink100: { conditions: { lightMode: "sbv5se2a", darkMode: "sbv5se2b" }, defaultClass: "sbv5se2a" }, pink200: { conditions: { lightMode: "sbv5se2c", darkMode: "sbv5se2d" }, defaultClass: "sbv5se2c" }, pink300: { conditions: { lightMode: "sbv5se2e", darkMode: "sbv5se2f" }, defaultClass: "sbv5se2e" }, pink400: { conditions: { lightMode: "sbv5se2g", darkMode: "sbv5se2h" }, defaultClass: "sbv5se2g" }, pink500: { conditions: { lightMode: "sbv5se2i", darkMode: "sbv5se2j" }, defaultClass: "sbv5se2i" }, pink600: { conditions: { lightMode: "sbv5se2k", darkMode: "sbv5se2l" }, defaultClass: "sbv5se2k" }, pink700: { conditions: { lightMode: "sbv5se2m", darkMode: "sbv5se2n" }, defaultClass: "sbv5se2m" }, pink800: { conditions: { lightMode: "sbv5se2o", darkMode: "sbv5se2p" }, defaultClass: "sbv5se2o" }, pink900: { conditions: { lightMode: "sbv5se2q", darkMode: "sbv5se2r" }, defaultClass: "sbv5se2q" }, purple50: { conditions: { lightMode: "sbv5se2s", darkMode: "sbv5se2t" }, defaultClass: "sbv5se2s" }, purple100: { conditions: { lightMode: "sbv5se2u", darkMode: "sbv5se2v" }, defaultClass: "sbv5se2u" }, purple200: { conditions: { lightMode: "sbv5se2w", darkMode: "sbv5se2x" }, defaultClass: "sbv5se2w" }, purple300: { conditions: { lightMode: "sbv5se2y", darkMode: "sbv5se2z" }, defaultClass: "sbv5se2y" }, purple400: { conditions: { lightMode: "sbv5se30", darkMode: "sbv5se31" }, defaultClass: "sbv5se30" }, purple500: { conditions: { lightMode: "sbv5se32", darkMode: "sbv5se33" }, defaultClass: "sbv5se32" }, purple600: { conditions: { lightMode: "sbv5se34", darkMode: "sbv5se35" }, defaultClass: "sbv5se34" }, purple700: { conditions: { lightMode: "sbv5se36", darkMode: "sbv5se37" }, defaultClass: "sbv5se36" }, purple800: { conditions: { lightMode: "sbv5se38", darkMode: "sbv5se39" }, defaultClass: "sbv5se38" }, purple900: { conditions: { lightMode: "sbv5se3a", darkMode: "sbv5se3b" }, defaultClass: "sbv5se3a" }, red50: { conditions: { lightMode: "sbv5se3c", darkMode: "sbv5se3d" }, defaultClass: "sbv5se3c" }, red100: { conditions: { lightMode: "sbv5se3e", darkMode: "sbv5se3f" }, defaultClass: "sbv5se3e" }, red200: { conditions: { lightMode: "sbv5se3g", darkMode: "sbv5se3h" }, defaultClass: "sbv5se3g" }, red300: { conditions: { lightMode: "sbv5se3i", darkMode: "sbv5se3j" }, defaultClass: "sbv5se3i" }, red400: { conditions: { lightMode: "sbv5se3k", darkMode: "sbv5se3l" }, defaultClass: "sbv5se3k" }, red500: { conditions: { lightMode: "sbv5se3m", darkMode: "sbv5se3n" }, defaultClass: "sbv5se3m" }, red600: { conditions: { lightMode: "sbv5se3o", darkMode: "sbv5se3p" }, defaultClass: "sbv5se3o" }, red700: { conditions: { lightMode: "sbv5se3q", darkMode: "sbv5se3r" }, defaultClass: "sbv5se3q" }, red800: { conditions: { lightMode: "sbv5se3s", darkMode: "sbv5se3t" }, defaultClass: "sbv5se3s" }, red900: { conditions: { lightMode: "sbv5se3u", darkMode: "sbv5se3v" }, defaultClass: "sbv5se3u" }, yellow50: { conditions: { lightMode: "sbv5se3w", darkMode: "sbv5se3x" }, defaultClass: "sbv5se3w" }, yellow100: { conditions: { lightMode: "sbv5se3y", darkMode: "sbv5se3z" }, defaultClass: "sbv5se3y" }, yellow200: { conditions: { lightMode: "sbv5se40", darkMode: "sbv5se41" }, defaultClass: "sbv5se40" }, yellow300: { conditions: { lightMode: "sbv5se42", darkMode: "sbv5se43" }, defaultClass: "sbv5se42" }, yellow400: { conditions: { lightMode: "sbv5se44", darkMode: "sbv5se45" }, defaultClass: "sbv5se44" }, yellow500: { conditions: { lightMode: "sbv5se46", darkMode: "sbv5se47" }, defaultClass: "sbv5se46" }, yellow600: { conditions: { lightMode: "sbv5se48", darkMode: "sbv5se49" }, defaultClass: "sbv5se48" }, yellow700: { conditions: { lightMode: "sbv5se4a", darkMode: "sbv5se4b" }, defaultClass: "sbv5se4a" }, yellow800: { conditions: { lightMode: "sbv5se4c", darkMode: "sbv5se4d" }, defaultClass: "sbv5se4c" }, yellow900: { conditions: { lightMode: "sbv5se4e", darkMode: "sbv5se4f" }, defaultClass: "sbv5se4e" } } }, background: { values: { blue50: { conditions: { lightMode: "sbv5se4g", darkMode: "sbv5se4h" }, defaultClass: "sbv5se4g" }, blue100: { conditions: { lightMode: "sbv5se4i", darkMode: "sbv5se4j" }, defaultClass: "sbv5se4i" }, blue200: { conditions: { lightMode: "sbv5se4k", darkMode: "sbv5se4l" }, defaultClass: "sbv5se4k" }, blue300: { conditions: { lightMode: "sbv5se4m", darkMode: "sbv5se4n" }, defaultClass: "sbv5se4m" }, blue400: { conditions: { lightMode: "sbv5se4o", darkMode: "sbv5se4p" }, defaultClass: "sbv5se4o" }, blue500: { conditions: { lightMode: "sbv5se4q", darkMode: "sbv5se4r" }, defaultClass: "sbv5se4q" }, blue600: { conditions: { lightMode: "sbv5se4s", darkMode: "sbv5se4t" }, defaultClass: "sbv5se4s" }, blue700: { conditions: { lightMode: "sbv5se4u", darkMode: "sbv5se4v" }, defaultClass: "sbv5se4u" }, blue800: { conditions: { lightMode: "sbv5se4w", darkMode: "sbv5se4x" }, defaultClass: "sbv5se4w" }, blue900: { conditions: { lightMode: "sbv5se4y", darkMode: "sbv5se4z" }, defaultClass: "sbv5se4y" }, cyan50: { conditions: { lightMode: "sbv5se50", darkMode: "sbv5se51" }, defaultClass: "sbv5se50" }, cyan100: { conditions: { lightMode: "sbv5se52", darkMode: "sbv5se53" }, defaultClass: "sbv5se52" }, cyan200: { conditions: { lightMode: "sbv5se54", darkMode: "sbv5se55" }, defaultClass: "sbv5se54" }, cyan300: { conditions: { lightMode: "sbv5se56", darkMode: "sbv5se57" }, defaultClass: "sbv5se56" }, cyan400: { conditions: { lightMode: "sbv5se58", darkMode: "sbv5se59" }, defaultClass: "sbv5se58" }, cyan500: { conditions: { lightMode: "sbv5se5a", darkMode: "sbv5se5b" }, defaultClass: "sbv5se5a" }, cyan600: { conditions: { lightMode: "sbv5se5c", darkMode: "sbv5se5d" }, defaultClass: "sbv5se5c" }, cyan700: { conditions: { lightMode: "sbv5se5e", darkMode: "sbv5se5f" }, defaultClass: "sbv5se5e" }, cyan800: { conditions: { lightMode: "sbv5se5g", darkMode: "sbv5se5h" }, defaultClass: "sbv5se5g" }, cyan900: { conditions: { lightMode: "sbv5se5i", darkMode: "sbv5se5j" }, defaultClass: "sbv5se5i" }, gray50: { conditions: { lightMode: "sbv5se5k", darkMode: "sbv5se5l" }, defaultClass: "sbv5se5k" }, gray100: { conditions: { lightMode: "sbv5se5m", darkMode: "sbv5se5n" }, defaultClass: "sbv5se5m" }, gray200: { conditions: { lightMode: "sbv5se5o", darkMode: "sbv5se5p" }, defaultClass: "sbv5se5o" }, gray300: { conditions: { lightMode: "sbv5se5q", darkMode: "sbv5se5r" }, defaultClass: "sbv5se5q" }, gray400: { conditions: { lightMode: "sbv5se5s", darkMode: "sbv5se5t" }, defaultClass: "sbv5se5s" }, gray500: { conditions: { lightMode: "sbv5se5u", darkMode: "sbv5se5v" }, defaultClass: "sbv5se5u" }, gray600: { conditions: { lightMode: "sbv5se5w", darkMode: "sbv5se5x" }, defaultClass: "sbv5se5w" }, gray700: { conditions: { lightMode: "sbv5se5y", darkMode: "sbv5se5z" }, defaultClass: "sbv5se5y" }, gray800: { conditions: { lightMode: "sbv5se60", darkMode: "sbv5se61" }, defaultClass: "sbv5se60" }, gray900: { conditions: { lightMode: "sbv5se62", darkMode: "sbv5se63" }, defaultClass: "sbv5se62" }, green50: { conditions: { lightMode: "sbv5se64", darkMode: "sbv5se65" }, defaultClass: "sbv5se64" }, green100: { conditions: { lightMode: "sbv5se66", darkMode: "sbv5se67" }, defaultClass: "sbv5se66" }, green200: { conditions: { lightMode: "sbv5se68", darkMode: "sbv5se69" }, defaultClass: "sbv5se68" }, green300: { conditions: { lightMode: "sbv5se6a", darkMode: "sbv5se6b" }, defaultClass: "sbv5se6a" }, green400: { conditions: { lightMode: "sbv5se6c", darkMode: "sbv5se6d" }, defaultClass: "sbv5se6c" }, green500: { conditions: { lightMode: "sbv5se6e", darkMode: "sbv5se6f" }, defaultClass: "sbv5se6e" }, green600: { conditions: { lightMode: "sbv5se6g", darkMode: "sbv5se6h" }, defaultClass: "sbv5se6g" }, green700: { conditions: { lightMode: "sbv5se6i", darkMode: "sbv5se6j" }, defaultClass: "sbv5se6i" }, green800: { conditions: { lightMode: "sbv5se6k", darkMode: "sbv5se6l" }, defaultClass: "sbv5se6k" }, green900: { conditions: { lightMode: "sbv5se6m", darkMode: "sbv5se6n" }, defaultClass: "sbv5se6m" }, pink50: { conditions: { lightMode: "sbv5se6o", darkMode: "sbv5se6p" }, defaultClass: "sbv5se6o" }, pink100: { conditions: { lightMode: "sbv5se6q", darkMode: "sbv5se6r" }, defaultClass: "sbv5se6q" }, pink200: { conditions: { lightMode: "sbv5se6s", darkMode: "sbv5se6t" }, defaultClass: "sbv5se6s" }, pink300: { conditions: { lightMode: "sbv5se6u", darkMode: "sbv5se6v" }, defaultClass: "sbv5se6u" }, pink400: { conditions: { lightMode: "sbv5se6w", darkMode: "sbv5se6x" }, defaultClass: "sbv5se6w" }, pink500: { conditions: { lightMode: "sbv5se6y", darkMode: "sbv5se6z" }, defaultClass: "sbv5se6y" }, pink600: { conditions: { lightMode: "sbv5se70", darkMode: "sbv5se71" }, defaultClass: "sbv5se70" }, pink700: { conditions: { lightMode: "sbv5se72", darkMode: "sbv5se73" }, defaultClass: "sbv5se72" }, pink800: { conditions: { lightMode: "sbv5se74", darkMode: "sbv5se75" }, defaultClass: "sbv5se74" }, pink900: { conditions: { lightMode: "sbv5se76", darkMode: "sbv5se77" }, defaultClass: "sbv5se76" }, purple50: { conditions: { lightMode: "sbv5se78", darkMode: "sbv5se79" }, defaultClass: "sbv5se78" }, purple100: { conditions: { lightMode: "sbv5se7a", darkMode: "sbv5se7b" }, defaultClass: "sbv5se7a" }, purple200: { conditions: { lightMode: "sbv5se7c", darkMode: "sbv5se7d" }, defaultClass: "sbv5se7c" }, purple300: { conditions: { lightMode: "sbv5se7e", darkMode: "sbv5se7f" }, defaultClass: "sbv5se7e" }, purple400: { conditions: { lightMode: "sbv5se7g", darkMode: "sbv5se7h" }, defaultClass: "sbv5se7g" }, purple500: { conditions: { lightMode: "sbv5se7i", darkMode: "sbv5se7j" }, defaultClass: "sbv5se7i" }, purple600: { conditions: { lightMode: "sbv5se7k", darkMode: "sbv5se7l" }, defaultClass: "sbv5se7k" }, purple700: { conditions: { lightMode: "sbv5se7m", darkMode: "sbv5se7n" }, defaultClass: "sbv5se7m" }, purple800: { conditions: { lightMode: "sbv5se7o", darkMode: "sbv5se7p" }, defaultClass: "sbv5se7o" }, purple900: { conditions: { lightMode: "sbv5se7q", darkMode: "sbv5se7r" }, defaultClass: "sbv5se7q" }, red50: { conditions: { lightMode: "sbv5se7s", darkMode: "sbv5se7t" }, defaultClass: "sbv5se7s" }, red100: { conditions: { lightMode: "sbv5se7u", darkMode: "sbv5se7v" }, defaultClass: "sbv5se7u" }, red200: { conditions: { lightMode: "sbv5se7w", darkMode: "sbv5se7x" }, defaultClass: "sbv5se7w" }, red300: { conditions: { lightMode: "sbv5se7y", darkMode: "sbv5se7z" }, defaultClass: "sbv5se7y" }, red400: { conditions: { lightMode: "sbv5se80", darkMode: "sbv5se81" }, defaultClass: "sbv5se80" }, red500: { conditions: { lightMode: "sbv5se82", darkMode: "sbv5se83" }, defaultClass: "sbv5se82" }, red600: { conditions: { lightMode: "sbv5se84", darkMode: "sbv5se85" }, defaultClass: "sbv5se84" }, red700: { conditions: { lightMode: "sbv5se86", darkMode: "sbv5se87" }, defaultClass: "sbv5se86" }, red800: { conditions: { lightMode: "sbv5se88", darkMode: "sbv5se89" }, defaultClass: "sbv5se88" }, red900: { conditions: { lightMode: "sbv5se8a", darkMode: "sbv5se8b" }, defaultClass: "sbv5se8a" }, yellow50: { conditions: { lightMode: "sbv5se8c", darkMode: "sbv5se8d" }, defaultClass: "sbv5se8c" }, yellow100: { conditions: { lightMode: "sbv5se8e", darkMode: "sbv5se8f" }, defaultClass: "sbv5se8e" }, yellow200: { conditions: { lightMode: "sbv5se8g", darkMode: "sbv5se8h" }, defaultClass: "sbv5se8g" }, yellow300: { conditions: { lightMode: "sbv5se8i", darkMode: "sbv5se8j" }, defaultClass: "sbv5se8i" }, yellow400: { conditions: { lightMode: "sbv5se8k", darkMode: "sbv5se8l" }, defaultClass: "sbv5se8k" }, yellow500: { conditions: { lightMode: "sbv5se8m", darkMode: "sbv5se8n" }, defaultClass: "sbv5se8m" }, yellow600: { conditions: { lightMode: "sbv5se8o", darkMode: "sbv5se8p" }, defaultClass: "sbv5se8o" }, yellow700: { conditions: { lightMode: "sbv5se8q", darkMode: "sbv5se8r" }, defaultClass: "sbv5se8q" }, yellow800: { conditions: { lightMode: "sbv5se8s", darkMode: "sbv5se8t" }, defaultClass: "sbv5se8s" }, yellow900: { conditions: { lightMode: "sbv5se8u", darkMode: "sbv5se8v" }, defaultClass: "sbv5se8u" } } } } });
export {
  Ms as Button,
  hs as sprinkles
};
