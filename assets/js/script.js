var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$( "#enviarCorreo" ).click(function() {
  alert( "El correo fue enviado correctamente..." );
});

$( "#receta div h6" ).on( "dblclick", function() {
  $( this ).addClass( "letra_roja" );
});

$( "#tarjetas h5" ).click(function() {
  $( ".card" ).toggle();
});