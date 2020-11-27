---
title: "Fixing a weird Bug: Cannot type in Safari's Input Fields"
date: 2020-11-26T18:04:34+07:00
url: /2020/11/26/css-user-select
description: A small thing I learned about `user-select` CSS property.
thumbnail: assets/cover.png
tags:
- web development
- css
- usability
categories:
- web development
---

I'm working on a mobile web project. Today I found a strange bug that
input fields were not working. When tap/click on an input field, it receives `:focus` state
but I cannot type anything - no text shows up.
It happens only in Safari and Mobile Safari on iOS.

<video src="assets/bug.mp4" autoplay muted controls loop></video>

I've never found this bug before. So I did a search with keywords `Safari cannot type in input`.
I found a StackOverflow thread (of course ..)
[_Input field iOS Safari bug — Can't type in any text_](https://stackoverflow.com/questions/32851413/input-field-ios-safari-bug-cant-type-in-any-text)

The accepted answer suggests putting `-webkit-user-select: text` to the input field.
So I did just that. And it worked. I can type in the input field and the text shows up.

<video src="assets/bug-fixed.mp4" autoplay muted controls loop></video>

-----

The mobile web project I'm working on needs to provide a native-app-like experience.
I have this rule applies globally since the beginning of the project:

```css {hl_lines=[4]}
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
}
```

[`user-select: none`](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) prevents iOS's text selection UI to show up when users long-press on text content.
For example, when long-press on a button.

{{< image
  src="assets/select-text-menu.png"
  alt="callout menu on mobile Safari"
  caption="Unwanted callout menu when long press on a UI element"
  align-caption="left"
  width="369"
>}}

Since I have the rule with `*` selector, it applies to everything,
including the input fields.

And it causes a side effect &mdash; on Safari, users are not able to type in the input fields
when there is `user-select: none` applied to them.
That's why the default behavior of input fields is broken.

<p class="message--warning">
I should have done it differently. Instead of setting <code>user-select: none</code> to everything,
set it to only elements that need this behavior. Setting <code>user-select: none</code>
can raise some usability and accessibility concerns.
Read more on <a href="https://ux.stackexchange.com/questions/83184/is-user-select-none-bad-ux" target="_blank" rel="noreferrer noopener"><em>Is “user-select: none” bad UX?</em></a>
</p>

Today I learned 2 things:

1. Never put `user-select: none` to input elements
2. Try not to break the browser's defaults

