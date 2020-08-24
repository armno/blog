---
title: "Optimizing ZSH Startup Time"
date: 2020-08-24T16:39:49+07:00
url: /2020/08/24/optimizing-zsh-startup-time
description:
thumbnail:
tags:
-
-
categories:
- development
---

Today I learned a few ways to reduce zsh's startup time.
In other words, make new zsh terminal window loads a bit faster.

Inspired by articles by Chai Phonbopit on
[ทำไม ZSH ของเราช้าจัง? + ทำให้เร็วขึ้นได้มั้ย](https://devahoy.com/blog/2020/08/increase-speed-of-zsh/)
and by Matthew J. Clemente on [Speeding Up My Shell (Oh My Zsh)](https://blog.mattclemente.com/2020/06/26/oh-my-zsh-slow-to-load.html),
I can make my zsh terminal loads faster.

(Normally I'm not bothered by my zsh's startup time because
I don't open new terminal windows/tabs a whole lot in a day.
But if I can make things a bit faster, then why not?)

## 1. profiling current time

```sh
$ for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done
```

- `seq` prints sequences of numbers. We use it with `for .. in` loop to run the commands 10 times
- `time` is a utility command to execute a command and then print out time used
- `-i` running `zsh` in interactive mode - meaning we can run (or pass) commands to it to execute
- `-c` tells `zsh` to take the next part which is `exit` as a command to execute, not as a parameter

my zsh startup time before optimize was ~1.3 seconds:

[image: original startup time]

## 2. analyzing my `.zshrc` file

whatever goes in `.zshrc` file adds more startup time to zsh.

I don't have much in my `.zshrc` file. It looked like this:

```sh
. /Users/armno/code/z/z.sh

# Base16 Shell
BASE16_SHELL="$HOME/.config/base16-shell/"
[ -n "$PS1" ] && \
    [ -s "$BASE16_SHELL/profile_helper.sh" ] && \
        eval "$("$BASE16_SHELL/profile_helper.sh")"

# Path to your oh-my-zsh installation.
export ZSH="/Users/armno/.oh-my-zsh"

ZSH_THEME="cloud-armno"

DISABLE_UPDATE_PROMPT="true"

plugins=(zsh-completions zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh
source ~/.aliases
source ~/.functions

export LC_ALL=en_US.UTF-8
export GPG_TTY=$(tty) # something with gpg

export PATH="/usr/local/opt/ruby/bin:$PATH"
export PATH="/usr/local/sbin:$PATH"

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

1. Loads `z`
2. Loads `base16_shell`
3. Initialize oh-my-zsh and its plugins
4. Loads `nvm`

The biggest bottleneck seems to be nvm's scripts, as mentioned by many people.

## 3. disable `nvm`

I comment out the last 2 lines from my `.zshrc`

```sh
# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

open a new termnial tab, and re-run the profiling script.
With this alone, zsh's startup time goes down from ~1.3s to ~0.xs.
This is a lot, but it also means I will not be able to use nvm.

I still need nvm.

## 4. lazy-loading nvm

Lazy-loading nvm makes nvm available only when it is needed, not right away then the shell starts.
It can be done by using `zsh-nvm` plugin of oh-my-zsh.

First we need to install the plugin.

```sh
$ git clone https://github.com/lukechilds/zsh-nvm $ZSH/custom/plugins/zsh-nvm
```

then in `.zshrc` file, add `NVM_LAZY_LOAD` environment variable to `true`

```sh
export NVM_LAZY_LOAD=true
```

and add `zsh-nvm` to `plugins=()` list

```sh
plugins=(zsh-completions zsh-autosuggestions zsh-syntax-highlighting zsh-nvm)
```


### 4.2

## 5. (bonus) evalcache plugin
