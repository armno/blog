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

Back in 2017, I built a pet project called [cmair.space](https://cmair.space) to display the
<abbr title="Air Quality Index">AQI</abbr> value near where I live using data from aqicn.org.

aqicn.org provides a free API to pull the data from and like other APIs,
it requires an API key to send along with the request.

Since there is no secure way to keep an API key on the client side,
I decided to put the app Express.js (a node web framework).
Keep my frontend app in `/public` directory and the backend part in an Express route.
Hosted it on my DigitalOcean droplet.

Automated deployment was setup kind of manually too.
I used [`github-webhook-handler`](https://www.npmjs.com/package/github-webhook-handler)
to add another route to Express and use with GitHub webhooks.

Whenever I push the code to GitHub,
it'll ping the route.
The route callback then pulls the code from github,
and restart the Express app on the server.
It was not a lot to set up, but also not free.

As a frontend developer, I always wish to do less on the server.
My thought would be, at some point, move the app to cloud platform
like Netlify or now.sh so I don't have to deal with server.

## Going Serverless

I have been hearing ['serverless'](https://martinfowler.com/articles/serverless.html) buzzword but never has a chance to use it.

It could be a great fit for my _serverful_ app where I can host the frontend part statically
and connect to my API which is on this serverless magic thing.

(I tried AWS Lambda a while ago and didn't get it much.
It seems like is a good product though. It is just not for me.)

[**Vercel**](https://vercel.com) (formerly Zeit Now), is a cloud platform for static sites and serverless functions.
I see Vercel as a direct competitor to Netlify.
I'm using Netlify already with this blog and really impressed how Netlify makes many things a lot easier.
I'm curious how it compares to Vercel
so I give Vercel a try this time.


## Moving Process

After signing up with my GitHub account, it will install 'Now' app on Github for my account.

{{< image
  src="images/now-app.png"
  alt="Now GitHub app"
  width="742"
>}}

I create a new project in Vercel and link with the project's repo.

{{< image
  src="images/import-github-repo.png"
  alt="importing a project from github"
  width="658"
>}}

{{< image
  src="images/select-repo.png"
  alt="select a github repo"
  width="560"
>}}

Vercel tries to guess what framework I'm using.
Express is not in the list, but Vercel can still deploy correctly from `public/` directory.
There is no build command.

{{< image
  src="images/project-settings.png"
  alt="set project framework and build command"
  width="498"
>}}

Now the frontend part is deployed. At this point, it is not working because there is no API backend for it yet.

---

I follow the official docs on [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction)
with some examples from [jamstackfns](https://jamstackfns.com/).

Vercel's Serverless Functions support TypeScript out of the box 💪.
No build tools needed. Only thing I have to do is install add TypeScript as a dependency.

```sh
$ npm install -D typescript
```

I create a new branch called `now` (always create a branch if you know you can mess up things).

Then create a new file `api/get-aqi.ts`. This will make the endpoint avaiiable at `/api/get-aqi`.

Then I go to project settings in Vercel. Under **General** » **Environment Variables**,
I create a new environment variable for my API key called `TOKEN`.

{{< image
  src="images/env-variable.png"
  alt="Environment variable in project settings"
  width="768"
>}}

Then I can use this environment variable with `process.env.TOKEN` in my Serverless Function code.
I think this is similar with using `.env` files,
now I don't have to go into the server and create and maintain them manually anymore.

There are 3 environments: Production, Preview, and Development.
Since I created a new branch off the `master` branch,
it will use the Preview environment when I deploy my branch to Vercel.

I finish the function. Then I push the branch to GitHub and create a pull request.
Vercel creates a build and deploy to the preview envronment.

{{< image
  src="images/pr-integration.png"
  alt="Vercel integration on GitHub's pull request"
  width="774"
>}}

When I push more commits to the PR, Vercel creates a new preview URL for each push.
I can click 'View deployment' buttons to view the previews.

{{< image
  src="images/more-commits.png"
  alt="Vercel creates a new URL for previews"
  width="701"
>}}

- finally i update api endpoint url in my frontend app to point to the new url
- the app now works on vercel

## giithub repo iintegration

- create a branch -> vercel creates a previeiw
- unlike netlify, you can to create a PR.

## vercel cli

- so far i have it all setup on vercel.
- but i found development process not very fun: every time i update the function, i have to push to gthub and wait for vercel to deploy to the previiew branch.
debugging is also difficult
- then i found vercel also has clii to to help local development
- i installed globally, and login
- vercel sends a logiin link to email. no password needed.
- then i run `now dev` to start the dev server
- it complained that i don't have the `TOKEN` environment locally
- then i pulled in dev environemnt from vercel. no need to copy the token string down to the local machine.
- and i have both frontend app and serverless function runs locally. makiing local development much easiier.
- i can also publish to preview env directly from my local machine using `now` command.
but i prefer to finish everything locally and push to github.
- note: the cli is still in beta

## custom domain

- finally i update my domain `cmair.space` to point to vercel instead of diigtal ocean
- the process is straightforward like netlify

## summary

- overall i like how simple it is to have server-side functionality on vercel serverless function.
without having my own server.
- local development with cli is also a big plus. i can run and debug my serverless function locally.
- it is actually my last project on my DigitalOcean droplet.
- now i don't need to have my own server anymore. hammergeil.

PS.
- found this in my inbox: https://jamstackfns.com
