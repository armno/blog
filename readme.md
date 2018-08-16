# armno.in.th

[![CircleCI](https://circleci.com/gh/armno/blog/tree/master.svg?style=svg)](https://circleci.com/gh/armno/blog/tree/master)

My [blog](https://armno.in.th). Built with [Hugo](https://gohugo.io/). Migrated from [`armno/armno.github.io`](https://github.com/armno/armno.github.io).

## Development

```sh
$ docker-compose up --detach
```

## Building a docker image

```sh
$ docker build --tag armno/blog:master .
```

then run the container

```sh
$ docker run --rm --detach --name armno-blog --publish 8000:80 armno/blog:master
```

## Creating a new post

```sh
$ hugo new post/<filename.md>
```
