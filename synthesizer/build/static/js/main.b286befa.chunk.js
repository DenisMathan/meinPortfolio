(this.webpackJsonpfh02 = this.webpackJsonpfh02 || []).push([[0], {
    13: function (e, t, n) {
        e.exports = n(23)
    }, 19: function (e, t, n) {
    }, 23: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0), o = n.n(a), i = n(10), u = n.n(i), l = (n(18), n(19), n(2)), r = n(3), s = n(6), c = n(4),
            d = n(7),
            p = n(12), h = n(25), m = .3, y = 1, v = window, g = {
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
            }, k = new (function () {
                function e() {
                    Object(l.a)(this, e), this.audioCtx = new (v.AudioContext || v.webkitAudioContext), this.gainNode = void 0, this.gain = [GainNode, GainNode, GainNode], this.gainNode = this.audioCtx.createGain(), this.gainNode.connect(this.audioCtx.destination)
                }

                return Object(r.a)(e, [{
                    key: "getGainNode", value: function () {
                        return m
                    }
                }, {
                    key: "setOctavmtpl", value: function (e) {
                        y = e, console.log(y)
                    }
                }, {
                    key: "volumePlus", value: function () {
                        m < 1 ? m += .01 : m = 1, this.gainNode.gain.value = m / 6, console.log("Vol: " + m, "Gain: " + this.gainNode.gain.value)
                    }
                }, {
                    key: "volumeMinus", value: function () {
                        m > .01 ? m -= .01 : m = 0, this.gainNode.gain.value = m / 6, console.log(this.gainNode.gain.value)
                    }
                }, {
                    key: "play", value: function (e, t, n) {
                        var a = this.audioCtx.createOscillator(),
                            o = [this.audioCtx.createOscillator(), this.audioCtx.createOscillator(), this.audioCtx.createOscillator()];
                        o[n].connect(this.gainNode), a.connect(this.gainNode), o[n].type = t, o[n].frequency.value = e, a.type = t, a.frequency.value = e * y, this.gainNode.gain.setValueAtTime(m / 6, this.audioCtx.currentTime), this.gainNode.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + .2), a.frequency.exponentialRampToValueAtTime(e * y, this.audioCtx.currentTime + .2), a.start(), a.stop(this.audioCtx.currentTime + .2), console.log(n)
                    }
                }]), e
            }()), C = 0, f = 0, b = 1, N = function (e) {
                function t(e) {
                    var n;
                    return Object(l.a)(this, t), (n = Object(s.a)(this, Object(c.a)(t).call(this, e))).play = function (e) {
                        k.play(e, n.props.Sound[C], n.state.num)
                    }, n.playNotes = function (e) {
                        "Enter" === e.key && alert("enter press here!")
                    }, n.playNotes1 = function (e) {
                        var t = e.e;
                        f > 1 ? f = 0 : f++, 65 === t.keyCode ? k.play(263.63, n.props.Sound[C], f) : 87 === t.keyCode ? k.play(277.18, n.props.Sound[C], f) : 83 === t.keyCode ? k.play(293.66, n.props.Sound[C], f) : 69 === t.keyCode ? k.play(311.13, n.props.Sound[C], f) : 68 === t.keyCode ? k.play(329.63, n.props.Sound[C], f) : 70 === t.keyCode ? k.play(349.23, n.props.Sound[C], f) : 84 === t.keyCode ? k.play(369.99, n.props.Sound[C], f) : 71 === t.keyCode ? k.play(392, n.props.Sound[C], f) : 90 === t.keyCode ? k.play(415.3, n.props.Sound[C], f) : 72 === t.keyCode ? k.play(440, n.props.Sound[C], f) : 85 === t.keyCode ? k.play(466.16, n.props.Sound[C], f) : 74 === t.keyCode ? k.play(493.88, n.props.Sound[C], f) : 75 === t.keyCode ? k.play(523.26, n.props.Sound[C], f) : 38 === t.keyCode ? k.volumePlus() : 40 === t.keyCode ? k.volumeMinus() : 39 === t.keyCode ? (C > 2 ? C = 0 : C++, n.setState({sound: n.props.Sound[C]})) : 37 === t.keyCode && (0 === C ? C = 3 : C--, n.setState({sound: n.props.Sound[C]})), console.log(C + n.props.Sound[C] + t.keyCode), n.setState({volume: Math.round(100 * k.getGainNode())})
                    }, n.octaveHoch = function () {
                        b *= 2, k.setOctavmtpl(b)
                    }, n.octaveRunter = function () {
                        b /= 2, k.setOctavmtpl(b)
                    }, n.state = {sound: "sine", volume: 30, num: 0}, n
                }

                return Object(d.a)(t, e), Object(r.a)(t, [{
                    key: "getSound", value: function () {
                        return this.props.Sound[C]
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return o.a.createElement("div", {
                            tabIndex: 0, className: "test", onKeyDown: function (t) {
                                return e.playNotes1({e: t})
                            }
                        }, o.a.createElement("div", null, o.a.createElement("h1", {className: "hervorgehoben"}, "Mein kleiner Synthesizer"), o.a.createElement("p", null, "Um die Tastatur zu benutzen ", o.a.createElement("span", {className: "hervorgehoben"}, "klicke auf die Seite!")), o.a.createElement("p", null, " ", o.a.createElement("button", {
                            onClick: function () {
                                return e.octaveHoch()
                            }
                        }, "Oktave++"), o.a.createElement("button", {
                            onClick: function () {
                                return e.octaveRunter()
                            }
                        }, "Oktave--")), o.a.createElement("p", null, "Um die Lautst\xe4rke und den Sound einzustellen ", o.a.createElement("span", {className: "hervorgehoben"}, "benutze die Pfeiltasten!")), o.a.createElement("p", null, "Volume:  ", o.a.createElement("span", {className: "hervorgehoben"}, this.state.volume), "% "), o.a.createElement("p", null, "Sound: ", o.a.createElement("span", {className: "hervorgehoben"}, C + 1 + ". " + this.state.sound))), Object.keys(g).map((function (t) {
                            return o.a.createElement(h.a, {
                                onClick: function () {
                                    return e.play(g[t])
                                }
                            }, t)
                        })), o.a.createElement("p", null), o.a.createElement("div", null, "Die ", o.a.createElement("span", {className: "hervorgehoben"}, "ganzen Noten"), " liegen auf den Buchstaben: ", o.a.createElement("span", {className: "hervorgehoben"}, "a s d f g h j k"), " "), o.a.createElement("div", null, o.a.createElement("p", null, "Die ", o.a.createElement("span", {className: "hervorgehoben"}, "Halbtonschritte dazwischen"), " liegen auf den Buchstaben: ", o.a.createElement("span", {className: "hervorgehoben"}, "w e t z u"))))
                    }
                }]), t
            }(o.a.Component), E = function (e) {
                function t() {
                    return Object(l.a)(this, t), Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
                }

                return Object(d.a)(t, e), Object(r.a)(t, [{
                    key: "render", value: function () {
                        return o.a.createElement("div", {
                            className: "backgroundcolor h-100 justify-content-center text-center",
                            xl: "auto"
                        }, o.a.createElement(N, {Sound: ["sine", "triangle", "sawtooth", "square"]}))
                    }
                }]), t
            }(o.a.Component), S = (Object(p.a)({backgroundColor: "#eeeeee", height: "100%"}), E);
        u.a.render(o.a.createElement(S, null), document.getElementById("root"))
    }
}, [[13, 1, 2]]]);
//# sourceMappingURL=main.b286befa.chunk.js.map
