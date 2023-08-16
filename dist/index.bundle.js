(() => {
  "use strict";
  var n = {
      217: (n, e, t) => {
        t.d(e, { Z: () => s });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a)()(r());
        o.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap);",
        ]),
          o.push([
            n.id,
            ':root {\n  font-family: "Open Sans", sans-serif;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/css/font.css"],
              names: [],
              mappings: "AAEA;EACE,oCAAoC;AACtC",
              sourcesContent: [
                '@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap");\n\n:root {\n  font-family: "Open Sans", sans-serif;\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const s = o;
      },
      830: (n, e, t) => {
        t.d(e, { Z: () => s });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a)()(r());
        o.push([
          n.id,
          "#appContainer {\n  border: 2px solid red;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  width: min(700px, 100%);\n  padding: 10px;\n  gap: 10px;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/modules/App.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,SAAS;AACX",
            sourcesContent: [
              "#appContainer {\n  border: 2px solid red;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  width: min(700px, 100%);\n  padding: 10px;\n  gap: 10px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = o;
      },
      211: (n, e, t) => {
        t.d(e, { Z: () => c });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a),
          s = t(728),
          d = o()(r());
        d.i(s.Z),
          d.push([
            n.id,
            "#dayContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1rem 1fr 1rem;\n  border: 2px solid grey;\n  padding: 5px;\n  border-radius: 10px;\n  gap: 5px;\n}\n\n#dayDay {\n  grid-row: 1;\n  grid-column: 1/-1;\n  text-align: center;\n}\n#dayIcon {\n  grid-row: 2;\n  grid-column: 1/-1;\n  align-self: center;\n  justify-self: center;\n  width: 100%;\n}\n#dayMax {\n  grid-row: 3;\n  grid-column: 1;\n  text-align: center;\n\n  font-size: 0.8rem;\n}\n#dayMin {\n  grid-row: 3;\n  grid-column: 2;\n  text-align: center;\n  font-size: 0.8rem;\n  color: var(--textMid);\n}\n",
            "",
            {
              version: 3,
              sources: ["webpack://./src/css/modules/Day.css"],
              names: [],
              mappings:
                "AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iCAAiC;EACjC,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;;EAElB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;AACvB",
              sourcesContent: [
                '@import url("../variables.css");\n\n#dayContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1rem 1fr 1rem;\n  border: 2px solid grey;\n  padding: 5px;\n  border-radius: 10px;\n  gap: 5px;\n}\n\n#dayDay {\n  grid-row: 1;\n  grid-column: 1/-1;\n  text-align: center;\n}\n#dayIcon {\n  grid-row: 2;\n  grid-column: 1/-1;\n  align-self: center;\n  justify-self: center;\n  width: 100%;\n}\n#dayMax {\n  grid-row: 3;\n  grid-column: 1;\n  text-align: center;\n\n  font-size: 0.8rem;\n}\n#dayMin {\n  grid-row: 3;\n  grid-column: 2;\n  text-align: center;\n  font-size: 0.8rem;\n  color: var(--textMid);\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const c = d;
      },
      343: (n, e, t) => {
        t.d(e, { Z: () => s });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a)()(r());
        o.push([
          n.id,
          "#container {\n  display: flex;\n  gap: 10px;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/modules/DaysBar.css"],
            names: [],
            mappings: "AAAA;EACE,aAAa;EACb,SAAS;AACX",
            sourcesContent: [
              "#container {\n  display: flex;\n  gap: 10px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = o;
      },
      27: (n, e, t) => {
        t.d(e, { Z: () => c });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a),
          s = t(728),
          d = o()(r());
        d.i(s.Z),
          d.push([
            n.id,
            "#headerContainer {\n  display: grid;\n  grid-template-columns: 5rem 5rem 1fr;\n}\n#headerIcon {\n  grid-column: 1;\n  grid-row: 1;\n  width: 100%;\n  align-self: center;\n  justify-self: center;\n}\n#headerTemperature {\n  grid-column: 2;\n  grid-row: 1;\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#headerHumidity {\n  grid-column: 1/3;\n  grid-row: 3;\n  font-size: 0.8rem;\n  color: var(--textMid);\n}\n#headerWind {\n  grid-column: 1/3;\n  grid-row: 4;\n  font-size: 0.8rem;\n  color: var(--textMid);\n}\n\n#headerChanceRain {\n  grid-column: 1/3;\n  grid-row: 2;\n  color: var(--textMid);\n  font-size: 0.8rem;\n}\n\n#headerDay {\n  grid-column: -1;\n  grid-row: 2;\n  text-align: end;\n}\n\n#headerCondition {\n  grid-column: -1;\n  grid-row: 3;\n  text-align: end;\n}\n",
            "",
            {
              version: 3,
              sources: ["webpack://./src/css/modules/Header.css"],
              names: [],
              mappings:
                "AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;AACjB",
              sourcesContent: [
                '@import url("../variables.css");\n\n#headerContainer {\n  display: grid;\n  grid-template-columns: 5rem 5rem 1fr;\n}\n#headerIcon {\n  grid-column: 1;\n  grid-row: 1;\n  width: 100%;\n  align-self: center;\n  justify-self: center;\n}\n#headerTemperature {\n  grid-column: 2;\n  grid-row: 1;\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#headerHumidity {\n  grid-column: 1/3;\n  grid-row: 3;\n  font-size: 0.8rem;\n  color: var(--textMid);\n}\n#headerWind {\n  grid-column: 1/3;\n  grid-row: 4;\n  font-size: 0.8rem;\n  color: var(--textMid);\n}\n\n#headerChanceRain {\n  grid-column: 1/3;\n  grid-row: 2;\n  color: var(--textMid);\n  font-size: 0.8rem;\n}\n\n#headerDay {\n  grid-column: -1;\n  grid-row: 2;\n  text-align: end;\n}\n\n#headerCondition {\n  grid-column: -1;\n  grid-row: 3;\n  text-align: end;\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const c = d;
      },
      402: (n, e, t) => {
        t.d(e, { Z: () => c });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a),
          s = t(728),
          d = o()(r());
        d.i(s.Z),
          d.push([
            n.id,
            "body {\n  background: var(--bgDark);\n  color: var(--textLight);\n}\n",
            "",
            {
              version: 3,
              sources: ["webpack://./src/css/style.css"],
              names: [],
              mappings: "AAEA;EACE,yBAAyB;EACzB,uBAAuB;AACzB",
              sourcesContent: [
                '@import url("./variables.css");\n\nbody {\n  background: var(--bgDark);\n  color: var(--textLight);\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const c = d;
      },
      728: (n, e, t) => {
        t.d(e, { Z: () => s });
        var i = t(537),
          r = t.n(i),
          a = t(645),
          o = t.n(a)()(r());
        o.push([
          n.id,
          ":root {\n  --bgDark: #202124;\n  --textDark: #70717a;\n  --textMid: #7f8089;\n  --textLight: #e8eaed;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/variables.css"],
            names: [],
            mappings:
              "AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;AACtB",
            sourcesContent: [
              ":root {\n  --bgDark: #202124;\n  --textDark: #70717a;\n  --textMid: #7f8089;\n  --textLight: #e8eaed;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = o;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  i = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  i &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  i && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, i, r, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var o = {};
              if (i)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0];
                  null != d && (o[d] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var A = [].concat(n[c]);
                (i && o[A[0]]) ||
                  (void 0 !== a &&
                    (void 0 === A[5] ||
                      (A[1] = "@layer"
                        .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                        .concat(A[1], "}")),
                    (A[5] = a)),
                  t &&
                    (A[2]
                      ? ((A[1] = "@media "
                          .concat(A[2], " {")
                          .concat(A[1], "}")),
                        (A[2] = t))
                      : (A[2] = t)),
                  r &&
                    (A[4]
                      ? ((A[1] = "@supports ("
                          .concat(A[4], ") {")
                          .concat(A[1], "}")),
                        (A[4] = r))
                      : (A[4] = "".concat(r))),
                  e.push(A));
              }
            }),
            e
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var i = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  i,
                ),
              a = "/*# ".concat(r, " */");
            return [e].concat([a]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === n) {
              t = i;
              break;
            }
          return t;
        }
        function i(n, i) {
          for (var a = {}, o = [], s = 0; s < n.length; s++) {
            var d = n[s],
              c = i.base ? d[0] + i.base : d[0],
              A = a[c] || 0,
              l = "".concat(c, " ").concat(A);
            a[c] = A + 1;
            var u = t(l),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(m);
            else {
              var p = r(m, i);
              (i.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: p, references: 1 });
            }
            o.push(l);
          }
          return o;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var a = i((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var o = 0; o < a.length; o++) {
              var s = t(a[o]);
              e[s].references--;
            }
            for (var d = i(n, r), c = 0; c < a.length; c++) {
              var A = t(a[c]);
              0 === e[A].references && (e[A].updater(), e.splice(A, 1));
            }
            a = d;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var i = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          i.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var i = "";
                t.supports && (i += "@supports (".concat(t.supports, ") {")),
                  t.media && (i += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (i += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (i += t.css),
                  r && (i += "}"),
                  t.media && (i += "}"),
                  t.supports && (i += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(i, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { id: i, exports: {} });
    return n[i](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var i in e)
        t.o(e, i) &&
          !t.o(n, i) &&
          Object.defineProperty(n, i, { enumerable: !0, get: e[i] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      const n = {
        Pubsub: {},
        on(n, e) {
          (this.Pubsub[n] = this.Pubsub[n] || []), this.Pubsub[n].push(e);
        },
        off(n, e) {
          if (this.Pubsub[n])
            for (let t = 0; t < this.Pubsub[n].length; t++)
              if (this.Pubsub[n][t] === e) {
                this.Pubsub[n].splice(t, 1);
                break;
              }
        },
        emit(n, e) {
          this.Pubsub[n] &&
            this.Pubsub[n].forEach((n) => {
              n(e);
            });
        },
      };
      var e = t(379),
        i = t.n(e),
        r = t(795),
        a = t.n(r),
        o = t(569),
        s = t.n(o),
        d = t(565),
        c = t.n(d),
        A = t(216),
        l = t.n(A),
        u = t(589),
        m = t.n(u),
        p = t(217),
        h = {};
      (h.styleTagTransform = m()),
        (h.setAttributes = c()),
        (h.insert = s().bind(null, "head")),
        (h.domAPI = a()),
        (h.insertStyleElement = l()),
        i()(p.Z, h),
        p.Z && p.Z.locals && p.Z.locals;
      var f = t(402),
        y = {};
      (y.styleTagTransform = m()),
        (y.setAttributes = c()),
        (y.insert = s().bind(null, "head")),
        (y.domAPI = a()),
        (y.insertStyleElement = l()),
        i()(f.Z, y),
        f.Z && f.Z.locals && f.Z.locals;
      var g = t(27),
        v = {};
      (v.styleTagTransform = m()),
        (v.setAttributes = c()),
        (v.insert = s().bind(null, "head")),
        (v.domAPI = a()),
        (v.insertStyleElement = l()),
        i()(g.Z, v),
        g.Z && g.Z.locals && g.Z.locals;
      class C {
        constructor() {
          (this.container = document.createElement("div")),
            (this.container.id = "headerContainer"),
            (this.imgIcon = document.createElement("img")),
            (this.imgIcon.id = "headerIcon"),
            (this.divTemperature = document.createElement("div")),
            (this.divTemperature.id = "headerTemperature"),
            (this.divHumidity = document.createElement("div")),
            (this.divHumidity.id = "headerHumidity"),
            (this.divWindSpeed = document.createElement("div")),
            (this.divWindSpeed.id = "headerWind"),
            (this.divChanceRain = document.createElement("div")),
            (this.divChanceRain.id = "headerChanceRain"),
            (this.divDay = document.createElement("div")),
            (this.divDay.id = "headerDay"),
            (this.divCondition = document.createElement("div")),
            (this.divCondition.id = "headerCondition"),
            this.container.append(
              this.imgIcon,
              this.divTemperature,
              this.divHumidity,
              this.divWindSpeed,
              this.divChanceRain,
              this.divDay,
              this.divCondition,
            ),
            this.bindEvents();
        }
        bindEvents() {
          n.on("renderHeader", (n) => {
            if ((console.log(n), n.alreadyProcessed)) this.render(n);
            else {
              const { icon: e } = n.forecast.forecastday[0].day.condition,
                { temp_c: t } = n.current,
                { humidity: i } = n.current,
                { wind_kph: r } = n.current,
                { daily_chance_of_rain: a } = n.forecast.forecastday[0].day,
                o = n.forecast.forecastday[0].day.condition.text,
                s = new Date(n.current.last_updated).toLocaleDateString(
                  "en-US",
                  { weekday: "long", timeZone: "UTC" },
                );
              this.render({
                icon: e,
                temp_c: t,
                humidity: i,
                wind_kph: r,
                daily_chance_of_rain: a,
                day: s,
                condition: o,
              });
            }
          });
        }
        render(n) {
          (this.imgIcon.src = n.icon),
            (this.divTemperature.innerText = `${n.temp_c}°`),
            (this.divHumidity.innerText = `Humidity: ${n.humidity}%`),
            (this.divWindSpeed.innerText = `Wind speed: ${n.wind_kph}`),
            (this.divChanceRain.innerText = `Chance of rain: ${n.daily_chance_of_rain}%`),
            (this.divDay.innerText = n.day),
            (this.divCondition.innerText = n.condition);
        }
      }
      var E = t(211),
        B = {};
      (B.styleTagTransform = m()),
        (B.setAttributes = c()),
        (B.insert = s().bind(null, "head")),
        (B.domAPI = a()),
        (B.insertStyleElement = l()),
        i()(E.Z, B),
        E.Z && E.Z.locals && E.Z.locals;
      class b {
        constructor() {
          (this.container = document.createElement("div")),
            (this.container.id = "dayContainer"),
            (this.imgIcon = document.createElement("img")),
            (this.imgIcon.id = "dayIcon"),
            (this.divDayOfWeek = document.createElement("div")),
            (this.divDayOfWeek.id = "dayDay"),
            (this.divTemperatureMAX = document.createElement("div")),
            (this.divTemperatureMAX.id = "dayMax"),
            (this.divTemperatureMIN = document.createElement("div")),
            (this.divTemperatureMIN.id = "dayMin"),
            this.container.append(
              this.imgIcon,
              this.divDayOfWeek,
              this.divTemperatureMAX,
              this.divTemperatureMIN,
            ),
            this.bindEvents();
        }
        render(n) {
          (this.cachedData = n),
            (this.imgIcon.src = n.day.condition.icon),
            (this.divDayOfWeek.innerText = new Date(
              1e3 * n.date_epoch,
            ).toLocaleDateString("en-US", {
              weekday: "short",
              timeZone: "UTC",
            })),
            (this.divTemperatureMAX.innerText = `${n.day.maxtemp_c}°`),
            (this.divTemperatureMIN.innerText = `${n.day.mintemp_c}°`);
        }
        bindEvents() {
          this.container.addEventListener("click", () => {
            const e = {
              alreadyProcessed: !0,
              icon: this.cachedData.day.condition.icon,
              temp_c: this.cachedData.day.avgtemp_c,
              humidity: this.cachedData.day.avghumidity,
              wind_kph: this.cachedData.day.maxwind_kph,
              daily_chance_of_rain: this.cachedData.day.daily_chance_of_rain,
              day: this.cachedData.date,
              condition: this.cachedData.day.condition.text,
            };
            n.emit("renderHeader", e);
          });
        }
      }
      var x = t(343),
        w = {};
      (w.styleTagTransform = m()),
        (w.setAttributes = c()),
        (w.insert = s().bind(null, "head")),
        (w.domAPI = a()),
        (w.insertStyleElement = l()),
        i()(x.Z, w),
        x.Z && x.Z.locals && x.Z.locals;
      class T {
        #n;
        #e;
        constructor() {
          (this.container = document.createElement("div")),
            (this.container.id = "container"),
            (this.day1 = new b()),
            (this.day2 = new b()),
            (this.day3 = new b()),
            this.container.append(
              this.day1.container,
              this.day2.container,
              this.day3.container,
            ),
            this.bindEvents();
        }
        bindEvents() {
          n.on("renderDays", (n) => {
            this.render(n);
          });
        }
        render(n) {
          this.day1.render(n.forecast.forecastday[0]),
            this.day2.render(n.forecast.forecastday[1]),
            this.day3.render(n.forecast.forecastday[2]);
        }
      }
      var k = t(830),
        W = {};
      (W.styleTagTransform = m()),
        (W.setAttributes = c()),
        (W.insert = s().bind(null, "head")),
        (W.domAPI = a()),
        (W.insertStyleElement = l()),
        i()(k.Z, W),
        k.Z && k.Z.locals && k.Z.locals;
      const D = document.querySelector("body"),
        Z = new (class {
          constructor() {
            (this.container = document.createElement("div")),
              (this.container.id = "appContainer"),
              (this.header = new C()),
              (this.daysBar = new T()),
              this.container.append(
                this.header.container,
                this.daysBar.container,
              ),
              this.apiCall();
          }
          apiCall() {
            (async function () {
              const n = await fetch(
                "https://api.weatherapi.com/v1/forecast.json?key=6b50d5938f0b4173a06202148231208&q=montevideo&days=3&aqi=no&alerts=no\n    ",
              );
              return await n.json();
            })().then((e) => {
              (this.cachedWeather = e),
                n.emit("renderHeader", e),
                n.emit("renderDays", e);
            });
          }
          bindEvents() {}
          render() {}
        })();
      D.append(Z.container);
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0MsWUFBWSxJQUMzQ3hJLEtBQUt3SyxLQUFLbkMsT0FBTzdHLEVBQUsrRyxTQUFTQyxZQUFZLEdBQzdDLEUsYUN6QkUsRUFBVSxDQUFDLEVBRWYsRUFBUXpELGtCQUFvQixJQUM1QixFQUFRTixjQUFnQixJQUVsQixFQUFRaEIsT0FBUyxTQUFjLEtBQU0sUUFFM0MsRUFBUVgsT0FBUyxJQUNqQixFQUFRZ0MsbUJBQXFCLElBRWhCLElBQUksSUFBUyxHQUtKLEtBQVcsSUFBUXVDLFFBQVMsSUFBUUEsT0NwQjFELE1BQU1vRCxFQUFPNUcsU0FBU0MsY0FBYyxRQUM5QjRHLEVBQU0sSUNERyxNQUNibkQsV0FBQUEsR0FFRXZILEtBQUt3SCxVQUFZM0QsU0FBU1csY0FBYyxPQUN4Q3hFLEtBQUt3SCxVQUFVOUgsR0FBSyxlQUNwQk0sS0FBSzJLLE9BQVMsSUFBSXJELEVBQ2xCdEgsS0FBSzRLLFFBQVUsSUFBSVAsRUFDbkJySyxLQUFLd0gsVUFBVVEsT0FBT2hJLEtBQUsySyxPQUFPbkQsVUFBV3hILEtBQUs0SyxRQUFRcEQsV0FDMUR4SCxLQUFLNkssU0FDUCxDQUVBQSxPQUFBQSxJQ2pCYUMsaUJBRWIsTUFDTUMsUUFDRUMsTUFBTyw4SEFHZixhQURtQkQsRUFBZUUsTUFFcEMsRURVSUMsR0FBa0JDLE1BQU0zSixJQUN0QnhCLEtBQUtvTCxjQUFnQjVKLEVBQ3JCc0YsRUFBT0ssS0FBSyxlQUFnQjNGLEdBQzVCc0YsRUFBT0ssS0FBSyxhQUFjM0YsRUFBSyxHQUVuQyxDQUVBeUcsVUFBQUEsR0FBYyxDQUVkSSxNQUFBQSxHQUFVLEdEbkJab0MsRUFBS3pDLE9BQU8wQyxFQUFJbEQsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2ZvbnQuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL21vZHVsZXMvQXBwLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9tb2R1bGVzL0RheS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbW9kdWxlcy9EYXlzQmFyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9tb2R1bGVzL0hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3ZhcmlhYmxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2pzL1B1YnN1Yi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9mb250LmNzcz8yOWE0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL21vZHVsZXMvSGVhZGVyLmNzcz8xZWNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvanMvd2VhdGhlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbW9kdWxlcy9EYXkuY3NzP2EzZjYiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9qcy93ZWF0aGVyL0RheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9tb2R1bGVzL0RheXNCYXIuY3NzP2I0YWIiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9qcy93ZWF0aGVyL0RheXNCYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbW9kdWxlcy9BcHAuY3NzPzRiMjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2pzL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2pzL3dlYXRoZXIvQVBJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9udC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2FwcENvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IG1pbig3MDBweCwgMTAwJSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2R1bGVzL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2FwcENvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogbWluKDcwMHB4LCAxMDAlKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vdmFyaWFibGVzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjZGF5Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFyZW0gMWZyIDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZ2FwOiA1cHg7XG59XG5cbiNkYXlEYXkge1xuICBncmlkLXJvdzogMTtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNkYXlJY29uIHtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbiNkYXlNYXgge1xuICBncmlkLXJvdzogMztcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNkYXlNaW4ge1xuICBncmlkLXJvdzogMztcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0TWlkKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2R1bGVzL0RheS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7O0VBRWxCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiLi4vdmFyaWFibGVzLmNzc1xcXCIpO1xcblxcbiNkYXlDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMXJlbSAxZnIgMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNkYXlEYXkge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2RheUljb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNkYXlNYXgge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4jZGF5TWluIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0TWlkKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vZHVsZXMvRGF5c0Jhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi92YXJpYWJsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNoZWFkZXJDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gNXJlbSAxZnI7XG59XG4jaGVhZGVySWNvbiB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4jaGVhZGVyVGVtcGVyYXR1cmUge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jaGVhZGVySHVtaWRpdHkge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0TWlkKTtcbn1cbiNoZWFkZXJXaW5kIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dE1pZCk7XG59XG5cbiNoZWFkZXJDaGFuY2VSYWluIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0TWlkKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbiNoZWFkZXJEYXkge1xuICBncmlkLWNvbHVtbjogLTE7XG4gIGdyaWQtcm93OiAyO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbiNoZWFkZXJDb25kaXRpb24ge1xuICBncmlkLWNvbHVtbjogLTE7XG4gIGdyaWQtcm93OiAzO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kdWxlcy9IZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCIuLi92YXJpYWJsZXMuY3NzXFxcIik7XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDVyZW0gMWZyO1xcbn1cXG4jaGVhZGVySWNvbiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuI2hlYWRlclRlbXBlcmF0dXJlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jaGVhZGVySHVtaWRpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAzO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dE1pZCk7XFxufVxcbiNoZWFkZXJXaW5kIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogNDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHRNaWQpO1xcbn1cXG5cXG4jaGVhZGVyQ2hhbmNlUmFpbiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBjb2xvcjogdmFyKC0tdGV4dE1pZCk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2hlYWRlckRheSB7XFxuICBncmlkLWNvbHVtbjogLTE7XFxuICBncmlkLXJvdzogMjtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuI2hlYWRlckNvbmRpdGlvbiB7XFxuICBncmlkLWNvbHVtbjogLTE7XFxuICBncmlkLXJvdzogMztcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcmlhYmxlcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnRGFyayk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcIi4vdmFyaWFibGVzLmNzc1xcXCIpO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdEYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1iZ0Rhcms6ICMyMDIxMjQ7XG4gIC0tdGV4dERhcms6ICM3MDcxN2E7XG4gIC0tdGV4dE1pZDogIzdmODA4OTtcbiAgLS10ZXh0TGlnaHQ6ICNlOGVhZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnRGFyazogIzIwMjEyNDtcXG4gIC0tdGV4dERhcms6ICM3MDcxN2E7XFxuICAtLXRleHRNaWQ6ICM3ZjgwODk7XFxuICAtLXRleHRMaWdodDogI2U4ZWFlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2xlYXJuY29kZWFjYWRlbXkvNzc3MzQ5NzQ3ZDgzODJiZmI3MjIgKi9cbmNvbnN0IFB1YnN1YiA9IHtcbiAgUHVic3ViOiB7fSxcbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMuUHVic3ViW2V2ZW50TmFtZV0gPSB0aGlzLlB1YnN1YltldmVudE5hbWVdIHx8IFtdO1xuICAgIHRoaXMuUHVic3ViW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuUHVic3ViW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5QdWJzdWJbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5QdWJzdWJbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICB0aGlzLlB1YnN1YltldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5QdWJzdWJbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5QdWJzdWJbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFB1YnN1YjtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9udC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBQdWJzdWIgZnJvbSBcIi4uL1B1YnN1YlwiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL21vZHVsZXMvSGVhZGVyLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBET01cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5jb250YWluZXIuaWQgPSBcImhlYWRlckNvbnRhaW5lclwiO1xuXG4gICAgdGhpcy5pbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0aGlzLmltZ0ljb24uaWQgPSBcImhlYWRlckljb25cIjtcblxuICAgIHRoaXMuZGl2VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZGl2VGVtcGVyYXR1cmUuaWQgPSBcImhlYWRlclRlbXBlcmF0dXJlXCI7XG5cbiAgICB0aGlzLmRpdkh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRpdkh1bWlkaXR5LmlkID0gXCJoZWFkZXJIdW1pZGl0eVwiO1xuXG4gICAgdGhpcy5kaXZXaW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZGl2V2luZFNwZWVkLmlkID0gXCJoZWFkZXJXaW5kXCI7XG5cbiAgICB0aGlzLmRpdkNoYW5jZVJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZGl2Q2hhbmNlUmFpbi5pZCA9IFwiaGVhZGVyQ2hhbmNlUmFpblwiO1xuXG4gICAgdGhpcy5kaXZEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZGl2RGF5LmlkID0gXCJoZWFkZXJEYXlcIjtcblxuICAgIHRoaXMuZGl2Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRpdkNvbmRpdGlvbi5pZCA9IFwiaGVhZGVyQ29uZGl0aW9uXCI7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKFxuICAgICAgdGhpcy5pbWdJY29uLFxuICAgICAgdGhpcy5kaXZUZW1wZXJhdHVyZSxcbiAgICAgIHRoaXMuZGl2SHVtaWRpdHksXG4gICAgICB0aGlzLmRpdldpbmRTcGVlZCxcbiAgICAgIHRoaXMuZGl2Q2hhbmNlUmFpbixcbiAgICAgIHRoaXMuZGl2RGF5LFxuICAgICAgdGhpcy5kaXZDb25kaXRpb24sXG4gICAgKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgUHVic3ViLm9uKFwicmVuZGVySGVhZGVyXCIsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGlmICghZGF0YS5hbHJlYWR5UHJvY2Vzc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgaWNvbiB9ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uO1xuICAgICAgICBjb25zdCB7IHRlbXBfYyB9ID0gZGF0YS5jdXJyZW50O1xuICAgICAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSBkYXRhLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHsgd2luZF9rcGggfSA9IGRhdGEuY3VycmVudDtcbiAgICAgICAgY29uc3QgeyBkYWlseV9jaGFuY2Vfb2ZfcmFpbiB9ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgXCJlbi1VU1wiLFxuICAgICAgICAgIHsgd2Vla2RheTogXCJsb25nXCIsIHRpbWVab25lOiBcIlVUQ1wiIH0sXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVuZGVyKHtcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIHRlbXBfYyxcbiAgICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgICB3aW5kX2twaCxcbiAgICAgICAgICBkYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICBkYXksXG4gICAgICAgICAgY29uZGl0aW9uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGRhdGEpIHtcbiAgICB0aGlzLmltZ0ljb24uc3JjID0gZGF0YS5pY29uO1xuICAgIHRoaXMuZGl2VGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7ZGF0YS50ZW1wX2N9wrBgO1xuICAgIHRoaXMuZGl2SHVtaWRpdHkuaW5uZXJUZXh0ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9JWA7XG4gICAgdGhpcy5kaXZXaW5kU3BlZWQuaW5uZXJUZXh0ID0gYFdpbmQgc3BlZWQ6ICR7ZGF0YS53aW5kX2twaH1gOyAvLyBUT0RPIHVuaXRzXG4gICAgdGhpcy5kaXZDaGFuY2VSYWluLmlubmVyVGV4dCA9IGBDaGFuY2Ugb2YgcmFpbjogJHtkYXRhLmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xuICAgIHRoaXMuZGl2RGF5LmlubmVyVGV4dCA9IGRhdGEuZGF5O1xuICAgIHRoaXMuZGl2Q29uZGl0aW9uLmlubmVyVGV4dCA9IGRhdGEuY29uZGl0aW9uO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGF5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGF5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4uLy4uL2Nzcy9tb2R1bGVzL0RheS5jc3NcIjtcbmltcG9ydCBQdWJzdWIgZnJvbSBcIi4uL1B1YnN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBET01cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5jb250YWluZXIuaWQgPSBcImRheUNvbnRhaW5lclwiO1xuXG4gICAgdGhpcy5pbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0aGlzLmltZ0ljb24uaWQgPSBcImRheUljb25cIjtcblxuICAgIHRoaXMuZGl2RGF5T2ZXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRpdkRheU9mV2Vlay5pZCA9IFwiZGF5RGF5XCI7XG5cbiAgICB0aGlzLmRpdlRlbXBlcmF0dXJlTUFYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmRpdlRlbXBlcmF0dXJlTUFYLmlkID0gXCJkYXlNYXhcIjtcblxuICAgIHRoaXMuZGl2VGVtcGVyYXR1cmVNSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZGl2VGVtcGVyYXR1cmVNSU4uaWQgPSBcImRheU1pblwiO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKFxuICAgICAgdGhpcy5pbWdJY29uLFxuICAgICAgdGhpcy5kaXZEYXlPZldlZWssXG4gICAgICB0aGlzLmRpdlRlbXBlcmF0dXJlTUFYLFxuICAgICAgdGhpcy5kaXZUZW1wZXJhdHVyZU1JTixcbiAgICApO1xuXG4gICAgLy8gRVZFTlRTXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICByZW5kZXIoZGF0YSkge1xuICAgIHRoaXMuY2FjaGVkRGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pbWdJY29uLnNyYyA9IGRhdGEuZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIHRoaXMuZGl2RGF5T2ZXZWVrLmlubmVyVGV4dCA9IG5ldyBEYXRlKFxuICAgICAgZGF0YS5kYXRlX2Vwb2NoICogMTAwMCxcbiAgICApLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJzaG9ydFwiLCB0aW1lWm9uZTogXCJVVENcIiB9KTtcbiAgICB0aGlzLmRpdlRlbXBlcmF0dXJlTUFYLmlubmVyVGV4dCA9IGAke2RhdGEuZGF5Lm1heHRlbXBfY33CsGA7XG4gICAgdGhpcy5kaXZUZW1wZXJhdHVyZU1JTi5pbm5lclRleHQgPSBgJHtkYXRhLmRheS5taW50ZW1wX2N9wrBgO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgYWxyZWFkeVByb2Nlc3NlZDogdHJ1ZSxcbiAgICAgICAgaWNvbjogdGhpcy5jYWNoZWREYXRhLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgdGVtcF9jOiB0aGlzLmNhY2hlZERhdGEuZGF5LmF2Z3RlbXBfYyxcbiAgICAgICAgaHVtaWRpdHk6IHRoaXMuY2FjaGVkRGF0YS5kYXkuYXZnaHVtaWRpdHksXG4gICAgICAgIHdpbmRfa3BoOiB0aGlzLmNhY2hlZERhdGEuZGF5Lm1heHdpbmRfa3BoLFxuICAgICAgICBkYWlseV9jaGFuY2Vfb2ZfcmFpbjogdGhpcy5jYWNoZWREYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgZGF5OiB0aGlzLmNhY2hlZERhdGEuZGF0ZSxcbiAgICAgICAgY29uZGl0aW9uOiB0aGlzLmNhY2hlZERhdGEuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgfTtcbiAgICAgIFB1YnN1Yi5lbWl0KFwicmVuZGVySGVhZGVyXCIsIGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGF5c0Jhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RheXNCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFB1YnN1YiBmcm9tIFwiLi4vUHVic3ViXCI7XG5pbXBvcnQgRGF5IGZyb20gXCIuL0RheVwiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL21vZHVsZXMvRGF5c0Jhci5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5c0JhciB7XG4gICNvdXRwdXQ7XG5cbiAgI3dlYXRoZXJPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRE9NXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcbiAgICB0aGlzLmRheTEgPSBuZXcgRGF5KCk7XG4gICAgdGhpcy5kYXkyID0gbmV3IERheSgpO1xuICAgIHRoaXMuZGF5MyA9IG5ldyBEYXkoKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICB0aGlzLmRheTEuY29udGFpbmVyLFxuICAgICAgdGhpcy5kYXkyLmNvbnRhaW5lcixcbiAgICAgIHRoaXMuZGF5My5jb250YWluZXIsXG4gICAgKTtcblxuICAgIC8vIEVWRU5UU1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICBQdWJzdWIub24oXCJyZW5kZXJEYXlzXCIsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcihkYXRhKSB7XG4gICAgdGhpcy5kYXkxLnJlbmRlcihkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdKTtcbiAgICB0aGlzLmRheTIucmVuZGVyKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0pO1xuICAgIHRoaXMuZGF5My5yZW5kZXIoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHF1ZXJ5V2VhdGhlckFQSSBmcm9tIFwiLi9qcy93ZWF0aGVyL0FQSVwiO1xuaW1wb3J0IFB1YnN1YiBmcm9tIFwiLi9qcy9QdWJzdWJcIjtcbmltcG9ydCBcIi4vY3NzL2ZvbnQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vanMvQXBwXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmJvZHkuYXBwZW5kKGFwcC5jb250YWluZXIpO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi93ZWF0aGVyL0hlYWRlclwiO1xuaW1wb3J0IERheXNCYXIgZnJvbSBcIi4vd2VhdGhlci9EYXlzQmFyXCI7XG5pbXBvcnQgcXVlcnlXZWF0aGVyQVBJIGZyb20gXCIuL3dlYXRoZXIvQVBJXCI7XG5pbXBvcnQgUHVic3ViIGZyb20gXCIuL1B1YnN1YlwiO1xuaW1wb3J0IFwiLi4vY3NzL21vZHVsZXMvQXBwLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBET01cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5jb250YWluZXIuaWQgPSBcImFwcENvbnRhaW5lclwiO1xuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICAgIHRoaXMuZGF5c0JhciA9IG5ldyBEYXlzQmFyKCk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLmNvbnRhaW5lciwgdGhpcy5kYXlzQmFyLmNvbnRhaW5lcik7XG4gICAgdGhpcy5hcGlDYWxsKCk7XG4gIH1cblxuICBhcGlDYWxsKCkge1xuICAgIHF1ZXJ5V2VhdGhlckFQSSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVkV2VhdGhlciA9IGRhdGE7XG4gICAgICBQdWJzdWIuZW1pdChcInJlbmRlckhlYWRlclwiLCBkYXRhKTtcbiAgICAgIFB1YnN1Yi5lbWl0KFwicmVuZGVyRGF5c1wiLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7fVxuXG4gIHJlbmRlcigpIHt9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBxdWVyeVdlYXRoZXJBUEkoKSB7XG4gIC8vIGNvbnN0IHJlcXVlc3RMb2NhdGlvbiA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2lwLWFwaS5jb20vanNvbi9cIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gXCJtb250ZXZpZGVvXCI7XG4gIGNvbnN0IHJlcXVlc3RXZWF0aGVyID1cbiAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NmI1MGQ1OTM4ZjBiNDE3M2EwNjIwMjE0ODIzMTIwOCZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXG4gICAgYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0V2VhdGhlci5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiaSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsIl9rIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuYyIsIlB1YnN1YiIsIm9uIiwiZXZlbnROYW1lIiwiZm4iLCJvZmYiLCJlbWl0IiwiZm9yRWFjaCIsImxvY2FscyIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiaW1nSWNvbiIsImRpdlRlbXBlcmF0dXJlIiwiZGl2SHVtaWRpdHkiLCJkaXZXaW5kU3BlZWQiLCJkaXZDaGFuY2VSYWluIiwiZGl2RGF5IiwiZGl2Q29uZGl0aW9uIiwiYXBwZW5kIiwiYmluZEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJhbHJlYWR5UHJvY2Vzc2VkIiwicmVuZGVyIiwiaWNvbiIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJjb25kaXRpb24iLCJ0ZW1wX2MiLCJjdXJyZW50IiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwidGV4dCIsIkRhdGUiLCJsYXN0X3VwZGF0ZWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwidGltZVpvbmUiLCJzcmMiLCJpbm5lclRleHQiLCJEYXkiLCJkaXZEYXlPZldlZWsiLCJkaXZUZW1wZXJhdHVyZU1BWCIsImRpdlRlbXBlcmF0dXJlTUlOIiwiY2FjaGVkRGF0YSIsImRhdGVfZXBvY2giLCJtYXh0ZW1wX2MiLCJtaW50ZW1wX2MiLCJhZGRFdmVudExpc3RlbmVyIiwiYXZndGVtcF9jIiwiYXZnaHVtaWRpdHkiLCJtYXh3aW5kX2twaCIsImRhdGUiLCJEYXlzQmFyIiwiZGF5MSIsImRheTIiLCJkYXkzIiwiYm9keSIsImFwcCIsImhlYWRlciIsImRheXNCYXIiLCJhcGlDYWxsIiwiYXN5bmMiLCJyZXF1ZXN0V2VhdGhlciIsImZldGNoIiwianNvbiIsInF1ZXJ5V2VhdGhlckFQSSIsInRoZW4iLCJjYWNoZWRXZWF0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
