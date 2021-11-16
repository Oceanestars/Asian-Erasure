# Getting Started with this React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Next.js](https://nextjs.org/).

## Running the App

```bash
git clone https://github.com/Oceanestars/Asian-Erasure.git
npm ci
npm run dev
```

Make sure to do `git pull` periodically!
Are you a collaborator? Create a branch!

```bash
git checkout -b <branch_name>
git branch -d <branch_name> (This will delete the branch)

```

## Organization

### Folder structure

```
--- components/
    --- These a our react components that our pages uses
--- pages/
    --- Each of our pages is like our nav item in the nav bar
--- public/
    --- Assets
        - Currently old asset folder before conversion to Next.JS
    --- Images
    --- Static
        - Data
--- styles/
    - We have CSS module and SASS is installed so if you'd like to do sass just change the css file to end with scss (like the global file)
    - The underscore means it's a partial file (SASS), if you have css file being repeated across files, please use a partials file
    - If you are new to SASS please read [the sass guide](https://sass-lang.com/guide)


```

### Format/Naming Convention

- Filename: Lower case
  `navbar.js`
- Component Name: PascalCase
  ```
  function Navbar(props) {
      return (
          <ul>
              <li>Home</li>
              <li>About Us</li>
          </ul>
      );
  }
  ```
- Reference Naming: PascalCase
  ```
  import Navbar from './navbar';
  ```
- Props: camelCase
  `<Navbar selectedTab="Home" />`
  Additionally, using prettier setting to auto format files.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

next build(aka npn run build) creates an optimized production build of your application. The output displays information about each route.

Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

### `npm run start`

next start(npm run start will do the build and start command) starts the application in production mode. The application should be compiled with next build first.

The application will start at http://localhost:3000 by default. The default port can be changed with -p, like so:

`npx next start -p 4000`
