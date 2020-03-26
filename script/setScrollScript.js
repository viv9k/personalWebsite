$(window).scroll(function() {
    if ($(this).scrollTop()>100)
    {
        $('#aboutMenuCover').css('background-size',"100%");
        $('#aboutMenu').show();

        $('#workMenuCover').css('background-size',"100%");
        $('#workMenu').show();

        $('#internMenuCover').css('background-size',"100%");
        $('#internMenu').show();

        $('#projectMenuCover').css('background-size',"100%");
        $('#projectMenu').show(200);

        $('#achievementMenuCover').css('background-size',"100%");
        $('#achievementMenu').show(200);

        $('#communityMenuCover').css('background-size',"100%");
        $('#communityMenu').show(200);
    }
    else
    {
        $('#aboutMenuCover').css('background-size',"");
        $('#aboutMenu').hide(200);

        $('#workMenuCover').css('background-size',"");
        $('#workMenu').hide(200);

        $('#internMenuCover').css('background-size',"");
        $('#internMenu').hide();

        $('#projectMenuCover').css('background-size',"");
        $('#projectMenu').hide();

        $('#achievementMenuCover').css('background-size',"");
        $('#achievementMenu').hide();

        $('#communityMenuCover').css('background-size',"");
        $('#communityMenu').hide();
    }
  });
  