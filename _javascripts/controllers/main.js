var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Controllers.Main = (function(superClass) {
  extend(Main, superClass);

  function Main() {
    return Main.__super__.constructor.apply(this, arguments);
  }

  Main.prototype.index = function() {
    return console.log('Loco here!');
  };

  return Main;

})(App.Controllers.Base);
