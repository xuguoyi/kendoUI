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
  function openPage(url, text, index, isReplace) {
    var tabStrip = $('#tabstrip').data('kendoTabStrip');
    if(url && !~$.inArray(url, tabStrip._contentUrls)) {
      var $tabs = tabStrip.tabGroup.children();
      if(index === undefined) {
        index = $tabs.length;
      }
      tabStrip.insertAfter([{
          text: text,
          contentUrl: url
      }],$tabs.eq(index - 1));
      var tabsElements = $('#tabstrip li[role="tab"]').eq(index);
      tabsElements.append('<span data-type="remove" class="k-link"><span class="k-icon k-i-x"></span></span>');
      tabStrip.activateTab(tabsElements)
      if(isReplace){
        tabStrip.remove(index-1);
      }
    }else {
      let n = tabStrip._contentUrls.indexOf(url)
      tabStrip.select(n)
    }
  }
  
  // 重新渲染tabstrip(重定向当前页面)
  function redirectPage(url) {
    var idx = $('.k-state-active').attr('aria-controls').split('-')[1]
    var _contentUrls = $("#tabstrip").data("kendoTabStrip")._contentUrls
    var arr = []
    $('#tabstrip .k-tabstrip-items').find('.k-link[data-content-url]').each(function(item) {
      arr.push({
        text: $(this).text(),
        ContentUrl: _contentUrls[item]
      })
    })
    arr[idx-1].ContentUrl = url
    var dataSource = kendo.data.DataSource.create(arr)
    $("#tabstrip").data("kendoTabStrip").setDataSource(dataSource);
    $("#tabstrip").data("kendoTabStrip").select(idx-1);
    // 移除tab
    var configureCloseTab = function () {
        var tabsElements = $('#tabstrip li[role="tab"]:gt(0)');
        tabsElements.append('<span data-type="remove" class="k-link"><span class="k-icon k-i-x"></span></span>');
    };
    configureCloseTab()
  }
  
  return {
    jumpRefresh: jumpRefresh, 
    closeCurrentPage: closeCurrentPage,
    openPage: openPage,
    redirectPage: redirectPage
  };
});
