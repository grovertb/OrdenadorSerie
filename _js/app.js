$(function() {
  var ArrNumeros = []; // Inicializa el array donde se guardaran lo numeros del formulario

  // Obtiene el evento submit del formulario
  $('#frmNumber').submit(function(e){
    e.preventDefault()
    $InputNumero = parseInt($('#numero').val())

    if(ArrNumeros.indexOf($InputNumero) == -1) { // si NO existe el número lo agrego
      ArrNumeros.push($InputNumero)
      Materialize.toast(`Número ${$InputNumero} agregado correctamente `,3000)
      addNumber($InputNumero)
    }else
      Materialize.toast(`El número ${$InputNumero} ya existe`,3000)
    
    $('#panelBottom').fadeIn()
    $('#btnOrdenar').prop('disabled', !(ArrNumeros.length > 1) )
  })

  $('#btnOrdenar').click(function(){
    ArrNumeros.sort(function(a, b){return a-b});;
    ArrNumeros.map(function(number, index) {
      var position = index * 25
      $(`.itemNumero[data-value='${number}']`).css({'transform':`matrix(1, 0, 0, 1, 0, ${position} )`}) //.css({'transform':`matrix(1, 0, 0, 1, 0, "${index} * 25")`})
    })
  })

  function addNumber(numero) {
    var position = ( ArrNumeros.length - 1) * 25

    $('#numeros').css('height', position).append(`<p class='itemNumero' data-value='${numero}' style='transform:matrix(1, 0, 0, 1, 0, ${position}'> ${numero}</p>`)
  }
})

