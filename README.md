# Pedantic Semantic CTA Link Generator with VML
A html/vml CTA Link Generator based on Mark Robbins Pedantic Semantic CTA Link



### VML button generator by Matthieu Solente


Based on [Mark Robbins](https://www.goodemailcode.com/email-code/link-button) pedantic semantics cta link, updated in april 2023. You'll find all explanations on his blog.

From its code for a CTA in html, I created this generator that automatically generates the right measures in em, for better accessibility. The peculiarity of this button is that it uses the mso-font-width and mso-text-raise attributes to set the padding on Outlook. 

Define your **body font size** first. Then adjust your cta link **font size**, **padding**, **border-radius**, **color** and **background-color**. Choose your **font family**, choose between **small and big caps**, and finaly, check the **"vml"** checkbox if you want a VML version for rounded corners in Outlook ! 

For the VML version, I first tested by simply surrounding the link with a v:roundrect component, but Outlook has the unfortunate tendency to add vertical padding, which means that the rendering is no longer the same. The vml version therefore produces a completely different code, and uses that of one of my other generators.

The contrast checcker was inspired by the one found on [webaim](https://webaim.org/resources/contrastchecker/), Most of the code comes from [Alvaro Montoro](https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o), Himself having taken the code on Stackoverflow.

**Once satisfied, hover the code block and copy it by clicking on the small icon** (on the top right)
