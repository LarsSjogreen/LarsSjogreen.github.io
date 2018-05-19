---
tags:
- jekyll
- pwa
published: true
---
## Busting the cache

För ett tag sedan validerade jag denna blogg med hjälp av [Lighthouse](https://developers.google.com/web/tools/lighthouse/) och la in en service worker som skapar en lokal cache av webbsidan så att den (åtminstone på sikt) ska kunna bli en offline-app om man vill. Som vanligt när det gäller cachening så får man då problemet med att sidorna inte längre uppdateras när man skriver något nytt. Jag behövde en strategi för att skapa ett nytt namn på cachen vid varje ompublicering av sajten.

Mitt första försök använde en [Jekyll-variabel](https://jekyllrb.com/docs/variables/) (`site.time`) för att skapa nya unika namn på cacehminnet för varje ompublicering och i skrivande stund har jag inte testat om det fungerar eller inte. Jag misstänker att det finns åtminstone två problem med denna strategi. Det första är att den gamla cachen inte raderas när den nya skapas. Jag har ingen aning om hur lång livstid en övergiven cachefil har i t.ex. Chrome, men jag misstänker att den nog kan leva ett bra tag. Det andra problemet (som jag snart ska undersöka) är att jag gissar att service workern faktiskt startar vid sidladdning och returnerar sidans genererade index.html från den existerande cachen. Namnet på den nya cachen ligger förstås i den nya index-filen så det kommer aldrig att användas och cacheproblemet kvarstår. Nu commitar jag och testar. BRB.

Nu har jag publicerat och testat och intressant nog så verkar min förändring ha haft en diametralt motsatt effekt. Sidan verkar laddas om vid varje klick. Det gör ju att det blir färskt innehåll hela tiden, men det innebär också att det inte används någon cache över huvud taget. Jag ska köra Lighthous och undersöka vidare. Återkommer.

Lighthouse verkar vara ok med cachegrejorna så jag släpper detta för tillfället och petar lite med att göra sajten lite med iPhone-vänlig i väntan på att Apple får tummen ur och stödjer PWA.