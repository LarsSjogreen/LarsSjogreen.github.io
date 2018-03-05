## Canvg

Det finns tillfällen när man vill kunna ladda ner och spara alla de fina graferna som man har ritat på en webbsida. Tyvärr uppstår då ganska ofta ett problem då grafbiblioteken som används använder svg för att rita resultatet. Detta är ett vektorformat som stöds av alla moderna webbläsare, men som inte automatiskt konverteras till bitmap. För att lösa detta problem så finns det ett javascriptbibliotek som heter [canvg](https://github.com/canvg/canvg) som ritar svg-bilden i ett canvas-element i webbsidan vilket då gör den möjlig att ladda ner och spara (t.ex. genom att högerklicka på grafen och välja "Spara bild som...").

Här är ett exempel på en svg-bild som automatiskt har konverterats:

{% include canvgjs.html %}

Det enda man behöver göra är att:
1. Inkludera tre javascriptbibliotek
2. Ropa på javascript-funktionen `canvg();`

Jag har upplevt problem med ramverket när jag använde det tillsammans med chartist.js, gissningsvis eftersom de graferna verkar vara uppbyggda av flera semitransparenta svg:er ovanpå varandra.