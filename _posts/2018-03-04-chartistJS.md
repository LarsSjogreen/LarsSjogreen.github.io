---
title: Chartist.js
tags:
- chartist
- javascript
---
## Chartist.js

Eftersom jag testade att göra en liten chart.js-komponent så ville jag också prova ett annat ramverk. Här är därför ett motsvarande test i [chartist.js](https://gionkunz.github.io/chartist-js/).

{% include chartistjs.html %}

Lika enkelt som chart.js. Man inkluderar ett stylesheet och ett javascript från det rekommenderade CDN:et och sedan är det bara några rader kod så har man en graf på sidan. Ett `<div>`-element som blir platshållare och sedan lite konfiguration och ett anrop till Chartlist (i detta fall till Line-metoden) så har man en linjegraf. Kunde inte vara enklare.

```
<div class="ct-chart ct-perfect-fourth"></div>

<script>
var data = {
    // Det här är labels för värdena
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun'],
    // Här är själva datat som ska visualiseras
    series: [
      [5, 2, 4, 2, 0, 4]
    ]
};

var options = {
  width: 300,
  height: 200
};

new Chartist.Line('.ct-chart', data);
</script>
```