function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

$(document).ready(
    function () {
        var n = 0;
        var i = 0;
        const max = 3;
        var soall = $("#bub > .carousel-item");
        var foall = $('#bub0 > .carousel-item');


        $('.nav-link').click(
            function() {
                $('#navbarSupportedContent').removeClass('show');
            }
        );
        $('#fos1').click(
            function() {
                foall.removeClass('active');
                $('#fo1').addClass('active');
            }
        );

        $('#fos2').click(
            function() {
                foall.removeClass('active');
                $('#fo2').addClass('active');
            }
        );

        $('#fos3').click(
            function() {
                foall.removeClass('active');
                $('#fo3').addClass('active');
            }
        );

        $('#fos4').click(
            function() {
                foall.removeClass('active');
                $('#fo4').addClass('active');
            }
        );

        $('#fos5').click(
            function() {
                foall.removeClass('active');
                $('#fo5').addClass('active');
            }
        );

        $('#fos6').click(
            function() {
                foall.removeClass('active');
                $('#fo6').addClass('active');
            }
        );







        $('#sos1').click(
            function() {
                soall.removeClass('active');
                $('#so1').addClass('active');

            }
        );
        $('#sos2').click(
            function() {
                soall.removeClass('active');
                $('#so2').addClass('active');

            }
        );
        $('#sos3').click(
            function() {
                soall.removeClass('active');
                $('#so3').addClass('active');

            }
        );
        $('#sos4').click(
            function() {
                soall.removeClass('active');
                $('#so4').addClass('active');

            }
        );
        $('#sos5').click(
            function() {
                soall.removeClass('active');
                $('#so5').addClass('active');

            }
        );
        $('#sos6').click(
            function() {
                soall.removeClass('active');
                $('#so6').addClass('active');

            }
        );
        $('#sos7').click(
            function() {
                soall.removeClass('active');
                $('#so7').addClass('active');

            }
        );
        $('#sos8').click(
            function() {
                soall.removeClass('active');
                $('#so8').addClass('active');

            }
        );
        $('#sos9').click(
            function() {
                soall.removeClass('active');
                $('#so9').addClass('active');

            }
        );
        $('#sos10').click(
            function() {
                soall.removeClass('active');
                $('#so10').addClass('active');

            }
        );



        $('.box0').click(
            function(){
                $('#Light0').show('slow');
                $('.navbar').hide('slow');
            }
        );
        $('#raus0').click(
            function(){
                $('#Light0').hide('slow');
                $('.navbar').show('slow');
            }
        );
        $('.box1').click(
            function(){
                $('#Light1').show('slow');
                $('.navbar').hide('slow');
            }
        );
        $('#raus1').click(
            function(){
                $('#Light1').hide('slow');
                $('.navbar').show('slow');
            }
        );

        $('#vorher').click(
            function () {
                if (n > 0) {
                    n--;
                } else {
                    n = max;
                }
                anzeige();
            }
        );

        $('#nachher').click(
             function () {

                if (n < max) {
                    n++;
                } else {
                    n = 0;
                }

                anzeige();

            }

        );
        $('#vorherWeb').click(
            function () {

                if (i > 0) {

                    i--;
                } else {
                    i = max;
                }

                anzeigeWeb();
            }
        );

        $('#nachherWeb').click(
            function () {
                if (i < max) {
                    i++;
                } else {
                    i = 0;
                }

                anzeigeWeb();

            }

        );

        function anzeigeWeb(){
            if(i===0){
                $('#synthesizer').show('slow');
                $('#hemp').hide('slow');
            }
            else{

                $('#synthesizer').hide('slow');
                $('#hemp').show('slow');
            }
        }

        function anzeige() {

            if (n === 0) {
                $('#simon').hide('slow');
                $('#medipus').show('slow')
                $('#auto').hide('slow');
                $('#pirat').hide('slow');

            } else if (n === 1) {
                $('#simon').show('slow');
                $('#medipus').hide('slow');
                $('#auto').hide('slow');
                $('#pirat').hide('slow');
            } else if(n===2) {
                $('#simon').hide('slow');
                $('#medipus').hide('slow');
                $('#auto').show('slow');
                $('#pirat').hide('slow');
            }
            else {
                $('#simon').hide('slow');
                $('#medipus').hide('slow');
                $('#auto').hide('slow');
                $('#pirat').show('slow');
            }
        }
    });







