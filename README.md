# Välkommen

Detta är en webbplats som beskriver projekt, experiment och lärdomar.

## Projekt

* Modulsyntesizer
* Brädspel
* Musik
* Öppen källkod
* Gräsrotsrörelser

## Tjänster

Sjögreen Labs erbjuder rådgivning, prototypframtagning och konsulttjänster inom mjukvara, mukvaruarkitektur, IoT och, företagsstrategi.

## Blogg

{% for post in site.posts %}

[{{ post.title }}]({{ post.url }})

{% endfor %}

## Kontakt

[Twitter](https://twitter.com/barse)

## Sidor
{% for page in site.pages %}

[{{ page.title }}]({{page.url}})

{% endfor %}