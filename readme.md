# armno.in.th

My [blog](https://armno.in.th). Built with [Hugo](https://gohugo.io/). Migrated from [`armno/armno.github.io`](https://github.com/armno/armno.github.io).

still a WIP.

## Development

[`Pygments`](http://pygments.org/) is required. To install Pygments:

Mac:

```sh
$ pip install Pygments
```

Ubunto Server:

```sh
$ sudo apt-get update && sudo apt-get upgrade
$ sudo apt-get install python-pip
$ pip install Pygments
```

## Install Hugo

Mac: 

```sh
$ brew install hugo
$ hugo server
```

Ubuntu Server: grab a tarball from release page on GitHub repo. For example, [v.0.25.1](https://github.com/gohugoio/hugo/releases/tag/v0.25.1).

```sh
$ wget https://github.com/gohugoio/hugo/releases/download/v0.25.1/hugo_0.25.1_Linux-64bit.tar.gz
$ tar -xf hugo_0.25.1_Linux-64bit.tar.gz
$ sudo mv hugo /usr/local/bin
$ sudo chmod +x /usr/local/bin/hugo
```

## Building

```sh
$ hugo
```

Output files are in `public/` directory.
