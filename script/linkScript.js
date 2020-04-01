function openLinkInNewTab(id) {
    id = "#"+id;
    var url = $(id).attr('href'); 
    window.open(url, '_blank');
}

function openLinkInSameTab(id) {
    id = "#"+id;
    var url = $(id).attr('href'); 
    window.open(url, '_self');
}