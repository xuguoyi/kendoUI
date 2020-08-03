/* configuration v2.0 */

require.config({
  waitSeconds: 0,
  paths: {
    jquery: "jquery.min",
  },
  shim: {
    'kendo.all.min': {
      deps: ["jquery"],
    },
  },
});

// require(['jquery', 'kendoall','common','money','mathExt','kendoCulture'], function($, kendoall)
require(['kendo.all.min'], function () {
  // kendo.culture("zh-CN");
  // 初始化 tabs
  // var $multitabsContainer = $('.multitabs-container');
  // $multitabsContainer.length > 0 && $('.multitabs-container').multitabs({
  //     iframe: true,
  //     nav:
  //     {
  //         draggable: false,
  //         maxTabs: 15,
  //     },
  //     language : {                                            //language setting
  //         nav : {
  //             title : '标签页',                                  //default tab's tittle
  //             dropdown : '<i class="fa fa-bars"></i>',        //right tools dropdown name
  //             showActivedTab : '显示激活标签',          //show active tab
  //             closeAllTabs : '关闭所有标签',                //close all tabs
  //             closeOtherTabs : '关闭其他标签',            //close other tabs
  //         }
  //     },
  //     init:[
  //         {
  //             type : 'main',
  //             title : '首页',
  //             url : 'welcome.html'
  //         }
  //     ]
  // });

  // 全局 createTab 事件
  // window['createTab'] = function( options, isActive ){
  //     var _win = window.self;
  //     if( window.top != _win ){
  //         _win = window.top;
  //     }
  //     // _win.$(_win.top.document)
  //    var sss = _win.$(_win.top.document).data('multitabs').create({
  //         iframe : true,
  //         title : options.title,
  //         url : options.url
  //     }, isActive);
  //     console.log("sss",sss);

  // };

  // 处理 tab
  // $(document).on('click', 'a[data-tab]', function(){
  //     var $this = $(this);
  //     var _options = {
  //         title: $this.attr('data-tab'),
  //         // url: $this.attr('data-url')+"?t="+new Date().getTime()
  //         url: $this.attr('data-url')
  //     };
  //     // alert(1);
  //     window.createTab( _options, true )
  //     // console.log( 'window.createTab',window.createTab( _options, true ))
  //     //  $(window.self.top.document).data('multitabs').close()
  // });

  //回到顶部
  // $(".fa-arrow-up").click(function(){
  //     $("html,body").animate({scrollTop:0}, 500);
  // })

  //所有的文本域的父元素td，设置colspan
  // $("textarea.col3").parent("td").attr("colspan",3);
  // $("textarea.col3").attr("rows",3);
  // // 设置自适应
  // $.each($("textarea"), function(i, n){
  //     if($(n).attr("readonly")){
  //         var _height = n.scrollHeight;
  //         if($(n).height() < _height)  $(n).height(_height);
  //         $("#textarea[readonly='true']").css("overflow", "hidden");
  //         if( $(n).height() > 1000 ){
  //             $(n).height(1000);
  //             $("#textarea").css("overflow", "auto");
  //         }
  //     }
  // })

  // 侧边栏
  // $('.dice-menu li').mouseover(function() {
  // var index = $(this).index();
  // $('.dice-name li').css('opacity','0');
  // $('.dice-name').children('li').eq(index).css('opacity','1');
  // });

  // $('.dice-menu').mouseout(function() {
  //     $('.dice-name li').css('opacity','0');
  //  });

  //fold
  // $(document).delegate('.fold-hd .hd-icon-text', 'click', function(e, data)
  // {
  //     var $hd = $(this).closest('.fold-hd');
  //     var $cnt = $hd.toggleClass('unfold').next('.fold-cnt');

  //     data ? $cnt.hide() : ( !$cnt.is(':animated') &&  $cnt.slideToggle(300));
  // });

  // $('.fold-hd[data-fold="true"] .hd-icon-text').trigger('click','init');

  //tab
  // $(document).delegate('.tab-nav-list .item', 'click', function()
  // {
  //     var $this = $(this);
  //     var $nav = $this.closest('.tab-nav-list');
  //     var index = $this.index();

  //     $nav.find('.item').removeClass('selected').eq(index).addClass('selected');
  //     $nav.next('.tab-cnt-list').find(' > div').hide().end().find(' > div:eq(' + index + ')').show();

  // });

  // $('.tab-nav-list').each(function()
  // {
  //     var $this = $(this);
  //     var index = $this.find('.item.selected').index();
  //     $this.next('.tab-cnt-list').find(' > div').not(':eq(' + index + ')').hide();
  // });

  // $(".dice-menu li a").each(function(){
  //     $(this).click(function(e){
  //         e.stopPropagation();//阻止事件冒泡即可
  //     })
  // })
  // 保存按钮
  // $(".fa-save").parent("li").addClass("j_save");
  // $(".j_save").click(function(){
  //     $(this).find(".fa-save").click();
  // });
  // $(".j_close").click(function(){
  //     $(this).find(".fa-close").click();
  // });

  // $(".dice-menu .fa-close").click(function(){
  //     $(".nav-tabs li.active .mt-close-tab",parent.document).click();
  // });

  // window.onload = function() {
  //    console.log(11)
  // }

  // // dropdown
  // $(document).on('click', function(e){
  //     if( $(e.target).closest('.dropdown').length > 0 ){
  //         return false;
  //     }
  //     //console.log('top:',window.opener.document);
  //     window.parent.$('.dropdown.open').removeClass('open');
  // });

  typeof requireReady === "function" && requireReady();
}, function (err) {
  // window['console'] && console.log && console.log(err.message);
});

//自定义公共类模块
// define(['common'], function() {
//     return  resizeGrid,dateFormat;
// });
