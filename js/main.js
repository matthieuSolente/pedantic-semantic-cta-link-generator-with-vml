/***********************************************/
/* COPY PASTE   */
/***********************************************/
function copyPaste(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).parent().find('.copyPaste').text()).select();
    document.execCommand("copy");
    $temp.remove();
}

  $('.copyPaste').wrap('<div class="copyPaste-block"></div>');   
    $('.copyPaste-block').each(function(){     
      $(this).append('<button type="button" class="copy" onclick="copyPaste(this)" aria-hidden="false" aria-label="Copy to clipboard"><span class="visually-hidden">Copy to Clipboard</span></button>');
    });

 /*End document ready*/

// var numInputs = $('input[type=number]');

// numInputs.each(function(input) {
//   input.on('change', function(e) {
//     if (input.val() == '') {
//       input.val() = 0
//     }
//   })
// })