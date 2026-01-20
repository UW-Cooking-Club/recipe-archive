# Setup
> This project uses npm which is dependent on Node.js

``` bash
node -v
```
It should return something like v22.14.0. If you get `unknown command` error, follow [this site](https://nodejs.org/en/download) to download Node and npm

``` bash
npm -v
```
Once again, it should return the version.

Go to where you want the GitHub project to live and clone the repo
``` bash 
git clone https://github.com/UW-Cooking-Club/recipe-archive.git
```

Install project dependencies
``` bash
cd recipe-archive
npm install
```

Run the local development server with 
``` bash
npm run dev
```

The site should now be running locally, most likely on port 5173: http://localhost:5173/

# Repo Structure

```text
RECIPE-ARCHIVE/
├── node_modules/          # Installed dependencies (auto-generated)
├── public/                # Static assets served directly 
├── src/
│   ├── assets/            # Images, icons, and static assets
│   ├── components/        # Reusable React components
│   ├── App.jsx            # Root React component
│   ├── index.css          # Global styles (Tailwind entry point)
│   └── main.jsx           # Application entry point
└── index.html             # HTML template for Vite
```

# File Imports In Your Code
This repo should attempt to minimize barrel files ([see why](https://dev.to/tassiofront/barrel-files-and-why-you-should-stop-using-them-now-bc4)). This means we should not add files that redirect to other files (ie. an index.js file that simply exports other .jsx files in that folder).

> There are path aliases in vite.config.js: </br>
> **@components, @assets**

So instead of:
``` javascript
import componentOne from 'src/components/componentOne'
```

Just type:
``` javascript
import componentOne from '@components/componentOne'
```

# Non-Asset Icons

This repo is using [react-icons](https://react-icons.github.io/react-icons/) for all non-custom assets. Use these wherever possible instead of importing extra assets!

``` javascript
import { FaStar } from 'react-icons/fa';

export default MyComponent = () => (
  <div>
    <FaStar />
  </div>
)
```
