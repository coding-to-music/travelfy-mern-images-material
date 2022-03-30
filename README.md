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
- [Open Weather](https://openweathermap.org/api)
- [Rapid API Travel](https://rapidapi.com/apidojo/api/travel-advisor)
- [FreeGeoIp](https://freegeoip.app/)

**Server**:

- [Cloudinary](https://cloudinary.com/)

<p align="right"><a href="#top">back to top ^</a></p>

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

# MERN Chat App

https://github.com/coding-to-music/mern-images-material

https://mern-images-material.herokuapp.com/

By jordanwhunter https://github.com/jordanwhunter

https://github.com/jordanwhunter/mern-images-material

## Installation:

### GitHub

```java
 git init
 git add .
 git remote remove origin
 git commit -m "first commit"
 git branch -M main
 git remote add origin git@github.com:coding-to-music/mern-images-material.git
 git push -u origin main
```

### Heroku

```java
heroku create my-mern-images-material
```

### Heroku MongoDB Environment Variables

```java
heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/mern-images-material?retryWrites=true&w=majority"
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
Buildpack added. Next release on my-mern-images-material will use:
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
=== my-mern-images-material Buildpack URLs
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
