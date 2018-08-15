# armno.in.th

[![Build Status](https://semaphoreci.com/api/v1/armno/blog/branches/master/badge.svg)](https://semaphoreci.com/armno/blog)

My [blog](https://armno.in.th). Built with [Hugo](https://gohugo.io/). Migrated from [`armno/armno.github.io`](https://github.com/armno/armno.github.io).

## Development

```sh
$ docker-compose up --detach
```

## Building a docker image

```sh
$ docker build --tag armno/blog .
```

then run the container

```sh
$ docker run --rm --publish 8000:80 armno/blog:latest
```

## MISC.

Install Pygments on Ubuntu Server:

```sh
$ sudo apt-get update && sudo apt-get upgrade
$ sudo apt-get install python-pip
$ pip install Pygments
```

## Creating a new post

```sh
$ hugo new post/<filename.md>
```
