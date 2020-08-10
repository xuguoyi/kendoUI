/* configuration v2.0 */

require.config({
  waitSeconds: 0,
  paths: {
    jquery: "jquery.min"
  },
  shim: {
    'kendo.all.min': {
      deps: ["jquery"],
    }
  },
});

require(['kendo.all.min'], function () {
  

  typeof requireReady === "function" && requireReady();
}, function (err) {
  // window['console'] && console.log && console.log(err.message);
});

