$("#screenLight").ready(function() {

    const $screenLight = $('#screenLight');
    $('#screenLight').val(50);

    var value = parseInt($screenLight.val());
    value = value/100;
    var newValue = "linear-gradient(rgba(0, 12, 30, "+value+"), rgba(0, 12, 30, "+value+"))";
    $(".bodyContent").css('background', newValue);

    $screenLight.on('input change', () => {

        var value = parseInt($screenLight.val());
        value = value/100;

        var newValue = "linear-gradient(rgba(0, 12, 30, "+value+"), rgba(0, 12, 30, "+value+"))";

        $(".bodyContent").css('background', newValue);
    });
  });

$('#readingLens').ready(function(){
    $('#readingLensComponent').hide();
});

$('#readingLens').click(function(){
    $('#readingLensComponent').slideDown();
    $('#readingLensComponent').delay(5000).slideUp();
});