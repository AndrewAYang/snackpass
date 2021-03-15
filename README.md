# Snackpass Challenge 
**My final app is hosted at: andrewayang.github.io/snackpass**
## How I Solved the Problem
### Building the App
I created a React app using `create-react-app` and deployed my app to Github pages with `gh-pages` following instructions [here](https://github.com/gitname/react-gh-pages). I exported the sample data in `csv` format and pasted it into `OrdersUtil.js` as a string. `OrdersUtil.js` serves as a mock database. When the app is rendered, it fetches the order data from `OrdersUtil.js`, sorts the orders according to my heuristic, and passes this data down for other components to use and render. 

### Ranking Heuristic
The ranking heuristic primarily depended on the number of times the item was purchased recently (within last 48 hours). Ties were broken by which item was purchased more recently.

### Infinite Scroll 
To implement the infinite scroll feature, I followed [an article](https://kennethscoggins.medium.com/using-the-infinite-scrolling-method-to-fetch-api-data-in-reactjs-c008b2b3a8b9) on the topic. I added an event listener to the `scroll` event to determine when the bottom of the window was reached. If the bottom was reached,`infiniteScroll` in `ProductCardListing` "fetches" more items to render. In a real app, this "fetch" could be an API or database call. The current implementation demonstrates lazy loading, but an improved implementation could add pre-fetching or eager loading to optimize for performance.

## Setup
To setup, you can clone this repo and start a local server to run the app. For more detailed information on downloading dependencies and setting up the environment, you can follow the instructions under **Building the App**.

## How to Run 
You can view my app at andrewayang.github.io. To run locally, you can start a local server by running `npm start` on the command line. 