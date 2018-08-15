# armno.in.th

My [blog](https://armno.in.th). Built with [Hugo](https://gohugo.io/). Migrated from [`armno/armno.github.io`](https://github.com/armno/armno.github.io).

## Development

```sh
$ docker-compose up --detach
```

## Setting up

Install Pygments on Ubuntu Server:

```sh
$ sudo apt-get update && sudo apt-get upgrade
$ sudo apt-get install python-pip
$ pip install Pygments
```

## Building

```sh
$ docker run --rm -it -v $(pwd):/src -v $(pwd)/output:/target klakegg/hugo:0.46
```

The output files are at `/output`.

## Creating a new post

```sh
$ hugo new post/<filename.md>
```
