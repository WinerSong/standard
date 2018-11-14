var signIn,
    signUp;
signIn = $("#signIn");
signIn.click(function(){
    $("title").text("登录");
    $("#personal-user").css("display","block");
    $("#login-telephone").css("display","none");
    $("#login-secret").css("display","block");
    $("#sign-up-btn").css("display","none");
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
    signIn.removeClass('active');
    signUp.addClass('active');
})


// $("#signIn").click(function(){

// });


    