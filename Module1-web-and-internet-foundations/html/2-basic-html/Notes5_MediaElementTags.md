# HTML Media Element Tags 

---

## What are HTML Media Element Tags?

HTML media element tags allow **audio and video content to be embedded and played directly in web pages** without the need for external plugins like Flash. They are a core part of modern HTML5 and are widely supported across all modern browsers.

- Embed audio and video directly using HTML
- Provide built-in controls like play, pause, volume, and fullscreen
- Supported by all modern browsers
- Playback behaviour can be customised using attributes
- Widely used in tutorials, entertainment, presentations, and interactive applications

---

## Media Tags Overview

| Tag | Purpose |
|---|---|
| `<audio>` | Embeds sound or audio content |
| `<video>` | Embeds video content |
| `<embed>` | Embeds external content such as PDFs or multimedia |
| `<source>` | Specifies media file sources for `<audio>` and `<video>` |
| `<track>` | Adds subtitles, captions, or text tracks to media |

---

## 1. `<audio>`

The `<audio>` tag embeds sound or audio content — such as music or voice recordings — directly into a webpage. It provides built-in controls including play, pause, and volume adjustment.

### Syntax

```html
<audio>
  <source src="sample.mp3" type="audio/mpeg">
</audio>
```

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: green; }
    </style>
  </head>
  <body>
    <h1>GeeksforGeeks</h1>
    <p>Audio Sample</p>
    <!-- autoplay ensures audio runs automatically on page load -->
    <audio controls autoplay>
      <source src="https://media.geeksforgeeks.org/wp-content/uploads/20190531165842/Recording1514.ogg"
              type="audio/ogg">
      <source src="https://media.geeksforgeeks.org/wp-content/uploads/20190531165842/Recording1514.mp3"
              type="audio/mpeg">
    </audio>
  </body>
</html>
```

### Key Attributes

| Attribute | Purpose |
|---|---|
| `controls` | Displays the built-in browser audio controls |
| `autoplay` | Automatically plays the audio when the page loads |
| `loop` | Replays the audio once it finishes |
| `muted` | Starts the audio in a muted state |

> **Note:** Multiple `<source>` elements can be listed as fallbacks — the browser will use the first format it supports.

---

## 2. `<video>`

The `<video>` tag embeds video content into a webpage and supports playback controls including play, pause, volume, and fullscreen.

### Syntax

```html
<video src="" controls></video>
```

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: green; }
    </style>
  </head>
  <body>
    <center>
      <h1>GeeksforGeeks</h1>
      <p>Video Sample</p>
      <video width="200" height="150" controls preload>
        <source src="myvid.mp4" type="video/mp4">
        <source src="myvid.ogg" type="video/ogg">
      </video>
    </center>
  </body>
</html>
```

### Key Attributes

| Attribute | Purpose |
|---|---|
| `controls` | Displays built-in browser video controls |
| `width` / `height` | Sets the dimensions of the video player |
| `autoplay` | Automatically plays the video on page load |
| `preload` | Hints to the browser to load the video in advance |
| `loop` | Replays the video once it ends |
| `muted` | Starts the video in a muted state |
| `poster` | Displays an image before the video plays |

---

## Adding YouTube Videos

YouTube videos can be embedded into a webpage using the `<iframe>` tag, allowing videos to play directly on the site without leaving YouTube.

### Steps to Add a YouTube Video

1. Open the video on YouTube
2. Click the **Share** button below the video
3. Select **Embed**
4. Copy the `<iframe>` code provided by YouTube
5. Paste the code into your HTML file where you want the video to appear

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/YAC8aZGHBEU?si=9qdNkTf5zY6mxbQC"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </body>
</html>
```

---

## 3. `<embed>`

The `<embed>` tag embeds external content — such as PDFs, videos, or multimedia files — directly into a webpage. It is a void element (self-closing) and does not require a closing tag.

### Syntax

```html
<embed attributes>
```

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: green; }
    </style>
  </head>
  <body>
    <h1>GeeksforGeeks</h1>
    <p>Embed Sample</p>
    <embed src="https://media.geeksforgeeks.org/wp-content/uploads/20210723103530/simplescreesdfdsrecorder2021071.gif"
           width="300px" height="300px">
  </body>
</html>
```

### Key Attributes

| Attribute | Purpose |
|---|---|
| `src` | Path or URL of the content to embed |
| `width` / `height` | Sets the dimensions of the embedded content |
| `type` | Specifies the MIME type of the embedded content |

---

## 4. `<source>`

The `<source>` tag is used **inside** `<audio>` and `<video>` elements to attach one or more media file sources. Multiple `<source>` elements can be provided so the browser selects the first format it supports, ensuring cross-browser compatibility.

### Syntax

```html
<source src="" type="">
```

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: green; }
    </style>
  </head>
  <body>
    <center>
      <h1>GeeksforGeeks</h1>
      <h2>Source Tag</h2>
      <audio controls>
        <source src="audio.mp3" type="audio/mp3">
      </audio>
    </center>
  </body>
</html>
```

### Key Attributes

| Attribute | Purpose |
|---|---|
| `src` | Path or URL of the media file |
| `type` | MIME type of the media file (e.g., `audio/mp3`, `video/mp4`) |

---

## 5. `<track>`

The `<track>` tag specifies **subtitles, captions, or other timed text tracks** to be displayed while media is playing. It is used as a child element inside `<audio>` and `<video>` elements and improves accessibility.

### Syntax

```html
<track Attribute>
```

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: green; }
    </style>
  </head>
  <body>
    <h1>GeeksforGeeks</h1>
    <h2>Track Tag: Both Audio and Video</h2>
    <video width="300" height="300" controls>
      <source src="myvid.mp4" type="video/mp4">
      <track src="https://contribute.geeksforgeeks.org/wp-content/uploads/11.mp4"
             kind="subtitle"
             srclang="en"
             label="English">
    </video>
  </body>
</html>
```

### Key Attributes

| Attribute | Purpose |
|---|---|
| `src` | Path or URL of the track file (usually `.vtt` format) |
| `kind` | Type of track — `subtitle`, `caption`, `description`, `chapters`, `metadata` |
| `srclang` | Language of the track text (e.g., `en` for English) |
| `label` | Human-readable label shown in the browser's track menu |
| `default` | Specifies this track as the default if no other track is selected |

---

## Advantages of HTML Media Tags

- **No plugins required** — audio and video play natively in the browser without Flash or other third-party tools
- **Faster performance** — anything natively integrated into the browser renders and executes faster than third-party integrations
- **Built-in controls** — native play, pause, volume, and fullscreen controls are provided automatically by the browser
- **Built-in accessibility** — keyboard and mouse accessibility support is included automatically without extra configuration

---

## Summary

| Tag | Self-Closing | Used For | Contains |
|---|---|---|---|
| `<audio>` | No | Embedding audio | `<source>`, `<track>` |
| `<video>` | No | Embedding video | `<source>`, `<track>` |
| `<embed>` | Yes | Embedding external content (PDFs, media) | Nothing |
| `<source>` | Yes | Specifying media file sources | Nothing |
| `<track>` | Yes | Adding subtitles and captions to media | Nothing |

HTML media tags eliminate the need for external plugins and bring rich, accessible multimedia content directly into the browser — making them an essential part of modern web development.

---