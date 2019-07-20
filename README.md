<h1>Similar Items Carousel Component for SeaBay</h1>

<h3>About</h3>

<p><a href="http://seabay.rosscalimlim.me/">SeaBay</a> is a web app that mimics the item detail page of the popular e-commerce site eBay.  This app was built to simulate a single page experience in a service oriented style where each service is responsible for delivering the content and data for one module on the page. The modules are linked together on a master layout, called a proxy server, and all modules work together to present content for a given item ID.</p>

<h3>Contributors</h3>
<ul>
  <li><a href="https://github.com/rcalimlim">Ross Calimlim</a> (Shopping Cart)</li>
  <li><a href="https://github.com/hadleyac">Hadley Crowl</a> (Item Detail)</li>
  <li><a href="https://github.com/dorishui">Doris Hui</a> (Similar Items)</li>
  <li><a href="https://github.com/justanotherhuman">Justan Human</a> (Search Bar)</li>
  <li><a href="https://github.com/mileszander">Miles Zander</a> (Reviews and Ratings)</li>
</ul>

<h3>Tech Stack</h3>
<p>
<i>SeaBay</i> was built primarily with ReactJS on the front end and Node/Express on the backend. The Similar Items component utilizes a library called <a href="https://github.com/akiran/react-slick">React Slick</a> to display items in a carousel format, and MongoDB was used for the database. Key technologies used are listed below:</p>
<img src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png" width="100"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="100"></img>
<img src="https://www.ateamindia.com/wp-content/uploads/2019/03/main-qimg-f406db5658b5d0dade4d70a989560439.png" width="100"></img>
<img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" width="100"></img>
<img src="https://material-ui.com/static/images/material-ui-logo.svg" width="100"></img>
<img src="https://secure.meetupstatic.com/photos/event/8/3/6/3/600_479253635.jpeg" width="100"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" width="100"></img>
<img src="https://miro.medium.com/max/1218/1*ZEpgDdBxq69A9XXy-SxRMg.png" width="100"></img>

<h3>Technical Challenges/ Research</h3>

<p>Some unexpected challenges I ran into while building this component were:</p>

<p>Front-end testing: I was able to test the backend using Jest, but after trying to use Enzyme and React Testing Library to test the front-end, I found an issue where a function within the React Slick library was causing my front-end tests to always fail.</p>

<p>Styling: The React Slick library doesn’t provide options for caption text at the top of the carousel; I ended up having to use Material UI to get the text at the top to line up correctly.</p>

<h3>User Stories</h3>

<p>The Similar Items component was built with the user stories listed below as a guide:</p>

<ul>
  <li>As a user, I should be able to see a carousel of similar items based on the category.</li>
  <li>As a user, I should be able to see image, item name, and price for each item in the similar items carousel.</li>
  <li>As a user, when I click on the arrows in the carousel, I should be able to switch between pages.</li>
  <li>As a user, I should be able to see 6 items at each time in the similar items carousel.</li>
  <li>As a user, I should be able to see 12 items total in my carousel of similar items.</li>
</ul>

<h3>Minimum Viable Product (MVP)</h3>

<p>The MVP of the app allows the user to search, add to cart, view item details, see similar items, as well as read and write reviews.</p>

<h4>How the app works:</h4>
<p>Event dispatchers and listeners were implemented in each of our components to update the page based on an Item ID that results from user interaction. Each component has its own database, but some data such as Item ID, name, price, and images are shared to ensure consistency.</p>

<h3>Workflow</h3>

Our team utilized GitHub, Trello, and Slack for collaboration. 

All of our work is kept on our <a href="https://github.com/seabay-hratx42-fec">GitHub organization</a>. For each component, each new feature was developed in a new branch, and each team member submits a pull request to be reviewed by at least one teammate before merging the branch into master. 

Tickets on our team’s <a href="https://trello.com/b/pkgld3X7/seabay">Trello board</a> are updated and reviewed regularly to keep track of our progress. All work performed was associated with a ticket.

Slack was primarily used to share helpful resources and submit links for pull requests.
