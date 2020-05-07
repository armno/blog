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

Back in 2017, I built a pet project called cmair.space to display AQI value
near where I live
using data from aqicn.org.

aqicn.org provides a free API to pull the data from.
the api requires an API key to send along with the request.
i realized that i would need both frontend part to render the page,
and backend part to keep the API key on the server,
so i decided to build it with Express (a node web framework)
