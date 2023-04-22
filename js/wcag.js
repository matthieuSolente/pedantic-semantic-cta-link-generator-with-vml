// function from https://stackoverflow.com/a/5624139/3695983
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// function from https://stackoverflow.com/a/9733420/3695983                     
function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
    : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function calculateRatio() {

  // read the colors and transform them into rgb format
  const color1 = $("#fontColor").val();
  const color2 = $("#bgColor").val();
  const color1rgb = hexToRgb(color1);
  const color2rgb = hexToRgb(color2);

  // calculate the relative luminance
  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

  // calculate the color contrast ratio
  const ratio = color1luminance > color2luminance 
  ? ((color2luminance + 0.05) / (color1luminance + 0.05))
  : ((color1luminance + 0.05) / (color2luminance + 0.05));

  return ratio;
}


function contrast() {
  // read the colors and transform them into rgb format
  const color1 = $("#fontColor").val();
  const color2 = $("#bgColor").val();
  const color1rgb = hexToRgb(color1);
  const color2rgb = hexToRgb(color2);

  // calculate the relative luminance
  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

  var brightest = Math.max(color1luminance, color2luminance);
  var darkest = Math.min(color1luminance, color2luminance);
  return (brightest + 0.05) /
    (darkest + 0.05);
}


$('#fontColor,#bgColor').on('change', function() {
  
  const ratio = calculateRatio();
  const rationum = contrast();

  // show results depending on WCAG requirements
  const result = `
  <p>contrast ratio is: ${rationum};</p>
  <div class="button-generator--row"><div class="button-generator--half-row"><p>Normal Text</p>
${ratio < 1/4.5 ? '<p id="aa-small" class="valid">WCAG AA: ✓ Pass</p>' : '<p id="aa-small" class="fail">WCAG AA: X FAIL</p>' }</p>
${ratio < 1/7 ? '<p id="aaa-small" class="valid">WCAG AAA: ✓ Pass</p>' : '<p id="aaa-small" class="fail">WCAG AAA: X FAIL</p>' }</p>
</div><div class="button-generator--half-row">
<p>Large Text</p>
${ratio < 1/3 ? '<p id="aa-large" class="valid">WCAG AA: ✓ Pass</p>' : '<p id="aa-large" class="fail">AA-level large text: X FAIL</p>' }</p>
${ratio < 1/4.5 ? '<p id="aaa-large" class="valid">WCAG AAA: ✓ Pass</p>' : '<p id="aaa-large" class="fail">AAA-level large text: X FAIL</p>' }</p>
</div></div>
`;

  $("#wcag").html(result);
   
});

