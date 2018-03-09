# Välkommen

Detta är en webbplats som beskriver projekt, experiment och lärdomar.

## Projekt

* [Modularsyntesizer](/synthesizer.html)
* [Brädspel](https://boardgamegeek.com/collection/user/barse?gallery=small&rankobjecttype=subtype&rankobjectid=1&columns=title%7Cstatus%7Cversion%7Crating%7Cbggrating%7Cplays%7Ccomment%7Ccommands&geekranks=Board+Game+Rank&own=1&objecttype=thing&ff=1&subtype=boardgame)
* Musik
* Öppen källkod
* Gräsrotsrörelser

## Vad görs i Sjögreen Labs

Sjögreen Labs gör prototyper, mjukvara, mukvaruarkitektur, utredningar, microkontrollerprojekt samt rådgivning inom IoT, digitala lösningar och företagsstrategi.

## Blogg

{% for post in site.posts %}

    {% if forloop.rindex <= 5 %}

[{{ post.title }}]({{ post.url }}) (Skriven {{ post.date | date: "%Y-%m-%d" }}. {{ post.content | number_of_words }} ord.)

    {% endif %}

{% endfor %}

## Kontakt

[Twitter](https://twitter.com/barse) | [LinkedIn](https://www.linkedin.com/in/larssjogreen/) | [RSS](/feed.xml)

