$(function() {
    //loading participants
    $.ajax({
        type: "GET",
        url: "Doc/Participants.xml",
        dataType: "xml",
        success: function(xml) {
            var nrParticipanti = 0;
            $(xml).find('db').each(function() {
                $(this).find('item').each(function() {
                    nrParticipanti = nrParticipanti + 1;
                    var Nume = $(this).find('Nume').text();
                    var Institutie = $(this).find('Institutie').text();
                    var Tara = $(this).find('Tara').text();
                    $('#Participants').append("<li class='comitet'><strong>" + Nume + "</strong> (" + Institutie + ", " + Tara + ")</li>\n");
                });
                console.log(nrParticipanti + " participanti (TOTAL)\n");
            });
        }
    });
    //end of loading
});
