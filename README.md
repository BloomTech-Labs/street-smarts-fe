🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline, feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 5️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

[![Maintainability](https://api.codeclimate.com/v1/badges/731a203f8375d97bc6fe/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/street-smarts-fe/maintainability)

# Street Smarts
https://www.streetsmarts.online/

## Folder Structure: 
street-smarts-fe {

    cypress > integration = All our tests

    src > assets = images or other external medias

    src > hooks = reusable functions and custom hooks

    src > render > app-content = The main routes, sets up use of browser history and transition animation controller

    src > components = Everything thats not 'common' or 'sections' folder is essentially a page on our website

    src > components > common = All the smaller and more reusable parts of our website

    src > components > sections = Parts that take up big portions of our web page and are not as reusable
}

## Contributors

| [Brian Wardwell](https://github.com/b-dubz79)                                                                                 | [Hysen Sisco](https://github.com/hsisco)                                                                                                                         | [Issac Moreno](https://github.com/issac909)                                                                                                                       | [LeRoyce Pearson](https://github.com/leroycep)                                                                                                                   | [Gunnar Arnporsson](https://github.com/gunnarthorson)                                                                                    | [Steven Wang](https://github.com/stevenwang2060)                                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:------------------------------------------------------------------------------------------------------------------------------------------: |:---------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W0138D8NFJL-e114f1c5d1c3-512" width = "150" />](https://github.com/b-dubz79)   | [<img src= "https://avatars1.githubusercontent.com/u/53796411?s=460&u=e79e83f36867f4ed187d711ab1b9eb6f89dda91a&v=4" width = "150" />](https://github.com/hsisco) | [<img src="https://avatars1.githubusercontent.com/u/55899345?s=460&u=6a13a00a824fb58a2e48478e9988a195f1bf5d07&v=4" width = "150" />](https://github.com/issac909) | [<img src="https://avatars2.githubusercontent.com/u/2229184?s=460&u=7f43cd85a4da972dacc5b0fcb4f62816b96d771d&v=4" width = "150" />](https://github.com/leroycep) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JQ3C81H-4a18f12203a6-512" width = "150" />](https://github.com/gunnarthorson)         | [<img src="https://ca.slack-edge.com/ESZCHB482-W012BRSJU5C-48385005a92c-512" width = "150" />](https://github.com/stevenwang2060)     |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/b-dubz79)                                         | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/hsisco)                                                                              | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/issac909)                                                                             | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/leroycep)                                                                            | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gunnarthorson)                                               | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/stevenwang2060)                                           |
| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brianwardwell/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/hysensisco/)                                       | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/issac-moreno-7a9116121/)                            | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/leroyce-pearson)                                   | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gunnar-thorson-5a74341a9/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/steven-wang-75a3091a3/) |


<br>
<br>


## Project Overview

[Trello Board](https://trello.com/b/B5GkoOPo/labs-24-street-smarts)

[Product Canvas](https://www.notion.so/Street-Smarts-Automotive-Data-5450e77cf0c44a218a4aa6d67ce889eb)

[UX Design files](https://www.figma.com/file/ecy8WiINQoYzjhkueSwa2a/Street-Smarts%2C-Cornelius?node-id=210%3A0)

StreetSmarts (name might change in production) is a tool to impartially compare the overall cost and emissions during ownership across the spectrum of internal combustion engines to electric vehicles. We make our calculations using the industry standard set by the EPA. Users can search cars by make, model, year and trim package to determine which car is best for their next purchase based on their needs.

### Key Features

- feature one: Allow customer to search for details on a single car
- feature two: Provides more information about enviromental impact of cars than competitors
- feature three: Customer can compare up to 3 vehicles
- feature four: 
- feature five

## Tech Stack

### Front end built using:

#### React

- It has extensive features and the ability to work with other technologies

#### Ant Design

- This robust library saves time and is easy to manipulate, rather than a different library because it is widely trusted and the UX team preferred it

#### Styled Components

- So that the styling stays within each component to simplify alterations, instead of surrendering that organization if we were to use a different system

#### chart library

- a chart library to render data visually—which my team has yet to select, but we have created a list of viable options

#### Context API

- It reates a light, scalable state management, as opposed to Redux which is more complex and requires more maintenance

#### Front end deployed to AWS Amplify

#### [Back end](https://github.com/Lambda-School-Labs/street-smarts-be) built using:

#### Heroku PostgreSQL

- Maintains a robust, relational database

#### NodeJS, Express, and knex

- The industry standard combination of technologies that defines HTTP servers and connects to Postgres databases

#### RESTful API
- It interacts with the server simply and safely

# APIs

## Authentication API here

- We will not be using Authentication

## Payment API here

- We will not be accepting payments on this site

## 3️⃣ Misc API here **************

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

When you do it your way you can go anywhere you choose. Let your heart take you to wherever you want to be. If I paint something, I don't want to have to explain what it is. A tree needs to be your friend if you're going to paint him. That's a son of a gun of a cloud. Even the worst thing we can do here is good.


# 3️⃣ Environment Variables ************

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

Using Jest for testing due to familiarity and because it's the default choice for Create React App.

# 4️⃣ Installation Instructions

Create React App installs several dependencies by default.  We then installed npm using "npm i" along with npm i react-router-dom, axios, styled components, Antd

## Other Scripts

    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).


## Documentation

See [Backend Documentation](🚫*link to your backend readme here*) for details on the backend of our project.

