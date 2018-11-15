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
    signIn.addClass('active');
    signUp.removeClass('active');
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
    signIn.removeClass('active');
    signUp.addClass('active');
})


// $("#signIn").click(function(){

// });


    