(this.webpackJsonpfh02 = this.webpackJsonpfh02 || []).push([[0], {
    13: function (e, n, t) {
        e.exports = t(23)
    }, 19: function (e, n, t) {
    }, 23: function (e, n, t) {
        "use strict";
        t.r(n);
        var a = t(0), o = t.n(a), u = t(10), r = t.n(u), s = (t(18), t(19), t(2)), l = t(3), i = t(6), c = t(4),
            p = t(7), d = t(12), h = t(25), m = .3, y = .5, v = 0, f = 1, g = window, k = {
                C: 261.63,
                Cis: 277.18,
                D: 293.66,
                Dis: 311.13,
                E: 329.63,
                F: 349.23,
                Fis: 369.99,
                G: 392,
                Gis: 415.3,
                A: 440,
                Ais: 466.16,
                B: 493.88,
                C2: 523.26
            }, C = new (function () {
                function e() {
                    Object(s.a)(this, e), this.audioCtx = new (g.AudioContext || g.webkitAudioContext), this.gain1 = void 0, this.myGain = void 0, this.gain1 = [], this.gain1.length = 15;
                    for (var n = 0; n < 15; n++) this.gain1[n] = this.audioCtx.createGain(), this.gain1[n].connect(this.audioCtx.destination);
                    for (var t = 0; t < 15; t++) this.gain1[t].gain.value = m / 10
                }

                return Object(l.a)(e, [{
                    key: "getGainNode", value: function () {
                        return m
                    }
                }, {
                    key: "getsweepDifferenz", value: function () {
                        return v
                    }
                }, {
                    key: "getTonLaenge", value: function () {
                        return y
                    }
                }, {
                    key: "setOctavmtpl", value: function (e) {
                        f = e, console.log(f)
                    }
                }, {
                    key: "volumePlus", value: function () {
                        m < 1 ? m += .01 : m = 1;
                        for (var e = 0; e < 15; e++) this.gain1[e].gain.value = m / 6
                    }
                }, {
                    key: "volumeMinus", value: function () {
                        m > .01 ? m -= .01 : m = 0;
                        for (var e = 0; e < 15; e++) this.gain1[e].gain.value = m / 6
                    }
                }, {
                    key: "tonl\xe4ngePlus", value: function () {
                        y += .1
                    }
                }, {
                    key: "tonl\xe4ngeMinus", value: function () {
                        y -= .1
                    }
                }, {
                    key: "sweepDifferenzPlus", value: function () {
                        v += 100
                    }
                }, {
                    key: "sweepDifferenzMinus", value: function () {
                        v -= 100
                    }
                }, {
                    key: "play", value: function (e, n, t) {
                        var a = this.audioCtx.createOscillator(), o = e * f + v;
                        o < 1 && (o = 1), console.log("sweep:" + o), a.connect(this.gain1[t]), a.type = n, a.frequency.value = e * f, this.gain1[t].gain.setValueAtTime(m / 10, this.audioCtx.currentTime), this.gain1[t].gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + y - .1), a.frequency.exponentialRampToValueAtTime(o, this.audioCtx.currentTime + y - .1), a.start(), a.stop(this.audioCtx.currentTime + y), console.log(t)
                    }
                }]), e
            }()), b = 0, E = 0, S = 1, w = function (e) {
                function n(e) {
                    var t;
                    return Object(s.a)(this, n), (t = Object(i.a)(this, Object(c.a)(n).call(this, e))).play = function (e) {
                        C.play(e, t.props.Sound[b], t.state.num)
                    }, t.playNotes = function (e) {
                        "Enter" === e.key && alert("enter press here!")
                    }, t.playNotes1 = function (e) {
                        var n = e.e;
                        E > 13 ? E = 0 : E++, 65 === n.keyCode ? C.play(263.63, t.props.Sound[b], E) : 87 === n.keyCode ? C.play(277.18, t.props.Sound[b], E) : 83 === n.keyCode ? C.play(293.66, t.props.Sound[b], E) : 69 === n.keyCode ? C.play(311.13, t.props.Sound[b], E) : 68 === n.keyCode ? C.play(329.63, t.props.Sound[b], E) : 70 === n.keyCode ? C.play(349.23, t.props.Sound[b], E) : 84 === n.keyCode ? C.play(369.99, t.props.Sound[b], E) : 71 === n.keyCode ? C.play(392, t.props.Sound[b], E) : 90 === n.keyCode ? C.play(415.3, t.props.Sound[b], E) : 72 === n.keyCode ? C.play(440, t.props.Sound[b], E) : 85 === n.keyCode ? C.play(466.16, t.props.Sound[b], E) : 74 === n.keyCode ? C.play(493.88, t.props.Sound[b], E) : 75 === n.keyCode ? C.play(523.26, t.props.Sound[b], E) : 38 === n.keyCode ? C.volumePlus() : 40 === n.keyCode ? C.volumeMinus() : 187 === n.keyCode ? C.tonl\u00e4ngePlus() : 189 === n.keyCode ? C.tonl\u00e4ngeMinus() : 89 === n.keyCode ? C.sweepDifferenzMinus() : 88 === n.keyCode ? C.sweepDifferenzPlus() : 39 === n.keyCode ? (b > 2 ? b = 0 : b++, t.setState({sound: t.props.Sound[b]})) : 37 === n.keyCode && (0 === b ? b = 3 : b--, t.setState({sound: t.props.Sound[b]})), t.setState({
                            volume: Math.round(100 * C.getGainNode()),
                            sweep: Math.round(C.getsweepDifferenz()),
                            laenge: Math.round(10 * C.getTonLaenge())
                        })
                    }, t.octaveHoch = function () {
                        S *= 2, C.setOctavmtpl(S)
                    }, t.octaveRunter = function () {
                        S /= 2, C.setOctavmtpl(S)
                    }, t.state = {sound: "sine", volume: 30, num: 0, laenge: 5, sweep: 0}, t
                }

                return Object(p.a)(n, e), Object(l.a)(n, [{
                    key: "getSound", value: function () {
                        return this.props.Sound[b]
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return o.a.createElement("div", {
                            tabIndex: 0, className: "test", onKeyDown: function (n) {
                                return e.playNotes1({e: n})
                            }
                        }, o.a.createElement("div", null, o.a.createElement("h1", {className: "hervorgehoben"}, "Mein kleiner Synthesizer"), o.a.createElement("p", null, "Um die Tastatur zu benutzen ", o.a.createElement("span", {className: "hervorgehoben"}, "klicke auf die Seite!")), o.a.createElement("p", null, " ", o.a.createElement("button", {
                            onClick: function () {
                                return e.octaveHoch()
                            }
                        }, "Oktave++"), o.a.createElement("button", {
                            onClick: function () {
                                return e.octaveRunter()
                            }
                        }, "Oktave--")), o.a.createElement("p", null, "Um die Lautst\xe4rke und den Sound einzustellen ", o.a.createElement("span", {className: "hervorgehoben"}, "benutze die Pfeiltasten!")), o.a.createElement("p", null, "Sound (\u2190 \u2192): ", o.a.createElement("span", {className: "hervorgehoben"}, b + 1 + ". " + this.state.sound)), o.a.createElement("p", null, "Volume (\u2191 \u2193): (  ", o.a.createElement("span", {className: "hervorgehoben"}, this.state.volume), "% "), o.a.createElement("p", null, "Ton-L\xe4nge (- +):  ", o.a.createElement("span", {className: "hervorgehoben"}, this.state.laenge), "ms "), o.a.createElement("p", null, "Sweep (y x):  ", o.a.createElement("span", {className: "hervorgehoben"}, " \u0394(", this.state.sweep, "hz)"), " ")), Object.keys(k).map((function (n) {
                            return o.a.createElement(h.a, {
                                onClick: function () {
                                    return e.play(k[n])
                                }
                            }, n)
                        })), o.a.createElement("p", null), o.a.createElement("div", null, "Die ", o.a.createElement("span", {className: "hervorgehoben"}, "ganzen Noten"), " liegen auf den Buchstaben: ", o.a.createElement("span", {className: "hervorgehoben"}, "a s d f g h j k"), " "), o.a.createElement("div", null, o.a.createElement("p", null, "Die ", o.a.createElement("span", {className: "hervorgehoben"}, "halbtonschritte dazwischen"), " liegen auf den Buchstaben: ", o.a.createElement("span", {className: "hervorgehoben"}, "w e t z u"))))
                    }
                }]), n
            }(o.a.Component), O = function (e) {
                function n() {
                    return Object(s.a)(this, n), Object(i.a)(this, Object(c.a)(n).apply(this, arguments))
                }

                return Object(p.a)(n, e), Object(l.a)(n, [{
                    key: "render", value: function () {
                        return o.a.createElement("div", {
                            className: "backgroundcolor h-100 justify-content-center text-center",
                            xl: "auto"
                        }, o.a.createElement(w, {Sound: ["sine", "triangle", "sawtooth", "square"]}))
                    }
                }]), n
            }(o.a.Component), N = (Object(d.a)({backgroundColor: "#eeeeee", height: "100%"}), O);
        r.a.render(o.a.createElement(N, null), document.getElementById("root"))
    }
}, [[13, 1, 2]]]);
//# sourceMappingURL=main.c1e543ab.chunk.js.map
