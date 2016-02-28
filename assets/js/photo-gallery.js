$(function() {
    //loading photos
    $.ajax({
        type: "GET",
        url: "Doc/PhotoGallery.xml",
        dataType: "xml",
        success: function(xml) {
            var nrFoto = 0;
            $(xml).find('db').each(function() {
                $(this).find('item').each(function() {
                    nrFoto = nrFoto + 1;
                    var editie = $(this).find('Editie').text();
                    var photo = $(this).find('Photo').text();
                    $('#PhotoGallery').append("<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 photo'><div class='hovereffect'><img class='img-responsive' src='PhotoGallery/"+photo+"' alt='"+editie+"'><div class='overlay'><h2>"+editie+"</h2><a class='info' href='PhotoGallery/"+photo+"' data-lightbox='WYRM' data-title='"+editie+"''>View</a></div></div></div>\n");
                });
                console.log(nrFoto + " poze (TOTAL)\n");
            });
        }
    });
    //end of loading
});
