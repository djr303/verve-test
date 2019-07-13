# Verve Engineering Test

## Introduction

Welcome to the Verve code test. The test is broken into two parts

* Code Review
* Implementation

You are free to tackle the sections in any order. Please take as much or as little time
as you need in order to complete the test to your satisfaction. We recommend that test
should take a couple of hours (2-3) rather than days. All we ask is that you
let us know, truthfully, how much time you spent on the test. There is no right or wrong
amount of time, this info will simply help us with context when reviewing the results.

## Setup

*Pre-requisites:*
- Node v9.4.0
- NPM v5.6.0

*Commands:*
- `npm run serve`
- `npm run unit`

## Code review

We'd like you to code review everything inside `./src/Pages/Review`.

Please leave your review in `__FEEDBACK.md` inside of the directory mentioned above. Feel free to quote blocks of code in the markdown file or format it.

Treat this as a code review you'd provide to your colleague on a Github pull request. What we're looking for in this part is to see what you normally pay attention to when you're reviewing the code of your teammate and how you communicate feedback to them. Feel free to also point out things you like in the code, not just critique.

## Implementation

The main objective of this task is to make a dashboard containing rewards for Campaign X only.
Consider the UX and optimise your solution for a mobile experience.

We'd like you to extend the initial query we're making to our GraphQL service inside `./src/Pages/Task`.

For each reward we want to see its description and image, as well as be able to filter the list of rewards by quantity, points and capPerAmbassador.

If you get stuck on extending the GraphQL query: <a href="http://localhost:8701/?query=query%20allRewards(%24page%3A%20Int!)%20%7B%0A%20%20%20%20allRewards(page%3A%20%24page)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%7D&variables=%7B%0A%20%20%22page%22%3A%200%0A%7D">view GraphiQL</a>, open the Docs and search for "allRewards" for the schema you can extend your query from.

You may add or remove any other dependencies to this project as you like, but we'd prefer it if you use with React as the core library.
