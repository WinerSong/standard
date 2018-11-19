var signIn,
    signUp;
signIn = $("#signIn");
signIn.click(function(){
    $("title").text("登录");
    $("#personal-user").css("display","block");
    $("#login-telephone").css("display","none");
    $("#login-secret").css("display","block");
    $("#sign-up-btn").css("display","none");
    $(".sign-up-message").css("display","none");
    $(".login-in-problem").css("display","block");
    $(".other-login-methods").css("display","block");
    $("#login-in-btn").css("display","block");
    $("#login-in-signer").css("display","block");
    $("#sign-up-signer").css("display","none");
    $(".more-signer").css("display","block");
    $(".more-signer h6").text("社交账号登录");
    signIn.addClass('active');
    signUp.removeClass('active');
    $(".other-login-methods").click(function(e){
        if(e.target !==dropdown-menu){
            dropdown-menu.hide();
        }
    })
})
signUp = $("#signUp");
signUp.click(function(){
    $("title").text("注册");
    $("#personal-user").css("display","block");
    $("#login-telephone").css("display","block");
    $("#login-secret").css("display","block");
    $("#sign-up-btn").css("display","block");
    $(".sign-up-message").css("display","block");
    $(".login-in-problem").css("display","none");
    $(".other-login-methods").css("display","none");
    $("#login-in-btn").css("display","none");
    $("#login-in-signer").css("display","none");
    $("#sign-up-signer").css("display","block");
    $(".more-signer h6").text("社交账号直接注册");
    $("#weibo-link-wrap").css("display","none");
    $(".js-more-method").css("display","none");
    signIn.removeClass('active');
    signUp.addClass('active');
})


// $("#signIn").click(function(){

// });


    