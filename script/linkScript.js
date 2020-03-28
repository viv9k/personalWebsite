function openLinkInNewTab(id) {
    id = "#"+id;
    var url = $(id).attr('href'); 
    window.open(url, '_blank');
}