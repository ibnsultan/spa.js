# spa.js

spa.js is a minimal JavaScript library designed to migrate any traditional multi-page web application into a Single Page Application (SPA) with ease. It focuses on dynamic content loading, efficient link handling, and seamless user experience without full page reloads.

## Features

- **Dynamic Page Loading**: Intercepts navigation and loads new page content dynamically via AJAX.
- **Browser History Management**: Automatically updates the browser’s URL and handles forward/backward navigation using the `history.pushState` API.
- **Link Validation**: Ensures that only valid internal links are intercepted, avoiding external, JavaScript-based, and anchor (`#`) links.
- **Error Handling**: Gracefully handles page load errors and displays them in the console.
- **Customizable**: Easy to extend and customize to handle additional behaviors, such as form submissions, loading indicators, and SEO enhancements.

## Installation and Use

- Download the Repository
- include the spa.js the same way you would include any other js file in your project
```
<script scr="src/spa.js"></script>
```
