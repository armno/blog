---
title: "Fixing Bug: Cannot type in Safari's Input Fields"
date: 2020-11-26T18:04:34+07:00
url: /2020/11/26/css-user-select
description:
thumbnail:
tags:
-
-
categories:
-
---

I'm working on a mobile web project. Today I found a strange bug:
input fields were not working. The input fields show nothing when typing.
It happens only in Safari and Mobile Safari on iOS.

I've never found a bug like this before. So I did a search with `Safari cannot type in input`.
I found a StackOverflow thread (of course)
['Input field iOS Safari bug — Can't type in any text'](https://stackoverflow.com/questions/32851413/input-field-ios-safari-bug-cant-type-in-any-text)

On StackOverflow, I always look for the accepted answer - the one with a green checkmark.
The answer suggests putting `-webkit-user-select: text` to the input field.
So I did just that. And it worked.

