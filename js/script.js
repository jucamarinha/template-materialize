$( document ).ready(function() {
// Handler for .ready() called.
var telaAlt = $(window).height();
var telaHome = telaAlt - 64;
$('.home').css("height",telaHome);
});