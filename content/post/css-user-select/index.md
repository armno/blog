---
title: "Fixing a weird Bug: Cannot type in Safari's Input Fields"
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

I'm working on a mobile web project. Today I found a strange bug that
input fields were not working. When tap/click on an input field and type, no text shows up.
It happens only in Safari and Mobile Safari on iOS.

[video: the bug]

I've never found this bug before. So I did a search with `Safari cannot type in input`.
And I found a StackOverflow thread (of course)
['Input field iOS Safari bug — Can't type in any text'](https://stackoverflow.com/questions/32851413/input-field-ios-safari-bug-cant-type-in-any-text)

The accepted answer suggests putting `-webkit-user-select: text` to the input field.
So I did just that. And it worked. I can type in the input field and the text shows up.

[video: bug fixed]

The bug happened because some where in my CSS, I have this rule

```css {hl_lines=[4]}
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
}
```

It is set so to provide the native-like experience on the mobile web I'm working on.
`-webkit-touch-callout: none` disables iOS's callout menu when long-press on text.
`user-select: none` prevents iOS's text selection UI to show up when users long-press on a text content.

[image: touch callout and user-select menu on iOS]

And it causes a side effect &mdash; users also cannot type in the input fields
when the CSS rule `user-select: none` applied to them on Safari
because the rule is set on `*` which applies to everything, including input fields.
That's why the default behavior of input fields is broken.

Today I learned 2 things:

1. Don't break the web
2. Never trust `*` selector in CSS

