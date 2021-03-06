---
title: Imgsnapper
tags:
- nodejs
- selenium
- opensource
---
## imgsnapper

En kompis frågade för ett par dagar sedan om det fanns något program som kunde ta hand om att spara en bild eller en skärmavbild från en webbsida med regelbundna intervaller. Det finns säkert en hel del sådana program, men det jag hittade efter lite googling var mest gamla windowsprogram och liknande. Därför (och eftersom jag kände mig lite programmeringssugen) så bestämde jag mig för att göra ett kommandoradsprogram som skulle kunna göra just det.

Jag har hunnit en liten bit. Programmet, som heter [imgsnapper](https://github.com/LarsSjogreen/imgsnapper), kan nu pekas på en hemsida och tar ett XPath-argument till bilden som ska sparas ner. Man kan också ange namnet på temporärbiblioteket där bilderna ska hamna. Jag använder mig av Selenium webdriver och chrome webdriver och ett node-tillägg som heter [node-getopt](https://github.com/jiangmiao/node-getopt). Dessutom har läste jag [den här](https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/) bloggposten och använde samma metod för att göra programmet installerbart så att det blir ett kommandoradsprogram som är tillgängligt i systemet.

Det finns en hel del grejor som man skulle kunna göra för att förbättra programmet, bland annat att bygga in schemaläggning, att försöka använda en mer stabil webdriver (och kanske köra den headless) och också att automatiskt förvandla bilderna i foldern till en liten film. Man skulle också kunna sätta upp en enkel express-webserver i bildkatalogen för att exponera bilderna som en liten webb så att man kan komma åt dem från sitt intranät (eller utifrån om man petar upp en port och pekar ett hostname på den). Allt detta och mer därtill skulle gå att göra, men vi får se om jag ids.

Jag har dessutom fått hjälp (och kanske får ytterligare hjälp framöver) av [eliassjogreen](https://github.com/eliassjogreen). Tack!