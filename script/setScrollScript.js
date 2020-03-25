$(window).scroll(function() {
    if ($(this).scrollTop()>100)
    {
        $('#aboutMenuCover').css('background-size',"100%");
        $('#aboutMenu').show();

        $('#internMenuCover').css('background-size',"100%");
        $('#internMenu').show();

        $('#projectMenuCover').css('background-size',"100%");
        $('#projectMenu').show(200);
    }
    else
    {
        $('#aboutMenuCover').css('background-size',"");
        $('#aboutMenu').hide(200);

        $('#internMenuCover').css('background-size',"");
        $('#internMenu').hide(200);

        $('#projectMenuCover').css('background-size',"");
        $('#projectMenu').hide(0);
    }
  });
  