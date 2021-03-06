# Välkommen

Detta är en webbplats som beskriver blandade projekt, experiment och saker som jag har lärt mig eller håller på att lära mig.

## Projekt

* [Modularsyntesizer](/synthesizer.html)
* [Brädspel](https://boardgamegeek.com/collection/user/barse?gallery=small&rankobjecttype=subtype&rankobjectid=1&columns=title%7Cstatus%7Cversion%7Crating%7Cbggrating%7Cplays%7Ccomment%7Ccommands&geekranks=Board+Game+Rank&own=1&objecttype=thing&ff=1&subtype=boardgame)
<!-- * Musik -->
* [Öppen källkod](https://github.com/LarsSjogreen/imgsnapper)
* [Gräsrotsrörelser](https://www.makerspace.se/)

## Vad händer i Sjögreen Labs

I Sjögreen Labs gör jag prototyper, mjukvara, mukvaruarkitektur, utredningar, microkontrollerprojekt samt rådgivning inom IoT, digitala lösningar och företagsstrategi.

## Blogg


{% for post in site.posts %}

    {% if forloop.rindex <= 15 %}

<div class='blogpost' markdown='1'>
[{{ post.title }}]({{ post.url }}) 
<span class='expl' markdown='1'>(Skriven {{ post.date | date: "%Y-%m-%d" }}. {{ post.content | number_of_words }} ord.)
</span>
</div>

    {% endif %}

{% endfor %}


## Kontakt

[Twitter](https://twitter.com/barse) | [LinkedIn](https://www.linkedin.com/in/larssjogreen/) | [Instagram](https://www.instagram.com/barse42/) | [RSS](/feed.xml)
