Just run `hot-server` to start the hot reloading server.

`npm i -g hot-server` if you don't have it.

When you're ready to deploy, minify the HTML with:

```
html-minifier --file-ext html --case-sensitive \
  --collapse-boolean-attributes --collapse-whitespace \
  --minify-js true \
  --remove-attribute-quotes --remove-comments \
  --remove-optional-tags --remove-redundant-attributes \
  --remove-script-type-attributes \
  --remove-style-link-type-attributes \
  --remove-tag-whitespace \
  --process-scripts "application/ld+json" \
  index.dev.html > index.html
```

Test that it looks okay, then git commit `index.html`.

To deploy, just `git push`.
