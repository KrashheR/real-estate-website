<h1 align="center" id="title">Real Estate Website</h1>

<p id="description">This project is a construction company website written in TypeScript using React Redux and Styled-components. 
  
  There are many features implemented in this project such as:
  - Displaying of data received from the server (Rest-API)
  - Sorting and filtering of the received data 
  - A constructor that allows you to select apartments
  - Pagination
  - Showroom of rooms of the housing complex
  - Apartment catalog
  - Modal window with form validation

    
    
</p>
<img src="https://www.krashher.ru/images/github/real-estate/realEstatePreview.png" alt="realEstate logo">
<h2>🚀 Demo</h2>

[https://krashher.github.io/real-estate-website/](https://krashher.github.io/real-estate-website/) 


<h2>🧐 Features</h2>

Here're some of the project's best features:

<h3>Displaying of data received from the server (Rest-API)</h3>
<p>The data that comes from the server using fetch API is displayed in a special list of cards containing basic information about buildings.</p>
<img src="https://www.krashher.ru/images/github/real-estate/output.gif" alt="output data gif">

<h3>Sorting and filtering of the received data </h3>
<p>The data is sorted (premium buildings are displayed first) and filtered with special inputs. Inputs set the values that are used as filters. When the filter is changed, the selectFilteredCards selector is re-rendered.</p>
<img src="https://www.krashher.ru/images/github/real-estate/filter.gif" alt="filter and sorting data gif">
<h3>House Constructor</h3>
<p>The constructor memorizes the user's answers to the questions and then applies them as filters to the buildings and displays only those that have apartments that match the specified conditions.</p>
<img src="https://www.krashher.ru/images/github/real-estate/constructor.gif" alt="constructor gif">
<h3>News Pagination</h3>
<p>The data comes from the server, using Axios. It is then cached in Redux to avoid repeated requests to retrieve the news page if it has already been loaded.</p>
<img src="https://www.krashher.ru/images/github/real-estate/pagination.gif" alt="pagination gif">
<h3>Showroom with interactive buttons-indicators</h3>
<p>The data about the rooms of the apartments have in addition to pictures also a type. This helps to realize interactive buttons - indicators of the room the user is looking at.</p>
<img src="https://www.krashher.ru/images/github/real-estate/showroom.gif" alt="showroom gif">
<h3>Catalog of avaiable apartments</h3>
<p>The user selects an apartment from the list (list includes filter by apartment type), evaluates its characteristics and then clicks select. After that a modal window appears, in which it is necessary to specify the phone number (input validation with zod).</p>
<img src="https://www.krashher.ru/images/github/real-estate/catalog.gif" alt="catalog gif">



<h2>💻 Built with</h2>

Technologies used in the project:

<div>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router dom Badge">
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Badge">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-components Badge">
  <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack Badge">
</div>


<h2>🛠️ Installation:</h2>
Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/KrashheR/real-estate-website.git
$ cd real-estate-website
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev
```

## Usage

### Serving the app

```sh
$ npm start
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder
