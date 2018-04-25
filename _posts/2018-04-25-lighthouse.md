## Lighthouse och annat

Jag vet att jag är sen på pucken, men jag testade [Lighthouse](https://developers.google.com/web/tools/lighthouse/) idag och jag önskar att den hade funnits för fyra-fem år sedan då jag som bäst funderade på webboptimering, SEO och responsivitet. Förutom att den numera är inbyggd i dev tools i Chrome (under fliken "Audits") så finns den också som plugin till Chrome (om man vill ha en knapp att trycka på istället) och dessutom som fristående command line-program som man enkelt installerar genom att skriva `npm install -g lighthouse`.

Jag ska testa lite grann och kanske göra några små förändringar utifrån rekommendationerna som ges. Github pages ger ju inte total frihet, men jag tror att jag kan göra några små ändringar här och där för att öka min PWA-score och prestanda.

*Uppdatering:* Efter en knapp timmes labbande har jag lagt till en manifestfil för PWA, justerat lite settings, fixat med prestandan (d.v.s tagit bort Twitter från förstasidan) samt registrerat en serviceworker som sköter om cachen. Skillnaden blev helt klart märkbar. Tyvärr så verkar inte min stackars iPhone fatta att den ska börja se sidan som en progressiv webapplikation. Jag tror att felet delvis är mitt, men också delvis telefonens. Om jag får tid så kommer jag att försöka få upp PWA-scoren högre, helst till 100% eller i alla fall nära, för att sedan se om den behandlas på ett annat sätt.

I vilket fall som helst så var Lighthouse ett mycket praktiskt och lättanvänt verktyg som jag säkert kommer att använda mig av fler gånger.