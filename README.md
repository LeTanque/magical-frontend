# MTG frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tailwind css setup

This project has a good starter tailwind.config.js.

```bash
npm install tailwindcss
npx tailwindcss init
mkdir src/styles
touch src/styles/index.css
```

Add the script to package.json

```json
  "scripts": {
    "build:style": "tailwind build src/styles/index.css -o src/styles/tailwind.css",
    "start": "npm run build:style && react-scripts start",
    "build": "npm run build:style && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

Then run the start script, which builds tailwind.

```bash
npm run start
```

## React hooks global state

First time with this dependency 🎉

```bash
npm install react-hooks-global-state
```
