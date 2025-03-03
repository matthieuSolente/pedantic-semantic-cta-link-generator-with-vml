# Pedantic Semantic CTA Link Generator with VML

A html/vml CTA Link Generator based on Mark Robbins Pedantic Semantic CTA Link for the html version, with customization for the vml version


## VML button generator by Matthieu Solente


Based on [Mark Robbins](https://www.goodemailcode.com/email-code/link-button) pedantic semantics cta link, updated in april 2023. You'll find all explanations on his blog.

From its code for a CTA in html, I created this generator that automatically generates the right measures in em, for better accessibility. The peculiarity of this button is that it uses the mso-font-width and mso-text-raise attributes to set the padding on Outlook. 

Define your **body font size** first. Then adjust your cta link **font size**, **padding**, **border-radius**, **color** and **background-color**. Choose your **font family**, choose between **small and big caps**, and finaly, check the **"vml"** checkbox if you want a VML version for rounded corners in Outlook ! 

For the VML version, I first tested by simply surrounding the link with a v:roundrect component, but Outlook has the unfortunate tendency to add vertical padding, which means that the rendering is no longer the same. The vml version therefore produces a completely different code, and uses that of one of my other generators.

The contrast checcker was inspired by the one found on [webaim](https://webaim.org/resources/contrastchecker/), Most of the code comes from [Alvaro Montoro](https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o), Himself having taken the code on Stackoverflow.

**Once satisfied, hover the code block and copy it by clicking on the small icon** (on the top right)

### Top and bottom padding

To reproduce the vertical padding and get the em value, we take the value indicated by the user and divide it by the overall font size
```javascript
emTbPadding = ($('#tbPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```
### Left and right padding   

To reproduce the vertical padding and get the em value, we take the value indicated by the user and divide it by the overall font size
 
```javascript
emLrPadding = ($('#lrPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```  
### mso-font-width  

To indicate the value of the mso-font-width property: we take the horizontal padding, which we divide by the global font size. We then divide the local policy by the global policy. Then, we divide the first value by the second. Finally, we multiply the result by 100 to get the percentage.

```javascript
msoFontWidth = Math.ceil(($('#lrPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```
### Vertical padding for Outlook 

In Mark version, hre he uses percentage. To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding, and multiply the result by two

```javascript
msoTextRaise = Math.ceil(($('#tbPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)*2+'%';
```
### Horizontal padding for Outlook 

To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding.
```javascript
htmlMsoTextRaise = Math.ceil(($('#tbPadding').val()/$('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```

## Update 2025

Mark's version is perfect for his pure html version. But when we surround the link with a vml component, `v:roundrect` alone or with `v:textbox`, there are big visible differences between the rendering on Outlook and that on other mailboxes. With or without 'v:textbox', the 'v:roundrect' component oddly adds vertical padding. By inspecting the code on an Outlook mailbox, we see that the latter transforms the code, but despite measures that seem consistent, this vertical padding persists.

For the `mso-text-raise` values, I looked for values ​​that allowed almost equivalent rendering on Outlook, and I arrived at this formula. Rather than the percentage, I play on the unit in points.

```javascript
msoTextRaise =(($('#tbPadding').val() * 75 / 100)*(80/100) /2).toFixed(2)+'pt';
```

We take the vertical padding and multiply it by 75 divided by 100 to obtain the point value. As is, the value, although correct, does not reduce the additional padding. After numerous tests, I found that by taking 80% of this value and dividing it by 2, we arrived at an almost identical result between Outlook and the other mailboxes. 

Even if the calculation seems convoluted, the rendering is much better than if we apply a simple v:roundrect component around the pedantic semantic button.

```
<!--[if mso]><i style="mso-font-width:250%;mso-text-raise:3.00pt" hidden>&emsp;</i><![endif]-->Show me the button!<!--[if mso]><i style="mso-font-width:250%;mso-text-raise:-3.00pt" hidden>&emsp;&#8203;</i><![endif]-->
```

I also changed Mark's original version to the html version, simplifying mso-text-raise formula as follows. Here we do not need to carry out more complex calculations, because in the html version, the padding is well respected.
```javascript
msoTextRaise =(($('#tbPadding').val() * 75 / 100)).toFixed(2)+'pt';
```
So try it and enjoy !! Of course, if you notice any areas for improvement, don't hesitate to let me know!

