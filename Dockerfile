FROM klakegg/hugo:0.46-onbuild AS hugo

FROM nginx:1.15.2-alpine
COPY --from=hugo /onbuild /usr/share/nginx/html
