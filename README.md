
## Current features
- ✅ Search from any youtube URL
- ✅ Get channel and video info
- ✅ File sizes before downloading
- ✅ Video description with tags
- ✅ Up to three download options (720p, 360p and Audio only)
- ✅ Progress bar while downloading
- ✅ Allow short URLs
- ⬜ Option to download higher res. (using ffmpeg to merge video and audio)
- ⬜ Option to choose audio language (for dubbed videos)
- ⬜ Option to cancel download (Button near progress bar)

## Getting Started

First of all, install dependencies:

```bash
yarn
# or
npm install
```

Then, run development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

** For production:
* Change the `allowedHostInProduction` const inside `middleware.js` file for your domain, or remove the file if you won't need.
* Change the value of `Access-Control-Allow-Origin` key inside `next.config.js` file for your domain.
