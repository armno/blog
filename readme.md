# armno.in.th

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d34a977-d95b-4b64-9e99-1a1df43ee944/deploy-status)](https://app.netlify.com/sites/armno/deploys)

My [blog](https://armno.in.th). Built with [Hugo](https://gohugo.io/). Migrated from [`armno/armno.github.io`](https://github.com/armno/armno.github.io).

## Development

```sh
$ hugo serve -D
```

## Create a new post

```sh
$ hugo new post/<post-title>/index.md
```

---

## `image` shortcode

A shortcode to insert responsive, lazy-loaded images into post content.

```
{{< image
  src="images/platoo.jpg"
  alt="test"
  caption="caption to display below the picture"
  align-caption="left"
  width="300"
>}}
```
