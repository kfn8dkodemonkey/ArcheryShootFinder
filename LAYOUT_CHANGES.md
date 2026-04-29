# Layout & Design Changes

## Overview

The Archery Shoot Finder has been redesigned with a modern one-page PWA layout featuring:

1. **Google Map at the Top** - Interactive map showing all archery shoot locations
2. **Tabbed Directory Layout** - Organized tabs for "Upcoming Shoots" and "Past Shoots"
3. **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Key Changes

### 1. New Components Created

#### Map Component (`src/components/map.js`)
- Interactive Google Map with custom archery-themed markers
- Click markers to view shoot details in an info card
- Auto-fits map to show all shoot locations
- Graceful fallback when API key is not configured

#### Tabs Component (`src/components/tabs.js`)
- Tab navigation with counts for upcoming and past shoots
- Directory-style list layout with hover effects
- Responsive design that adapts to mobile screens
- Accessible ARIA attributes for screen readers

### 2. Updated Files

#### `src/pages/index.js`
- Removed old grid layout
- Integrated new Map and Tabs components
- Simplified structure: Hero → Map → Tabs → About section

#### `src/pages/index.module.css`
- Removed old grid-specific styles
- Kept hero and about section styles
- Cleaner, more focused styling

### 3. Configuration Files

#### `.env.example`
- Template for environment variables
- Includes instructions for Google Maps API key setup

#### `README.md`
- Comprehensive setup instructions
- Project structure documentation
- Troubleshooting guide
- PWA features explanation

## Layout Structure

```
┌─────────────────────────────────────┐
│           Hero Section              │
│  "Archery Shoot Finder" + Tagline   │
├─────────────────────────────────────┤
│         Google Map Section          │
│                                     │
│  [Interactive Map with Markers]     │
│                                     │
├─────────────────────────────────────┤
│        Tabbed Directory             │
│  ┌─────────────┬─────────────┐     │
│  │  Upcoming   │    Past     │     │
│  │    (8)      │    (0)      │     │
│  └─────────────┴─────────────┘     │
│                                     │
│  [List of shoots in active tab]     │
│                                     │
├─────────────────────────────────────┤
│        About Section                │
│                                     │
└─────────────────────────────────────┘
```

## Features

### Map Features
- **Custom Markers**: Archery-themed green location pins
- **Info Cards**: Click markers to see shoot details
- **Auto-zoom**: Automatically adjusts to show all locations
- **Responsive**: Adapts height for mobile devices
- **Fallback UI**: Shows helpful message if API key missing

### Tabs Features
- **Dynamic Counts**: Shows number of shoots in each tab
- **Smooth Transitions**: Animated tab switching
- **Hover Effects**: Visual feedback on interactive elements
- **Mobile Optimized**: Stacks layout on small screens
- **Accessibility**: Full ARIA support for screen readers

### Directory List Features
- **Clean Layout**: Date, name, location, and categories
- **Visual Hierarchy**: Clear typography and spacing
- **Category Tags**: Quick view of shoot types
- **Hover States**: Subtle animations on interaction
- **Past Events**: Dimmed styling for completed shoots

## Setup Required

### Google Maps API Key

1. Get API key from [Google Cloud Console](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Enable "Maps JavaScript API"
3. Copy `.env.example` to `.env`
4. Add your API key:
   ```
   GATSBY_GOOGLE_MAPS_API_KEY=your_actual_key_here
   ```

### Development

```bash
npm install
npm run develop
```

Visit `http://localhost:8000`

## Design Decisions

### Why This Layout?

1. **Map First**: Users can quickly see geographical distribution of shoots
2. **Tabs Organization**: Clear separation between upcoming and past events
3. **Directory Style**: Easy to scan and find specific shoots
4. **One Page**: Simple navigation, no page loads needed
5. **PWA Ready**: Installable, works offline (basic functionality)

### Color Scheme

- **Primary**: Forest green (#2d5a27) - represents nature/outdoors
- **Background**: Light gray (#f5f5f5) - clean, modern
- **Cards**: White with subtle shadows - depth and hierarchy
- **Text**: Dark gray (#333333) - readable, professional

### Typography

- **Headings**: Bold, clear hierarchy
- **Body**: Readable at all sizes
- **Dates**: Uppercase, colored for emphasis
- **Categories**: Small tags with subtle background

## Mobile Responsiveness

### Desktop (>768px)
- Full-height map (500px)
- Side-by-side tab buttons
- Directory list with all details visible
- Info card floats over map

### Mobile (≤768px)
- Reduced map height (350px)
- Full-width tab buttons
- Stacked directory items
- Info card at bottom of screen

## Future Enhancements

Potential improvements for future versions:

1. **Filter by Category**: Add filters for shoot types
2. **Search Functionality**: Search shoots by name or location
3. **Distance Sorting**: Sort by distance from user location
4. **Calendar View**: Alternative calendar layout
5. **Offline Maps**: Cache map tiles for offline use
6. **User Locations**: Allow users to mark favorite shoots

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lazy Loading**: Map loads only when needed
- **CSS Modules**: Scoped styles prevent bloat
- **Optimized Images**: Compressed and sized appropriately
- **Minimal Dependencies**: No heavy frameworks for map

## Accessibility

- **ARIA Labels**: All interactive elements properly labeled
- **Keyboard Navigation**: Tab through all interactive elements
- **Screen Reader Support**: Semantic HTML structure
- **Color Contrast**: Meets WCAG AA standards
- **Focus States**: Clear focus indicators

## Testing Checklist

- [ ] Map loads with valid API key
- [ ] Markers appear at correct locations
- [ ] Info cards display on marker click
- [ ] Tabs switch correctly
- [ ] Directory items link to shoot pages
- [ ] Mobile layout works correctly
- [ ] Placeholder shows without API key
- [ ] All links are functional
- [ ] Page is responsive at all sizes
- [ ] PWA can be installed

## Support

For questions or issues with the new layout, please refer to:
- README.md for setup instructions
- Component files for implementation details
- Console for error messages