define([], function(){
  function init($el) {
    // 必填
    $('input[required="required"]', $el).closest('.k-form-field').find('label').addClass('required')

    // 关闭当前页面
    $('.fa-close', $el).closest('button').on('click', function () {
      fun.closeCurrentPage()
    })

    // 刷新当前页面
    $(".fa-refresh", $el).closest('button').click(function () {
      $("#tabstrip").data("kendoTabStrip").reload('.k-state-active');
    })

    // 表格一键折叠
    var trExpand = true
    $('.k-hierarchy-cell.k-header', $el).click(function () {
      if (trExpand) {
        $(".info-grid", $el).data("kendoGrid").collapseRow($(".info-grid tr.k-master-row", $el));
        trExpand = false
      } else {
        $(".info-grid", $el).data("kendoGrid").expandRow($(".info-grid tr.k-master-row", $el));
        trExpand = true
      }
    })
  }

  return {
    init: init
  }
})
    