# Customize Umbrella

This is an umbrella customization tool that allows users to preview how their logo would look on umbrellas of different colors. The tool was created as part of a technical assignment for Revize.

## Features

- Upload your company logo to preview it on the umbrella
- Switch between three different umbrella colors: Pink, Blue, and Yellow
- Real-time preview of the customized umbrella
- Loading animations during logo processing and color changes
- Ability to remove the uploaded logo using the cross button

## Implementation Details

The project is built with vanilla HTML, CSS, and JavaScript without any external libraries or frameworks. It includes:

- Responsive design that works on different screen sizes
- Smooth loading animations for better user experience
- Color theme switching that changes the entire interface theme
- File upload handling with preview functionality
- Cross-browser compatible code

## How to Use

1. Open `index.html` in a web browser
2. Click "Upload Logo" to select your company logo (PNG or JPG formats supported)
3. Watch the loading animation while the logo is processed
4. Use the color swatch buttons to change the umbrella color
5. To remove the logo, click the "×" button that appears after uploading

## Project Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Stylesheet with all CSS
├── script.js           # JavaScript functionality
├── assets/             # Images and SVG files
│   ├── Blue.png        # Blue umbrella image
│   ├── Pink.png        # Pink umbrella image
│   ├── Yello.png       # Yellow umbrella image
│   ├── loader_icon.svg # Loading spinner SVG
│   └── upload_icon.svg # Upload icon SVG
└── icons/              # Color swatch icons
    ├── blue-icon.ico   # Blue color swatch
    ├── pink-icon.ico   # Pink color swatch
    └── yellow-icon.ico # Yellow color swatch
```
## View Project
the project is running live on
https://customize-umbrella-zeta.vercel.app/
