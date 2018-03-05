---
title: Synth och sånt
---
# Eurorack synthesizer-projekt

Här tänker jag berätta om mina pågående synthesizerprojekt.

## Cheapass LFO - steg 1, februari/mars 2018

Jag hittade en intressant och mycket billig LFO-kretslösning i en video på YouTube. Principen är att använda sig av en 2N2222-transistor som man klipper bort kollektorn på och kopplar en kondensator över. 2N2222 (och ytterligare några småsignaltransistorer) har den egenskapen att de fungerar som en avalanche-diod när man lägger en tillräckligt hög spänning över dem. I detta fallet så kommer kondensatorn att laddas upp med modularsynthens nätaggregat (+12v) och när spänningen över kondensatorn närmar sig toppspänningen (d.v.s. när den blir "full") så triggas avalancheeffekten och laddningen "rinner ut" genom transistorn vilket gör att spänningen faller igen till nära noll. Ut kommer en snygg sågtandsvågform. Genom att sätta en potentiometer före kondensatorn så kan man reglera hur snabbt "påfyllningen" sker och därigenom styra LFO:n's frekvens.

Jag insåg också snabbt att jag behövde buffra utgången och kopplade därför på en operationsförstärkare kopplad som icke-inverterande spänningsföljare.

För tillfället är LFO:n uppkopplad på en breadboard, men målet är att rita en kretslösning för fyra st. LFO:er och bygga dessa för rackmontering. Jag tror att det går att klämma in fyra stycken (d.v.s. fyra transistorer och två 8-pins operationsförstärkarkapslar) och dessutom rymma fyra jack och fyra (små) potentiometrar på väldigt liten bredd. Jag kan ha fel, men då backar jag till tre LFO:er och en fyrdubbel operationsförstärkarkapsel istället och använder den sista till något annat eller bara låter den vara oanvänd.

Fortsättning följer (förhoppningsvis)...