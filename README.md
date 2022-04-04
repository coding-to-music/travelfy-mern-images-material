# travelfy-mern-images-material

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/davidcastillog/travelfy-server">
    <img src="https://github.com/davidcastillog/travelfy-client/blob/master/src/assets/images/travelfy-logo-blue.jpg" alt="travelfy Logo" width="250" height="75" alt="Travelfy">
  </a>
  <h3 align="center">Travel planner</h3>
     MERN stack app
    <br />
   <a href="https://travelfy.netlify.app/">View Demo</a>
</div>

# travelfy-mern-images-material

https://github.com/coding-to-music/travelfy-mern-images-material

https://travelfy-mern-images-material.herokuapp.com/

```java
cors({
  credentials: true,
  origin: [
    "https://travelfy-mern-images-material.herokuapp.com",  # Heroku Production
    "https://still-sands-27981.herokuapp.com",              # test
    "https://guarded-dusk-08830.herokuapp.com",             # staging
    "https://radiant-gorge-70504.herokuapp.com",            # development
    "http://localhost:3000",
```

By David Castillo davidcastillog https://github.com/davidcastillog

https://travelfy.netlify.app/

https://github.com/davidcastillog/travelfy-server

https://github.com/davidcastillog/travelfy-client

<!-- TABLE OF CONTENTS -->
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api">API required</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## Tasks To Do

- [&check; ] Enviroments for development, test, staging, production
- [x] Display Enviroment in console
- [✅] Checkmarks Working
- [ ] User error in console
- [ ] Display Build and Environment info in the UI
- [ ] Get Login to work
- [ ] Logging
- [ ] Auth with GitHub and Google
- [ ] Farenheit default
- [ ] Detect user's location and use correct Farenheit vs Celsius
- [ ] Dark mode
- [ ] Dark maps
- [ ] News API
- [ ] Stocks API
- [ ] Embedded Charts
- [ ] Detect Dark vs Light preference
- [ ] Display Location Info
- [ ]

More Checkmark Examples

