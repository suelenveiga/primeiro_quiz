// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/jogo4.js":[function(require,module,exports) {

var questao = document.getElementById("questao");
var button = document.getElementById('b1');
var button1 = document.getElementById('B1');
var button2 = document.getElementById('B2');
var parag = document.getElementsByClassName('parag');
var image4 = document.getElementById('image4');
var alterna = document.getElementById('res');
var respos = document.querySelector("div.resposta");
var divjogo = document.querySelector("div.guarda");
var jogo = document.querySelector("div.jogo");

var pergunta = ["A necessidade que é a mãe da invenção.", "...Acho que o dia mais triste da minha vida, foi quando descobri que podia derrotar meu pai em quase tudo.", "O começo é a metade do todo.", "Amor - uma grave doença mental.", "O livro é um mestre que fala mas que não responde.", "Sempre pensei se havia um deus.E agora eu sei que há…", "Não se culpe para sempre… Culpe-se uma vez só!", "Deus não é culpado. A culpa é de quem escolhe.", "Filhos, vocês tentaram, deram o seu melhor, e falharam miseravelmente.", "Todo homem é poeta quando está apaixonado."];

var resposta = [["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"], ["Platão", "Homer Simpson"]];

var gabarito = ["Platão", "Homer Simpson", "Platão", "Platão", "Platão", "Homer Simpson", "Homer Simpson", "Platão", "Homer Simpson", "Platão"];
var fotos = ["'http://noticias.universia.com.br/net/images/educacion/f/fi/fil/filosofia-sociologia-enem-2015-noticias.jpg'"];
var aux = 0;
var ctd = 0;
this.pontos = 0;
console.log(pergunta.length);

button1.addEventListener("click", function (e) {
    e.preventDefault();
    image4.style.backgroundImage = "none";
    var x = document.querySelector('div#image4');
    x.style.backgroundImage = 'url(' + fotos[0] + ')';
    button1.style.display = "none";
    alterna.style.display = "block";
    document.getElementById('parag').innerHTML = "Acertos:" + this.pontos;
    for (var i = 1; i <= 2; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b' + i);
        button.textContent = resposta[aux][i - 1];
    }
});
respos.addEventListener('click', clicou);
function clicou(event) {
    if (aux < 9) {
        if (event.target.tagName === 'BUTTON') {
            var x = document.querySelector('div#image4');
            x.style.backgroundImage = 'url(' + fotos[0] + ')';

            if (event.target.textContent == gabarito[ctd]) {
                document.getElementById('parag').innerHTML = "pontos: " + this.pontos;
                this.pontos++;
                for (var i = 1; i <= 2; i++) {
                    var _button = document.getElementById('b' + i);
                    _button.textContent = resposta[aux][i - 1];
                    document.getElementById('questao').innerHTML = pergunta[aux];
                }
                console.log("acertei");
                ctd++;
                aux++;
                muda();
            } else {
                aux++;
                muda();
            }
        }
        console.log(ctd);
        this.cont = ctd;
        console.log(this.cont);
    } else {
        divjogo.style.display = "none";
        button2.style.display = "block";
        if (this.cont < 5) {
            jogo.innerHTML = "Você obteve poucos acertos, mas não se preocupe! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = " + this.cont + " acertos.";
        } else {
            jogo.innerHTML = "Você obteve bons acertos! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = " + this.cont + " acertos.";
        }
    }
}
function muda() {
    document.getElementById('parag').innerHTML = "Acertos" + this.pontos;
    for (var i = 1; i <= 2; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b' + i);
        button.textContent = resposta[aux][i - 1];
    }
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '35695' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/jogo4.js"], null)
//# sourceMappingURL=/jogo4.99244490.map