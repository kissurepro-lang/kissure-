# kissure-

KISSURE — English B2B website scaffold. Static site, no build step, no dependencies.

## Structure

```
index.html              Landing page (hero, products, OEM/ODM, about, contact)
assets/css/styles.css   All styles
assets/js/main.js       Mobile nav, footer year, quote form
```

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
cd kissure-site && python3 -m http.server 8000
```

## Deploy (GitHub Pages)

1. Repo Settings → Pages → Source: **Deploy from a branch**
2. Branch: `main`, folder: `/ (root)`
3. The site goes live at `https://kissurepro-lang.github.io/kissure-/`

## Before launch — TODO

- [x] `assets/js/main.js`: contact email set to kissurepor@gmail.com
- [x] Contact section: WhatsApp link added (https://wa.me/8613533005356)
- [ ] Replace the `K` brand mark with the real KISSURE logo file
- [ ] Add product photos / shade charts to the product cards
- [ ] Favicon (`favicon.ico` / `favicon.svg`)

## Copy notes

- Tone: direct B2B. No "high quality / best price" filler.
- No compliance or sterility claims anywhere on the page until batch-linked
  CoA / micro documentation is in hand from the factory.
- Numbing products are intentionally not listed as a selling point
  (Oregon scope-of-practice rule, ORS 690.350).
