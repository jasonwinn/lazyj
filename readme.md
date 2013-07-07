# LazyJ - Javascript Lazy Image Loader

## Why create LazyJ?

There are several lazy image loaders out there, but few that do not require a host library such as JQuery. There are even fewer that are lightweight. LazyJ is less than 1 KB.

## Compatability

It works with all the usual suspects. I've tested it with IE6-IE10, Windows Chrome, Windows Firefox, Mac Chrome, Mac Firefox and Mac Safari.

## Installation

Place the Javascript at the bottom of your page, near the closing ```</body>``` tag.

To bind images to be lazy loaded, use the following attributes, setting data-src has the image you would like to load and src as a placeholder (e.g. white background).

```
<img data-lazyj="true"
     data-src="real_image.jpg"
     src="place_holder.jpg" />
```
