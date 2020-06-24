[![Maintainability](https://api.codeclimate.com/v1/badges/731a203f8375d97bc6fe/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/street-smarts-fe/maintainability)

# Street Smarts
https://www.streetsmarts.online/

## Folder Structure: 
#### street-smarts-fe 

#### cypress > integration
- All tests

#### src > assets
- Images or other external medias

#### src > hooks
- Reusable functions and custom hooks

#### src > render > app-content
- Main routes: browser history and transition animation controller

#### src > components
- All components and individual pages

#### src > components > common
- Smaller and more reusable components

#### src > components > sections
- Larger and less reusable components

## Contributors

| [Brian Wardwell](https://github.com/b-dubz79)                                                                                 | [Hysen Sisco](https://github.com/hsisco)                                                                                                                         | [Issac Moreno](https://github.com/issac909)                                                                                                                       | [LeRoyce Pearson](https://github.com/leroycep)                                                                                                                   | [Gunnar Arnporsson](https://github.com/gunnarthorson)                                                                                    | [Steven Wang](https://github.com/stevenwang2060)                                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:------------------------------------------------------------------------------------------------------------------------------------------: |:---------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W0138D8NFJL-e114f1c5d1c3-512" width = "150" />](https://github.com/b-dubz79)   | [<img src= "https://avatars1.githubusercontent.com/u/53796411?s=460&u=e79e83f36867f4ed187d711ab1b9eb6f89dda91a&v=4" width = "150" />](https://github.com/hsisco) | [<img src="https://avatars1.githubusercontent.com/u/55899345?s=460&u=6a13a00a824fb58a2e48478e9988a195f1bf5d07&v=4" width = "150" />](https://github.com/issac909) | [<img src="https://avatars2.githubusercontent.com/u/2229184?s=460&u=7f43cd85a4da972dacc5b0fcb4f62816b96d771d&v=4" width = "150" />](https://github.com/leroycep) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JQ3C81H-4a18f12203a6-512" width = "150" />](https://github.com/gunnarthorson)         | [<img src="https://ca.slack-edge.com/ESZCHB482-W012BRSJU5C-48385005a92c-512" width = "150" />](https://github.com/stevenwang2060)     |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/b-dubz79)                                         | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/hsisco)                                                                              | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/issac909)                                                                             | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/leroycep)                                                                            | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gunnarthorson)                                               | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/stevenwang2060)                                           |
| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brianwardwell/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/hysensisco/)                                       | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/issac-moreno-7a9116121/)                            | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/leroyce-pearson)                                   | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gunnar-thorson-5a74341a9/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/steven-wang-75a3091a3/) |


<br>

# Project Overview

[Trello Board](https://trello.com/b/B5GkoOPo/labs-24-street-smarts)

[Product Canvas](https://www.notion.so/Street-Smarts-Automotive-Data-5450e77cf0c44a218a4aa6d67ce889eb)

[UX Design files](https://www.figma.com/file/ecy8WiINQoYzjhkueSwa2a/Street-Smarts%2C-Cornelius?node-id=210%3A0)

Street Smarts is a tool to impartially compare the overall cost and emissions during ownership across the spectrum of internal combustion engines to electric vehicles. We make our calculations using the industry standard set by the EPA. Users can search cars by make, model, year and trim package to determine which car is best for their next purchase based on their needs.

## Key Features

- Allows customer to search for details of a single car
- Provides more information about environmental impact of cars than competitors
- Customer can compare up to 3 vehicles

# Tech Stack

### Front End Built Using:

#### React

- It has extensive features and the ability to work with other technologies.

#### Ant Design

- This robust library saves time and is easy to manipulate, rather than a different library because it is widely trusted and the UX team preferred it.

#### Styled Components

- So that the styling stays within each component to simplify alterations, instead of surrendering that organization if we were to use a different system.

#### Front end deployed to AWS Amplify

### [Back End](https://github.com/Lambda-School-Labs/street-smarts-be) Built Using:

#### Heroku PostgreSQL

- Maintains a robust, relational database.

#### NodeJS, Express, and knex

- The industry standard combination of technologies that defines HTTP servers and connects to Postgres databases.

#### RESTful API
- It interacts with the server simply and safely.

# APIs

### Authentication API

- We will not be using authentication.

### Payment API

- We will not be accepting payments.

### Vehicle API

The API returns values from a curated database, built by our data science team, that contains data from several external, industry standard APIs. Our API contains makes, models, years, CO<sub>2</sub> emissions, a break down of cost-to-own over 5 years, and images for over 10,000 individual vehicles.

# Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| Car images    | Craigslist   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |

# Testing

Using Jest due to familiarity and because it's the default choice for Create React App, and Cypress for end-to-end testing.

# Installation Instructions

Create React App installs several dependencies by default. We then installed npm using "npm i" along with npm i react-router-dom, axios, styled components, and Ant Design.

# Other Scripts

    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

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

# Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/street-smarts-be/blob/master/README.md) for details on the backend of our project.