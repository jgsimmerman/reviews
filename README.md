# Hackmazon Reviews

### About

Hackmazon Reviews is a full stack, responsive, e-commerce product reviews service delivered as a microservice, inspired by Amazon.

It was built as part of a full <a href="https://github.com/hackmazon">e-commerce product page MVP</a> but can be used as a stand-alone reviews section or combined with other services/components to create a full e-commerce site.

In addition to reviews section, it also exposes an API that can be used by other services to get a products overall rating.

### Contributors

Reviews service developed by <a href="https://github.com/bleafman">bleafman</a>, other components to the full e-commerce site devloped by:

<a href="https://github.com/garrettwelson">garrettwelson</a> - NavBar and Search

<a href='https://github.com/Jordielove'>Jordielove</a> - Carousel

<a href='https://github.com/VarCannon'>VarCannon</a> - Q&A

<a href='https://github.com/zonagilreath'>zonagilreath</a> - Product Display

### Tech Stack

_Hackmazon Reviews_ was built primarily with ReactJS on the front end, Node/Express on the backend, and MongoDB for the database. Other key technologies used are listed below:

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://avatars0.githubusercontent.com/u/13142323?s=400&v=4" width="100"/>
<img src="https://lh3.googleusercontent.com/xcong6Yn8NoueMYWPhEfO76dw0Nt70kiDVOCOygTFEQWpysHxcT-5jYzq9XWIgD3lvCGnGrjlhddm7WEOw9V1FlHivqFjZCXF9IDsfd7uQ2SxlI80roSJcnHvb0O7POvlYOPNvRG" width="100" />
<img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="100">
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://cloud.mongodb.com/static/images/mdb_logo.svg" width='100'/>

### Technical Challenges / Research

Some unexpected issue I ran into while building this app:

1. A hard to reproduce/isolate bug causing server response time to skyrocket, caused by Mongo driver configuration

2. Over Engineering used up time that could have been dedicated to additional features. Spent time implementing Sass and Redux without a lot of payoff since the features that I planned to used them for did not get implemented.

## Deliverables

#### User Stories

- As a User, I should be able to see reviews of the product I'm viewing.
- As a User, I should be able to see an overall score and summary of the reviews for a product.
- As a User, I should be able to see the rating of a product whenever one is show to me.

### Minimum Viable Product (MVP)

The MVP of the app displays a complete review section, sorted by 'most helpful' review, when given a item ID.

### How the App Works

Behind the scenes, the app takes in reviews, stores them in Mongo, and tabulates a Summary in a seperate collection.

When imported as a script to a page and given a div with an ID of 'reviews', _Hackmazon Reviews_ renders a complete reviews section to the page.

It also serves Summary objects to other components on request.

### Future Features

- Implement filtering by helpfulness and rating.
- Implement pagination/caching by only requesting the first few pages of results for each filterable.
- Server side calculation and monitoring of incoming summaries using Mongo Stitch Functions.
- Refactor away from under utilized CSS libraries (FontAwesome, Sass) to reduce bundle size.
