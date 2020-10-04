!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var d = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(d.exports, d, d.exports, t), (d.l = !0), d.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var d in e)
          t.d(
            r,
            d,
            function (n) {
              return e[n];
            }.bind(null, d)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 11));
})([
  function (e, n, t) {
    "use strict";
    e.exports = function (e, n) {
      return (
        n || (n = {}),
        "string" != typeof (e = e && e.__esModule ? e.default : e)
          ? e
          : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
            n.hash && (e += n.hash),
            /["'() \t\n]/.test(e) || n.needQuotes
              ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
              : e)
      );
    };
  },
  function (e, n, t) {
    "use strict";
    e.exports = function (e) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var t = (function (e, n) {
              var t = e[1] || "",
                r = e[3];
              if (!r) return t;
              if (n && "function" == typeof btoa) {
                var d =
                    ((i = r),
                    (o = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      o
                    )),
                    "/*# ".concat(c, " */")),
                  a = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [t].concat(a).concat([d]).join("\n");
              }
              var i, o, c;
              return [t].join("\n");
            })(n, e);
            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
          }).join("");
        }),
        (n.i = function (e, t, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var d = {};
          if (r)
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              null != i && (d[i] = !0);
            }
          for (var o = 0; o < e.length; o++) {
            var c = [].concat(e[o]);
            (r && d[c[0]]) ||
              (t &&
                (c[2]
                  ? (c[2] = "".concat(t, " and ").concat(c[2]))
                  : (c[2] = t)),
              n.push(c));
          }
        }),
        n
      );
    };
  },
  function (e, n, t) {
    "use strict";
    n.a = t.p + "44a4af8f92abdd16b00d1035c90c8df9.png";
  },
  function (e, n, t) {
    "use strict";
    n.a = t.p + "b360be3804f27b6cc1b7e9c32682b478.png";
  },
  function (e, n, t) {
    "use strict";
    n.a = t.p + "cbe1fc1def56ed9aba548edc39e36706.png";
  },
  function (e, n, t) {
    "use strict";
    n.a = t.p + "8a1e27e5f035e22907bb1b567b39647b.png";
  },
  function (e, n, t) {
    "use strict";
    n.a = t.p + "1a760c84dff17d524bac25ce1cd38f82.png";
  },
  function (e, n, t) {
    "use strict";
    n.a = t.p + "20ef753793ddf9a9c6beaefd0b7e3b7c.png";
  },
  function (e, n, t) {
    var r = t(9),
      d = t(10);
    "string" == typeof (d = d.__esModule ? d.default : d) &&
      (d = [[e.i, d, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(d, a);
    e.exports = d.locals || {};
  },
  function (e, n, t) {
    "use strict";
    var r,
      d = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      a = (function () {
        var e = {};
        return function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        };
      })(),
      i = [];
    function o(e) {
      for (var n = -1, t = 0; t < i.length; t++)
        if (i[t].identifier === e) {
          n = t;
          break;
        }
      return n;
    }
    function c(e, n) {
      for (var t = {}, r = [], d = 0; d < e.length; d++) {
        var a = e[d],
          c = n.base ? a[0] + n.base : a[0],
          l = t[c] || 0,
          s = "".concat(c, " ").concat(l);
        t[c] = l + 1;
        var u = o(s),
          p = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== u
          ? (i[u].references++, i[u].updater(p))
          : i.push({ identifier: s, updater: g(p, n), references: 1 }),
          r.push(s);
      }
      return r;
    }
    function l(e) {
      var n = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var d = t.nc;
        d && (r.nonce = d);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          n.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(n);
      else {
        var i = a(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(n);
      }
      return n;
    }
    var s,
      u =
        ((s = []),
        function (e, n) {
          return (s[e] = n), s.filter(Boolean).join("\n");
        });
    function p(e, n, t, r) {
      var d = t
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = u(n, d);
      else {
        var a = document.createTextNode(d),
          i = e.childNodes;
        i[n] && e.removeChild(i[n]),
          i.length ? e.insertBefore(a, i[n]) : e.appendChild(a);
      }
    }
    function h(e, n, t) {
      var r = t.css,
        d = t.media,
        a = t.sourceMap;
      if (
        (d ? e.setAttribute("media", d) : e.removeAttribute("media"),
        a &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var m = null,
      f = 0;
    function g(e, n) {
      var t, r, d;
      if (n.singleton) {
        var a = f++;
        (t = m || (m = l(n))),
          (r = p.bind(null, t, a, !1)),
          (d = p.bind(null, t, a, !0));
      } else
        (t = l(n)),
          (r = h.bind(null, t, n)),
          (d = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          });
      return (
        r(e),
        function (n) {
          if (n) {
            if (
              n.css === e.css &&
              n.media === e.media &&
              n.sourceMap === e.sourceMap
            )
              return;
            r((e = n));
          } else d();
        }
      );
    }
    e.exports = function (e, n) {
      (n = n || {}).singleton ||
        "boolean" == typeof n.singleton ||
        (n.singleton = d());
      var t = c((e = e || []), n);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < t.length; r++) {
            var d = o(t[r]);
            i[d].references--;
          }
          for (var a = c(e, n), l = 0; l < t.length; l++) {
            var s = o(t[l]);
            0 === i[s].references && (i[s].updater(), i.splice(s, 1));
          }
          t = a;
        }
      };
    };
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    var r = t(1),
      d = t.n(r),
      a = t(0),
      i = t.n(a),
      o = t(2),
      c = t(3),
      l = t(4),
      s = t(5),
      u = t(6),
      p = t(7),
      h = d()(!1),
      m = i()(o.a),
      f = i()(c.a),
      g = i()(l.a),
      b = i()(s.a),
      v = i()(u.a),
      y = i()(p.a);
    h.push([
      e.i,
      "body {\n    height: 100%;\n    position: relative;\n    margin: 0;\n    padding: 0;\n\n}\n\nhtml {\n    height: 100%;\n}\n\n#page-container {\n    position: relative;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n\n#side-bar {\n    background: #d0d0d091;\n    width: 35%;\n    height: 100%;\n    display: flex;\n    flex-flow: column wrap;\n    align-items: center;\n    position: fixed;\n}\n\n/* #side-bar.hidden {\n    background: #ff777791;\n    width: 10%;\n    height: 100%;\n    display: flex;\n    flex-flow: column wrap;\n    align-items: center;\n    padding: 5% 0.5%;\n} */\n\n#projects-holder {\n    height: auto;\n    width: 65%;\n    display: flex;\n    align-items: center;\n    flex-flow: column wrap;\n    margin-left: 35%;\n    overflow: auto;\n    justify-content: space-evenly;\n}\n#hide-btn {\n    margin-top: 12%;\n    height: 3em;\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#projects {\n    margin-top: 12%;\n    width: 65%;   \n}\n\n#projects.closed {\n    height: 3em;\n    overflow: hidden;\n}\n\n#projects-heading {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n    transition: 1.1s;\n\n}\n.projects-entry {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    overflow: hidden;\n    justify-content: end;\n    transition: 1.1s;\n}\n\n#hide-btn-icon {  \n    background: url(" +
        m +
        ");\n    background-size: cover;\n    height: 3em;\n    width: 3em;\n    cursor: pointer;\n}\n\n.open-icon {\n    background: url(" +
        f +
        ");\n    background-size: cover;\n    height: 30px;\n    width: 30px;\n    cursor: pointer;\n    margin-left: 0;\n    flex-shrink: 0;\n}\n\n.close-icon {\n    background: url(" +
        g +
        ");\n    background-size: cover;\n    height: 30px;\n    width: 30px;\n    cursor: pointer;\n    margin-left: 0;\n    flex-shrink: 0;\n}\n\n.add-icon {\n    background: url(" +
        b +
        ");\n    background-size: cover;\n    height: 2em;\n    width: 2em;\n    cursor: pointer;\n    margin-left: auto;\n}\n.add-icon:hover {\n    transform: scale(1.1);\n    transition: 0.1s;\n} \n\n#hide-btn-text {\n    margin-left: 3%;\n    font-size: 250%;\n}\n\n#hide-btn-text.hidden {\n    font-size: 0%;\n}\n\n.side-bar-entry {\n    margin-left: 5%;\n    font-size: 150%;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n#overlay {\n    position: fixed;\n    display: none;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 2;\n    justify-content: center;\n    align-items: center;\n}\n\n#project-input-form {\n    width: 32%;\n    text-align: center;\n    background-color: #ddd8d8;\n    font-size: 125%;\n    border-radius: 10px;\n    border: solid black;\n}\n\n#task-input-form {\n    width: 32%;\n    text-align: center;\n    background-color: #ddd8d8;\n    font-size: 125%;\n    border-radius: 10px;\n    border: solid black;\n}\n\n/* #close-btn {\n    float: right;\n    margin-top: 3%;\n    background: unset !important;\n    font-size: 100%;\n    color: #000000a8;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n} */\n\n#add-project-buttons {\n    display: flex;\n    justify-content: space-between;\n}\n\n#add-project-button-cancel {\n    width: 50%;\n    padding: 1% 1% 1% 1%;\n    border-bottom-left-radius: 6px;\n    background: #FFF;\n    color: #000;\n    border:none;   \n    border-right: solid #ddd8d8a6; \n}\n\n#add-project-button-create {\n    width: 50%;\n    padding: 1% 1% 1% 1%;\n    border-bottom-right-radius: 6px;\n    background: #FFF;\n    color: #000;\n    border:none;\n}\n\n.project {\n    margin-top: 5%;\n    width: 60%;\n    height: 90%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: inherit;\n}\n\n.project-heading {\n    color: white;\n    font-size: 150%;\n    width: 150%;\n    padding: 5% 0 5% 0;\n    background: gray;\n    margin-bottom: 5%;\n    border-radius: 12px;\n    border: solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-title {\n    margin-left: auto;\n}\n\n.task-holder{\n    height:100%;\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    border: solid black;\n    background:gray;\n    margin-bottom: 5%;\n    justify-content: center;\n}\n\n.task-edit-btn{\n    background-image: url(" +
        v +
        ");\n    background-size: cover;\n    width: 40px;\n    height: 40px;\n    margin-left: auto;\n    margin-right: 2%;\n    cursor: pointer;\n}\n.task-edit-btn:hover {\n    transform: scale(1.1);\n    transition: 0.1s;\n} \n\n.task-delete-btn{\n    background-image: url(" +
        y +
        ");\n    background-size: cover;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n}\n\n.task-delete-btn:hover {\n    transform: scale(1.1);\n    transition: 0.1s;\n} \n\n.project-heading-add-icon {\n    background: url(" +
        b +
        ");\n    background-size: cover;\n    height: 2em;\n    width: 2em;\n    cursor: pointer;\n    margin-left: auto;\n}\n.project-heading-add-icon:hover {\n    transform: scale(1.1);\n    transition: 0.1s;\n} \n\n#add-task-buttons {\n    display: flex;\n    justify-content: space-between;\n}\n\n#add-task-button-cancel {\n    width: 50%;\n    padding: 1% 1% 1% 1%;\n    border-bottom-left-radius: 6px;\n    background: #FFF;\n    color: #000;\n    border:none;   \n    border-right: solid #ddd8d8a6; \n}\n\n#add-task-button-create {\n    width: 50%;\n    padding: 1% 1% 1% 1%;\n    border-bottom-right-radius: 6px;\n    background: #FFF;\n    color: #000;\n    border:none;\n}\n\n.task-description {\n    width: 100%;\n    text-align: center;\n    padding: 4% 0;\n}\n\n.task-buttons {\n    display: flex;\n    margin-left: auto;\n}\n\n.task-upper-row {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.task-checkbox {\n    margin-right: auto;\n    margin-left: 9%;\n}\n\n.task-title {\n    text-align: center;\n}\n\n.task-priority-bar{\n    background: red;\n    height: 3px;\n    width: 100%;\n    margin: 0;\n}\n\n.projects-sidebar-heading {\n    width: 100%;\n    display: flex;\n    margin-bottom: 2%;\n}\n\n.task-sidebar-heading {\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center\n}\n\n.task-sidebar-icon {\n    height: 20px;\n    width: 20px;\n    margin-right:auto;\n    flex-shrink: 0;\n    background: red;\n    border-radius: 20px;\n}\n\n.task-entry {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    overflow: hidden;\n    width: 85%;\n    margin-bottom: 2%;\n}\n\n.side-bar-entry-task {\n    margin-left: 5%;\n    font-size: 100%;\n    overflow: hidden;\n    width: inherit;\n}\n\n.projects-entry.closed {\n    height: 2em;\n}",
      "",
    ]),
      (n.default = h);
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    t(8);
    function r(e) {
      return document.createElement(e);
    }
    function d(e) {
      switch (e) {
        case "Low":
          return "#0f0";
        case "Medium":
          return "#ff0";
        case "High":
          return "#f00";
        default:
          return "Error";
      }
    }
    var a = function () {
      document.getElementById("overlay").innerHTML = "";
      const e = document.createElement("div");
      e.id = "project-input-form";
      const n = document.createElement("input");
      (n.type = "text"), (n.placeholder = "name"), (n.required = !0);
      const t = document.createElement("div");
      t.id = "add-project-buttons";
      const r = document.createElement("button");
      (r.id = "add-project-button-cancel"), (r.textContent = "Cancel");
      const d = document.createElement("button");
      (d.id = "add-project-button-create"),
        (d.textContent = "Create"),
        t.appendChild(r),
        t.appendChild(d),
        e.appendChild(document.createElement("br")),
        e.appendChild(n),
        e.appendChild(document.createElement("br")),
        e.appendChild(document.createElement("br")),
        e.appendChild(t),
        document.getElementById("overlay").appendChild(e);
    };
    var i = function () {
      document.getElementById("overlay").innerHTML = "";
      const e = document.createElement("div");
      e.id = "task-input-form";
      const n = document.createElement("input");
      (n.type = "text"), (n.placeholder = "Title"), (n.required = !0);
      const t = document.createElement("textarea");
      (t.placeholder = "Description"), (t.required = !0);
      const r = document.createElement("div"),
        d = document.createElement("span");
      (d.style.fontSize = "12px"), (d.textContent = "Deadline: ");
      const a = document.createElement("input");
      (a.type = "date"),
        (a.placeholder = "Due Date"),
        (a.required = !0),
        r.appendChild(d),
        r.appendChild(a);
      const i = document.createElement("div"),
        o = document.createElement("span");
      (o.style.fontSize = "12px"), (o.textContent = "Priority: ");
      const c = document.createElement("select");
      c.required = !0;
      const l = document.createElement("option");
      (l.value = "Low"), (l.textContent = "Low");
      const s = document.createElement("option");
      (s.value = "Medium"), (s.textContent = "Medium");
      const u = document.createElement("option");
      (u.value = "High"),
        (u.textContent = "High"),
        i.appendChild(o),
        i.appendChild(c),
        c.appendChild(l),
        c.appendChild(s),
        c.appendChild(u);
      const p = document.createElement("div");
      p.id = "add-task-buttons";
      const h = document.createElement("button");
      (h.id = "add-task-button-cancel"), (h.textContent = "Cancel");
      const m = document.createElement("button");
      (m.id = "add-task-button-create"),
        (m.textContent = "Create"),
        p.appendChild(h),
        p.appendChild(m),
        e.appendChild(document.createElement("br")),
        e.appendChild(n),
        e.appendChild(document.createElement("br")),
        e.appendChild(document.createElement("br")),
        e.appendChild(t),
        e.appendChild(document.createElement("br")),
        e.appendChild(document.createElement("br")),
        e.appendChild(r),
        e.appendChild(document.createElement("br")),
        e.appendChild(document.createElement("br")),
        e.appendChild(i),
        e.appendChild(document.createElement("br")),
        e.appendChild(document.createElement("br")),
        e.appendChild(p),
        document.getElementById("overlay").appendChild(e);
    };
    const o = document.getElementById("projects"),
      c = document.getElementById("projects-holder"),
      l = document.getElementById("projects-open-icon"),
      s = document.getElementById("projects-add-icon"),
      u = document.getElementById("overlay"),
      p = (() => {
        const e = [];
        function* n(e) {
          let n = e;
          for (;;) yield n, (n += 1);
        }
        const t = n(0);
        return {
          addToProjects: (r) => {
            const d = {
              name: r,
              tasks: [],
              id: t.next().value,
              taskIdGenerator: n(0),
            };
            e.push(d);
          },
          getProjects: () => e,
          addTaskToProject: (n, t) => {
            const r = e.find((e) => n === e.id),
              d = {
                name: t.children[0].children[1].value,
                description: t.children[2].children[0].value,
                dueDate: t.children[3].children[0].valueAsDate,
                priority: t.children[1].value,
                id: r.taskIdGenerator.next().value,
              };
            r.tasks.push(d);
          },
          deleteTaskFromProject: (n, t) => {
            const r = e.find((e) => n === e.id),
              d = r.tasks.findIndex((e) => t === e.id);
            r.tasks.splice(d, 1);
          },
          editTask: (n, t, r) => {
            const d = e.findIndex((e) => e.id === n),
              a = e[d].tasks.findIndex((e) => e.id === t),
              i = {
                name: r.children[0].children[1].value,
                description: r.children[2].children[0].value,
                dueDate: r.children[3].children[0].valueAsDate,
                priority: r.children[1].value,
                id: t,
              };
            e[d].tasks[a] = i;
          },
          getLatestProjectId: () => e[e.length - 1].id,
          getLatestTaskId: (n) =>
            e[n.value].tasks[e[n.value].tasks.length - 1].id,
        };
      })(),
      h = (() => {
        const e = [],
          n = () => {
            u.style.display = "flex";
          },
          t = () => {
            u.style.display = "none";
          },
          s = (n, t) => {
            e[n] = t;
          },
          h = (e) => {
            const n = e;
            n.children[1] &&
              (n.classList.contains("closed")
                ? (n.classList.remove("closed"),
                  (n.children[0].children[0].className = "close-icon"))
                : (n.classList.add("closed"),
                  (n.children[0].children[0].className = "open-icon")));
          },
          m = (r, a, o) => {
            const c = r,
              l = a,
              u = o;
            !1 === u
              ? (i(),
                n(),
                document
                  .getElementById("add-task-button-cancel")
                  .addEventListener("click", t),
                document
                  .getElementById("add-task-button-create")
                  .addEventListener("click", () => g(c, l)))
              : (i(),
                (document.getElementById("add-task-button-create").textContent =
                  "Edit"),
                n(),
                (document.getElementById("task-input-form").children[1].value =
                  l.children[u].children[0].children[1].value),
                (document.getElementById("task-input-form").children[4].value =
                  l.children[u].children[2].children[0].value),
                (document.getElementById(
                  "task-input-form"
                ).children[7].children[1].value =
                  l.children[u].children[3].children[0].value),
                (document.getElementById(
                  "task-input-form"
                ).children[10].children[1].value =
                  l.children[u].children[1].value),
                document
                  .getElementById("add-task-button-cancel")
                  .addEventListener("click", t),
                document
                  .getElementById("add-task-button-create")
                  .addEventListener("click", () => {
                    (l.children[
                      u
                    ].children[0].children[1].value = document.getElementById(
                      "task-input-form"
                    ).children[1].value),
                      (l.children[
                        u
                      ].children[2].children[0].value = document.getElementById(
                        "task-input-form"
                      ).children[4].value),
                      (l.children[
                        u
                      ].children[3].children[0].value = document.getElementById(
                        "task-input-form"
                      ).children[7].children[1].value),
                      (l.children[
                        u
                      ].children[1].value = document.getElementById(
                        "task-input-form"
                      ).children[10].children[1].value),
                      (l.children[u].children[1].style.background = d(
                        document.getElementById("task-input-form").children[10]
                          .children[1].value
                      )),
                      (c.children[
                        u + 1
                      ].children[0].children[1].textContent = document.getElementById(
                        "task-input-form"
                      ).children[1].value),
                      (c.children[
                        u + 1
                      ].children[0].children[0].style.background = d(
                        document.getElementById("task-input-form").children[10]
                          .children[1].value
                      )),
                      p.editTask(l.value, l.children[u].value, l.children[u]),
                      t(),
                      s(l.value, l.parentElement),
                      console.log(e);
                  }));
          },
          f = () => {
            const n = document.getElementById("project-input-form").children[1]
              .value;
            if (n) {
              c.innerHTML = "";
              const r = (function (e) {
                const n = document.createElement("div");
                n.className = "projects-entry";
                const t = document.createElement("div");
                t.className = "projects-sidebar-heading";
                const r = document.createElement("div");
                r.className = "open-icon";
                const d = document.createElement("span");
                return (
                  (d.className = "side-bar-entry"),
                  (d.textContent = e),
                  t.appendChild(r),
                  t.appendChild(d),
                  n.appendChild(t),
                  n
                );
              })(n);
              o.appendChild(r),
                r.children[0].children[0].addEventListener("click", () => h(r)),
                r.children[0].children[1].addEventListener("click", () => {
                  return (
                    (n = r.value), (c.innerHTML = ""), void c.appendChild(e[n])
                  );
                  var n;
                }),
                o.classList.add("closed"),
                h(o);
              const d = (function (e) {
                const n = document.createElement("div");
                n.className = "project";
                const t = document.createElement("div");
                t.className = "project-heading";
                const r = document.createElement("span");
                (r.className = "project-title"), (r.textContent = e);
                const d = document.createElement("div");
                (d.className = "project-heading-add-icon"),
                  t.appendChild(r),
                  t.appendChild(d);
                const a = document.createElement("div");
                return (
                  (a.className = "task-holder"),
                  n.appendChild(t),
                  n.appendChild(a),
                  n
                );
              })(n);
              d.children[0].children[1].addEventListener("click", () =>
                m(r, d.children[1], !1)
              ),
                c.appendChild(d),
                p.addToProjects(n),
                (d.children[1].value = p.getLatestProjectId()),
                (r.value = d.children[1].value),
                e.push(d),
                t();
            }
            l.className = "close-icon";
          },
          g = (e, n) => {
            const a = e,
              i = n,
              o = document.getElementById("task-input-form").children[1].value,
              c = document.getElementById("task-input-form").children[4].value,
              l = document.getElementById("task-input-form").children[7]
                .children[1].value,
              u = document.getElementById("task-input-form").children[10]
                .children[1].value;
            if (o && l && u) {
              const e = (function (e, n, t, a) {
                const i = r("div");
                i.className = "task-entry";
                const o = r("div");
                o.className = "task-sidebar-heading";
                const c = r("div");
                (c.className = "task-sidebar-icon"),
                  (c.style.background = d(a));
                const l = r("span");
                return (
                  (l.className = "side-bar-entry-task"),
                  (l.textContent = e),
                  o.appendChild(c),
                  o.appendChild(l),
                  i.appendChild(o),
                  i
                );
              })(o, 0, 0, u);
              a.appendChild(e), a.classList.add("closed"), h(a);
              const n = (function (e, n, t, a) {
                const i = r("div");
                i.className = "task";
                const o = r("div");
                o.className = "task-upper-row";
                const c = r("input");
                (c.className = "task-checkbox"), (c.type = "checkbox");
                const l = r("input");
                (l.className = "task-title"),
                  (l.type = "text"),
                  (l.value = e),
                  (l.disabled = !0);
                const s = r("div");
                s.className = "task-buttons";
                const u = r("div");
                u.className = "task-edit-btn";
                const p = r("div");
                (p.className = "task-delete-btn"),
                  s.appendChild(u),
                  s.appendChild(p),
                  o.appendChild(c),
                  o.appendChild(l),
                  o.appendChild(s);
                const h = r("hr");
                (h.className = "task-priority-bar"),
                  (h.style.background = d(a)),
                  (h.value = a);
                const m = r("div");
                m.className = "task-description";
                const f = r("textarea");
                (f.value = n),
                  (f.cols = 40),
                  (f.rows = 10),
                  (f.style.resize = "none"),
                  (f.style.padding = "1%"),
                  (f.disabled = !0),
                  m.appendChild(f);
                const g = r("div");
                g.className = "task-due-date";
                const b = r("input");
                return (
                  (b.type = "date"),
                  (b.value = t),
                  (b.disabled = !0),
                  g.appendChild(b),
                  i.appendChild(o),
                  i.appendChild(h),
                  i.appendChild(m),
                  i.appendChild(g),
                  i
                );
              })(o, c, l, u);
              i.appendChild(n),
                p.addTaskToProject(i.value, n),
                t(),
                (i.lastChild.value = p.getLatestTaskId(i)),
                (a.lastChild.value = i.lastChild.value),
                i.lastChild.children[0].children[2].children[1].addEventListener(
                  "click",
                  (t) => {
                    p.deleteTaskFromProject(
                      i.value,
                      t.target.parentElement.parentElement.parentElement.value
                    ),
                      e.remove(),
                      n.remove(),
                      s(i.value, i.parentElement);
                  }
                ),
                i.lastChild.children[0].children[2].children[0].addEventListener(
                  "click",
                  (e) => {
                    m(
                      a,
                      i,
                      Array.from(
                        e.target.parentElement.parentElement.parentElement
                          .parentElement.children
                      ).indexOf(n)
                    );
                  }
                );
            }
            s(i.value, i.parentElement);
          };
        return {
          openProjectPrompt: () => {
            a(),
              n(),
              document
                .getElementById("add-project-button-cancel")
                .addEventListener("click", t),
              document
                .getElementById("add-project-button-create")
                .addEventListener("click", f);
          },
          showOverlay: n,
          hideOverlay: t,
          createFinalProject: f,
          closeEntry: h,
        };
      })();
    l.addEventListener("click", () => h.closeEntry(o)),
      s.addEventListener("click", h.openProjectPrompt);
  },
]);
