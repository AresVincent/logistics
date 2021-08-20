 //if doesn't have token,then back to login page
function hasToken(){
    if($.cookie('admin_token')==undefined){
        location.href ='/admin/auth/login.html';
    }
}

function logout(){
    layer.msg('退出成功',{icon:1,time:1000},function(){
        $.removeCookie('admin_token', { path: '/' });
        location.href = '/admin/auth/login.html';
    });
}