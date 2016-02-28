$(function() {
    //loading speakers
    var loading = $.ajax({
            type: "GET",
            url: "Doc/Speakers.xml",
            dataType: "xml"
        })
        .done(function(xml) {
            //console.log(xml);
            $(xml).find('db').each(function() {
                var nrAnaliza, nrAlgebra;
                nrAlgebra = 0;
                nrAnaliza = 0;
                $(this).find('itemAnaliza').each(function() {
                    nrAnaliza = nrAnaliza + 1;
                    var Nume = $(this).find('Nume').text();
                    var Institutie = $(this).find('Institutie').text();
                    var Tara = $(this).find('Tara').text();
                    $('#SpeakersAnaliza').append("<li class='comitet'><strong>" + Nume + "</strong> (" + Institutie + ", " + Tara + ")</li>\n");
                });
                $(this).find('itemAlgebra').each(function() {
                    nrAlgebra = nrAlgebra + 1;
                    var Nume = $(this).find('Nume').text();
                    var Institutie = $(this).find('Institutie').text();
                    var Tara = $(this).find('Tara').text();
                    $('#SpeakersAlgebra').append("<li class='comitet'><strong>" + Nume + "</strong> (" + Institutie + ", " + Tara + ")</li>\n");
                });
                console.log(nrAnaliza + " speakers de Analiza\n");
                console.log(nrAlgebra + " speakers de Analiza\n");
                console.log((nrAnaliza + nrAlgebra) + " speakers TOTAL\n");
            });
        })
        .fail(function(jqXHR, textStatus) {
            //console.log( "Request failed: " + textStatus );
        });
    //end of loading
});
