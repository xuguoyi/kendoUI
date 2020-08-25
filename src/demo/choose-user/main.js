define([], function(){
  var $container;
  var $window;
  
  return function($el, $win, dealDataFn){
    $container = $el;
    $window = $win;
  
    var okFn = function(){
      dealDataFn($("#user-selected").data('kendoListBox').dataSource._data)
      $window.closest(".choose-user").data("kendoWindow").close();
    };

    $window.on('click', '.user-true', okFn);
  }
})