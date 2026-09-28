# doddtechservices.com

Source for the Dodd Tech Services website. Dodd Tech Services is a commercial
low voltage integrator in Atlanta, Georgia: surveillance, access control,
structured cabling, networking, and paging for properties across Georgia and
the Southeast.

## Layout

One page, plain HTML and CSS, no build step, no framework, no external requests.

| Path | What it is |
|---|---|
| `index.html` | The site |
| `style.css`, `site.js` | Styles, theme toggle, and the small scroll-reveal script |
| `img/` | Site photos, exported with all metadata removed |
| `fonts/` | Inter and JetBrains Mono, Latin subsets, self-hosted under the SIL Open Font License (`fonts/OFL.txt`) |
| `404.html`, `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll` | Hosting plumbing for GitHub Pages |

## Run it locally

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Deploy

Published with GitHub Pages from the `main` branch of `DTSthom/site`, root
directory. `CNAME` points the Pages site at `doddtechservices.com`;
`.nojekyll` tells Pages to publish the files as they are. A push to `main` is
a deploy.

Before committing, run `git remote -v` and confirm the origin is this
repository.

## Contact

Thomas Dodd, (678) 863-8591, hello@doddtechservices.com.

Copyright Dodd Services LLC. All rights reserved. The photographs and copy in
this repository may not be reused without permission. The fonts carry their
own terms, the SIL Open Font License, see `fonts/OFL.txt`.
