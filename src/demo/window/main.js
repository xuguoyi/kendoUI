define([], function(){
  var $container;
  var $window;

  function clearInfo() {
    $window.find('.window-xgy').data("kendoGrid").clearSelection();
    // 关闭已打开的子表格 
    // var openDetails = $(".info-grid .k-master-row td a.k-i-collapse");
    // openDetails.each(function () {
    //   $(this).click();
    // })
    $container.data("kendoGrid").collapseRow($container.find("tr.k-master-row")[index]);
    // 打开对应的子表格
    $container.data("kendoGrid").expandRow($container.find("tr.k-master-row")[index]);
    $window.closest(".dialog").data("kendoWindow").close();
  }

  
  return function($el, $win, dealDataFn){
    $container = $el;
    $window = $win;

    function determine_window(dealDataFn){
      $container.data("kendoGrid").expandRow($container.find("tr.k-master-row")[index]);
      dealDataFn($window.data("sel_data"))
      clearInfo();
    }
  
    function cancel_window(){
      clearInfo();
    }
    
    var okFn = function(){
      determine_window(dealDataFn);
    };
    var cancelFn = function(){
      cancel_window();
    };
    $window.on('click', '.btn-ok', okFn).on('click', '.btn-cancel', cancelFn);
  }
})