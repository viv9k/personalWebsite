$("#feedback").ready(function() {
    $('#footer').css('position', 'fixed');
});

$("#thankYouWindow").ready(function() {
    $('#thankYouWindow').hide(0);
});

$("#submitbutton").click(function() {
    var content = document.getElementById('contentBox').value;

    if(content == "" || content == null)
    {
        document.getElementById('errorMessage').innerHTML = "Please enter your comment";
    } else {
        $('#formWindow').fadeOut(100);
        $('#thankYouWindow').fadeIn(500);
        var r1 = Math.floor(Math.random() * 100);
        var r2 = Math.floor(Math.random() * 100);

        if (r1==0 || r2==0){
        r1 = Math.floor(Math.random() * 100);
        r2 = Math.floor(Math.random() * 100);
        }

        var userId = r1 * r2;

        writeUserData(userId, content);
    }

});