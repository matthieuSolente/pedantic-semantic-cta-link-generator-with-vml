(function($){
 var bgColor,fontBase,fontValue,fontEm,borderwidth,bordervmlwidth,urlLink,btnText,btnClass,cssBtnClass,fontColor,borderColor,fontFamily,bRadius,bordervml,bgcss,bgvml,bordercss,generateCode,generateCss,arcsize,align,msoTextRaise,emTbPadding,emLrPadding,msoFontWidth,htmlMsoTextRaise,fontBold,textTransform,generatePreview;
 
 function updateButton(){ 
    
    urlLink = $('#linkUrl').val();
    btnText = $('#btnText').val();
    if($('#vmlButton').is(':checked')){
      $('#classGroup').show();
      if($.trim($('#btnClass').val()) !=''){
        btnClass = 'class="'+ $('#btnClass').val()+'"'; 
      }else{
           btnClass ='';  
      }
    }else {
    $('#classGroup').hide();
      btnClass =''; 
    }
    cssBtnClass = '.' + $('#btnClass').val();
    fontFamily = $('#fontFamily').val();
    fontBase = $('#fontBase').val();
    fontValue = $('#fontSize').val();
    fontEm = $('#fontSize').val()/$('#fontBase').val()+'em';
    fontColor = $('#fontColor').val();
    if($('#btnBorder').is(':checked')){
      $('#borderInput').show();
      borderColor = $('#borderColor').val();
      borderwidth = $('#borderWidth').val();
      bordercss = 'border:'+borderwidth+'px solid '+ borderColor+';';
      bordervmlwidth = 'strokeweight="'+borderwidth+'px"';
      bordervml = 'strokecolor="'+$('#borderColor').val()+'"';
    }else{
      $('#borderInput').hide();
      bordercss = '';
      bordervmlwidth = '';
      bordervml = '';
    }
    align = $('#align').val();
    if( $.trim($('#bRadius').val())==''){
    bRadius='';
    } else {
      bRadius = 'border-radius:' + $('#bRadius').val()+'px;';
    }
     arcsize = Math.ceil($('#bRadius').val() / $(cssBtnClass).outerHeight()*100)+'%';
    bgColor = $('#bgColor').val();
    bgcss = 'background-color:'+ $('#bgColor').val();
    bgvml ='fillcolor="'+ $('#bgColor').val()+'"';
    emTbPadding = ($('#tbPadding').val() / $('#fontBase').val()).toFixed(2)+'em';
    emLrPadding = ($('#lrPadding').val() / $('#fontBase').val()).toFixed(2)+'em';
    msoFontWidth = Math.ceil(($('#lrPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
    msoTextRaise = Math.ceil(($('#tbPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)*2+'%';
    htmlMsoTextRaise = Math.ceil(($('#tbPadding').val()/$('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
    if($('#fontBold').is(':checked')){
      fontBold = 'font-weight:bold;';
    }else{
      fontBold = '';
    }
    if($('#textTransform').is(':checked')){
      textTransform = 'text-transform:uppercase;';
    }else{
      textTransform = '';
    }
  if($('#vmlButton').is(':checked')){ 
    generatePreview = '<!--[if mso]>\n<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="mso-position-horizontal:'+align+';v-text-anchor:middle;mso-wrap-style:none" arcsize="'+arcsize+'" '+bordervml+' '+bordervmlwidth+' '+bgvml+'>\n<w:anchorlock/>\n<v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true">\n<![endif]-->\n<a '+btnClass+' href="'+urlLink+'" style="'+bordercss+'font-family: '+fontFamily+'; font-size:'+fontEm+'; mso-line-height-rule: exactly;line-height:1.5; background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+emTbPadding+' '+emLrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; '+bRadius+' mso-border-alt: none;mso-padding-alt:0px;">\n<!--[if mso]><i style="mso-font-width:'+msoFontWidth+';mso-text-raise:'+msoTextRaise+'" hidden>&#8195;</i><span style="mso-text-raise:'+htmlMsoTextRaise+'"><![endif]-->'+btnText+'<!--[if mso]></span><i style="mso-font-width:'+msoFontWidth+';" hidden>&#8195;&#8203;</i><![endif]--></a>\n<!--[if mso]>\n</v:textbox>\n</v:roundrect>\n<![endif]-->';
    generateCode = '&lt;!--[if mso]&gt;\n&lt;v:roundrect xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; style=&quot;mso-position-horizontal:'+align+';v-text-anchor:middle;mso-wrap-style:none&quot; arcsize=&quot;'+arcsize+'&quot; '+bordervml+' '+bordervmlwidth+' '+bgvml+'&gt;\n&lt;w:anchorlock/&gt;\n&lt;v:textbox inset=&quot;0,0,0,0&quot; style=&quot;mso-fit-shape-to-text:true&quot;&gt;\n&lt;![endif]--&gt;\n&lt;a '+btnClass+' href=&quot;'+urlLink+'&quot; style=&quot;'+bordercss+'font-family: '+fontFamily+'; font-size:'+fontEm+'; mso-line-height-rule: exactly;line-height:1.5; background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+emTbPadding+' '+emLrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; '+bRadius+' mso-border-alt: none;mso-padding-alt:0px;&quot;&gt;\n&lt;!--[if mso]&gt;&lt;i style=&quot;mso-font-width:'+msoFontWidth+';mso-text-raise:'+msoTextRaise+'&quot; hidden&gt;&amp;#8195;&lt;/i&gt;&lt;span style=&quot;mso-text-raise:'+htmlMsoTextRaise+'&quot;&gt;&lt;![endif]--&gt;'+btnText+'&lt;!--[if mso]&gt;&lt;/span&gt;&lt;i style=&quot;mso-font-width:'+msoFontWidth+';&quot; hidden&gt;&amp;#8195;&amp;#8203;&lt;/i&gt;&lt;![endif]--&gt;&lt;/a&gt;\n&lt;!--[if mso]&gt;\n&lt;/v:textbox&gt;\n&lt;/v:roundrect&gt;\n&lt;![endif]--&gt;'; 
  }else{
    generatePreview = '<a '+btnClass+' href="'+urlLink+'" style="'+bordercss+'font-family: '+fontFamily+'; font-size:'+fontEm+'; mso-line-height-rule: exactly;line-height:1.5; background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+emTbPadding+' '+emLrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; '+bRadius+'mso-padding-alt:0px;">\n<!--[if mso]><i style="mso-font-width:'+msoFontWidth+';mso-text-raise:'+msoTextRaise+'" hidden>&#8195;</i><span style="mso-text-raise:'+htmlMsoTextRaise+'"><![endif]-->'+btnText+'<!--[if mso]></span><i style="mso-font-width:'+msoFontWidth+';" hidden>&#8195;&#8203;</i><![endif]--></a>';
    generateCode = '&lt;a '+btnClass+' href=&quot;'+urlLink+'&quot; style=&quot;'+bordercss+'font-family: '+fontFamily+'; font-size:'+fontEm+'; mso-line-height-rule: exactly;line-height:1.5; background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+emTbPadding+' '+emLrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; '+bRadius+'mso-padding-alt:0px;&quot;&gt;\n&lt;!--[if mso]&gt;&lt;i style=&quot;mso-font-width:'+msoFontWidth+';mso-text-raise:'+msoTextRaise+'&quot; hidden&gt;&amp;#8195;&lt;/i&gt;&lt;span style=&quot;mso-text-raise:'+htmlMsoTextRaise+'&quot;&gt;&lt;![endif]--&gt;'+btnText+'&lt;!--[if mso]&gt;&lt;/span&gt;&lt;i style=&quot;mso-font-width:'+msoFontWidth+';&quot; hidden&gt;&amp;#8195;&amp;#8203;&lt;/i&gt;&lt;![endif]--&gt;&lt;/a&gt;'; 
  } 
  if($('#fontColor').val()==='#ffffff'||$('#fontColor').val()==='#fff'){
    generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#FFFFFF 0 100000\,100000 \#FFFFFF 0 100000&quot;;\ncolor:#000000 !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
  }else if($('#fontColor').val()==='#000000'){
    generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#000000 1 100000\,99000 \#000000 1 100000&quot;;\ncolor:#ffffff !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
  }else{
   generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nbackground: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
  }
  $('#preview').html(generatePreview);
  $('#code').html(generateCode);
  if($('#fontColor').val() && $('#vmlButton').is(':checked')){
    $('#css-code').show();
    $('#css').html(generateCss);
  }else{
    $('#css-code').hide();
    $('#css').html('');
  }
}
updateButton();
/*end UpdateButton*/
$(document).ready(function(){
  updateButton();
});
$( "input, select" ).on('change',function() {
  updateButton();
});
  $('#vmlButton').on('click',function(){
 updateButton();
  });
})(jQuery);
