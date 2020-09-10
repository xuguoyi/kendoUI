define([], function(){
  // 跳转到指定页面，并刷新
  function jumpRefresh(url){
    var contentUrl = $("#tabstrip").data("kendoTabStrip")._contentUrls
    var idx = contentUrl.indexOf(url)
    $("#tabstrip").data("kendoTabStrip").select(idx);
    $("#tabstrip").data("kendoTabStrip").reload("li:eq(" + idx + ")");
  }

  // 关闭当前页面, 跳转到上一个页面
  function closeCurrentPage(){
    let idx = $('.k-state-active').attr('aria-controls').split('-')[1]
    $("#tabstrip").data("kendoTabStrip").remove(idx - 1);
    $("#tabstrip").data("kendoTabStrip").select(idx - 2);
  }

  // 新打开页面
  function openPage(url, text) {
    var tabStrip = $('#tabstrip').data('kendoTabStrip');
    if(url && !~$.inArray(url, tabStrip._contentUrls)) {
      tabStrip.append(
        [{
          text: text,
          contentUrl: url
        }]
      );
      var tabsElements = $('#tabstrip li[role="tab"]:last-child');
      tabsElements.append('<span data-type="remove" class="k-link"><span class="k-icon k-i-x"></span></span>');
      tabStrip.activateTab(tabsElements)
    }else {
      let n = tabStrip._contentUrls.indexOf(url)
      tabStrip.select(n)
    }
  }
  
  return {
    jumpRefresh: jumpRefresh, 
    closeCurrentPage: closeCurrentPage,
    openPage: openPage
  };
});
