(() => {
  'use strict';
  var e = {
      807: (e, t, o) => {
        o.d(t, { Z: () => c });
        var r = o(81),
          n = o.n(r),
          a = o(645),
          i = o.n(a)()(n());
        i.push([
          e.id,
          '*{padding:0px;margin:0px;border:0px}*,*:before,*:after{box-sizing:border-box}:focus,:active{outline:none}a:focus,a:active{outline:none}html,body{height:100%;min-width:320px}body{color:#000;line-height:1;font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;font-size:18px}input,button,textarea{font-family:inherit;font-size:inherit}button{cursor:pointer;color:inherit;background-color:inherit}a{color:inherit}a:link,a:visited{text-decoration:none}a:hover{text-decoration:none}ul li{list-style:none}img{vertical-align:top}h1,h2,h3,h4,h5,h6{font-weight:inherit;font-size:inherit}body{background-color:#111}.wrapper{width:100%;min-height:100vh;overflow:hidden;display:flex;flex-direction:column}.wrapper>main{flex:1 1 auto}.content{display:flex;flex-direction:column;justify-content:center;align-items:center}.grid{max-width:400px}.grid__container{padding:0 15px}.grid__body{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:5px}.grid__square{width:15px;height:15px;background-color:#1d1d1d;box-shadow:0 0 2px #000;transition:all 1.5s ease 0s}.grid__square:hover{transition-duration:0s}',
          '',
        ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var o = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (o += '@supports ('.concat(t[4], ') {')),
                  t[2] && (o += '@media '.concat(t[2], ' {')),
                  r && (o += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (o += e(t)),
                  r && (o += '}'),
                  t[2] && (o += '}'),
                  t[4] && (o += '}'),
                  o
                );
              }).join('');
            }),
            (t.i = function (e, o, r, n, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'.concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {').concat(l[1], '}')),
                    (l[5] = a)),
                  o && (l[2] ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = o)) : (l[2] = o)),
                  n &&
                    (l[4]
                      ? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = n))
                      : (l[4] = ''.concat(n))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      607: (e, t, o) => {
        o.r(t), o.d(t, { default: () => y });
        var r = o(379),
          n = o.n(r),
          a = o(795),
          i = o.n(a),
          c = o(569),
          s = o.n(c),
          d = o(565),
          l = o.n(d),
          u = o(216),
          p = o.n(u),
          f = o(589),
          v = o.n(f),
          h = o(807),
          m = {};
        (m.styleTagTransform = v()),
          (m.setAttributes = l()),
          (m.insert = s().bind(null, 'head')),
          (m.domAPI = i()),
          (m.insertStyleElement = p()),
          n()(h.Z, m);
        const y = h.Z && h.Z.locals ? h.Z.locals : void 0;
      },
      379: (e) => {
        var t = [];
        function o(e) {
          for (var o = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              o = r;
              break;
            }
          return o;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              d = r.base ? s[0] + r.base : s[0],
              l = a[d] || 0,
              u = ''.concat(d, ' ').concat(l);
            a[d] = l + 1;
            var p = o(u),
              f = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var v = n(f, r);
              (r.byIndex = c), t.splice(c, 0, { identifier: u, updater: v, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function n(e, t) {
          var o = t.domAPI(t);
          return (
            o.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                o.update((e = t));
              } else o.remove();
            }
          );
        }
        e.exports = function (e, n) {
          var a = r((e = e || []), (n = n || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = o(a[i]);
              t[c].references--;
            }
            for (var s = r(e, n), d = 0; d < a.length; d++) {
              var l = o(a[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, o) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var o = document.querySelector(e);
              if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                try {
                  o = o.contentDocument.head;
                } catch (e) {
                  o = null;
                }
              t[e] = o;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(o);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, o) => {
        e.exports = function (e) {
          var t = o.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (o) {
              !(function (e, t, o) {
                var r = '';
                o.supports && (r += '@supports ('.concat(o.supports, ') {')),
                  o.media && (r += '@media '.concat(o.media, ' {'));
                var n = void 0 !== o.layer;
                n && (r += '@layer'.concat(o.layer.length > 0 ? ' '.concat(o.layer) : '', ' {')),
                  (r += o.css),
                  n && (r += '}'),
                  o.media && (r += '}'),
                  o.supports && (r += '}');
                var a = o.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    ' */',
                  )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, o);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      345: (e, t, o) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getRandomColor = void 0);
        const r = o(145);
        t.getRandomColor = function () {
          const e = r.colorsArray.length,
            t = Math.floor(Math.random() * (e - 0) + 0);
          return r.colorsArray[t];
        };
      },
      712: (e, t, o) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.removeColor = t.setColor = void 0);
        const r = o(345);
        (t.setColor = function (e) {
          const t = (0, r.getRandomColor)();
          (e.style.backgroundColor = `${t}`), (e.style.boxShadow = `0 0 2px ${t}`);
        }),
          (t.removeColor = function (e, t = '#1d1d1d') {
            (e.style.backgroundColor = `${t}`), (e.style.boxShadow = `0 0 2px ${t}`);
          });
      },
      145: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.defaultColor = t.colorsArray = t.SQUARES_COUNT = void 0),
          (t.SQUARES_COUNT = 450),
          (t.colorsArray = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']),
          (t.defaultColor = '#1d1d1d');
      },
    },
    t = {};
  function o(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, o), a.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (e, t) => {
      for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.nc = void 0),
    (() => {
      o(607);
      const e = o(712),
        t = o(145);
      window.onload = () =>
        (function () {
          const o = document.querySelector('.grid__body');
          for (let r = 0; r < t.SQUARES_COUNT; r++) {
            const r = document.createElement('div');
            r.classList.add('grid__square'),
              r.addEventListener('mouseover', () => (0, e.setColor)(r)),
              r.addEventListener('mouseleave', () => (0, e.removeColor)(r, t.defaultColor)),
              o.appendChild(r);
          }
        })();
    })();
})();
