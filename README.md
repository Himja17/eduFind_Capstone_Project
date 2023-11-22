# eduFind

A full stack application for international students to search for programs based on their area of interest

### Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Roadmap](#roadmap)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- API Documentation

## Features

**Pages**

<li>Login and Register Page</li>
<li>Home Page: From where student can choose their area of interest for the program selection </li>
<li>Program Page: List of programs for the chosen area of interest</li>
<li>Contact US: Students can send inquires</li>

**Others**

<li>Responsive design</li>

## Tech Stack

**Front-end**

<li>React</li>
<li>React Router</li>
<li>Sass</li>
<li>Axios</li><br/>

**Back-end**

<li>Node.js</li>
<li>Express</li>
<li>Knex</li>
<li>MySQL</li>
<li>Google Map API</li>

## Roadmap

<li>Implement a favourites tab where students can add thier top favourite programs</li>
<li> Add an admin login where admin can add or delete programs</li>
<li> Implement FAQ about pre arrival and post arrival </li>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Front-end

`REACT_APP_BASE_URL` => Back-end API url

`REACT_APP_API_URL` => Currency Exchange API url

`REACT_APP_API_KEY` => Currency Exchange API key

### Back-end

`DB_HOST` => Database hostname

`DB_NAME` => eduFind [locally created schema on MySQL workbench]

`DB_NAME_CONTACT` => contact_form [locally created schema on MySQL workbench for the Contact page]

`DB_USER` => Username to access Database

`DB_PASSWORD` => Password to access Database

**Auth**

`SECRET_KEY` => Secret Key for token

**CORS**

`CORS_ORIGIN` => Accessing responses for cross-origin requests

## Run Locally

Clone the project

`git clone https://github.com/Himja17/eduFind_Capstone_Project.git`

Go to the project directory

`cd eduFind_Capstone_Project`

**Front-end setup**

Go to the front-end directory

`cd client`

Install dependencies

`npm install`

Create .env file & add variables

`touch .env`

Run application

`npm start`

**Back-end Setup**

Go to the back-end directory

`cd server`

Install dependencies

`npm install`

Create .env file & add variables

`touch .env`

Set-up DataBase

`npm run migrate`

Start the server

`npm run start`
