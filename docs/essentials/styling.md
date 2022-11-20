# Styling

> Note. I'am using `scss` syntax. And there is no default theme.

You should import one of this in your global style.scss like this `@import "~ngx-snotifire/styles/material";` or `@import "~ngx-snotifire/styles/material.css";` if you using css syntax.

> if you using css syntax and angular-cli. Import styles directly in `.angular-cli.json`

```json
{
  "styles": [
    "../node_modules/ngx-snotifire/styles/{STYLE_NAME}.css",
    "styles.css"
  ]
}
```

---

**Snotifire** offers you 3 themes.

#### Material

`@import "~ngx-snotifire/styles/material";`

![Material Theme](https://github.com/ccpatrut/ngx-snotifire/tree/main/src/assets/material.png)

#### Simple

`@import "~ngx-snotifire/styles/simple";`

![Simple Theme](https://github.com/ccpatrut/ngx-snotifire/tree/main/src/assets/simple.png)

#### Dark

`@import "~ngx-snotifire/styles/dark";`

![Dark Theme](https://github.com/ccpatrut/ngx-snotifire/tree/main/src/assets/dark.png)

If you need something else you can easily create your own theme by duplicating one of this, and writing your own styles.

Theme sources - [here](https://github.com/ccpatrut/ngx-snotifire/tree/main/projects/ngx-snotifire/styles)