- [&check;] - html checkbox example
- [:white_check_mark:] - emoji checkbox example
- [&#9746;] - unicode checkbox example
- [✅] - unicode checkbox example

## About The Project

![Travelfy Screenshot][product-screenshot]

This is a travel planner MERN stack app.

You will find:

- Attractions, hotels and restaurants from anywhere in the world. Map and Place list. :earth_americas:
- Save the places you love in a trip list. (MongoDB = Reduce API calls) :world_map:
- Around me section. (This will get the user's IP, find the lat&lng with it and show the map and places around)
- 7-day weather forecast for any city. :umbrella:
- User Profile (Profile image, name, change password)
- Google Maps and Google Autocomplete.

<p align="right"><a href="#top">back to top ^</a></p>

### Built With

- [React.js](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

<p align="right"><a href="#top">back to top ^</a></p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Verify if you already have Node.js and npm installed:

```sh
node -v
npm -v
```

To download the latest version of npm, on the command line, run the following command:

```sh
npm install -g npm
```

### Installation

_Follow this simple steps:_

1. Clone the repo
   ```sh
   git clone https://github.com/davidcastillog/travelfy-server.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter all your API keys in `.env` file
   ```js
   REACT_APP_NAME_API = "ENTER YOUR API";
   ```

**Note:**

- This is the Back-end (server) repository.
- You **must** clone the [Front-end (client) repository.](https://github.com/davidcastillog/travelfy-client)

<p align="right"><a href="#top">back to top ^</a></p>

<!-- API LIST -->

## API

**Client**:

- [Google Maps](https://developers.google.com/maps)
- [Google Maps Console](https://console.cloud.google.com/google/maps-apis/overview)
- [Open Weather](https://openweathermap.org/api)
- [Rapid API Travel](https://rapidapi.com/apidojo/api/travel-advisor)
- [FreeGeoIp](https://freegeoip.app/)

**Server**:

- [Cloudinary](https://cloudinary.com/)

<p align="right"><a href="#top">back to top ^</a></p>

## Activating the Google Maps API:

Getting this error:

```java
ApiNotActivatedMapError
```

https://developers.google.com/maps/get-started#enable-api-sdk

```java
gcloud services enable \
    --project "PROJECT" \
    "directions-backend.googleapis.com" \
    "distance-matrix-backend.googleapis.com" \
    "elevation-backend.googleapis.com" \
    "geocoding-backend.googleapis.com" \
    "geolocation.googleapis.com" \
    "maps-android-backend.googleapis.com" \
    "maps-backend.googleapis.com" \
    "maps-embed-backend.googleapis.com" \
    "maps-ios-backend.googleapis.com" \
    "places-backend.googleapis.com" \
    "roads.googleapis.com" \
    "static-maps-backend.googleapis.com" \
    "street-view-image-backend.googleapis.com" \
    "timezone-backend.googleapis.com"
```

## Installing the gcloud CL

https://cloud.google.com/sdk/docs/install

```java
gcloud init --console-only

gcloud init

gcloud config set project travelfy

gcloud auth login

gcloud auth application-default login

gcloud services list

gcloud services enable mapsengine.googleapis.com

gcloud services enable \
    --project "PROJECT" \
    "directions-backend.googleapis.com" \
    "distance-matrix-backend.googleapis.com" \
    "elevation-backend.googleapis.com" \
    "geocoding-backend.googleapis.com" \
    "geolocation.googleapis.com" \
    "maps-android-backend.googleapis.com" \
    "maps-backend.googleapis.com" \
    "maps-embed-backend.googleapis.com" \
    "maps-ios-backend.googleapis.com" \
    "places-backend.googleapis.com" \
    "roads.googleapis.com" \
    "static-maps-backend.googleapis.com" \
    "street-view-image-backend.googleapis.com" \
    "timezone-backend.googleapis.com"

gcloud services enable \
    --project "travelfy" \
    "directions-backend.googleapis.com" \
    "distance-matrix-backend.googleapis.com" \
    "elevation-backend.googleapis.com" \
    "geocoding-backend.googleapis.com" \
    "geolocation.googleapis.com" \
    "maps-android-backend.googleapis.com" \
    "maps-backend.googleapis.com" \
    "maps-embed-backend.googleapis.com" \
    "maps-ios-backend.googleapis.com" \
    "places-backend.googleapis.com" \
    "roads.googleapis.com" \
    "static-maps-backend.googleapis.com" \
    "street-view-image-backend.googleapis.com" \
    "timezone-backend.googleapis.com"

```

<!-- SCRIPTS -->

## Scripts

In the project directory:

```sh
 npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:5005](http://localhost:5005)

You may also see any lint errors in the console.

<p align="right"><a href="#top">back to top ^</a></p>

<!-- USAGE EXAMPLES -->

## Usage

 <div align="center">
 <h3 >Place list</h3>
  <p>Includes Google Autocomplete & place filters</p>

![Travelfy Screenshot][product-screenshot2]

 <h3 >My Trips</h3>
  <p>Save places for each trip </p>
  <br />
  <p>(Map with trip markers)</p>

![Travelfy Screenshot][product-screenshot3]

  <h3>Weather</h3>
  <p>7-day forecast for any city in the world</p>

![Travelfy Screenshot][product-screenshot4]

 </div>

<p align="right"><a href="#top">back to top ^</a></p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right"><a href="#top">back to top ^</a></p>

<!-- CONTACT -->

## Contact

Linkedin: [https://linkedin.com/in/davidcastillog](https://linkedin.com/in/davidcastillog)

[![LinkedIn][linkedin-shield]][linkedin-url]

David Castillo - [@davidcastillog](https://twitter.com/davidcastillog)

<p align="right"><a href="#top">back to top ^</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/davidcastillog
[product-screenshot]: https://github.com/davidcastillog/travelfy-client/blob/master/src/assets/images/home.jpg
[product-screenshot2]: https://github.com/davidcastillog/travelfy-client/blob/master/src/assets/images/explore.jpg
[product-screenshot3]: https://github.com/davidcastillog/travelfy-client/blob/master/src/assets/images/mytrips.jpg
[product-screenshot4]: https://github.com/davidcastillog/travelfy-client/blob/master/src/assets/images/weather.jpg

## Installation:

### GitHub

```java
 git init
 git add .
 git remote remove origin
 git commit -m "first commit"
 git branch -M main
 git remote add origin git@github.com:coding-to-music/travelfy-mern-images-material.git
 git push -u origin main
```

## Need to set CORS in server/config/index.js

```
  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: [
        "https://travelfy-mern-images-material.herokuapp.com",  # Heroku Production
        "https://still-sands-27981.herokuapp.com",              # test
        "https://guarded-dusk-08830.herokuapp.com",             # staging
        "https://radiant-gorge-70504.herokuapp.com",            # development
        "http://localhost:3000",
        "*",
      ],
    })
  );
```

### Heroku Login

## Just adding some detailed steps to resolve the issue

- Navigate to https://dashboard.heroku.com/account/applications
- In Authorizations click on create authorization button
- Add description in pop up eg.heroku cli and leave expire after blank if you dont want it to expire
- You will get authorization token
- in cli run heroku login -i
- when it prompts for password enter the authoriation token

### Heroku

```java
heroku create travelfy-mern-images-material
```

```java
heroku create --remote development
Creating app... done, ⬢ radiant-gorge-70504
https://radiant-gorge-70504.herokuapp.com/ | https://git.heroku.com/radiant-gorge-70504.git
```

```java
heroku create --remote staging
Creating app... done, ⬢ guarded-dusk-08830
https://guarded-dusk-08830.herokuapp.com/ | https://git.heroku.com/guarded-dusk-08830.git
```

```java
heroku create --remote test
Creating app... done, ⬢ still-sands-27981
https://still-sands-27981.herokuapp.com/ | https://git.heroku.com/still-sands-27981.git
```

### Heroku MongoDB Environment Variables

```java
heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/travelfy-mern-images-material?retryWrites=true&w=majority"
git push heroku
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

# Do not need a Procfile
# DO NOT NEED second buildpack

heroku buildpacks:add mars/create-react-app

```

Output:

```java
Buildpack added. Next release on travelfy-mern-images-material will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== travelfy-mern-images-material Buildpack URLs
1. mars/create-react-app
2. heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-03-29T08:06:58.791397+00:00 heroku[web.1]: Starting process with command `npm start`
2022-03-29T08:06:59.934025+00:00 app[web.1]: ls: cannot access '/client/build/static/js/*.js': No such file or directory
2022-03-29T08:06:59.938326+00:00 app[web.1]: Error injecting runtime env: bundle not found '/client/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=/client/build/static/js/*.js
```

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```

### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```

# travelfy-mern-images-material

Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

[![CI](https://github.com/mongodb-developer/mern-stack-example/actions/workflows/main.yaml/badge.svg)](https://github.com/mongodb-developer/mern-stack-example/actions/workflows/main.yaml)

## How To Run

Create an Atlas URI connection parameter in `mern/server/config.env` with your Atlas URI:

```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/travelfy-mern-images-material?retryWrites=true&w=majority
PORT=5000
```

Start server:

```
cd mern/server
npm install
npm start
```

Start Web server

```
cd mern/client
npm install
npm start
```

## travelfy-mern-images-material

https://github.com/coding-to-music/travelfy-mern-images-material

https://travelfy-mern-images-material.herokuapp.com/

By https://github.com/mongodb-developer

https://github.com/mongodb-developer/mern-stack-example

## Installation:

## Procfile for however to start the Client

Procfile

```java
web: npm run start:client
```

## Modify server/index.js

```java
// dotenv config
require("dotenv").config();

// app and port config
const app = express();
const port = process.env.PORT || 4000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

// Answer API requests.
app.get("/api", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});
```

### Project Directory Structure

```java
tree -d -L 2
.
├── client
│   ├── build
│   ├── node_modules
│   ├── public
│   └── src
├── node_modules
└── server
    ├── controllers
    ├── database
    ├── models
    └── routes
```

### Package.json

key items in package.json

- cacheDirectories for Heroku to save time on builds

- engine set the node version to use

main scripts

`npm run` and any of the scripts below:

- install
- build
- start
- deploy

```java
{
  "name": "travelfy-mern-images-material-server",
  "version": "1.0.0",
  "description": "MongoDB Dev MERN Stack",
  "main": "index.js",
  "engines": {
    "node": "16.x"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server",
    "build": "cd client/ && npm install && npm run build",
    "watch": "nodemon server",
    "deploy": "git add . && git commit -m Heroku && git push && git push heroku",
    "deploy:staging": "git push staging main",
    "deploy:test": "git push test main",
    "deploy:development": "git push development main && heroku logs --tail --remote development",
    "install:client": "cd client && npm install --production=false",
    "build:client": "cd client && npm run build",
    "install:server": "npm install --production=false",
    "install:server:client": "concurrently \"npm install --production=false\" \"npm install:client\"  \"npm install:server\"",
    "start:client": "cd client && npm run start",
    "start:server": "npm run start",
    "start:all": "concurrently \"npm run start:client\" \"npm run start:server\""
  },
  "keywords": [
    "mern"
  ],
  },
  "cacheDirectories": [
    "node_modules",
    "client/node_modules"
  ]
}
```

## scripts for staging and test

```java
    "deploy:staging": "git push staging main",
    "deploy:test": "git push test main",
```

## Testing

```java
npm run deploy:test

heroku logs --tail --remote test
```

```java
npm run deploy:test

heroku logs --tail --remote staging
```

## Specify the app you want with --app or --remote.

# Heroku remotes in repo:

```java
travelfy-mern-images-material (heroku)
guarded-dusk-08830 (staging)
still-sands-27981 (test)
```

## PRODUCTION

```java
# TavelfyMap d03edd9f427f5ad3
REACT_APP_GOOGLE_MAP_ID="d03edd9f427f5ad3"
heroku config:set REACT_APP_ENVIRONMENT="production" --remote heroku
heroku config:set REACT_APP_GOOGLE_MAP_ID="d03edd9f427f5ad3" --remote heroku
```

## STAGING

```java
# Travelfy-Dark 9f322ca1bbdf28d7
REACT_APP_GOOGLE_MAP_ID="9f322ca1bbdf28d7"
heroku config:set REACT_APP_ENVIRONMENT="staging" --remote staging
heroku config:set REACT_APP_GOOGLE_MAP_ID="9f322ca1bbdf28d7" --remote staging
# https://dashboard.heroku.com/apps/guarded-dusk-08830
# https://guarded-dusk-08830.herokuapp.com/
```

## TEST

```java
# Travelfy-Night d9cd8afb69406ef7
REACT_APP_GOOGLE_MAP_ID="d9cd8afb69406ef7"
heroku config:set REACT_APP_ENVIRONMENT="test" --remote test
heroku config:set REACT_APP_GOOGLE_MAP_ID="d9cd8afb69406ef7" --remote test
# https://dashboard.heroku.com/apps/still-sands-27981
# https://still-sands-27981.herokuapp.com/
```

## DEVELOPMENT

```java
# Another-Dark 8f74bcd4b356ed24
REACT_APP_GOOGLE_MAP_ID="8f74bcd4b356ed24"
heroku config:set REACT_APP_ENVIRONMENT="development" --remote development
heroku config:set REACT_APP_GOOGLE_MAP_ID="8f74bcd4b356ed24" --remote development
# https://dashboard.heroku.com/apps/still-sands-27981
# https://still-sands-27981.herokuapp.com/
```

### GitHub

```java
nvm use v16
npx browserslist@latest --update-db
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/travelfy-mern-images-material.git
git push -u origin main
```

### Heroku

```java
heroku create travelfy-mern-images-material

heroku run npx browserslist@latest --update-db
```

### .env MongoDB Environment Variables

```java
ATLAS_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/travelfy-mern-images-material?retryWrites=true&w=majority"
```

### Heroku MongoDB Environment Variables

```java
heroku config:set ATLAS_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/travelfy-mern-images-material?retryWrites=true&w=majority"
```

Set all the environment variables on Heroku

```java
heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/travelfy-mern-images-material?retryWrites=true&w=majority"
heroku config:set REACT_APP_GOOGLE_MAP_API_KEY=""
heroku config:set REACT_APP_GOOGLE_MAP_ID=""
heroku config:set REACT_APP_GEO_API=""
heroku config:set REACT_APP_RAPID_API=""
heroku config:set REACT_APP_OPEN_WEATHER_API=""
heroku config:set CLOUDINARY_CLOUD_NAME=""
heroku config:set CLOUDINARY_API_KEY=""
heroku config:set CLOUDINARY_API_SECRET=""
heroku config:set JWT_SECRET=""

git push heroku
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app

```

Output:

```java
Buildpack added. Next release on travelfy-mern-images-material will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== travelfy-mern-images-material Buildpack URLs
1. mars/create-react-app
2. heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-03-29T08:06:58.791397+00:00 heroku[web.1]: Starting process with command `npm start`
2022-03-29T08:06:59.934025+00:00 app[web.1]: ls: cannot access '/client/build/static/js/*.js': No such file or directory
2022-03-29T08:06:59.938326+00:00 app[web.1]: Error injecting runtime env: bundle not found '/client/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
```

Use this to fix:

```java

heroku config:set JS_RUNTIME_TARGET_BUNDLE=./react-ui/build/static/js/*.js

heroku run npx browserslist@latest --update-db

heroku run npm i tree && tree -d -L 2

```

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```

### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```
