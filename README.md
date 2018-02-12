# InstaTime

## Background and Overview
InstaTime is a data visualization tool allowing users to see a timeline of their Instagram post history as they compare plotted by time of day or day of week. Users can use this information to identify whether there is a correlation between when they post photos and how much attention their posts receive.

## Functionality and MVPs
In InstaTime, users will be able to:
- [ ] Search for any username and view real-time graph results
- [ ] Select from multiple time groupings for their graphs (e.g., by time of day or week)
- [ ] Identify which posts have received more likes given a distinct color scheme
- [ ] Click on each dot on the scatterplot to see which post it is referring to

## Wireframes
This app will consist of a single view that includes the username search box, scatterplot graphs, filters for time groupings, and a few examples of notable graphs/Instagram users, as well as nav links to the GitHub repo and my LinkedIn profile.

The time groupings for the scatterplot graphs will be controlled by way of radio buttons, and an animation effect will be used to populate the scatterplots with posts.

![InstaTime Wireframe](https://github.com/alexinachong/InstaTime/blob/master/images/InstaTime_Wireframe_021118.png)

## Architecture and Technologies
This project will be implemented with the following technologies:
+ Vanilla JavaScript for overall structure
+ `D3.js` for rendering of scatterplot graphs
+ `Instagram API` for retrieval of post information
+ Webpack to bundle and serve up the various scripts

In addition to the webpack entry file, there will be three scripts used in this project:
+ `instatime.js`: This script will handle the logic for creating and updating the necessary DOM elements
+ `graphs.js`: This script will handle the logic for generating the graphs
+ `gram.js`: This script will handle the API calls to the `Instagram API`

## Implementation Timeline
**Over the weekend:**
- [x] Decide on a project and sketch out a timeline for completion.
- [x] Begin learning D3.js.

**Day 1:**
- [ ] Finish watching D3.js tutorials.
- [ ] Set up all necessary Node modules, including getting webpack up and running.
- [ ] Create `webpack.config.js` as well as `package.json`.
- [ ] Write a basic entry file and the bare bones of scripts outlined above.
- [ ] Set up access to `Instagram API`.
- [ ] Learn enough D3.js to render an object to the screen.

**Day 2:**
- [ ] Learn the basics of `Instagram API` and what fields we have access to.
- [ ] Be able to make calls to `Instagram API`.
- [ ] Add search box for username that leads to API query.
- [ ] Learn how to build a basic scatterplot graph using D3.js.

**Day 3:**
- [ ] Build out structure of scatterplot graphs for each time grouping.
- [ ] Add styling to graph to differentiate high attention posts from low attention posts.
- [ ] Add ability to click on each dot of a graph to display post.

**Day 4:**
- [ ] Add sample queries for notable Instagram users with interesting-looking graphs.
- [ ] Add filters for graphs.
- [ ] Add nav links to GitHub and LinkedIn.
- [ ] Style page.

## Bonus Features
There are many directions in which this project could evolve.

- [ ] Add additional time grouping graph types (e.g., date of year).
- [ ] Allow users to select a custom subset of posts (e.g., within the last 6 months).
- [ ] Add support for popularity of hashtag.
