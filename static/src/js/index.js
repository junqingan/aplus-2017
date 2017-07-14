$(function () {

    $('.title').on('click', function (e) {
        var $target = $(e.target);
        $target.next().toggleClass('hide');
        $target.closest('li').siblings('.cur').removeClass('cur');
        $target.closest('li').addClass('cur');
    });

    $('.con-title').on('click', function (e) {
        var $target = $(e.target);
        $target.toggleClass('active');
    });


    //地域屏蔽展开隐藏 
    var tr_scope_setting = $('#tr_scope_setting'),
        scopeBtn = $('#scope_show');

    scopeBtn.on('click', function (e) {
        var $target = $(this);
        $target.toggleClass('hide');

        if (scopeBtn.is('.hide')) {
            $(this).html("收起<i></i>");
            tr_scope_setting.css("display", "table-row");
        } else {
            $(this).html("展开<i></i>");
            tr_scope_setting.css("display", "none");
        }
    });


    // 登录tab切换
    var NavTabsli =$('.nav-tabs .nav-justified'),
        TabPane=$('.tab-pane');
        NavTabsli.on('click',function(e){
            $(this).addClass('cur').siblings().removeClass('cur');
            var idx = $(this).index();
            $(".tab-point").css("margin-left",idx*33.33+'%');
            $('.form-tab-pane').css("margin-left",idx*-415+'px');
        });

});