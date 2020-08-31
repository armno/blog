---
title: "github-actions"
date: 2020-08-31T15:06:46+07:00
url: /2020/08/31/github-actions
description:
thumbnail:
tags:
-
-
categories:
-
---

1. what's github actions
2. trying out github actions
3. image actions by calibreapp
  1. go to repo -> actions -> create new workflow
  2. copy the yml template from actions marketplace page
  3. add some extra config / quality of each file type
  4. commit to master branch. there should be a new workflow createed
  5. try create a new PR
  6. a PR is created with a new check
    - can view progress
    - it took 4-5 minutes for the first run because it went through all images in the repo
    -  some images already optimized
  7. merge! saved 21 MB
  8. create another PR
    - without new images, the action doesn't run
    - a dummy image is then added to the PR, only new image gets optimized
    - now it runs faster
4. lighthouse ci actions
