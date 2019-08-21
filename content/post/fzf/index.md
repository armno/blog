---
title: "fzf - The Fuzzy Finder"
date: 2019-08-21T21:36:51+07:00
url: /2019/08/21/fzf
description: fzf is a command-line fuzzy finder, and is my new favorite thing.
tags:
- command line
- fzf
- fuzzy search
- terminal
- tools
thumbnail: images/cover.png
---

[`fzf`](https://github.com/junegunn/fzf) is my new favorite command-line tool.
I learned about this tool from Remy Sharp's post: [**CLI: Improved**](https://remysharp.com/2018/08/23/cli-improved).

From the GitHub page - fzf is *a general-purpose command-line fuzzy finder*.
It does the search and nothing else.

> Fuzzy finders allow you to search for things in the list by typing only some parts of the text, similar to VSCode's command panel <kbd>cmd</kbd>+<kbd>p</kbd> or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> combos.

By default, `fzf` performs fuzzy search on files in the current directory
and prints the selected item's path as an output to `STDOUT`.

```sh
$ fzf
```

<video src="images/default-2.mp4" width="100%" autoplay muted controls>

We can use this output with other tasks. For example, open the file in a code editor

```sh
$ vim $(fzf)
```

<video src="images/vim.mp4" width="100%" autoplay muted controls>

or combine with `cat` or `bat` to display the file preview as shown in @rem's post.

```sh
$ fzf --preview 'bat --color "always" {}'
```

<video src="images/preview.mp4" width="100%" autoplay muted controls>

Check out the [wiki page](https://github.com/junegunn/fzf/wiki/examples) for more advanced examples and use cases like with command history,
running processes, git history, etc.

## Fast

Not only fzf is super simple, it's also super fast. It's *crazy fast*.

Even with a big list (`node_modules/` folder is included),
fzf is still very fast. It can do the search without waiting for file indexing to be finished.

<video src="images/big-folder.mp4" width="100%" autoplay muted controls>

I only touch the surface but already have a lot of joy trying fzf.
To me, it's like when [`z`](https://github.com/rupa/z) makes `cd` fun again.

### Installation

fzf can be installed via Homebrew on macOS.

```sh
$ brew install fzf
```

It is also available as a [Vim plugin](https://github.com/junegunn/fzf/blob/master/README-VIM.md).
I haven't try it myself yet but curious to see how it compares to my [`CtrlP + ag`](https://armno.in.th/2015/02/26/setting-up-vim-part-2/#ctrlp-the-silver-searcher) set up.
