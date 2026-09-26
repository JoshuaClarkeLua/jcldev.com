# JCLDEV portfolio

Static site for jcldev.com, hosted on GitHub Pages. No build step.

## Files

- `index.html` – page structure
- `styles.css` – look and feel (colors are at the top of the file)
- `content.js` – **all text, games, videos and images**. Edit this to change what the site shows.
- `main.js` – turns `content.js` into the page (video embeds, tabs, copy buttons)
- `assets/` – put your photo, thumbnails, images and .mp4 videos here
- `CNAME` – tells GitHub Pages to serve the site at jcldev.com

## Preview locally

Open `index.html` in a browser.

## Adding content

In `content.js`, fill in the empty `""` values. Videos can be a YouTube link,
a Streamable link, or a path like `assets/videos/clip.mp4`. Images can be a path
like `assets/photo.jpg` or a full https link. Empty values show a placeholder slot.
