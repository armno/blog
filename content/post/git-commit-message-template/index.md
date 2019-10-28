---
title: "TIL: Creating Git Commit Message Template"
date: 2019-10-24T14:07:52+07:00
url: /2019/10/24/git-commit-message-template
description: Today I learned how to create a template for commit message it Git
tags:
- development
- git
- terminal
- tools
---

Today I learned how to create a template for Git's commit message
from [thoughtbot's blog](https://thoughtbot.com/blog/better-commit-messages-with-a-gitmessage-template).

---

Running `$ git commit` opens a editor window with some default text in it.
Normally we would put our commit message at top of the file where the empty line is.

We can create a template for the empty space in the commit window
with text we want.

First we would need to create a text file with our custom messages.
I want to start the commit message with `#TICKET_ID` to refer to the
related ticket in my ticket system. Then follow with the commit summary.

File name can be anything but I like to name it `.gitmessage`.

```sh
$ touch .gitmessage
```

```
'#[TICKET_ID] - [COMMIT SUMMARY]

```

- Note: I prefix the line with `'` to prevent Git to see it as a comment.
(A line started with `#` is excluded from the commit message.)
- I also add an empty line at the end to seperate my template with Git's default template.

Then tell Git to use this file as a commit message's template.
by setting Git's config `commit.template` to point to the file.

```sh
$ git config commit.template .gitmessage
```

Then when we run `$ git commit`, the editor window is now pre-filled with our template.

{{< image
  src="images/commit-with-template.png"
  alt="git commit with template"
  caption="commit message with pre-filled template"
>}}

I prefer to have the same template for all repositories,
so move the template to my home folder and make it a global configuration.

```sh
$ mv .gitmessage ~/
$ git config --global commit.template "~/.gitmessage"
```

Note: the template file will not work with the shorthand command `$ git commit -am`.

## Using tools to build a better habit

## Working with teams
