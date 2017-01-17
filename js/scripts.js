$(function() {
  $('form').submit(function() {


    $('#result').show()
    $("input:checkbox[name=work]:checked").each(function(){
      var workTransportation = $(this).val();
      $('#result').append(workTransportation);
    });


    $('#funResult').show()
    $("input:checkbox[name=fun]:checked").each(function(){
      var funTransportation = $(this).val();
      $('#funResult').append(funTransportation);
    });

    $('form').hide();
    event.preventDefault();
  });
});
