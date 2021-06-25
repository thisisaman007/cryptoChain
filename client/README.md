- Started serving a frontend page using the existing express server.

1. Block explore - allows to check out the blockchain history. Public, unchangable and mass contributed ladger.
2. Postman interface is not user-friendly, wastes time. Frontend makes the access easier and faster.
3. Http requests and response in form of json documents. Anyone can access the blockchain using webBrowser. Javascript will make the frontend responsive using React.js using components and simpistic design.

the existing backend will also serve the website.

- React.js:
JavaScript Web App Framework. In web development, the typical
architecture is MVC pattern.
- Models : core object of web App, design and structure according to application logic.
- Views : the presentation layer, what the user sees in terms of the document structure and formatted interactive pages.
- Controllers : layer which cordinates functionality between Models and Views. They determine what data from the models get presented within the views themselves, in a response to the users input and interaction in order to update objects and call their behaviour.

Main ability is to divide the app in different components.
Life Cycle methods also is one of the gem of React.js - allow you to fire code on times like when user just loads a component, when a user leaves a component or even after user completely loads the component.
Virtual DOM - is a in-memory version of the entire web application document which react uses to efficiently update the application's presentation. It is maintained under the hood by reacts engine and it looks exactly like the actual document for the webpage.

- we are using Parcel Bundeler to bundle and export react code.

- Added JavaScript to the frontend.

- Built React into the frontend using parcel-bundler.

- Set up an efficient development workflow using parcel.

- Created the core App component to house the main React components.

- Used the fetch API to request backend data and serve it on the frontend.

- Visualized the blocks from the backend.

- Stylized the application to make it not look like a barebones skeleton HTML site.

- Created a block component that inherited data from the core Blocks component through props.

..

- Created toggle-able transaction displays.

- Built a reusable frontend transaction component.

- Added routing for a multi-page application that renders different content based on the url.

- Supported the conducting of transactions through a form.

- Posted transactions through the fetch API.

- Visualized the transaction pool - and added real-time polling capabilities.

- Added a way to mine a block through the frontend.
