$(document).ready(function(){

    $('.btn1').addClass('select');
    $('.tabel').addClass('caurd-selected');

    $('.btn1').click(function(){
        $('.btn1').addClass('select');
        $('.btn2').removeClass('select');

        $('.tabel').addClass('caurd-selected');
        $('.tabel1').removeClass('caurd-selected');
    });
    $('.btn2').click(function(){
        $('.btn1').removeClass('select');
        $('.btn2').addClass('select');

        $('.tabel').removeClass('caurd-selected');
        $('.tabel1').addClass('caurd-selected');
    });

    
});