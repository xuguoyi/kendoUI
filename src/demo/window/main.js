define([], function(){
  return function($el, $win, dealDataFn){
    var okFn = function(){
      $el.data("kendoGrid").expandRow($el.find("tr.k-master-row")[index]);
      dealDataFn($win.data("sel_data"))
      cancelFn();
    };

    var cancelFn = function(){
      $win.find('.window-choose-location').data("kendoGrid").clearSelection();
      // 关闭已打开的子表格 
      // var openDetails = $(".info-grid .k-master-row td a.k-i-collapse");
      // openDetails.each(function () {
      //   $(this).click();
      // })
      $el.data("kendoGrid").collapseRow($el.find("tr.k-master-row")[index]);
      // 打开对应的子表格
      $el.data("kendoGrid").expandRow($el.find("tr.k-master-row")[index]);
      $win.closest(".dialog").data("kendoWindow").close();
    };

    $win.on('click', '.btn-ok', okFn).on('click', '.btn-cancel', cancelFn);
  }
})