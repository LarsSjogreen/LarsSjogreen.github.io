# Välkommen

Detta är en webbplats som beskriver projekt, experiment och lärdomar.

## Projekt

* [Modularsyntesizer](/synthesizer.html)
* Brädspel
* Musik
* Öppen källkod
* Gräsrotsrörelser

## Vad görs i Sjögreen Labs

Sjögreen Labs gör prototyper, mjukvara, mukvaruarkitektur, utredningar, microkontrollerprojekt samt rådgivning inom IoT, digitala lösningar och företagsstrategi.

## Blogg

{% for post in site.posts %}

    {% if forloop.rindex <= 2 %}

[{{ post.title }}]({{ post.url }})

    {% endif %}

{% endfor %}

## Kontakt

[Twitter](https://twitter.com/barse) | [LinkedIn](https://www.linkedin.com/in/larssjogreen/) | [RSS](/feed.xml)

## Sidor
{% for page in site.pages %}^[{{ page.title }}]({{page.url}})^{% endfor %}