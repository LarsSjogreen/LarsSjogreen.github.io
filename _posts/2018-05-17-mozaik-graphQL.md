---
tags:
- graphql
- mozaik
- nanographql
- javascript
published: true
---
## GraphQL and Mozaik

This is just a very simplistic test. I created a free account at [Mozaik](https://www.mozaik.io/) which is a GraphQL compatible headless CMS. After that, I created a schema and added some documents. I then used the very nice Schema Explorer (based on [GraphiQL](https://github.com/graphql/graphiql)) to create a little GraphQL query to get the data that I was interested in. This is what the query looks like:

```
  {
    documents(types: PRODUKT) {
      items {
        id
        displayName
        ... on ProduktDocument {
          namn
          beskrivning
          produktbildEr {
            url
          }
        }
      }
    }
  }
```

It took me a while to realize that I needed to drop the top level (`products`) for some reason. After that, I used the simplest possible JavaScript library that I could find ([nanographql](https://github.com/yoshuawuyts/nanographql)) to call the Mozaik back end. I simply generate the HTML output by using `.createElement()`. This is what the end result looks like:

{% include graphql-request.html %}