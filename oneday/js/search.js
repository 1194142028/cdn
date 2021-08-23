//添加搜索按钮至导航栏
$(".oneday-menu").append('<li id="search" class="menu-item menu-item-type-post_type menu-item-object-page"><i class="fa fa-search" aria-hidden="true" onselectstart="return false;">搜索</i></li>');

//搜索按钮点击
$(document).on('click', '#search', function() {
    $('#content-search, #layout-shadow').show();
});

//搜索框点击关闭
$(document).delegate('.search-header #search-close', 'click', function(e) {
    e.stopPropagation();
    $('#content-search, #layout-shadow').hide();
});
