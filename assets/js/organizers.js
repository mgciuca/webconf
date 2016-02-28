$(function() {
    //loading organizers
    $.ajax({
        type: "GET",
        url: "Doc/Organizers.xml",
        dataType: "xml",
        success: function(xml) {
            var nrOrganizatori = 0;
            $(xml).find('db').each(function() {
                $(this).find('item').each(function() {
                    nrOrganizatori = nrOrganizatori + 1;
                    var nume = $(this).find('Nume').text();
                    var esteContact = $(this).find('Contact').text();
                    var institutie = $(this).find('Institutie').text();
                    var tara = $(this).find('Tara').text();
                    var adresa = $(this).find('Adresa').text();
                    var email = $(this).find('Email').text();
                    if (esteContact) {
                        $('#Organizers').append("<div class='col-sm-10 col-sm-offset-1 pp committee'><h3><strong>" + nume + "</strong> (Contact Person)" + "</h3> <ul><li>" + institutie + ", " + tara + "</li><li>"+adresa+"</li><li>Email: <strong>"+email+"</strong></li></ul></div>\n");
                    } else {
                        $('#Organizers').append("<div class='col-sm-10 col-sm-offset-1 pp committee'><h3><strong>" + nume + "</strong></h3> <ul><li>" + institutie + ", " + tara + "</li><li>"+adresa+"</li><li>Email: <strong>"+email+"</strong></li></ul></div>\n");
                    }
                });
                console.log(nrOrganizatori + " organizatori (TOTAL)\n");
            });
        }
    });
    //end of loading
});
