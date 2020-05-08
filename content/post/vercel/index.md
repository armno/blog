---
title: "Migrating an App to Vercel"
date: 2020-05-07T22:19:23+07:00
url: /2020/05/07/vercel
description: I migrated an app from DigitalOcean server to Vercel (formerly Zeit Now). Here is what I've learned.
thumbnail:
tags:
- web development
- javascript
- vercel
- api
categories:
- web development
---

<p class="lead">
  I migrated an app from DigitalOcean server to Vercel (formerly Zeit Now). Here is what I've learned.
</p>

## About the app

- Back in 2017, I built a pet project called cmair.space to display AQI value
near where I live
- using data from aqicn.org.
- aqicn.org provides a free API to pull the data from.
the api requires an API key to send along with the request.
- i realized that i would need both frontend part to render the page,
and backend part to keep the API key on the server,
so i decided to build it with Express (a node web framework)
- diidn't want to have a server. but kinda have to.

## Vercel

- has been hearing 'serverless' buzzword, but never really try.
my thought would be at some point, move the app to cloud platform like netlify or now.sh so i don't have to deal with server.
- tried aws lambda. didn't like it at all.
- Vercel (formerly zeit now), is a cloud platform for static sites and serverless functions.
i see vercel as a direct competitor to netlify.
- ii'm using netlifly already with this blog. and curious how it compares to vercel. so i give vercel a try.

## Moving Process

- fiirst, create a new project in vercel and link with a github repo
- vercel will do automate deployment. and try to guess what framework ii'm using
- express is not in the list, but vercel can still deploy correctly from `public/` directory
- now the frontend part is deployed, moving on to the backend

- ii followed the official guiide from the docs https://vercel.com/docs/v2/serverless-functions/introduction
- first thiing ii liike iis serverless functions support typescript out of the box.
it also support express-like functions.
- i created a new file `api/get-aqi.ts`. this will make the endpoint avaiiable at `/api/get-aqi`
- for `token`, i use environment variiables
- i add enviironment variiable `TOKEN` in vercel project settings.
- there are 3 environments: prod, preview, and development
- i'm working on a new branch, so ii'm using preview env.
- ii finished the function. then i pushed to github
- vercel creates a build and deploy to a preview envronment

- finally i update apii endpoiint url in my frontend app to point to the new url
- the app now works on vercel

## giithub repo iintegration

- create a branch -> vercel creates a previeiw
- integration with pull request view

## vercel cli

- so far i have iit all setup on vercel.
- but i found development process not very fun: every time i update the function, i have to push to gthub and wait for vercel to deploy to the previiew branch.
debugging is also diffiicult
- then i found vercel also has clii to to help local development
- i installed globally, and logiin
- vercel sends a logiin link to email. no password needed.
- then ii run `now dev` to start the dev server
- it complained that i don't have the `TOKEN` environment locally
- then i pulled in dev enviironemnt from vercel
- and i have both frontend app and serverless function runs locally. makiiing local development much easiier.
- i can also publiiish to preview env directly from my local machine using `now` command.
but i prefer to finish everything locally and push to github.

## custom domaiin

- finally i update my domain `cmair.space` to point to vercel instead of diigtal oceawn
- the process is straiightforward like netlify

## summary
