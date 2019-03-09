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

## `picture` shortcode

parameters:

- `wrapper-class`: CSS class(or classes) for the wrapper element of the image (`<p>`).
- `img-class`: CSS class(or classes) for the `<img>` itself.
- `src`
- `alt`

```
{{< picture wrapper-class="semi-full" img-class="nom" src="images/platoo.jpg" alt="test" >}}
```

output:

```html
<p class="media semi-full">
  <img class="nom" src="images/platoo.jpg" alt="test">
</p>
```

## `picture-lazy` shortcode for lazy-loaded pictures

parameters:

- `wrapper-class`
- `src`
- `alt`

```
{{< picture-lazy wrapper-class="semi-full" src="images/platoo.jpg" alt="test" >}}
```

output:

```html
<p class="media lazy-wrapper semi-full">
  <img class="lazy" data-src="images/platoo.jpg" alt="test">
</p>
```
