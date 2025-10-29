function Pm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var _o =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function An(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var $m = { exports: {} },
  vl = {},
  Rm = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vs = Symbol.for("react.element"),
  tx = Symbol.for("react.portal"),
  nx = Symbol.for("react.fragment"),
  rx = Symbol.for("react.strict_mode"),
  ox = Symbol.for("react.profiler"),
  ix = Symbol.for("react.provider"),
  sx = Symbol.for("react.context"),
  ax = Symbol.for("react.forward_ref"),
  lx = Symbol.for("react.suspense"),
  ux = Symbol.for("react.memo"),
  cx = Symbol.for("react.lazy"),
  Cp = Symbol.iterator;
function dx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cp && e[Cp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Tm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Om = Object.assign,
  Im = {};
function Yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Im),
    (this.updater = n || Tm);
}
Yo.prototype.isReactComponent = {};
Yo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lm() {}
Lm.prototype = Yo.prototype;
function Nd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Im),
    (this.updater = n || Tm);
}
var Ad = (Nd.prototype = new Lm());
Ad.constructor = Nd;
Om(Ad, Yo.prototype);
Ad.isPureReactComponent = !0;
var wp = Array.isArray,
  Mm = Object.prototype.hasOwnProperty,
  Fd = { current: null },
  Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Am(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mm.call(t, r) && !Nm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: vs,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Fd.current,
  };
}
function fx(e, t) {
  return {
    $$typeof: vs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vs;
}
function px(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var kp = /\/+/g;
function Cu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? px("" + e.key)
    : t.toString(36);
}
function da(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vs:
          case tx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Cu(s, 0) : r),
      wp(o)
        ? ((n = ""),
          e != null && (n = e.replace(kp, "$&/") + "/"),
          da(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Dd(o) &&
            (o = fx(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(kp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), wp(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Cu(i, a);
      s += da(i, t, n, l, o);
    }
  else if (((l = dx(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Cu(i, a++)), (s += da(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ns(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    da(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function hx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Lt = { current: null },
  fa = { transition: null },
  gx = {
    ReactCurrentDispatcher: Lt,
    ReactCurrentBatchConfig: fa,
    ReactCurrentOwner: Fd,
  };
we.Children = {
  map: Ns,
  forEach: function (e, t, n) {
    Ns(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ns(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ns(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
we.Component = Yo;
we.Fragment = nx;
we.Profiler = ox;
we.PureComponent = Nd;
we.StrictMode = rx;
we.Suspense = lx;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gx;
we.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Om({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Fd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mm.call(t, l) &&
        !Nm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: vs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
we.createContext = function (e) {
  return (
    (e = {
      $$typeof: sx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ix, _context: e }),
    (e.Consumer = e)
  );
};
we.createElement = Am;
we.createFactory = function (e) {
  var t = Am.bind(null, e);
  return (t.type = e), t;
};
we.createRef = function () {
  return { current: null };
};
we.forwardRef = function (e) {
  return { $$typeof: ax, render: e };
};
we.isValidElement = Dd;
we.lazy = function (e) {
  return { $$typeof: cx, _payload: { _status: -1, _result: e }, _init: hx };
};
we.memo = function (e, t) {
  return { $$typeof: ux, type: e, compare: t === void 0 ? null : t };
};
we.startTransition = function (e) {
  var t = fa.transition;
  fa.transition = {};
  try {
    e();
  } finally {
    fa.transition = t;
  }
};
we.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
we.useCallback = function (e, t) {
  return Lt.current.useCallback(e, t);
};
we.useContext = function (e) {
  return Lt.current.useContext(e);
};
we.useDebugValue = function () {};
we.useDeferredValue = function (e) {
  return Lt.current.useDeferredValue(e);
};
we.useEffect = function (e, t) {
  return Lt.current.useEffect(e, t);
};
we.useId = function () {
  return Lt.current.useId();
};
we.useImperativeHandle = function (e, t, n) {
  return Lt.current.useImperativeHandle(e, t, n);
};
we.useInsertionEffect = function (e, t) {
  return Lt.current.useInsertionEffect(e, t);
};
we.useLayoutEffect = function (e, t) {
  return Lt.current.useLayoutEffect(e, t);
};
we.useMemo = function (e, t) {
  return Lt.current.useMemo(e, t);
};
we.useReducer = function (e, t, n) {
  return Lt.current.useReducer(e, t, n);
};
we.useRef = function (e) {
  return Lt.current.useRef(e);
};
we.useState = function (e) {
  return Lt.current.useState(e);
};
we.useSyncExternalStore = function (e, t, n) {
  return Lt.current.useSyncExternalStore(e, t, n);
};
we.useTransition = function () {
  return Lt.current.useTransition();
};
we.version = "18.2.0";
Rm.exports = we;
var y = Rm.exports;
const _t = ml(y),
  Ra = Pm({ __proto__: null, default: _t }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mx = y,
  vx = Symbol.for("react.element"),
  yx = Symbol.for("react.fragment"),
  xx = Object.prototype.hasOwnProperty,
  bx = mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) xx.call(t, r) && !Sx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: vx,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: bx.current,
  };
}
vl.Fragment = yx;
vl.jsx = Fm;
vl.jsxs = Fm;
$m.exports = vl;
var S = $m.exports;
var hc = {},
  Dm = { exports: {} },
  Yt = {},
  jm = { exports: {} },
  Bm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, L) {
    var j = R.length;
    R.push(L);
    e: for (; 0 < j; ) {
      var V = (j - 1) >>> 1,
        B = R[V];
      if (0 < o(B, L)) (R[V] = L), (R[j] = B), (j = V);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var L = R[0],
      j = R.pop();
    if (j !== L) {
      R[0] = j;
      e: for (var V = 0, B = R.length, J = B >>> 1; V < J; ) {
        var Z = 2 * (V + 1) - 1,
          oe = R[Z],
          re = Z + 1,
          me = R[re];
        if (0 > o(oe, j))
          re < B && 0 > o(me, oe)
            ? ((R[V] = me), (R[re] = j), (V = re))
            : ((R[V] = oe), (R[Z] = j), (V = Z));
        else if (re < B && 0 > o(me, j)) (R[V] = me), (R[re] = j), (V = re);
        else break e;
      }
    }
    return L;
  }
  function o(R, L) {
    var j = R.sortIndex - L.sortIndex;
    return j !== 0 ? j : R.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    x = !1,
    v = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= R)
        r(u), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(u);
    }
  }
  function C(R) {
    if (((g = !1), m(R), !v))
      if (n(l) !== null) (v = !0), I($);
      else {
        var L = n(u);
        L !== null && A(C, L.startTime - R);
      }
  }
  function $(R, L) {
    (v = !1), g && ((g = !1), p(b), (b = -1)), (x = !0);
    var j = d;
    try {
      for (
        m(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (R && !M()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var B = V(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof B == "function" ? (f.callback = B) : f === n(l) && r(l),
            m(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var J = !0;
      else {
        var Z = n(u);
        Z !== null && A(C, Z.startTime - L), (J = !1);
      }
      return J;
    } finally {
      (f = null), (d = j), (x = !1);
    }
  }
  var O = !1,
    E = null,
    b = -1,
    w = 5,
    T = -1;
  function M() {
    return !(e.unstable_now() - T < w);
  }
  function N() {
    if (E !== null) {
      var R = e.unstable_now();
      T = R;
      var L = !0;
      try {
        L = E(!0, R);
      } finally {
        L ? D() : ((O = !1), (E = null));
      }
    } else O = !1;
  }
  var D;
  if (typeof h == "function")
    D = function () {
      h(N);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      P = F.port2;
    (F.port1.onmessage = N),
      (D = function () {
        P.postMessage(null);
      });
  } else
    D = function () {
      _(N, 0);
    };
  function I(R) {
    (E = R), O || ((O = !0), D());
  }
  function A(R, L) {
    b = _(function () {
      R(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), I($));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (w = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var j = d;
      d = L;
      try {
        return R();
      } finally {
        d = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var j = d;
      d = R;
      try {
        return L();
      } finally {
        d = j;
      }
    }),
    (e.unstable_scheduleCallback = function (R, L, j) {
      var V = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? V + j : V))
          : (j = V),
        R)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = j + B),
        (R = {
          id: c++,
          callback: L,
          priorityLevel: R,
          startTime: j,
          expirationTime: B,
          sortIndex: -1,
        }),
        j > V
          ? ((R.sortIndex = j),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (g ? (p(b), (b = -1)) : (g = !0), A(C, j - V)))
          : ((R.sortIndex = B), t(l, R), v || x || ((v = !0), I($))),
        R
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (R) {
      var L = d;
      return function () {
        var j = d;
        d = L;
        try {
          return R.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    });
})(Bm);
jm.exports = Bm;
var Cx = jm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm = y,
  qt = Cx;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Um = new Set(),
  Hi = {};
function Xr(e, t) {
  Mo(e, t), Mo(e + "Capture", t);
}
function Mo(e, t) {
  for (Hi[e] = t, e = 0; e < t.length; e++) Um.add(t[e]);
}
var Kn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  gc = Object.prototype.hasOwnProperty,
  wx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _p = {},
  Ep = {};
function kx(e) {
  return gc.call(Ep, e)
    ? !0
    : gc.call(_p, e)
    ? !1
    : wx.test(e)
    ? (Ep[e] = !0)
    : ((_p[e] = !0), !1);
}
function _x(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ex(e, t, n, r) {
  if (t === null || typeof t > "u" || _x(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Mt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new Mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  bt[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  bt[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  bt[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  bt[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  bt[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  bt[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  bt[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jd = /[\-:]([a-z])/g;
function Bd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jd, Bd);
    bt[t] = new Mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jd, Bd);
    bt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(jd, Bd);
  bt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  bt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
bt.xlinkHref = new Mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  bt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zd(e, t, n, r) {
  var o = bt.hasOwnProperty(t) ? bt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ex(t, n, o, r) && (n = null),
    r || o === null
      ? kx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zn = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  As = Symbol.for("react.element"),
  po = Symbol.for("react.portal"),
  ho = Symbol.for("react.fragment"),
  Ud = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  Wm = Symbol.for("react.provider"),
  Hm = Symbol.for("react.context"),
  Wd = Symbol.for("react.forward_ref"),
  vc = Symbol.for("react.suspense"),
  yc = Symbol.for("react.suspense_list"),
  Hd = Symbol.for("react.memo"),
  sr = Symbol.for("react.lazy"),
  Vm = Symbol.for("react.offscreen"),
  Pp = Symbol.iterator;
function li(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pp && e[Pp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qe = Object.assign,
  wu;
function _i(e) {
  if (wu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wu = (t && t[1]) || "";
    }
  return (
    `
` +
    wu +
    e
  );
}
var ku = !1;
function _u(e, t) {
  if (!e || ku) return "";
  ku = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (ku = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _i(e) : "";
}
function Px(e) {
  switch (e.tag) {
    case 5:
      return _i(e.type);
    case 16:
      return _i("Lazy");
    case 13:
      return _i("Suspense");
    case 19:
      return _i("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _u(e.type, !1)), e;
    case 11:
      return (e = _u(e.type.render, !1)), e;
    case 1:
      return (e = _u(e.type, !0)), e;
    default:
      return "";
  }
}
function xc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ho:
      return "Fragment";
    case po:
      return "Portal";
    case mc:
      return "Profiler";
    case Ud:
      return "StrictMode";
    case vc:
      return "Suspense";
    case yc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hm:
        return (e.displayName || "Context") + ".Consumer";
      case Wm:
        return (e._context.displayName || "Context") + ".Provider";
      case Wd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hd:
        return (
          (t = e.displayName || null), t !== null ? t : xc(e.type) || "Memo"
        );
      case sr:
        (t = e._payload), (e = e._init);
        try {
          return xc(e(t));
        } catch {}
    }
  return null;
}
function $x(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xc(t);
    case 8:
      return t === Ud ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Cr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Km(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rx(e) {
  var t = Km(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fs(e) {
  e._valueTracker || (e._valueTracker = Rx(e));
}
function Gm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Km(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ta(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bc(e, t) {
  var n = t.checked;
  return qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $p(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Cr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qm(e, t) {
  (t = t.checked), t != null && zd(e, "checked", t, !1);
}
function Sc(e, t) {
  qm(e, t);
  var n = Cr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Cc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Cc(e, t.type, Cr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Cc(e, t, n) {
  (t !== "number" || Ta(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ei = Array.isArray;
function Eo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Cr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function wc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (Ei(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Cr(n) };
}
function Ym(e, t) {
  var n = Cr(t.value),
    r = Cr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Op(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ds,
  Qm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ds = Ds || document.createElement("div"),
          Ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ds.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ti = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ti).forEach(function (e) {
  Tx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ti[t] = Ti[e]);
  });
});
function Jm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ti.hasOwnProperty(e) && Ti[e])
    ? ("" + t).trim()
    : t + "px";
}
function Zm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Jm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ox = qe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _c(e, t) {
  if (t) {
    if (Ox[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Ec(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pc = null;
function Vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $c = null,
  Po = null,
  $o = null;
function Ip(e) {
  if ((e = bs(e))) {
    if (typeof $c != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), $c(e.stateNode, e.type, t));
  }
}
function ev(e) {
  Po ? ($o ? $o.push(e) : ($o = [e])) : (Po = e);
}
function tv() {
  if (Po) {
    var e = Po,
      t = $o;
    if ((($o = Po = null), Ip(e), t)) for (e = 0; e < t.length; e++) Ip(t[e]);
  }
}
function nv(e, t) {
  return e(t);
}
function rv() {}
var Eu = !1;
function ov(e, t, n) {
  if (Eu) return e(t, n);
  Eu = !0;
  try {
    return nv(e, t, n);
  } finally {
    (Eu = !1), (Po !== null || $o !== null) && (rv(), tv());
  }
}
function Ki(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Rc = !1;
if (Kn)
  try {
    var ui = {};
    Object.defineProperty(ui, "passive", {
      get: function () {
        Rc = !0;
      },
    }),
      window.addEventListener("test", ui, ui),
      window.removeEventListener("test", ui, ui);
  } catch {
    Rc = !1;
  }
function Ix(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Oi = !1,
  Oa = null,
  Ia = !1,
  Tc = null,
  Lx = {
    onError: function (e) {
      (Oi = !0), (Oa = e);
    },
  };
function Mx(e, t, n, r, o, i, s, a, l) {
  (Oi = !1), (Oa = null), Ix.apply(Lx, arguments);
}
function Nx(e, t, n, r, o, i, s, a, l) {
  if ((Mx.apply(this, arguments), Oi)) {
    if (Oi) {
      var u = Oa;
      (Oi = !1), (Oa = null);
    } else throw Error(z(198));
    Ia || ((Ia = !0), (Tc = u));
  }
}
function Qr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function iv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lp(e) {
  if (Qr(e) !== e) throw Error(z(188));
}
function Ax(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qr(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Lp(o), e;
        if (i === r) return Lp(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function sv(e) {
  return (e = Ax(e)), e !== null ? av(e) : null;
}
function av(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = av(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lv = qt.unstable_scheduleCallback,
  Mp = qt.unstable_cancelCallback,
  Fx = qt.unstable_shouldYield,
  Dx = qt.unstable_requestPaint,
  et = qt.unstable_now,
  jx = qt.unstable_getCurrentPriorityLevel,
  Kd = qt.unstable_ImmediatePriority,
  uv = qt.unstable_UserBlockingPriority,
  La = qt.unstable_NormalPriority,
  Bx = qt.unstable_LowPriority,
  cv = qt.unstable_IdlePriority,
  yl = null,
  In = null;
function zx(e) {
  if (In && typeof In.onCommitFiberRoot == "function")
    try {
      In.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xn = Math.clz32 ? Math.clz32 : Hx,
  Ux = Math.log,
  Wx = Math.LN2;
function Hx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ux(e) / Wx) | 0)) | 0;
}
var js = 64,
  Bs = 4194304;
function Pi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Pi(a)) : ((i &= s), i !== 0 && (r = Pi(i)));
  } else (s = n & ~o), s !== 0 ? (r = Pi(s)) : i !== 0 && (r = Pi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Vx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - xn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = Vx(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Oc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dv() {
  var e = js;
  return (js <<= 1), !(js & 4194240) && (js = 64), e;
}
function Pu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xn(t)),
    (e[t] = n);
}
function Gx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Gd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Ne = 0;
function fv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pv,
  qd,
  hv,
  gv,
  mv,
  Ic = !1,
  zs = [],
  pr = null,
  hr = null,
  gr = null,
  Gi = new Map(),
  qi = new Map(),
  lr = [],
  qx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Np(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pr = null;
      break;
    case "dragenter":
    case "dragleave":
      hr = null;
      break;
    case "mouseover":
    case "mouseout":
      gr = null;
      break;
    case "pointerover":
    case "pointerout":
      Gi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qi.delete(t.pointerId);
  }
}
function ci(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = bs(t)), t !== null && qd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Yx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (pr = ci(pr, e, t, n, r, o)), !0;
    case "dragenter":
      return (hr = ci(hr, e, t, n, r, o)), !0;
    case "mouseover":
      return (gr = ci(gr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Gi.set(i, ci(Gi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), qi.set(i, ci(qi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function vv(e) {
  var t = Ar(e.target);
  if (t !== null) {
    var n = Qr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = iv(n)), t !== null)) {
          (e.blockedOn = t),
            mv(e.priority, function () {
              hv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function pa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pc = r), n.target.dispatchEvent(r), (Pc = null);
    } else return (t = bs(n)), t !== null && qd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ap(e, t, n) {
  pa(e) && n.delete(t);
}
function Xx() {
  (Ic = !1),
    pr !== null && pa(pr) && (pr = null),
    hr !== null && pa(hr) && (hr = null),
    gr !== null && pa(gr) && (gr = null),
    Gi.forEach(Ap),
    qi.forEach(Ap);
}
function di(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ic ||
      ((Ic = !0),
      qt.unstable_scheduleCallback(qt.unstable_NormalPriority, Xx)));
}
function Yi(e) {
  function t(o) {
    return di(o, e);
  }
  if (0 < zs.length) {
    di(zs[0], e);
    for (var n = 1; n < zs.length; n++) {
      var r = zs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pr !== null && di(pr, e),
      hr !== null && di(hr, e),
      gr !== null && di(gr, e),
      Gi.forEach(t),
      qi.forEach(t),
      n = 0;
    n < lr.length;
    n++
  )
    (r = lr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lr.length && ((n = lr[0]), n.blockedOn === null); )
    vv(n), n.blockedOn === null && lr.shift();
}
var Ro = Zn.ReactCurrentBatchConfig,
  Na = !0;
function Qx(e, t, n, r) {
  var o = Ne,
    i = Ro.transition;
  Ro.transition = null;
  try {
    (Ne = 1), Yd(e, t, n, r);
  } finally {
    (Ne = o), (Ro.transition = i);
  }
}
function Jx(e, t, n, r) {
  var o = Ne,
    i = Ro.transition;
  Ro.transition = null;
  try {
    (Ne = 4), Yd(e, t, n, r);
  } finally {
    (Ne = o), (Ro.transition = i);
  }
}
function Yd(e, t, n, r) {
  if (Na) {
    var o = Lc(e, t, n, r);
    if (o === null) Fu(e, t, r, Aa, n), Np(e, r);
    else if (Yx(o, e, t, n, r)) r.stopPropagation();
    else if ((Np(e, r), t & 4 && -1 < qx.indexOf(e))) {
      for (; o !== null; ) {
        var i = bs(o);
        if (
          (i !== null && pv(i),
          (i = Lc(e, t, n, r)),
          i === null && Fu(e, t, r, Aa, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Fu(e, t, r, null, n);
  }
}
var Aa = null;
function Lc(e, t, n, r) {
  if (((Aa = null), (e = Vd(r)), (e = Ar(e)), e !== null))
    if (((t = Qr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = iv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Aa = e), null;
}
function yv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (jx()) {
        case Kd:
          return 1;
        case uv:
          return 4;
        case La:
        case Bx:
          return 16;
        case cv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cr = null,
  Xd = null,
  ha = null;
function xv() {
  if (ha) return ha;
  var e,
    t = Xd,
    n = t.length,
    r,
    o = "value" in cr ? cr.value : cr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ha = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ga(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Us() {
  return !0;
}
function Fp() {
  return !1;
}
function Xt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Us
        : Fp),
      (this.isPropagationStopped = Fp),
      this
    );
  }
  return (
    qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Us));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Us));
      },
      persist: function () {},
      isPersistent: Us,
    }),
    t
  );
}
var Xo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qd = Xt(Xo),
  xs = qe({}, Xo, { view: 0, detail: 0 }),
  Zx = Xt(xs),
  $u,
  Ru,
  fi,
  xl = qe({}, xs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== fi &&
            (fi && e.type === "mousemove"
              ? (($u = e.screenX - fi.screenX), (Ru = e.screenY - fi.screenY))
              : (Ru = $u = 0),
            (fi = e)),
          $u);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ru;
    },
  }),
  Dp = Xt(xl),
  eb = qe({}, xl, { dataTransfer: 0 }),
  tb = Xt(eb),
  nb = qe({}, xs, { relatedTarget: 0 }),
  Tu = Xt(nb),
  rb = qe({}, Xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ob = Xt(rb),
  ib = qe({}, Xo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sb = Xt(ib),
  ab = qe({}, Xo, { data: 0 }),
  jp = Xt(ab),
  lb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ub = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function db(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cb[e]) ? !!t[e] : !1;
}
function Jd() {
  return db;
}
var fb = qe({}, xs, {
    key: function (e) {
      if (e.key) {
        var t = lb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ga(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ub[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jd,
    charCode: function (e) {
      return e.type === "keypress" ? ga(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ga(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pb = Xt(fb),
  hb = qe({}, xl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Bp = Xt(hb),
  gb = qe({}, xs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jd,
  }),
  mb = Xt(gb),
  vb = qe({}, Xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yb = Xt(vb),
  xb = qe({}, xl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bb = Xt(xb),
  Sb = [9, 13, 27, 32],
  Zd = Kn && "CompositionEvent" in window,
  Ii = null;
Kn && "documentMode" in document && (Ii = document.documentMode);
var Cb = Kn && "TextEvent" in window && !Ii,
  bv = Kn && (!Zd || (Ii && 8 < Ii && 11 >= Ii)),
  zp = String.fromCharCode(32),
  Up = !1;
function Sv(e, t) {
  switch (e) {
    case "keyup":
      return Sb.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var go = !1;
function wb(e, t) {
  switch (e) {
    case "compositionend":
      return Cv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Up = !0), zp);
    case "textInput":
      return (e = t.data), e === zp && Up ? null : e;
    default:
      return null;
  }
}
function kb(e, t) {
  if (go)
    return e === "compositionend" || (!Zd && Sv(e, t))
      ? ((e = xv()), (ha = Xd = cr = null), (go = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _b = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_b[e.type] : t === "textarea";
}
function wv(e, t, n, r) {
  ev(r),
    (t = Fa(t, "onChange")),
    0 < t.length &&
      ((n = new Qd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Li = null,
  Xi = null;
function Eb(e) {
  Mv(e, 0);
}
function bl(e) {
  var t = yo(e);
  if (Gm(t)) return e;
}
function Pb(e, t) {
  if (e === "change") return t;
}
var kv = !1;
if (Kn) {
  var Ou;
  if (Kn) {
    var Iu = "oninput" in document;
    if (!Iu) {
      var Hp = document.createElement("div");
      Hp.setAttribute("oninput", "return;"),
        (Iu = typeof Hp.oninput == "function");
    }
    Ou = Iu;
  } else Ou = !1;
  kv = Ou && (!document.documentMode || 9 < document.documentMode);
}
function Vp() {
  Li && (Li.detachEvent("onpropertychange", _v), (Xi = Li = null));
}
function _v(e) {
  if (e.propertyName === "value" && bl(Xi)) {
    var t = [];
    wv(t, Xi, e, Vd(e)), ov(Eb, t);
  }
}
function $b(e, t, n) {
  e === "focusin"
    ? (Vp(), (Li = t), (Xi = n), Li.attachEvent("onpropertychange", _v))
    : e === "focusout" && Vp();
}
function Rb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bl(Xi);
}
function Tb(e, t) {
  if (e === "click") return bl(t);
}
function Ob(e, t) {
  if (e === "input" || e === "change") return bl(t);
}
function Ib(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sn = typeof Object.is == "function" ? Object.is : Ib;
function Qi(e, t) {
  if (Sn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!gc.call(t, o) || !Sn(e[o], t[o])) return !1;
  }
  return !0;
}
function Kp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gp(e, t) {
  var n = Kp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kp(n);
  }
}
function Ev(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ev(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pv() {
  for (var e = window, t = Ta(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ta(e.document);
  }
  return t;
}
function ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Lb(e) {
  var t = Pv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ev(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ef(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Gp(n, i));
        var s = Gp(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mb = Kn && "documentMode" in document && 11 >= document.documentMode,
  mo = null,
  Mc = null,
  Mi = null,
  Nc = !1;
function qp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Nc ||
    mo == null ||
    mo !== Ta(r) ||
    ((r = mo),
    "selectionStart" in r && ef(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mi && Qi(Mi, r)) ||
      ((Mi = r),
      (r = Fa(Mc, "onSelect")),
      0 < r.length &&
        ((t = new Qd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mo))));
}
function Ws(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vo = {
    animationend: Ws("Animation", "AnimationEnd"),
    animationiteration: Ws("Animation", "AnimationIteration"),
    animationstart: Ws("Animation", "AnimationStart"),
    transitionend: Ws("Transition", "TransitionEnd"),
  },
  Lu = {},
  $v = {};
Kn &&
  (($v = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vo.animationend.animation,
    delete vo.animationiteration.animation,
    delete vo.animationstart.animation),
  "TransitionEvent" in window || delete vo.transitionend.transition);
function Sl(e) {
  if (Lu[e]) return Lu[e];
  if (!vo[e]) return e;
  var t = vo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $v) return (Lu[e] = t[n]);
  return e;
}
var Rv = Sl("animationend"),
  Tv = Sl("animationiteration"),
  Ov = Sl("animationstart"),
  Iv = Sl("transitionend"),
  Lv = new Map(),
  Yp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _r(e, t) {
  Lv.set(e, t), Xr(t, [e]);
}
for (var Mu = 0; Mu < Yp.length; Mu++) {
  var Nu = Yp[Mu],
    Nb = Nu.toLowerCase(),
    Ab = Nu[0].toUpperCase() + Nu.slice(1);
  _r(Nb, "on" + Ab);
}
_r(Rv, "onAnimationEnd");
_r(Tv, "onAnimationIteration");
_r(Ov, "onAnimationStart");
_r("dblclick", "onDoubleClick");
_r("focusin", "onFocus");
_r("focusout", "onBlur");
_r(Iv, "onTransitionEnd");
Mo("onMouseEnter", ["mouseout", "mouseover"]);
Mo("onMouseLeave", ["mouseout", "mouseover"]);
Mo("onPointerEnter", ["pointerout", "pointerover"]);
Mo("onPointerLeave", ["pointerout", "pointerover"]);
Xr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Xr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Xr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Xr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $i =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fb = new Set("cancel close invalid load scroll toggle".split(" ").concat($i));
function Xp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Nx(r, t, void 0, e), (e.currentTarget = null);
}
function Mv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Xp(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Xp(o, a, u), (i = l);
        }
    }
  }
  if (Ia) throw ((e = Tc), (Ia = !1), (Tc = null), e);
}
function ze(e, t) {
  var n = t[Bc];
  n === void 0 && (n = t[Bc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nv(t, e, 2, !1), n.add(r));
}
function Au(e, t, n) {
  var r = 0;
  t && (r |= 4), Nv(n, e, r, t);
}
var Hs = "_reactListening" + Math.random().toString(36).slice(2);
function Ji(e) {
  if (!e[Hs]) {
    (e[Hs] = !0),
      Um.forEach(function (n) {
        n !== "selectionchange" && (Fb.has(n) || Au(n, !1, e), Au(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hs] || ((t[Hs] = !0), Au("selectionchange", !1, t));
  }
}
function Nv(e, t, n, r) {
  switch (yv(t)) {
    case 1:
      var o = Qx;
      break;
    case 4:
      o = Jx;
      break;
    default:
      o = Yd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Rc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Fu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Ar(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ov(function () {
    var u = i,
      c = Vd(n),
      f = [];
    e: {
      var d = Lv.get(e);
      if (d !== void 0) {
        var x = Qd,
          v = e;
        switch (e) {
          case "keypress":
            if (ga(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = pb;
            break;
          case "focusin":
            (v = "focus"), (x = Tu);
            break;
          case "focusout":
            (v = "blur"), (x = Tu);
            break;
          case "beforeblur":
          case "afterblur":
            x = Tu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Dp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = tb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = mb;
            break;
          case Rv:
          case Tv:
          case Ov:
            x = ob;
            break;
          case Iv:
            x = yb;
            break;
          case "scroll":
            x = Zx;
            break;
          case "wheel":
            x = bb;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = sb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Bp;
        }
        var g = (t & 4) !== 0,
          _ = !g && e === "scroll",
          p = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              p !== null && ((C = Ki(h, p)), C != null && g.push(Zi(h, C, m)))),
            _)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((d = new x(d, v, null, n, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Pc &&
            (v = n.relatedTarget || n.fromElement) &&
            (Ar(v) || v[Gn]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? Ar(v) : null),
              v !== null &&
                ((_ = Qr(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((g = Dp),
            (C = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Bp),
              (C = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (_ = x == null ? d : yo(x)),
            (m = v == null ? d : yo(v)),
            (d = new g(C, h + "leave", x, n, c)),
            (d.target = _),
            (d.relatedTarget = m),
            (C = null),
            Ar(c) === u &&
              ((g = new g(p, h + "enter", v, n, c)),
              (g.target = m),
              (g.relatedTarget = _),
              (C = g)),
            (_ = C),
            x && v)
          )
            t: {
              for (g = x, p = v, h = 0, m = g; m; m = Jr(m)) h++;
              for (m = 0, C = p; C; C = Jr(C)) m++;
              for (; 0 < h - m; ) (g = Jr(g)), h--;
              for (; 0 < m - h; ) (p = Jr(p)), m--;
              for (; h--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Jr(g)), (p = Jr(p));
              }
              g = null;
            }
          else g = null;
          x !== null && Qp(f, d, x, g, !1),
            v !== null && _ !== null && Qp(f, _, v, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? yo(u) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === "select" || (x === "input" && d.type === "file"))
        )
          var $ = Pb;
        else if (Wp(d))
          if (kv) $ = Ob;
          else {
            $ = Rb;
            var O = $b;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            ($ = Tb);
        if ($ && ($ = $(e, u))) {
          wv(f, $, n, c);
          break e;
        }
        O && O(e, d, u),
          e === "focusout" &&
            (O = d._wrapperState) &&
            O.controlled &&
            d.type === "number" &&
            Cc(d, "number", d.value);
      }
      switch (((O = u ? yo(u) : window), e)) {
        case "focusin":
          (Wp(O) || O.contentEditable === "true") &&
            ((mo = O), (Mc = u), (Mi = null));
          break;
        case "focusout":
          Mi = Mc = mo = null;
          break;
        case "mousedown":
          Nc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Nc = !1), qp(f, n, c);
          break;
        case "selectionchange":
          if (Mb) break;
        case "keydown":
        case "keyup":
          qp(f, n, c);
      }
      var E;
      if (Zd)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        go
          ? Sv(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (bv &&
          n.locale !== "ko" &&
          (go || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && go && (E = xv())
            : ((cr = c),
              (Xd = "value" in cr ? cr.value : cr.textContent),
              (go = !0))),
        (O = Fa(u, b)),
        0 < O.length &&
          ((b = new jp(b, e, null, n, c)),
          f.push({ event: b, listeners: O }),
          E ? (b.data = E) : ((E = Cv(n)), E !== null && (b.data = E)))),
        (E = Cb ? wb(e, n) : kb(e, n)) &&
          ((u = Fa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new jp("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Mv(f, t);
  });
}
function Zi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ki(e, n)),
      i != null && r.unshift(Zi(e, i, o)),
      (i = Ki(e, t)),
      i != null && r.push(Zi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Jr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Ki(n, i)), l != null && s.unshift(Zi(n, l, a)))
        : o || ((l = Ki(n, i)), l != null && s.push(Zi(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Db = /\r\n?/g,
  jb = /\u0000|\uFFFD/g;
function Jp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Db,
      `
`
    )
    .replace(jb, "");
}
function Vs(e, t, n) {
  if (((t = Jp(t)), Jp(e) !== t && n)) throw Error(z(425));
}
function Da() {}
var Ac = null,
  Fc = null;
function Dc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var jc = typeof setTimeout == "function" ? setTimeout : void 0,
  Bb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zp = typeof Promise == "function" ? Promise : void 0,
  zb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zp < "u"
      ? function (e) {
          return Zp.resolve(null).then(e).catch(Ub);
        }
      : jc;
function Ub(e) {
  setTimeout(function () {
    throw e;
  });
}
function Du(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Yi(t);
}
function mr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function eh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qo = Math.random().toString(36).slice(2),
  $n = "__reactFiber$" + Qo,
  es = "__reactProps$" + Qo,
  Gn = "__reactContainer$" + Qo,
  Bc = "__reactEvents$" + Qo,
  Wb = "__reactListeners$" + Qo,
  Hb = "__reactHandles$" + Qo;
function Ar(e) {
  var t = e[$n];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Gn] || n[$n])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = eh(e); e !== null; ) {
          if ((n = e[$n])) return n;
          e = eh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bs(e) {
  return (
    (e = e[$n] || e[Gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Cl(e) {
  return e[es] || null;
}
var zc = [],
  xo = -1;
function Er(e) {
  return { current: e };
}
function Ue(e) {
  0 > xo || ((e.current = zc[xo]), (zc[xo] = null), xo--);
}
function je(e, t) {
  xo++, (zc[xo] = e.current), (e.current = t);
}
var wr = {},
  Et = Er(wr),
  Dt = Er(!1),
  Wr = wr;
function No(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function jt(e) {
  return (e = e.childContextTypes), e != null;
}
function ja() {
  Ue(Dt), Ue(Et);
}
function th(e, t, n) {
  if (Et.current !== wr) throw Error(z(168));
  je(Et, t), je(Dt, n);
}
function Av(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, $x(e) || "Unknown", o));
  return qe({}, n, r);
}
function Ba(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wr),
    (Wr = Et.current),
    je(Et, e),
    je(Dt, Dt.current),
    !0
  );
}
function nh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = Av(e, t, Wr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ue(Dt),
      Ue(Et),
      je(Et, e))
    : Ue(Dt),
    je(Dt, n);
}
var Bn = null,
  wl = !1,
  ju = !1;
function Fv(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function Vb(e) {
  (wl = !0), Fv(e);
}
function Pr() {
  if (!ju && Bn !== null) {
    ju = !0;
    var e = 0,
      t = Ne;
    try {
      var n = Bn;
      for (Ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bn = null), (wl = !1);
    } catch (o) {
      throw (Bn !== null && (Bn = Bn.slice(e + 1)), lv(Kd, Pr), o);
    } finally {
      (Ne = t), (ju = !1);
    }
  }
  return null;
}
var bo = [],
  So = 0,
  za = null,
  Ua = 0,
  tn = [],
  nn = 0,
  Hr = null,
  Un = 1,
  Wn = "";
function Or(e, t) {
  (bo[So++] = Ua), (bo[So++] = za), (za = e), (Ua = t);
}
function Dv(e, t, n) {
  (tn[nn++] = Un), (tn[nn++] = Wn), (tn[nn++] = Hr), (Hr = e);
  var r = Un;
  e = Wn;
  var o = 32 - xn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Un = (1 << (32 - xn(t) + o)) | (n << o) | r),
      (Wn = i + e);
  } else (Un = (1 << i) | (n << o) | r), (Wn = e);
}
function tf(e) {
  e.return !== null && (Or(e, 1), Dv(e, 1, 0));
}
function nf(e) {
  for (; e === za; )
    (za = bo[--So]), (bo[So] = null), (Ua = bo[--So]), (bo[So] = null);
  for (; e === Hr; )
    (Hr = tn[--nn]),
      (tn[nn] = null),
      (Wn = tn[--nn]),
      (tn[nn] = null),
      (Un = tn[--nn]),
      (tn[nn] = null);
}
var Kt = null,
  Vt = null,
  He = !1,
  yn = null;
function jv(e, t) {
  var n = on(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Kt = e), (Vt = mr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Kt = e), (Vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Hr !== null ? { id: Un, overflow: Wn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = on(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Kt = e),
            (Vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Uc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wc(e) {
  if (He) {
    var t = Vt;
    if (t) {
      var n = t;
      if (!rh(e, t)) {
        if (Uc(e)) throw Error(z(418));
        t = mr(n.nextSibling);
        var r = Kt;
        t && rh(e, t)
          ? jv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (He = !1), (Kt = e));
      }
    } else {
      if (Uc(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (He = !1), (Kt = e);
    }
  }
}
function oh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Kt = e;
}
function Ks(e) {
  if (e !== Kt) return !1;
  if (!He) return oh(e), (He = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Dc(e.type, e.memoizedProps))),
    t && (t = Vt))
  ) {
    if (Uc(e)) throw (Bv(), Error(z(418)));
    for (; t; ) jv(e, t), (t = mr(t.nextSibling));
  }
  if ((oh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Vt = mr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Vt = null;
    }
  } else Vt = Kt ? mr(e.stateNode.nextSibling) : null;
  return !0;
}
function Bv() {
  for (var e = Vt; e; ) e = mr(e.nextSibling);
}
function Ao() {
  (Vt = Kt = null), (He = !1);
}
function rf(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
var Kb = Zn.ReactCurrentBatchConfig;
function mn(e, t) {
  if (e && e.defaultProps) {
    (t = qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wa = Er(null),
  Ha = null,
  Co = null,
  of = null;
function sf() {
  of = Co = Ha = null;
}
function af(e) {
  var t = Wa.current;
  Ue(Wa), (e._currentValue = t);
}
function Hc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function To(e, t) {
  (Ha = e),
    (of = Co = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ft = !0), (e.firstContext = null));
}
function ln(e) {
  var t = e._currentValue;
  if (of !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Co === null)) {
      if (Ha === null) throw Error(z(308));
      (Co = e), (Ha.dependencies = { lanes: 0, firstContext: e });
    } else Co = Co.next = e;
  return t;
}
var Fr = null;
function lf(e) {
  Fr === null ? (Fr = [e]) : Fr.push(e);
}
function zv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), lf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    qn(e, r)
  );
}
function qn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ar = !1;
function uf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Hn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $e & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      qn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), lf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    qn(e, n)
  );
}
function ma(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gd(e, n);
  }
}
function ih(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Va(e, t, n, r) {
  var o = e.updateQueue;
  ar = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        x = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((d = t), (x = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                f = v.call(x, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (d = typeof v == "function" ? v.call(x, f, d) : v),
                d == null)
              )
                break e;
              f = qe({}, f, d);
              break e;
            case 2:
              ar = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (x = {
          eventTime: x,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = x), (l = f)) : (c = c.next = x),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function sh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var Wv = new zm.Component().refs;
function Vc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      o = xr(e),
      i = Hn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vr(e, i, o)),
      t !== null && (bn(t, e, o, r), ma(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      o = xr(e),
      i = Hn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vr(e, i, o)),
      t !== null && (bn(t, e, o, r), ma(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Tt(),
      r = xr(e),
      o = Hn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = vr(e, o, r)),
      t !== null && (bn(t, e, r, n), ma(t, e, r));
  },
};
function ah(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qi(n, r) || !Qi(o, i)
      : !0
  );
}
function Hv(e, t, n) {
  var r = !1,
    o = wr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ln(i))
      : ((o = jt(t) ? Wr : Et.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? No(e, o) : wr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function lh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Kc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Wv), uf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ln(i))
    : ((i = jt(t) ? Wr : Et.current), (o.context = No(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Vc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && kl.enqueueReplaceState(o, o.state, null),
      Va(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function pi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Wv && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Gs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function uh(e) {
  var t = e._init;
  return t(e._payload);
}
function Vv(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = br(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, C) {
    return h === null || h.tag !== 6
      ? ((h = Ku(m, p.mode, C)), (h.return = p), h)
      : ((h = o(h, m)), (h.return = p), h);
  }
  function l(p, h, m, C) {
    var $ = m.type;
    return $ === ho
      ? c(p, h, m.props.children, C, m.key)
      : h !== null &&
        (h.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === sr &&
            uh($) === h.type))
      ? ((C = o(h, m.props)), (C.ref = pi(p, h, m)), (C.return = p), C)
      : ((C = Ca(m.type, m.key, m.props, null, p.mode, C)),
        (C.ref = pi(p, h, m)),
        (C.return = p),
        C);
  }
  function u(p, h, m, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Gu(m, p.mode, C)), (h.return = p), h)
      : ((h = o(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, C, $) {
    return h === null || h.tag !== 7
      ? ((h = Ur(m, p.mode, C, $)), (h.return = p), h)
      : ((h = o(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ku("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case As:
          return (
            (m = Ca(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = pi(p, null, h)),
            (m.return = p),
            m
          );
        case po:
          return (h = Gu(h, p.mode, m)), (h.return = p), h;
        case sr:
          var C = h._init;
          return f(p, C(h._payload), m);
      }
      if (Ei(h) || li(h))
        return (h = Ur(h, p.mode, m, null)), (h.return = p), h;
      Gs(p, h);
    }
    return null;
  }
  function d(p, h, m, C) {
    var $ = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return $ !== null ? null : a(p, h, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case As:
          return m.key === $ ? l(p, h, m, C) : null;
        case po:
          return m.key === $ ? u(p, h, m, C) : null;
        case sr:
          return ($ = m._init), d(p, h, $(m._payload), C);
      }
      if (Ei(m) || li(m)) return $ !== null ? null : c(p, h, m, C, null);
      Gs(p, m);
    }
    return null;
  }
  function x(p, h, m, C, $) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (p = p.get(m) || null), a(h, p, "" + C, $);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case As:
          return (p = p.get(C.key === null ? m : C.key) || null), l(h, p, C, $);
        case po:
          return (p = p.get(C.key === null ? m : C.key) || null), u(h, p, C, $);
        case sr:
          var O = C._init;
          return x(p, h, m, O(C._payload), $);
      }
      if (Ei(C) || li(C)) return (p = p.get(m) || null), c(h, p, C, $, null);
      Gs(h, C);
    }
    return null;
  }
  function v(p, h, m, C) {
    for (
      var $ = null, O = null, E = h, b = (h = 0), w = null;
      E !== null && b < m.length;
      b++
    ) {
      E.index > b ? ((w = E), (E = null)) : (w = E.sibling);
      var T = d(p, E, m[b], C);
      if (T === null) {
        E === null && (E = w);
        break;
      }
      e && E && T.alternate === null && t(p, E),
        (h = i(T, h, b)),
        O === null ? ($ = T) : (O.sibling = T),
        (O = T),
        (E = w);
    }
    if (b === m.length) return n(p, E), He && Or(p, b), $;
    if (E === null) {
      for (; b < m.length; b++)
        (E = f(p, m[b], C)),
          E !== null &&
            ((h = i(E, h, b)), O === null ? ($ = E) : (O.sibling = E), (O = E));
      return He && Or(p, b), $;
    }
    for (E = r(p, E); b < m.length; b++)
      (w = x(E, p, b, m[b], C)),
        w !== null &&
          (e && w.alternate !== null && E.delete(w.key === null ? b : w.key),
          (h = i(w, h, b)),
          O === null ? ($ = w) : (O.sibling = w),
          (O = w));
    return (
      e &&
        E.forEach(function (M) {
          return t(p, M);
        }),
      He && Or(p, b),
      $
    );
  }
  function g(p, h, m, C) {
    var $ = li(m);
    if (typeof $ != "function") throw Error(z(150));
    if (((m = $.call(m)), m == null)) throw Error(z(151));
    for (
      var O = ($ = null), E = h, b = (h = 0), w = null, T = m.next();
      E !== null && !T.done;
      b++, T = m.next()
    ) {
      E.index > b ? ((w = E), (E = null)) : (w = E.sibling);
      var M = d(p, E, T.value, C);
      if (M === null) {
        E === null && (E = w);
        break;
      }
      e && E && M.alternate === null && t(p, E),
        (h = i(M, h, b)),
        O === null ? ($ = M) : (O.sibling = M),
        (O = M),
        (E = w);
    }
    if (T.done) return n(p, E), He && Or(p, b), $;
    if (E === null) {
      for (; !T.done; b++, T = m.next())
        (T = f(p, T.value, C)),
          T !== null &&
            ((h = i(T, h, b)), O === null ? ($ = T) : (O.sibling = T), (O = T));
      return He && Or(p, b), $;
    }
    for (E = r(p, E); !T.done; b++, T = m.next())
      (T = x(E, p, b, T.value, C)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? b : T.key),
          (h = i(T, h, b)),
          O === null ? ($ = T) : (O.sibling = T),
          (O = T));
    return (
      e &&
        E.forEach(function (N) {
          return t(p, N);
        }),
      He && Or(p, b),
      $
    );
  }
  function _(p, h, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === ho &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case As:
          e: {
            for (var $ = m.key, O = h; O !== null; ) {
              if (O.key === $) {
                if ((($ = m.type), $ === ho)) {
                  if (O.tag === 7) {
                    n(p, O.sibling),
                      (h = o(O, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  O.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === sr &&
                    uh($) === O.type)
                ) {
                  n(p, O.sibling),
                    (h = o(O, m.props)),
                    (h.ref = pi(p, O, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, O);
                break;
              } else t(p, O);
              O = O.sibling;
            }
            m.type === ho
              ? ((h = Ur(m.props.children, p.mode, C, m.key)),
                (h.return = p),
                (p = h))
              : ((C = Ca(m.type, m.key, m.props, null, p.mode, C)),
                (C.ref = pi(p, h, m)),
                (C.return = p),
                (p = C));
          }
          return s(p);
        case po:
          e: {
            for (O = m.key; h !== null; ) {
              if (h.key === O)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Gu(m, p.mode, C)), (h.return = p), (p = h);
          }
          return s(p);
        case sr:
          return (O = m._init), _(p, h, O(m._payload), C);
      }
      if (Ei(m)) return v(p, h, m, C);
      if (li(m)) return g(p, h, m, C);
      Gs(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Ku(m, p.mode, C)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return _;
}
var Fo = Vv(!0),
  Kv = Vv(!1),
  Ss = {},
  Ln = Er(Ss),
  ts = Er(Ss),
  ns = Er(Ss);
function Dr(e) {
  if (e === Ss) throw Error(z(174));
  return e;
}
function cf(e, t) {
  switch ((je(ns, t), je(ts, e), je(Ln, Ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kc(t, e));
  }
  Ue(Ln), je(Ln, t);
}
function Do() {
  Ue(Ln), Ue(ts), Ue(ns);
}
function Gv(e) {
  Dr(ns.current);
  var t = Dr(Ln.current),
    n = kc(t, e.type);
  t !== n && (je(ts, e), je(Ln, n));
}
function df(e) {
  ts.current === e && (Ue(Ln), Ue(ts));
}
var Ve = Er(0);
function Ka(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bu = [];
function ff() {
  for (var e = 0; e < Bu.length; e++)
    Bu[e]._workInProgressVersionPrimary = null;
  Bu.length = 0;
}
var va = Zn.ReactCurrentDispatcher,
  zu = Zn.ReactCurrentBatchConfig,
  Vr = 0,
  Ge = null,
  ct = null,
  pt = null,
  Ga = !1,
  Ni = !1,
  rs = 0,
  Gb = 0;
function St() {
  throw Error(z(321));
}
function pf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Sn(e[n], t[n])) return !1;
  return !0;
}
function hf(e, t, n, r, o, i) {
  if (
    ((Vr = i),
    (Ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (va.current = e === null || e.memoizedState === null ? Qb : Jb),
    (e = n(r, o)),
    Ni)
  ) {
    i = 0;
    do {
      if (((Ni = !1), (rs = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (pt = ct = null),
        (t.updateQueue = null),
        (va.current = Zb),
        (e = n(r, o));
    } while (Ni);
  }
  if (
    ((va.current = qa),
    (t = ct !== null && ct.next !== null),
    (Vr = 0),
    (pt = ct = Ge = null),
    (Ga = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function gf() {
  var e = rs !== 0;
  return (rs = 0), e;
}
function _n() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pt === null ? (Ge.memoizedState = pt = e) : (pt = pt.next = e), pt;
}
function un() {
  if (ct === null) {
    var e = Ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ct.next;
  var t = pt === null ? Ge.memoizedState : pt.next;
  if (t !== null) (pt = t), (ct = e);
  else {
    if (e === null) throw Error(z(310));
    (ct = e),
      (e = {
        memoizedState: ct.memoizedState,
        baseState: ct.baseState,
        baseQueue: ct.baseQueue,
        queue: ct.queue,
        next: null,
      }),
      pt === null ? (Ge.memoizedState = pt = e) : (pt = pt.next = e);
  }
  return pt;
}
function os(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Uu(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ct,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Vr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Ge.lanes |= c),
          (Kr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Sn(r, t.memoizedState) || (Ft = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ge.lanes |= i), (Kr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wu(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Sn(i, t.memoizedState) || (Ft = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function qv() {}
function Yv(e, t) {
  var n = Ge,
    r = un(),
    o = t(),
    i = !Sn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ft = !0)),
    (r = r.queue),
    mf(Jv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pt !== null && pt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      is(9, Qv.bind(null, n, r, o, t), void 0, null),
      ht === null)
    )
      throw Error(z(349));
    Vr & 30 || Xv(n, t, o);
  }
  return o;
}
function Xv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zv(t) && ey(e);
}
function Jv(e, t, n) {
  return n(function () {
    Zv(t) && ey(e);
  });
}
function Zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Sn(e, n);
  } catch {
    return !0;
  }
}
function ey(e) {
  var t = qn(e, 1);
  t !== null && bn(t, e, 1, -1);
}
function ch(e) {
  var t = _n();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: os,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xb.bind(null, Ge, e)),
    [t.memoizedState, e]
  );
}
function is(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ty() {
  return un().memoizedState;
}
function ya(e, t, n, r) {
  var o = _n();
  (Ge.flags |= e),
    (o.memoizedState = is(1 | t, n, void 0, r === void 0 ? null : r));
}
function _l(e, t, n, r) {
  var o = un();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ct !== null) {
    var s = ct.memoizedState;
    if (((i = s.destroy), r !== null && pf(r, s.deps))) {
      o.memoizedState = is(t, n, i, r);
      return;
    }
  }
  (Ge.flags |= e), (o.memoizedState = is(1 | t, n, i, r));
}
function dh(e, t) {
  return ya(8390656, 8, e, t);
}
function mf(e, t) {
  return _l(2048, 8, e, t);
}
function ny(e, t) {
  return _l(4, 2, e, t);
}
function ry(e, t) {
  return _l(4, 4, e, t);
}
function oy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function iy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _l(4, 4, oy.bind(null, t, e), n)
  );
}
function vf() {}
function sy(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ay(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ly(e, t, n) {
  return Vr & 21
    ? (Sn(n, t) || ((n = dv()), (Ge.lanes |= n), (Kr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ft = !0)), (e.memoizedState = n));
}
function qb(e, t) {
  var n = Ne;
  (Ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zu.transition;
  zu.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ne = n), (zu.transition = r);
  }
}
function uy() {
  return un().memoizedState;
}
function Yb(e, t, n) {
  var r = xr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cy(e))
  )
    dy(t, n);
  else if (((n = zv(e, t, n, r)), n !== null)) {
    var o = Tt();
    bn(n, e, r, o), fy(n, t, r);
  }
}
function Xb(e, t, n) {
  var r = xr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cy(e)) dy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Sn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), lf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = zv(e, t, o, r)),
      n !== null && ((o = Tt()), bn(n, e, r, o), fy(n, t, r));
  }
}
function cy(e) {
  var t = e.alternate;
  return e === Ge || (t !== null && t === Ge);
}
function dy(e, t) {
  Ni = Ga = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gd(e, n);
  }
}
var qa = {
    readContext: ln,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useInsertionEffect: St,
    useLayoutEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useMutableSource: St,
    useSyncExternalStore: St,
    useId: St,
    unstable_isNewReconciler: !1,
  },
  Qb = {
    readContext: ln,
    useCallback: function (e, t) {
      return (_n().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ln,
    useEffect: dh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ya(4194308, 4, oy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ya(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ya(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _n();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _n();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yb.bind(null, Ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _n();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ch,
    useDebugValue: vf,
    useDeferredValue: function (e) {
      return (_n().memoizedState = e);
    },
    useTransition: function () {
      var e = ch(!1),
        t = e[0];
      return (e = qb.bind(null, e[1])), (_n().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ge,
        o = _n();
      if (He) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), ht === null)) throw Error(z(349));
        Vr & 30 || Xv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        dh(Jv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        is(9, Qv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _n(),
        t = ht.identifierPrefix;
      if (He) {
        var n = Wn,
          r = Un;
        (n = (r & ~(1 << (32 - xn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gb++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jb = {
    readContext: ln,
    useCallback: sy,
    useContext: ln,
    useEffect: mf,
    useImperativeHandle: iy,
    useInsertionEffect: ny,
    useLayoutEffect: ry,
    useMemo: ay,
    useReducer: Uu,
    useRef: ty,
    useState: function () {
      return Uu(os);
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = un();
      return ly(t, ct.memoizedState, e);
    },
    useTransition: function () {
      var e = Uu(os)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: qv,
    useSyncExternalStore: Yv,
    useId: uy,
    unstable_isNewReconciler: !1,
  },
  Zb = {
    readContext: ln,
    useCallback: sy,
    useContext: ln,
    useEffect: mf,
    useImperativeHandle: iy,
    useInsertionEffect: ny,
    useLayoutEffect: ry,
    useMemo: ay,
    useReducer: Wu,
    useRef: ty,
    useState: function () {
      return Wu(os);
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = un();
      return ct === null ? (t.memoizedState = e) : ly(t, ct.memoizedState, e);
    },
    useTransition: function () {
      var e = Wu(os)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: qv,
    useSyncExternalStore: Yv,
    useId: uy,
    unstable_isNewReconciler: !1,
  };
function jo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Px(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var eS = typeof WeakMap == "function" ? WeakMap : Map;
function py(e, t, n) {
  (n = Hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xa || ((Xa = !0), (rd = r)), Gc(e, t);
    }),
    n
  );
}
function hy(e, t, n) {
  (n = Hn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Gc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Gc(e, t),
          typeof r != "function" &&
            (yr === null ? (yr = new Set([this])) : yr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function fh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new eS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = hS.bind(null, e, t, n)), t.then(e, e));
}
function ph(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Hn(-1, 1)), (t.tag = 2), vr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tS = Zn.ReactCurrentOwner,
  Ft = !1;
function $t(e, t, n, r) {
  t.child = e === null ? Kv(t, null, n, r) : Fo(t, e.child, n, r);
}
function gh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    To(t, o),
    (r = hf(e, t, n, r, i, o)),
    (n = gf()),
    e !== null && !Ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yn(e, t, o))
      : (He && n && tf(t), (t.flags |= 1), $t(e, t, r, o), t.child)
  );
}
function mh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !_f(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gy(e, t, i, r, o))
      : ((e = Ca(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qi), n(s, r) && e.ref === t.ref)
    )
      return Yn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = br(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qi(i, r) && e.ref === t.ref)
      if (((Ft = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ft = !0);
      else return (t.lanes = e.lanes), Yn(e, t, o);
  }
  return qc(e, t, n, r, o);
}
function my(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        je(ko, Ut),
        (Ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          je(ko, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        je(ko, Ut),
        (Ut |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      je(ko, Ut),
      (Ut |= r);
  return $t(e, t, o, n), t.child;
}
function vy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qc(e, t, n, r, o) {
  var i = jt(n) ? Wr : Et.current;
  return (
    (i = No(t, i)),
    To(t, o),
    (n = hf(e, t, n, r, i, o)),
    (r = gf()),
    e !== null && !Ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yn(e, t, o))
      : (He && r && tf(t), (t.flags |= 1), $t(e, t, n, o), t.child)
  );
}
function vh(e, t, n, r, o) {
  if (jt(n)) {
    var i = !0;
    Ba(t);
  } else i = !1;
  if ((To(t, o), t.stateNode === null))
    xa(e, t), Hv(t, n, r), Kc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ln(u))
      : ((u = jt(n) ? Wr : Et.current), (u = No(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && lh(t, s, r, u)),
      (ar = !1);
    var d = t.memoizedState;
    (s.state = d),
      Va(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Dt.current || ar
        ? (typeof c == "function" && (Vc(t, n, c, r), (l = t.memoizedState)),
          (a = ar || ah(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Uv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : mn(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ln(l))
        : ((l = jt(n) ? Wr : Et.current), (l = No(t, l)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && lh(t, s, r, l)),
      (ar = !1),
      (d = t.memoizedState),
      (s.state = d),
      Va(t, r, s, o);
    var v = t.memoizedState;
    a !== f || d !== v || Dt.current || ar
      ? (typeof x == "function" && (Vc(t, n, x, r), (v = t.memoizedState)),
        (u = ar || ah(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yc(e, t, n, r, i, o);
}
function Yc(e, t, n, r, o, i) {
  vy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && nh(t, n, !1), Yn(e, t, i);
  (r = t.stateNode), (tS.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Fo(t, e.child, null, i)), (t.child = Fo(t, null, a, i)))
      : $t(e, t, a, i),
    (t.memoizedState = r.state),
    o && nh(t, n, !0),
    t.child
  );
}
function yy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? th(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && th(e, t.context, !1),
    cf(e, t.containerInfo);
}
function yh(e, t, n, r, o) {
  return Ao(), rf(o), (t.flags |= 256), $t(e, t, n, r), t.child;
}
var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xy(e, t, n) {
  var r = t.pendingProps,
    o = Ve.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    je(Ve, o & 1),
    e === null)
  )
    return (
      Wc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = $l(s, r, 0, null)),
              (e = Ur(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Qc(n)),
              (t.memoizedState = Xc),
              e)
            : yf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return nS(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = br(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = br(a, i)) : ((i = Ur(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Qc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = br(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yf(e, t) {
  return (
    (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qs(e, t, n, r) {
  return (
    r !== null && rf(r),
    Fo(t, e.child, null, n),
    (e = yf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hu(Error(z(422)))), qs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = $l({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Ur(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Fo(t, e.child, null, s),
        (t.child.memoizedState = Qc(s)),
        (t.memoizedState = Xc),
        i);
  if (!(t.mode & 1)) return qs(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(z(419))), (r = Hu(i, r, void 0)), qs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ft || a)) {
    if (((r = ht), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), qn(e, o), bn(r, e, o, -1));
    }
    return kf(), (r = Hu(Error(z(421)))), qs(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Vt = mr(o.nextSibling)),
      (Kt = t),
      (He = !0),
      (yn = null),
      e !== null &&
        ((tn[nn++] = Un),
        (tn[nn++] = Wn),
        (tn[nn++] = Hr),
        (Un = e.id),
        (Wn = e.overflow),
        (Hr = t)),
      (t = yf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hc(e.return, t, n);
}
function Vu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function by(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (($t(e, t, r.children, n), (r = Ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xh(e, n, t);
        else if (e.tag === 19) xh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((je(Ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ka(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Vu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ka(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Vu(t, !0, n, null, i);
        break;
      case "together":
        Vu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = br(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = br(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rS(e, t, n) {
  switch (t.tag) {
    case 3:
      yy(t), Ao();
      break;
    case 5:
      Gv(t);
      break;
    case 1:
      jt(t.type) && Ba(t);
      break;
    case 4:
      cf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      je(Wa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (je(Ve, Ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xy(e, t, n)
          : (je(Ve, Ve.current & 1),
            (e = Yn(e, t, n)),
            e !== null ? e.sibling : null);
      je(Ve, Ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return by(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        je(Ve, Ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), my(e, t, n);
  }
  return Yn(e, t, n);
}
var Sy, Jc, Cy, wy;
Sy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Jc = function () {};
Cy = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Dr(Ln.current);
    var i = null;
    switch (n) {
      case "input":
        (o = bc(e, o)), (r = bc(e, r)), (i = []);
        break;
      case "select":
        (o = qe({}, o, { value: void 0 })),
          (r = qe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = wc(e, o)), (r = wc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Da);
    }
    _c(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Hi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Hi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ze("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hi(e, t) {
  if (!He)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function oS(e, t, n) {
  var r = t.pendingProps;
  switch ((nf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ct(t), null;
    case 1:
      return jt(t.type) && ja(), Ct(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Do(),
        Ue(Dt),
        Ue(Et),
        ff(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ks(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yn !== null && (sd(yn), (yn = null)))),
        Jc(e, t),
        Ct(t),
        null
      );
    case 5:
      df(t);
      var o = Dr(ns.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cy(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Ct(t), null;
        }
        if (((e = Dr(Ln.current)), Ks(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[$n] = t), (r[es] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ze("cancel", r), ze("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ze("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < $i.length; o++) ze($i[o], r);
              break;
            case "source":
              ze("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ze("error", r), ze("load", r);
              break;
            case "details":
              ze("toggle", r);
              break;
            case "input":
              $p(r, i), ze("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ze("invalid", r);
              break;
            case "textarea":
              Tp(r, i), ze("invalid", r);
          }
          _c(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vs(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vs(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Hi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ze("scroll", r);
            }
          switch (n) {
            case "input":
              Fs(r), Rp(r, i, !0);
              break;
            case "textarea":
              Fs(r), Op(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Da);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[$n] = t),
            (e[es] = r),
            Sy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ec(n, r)), n)) {
              case "dialog":
                ze("cancel", e), ze("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ze("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < $i.length; o++) ze($i[o], e);
                o = r;
                break;
              case "source":
                ze("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ze("error", e), ze("load", e), (o = r);
                break;
              case "details":
                ze("toggle", e), (o = r);
                break;
              case "input":
                $p(e, r), (o = bc(e, r)), ze("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = qe({}, r, { value: void 0 })),
                  ze("invalid", e);
                break;
              case "textarea":
                Tp(e, r), (o = wc(e, r)), ze("invalid", e);
                break;
              default:
                o = r;
            }
            _c(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Zm(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Qm(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Vi(e, l)
                    : typeof l == "number" && Vi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Hi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ze("scroll", e)
                      : l != null && zd(e, i, l, s));
              }
            switch (n) {
              case "input":
                Fs(e), Rp(e, r, !1);
                break;
              case "textarea":
                Fs(e), Op(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Cr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Eo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Eo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Da);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ct(t), null;
    case 6:
      if (e && t.stateNode != null) wy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = Dr(ns.current)), Dr(Ln.current), Ks(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$n] = t),
            (i = r.nodeValue !== n) && ((e = Kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$n] = t),
            (t.stateNode = r);
      }
      return Ct(t), null;
    case 13:
      if (
        (Ue(Ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (He && Vt !== null && t.mode & 1 && !(t.flags & 128))
          Bv(), Ao(), (t.flags |= 98560), (i = !1);
        else if (((i = Ks(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[$n] = t;
          } else
            Ao(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ct(t), (i = !1);
        } else yn !== null && (sd(yn), (yn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ve.current & 1 ? dt === 0 && (dt = 3) : kf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ct(t),
          null);
    case 4:
      return (
        Do(), Jc(e, t), e === null && Ji(t.stateNode.containerInfo), Ct(t), null
      );
    case 10:
      return af(t.type._context), Ct(t), null;
    case 17:
      return jt(t.type) && ja(), Ct(t), null;
    case 19:
      if ((Ue(Ve), (i = t.memoizedState), i === null)) return Ct(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) hi(i, !1);
        else {
          if (dt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ka(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    hi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return je(Ve, (Ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            et() > Bo &&
            ((t.flags |= 128), (r = !0), hi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ka(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !He)
            )
              return Ct(t), null;
          } else
            2 * et() - i.renderingStartTime > Bo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = et()),
          (t.sibling = null),
          (n = Ve.current),
          je(Ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ct(t), null);
    case 22:
    case 23:
      return (
        wf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ut & 1073741824 && (Ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function iS(e, t) {
  switch ((nf(t), t.tag)) {
    case 1:
      return (
        jt(t.type) && ja(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Do(),
        Ue(Dt),
        Ue(Et),
        ff(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return df(t), null;
    case 13:
      if (
        (Ue(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        Ao();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ue(Ve), null;
    case 4:
      return Do(), null;
    case 10:
      return af(t.type._context), null;
    case 22:
    case 23:
      return wf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ys = !1,
  kt = !1,
  sS = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function wo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Qe(e, t, r);
      }
    else n.current = null;
}
function Zc(e, t, n) {
  try {
    n();
  } catch (r) {
    Qe(e, t, r);
  }
}
var bh = !1;
function aS(e, t) {
  if (((Ac = Na), (e = Pv()), ef(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (d = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = x;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fc = { focusedElem: e, selectionRange: n }, Na = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    _ = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mn(t.type, g),
                      _
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (C) {
          Qe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (v = bh), (bh = !1), v;
}
function Ai(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Zc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function El(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ed(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ky(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ky(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$n], delete t[es], delete t[Bc], delete t[Wb], delete t[Hb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _y(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _y(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function td(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Da));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (td(e, t, n), e = e.sibling; e !== null; ) td(e, t, n), (e = e.sibling);
}
function nd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nd(e, t, n), e = e.sibling; e !== null; ) nd(e, t, n), (e = e.sibling);
}
var vt = null,
  vn = !1;
function rr(e, t, n) {
  for (n = n.child; n !== null; ) Ey(e, t, n), (n = n.sibling);
}
function Ey(e, t, n) {
  if (In && typeof In.onCommitFiberUnmount == "function")
    try {
      In.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      kt || wo(n, t);
    case 6:
      var r = vt,
        o = vn;
      (vt = null),
        rr(e, t, n),
        (vt = r),
        (vn = o),
        vt !== null &&
          (vn
            ? ((e = vt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null &&
        (vn
          ? ((e = vt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Du(e.parentNode, n)
              : e.nodeType === 1 && Du(e, n),
            Yi(e))
          : Du(vt, n.stateNode));
      break;
    case 4:
      (r = vt),
        (o = vn),
        (vt = n.stateNode.containerInfo),
        (vn = !0),
        rr(e, t, n),
        (vt = r),
        (vn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !kt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Zc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      rr(e, t, n);
      break;
    case 1:
      if (
        !kt &&
        (wo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Qe(n, t, a);
        }
      rr(e, t, n);
      break;
    case 21:
      rr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((kt = (r = kt) || n.memoizedState !== null), rr(e, t, n), (kt = r))
        : rr(e, t, n);
      break;
    default:
      rr(e, t, n);
  }
}
function Ch(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sS()),
      t.forEach(function (r) {
        var o = mS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function gn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (vt = a.stateNode), (vn = !1);
              break e;
            case 3:
              (vt = a.stateNode.containerInfo), (vn = !0);
              break e;
            case 4:
              (vt = a.stateNode.containerInfo), (vn = !0);
              break e;
          }
          a = a.return;
        }
        if (vt === null) throw Error(z(160));
        Ey(i, s, o), (vt = null), (vn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Qe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Py(t, e), (t = t.sibling);
}
function Py(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gn(t, e), kn(e), r & 4)) {
        try {
          Ai(3, e, e.return), El(3, e);
        } catch (g) {
          Qe(e, e.return, g);
        }
        try {
          Ai(5, e, e.return);
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      break;
    case 1:
      gn(t, e), kn(e), r & 512 && n !== null && wo(n, n.return);
      break;
    case 5:
      if (
        (gn(t, e),
        kn(e),
        r & 512 && n !== null && wo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Vi(o, "");
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && qm(o, i),
              Ec(a, s);
            var u = Ec(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Zm(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Qm(o, f)
                : c === "children"
                ? Vi(o, f)
                : zd(o, c, f, u);
            }
            switch (a) {
              case "input":
                Sc(o, i);
                break;
              case "textarea":
                Ym(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Eo(o, !!i.multiple, x, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Eo(o, !!i.multiple, i.defaultValue, !0)
                      : Eo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[es] = i;
          } catch (g) {
            Qe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((gn(t, e), kn(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (gn(t, e), kn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yi(t.containerInfo);
        } catch (g) {
          Qe(e, e.return, g);
        }
      break;
    case 4:
      gn(t, e), kn(e);
      break;
    case 13:
      gn(t, e),
        kn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Sf = et())),
        r & 4 && Ch(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((kt = (u = kt) || c), gn(t, e), (kt = u)) : gn(t, e),
        kn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Y = e, c = e.child; c !== null; ) {
            for (f = Y = c; Y !== null; ) {
              switch (((d = Y), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ai(4, d, d.return);
                  break;
                case 1:
                  wo(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      Qe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  wo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    kh(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), (Y = x)) : kh(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Jm("display", s)));
              } catch (g) {
                Qe(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                Qe(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      gn(t, e), kn(e), r & 4 && Ch(e);
      break;
    case 21:
      break;
    default:
      gn(t, e), kn(e);
  }
}
function kn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_y(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Vi(o, ""), (r.flags &= -33));
          var i = Sh(e);
          nd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Sh(e);
          td(e, a, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      Qe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lS(e, t, n) {
  (Y = e), $y(e);
}
function $y(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ys;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || kt;
        a = Ys;
        var u = kt;
        if (((Ys = s), (kt = l) && !u))
          for (Y = o; Y !== null; )
            (s = Y),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? _h(o)
                : l !== null
                ? ((l.return = s), (Y = l))
                : _h(o);
        for (; i !== null; ) (Y = i), $y(i), (i = i.sibling);
        (Y = o), (Ys = a), (kt = u);
      }
      wh(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Y = i)) : wh(e);
  }
}
function wh(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              kt || El(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !kt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && sh(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Yi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        kt || (t.flags & 512 && ed(t));
      } catch (d) {
        Qe(t, t.return, d);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function kh(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function _h(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (l) {
            Qe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Qe(t, o, l);
            }
          }
          var i = t.return;
          try {
            ed(t);
          } catch (l) {
            Qe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ed(t);
          } catch (l) {
            Qe(t, s, l);
          }
      }
    } catch (l) {
      Qe(t, t.return, l);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (Y = a);
      break;
    }
    Y = t.return;
  }
}
var uS = Math.ceil,
  Ya = Zn.ReactCurrentDispatcher,
  xf = Zn.ReactCurrentOwner,
  sn = Zn.ReactCurrentBatchConfig,
  $e = 0,
  ht = null,
  lt = null,
  xt = 0,
  Ut = 0,
  ko = Er(0),
  dt = 0,
  ss = null,
  Kr = 0,
  Pl = 0,
  bf = 0,
  Fi = null,
  At = null,
  Sf = 0,
  Bo = 1 / 0,
  jn = null,
  Xa = !1,
  rd = null,
  yr = null,
  Xs = !1,
  dr = null,
  Qa = 0,
  Di = 0,
  od = null,
  ba = -1,
  Sa = 0;
function Tt() {
  return $e & 6 ? et() : ba !== -1 ? ba : (ba = et());
}
function xr(e) {
  return e.mode & 1
    ? $e & 2 && xt !== 0
      ? xt & -xt
      : Kb.transition !== null
      ? (Sa === 0 && (Sa = dv()), Sa)
      : ((e = Ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yv(e.type))),
        e)
    : 1;
}
function bn(e, t, n, r) {
  if (50 < Di) throw ((Di = 0), (od = null), Error(z(185)));
  ys(e, n, r),
    (!($e & 2) || e !== ht) &&
      (e === ht && (!($e & 2) && (Pl |= n), dt === 4 && ur(e, xt)),
      Bt(e, r),
      n === 1 && $e === 0 && !(t.mode & 1) && ((Bo = et() + 500), wl && Pr()));
}
function Bt(e, t) {
  var n = e.callbackNode;
  Kx(e, t);
  var r = Ma(e, e === ht ? xt : 0);
  if (r === 0)
    n !== null && Mp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mp(n), t === 1))
      e.tag === 0 ? Vb(Eh.bind(null, e)) : Fv(Eh.bind(null, e)),
        zb(function () {
          !($e & 6) && Pr();
        }),
        (n = null);
    else {
      switch (fv(r)) {
        case 1:
          n = Kd;
          break;
        case 4:
          n = uv;
          break;
        case 16:
          n = La;
          break;
        case 536870912:
          n = cv;
          break;
        default:
          n = La;
      }
      n = Ay(n, Ry.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ry(e, t) {
  if (((ba = -1), (Sa = 0), $e & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (Oo() && e.callbackNode !== n) return null;
  var r = Ma(e, e === ht ? xt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ja(e, r);
  else {
    t = r;
    var o = $e;
    $e |= 2;
    var i = Oy();
    (ht !== e || xt !== t) && ((jn = null), (Bo = et() + 500), zr(e, t));
    do
      try {
        fS();
        break;
      } catch (a) {
        Ty(e, a);
      }
    while (1);
    sf(),
      (Ya.current = i),
      ($e = o),
      lt !== null ? (t = 0) : ((ht = null), (xt = 0), (t = dt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Oc(e)), o !== 0 && ((r = o), (t = id(e, o)))), t === 1)
    )
      throw ((n = ss), zr(e, 0), ur(e, r), Bt(e, et()), n);
    if (t === 6) ur(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !cS(o) &&
          ((t = Ja(e, r)),
          t === 2 && ((i = Oc(e)), i !== 0 && ((r = i), (t = id(e, i)))),
          t === 1))
      )
        throw ((n = ss), zr(e, 0), ur(e, r), Bt(e, et()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Ir(e, At, jn);
          break;
        case 3:
          if (
            (ur(e, r), (r & 130023424) === r && ((t = Sf + 500 - et()), 10 < t))
          ) {
            if (Ma(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Tt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = jc(Ir.bind(null, e, At, jn), t);
            break;
          }
          Ir(e, At, jn);
          break;
        case 4:
          if ((ur(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - xn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = et() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * uS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = jc(Ir.bind(null, e, At, jn), r);
            break;
          }
          Ir(e, At, jn);
          break;
        case 5:
          Ir(e, At, jn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Bt(e, et()), e.callbackNode === n ? Ry.bind(null, e) : null;
}
function id(e, t) {
  var n = Fi;
  return (
    e.current.memoizedState.isDehydrated && (zr(e, t).flags |= 256),
    (e = Ja(e, t)),
    e !== 2 && ((t = At), (At = n), t !== null && sd(t)),
    e
  );
}
function sd(e) {
  At === null ? (At = e) : At.push.apply(At, e);
}
function cS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Sn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ur(e, t) {
  for (
    t &= ~bf,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Eh(e) {
  if ($e & 6) throw Error(z(327));
  Oo();
  var t = Ma(e, 0);
  if (!(t & 1)) return Bt(e, et()), null;
  var n = Ja(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oc(e);
    r !== 0 && ((t = r), (n = id(e, r)));
  }
  if (n === 1) throw ((n = ss), zr(e, 0), ur(e, t), Bt(e, et()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ir(e, At, jn),
    Bt(e, et()),
    null
  );
}
function Cf(e, t) {
  var n = $e;
  $e |= 1;
  try {
    return e(t);
  } finally {
    ($e = n), $e === 0 && ((Bo = et() + 500), wl && Pr());
  }
}
function Gr(e) {
  dr !== null && dr.tag === 0 && !($e & 6) && Oo();
  var t = $e;
  $e |= 1;
  var n = sn.transition,
    r = Ne;
  try {
    if (((sn.transition = null), (Ne = 1), e)) return e();
  } finally {
    (Ne = r), (sn.transition = n), ($e = t), !($e & 6) && Pr();
  }
}
function wf() {
  (Ut = ko.current), Ue(ko);
}
function zr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bb(n)), lt !== null))
    for (n = lt.return; n !== null; ) {
      var r = n;
      switch ((nf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ja();
          break;
        case 3:
          Do(), Ue(Dt), Ue(Et), ff();
          break;
        case 5:
          df(r);
          break;
        case 4:
          Do();
          break;
        case 13:
          Ue(Ve);
          break;
        case 19:
          Ue(Ve);
          break;
        case 10:
          af(r.type._context);
          break;
        case 22:
        case 23:
          wf();
      }
      n = n.return;
    }
  if (
    ((ht = e),
    (lt = e = br(e.current, null)),
    (xt = Ut = t),
    (dt = 0),
    (ss = null),
    (bf = Pl = Kr = 0),
    (At = Fi = null),
    Fr !== null)
  ) {
    for (t = 0; t < Fr.length; t++)
      if (((n = Fr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Fr = null;
  }
  return e;
}
function Ty(e, t) {
  do {
    var n = lt;
    try {
      if ((sf(), (va.current = qa), Ga)) {
        for (var r = Ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ga = !1;
      }
      if (
        ((Vr = 0),
        (pt = ct = Ge = null),
        (Ni = !1),
        (rs = 0),
        (xf.current = null),
        n === null || n.return === null)
      ) {
        (dt = 1), (ss = t), (lt = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = xt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = ph(s);
          if (x !== null) {
            (x.flags &= -257),
              hh(x, s, a, i, t),
              x.mode & 1 && fh(i, u, t),
              (t = x),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              fh(i, u, t), kf();
              break e;
            }
            l = Error(z(426));
          }
        } else if (He && a.mode & 1) {
          var _ = ph(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              hh(_, s, a, i, t),
              rf(jo(l, a));
            break e;
          }
        }
        (i = l = jo(l, a)),
          dt !== 4 && (dt = 2),
          Fi === null ? (Fi = [i]) : Fi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = py(i, l, t);
              ih(i, p);
              break e;
            case 1:
              a = l;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (yr === null || !yr.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = hy(i, a, t);
                ih(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ly(n);
    } catch ($) {
      (t = $), lt === n && n !== null && (lt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Oy() {
  var e = Ya.current;
  return (Ya.current = qa), e === null ? qa : e;
}
function kf() {
  (dt === 0 || dt === 3 || dt === 2) && (dt = 4),
    ht === null || (!(Kr & 268435455) && !(Pl & 268435455)) || ur(ht, xt);
}
function Ja(e, t) {
  var n = $e;
  $e |= 2;
  var r = Oy();
  (ht !== e || xt !== t) && ((jn = null), zr(e, t));
  do
    try {
      dS();
      break;
    } catch (o) {
      Ty(e, o);
    }
  while (1);
  if ((sf(), ($e = n), (Ya.current = r), lt !== null)) throw Error(z(261));
  return (ht = null), (xt = 0), dt;
}
function dS() {
  for (; lt !== null; ) Iy(lt);
}
function fS() {
  for (; lt !== null && !Fx(); ) Iy(lt);
}
function Iy(e) {
  var t = Ny(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ly(e) : (lt = t),
    (xf.current = null);
}
function Ly(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = iS(n, t)), n !== null)) {
        (n.flags &= 32767), (lt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (dt = 6), (lt = null);
        return;
      }
    } else if (((n = oS(n, t, Ut)), n !== null)) {
      lt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      lt = t;
      return;
    }
    lt = t = e;
  } while (t !== null);
  dt === 0 && (dt = 5);
}
function Ir(e, t, n) {
  var r = Ne,
    o = sn.transition;
  try {
    (sn.transition = null), (Ne = 1), pS(e, t, n, r);
  } finally {
    (sn.transition = o), (Ne = r);
  }
  return null;
}
function pS(e, t, n, r) {
  do Oo();
  while (dr !== null);
  if ($e & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gx(e, i),
    e === ht && ((lt = ht = null), (xt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xs ||
      ((Xs = !0),
      Ay(La, function () {
        return Oo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = sn.transition), (sn.transition = null);
    var s = Ne;
    Ne = 1;
    var a = $e;
    ($e |= 4),
      (xf.current = null),
      aS(e, n),
      Py(n, e),
      Lb(Fc),
      (Na = !!Ac),
      (Fc = Ac = null),
      (e.current = n),
      lS(n),
      Dx(),
      ($e = a),
      (Ne = s),
      (sn.transition = i);
  } else e.current = n;
  if (
    (Xs && ((Xs = !1), (dr = e), (Qa = o)),
    (i = e.pendingLanes),
    i === 0 && (yr = null),
    zx(n.stateNode),
    Bt(e, et()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Xa) throw ((Xa = !1), (e = rd), (rd = null), e);
  return (
    Qa & 1 && e.tag !== 0 && Oo(),
    (i = e.pendingLanes),
    i & 1 ? (e === od ? Di++ : ((Di = 0), (od = e))) : (Di = 0),
    Pr(),
    null
  );
}
function Oo() {
  if (dr !== null) {
    var e = fv(Qa),
      t = sn.transition,
      n = Ne;
    try {
      if (((sn.transition = null), (Ne = 16 > e ? 16 : e), dr === null))
        var r = !1;
      else {
        if (((e = dr), (dr = null), (Qa = 0), $e & 6)) throw Error(z(331));
        var o = $e;
        for ($e |= 4, Y = e.current; Y !== null; ) {
          var i = Y,
            s = i.child;
          if (Y.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Y = u; Y !== null; ) {
                  var c = Y;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (Y = f);
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var d = c.sibling,
                        x = c.return;
                      if ((ky(c), c === u)) {
                        Y = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = x), (Y = d);
                        break;
                      }
                      Y = x;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
                  } while (g !== null);
                }
              }
              Y = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (Y = s);
          else
            e: for (; Y !== null; ) {
              if (((i = Y), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ai(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (Y = p);
                break e;
              }
              Y = i.return;
            }
        }
        var h = e.current;
        for (Y = h; Y !== null; ) {
          s = Y;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (Y = m);
          else
            e: for (s = h; Y !== null; ) {
              if (((a = Y), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      El(9, a);
                  }
                } catch ($) {
                  Qe(a, a.return, $);
                }
              if (a === s) {
                Y = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (Y = C);
                break e;
              }
              Y = a.return;
            }
        }
        if (
          (($e = o), Pr(), In && typeof In.onPostCommitFiberRoot == "function")
        )
          try {
            In.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ne = n), (sn.transition = t);
    }
  }
  return !1;
}
function Ph(e, t, n) {
  (t = jo(n, t)),
    (t = py(e, t, 1)),
    (e = vr(e, t, 1)),
    (t = Tt()),
    e !== null && (ys(e, 1, t), Bt(e, t));
}
function Qe(e, t, n) {
  if (e.tag === 3) Ph(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ph(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yr === null || !yr.has(r)))
        ) {
          (e = jo(n, e)),
            (e = hy(t, e, 1)),
            (t = vr(t, e, 1)),
            (e = Tt()),
            t !== null && (ys(t, 1, e), Bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e &&
      (xt & n) === n &&
      (dt === 4 || (dt === 3 && (xt & 130023424) === xt && 500 > et() - Sf)
        ? zr(e, 0)
        : (bf |= n)),
    Bt(e, t);
}
function My(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bs), (Bs <<= 1), !(Bs & 130023424) && (Bs = 4194304))
      : (t = 1));
  var n = Tt();
  (e = qn(e, t)), e !== null && (ys(e, t, n), Bt(e, n));
}
function gS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), My(e, n);
}
function mS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), My(e, n);
}
var Ny;
Ny = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current) Ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ft = !1), rS(e, t, n);
      Ft = !!(e.flags & 131072);
    }
  else (Ft = !1), He && t.flags & 1048576 && Dv(t, Ua, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xa(e, t), (e = t.pendingProps);
      var o = No(t, Et.current);
      To(t, n), (o = hf(null, t, r, e, o, n));
      var i = gf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            jt(r) ? ((i = !0), Ba(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            uf(t),
            (o.updater = kl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Kc(t, r, e, n),
            (t = Yc(null, t, r, !0, i, n)))
          : ((t.tag = 0), He && i && tf(t), $t(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xa(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = yS(r)),
          (e = mn(r, e)),
          o)
        ) {
          case 0:
            t = qc(null, t, r, e, n);
            break e;
          case 1:
            t = vh(null, t, r, e, n);
            break e;
          case 11:
            t = gh(null, t, r, e, n);
            break e;
          case 14:
            t = mh(null, t, r, mn(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        qc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        vh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((yy(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Uv(e, t),
          Va(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = jo(Error(z(423)), t)), (t = yh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = jo(Error(z(424)), t)), (t = yh(e, t, r, n, o));
            break e;
          } else
            for (
              Vt = mr(t.stateNode.containerInfo.firstChild),
                Kt = t,
                He = !0,
                yn = null,
                n = Kv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ao(), r === o)) {
            t = Yn(e, t, n);
            break e;
          }
          $t(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gv(t),
        e === null && Wc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Dc(r, o) ? (s = null) : i !== null && Dc(r, i) && (t.flags |= 32),
        vy(e, t),
        $t(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Wc(t), null;
    case 13:
      return xy(e, t, n);
    case 4:
      return (
        cf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fo(t, null, r, n)) : $t(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        gh(e, t, r, o, n)
      );
    case 7:
      return $t(e, t, t.pendingProps, n), t.child;
    case 8:
      return $t(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $t(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          je(Wa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Sn(i.value, s)) {
            if (i.children === o.children && !Dt.current) {
              t = Yn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Hn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Hc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(z(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Hc(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        $t(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        To(t, n),
        (o = ln(o)),
        (r = r(o)),
        (t.flags |= 1),
        $t(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mn(r, t.pendingProps)),
        (o = mn(r.type, o)),
        mh(e, t, r, o, n)
      );
    case 15:
      return gy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        xa(e, t),
        (t.tag = 1),
        jt(r) ? ((e = !0), Ba(t)) : (e = !1),
        To(t, n),
        Hv(t, r, o),
        Kc(t, r, o, n),
        Yc(null, t, r, !0, e, n)
      );
    case 19:
      return by(e, t, n);
    case 22:
      return my(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Ay(e, t) {
  return lv(e, t);
}
function vS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function on(e, t, n, r) {
  return new vS(e, t, n, r);
}
function _f(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yS(e) {
  if (typeof e == "function") return _f(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wd)) return 11;
    if (e === Hd) return 14;
  }
  return 2;
}
function br(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = on(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ca(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) _f(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ho:
        return Ur(n.children, o, i, t);
      case Ud:
        (s = 8), (o |= 8);
        break;
      case mc:
        return (
          (e = on(12, n, t, o | 2)), (e.elementType = mc), (e.lanes = i), e
        );
      case vc:
        return (e = on(13, n, t, o)), (e.elementType = vc), (e.lanes = i), e;
      case yc:
        return (e = on(19, n, t, o)), (e.elementType = yc), (e.lanes = i), e;
      case Vm:
        return $l(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wm:
              s = 10;
              break e;
            case Hm:
              s = 9;
              break e;
            case Wd:
              s = 11;
              break e;
            case Hd:
              s = 14;
              break e;
            case sr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = on(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ur(e, t, n, r) {
  return (e = on(7, e, r, t)), (e.lanes = n), e;
}
function $l(e, t, n, r) {
  return (
    (e = on(22, e, r, t)),
    (e.elementType = Vm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ku(e, t, n) {
  return (e = on(6, e, null, t)), (e.lanes = n), e;
}
function Gu(e, t, n) {
  return (
    (t = on(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pu(0)),
    (this.expirationTimes = Pu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ef(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new xS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = on(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uf(i),
    e
  );
}
function bS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: po,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fy(e) {
  if (!e) return wr;
  e = e._reactInternals;
  e: {
    if (Qr(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (jt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (jt(n)) return Av(e, n, t);
  }
  return t;
}
function Dy(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Ef(n, r, !0, e, o, i, s, a, l)),
    (e.context = Fy(null)),
    (n = e.current),
    (r = Tt()),
    (o = xr(n)),
    (i = Hn(r, o)),
    (i.callback = t ?? null),
    vr(n, i, o),
    (e.current.lanes = o),
    ys(e, o, r),
    Bt(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var o = t.current,
    i = Tt(),
    s = xr(o);
  return (
    (n = Fy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Hn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vr(o, t, s)),
    e !== null && (bn(e, o, s, i), ma(e, o, s)),
    s
  );
}
function Za(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $h(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pf(e, t) {
  $h(e, t), (e = e.alternate) && $h(e, t);
}
function SS() {
  return null;
}
var jy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $f(e) {
  this._internalRoot = e;
}
Tl.prototype.render = $f.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Rl(e, t, null, null);
};
Tl.prototype.unmount = $f.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gr(function () {
      Rl(null, e, null, null);
    }),
      (t[Gn] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lr.length && t !== 0 && t < lr[n].priority; n++);
    lr.splice(n, 0, e), n === 0 && vv(e);
  }
};
function Rf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rh() {}
function CS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Za(s);
        i.call(u);
      };
    }
    var s = Dy(t, r, e, 0, null, !1, !1, "", Rh);
    return (
      (e._reactRootContainer = s),
      (e[Gn] = s.current),
      Ji(e.nodeType === 8 ? e.parentNode : e),
      Gr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Za(l);
      a.call(u);
    };
  }
  var l = Ef(e, 0, !1, null, null, !1, !1, "", Rh);
  return (
    (e._reactRootContainer = l),
    (e[Gn] = l.current),
    Ji(e.nodeType === 8 ? e.parentNode : e),
    Gr(function () {
      Rl(t, l, n, r);
    }),
    l
  );
}
function Il(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Za(s);
        a.call(l);
      };
    }
    Rl(t, s, e, o);
  } else s = CS(n, t, e, o, r);
  return Za(s);
}
pv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pi(t.pendingLanes);
        n !== 0 &&
          (Gd(t, n | 1), Bt(t, et()), !($e & 6) && ((Bo = et() + 500), Pr()));
      }
      break;
    case 13:
      Gr(function () {
        var r = qn(e, 1);
        if (r !== null) {
          var o = Tt();
          bn(r, e, 1, o);
        }
      }),
        Pf(e, 1);
  }
};
qd = function (e) {
  if (e.tag === 13) {
    var t = qn(e, 134217728);
    if (t !== null) {
      var n = Tt();
      bn(t, e, 134217728, n);
    }
    Pf(e, 134217728);
  }
};
hv = function (e) {
  if (e.tag === 13) {
    var t = xr(e),
      n = qn(e, t);
    if (n !== null) {
      var r = Tt();
      bn(n, e, t, r);
    }
    Pf(e, t);
  }
};
gv = function () {
  return Ne;
};
mv = function (e, t) {
  var n = Ne;
  try {
    return (Ne = e), t();
  } finally {
    Ne = n;
  }
};
$c = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Cl(r);
            if (!o) throw Error(z(90));
            Gm(r), Sc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ym(e, n);
      break;
    case "select":
      (t = n.value), t != null && Eo(e, !!n.multiple, t, !1);
  }
};
nv = Cf;
rv = Gr;
var wS = { usingClientEntryPoint: !1, Events: [bs, yo, Cl, ev, tv, Cf] },
  gi = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  kS = {
    bundleType: gi.bundleType,
    version: gi.version,
    rendererPackageName: gi.rendererPackageName,
    rendererConfig: gi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gi.findFiberByHostInstance || SS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qs.isDisabled && Qs.supportsFiber)
    try {
      (yl = Qs.inject(kS)), (In = Qs);
    } catch {}
}
Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wS;
Yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rf(t)) throw Error(z(200));
  return bS(e, t, null, n);
};
Yt.createRoot = function (e, t) {
  if (!Rf(e)) throw Error(z(299));
  var n = !1,
    r = "",
    o = jy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ef(e, 1, !1, null, null, n, !1, r, o)),
    (e[Gn] = t.current),
    Ji(e.nodeType === 8 ? e.parentNode : e),
    new $f(t)
  );
};
Yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = sv(t)), (e = e === null ? null : e.stateNode), e;
};
Yt.flushSync = function (e) {
  return Gr(e);
};
Yt.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(z(200));
  return Il(null, e, t, !0, n);
};
Yt.hydrateRoot = function (e, t, n) {
  if (!Rf(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = jy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Dy(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Gn] = t.current),
    Ji(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Tl(t);
};
Yt.render = function (e, t, n) {
  if (!Ol(t)) throw Error(z(200));
  return Il(null, e, t, !1, n);
};
Yt.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Gr(function () {
        Il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Gn] = null);
        });
      }),
      !0)
    : !1;
};
Yt.unstable_batchedUpdates = Cf;
Yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Il(e, t, n, !1, r);
};
Yt.version = "18.2.0-next-9e3b772b8-20220608";
function By() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(By);
    } catch (e) {
      console.error(e);
    }
}
By(), (Dm.exports = Yt);
var Tf = Dm.exports;
const Js = ml(Tf);
var Th = Tf;
(hc.createRoot = Th.createRoot), (hc.hydrateRoot = Th.hydrateRoot);
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    as.apply(this, arguments)
  );
}
var fr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(fr || (fr = {}));
const Oh = "popstate";
function _S(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return ad(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : el(o);
  }
  return PS(t, n, null, e);
}
function tt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zy(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ES() {
  return Math.random().toString(36).substr(2, 8);
}
function Ih(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ad(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    as(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Jo(t) : t,
      { state: n, key: (t && t.key) || r || ES() }
    )
  );
}
function el(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Jo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function PS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = fr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(as({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = fr.Pop;
    let _ = c(),
      p = _ == null ? null : _ - u;
    (u = _), l && l({ action: a, location: g.location, delta: p });
  }
  function d(_, p) {
    a = fr.Push;
    let h = ad(g.location, _, p);
    n && n(h, _), (u = c() + 1);
    let m = Ih(h, u),
      C = g.createHref(h);
    try {
      s.pushState(m, "", C);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      o.location.assign(C);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function x(_, p) {
    a = fr.Replace;
    let h = ad(g.location, _, p);
    n && n(h, _), (u = c());
    let m = Ih(h, u),
      C = g.createHref(h);
    s.replaceState(m, "", C),
      i && l && l({ action: a, location: g.location, delta: 0 });
  }
  function v(_) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof _ == "string" ? _ : el(_);
    return (
      (h = h.replace(/ $/, "%20")),
      tt(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(_) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Oh, f),
        (l = _),
        () => {
          o.removeEventListener(Oh, f), (l = null);
        }
      );
    },
    createHref(_) {
      return t(o, _);
    },
    createURL: v,
    encodeLocation(_) {
      let p = v(_);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: x,
    go(_) {
      return s.go(_);
    },
  };
  return g;
}
var Lh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Lh || (Lh = {}));
function $S(e, t, n) {
  return n === void 0 && (n = "/"), RS(e, t, n, !1);
}
function RS(e, t, n, r) {
  let o = typeof t == "string" ? Jo(t) : t,
    i = Of(o.pathname || "/", n);
  if (i == null) return null;
  let s = Uy(e);
  TS(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = zS(i);
    a = jS(s[l], u, r);
  }
  return a;
}
function Uy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (tt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Sr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (tt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Uy(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: FS(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of Wy(i.path)) o(i, s, l);
    }),
    t
  );
}
function Wy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Wy(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function TS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : DS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const OS = /^:[\w-]+$/,
  IS = 3,
  LS = 2,
  MS = 1,
  NS = 10,
  AS = -2,
  Mh = (e) => e === "*";
function FS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Mh) && (r += AS),
    t && (r += LS),
    n
      .filter((o) => !Mh(o))
      .reduce((o, i) => o + (OS.test(i) ? IS : i === "" ? MS : NS), r)
  );
}
function DS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function jS(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = Nh(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Nh(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Sr([i, f.pathname]),
        pathnameBase: VS(Sr([i, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (i = Sr([i, f.pathnameBase]));
  }
  return s;
}
function Nh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = BS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: x } = c;
      if (d === "*") {
        let g = a[f] || "";
        s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        x && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function BS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zy(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function zS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zy(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Of(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function US(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Jo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : WS(n, t)) : t,
    search: KS(r),
    hash: GS(o),
  };
}
function WS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function qu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function HS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function If(e, t) {
  let n = HS(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Lf(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Jo(e))
    : ((o = as({}, e)),
      tt(
        !o.pathname || !o.pathname.includes("?"),
        qu("?", "pathname", "search", o)
      ),
      tt(
        !o.pathname || !o.pathname.includes("#"),
        qu("#", "pathname", "hash", o)
      ),
      tt(!o.search || !o.search.includes("#"), qu("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = US(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Sr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  VS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  KS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  GS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function qS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Hy = ["post", "put", "patch", "delete"];
new Set(Hy);
const YS = ["get", ...Hy];
new Set(YS);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ls() {
  return (
    (ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ls.apply(this, arguments)
  );
}
const Mf = y.createContext(null),
  XS = y.createContext(null),
  $r = y.createContext(null),
  Ll = y.createContext(null),
  Fn = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vy = y.createContext(null);
function QS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zo() || tt(!1);
  let { basename: r, navigator: o } = y.useContext($r),
    { hash: i, pathname: s, search: a } = Gy(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Sr([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function Zo() {
  return y.useContext(Ll) != null;
}
function Cs() {
  return Zo() || tt(!1), y.useContext(Ll).location;
}
function Ky(e) {
  y.useContext($r).static || y.useLayoutEffect(e);
}
function ws() {
  let { isDataRoute: e } = y.useContext(Fn);
  return e ? fC() : JS();
}
function JS() {
  Zo() || tt(!1);
  let e = y.useContext(Mf),
    { basename: t, future: n, navigator: r } = y.useContext($r),
    { matches: o } = y.useContext(Fn),
    { pathname: i } = Cs(),
    s = JSON.stringify(If(o, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Ky(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Lf(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Sr([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
const ZS = y.createContext(null);
function eC(e) {
  let t = y.useContext(Fn).outlet;
  return t && y.createElement(ZS.Provider, { value: e }, t);
}
function Nf() {
  let { matches: e } = y.useContext(Fn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Gy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext($r),
    { matches: o } = y.useContext(Fn),
    { pathname: i } = Cs(),
    s = JSON.stringify(If(o, r.v7_relativeSplatPath));
  return y.useMemo(() => Lf(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function tC(e, t) {
  return nC(e, t);
}
function nC(e, t, n, r) {
  Zo() || tt(!1);
  let { navigator: o, static: i } = y.useContext($r),
    { matches: s } = y.useContext(Fn),
    a = s[s.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let u = a ? a.pathnameBase : "/";
  a && a.route;
  let c = Cs(),
    f;
  if (t) {
    var d;
    let p = typeof t == "string" ? Jo(t) : t;
    u === "/" || ((d = p.pathname) != null && d.startsWith(u)) || tt(!1),
      (f = p);
  } else f = c;
  let x = f.pathname || "/",
    v = x;
  if (u !== "/") {
    let p = u.replace(/^\//, "").split("/");
    v = "/" + x.replace(/^\//, "").split("/").slice(p.length).join("/");
  }
  let g =
      !i && n && n.matches && n.matches.length > 0
        ? n.matches
        : $S(e, { pathname: v }),
    _ = aC(
      g &&
        g.map((p) =>
          Object.assign({}, p, {
            params: Object.assign({}, l, p.params),
            pathname: Sr([
              u,
              o.encodeLocation
                ? o.encodeLocation(p.pathname).pathname
                : p.pathname,
            ]),
            pathnameBase:
              p.pathnameBase === "/"
                ? u
                : Sr([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(p.pathnameBase).pathname
                      : p.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && _
    ? y.createElement(
        Ll.Provider,
        {
          value: {
            location: ls(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: fr.Pop,
          },
        },
        _
      )
    : _;
}
function rC() {
  let e = dC(),
    t = qS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    i
  );
}
const oC = y.createElement(rC, null);
class iC extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Fn.Provider,
          { value: this.props.routeContext },
          y.createElement(Vy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function sC(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(Mf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Fn.Provider, { value: t }, r)
  );
}
function aC(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || tt(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: x } = n,
          v =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!x || x[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let x,
      v = !1,
      g = null,
      _ = null;
    n &&
      ((x = a && f.route.id ? a[f.route.id] : void 0),
      (g = f.route.errorElement || oC),
      l &&
        (u < 0 && d === 0
          ? (pC("route-fallback", !1), (v = !0), (_ = null))
          : u === d &&
            ((v = !0), (_ = f.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, d + 1)),
      h = () => {
        let m;
        return (
          x
            ? (m = g)
            : v
            ? (m = _)
            : f.route.Component
            ? (m = y.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = c),
          y.createElement(sC, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? y.createElement(iC, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var qy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(qy || {}),
  tl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(tl || {});
function lC(e) {
  let t = y.useContext(Mf);
  return t || tt(!1), t;
}
function uC(e) {
  let t = y.useContext(XS);
  return t || tt(!1), t;
}
function cC(e) {
  let t = y.useContext(Fn);
  return t || tt(!1), t;
}
function Yy(e) {
  let t = cC(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || tt(!1), n.route.id;
}
function dC() {
  var e;
  let t = y.useContext(Vy),
    n = uC(tl.UseRouteError),
    r = Yy(tl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function fC() {
  let { router: e } = lC(qy.UseNavigateStable),
    t = Yy(tl.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Ky(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ls({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Ah = {};
function pC(e, t, n) {
  !t && !Ah[e] && (Ah[e] = !0);
}
function hC(e, t) {
  e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation);
}
function gC(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Zo() || tt(!1);
  let { future: i, static: s } = y.useContext($r),
    { matches: a } = y.useContext(Fn),
    { pathname: l } = Cs(),
    u = ws(),
    c = Lf(t, If(a, i.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(c);
  return (
    y.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r]
    ),
    null
  );
}
function mC(e) {
  return eC(e.context);
}
function lo(e) {
  tt(!1);
}
function vC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = fr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  Zo() && tt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = y.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: ls({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = Jo(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: x = null,
      key: v = "default",
    } = r,
    g = y.useMemo(() => {
      let _ = Of(c, l);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: f, hash: d, state: x, key: v },
            navigationType: o,
          };
    }, [l, c, f, d, x, v, o]);
  return g == null
    ? null
    : y.createElement(
        $r.Provider,
        { value: u },
        y.createElement(Ll.Provider, { children: n, value: g })
      );
}
function yC(e) {
  let { children: t, location: n } = e;
  return tC(ld(t), n);
}
new Promise(() => {});
function ld(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, ld(r.props.children, i));
        return;
      }
      r.type !== lo && tt(!1), !r.props.index || !r.props.children || tt(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = ld(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ud() {
  return (
    (ud = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ud.apply(this, arguments)
  );
}
function xC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function bC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function SC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !bC(e);
}
const CC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  wC = "6";
try {
  window.__reactRouterVersion = wC;
} catch {}
const kC = "startTransition",
  Fh = Ra[kC];
function _C(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = _S({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = y.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = y.useCallback(
      (f) => {
        u && Fh ? Fh(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    y.useLayoutEffect(() => s.listen(c), [s, c]),
    y.useEffect(() => hC(r), [r]),
    y.createElement(vC, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const EC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  PC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nl = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = xC(t, CC),
      { basename: x } = y.useContext($r),
      v,
      g = !1;
    if (typeof u == "string" && PC.test(u) && ((v = u), EC))
      try {
        let m = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          $ = Of(C.pathname, x);
        C.origin === m.origin && $ != null
          ? (u = $ + C.search + C.hash)
          : (g = !0);
      } catch {}
    let _ = QS(u, { relative: o }),
      p = $C(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        viewTransition: f,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return y.createElement(
      "a",
      ud({}, d, { href: v || _, onClick: g || i ? r : h, ref: n, target: l })
    );
  });
var Dh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Dh || (Dh = {}));
var jh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(jh || (jh = {}));
function $C(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = ws(),
    u = Cs(),
    c = Gy(e, { relative: s });
  return y.useCallback(
    (f) => {
      if (SC(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : el(u) === el(c);
        l(e, {
          replace: d,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a]
  );
}
const RC = new Date(),
  Xy = RC.getMonth() + 1;
var Qy = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(_o, function n() {
    var r =
        typeof self < "u"
          ? self
          : typeof window < "u"
          ? window
          : r !== void 0
          ? r
          : {},
      o = !r.document && !!r.postMessage,
      i = r.IS_PAPA_WORKER || !1,
      s = {},
      a = 0,
      l = {
        parse: function (b, w) {
          var T = (w = w || {}).dynamicTyping || !1;
          if (
            (E(T) && ((w.dynamicTypingFunction = T), (T = {})),
            (w.dynamicTyping = T),
            (w.transform = !!E(w.transform) && w.transform),
            w.worker && l.WORKERS_SUPPORTED)
          ) {
            var M = (function () {
              if (!l.WORKERS_SUPPORTED) return !1;
              var D =
                  ((P = r.URL || r.webkitURL || null),
                  (I = n.toString()),
                  l.BLOB_URL ||
                    (l.BLOB_URL = P.createObjectURL(
                      new Blob(
                        [
                          "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                          "(",
                          I,
                          ")();",
                        ],
                        { type: "text/javascript" }
                      )
                    ))),
                F = new r.Worker(D),
                P,
                I;
              return (F.onmessage = h), (F.id = a++), (s[F.id] = F);
            })();
            return (
              (M.userStep = w.step),
              (M.userChunk = w.chunk),
              (M.userComplete = w.complete),
              (M.userError = w.error),
              (w.step = E(w.step)),
              (w.chunk = E(w.chunk)),
              (w.complete = E(w.complete)),
              (w.error = E(w.error)),
              delete w.worker,
              void M.postMessage({ input: b, config: w, workerId: M.id })
            );
          }
          var N = null;
          return (
            l.NODE_STREAM_INPUT,
            typeof b == "string"
              ? ((b = (function (D) {
                  return D.charCodeAt(0) === 65279 ? D.slice(1) : D;
                })(b)),
                (N = w.download ? new f(w) : new x(w)))
              : b.readable === !0 && E(b.read) && E(b.on)
              ? (N = new v(w))
              : ((r.File && b instanceof File) || b instanceof Object) &&
                (N = new d(w)),
            N.stream(b)
          );
        },
        unparse: function (b, w) {
          var T = !1,
            M = !0,
            N = ",",
            D = `\r
`,
            F = '"',
            P = F + F,
            I = !1,
            A = null,
            R = !1;
          (function () {
            if (typeof w == "object") {
              if (
                (typeof w.delimiter != "string" ||
                  l.BAD_DELIMITERS.filter(function (B) {
                    return w.delimiter.indexOf(B) !== -1;
                  }).length ||
                  (N = w.delimiter),
                (typeof w.quotes == "boolean" ||
                  typeof w.quotes == "function" ||
                  Array.isArray(w.quotes)) &&
                  (T = w.quotes),
                (typeof w.skipEmptyLines != "boolean" &&
                  typeof w.skipEmptyLines != "string") ||
                  (I = w.skipEmptyLines),
                typeof w.newline == "string" && (D = w.newline),
                typeof w.quoteChar == "string" && (F = w.quoteChar),
                typeof w.header == "boolean" && (M = w.header),
                Array.isArray(w.columns))
              ) {
                if (w.columns.length === 0)
                  throw new Error("Option columns is empty");
                A = w.columns;
              }
              w.escapeChar !== void 0 && (P = w.escapeChar + F),
                (typeof w.escapeFormulae == "boolean" ||
                  w.escapeFormulae instanceof RegExp) &&
                  (R =
                    w.escapeFormulae instanceof RegExp
                      ? w.escapeFormulae
                      : /^[=+\-@\t\r].*$/);
            }
          })();
          var L = new RegExp(_(F), "g");
          if ((typeof b == "string" && (b = JSON.parse(b)), Array.isArray(b))) {
            if (!b.length || Array.isArray(b[0])) return j(null, b, I);
            if (typeof b[0] == "object") return j(A || Object.keys(b[0]), b, I);
          } else if (typeof b == "object")
            return (
              typeof b.data == "string" && (b.data = JSON.parse(b.data)),
              Array.isArray(b.data) &&
                (b.fields || (b.fields = (b.meta && b.meta.fields) || A),
                b.fields ||
                  (b.fields = Array.isArray(b.data[0])
                    ? b.fields
                    : typeof b.data[0] == "object"
                    ? Object.keys(b.data[0])
                    : []),
                Array.isArray(b.data[0]) ||
                  typeof b.data[0] == "object" ||
                  (b.data = [b.data])),
              j(b.fields || [], b.data || [], I)
            );
          throw new Error("Unable to serialize unrecognized input");
          function j(B, J, Z) {
            var oe = "";
            typeof B == "string" && (B = JSON.parse(B)),
              typeof J == "string" && (J = JSON.parse(J));
            var re = Array.isArray(B) && 0 < B.length,
              me = !Array.isArray(J[0]);
            if (re && M) {
              for (var ke = 0; ke < B.length; ke++)
                0 < ke && (oe += N), (oe += V(B[ke], ke));
              0 < J.length && (oe += D);
            }
            for (var K = 0; K < J.length; K++) {
              var ae = re ? B.length : J[K].length,
                te = !1,
                le = re ? Object.keys(J[K]).length === 0 : J[K].length === 0;
              if (
                (Z &&
                  !re &&
                  (te =
                    Z === "greedy"
                      ? J[K].join("").trim() === ""
                      : J[K].length === 1 && J[K][0].length === 0),
                Z === "greedy" && re)
              ) {
                for (var X = [], ie = 0; ie < ae; ie++) {
                  var se = me ? B[ie] : ie;
                  X.push(J[K][se]);
                }
                te = X.join("").trim() === "";
              }
              if (!te) {
                for (var be = 0; be < ae; be++) {
                  0 < be && !le && (oe += N);
                  var _e = re && me ? B[be] : be;
                  oe += V(J[K][_e], be);
                }
                K < J.length - 1 && (!Z || (0 < ae && !le)) && (oe += D);
              }
            }
            return oe;
          }
          function V(B, J) {
            if (B == null) return "";
            if (B.constructor === Date) return JSON.stringify(B).slice(1, 25);
            var Z = !1;
            R && typeof B == "string" && R.test(B) && ((B = "'" + B), (Z = !0));
            var oe = B.toString().replace(L, P);
            return (Z =
              Z ||
              T === !0 ||
              (typeof T == "function" && T(B, J)) ||
              (Array.isArray(T) && T[J]) ||
              (function (re, me) {
                for (var ke = 0; ke < me.length; ke++)
                  if (-1 < re.indexOf(me[ke])) return !0;
                return !1;
              })(oe, l.BAD_DELIMITERS) ||
              -1 < oe.indexOf(N) ||
              oe.charAt(0) === " " ||
              oe.charAt(oe.length - 1) === " ")
              ? F + oe + F
              : oe;
          }
        },
      };
    if (
      ((l.RECORD_SEP = String.fromCharCode(30)),
      (l.UNIT_SEP = String.fromCharCode(31)),
      (l.BYTE_ORDER_MARK = "\uFEFF"),
      (l.BAD_DELIMITERS = [
        "\r",
        `
`,
        '"',
        l.BYTE_ORDER_MARK,
      ]),
      (l.WORKERS_SUPPORTED = !o && !!r.Worker),
      (l.NODE_STREAM_INPUT = 1),
      (l.LocalChunkSize = 10485760),
      (l.RemoteChunkSize = 5242880),
      (l.DefaultDelimiter = ","),
      (l.Parser = p),
      (l.ParserHandle = g),
      (l.NetworkStreamer = f),
      (l.FileStreamer = d),
      (l.StringStreamer = x),
      (l.ReadableStreamStreamer = v),
      r.jQuery)
    ) {
      var u = r.jQuery;
      u.fn.parse = function (b) {
        var w = b.config || {},
          T = [];
        return (
          this.each(function (D) {
            if (
              !(
                u(this).prop("tagName").toUpperCase() === "INPUT" &&
                u(this).attr("type").toLowerCase() === "file" &&
                r.FileReader
              ) ||
              !this.files ||
              this.files.length === 0
            )
              return !0;
            for (var F = 0; F < this.files.length; F++)
              T.push({
                file: this.files[F],
                inputElem: this,
                instanceConfig: u.extend({}, w),
              });
          }),
          M(),
          this
        );
        function M() {
          if (T.length !== 0) {
            var D,
              F,
              P,
              I,
              A = T[0];
            if (E(b.before)) {
              var R = b.before(A.file, A.inputElem);
              if (typeof R == "object") {
                if (R.action === "abort")
                  return (
                    (D = "AbortError"),
                    (F = A.file),
                    (P = A.inputElem),
                    (I = R.reason),
                    void (E(b.error) && b.error({ name: D }, F, P, I))
                  );
                if (R.action === "skip") return void N();
                typeof R.config == "object" &&
                  (A.instanceConfig = u.extend(A.instanceConfig, R.config));
              } else if (R === "skip") return void N();
            }
            var L = A.instanceConfig.complete;
            (A.instanceConfig.complete = function (j) {
              E(L) && L(j, A.file, A.inputElem), N();
            }),
              l.parse(A.file, A.instanceConfig);
          } else E(b.complete) && b.complete();
        }
        function N() {
          T.splice(0, 1), M();
        }
      };
    }
    function c(b) {
      (this._handle = null),
        (this._finished = !1),
        (this._completed = !1),
        (this._halted = !1),
        (this._input = null),
        (this._baseIndex = 0),
        (this._partialLine = ""),
        (this._rowCount = 0),
        (this._start = 0),
        (this._nextChunk = null),
        (this.isFirstChunk = !0),
        (this._completeResults = { data: [], errors: [], meta: {} }),
        function (w) {
          var T = $(w);
          (T.chunkSize = parseInt(T.chunkSize)),
            w.step || w.chunk || (T.chunkSize = null),
            (this._handle = new g(T)),
            ((this._handle.streamer = this)._config = T);
        }.call(this, b),
        (this.parseChunk = function (w, T) {
          if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
            var M = this._config.beforeFirstChunk(w);
            M !== void 0 && (w = M);
          }
          (this.isFirstChunk = !1), (this._halted = !1);
          var N = this._partialLine + w;
          this._partialLine = "";
          var D = this._handle.parse(N, this._baseIndex, !this._finished);
          if (!this._handle.paused() && !this._handle.aborted()) {
            var F = D.meta.cursor;
            this._finished ||
              ((this._partialLine = N.substring(F - this._baseIndex)),
              (this._baseIndex = F)),
              D && D.data && (this._rowCount += D.data.length);
            var P =
              this._finished ||
              (this._config.preview && this._rowCount >= this._config.preview);
            if (i)
              r.postMessage({ results: D, workerId: l.WORKER_ID, finished: P });
            else if (E(this._config.chunk) && !T) {
              if (
                (this._config.chunk(D, this._handle),
                this._handle.paused() || this._handle.aborted())
              )
                return void (this._halted = !0);
              (D = void 0), (this._completeResults = void 0);
            }
            return (
              this._config.step ||
                this._config.chunk ||
                ((this._completeResults.data =
                  this._completeResults.data.concat(D.data)),
                (this._completeResults.errors =
                  this._completeResults.errors.concat(D.errors)),
                (this._completeResults.meta = D.meta)),
              this._completed ||
                !P ||
                !E(this._config.complete) ||
                (D && D.meta.aborted) ||
                (this._config.complete(this._completeResults, this._input),
                (this._completed = !0)),
              P || (D && D.meta.paused) || this._nextChunk(),
              D
            );
          }
          this._halted = !0;
        }),
        (this._sendError = function (w) {
          E(this._config.error)
            ? this._config.error(w)
            : i &&
              this._config.error &&
              r.postMessage({ workerId: l.WORKER_ID, error: w, finished: !1 });
        });
    }
    function f(b) {
      var w;
      (b = b || {}).chunkSize || (b.chunkSize = l.RemoteChunkSize),
        c.call(this, b),
        (this._nextChunk = o
          ? function () {
              this._readChunk(), this._chunkLoaded();
            }
          : function () {
              this._readChunk();
            }),
        (this.stream = function (T) {
          (this._input = T), this._nextChunk();
        }),
        (this._readChunk = function () {
          if (this._finished) this._chunkLoaded();
          else {
            if (
              ((w = new XMLHttpRequest()),
              this._config.withCredentials &&
                (w.withCredentials = this._config.withCredentials),
              o ||
                ((w.onload = O(this._chunkLoaded, this)),
                (w.onerror = O(this._chunkError, this))),
              w.open(
                this._config.downloadRequestBody ? "POST" : "GET",
                this._input,
                !o
              ),
              this._config.downloadRequestHeaders)
            ) {
              var T = this._config.downloadRequestHeaders;
              for (var M in T) w.setRequestHeader(M, T[M]);
            }
            if (this._config.chunkSize) {
              var N = this._start + this._config.chunkSize - 1;
              w.setRequestHeader("Range", "bytes=" + this._start + "-" + N);
            }
            try {
              w.send(this._config.downloadRequestBody);
            } catch (D) {
              this._chunkError(D.message);
            }
            o && w.status === 0 && this._chunkError();
          }
        }),
        (this._chunkLoaded = function () {
          w.readyState === 4 &&
            (w.status < 200 || 400 <= w.status
              ? this._chunkError()
              : ((this._start += this._config.chunkSize
                  ? this._config.chunkSize
                  : w.responseText.length),
                (this._finished =
                  !this._config.chunkSize ||
                  this._start >=
                    (function (T) {
                      var M = T.getResponseHeader("Content-Range");
                      return M === null
                        ? -1
                        : parseInt(M.substring(M.lastIndexOf("/") + 1));
                    })(w)),
                this.parseChunk(w.responseText)));
        }),
        (this._chunkError = function (T) {
          var M = w.statusText || T;
          this._sendError(new Error(M));
        });
    }
    function d(b) {
      var w, T;
      (b = b || {}).chunkSize || (b.chunkSize = l.LocalChunkSize),
        c.call(this, b);
      var M = typeof FileReader < "u";
      (this.stream = function (N) {
        (this._input = N),
          (T = N.slice || N.webkitSlice || N.mozSlice),
          M
            ? (((w = new FileReader()).onload = O(this._chunkLoaded, this)),
              (w.onerror = O(this._chunkError, this)))
            : (w = new FileReaderSync()),
          this._nextChunk();
      }),
        (this._nextChunk = function () {
          this._finished ||
            (this._config.preview &&
              !(this._rowCount < this._config.preview)) ||
            this._readChunk();
        }),
        (this._readChunk = function () {
          var N = this._input;
          if (this._config.chunkSize) {
            var D = Math.min(
              this._start + this._config.chunkSize,
              this._input.size
            );
            N = T.call(N, this._start, D);
          }
          var F = w.readAsText(N, this._config.encoding);
          M || this._chunkLoaded({ target: { result: F } });
        }),
        (this._chunkLoaded = function (N) {
          (this._start += this._config.chunkSize),
            (this._finished =
              !this._config.chunkSize || this._start >= this._input.size),
            this.parseChunk(N.target.result);
        }),
        (this._chunkError = function () {
          this._sendError(w.error);
        });
    }
    function x(b) {
      var w;
      c.call(this, (b = b || {})),
        (this.stream = function (T) {
          return (w = T), this._nextChunk();
        }),
        (this._nextChunk = function () {
          if (!this._finished) {
            var T,
              M = this._config.chunkSize;
            return (
              M
                ? ((T = w.substring(0, M)), (w = w.substring(M)))
                : ((T = w), (w = "")),
              (this._finished = !w),
              this.parseChunk(T)
            );
          }
        });
    }
    function v(b) {
      c.call(this, (b = b || {}));
      var w = [],
        T = !0,
        M = !1;
      (this.pause = function () {
        c.prototype.pause.apply(this, arguments), this._input.pause();
      }),
        (this.resume = function () {
          c.prototype.resume.apply(this, arguments), this._input.resume();
        }),
        (this.stream = function (N) {
          (this._input = N),
            this._input.on("data", this._streamData),
            this._input.on("end", this._streamEnd),
            this._input.on("error", this._streamError);
        }),
        (this._checkIsFinished = function () {
          M && w.length === 1 && (this._finished = !0);
        }),
        (this._nextChunk = function () {
          this._checkIsFinished(),
            w.length ? this.parseChunk(w.shift()) : (T = !0);
        }),
        (this._streamData = O(function (N) {
          try {
            w.push(
              typeof N == "string" ? N : N.toString(this._config.encoding)
            ),
              T &&
                ((T = !1), this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (D) {
            this._streamError(D);
          }
        }, this)),
        (this._streamError = O(function (N) {
          this._streamCleanUp(), this._sendError(N);
        }, this)),
        (this._streamEnd = O(function () {
          this._streamCleanUp(), (M = !0), this._streamData("");
        }, this)),
        (this._streamCleanUp = O(function () {
          this._input.removeListener("data", this._streamData),
            this._input.removeListener("end", this._streamEnd),
            this._input.removeListener("error", this._streamError);
        }, this));
    }
    function g(b) {
      var w,
        T,
        M,
        N = Math.pow(2, 53),
        D = -N,
        F = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
        P =
          /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
        I = this,
        A = 0,
        R = 0,
        L = !1,
        j = !1,
        V = [],
        B = { data: [], errors: [], meta: {} };
      if (E(b.step)) {
        var J = b.step;
        b.step = function (K) {
          if (((B = K), re())) oe();
          else {
            if ((oe(), B.data.length === 0)) return;
            (A += K.data.length),
              b.preview && A > b.preview
                ? T.abort()
                : ((B.data = B.data[0]), J(B, I));
          }
        };
      }
      function Z(K) {
        return b.skipEmptyLines === "greedy"
          ? K.join("").trim() === ""
          : K.length === 1 && K[0].length === 0;
      }
      function oe() {
        return (
          B &&
            M &&
            (ke(
              "Delimiter",
              "UndetectableDelimiter",
              "Unable to auto-detect delimiting character; defaulted to '" +
                l.DefaultDelimiter +
                "'"
            ),
            (M = !1)),
          b.skipEmptyLines &&
            (B.data = B.data.filter(function (K) {
              return !Z(K);
            })),
          re() &&
            (function () {
              if (!B) return;
              function K(te, le) {
                E(b.transformHeader) && (te = b.transformHeader(te, le)),
                  V.push(te);
              }
              if (Array.isArray(B.data[0])) {
                for (var ae = 0; re() && ae < B.data.length; ae++)
                  B.data[ae].forEach(K);
                B.data.splice(0, 1);
              } else B.data.forEach(K);
            })(),
          (function () {
            if (!B || (!b.header && !b.dynamicTyping && !b.transform)) return B;
            function K(te, le) {
              var X,
                ie = b.header ? {} : [];
              for (X = 0; X < te.length; X++) {
                var se = X,
                  be = te[X];
                b.header && (se = X >= V.length ? "__parsed_extra" : V[X]),
                  b.transform && (be = b.transform(be, se)),
                  (be = me(se, be)),
                  se === "__parsed_extra"
                    ? ((ie[se] = ie[se] || []), ie[se].push(be))
                    : (ie[se] = be);
              }
              return (
                b.header &&
                  (X > V.length
                    ? ke(
                        "FieldMismatch",
                        "TooManyFields",
                        "Too many fields: expected " +
                          V.length +
                          " fields but parsed " +
                          X,
                        R + le
                      )
                    : X < V.length &&
                      ke(
                        "FieldMismatch",
                        "TooFewFields",
                        "Too few fields: expected " +
                          V.length +
                          " fields but parsed " +
                          X,
                        R + le
                      )),
                ie
              );
            }
            var ae = 1;
            return (
              !B.data.length || Array.isArray(B.data[0])
                ? ((B.data = B.data.map(K)), (ae = B.data.length))
                : (B.data = K(B.data, 0)),
              b.header && B.meta && (B.meta.fields = V),
              (R += ae),
              B
            );
          })()
        );
      }
      function re() {
        return b.header && V.length === 0;
      }
      function me(K, ae) {
        return (
          (te = K),
          b.dynamicTypingFunction &&
            b.dynamicTyping[te] === void 0 &&
            (b.dynamicTyping[te] = b.dynamicTypingFunction(te)),
          (b.dynamicTyping[te] || b.dynamicTyping) === !0
            ? ae === "true" ||
              ae === "TRUE" ||
              (ae !== "false" &&
                ae !== "FALSE" &&
                ((function (le) {
                  if (F.test(le)) {
                    var X = parseFloat(le);
                    if (D < X && X < N) return !0;
                  }
                  return !1;
                })(ae)
                  ? parseFloat(ae)
                  : P.test(ae)
                  ? new Date(ae)
                  : ae === ""
                  ? null
                  : ae))
            : ae
        );
        var te;
      }
      function ke(K, ae, te, le) {
        var X = { type: K, code: ae, message: te };
        le !== void 0 && (X.row = le), B.errors.push(X);
      }
      (this.parse = function (K, ae, te) {
        var le = b.quoteChar || '"';
        if (
          (b.newline ||
            (b.newline = (function (se, be) {
              se = se.substring(0, 1048576);
              var _e = new RegExp(_(be) + "([^]*?)" + _(be), "gm"),
                Pe = (se = se.replace(_e, "")).split("\r"),
                Be = se.split(`
`),
                Fe = 1 < Be.length && Be[0].length < Pe[0].length;
              if (Pe.length === 1 || Fe)
                return `
`;
              for (var pe = 0, Ce = 0; Ce < Pe.length; Ce++)
                Pe[Ce][0] ===
                  `
` && pe++;
              return pe >= Pe.length / 2
                ? `\r
`
                : "\r";
            })(K, le)),
          (M = !1),
          b.delimiter)
        )
          E(b.delimiter) &&
            ((b.delimiter = b.delimiter(K)), (B.meta.delimiter = b.delimiter));
        else {
          var X = (function (se, be, _e, Pe, Be) {
            var Fe, pe, Ce, xe;
            Be = Be || [",", "	", "|", ";", l.RECORD_SEP, l.UNIT_SEP];
            for (var Ee = 0; Ee < Be.length; Ee++) {
              var he = Be[Ee],
                mt = 0,
                Je = 0,
                Se = 0;
              Ce = void 0;
              for (
                var Q = new p({
                    comments: Pe,
                    delimiter: he,
                    newline: be,
                    preview: 10,
                  }).parse(se),
                  Ze = 0;
                Ze < Q.data.length;
                Ze++
              )
                if (_e && Z(Q.data[Ze])) Se++;
                else {
                  var ut = Q.data[Ze].length;
                  (Je += ut),
                    Ce !== void 0
                      ? 0 < ut && ((mt += Math.abs(ut - Ce)), (Ce = ut))
                      : (Ce = ut);
                }
              0 < Q.data.length && (Je /= Q.data.length - Se),
                (pe === void 0 || mt <= pe) &&
                  (xe === void 0 || xe < Je) &&
                  1.99 < Je &&
                  ((pe = mt), (Fe = he), (xe = Je));
            }
            return { successful: !!(b.delimiter = Fe), bestDelimiter: Fe };
          })(K, b.newline, b.skipEmptyLines, b.comments, b.delimitersToGuess);
          X.successful
            ? (b.delimiter = X.bestDelimiter)
            : ((M = !0), (b.delimiter = l.DefaultDelimiter)),
            (B.meta.delimiter = b.delimiter);
        }
        var ie = $(b);
        return (
          b.preview && b.header && ie.preview++,
          (w = K),
          (T = new p(ie)),
          (B = T.parse(w, ae, te)),
          oe(),
          L ? { meta: { paused: !0 } } : B || { meta: { paused: !1 } }
        );
      }),
        (this.paused = function () {
          return L;
        }),
        (this.pause = function () {
          (L = !0),
            T.abort(),
            (w = E(b.chunk) ? "" : w.substring(T.getCharIndex()));
        }),
        (this.resume = function () {
          I.streamer._halted
            ? ((L = !1), I.streamer.parseChunk(w, !0))
            : setTimeout(I.resume, 3);
        }),
        (this.aborted = function () {
          return j;
        }),
        (this.abort = function () {
          (j = !0),
            T.abort(),
            (B.meta.aborted = !0),
            E(b.complete) && b.complete(B),
            (w = "");
        });
    }
    function _(b) {
      return b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function p(b) {
      var w,
        T = (b = b || {}).delimiter,
        M = b.newline,
        N = b.comments,
        D = b.step,
        F = b.preview,
        P = b.fastMode,
        I = (w =
          b.quoteChar === void 0 || b.quoteChar === null ? '"' : b.quoteChar);
      if (
        (b.escapeChar !== void 0 && (I = b.escapeChar),
        (typeof T != "string" || -1 < l.BAD_DELIMITERS.indexOf(T)) && (T = ","),
        N === T)
      )
        throw new Error("Comment character same as delimiter");
      N === !0
        ? (N = "#")
        : (typeof N != "string" || -1 < l.BAD_DELIMITERS.indexOf(N)) &&
          (N = !1),
        M !==
          `
` &&
          M !== "\r" &&
          M !==
            `\r
` &&
          (M = `
`);
      var A = 0,
        R = !1;
      (this.parse = function (L, j, V) {
        if (typeof L != "string") throw new Error("Input must be a string");
        var B = L.length,
          J = T.length,
          Z = M.length,
          oe = N.length,
          re = E(D),
          me = [],
          ke = [],
          K = [],
          ae = (A = 0);
        if (!L) return it();
        if (b.header && !j) {
          var te = L.split(M)[0].split(T),
            le = [],
            X = {},
            ie = !1;
          for (var se in te) {
            var be = te[se];
            E(b.transformHeader) && (be = b.transformHeader(be, se));
            var _e = be,
              Pe = X[be] || 0;
            for (
              0 < Pe && ((ie = !0), (_e = be + "_" + Pe)), X[be] = Pe + 1;
              le.includes(_e);

            )
              _e = _e + "_" + Pe;
            le.push(_e);
          }
          if (ie) {
            var Be = L.split(M);
            (Be[0] = le.join(T)), (L = Be.join(M));
          }
        }
        if (P || (P !== !1 && L.indexOf(w) === -1)) {
          for (var Fe = L.split(M), pe = 0; pe < Fe.length; pe++) {
            if (((K = Fe[pe]), (A += K.length), pe !== Fe.length - 1))
              A += M.length;
            else if (V) return it();
            if (!N || K.substring(0, oe) !== N) {
              if (re) {
                if (((me = []), Se(K.split(T)), ne(), R)) return it();
              } else Se(K.split(T));
              if (F && F <= pe) return (me = me.slice(0, F)), it(!0);
            }
          }
          return it();
        }
        for (
          var Ce = L.indexOf(T, A),
            xe = L.indexOf(M, A),
            Ee = new RegExp(_(I) + _(w), "g"),
            he = L.indexOf(w, A);
          ;

        )
          if (L[A] !== w)
            if (N && K.length === 0 && L.substring(A, A + oe) === N) {
              if (xe === -1) return it();
              (A = xe + Z), (xe = L.indexOf(M, A)), (Ce = L.indexOf(T, A));
            } else if (Ce !== -1 && (Ce < xe || xe === -1))
              K.push(L.substring(A, Ce)), (A = Ce + J), (Ce = L.indexOf(T, A));
            else {
              if (xe === -1) break;
              if ((K.push(L.substring(A, xe)), ut(xe + Z), re && (ne(), R)))
                return it();
              if (F && me.length >= F) return it(!0);
            }
          else
            for (he = A, A++; ; ) {
              if ((he = L.indexOf(w, he + 1)) === -1)
                return (
                  V ||
                    ke.push({
                      type: "Quotes",
                      code: "MissingQuotes",
                      message: "Quoted field unterminated",
                      row: me.length,
                      index: A,
                    }),
                  Ze()
                );
              if (he === B - 1) return Ze(L.substring(A, he).replace(Ee, w));
              if (w !== I || L[he + 1] !== I) {
                if (w === I || he === 0 || L[he - 1] !== I) {
                  Ce !== -1 && Ce < he + 1 && (Ce = L.indexOf(T, he + 1)),
                    xe !== -1 && xe < he + 1 && (xe = L.indexOf(M, he + 1));
                  var mt = Q(xe === -1 ? Ce : Math.min(Ce, xe));
                  if (L.substr(he + 1 + mt, J) === T) {
                    K.push(L.substring(A, he).replace(Ee, w)),
                      L[(A = he + 1 + mt + J)] !== w && (he = L.indexOf(w, A)),
                      (Ce = L.indexOf(T, A)),
                      (xe = L.indexOf(M, A));
                    break;
                  }
                  var Je = Q(xe);
                  if (L.substring(he + 1 + Je, he + 1 + Je + Z) === M) {
                    if (
                      (K.push(L.substring(A, he).replace(Ee, w)),
                      ut(he + 1 + Je + Z),
                      (Ce = L.indexOf(T, A)),
                      (he = L.indexOf(w, A)),
                      re && (ne(), R))
                    )
                      return it();
                    if (F && me.length >= F) return it(!0);
                    break;
                  }
                  ke.push({
                    type: "Quotes",
                    code: "InvalidQuotes",
                    message: "Trailing quote on quoted field is malformed",
                    row: me.length,
                    index: A,
                  }),
                    he++;
                }
              } else he++;
            }
        return Ze();
        function Se(de) {
          me.push(de), (ae = A);
        }
        function Q(de) {
          var H = 0;
          if (de !== -1) {
            var ee = L.substring(he + 1, de);
            ee && ee.trim() === "" && (H = ee.length);
          }
          return H;
        }
        function Ze(de) {
          return (
            V ||
              (de === void 0 && (de = L.substring(A)),
              K.push(de),
              (A = B),
              Se(K),
              re && ne()),
            it()
          );
        }
        function ut(de) {
          (A = de), Se(K), (K = []), (xe = L.indexOf(M, A));
        }
        function it(de) {
          return {
            data: me,
            errors: ke,
            meta: {
              delimiter: T,
              linebreak: M,
              aborted: R,
              truncated: !!de,
              cursor: ae + (j || 0),
            },
          };
        }
        function ne() {
          D(it()), (me = []), (ke = []);
        }
      }),
        (this.abort = function () {
          R = !0;
        }),
        (this.getCharIndex = function () {
          return A;
        });
    }
    function h(b) {
      var w = b.data,
        T = s[w.workerId],
        M = !1;
      if (w.error) T.userError(w.error, w.file);
      else if (w.results && w.results.data) {
        var N = {
          abort: function () {
            (M = !0),
              m(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          },
          pause: C,
          resume: C,
        };
        if (E(T.userStep)) {
          for (
            var D = 0;
            D < w.results.data.length &&
            (T.userStep(
              {
                data: w.results.data[D],
                errors: w.results.errors,
                meta: w.results.meta,
              },
              N
            ),
            !M);
            D++
          );
          delete w.results;
        } else
          E(T.userChunk) &&
            (T.userChunk(w.results, N, w.file), delete w.results);
      }
      w.finished && !M && m(w.workerId, w.results);
    }
    function m(b, w) {
      var T = s[b];
      E(T.userComplete) && T.userComplete(w), T.terminate(), delete s[b];
    }
    function C() {
      throw new Error("Not implemented.");
    }
    function $(b) {
      if (typeof b != "object" || b === null) return b;
      var w = Array.isArray(b) ? [] : {};
      for (var T in b) w[T] = $(b[T]);
      return w;
    }
    function O(b, w) {
      return function () {
        b.apply(w, arguments);
      };
    }
    function E(b) {
      return typeof b == "function";
    }
    return (
      i &&
        (r.onmessage = function (b) {
          var w = b.data;
          if (
            (l.WORKER_ID === void 0 && w && (l.WORKER_ID = w.workerId),
            typeof w.input == "string")
          )
            r.postMessage({
              workerId: l.WORKER_ID,
              results: l.parse(w.input, w.config),
              finished: !0,
            });
          else if (
            (r.File && w.input instanceof File) ||
            w.input instanceof Object
          ) {
            var T = l.parse(w.input, w.config);
            T &&
              r.postMessage({
                workerId: l.WORKER_ID,
                results: T,
                finished: !0,
              });
          }
        }),
      ((f.prototype = Object.create(c.prototype)).constructor = f),
      ((d.prototype = Object.create(c.prototype)).constructor = d),
      ((x.prototype = Object.create(x.prototype)).constructor = x),
      ((v.prototype = Object.create(c.prototype)).constructor = v),
      l
    );
  });
})(Qy);
var TC = Qy.exports;
const er = ml(TC);
function OC(e, t) {
  return er.parse(e, t);
}
function IC(e, t) {
  er.parse(e, Object.assign({}, { download: !0 }, t));
}
function LC(e, t) {
  return t === void 0 && (t = {}), er.unparse(e, t);
}
function MC() {
  return { readString: OC, readRemoteFile: IC, jsonToCSV: LC };
}
er.BAD_DELIMITERS;
er.RECORD_SEP;
er.UNIT_SEP;
er.WORKERS_SUPPORTED;
er.LocalChunkSize;
er.DefaultDelimiter;
async function NC(e, t) {
  const { readRemoteFile: n } = MC();
  return n("/" + t, {
    download: !0,
    header: !0,
    complete: (r) => {
      e(AC(r.data));
    },
  });
}
function AC(e) {
  const t = [];
  return (
    e.forEach((n) => {
      const r = {};
      (r.category = n.category),
        (r.image = n.image),
        (r.season = DC(n)),
        (r.description = FC(n)),
        t.push(r);
    }),
    t
  );
}
function FC(e) {
  const t = [];
  return (
    Object.keys(e).forEach((n) => {
      n.includes("name") &&
        t.push({
          lang: n.replace("name", ""),
          name: e[n],
          slug: e[n]
            .toLowerCase()
            .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
            .replace(/^\s+|\s+$/gm, "")
            .replace(/\s+/g, "-"),
        });
    }),
    t
  );
}
function DC(e) {
  const t = [];
  return (
    Object.keys(e).forEach((n) => {
      n.includes("month_") && t.push(e[n] === "x");
    }),
    t
  );
}
const jC = (e, t) => {
    switch (t.type) {
      case "initDB":
        return { ...e, foodDB: t.payload };
      default:
        return e;
    }
  },
  Af = _t.createContext([[], () => null]),
  BC = ({ children: e, initialState: t }) => {
    const [n, r] = _t.useReducer(jC, t);
    return S.jsx(Af.Provider, { value: [n, r], children: e });
  };
function k() {
  return (
    (k = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    k.apply(null, arguments)
  );
}
const zC = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get default() {
        return k;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function UC() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`),
      console.warn(...t);
  }
}
const Bh = {};
function cd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (typeof t[0] == "string" && Bh[t[0]]) ||
    (typeof t[0] == "string" && (Bh[t[0]] = new Date()), UC(...t));
}
const Jy = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0),
        t();
    };
    e.on("initialized", n);
  }
};
function zh(e, t, n) {
  e.loadNamespaces(t, Jy(e, n));
}
function Uh(e, t, n, r) {
  typeof n == "string" && (n = [n]),
    n.forEach((o) => {
      e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }),
    e.loadLanguages(t, Jy(e, r));
}
function WC(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    o = t.options ? t.options.fallbackLng : !1,
    i = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (a, l) => {
    const u = t.services.backendConnector.state[`${a}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf("languageChanging") > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !s(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (s(r, e) && (!o || s(i, e)))
      );
}
function HC(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (cd("i18n.languages were undefined or empty", t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
    ? t.hasLoadedNamespace(e, {
        lng: n.lng,
        precheck: (o, i) => {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            o.services.backendConnector.backend &&
            o.isLanguageChangingTo &&
            !i(o.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : WC(e, t, n);
}
const VC =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  KC = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  GC = (e) => KC[e],
  qC = (e) => e.replace(VC, GC);
let dd = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: qC,
};
function YC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  dd = { ...dd, ...e };
}
function XC() {
  return dd;
}
let Zy;
function QC(e) {
  Zy = e;
}
function JC() {
  return Zy;
}
const ZC = {
    type: "3rdParty",
    init(e) {
      YC(e.options.react), QC(e);
    },
  },
  ew = y.createContext();
class tw {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const nw = (e, t) => {
  const n = y.useRef();
  return (
    y.useEffect(() => {
      n.current = t ? n.current : e;
    }, [e, t]),
    n.current
  );
};
function Qt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: o } = y.useContext(ew) || {},
    i = n || r || JC();
  if ((i && !i.reportNamespaces && (i.reportNamespaces = new tw()), !i)) {
    cd(
      "You will need to pass in an i18next instance by using initReactI18next"
    );
    const m = ($, O) =>
        typeof O == "string"
          ? O
          : O && typeof O == "object" && typeof O.defaultValue == "string"
          ? O.defaultValue
          : Array.isArray($)
          ? $[$.length - 1]
          : $,
      C = [m, {}, !1];
    return (C.t = m), (C.i18n = {}), (C.ready = !1), C;
  }
  i.options.react &&
    i.options.react.wait !== void 0 &&
    cd(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
    );
  const s = { ...XC(), ...i.options.react, ...t },
    { useSuspense: a, keyPrefix: l } = s;
  let u = e || o || (i.options && i.options.defaultNS);
  (u = typeof u == "string" ? [u] : u || ["translation"]),
    i.reportNamespaces.addUsedNamespaces &&
      i.reportNamespaces.addUsedNamespaces(u);
  const c =
    (i.isInitialized || i.initializedStoreOnce) && u.every((m) => HC(m, i, s));
  function f() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? u : u[0], l);
  }
  const [d, x] = y.useState(f);
  let v = u.join();
  t.lng && (v = `${t.lng}${v}`);
  const g = nw(v),
    _ = y.useRef(!0);
  y.useEffect(() => {
    const { bindI18n: m, bindI18nStore: C } = s;
    (_.current = !0),
      !c &&
        !a &&
        (t.lng
          ? Uh(i, t.lng, u, () => {
              _.current && x(f);
            })
          : zh(i, u, () => {
              _.current && x(f);
            })),
      c && g && g !== v && _.current && x(f);
    function $() {
      _.current && x(f);
    }
    return (
      m && i && i.on(m, $),
      C && i && i.store.on(C, $),
      () => {
        (_.current = !1),
          m && i && m.split(" ").forEach((O) => i.off(O, $)),
          C && i && C.split(" ").forEach((O) => i.store.off(O, $));
      }
    );
  }, [i, v]);
  const p = y.useRef(!0);
  y.useEffect(() => {
    _.current && !p.current && x(f), (p.current = !1);
  }, [i, l]);
  const h = [d, i, c];
  if (((h.t = d), (h.i18n = i), (h.ready = c), c || (!c && !a))) return h;
  throw new Promise((m) => {
    t.lng ? Uh(i, t.lng, u, () => m()) : zh(i, u, () => m());
  });
}
const rw = { black: "#000", white: "#fff" },
  us = rw,
  ow = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Zr = ow,
  iw = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  eo = iw,
  sw = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  to = sw,
  aw = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  no = aw,
  lw = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  ro = lw,
  uw = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  mi = uw,
  cw = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  dw = cw;
function Xn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const fw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zo = "$$material";
function q(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function e0(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var pw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  hw = e0(function (e) {
    return (
      pw.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  gw = !1;
function mw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function vw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var yw = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !gw : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(vw(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = mw(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  wt = "-ms-",
  rl = "-moz-",
  Le = "-webkit-",
  t0 = "comm",
  Ff = "rule",
  Df = "decl",
  xw = "@import",
  n0 = "@keyframes",
  bw = "@layer",
  Sw = Math.abs,
  Ml = String.fromCharCode,
  Cw = Object.assign;
function ww(e, t) {
  return yt(e, 0) ^ 45
    ? (((((((t << 2) ^ yt(e, 0)) << 2) ^ yt(e, 1)) << 2) ^ yt(e, 2)) << 2) ^
        yt(e, 3)
    : 0;
}
function r0(e) {
  return e.trim();
}
function kw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Me(e, t, n) {
  return e.replace(t, n);
}
function fd(e, t) {
  return e.indexOf(t);
}
function yt(e, t) {
  return e.charCodeAt(t) | 0;
}
function cs(e, t, n) {
  return e.slice(t, n);
}
function En(e) {
  return e.length;
}
function jf(e) {
  return e.length;
}
function Zs(e, t) {
  return t.push(e), e;
}
function _w(e, t) {
  return e.map(t).join("");
}
var Nl = 1,
  Uo = 1,
  o0 = 0,
  zt = 0,
  at = 0,
  ei = "";
function Al(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Nl,
    column: Uo,
    length: s,
    return: "",
  };
}
function vi(e, t) {
  return Cw(Al("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ew() {
  return at;
}
function Pw() {
  return (
    (at = zt > 0 ? yt(ei, --zt) : 0), Uo--, at === 10 && ((Uo = 1), Nl--), at
  );
}
function Gt() {
  return (
    (at = zt < o0 ? yt(ei, zt++) : 0), Uo++, at === 10 && ((Uo = 1), Nl++), at
  );
}
function Mn() {
  return yt(ei, zt);
}
function wa() {
  return zt;
}
function ks(e, t) {
  return cs(ei, e, t);
}
function ds(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function i0(e) {
  return (Nl = Uo = 1), (o0 = En((ei = e))), (zt = 0), [];
}
function s0(e) {
  return (ei = ""), e;
}
function ka(e) {
  return r0(ks(zt - 1, pd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $w(e) {
  for (; (at = Mn()) && at < 33; ) Gt();
  return ds(e) > 2 || ds(at) > 3 ? "" : " ";
}
function Rw(e, t) {
  for (
    ;
    --t &&
    Gt() &&
    !(at < 48 || at > 102 || (at > 57 && at < 65) || (at > 70 && at < 97));

  );
  return ks(e, wa() + (t < 6 && Mn() == 32 && Gt() == 32));
}
function pd(e) {
  for (; Gt(); )
    switch (at) {
      case e:
        return zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pd(at);
        break;
      case 40:
        e === 41 && pd(e);
        break;
      case 92:
        Gt();
        break;
    }
  return zt;
}
function Tw(e, t) {
  for (; Gt() && e + at !== 47 + 10; )
    if (e + at === 42 + 42 && Mn() === 47) break;
  return "/*" + ks(t, zt - 1) + "*" + Ml(e === 47 ? e : Gt());
}
function Ow(e) {
  for (; !ds(Mn()); ) Gt();
  return ks(e, zt);
}
function Iw(e) {
  return s0(_a("", null, null, null, [""], (e = i0(e)), 0, [0], e));
}
function _a(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      x = 0,
      v = 0,
      g = 1,
      _ = 1,
      p = 1,
      h = 0,
      m = "",
      C = o,
      $ = i,
      O = r,
      E = m;
    _;

  )
    switch (((v = h), (h = Gt()))) {
      case 40:
        if (v != 108 && yt(E, f - 1) == 58) {
          fd((E += Me(ka(h), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += ka(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += $w(v);
        break;
      case 92:
        E += Rw(wa() - 1, 7);
        continue;
      case 47:
        switch (Mn()) {
          case 42:
          case 47:
            Zs(Lw(Tw(Gt(), wa()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        a[u++] = En(E) * p;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            _ = 0;
          case 59 + c:
            p == -1 && (E = Me(E, /\f/g, "")),
              x > 0 &&
                En(E) - f &&
                Zs(
                  x > 32
                    ? Hh(E + ";", r, n, f - 1)
                    : Hh(Me(E, " ", "") + ";", r, n, f - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Zs((O = Wh(E, t, n, u, c, o, a, m, (C = []), ($ = []), f)), i),
              h === 123)
            )
              if (c === 0) _a(E, t, O, O, C, i, f, a, $);
              else
                switch (d === 99 && yt(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _a(
                      e,
                      O,
                      O,
                      r && Zs(Wh(e, O, O, 0, 0, o, a, m, o, (C = []), f), $),
                      o,
                      $,
                      f,
                      a,
                      r ? C : $
                    );
                    break;
                  default:
                    _a(E, O, O, O, [""], $, 0, a, $);
                }
        }
        (u = c = x = 0), (g = p = 1), (m = E = ""), (f = s);
        break;
      case 58:
        (f = 1 + En(E)), (x = v);
      default:
        if (g < 1) {
          if (h == 123) --g;
          else if (h == 125 && g++ == 0 && Pw() == 125) continue;
        }
        switch (((E += Ml(h)), h * g)) {
          case 38:
            p = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (En(E) - 1) * p), (p = 1);
            break;
          case 64:
            Mn() === 45 && (E += ka(Gt())),
              (d = Mn()),
              (c = f = En((m = E += Ow(wa())))),
              h++;
            break;
          case 45:
            v === 45 && En(E) == 2 && (g = 0);
        }
    }
  return i;
}
function Wh(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], x = jf(d), v = 0, g = 0, _ = 0;
    v < r;
    ++v
  )
    for (var p = 0, h = cs(e, f + 1, (f = Sw((g = s[v])))), m = e; p < x; ++p)
      (m = r0(g > 0 ? d[p] + " " + h : Me(h, /&\f/g, d[p]))) && (l[_++] = m);
  return Al(e, t, n, o === 0 ? Ff : a, l, u, c);
}
function Lw(e, t, n) {
  return Al(e, t, n, t0, Ml(Ew()), cs(e, 2, -2), 0);
}
function Hh(e, t, n, r) {
  return Al(e, t, n, Df, cs(e, 0, r), cs(e, r + 1, -1), r);
}
function Io(e, t) {
  for (var n = "", r = jf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Mw(e, t, n, r) {
  switch (e.type) {
    case bw:
      if (e.children.length) break;
    case xw:
    case Df:
      return (e.return = e.return || e.value);
    case t0:
      return "";
    case n0:
      return (e.return = e.value + "{" + Io(e.children, r) + "}");
    case Ff:
      e.value = e.props.join(",");
  }
  return En((n = Io(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Nw(e) {
  var t = jf(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Aw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Fw = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Mn()), o === 38 && i === 12 && (n[r] = 1), !ds(i);

    )
      Gt();
    return ks(t, zt);
  },
  Dw = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ds(o)) {
        case 0:
          o === 38 && Mn() === 12 && (n[r] = 1), (t[r] += Fw(zt - 1, n, r));
          break;
        case 2:
          t[r] += ka(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Mn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ml(o);
      }
    while ((o = Gt()));
    return t;
  },
  jw = function (t, n) {
    return s0(Dw(i0(t), n));
  },
  Vh = new WeakMap(),
  Bw = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Vh.get(r)) &&
        !o
      ) {
        Vh.set(t, !0);
        for (
          var i = [], s = jw(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  zw = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function a0(e, t) {
  switch (ww(e, t)) {
    case 5103:
      return Le + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Le + e + rl + e + wt + e + e;
    case 6828:
    case 4268:
      return Le + e + wt + e + e;
    case 6165:
      return Le + e + wt + "flex-" + e + e;
    case 5187:
      return (
        Le + e + Me(e, /(\w+).+(:[^]+)/, Le + "box-$1$2" + wt + "flex-$1$2") + e
      );
    case 5443:
      return Le + e + wt + "flex-item-" + Me(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Le +
        e +
        wt +
        "flex-line-pack" +
        Me(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Le + e + wt + Me(e, "shrink", "negative") + e;
    case 5292:
      return Le + e + wt + Me(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Le +
        "box-" +
        Me(e, "-grow", "") +
        Le +
        e +
        wt +
        Me(e, "grow", "positive") +
        e
      );
    case 4554:
      return Le + Me(e, /([^-])(transform)/g, "$1" + Le + "$2") + e;
    case 6187:
      return (
        Me(
          Me(Me(e, /(zoom-|grab)/, Le + "$1"), /(image-set)/, Le + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Me(e, /(image-set\([^]*)/, Le + "$1$`$1");
    case 4968:
      return (
        Me(
          Me(e, /(.+:)(flex-)?(.*)/, Le + "box-pack:$3" + wt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Le +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Me(e, /(.+)-inline(.+)/, Le + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (En(e) - 1 - t > 6)
        switch (yt(e, t + 1)) {
          case 109:
            if (yt(e, t + 4) !== 45) break;
          case 102:
            return (
              Me(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Le +
                  "$2-$3$1" +
                  rl +
                  (yt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~fd(e, "stretch")
              ? a0(Me(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (yt(e, t + 1) !== 115) break;
    case 6444:
      switch (yt(e, En(e) - 3 - (~fd(e, "!important") && 10))) {
        case 107:
          return Me(e, ":", ":" + Le) + e;
        case 101:
          return (
            Me(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Le +
                (yt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Le +
                "$2$3$1" +
                wt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (yt(e, t + 11)) {
        case 114:
          return Le + e + wt + Me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Le + e + wt + Me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Le + e + wt + Me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Le + e + wt + e + e;
  }
  return e;
}
var Uw = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Df:
          t.return = a0(t.value, t.length);
          break;
        case n0:
          return Io([vi(t, { value: Me(t.value, "@", "@" + Le) })], o);
        case Ff:
          if (t.length)
            return _w(t.props, function (i) {
              switch (kw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Io(
                    [vi(t, { props: [Me(i, /:(read-\w+)/, ":" + rl + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Io(
                    [
                      vi(t, {
                        props: [Me(i, /:(plac\w+)/, ":" + Le + "input-$1")],
                      }),
                      vi(t, { props: [Me(i, /:(plac\w+)/, ":" + rl + "$1")] }),
                      vi(t, { props: [Me(i, /:(plac\w+)/, wt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Ww = [Uw],
  l0 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var _ = g.getAttribute("data-emotion");
        _.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Ww,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var _ = g.getAttribute("data-emotion").split(" "), p = 1;
            p < _.length;
            p++
          )
            i[_[p]] = !0;
          a.push(g);
        }
      );
    var l,
      u = [Bw, zw];
    {
      var c,
        f = [
          Mw,
          Aw(function (g) {
            c.insert(g);
          }),
        ],
        d = Nw(u.concat(o, f)),
        x = function (_) {
          return Io(Iw(_), d);
        };
      l = function (_, p, h, m) {
        (c = h),
          x(_ ? _ + "{" + p.styles + "}" : p.styles),
          m && (v.inserted[p.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new yw({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return v.sheet.hydrate(a), v;
  },
  u0 = { exports: {} },
  Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gt = typeof Symbol == "function" && Symbol.for,
  Bf = gt ? Symbol.for("react.element") : 60103,
  zf = gt ? Symbol.for("react.portal") : 60106,
  Fl = gt ? Symbol.for("react.fragment") : 60107,
  Dl = gt ? Symbol.for("react.strict_mode") : 60108,
  jl = gt ? Symbol.for("react.profiler") : 60114,
  Bl = gt ? Symbol.for("react.provider") : 60109,
  zl = gt ? Symbol.for("react.context") : 60110,
  Uf = gt ? Symbol.for("react.async_mode") : 60111,
  Ul = gt ? Symbol.for("react.concurrent_mode") : 60111,
  Wl = gt ? Symbol.for("react.forward_ref") : 60112,
  Hl = gt ? Symbol.for("react.suspense") : 60113,
  Hw = gt ? Symbol.for("react.suspense_list") : 60120,
  Vl = gt ? Symbol.for("react.memo") : 60115,
  Kl = gt ? Symbol.for("react.lazy") : 60116,
  Vw = gt ? Symbol.for("react.block") : 60121,
  Kw = gt ? Symbol.for("react.fundamental") : 60117,
  Gw = gt ? Symbol.for("react.responder") : 60118,
  qw = gt ? Symbol.for("react.scope") : 60119;
function Jt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Bf:
        switch (((e = e.type), e)) {
          case Uf:
          case Ul:
          case Fl:
          case jl:
          case Dl:
          case Hl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case zl:
              case Wl:
              case Kl:
              case Vl:
              case Bl:
                return e;
              default:
                return t;
            }
        }
      case zf:
        return t;
    }
  }
}
function c0(e) {
  return Jt(e) === Ul;
}
Ae.AsyncMode = Uf;
Ae.ConcurrentMode = Ul;
Ae.ContextConsumer = zl;
Ae.ContextProvider = Bl;
Ae.Element = Bf;
Ae.ForwardRef = Wl;
Ae.Fragment = Fl;
Ae.Lazy = Kl;
Ae.Memo = Vl;
Ae.Portal = zf;
Ae.Profiler = jl;
Ae.StrictMode = Dl;
Ae.Suspense = Hl;
Ae.isAsyncMode = function (e) {
  return c0(e) || Jt(e) === Uf;
};
Ae.isConcurrentMode = c0;
Ae.isContextConsumer = function (e) {
  return Jt(e) === zl;
};
Ae.isContextProvider = function (e) {
  return Jt(e) === Bl;
};
Ae.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bf;
};
Ae.isForwardRef = function (e) {
  return Jt(e) === Wl;
};
Ae.isFragment = function (e) {
  return Jt(e) === Fl;
};
Ae.isLazy = function (e) {
  return Jt(e) === Kl;
};
Ae.isMemo = function (e) {
  return Jt(e) === Vl;
};
Ae.isPortal = function (e) {
  return Jt(e) === zf;
};
Ae.isProfiler = function (e) {
  return Jt(e) === jl;
};
Ae.isStrictMode = function (e) {
  return Jt(e) === Dl;
};
Ae.isSuspense = function (e) {
  return Jt(e) === Hl;
};
Ae.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Fl ||
    e === Ul ||
    e === jl ||
    e === Dl ||
    e === Hl ||
    e === Hw ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Kl ||
        e.$$typeof === Vl ||
        e.$$typeof === Bl ||
        e.$$typeof === zl ||
        e.$$typeof === Wl ||
        e.$$typeof === Kw ||
        e.$$typeof === Gw ||
        e.$$typeof === qw ||
        e.$$typeof === Vw))
  );
};
Ae.typeOf = Jt;
u0.exports = Ae;
var Yw = u0.exports,
  d0 = Yw,
  Xw = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Qw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  f0 = {};
f0[d0.ForwardRef] = Xw;
f0[d0.Memo] = Qw;
var Jw = !0;
function Zw(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
    }),
    r
  );
}
var p0 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Jw === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  h0 = function (t, n, r) {
    p0(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function ek(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var tk = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  nk = /[A-Z]|^ms/g,
  rk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  g0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Kh = function (t) {
    return t != null && typeof t != "boolean";
  },
  Yu = e0(function (e) {
    return g0(e) ? e : e.replace(nk, "-$&").toLowerCase();
  }),
  Gh = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(rk, function (r, o, i) {
            return (Pn = { name: o, styles: i, next: Pn }), o;
          });
    }
    return tk[t] !== 1 && !g0(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function fs(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Pn = { name: n.name, styles: n.styles, next: Pn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Pn = { name: r.name, styles: r.styles, next: Pn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return ok(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Pn,
          s = n(e);
        return (Pn = i), fs(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function ok(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += fs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : Kh(s) && (r += Yu(i) + ":" + Gh(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Kh(s[a]) && (r += Yu(i) + ":" + Gh(i, s[a]) + ";");
      else {
        var l = fs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Yu(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var qh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Pn,
  Wf = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Pn = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += fs(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += fs(r, n, t[a])), o && (i += s[a]);
    qh.lastIndex = 0;
    for (var l = "", u; (u = qh.exec(i)) !== null; ) l += "-" + u[1];
    var c = ek(i) + l;
    return { name: c, styles: i, next: Pn };
  },
  ik = function (t) {
    return t();
  },
  m0 = Ra["useInsertionEffect"] ? Ra["useInsertionEffect"] : !1,
  sk = m0 || ik,
  Yh = m0 || y.useLayoutEffect,
  v0 = y.createContext(typeof HTMLElement < "u" ? l0({ key: "css" }) : null),
  ak = v0.Provider,
  y0 = function (t) {
    return y.forwardRef(function (n, r) {
      var o = y.useContext(v0);
      return t(n, o, r);
    });
  },
  _s = y.createContext({}),
  lk = y0(function (e, t) {
    var n = e.styles,
      r = Wf([n], void 0, y.useContext(_s)),
      o = y.useRef();
    return (
      Yh(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      Yh(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && h0(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function x0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Wf(t);
}
var Gl = function () {
    var t = x0.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  uk = hw,
  ck = function (t) {
    return t !== "theme";
  },
  Xh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? uk : ck;
  },
  Qh = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  dk = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      p0(n, r, o),
      sk(function () {
        return h0(n, r, o);
      }),
      null
    );
  },
  fk = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Qh(t, n, r),
      l = a || Xh(o),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, x = 1; x < d; x++) f.push(c[x], c[0][x]);
      }
      var v = y0(function (g, _, p) {
        var h = (u && g.as) || o,
          m = "",
          C = [],
          $ = g;
        if (g.theme == null) {
          $ = {};
          for (var O in g) $[O] = g[O];
          $.theme = y.useContext(_s);
        }
        typeof g.className == "string"
          ? (m = Zw(_.registered, C, g.className))
          : g.className != null && (m = g.className + " ");
        var E = Wf(f.concat(C), _.registered, $);
        (m += _.key + "-" + E.name), s !== void 0 && (m += " " + s);
        var b = u && a === void 0 ? Xh(h) : l,
          w = {};
        for (var T in g) (u && T === "as") || (b(T) && (w[T] = g[T]));
        return (
          (w.className = m),
          (w.ref = p),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(dk, {
              cache: _,
              serialized: E,
              isStringTag: typeof h == "string",
            }),
            y.createElement(h, w)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = f),
        (v.__emotion_forwardProp = a),
        Object.defineProperty(v, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (v.withComponent = function (g, _) {
          return e(g, k({}, n, _, { shouldForwardProp: Qh(v, _, !0) })).apply(
            void 0,
            f
          );
        }),
        v
      );
    };
  },
  pk = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  hd = fk.bind();
pk.forEach(function (e) {
  hd[e] = hd(e);
});
let gd;
typeof document == "object" && (gd = l0({ key: "css", prepend: !0 }));
function hk(e) {
  const { injectFirst: t, children: n } = e;
  return t && gd ? S.jsx(ak, { value: gd, children: n }) : n;
}
function gk(e) {
  return e == null || Object.keys(e).length === 0;
}
function b0(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(gk(o) ? n : o) : t;
  return S.jsx(lk, { styles: r });
}
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Hf(e, t) {
  return hd(e, t);
}
const S0 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  mk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: b0,
        StyledEngineProvider: hk,
        ThemeContext: _s,
        css: x0,
        default: Hf,
        internal_processStyles: S0,
        keyframes: Gl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function zn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function C0(e) {
  if (y.isValidElement(e) || !zn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = C0(e[n]);
    }),
    t
  );
}
function Ot(e, t, n = { clone: !0 }) {
  const r = n.clone ? k({}, e) : e;
  return (
    zn(e) &&
      zn(t) &&
      Object.keys(t).forEach((o) => {
        y.isValidElement(t[o])
          ? (r[o] = t[o])
          : zn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && zn(e[o])
          ? (r[o] = Ot(e[o], t[o], n))
          : n.clone
          ? (r[o] = zn(t[o]) ? C0(t[o]) : t[o])
          : (r[o] = t[o]);
      }),
    r
  );
}
const vk = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ot, isPlainObject: zn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yk = ["values", "unit", "step"],
  xk = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => k({}, n, { [r.key]: r.val }), {})
    );
  };
function w0(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = q(e, yk),
    i = xk(t),
    s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, x) {
    const v = s.indexOf(x);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : x) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const x = s.indexOf(d);
    return x === 0
      ? a(s[1])
      : x === s.length - 1
      ? l(s[x])
      : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return k(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    o
  );
}
const bk = { borderRadius: 4 },
  Sk = bk;
function ji(e, t) {
  return t ? Ot(e, t, { clone: !1 }) : e;
}
const Vf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Jh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Vf[e]}px)`,
  };
function Cn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Jh;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Jh;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Vf).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function k0(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function _0(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Ck(e, ...t) {
  const n = k0(e),
    r = [n, ...t].reduce((o, i) => Ot(o, i), {});
  return _0(Object.keys(n), r);
}
function wk(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function Xu({ values: e, breakpoints: t, base: n }) {
  const r = n || wk(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
        ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function U(e) {
  if (typeof e != "string") throw new Error(Xn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const kk = Object.freeze(
  Object.defineProperty({ __proto__: null, default: U }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Wo(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ol(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Wo(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function rt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Wo(l, r) || {};
      return Cn(s, a, (f) => {
        let d = ol(u, o, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = ol(u, o, `${t}${f === "default" ? "" : U(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function _k(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ek = { m: "margin", p: "padding" },
  Pk = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Zh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  $k = _k((e) => {
    if (e.length > 2)
      if (Zh[e]) e = Zh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Ek[t],
      o = Pk[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Kf = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Gf = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Kf, ...Gf];
function Es(e, t, n, r) {
  var o;
  const i = (o = Wo(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function qf(e) {
  return Es(e, "spacing", 8);
}
function qr(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Rk(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = qr(t, n)), r), {});
}
function Tk(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = $k(n),
    i = Rk(o, r),
    s = e[n];
  return Cn(e, s, i);
}
function E0(e, t) {
  const n = qf(e.theme);
  return Object.keys(e)
    .map((r) => Tk(e, t, r, n))
    .reduce(ji, {});
}
function Ye(e) {
  return E0(e, Kf);
}
Ye.propTypes = {};
Ye.filterProps = Kf;
function Xe(e) {
  return E0(e, Gf);
}
Xe.propTypes = {};
Xe.filterProps = Gf;
function Ok(e = 8) {
  if (e.mui) return e;
  const t = qf({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function ql(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ji(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function rn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function pn(e, t) {
  return rt({ prop: e, themeKey: "borders", transform: t });
}
const Ik = pn("border", rn),
  Lk = pn("borderTop", rn),
  Mk = pn("borderRight", rn),
  Nk = pn("borderBottom", rn),
  Ak = pn("borderLeft", rn),
  Fk = pn("borderColor"),
  Dk = pn("borderTopColor"),
  jk = pn("borderRightColor"),
  Bk = pn("borderBottomColor"),
  zk = pn("borderLeftColor"),
  Uk = pn("outline", rn),
  Wk = pn("outlineColor"),
  Yl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Es(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: qr(t, r) });
      return Cn(e, e.borderRadius, n);
    }
    return null;
  };
Yl.propTypes = {};
Yl.filterProps = ["borderRadius"];
ql(Ik, Lk, Mk, Nk, Ak, Fk, Dk, jk, Bk, zk, Yl, Uk, Wk);
const Xl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Es(e.theme, "spacing", 8),
      n = (r) => ({ gap: qr(t, r) });
    return Cn(e, e.gap, n);
  }
  return null;
};
Xl.propTypes = {};
Xl.filterProps = ["gap"];
const Ql = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Es(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: qr(t, r) });
    return Cn(e, e.columnGap, n);
  }
  return null;
};
Ql.propTypes = {};
Ql.filterProps = ["columnGap"];
const Jl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Es(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: qr(t, r) });
    return Cn(e, e.rowGap, n);
  }
  return null;
};
Jl.propTypes = {};
Jl.filterProps = ["rowGap"];
const Hk = rt({ prop: "gridColumn" }),
  Vk = rt({ prop: "gridRow" }),
  Kk = rt({ prop: "gridAutoFlow" }),
  Gk = rt({ prop: "gridAutoColumns" }),
  qk = rt({ prop: "gridAutoRows" }),
  Yk = rt({ prop: "gridTemplateColumns" }),
  Xk = rt({ prop: "gridTemplateRows" }),
  Qk = rt({ prop: "gridTemplateAreas" }),
  Jk = rt({ prop: "gridArea" });
ql(Xl, Ql, Jl, Hk, Vk, Kk, Gk, qk, Yk, Xk, Qk, Jk);
function Lo(e, t) {
  return t === "grey" ? t : e;
}
const Zk = rt({ prop: "color", themeKey: "palette", transform: Lo }),
  e_ = rt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Lo,
  }),
  t_ = rt({ prop: "backgroundColor", themeKey: "palette", transform: Lo });
ql(Zk, e_, t_);
function Ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const n_ = rt({ prop: "width", transform: Ht }),
  Yf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Vf[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Ht(n) };
      };
      return Cn(e, e.maxWidth, t);
    }
    return null;
  };
Yf.filterProps = ["maxWidth"];
const r_ = rt({ prop: "minWidth", transform: Ht }),
  o_ = rt({ prop: "height", transform: Ht }),
  i_ = rt({ prop: "maxHeight", transform: Ht }),
  s_ = rt({ prop: "minHeight", transform: Ht });
rt({ prop: "size", cssProperty: "width", transform: Ht });
rt({ prop: "size", cssProperty: "height", transform: Ht });
const a_ = rt({ prop: "boxSizing" });
ql(n_, Yf, r_, o_, i_, s_, a_);
const l_ = {
    border: { themeKey: "borders", transform: rn },
    borderTop: { themeKey: "borders", transform: rn },
    borderRight: { themeKey: "borders", transform: rn },
    borderBottom: { themeKey: "borders", transform: rn },
    borderLeft: { themeKey: "borders", transform: rn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: rn },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Yl },
    color: { themeKey: "palette", transform: Lo },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Lo,
    },
    backgroundColor: { themeKey: "palette", transform: Lo },
    p: { style: Xe },
    pt: { style: Xe },
    pr: { style: Xe },
    pb: { style: Xe },
    pl: { style: Xe },
    px: { style: Xe },
    py: { style: Xe },
    padding: { style: Xe },
    paddingTop: { style: Xe },
    paddingRight: { style: Xe },
    paddingBottom: { style: Xe },
    paddingLeft: { style: Xe },
    paddingX: { style: Xe },
    paddingY: { style: Xe },
    paddingInline: { style: Xe },
    paddingInlineStart: { style: Xe },
    paddingInlineEnd: { style: Xe },
    paddingBlock: { style: Xe },
    paddingBlockStart: { style: Xe },
    paddingBlockEnd: { style: Xe },
    m: { style: Ye },
    mt: { style: Ye },
    mr: { style: Ye },
    mb: { style: Ye },
    ml: { style: Ye },
    mx: { style: Ye },
    my: { style: Ye },
    margin: { style: Ye },
    marginTop: { style: Ye },
    marginRight: { style: Ye },
    marginBottom: { style: Ye },
    marginLeft: { style: Ye },
    marginX: { style: Ye },
    marginY: { style: Ye },
    marginInline: { style: Ye },
    marginInlineStart: { style: Ye },
    marginInlineEnd: { style: Ye },
    marginBlock: { style: Ye },
    marginBlockStart: { style: Ye },
    marginBlockEnd: { style: Ye },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Xl },
    rowGap: { style: Jl },
    columnGap: { style: Ql },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Ht },
    maxWidth: { style: Yf },
    minWidth: { transform: Ht },
    height: { transform: Ht },
    maxHeight: { transform: Ht },
    minHeight: { transform: Ht },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Ps = l_;
function u_(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function c_(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function P0() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = Wo(o, u) || {};
    return f
      ? f(s)
      : Cn(s, r, (v) => {
          let g = ol(d, c, v);
          return (
            v === g &&
              typeof v == "string" &&
              (g = ol(d, c, `${n}${v === "default" ? "" : U(v)}`, v)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Ps;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = k0(i.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((x) => {
          const v = c_(u[x], i);
          if (v != null)
            if (typeof v == "object")
              if (s[x]) d = ji(d, e(x, v, i, s));
              else {
                const g = Cn({ theme: i }, v, (_) => ({ [x]: _ }));
                u_(g, v) ? (d[x] = t({ sx: v, theme: i })) : (d = ji(d, g));
              }
            else d = ji(d, e(x, v, i, s));
        }),
        _0(f, d)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const $0 = P0();
$0.filterProps = ["sx"];
const $s = $0;
function R0(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const d_ = ["breakpoints", "palette", "spacing", "shape"];
function Rs(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = q(e, d_),
    a = w0(n),
    l = Ok(o);
  let u = Ot(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: k({ mode: "light" }, r),
      spacing: l,
      shape: k({}, Sk, i),
    },
    s
  );
  return (
    (u.applyStyles = R0),
    (u = t.reduce((c, f) => Ot(c, f), u)),
    (u.unstable_sxConfig = k({}, Ps, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return $s({ sx: f, theme: this });
    }),
    u
  );
}
const f_ = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Rs,
      private_createBreakpoints: w0,
      unstable_applyStyles: R0,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function p_(e) {
  return Object.keys(e).length === 0;
}
function T0(e = null) {
  const t = y.useContext(_s);
  return !t || p_(t) ? e : t;
}
const h_ = Rs();
function Zl(e = h_) {
  return T0(e);
}
function g_({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Zl(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return S.jsx(b0, { styles: o });
}
const m_ = ["sx"],
  v_ = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Ps;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function eu(e) {
  const { sx: t } = e,
    n = q(e, m_),
    { systemProps: r, otherProps: o } = v_(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return zn(a) ? k({}, r, a) : r;
        })
      : (i = k({}, r, t)),
    k({}, o, { sx: i })
  );
}
const y_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: $s,
        extendSxProp: eu,
        unstable_createStyleFunctionSx: P0,
        unstable_defaultSxConfig: Ps,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  eg = (e) => e,
  x_ = () => {
    let e = eg;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = eg;
      },
    };
  },
  b_ = x_(),
  Xf = b_;
function O0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = O0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function G() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = O0(e)) && (r && (r += " "), (r += t));
  return r;
}
const S_ = ["className", "component"];
function C_(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = Hf("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })($s);
  return y.forwardRef(function (l, u) {
    const c = Zl(n),
      f = eu(l),
      { className: d, component: x = "div" } = f,
      v = q(f, S_);
    return S.jsx(
      i,
      k(
        {
          as: x,
          ref: u,
          className: G(d, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        v
      )
    );
  });
}
const w_ = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function ge(e, t, n = "Mui") {
  const r = w_[t];
  return r ? `${n}-${r}` : `${Xf.generate(e)}-${t}`;
}
function fe(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = ge(e, o, n);
    }),
    r
  );
}
var I0 = { exports: {} },
  De = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf = Symbol.for("react.transitional.element"),
  Jf = Symbol.for("react.portal"),
  tu = Symbol.for("react.fragment"),
  nu = Symbol.for("react.strict_mode"),
  ru = Symbol.for("react.profiler"),
  ou = Symbol.for("react.consumer"),
  iu = Symbol.for("react.context"),
  su = Symbol.for("react.forward_ref"),
  au = Symbol.for("react.suspense"),
  lu = Symbol.for("react.suspense_list"),
  uu = Symbol.for("react.memo"),
  cu = Symbol.for("react.lazy"),
  k_ = Symbol.for("react.offscreen"),
  __ = Symbol.for("react.client.reference");
function hn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qf:
        switch (((e = e.type), e)) {
          case tu:
          case ru:
          case nu:
          case au:
          case lu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case iu:
              case su:
              case cu:
              case uu:
                return e;
              case ou:
                return e;
              default:
                return t;
            }
        }
      case Jf:
        return t;
    }
  }
}
De.ContextConsumer = ou;
De.ContextProvider = iu;
De.Element = Qf;
De.ForwardRef = su;
De.Fragment = tu;
De.Lazy = cu;
De.Memo = uu;
De.Portal = Jf;
De.Profiler = ru;
De.StrictMode = nu;
De.Suspense = au;
De.SuspenseList = lu;
De.isContextConsumer = function (e) {
  return hn(e) === ou;
};
De.isContextProvider = function (e) {
  return hn(e) === iu;
};
De.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qf;
};
De.isForwardRef = function (e) {
  return hn(e) === su;
};
De.isFragment = function (e) {
  return hn(e) === tu;
};
De.isLazy = function (e) {
  return hn(e) === cu;
};
De.isMemo = function (e) {
  return hn(e) === uu;
};
De.isPortal = function (e) {
  return hn(e) === Jf;
};
De.isProfiler = function (e) {
  return hn(e) === ru;
};
De.isStrictMode = function (e) {
  return hn(e) === nu;
};
De.isSuspense = function (e) {
  return hn(e) === au;
};
De.isSuspenseList = function (e) {
  return hn(e) === lu;
};
De.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tu ||
    e === ru ||
    e === nu ||
    e === au ||
    e === lu ||
    e === k_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === cu ||
        e.$$typeof === uu ||
        e.$$typeof === iu ||
        e.$$typeof === ou ||
        e.$$typeof === su ||
        e.$$typeof === __ ||
        e.getModuleId !== void 0))
  );
};
De.typeOf = hn;
I0.exports = De;
var tg = I0.exports;
const E_ = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function L0(e) {
  const t = `${e}`.match(E_);
  return (t && t[1]) || "";
}
function M0(e, t = "") {
  return e.displayName || e.name || L0(e) || t;
}
function ng(e, t, n) {
  const r = M0(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function P_(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return M0(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case tg.ForwardRef:
          return ng(e, e.render, "ForwardRef");
        case tg.Memo:
          return ng(e, e.type, "memo");
        default:
          return;
      }
  }
}
const $_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P_, getFunctionName: L0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  R_ = ["ownerState"],
  T_ = ["variants"],
  O_ = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function I_(e) {
  return Object.keys(e).length === 0;
}
function L_(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Qu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const M_ = Rs(),
  N_ = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ea({ defaultTheme: e, theme: t, themeId: n }) {
  return I_(t) ? e : t[n] || t;
}
function A_(e) {
  return e ? (t, n) => n[e] : null;
}
function Ea(e, t) {
  let { ownerState: n } = t,
    r = q(t, R_);
  const o = typeof e == "function" ? e(k({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => Ea(i, k({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = q(o, T_);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(k({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(k({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function F_(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = M_,
      rootShouldForwardProp: r = Qu,
      slotShouldForwardProp: o = Qu,
    } = e,
    i = (s) =>
      $s(k({}, s, { theme: ea(k({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      S0(s, ($) => $.filter((O) => !(O != null && O.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = A_(N_(u)),
        } = a,
        x = q(a, O_),
        v = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = f || !1;
      let _,
        p = Qu;
      u === "Root" || u === "root"
        ? (p = r)
        : u
        ? (p = o)
        : L_(s) && (p = void 0);
      const h = Hf(s, k({ shouldForwardProp: p, label: _ }, x)),
        m = ($) =>
          (typeof $ == "function" && $.__emotion_real !== $) || zn($)
            ? (O) =>
                Ea(
                  $,
                  k({}, O, {
                    theme: ea({ theme: O.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : $,
        C = ($, ...O) => {
          let E = m($);
          const b = O ? O.map(m) : [];
          l &&
            d &&
            b.push((M) => {
              const N = ea(k({}, M, { defaultTheme: n, themeId: t }));
              if (
                !N.components ||
                !N.components[l] ||
                !N.components[l].styleOverrides
              )
                return null;
              const D = N.components[l].styleOverrides,
                F = {};
              return (
                Object.entries(D).forEach(([P, I]) => {
                  F[P] = Ea(I, k({}, M, { theme: N }));
                }),
                d(M, F)
              );
            }),
            l &&
              !v &&
              b.push((M) => {
                var N;
                const D = ea(k({}, M, { defaultTheme: n, themeId: t })),
                  F =
                    D == null ||
                    (N = D.components) == null ||
                    (N = N[l]) == null
                      ? void 0
                      : N.variants;
                return Ea({ variants: F }, k({}, M, { theme: D }));
              }),
            g || b.push(i);
          const w = b.length - O.length;
          if (Array.isArray($) && w > 0) {
            const M = new Array(w).fill("");
            (E = [...$, ...M]), (E.raw = [...$.raw, ...M]);
          }
          const T = h(E, ...b);
          return s.muiName && (T.muiName = s.muiName), T;
        };
      return h.withConfig && (C.withConfig = h.withConfig), C;
    }
  );
}
const D_ = F_(),
  j_ = D_;
function ps(e, t) {
  const n = k({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = k({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = k({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = ps(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function B_(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : ps(t.components[n].defaultProps, r);
}
function z_({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Zl(n);
  return r && (o = o[r] || o), B_({ theme: o, name: t, props: e });
}
const U_ = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  cn = U_;
function N0(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const W_ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: N0 }, Symbol.toStringTag, {
    value: "Module",
  })
);
function H_(e, t = 0, n = 1) {
  return N0(e, t, n);
}
function V_(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function A0(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return A0(V_(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Xn(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(Xn(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function K_(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function rg(e, t) {
  return (
    (e = A0(e)),
    (t = H_(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    K_(e)
  );
}
function md(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function ti(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function G_(e, t) {
  return () => null;
}
function Bi(e, t) {
  var n, r;
  return (
    y.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function It(e) {
  return (e && e.ownerDocument) || document;
}
function dn(e) {
  return It(e).defaultView || window;
}
function q_(e, t) {
  return () => null;
}
function il(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let og = 0;
function Y_(e) {
  const [t, n] = y.useState(e),
    r = e || t;
  return (
    y.useEffect(() => {
      t == null && ((og += 1), n(`mui-${og}`));
    }, [t]),
    r
  );
}
const ig = Ra["useId".toString()];
function Zf(e) {
  if (ig !== void 0) {
    const t = ig();
    return e ?? t;
  }
  return Y_(e);
}
function X_(e, t, n, r, o) {
  return null;
}
function vd({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = y.useRef(e !== void 0),
    [i, s] = y.useState(t),
    a = o ? e : i,
    l = y.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function Rn(e) {
  const t = y.useRef(e);
  return (
    cn(() => {
      t.current = e;
    }),
    y.useRef((...n) => (0, t.current)(...n)).current
  );
}
function nt(...e) {
  return y.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              il(n, t);
            });
          },
    e
  );
}
const sg = {};
function Q_(e, t) {
  const n = y.useRef(sg);
  return n.current === sg && (n.current = e(t)), n;
}
const J_ = [];
function Z_(e) {
  y.useEffect(e, J_);
}
class du {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new du();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function F0() {
  const e = Q_(du.create).current;
  return Z_(e.disposeEffect), e;
}
let fu = !0,
  yd = !1;
const eE = new du(),
  tE = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function nE(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && tE[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function rE(e) {
  e.metaKey || e.altKey || e.ctrlKey || (fu = !0);
}
function Ju() {
  fu = !1;
}
function oE() {
  this.visibilityState === "hidden" && yd && (fu = !0);
}
function iE(e) {
  e.addEventListener("keydown", rE, !0),
    e.addEventListener("mousedown", Ju, !0),
    e.addEventListener("pointerdown", Ju, !0),
    e.addEventListener("touchstart", Ju, !0),
    e.addEventListener("visibilitychange", oE, !0);
}
function sE(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return fu || nE(t);
}
function ep() {
  const e = y.useCallback((o) => {
      o != null && iE(o.ownerDocument);
    }, []),
    t = y.useRef(!1);
  function n() {
    return t.current
      ? ((yd = !0),
        eE.start(100, () => {
          yd = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return sE(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function D0(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
let oo;
function j0() {
  if (oo) return oo;
  const e = document.createElement("div"),
    t = document.createElement("div");
  return (
    (t.style.width = "10px"),
    (t.style.height = "1px"),
    e.appendChild(t),
    (e.dir = "rtl"),
    (e.style.fontSize = "14px"),
    (e.style.width = "4px"),
    (e.style.height = "1px"),
    (e.style.position = "absolute"),
    (e.style.top = "-1000px"),
    (e.style.overflow = "scroll"),
    document.body.appendChild(e),
    (oo = "reverse"),
    e.scrollLeft > 0
      ? (oo = "default")
      : ((e.scrollLeft = 1), e.scrollLeft === 0 && (oo = "negative")),
    document.body.removeChild(e),
    oo
  );
}
function aE(e, t) {
  const n = e.scrollLeft;
  if (t !== "rtl") return n;
  switch (j0()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + n;
    case "reverse":
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
function ve(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
function Ho(e) {
  return typeof e == "string";
}
function lE(e, t, n) {
  return e === void 0 || Ho(e)
    ? t
    : k({}, t, { ownerState: k({}, t.ownerState, n) });
}
function B0(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function ag(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function uE(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const x = G(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      v = k(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = k({}, n, o, r);
    return (
      x.length > 0 && (g.className = x),
      Object.keys(v).length > 0 && (g.style = v),
      { props: g, internalRef: void 0 }
    );
  }
  const s = B0(k({}, o, r)),
    a = ag(r),
    l = ag(o),
    u = t(s),
    c = G(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    f = k(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    d = k({}, u, n, l, a);
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: u.ref }
  );
}
function cE(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const dE = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Nn(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = q(e, dE),
    a = i ? {} : cE(r, o),
    { props: l, internalRef: u } = uE(k({}, s, { externalSlotProps: a })),
    c = nt(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return lE(n, k({}, l, { ref: c }), o);
}
function ni(e) {
  if (parseInt(y.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const fE = y.createContext(null),
  z0 = fE;
function U0() {
  return y.useContext(z0);
}
const pE = typeof Symbol == "function" && Symbol.for,
  hE = pE ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function gE(e, t) {
  return typeof t == "function" ? t(e) : k({}, e, t);
}
function mE(e) {
  const { children: t, theme: n } = e,
    r = U0(),
    o = y.useMemo(() => {
      const i = r === null ? n : gE(r, n);
      return i != null && (i[hE] = r !== null), i;
    }, [n, r]);
  return S.jsx(z0.Provider, { value: o, children: t });
}
const vE = ["value"],
  W0 = y.createContext();
function yE(e) {
  let { value: t } = e,
    n = q(e, vE);
  return S.jsx(W0.Provider, k({ value: t ?? !0 }, n));
}
const pu = () => {
    const e = y.useContext(W0);
    return e ?? !1;
  },
  H0 = y.createContext(void 0);
function xE({ value: e, children: t }) {
  return S.jsx(H0.Provider, { value: e, children: t });
}
function bE(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps
    ? ps(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
    ? ps(o, r)
    : r;
}
function SE({ props: e, name: t }) {
  const n = y.useContext(H0);
  return bE({ props: e, name: t, theme: { components: n } });
}
const lg = {};
function ug(e, t, n, r = !1) {
  return y.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? k({}, t, { [e]: i }) : i;
      return r ? () => s : s;
    }
    return e ? k({}, t, { [e]: n }) : k({}, t, n);
  }, [e, t, n, r]);
}
function CE(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = T0(lg),
    i = U0() || lg,
    s = ug(r, o, n),
    a = ug(r, i, n, !0),
    l = s.direction === "rtl";
  return S.jsx(mE, {
    theme: a,
    children: S.jsx(_s.Provider, {
      value: s,
      children: S.jsx(yE, {
        value: l,
        children: S.jsx(xE, {
          value: s == null ? void 0 : s.components,
          children: t,
        }),
      }),
    }),
  });
}
function hs(e) {
  "@babel/helpers - typeof";
  return (
    (hs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hs(e)
  );
}
function wE(e, t) {
  if (hs(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (hs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kE(e) {
  var t = wE(e, "string");
  return hs(t) == "symbol" ? t : t + "";
}
const _E = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  EE = Rs(),
  PE = j_("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function $E(e) {
  return z_({ props: e, name: "MuiStack", defaultTheme: EE });
}
function RE(e, t) {
  const n = y.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(y.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    []
  );
}
const TE = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  OE = ({ ownerState: e, theme: t }) => {
    let n = k(
      { display: "flex", flexDirection: "column" },
      Cn(
        { theme: t },
        Xu({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      )
    );
    if (e.spacing) {
      const r = qf(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, u) => (
            ((typeof e.spacing == "object" && e.spacing[u] != null) ||
              (typeof e.direction == "object" && e.direction[u] != null)) &&
              (l[u] = !0),
            l
          ),
          {}
        ),
        i = Xu({ values: e.direction, base: o }),
        s = Xu({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((l, u, c) => {
          if (!i[l]) {
            const d = u > 0 ? i[c[u - 1]] : "column";
            i[l] = d;
          }
        }),
        (n = Ot(
          n,
          Cn({ theme: t }, s, (l, u) =>
            e.useFlexGap
              ? { gap: qr(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${TE(u ? i[u] : e.direction)}`]: qr(r, l),
                  },
                }
          )
        ));
    }
    return (n = Ck(t.breakpoints, n)), n;
  };
function IE(e = {}) {
  const {
      createStyledComponent: t = PE,
      useThemeProps: n = $E,
      componentName: r = "MuiStack",
    } = e,
    o = () => ve({ root: ["root"] }, (l) => ge(r, l), {}),
    i = t(OE);
  return y.forwardRef(function (l, u) {
    const c = n(l),
      f = eu(c),
      {
        component: d = "div",
        direction: x = "column",
        spacing: v = 0,
        divider: g,
        children: _,
        className: p,
        useFlexGap: h = !1,
      } = f,
      m = q(f, _E),
      C = { direction: x, spacing: v, useFlexGap: h },
      $ = o();
    return S.jsx(
      i,
      k({ as: d, ownerState: C, ref: u, className: G($.root, p) }, m, {
        children: g ? RE(_, g) : _,
      })
    );
  });
}
function LE(e, t) {
  return k(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var ot = {},
  V0 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(V0);
var Ts = V0.exports;
const ME = An(fw),
  NE = An(W_);
var K0 = Ts;
Object.defineProperty(ot, "__esModule", { value: !0 });
var Oe = (ot.alpha = X0);
ot.blend = qE;
ot.colorChannel = void 0;
var AE = (ot.darken = np);
ot.decomposeColor = fn;
ot.emphasize = Q0;
var FE = (ot.getContrastRatio = WE);
ot.getLuminance = sl;
ot.hexToRgb = G0;
ot.hslToRgb = Y0;
var DE = (ot.lighten = rp);
ot.private_safeAlpha = HE;
ot.private_safeColorChannel = void 0;
ot.private_safeDarken = VE;
ot.private_safeEmphasize = GE;
ot.private_safeLighten = KE;
ot.recomposeColor = ri;
ot.rgbToHex = UE;
var cg = K0(ME),
  jE = K0(NE);
function tp(e, t = 0, n = 1) {
  return (0, jE.default)(e, t, n);
}
function G0(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function BE(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function fn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return fn(G0(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, cg.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, cg.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const q0 = (e) => {
  const t = fn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
ot.colorChannel = q0;
const zE = (e, t) => {
  try {
    return q0(e);
  } catch {
    return e;
  }
};
ot.private_safeColorChannel = zE;
function ri(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function UE(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = fn(e);
  return `#${t.map((n, r) => BE(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Y0(e) {
  e = fn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), ri({ type: a, values: l })
  );
}
function sl(e) {
  e = fn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? fn(Y0(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function WE(e, t) {
  const n = sl(e),
    r = sl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function X0(e, t) {
  return (
    (e = fn(e)),
    (t = tp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ri(e)
  );
}
function HE(e, t, n) {
  try {
    return X0(e, t);
  } catch {
    return e;
  }
}
function np(e, t) {
  if (((e = fn(e)), (t = tp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return ri(e);
}
function VE(e, t, n) {
  try {
    return np(e, t);
  } catch {
    return e;
  }
}
function rp(e, t) {
  if (((e = fn(e)), (t = tp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return ri(e);
}
function KE(e, t, n) {
  try {
    return rp(e, t);
  } catch {
    return e;
  }
}
function Q0(e, t = 0.15) {
  return sl(e) > 0.5 ? np(e, t) : rp(e, t);
}
function GE(e, t, n) {
  try {
    return Q0(e, t);
  } catch {
    return e;
  }
}
function qE(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = fn(e),
    s = fn(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ];
  return ri({ type: "rgb", values: a });
}
const YE = ["mode", "contrastThreshold", "tonalOffset"],
  dg = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: us.white, default: us.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Zu = {
    text: {
      primary: us.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: us.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function fg(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = DE(e.main, o))
      : t === "dark" && (e.dark = AE(e.main, i)));
}
function XE(e = "light") {
  return e === "dark"
    ? { main: to[200], light: to[50], dark: to[400] }
    : { main: to[700], light: to[400], dark: to[800] };
}
function QE(e = "light") {
  return e === "dark"
    ? { main: eo[200], light: eo[50], dark: eo[400] }
    : { main: eo[500], light: eo[300], dark: eo[700] };
}
function JE(e = "light") {
  return e === "dark"
    ? { main: Zr[500], light: Zr[300], dark: Zr[700] }
    : { main: Zr[700], light: Zr[400], dark: Zr[800] };
}
function ZE(e = "light") {
  return e === "dark"
    ? { main: no[400], light: no[300], dark: no[700] }
    : { main: no[700], light: no[500], dark: no[900] };
}
function eP(e = "light") {
  return e === "dark"
    ? { main: ro[400], light: ro[300], dark: ro[700] }
    : { main: ro[800], light: ro[500], dark: ro[900] };
}
function tP(e = "light") {
  return e === "dark"
    ? { main: mi[400], light: mi[300], dark: mi[700] }
    : { main: "#ed6c02", light: mi[500], dark: mi[900] };
}
function nP(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = q(e, YE),
    i = e.primary || XE(t),
    s = e.secondary || QE(t),
    a = e.error || JE(t),
    l = e.info || ZE(t),
    u = e.success || eP(t),
    c = e.warning || tP(t);
  function f(g) {
    return FE(g, Zu.text.primary) >= n ? Zu.text.primary : dg.text.primary;
  }
  const d = ({
      color: g,
      name: _,
      mainShade: p = 500,
      lightShade: h = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((g = k({}, g)),
        !g.main && g[p] && (g.main = g[p]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(Xn(11, _ ? ` (${_})` : "", p));
      if (typeof g.main != "string")
        throw new Error(Xn(12, _ ? ` (${_})` : "", JSON.stringify(g.main)));
      return (
        fg(g, "light", h, r),
        fg(g, "dark", m, r),
        g.contrastText || (g.contrastText = f(g.main)),
        g
      );
    },
    x = { dark: Zu, light: dg };
  return Ot(
    k(
      {
        common: k({}, us),
        mode: t,
        primary: d({ color: i, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: dw,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      x[t]
    ),
    o
  );
}
const rP = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function oP(e) {
  return Math.round(e * 1e5) / 1e5;
}
const pg = { textTransform: "uppercase" },
  hg = '"Roboto", "Helvetica", "Arial", sans-serif';
function iP(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = hg,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = q(n, rP),
    x = o / 14,
    v = f || ((p) => `${(p / u) * x}rem`),
    g = (p, h, m, C, $) =>
      k(
        { fontFamily: r, fontWeight: p, fontSize: v(h), lineHeight: m },
        r === hg ? { letterSpacing: `${oP(C / h)}em` } : {},
        $,
        c
      ),
    _ = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(s, 48, 1.167, 0),
      h4: g(s, 34, 1.235, 0.25),
      h5: g(s, 24, 1.334, 0),
      h6: g(a, 20, 1.6, 0.15),
      subtitle1: g(s, 16, 1.75, 0.15),
      subtitle2: g(a, 14, 1.57, 0.1),
      body1: g(s, 16, 1.5, 0.15),
      body2: g(s, 14, 1.43, 0.15),
      button: g(a, 14, 1.75, 0.4, pg),
      caption: g(s, 12, 1.66, 0.4),
      overline: g(s, 12, 2.66, 1, pg),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Ot(
    k(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      _
    ),
    d,
    { clone: !1 }
  );
}
const sP = 0.2,
  aP = 0.14,
  lP = 0.12;
function We(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sP})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${aP})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lP})`,
  ].join(",");
}
const uP = [
    "none",
    We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  cP = uP,
  dP = ["duration", "easing", "delay"],
  fP = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  pP = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function gg(e) {
  return `${Math.round(e)}ms`;
}
function hP(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function gP(e) {
  const t = k({}, fP, e.easing),
    n = k({}, pP, e.duration);
  return k(
    {
      getAutoHeightDuration: hP,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          q(i, dP),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : gg(s)} ${a} ${
                  typeof l == "string" ? l : gg(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const mP = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  vP = mP,
  yP = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function op(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = q(e, yP);
  if (e.vars) throw new Error(Xn(18));
  const a = nP(r),
    l = Rs(e);
  let u = Ot(l, {
    mixins: LE(l.breakpoints, n),
    palette: a,
    shadows: cP.slice(),
    typography: iP(a, i),
    transitions: gP(o),
    zIndex: k({}, vP),
  });
  return (
    (u = Ot(u, s)),
    (u = t.reduce((c, f) => Ot(c, f), u)),
    (u.unstable_sxConfig = k({}, Ps, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return $s({ sx: f, theme: this });
    }),
    u
  );
}
const xP = op(),
  ip = xP;
function oi() {
  const e = Zl(ip);
  return e[zo] || e;
}
var Os = {};
const bP = An(zC);
var ec = { exports: {} },
  mg;
function SP() {
  return (
    mg ||
      ((mg = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {};
          for (var i in n)
            if ({}.hasOwnProperty.call(n, i)) {
              if (r.indexOf(i) !== -1) continue;
              o[i] = n[i];
            }
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(ec)),
    ec.exports
  );
}
const CP = An(mk),
  wP = An(vk),
  kP = An(kk),
  _P = An($_),
  EP = An(f_),
  PP = An(y_);
var ii = Ts;
Object.defineProperty(Os, "__esModule", { value: !0 });
var $P = (Os.default = zP);
Os.shouldForwardProp = Pa;
Os.systemDefaultTheme = void 0;
var Zt = ii(bP),
  xd = ii(SP()),
  vg = NP(CP),
  RP = wP;
ii(kP);
ii(_P);
var TP = ii(EP),
  OP = ii(PP);
const IP = ["ownerState"],
  LP = ["variants"],
  MP = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function J0(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (J0 = function (r) {
    return r ? n : t;
  })(e);
}
function NP(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = J0(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function AP(e) {
  return Object.keys(e).length === 0;
}
function FP(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Pa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const DP = (Os.systemDefaultTheme = (0, TP.default)()),
  jP = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ta({ defaultTheme: e, theme: t, themeId: n }) {
  return AP(t) ? e : t[n] || t;
}
function BP(e) {
  return e ? (t, n) => n[e] : null;
}
function $a(e, t) {
  let { ownerState: n } = t,
    r = (0, xd.default)(t, IP);
  const o =
    typeof e == "function" ? e((0, Zt.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => $a(i, (0, Zt.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, xd.default)(o, LP);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, Zt.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style((0, Zt.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function zP(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = DP,
      rootShouldForwardProp: r = Pa,
      slotShouldForwardProp: o = Pa,
    } = e,
    i = (s) =>
      (0, OP.default)(
        (0, Zt.default)({}, s, {
          theme: ta((0, Zt.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, vg.internal_processStyles)(s, ($) =>
        $.filter((O) => !(O != null && O.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = BP(jP(u)),
        } = a,
        x = (0, xd.default)(a, MP),
        v = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = f || !1;
      let _,
        p = Pa;
      u === "Root" || u === "root"
        ? (p = r)
        : u
        ? (p = o)
        : FP(s) && (p = void 0);
      const h = (0, vg.default)(
          s,
          (0, Zt.default)({ shouldForwardProp: p, label: _ }, x)
        ),
        m = ($) =>
          (typeof $ == "function" && $.__emotion_real !== $) ||
          (0, RP.isPlainObject)($)
            ? (O) =>
                $a(
                  $,
                  (0, Zt.default)({}, O, {
                    theme: ta({ theme: O.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : $,
        C = ($, ...O) => {
          let E = m($);
          const b = O ? O.map(m) : [];
          l &&
            d &&
            b.push((M) => {
              const N = ta(
                (0, Zt.default)({}, M, { defaultTheme: n, themeId: t })
              );
              if (
                !N.components ||
                !N.components[l] ||
                !N.components[l].styleOverrides
              )
                return null;
              const D = N.components[l].styleOverrides,
                F = {};
              return (
                Object.entries(D).forEach(([P, I]) => {
                  F[P] = $a(I, (0, Zt.default)({}, M, { theme: N }));
                }),
                d(M, F)
              );
            }),
            l &&
              !v &&
              b.push((M) => {
                var N;
                const D = ta(
                    (0, Zt.default)({}, M, { defaultTheme: n, themeId: t })
                  ),
                  F =
                    D == null ||
                    (N = D.components) == null ||
                    (N = N[l]) == null
                      ? void 0
                      : N.variants;
                return $a(
                  { variants: F },
                  (0, Zt.default)({}, M, { theme: D })
                );
              }),
            g || b.push(i);
          const w = b.length - O.length;
          if (Array.isArray($) && w > 0) {
            const M = new Array(w).fill("");
            (E = [...$, ...M]), (E.raw = [...$.raw, ...M]);
          }
          const T = h(E, ...b);
          return s.muiName && (T.muiName = s.muiName), T;
        };
      return h.withConfig && (C.withConfig = h.withConfig), C;
    }
  );
}
function Z0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const UP = (e) => Z0(e) && e !== "classes",
  Nt = UP,
  WP = $P({ themeId: zo, defaultTheme: ip, rootShouldForwardProp: Nt }),
  W = WP,
  HP = ["theme"];
function VP(e) {
  let { theme: t } = e,
    n = q(e, HP);
  const r = t[zo];
  return S.jsx(CE, k({}, n, { themeId: r ? zo : void 0, theme: r || t }));
}
const KP = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  yg = KP;
function ye(e) {
  return SE(e);
}
function GP(e) {
  return ge("MuiSvgIcon", e);
}
fe("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const qP = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  YP = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${U(t)}`, `fontSize${U(n)}`],
      };
    return ve(o, GP, r);
  },
  XP = W("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${U(n.color)}`],
        t[`fontSize${U(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, f, d, x, v;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (d = (e.vars || e).palette) == null || (d = d[t.color]) == null
            ? void 0
            : d.main) != null
          ? f
          : {
              action:
                (x = (e.vars || e).palette) == null || (x = x.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  e1 = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: d = "0 0 24 24",
      } = r,
      x = q(r, qP),
      v = y.isValidElement(o) && o.type === "svg",
      g = k({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
        hasSvgAsChild: v,
      }),
      _ = {};
    c || (_.viewBox = d);
    const p = YP(g);
    return S.jsxs(
      XP,
      k(
        {
          as: a,
          className: G(p.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        _,
        x,
        v && o.props,
        {
          ownerState: g,
          children: [
            v ? o.props.children : o,
            f ? S.jsx("title", { children: f }) : null,
          ],
        }
      )
    );
  });
e1.muiName = "SvgIcon";
const xg = e1;
function Dn(e, t) {
  function n(r, o) {
    return S.jsx(
      xg,
      k({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = xg.muiName), y.memo(y.forwardRef(n));
}
const QP = {
    configure: (e) => {
      Xf.configure(e);
    },
  },
  JP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: U,
        createChainedFunction: md,
        createSvgIcon: Dn,
        debounce: ti,
        deprecatedPropType: G_,
        isMuiElement: Bi,
        ownerDocument: It,
        ownerWindow: dn,
        requirePropFactory: q_,
        setRef: il,
        unstable_ClassNameGenerator: QP,
        unstable_useEnhancedEffect: cn,
        unstable_useId: Zf,
        unsupportedProp: X_,
        useControlled: vd,
        useEventCallback: Rn,
        useForkRef: nt,
        useIsFocusVisible: ep,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function bd(e, t) {
  return (
    (bd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    bd(e, t)
  );
}
function t1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    bd(e, t);
}
const bg = { disabled: !1 },
  al = _t.createContext(null);
var ZP = function (t) {
    return t.scrollTop;
  },
  Ri = "unmounted",
  Lr = "exited",
  Mr = "entering",
  uo = "entered",
  Sd = "exiting",
  tr = (function (e) {
    t1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = Lr), (i.appearStatus = Mr))
            : (l = uo)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = Ri)
          : (l = Lr),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Ri ? { status: Lr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Mr && s !== uo && (i = Mr)
            : (s === Mr || s === uo) && (i = Sd);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Mr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Js.findDOMNode(this);
              s && ZP(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Lr &&
            this.setState({ status: Ri });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Js.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          f = this.getTimeouts(),
          d = a ? f.appear : f.enter;
        if ((!o && !s) || bg.disabled) {
          this.safeSetState({ status: uo }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Mr }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(d, function () {
                i.safeSetState({ status: uo }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Js.findDOMNode(this);
        if (!i || bg.disabled) {
          this.safeSetState({ status: Lr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Sd }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Lr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Js.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Ri) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = q(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return _t.createElement(
          al.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : _t.cloneElement(_t.Children.only(s), a)
        );
      }),
      t
    );
  })(_t.Component);
tr.contextType = al;
tr.propTypes = {};
function io() {}
tr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: io,
  onEntering: io,
  onEntered: io,
  onExit: io,
  onExiting: io,
  onExited: io,
};
tr.UNMOUNTED = Ri;
tr.EXITED = Lr;
tr.ENTERING = Mr;
tr.ENTERED = uo;
tr.EXITING = Sd;
const sp = tr;
function e$(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ap(e, t) {
  var n = function (i) {
      return t && y.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      y.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function t$(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function jr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function n$(e, t) {
  return ap(e.children, function (n) {
    return y.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: jr(n, "appear", e),
      enter: jr(n, "enter", e),
      exit: jr(n, "exit", e),
    });
  });
}
function r$(e, t, n) {
  var r = ap(e.children),
    o = t$(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (y.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = y.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = y.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: jr(s, "exit", e),
              enter: jr(s, "enter", e),
            }))
          : !l && a && !c
          ? (o[i] = y.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            y.isValidElement(u) &&
            (o[i] = y.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: jr(s, "exit", e),
              enter: jr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var o$ =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  i$ = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  lp = (function (e) {
    t1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(e$(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? n$(o, a) : r$(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = ap(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = k({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = q(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = o$(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? _t.createElement(al.Provider, { value: l }, u)
            : _t.createElement(
                al.Provider,
                { value: l },
                _t.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(_t.Component);
lp.propTypes = {};
lp.defaultProps = i$;
const s$ = lp,
  up = (e) => e.scrollTop;
function Vo(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function a$(e) {
  return ge("MuiPaper", e);
}
fe("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const l$ = ["className", "component", "elevation", "square", "variant"],
  u$ = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return ve(i, a$, o);
  },
  c$ = W("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return k(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        k(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${Oe(
                "#fff",
                yg(t.elevation)
              )}, ${Oe("#fff", yg(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  d$ = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation",
      } = r,
      u = q(r, l$),
      c = k({}, r, { component: i, elevation: s, square: a, variant: l }),
      f = u$(c);
    return S.jsx(
      c$,
      k({ as: i, ownerState: c, className: G(f.root, o), ref: n }, u)
    );
  }),
  Is = d$;
function f$(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, f] = y.useState(!1),
    d = G(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    v = G(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && f(!0),
    y.useEffect(() => {
      if (!a && l != null) {
        const g = setTimeout(l, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [l, a, u]),
    S.jsx("span", {
      className: d,
      style: x,
      children: S.jsx("span", { className: v }),
    })
  );
}
const p$ = fe("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  en = p$,
  h$ = ["center", "classes", "className"];
let hu = (e) => e,
  Sg,
  Cg,
  wg,
  kg;
const Cd = 550,
  g$ = 80,
  m$ = Gl(
    Sg ||
      (Sg = hu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  v$ = Gl(
    Cg ||
      (Cg = hu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  y$ = Gl(
    wg ||
      (wg = hu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  x$ = W("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  b$ = W(f$, { name: "MuiTouchRipple", slot: "Ripple" })(
    kg ||
      (kg = hu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    en.rippleVisible,
    m$,
    Cd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    en.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    en.child,
    en.childLeaving,
    v$,
    Cd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    en.childPulsate,
    y$,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  S$ = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = q(r, h$),
      [l, u] = y.useState([]),
      c = y.useRef(0),
      f = y.useRef(null);
    y.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const d = y.useRef(!1),
      x = F0(),
      v = y.useRef(null),
      g = y.useRef(null),
      _ = y.useCallback(
        (C) => {
          const {
            pulsate: $,
            rippleX: O,
            rippleY: E,
            rippleSize: b,
            cb: w,
          } = C;
          u((T) => [
            ...T,
            S.jsx(
              b$,
              {
                classes: {
                  ripple: G(i.ripple, en.ripple),
                  rippleVisible: G(i.rippleVisible, en.rippleVisible),
                  ripplePulsate: G(i.ripplePulsate, en.ripplePulsate),
                  child: G(i.child, en.child),
                  childLeaving: G(i.childLeaving, en.childLeaving),
                  childPulsate: G(i.childPulsate, en.childPulsate),
                },
                timeout: Cd,
                pulsate: $,
                rippleX: O,
                rippleY: E,
                rippleSize: b,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (f.current = w);
        },
        [i]
      ),
      p = y.useCallback(
        (C = {}, $ = {}, O = () => {}) => {
          const {
            pulsate: E = !1,
            center: b = o || $.pulsate,
            fakeElement: w = !1,
          } = $;
          if ((C == null ? void 0 : C.type) === "mousedown" && d.current) {
            d.current = !1;
            return;
          }
          (C == null ? void 0 : C.type) === "touchstart" && (d.current = !0);
          const T = w ? null : g.current,
            M = T
              ? T.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let N, D, F;
          if (
            b ||
            C === void 0 ||
            (C.clientX === 0 && C.clientY === 0) ||
            (!C.clientX && !C.touches)
          )
            (N = Math.round(M.width / 2)), (D = Math.round(M.height / 2));
          else {
            const { clientX: P, clientY: I } =
              C.touches && C.touches.length > 0 ? C.touches[0] : C;
            (N = Math.round(P - M.left)), (D = Math.round(I - M.top));
          }
          if (b)
            (F = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
              F % 2 === 0 && (F += 1);
          else {
            const P =
                Math.max(Math.abs((T ? T.clientWidth : 0) - N), N) * 2 + 2,
              I = Math.max(Math.abs((T ? T.clientHeight : 0) - D), D) * 2 + 2;
            F = Math.sqrt(P ** 2 + I ** 2);
          }
          C != null && C.touches
            ? v.current === null &&
              ((v.current = () => {
                _({ pulsate: E, rippleX: N, rippleY: D, rippleSize: F, cb: O });
              }),
              x.start(g$, () => {
                v.current && (v.current(), (v.current = null));
              }))
            : _({ pulsate: E, rippleX: N, rippleY: D, rippleSize: F, cb: O });
        },
        [o, _, x]
      ),
      h = y.useCallback(() => {
        p({}, { pulsate: !0 });
      }, [p]),
      m = y.useCallback(
        (C, $) => {
          if (
            (x.clear(),
            (C == null ? void 0 : C.type) === "touchend" && v.current)
          ) {
            v.current(),
              (v.current = null),
              x.start(0, () => {
                m(C, $);
              });
            return;
          }
          (v.current = null),
            u((O) => (O.length > 0 ? O.slice(1) : O)),
            (f.current = $);
        },
        [x]
      );
    return (
      y.useImperativeHandle(n, () => ({ pulsate: h, start: p, stop: m }), [
        h,
        p,
        m,
      ]),
      S.jsx(
        x$,
        k({ className: G(en.root, i.root, s), ref: g }, a, {
          children: S.jsx(s$, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  C$ = S$;
function w$(e) {
  return ge("MuiButtonBase", e);
}
const k$ = fe("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  _$ = k$,
  E$ = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  P$ = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = ve({ root: ["root", t && "disabled", n && "focusVisible"] }, w$, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  $$ = W("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${_$.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  R$ = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: f = !1,
        focusRipple: d = !1,
        LinkComponent: x = "a",
        onBlur: v,
        onClick: g,
        onContextMenu: _,
        onDragLeave: p,
        onFocus: h,
        onFocusVisible: m,
        onKeyDown: C,
        onKeyUp: $,
        onMouseDown: O,
        onMouseLeave: E,
        onMouseUp: b,
        onTouchEnd: w,
        onTouchMove: T,
        onTouchStart: M,
        tabIndex: N = 0,
        TouchRippleProps: D,
        touchRippleRef: F,
        type: P,
      } = r,
      I = q(r, E$),
      A = y.useRef(null),
      R = y.useRef(null),
      L = nt(R, F),
      { isFocusVisibleRef: j, onFocus: V, onBlur: B, ref: J } = ep(),
      [Z, oe] = y.useState(!1);
    u && Z && oe(!1),
      y.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            oe(!0), A.current.focus();
          },
        }),
        []
      );
    const [re, me] = y.useState(!1);
    y.useEffect(() => {
      me(!0);
    }, []);
    const ke = re && !c && !u;
    y.useEffect(() => {
      Z && d && !c && re && R.current.pulsate();
    }, [c, d, Z, re]);
    function K(Q, Ze, ut = f) {
      return Rn(
        (it) => (Ze && Ze(it), !ut && R.current && R.current[Q](it), !0)
      );
    }
    const ae = K("start", O),
      te = K("stop", _),
      le = K("stop", p),
      X = K("stop", b),
      ie = K("stop", (Q) => {
        Z && Q.preventDefault(), E && E(Q);
      }),
      se = K("start", M),
      be = K("stop", w),
      _e = K("stop", T),
      Pe = K(
        "stop",
        (Q) => {
          B(Q), j.current === !1 && oe(!1), v && v(Q);
        },
        !1
      ),
      Be = Rn((Q) => {
        A.current || (A.current = Q.currentTarget),
          V(Q),
          j.current === !0 && (oe(!0), m && m(Q)),
          h && h(Q);
      }),
      Fe = () => {
        const Q = A.current;
        return l && l !== "button" && !(Q.tagName === "A" && Q.href);
      },
      pe = y.useRef(!1),
      Ce = Rn((Q) => {
        d &&
          !pe.current &&
          Z &&
          R.current &&
          Q.key === " " &&
          ((pe.current = !0),
          R.current.stop(Q, () => {
            R.current.start(Q);
          })),
          Q.target === Q.currentTarget &&
            Fe() &&
            Q.key === " " &&
            Q.preventDefault(),
          C && C(Q),
          Q.target === Q.currentTarget &&
            Fe() &&
            Q.key === "Enter" &&
            !u &&
            (Q.preventDefault(), g && g(Q));
      }),
      xe = Rn((Q) => {
        d &&
          Q.key === " " &&
          R.current &&
          Z &&
          !Q.defaultPrevented &&
          ((pe.current = !1),
          R.current.stop(Q, () => {
            R.current.pulsate(Q);
          })),
          $ && $(Q),
          g &&
            Q.target === Q.currentTarget &&
            Fe() &&
            Q.key === " " &&
            !Q.defaultPrevented &&
            g(Q);
      });
    let Ee = l;
    Ee === "button" && (I.href || I.to) && (Ee = x);
    const he = {};
    Ee === "button"
      ? ((he.type = P === void 0 ? "button" : P), (he.disabled = u))
      : (!I.href && !I.to && (he.role = "button"),
        u && (he["aria-disabled"] = u));
    const mt = nt(n, J, A),
      Je = k({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: N,
        focusVisible: Z,
      }),
      Se = P$(Je);
    return S.jsxs(
      $$,
      k(
        {
          as: Ee,
          className: G(Se.root, a),
          ownerState: Je,
          onBlur: Pe,
          onClick: g,
          onContextMenu: te,
          onFocus: Be,
          onKeyDown: Ce,
          onKeyUp: xe,
          onMouseDown: ae,
          onMouseLeave: ie,
          onMouseUp: X,
          onDragLeave: le,
          onTouchEnd: be,
          onTouchMove: _e,
          onTouchStart: se,
          ref: mt,
          tabIndex: u ? -1 : N,
          type: P,
        },
        he,
        I,
        { children: [s, ke ? S.jsx(C$, k({ ref: L, center: i }, D)) : null] }
      )
    );
  }),
  Qn = R$;
function T$(e) {
  return ge("MuiIconButton", e);
}
const O$ = fe("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  I$ = O$,
  L$ = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  M$ = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${U(r)}`,
          o && `edge${U(o)}`,
          `size${U(i)}`,
        ],
      };
    return ve(s, T$, t);
  },
  N$ = W(Qn, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${U(n.color)}`],
        n.edge && t[`edge${U(n.edge)}`],
        t[`size${U(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      k(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Oe(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return k(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          k(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": k(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Oe(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${I$.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  A$ = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: c = "medium",
      } = r,
      f = q(r, L$),
      d = k({}, r, {
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: c,
      }),
      x = M$(d);
    return S.jsx(
      N$,
      k(
        {
          className: G(x.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: l,
          ref: n,
        },
        f,
        { ownerState: d, children: i }
      )
    );
  }),
  wd = A$;
function F$(e) {
  return ge("MuiTypography", e);
}
fe("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const D$ = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  j$ = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${U(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return ve(a, F$, s);
  },
  B$ = W("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${U(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  _g = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  z$ = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  U$ = (e) => z$[e] || e,
  W$ = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiTypography" }),
      o = U$(r.color),
      i = eu(k({}, r, { color: o })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: d = "body1",
        variantMapping: x = _g,
      } = i,
      v = q(i, D$),
      g = k({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: f,
        variant: d,
        variantMapping: x,
      }),
      _ = l || (f ? "p" : x[d] || _g[d]) || "span",
      p = j$(g);
    return S.jsx(
      B$,
      k({ as: _, ref: n, ownerState: g, className: G(p.root, a) }, v)
    );
  }),
  Ke = W$;
function H$(e) {
  return ge("MuiAppBar", e);
}
fe("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const V$ = ["className", "color", "enableColorOnDark", "position"],
  K$ = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${U(t)}`, `position${U(n)}`] };
    return ve(o, H$, r);
  },
  na = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  G$ = W(Is, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${U(n.position)}`], t[`color${U(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return k(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        k(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            k(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        k(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : na(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : na(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : na(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : na(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          !["inherit", "transparent"].includes(t.color) && {
            backgroundColor: "var(--AppBar-background)",
          },
          { color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)" },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  q$ = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
      } = r,
      l = q(r, V$),
      u = k({}, r, { color: i, position: a, enableColorOnDark: s }),
      c = K$(u);
    return S.jsx(
      G$,
      k(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: G(c.root, o, a === "fixed" && "mui-fixed"),
          ref: n,
        },
        l
      )
    );
  }),
  Y$ = q$;
function X$(e) {
  return typeof e == "function" ? e() : e;
}
const Q$ = y.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, a] = y.useState(null),
      l = nt(y.isValidElement(r) ? ni(r) : null, n);
    if (
      (cn(() => {
        i || a(X$(o) || document.body);
      }, [o, i]),
      cn(() => {
        if (s && !i)
          return (
            il(n, s),
            () => {
              il(n, null);
            }
          );
      }, [n, s, i]),
      i)
    ) {
      if (y.isValidElement(r)) {
        const u = { ref: l };
        return y.cloneElement(r, u);
      }
      return S.jsx(y.Fragment, { children: r });
    }
    return S.jsx(y.Fragment, { children: s && Tf.createPortal(r, s) });
  }),
  J$ = Q$,
  Z$ = Dn(
    S.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel"
  );
function e2(e) {
  return ge("MuiChip", e);
}
const t2 = fe("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  Te = t2,
  n2 = [
    "avatar",
    "className",
    "clickable",
    "color",
    "component",
    "deleteIcon",
    "disabled",
    "icon",
    "label",
    "onClick",
    "onDelete",
    "onKeyDown",
    "onKeyUp",
    "size",
    "variant",
    "tabIndex",
    "skipFocusWhenDisabled",
  ],
  r2 = (e) => {
    const {
        classes: t,
        disabled: n,
        size: r,
        color: o,
        iconColor: i,
        onDelete: s,
        clickable: a,
        variant: l,
      } = e,
      u = {
        root: [
          "root",
          l,
          n && "disabled",
          `size${U(r)}`,
          `color${U(o)}`,
          a && "clickable",
          a && `clickableColor${U(o)}`,
          s && "deletable",
          s && `deletableColor${U(o)}`,
          `${l}${U(o)}`,
        ],
        label: ["label", `label${U(r)}`],
        avatar: ["avatar", `avatar${U(r)}`, `avatarColor${U(o)}`],
        icon: ["icon", `icon${U(r)}`, `iconColor${U(i)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${U(r)}`,
          `deleteIconColor${U(o)}`,
          `deleteIcon${U(l)}Color${U(o)}`,
        ],
      };
    return ve(u, e2, t);
  },
  o2 = W("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        {
          color: r,
          iconColor: o,
          clickable: i,
          onDelete: s,
          size: a,
          variant: l,
        } = n;
      return [
        { [`& .${Te.avatar}`]: t.avatar },
        { [`& .${Te.avatar}`]: t[`avatar${U(a)}`] },
        { [`& .${Te.avatar}`]: t[`avatarColor${U(r)}`] },
        { [`& .${Te.icon}`]: t.icon },
        { [`& .${Te.icon}`]: t[`icon${U(a)}`] },
        { [`& .${Te.icon}`]: t[`iconColor${U(o)}`] },
        { [`& .${Te.deleteIcon}`]: t.deleteIcon },
        { [`& .${Te.deleteIcon}`]: t[`deleteIcon${U(a)}`] },
        { [`& .${Te.deleteIcon}`]: t[`deleteIconColor${U(r)}`] },
        { [`& .${Te.deleteIcon}`]: t[`deleteIcon${U(l)}Color${U(r)}`] },
        t.root,
        t[`size${U(a)}`],
        t[`color${U(r)}`],
        i && t.clickable,
        i && r !== "default" && t[`clickableColor${U(r)})`],
        s && t.deletable,
        s && r !== "default" && t[`deletableColor${U(r)}`],
        t[l],
        t[`${l}${U(r)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
      return k(
        {
          maxWidth: "100%",
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: "nowrap",
          transition: e.transitions.create(["background-color", "box-shadow"]),
          cursor: "unset",
          outline: 0,
          textDecoration: "none",
          border: 0,
          padding: 0,
          verticalAlign: "middle",
          boxSizing: "border-box",
          [`&.${Te.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: "none",
          },
          [`& .${Te.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${Te.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${Te.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${Te.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${Te.icon}`]: k(
            { marginLeft: 5, marginRight: -6 },
            t.size === "small" && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            t.iconColor === t.color &&
              k(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : n },
                t.color !== "default" && { color: "inherit" }
              )
          ),
          [`& .${Te.deleteIcon}`]: k(
            {
              WebkitTapHighlightColor: "transparent",
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : Oe(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: "pointer",
              margin: "0 5px 0 -6px",
              "&:hover": {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : Oe(e.palette.text.primary, 0.4),
              },
            },
            t.size === "small" && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            t.color !== "default" && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : Oe(e.palette[t.color].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].contrastText,
              },
            }
          ),
        },
        t.size === "small" && { height: 24 },
        t.color !== "default" && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${Te.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Oe(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== "default" && {
            [`&.${Te.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      k(
        {},
        t.clickable && {
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Oe(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
          },
          [`&.${Te.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Oe(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
          "&:active": { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== "default" && {
            [`&:hover, &.${Te.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      k(
        {},
        t.variant === "outlined" && {
          backgroundColor: "transparent",
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${
                e.palette.mode === "light"
                  ? e.palette.grey[400]
                  : e.palette.grey[700]
              }`,
          [`&.${Te.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover,
          },
          [`&.${Te.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`& .${Te.avatar}`]: { marginLeft: 4 },
          [`& .${Te.avatarSmall}`]: { marginLeft: 2 },
          [`& .${Te.icon}`]: { marginLeft: 4 },
          [`& .${Te.iconSmall}`]: { marginLeft: 2 },
          [`& .${Te.deleteIcon}`]: { marginRight: 5 },
          [`& .${Te.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === "outlined" &&
          t.color !== "default" && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${
              e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : Oe(e.palette[t.color].main, 0.7)
            }`,
            [`&.${Te.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Oe(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${Te.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.focusOpacity
                  })`
                : Oe(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${Te.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : Oe(e.palette[t.color].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].main,
              },
            },
          }
      )
  ),
  i2 = W("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { size: r } = n;
      return [t.label, t[`label${U(r)}`]];
    },
  })(({ ownerState: e }) =>
    k(
      {
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
      },
      e.variant === "outlined" && { paddingLeft: 11, paddingRight: 11 },
      e.size === "small" && { paddingLeft: 8, paddingRight: 8 },
      e.size === "small" &&
        e.variant === "outlined" && { paddingLeft: 7, paddingRight: 7 }
    )
  );
function Eg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const s2 = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiChip" }),
      {
        avatar: o,
        className: i,
        clickable: s,
        color: a = "default",
        component: l,
        deleteIcon: u,
        disabled: c = !1,
        icon: f,
        label: d,
        onClick: x,
        onDelete: v,
        onKeyDown: g,
        onKeyUp: _,
        size: p = "medium",
        variant: h = "filled",
        tabIndex: m,
        skipFocusWhenDisabled: C = !1,
      } = r,
      $ = q(r, n2),
      O = y.useRef(null),
      E = nt(O, n),
      b = (L) => {
        L.stopPropagation(), v && v(L);
      },
      w = (L) => {
        L.currentTarget === L.target && Eg(L) && L.preventDefault(), g && g(L);
      },
      T = (L) => {
        L.currentTarget === L.target &&
          (v && Eg(L)
            ? v(L)
            : L.key === "Escape" && O.current && O.current.blur()),
          _ && _(L);
      },
      M = s !== !1 && x ? !0 : s,
      N = M || v ? Qn : l || "div",
      D = k({}, r, {
        component: N,
        disabled: c,
        size: p,
        color: a,
        iconColor: (y.isValidElement(f) && f.props.color) || a,
        onDelete: !!v,
        clickable: M,
        variant: h,
      }),
      F = r2(D),
      P =
        N === Qn
          ? k(
              { component: l || "div", focusVisibleClassName: F.focusVisible },
              v && { disableRipple: !0 }
            )
          : {};
    let I = null;
    v &&
      (I =
        u && y.isValidElement(u)
          ? y.cloneElement(u, {
              className: G(u.props.className, F.deleteIcon),
              onClick: b,
            })
          : S.jsx(Z$, { className: G(F.deleteIcon), onClick: b }));
    let A = null;
    o &&
      y.isValidElement(o) &&
      (A = y.cloneElement(o, { className: G(F.avatar, o.props.className) }));
    let R = null;
    return (
      f &&
        y.isValidElement(f) &&
        (R = y.cloneElement(f, { className: G(F.icon, f.props.className) })),
      S.jsxs(
        o2,
        k(
          {
            as: N,
            className: G(F.root, i),
            disabled: M && c ? !0 : void 0,
            onClick: x,
            onKeyDown: w,
            onKeyUp: T,
            ref: E,
            tabIndex: C && c ? -1 : m,
            ownerState: D,
          },
          P,
          $,
          {
            children: [
              A || R,
              S.jsx(i2, { className: G(F.label), ownerState: D, children: d }),
              I,
            ],
          }
        )
      )
    );
  }),
  Pg = s2,
  a2 = ["onChange", "maxRows", "minRows", "style", "value"];
function ra(e) {
  return parseInt(e, 10) || 0;
}
const l2 = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function u2(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const c2 = y.forwardRef(function (t, n) {
    const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
      l = q(t, a2),
      { current: u } = y.useRef(a != null),
      c = y.useRef(null),
      f = nt(n, c),
      d = y.useRef(null),
      x = y.useRef(null),
      v = y.useCallback(() => {
        const p = c.current,
          m = dn(p).getComputedStyle(p);
        if (m.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
        const C = x.current;
        (C.style.width = m.width),
          (C.value = p.value || t.placeholder || "x"),
          C.value.slice(-1) ===
            `
` && (C.value += " ");
        const $ = m.boxSizing,
          O = ra(m.paddingBottom) + ra(m.paddingTop),
          E = ra(m.borderBottomWidth) + ra(m.borderTopWidth),
          b = C.scrollHeight;
        C.value = "x";
        const w = C.scrollHeight;
        let T = b;
        i && (T = Math.max(Number(i) * w, T)),
          o && (T = Math.min(Number(o) * w, T)),
          (T = Math.max(T, w));
        const M = T + ($ === "border-box" ? O + E : 0),
          N = Math.abs(T - b) <= 1;
        return { outerHeightStyle: M, overflowing: N };
      }, [o, i, t.placeholder]),
      g = y.useCallback(() => {
        const p = v();
        if (u2(p)) return;
        const h = p.outerHeightStyle,
          m = c.current;
        d.current !== h && ((d.current = h), (m.style.height = `${h}px`)),
          (m.style.overflow = p.overflowing ? "hidden" : "");
      }, [v]);
    cn(() => {
      const p = () => {
        g();
      };
      let h;
      const m = ti(p),
        C = c.current,
        $ = dn(C);
      $.addEventListener("resize", m);
      let O;
      return (
        typeof ResizeObserver < "u" &&
          ((O = new ResizeObserver(p)), O.observe(C)),
        () => {
          m.clear(),
            cancelAnimationFrame(h),
            $.removeEventListener("resize", m),
            O && O.disconnect();
        }
      );
    }, [v, g]),
      cn(() => {
        g();
      });
    const _ = (p) => {
      u || g(), r && r(p);
    };
    return S.jsxs(y.Fragment, {
      children: [
        S.jsx(
          "textarea",
          k({ value: a, onChange: _, ref: f, rows: i, style: s }, l)
        ),
        S.jsx("textarea", {
          "aria-hidden": !0,
          className: t.className,
          readOnly: !0,
          ref: x,
          tabIndex: -1,
          style: k({}, l2.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
        }),
      ],
    });
  }),
  d2 = c2;
function Ls({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const f2 = y.createContext(void 0),
  cp = f2;
function Ms() {
  return y.useContext(cp);
}
function p2(e) {
  return S.jsx(g_, k({}, e, { defaultTheme: ip, themeId: zo }));
}
function $g(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ll(e, t = !1) {
  return (
    e &&
    (($g(e.value) && e.value !== "") ||
      (t && $g(e.defaultValue) && e.defaultValue !== ""))
  );
}
function h2(e) {
  return e.startAdornment;
}
function g2(e) {
  return ge("MuiInputBase", e);
}
const m2 = fe("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  Ko = m2,
  v2 = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  gu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${U(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  mu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  y2 = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: f,
        size: d,
        startAdornment: x,
        type: v,
      } = e,
      g = {
        root: [
          "root",
          `color${U(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          d && d !== "medium" && `size${U(d)}`,
          c && "multiline",
          x && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          f && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          v === "search" && "inputTypeSearch",
          c && "inputMultiline",
          d === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          x && "inputAdornedStart",
          i && "inputAdornedEnd",
          f && "readOnly",
        ],
      };
    return ve(g, g2, t);
  },
  vu = W("div", { name: "MuiInputBase", slot: "Root", overridesResolver: gu })(
    ({ theme: e, ownerState: t }) =>
      k(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${Ko.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          k({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  yu = W("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: mu,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = k(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return k(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Ko.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${Ko.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  x2 = S.jsx(p2, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  b2 = y.forwardRef(function (t, n) {
    var r;
    const o = ye({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: f,
        disabled: d,
        disableInjectingGlobalStyles: x,
        endAdornment: v,
        fullWidth: g = !1,
        id: _,
        inputComponent: p = "input",
        inputProps: h = {},
        inputRef: m,
        maxRows: C,
        minRows: $,
        multiline: O = !1,
        name: E,
        onBlur: b,
        onChange: w,
        onClick: T,
        onFocus: M,
        onKeyDown: N,
        onKeyUp: D,
        placeholder: F,
        readOnly: P,
        renderSuffix: I,
        rows: A,
        slotProps: R = {},
        slots: L = {},
        startAdornment: j,
        type: V = "text",
        value: B,
      } = o,
      J = q(o, v2),
      Z = h.value != null ? h.value : B,
      { current: oe } = y.useRef(Z != null),
      re = y.useRef(),
      me = y.useCallback((Se) => {}, []),
      ke = nt(re, m, h.ref, me),
      [K, ae] = y.useState(!1),
      te = Ms(),
      le = Ls({
        props: o,
        muiFormControl: te,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (le.focused = te ? te.focused : K),
      y.useEffect(() => {
        !te && d && K && (ae(!1), b && b());
      }, [te, d, K, b]);
    const X = te && te.onFilled,
      ie = te && te.onEmpty,
      se = y.useCallback(
        (Se) => {
          ll(Se) ? X && X() : ie && ie();
        },
        [X, ie]
      );
    cn(() => {
      oe && se({ value: Z });
    }, [Z, se, oe]);
    const be = (Se) => {
        if (le.disabled) {
          Se.stopPropagation();
          return;
        }
        M && M(Se),
          h.onFocus && h.onFocus(Se),
          te && te.onFocus ? te.onFocus(Se) : ae(!0);
      },
      _e = (Se) => {
        b && b(Se),
          h.onBlur && h.onBlur(Se),
          te && te.onBlur ? te.onBlur(Se) : ae(!1);
      },
      Pe = (Se, ...Q) => {
        if (!oe) {
          const Ze = Se.target || re.current;
          if (Ze == null) throw new Error(Xn(1));
          se({ value: Ze.value });
        }
        h.onChange && h.onChange(Se, ...Q), w && w(Se, ...Q);
      };
    y.useEffect(() => {
      se(re.current);
    }, []);
    const Be = (Se) => {
      re.current && Se.currentTarget === Se.target && re.current.focus(),
        T && T(Se);
    };
    let Fe = p,
      pe = h;
    O &&
      Fe === "input" &&
      (A
        ? (pe = k({ type: void 0, minRows: A, maxRows: A }, pe))
        : (pe = k({ type: void 0, maxRows: C, minRows: $ }, pe)),
      (Fe = d2));
    const Ce = (Se) => {
      se(
        Se.animationName === "mui-auto-fill-cancel"
          ? re.current
          : { value: "x" }
      );
    };
    y.useEffect(() => {
      te && te.setAdornedStart(!!j);
    }, [te, j]);
    const xe = k({}, o, {
        color: le.color || "primary",
        disabled: le.disabled,
        endAdornment: v,
        error: le.error,
        focused: le.focused,
        formControl: te,
        fullWidth: g,
        hiddenLabel: le.hiddenLabel,
        multiline: O,
        size: le.size,
        startAdornment: j,
        type: V,
      }),
      Ee = y2(xe),
      he = L.root || u.Root || vu,
      mt = R.root || c.root || {},
      Je = L.input || u.Input || yu;
    return (
      (pe = k({}, pe, (r = R.input) != null ? r : c.input)),
      S.jsxs(y.Fragment, {
        children: [
          !x && x2,
          S.jsxs(
            he,
            k(
              {},
              mt,
              !Ho(he) && { ownerState: k({}, xe, mt.ownerState) },
              { ref: n, onClick: Be },
              J,
              {
                className: G(
                  Ee.root,
                  mt.className,
                  l,
                  P && "MuiInputBase-readOnly"
                ),
                children: [
                  j,
                  S.jsx(cp.Provider, {
                    value: null,
                    children: S.jsx(
                      Je,
                      k(
                        {
                          ownerState: xe,
                          "aria-invalid": le.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: f,
                          disabled: le.disabled,
                          id: _,
                          onAnimationStart: Ce,
                          name: E,
                          placeholder: F,
                          readOnly: P,
                          required: le.required,
                          rows: A,
                          value: Z,
                          onKeyDown: N,
                          onKeyUp: D,
                          type: V,
                        },
                        pe,
                        !Ho(Je) && {
                          as: Fe,
                          ownerState: k({}, xe, pe.ownerState),
                        },
                        {
                          ref: ke,
                          className: G(
                            Ee.input,
                            pe.className,
                            P && "MuiInputBase-readOnly"
                          ),
                          onBlur: _e,
                          onChange: Pe,
                          onFocus: be,
                        }
                      )
                    ),
                  }),
                  v,
                  I ? I(k({}, le, { startAdornment: j })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  xu = b2;
function S2(e) {
  return ge("MuiInput", e);
}
const C2 = k({}, Ko, fe("MuiInput", ["root", "underline", "input"])),
  yi = C2;
function w2(e) {
  return ge("MuiOutlinedInput", e);
}
const k2 = k(
    {},
    Ko,
    fe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  or = k2;
function _2(e) {
  return ge("MuiFilledInput", e);
}
const E2 = k({}, Ko, fe("MuiFilledInput", ["root", "underline", "input"])),
  Tr = E2,
  P2 = Dn(S.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  $2 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  R2 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  T2 = y.forwardRef(function (t, n) {
    const r = oi(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: f,
        onEntering: d,
        onExit: x,
        onExited: v,
        onExiting: g,
        style: _,
        timeout: p = o,
        TransitionComponent: h = sp,
      } = t,
      m = q(t, $2),
      C = y.useRef(null),
      $ = nt(C, ni(a), n),
      O = (F) => (P) => {
        if (F) {
          const I = C.current;
          P === void 0 ? F(I) : F(I, P);
        }
      },
      E = O(d),
      b = O((F, P) => {
        up(F);
        const I = Vo({ style: _, timeout: p, easing: l }, { mode: "enter" });
        (F.style.webkitTransition = r.transitions.create("opacity", I)),
          (F.style.transition = r.transitions.create("opacity", I)),
          c && c(F, P);
      }),
      w = O(f),
      T = O(g),
      M = O((F) => {
        const P = Vo({ style: _, timeout: p, easing: l }, { mode: "exit" });
        (F.style.webkitTransition = r.transitions.create("opacity", P)),
          (F.style.transition = r.transitions.create("opacity", P)),
          x && x(F);
      }),
      N = O(v),
      D = (F) => {
        i && i(C.current, F);
      };
    return S.jsx(
      h,
      k(
        {
          appear: s,
          in: u,
          nodeRef: C,
          onEnter: b,
          onEntered: w,
          onEntering: E,
          onExit: M,
          onExited: N,
          onExiting: T,
          addEndListener: D,
          timeout: p,
        },
        m,
        {
          children: (F, P) =>
            y.cloneElement(
              a,
              k(
                {
                  style: k(
                    {
                      opacity: 0,
                      visibility: F === "exited" && !u ? "hidden" : void 0,
                    },
                    R2[F],
                    _,
                    a.props.style
                  ),
                  ref: $,
                },
                P
              )
            ),
        }
      )
    );
  }),
  n1 = T2;
function O2(e) {
  return ge("MuiBackdrop", e);
}
fe("MuiBackdrop", ["root", "invisible"]);
const I2 = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  L2 = (e) => {
    const { classes: t, invisible: n } = e;
    return ve({ root: ["root", n && "invisible"] }, O2, t);
  },
  M2 = W("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    k(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  N2 = y.forwardRef(function (t, n) {
    var r, o, i;
    const s = ye({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: f = {},
        invisible: d = !1,
        open: x,
        slotProps: v = {},
        slots: g = {},
        TransitionComponent: _ = n1,
        transitionDuration: p,
      } = s,
      h = q(s, I2),
      m = k({}, s, { component: u, invisible: d }),
      C = L2(m),
      $ = (r = v.root) != null ? r : f.root;
    return S.jsx(
      _,
      k({ in: x, timeout: p }, h, {
        children: S.jsx(
          M2,
          k({ "aria-hidden": !0 }, $, {
            as: (o = (i = g.root) != null ? i : c.Root) != null ? o : u,
            className: G(C.root, l, $ == null ? void 0 : $.className),
            ownerState: k({}, m, $ == null ? void 0 : $.ownerState),
            classes: C,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  r1 = N2,
  A2 = fe("MuiBox", ["root"]),
  F2 = A2,
  D2 = op(),
  j2 = C_({
    themeId: zo,
    defaultTheme: D2,
    defaultClassName: F2.root,
    generateClassName: Xf.generate,
  }),
  an = j2;
function B2(e) {
  return ge("MuiButton", e);
}
const z2 = fe("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  oa = z2,
  U2 = y.createContext({}),
  W2 = U2,
  H2 = y.createContext(void 0),
  V2 = H2,
  K2 = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  G2 = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${U(t)}`,
          `size${U(o)}`,
          `${i}Size${U(o)}`,
          `color${U(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${U(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${U(o)}`],
      },
      l = ve(a, B2, s);
    return k({}, s, l);
  },
  o1 = (e) =>
    k(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  q2 = W(Qn, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${U(n.color)}`],
        t[`size${U(n.size)}`],
        t[`${n.variant}Size${U(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return k(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": k(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Oe(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Oe(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Oe(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": k(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${oa.focusVisible}`]: k(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${oa.disabled}`]: k(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Oe(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${oa.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${oa.disabled}`]: { boxShadow: "none" },
      }
  ),
  Y2 = W("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${U(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    k(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      o1(e)
    )
  ),
  X2 = W("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${U(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    k(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      o1(e)
    )
  ),
  Q2 = y.forwardRef(function (t, n) {
    const r = y.useContext(W2),
      o = y.useContext(V2),
      i = ps(r, t),
      s = ye({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: f = !1,
        disableElevation: d = !1,
        disableFocusRipple: x = !1,
        endIcon: v,
        focusVisibleClassName: g,
        fullWidth: _ = !1,
        size: p = "medium",
        startIcon: h,
        type: m,
        variant: C = "text",
      } = s,
      $ = q(s, K2),
      O = k({}, s, {
        color: l,
        component: u,
        disabled: f,
        disableElevation: d,
        disableFocusRipple: x,
        fullWidth: _,
        size: p,
        type: m,
        variant: C,
      }),
      E = G2(O),
      b =
        h && S.jsx(Y2, { className: E.startIcon, ownerState: O, children: h }),
      w = v && S.jsx(X2, { className: E.endIcon, ownerState: O, children: v }),
      T = o || "";
    return S.jsxs(
      q2,
      k(
        {
          ownerState: O,
          className: G(r.className, E.root, c, T),
          component: u,
          disabled: f,
          focusRipple: !x,
          focusVisibleClassName: G(E.focusVisible, g),
          ref: n,
          type: m,
        },
        $,
        { classes: E, children: [b, a, w] }
      )
    );
  }),
  i1 = Q2;
function J2(e) {
  const t = It(e);
  return t.body === e
    ? dn(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function zi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Rg(e) {
  return parseInt(dn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Z2(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Tg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !Z2(s);
    a && l && zi(s, o);
  });
}
function tc(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function eR(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (J2(r)) {
      const s = D0(It(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Rg(r) + s}px`);
      const a = It(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Rg(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = It(r).body;
    else {
      const s = r.parentElement,
        a = dn(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function tR(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class nR {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && zi(t.modalRef, !1);
    const o = tR(n);
    Tg(n, t.mount, t.modalRef, o, !0);
    const i = tc(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = tc(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = eR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = tc(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && zi(t.modalRef, n),
        Tg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && zi(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const rR = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function oR(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function iR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function sR(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    iR(e)
  );
}
function aR(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(rR)).forEach((r, o) => {
      const i = oR(r);
      i === -1 ||
        !sR(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function lR() {
  return !0;
}
function uR(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = aR,
      isEnabled: s = lR,
      open: a,
    } = e,
    l = y.useRef(!1),
    u = y.useRef(null),
    c = y.useRef(null),
    f = y.useRef(null),
    d = y.useRef(null),
    x = y.useRef(!1),
    v = y.useRef(null),
    g = nt(ni(t), v),
    _ = y.useRef(null);
  y.useEffect(() => {
    !a || !v.current || (x.current = !n);
  }, [n, a]),
    y.useEffect(() => {
      if (!a || !v.current) return;
      const m = It(v.current);
      return (
        v.current.contains(m.activeElement) ||
          (v.current.hasAttribute("tabIndex") ||
            v.current.setAttribute("tabIndex", "-1"),
          x.current && v.current.focus()),
        () => {
          o ||
            (f.current &&
              f.current.focus &&
              ((l.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [a]),
    y.useEffect(() => {
      if (!a || !v.current) return;
      const m = It(v.current),
        C = (E) => {
          (_.current = E),
            !(r || !s() || E.key !== "Tab") &&
              m.activeElement === v.current &&
              E.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        $ = () => {
          const E = v.current;
          if (E === null) return;
          if (!m.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            E.contains(m.activeElement) ||
            (r &&
              m.activeElement !== u.current &&
              m.activeElement !== c.current)
          )
            return;
          if (m.activeElement !== d.current) d.current = null;
          else if (d.current !== null) return;
          if (!x.current) return;
          let b = [];
          if (
            ((m.activeElement === u.current || m.activeElement === c.current) &&
              (b = i(v.current)),
            b.length > 0)
          ) {
            var w, T;
            const M = !!(
                (w = _.current) != null &&
                w.shiftKey &&
                ((T = _.current) == null ? void 0 : T.key) === "Tab"
              ),
              N = b[0],
              D = b[b.length - 1];
            typeof N != "string" &&
              typeof D != "string" &&
              (M ? D.focus() : N.focus());
          } else E.focus();
        };
      m.addEventListener("focusin", $), m.addEventListener("keydown", C, !0);
      const O = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && $();
      }, 50);
      return () => {
        clearInterval(O),
          m.removeEventListener("focusin", $),
          m.removeEventListener("keydown", C, !0);
      };
    }, [n, r, o, s, a, i]);
  const p = (m) => {
      f.current === null && (f.current = m.relatedTarget),
        (x.current = !0),
        (d.current = m.target);
      const C = t.props.onFocus;
      C && C(m);
    },
    h = (m) => {
      f.current === null && (f.current = m.relatedTarget), (x.current = !0);
    };
  return S.jsxs(y.Fragment, {
    children: [
      S.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      y.cloneElement(t, { ref: g, onFocus: p }),
      S.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function cR(e) {
  return typeof e == "function" ? e() : e;
}
function dR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const fR = new nR();
function pR(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = fR,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: c,
      rootRef: f,
    } = e,
    d = y.useRef({}),
    x = y.useRef(null),
    v = y.useRef(null),
    g = nt(v, f),
    [_, p] = y.useState(!c),
    h = dR(l);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const C = () => It(x.current),
    $ = () => (
      (d.current.modalRef = v.current), (d.current.mount = x.current), d.current
    ),
    O = () => {
      o.mount($(), { disableScrollLock: r }),
        v.current && (v.current.scrollTop = 0);
    },
    E = Rn(() => {
      const I = cR(t) || C().body;
      o.add($(), I), v.current && O();
    }),
    b = y.useCallback(() => o.isTopModal($()), [o]),
    w = Rn((I) => {
      (x.current = I), I && (c && b() ? O() : v.current && zi(v.current, m));
    }),
    T = y.useCallback(() => {
      o.remove($(), m);
    }, [m, o]);
  y.useEffect(
    () => () => {
      T();
    },
    [T]
  ),
    y.useEffect(() => {
      c ? E() : (!h || !i) && T();
    }, [c, T, h, i, E]);
  const M = (I) => (A) => {
      var R;
      (R = I.onKeyDown) == null || R.call(I, A),
        !(A.key !== "Escape" || A.which === 229 || !b()) &&
          (n || (A.stopPropagation(), u && u(A, "escapeKeyDown")));
    },
    N = (I) => (A) => {
      var R;
      (R = I.onClick) == null || R.call(I, A),
        A.target === A.currentTarget && u && u(A, "backdropClick");
    };
  return {
    getRootProps: (I = {}) => {
      const A = B0(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const R = k({}, A, I);
      return k({ role: "presentation" }, R, { onKeyDown: M(R), ref: g });
    },
    getBackdropProps: (I = {}) => {
      const A = I;
      return k({ "aria-hidden": !0 }, A, { onClick: N(A), open: c });
    },
    getTransitionProps: () => {
      const I = () => {
          p(!1), s && s();
        },
        A = () => {
          p(!0), a && a(), i && T();
        };
      return {
        onEnter: md(I, l == null ? void 0 : l.props.onEnter),
        onExited: md(A, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: g,
    portalRef: w,
    isTopModal: b,
    exited: _,
    hasTransition: h,
  };
}
function hR(e) {
  return ge("MuiModal", e);
}
fe("MuiModal", ["root", "hidden", "backdrop"]);
const gR = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  mR = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return ve(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      hR,
      r
    );
  },
  vR = W("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  yR = W(r1, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  xR = y.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = ye({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = yR,
        BackdropProps: f,
        className: d,
        closeAfterTransition: x = !1,
        children: v,
        container: g,
        component: _,
        components: p = {},
        componentsProps: h = {},
        disableAutoFocus: m = !1,
        disableEnforceFocus: C = !1,
        disableEscapeKeyDown: $ = !1,
        disablePortal: O = !1,
        disableRestoreFocus: E = !1,
        disableScrollLock: b = !1,
        hideBackdrop: w = !1,
        keepMounted: T = !1,
        onBackdropClick: M,
        open: N,
        slotProps: D,
        slots: F,
      } = u,
      P = q(u, gR),
      I = k({}, u, {
        closeAfterTransition: x,
        disableAutoFocus: m,
        disableEnforceFocus: C,
        disableEscapeKeyDown: $,
        disablePortal: O,
        disableRestoreFocus: E,
        disableScrollLock: b,
        hideBackdrop: w,
        keepMounted: T,
      }),
      {
        getRootProps: A,
        getBackdropProps: R,
        getTransitionProps: L,
        portalRef: j,
        isTopModal: V,
        exited: B,
        hasTransition: J,
      } = pR(k({}, I, { rootRef: n })),
      Z = k({}, I, { exited: B }),
      oe = mR(Z),
      re = {};
    if ((v.props.tabIndex === void 0 && (re.tabIndex = "-1"), J)) {
      const { onEnter: X, onExited: ie } = L();
      (re.onEnter = X), (re.onExited = ie);
    }
    const me =
        (r = (o = F == null ? void 0 : F.root) != null ? o : p.Root) != null
          ? r
          : vR,
      ke =
        (i = (s = F == null ? void 0 : F.backdrop) != null ? s : p.Backdrop) !=
        null
          ? i
          : c,
      K = (a = D == null ? void 0 : D.root) != null ? a : h.root,
      ae = (l = D == null ? void 0 : D.backdrop) != null ? l : h.backdrop,
      te = Nn({
        elementType: me,
        externalSlotProps: K,
        externalForwardedProps: P,
        getSlotProps: A,
        additionalProps: { ref: n, as: _ },
        ownerState: Z,
        className: G(
          d,
          K == null ? void 0 : K.className,
          oe == null ? void 0 : oe.root,
          !Z.open && Z.exited && (oe == null ? void 0 : oe.hidden)
        ),
      }),
      le = Nn({
        elementType: ke,
        externalSlotProps: ae,
        additionalProps: f,
        getSlotProps: (X) =>
          R(
            k({}, X, {
              onClick: (ie) => {
                M && M(ie), X != null && X.onClick && X.onClick(ie);
              },
            })
          ),
        className: G(
          ae == null ? void 0 : ae.className,
          f == null ? void 0 : f.className,
          oe == null ? void 0 : oe.backdrop
        ),
        ownerState: Z,
      });
    return !T && !N && (!J || B)
      ? null
      : S.jsx(J$, {
          ref: j,
          container: g,
          disablePortal: O,
          children: S.jsxs(
            me,
            k({}, te, {
              children: [
                !w && c ? S.jsx(ke, k({}, le)) : null,
                S.jsx(uR, {
                  disableEnforceFocus: C,
                  disableAutoFocus: m,
                  disableRestoreFocus: E,
                  isEnabled: V,
                  open: N,
                  children: y.cloneElement(v, re),
                }),
              ],
            })
          ),
        });
  }),
  dp = xR;
function bR(e) {
  return ge("MuiDialog", e);
}
const SR = fe("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  nc = SR,
  CR = y.createContext({}),
  s1 = CR,
  wR = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  kR = W(r1, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  _R = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      s = {
        root: ["root"],
        container: ["container", `scroll${U(n)}`],
        paper: [
          "paper",
          `paperScroll${U(n)}`,
          `paperWidth${U(String(r))}`,
          o && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return ve(s, bR, t);
  },
  ER = W(dp, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  PR = W("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${U(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    k(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  $R = W(Is, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${U(n.scroll)}`],
        t[`paperWidth${U(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${nc.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${nc.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${nc.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  RR = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDialog" }),
      o = oi(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": s,
        "aria-labelledby": a,
        BackdropComponent: l,
        BackdropProps: u,
        children: c,
        className: f,
        disableEscapeKeyDown: d = !1,
        fullScreen: x = !1,
        fullWidth: v = !1,
        maxWidth: g = "sm",
        onBackdropClick: _,
        onClick: p,
        onClose: h,
        open: m,
        PaperComponent: C = Is,
        PaperProps: $ = {},
        scroll: O = "paper",
        TransitionComponent: E = n1,
        transitionDuration: b = i,
        TransitionProps: w,
      } = r,
      T = q(r, wR),
      M = k({}, r, {
        disableEscapeKeyDown: d,
        fullScreen: x,
        fullWidth: v,
        maxWidth: g,
        scroll: O,
      }),
      N = _R(M),
      D = y.useRef(),
      F = (R) => {
        D.current = R.target === R.currentTarget;
      },
      P = (R) => {
        p && p(R),
          D.current &&
            ((D.current = null), _ && _(R), h && h(R, "backdropClick"));
      },
      I = Zf(a),
      A = y.useMemo(() => ({ titleId: I }), [I]);
    return S.jsx(
      ER,
      k(
        {
          className: G(N.root, f),
          closeAfterTransition: !0,
          components: { Backdrop: kR },
          componentsProps: { backdrop: k({ transitionDuration: b, as: l }, u) },
          disableEscapeKeyDown: d,
          onClose: h,
          open: m,
          ref: n,
          onClick: P,
          ownerState: M,
        },
        T,
        {
          children: S.jsx(
            E,
            k({ appear: !0, in: m, timeout: b, role: "presentation" }, w, {
              children: S.jsx(PR, {
                className: G(N.container),
                onMouseDown: F,
                ownerState: M,
                children: S.jsx(
                  $R,
                  k(
                    {
                      as: C,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": s,
                      "aria-labelledby": I,
                    },
                    $,
                    {
                      className: G(N.paper, $.className),
                      ownerState: M,
                      children: S.jsx(s1.Provider, { value: A, children: c }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  a1 = RR;
function TR(e) {
  return ge("MuiDialogActions", e);
}
fe("MuiDialogActions", ["root", "spacing"]);
const OR = ["className", "disableSpacing"],
  IR = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return ve({ root: ["root", !n && "spacing"] }, TR, t);
  },
  LR = W("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    k(
      {
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto",
      },
      !e.disableSpacing && {
        "& > :not(style) ~ :not(style)": { marginLeft: 8 },
      }
    )
  ),
  MR = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDialogActions" }),
      { className: o, disableSpacing: i = !1 } = r,
      s = q(r, OR),
      a = k({}, r, { disableSpacing: i }),
      l = IR(a);
    return S.jsx(LR, k({ className: G(l.root, o), ownerState: a, ref: n }, s));
  }),
  NR = MR;
function AR(e) {
  return ge("MuiDialogContent", e);
}
fe("MuiDialogContent", ["root", "dividers"]);
function FR(e) {
  return ge("MuiDialogTitle", e);
}
const DR = fe("MuiDialogTitle", ["root"]),
  jR = DR,
  BR = ["className", "dividers"],
  zR = (e) => {
    const { classes: t, dividers: n } = e;
    return ve({ root: ["root", n && "dividers"] }, AR, t);
  },
  UR = W("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${jR.root} + &`]: { paddingTop: 0 } }
    )
  ),
  WR = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDialogContent" }),
      { className: o, dividers: i = !1 } = r,
      s = q(r, BR),
      a = k({}, r, { dividers: i }),
      l = zR(a);
    return S.jsx(UR, k({ className: G(l.root, o), ownerState: a, ref: n }, s));
  }),
  fp = WR;
function HR(e) {
  return ge("MuiDialogContentText", e);
}
fe("MuiDialogContentText", ["root"]);
const VR = ["children", "className"],
  KR = (e) => {
    const { classes: t } = e,
      r = ve({ root: ["root"] }, HR, t);
    return k({}, t, r);
  },
  GR = W(Ke, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  qR = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDialogContentText" }),
      { className: o } = r,
      i = q(r, VR),
      s = KR(i);
    return S.jsx(
      GR,
      k(
        {
          component: "p",
          variant: "body1",
          color: "text.secondary",
          ref: n,
          ownerState: i,
          className: G(s.root, o),
        },
        r,
        { classes: s }
      )
    );
  }),
  pp = qR,
  YR = ["className", "id"],
  XR = (e) => {
    const { classes: t } = e;
    return ve({ root: ["root"] }, FR, t);
  },
  QR = W(Ke, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  JR = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDialogTitle" }),
      { className: o, id: i } = r,
      s = q(r, YR),
      a = r,
      l = XR(a),
      { titleId: u = i } = y.useContext(s1);
    return S.jsx(
      QR,
      k(
        {
          component: "h2",
          className: G(l.root, o),
          ownerState: a,
          ref: n,
          variant: "h6",
          id: i ?? u,
        },
        s
      )
    );
  }),
  hp = JR;
function ZR(e) {
  return ge("MuiDivider", e);
}
const eT = fe("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  Og = eT,
  tT = [
    "absolute",
    "children",
    "className",
    "component",
    "flexItem",
    "light",
    "orientation",
    "role",
    "textAlign",
    "variant",
  ],
  nT = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return ve(
      {
        root: [
          "root",
          t && "absolute",
          l,
          i && "light",
          s === "vertical" && "vertical",
          o && "flexItem",
          n && "withChildren",
          n && s === "vertical" && "withChildrenVertical",
          a === "right" && s !== "vertical" && "textAlignRight",
          a === "left" && s !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
      },
      ZR,
      r
    );
  },
  rT = W("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === "vertical" && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === "vertical" && t.withChildrenVertical,
        n.textAlign === "right" &&
          n.orientation !== "vertical" &&
          t.textAlignRight,
        n.textAlign === "left" &&
          n.orientation !== "vertical" &&
          t.textAlignLeft,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      k(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: "thin",
        },
        t.absolute && {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : Oe(e.palette.divider, 0.08),
        },
        t.variant === "inset" && { marginLeft: 72 },
        t.variant === "middle" &&
          t.orientation === "horizontal" && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2),
          },
        t.variant === "middle" &&
          t.orientation === "vertical" && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
        t.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
        t.flexItem && { alignSelf: "stretch", height: "auto" }
      ),
    ({ ownerState: e }) =>
      k(
        {},
        e.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": { content: '""', alignSelf: "center" },
        }
      ),
    ({ theme: e, ownerState: t }) =>
      k(
        {},
        t.children &&
          t.orientation !== "vertical" && {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: "inherit",
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      k(
        {},
        t.children &&
          t.orientation === "vertical" && {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: "inherit",
            },
          }
      ),
    ({ ownerState: e }) =>
      k(
        {},
        e.textAlign === "right" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        e.textAlign === "left" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          }
      )
  ),
  oT = W("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === "vertical" && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      }
    )
  ),
  l1 = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDivider" }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? "div" : "hr",
        flexItem: l = !1,
        light: u = !1,
        orientation: c = "horizontal",
        role: f = a !== "hr" ? "separator" : void 0,
        textAlign: d = "center",
        variant: x = "fullWidth",
      } = r,
      v = q(r, tT),
      g = k({}, r, {
        absolute: o,
        component: a,
        flexItem: l,
        light: u,
        orientation: c,
        role: f,
        textAlign: d,
        variant: x,
      }),
      _ = nT(g);
    return S.jsx(
      rT,
      k({ as: a, className: G(_.root, s), role: f, ref: n, ownerState: g }, v, {
        children: i
          ? S.jsx(oT, { className: _.wrapper, ownerState: g, children: i })
          : null,
      })
    );
  });
l1.muiSkipListHighlight = !0;
const iT = l1,
  sT = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function aT(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = dn(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s =
      u.getPropertyValue("-webkit-transform") ||
      u.getPropertyValue("transform");
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + a - r.left}px)`
      : `translateX(${i.innerWidth + a - r.left}px)`
    : e === "right"
    ? o
      ? `translateX(-${r.right - o.left - a}px)`
      : `translateX(-${r.left + r.width - a}px)`
    : e === "up"
    ? o
      ? `translateY(${o.bottom + l - r.top}px)`
      : `translateY(${i.innerHeight + l - r.top}px)`
    : o
    ? `translateY(-${r.top - o.top + r.height - l}px)`
    : `translateY(-${r.top + r.height - l}px)`;
}
function lT(e) {
  return typeof e == "function" ? e() : e;
}
function ia(e, t, n) {
  const r = lT(n),
    o = aT(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const uT = y.forwardRef(function (t, n) {
    const r = oi(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp,
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: s,
        appear: a = !0,
        children: l,
        container: u,
        direction: c = "down",
        easing: f = o,
        in: d,
        onEnter: x,
        onEntered: v,
        onEntering: g,
        onExit: _,
        onExited: p,
        onExiting: h,
        style: m,
        timeout: C = i,
        TransitionComponent: $ = sp,
      } = t,
      O = q(t, sT),
      E = y.useRef(null),
      b = nt(ni(l), E, n),
      w = (R) => (L) => {
        R && (L === void 0 ? R(E.current) : R(E.current, L));
      },
      T = w((R, L) => {
        ia(c, R, u), up(R), x && x(R, L);
      }),
      M = w((R, L) => {
        const j = Vo({ timeout: C, style: m, easing: f }, { mode: "enter" });
        (R.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          k({}, j)
        )),
          (R.style.transition = r.transitions.create("transform", k({}, j))),
          (R.style.webkitTransform = "none"),
          (R.style.transform = "none"),
          g && g(R, L);
      }),
      N = w(v),
      D = w(h),
      F = w((R) => {
        const L = Vo({ timeout: C, style: m, easing: f }, { mode: "exit" });
        (R.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          L
        )),
          (R.style.transition = r.transitions.create("transform", L)),
          ia(c, R, u),
          _ && _(R);
      }),
      P = w((R) => {
        (R.style.webkitTransition = ""), (R.style.transition = ""), p && p(R);
      }),
      I = (R) => {
        s && s(E.current, R);
      },
      A = y.useCallback(() => {
        E.current && ia(c, E.current, u);
      }, [c, u]);
    return (
      y.useEffect(() => {
        if (d || c === "down" || c === "right") return;
        const R = ti(() => {
            E.current && ia(c, E.current, u);
          }),
          L = dn(E.current);
        return (
          L.addEventListener("resize", R),
          () => {
            R.clear(), L.removeEventListener("resize", R);
          }
        );
      }, [c, d, u]),
      y.useEffect(() => {
        d || A();
      }, [d, A]),
      S.jsx(
        $,
        k(
          {
            nodeRef: E,
            onEnter: T,
            onEntered: N,
            onEntering: M,
            onExit: F,
            onExited: P,
            onExiting: D,
            addEndListener: I,
            appear: a,
            in: d,
            timeout: C,
          },
          O,
          {
            children: (R, L) =>
              y.cloneElement(
                l,
                k(
                  {
                    ref: b,
                    style: k(
                      { visibility: R === "exited" && !d ? "hidden" : void 0 },
                      m,
                      l.props.style
                    ),
                  },
                  L
                )
              ),
          }
        )
      )
    );
  }),
  u1 = uT;
function cT(e) {
  return ge("MuiDrawer", e);
}
fe("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const dT = ["BackdropProps"],
  fT = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  c1 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  pT = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${U(n)}`,
          r !== "temporary" && `paperAnchorDocked${U(n)}`,
        ],
      };
    return ve(o, cT, t);
  },
  hT = W(dp, { name: "MuiDrawer", slot: "Root", overridesResolver: c1 })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  Ig = W("div", {
    shouldForwardProp: Nt,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: c1,
  })({ flex: "0 0 auto" }),
  gT = W(Is, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${U(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${U(n.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      t.anchor === "left" && { left: 0 },
      t.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "right" && { right: 0 },
      t.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "left" &&
        t.variant !== "temporary" && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "top" &&
        t.variant !== "temporary" && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "right" &&
        t.variant !== "temporary" && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "bottom" &&
        t.variant !== "temporary" && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
        }
    )
  ),
  d1 = { left: "right", right: "left", top: "down", bottom: "up" };
function mT(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function vT({ direction: e }, t) {
  return e === "rtl" && mT(t) ? d1[t] : t;
}
const yT = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiDrawer" }),
      o = oi(),
      i = pu(),
      s = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        anchor: a = "left",
        BackdropProps: l,
        children: u,
        className: c,
        elevation: f = 16,
        hideBackdrop: d = !1,
        ModalProps: { BackdropProps: x } = {},
        onClose: v,
        open: g = !1,
        PaperProps: _ = {},
        SlideProps: p,
        TransitionComponent: h = u1,
        transitionDuration: m = s,
        variant: C = "temporary",
      } = r,
      $ = q(r.ModalProps, dT),
      O = q(r, fT),
      E = y.useRef(!1);
    y.useEffect(() => {
      E.current = !0;
    }, []);
    const b = vT({ direction: i ? "rtl" : "ltr" }, a),
      T = k({}, r, { anchor: a, elevation: f, open: g, variant: C }, O),
      M = pT(T),
      N = S.jsx(
        gT,
        k({ elevation: C === "temporary" ? f : 0, square: !0 }, _, {
          className: G(M.paper, _.className),
          ownerState: T,
          children: u,
        })
      );
    if (C === "permanent")
      return S.jsx(
        Ig,
        k({ className: G(M.root, M.docked, c), ownerState: T, ref: n }, O, {
          children: N,
        })
      );
    const D = S.jsx(
      h,
      k({ in: g, direction: d1[b], timeout: m, appear: E.current }, p, {
        children: N,
      })
    );
    return C === "persistent"
      ? S.jsx(
          Ig,
          k({ className: G(M.root, M.docked, c), ownerState: T, ref: n }, O, {
            children: D,
          })
        )
      : S.jsx(
          hT,
          k(
            {
              BackdropProps: k({}, l, x, { transitionDuration: m }),
              className: G(M.root, M.modal, c),
              open: g,
              ownerState: T,
              onClose: v,
              hideBackdrop: d,
              ref: n,
            },
            O,
            $,
            { children: D }
          )
        );
  }),
  xT = yT,
  bT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  ST = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ve({ root: ["root", !n && "underline"], input: ["input"] }, _2, t);
    return k({}, t, o);
  },
  CT = W(vu, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...gu(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return k(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${Tr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${Tr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${Tr.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${Tr.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${Tr.disabled}, .${Tr.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${Tr.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        k(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  wT = W(yu, { name: "MuiFilledInput", slot: "Input", overridesResolver: mu })(
    ({ theme: e, ownerState: t }) =>
      k(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  f1 = y.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = ye({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: f = "input",
        multiline: d = !1,
        slotProps: x,
        slots: v = {},
        type: g = "text",
      } = a,
      _ = q(a, bT),
      p = k({}, a, { fullWidth: c, inputComponent: f, multiline: d, type: g }),
      h = ST(a),
      m = { root: { ownerState: p }, input: { ownerState: p } },
      C = x ?? u ? Ot(m, x ?? u) : m,
      $ = (r = (o = v.root) != null ? o : l.Root) != null ? r : CT,
      O = (i = (s = v.input) != null ? s : l.Input) != null ? i : wT;
    return S.jsx(
      xu,
      k(
        {
          slots: { root: $, input: O },
          componentsProps: C,
          fullWidth: c,
          inputComponent: f,
          multiline: d,
          ref: n,
          type: g,
        },
        _,
        { classes: h }
      )
    );
  });
f1.muiName = "Input";
const kT = f1;
function _T(e) {
  return ge("MuiFormControl", e);
}
fe("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const ET = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  PT = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${U(n)}`, r && "fullWidth"] };
    return ve(o, _T, t);
  },
  $T = W("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      k({}, t.root, t[`margin${U(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    k(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  RT = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: f = !1,
        hiddenLabel: d = !1,
        margin: x = "none",
        required: v = !1,
        size: g = "medium",
        variant: _ = "outlined",
      } = r,
      p = q(r, ET),
      h = k({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: f,
        hiddenLabel: d,
        margin: x,
        required: v,
        size: g,
        variant: _,
      }),
      m = PT(h),
      [C, $] = y.useState(() => {
        let D = !1;
        return (
          o &&
            y.Children.forEach(o, (F) => {
              if (!Bi(F, ["Input", "Select"])) return;
              const P = Bi(F, ["Select"]) ? F.props.input : F;
              P && h2(P.props) && (D = !0);
            }),
          D
        );
      }),
      [O, E] = y.useState(() => {
        let D = !1;
        return (
          o &&
            y.Children.forEach(o, (F) => {
              Bi(F, ["Input", "Select"]) &&
                (ll(F.props, !0) || ll(F.props.inputProps, !0)) &&
                (D = !0);
            }),
          D
        );
      }),
      [b, w] = y.useState(!1);
    l && b && w(!1);
    const T = c !== void 0 && !l ? c : b;
    let M;
    const N = y.useMemo(
      () => ({
        adornedStart: C,
        setAdornedStart: $,
        color: s,
        disabled: l,
        error: u,
        filled: O,
        focused: T,
        fullWidth: f,
        hiddenLabel: d,
        size: g,
        onBlur: () => {
          w(!1);
        },
        onEmpty: () => {
          E(!1);
        },
        onFilled: () => {
          E(!0);
        },
        onFocus: () => {
          w(!0);
        },
        registerEffect: M,
        required: v,
        variant: _,
      }),
      [C, s, l, u, O, T, f, d, M, v, g, _]
    );
    return S.jsx(cp.Provider, {
      value: N,
      children: S.jsx(
        $T,
        k({ as: a, ownerState: h, className: G(m.root, i), ref: n }, p, {
          children: o,
        })
      ),
    });
  }),
  p1 = RT,
  TT = IE({
    createStyledComponent: W("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => ye({ props: e, name: "MuiStack" }),
  }),
  Rt = TT;
function OT(e) {
  return ge("MuiFormLabel", e);
}
const IT = fe("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Ui = IT,
  LT = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  MT = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${U(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return ve(l, OT, t);
  },
  NT = W("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      k(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    k({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${Ui.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Ui.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Ui.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  AT = W("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ui.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  FT = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      a = q(r, LT),
      l = Ms(),
      u = Ls({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = k({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      f = MT(c);
    return S.jsxs(
      NT,
      k({ as: s, ownerState: c, className: G(f.root, i), ref: n }, a, {
        children: [
          o,
          u.required &&
            S.jsxs(AT, {
              ownerState: c,
              "aria-hidden": !0,
              className: f.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  DT = FT,
  jT = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function kd(e) {
  return `scale(${e}, ${e ** 2})`;
}
const BT = {
    entering: { opacity: 1, transform: kd(1) },
    entered: { opacity: 1, transform: "none" },
  },
  rc =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  h1 = y.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: f,
        onExited: d,
        onExiting: x,
        style: v,
        timeout: g = "auto",
        TransitionComponent: _ = sp,
      } = t,
      p = q(t, jT),
      h = F0(),
      m = y.useRef(),
      C = oi(),
      $ = y.useRef(null),
      O = nt($, ni(i), n),
      E = (P) => (I) => {
        if (P) {
          const A = $.current;
          I === void 0 ? P(A) : P(A, I);
        }
      },
      b = E(c),
      w = E((P, I) => {
        up(P);
        const {
          duration: A,
          delay: R,
          easing: L,
        } = Vo({ style: v, timeout: g, easing: s }, { mode: "enter" });
        let j;
        g === "auto"
          ? ((j = C.transitions.getAutoHeightDuration(P.clientHeight)),
            (m.current = j))
          : (j = A),
          (P.style.transition = [
            C.transitions.create("opacity", { duration: j, delay: R }),
            C.transitions.create("transform", {
              duration: rc ? j : j * 0.666,
              delay: R,
              easing: L,
            }),
          ].join(",")),
          l && l(P, I);
      }),
      T = E(u),
      M = E(x),
      N = E((P) => {
        const {
          duration: I,
          delay: A,
          easing: R,
        } = Vo({ style: v, timeout: g, easing: s }, { mode: "exit" });
        let L;
        g === "auto"
          ? ((L = C.transitions.getAutoHeightDuration(P.clientHeight)),
            (m.current = L))
          : (L = I),
          (P.style.transition = [
            C.transitions.create("opacity", { duration: L, delay: A }),
            C.transitions.create("transform", {
              duration: rc ? L : L * 0.666,
              delay: rc ? A : A || L * 0.333,
              easing: R,
            }),
          ].join(",")),
          (P.style.opacity = 0),
          (P.style.transform = kd(0.75)),
          f && f(P);
      }),
      D = E(d),
      F = (P) => {
        g === "auto" && h.start(m.current || 0, P), r && r($.current, P);
      };
    return S.jsx(
      _,
      k(
        {
          appear: o,
          in: a,
          nodeRef: $,
          onEnter: w,
          onEntered: T,
          onEntering: b,
          onExit: N,
          onExited: D,
          onExiting: M,
          addEndListener: F,
          timeout: g === "auto" ? null : g,
        },
        p,
        {
          children: (P, I) =>
            y.cloneElement(
              i,
              k(
                {
                  style: k(
                    {
                      opacity: 0,
                      transform: kd(0.75),
                      visibility: P === "exited" && !a ? "hidden" : void 0,
                    },
                    BT[P],
                    v,
                    i.props.style
                  ),
                  ref: O,
                },
                I
              )
            ),
        }
      )
    );
  });
h1.muiSupportAuto = !0;
const zT = h1,
  UT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  WT = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ve({ root: ["root", !n && "underline"], input: ["input"] }, S2, t);
    return k({}, t, o);
  },
  HT = W(vu, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...gu(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      k(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${yi.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${yi.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${yi.disabled}, .${yi.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${yi.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  VT = W(yu, { name: "MuiInput", slot: "Input", overridesResolver: mu })({}),
  g1 = y.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = ye({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: f = !1,
        inputComponent: d = "input",
        multiline: x = !1,
        slotProps: v,
        slots: g = {},
        type: _ = "text",
      } = a,
      p = q(a, UT),
      h = WT(a),
      C = { root: { ownerState: { disableUnderline: l } } },
      $ = v ?? c ? Ot(v ?? c, C) : C,
      O = (r = (o = g.root) != null ? o : u.Root) != null ? r : HT,
      E = (i = (s = g.input) != null ? s : u.Input) != null ? i : VT;
    return S.jsx(
      xu,
      k(
        {
          slots: { root: O, input: E },
          slotProps: $,
          fullWidth: f,
          inputComponent: d,
          multiline: x,
          ref: n,
          type: _,
        },
        p,
        { classes: h }
      )
    );
  });
g1.muiName = "Input";
const KT = g1;
function GT(e) {
  return ge("MuiInputLabel", e);
}
fe("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const qT = ["disableAnimation", "margin", "shrink", "variant", "className"],
  YT = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${U(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = ve(l, GT, t);
    return k({}, t, u);
  },
  XT = W(DT, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ui.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        k(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            k(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        k(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  QT = y.forwardRef(function (t, n) {
    const r = ye({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      a = q(r, qT),
      l = Ms();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = Ls({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required", "focused"],
      }),
      f = k({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      d = YT(f);
    return S.jsx(
      XT,
      k(
        { "data-shrink": u, ownerState: f, ref: n, className: G(d.root, s) },
        a,
        { classes: d }
      )
    );
  }),
  m1 = QT;
function JT(e) {
  return ge("MuiLink", e);
}
const ZT = fe("MuiLink", [
    "root",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "button",
    "focusVisible",
  ]),
  eO = ZT,
  v1 = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  tO = (e) => v1[e] || e,
  nO = ({ theme: e, ownerState: t }) => {
    const n = tO(t.color),
      r = Wo(e, `palette.${n}`, !1) || t.color,
      o = Wo(e, `palette.${n}Channel`);
    return "vars" in e && o ? `rgba(${o} / 0.4)` : Oe(r, 0.4);
  },
  rO = nO,
  oO = [
    "className",
    "color",
    "component",
    "onBlur",
    "onFocus",
    "TypographyClasses",
    "underline",
    "variant",
    "sx",
  ],
  iO = (e) => {
    const { classes: t, component: n, focusVisible: r, underline: o } = e,
      i = {
        root: [
          "root",
          `underline${U(o)}`,
          n === "button" && "button",
          r && "focusVisible",
        ],
      };
    return ve(i, JT, t);
  },
  sO = W(Ke, {
    name: "MuiLink",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`underline${U(n.underline)}`],
        n.component === "button" && t.button,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {},
      t.underline === "none" && { textDecoration: "none" },
      t.underline === "hover" && {
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      },
      t.underline === "always" &&
        k(
          { textDecoration: "underline" },
          t.color !== "inherit" && {
            textDecorationColor: rO({ theme: e, ownerState: t }),
          },
          { "&:hover": { textDecorationColor: "inherit" } }
        ),
      t.component === "button" && {
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        "&::-moz-focus-inner": { borderStyle: "none" },
        [`&.${eO.focusVisible}`]: { outline: "auto" },
      }
    )
  ),
  aO = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiLink" }),
      {
        className: o,
        color: i = "primary",
        component: s = "a",
        onBlur: a,
        onFocus: l,
        TypographyClasses: u,
        underline: c = "always",
        variant: f = "inherit",
        sx: d,
      } = r,
      x = q(r, oO),
      { isFocusVisibleRef: v, onBlur: g, onFocus: _, ref: p } = ep(),
      [h, m] = y.useState(!1),
      C = nt(n, p),
      $ = (w) => {
        g(w), v.current === !1 && m(!1), a && a(w);
      },
      O = (w) => {
        _(w), v.current === !0 && m(!0), l && l(w);
      },
      E = k({}, r, {
        color: i,
        component: s,
        focusVisible: h,
        underline: c,
        variant: f,
      }),
      b = iO(E);
    return S.jsx(
      sO,
      k(
        {
          color: i,
          className: G(b.root, o),
          classes: u,
          component: s,
          onBlur: $,
          onFocus: O,
          ref: C,
          ownerState: E,
          variant: f,
          sx: [
            ...(Object.keys(v1).includes(i) ? [] : [{ color: i }]),
            ...(Array.isArray(d) ? d : [d]),
          ],
        },
        x
      )
    );
  }),
  Br = aO,
  lO = y.createContext({}),
  Vn = lO;
function uO(e) {
  return ge("MuiList", e);
}
fe("MuiList", ["root", "padding", "dense", "subheader"]);
const cO = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  dO = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return ve(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      uO,
      t
    );
  },
  fO = W("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    k(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  pO = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = q(r, cO),
      f = y.useMemo(() => ({ dense: a }), [a]),
      d = k({}, r, { component: s, dense: a, disablePadding: l }),
      x = dO(d);
    return S.jsx(Vn.Provider, {
      value: f,
      children: S.jsxs(
        fO,
        k({ as: s, className: G(x.root, i), ref: n, ownerState: d }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  hO = pO;
function gO(e) {
  return ge("MuiListItem", e);
}
const mO = fe("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  co = mO;
function vO(e) {
  return ge("MuiListItemButton", e);
}
const yO = fe("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  fo = yO,
  xO = [
    "alignItems",
    "autoFocus",
    "component",
    "children",
    "dense",
    "disableGutters",
    "divider",
    "focusVisibleClassName",
    "selected",
    "className",
  ],
  bO = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  SO = (e) => {
    const {
        alignItems: t,
        classes: n,
        dense: r,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a,
      } = e,
      u = ve(
        {
          root: [
            "root",
            r && "dense",
            !i && "gutters",
            s && "divider",
            o && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            a && "selected",
          ],
        },
        vO,
        n
      );
    return k({}, n, u);
  },
  CO = W(Qn, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: bO,
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shortest,
        }),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${fo.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${fo.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Oe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${fo.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Oe(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${fo.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${fo.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      t.alignItems === "flex-start" && { alignItems: "flex-start" },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  wO = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        component: s = "div",
        children: a,
        dense: l = !1,
        disableGutters: u = !1,
        divider: c = !1,
        focusVisibleClassName: f,
        selected: d = !1,
        className: x,
      } = r,
      v = q(r, xO),
      g = y.useContext(Vn),
      _ = y.useMemo(
        () => ({ dense: l || g.dense || !1, alignItems: o, disableGutters: u }),
        [o, g.dense, l, u]
      ),
      p = y.useRef(null);
    cn(() => {
      i && p.current && p.current.focus();
    }, [i]);
    const h = k({}, r, {
        alignItems: o,
        dense: _.dense,
        disableGutters: u,
        divider: c,
        selected: d,
      }),
      m = SO(h),
      C = nt(p, n);
    return S.jsx(Vn.Provider, {
      value: _,
      children: S.jsx(
        CO,
        k(
          {
            ref: C,
            href: v.href || v.to,
            component: (v.href || v.to) && s === "div" ? "button" : s,
            focusVisibleClassName: G(m.focusVisible, f),
            ownerState: h,
            className: G(m.root, x),
          },
          v,
          { classes: m, children: a }
        )
      ),
    });
  }),
  oc = wO;
function kO(e) {
  return ge("MuiListItemSecondaryAction", e);
}
fe("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const _O = ["className"],
  EO = (e) => {
    const { disableGutters: t, classes: n } = e;
    return ve({ root: ["root", t && "disableGutters"] }, kO, n);
  },
  PO = W("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    k(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.disableGutters && { right: 0 }
    )
  ),
  y1 = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o } = r,
      i = q(r, _O),
      s = y.useContext(Vn),
      a = k({}, r, { disableGutters: s.disableGutters }),
      l = EO(a);
    return S.jsx(PO, k({ className: G(l.root, o), ownerState: a, ref: n }, i));
  });
y1.muiName = "ListItemSecondaryAction";
const $O = y1,
  RO = ["className"],
  TO = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  OO = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  IO = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: a,
      divider: l,
      hasSecondaryAction: u,
      selected: c,
    } = e;
    return ve(
      {
        root: [
          "root",
          o && "dense",
          !s && "gutters",
          !a && "padding",
          l && "divider",
          i && "disabled",
          n && "button",
          t === "flex-start" && "alignItemsFlexStart",
          u && "secondaryAction",
          c && "selected",
        ],
        container: ["container"],
      },
      gO,
      r
    );
  },
  LO = W("div", { name: "MuiListItem", slot: "Root", overridesResolver: OO })(
    ({ theme: e, ownerState: t }) =>
      k(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          k(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${fo.root}`]: { paddingRight: 48 } },
        {
          [`&.${co.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${co.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${co.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Oe(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${co.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${co.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Oe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  MO = W("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  NO = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: s = !1,
        children: a,
        className: l,
        component: u,
        components: c = {},
        componentsProps: f = {},
        ContainerComponent: d = "li",
        ContainerProps: { className: x } = {},
        dense: v = !1,
        disabled: g = !1,
        disableGutters: _ = !1,
        disablePadding: p = !1,
        divider: h = !1,
        focusVisibleClassName: m,
        secondaryAction: C,
        selected: $ = !1,
        slotProps: O = {},
        slots: E = {},
      } = r,
      b = q(r.ContainerProps, RO),
      w = q(r, TO),
      T = y.useContext(Vn),
      M = y.useMemo(
        () => ({ dense: v || T.dense || !1, alignItems: o, disableGutters: _ }),
        [o, T.dense, v, _]
      ),
      N = y.useRef(null);
    cn(() => {
      i && N.current && N.current.focus();
    }, [i]);
    const D = y.Children.toArray(a),
      F = D.length && Bi(D[D.length - 1], ["ListItemSecondaryAction"]),
      P = k({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: M.dense,
        disabled: g,
        disableGutters: _,
        disablePadding: p,
        divider: h,
        hasSecondaryAction: F,
        selected: $,
      }),
      I = IO(P),
      A = nt(N, n),
      R = E.root || c.Root || LO,
      L = O.root || f.root || {},
      j = k({ className: G(I.root, L.className, l), disabled: g }, w);
    let V = u || "li";
    return (
      s &&
        ((j.component = u || "div"),
        (j.focusVisibleClassName = G(co.focusVisible, m)),
        (V = Qn)),
      F
        ? ((V = !j.component && !u ? "div" : V),
          d === "li" &&
            (V === "li"
              ? (V = "div")
              : j.component === "li" && (j.component = "div")),
          S.jsx(Vn.Provider, {
            value: M,
            children: S.jsxs(
              MO,
              k(
                { as: d, className: G(I.container, x), ref: A, ownerState: P },
                b,
                {
                  children: [
                    S.jsx(
                      R,
                      k(
                        {},
                        L,
                        !Ho(R) && { as: V, ownerState: k({}, P, L.ownerState) },
                        j,
                        { children: D }
                      )
                    ),
                    D.pop(),
                  ],
                }
              )
            ),
          }))
        : S.jsx(Vn.Provider, {
            value: M,
            children: S.jsxs(
              R,
              k(
                {},
                L,
                { as: V, ref: A },
                !Ho(R) && { ownerState: k({}, P, L.ownerState) },
                j,
                { children: [D, C && S.jsx($O, { children: C })] }
              )
            ),
          })
    );
  }),
  sa = NO,
  AO = fe("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  Lg = AO,
  FO = fe("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  Mg = FO,
  DO = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function ic(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function Ng(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function x1(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function xi(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !x1(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const jO = y.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: f = "selectedMenu",
      } = t,
      d = q(t, DO),
      x = y.useRef(null),
      v = y.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    cn(() => {
      o && x.current.focus();
    }, [o]),
      y.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (m, { direction: C }) => {
            const $ = !x.current.style.width;
            if (m.clientHeight < x.current.clientHeight && $) {
              const O = `${D0(It(m))}px`;
              (x.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] =
                O),
                (x.current.style.width = `calc(100% + ${O})`);
            }
            return x.current;
          },
        }),
        []
      );
    const g = (m) => {
        const C = x.current,
          $ = m.key,
          O = It(C).activeElement;
        if ($ === "ArrowDown") m.preventDefault(), xi(C, O, u, l, ic);
        else if ($ === "ArrowUp") m.preventDefault(), xi(C, O, u, l, Ng);
        else if ($ === "Home") m.preventDefault(), xi(C, null, u, l, ic);
        else if ($ === "End") m.preventDefault(), xi(C, null, u, l, Ng);
        else if ($.length === 1) {
          const E = v.current,
            b = $.toLowerCase(),
            w = performance.now();
          E.keys.length > 0 &&
            (w - E.lastTime > 500
              ? ((E.keys = []), (E.repeating = !0), (E.previousKeyMatched = !0))
              : E.repeating && b !== E.keys[0] && (E.repeating = !1)),
            (E.lastTime = w),
            E.keys.push(b);
          const T = O && !E.repeating && x1(O, E);
          E.previousKeyMatched && (T || xi(C, O, !1, l, ic, E))
            ? m.preventDefault()
            : (E.previousKeyMatched = !1);
        }
        c && c(m);
      },
      _ = nt(x, n);
    let p = -1;
    y.Children.forEach(s, (m, C) => {
      if (!y.isValidElement(m)) {
        p === C && ((p += 1), p >= s.length && (p = -1));
        return;
      }
      m.props.disabled ||
        (((f === "selectedMenu" && m.props.selected) || p === -1) && (p = C)),
        p === C &&
          (m.props.disabled ||
            m.props.muiSkipListHighlight ||
            m.type.muiSkipListHighlight) &&
          ((p += 1), p >= s.length && (p = -1));
    });
    const h = y.Children.map(s, (m, C) => {
      if (C === p) {
        const $ = {};
        return (
          i && ($.autoFocus = !0),
          m.props.tabIndex === void 0 &&
            f === "selectedMenu" &&
            ($.tabIndex = 0),
          y.cloneElement(m, $)
        );
      }
      return m;
    });
    return S.jsx(
      hO,
      k(
        {
          role: "menu",
          ref: _,
          className: a,
          onKeyDown: g,
          tabIndex: o ? 0 : -1,
        },
        d,
        { children: h }
      )
    );
  }),
  BO = jO;
function zO(e) {
  return ge("MuiPopover", e);
}
fe("MuiPopover", ["root", "paper"]);
const UO = ["onEntering"],
  WO = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  HO = ["slotProps"];
function Ag(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function Fg(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Dg(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function sc(e) {
  return typeof e == "function" ? e() : e;
}
const VO = (e) => {
    const { classes: t } = e;
    return ve({ root: ["root"], paper: ["paper"] }, zO, t);
  },
  KO = W(dp, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  b1 = W(Is, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  GO = y.forwardRef(function (t, n) {
    var r, o, i;
    const s = ye({ props: t, name: "MuiPopover" }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: f = "anchorEl",
        children: d,
        className: x,
        container: v,
        elevation: g = 8,
        marginThreshold: _ = 16,
        open: p,
        PaperProps: h = {},
        slots: m,
        slotProps: C,
        transformOrigin: $ = { vertical: "top", horizontal: "left" },
        TransitionComponent: O = zT,
        transitionDuration: E = "auto",
        TransitionProps: { onEntering: b } = {},
        disableScrollLock: w = !1,
      } = s,
      T = q(s.TransitionProps, UO),
      M = q(s, WO),
      N = (r = C == null ? void 0 : C.paper) != null ? r : h,
      D = y.useRef(),
      F = nt(D, N.ref),
      P = k({}, s, {
        anchorOrigin: u,
        anchorReference: f,
        elevation: g,
        marginThreshold: _,
        externalPaperSlotProps: N,
        transformOrigin: $,
        TransitionComponent: O,
        transitionDuration: E,
        TransitionProps: T,
      }),
      I = VO(P),
      A = y.useCallback(() => {
        if (f === "anchorPosition") return c;
        const X = sc(l),
          se = (
            X && X.nodeType === 1 ? X : It(D.current).body
          ).getBoundingClientRect();
        return {
          top: se.top + Ag(se, u.vertical),
          left: se.left + Fg(se, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, f]),
      R = y.useCallback(
        (X) => ({
          vertical: Ag(X, $.vertical),
          horizontal: Fg(X, $.horizontal),
        }),
        [$.horizontal, $.vertical]
      ),
      L = y.useCallback(
        (X) => {
          const ie = { width: X.offsetWidth, height: X.offsetHeight },
            se = R(ie);
          if (f === "none")
            return { top: null, left: null, transformOrigin: Dg(se) };
          const be = A();
          let _e = be.top - se.vertical,
            Pe = be.left - se.horizontal;
          const Be = _e + ie.height,
            Fe = Pe + ie.width,
            pe = dn(sc(l)),
            Ce = pe.innerHeight - _,
            xe = pe.innerWidth - _;
          if (_ !== null && _e < _) {
            const Ee = _e - _;
            (_e -= Ee), (se.vertical += Ee);
          } else if (_ !== null && Be > Ce) {
            const Ee = Be - Ce;
            (_e -= Ee), (se.vertical += Ee);
          }
          if (_ !== null && Pe < _) {
            const Ee = Pe - _;
            (Pe -= Ee), (se.horizontal += Ee);
          } else if (Fe > xe) {
            const Ee = Fe - xe;
            (Pe -= Ee), (se.horizontal += Ee);
          }
          return {
            top: `${Math.round(_e)}px`,
            left: `${Math.round(Pe)}px`,
            transformOrigin: Dg(se),
          };
        },
        [l, f, A, R, _]
      ),
      [j, V] = y.useState(p),
      B = y.useCallback(() => {
        const X = D.current;
        if (!X) return;
        const ie = L(X);
        ie.top !== null && (X.style.top = ie.top),
          ie.left !== null && (X.style.left = ie.left),
          (X.style.transformOrigin = ie.transformOrigin),
          V(!0);
      }, [L]);
    y.useEffect(
      () => (
        w && window.addEventListener("scroll", B),
        () => window.removeEventListener("scroll", B)
      ),
      [l, w, B]
    );
    const J = (X, ie) => {
        b && b(X, ie), B();
      },
      Z = () => {
        V(!1);
      };
    y.useEffect(() => {
      p && B();
    }),
      y.useImperativeHandle(
        a,
        () =>
          p
            ? {
                updatePosition: () => {
                  B();
                },
              }
            : null,
        [p, B]
      ),
      y.useEffect(() => {
        if (!p) return;
        const X = ti(() => {
            B();
          }),
          ie = dn(l);
        return (
          ie.addEventListener("resize", X),
          () => {
            X.clear(), ie.removeEventListener("resize", X);
          }
        );
      }, [l, p, B]);
    let oe = E;
    E === "auto" && !O.muiSupportAuto && (oe = void 0);
    const re = v || (l ? It(sc(l)).body : void 0),
      me = (o = m == null ? void 0 : m.root) != null ? o : KO,
      ke = (i = m == null ? void 0 : m.paper) != null ? i : b1,
      K = Nn({
        elementType: ke,
        externalSlotProps: k({}, N, {
          style: j ? N.style : k({}, N.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: g, ref: F },
        ownerState: P,
        className: G(I.paper, N == null ? void 0 : N.className),
      }),
      ae = Nn({
        elementType: me,
        externalSlotProps: (C == null ? void 0 : C.root) || {},
        externalForwardedProps: M,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: re,
          open: p,
        },
        ownerState: P,
        className: G(I.root, x),
      }),
      { slotProps: te } = ae,
      le = q(ae, HO);
    return S.jsx(
      me,
      k({}, le, !Ho(me) && { slotProps: te, disableScrollLock: w }, {
        children: S.jsx(
          O,
          k({ appear: !0, in: p, onEntering: J, onExited: Z, timeout: oe }, T, {
            children: S.jsx(ke, k({}, K, { children: d })),
          })
        ),
      })
    );
  }),
  qO = GO;
function YO(e) {
  return ge("MuiMenu", e);
}
fe("MuiMenu", ["root", "paper", "list"]);
const XO = ["onEntering"],
  QO = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  JO = { vertical: "top", horizontal: "right" },
  ZO = { vertical: "top", horizontal: "left" },
  eI = (e) => {
    const { classes: t } = e;
    return ve({ root: ["root"], paper: ["paper"], list: ["list"] }, YO, t);
  },
  tI = W(qO, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  nI = W(b1, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  rI = W(BO, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  oI = y.forwardRef(function (t, n) {
    var r, o;
    const i = ye({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: f,
        open: d,
        PaperProps: x = {},
        PopoverClasses: v,
        transitionDuration: g = "auto",
        TransitionProps: { onEntering: _ } = {},
        variant: p = "selectedMenu",
        slots: h = {},
        slotProps: m = {},
      } = i,
      C = q(i.TransitionProps, XO),
      $ = q(i, QO),
      O = pu(),
      E = k({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: _,
        PaperProps: x,
        transitionDuration: g,
        TransitionProps: C,
        variant: p,
      }),
      b = eI(E),
      w = s && !u && d,
      T = y.useRef(null),
      M = (R, L) => {
        T.current &&
          T.current.adjustStyleForScrollbar(R, {
            direction: O ? "rtl" : "ltr",
          }),
          _ && _(R, L);
      },
      N = (R) => {
        R.key === "Tab" && (R.preventDefault(), f && f(R, "tabKeyDown"));
      };
    let D = -1;
    y.Children.map(a, (R, L) => {
      y.isValidElement(R) &&
        (R.props.disabled ||
          (((p === "selectedMenu" && R.props.selected) || D === -1) &&
            (D = L)));
    });
    const F = (r = h.paper) != null ? r : nI,
      P = (o = m.paper) != null ? o : x,
      I = Nn({
        elementType: h.root,
        externalSlotProps: m.root,
        ownerState: E,
        className: [b.root, l],
      }),
      A = Nn({
        elementType: F,
        externalSlotProps: P,
        ownerState: E,
        className: b.paper,
      });
    return S.jsx(
      tI,
      k(
        {
          onClose: f,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: O ? "right" : "left",
          },
          transformOrigin: O ? JO : ZO,
          slots: { paper: F, root: h.root },
          slotProps: { root: I, paper: A },
          open: d,
          ref: n,
          transitionDuration: g,
          TransitionProps: k({ onEntering: M }, C),
          ownerState: E,
        },
        $,
        {
          classes: v,
          children: S.jsx(
            rI,
            k(
              {
                onKeyDown: N,
                actions: T,
                autoFocus: s && (D === -1 || u),
                autoFocusItem: w,
                variant: p,
              },
              c,
              { className: G(b.list, c.className), children: a }
            )
          ),
        }
      )
    );
  }),
  iI = oI;
function sI(e) {
  return ge("MuiMenuItem", e);
}
const aI = fe("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  bi = aI,
  lI = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  uI = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  cI = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      l = ve(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        sI,
        s
      );
    return k({}, s, l);
  },
  dI = W(Qn, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: uI,
  })(({ theme: e, ownerState: t }) =>
    k(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${bi.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${bi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Oe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${bi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Oe(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Oe(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${bi.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${bi.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${Og.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${Og.inset}`]: { marginLeft: 52 },
        [`& .${Mg.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Mg.inset}`]: { paddingLeft: 36 },
        [`& .${Lg.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        k(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Lg.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  fI = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: c = "menuitem",
        tabIndex: f,
        className: d,
      } = r,
      x = q(r, lI),
      v = y.useContext(Vn),
      g = y.useMemo(
        () => ({ dense: s || v.dense || !1, disableGutters: l }),
        [v.dense, s, l]
      ),
      _ = y.useRef(null);
    cn(() => {
      o && _.current && _.current.focus();
    }, [o]);
    const p = k({}, r, { dense: g.dense, divider: a, disableGutters: l }),
      h = cI(r),
      m = nt(_, n);
    let C;
    return (
      r.disabled || (C = f !== void 0 ? f : -1),
      S.jsx(Vn.Provider, {
        value: g,
        children: S.jsx(
          dI,
          k(
            {
              ref: m,
              role: c,
              tabIndex: C,
              component: i,
              focusVisibleClassName: G(h.focusVisible, u),
              className: G(h.root, d),
            },
            x,
            { ownerState: p, classes: h }
          )
        ),
      })
    );
  }),
  S1 = fI;
function pI(e) {
  return ge("MuiNativeSelect", e);
}
const hI = fe("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  gp = hI,
  gI = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  mI = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${U(n)}`, i && "iconOpen", r && "disabled"],
      };
    return ve(a, pI, t);
  },
  C1 = ({ ownerState: e, theme: t }) =>
    k(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": k(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${gp.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  vI = W("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Nt,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${gp.multiple}`]: t.multiple },
      ];
    },
  })(C1),
  w1 = ({ ownerState: e, theme: t }) =>
    k(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${gp.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  yI = W("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${U(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(w1),
  xI = y.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
      } = t,
      u = q(t, gI),
      c = k({}, t, { disabled: o, variant: l, error: i }),
      f = mI(c);
    return S.jsxs(y.Fragment, {
      children: [
        S.jsx(
          vI,
          k(
            {
              ownerState: c,
              className: G(f.select, r),
              disabled: o,
              ref: a || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : S.jsx(yI, { as: s, ownerState: c, className: f.icon }),
      ],
    });
  }),
  bI = xI;
var jg;
const SI = ["children", "classes", "className", "label", "notched"],
  CI = W("fieldset", { shouldForwardProp: Nt })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  wI = W("legend", { shouldForwardProp: Nt })(({ ownerState: e, theme: t }) =>
    k(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        k(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function kI(e) {
  const { className: t, label: n, notched: r } = e,
    o = q(e, SI),
    i = n != null && n !== "",
    s = k({}, e, { notched: r, withLabel: i });
  return S.jsx(
    CI,
    k({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: S.jsx(wI, {
        ownerState: s,
        children: i
          ? S.jsx("span", { children: n })
          : jg ||
            (jg = S.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const _I = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  EI = (e) => {
    const { classes: t } = e,
      r = ve(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        w2,
        t
      );
    return k({}, t, r);
  },
  PI = W(vu, {
    shouldForwardProp: (e) => Nt(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: gu,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return k(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${or.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${or.focused} .${or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${or.error} .${or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${or.disabled} .${or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        k(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  $I = W(kI, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  RI = W(yu, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: mu,
  })(({ theme: e, ownerState: t }) =>
    k(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  k1 = y.forwardRef(function (t, n) {
    var r, o, i, s, a;
    const l = ye({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: f = "input",
        label: d,
        multiline: x = !1,
        notched: v,
        slots: g = {},
        type: _ = "text",
      } = l,
      p = q(l, _I),
      h = EI(l),
      m = Ms(),
      C = Ls({
        props: l,
        muiFormControl: m,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      $ = k({}, l, {
        color: C.color || "primary",
        disabled: C.disabled,
        error: C.error,
        focused: C.focused,
        formControl: m,
        fullWidth: c,
        hiddenLabel: C.hiddenLabel,
        multiline: x,
        size: C.size,
        type: _,
      }),
      O = (r = (o = g.root) != null ? o : u.Root) != null ? r : PI,
      E = (i = (s = g.input) != null ? s : u.Input) != null ? i : RI;
    return S.jsx(
      xu,
      k(
        {
          slots: { root: O, input: E },
          renderSuffix: (b) =>
            S.jsx($I, {
              ownerState: $,
              className: h.notchedOutline,
              label:
                d != null && d !== "" && C.required
                  ? a || (a = S.jsxs(y.Fragment, { children: [d, " ", "*"] }))
                  : d,
              notched:
                typeof v < "u"
                  ? v
                  : !!(b.startAdornment || b.filled || b.focused),
            }),
          fullWidth: c,
          inputComponent: f,
          multiline: x,
          ref: n,
          type: _,
        },
        p,
        { classes: k({}, h, { notchedOutline: null }) }
      )
    );
  });
k1.muiName = "Input";
const TI = k1;
function OI(e) {
  return ge("MuiSelect", e);
}
const II = fe("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  Si = II;
var Bg;
const LI = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  MI = W("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Si.select}`]: t.select },
        { [`&.${Si.select}`]: t[n.variant] },
        { [`&.${Si.error}`]: t.error },
        { [`&.${Si.multiple}`]: t.multiple },
      ];
    },
  })(C1, {
    [`&.${Si.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  NI = W("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${U(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(w1),
  AI = W("input", {
    shouldForwardProp: (e) => Z0(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function zg(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function FI(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const DI = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${U(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return ve(a, OI, t);
  },
  jI = y.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: s,
        autoWidth: a,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: f,
        disabled: d,
        displayEmpty: x,
        error: v = !1,
        IconComponent: g,
        inputRef: _,
        labelId: p,
        MenuProps: h = {},
        multiple: m,
        name: C,
        onBlur: $,
        onChange: O,
        onClose: E,
        onFocus: b,
        onOpen: w,
        open: T,
        readOnly: M,
        renderValue: N,
        SelectDisplayProps: D = {},
        tabIndex: F,
        value: P,
        variant: I = "standard",
      } = t,
      A = q(t, LI),
      [R, L] = vd({ controlled: P, default: f, name: "Select" }),
      [j, V] = vd({ controlled: T, default: c, name: "Select" }),
      B = y.useRef(null),
      J = y.useRef(null),
      [Z, oe] = y.useState(null),
      { current: re } = y.useRef(T != null),
      [me, ke] = y.useState(),
      K = nt(n, _),
      ae = y.useCallback((ne) => {
        (J.current = ne), ne && oe(ne);
      }, []),
      te = Z == null ? void 0 : Z.parentNode;
    y.useImperativeHandle(
      K,
      () => ({
        focus: () => {
          J.current.focus();
        },
        node: B.current,
        value: R,
      }),
      [R]
    ),
      y.useEffect(() => {
        c &&
          j &&
          Z &&
          !re &&
          (ke(a ? null : te.clientWidth), J.current.focus());
      }, [Z, a]),
      y.useEffect(() => {
        s && J.current.focus();
      }, [s]),
      y.useEffect(() => {
        if (!p) return;
        const ne = It(J.current).getElementById(p);
        if (ne) {
          const de = () => {
            getSelection().isCollapsed && J.current.focus();
          };
          return (
            ne.addEventListener("click", de),
            () => {
              ne.removeEventListener("click", de);
            }
          );
        }
      }, [p]);
    const le = (ne, de) => {
        ne ? w && w(de) : E && E(de),
          re || (ke(a ? null : te.clientWidth), V(ne));
      },
      X = (ne) => {
        ne.button === 0 && (ne.preventDefault(), J.current.focus(), le(!0, ne));
      },
      ie = (ne) => {
        le(!1, ne);
      },
      se = y.Children.toArray(l),
      be = (ne) => {
        const de = se.find((H) => H.props.value === ne.target.value);
        de !== void 0 && (L(de.props.value), O && O(ne, de));
      },
      _e = (ne) => (de) => {
        let H;
        if (de.currentTarget.hasAttribute("tabindex")) {
          if (m) {
            H = Array.isArray(R) ? R.slice() : [];
            const ee = R.indexOf(ne.props.value);
            ee === -1 ? H.push(ne.props.value) : H.splice(ee, 1);
          } else H = ne.props.value;
          if (
            (ne.props.onClick && ne.props.onClick(de), R !== H && (L(H), O))
          ) {
            const ee = de.nativeEvent || de,
              Re = new ee.constructor(ee.type, ee);
            Object.defineProperty(Re, "target", {
              writable: !0,
              value: { value: H, name: C },
            }),
              O(Re, ne);
          }
          m || le(!1, de);
        }
      },
      Pe = (ne) => {
        M ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(ne.key) !== -1 &&
            (ne.preventDefault(), le(!0, ne)));
      },
      Be = Z !== null && j,
      Fe = (ne) => {
        !Be &&
          $ &&
          (Object.defineProperty(ne, "target", {
            writable: !0,
            value: { value: R, name: C },
          }),
          $(ne));
      };
    delete A["aria-invalid"];
    let pe, Ce;
    const xe = [];
    let Ee = !1;
    (ll({ value: R }) || x) && (N ? (pe = N(R)) : (Ee = !0));
    const he = se.map((ne) => {
      if (!y.isValidElement(ne)) return null;
      let de;
      if (m) {
        if (!Array.isArray(R)) throw new Error(Xn(2));
        (de = R.some((H) => zg(H, ne.props.value))),
          de && Ee && xe.push(ne.props.children);
      } else (de = zg(R, ne.props.value)), de && Ee && (Ce = ne.props.children);
      return y.cloneElement(ne, {
        "aria-selected": de ? "true" : "false",
        onClick: _e(ne),
        onKeyUp: (H) => {
          H.key === " " && H.preventDefault(),
            ne.props.onKeyUp && ne.props.onKeyUp(H);
        },
        role: "option",
        selected: de,
        value: void 0,
        "data-value": ne.props.value,
      });
    });
    Ee &&
      (m
        ? xe.length === 0
          ? (pe = null)
          : (pe = xe.reduce(
              (ne, de, H) => (
                ne.push(de), H < xe.length - 1 && ne.push(", "), ne
              ),
              []
            ))
        : (pe = Ce));
    let mt = me;
    !a && re && Z && (mt = te.clientWidth);
    let Je;
    typeof F < "u" ? (Je = F) : (Je = d ? null : 0);
    const Se = D.id || (C ? `mui-component-select-${C}` : void 0),
      Q = k({}, t, { variant: I, value: R, open: Be, error: v }),
      Ze = DI(Q),
      ut = k({}, h.PaperProps, (r = h.slotProps) == null ? void 0 : r.paper),
      it = Zf();
    return S.jsxs(y.Fragment, {
      children: [
        S.jsx(
          MI,
          k(
            {
              ref: ae,
              tabIndex: Je,
              role: "combobox",
              "aria-controls": it,
              "aria-disabled": d ? "true" : void 0,
              "aria-expanded": Be ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [p, Se].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: Pe,
              onMouseDown: d || M ? null : X,
              onBlur: Fe,
              onFocus: b,
            },
            D,
            {
              ownerState: Q,
              className: G(D.className, Ze.select, u),
              id: Se,
              children: FI(pe)
                ? Bg ||
                  (Bg = S.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : pe,
            }
          )
        ),
        S.jsx(
          AI,
          k(
            {
              "aria-invalid": v,
              value: Array.isArray(R) ? R.join(",") : R,
              name: C,
              ref: B,
              "aria-hidden": !0,
              onChange: be,
              tabIndex: -1,
              disabled: d,
              className: Ze.nativeInput,
              autoFocus: s,
              ownerState: Q,
            },
            A
          )
        ),
        S.jsx(NI, { as: g, className: Ze.icon, ownerState: Q }),
        S.jsx(
          iI,
          k(
            {
              id: `menu-${C || ""}`,
              anchorEl: te,
              open: Be,
              onClose: ie,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            h,
            {
              MenuListProps: k(
                {
                  "aria-labelledby": p,
                  role: "listbox",
                  "aria-multiselectable": m ? "true" : void 0,
                  disableListWrap: !0,
                  id: it,
                },
                h.MenuListProps
              ),
              slotProps: k({}, h.slotProps, {
                paper: k({}, ut, {
                  style: k({ minWidth: mt }, ut != null ? ut.style : null),
                }),
              }),
              children: he,
            }
          )
        ),
      ],
    });
  }),
  BI = jI,
  zI = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  UI = ["root"],
  WI = (e) => {
    const { classes: t } = e;
    return t;
  },
  mp = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Nt(e) && e !== "variant",
    slot: "Root",
  },
  HI = W(KT, mp)(""),
  VI = W(TI, mp)(""),
  KI = W(kT, mp)(""),
  _1 = y.forwardRef(function (t, n) {
    const r = ye({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = P2,
        id: f,
        input: d,
        inputProps: x,
        label: v,
        labelId: g,
        MenuProps: _,
        multiple: p = !1,
        native: h = !1,
        onClose: m,
        onOpen: C,
        open: $,
        renderValue: O,
        SelectDisplayProps: E,
        variant: b = "outlined",
      } = r,
      w = q(r, zI),
      T = h ? bI : BI,
      M = Ms(),
      N = Ls({ props: r, muiFormControl: M, states: ["variant", "error"] }),
      D = N.variant || b,
      F = k({}, r, { variant: D, classes: s }),
      P = WI(F),
      I = q(P, UI),
      A =
        d ||
        {
          standard: S.jsx(HI, { ownerState: F }),
          outlined: S.jsx(VI, { label: v, ownerState: F }),
          filled: S.jsx(KI, { ownerState: F }),
        }[D],
      R = nt(n, ni(A));
    return S.jsx(y.Fragment, {
      children: y.cloneElement(
        A,
        k(
          {
            inputComponent: T,
            inputProps: k(
              {
                children: i,
                error: N.error,
                IconComponent: c,
                variant: D,
                type: void 0,
                multiple: p,
              },
              h
                ? { id: f }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: g,
                    MenuProps: _,
                    onClose: m,
                    onOpen: C,
                    open: $,
                    renderValue: O,
                    SelectDisplayProps: k({ id: f }, E),
                  },
              x,
              { classes: x ? Ot(I, x.classes) : I },
              d ? d.props.inputProps : {}
            ),
          },
          ((p && h) || u) && D === "outlined" ? { notched: !0 } : {},
          { ref: R, className: G(A.props.className, a, P.root) },
          !d && { variant: D },
          w
        )
      ),
    });
  });
_1.muiName = "Select";
const E1 = _1;
function GI(e) {
  return ge("MuiTab", e);
}
const qI = fe("MuiTab", [
    "root",
    "labelIcon",
    "textColorInherit",
    "textColorPrimary",
    "textColorSecondary",
    "selected",
    "disabled",
    "fullWidth",
    "wrapped",
    "iconWrapper",
  ]),
  ir = qI,
  YI = [
    "className",
    "disabled",
    "disableFocusRipple",
    "fullWidth",
    "icon",
    "iconPosition",
    "indicator",
    "label",
    "onChange",
    "onClick",
    "onFocus",
    "selected",
    "selectionFollowsFocus",
    "textColor",
    "value",
    "wrapped",
  ],
  XI = (e) => {
    const {
        classes: t,
        textColor: n,
        fullWidth: r,
        wrapped: o,
        icon: i,
        label: s,
        selected: a,
        disabled: l,
      } = e,
      u = {
        root: [
          "root",
          i && s && "labelIcon",
          `textColor${U(n)}`,
          r && "fullWidth",
          o && "wrapped",
          a && "selected",
          l && "disabled",
        ],
        iconWrapper: ["iconWrapper"],
      };
    return ve(u, GI, t);
  },
  QI = W(Qn, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.label && n.icon && t.labelIcon,
        t[`textColor${U(n.textColor)}`],
        n.fullWidth && t.fullWidth,
        n.wrapped && t.wrapped,
        { [`& .${ir.iconWrapper}`]: t.iconWrapper },
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {},
      e.typography.button,
      {
        maxWidth: 360,
        minWidth: 90,
        position: "relative",
        minHeight: 48,
        flexShrink: 0,
        padding: "12px 16px",
        overflow: "hidden",
        whiteSpace: "normal",
        textAlign: "center",
      },
      t.label && {
        flexDirection:
          t.iconPosition === "top" || t.iconPosition === "bottom"
            ? "column"
            : "row",
      },
      { lineHeight: 1.25 },
      t.icon &&
        t.label && {
          minHeight: 72,
          paddingTop: 9,
          paddingBottom: 9,
          [`& > .${ir.iconWrapper}`]: k(
            {},
            t.iconPosition === "top" && { marginBottom: 6 },
            t.iconPosition === "bottom" && { marginTop: 6 },
            t.iconPosition === "start" && { marginRight: e.spacing(1) },
            t.iconPosition === "end" && { marginLeft: e.spacing(1) }
          ),
        },
      t.textColor === "inherit" && {
        color: "inherit",
        opacity: 0.6,
        [`&.${ir.selected}`]: { opacity: 1 },
        [`&.${ir.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.textColor === "primary" && {
        color: (e.vars || e).palette.text.secondary,
        [`&.${ir.selected}`]: { color: (e.vars || e).palette.primary.main },
        [`&.${ir.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      },
      t.textColor === "secondary" && {
        color: (e.vars || e).palette.text.secondary,
        [`&.${ir.selected}`]: { color: (e.vars || e).palette.secondary.main },
        [`&.${ir.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      },
      t.fullWidth && {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: "none",
      },
      t.wrapped && { fontSize: e.typography.pxToRem(12) }
    )
  ),
  JI = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiTab" }),
      {
        className: o,
        disabled: i = !1,
        disableFocusRipple: s = !1,
        fullWidth: a,
        icon: l,
        iconPosition: u = "top",
        indicator: c,
        label: f,
        onChange: d,
        onClick: x,
        onFocus: v,
        selected: g,
        selectionFollowsFocus: _,
        textColor: p = "inherit",
        value: h,
        wrapped: m = !1,
      } = r,
      C = q(r, YI),
      $ = k({}, r, {
        disabled: i,
        disableFocusRipple: s,
        selected: g,
        icon: !!l,
        iconPosition: u,
        label: !!f,
        fullWidth: a,
        textColor: p,
        wrapped: m,
      }),
      O = XI($),
      E =
        l && f && y.isValidElement(l)
          ? y.cloneElement(l, {
              className: G(O.iconWrapper, l.props.className),
            })
          : l,
      b = (T) => {
        !g && d && d(T, h), x && x(T);
      },
      w = (T) => {
        _ && !g && d && d(T, h), v && v(T);
      };
    return S.jsxs(
      QI,
      k(
        {
          focusRipple: !s,
          className: G(O.root, o),
          ref: n,
          role: "tab",
          "aria-selected": g,
          disabled: i,
          onClick: b,
          onFocus: w,
          ownerState: $,
          tabIndex: g ? 0 : -1,
        },
        C,
        {
          children: [
            u === "top" || u === "start"
              ? S.jsxs(y.Fragment, { children: [E, f] })
              : S.jsxs(y.Fragment, { children: [f, E] }),
            c,
          ],
        }
      )
    );
  }),
  Ug = JI;
function ZI(e) {
  return ge("MuiToolbar", e);
}
fe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const eL = ["className", "component", "disableGutters", "variant"],
  tL = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return ve({ root: ["root", !n && "gutters", r] }, ZI, t);
  },
  nL = W("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      k(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  rL = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular",
      } = r,
      l = q(r, eL),
      u = k({}, r, { component: i, disableGutters: s, variant: a }),
      c = tL(u);
    return S.jsx(
      nL,
      k({ as: i, className: G(c.root, o), ref: n, ownerState: u }, l)
    );
  }),
  oL = rL,
  iL = Dn(
    S.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }),
    "KeyboardArrowLeft"
  ),
  sL = Dn(
    S.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }),
    "KeyboardArrowRight"
  );
function aL(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function lL(e, t, n, r = {}, o = () => {}) {
  const { ease: i = aL, duration: s = 300 } = r;
  let a = null;
  const l = t[e];
  let u = !1;
  const c = () => {
      u = !0;
    },
    f = (d) => {
      if (u) {
        o(new Error("Animation cancelled"));
        return;
      }
      a === null && (a = d);
      const x = Math.min(1, (d - a) / s);
      if (((t[e] = i(x) * (n - l) + l), x >= 1)) {
        requestAnimationFrame(() => {
          o(null);
        });
        return;
      }
      requestAnimationFrame(f);
    };
  return l === n
    ? (o(new Error("Element already at target position")), c)
    : (requestAnimationFrame(f), c);
}
const uL = ["onChange"],
  cL = {
    width: 99,
    height: 99,
    position: "absolute",
    top: -9999,
    overflow: "scroll",
  };
function dL(e) {
  const { onChange: t } = e,
    n = q(e, uL),
    r = y.useRef(),
    o = y.useRef(null),
    i = () => {
      r.current = o.current.offsetHeight - o.current.clientHeight;
    };
  return (
    cn(() => {
      const s = ti(() => {
          const l = r.current;
          i(), l !== r.current && t(r.current);
        }),
        a = dn(o.current);
      return (
        a.addEventListener("resize", s),
        () => {
          s.clear(), a.removeEventListener("resize", s);
        }
      );
    }, [t]),
    y.useEffect(() => {
      i(), t(r.current);
    }, [t]),
    S.jsx("div", k({ style: cL }, n, { ref: o }))
  );
}
function fL(e) {
  return ge("MuiTabScrollButton", e);
}
const pL = fe("MuiTabScrollButton", [
    "root",
    "vertical",
    "horizontal",
    "disabled",
  ]),
  hL = pL,
  gL = [
    "className",
    "slots",
    "slotProps",
    "direction",
    "orientation",
    "disabled",
  ],
  mL = (e) => {
    const { classes: t, orientation: n, disabled: r } = e;
    return ve({ root: ["root", n, r && "disabled"] }, fL, t);
  },
  vL = W(Qn, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.orientation && t[n.orientation]];
    },
  })(({ ownerState: e }) =>
    k(
      {
        width: 40,
        flexShrink: 0,
        opacity: 0.8,
        [`&.${hL.disabled}`]: { opacity: 0 },
      },
      e.orientation === "vertical" && {
        width: "100%",
        height: 40,
        "& svg": { transform: `rotate(${e.isRtl ? -90 : 90}deg)` },
      }
    )
  ),
  yL = y.forwardRef(function (t, n) {
    var r, o;
    const i = ye({ props: t, name: "MuiTabScrollButton" }),
      { className: s, slots: a = {}, slotProps: l = {}, direction: u } = i,
      c = q(i, gL),
      f = pu(),
      d = k({ isRtl: f }, i),
      x = mL(d),
      v = (r = a.StartScrollButtonIcon) != null ? r : iL,
      g = (o = a.EndScrollButtonIcon) != null ? o : sL,
      _ = Nn({
        elementType: v,
        externalSlotProps: l.startScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: d,
      }),
      p = Nn({
        elementType: g,
        externalSlotProps: l.endScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: d,
      });
    return S.jsx(
      vL,
      k(
        {
          component: "div",
          className: G(x.root, s),
          ref: n,
          role: null,
          ownerState: d,
          tabIndex: null,
        },
        c,
        { children: u === "left" ? S.jsx(v, k({}, _)) : S.jsx(g, k({}, p)) }
      )
    );
  }),
  xL = yL;
function bL(e) {
  return ge("MuiTabs", e);
}
const SL = fe("MuiTabs", [
    "root",
    "vertical",
    "flexContainer",
    "flexContainerVertical",
    "centered",
    "scroller",
    "fixed",
    "scrollableX",
    "scrollableY",
    "hideScrollbar",
    "scrollButtons",
    "scrollButtonsHideMobile",
    "indicator",
  ]),
  ac = SL,
  CL = [
    "aria-label",
    "aria-labelledby",
    "action",
    "centered",
    "children",
    "className",
    "component",
    "allowScrollButtonsMobile",
    "indicatorColor",
    "onChange",
    "orientation",
    "ScrollButtonComponent",
    "scrollButtons",
    "selectionFollowsFocus",
    "slots",
    "slotProps",
    "TabIndicatorProps",
    "TabScrollButtonProps",
    "textColor",
    "value",
    "variant",
    "visibleScrollbar",
  ],
  Wg = (e, t) =>
    e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : e.firstChild,
  Hg = (e, t) =>
    e === t
      ? e.lastChild
      : t && t.previousElementSibling
      ? t.previousElementSibling
      : e.lastChild,
  aa = (e, t, n) => {
    let r = !1,
      o = n(e, t);
    for (; o; ) {
      if (o === e.firstChild) {
        if (r) return;
        r = !0;
      }
      const i = o.disabled || o.getAttribute("aria-disabled") === "true";
      if (!o.hasAttribute("tabindex") || i) o = n(e, o);
      else {
        o.focus();
        return;
      }
    }
  },
  wL = (e) => {
    const {
      vertical: t,
      fixed: n,
      hideScrollbar: r,
      scrollableX: o,
      scrollableY: i,
      centered: s,
      scrollButtonsHideMobile: a,
      classes: l,
    } = e;
    return ve(
      {
        root: ["root", t && "vertical"],
        scroller: [
          "scroller",
          n && "fixed",
          r && "hideScrollbar",
          o && "scrollableX",
          i && "scrollableY",
        ],
        flexContainer: [
          "flexContainer",
          t && "flexContainerVertical",
          s && "centered",
        ],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", a && "scrollButtonsHideMobile"],
        scrollableX: [o && "scrollableX"],
        hideScrollbar: [r && "hideScrollbar"],
      },
      bL,
      l
    );
  },
  kL = W("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${ac.scrollButtons}`]: t.scrollButtons },
        {
          [`& .${ac.scrollButtons}`]:
            n.scrollButtonsHideMobile && t.scrollButtonsHideMobile,
        },
        t.root,
        n.vertical && t.vertical,
      ];
    },
  })(({ ownerState: e, theme: t }) =>
    k(
      {
        overflow: "hidden",
        minHeight: 48,
        WebkitOverflowScrolling: "touch",
        display: "flex",
      },
      e.vertical && { flexDirection: "column" },
      e.scrollButtonsHideMobile && {
        [`& .${ac.scrollButtons}`]: {
          [t.breakpoints.down("sm")]: { display: "none" },
        },
      }
    )
  ),
  _L = W("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.scroller,
        n.fixed && t.fixed,
        n.hideScrollbar && t.hideScrollbar,
        n.scrollableX && t.scrollableX,
        n.scrollableY && t.scrollableY,
      ];
    },
  })(({ ownerState: e }) =>
    k(
      {
        position: "relative",
        display: "inline-block",
        flex: "1 1 auto",
        whiteSpace: "nowrap",
      },
      e.fixed && { overflowX: "hidden", width: "100%" },
      e.hideScrollbar && {
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      },
      e.scrollableX && { overflowX: "auto", overflowY: "hidden" },
      e.scrollableY && { overflowY: "auto", overflowX: "hidden" }
    )
  ),
  EL = W("div", {
    name: "MuiTabs",
    slot: "FlexContainer",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.flexContainer,
        n.vertical && t.flexContainerVertical,
        n.centered && t.centered,
      ];
    },
  })(({ ownerState: e }) =>
    k(
      { display: "flex" },
      e.vertical && { flexDirection: "column" },
      e.centered && { justifyContent: "center" }
    )
  ),
  PL = W("span", {
    name: "MuiTabs",
    slot: "Indicator",
    overridesResolver: (e, t) => t.indicator,
  })(({ ownerState: e, theme: t }) =>
    k(
      {
        position: "absolute",
        height: 2,
        bottom: 0,
        width: "100%",
        transition: t.transitions.create(),
      },
      e.indicatorColor === "primary" && {
        backgroundColor: (t.vars || t).palette.primary.main,
      },
      e.indicatorColor === "secondary" && {
        backgroundColor: (t.vars || t).palette.secondary.main,
      },
      e.vertical && { height: "100%", width: 2, right: 0 }
    )
  ),
  $L = W(dL)({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }),
  Vg = {},
  RL = y.forwardRef(function (t, n) {
    const r = ye({ props: t, name: "MuiTabs" }),
      o = oi(),
      i = pu(),
      {
        "aria-label": s,
        "aria-labelledby": a,
        action: l,
        centered: u = !1,
        children: c,
        className: f,
        component: d = "div",
        allowScrollButtonsMobile: x = !1,
        indicatorColor: v = "primary",
        onChange: g,
        orientation: _ = "horizontal",
        ScrollButtonComponent: p = xL,
        scrollButtons: h = "auto",
        selectionFollowsFocus: m,
        slots: C = {},
        slotProps: $ = {},
        TabIndicatorProps: O = {},
        TabScrollButtonProps: E = {},
        textColor: b = "primary",
        value: w,
        variant: T = "standard",
        visibleScrollbar: M = !1,
      } = r,
      N = q(r, CL),
      D = T === "scrollable",
      F = _ === "vertical",
      P = F ? "scrollTop" : "scrollLeft",
      I = F ? "top" : "left",
      A = F ? "bottom" : "right",
      R = F ? "clientHeight" : "clientWidth",
      L = F ? "height" : "width",
      j = k({}, r, {
        component: d,
        allowScrollButtonsMobile: x,
        indicatorColor: v,
        orientation: _,
        vertical: F,
        scrollButtons: h,
        textColor: b,
        variant: T,
        visibleScrollbar: M,
        fixed: !D,
        hideScrollbar: D && !M,
        scrollableX: D && !F,
        scrollableY: D && F,
        centered: u && !D,
        scrollButtonsHideMobile: !x,
      }),
      V = wL(j),
      B = Nn({
        elementType: C.StartScrollButtonIcon,
        externalSlotProps: $.startScrollButtonIcon,
        ownerState: j,
      }),
      J = Nn({
        elementType: C.EndScrollButtonIcon,
        externalSlotProps: $.endScrollButtonIcon,
        ownerState: j,
      }),
      [Z, oe] = y.useState(!1),
      [re, me] = y.useState(Vg),
      [ke, K] = y.useState(!1),
      [ae, te] = y.useState(!1),
      [le, X] = y.useState(!1),
      [ie, se] = y.useState({ overflow: "hidden", scrollbarWidth: 0 }),
      be = new Map(),
      _e = y.useRef(null),
      Pe = y.useRef(null),
      Be = () => {
        const H = _e.current;
        let ee;
        if (H) {
          const Ie = H.getBoundingClientRect();
          ee = {
            clientWidth: H.clientWidth,
            scrollLeft: H.scrollLeft,
            scrollTop: H.scrollTop,
            scrollLeftNormalized: aE(H, i ? "rtl" : "ltr"),
            scrollWidth: H.scrollWidth,
            top: Ie.top,
            bottom: Ie.bottom,
            left: Ie.left,
            right: Ie.right,
          };
        }
        let Re;
        if (H && w !== !1) {
          const Ie = Pe.current.children;
          if (Ie.length > 0) {
            const st = Ie[be.get(w)];
            Re = st ? st.getBoundingClientRect() : null;
          }
        }
        return { tabsMeta: ee, tabMeta: Re };
      },
      Fe = Rn(() => {
        const { tabsMeta: H, tabMeta: ee } = Be();
        let Re = 0,
          Ie;
        if (F) (Ie = "top"), ee && H && (Re = ee.top - H.top + H.scrollTop);
        else if (((Ie = i ? "right" : "left"), ee && H)) {
          const Pt = i
            ? H.scrollLeftNormalized + H.clientWidth - H.scrollWidth
            : H.scrollLeft;
          Re = (i ? -1 : 1) * (ee[Ie] - H[Ie] + Pt);
        }
        const st = { [Ie]: Re, [L]: ee ? ee[L] : 0 };
        if (isNaN(re[Ie]) || isNaN(re[L])) me(st);
        else {
          const Pt = Math.abs(re[Ie] - st[Ie]),
            wn = Math.abs(re[L] - st[L]);
          (Pt >= 1 || wn >= 1) && me(st);
        }
      }),
      pe = (H, { animation: ee = !0 } = {}) => {
        ee
          ? lL(P, _e.current, H, { duration: o.transitions.duration.standard })
          : (_e.current[P] = H);
      },
      Ce = (H) => {
        let ee = _e.current[P];
        F
          ? (ee += H)
          : ((ee += H * (i ? -1 : 1)),
            (ee *= i && j0() === "reverse" ? -1 : 1)),
          pe(ee);
      },
      xe = () => {
        const H = _e.current[R];
        let ee = 0;
        const Re = Array.from(Pe.current.children);
        for (let Ie = 0; Ie < Re.length; Ie += 1) {
          const st = Re[Ie];
          if (ee + st[R] > H) {
            Ie === 0 && (ee = H);
            break;
          }
          ee += st[R];
        }
        return ee;
      },
      Ee = () => {
        Ce(-1 * xe());
      },
      he = () => {
        Ce(xe());
      },
      mt = y.useCallback((H) => {
        se({ overflow: null, scrollbarWidth: H });
      }, []),
      Je = () => {
        const H = {};
        H.scrollbarSizeListener = D
          ? S.jsx($L, {
              onChange: mt,
              className: G(V.scrollableX, V.hideScrollbar),
            })
          : null;
        const Re = D && ((h === "auto" && (ke || ae)) || h === !0);
        return (
          (H.scrollButtonStart = Re
            ? S.jsx(
                p,
                k(
                  {
                    slots: { StartScrollButtonIcon: C.StartScrollButtonIcon },
                    slotProps: { startScrollButtonIcon: B },
                    orientation: _,
                    direction: i ? "right" : "left",
                    onClick: Ee,
                    disabled: !ke,
                  },
                  E,
                  { className: G(V.scrollButtons, E.className) }
                )
              )
            : null),
          (H.scrollButtonEnd = Re
            ? S.jsx(
                p,
                k(
                  {
                    slots: { EndScrollButtonIcon: C.EndScrollButtonIcon },
                    slotProps: { endScrollButtonIcon: J },
                    orientation: _,
                    direction: i ? "left" : "right",
                    onClick: he,
                    disabled: !ae,
                  },
                  E,
                  { className: G(V.scrollButtons, E.className) }
                )
              )
            : null),
          H
        );
      },
      Se = Rn((H) => {
        const { tabsMeta: ee, tabMeta: Re } = Be();
        if (!(!Re || !ee)) {
          if (Re[I] < ee[I]) {
            const Ie = ee[P] + (Re[I] - ee[I]);
            pe(Ie, { animation: H });
          } else if (Re[A] > ee[A]) {
            const Ie = ee[P] + (Re[A] - ee[A]);
            pe(Ie, { animation: H });
          }
        }
      }),
      Q = Rn(() => {
        D && h !== !1 && X(!le);
      });
    y.useEffect(() => {
      const H = ti(() => {
        _e.current && Fe();
      });
      let ee;
      const Re = (Pt) => {
          Pt.forEach((wn) => {
            wn.removedNodes.forEach((ai) => {
              var nr;
              (nr = ee) == null || nr.unobserve(ai);
            }),
              wn.addedNodes.forEach((ai) => {
                var nr;
                (nr = ee) == null || nr.observe(ai);
              });
          }),
            H(),
            Q();
        },
        Ie = dn(_e.current);
      Ie.addEventListener("resize", H);
      let st;
      return (
        typeof ResizeObserver < "u" &&
          ((ee = new ResizeObserver(H)),
          Array.from(Pe.current.children).forEach((Pt) => {
            ee.observe(Pt);
          })),
        typeof MutationObserver < "u" &&
          ((st = new MutationObserver(Re)),
          st.observe(Pe.current, { childList: !0 })),
        () => {
          var Pt, wn;
          H.clear(),
            Ie.removeEventListener("resize", H),
            (Pt = st) == null || Pt.disconnect(),
            (wn = ee) == null || wn.disconnect();
        }
      );
    }, [Fe, Q]),
      y.useEffect(() => {
        const H = Array.from(Pe.current.children),
          ee = H.length;
        if (typeof IntersectionObserver < "u" && ee > 0 && D && h !== !1) {
          const Re = H[0],
            Ie = H[ee - 1],
            st = { root: _e.current, threshold: 0.99 },
            Pt = (Su) => {
              K(!Su[0].isIntersecting);
            },
            wn = new IntersectionObserver(Pt, st);
          wn.observe(Re);
          const ai = (Su) => {
              te(!Su[0].isIntersecting);
            },
            nr = new IntersectionObserver(ai, st);
          return (
            nr.observe(Ie),
            () => {
              wn.disconnect(), nr.disconnect();
            }
          );
        }
      }, [D, h, le, c == null ? void 0 : c.length]),
      y.useEffect(() => {
        oe(!0);
      }, []),
      y.useEffect(() => {
        Fe();
      }),
      y.useEffect(() => {
        Se(Vg !== re);
      }, [Se, re]),
      y.useImperativeHandle(
        l,
        () => ({ updateIndicator: Fe, updateScrollButtons: Q }),
        [Fe, Q]
      );
    const Ze = S.jsx(
      PL,
      k({}, O, {
        className: G(V.indicator, O.className),
        ownerState: j,
        style: k({}, re, O.style),
      })
    );
    let ut = 0;
    const it = y.Children.map(c, (H) => {
        if (!y.isValidElement(H)) return null;
        const ee = H.props.value === void 0 ? ut : H.props.value;
        be.set(ee, ut);
        const Re = ee === w;
        return (
          (ut += 1),
          y.cloneElement(
            H,
            k(
              {
                fullWidth: T === "fullWidth",
                indicator: Re && !Z && Ze,
                selected: Re,
                selectionFollowsFocus: m,
                onChange: g,
                textColor: b,
                value: ee,
              },
              ut === 1 && w === !1 && !H.props.tabIndex ? { tabIndex: 0 } : {}
            )
          )
        );
      }),
      ne = (H) => {
        const ee = Pe.current,
          Re = It(ee).activeElement;
        if (Re.getAttribute("role") !== "tab") return;
        let st = _ === "horizontal" ? "ArrowLeft" : "ArrowUp",
          Pt = _ === "horizontal" ? "ArrowRight" : "ArrowDown";
        switch (
          (_ === "horizontal" && i && ((st = "ArrowRight"), (Pt = "ArrowLeft")),
          H.key)
        ) {
          case st:
            H.preventDefault(), aa(ee, Re, Hg);
            break;
          case Pt:
            H.preventDefault(), aa(ee, Re, Wg);
            break;
          case "Home":
            H.preventDefault(), aa(ee, null, Wg);
            break;
          case "End":
            H.preventDefault(), aa(ee, null, Hg);
            break;
        }
      },
      de = Je();
    return S.jsxs(
      kL,
      k({ className: G(V.root, f), ownerState: j, ref: n, as: d }, N, {
        children: [
          de.scrollButtonStart,
          de.scrollbarSizeListener,
          S.jsxs(_L, {
            className: V.scroller,
            ownerState: j,
            style: {
              overflow: ie.overflow,
              [F ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: M
                ? void 0
                : -ie.scrollbarWidth,
            },
            ref: _e,
            children: [
              S.jsx(EL, {
                "aria-label": s,
                "aria-labelledby": a,
                "aria-orientation": _ === "vertical" ? "vertical" : null,
                className: V.flexContainer,
                ownerState: j,
                onKeyDown: ne,
                ref: Pe,
                role: "tablist",
                children: it,
              }),
              Z && Ze,
            ],
          }),
          de.scrollButtonEnd,
        ],
      })
    );
  }),
  TL = RL,
  OL = W(Rt)(({ theme: e }) => ({
    borderRadius: e.shape.borderRadius,
    width: "100%",
    aspectRatio: 1,
    boxShadow: "3px 4px 8px #888888",
    overflow: "clip",
    color: e.palette.primary.light,
    backgroundColor: e.palette.primary.main,
  }));
function P1(e) {
  const { t } = Qt(),
    n = e.image.toLowerCase();
  return S.jsx(an, {
    sx: { flexGrow: 1, width: "100%", maxWidth: "30%", minWidth: 90 },
    children: S.jsx(nl, {
      to: `/${e.description[0].slug}`,
      children: S.jsxs(OL, {
        children: [
          S.jsx(an, {
            position: "relative",
            flexGrow: 1,
            children: S.jsx("img", {
              className: "food-image",
              src: `/images/${n}.png`,
              alt: `image of ${n}`,
            }),
          }),
          S.jsx(an, {
            position: "relative",
            height: "20%",
            sx: { textAlign: "center" },
            children: S.jsx(Ke, {
              top: 0,
              fontSize: "max(1rem, min(4.5vw, 3rem))",
              fontWeight: 400,
              sx: {
                p: "0.25em",
                transform: "translateY(-20%)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
              children: t(e.description[0].name),
            }),
          }),
        ],
      }),
    }),
  });
}
const IL = (e) => {
  const n = e.foodList.map((r, o) => S.jsx(P1, { ...r }, o));
  return S.jsx(Rt, {
    direction: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "8em",
    children: n,
  });
};
function LL() {
  const [e, t] = _t.useContext(Af),
    { selectedMonthNum: n } = Nf(),
    { t: r } = Qt(),
    o = Number(n) - 1,
    i = { Fruits: [], Veggies: [] },
    s = ws();
  y.useEffect(() => {
    if (o < 0 || o > 11) return s("/NotFound");
  });
  const a = [];
  e.forEach((v) => {
    v.season[o] === !0 && a.push(v);
  });
  const l = (v, g) => v.filter((_) => _.category === g);
  (i.Fruits = l(a, "Fruits")), (i.Veggies = l(a, "Veggies"));
  const u = i.Fruits.length,
    c = i.Veggies.length,
    [f, d] = y.useState("Fruits"),
    x = (v) => {
      d(v);
    };
  return S.jsxs(Rt, {
    height: "100%",
    children: [
      S.jsxs(TL, {
        value: f,
        onChange: (v, g) => x(g),
        variant: "fullWidth",
        sx: { fontWeight: 700 },
        "aria-label": "tabs for the selection of fruits, vegetables or others",
        children: [
          S.jsx(Ug, {
            label: S.jsxs("span", {
              children: [
                S.jsx(Pg, { label: u, sx: { mr: 1 }, size: "small" }),
                r("FoodOfTheMonth_fruitsTabText"),
              ],
            }),
            value: "Fruits",
          }),
          S.jsx(Ug, {
            label: S.jsxs("span", {
              children: [
                S.jsx(Pg, { label: c, sx: { mr: 1 }, size: "small" }),
                r("FoodOfTheMonth_vegetablesTabText"),
              ],
            }),
            value: "Veggies",
          }),
        ],
      }),
      S.jsx(an, {
        flexGrow: 1,
        my: 2,
        overflow: "auto",
        children: S.jsx(IL, { foodList: i[f] }),
      }),
    ],
  });
}
function ML() {
  const [e, t] = _t.useContext(Af),
    { id: n } = Nf(),
    { t: r } = Qt(),
    o = e.find((g) => g.description[0].slug === n),
    i = [];
  let s = "";
  if (o === void 0) return S.jsx(S.Fragment, {});
  const a = ws();
  y.useEffect(() => {
    if (!o) return a("/NotFound");
  });
  const l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  let u = 0;
  for (let g of o.season) g === !0 && u++;
  for (let g = 0; g < l.length; g++)
    o &&
      o.season[g] === !0 &&
      (i.push(l[g]),
      (s = "FoodPage_notInSeasonText"),
      i.includes(l[Xy - 1]) &&
        (u != 12
          ? (s = "FoodPage_inSeasonText")
          : (s = "FoodPage_inSeasonAllYear")));
  const c = o ? o.image.toLowerCase() : "",
    f = (g) =>
      i.includes(g)
        ? {
            backgroundColor: "primary.main",
            color: "primary.light",
            boxShadow: "0 2px 4px #888888",
            paddingBlock: "1em",
          }
        : {
            color: "secondary.light",
            backgroundColor: "primary.light",
            opacity: ".5",
            paddingBlock: "1em",
          },
    d = W(nl)(({ theme: g }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      padding: 2,
      width: "25%",
      [g.breakpoints.up("md")]: { fontSize: "1.125rem", fontWeight: "400" },
    })),
    x = W(an)(() => ({
      position: "relative",
      overflow: "hidden",
      width: "15%",
      minWidth: 100,
      aspectRatio: 1,
      mx: "0.5em",
    })),
    v = () =>
      l.map((g) => {
        let _ = Number(g) + 1;
        return S.jsx(
          d,
          {
            sx: { ...f(g), m: 1 },
            to: `/month/${_}`,
            children: S.jsx(Ke, { children: r(`month_${g}`) }),
          },
          g
        );
      });
  return S.jsxs(Rt, {
    width: "100%",
    height: "100%",
    overflow: "auto",
    my: 1.5,
    children: [
      S.jsxs(Rt, {
        direction: "row",
        width: "100%",
        children: [
          S.jsx(x, {
            borderRadius: 1,
            children: S.jsx("img", {
              className: "food-image",
              src: `/images/${c}.png`,
              alt: `photo of ${c}`,
            }),
          }),
          S.jsxs(Rt, {
            px: 2,
            sx: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            children: [
              S.jsx(Ke, {
                variant: "h4",
                sx: { fontWeight: 700 },
                color: "secondary.main",
                children: r(o ? o.description[0].name : "FOOD NOT FOUND"),
              }),
              S.jsx(Ke, {
                fontWeight: 700,
                color:
                  s === "FoodPage_inSeasonText"
                    ? "secondary.main"
                    : "primary.main",
                children: r(s),
              }),
            ],
          }),
        ],
      }),
      S.jsx(Ke, {
        variant: "h5",
        mt: 3,
        sx: { fontWeight: 700 },
        color: "secondary.dark",
        children: r("FoodPage_monthsInSeason"),
      }),
      S.jsx(Rt, {
        direction: "row",
        flexWrap: "wrap",
        py: 2,
        justifyContent: "space-around",
        children: v(),
      }),
    ],
  });
}
function Jn(e) {
  return Array.isArray ? Array.isArray(e) : T1(e) === "[object Array]";
}
const NL = 1 / 0;
function AL(e) {
  if (typeof e == "string") return e;
  let t = e + "";
  return t == "0" && 1 / e == -NL ? "-0" : t;
}
function FL(e) {
  return e == null ? "" : AL(e);
}
function Tn(e) {
  return typeof e == "string";
}
function $1(e) {
  return typeof e == "number";
}
function DL(e) {
  return e === !0 || e === !1 || (jL(e) && T1(e) == "[object Boolean]");
}
function R1(e) {
  return typeof e == "object";
}
function jL(e) {
  return R1(e) && e !== null;
}
function Wt(e) {
  return e != null;
}
function lc(e) {
  return !e.trim().length;
}
function T1(e) {
  return e == null
    ? e === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(e);
}
const BL = "Incorrect 'index' type",
  zL = (e) => `Invalid value for key ${e}`,
  UL = (e) => `Pattern length exceeds max of ${e}.`,
  WL = (e) => `Missing ${e} property in key`,
  HL = (e) => `Property 'weight' in key '${e}' must be a positive integer`,
  Kg = Object.prototype.hasOwnProperty;
class VL {
  constructor(t) {
    (this._keys = []), (this._keyMap = {});
    let n = 0;
    t.forEach((r) => {
      let o = O1(r);
      (n += o.weight),
        this._keys.push(o),
        (this._keyMap[o.id] = o),
        (n += o.weight);
    }),
      this._keys.forEach((r) => {
        r.weight /= n;
      });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function O1(e) {
  let t = null,
    n = null,
    r = null,
    o = 1,
    i = null;
  if (Tn(e) || Jn(e)) (r = e), (t = Gg(e)), (n = _d(e));
  else {
    if (!Kg.call(e, "name")) throw new Error(WL("name"));
    const s = e.name;
    if (((r = s), Kg.call(e, "weight") && ((o = e.weight), o <= 0)))
      throw new Error(HL(s));
    (t = Gg(s)), (n = _d(s)), (i = e.getFn);
  }
  return { path: t, id: n, weight: o, src: r, getFn: i };
}
function Gg(e) {
  return Jn(e) ? e : e.split(".");
}
function _d(e) {
  return Jn(e) ? e.join(".") : e;
}
function KL(e, t) {
  let n = [],
    r = !1;
  const o = (i, s, a) => {
    if (Wt(i))
      if (!s[a]) n.push(i);
      else {
        let l = s[a];
        const u = i[l];
        if (!Wt(u)) return;
        if (a === s.length - 1 && (Tn(u) || $1(u) || DL(u))) n.push(FL(u));
        else if (Jn(u)) {
          r = !0;
          for (let c = 0, f = u.length; c < f; c += 1) o(u[c], s, a + 1);
        } else s.length && o(u, s, a + 1);
      }
  };
  return o(e, Tn(t) ? t.split(".") : t, 0), r ? n : n[0];
}
const GL = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  qL = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (e, t) =>
      e.score === t.score
        ? e.idx < t.idx
          ? -1
          : 1
        : e.score < t.score
        ? -1
        : 1,
  },
  YL = { location: 0, threshold: 0.6, distance: 100 },
  XL = {
    useExtendedSearch: !1,
    getFn: KL,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var ce = { ...qL, ...GL, ...YL, ...XL };
const QL = /[^ ]+/g;
function JL(e = 1, t = 3) {
  const n = new Map(),
    r = Math.pow(10, t);
  return {
    get(o) {
      const i = o.match(QL).length;
      if (n.has(i)) return n.get(i);
      const s = 1 / Math.pow(i, 0.5 * e),
        a = parseFloat(Math.round(s * r) / r);
      return n.set(i, a), a;
    },
    clear() {
      n.clear();
    },
  };
}
class vp {
  constructor({
    getFn: t = ce.getFn,
    fieldNormWeight: n = ce.fieldNormWeight,
  } = {}) {
    (this.norm = JL(n, 3)),
      (this.getFn = t),
      (this.isCreated = !1),
      this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    (this.keys = t),
      (this._keysMap = {}),
      t.forEach((n, r) => {
        this._keysMap[n.id] = r;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      Tn(this.docs[0])
        ? this.docs.forEach((t, n) => {
            this._addString(t, n);
          })
        : this.docs.forEach((t, n) => {
            this._addObject(t, n);
          }),
      this.norm.clear());
  }
  add(t) {
    const n = this.size();
    Tn(t) ? this._addString(t, n) : this._addObject(t, n);
  }
  removeAt(t) {
    this.records.splice(t, 1);
    for (let n = t, r = this.size(); n < r; n += 1) this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(t, n) {
    return t[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, n) {
    if (!Wt(t) || lc(t)) return;
    let r = { v: t, i: n, n: this.norm.get(t) };
    this.records.push(r);
  }
  _addObject(t, n) {
    let r = { i: n, $: {} };
    this.keys.forEach((o, i) => {
      let s = o.getFn ? o.getFn(t) : this.getFn(t, o.path);
      if (Wt(s)) {
        if (Jn(s)) {
          let a = [];
          const l = [{ nestedArrIndex: -1, value: s }];
          for (; l.length; ) {
            const { nestedArrIndex: u, value: c } = l.pop();
            if (Wt(c))
              if (Tn(c) && !lc(c)) {
                let f = { v: c, i: u, n: this.norm.get(c) };
                a.push(f);
              } else
                Jn(c) &&
                  c.forEach((f, d) => {
                    l.push({ nestedArrIndex: d, value: f });
                  });
          }
          r.$[i] = a;
        } else if (Tn(s) && !lc(s)) {
          let a = { v: s, n: this.norm.get(s) };
          r.$[i] = a;
        }
      }
    }),
      this.records.push(r);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function I1(
  e,
  t,
  { getFn: n = ce.getFn, fieldNormWeight: r = ce.fieldNormWeight } = {}
) {
  const o = new vp({ getFn: n, fieldNormWeight: r });
  return o.setKeys(e.map(O1)), o.setSources(t), o.create(), o;
}
function ZL(
  e,
  { getFn: t = ce.getFn, fieldNormWeight: n = ce.fieldNormWeight } = {}
) {
  const { keys: r, records: o } = e,
    i = new vp({ getFn: t, fieldNormWeight: n });
  return i.setKeys(r), i.setIndexRecords(o), i;
}
function la(
  e,
  {
    errors: t = 0,
    currentLocation: n = 0,
    expectedLocation: r = 0,
    distance: o = ce.distance,
    ignoreLocation: i = ce.ignoreLocation,
  } = {}
) {
  const s = t / e.length;
  if (i) return s;
  const a = Math.abs(r - n);
  return o ? s + a / o : a ? 1 : s;
}
function eM(e = [], t = ce.minMatchCharLength) {
  let n = [],
    r = -1,
    o = -1,
    i = 0;
  for (let s = e.length; i < s; i += 1) {
    let a = e[i];
    a && r === -1
      ? (r = i)
      : !a &&
        r !== -1 &&
        ((o = i - 1), o - r + 1 >= t && n.push([r, o]), (r = -1));
  }
  return e[i - 1] && i - r >= t && n.push([r, i - 1]), n;
}
const Nr = 32;
function tM(
  e,
  t,
  n,
  {
    location: r = ce.location,
    distance: o = ce.distance,
    threshold: i = ce.threshold,
    findAllMatches: s = ce.findAllMatches,
    minMatchCharLength: a = ce.minMatchCharLength,
    includeMatches: l = ce.includeMatches,
    ignoreLocation: u = ce.ignoreLocation,
  } = {}
) {
  if (t.length > Nr) throw new Error(UL(Nr));
  const c = t.length,
    f = e.length,
    d = Math.max(0, Math.min(r, f));
  let x = i,
    v = d;
  const g = a > 1 || l,
    _ = g ? Array(f) : [];
  let p;
  for (; (p = e.indexOf(t, v)) > -1; ) {
    let E = la(t, {
      currentLocation: p,
      expectedLocation: d,
      distance: o,
      ignoreLocation: u,
    });
    if (((x = Math.min(E, x)), (v = p + c), g)) {
      let b = 0;
      for (; b < c; ) (_[p + b] = 1), (b += 1);
    }
  }
  v = -1;
  let h = [],
    m = 1,
    C = c + f;
  const $ = 1 << (c - 1);
  for (let E = 0; E < c; E += 1) {
    let b = 0,
      w = C;
    for (; b < w; )
      la(t, {
        errors: E,
        currentLocation: d + w,
        expectedLocation: d,
        distance: o,
        ignoreLocation: u,
      }) <= x
        ? (b = w)
        : (C = w),
        (w = Math.floor((C - b) / 2 + b));
    C = w;
    let T = Math.max(1, d - w + 1),
      M = s ? f : Math.min(d + w, f) + c,
      N = Array(M + 2);
    N[M + 1] = (1 << E) - 1;
    for (let F = M; F >= T; F -= 1) {
      let P = F - 1,
        I = n[e.charAt(P)];
      if (
        (g && (_[P] = +!!I),
        (N[F] = ((N[F + 1] << 1) | 1) & I),
        E && (N[F] |= ((h[F + 1] | h[F]) << 1) | 1 | h[F + 1]),
        N[F] & $ &&
          ((m = la(t, {
            errors: E,
            currentLocation: P,
            expectedLocation: d,
            distance: o,
            ignoreLocation: u,
          })),
          m <= x))
      ) {
        if (((x = m), (v = P), v <= d)) break;
        T = Math.max(1, 2 * d - v);
      }
    }
    if (
      la(t, {
        errors: E + 1,
        currentLocation: d,
        expectedLocation: d,
        distance: o,
        ignoreLocation: u,
      }) > x
    )
      break;
    h = N;
  }
  const O = { isMatch: v >= 0, score: Math.max(0.001, m) };
  if (g) {
    const E = eM(_, a);
    E.length ? l && (O.indices = E) : (O.isMatch = !1);
  }
  return O;
}
function nM(e) {
  let t = {};
  for (let n = 0, r = e.length; n < r; n += 1) {
    const o = e.charAt(n);
    t[o] = (t[o] || 0) | (1 << (r - n - 1));
  }
  return t;
}
class L1 {
  constructor(
    t,
    {
      location: n = ce.location,
      threshold: r = ce.threshold,
      distance: o = ce.distance,
      includeMatches: i = ce.includeMatches,
      findAllMatches: s = ce.findAllMatches,
      minMatchCharLength: a = ce.minMatchCharLength,
      isCaseSensitive: l = ce.isCaseSensitive,
      ignoreLocation: u = ce.ignoreLocation,
    } = {}
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: r,
        distance: o,
        includeMatches: i,
        findAllMatches: s,
        minMatchCharLength: a,
        isCaseSensitive: l,
        ignoreLocation: u,
      }),
      (this.pattern = l ? t : t.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const c = (d, x) => {
        this.chunks.push({ pattern: d, alphabet: nM(d), startIndex: x });
      },
      f = this.pattern.length;
    if (f > Nr) {
      let d = 0;
      const x = f % Nr,
        v = f - x;
      for (; d < v; ) c(this.pattern.substr(d, Nr), d), (d += Nr);
      if (x) {
        const g = f - Nr;
        c(this.pattern.substr(g), g);
      }
    } else c(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: n, includeMatches: r } = this.options;
    if ((n || (t = t.toLowerCase()), this.pattern === t)) {
      let v = { isMatch: !0, score: 0 };
      return r && (v.indices = [[0, t.length - 1]]), v;
    }
    const {
      location: o,
      distance: i,
      threshold: s,
      findAllMatches: a,
      minMatchCharLength: l,
      ignoreLocation: u,
    } = this.options;
    let c = [],
      f = 0,
      d = !1;
    this.chunks.forEach(({ pattern: v, alphabet: g, startIndex: _ }) => {
      const {
        isMatch: p,
        score: h,
        indices: m,
      } = tM(t, v, g, {
        location: o + _,
        distance: i,
        threshold: s,
        findAllMatches: a,
        minMatchCharLength: l,
        includeMatches: r,
        ignoreLocation: u,
      });
      p && (d = !0), (f += h), p && m && (c = [...c, ...m]);
    });
    let x = { isMatch: d, score: d ? f / this.chunks.length : 1 };
    return d && r && (x.indices = c), x;
  }
}
class Rr {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return qg(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return qg(t, this.singleRegex);
  }
  search() {}
}
function qg(e, t) {
  const n = e.match(t);
  return n ? n[1] : null;
}
class rM extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const n = t === this.pattern;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class oM extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const r = t.indexOf(this.pattern) === -1;
    return { isMatch: r, score: r ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class iM extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const n = t.startsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class sM extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const n = !t.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class aM extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const n = t.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [t.length - this.pattern.length, t.length - 1],
    };
  }
}
class lM extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const n = !t.endsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class M1 extends Rr {
  constructor(
    t,
    {
      location: n = ce.location,
      threshold: r = ce.threshold,
      distance: o = ce.distance,
      includeMatches: i = ce.includeMatches,
      findAllMatches: s = ce.findAllMatches,
      minMatchCharLength: a = ce.minMatchCharLength,
      isCaseSensitive: l = ce.isCaseSensitive,
      ignoreLocation: u = ce.ignoreLocation,
    } = {}
  ) {
    super(t),
      (this._bitapSearch = new L1(t, {
        location: n,
        threshold: r,
        distance: o,
        includeMatches: i,
        findAllMatches: s,
        minMatchCharLength: a,
        isCaseSensitive: l,
        ignoreLocation: u,
      }));
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class N1 extends Rr {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let n = 0,
      r;
    const o = [],
      i = this.pattern.length;
    for (; (r = t.indexOf(this.pattern, n)) > -1; )
      (n = r + i), o.push([r, n - 1]);
    const s = !!o.length;
    return { isMatch: s, score: s ? 0 : 1, indices: o };
  }
}
const Ed = [rM, N1, iM, sM, lM, aM, oM, M1],
  Yg = Ed.length,
  uM = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  cM = "|";
function dM(e, t = {}) {
  return e.split(cM).map((n) => {
    let r = n
        .trim()
        .split(uM)
        .filter((i) => i && !!i.trim()),
      o = [];
    for (let i = 0, s = r.length; i < s; i += 1) {
      const a = r[i];
      let l = !1,
        u = -1;
      for (; !l && ++u < Yg; ) {
        const c = Ed[u];
        let f = c.isMultiMatch(a);
        f && (o.push(new c(f, t)), (l = !0));
      }
      if (!l)
        for (u = -1; ++u < Yg; ) {
          const c = Ed[u];
          let f = c.isSingleMatch(a);
          if (f) {
            o.push(new c(f, t));
            break;
          }
        }
    }
    return o;
  });
}
const fM = new Set([M1.type, N1.type]);
class pM {
  constructor(
    t,
    {
      isCaseSensitive: n = ce.isCaseSensitive,
      includeMatches: r = ce.includeMatches,
      minMatchCharLength: o = ce.minMatchCharLength,
      ignoreLocation: i = ce.ignoreLocation,
      findAllMatches: s = ce.findAllMatches,
      location: a = ce.location,
      threshold: l = ce.threshold,
      distance: u = ce.distance,
    } = {}
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: n,
        includeMatches: r,
        minMatchCharLength: o,
        findAllMatches: s,
        ignoreLocation: i,
        location: a,
        threshold: l,
        distance: u,
      }),
      (this.pattern = n ? t : t.toLowerCase()),
      (this.query = dM(this.pattern, this.options));
  }
  static condition(t, n) {
    return n.useExtendedSearch;
  }
  searchIn(t) {
    const n = this.query;
    if (!n) return { isMatch: !1, score: 1 };
    const { includeMatches: r, isCaseSensitive: o } = this.options;
    t = o ? t : t.toLowerCase();
    let i = 0,
      s = [],
      a = 0;
    for (let l = 0, u = n.length; l < u; l += 1) {
      const c = n[l];
      (s.length = 0), (i = 0);
      for (let f = 0, d = c.length; f < d; f += 1) {
        const x = c[f],
          { isMatch: v, indices: g, score: _ } = x.search(t);
        if (v) {
          if (((i += 1), (a += _), r)) {
            const p = x.constructor.type;
            fM.has(p) ? (s = [...s, ...g]) : s.push(g);
          }
        } else {
          (a = 0), (i = 0), (s.length = 0);
          break;
        }
      }
      if (i) {
        let f = { isMatch: !0, score: a / i };
        return r && (f.indices = s), f;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const Pd = [];
function hM(...e) {
  Pd.push(...e);
}
function $d(e, t) {
  for (let n = 0, r = Pd.length; n < r; n += 1) {
    let o = Pd[n];
    if (o.condition(e, t)) return new o(e, t);
  }
  return new L1(e, t);
}
const ul = { AND: "$and", OR: "$or" },
  Rd = { PATH: "$path", PATTERN: "$val" },
  Td = (e) => !!(e[ul.AND] || e[ul.OR]),
  gM = (e) => !!e[Rd.PATH],
  mM = (e) => !Jn(e) && R1(e) && !Td(e),
  Xg = (e) => ({ [ul.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function A1(e, t, { auto: n = !0 } = {}) {
  const r = (o) => {
    let i = Object.keys(o);
    const s = gM(o);
    if (!s && i.length > 1 && !Td(o)) return r(Xg(o));
    if (mM(o)) {
      const l = s ? o[Rd.PATH] : i[0],
        u = s ? o[Rd.PATTERN] : o[l];
      if (!Tn(u)) throw new Error(zL(l));
      const c = { keyId: _d(l), pattern: u };
      return n && (c.searcher = $d(u, t)), c;
    }
    let a = { children: [], operator: i[0] };
    return (
      i.forEach((l) => {
        const u = o[l];
        Jn(u) &&
          u.forEach((c) => {
            a.children.push(r(c));
          });
      }),
      a
    );
  };
  return Td(e) || (e = Xg(e)), r(e);
}
function vM(e, { ignoreFieldNorm: t = ce.ignoreFieldNorm }) {
  e.forEach((n) => {
    let r = 1;
    n.matches.forEach(({ key: o, norm: i, score: s }) => {
      const a = o ? o.weight : null;
      r *= Math.pow(s === 0 && a ? Number.EPSILON : s, (a || 1) * (t ? 1 : i));
    }),
      (n.score = r);
  });
}
function yM(e, t) {
  const n = e.matches;
  (t.matches = []),
    Wt(n) &&
      n.forEach((r) => {
        if (!Wt(r.indices) || !r.indices.length) return;
        const { indices: o, value: i } = r;
        let s = { indices: o, value: i };
        r.key && (s.key = r.key.src),
          r.idx > -1 && (s.refIndex = r.idx),
          t.matches.push(s);
      });
}
function xM(e, t) {
  t.score = e.score;
}
function bM(
  e,
  t,
  {
    includeMatches: n = ce.includeMatches,
    includeScore: r = ce.includeScore,
  } = {}
) {
  const o = [];
  return (
    n && o.push(yM),
    r && o.push(xM),
    e.map((i) => {
      const { idx: s } = i,
        a = { item: t[s], refIndex: s };
      return (
        o.length &&
          o.forEach((l) => {
            l(i, a);
          }),
        a
      );
    })
  );
}
class si {
  constructor(t, n = {}, r) {
    (this.options = { ...ce, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new VL(this.options.keys)),
      this.setCollection(t, r);
  }
  setCollection(t, n) {
    if (((this._docs = t), n && !(n instanceof vp))) throw new Error(BL);
    this._myIndex =
      n ||
      I1(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(t) {
    Wt(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const n = [];
    for (let r = 0, o = this._docs.length; r < o; r += 1) {
      const i = this._docs[r];
      t(i, r) && (this.removeAt(r), (r -= 1), (o -= 1), n.push(i));
    }
    return n;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: n = -1 } = {}) {
    const {
      includeMatches: r,
      includeScore: o,
      shouldSort: i,
      sortFn: s,
      ignoreFieldNorm: a,
    } = this.options;
    let l = Tn(t)
      ? Tn(this._docs[0])
        ? this._searchStringList(t)
        : this._searchObjectList(t)
      : this._searchLogical(t);
    return (
      vM(l, { ignoreFieldNorm: a }),
      i && l.sort(s),
      $1(n) && n > -1 && (l = l.slice(0, n)),
      bM(l, this._docs, { includeMatches: r, includeScore: o })
    );
  }
  _searchStringList(t) {
    const n = $d(t, this.options),
      { records: r } = this._myIndex,
      o = [];
    return (
      r.forEach(({ v: i, i: s, n: a }) => {
        if (!Wt(i)) return;
        const { isMatch: l, score: u, indices: c } = n.searchIn(i);
        l &&
          o.push({
            item: i,
            idx: s,
            matches: [{ score: u, value: i, norm: a, indices: c }],
          });
      }),
      o
    );
  }
  _searchLogical(t) {
    const n = A1(t, this.options),
      r = (a, l, u) => {
        if (!a.children) {
          const { keyId: f, searcher: d } = a,
            x = this._findMatches({
              key: this._keyStore.get(f),
              value: this._myIndex.getValueForItemAtKeyId(l, f),
              searcher: d,
            });
          return x && x.length ? [{ idx: u, item: l, matches: x }] : [];
        }
        const c = [];
        for (let f = 0, d = a.children.length; f < d; f += 1) {
          const x = a.children[f],
            v = r(x, l, u);
          if (v.length) c.push(...v);
          else if (a.operator === ul.AND) return [];
        }
        return c;
      },
      o = this._myIndex.records,
      i = {},
      s = [];
    return (
      o.forEach(({ $: a, i: l }) => {
        if (Wt(a)) {
          let u = r(n, a, l);
          u.length &&
            (i[l] || ((i[l] = { idx: l, item: a, matches: [] }), s.push(i[l])),
            u.forEach(({ matches: c }) => {
              i[l].matches.push(...c);
            }));
        }
      }),
      s
    );
  }
  _searchObjectList(t) {
    const n = $d(t, this.options),
      { keys: r, records: o } = this._myIndex,
      i = [];
    return (
      o.forEach(({ $: s, i: a }) => {
        if (!Wt(s)) return;
        let l = [];
        r.forEach((u, c) => {
          l.push(...this._findMatches({ key: u, value: s[c], searcher: n }));
        }),
          l.length && i.push({ idx: a, item: s, matches: l });
      }),
      i
    );
  }
  _findMatches({ key: t, value: n, searcher: r }) {
    if (!Wt(n)) return [];
    let o = [];
    if (Jn(n))
      n.forEach(({ v: i, i: s, n: a }) => {
        if (!Wt(i)) return;
        const { isMatch: l, score: u, indices: c } = r.searchIn(i);
        l &&
          o.push({ score: u, key: t, value: i, idx: s, norm: a, indices: c });
      });
    else {
      const { v: i, n: s } = n,
        { isMatch: a, score: l, indices: u } = r.searchIn(i);
      a && o.push({ score: l, key: t, value: i, norm: s, indices: u });
    }
    return o;
  }
}
si.version = "6.6.2";
si.createIndex = I1;
si.parseIndex = ZL;
si.config = ce;
si.parseQuery = A1;
hM(pM);
const ue = (e) => typeof e == "string",
  Ci = () => {
    let e, t;
    const n = new Promise((r, o) => {
      (e = r), (t = o);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  Qg = (e) => (e == null ? "" : "" + e),
  SM = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  CM = /###/g,
  Jg = (e) => (e && e.indexOf("###") > -1 ? e.replace(CM, ".") : e),
  Zg = (e) => !e || ue(e),
  Wi = (e, t, n) => {
    const r = ue(t) ? t.split(".") : t;
    let o = 0;
    for (; o < r.length - 1; ) {
      if (Zg(e)) return {};
      const i = Jg(r[o]);
      !e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o;
    }
    return Zg(e) ? {} : { obj: e, k: Jg(r[o]) };
  },
  em = (e, t, n) => {
    const { obj: r, k: o } = Wi(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[o] = n;
      return;
    }
    let i = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      a = Wi(e, s, Object);
    for (; a.obj === void 0 && s.length; )
      (i = `${s[s.length - 1]}.${i}`),
        (s = s.slice(0, s.length - 1)),
        (a = Wi(e, s, Object)),
        a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${i}`] = n;
  },
  wM = (e, t, n, r) => {
    const { obj: o, k: i } = Wi(e, t, Object);
    (o[i] = o[i] || []), o[i].push(n);
  },
  cl = (e, t) => {
    const { obj: n, k: r } = Wi(e, t);
    if (n) return n[r];
  },
  kM = (e, t, n) => {
    const r = cl(e, n);
    return r !== void 0 ? r : cl(t, n);
  },
  F1 = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? ue(e[r]) ||
            e[r] instanceof String ||
            ue(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : F1(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  so = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _M = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const EM = (e) => (ue(e) ? e.replace(/[&<>"'\/]/g, (t) => _M[t]) : e);
class PM {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const $M = [" ", ",", "?", "!", ";"],
  RM = new PM(20),
  TM = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = $M.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0) return !0;
    const o = RM.getRegExp(
      `(${r.map((s) => (s === "?" ? "\\?" : s)).join("|")})`
    );
    let i = !o.test(e);
    if (!i) {
      const s = e.indexOf(n);
      s > 0 && !o.test(e.substring(0, s)) && (i = !0);
    }
    return i;
  },
  Od = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let o = e;
    for (let i = 0; i < r.length; ) {
      if (!o || typeof o != "object") return;
      let s,
        a = "";
      for (let l = i; l < r.length; ++l)
        if ((l !== i && (a += n), (a += r[l]), (s = o[a]), s !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof s) > -1 &&
            l < r.length - 1
          )
            continue;
          i += l - i + 1;
          break;
        }
      o = s;
    }
    return o;
  },
  dl = (e) => e && e.replace("_", "-"),
  OM = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class fl {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || OM),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (ue(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new fl(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new fl(this.logger, t)
    );
  }
}
var On = new fl();
class bu {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const o = this.observers[r].get(n) || 0;
        this.observers[r].set(n, o + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [a, l] = s;
        for (let u = 0; u < l; u++) a(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((s) => {
          let [a, l] = s;
          for (let u = 0; u < l; u++) a.apply(a, [t, ...r]);
        });
  }
}
class tm extends bu {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      s =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1
      ? (a = t.split("."))
      : ((a = [t, n]),
        r &&
          (Array.isArray(r)
            ? a.push(...r)
            : ue(r) && i
            ? a.push(...r.split(i))
            : a.push(r)));
    const l = cl(this.data, a);
    return (
      !l &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = a[0]), (n = a[1]), (r = a.slice(2).join("."))),
      l || !s || !ue(r)
        ? l
        : Od(this.data && this.data[t] && this.data[t][n], r, i)
    );
  }
  addResource(t, n, r, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)),
      t.indexOf(".") > -1 && ((a = t.split(".")), (o = n), (n = a[1])),
      this.addNamespaces(n),
      em(this.data, a, o),
      i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in r)
      (ue(r[i]) || Array.isArray(r[i])) &&
        this.addResource(t, n, i, r[i], { silent: !0 });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      a = [t, n];
    t.indexOf(".") > -1 && ((a = t.split(".")), (o = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let l = cl(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      o ? F1(l, r, i) : (l = { ...l, ...r }),
      em(this.data, a, l),
      s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (o) => n[o] && Object.keys(n[o]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var D1 = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        this.processors[i] && (t = this.processors[i].process(t, n, r, o));
      }),
      t
    );
  },
};
const nm = {};
class pl extends bu {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      SM(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = On.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !TM(t, r, o);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: ue(i) ? [i] : i };
      const u = t.split(r);
      (r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
        (i = u.shift()),
        (t = u.join(o));
    }
    return { key: t, namespaces: ue(i) ? [i] : i };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const o =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      l = a[a.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const C = n.nsSeparator || this.options.nsSeparator;
        return o
          ? {
              res: `${l}${C}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${C}${s}`;
      }
      return o
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const f = this.resolve(t, n);
    let d = f && f.res;
    const x = (f && f.usedKey) || s,
      v = (f && f.exactUsedKey) || s,
      g = Object.prototype.toString.apply(d),
      _ = ["[object Number]", "[object Function]", "[object RegExp]"],
      p = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject,
      m = !ue(d) && typeof d != "boolean" && typeof d != "number";
    if (h && d && m && _.indexOf(g) < 0 && !(ue(p) && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const C = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(x, d, { ...n, ns: a })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return o
          ? ((f.res = C), (f.usedParams = this.getUsedParamsDetails(n)), f)
          : C;
      }
      if (i) {
        const C = Array.isArray(d),
          $ = C ? [] : {},
          O = C ? v : x;
        for (const E in d)
          if (Object.prototype.hasOwnProperty.call(d, E)) {
            const b = `${O}${i}${E}`;
            ($[E] = this.translate(b, { ...n, joinArrays: !1, ns: a })),
              $[E] === b && ($[E] = d[E]);
          }
        d = $;
      }
    } else if (h && ue(p) && Array.isArray(d))
      (d = d.join(p)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let C = !1,
        $ = !1;
      const O = n.count !== void 0 && !ue(n.count),
        E = pl.hasDefaultValue(n),
        b = O ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        w =
          n.ordinal && O
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        T =
          O &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        M =
          (T && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${b}`] ||
          n[`defaultValue${w}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && E && ((C = !0), (d = M)),
        this.isValidLookup(d) || (($ = !0), (d = s));
      const D =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          $
            ? void 0
            : d,
        F = E && M !== d && this.options.updateMissing;
      if ($ || C || F) {
        if (
          (this.logger.log(F ? "updateKey" : "missingKey", u, l, s, F ? M : d),
          i)
        ) {
          const R = this.resolve(s, { ...n, keySeparator: !1 });
          R &&
            R.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let P = [];
        const I = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && I && I[0])
          for (let R = 0; R < I.length; R++) P.push(I[R]);
        else
          this.options.saveMissingTo === "all"
            ? (P = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : P.push(n.lng || this.language);
        const A = (R, L, j) => {
          const V = E && j !== d ? j : D;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(R, l, L, V, F, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(R, l, L, V, F, n),
            this.emit("missingKey", R, l, L, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && O
            ? P.forEach((R) => {
                const L = this.pluralResolver.getSuffixes(R, n);
                T &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  L.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  L.push(`${this.options.pluralSeparator}zero`),
                  L.forEach((j) => {
                    A([R], s + j, n[`defaultValue${j}`] || M);
                  });
              })
            : A(P, s, M));
      }
      (d = this.extendTranslation(d, t, n, f, r)),
        $ &&
          d === s &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${l}:${s}`),
        ($ || C) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s,
                C ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return o
      ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(n)), f)
      : d;
  }
  extendTranslation(t, n, r, o, i) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        ue(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && !ue(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(
          t,
          f,
          r.lng || this.language || o.usedLng,
          r
        )),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          x = d && d.length;
        c < x && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        o &&
        o.res &&
        (r.lng = this.language || o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, x = new Array(d), v = 0;
                v < d;
                v++
              )
                x[v] = arguments[v];
              return i && i[0] === x[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${x[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...x, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = ue(a) ? [a] : a;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = D1.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      s,
      a;
    return (
      ue(t) && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        o = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && !ue(n.count),
          x =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (ue(n.context) || typeof n.context == "number") &&
            n.context !== "",
          g = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        f.forEach((_) => {
          this.isValidLookup(r) ||
            ((a = _),
            !nm[`${g[0]}-${_}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((nm[`${g[0]}-${_}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${g.join(
                  ", "
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            g.forEach((p) => {
              if (this.isValidLookup(r)) return;
              s = p;
              const h = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, p, _, n);
              else {
                let C;
                d && (C = this.pluralResolver.getSuffix(p, n.count, n));
                const $ = `${this.options.pluralSeparator}zero`,
                  O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (h.push(c + C),
                    n.ordinal &&
                      C.indexOf(O) === 0 &&
                      h.push(c + C.replace(O, this.options.pluralSeparator)),
                    x && h.push(c + $)),
                  v)
                ) {
                  const E = `${c}${this.options.contextSeparator}${n.context}`;
                  h.push(E),
                    d &&
                      (h.push(E + C),
                      n.ordinal &&
                        C.indexOf(O) === 0 &&
                        h.push(E + C.replace(O, this.options.pluralSeparator)),
                      x && h.push(E + $));
                }
              }
              let m;
              for (; (m = h.pop()); )
                this.isValidLookup(r) ||
                  ((i = m), (r = this.getResource(p, _, m, n)));
            }));
        });
      }),
      { res: r, usedKey: o, exactUsedKey: i, usedLng: s, usedNS: a }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && !ue(t.replace);
    let o = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !r)
    ) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const uc = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class rm {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = On.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = dl(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = dl(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (ue(t) && t.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let o = Intl.getCanonicalLocales(t)[0];
          if ((o && this.options.lowerCaseLng && (o = o.toLowerCase()), o))
            return o;
        } catch {}
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((o) => o.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = uc(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = uc(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = uc(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const o = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const o = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          n = this.options.supportedLngs.find((i) => {
            if (i === o) return i;
            if (
              !(i.indexOf("-") < 0 && o.indexOf("-") < 0) &&
              ((i.indexOf("-") > 0 &&
                o.indexOf("-") < 0 &&
                i.substring(0, i.indexOf("-")) === o) ||
                (i.indexOf(o) === 0 && o.length > 1))
            )
              return i;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      ue(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      o = [],
      i = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? o.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      ue(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            i(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            i(this.getLanguagePartFromCode(t)))
        : ue(t) && i(this.formatLanguageCode(t)),
      r.forEach((s) => {
        o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
      }),
      o
    );
  }
}
let IM = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  LM = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const MM = ["v1", "v2", "v3"],
  NM = ["v4"],
  om = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  AM = () => {
    const e = {};
    return (
      IM.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: LM[t.fc] };
        });
      }),
      e
    );
  };
class FM {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = On.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        NM.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = AM()),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const r = dl(t === "dev" ? "en" : t),
        o = n.ordinal ? "ordinal" : "cardinal",
        i = JSON.stringify({ cleanedCode: r, type: o });
      if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
      let s;
      try {
        s = new Intl.PluralRules(r, { type: o });
      } catch {
        if (!t.match(/-|_/)) return;
        const l = this.languageUtils.getLanguagePartFromCode(t);
        s = this.getRule(l, n);
      }
      return (this.pluralRulesCache[i] = s), s;
    }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => om[o] - om[i])
            .map(
              (o) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${o}`
            )
        : r.numbers.map((o) => this.getSuffix(t, o, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${o.select(n)}`
        : this.getSuffixRetroCompatible(o, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let o = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = "plural") : o === 1 && (o = ""));
    const i = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString();
    return this.options.compatibilityJSON === "v1"
      ? o === 1
        ? ""
        : typeof o == "number"
        ? `_plural_${o.toString()}`
        : i()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? i()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !MM.includes(this.options.compatibilityJSON);
  }
}
const im = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = kM(e, t, n);
    return (
      !i &&
        o &&
        ue(n) &&
        ((i = Od(e, n, r)), i === void 0 && (i = Od(t, n, r))),
      i
    );
  },
  cc = (e) => e.replace(/\$/g, "$$$$");
class DM {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = On.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: x,
      nestingSuffix: v,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: _,
      maxReplaces: p,
      alwaysFormat: h,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : EM),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? so(i) : s || "{{"),
      (this.suffix = a ? so(a) : l || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = c ? "" : f || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
      (this.nestingPrefix = d ? so(d) : x || so("$t(")),
      (this.nestingSuffix = v ? so(v) : g || so(")")),
      (this.nestingOptionsSeparator = _ || ","),
      (this.maxReplaces = p || 1e3),
      (this.alwaysFormat = h !== void 0 ? h : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, o) {
    let i, s, a;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (x) => {
        if (x.indexOf(this.formatSeparator) < 0) {
          const p = im(
            n,
            l,
            x,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(p, void 0, r, { ...o, ...n, interpolationkey: x })
            : p;
        }
        const v = x.split(this.formatSeparator),
          g = v.shift().trim(),
          _ = v.join(this.formatSeparator).trim();
        return this.format(
          im(
            n,
            l,
            g,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          _,
          r,
          { ...o, ...n, interpolationkey: g }
        );
      };
    this.resetRegExp();
    const c =
        (o && o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (x) => cc(x) },
        {
          regex: this.regexp,
          safeValue: (x) => (this.escapeValue ? cc(this.escape(x)) : cc(x)),
        },
      ].forEach((x) => {
        for (a = 0; (i = x.regex.exec(t)); ) {
          const v = i[1].trim();
          if (((s = u(v)), s === void 0))
            if (typeof c == "function") {
              const _ = c(t, i, o);
              s = ue(_) ? _ : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, v)) s = "";
            else if (f) {
              s = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`
              ),
                (s = "");
          else !ue(s) && !this.useRawValueToEscape && (s = Qg(s));
          const g = x.safeValue(s);
          if (
            ((t = t.replace(i[0], g)),
            f
              ? ((x.regex.lastIndex += s.length),
                (x.regex.lastIndex -= i[0].length))
              : (x.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      s;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      (l = f[0]), (d = this.interpolate(d, s));
      const x = d.match(/'/g),
        v = d.match(/"/g);
      ((x && x.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (s = JSON.parse(d)), u && (s = { ...u, ...s });
      } catch (g) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            g
          ),
          `${l}${c}${d}`
        );
      }
      return (
        s.defaultValue &&
          s.defaultValue.indexOf(this.prefix) > -1 &&
          delete s.defaultValue,
        l
      );
    };
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (s = { ...r }),
        (s = s.replace && !ue(s.replace) ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let u = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const c = o[1].split(this.formatSeparator).map((f) => f.trim());
        (o[1] = c.shift()), (l = c), (u = !0);
      }
      if (((i = n(a.call(this, o[1].trim(), s), s)), i && o[0] === t && !ue(i)))
        return i;
      ue(i) || (i = Qg(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = "")),
        u &&
          (i = l.reduce(
            (c, f) =>
              this.format(c, f, r.lng, { ...r, interpolationkey: o[1].trim() }),
            i.trim()
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const jM = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const o = r[1].substring(0, r[1].length - 1);
      t === "currency" && o.indexOf(":") < 0
        ? n.currency || (n.currency = o.trim())
        : t === "relativetime" && o.indexOf(":") < 0
        ? n.range || (n.range = o.trim())
        : o.split(";").forEach((s) => {
            if (s) {
              const [a, ...l] = s.split(":"),
                u = l
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                c = a.trim();
              n[c] || (n[c] = u),
                u === "false" && (n[c] = !1),
                u === "true" && (n[c] = !0),
                isNaN(u) || (n[c] = parseInt(u, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  ao = (e) => {
    const t = {};
    return (n, r, o) => {
      let i = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = { ...i, [o.interpolationkey]: void 0 });
      const s = r + JSON.stringify(i);
      let a = t[s];
      return a || ((a = e(dl(r), o)), (t[s] = a)), a(n);
    };
  };
class BM {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = On.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: ao((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        currency: ao((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (i) => o.format(i);
        }),
        datetime: ao((n, r) => {
          const o = new Intl.DateTimeFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        relativetime: ao((n, r) => {
          const o = new Intl.RelativeTimeFormat(n, { ...r });
          return (i) => o.format(i, r.range || "day");
        }),
        list: ao((n, r) => {
          const o = new Intl.ListFormat(n, { ...r });
          return (i) => o.format(i);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = ao(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf("(") > 1 &&
      i[0].indexOf(")") < 0 &&
      i.find((a) => a.indexOf(")") > -1)
    ) {
      const a = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      const { formatName: u, formatOptions: c } = jM(l);
      if (this.formats[u]) {
        let f = a;
        try {
          const d =
              (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            x = d.locale || d.lng || o.locale || o.lng || r;
          f = this.formats[u](a, x, { ...c, ...o, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
const zM = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class UM extends bu {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = On.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {},
      s = {},
      a = {},
      l = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((f) => {
          const d = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? s[d] === void 0 && (s[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  s[d] === void 0 && (s[d] = !0),
                  i[d] === void 0 && (i[d] = !0),
                  l[f] === void 0 && (l[f] = !0)));
        }),
          c || (a[u] = !0);
      }),
      (Object.keys(i).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const o = t.split("|"),
      i = o[0],
      s = o[1];
    n && this.emit("failedLoading", i, s, n),
      !n &&
        r &&
        this.store.addResourceBundle(i, s, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((l) => {
      wM(l.loaded, [i], s),
        zM(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            a[u] || (a[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((f) => {
                a[u][f] === void 0 && (a[u][f] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, s);
          }, i);
          return;
        }
        s(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => a(null, c)).catch(a)
          : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        o && o()
      );
    ue(t) && (t = this.languageUtils.toResolveHierarchy(t)), ue(n) && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      o = r[0],
      i = r[1];
    this.read(o, i, "read", void 0, void 0, (s, a) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${o} failed`,
          s
        ),
        !s &&
          a &&
          this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a),
        this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = { ...s, isUpdate: i },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, o, l)) : (c = u(t, n, r, o)),
              c && typeof c.then == "function"
                ? c.then((f) => a(null, f)).catch(a)
                : a(null, c);
          } catch (c) {
            a(c);
          }
        else u(t, n, r, o, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const sm = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        ue(e[1]) && (t.defaultValue = e[1]),
        ue(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  am = (e) => (
    ue(e.ns) && (e.ns = [e.ns]),
    ue(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    ue(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  ua = () => {},
  WM = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class gs extends bu {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = am(t)),
      (this.services = {}),
      (this.logger = On),
      (this.modules = { external: [] }),
      WM(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (ue(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const o = sm();
    (this.options = { ...o, ...this.options, ...am(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...o.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (c) => (c ? (typeof c == "function" ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? On.init(i(this.modules.logger), this.options)
        : On.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = BM);
      const f = new rm(this.options);
      this.store = new tm(this.options.resources, this.options);
      const d = this.services;
      (d.logger = On),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new FM(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((d.formatter = i(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new DM(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new UM(
          i(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on("*", function (x) {
          for (
            var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), _ = 1;
            _ < v;
            _++
          )
            g[_ - 1] = arguments[_];
          t.emit(x, ...g);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = i(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = i(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new pl(this.services, this.options)),
        this.translator.on("*", function (x) {
          for (
            var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), _ = 1;
            _ < v;
            _++
          )
            g[_ - 1] = arguments[_];
          t.emit(x, ...g);
        }),
        this.modules.external.forEach((x) => {
          x.init && x.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ua),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const l = Ci(),
      u = () => {
        const c = (f, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            l.resolve(d),
            r(f, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ua;
    const o = ue(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o &&
        o.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const i = [],
        s = (a) => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
            u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
          });
        };
      o
        ? s(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => s(l)),
        this.options.preload && this.options.preload.forEach((a) => s(a)),
        this.services.backendConnector.load(i, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = Ci();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = ua),
      this.services.backendConnector.reload(t, n, (i) => {
        o.resolve(), r(i);
      }),
      o
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && D1.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const o = Ci();
    this.emit("languageChanging", t);
    const i = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      s = (l, u) => {
        u
          ? (i(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      a = (l) => {
        !t && !l && this.services.languageDetector && (l = []);
        const u = ue(l)
          ? l
          : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            s(c, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(t),
      o
    );
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function (s, a) {
      let l;
      if (typeof a != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2;
          f < u;
          f++
        )
          c[f - 2] = arguments[f];
        l = o.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else l = { ...a };
      (l.lng = l.lng || i.lng),
        (l.lngs = l.lngs || i.lngs),
        (l.ns = l.ns || i.ns),
        l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const d = o.options.keySeparator || ".";
      let x;
      return (
        l.keyPrefix && Array.isArray(s)
          ? (x = s.map((v) => `${l.keyPrefix}${d}${v}`))
          : (x = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s),
        o.t(x, l)
      );
    };
    return ue(t) ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!o || s(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Ci();
    return this.options.ns
      ? (ue(t) && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Ci();
    ue(t) && (t = [t]);
    const o = this.options.preload || [],
      i = t.filter(
        (s) =>
          o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s)
      );
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new rm(sm());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new gs(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ua;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: !0 },
      i = new gs(o);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ["store", "services", "language"].forEach((a) => {
        i[a] = this[a];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r &&
        ((i.store = new tm(this.store.data, o)),
        (i.services.resourceStore = i.store)),
      (i.translator = new pl(i.services, o)),
      i.translator.on("*", function (a) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c];
        i.emit(a, ...u);
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ft = gs.createInstance();
ft.createInstance = gs.createInstance;
ft.createInstance;
ft.dir;
ft.init;
ft.loadResources;
ft.reloadResources;
ft.use;
ft.changeLanguage;
ft.getFixedT;
ft.t;
ft.exists;
ft.setDefaultNamespace;
ft.hasLoadedNamespace;
ft.loadNamespaces;
ft.loadLanguages;
const lm = Dn(S.jsx("path", { d: "m14 7-5 5 5 5V7z" }), "ArrowLeft"),
  HM = Dn(S.jsx("path", { d: "m10 17 5-5-5-5v10z" }), "ArrowRight"),
  VM = Dn(
    S.jsx("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  KM = Dn(
    S.jsx("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }),
    "Menu"
  ),
  GM = Dn(
    S.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    }),
    "Search"
  );
function qM(e) {
  const { t } = Qt(),
    n = y.useRef();
  y.useEffect(() => {
    e.ifSearched === !1 && (n.current.value = "");
  });
  const r = (l) => {
      const u = o(e.food);
      e.onSearch(n.current.value, u), l.preventDefault();
    },
    o = (l) => {
      if (n.current.value === "") return l;
      const u = {
          threshold: 0.3,
          keys: [
            { name: "name-en", getFn: (x) => x.description[0].name },
            { name: "name-it", getFn: (x) => x.description[1].name },
          ],
        },
        c = new si(l, u),
        f = n.current.value.trim().toLowerCase(),
        d = {};
      return (d["name-" + ft.language] = f), c.search(d).map((x) => x.item);
    };
  function i() {
    return S.jsx(wd, {
      size: "large",
      edge: "start",
      color: "inherit",
      "aria-label": "open drawer",
      onClick: e.toggleDrawer,
      children: S.jsx(KM, {}),
    });
  }
  const s = W("div")(() => ({
      height: "100%",
      aspectRatio: 1,
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    })),
    a = W(xu)(({ theme: l }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: l.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${l.spacing(3)})`,
        transition: l.transitions.create("max-width"),
        width: "100%",
        maxWidth: "0ch",
        "&:focus": { maxWidth: "20ch" },
      },
    }));
  return S.jsx(Y$, {
    position: "static",
    sx: { mb: 1, backgroundColor: "secondary.light" },
    className: "margin-env-safe",
    children: S.jsxs(oL, {
      children: [
        i(),
        S.jsx(Ke, {
          variant: "subtitle1",
          component: "div",
          sx: { flexGrow: 0, marginRight: 2 },
          children: "Seasonal Food",
        }),
        S.jsxs(an, {
          position: "relative",
          marginLeft: "auto",
          borderRadius: ".5rem",
          bgcolor: "rgba(255,255,255,.1)",
          children: [
            S.jsx(s, {
              children: S.jsx(wd, {
                sx: { m: 0 },
                size: "large",
                edge: "start",
                color: "inherit",
                "aria-label": "open drawer",
                children: S.jsx(GM, {}),
              }),
            }),
            S.jsx("form", {
              onSubmit: (l) => r(l),
              children: S.jsx(
                a,
                {
                  placeholder: t("Header_searchBar"),
                  inputProps: { "aria-label": "search" },
                  inputRef: n,
                  id: "search-bar",
                },
                "searchInput"
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
const YM = y.forwardRef(function (t, n) {
  return S.jsx(u1, { direction: "up", ref: n, ...t });
});
function XM(e) {
  const {
      currentSearch: t,
      searchResults: n,
      ifSearched: r,
      closeModal: o,
    } = e,
    i = n.map((s, a) => S.jsx(P1, { ...s }, a));
  return S.jsxs(a1, {
    fullWidth: !0,
    maxWidth: "md",
    open: r,
    onClose: o,
    onClick: o,
    "aria-labelledby": "search results",
    "aria-describedby": "the results of your search are shown here",
    TransitionComponent: YM,
    children: [
      S.jsxs(Rt, {
        direction: "row",
        alignItems: "center",
        p: 2,
        children: [
          S.jsxs(Ke, {
            variant: "h5",
            component: "div",
            children: ["Search: ", t],
          }),
          S.jsx(wd, {
            sx: { ml: "auto" },
            edge: "start",
            color: "inherit",
            "aria-label": "close",
            children: S.jsx(VM, {}),
          }),
        ],
      }),
      S.jsx(an, {
        p: 2,
        children:
          n.length === 0
            ? S.jsx(an, {
                sx: { p: 2 },
                children: S.jsx(Ke, {
                  variant: "h6",
                  children: "ITEM NOT FOUND",
                }),
              })
            : S.jsx(Rt, {
                flexGrow: 1,
                direction: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 1.5,
                maxWidth: 1024,
                width: "100%",
                mx: "auto",
                children: i,
              }),
      }),
    ],
  });
}
function QM() {
  const { t: e, i18n: t } = Qt(),
    n = {
      en: { nativeName: "English" },
      it: { nativeName: "Italiano" },
      pt: { nativeName: "Português(BR)" },
    };
  return S.jsxs(p1, {
    sx: { width: "100%" },
    size: "small",
    children: [
      S.jsx(m1, { id: "select-lang-label", children: e("SelectLang_Text") }),
      S.jsx(E1, {
        labelId: "select-lang-label",
        id: "select-lang",
        value: t.resolvedLanguage,
        label: "Language",
        onChange: (r) => t.changeLanguage(r.target.value),
        children: Object.keys(n).map((r) =>
          S.jsx(
            S1,
            {
              selected: t.resolvedLanguage === r,
              value: r,
              children: n[r].nativeName,
            },
            r
          )
        ),
      }),
    ],
  });
}
function JM(e) {
  const { t } = Qt();
  return S.jsxs(Rt, {
    height: "100%",
    sx: {
      width: 250,
      textTransform: "uppercase",
      color: "#3e3e3e",
      fontWeight: "bold",
    },
    role: "presentation",
    children: [
      S.jsx(sa, {
        sx: { my: 1.5 },
        children: S.jsx(Ke, {
          variant: "h6",
          display: "block",
          gutterBottom: !0,
          sx: { m: 0 },
          children: "SEASONAL FOOD 🇮🇹",
        }),
      }),
      S.jsx(iT, {}),
      S.jsx(sa, {
        disablePadding: !0,
        children: S.jsx(oc, {
          onClick: () => e.handleClickOpen("about"),
          children: S.jsx(Ke, {
            variant: "button",
            display: "block",
            gutterBottom: !0,
            children: t("SideBarList_aboutApp"),
          }),
        }),
      }),
      S.jsx(sa, {
        disablePadding: !0,
        children: S.jsx(oc, {
          onClick: () => e.handleClickOpen("contribute"),
          children: S.jsx(Ke, {
            variant: "button",
            display: "block",
            gutterBottom: !0,
            children: t("SideBarList_contribute"),
          }),
        }),
      }),
      S.jsx(sa, {
        disablePadding: !0,
        children: S.jsx(oc, {
          onClick: () => e.handleClickOpen("contact"),
          children: S.jsx(Ke, {
            variant: "button",
            display: "block",
            gutterBottom: !0,
            children: t("SideBarList_contact"),
          }),
        }),
      }),
      S.jsx(Rt, {
        direction: "row",
        sx: { mt: "auto", mb: 1.5, mx: 1.5 },
        children: S.jsx(QM, {}),
      }),
    ],
  });
}
function ZM() {
  const { t: e } = Qt();
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(hp, { id: "about-dialog-title", children: e("AboutDialog_title") }),
      S.jsx(fp, {
        children: S.jsxs(pp, {
          id: "about-dialog-description",
          color: "dark-gray",
          children: [
            S.jsx("p", { children: e("AboutDialog_desc1") }),
            S.jsx("p", { children: e("AboutDialog_desc2") }),
            S.jsx(Ke, {
              sx: { fontWeight: 600 },
              children: e("AboutDialog_ItalyDisclaimer"),
            }),
            S.jsxs(Ke, {
              sx: { fontWeight: 800, mt: 3 },
              children: [
                e("AboutDialog_aboutus"),
                " ",
                S.jsx(Br, {
                  underline: "hover",
                  href: "https://fuzue.tech",
                  target: "_blank",
                  children: "fuzue.tech",
                }),
                S.jsx("br", {}),
                e("AboutDialog_aboutapp"),
                " ",
                S.jsxs(Br, {
                  underline: "hover",
                  href: "https://seasonalfood.fuzue.tech/",
                  target: "_blank",
                  children: [" ", e("AboutDialog_Here")],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var yp = {},
  dc = {};
const eN = An(JP);
var um;
function xp() {
  return (
    um ||
      ((um = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = eN;
      })(dc)),
    dc
  );
}
var tN = Ts;
Object.defineProperty(yp, "__esModule", { value: !0 });
var j1 = (yp.default = void 0),
  nN = tN(xp()),
  rN = S,
  oN = (0, nN.default)(
    (0, rN.jsx)("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
    }),
    "AlternateEmail"
  );
j1 = yp.default = oN;
var bp = {},
  iN = Ts;
Object.defineProperty(bp, "__esModule", { value: !0 });
var B1 = (bp.default = void 0);
lN(y);
var sN = iN(xp()),
  aN = S;
function z1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (z1 = function (r) {
    return r ? n : t;
  })(e);
}
function lN(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = z1(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
var uN = (0, sN.default)(
  (0, aN.jsx)("path", {
    d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27",
  }),
  "GitHub"
);
B1 = bp.default = uN;
function cN() {
  const { t: e } = Qt();
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(hp, {
        id: "contact-dialog-title",
        children: e("ContactDialog_title"),
      }),
      S.jsx(fp, {
        children: S.jsxs(pp, {
          id: "contact-dialog-description",
          color: "dark-gray",
          children: [
            e("ContactDialog_text1"),
            S.jsx(Br, {
              underline: "hover",
              color: "inherit",
              href: "https://seasonalfood.fuzue.tech/",
              target: "_blank",
            }),
            " ",
            e("ContactDialog_text3"),
            " ",
            S.jsxs(Br, {
              underline: "hover",
              sx: { fontWeight: 800 },
              href: "https://github.com/fuzue/seasonalfood",
              children: [" ", e("ContactDialog_text4")],
            }),
            S.jsxs(an, {
              sx: { display: "flex", justifyContent: "start", mt: 2 },
              children: [
                S.jsx(j1, { sx: { mr: 1 } }),
                S.jsx(Br, {
                  underline: "hover",
                  sx: { fontWeight: 800 },
                  href: "mailto:contact@fuzue.tech",
                  children: "contact@fuzue.tech",
                }),
              ],
            }),
            S.jsxs(an, {
              sx: { display: "flex", justifyContent: "start", mt: 1 },
              children: [
                S.jsx(B1, { sx: { mr: 1 } }),
                S.jsx(Br, {
                  underline: "hover",
                  sx: { fontWeight: 800 },
                  href: "https://github.com/fuzue/seasonalfood",
                  children: "GitHub Repo",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function dN() {
  const { t: e } = Qt();
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(hp, {
        id: "contribute-dialog-title",
        children: e("ContributeDialog_title"),
      }),
      S.jsx(fp, {
        children: S.jsxs(pp, {
          id: "contribute-dialog-description",
          color: "dark-gray",
          children: [
            e("ContributeDialog_desc"),
            S.jsxs("p", {
              children: [
                e("ContributeDialog_forthis"),
                " ",
                S.jsx(Br, {
                  sx: { fontWeight: 800 },
                  underline: "hover",
                  href: "https://github.com/fuzue/seasonfood",
                  target: "_blank",
                  children: e("ContributeDialog_githubPage"),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function fN(e) {
  const { t } = Qt(),
    n = (r) => {
      if (r === "about") return S.jsx(ZM, {});
      if (r === "contribute") return S.jsx(dN, {});
      if (r === "contact") return S.jsx(cN, {});
    };
  return S.jsxs(a1, {
    open: e.open,
    onClose: e.handleClose,
    children: [
      n(e.dialogType),
      S.jsx(NR, {
        children: S.jsx(i1, {
          variant: "outlined",
          onClick: e.handleClose,
          autoFocus: !0,
          children: t("SideBarDialog_close"),
        }),
      }),
    ],
  });
}
const pN = () => {
  const { t: e } = Qt(),
    { selectedMonthNum: t } = Nf(),
    n = Number(t) - 1,
    r = n != 0 ? n - 1 : 11,
    o = n != 11 ? n + 1 : 0,
    i = W(nl)(({ theme: a }) => ({
      color: rg(a.palette.primary.light, 0.75),
      "&:hover": { color: rg(a.palette.primary.light, 1) },
      display: "flex",
      alignItems: "center",
      margin: a.spacing(1),
      width: "auto",
    })),
    s = W(Rt)(({ theme: a }) => ({
      boxShadow: `0 2px 4px ${a.palette.text.primary}`,
    }));
  return S.jsx(s, {
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    bgcolor: "primary.main",
    color: "primary.light",
    boxShadow: "0 2px 4px #332323",
    children: t
      ? S.jsxs(y.Fragment, {
          children: [
            S.jsx(i, { to: `/month/${r + 1}`, children: S.jsx(lm, {}) }),
            S.jsx(nl, {
              to: `/month/${t}`,
              children: S.jsx(Ke, {
                variant: "h6",
                display: "flex",
                alignItems: "center",
                children: e(`month_${n}`),
              }),
            }),
            S.jsx(i, { to: `/month/${o + 1}`, children: S.jsx(HM, {}) }),
          ],
        })
      : S.jsx(y.Fragment, {
          children: S.jsxs(i, {
            to: "/",
            children: [
              S.jsx(lm, {}),
              S.jsxs(Ke, {
                children: [e("MonthPage_return_to_current_month"), " "],
              }),
            ],
          }),
        }),
  });
};
var Sp = {},
  hN = Ts;
Object.defineProperty(Sp, "__esModule", { value: !0 });
var U1 = (Sp.default = void 0),
  gN = hN(xp()),
  mN = S,
  vN = (0, gN.default)(
    (0, mN.jsx)("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  );
U1 = Sp.default = vN;
const cm = "seasonalFoodHasVisited",
  yN = () => {
    const [e, t] = y.useState(() => !localStorage.getItem(cm));
    return {
      isFirstVisit: e,
      markAsVisited: () => {
        localStorage.setItem(cm, "true"), t(!1);
      },
    };
  },
  xN = () => {
    const { isFirstVisit: e, markAsVisited: t } = yN(),
      { t: n, i18n: r } = Qt(),
      o = {
        en: { nativeName: "English" },
        it: { nativeName: "Italiano" },
        pt: { nativeName: "Português(BR)" },
      },
      i = () => {
        t();
      },
      s = W(Rt)(({ theme: l }) => ({
        boxShadow: `0 2px 4px ${l.palette.text.primary}`,
        backgroundColor: "#f9f3e3",
        fontFamily: "inherit",
        borderRadius: "12px",
        border: "none",
      })),
      a = W(Rt)(({ theme: l }) => ({
        backgroundColor: l.palette.primary.main,
        color: "white",
        padding: ".75em 1.5em",
        borderRadius: "5px",
        cursor: "pointer",
      }));
    return e
      ? S.jsx("div", {
          style: {
            position: "absolute",
            left: "0",
            top: "0",
            backgroundColor: "#00000082",
            zIndex: "999",
            width: "100vw",
            height: "100vh",
          },
          children: S.jsx("div", {
            style: {
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            children: S.jsxs(s, {
              display: "flex",
              marginInline: "1em",
              padding: "1.5em",
              direction: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "500px",
              zIndex: "1000",
              position: "relative",
              children: [
                S.jsxs(Ke, {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  },
                  children: [
                    S.jsxs("h2", {
                      children: ["🫑 ", n("FirstTimePopup_welcome"), " 🫐"],
                    }),
                    S.jsx("p", { children: n("FirstTimePopup_text_1") }),
                    S.jsx("p", { children: n("FirstTimePopup_text_2") }),
                    S.jsx(Ke, {
                      variant: "overline",
                      style: {
                        borderTop: "solid 1px lightgray",
                        width: "109%",
                        paddingBlock: "1em 0.5em",
                      },
                      children: n("SelectLang_choose_prefered"),
                    }),
                    S.jsxs(p1, {
                      sx: { minWidth: "50%" },
                      size: "small",
                      style: { marginBottom: "1em", textAlign: "start" },
                      children: [
                        S.jsx(m1, {
                          id: "select-lang-label",
                          children: n("SelectLang_Text"),
                        }),
                        S.jsx(E1, {
                          labelId: "select-lang-label",
                          id: "select-lang",
                          value: r.resolvedLanguage,
                          label: "Language",
                          onChange: (l) => r.changeLanguage(l.target.value),
                          children: Object.keys(o).map((l) =>
                            S.jsx(
                              S1,
                              {
                                selected: r.resolvedLanguage === l,
                                value: l,
                                children: o[l].nativeName,
                              },
                              l
                            )
                          ),
                        }),
                      ],
                    }),
                    S.jsx(a, {
                      onClick: i,
                      children: n("SideBarDialog_close"),
                    }),
                  ],
                }),
                S.jsx("div", {
                  onClick: i,
                  style: {
                    position: "absolute",
                    right: "1em",
                    top: "1em",
                    opacity: ".5",
                    cursor: "pointer",
                  },
                  children: S.jsx(U1, {}),
                }),
              ],
            }),
          }),
        })
      : null;
  },
  bN = op({
    palette: {
      text: { primary: "#674747", secondary: "rgba(0, 0, 0, 0.28)" },
      primary: { main: "#6fa128", dark: "#f9f3e3", light: "#f9f3e3" },
      secondary: { main: "#782a33", light: "#ce3045" },
    },
  });
function SN({ food: e }) {
  const [t, n] = y.useState(""),
    [r, o] = y.useState(!1),
    [i, s] = y.useState([]),
    a = () => o(!1),
    l = (h, m) => {
      h != "" && (n(h), o(!0), s(m));
    },
    [u, c] = y.useState(!1),
    f = () => c(!u),
    [d, x] = y.useState(!1),
    [v, g] = y.useState(""),
    _ = () => x(!1),
    p = (h) => {
      x(!0), g(h);
    };
  return S.jsxs(VP, {
    theme: bN,
    children: [
      S.jsx(xT, {
        open: u,
        onClick: f,
        children: S.jsx(JM, { handleClickOpen: p }),
      }),
      S.jsx(xN, {}),
      S.jsx(qM, { onSearch: l, toggleDrawer: f, food: e, ifSearched: r }),
      S.jsxs(Rt, {
        bgcolor: "primary.light",
        height: "100%",
        maxWidth: 1024,
        mx: "auto",
        p: 1,
        children: [
          S.jsx(pN, {}),
          r
            ? S.jsx(XM, {
                currentSearch: t,
                searchResults: i,
                ifSearched: r,
                closeModal: a,
              })
            : null,
          S.jsx(fN, { open: d, dialogType: v, handleClose: _ }),
          S.jsx(an, {
            flexGrow: 1,
            overflow: "hidden",
            children: S.jsx(mC, {}),
          }),
        ],
      }),
    ],
  });
}
function CN() {
  const { t: e } = Qt(),
    t = ws();
  return S.jsxs(an, {
    sx: { margin: "20px auto" },
    children: [
      S.jsx(Ke, { variant: "h2", children: "404" }),
      S.jsx(Ke, { variant: "h5", children: "Not Found" }),
      S.jsxs(i1, {
        variant: "outlined",
        onClick: () => t("/"),
        children: [" ", e("back"), " "],
      }),
    ],
  });
}
function wN() {
  const [e, t] = y.useState([]);
  return (
    y.useEffect(() => {
      NC(t, "ITALIA-fruits-and-veggies.csv");
    }, []),
    e.length > 0
      ? S.jsx(BC, {
          initialState: e,
          children: S.jsx(_C, {
            basename: "/",
            children: S.jsx("div", {
              className: "App",
              children: S.jsxs(yC, {
                children: [
                  S.jsx(lo, { path: "*", element: S.jsx(CN, {}) }),
                  S.jsxs(lo, {
                    path: "/",
                    element: S.jsx(SN, { food: e }),
                    children: [
                      S.jsx(lo, {
                        index: !0,
                        element: S.jsx(gC, { to: `/month/${Xy}`, replace: !0 }),
                      }),
                      S.jsx(lo, {
                        path: "/:id",
                        element: S.jsx(ML, {}, "foodpage"),
                      }),
                      S.jsx(lo, {
                        path: "/month/:selectedMonthNum",
                        element: S.jsx(LL, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })
      : S.jsx("center", { children: "not loaded" })
  );
}
function kN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, kE(r.key), r);
  }
}
function _N(e, t, n) {
  return (
    t && dm(e.prototype, t),
    n && dm(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var W1 = [],
  EN = W1.forEach,
  PN = W1.slice;
function $N(e) {
  return (
    EN.call(PN.call(arguments, 1), function (t) {
      if (t) for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
var fm = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  RN = function (t, n, r) {
    var o = r || {};
    o.path = o.path || "/";
    var i = encodeURIComponent(n),
      s = "".concat(t, "=").concat(i);
    if (o.maxAge > 0) {
      var a = o.maxAge - 0;
      if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
      s += "; Max-Age=".concat(Math.floor(a));
    }
    if (o.domain) {
      if (!fm.test(o.domain)) throw new TypeError("option domain is invalid");
      s += "; Domain=".concat(o.domain);
    }
    if (o.path) {
      if (!fm.test(o.path)) throw new TypeError("option path is invalid");
      s += "; Path=".concat(o.path);
    }
    if (o.expires) {
      if (typeof o.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      s += "; Expires=".concat(o.expires.toUTCString());
    }
    if (
      (o.httpOnly && (s += "; HttpOnly"),
      o.secure && (s += "; Secure"),
      o.sameSite)
    ) {
      var l =
        typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite;
      switch (l) {
        case !0:
          s += "; SameSite=Strict";
          break;
        case "lax":
          s += "; SameSite=Lax";
          break;
        case "strict":
          s += "; SameSite=Strict";
          break;
        case "none":
          s += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return s;
  },
  pm = {
    create: function (t, n, r, o) {
      var i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      r &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + r * 60 * 1e3)),
        o && (i.domain = o),
        (document.cookie = RN(t, encodeURIComponent(n), i));
    },
    read: function (t) {
      for (
        var n = "".concat(t, "="), r = document.cookie.split(";"), o = 0;
        o < r.length;
        o++
      ) {
        for (var i = r[o]; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(n) === 0) return i.substring(n.length, i.length);
      }
      return null;
    },
    remove: function (t) {
      this.create(t, "", -1);
    },
  },
  TN = {
    name: "cookie",
    lookup: function (t) {
      var n;
      if (t.lookupCookie && typeof document < "u") {
        var r = pm.read(t.lookupCookie);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupCookie &&
        typeof document < "u" &&
        pm.create(
          n.lookupCookie,
          t,
          n.cookieMinutes,
          n.cookieDomain,
          n.cookieOptions
        );
    },
  },
  ON = {
    name: "querystring",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        for (
          var o = r.substring(1), i = o.split("&"), s = 0;
          s < i.length;
          s++
        ) {
          var a = i[s].indexOf("=");
          if (a > 0) {
            var l = i[s].substring(0, a);
            l === t.lookupQuerystring && (n = i[s].substring(a + 1));
          }
        }
      }
      return n;
    },
  },
  wi = null,
  hm = function () {
    if (wi !== null) return wi;
    try {
      wi = window !== "undefined" && window.localStorage !== null;
      var t = "i18next.translate.boo";
      window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
    } catch {
      wi = !1;
    }
    return wi;
  },
  IN = {
    name: "localStorage",
    lookup: function (t) {
      var n;
      if (t.lookupLocalStorage && hm()) {
        var r = window.localStorage.getItem(t.lookupLocalStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupLocalStorage &&
        hm() &&
        window.localStorage.setItem(n.lookupLocalStorage, t);
    },
  },
  ki = null,
  gm = function () {
    if (ki !== null) return ki;
    try {
      ki = window !== "undefined" && window.sessionStorage !== null;
      var t = "i18next.translate.boo";
      window.sessionStorage.setItem(t, "foo"),
        window.sessionStorage.removeItem(t);
    } catch {
      ki = !1;
    }
    return ki;
  },
  LN = {
    name: "sessionStorage",
    lookup: function (t) {
      var n;
      if (t.lookupSessionStorage && gm()) {
        var r = window.sessionStorage.getItem(t.lookupSessionStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupSessionStorage &&
        gm() &&
        window.sessionStorage.setItem(n.lookupSessionStorage, t);
    },
  },
  MN = {
    name: "navigator",
    lookup: function (t) {
      var n = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var r = 0; r < navigator.languages.length; r++)
            n.push(navigator.languages[r]);
        navigator.userLanguage && n.push(navigator.userLanguage),
          navigator.language && n.push(navigator.language);
      }
      return n.length > 0 ? n : void 0;
    },
  },
  NN = {
    name: "htmlTag",
    lookup: function (t) {
      var n,
        r =
          t.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  AN = {
    name: "path",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (r instanceof Array)
          if (typeof t.lookupFromPathIndex == "number") {
            if (typeof r[t.lookupFromPathIndex] != "string") return;
            n = r[t.lookupFromPathIndex].replace("/", "");
          } else n = r[0].replace("/", "");
      }
      return n;
    },
  },
  FN = {
    name: "subdomain",
    lookup: function (t) {
      var n =
          typeof t.lookupFromSubdomainIndex == "number"
            ? t.lookupFromSubdomainIndex + 1
            : 1,
        r =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (r) return r[n];
    },
  },
  H1 = !1;
try {
  document.cookie, (H1 = !0);
} catch {}
var V1 = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
H1 || V1.splice(1, 1);
function DN() {
  return {
    order: V1,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (t) {
      return t;
    },
  };
}
var K1 = (function () {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    kN(this, e),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(t, n);
  }
  return _N(e, [
    {
      key: "init",
      value: function (n) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (this.services = n || { languageUtils: {} }),
          (this.options = $N(r, this.options || {}, DN())),
          typeof this.options.convertDetectedLanguage == "string" &&
            this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
            (this.options.convertDetectedLanguage = function (i) {
              return i.replace("-", "_");
            }),
          this.options.lookupFromUrlIndex &&
            (this.options.lookupFromPathIndex =
              this.options.lookupFromUrlIndex),
          (this.i18nOptions = o),
          this.addDetector(TN),
          this.addDetector(ON),
          this.addDetector(IN),
          this.addDetector(LN),
          this.addDetector(MN),
          this.addDetector(NN),
          this.addDetector(AN),
          this.addDetector(FN);
      },
    },
    {
      key: "addDetector",
      value: function (n) {
        return (this.detectors[n.name] = n), this;
      },
    },
    {
      key: "detect",
      value: function (n) {
        var r = this;
        n || (n = this.options.order);
        var o = [];
        return (
          n.forEach(function (i) {
            if (r.detectors[i]) {
              var s = r.detectors[i].lookup(r.options);
              s && typeof s == "string" && (s = [s]), s && (o = o.concat(s));
            }
          }),
          (o = o.map(function (i) {
            return r.options.convertDetectedLanguage(i);
          })),
          this.services.languageUtils.getBestMatchFromCodes
            ? o
            : o.length > 0
            ? o[0]
            : null
        );
      },
    },
    {
      key: "cacheUserLanguage",
      value: function (n, r) {
        var o = this;
        r || (r = this.options.caches),
          r &&
            ((this.options.excludeCacheFor &&
              this.options.excludeCacheFor.indexOf(n) > -1) ||
              r.forEach(function (i) {
                o.detectors[i] &&
                  o.detectors[i].cacheUserLanguage(n, o.options);
              }));
      },
    },
  ]);
})();
K1.type = "languageDetector";
function Id(e) {
  "@babel/helpers - typeof";
  return (
    (Id =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Id(e)
  );
}
function G1() {
  return (
    typeof XMLHttpRequest == "function" ||
    (typeof XMLHttpRequest > "u" ? "undefined" : Id(XMLHttpRequest)) ===
      "object"
  );
}
function jN(e) {
  return !!e && typeof e.then == "function";
}
function BN(e) {
  return jN(e) ? e : Promise.resolve(e);
}
function zN(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Ld = { exports: {} },
  ca = { exports: {} },
  mm;
function UN() {
  return (
    mm ||
      ((mm = 1),
      (function (e, t) {
        var n =
            (typeof globalThis < "u" && globalThis) ||
            (typeof self < "u" && self) ||
            (typeof _o < "u" && _o),
          r = (function () {
            function i() {
              (this.fetch = !1), (this.DOMException = n.DOMException);
            }
            return (i.prototype = n), new i();
          })();
        (function (i) {
          (function (s) {
            var a =
                (typeof i < "u" && i) ||
                (typeof self < "u" && self) ||
                (typeof a < "u" && a),
              l = {
                searchParams: "URLSearchParams" in a,
                iterable: "Symbol" in a && "iterator" in Symbol,
                blob:
                  "FileReader" in a &&
                  "Blob" in a &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch {
                      return !1;
                    }
                  })(),
                formData: "FormData" in a,
                arrayBuffer: "ArrayBuffer" in a,
              };
            function u(P) {
              return P && DataView.prototype.isPrototypeOf(P);
            }
            if (l.arrayBuffer)
              var c = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]",
                ],
                f =
                  ArrayBuffer.isView ||
                  function (P) {
                    return (
                      P && c.indexOf(Object.prototype.toString.call(P)) > -1
                    );
                  };
            function d(P) {
              if (
                (typeof P != "string" && (P = String(P)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(P) || P === "")
              )
                throw new TypeError(
                  'Invalid character in header field name: "' + P + '"'
                );
              return P.toLowerCase();
            }
            function x(P) {
              return typeof P != "string" && (P = String(P)), P;
            }
            function v(P) {
              var I = {
                next: function () {
                  var A = P.shift();
                  return { done: A === void 0, value: A };
                },
              };
              return (
                l.iterable &&
                  (I[Symbol.iterator] = function () {
                    return I;
                  }),
                I
              );
            }
            function g(P) {
              (this.map = {}),
                P instanceof g
                  ? P.forEach(function (I, A) {
                      this.append(A, I);
                    }, this)
                  : Array.isArray(P)
                  ? P.forEach(function (I) {
                      this.append(I[0], I[1]);
                    }, this)
                  : P &&
                    Object.getOwnPropertyNames(P).forEach(function (I) {
                      this.append(I, P[I]);
                    }, this);
            }
            (g.prototype.append = function (P, I) {
              (P = d(P)), (I = x(I));
              var A = this.map[P];
              this.map[P] = A ? A + ", " + I : I;
            }),
              (g.prototype.delete = function (P) {
                delete this.map[d(P)];
              }),
              (g.prototype.get = function (P) {
                return (P = d(P)), this.has(P) ? this.map[P] : null;
              }),
              (g.prototype.has = function (P) {
                return this.map.hasOwnProperty(d(P));
              }),
              (g.prototype.set = function (P, I) {
                this.map[d(P)] = x(I);
              }),
              (g.prototype.forEach = function (P, I) {
                for (var A in this.map)
                  this.map.hasOwnProperty(A) && P.call(I, this.map[A], A, this);
              }),
              (g.prototype.keys = function () {
                var P = [];
                return (
                  this.forEach(function (I, A) {
                    P.push(A);
                  }),
                  v(P)
                );
              }),
              (g.prototype.values = function () {
                var P = [];
                return (
                  this.forEach(function (I) {
                    P.push(I);
                  }),
                  v(P)
                );
              }),
              (g.prototype.entries = function () {
                var P = [];
                return (
                  this.forEach(function (I, A) {
                    P.push([A, I]);
                  }),
                  v(P)
                );
              }),
              l.iterable &&
                (g.prototype[Symbol.iterator] = g.prototype.entries);
            function _(P) {
              if (P.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
              P.bodyUsed = !0;
            }
            function p(P) {
              return new Promise(function (I, A) {
                (P.onload = function () {
                  I(P.result);
                }),
                  (P.onerror = function () {
                    A(P.error);
                  });
              });
            }
            function h(P) {
              var I = new FileReader(),
                A = p(I);
              return I.readAsArrayBuffer(P), A;
            }
            function m(P) {
              var I = new FileReader(),
                A = p(I);
              return I.readAsText(P), A;
            }
            function C(P) {
              for (
                var I = new Uint8Array(P), A = new Array(I.length), R = 0;
                R < I.length;
                R++
              )
                A[R] = String.fromCharCode(I[R]);
              return A.join("");
            }
            function $(P) {
              if (P.slice) return P.slice(0);
              var I = new Uint8Array(P.byteLength);
              return I.set(new Uint8Array(P)), I.buffer;
            }
            function O() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (P) {
                  (this.bodyUsed = this.bodyUsed),
                    (this._bodyInit = P),
                    P
                      ? typeof P == "string"
                        ? (this._bodyText = P)
                        : l.blob && Blob.prototype.isPrototypeOf(P)
                        ? (this._bodyBlob = P)
                        : l.formData && FormData.prototype.isPrototypeOf(P)
                        ? (this._bodyFormData = P)
                        : l.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(P)
                        ? (this._bodyText = P.toString())
                        : l.arrayBuffer && l.blob && u(P)
                        ? ((this._bodyArrayBuffer = $(P.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : l.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(P) || f(P))
                        ? (this._bodyArrayBuffer = $(P))
                        : (this._bodyText = P =
                            Object.prototype.toString.call(P))
                      : (this._bodyText = ""),
                    this.headers.get("content-type") ||
                      (typeof P == "string"
                        ? this.headers.set(
                            "content-type",
                            "text/plain;charset=UTF-8"
                          )
                        : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set("content-type", this._bodyBlob.type)
                        : l.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(P) &&
                          this.headers.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                          ));
                }),
                l.blob &&
                  ((this.blob = function () {
                    var P = _(this);
                    if (P) return P;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                      throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]));
                  }),
                  (this.arrayBuffer = function () {
                    if (this._bodyArrayBuffer) {
                      var P = _(this);
                      return (
                        P ||
                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                          ? Promise.resolve(
                              this._bodyArrayBuffer.buffer.slice(
                                this._bodyArrayBuffer.byteOffset,
                                this._bodyArrayBuffer.byteOffset +
                                  this._bodyArrayBuffer.byteLength
                              )
                            )
                          : Promise.resolve(this._bodyArrayBuffer))
                      );
                    } else return this.blob().then(h);
                  })),
                (this.text = function () {
                  var P = _(this);
                  if (P) return P;
                  if (this._bodyBlob) return m(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(C(this._bodyArrayBuffer));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                  return Promise.resolve(this._bodyText);
                }),
                l.formData &&
                  (this.formData = function () {
                    return this.text().then(T);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function b(P) {
              var I = P.toUpperCase();
              return E.indexOf(I) > -1 ? I : P;
            }
            function w(P, I) {
              if (!(this instanceof w))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                );
              I = I || {};
              var A = I.body;
              if (P instanceof w) {
                if (P.bodyUsed) throw new TypeError("Already read");
                (this.url = P.url),
                  (this.credentials = P.credentials),
                  I.headers || (this.headers = new g(P.headers)),
                  (this.method = P.method),
                  (this.mode = P.mode),
                  (this.signal = P.signal),
                  !A &&
                    P._bodyInit != null &&
                    ((A = P._bodyInit), (P.bodyUsed = !0));
              } else this.url = String(P);
              if (
                ((this.credentials =
                  I.credentials || this.credentials || "same-origin"),
                (I.headers || !this.headers) &&
                  (this.headers = new g(I.headers)),
                (this.method = b(I.method || this.method || "GET")),
                (this.mode = I.mode || this.mode || null),
                (this.signal = I.signal || this.signal),
                (this.referrer = null),
                (this.method === "GET" || this.method === "HEAD") && A)
              )
                throw new TypeError(
                  "Body not allowed for GET or HEAD requests"
                );
              if (
                (this._initBody(A),
                (this.method === "GET" || this.method === "HEAD") &&
                  (I.cache === "no-store" || I.cache === "no-cache"))
              ) {
                var R = /([?&])_=[^&]*/;
                if (R.test(this.url))
                  this.url = this.url.replace(R, "$1_=" + new Date().getTime());
                else {
                  var L = /\?/;
                  this.url +=
                    (L.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime();
                }
              }
            }
            w.prototype.clone = function () {
              return new w(this, { body: this._bodyInit });
            };
            function T(P) {
              var I = new FormData();
              return (
                P.trim()
                  .split("&")
                  .forEach(function (A) {
                    if (A) {
                      var R = A.split("="),
                        L = R.shift().replace(/\+/g, " "),
                        j = R.join("=").replace(/\+/g, " ");
                      I.append(decodeURIComponent(L), decodeURIComponent(j));
                    }
                  }),
                I
              );
            }
            function M(P) {
              var I = new g(),
                A = P.replace(/\r?\n[\t ]+/g, " ");
              return (
                A.split("\r")
                  .map(function (R) {
                    return R.indexOf(`
`) === 0
                      ? R.substr(1, R.length)
                      : R;
                  })
                  .forEach(function (R) {
                    var L = R.split(":"),
                      j = L.shift().trim();
                    if (j) {
                      var V = L.join(":").trim();
                      I.append(j, V);
                    }
                  }),
                I
              );
            }
            O.call(w.prototype);
            function N(P, I) {
              if (!(this instanceof N))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                );
              I || (I = {}),
                (this.type = "default"),
                (this.status = I.status === void 0 ? 200 : I.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText =
                  I.statusText === void 0 ? "" : "" + I.statusText),
                (this.headers = new g(I.headers)),
                (this.url = I.url || ""),
                this._initBody(P);
            }
            O.call(N.prototype),
              (N.prototype.clone = function () {
                return new N(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new g(this.headers),
                  url: this.url,
                });
              }),
              (N.error = function () {
                var P = new N(null, { status: 0, statusText: "" });
                return (P.type = "error"), P;
              });
            var D = [301, 302, 303, 307, 308];
            (N.redirect = function (P, I) {
              if (D.indexOf(I) === -1)
                throw new RangeError("Invalid status code");
              return new N(null, { status: I, headers: { location: P } });
            }),
              (s.DOMException = a.DOMException);
            try {
              new s.DOMException();
            } catch {
              (s.DOMException = function (I, A) {
                (this.message = I), (this.name = A);
                var R = Error(I);
                this.stack = R.stack;
              }),
                (s.DOMException.prototype = Object.create(Error.prototype)),
                (s.DOMException.prototype.constructor = s.DOMException);
            }
            function F(P, I) {
              return new Promise(function (A, R) {
                var L = new w(P, I);
                if (L.signal && L.signal.aborted)
                  return R(new s.DOMException("Aborted", "AbortError"));
                var j = new XMLHttpRequest();
                function V() {
                  j.abort();
                }
                (j.onload = function () {
                  var J = {
                    status: j.status,
                    statusText: j.statusText,
                    headers: M(j.getAllResponseHeaders() || ""),
                  };
                  J.url =
                    "responseURL" in j
                      ? j.responseURL
                      : J.headers.get("X-Request-URL");
                  var Z = "response" in j ? j.response : j.responseText;
                  setTimeout(function () {
                    A(new N(Z, J));
                  }, 0);
                }),
                  (j.onerror = function () {
                    setTimeout(function () {
                      R(new TypeError("Network request failed"));
                    }, 0);
                  }),
                  (j.ontimeout = function () {
                    setTimeout(function () {
                      R(new TypeError("Network request failed"));
                    }, 0);
                  }),
                  (j.onabort = function () {
                    setTimeout(function () {
                      R(new s.DOMException("Aborted", "AbortError"));
                    }, 0);
                  });
                function B(J) {
                  try {
                    return J === "" && a.location.href ? a.location.href : J;
                  } catch {
                    return J;
                  }
                }
                j.open(L.method, B(L.url), !0),
                  L.credentials === "include"
                    ? (j.withCredentials = !0)
                    : L.credentials === "omit" && (j.withCredentials = !1),
                  "responseType" in j &&
                    (l.blob
                      ? (j.responseType = "blob")
                      : l.arrayBuffer &&
                        L.headers.get("Content-Type") &&
                        L.headers
                          .get("Content-Type")
                          .indexOf("application/octet-stream") !== -1 &&
                        (j.responseType = "arraybuffer")),
                  I && typeof I.headers == "object" && !(I.headers instanceof g)
                    ? Object.getOwnPropertyNames(I.headers).forEach(function (
                        J
                      ) {
                        j.setRequestHeader(J, x(I.headers[J]));
                      })
                    : L.headers.forEach(function (J, Z) {
                        j.setRequestHeader(Z, J);
                      }),
                  L.signal &&
                    (L.signal.addEventListener("abort", V),
                    (j.onreadystatechange = function () {
                      j.readyState === 4 &&
                        L.signal.removeEventListener("abort", V);
                    })),
                  j.send(typeof L._bodyInit > "u" ? null : L._bodyInit);
              });
            }
            return (
              (F.polyfill = !0),
              a.fetch ||
                ((a.fetch = F),
                (a.Headers = g),
                (a.Request = w),
                (a.Response = N)),
              (s.Headers = g),
              (s.Request = w),
              (s.Response = N),
              (s.fetch = F),
              s
            );
          })({});
        })(r),
          (r.fetch.ponyfill = !0),
          delete r.fetch.polyfill;
        var o = n.fetch ? n : r;
        (t = o.fetch),
          (t.default = o.fetch),
          (t.fetch = o.fetch),
          (t.Headers = o.Headers),
          (t.Request = o.Request),
          (t.Response = o.Response),
          (e.exports = t);
      })(ca, ca.exports)),
    ca.exports
  );
}
(function (e, t) {
  var n = typeof fetch == "function" ? fetch : void 0;
  if (
    (typeof _o < "u" && _o.fetch
      ? (n = _o.fetch)
      : typeof window < "u" && window.fetch && (n = window.fetch),
    typeof zN < "u" && typeof window > "u")
  ) {
    var r = n || UN();
    r.default && (r = r.default), (t.default = r), (e.exports = t.default);
  }
})(Ld, Ld.exports);
var q1 = Ld.exports;
const Y1 = ml(q1),
  vm = Pm({ __proto__: null, default: Y1 }, [q1]);
function ym(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ym(Object(n), !0).forEach(function (r) {
          WN(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ym(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function WN(e, t, n) {
  return (
    (t = HN(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function HN(e) {
  var t = VN(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
function VN(e, t) {
  if (Yr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Yr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yr(e) {
  "@babel/helpers - typeof";
  return (
    (Yr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yr(e)
  );
}
var kr = typeof fetch == "function" ? fetch : void 0;
typeof global < "u" && global.fetch
  ? (kr = global.fetch)
  : typeof window < "u" && window.fetch && (kr = window.fetch);
var ms;
G1() &&
  (typeof global < "u" && global.XMLHttpRequest
    ? (ms = global.XMLHttpRequest)
    : typeof window < "u" &&
      window.XMLHttpRequest &&
      (ms = window.XMLHttpRequest));
var hl;
typeof ActiveXObject == "function" &&
  (typeof global < "u" && global.ActiveXObject
    ? (hl = global.ActiveXObject)
    : typeof window < "u" &&
      window.ActiveXObject &&
      (hl = window.ActiveXObject));
!kr && vm && !ms && !hl && (kr = Y1 || vm);
typeof kr != "function" && (kr = void 0);
var Md = function (t, n) {
    if (n && Yr(n) === "object") {
      var r = "";
      for (var o in n)
        r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(n[o]);
      if (!r) return t;
      t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
    }
    return t;
  },
  bm = function (t, n, r, o) {
    var i = function (l) {
      if (!l.ok) return r(l.statusText || "Error", { status: l.status });
      l.text()
        .then(function (u) {
          r(null, { status: l.status, data: u });
        })
        .catch(r);
    };
    if (o) {
      var s = o(t, n);
      if (s instanceof Promise) {
        s.then(i).catch(r);
        return;
      }
    }
    typeof fetch == "function"
      ? fetch(t, n).then(i).catch(r)
      : kr(t, n).then(i).catch(r);
  },
  Sm = !1,
  KN = function (t, n, r, o) {
    t.queryStringParams && (n = Md(n, t.queryStringParams));
    var i = xm(
      {},
      typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders
    );
    typeof window > "u" &&
      typeof global < "u" &&
      typeof global.process < "u" &&
      global.process.versions &&
      global.process.versions.node &&
      (i["User-Agent"] = "i18next-http-backend (node/"
        .concat(global.process.version, "; ")
        .concat(global.process.platform, " ")
        .concat(global.process.arch, ")")),
      r && (i["Content-Type"] = "application/json");
    var s =
        typeof t.requestOptions == "function"
          ? t.requestOptions(r)
          : t.requestOptions,
      a = xm(
        {
          method: r ? "POST" : "GET",
          body: r ? t.stringify(r) : void 0,
          headers: i,
        },
        Sm ? {} : s
      ),
      l =
        typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1
          ? t.alternateFetch
          : void 0;
    try {
      bm(n, a, o, l);
    } catch (u) {
      if (
        !s ||
        Object.keys(s).length === 0 ||
        !u.message ||
        u.message.indexOf("not implemented") < 0
      )
        return o(u);
      try {
        Object.keys(s).forEach(function (c) {
          delete a[c];
        }),
          bm(n, a, o, l),
          (Sm = !0);
      } catch (c) {
        o(c);
      }
    }
  },
  GN = function (t, n, r, o) {
    r && Yr(r) === "object" && (r = Md("", r).slice(1)),
      t.queryStringParams && (n = Md(n, t.queryStringParams));
    try {
      var i;
      ms ? (i = new ms()) : (i = new hl("MSXML2.XMLHTTP.3.0")),
        i.open(r ? "POST" : "GET", n, 1),
        t.crossDomain ||
          i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        (i.withCredentials = !!t.withCredentials),
        r &&
          i.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
        i.overrideMimeType && i.overrideMimeType("application/json");
      var s = t.customHeaders;
      if (((s = typeof s == "function" ? s() : s), s))
        for (var a in s) i.setRequestHeader(a, s[a]);
      (i.onreadystatechange = function () {
        i.readyState > 3 &&
          o(i.status >= 400 ? i.statusText : null, {
            status: i.status,
            data: i.responseText,
          });
      }),
        i.send(r);
    } catch (l) {
      console && console.log(l);
    }
  },
  qN = function (t, n, r, o) {
    if (
      (typeof r == "function" && ((o = r), (r = void 0)),
      (o = o || function () {}),
      kr && n.indexOf("file:") !== 0)
    )
      return KN(t, n, r, o);
    if (G1() || typeof ActiveXObject == "function") return GN(t, n, r, o);
    o(new Error("No fetch and no xhr implementation found!"));
  };
function Go(e) {
  "@babel/helpers - typeof";
  return (
    (Go =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Go(e)
  );
}
function Cm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cm(Object(n), !0).forEach(function (r) {
          X1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Cm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function YN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Q1(r.key), r);
  }
}
function XN(e, t, n) {
  return (
    t && wm(e.prototype, t),
    n && wm(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function X1(e, t, n) {
  return (
    (t = Q1(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Q1(e) {
  var t = QN(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function QN(e, t) {
  if (Go(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JN = function () {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      parse: function (n) {
        return JSON.parse(n);
      },
      stringify: JSON.stringify,
      parsePayload: function (n, r, o) {
        return X1({}, r, o || "");
      },
      parseLoadPayload: function (n, r) {},
      request: qN,
      reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
      },
    };
  },
  J1 = (function () {
    function e(t) {
      var n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      YN(this, e),
        (this.services = t),
        (this.options = n),
        (this.allOptions = r),
        (this.type = "backend"),
        this.init(t, n, r);
    }
    return XN(e, [
      {
        key: "init",
        value: function (n) {
          var r = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          if (
            ((this.services = n),
            (this.options = fc(fc(fc({}, JN()), this.options || {}), o)),
            (this.allOptions = i),
            this.services && this.options.reloadInterval)
          ) {
            var s = setInterval(function () {
              return r.reload();
            }, this.options.reloadInterval);
            Go(s) === "object" && typeof s.unref == "function" && s.unref();
          }
        },
      },
      {
        key: "readMulti",
        value: function (n, r, o) {
          this._readAny(n, n, r, r, o);
        },
      },
      {
        key: "read",
        value: function (n, r, o) {
          this._readAny([n], n, [r], r, o);
        },
      },
      {
        key: "_readAny",
        value: function (n, r, o, i, s) {
          var a = this,
            l = this.options.loadPath;
          typeof this.options.loadPath == "function" &&
            (l = this.options.loadPath(n, o)),
            (l = BN(l)),
            l.then(function (u) {
              if (!u) return s(null, {});
              var c = a.services.interpolator.interpolate(u, {
                lng: n.join("+"),
                ns: o.join("+"),
              });
              a.loadUrl(c, s, r, i);
            });
        },
      },
      {
        key: "loadUrl",
        value: function (n, r, o, i) {
          var s = this,
            a = typeof o == "string" ? [o] : o,
            l = typeof i == "string" ? [i] : i,
            u = this.options.parseLoadPayload(a, l);
          this.options.request(this.options, n, u, function (c, f) {
            if (f && ((f.status >= 500 && f.status < 600) || !f.status))
              return r(
                "failed loading " + n + "; status code: " + f.status,
                !0
              );
            if (f && f.status >= 400 && f.status < 500)
              return r(
                "failed loading " + n + "; status code: " + f.status,
                !1
              );
            if (!f && c && c.message) {
              var d = c.message.toLowerCase(),
                x = ["failed", "fetch", "network", "load"].find(function (_) {
                  return d.indexOf(_) > -1;
                });
              if (x) return r("failed loading " + n + ": " + c.message, !0);
            }
            if (c) return r(c, !1);
            var v, g;
            try {
              typeof f.data == "string"
                ? (v = s.options.parse(f.data, o, i))
                : (v = f.data);
            } catch {
              g = "failed parsing " + n + " to json";
            }
            if (g) return r(g, !1);
            r(null, v);
          });
        },
      },
      {
        key: "create",
        value: function (n, r, o, i, s) {
          var a = this;
          if (this.options.addPath) {
            typeof n == "string" && (n = [n]);
            var l = this.options.parsePayload(r, o, i),
              u = 0,
              c = [],
              f = [];
            n.forEach(function (d) {
              var x = a.options.addPath;
              typeof a.options.addPath == "function" &&
                (x = a.options.addPath(d, r));
              var v = a.services.interpolator.interpolate(x, { lng: d, ns: r });
              a.options.request(a.options, v, l, function (g, _) {
                (u += 1),
                  c.push(g),
                  f.push(_),
                  u === n.length && typeof s == "function" && s(c, f);
              });
            });
          }
        },
      },
      {
        key: "reload",
        value: function () {
          var n = this,
            r = this.services,
            o = r.backendConnector,
            i = r.languageUtils,
            s = r.logger,
            a = o.language;
          if (!(a && a.toLowerCase() === "cimode")) {
            var l = [],
              u = function (f) {
                var d = i.toResolveHierarchy(f);
                d.forEach(function (x) {
                  l.indexOf(x) < 0 && l.push(x);
                });
              };
            u(a),
              this.allOptions.preload &&
                this.allOptions.preload.forEach(function (c) {
                  return u(c);
                }),
              l.forEach(function (c) {
                n.allOptions.ns.forEach(function (f) {
                  o.read(c, f, "read", null, null, function (d, x) {
                    d &&
                      s.warn(
                        "loading namespace "
                          .concat(f, " for language ")
                          .concat(c, " failed"),
                        d
                      ),
                      !d &&
                        x &&
                        s.log(
                          "loaded namespace "
                            .concat(f, " for language ")
                            .concat(c),
                          x
                        ),
                      o.loaded("".concat(c, "|").concat(f), d, x);
                  });
                });
              });
          }
        },
      },
    ]);
  })();
J1.type = "backend";
/*! Capacitor: https://capacitorjs.com/ - MIT License */ var qo;
(function (e) {
  (e.Unimplemented = "UNIMPLEMENTED"), (e.Unavailable = "UNAVAILABLE");
})(qo || (qo = {}));
class pc extends Error {
  constructor(t, n, r) {
    super(t), (this.message = t), (this.code = n), (this.data = r);
  }
}
const ZN = (e) => {
    var t, n;
    return e != null && e.androidBridge
      ? "android"
      : !(
          (n =
            (t = e == null ? void 0 : e.webkit) === null || t === void 0
              ? void 0
              : t.messageHandlers) === null || n === void 0
        ) && n.bridge
      ? "ios"
      : "web";
  },
  eA = (e) => {
    const t = e.CapacitorCustomPlatform || null,
      n = e.Capacitor || {},
      r = (n.Plugins = n.Plugins || {}),
      o = () => (t !== null ? t.name : ZN(e)),
      i = () => o() !== "web",
      s = (f) => {
        const d = u.get(f);
        return !!((d != null && d.platforms.has(o())) || a(f));
      },
      a = (f) => {
        var d;
        return (d = n.PluginHeaders) === null || d === void 0
          ? void 0
          : d.find((x) => x.name === f);
      },
      l = (f) => e.console.error(f),
      u = new Map(),
      c = (f, d = {}) => {
        const x = u.get(f);
        if (x)
          return (
            console.warn(
              `Capacitor plugin "${f}" already registered. Cannot register plugins twice.`
            ),
            x.proxy
          );
        const v = o(),
          g = a(f);
        let _;
        const p = async () => (
            !_ && v in d
              ? (_ =
                  typeof d[v] == "function" ? (_ = await d[v]()) : (_ = d[v]))
              : t !== null &&
                !_ &&
                "web" in d &&
                (_ =
                  typeof d.web == "function"
                    ? (_ = await d.web())
                    : (_ = d.web)),
            _
          ),
          h = (b, w) => {
            var T, M;
            if (g) {
              const N =
                g == null ? void 0 : g.methods.find((D) => w === D.name);
              if (N)
                return N.rtype === "promise"
                  ? (D) => n.nativePromise(f, w.toString(), D)
                  : (D, F) => n.nativeCallback(f, w.toString(), D, F);
              if (b)
                return (T = b[w]) === null || T === void 0 ? void 0 : T.bind(b);
            } else {
              if (b)
                return (M = b[w]) === null || M === void 0 ? void 0 : M.bind(b);
              throw new pc(
                `"${f}" plugin is not implemented on ${v}`,
                qo.Unimplemented
              );
            }
          },
          m = (b) => {
            let w;
            const T = (...M) => {
              const N = p().then((D) => {
                const F = h(D, b);
                if (F) {
                  const P = F(...M);
                  return (w = P == null ? void 0 : P.remove), P;
                } else
                  throw new pc(
                    `"${f}.${b}()" is not implemented on ${v}`,
                    qo.Unimplemented
                  );
              });
              return b === "addListener" && (N.remove = async () => w()), N;
            };
            return (
              (T.toString = () => `${b.toString()}() { [capacitor code] }`),
              Object.defineProperty(T, "name", {
                value: b,
                writable: !1,
                configurable: !1,
              }),
              T
            );
          },
          C = m("addListener"),
          $ = m("removeListener"),
          O = (b, w) => {
            const T = C({ eventName: b }, w),
              M = async () => {
                const D = await T;
                $({ eventName: b, callbackId: D }, w);
              },
              N = new Promise((D) => T.then(() => D({ remove: M })));
            return (
              (N.remove = async () => {
                console.warn(
                  "Using addListener() without 'await' is deprecated."
                ),
                  await M();
              }),
              N
            );
          },
          E = new Proxy(
            {},
            {
              get(b, w) {
                switch (w) {
                  case "$$typeof":
                    return;
                  case "toJSON":
                    return () => ({});
                  case "addListener":
                    return g ? O : C;
                  case "removeListener":
                    return $;
                  default:
                    return m(w);
                }
              },
            }
          );
        return (
          (r[f] = E),
          u.set(f, {
            name: f,
            proxy: E,
            platforms: new Set([...Object.keys(d), ...(g ? [v] : [])]),
          }),
          E
        );
      };
    return (
      n.convertFileSrc || (n.convertFileSrc = (f) => f),
      (n.getPlatform = o),
      (n.handleError = l),
      (n.isNativePlatform = i),
      (n.isPluginAvailable = s),
      (n.registerPlugin = c),
      (n.Exception = pc),
      (n.DEBUG = !!n.DEBUG),
      (n.isLoggingEnabled = !!n.isLoggingEnabled),
      n
    );
  },
  tA = (e) => (e.Capacitor = eA(e)),
  gl = tA(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  ),
  Z1 = gl.registerPlugin;
class ex {
  constructor() {
    (this.listeners = {}),
      (this.retainedEventArguments = {}),
      (this.windowListeners = {});
  }
  addListener(t, n) {
    let r = !1;
    this.listeners[t] || ((this.listeners[t] = []), (r = !0)),
      this.listeners[t].push(n);
    const i = this.windowListeners[t];
    i && !i.registered && this.addWindowListener(i),
      r && this.sendRetainedArgumentsForEvent(t);
    const s = async () => this.removeListener(t, n);
    return Promise.resolve({ remove: s });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const t in this.windowListeners)
      this.removeWindowListener(this.windowListeners[t]);
    this.windowListeners = {};
  }
  notifyListeners(t, n, r) {
    const o = this.listeners[t];
    if (!o) {
      if (r) {
        let i = this.retainedEventArguments[t];
        i || (i = []), i.push(n), (this.retainedEventArguments[t] = i);
      }
      return;
    }
    o.forEach((i) => i(n));
  }
  hasListeners(t) {
    var n;
    return !!(!((n = this.listeners[t]) === null || n === void 0) && n.length);
  }
  registerWindowListener(t, n) {
    this.windowListeners[n] = {
      registered: !1,
      windowEventName: t,
      pluginEventName: n,
      handler: (r) => {
        this.notifyListeners(n, r);
      },
    };
  }
  unimplemented(t = "not implemented") {
    return new gl.Exception(t, qo.Unimplemented);
  }
  unavailable(t = "not available") {
    return new gl.Exception(t, qo.Unavailable);
  }
  async removeListener(t, n) {
    const r = this.listeners[t];
    if (!r) return;
    const o = r.indexOf(n);
    this.listeners[t].splice(o, 1),
      this.listeners[t].length ||
        this.removeWindowListener(this.windowListeners[t]);
  }
  addWindowListener(t) {
    window.addEventListener(t.windowEventName, t.handler), (t.registered = !0);
  }
  removeWindowListener(t) {
    t &&
      (window.removeEventListener(t.windowEventName, t.handler),
      (t.registered = !1));
  }
  sendRetainedArgumentsForEvent(t) {
    const n = this.retainedEventArguments[t];
    n &&
      (delete this.retainedEventArguments[t],
      n.forEach((r) => {
        this.notifyListeners(t, r);
      }));
  }
}
const km = (e) =>
    encodeURIComponent(e)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape),
  _m = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class nA extends ex {
  async getCookies() {
    const t = document.cookie,
      n = {};
    return (
      t.split(";").forEach((r) => {
        if (r.length <= 0) return;
        let [o, i] = r.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        (o = _m(o).trim()), (i = _m(i).trim()), (n[o] = i);
      }),
      n
    );
  }
  async setCookie(t) {
    try {
      const n = km(t.key),
        r = km(t.value),
        o = `; expires=${(t.expires || "").replace("expires=", "")}`,
        i = (t.path || "/").replace("path=", ""),
        s = t.url != null && t.url.length > 0 ? `domain=${t.url}` : "";
      document.cookie = `${n}=${r || ""}${o}; path=${i}; ${s};`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async deleteCookie(t) {
    try {
      document.cookie = `${t.key}=; Max-Age=0`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async clearCookies() {
    try {
      const t = document.cookie.split(";") || [];
      for (const n of t)
        document.cookie = n
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (t) {
      return Promise.reject(t);
    }
  }
}
Z1("CapacitorCookies", { web: () => new nA() });
const rA = async (e) =>
    new Promise((t, n) => {
      const r = new FileReader();
      (r.onload = () => {
        const o = r.result;
        t(o.indexOf(",") >= 0 ? o.split(",")[1] : o);
      }),
        (r.onerror = (o) => n(o)),
        r.readAsDataURL(e);
    }),
  oA = (e = {}) => {
    const t = Object.keys(e);
    return Object.keys(e)
      .map((o) => o.toLocaleLowerCase())
      .reduce((o, i, s) => ((o[i] = e[t[s]]), o), {});
  },
  iA = (e, t = !0) =>
    e
      ? Object.entries(e)
          .reduce((r, o) => {
            const [i, s] = o;
            let a, l;
            return (
              Array.isArray(s)
                ? ((l = ""),
                  s.forEach((u) => {
                    (a = t ? encodeURIComponent(u) : u), (l += `${i}=${a}&`);
                  }),
                  l.slice(0, -1))
                : ((a = t ? encodeURIComponent(s) : s), (l = `${i}=${a}`)),
              `${r}&${l}`
            );
          }, "")
          .substr(1)
      : null,
  sA = (e, t = {}) => {
    const n = Object.assign(
        { method: e.method || "GET", headers: e.headers },
        t
      ),
      o = oA(e.headers)["content-type"] || "";
    if (typeof e.data == "string") n.body = e.data;
    else if (o.includes("application/x-www-form-urlencoded")) {
      const i = new URLSearchParams();
      for (const [s, a] of Object.entries(e.data || {})) i.set(s, a);
      n.body = i.toString();
    } else if (
      o.includes("multipart/form-data") ||
      e.data instanceof FormData
    ) {
      const i = new FormData();
      if (e.data instanceof FormData)
        e.data.forEach((a, l) => {
          i.append(l, a);
        });
      else for (const a of Object.keys(e.data)) i.append(a, e.data[a]);
      n.body = i;
      const s = new Headers(n.headers);
      s.delete("content-type"), (n.headers = s);
    } else
      (o.includes("application/json") || typeof e.data == "object") &&
        (n.body = JSON.stringify(e.data));
    return n;
  };
class aA extends ex {
  async request(t) {
    const n = sA(t, t.webFetchExtra),
      r = iA(t.params, t.shouldEncodeUrlParams),
      o = r ? `${t.url}?${r}` : t.url,
      i = await fetch(o, n),
      s = i.headers.get("content-type") || "";
    let { responseType: a = "text" } = i.ok ? t : {};
    s.includes("application/json") && (a = "json");
    let l, u;
    switch (a) {
      case "arraybuffer":
      case "blob":
        (u = await i.blob()), (l = await rA(u));
        break;
      case "json":
        l = await i.json();
        break;
      case "document":
      case "text":
      default:
        l = await i.text();
    }
    const c = {};
    return (
      i.headers.forEach((f, d) => {
        c[d] = f;
      }),
      { data: l, headers: c, status: i.status, url: i.url }
    );
  }
  async get(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "GET" }));
  }
  async post(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "POST" })
    );
  }
  async put(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "PUT" }));
  }
  async patch(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "PATCH" })
    );
  }
  async delete(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "DELETE" })
    );
  }
}
Z1("CapacitorHttp", { web: () => new aA() });
const lA = "In season in Italy",
  uA = "Search...",
  cA = "Italy",
  dA = "Fruits",
  fA = "Veggies",
  pA = "{{fruits}} fruit",
  hA = "{{fruits}} fruits",
  gA = "and {{veggies}} veggie in season",
  mA = "and {{veggies}} veggies in season",
  vA = "Not in season",
  yA = "Currently in season",
  xA = "In season all year",
  bA = "Check below when it's best to buy it.",
  SA = "Months in season",
  CA = "About the app",
  wA = "Contribute",
  kA = "Contact us",
  _A = "Close",
  EA = "About the app",
  PA =
    "This project was developed to address a genuine challenge: determining the availability of fruits and vegetables in a new country or region. Despite searching for solutions and information, I couldn't find anything intuitive or capable of meeting my needs.",
  $A =
    "The concept behind this project was to create a simple and scalable solution, making it easy to modify and expand the database for different countries or regions. The primary objective of this app is to promote the consumption of locally grown produce, empower small-scale farmers, and ultimately reduce our contribution to globalwarming.",
  RA = "At the moment it is only available for Italian products.",
  TA = "Contribute",
  OA =
    "This is an open source project, that means you can clone this repository, write issues, make your own changes and submit your own pull requests.",
  IA = "More about us in",
  LA = "More about the app",
  MA = "here",
  NA = "For this, use our",
  AA = "github page.",
  FA = "Contact us",
  DA = "Contact us via email",
  jA = "our website,",
  BA = "or check out",
  zA = "our repository in github.",
  UA = "Language",
  WA = "Choose a language",
  HA = "back",
  VA = "Return to current month",
  KA = "Welcome!",
  GA =
    "This app only shows the fruits and vegetables that are grown in Italian territory, because we focus on encouraging the comsumption of local produce.",
  qA =
    "This means that you may find more produce than the ones listed here in your local stores, but they might be imported from other countries. ",
  YA = "Enjoy!",
  XA = "January",
  QA = "February",
  JA = "March",
  ZA = "April",
  eF = "May",
  tF = "June",
  nF = "July",
  rF = "August",
  oF = "September",
  iF = "October",
  sF = "November",
  aF = "December",
  lF = "Apricot",
  uF = "Cherries",
  cF = "Clementine",
  dF = "Figs",
  fF = "Grapes",
  pF = "Melons",
  hF = "Oranges",
  gF = "Peach",
  mF = "Persimmon",
  vF = "Plum",
  yF = "Strawberries",
  xF = "Watermelons",
  bF = "Leeks",
  SF = "Artichokes",
  CF = "Cauliflowers",
  wF = "Pears",
  kF = "Cucumbers",
  _F = "Citrus",
  EF = "Pumpkin",
  PF = "Kiwi",
  $F = "Turnips",
  RF = "Garlic",
  TF = "Apples",
  OF = "Broccoli",
  IF = "Celery",
  LF = "Aubergines",
  MF = "Zucchini",
  NF = "Raspberries",
  AF = "Blueberries",
  FF = "Peppers",
  DF = "Tomatoes",
  jF = "Onions",
  BF = "Lemons",
  zF = "Spinach",
  UF = "Lettuce",
  WF = "Herbs",
  HF = "Potatoes",
  VF = "Fennels",
  KF = "Chards",
  GF = "Legumes",
  qF = "Endives",
  YF = "Carrots",
  XF = {
    Header_appTitle: lA,
    Header_searchBar: uA,
    Header_in_Italy: cA,
    FoodOfTheMonth_fruitsTabText: dA,
    FoodOfTheMonth_vegetablesTabText: fA,
    FoodOfTheMonth_fruitsNumber_one: pA,
    FoodOfTheMonth_fruitsNumber_other: hA,
    FoodOfTheMonth_veggiesNumber_one: gA,
    FoodOfTheMonth_veggiesNumber_other: mA,
    FoodPage_notInSeasonText: vA,
    FoodPage_inSeasonText: yA,
    FoodPage_inSeasonAllYear: xA,
    FoodPage_checkMonths: bA,
    FoodPage_monthsInSeason: SA,
    SideBarList_aboutApp: CA,
    SideBarList_contribute: wA,
    SideBarList_contact: kA,
    SideBarDialog_close: _A,
    AboutDialog_title: EA,
    AboutDialog_desc1: PA,
    AboutDialog_desc2: $A,
    AboutDialog_ItalyDisclaimer: RA,
    ContributeDialog_title: TA,
    ContributeDialog_desc: OA,
    AboutDialog_aboutus: IA,
    AboutDialog_aboutapp: LA,
    AboutDialog_Here: MA,
    ContributeDialog_forthis: NA,
    ContributeDialog_githubPage: AA,
    ContactDialog_title: FA,
    ContactDialog_text1: DA,
    ContactDialog_text2: jA,
    ContactDialog_text3: BA,
    ContactDialog_text4: zA,
    SelectLang_Text: UA,
    SelectLang_choose_prefered: WA,
    backButton: HA,
    MonthPage_return_to_current_month: VA,
    FirstTimePopup_welcome: KA,
    FirstTimePopup_text_1: GA,
    FirstTimePopup_text_2: qA,
    FirstTimePopup_enjoy: YA,
    month_0: XA,
    month_1: QA,
    month_2: JA,
    month_3: ZA,
    month_4: eF,
    month_5: tF,
    month_6: nF,
    month_7: rF,
    month_8: oF,
    month_9: iF,
    month_10: sF,
    month_11: aF,
    Apricot: lF,
    Cherries: uF,
    Clementine: cF,
    Figs: dF,
    Grapes: fF,
    Melons: pF,
    Oranges: hF,
    Peach: gF,
    Persimmon: mF,
    Plum: vF,
    Strawberries: yF,
    Watermelons: xF,
    Leeks: bF,
    Artichokes: SF,
    Cauliflowers: CF,
    Pears: wF,
    Cucumbers: kF,
    Citrus: _F,
    Pumpkin: EF,
    Kiwi: PF,
    Turnips: $F,
    Garlic: RF,
    Apples: TF,
    Broccoli: OF,
    Celery: IF,
    Aubergines: LF,
    "Green beans": "Green beans",
    Zucchini: MF,
    Raspberries: NF,
    Blueberries: AF,
    Peppers: FF,
    Tomatoes: DF,
    Onions: jF,
    Lemons: BF,
    Spinach: zF,
    Lettuce: UF,
    Herbs: WF,
    Potatoes: HF,
    Fennels: VF,
    Chards: KF,
    Legumes: GF,
    Endives: qF,
    Carrots: YF,
  },
  QF = "In stagione in Italia",
  JF = "Cerca...",
  ZF = "Italia",
  eD = "Frutti",
  tD = "Verdure",
  nD = "{{fruits}} frutta",
  rD = "{{fruits}} frutti",
  oD = "e {{veggies}} verdura di stagione",
  iD = "e {{veggies}} verdure di stagione",
  sD = "Non è di stagione",
  aD = "Attualmente è in stagione",
  lD = "Di stagione tutto l'anno",
  uD = "controllate qui sotto quando è meglio acquistarlo.",
  cD = "Mesi di stagione",
  dD = "Informazione sull'app",
  fD = "Contribuisci",
  pD = "Contattaci",
  hD = "Chiudi",
  gD = "Informazione sull'app",
  mD =
    "Questo progetto è stato sviluppato per affrontare una sfida reale: determinare la disponibilità di frutta e verdura in un paese o in una regione. Nonostante la ricerca di soluzioni e informazioni, non sono riuscita a trovare nulla di intuitivo o in grado di soddisfare le mie esigenze.",
  vD =
    "L'idea alla base di questo progetto era quella di creare una soluzione semplice e scalabile, che permettesse di modificare ed espandere facilmente il database per diversi Paesi o regioni. L'obiettivo principale di questa applicazione è promuovere il consumo di prodotti coltivati localmente, dare potere ai piccoli agricoltori e, in ultima analisi, ridurre il nostro contributo al riscaldamento globale.",
  yD = "Al momento è disponibile solo per i prodotti italiani.",
  xD = "Maggiori informazioni su di noi in",
  bD = "Più informazioni sull'applicazione",
  SD = "qui",
  CD = "Contribuisci",
  wD =
    "Si tratta di un progetto open source, il che significa che è possibile clonare questo repository, scrivere problemi, apportare le proprie modifiche e inviare le proprie pull request.",
  kD = "Per farlo, utilizzare la nostra",
  _D = "pagina github.",
  ED = "Contattateci",
  PD = "Contattateci via e-mail",
  $D = "in nostro sito,",
  RD = "oppure controllate",
  TD = "il nostro archivio in github.",
  OD = "Lingua",
  ID = "Scegliete una lingua",
  LD = "indietro",
  MD = "Torna al mese corrente",
  ND = "Ciao, benvenuti!",
  AD =
    "Questa app mostra solo i prodotti ortofrutticoli coltivati nel territorio italiano, perché l'obiettivo è incoraggiare il consumo di prodotti locali",
  FD =
    "Ciò significa che nei negozi locali si possono trovare altri prodotti oltre a quelli qui elencati, ma potrebbero essere importati da altri Paesi.",
  DD = "Spero che la troviate utile e che vi piaccia usarla",
  jD = "Gennaio",
  BD = "Febbraio",
  zD = "Marzo",
  UD = "Aprile",
  WD = "Maggio",
  HD = "Giugno",
  VD = "Luglio",
  KD = "Agosto",
  GD = "Setembre",
  qD = "Ottobre",
  YD = "Novembre",
  XD = "Dicembre",
  QD = "Albicocche",
  JD = "Ciliegie",
  ZD = "Mandarini",
  ej = "Fichi",
  tj = "Uva",
  nj = "Meloni",
  rj = "Arance",
  oj = "Pesche",
  ij = "Cachi",
  sj = "Prugne",
  aj = "Fragole",
  lj = "Anguria",
  uj = "Porri",
  cj = "Carciofi",
  dj = "Cavolfiori",
  fj = "Pere",
  pj = "Cetrioli",
  hj = "Agrumi",
  gj = "Zucche",
  mj = "Kiwi",
  vj = "Rape",
  yj = "Aglio",
  xj = "Mele",
  bj = "Broccoli",
  Sj = "Sedani",
  Cj = "Melanzane",
  wj = "Zucchini",
  kj = "Lamponi",
  _j = "Mirtili",
  Ej = "Peperoni",
  Pj = "Pomodori",
  $j = "Cipolle",
  Rj = "Limoni",
  Tj = "Spinaci",
  Oj = "Insalata",
  Ij = "Erbe",
  Lj = "Patate",
  Mj = "Finocchi",
  Nj = "Bietole",
  Aj = "Legumi secchi",
  Fj = "Indivia",
  Dj = "Carote",
  jj = {
    Header_appTitle: QF,
    Header_searchBar: JF,
    Header_in_Italy: ZF,
    FoodOfTheMonth_fruitsTabText: eD,
    FoodOfTheMonth_vegetablesTabText: tD,
    FoodOfTheMonth_fruitsNumber_one: nD,
    FoodOfTheMonth_fruitsNumber_other: rD,
    FoodOfTheMonth_veggiesNumber_one: oD,
    FoodOfTheMonth_veggiesNumber_other: iD,
    FoodPage_notInSeasonText: sD,
    FoodPage_inSeasonText: aD,
    FoodPage_inSeasonAllYear: lD,
    FoodPage_checkMonths: uD,
    FoodPage_monthsInSeason: cD,
    SideBarList_aboutApp: dD,
    SideBarList_contribute: fD,
    SideBarList_contact: pD,
    SideBarDialog_close: hD,
    AboutDialog_title: gD,
    AboutDialog_desc1: mD,
    AboutDialog_desc2: vD,
    AboutDialog_ItalyDisclaimer: yD,
    AboutDialog_aboutus: xD,
    AboutDialog_aboutapp: bD,
    AboutDialog_Here: SD,
    ContributeDialog_title: CD,
    ContributeDialog_desc: wD,
    ContributeDialog_forthis: kD,
    ContributeDialog_githubPage: _D,
    ContactDialog_title: ED,
    ContactDialog_text1: PD,
    ContactDialog_text2: $D,
    ContactDialog_text3: RD,
    ContactDialog_text4: TD,
    SelectLang_Text: OD,
    SelectLang_choose_prefered: ID,
    backButton: LD,
    MonthPage_return_to_current_month: MD,
    FirstTimePopup_welcome: ND,
    FirstTimePopup_text_1: AD,
    FirstTimePopup_text_2: FD,
    FirstTimePopup_enjoy: DD,
    month_0: jD,
    month_1: BD,
    month_2: zD,
    month_3: UD,
    month_4: WD,
    month_5: HD,
    month_6: VD,
    month_7: KD,
    month_8: GD,
    month_9: qD,
    month_10: YD,
    month_11: XD,
    Apricot: QD,
    Cherries: JD,
    Clementine: ZD,
    Figs: ej,
    Grapes: tj,
    Melons: nj,
    Oranges: rj,
    Peach: oj,
    Persimmon: ij,
    Plum: sj,
    Strawberries: aj,
    Watermelons: lj,
    Leeks: uj,
    Artichokes: cj,
    Cauliflowers: dj,
    Pears: fj,
    Cucumbers: pj,
    Citrus: hj,
    Pumpkin: gj,
    Kiwi: mj,
    Turnips: vj,
    Garlic: yj,
    Apples: xj,
    Broccoli: bj,
    Celery: Sj,
    Aubergines: Cj,
    "Green beans": "Fagiolini",
    Zucchini: wj,
    Raspberries: kj,
    Blueberries: _j,
    Peppers: Ej,
    Tomatoes: Pj,
    Onions: $j,
    Lemons: Rj,
    Spinach: Tj,
    Lettuce: Oj,
    Herbs: Ij,
    Potatoes: Lj,
    Fennels: Mj,
    Chards: Nj,
    Legumes: Aj,
    Endives: Fj,
    Carrots: Dj,
  },
  Bj = "Na estação na Itália",
  zj = "Pesquisar...",
  Uj = "Itália",
  Wj = "Frutas",
  Hj = "Vegetais",
  Vj = "{{fruits}} fruta",
  Kj = "{{fruits}} frutas",
  Gj = "e {{veggies}} vegetal da estação",
  qj = "e {{veggies}} vegetais da estação",
  Yj = "Fora de época",
  Xj = "Atualmente na estação",
  Qj = "Disponível o ano todo",
  Jj = "Confira abaixo a melhor época para comprar.",
  Zj = "Meses na estação",
  e5 = "Sobre o app",
  t5 = "Contribua",
  n5 = "Contato",
  r5 = "Fechar",
  o5 = "Sobre o app",
  i5 =
    "Este projeto foi desenvolvido para resolver um desafio: saber a disponibilidade de frutas e vegetais em um novo país ou região. Apesar de procurar soluções e informações, não encontrei nada intuitivo ou capaz de atender às minhas necessidades.",
  s5 =
    "O conceito por trás deste projeto foi criar uma solução simples e escalável, tornando fácil modificar e expandir o banco de dados para diferentes países ou regiões. O objetivo principal deste app é promover o consumo de produtos cultivados localmente e empoderar pequenos agricultores.",
  a5 = "No momento, está disponível apenas para produtos italianos.",
  l5 = "Contribua",
  u5 =
    "Este é um projeto de código aberto, isso significa que você pode clonar este repositório, reportar problemas, fazer suas próprias alterações e enviar seus próprios pull requests.",
  c5 = "Mais sobre nós em",
  d5 = "Mais sobre o app",
  f5 = "aqui",
  p5 = "Para isso, use nossa",
  h5 = "página do github.",
  g5 = "Contato",
  m5 = "Mande um email",
  v5 = "nosso site,",
  y5 = "ou confira",
  x5 = "nosso repositório no github.",
  b5 = "Idioma",
  S5 = "Escolha um idioma",
  C5 = "voltar",
  w5 = "Voltar para o mês atual",
  k5 = "Seja bem vindo(a)!",
  _5 =
    "Este aplicativo mostra apenas as frutas e os legumes cultivados em território italiano, pois nosso foco é incentivar o consumo de produtos locais.",
  E5 =
    "Isso significa que você pode encontrar mais produtos do que os listados aqui em suas lojas locais, mas eles podem ser importados de outros países.",
  P5 = "Espero que goste, aproveite!",
  $5 = "Janeiro",
  R5 = "Fevereiro",
  T5 = "Março",
  O5 = "Abril",
  I5 = "Maio",
  L5 = "Junho",
  M5 = "Julho",
  N5 = "Agosto",
  A5 = "Setembro",
  F5 = "Outubro",
  D5 = "Novembro",
  j5 = "Dezembro",
  B5 = "Damasco",
  z5 = "Cereja",
  U5 = "Tangerina",
  W5 = "Figos",
  H5 = "Uva",
  V5 = "Melão",
  K5 = "Laranja",
  G5 = "Pêssego",
  q5 = "Caqui",
  Y5 = "Ameixa",
  X5 = "Morango",
  Q5 = "Melancia",
  J5 = "Alho-poró",
  Z5 = "Alcachofra",
  e3 = "Couve-flor",
  t3 = "Peras",
  n3 = "Pepino",
  r3 = "Cítricos",
  o3 = "Abóbora",
  i3 = "Kiwi",
  s3 = "Nabo",
  a3 = "Alho",
  l3 = "Maçã",
  u3 = "Brócolis",
  c3 = "Salsão",
  d3 = "Berinjela",
  f3 = "Abobrinha",
  p3 = "Framboesa",
  h3 = "Mirtilo",
  g3 = "Pimentões",
  m3 = "Tomate",
  v3 = "Cebola",
  y3 = "Limão siciliano",
  x3 = "Espinafre",
  b3 = "Alface",
  S3 = "Ervas",
  C3 = "Batata",
  w3 = "Funcho",
  k3 = "Acelga",
  _3 = "Leguminosas",
  E3 = "Endívia",
  P3 = "Cenoura",
  $3 = {
    Header_appTitle: Bj,
    Header_searchBar: zj,
    Header_in_Italy: Uj,
    FoodOfTheMonth_fruitsTabText: Wj,
    FoodOfTheMonth_vegetablesTabText: Hj,
    FoodOfTheMonth_fruitsNumber_one: Vj,
    FoodOfTheMonth_fruitsNumber_other: Kj,
    FoodOfTheMonth_veggiesNumber_one: Gj,
    FoodOfTheMonth_veggiesNumber_other: qj,
    FoodPage_notInSeasonText: Yj,
    FoodPage_inSeasonText: Xj,
    FoodPage_inSeasonAllYear: Qj,
    FoodPage_checkMonths: Jj,
    FoodPage_monthsInSeason: Zj,
    SideBarList_aboutApp: e5,
    SideBarList_contribute: t5,
    SideBarList_contact: n5,
    SideBarDialog_close: r5,
    AboutDialog_title: o5,
    AboutDialog_desc1: i5,
    AboutDialog_desc2: s5,
    AboutDialog_ItalyDisclaimer: a5,
    ContributeDialog_title: l5,
    ContributeDialog_desc: u5,
    AboutDialog_aboutus: c5,
    AboutDialog_aboutapp: d5,
    AboutDialog_Here: f5,
    ContributeDialog_forthis: p5,
    ContributeDialog_githubPage: h5,
    ContactDialog_title: g5,
    ContactDialog_text1: m5,
    ContactDialog_text2: v5,
    ContactDialog_text3: y5,
    ContactDialog_text4: x5,
    SelectLang_Text: b5,
    SelectLang_choose_prefered: S5,
    backButton: C5,
    MonthPage_return_to_current_month: w5,
    FirstTimePopup_welcome: k5,
    FirstTimePopup_text_1: _5,
    FirstTimePopup_text_2: E5,
    FirstTimePopup_enjoy: P5,
    month_0: $5,
    month_1: R5,
    month_2: T5,
    month_3: O5,
    month_4: I5,
    month_5: L5,
    month_6: M5,
    month_7: N5,
    month_8: A5,
    month_9: F5,
    month_10: D5,
    month_11: j5,
    Apricot: B5,
    Cherries: z5,
    Clementine: U5,
    Figs: W5,
    Grapes: H5,
    Melons: V5,
    Oranges: K5,
    Peach: G5,
    Persimmon: q5,
    Plum: Y5,
    Strawberries: X5,
    Watermelons: Q5,
    Leeks: J5,
    Artichokes: Z5,
    Cauliflowers: e3,
    Pears: t3,
    Cucumbers: n3,
    Citrus: r3,
    Pumpkin: o3,
    Kiwi: i3,
    Turnips: s3,
    Garlic: a3,
    Apples: l3,
    Broccoli: u3,
    Celery: c3,
    Aubergines: d3,
    "Green beans": "Vagem",
    Zucchini: f3,
    Raspberries: p3,
    Blueberries: h3,
    Peppers: g3,
    Tomatoes: m3,
    Onions: v3,
    Lemons: y3,
    Spinach: x3,
    Lettuce: b3,
    Herbs: S3,
    Potatoes: C3,
    Fennels: w3,
    Chards: k3,
    Legumes: _3,
    Endives: E3,
    Carrots: P3,
  },
  Em = gl.isNativePlatform(),
  R3 = "/",
  T3 = {
    en: { translation: XF },
    it: { translation: jj },
    pt: { translation: $3 },
  };
ft.use(ZC)
  .use(K1)
  .use(J1)
  .init({
    ...(Em
      ? { resources: T3 }
      : { backend: { loadPath: `${R3}locales/{{lng}}/{{ns}}.json` } }),
    debug: !0,
    fallbackLng: "en",
    supportedLngs: ["en", "it", "pt"],
    saveMissing: !Em,
  });
ft.on("failedLoading", (e, t, n) => {
  console.error("Failed loading translation:", e, t, n);
});
ft.on("loaded", (e) => {
  console.log("Translations loaded:", e);
});
hc.createRoot(document.getElementById("root")).render(
  S.jsx(_t.StrictMode, {
    children: S.jsx(_t.Suspense, {
      fallback: "loading",
      children: S.jsx(wN, {}),
    }),
  })
);
