---
title: Taggsidor
tags:
- javascript
- jekyll
- nodejs
---
## Taggsidor

Med hjälp av [den här pedagogiska beskrivningen](http://longqian.me/2017/02/09/github-jekyll-tag/) skriven av [Long Qian](http://longqian.me/) så har jag satt upp tagsidor där länka till alla bloggposter med liknande ämnen kan hittas. Det enda som bjöd lite motstånd var att konvertera [ett pythonscript](https://github.com/qian256/qian256.github.io/blob/master/tag_generator.py) till [JavaScript](https://github.com/LarsSjogreen/LarsSjogreen.github.io/blob/master/assets/nodejs/tag_generator.js). Jag snubblade lite på async-beteendet i fs-biblioteket lite grann och bestämde mig ganska snart för att förenkla för mig själv genom att använda node-biblioteket [async](https://github.com/caolan/async) och metoden map istället för att försöka synkronisera en foreach med asynkrona filsystemanrop för hand. Mycket smidigt.

Jag måste erkänna att min lösning är rätt fragil och kanske inte den mest framtidssäkra (eftersom jag matchar på rader som börjar på '- ' och plockar resten av raden som en Jekyll-tag). Det är ju inget som hindrar mig från att, någon gång senare, glömma detta och råka skriva en bloggpost som har en vanlig textrad som börjar på '- '. Jag kanske refaktorerar detta någon gång i framtiden om jag får slut på annat att göra.

Körningen av node-scriptet triggas av git-hook:en pre-commit för att se till att min lilla kodsnutt tuggar igenom alla bloggposterna och säkerställer att tag-sidorna genereras upp varje gång jag committar kod för att putta upp till GitHub för bygge och publicering. 