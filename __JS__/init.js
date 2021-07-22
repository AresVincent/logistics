
$('.set-lang').click(function(){
    let lang = $(this).attr('data-lang');
    console.log(lang)
    $.cookie('lang', lang, { expires: 1000 });
    location.reload();
})

//是否为英文
function is_en()
{
    if($.cookie('lang')=='en'){
        return true;
    }else{
        return false;
    }
}

//获取菜单
function getMenu()
{
    if(is_en()){
        return [
            {"title" : "Package tracking","link":"/index.html"},
            {"title" : "Order online","link":"/onlineorder.html"},
            {"title" : "Outlet inquiry","link":"/websit.html"},
            // {"title" : "About us","link":"/aboutus.html"},
            // {"title" : "Documentation","link":"/developtext.html"},
            {"title" : "Personal Center","link":"/user.html"}
        ];
    }else{
        return [
            {"title" : "包裹跟蹤","link":"/index.html"},
            {"title" : "在線下單","link":"/onlineorder.html"},
            {"title" : "網點查詢","link":"/websit.html"},
            // {"title" : "關於我們","link":"/aboutus.html"},
            // {"title" : "開發者文檔","link":"/developtext.html"},
            {"title" : "個人中心","link":"/user.html"}
        ];
    }
}

//显示菜单
function showMenu(active=0)
{
    let menu = getMenu();
    let menuStr = '';
    let footerMenuStr = '';
    for(i in menu){
        if((menu.length-1) == i){
            footerMenuStr += '<a href="'+menu[i].link+'">'+menu[i].title+'</a>';
        }else{
            footerMenuStr += '<a href="'+menu[i].link+'">'+menu[i].title+'</a>|';
        }
        
        if(i == active){
            menuStr += ' <li class="nav-item active"><a class="nav-link" href="'+menu[i].link+'">'+menu[i].title+'</a></li>';
        }else{
            menuStr += ' <li class="nav-item"><a class="nav-link" href="'+menu[i].link+'">'+menu[i].title+'</a></li>';
        }
    }
    $('.navbar-nav').html(menuStr);
    console.log(footerMenuStr)
    $('.justify-content-around').html(footerMenuStr);
}


//设置显示的语言
function showLang()
{
    if(is_en()){
        $('.langShow').text('English');
        $('.lang_en').text('English');
        $('.lang_ch').text('Chinese');
        $('.register').text('Register');
        $('.login').text('Login');
    }
    
}
showLang();

// function request(url,data,fun){
//     $.ajax({
//       headers:{
//         "Content-Type":"application/json;charset=UTF-8",
//         Accept:"*/*","Postman-Token":"c8ea7278-0a03-420f-866b-2c5337ed5c8c"
//       },method:"POST",
//       url:"http://62.234.27.89:8086/"+url,
//       data:JSON.stringify(data),
//       success:function(res){
//         fun(res);
//       }
//     });
//   }

//请求

function request()
{
    return '';
}



