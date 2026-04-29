# Google Maps API Setup Checklist

Follow these steps to enable the interactive map:

## 1. Get Google Maps API Key

- [ ] Go to [Google Cloud Console](https://console.cloud.google.com/)
- [ ] Create a new project or select an existing one
- [ ] Navigate to "APIs & Services" > "Library"
- [ ] Search for "Maps JavaScript API" and enable it
- [ ] Go to "APIs & Services" > "Credentials"
- [ ] Click "Create Credentials" > "API Key"
- [ ] Copy your API key (it looks like: `AIzaSy...`)

## 2. Configure Environment Variable

- [ ] Navigate to your project folder: `Gatsby_Sites/ArcheryShootFinder/`
- [ ] Create a file named `.env` (not `.env.example`)
- [ ] Add this line to `.env`:
  ```
  GATSBY_GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
  ```
  Replace `YOUR_ACTUAL_API_KEY_HERE` with your real API key from step 1.

**Important**: 
- The file must be named exactly `.env` (with the dot)
- It must be in the root directory (same level as `package.json`)
- Do NOT commit this file to git (it's in `.gitignore`)

## 3. Restart Development Server

If your development server is running:

- [ ] Stop the server (Ctrl+C)
- [ ] Run `npm run develop` again
- [ ] Refresh your browser

## 4. Verify Map Loads

- [ ] Open `http://localhost:8000`
- [ ] You should see the map with green markers
- [ ] Click on a marker to see shoot details

## Troubleshooting

### Still seeing "Map Not Configured"?

1. **Check .env file location**:
   ```bash
   ls -a | grep .env
   ```
   Should show `.env` in the root directory

2. **Verify .env content**:
   ```bash
   cat .env
   ```
   Should show: `GATSBY_GOOGLE_MAPS_API_KEY=AIzaSy...`

3. **Check for spaces or quotes**:
   - No spaces around `=`
   - No quotes around the API key
   - Correct format: `GATSBY_GOOGLE_MAPS_API_KEY=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI`

4. **Clear Gatsby cache**:
   ```bash
   npm run clean
   npm run develop
   ```

5. **Check browser console**:
   - Open Developer Tools (F12)
   - Look for any error messages related to Google Maps
   - Common errors:
     - "API key not valid" → Check your API key
     - "API not enabled" → Enable Maps JavaScript API in Google Cloud Console
     - "Referrer not allowed" → Configure API key restrictions in Google Cloud Console

### Map loads but shows "For development purposes only"?

This is a Google Maps watermark that appears when:
- Billing is not enabled on your Google Cloud project
- You've exceeded the free tier usage limits

To remove it, you need to enable billing on your Google Cloud project.

### API Key Restrictions

For production, consider setting up API key restrictions:

1. Go to Google Cloud Console > APIs & Services > Credentials
2. Click on your API key
3. Under "Application restrictions", select "HTTP referrers"
4. Add your domain(s):
   - `https://archeryshootfinder.com/*`
   - `https://www.archeryshootfinder.com/*`
5. Under "API restrictions", select "Restrict key"
6. Select "Maps JavaScript API"

## Example .env File

Your `.env` file should look exactly like this (with your real key):

```
GATSBY_GOOGLE_MAPS_API_KEY=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI
```

Not like this:
```
# Wrong - has quotes
GATSBY_GOOGLE_MAPS_API_KEY="AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI"

# Wrong - has spaces
GATSBY_GOOGLE_MAPS_API_KEY = AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI

# Wrong - wrong filename
.env.development
env
.environment
```

## Need Help?

If you're still having issues:

1. Check the browser console for specific error messages
2. Verify your API key works by testing it in a simple HTML file
3. Make sure your Google Cloud project has billing enabled (required for production)
4. Review the [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript/get-api-key)