<h1 align="center">Zip Info App</h1>

<h3 align="justify" width="80%">

The Zip Code Information App is a React application designed to provide users with location details based on postal code input. Leveraging the https://api.zippopotam.us API, this app offers a seamless and intuitive experience. The primary goal is to create a user-friendly interface where users can effortlessly enter a postal code and receive comprehensive location information. [Assignment](https://docs.google.com/document/d/1CGynvbYCK1m-_nW4xD9R-972fLjobWtixKOBA0II5L0/edit?usp=sharing)

### Frontend Deployed URL 👉 [Click here](https://zip-info-app-by-ayushi.vercel.app/)

</h3>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Frontend</b><br>
  <img src="https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%23F7DF1E" alt="react">
   <img src="https://img.shields.io/badge/tailwindcss-%23323330.svg?style=for-the-badge&logo=tailwindcss&logoColor=%23F7DF1E" alt="react">
</p>

<p align="center">
  <b>Tools</b><br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

<p align="center">
  <b>Deployment</b><br>
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify">
</p>

<h2 align="center">Features</h2>

1. **User-Friendly Interface:**
   - Create a React app with a clean and intuitive design.
   - Two main components: one for entering the postal code and another for displaying location information.

2. **Postal Code Input:**
   - Provide a form or input field where users can enter a postal code.

3. **Data Fetching:**
   - Initiate an API call to https://api.zippopotam.us/in/{postal_code} upon user submission.
   - Fetch and store location information, including country, state, and place name.

4. **Error Handling:**
   - Gracefully handle API call failures.
   - Display informative error messages to users.

5. **Loading Indicator:**
   - Implement a visual loading indicator to signify data fetching in progress.

6. **Clear Information Option:**
   - Include a button or option to clear displayed information for user convenience.

7. **Styling with TailwindCSS:**
   - Utilize TailwindCSS for consistent and visually appealing styling across the application.

8. **Optional: Redux State Management:**
   - Implement Redux for advanced state management, if desired.

**API Interaction:**
   - **API URL Format:**
     - Construct the API URL based on the entered postal code (e.g., https://api.zippopotam.us/in/400093).
   - **Request Method:**
     - Utilize the GET method for API interactions.
   - **Sample Response:**
     - Receive and process a detailed location response from the API.

### Desktop
![Screenshot 2023-11-14 165552](https://github.com/AyushiVashisth/ZipInfoApp/assets/107119119/2b0281fa-59b9-46a8-9dd2-25e2e328f0a7)

![Screenshot 2023-11-14 165610](https://github.com/AyushiVashisth/ZipInfoApp/assets/107119119/9cdbbde1-4f4b-4709-9b35-e36caf8c887a)

### Mobile
<div >
  <img width="46%" src="https://github.com/AyushiVashisth/ZipInfoApp/assets/107119119/658420e7-2722-420d-b1a1-412fae2b3bb3" alt="react">
  <img width="46%" src="https://github.com/AyushiVashisth/ZipInfoApp/assets/107119119/928df751-81ad-4022-9202-67b90e5fda79" alt="tailwindcss">
</div>


<h2 align="center">Project Structure:</h2>

1. **assets:**
    - Contains static assets used in the project.
        - `bg.jpg`: Background image.

2. **component:**
    - Houses React components for different parts of the application.
        - `LocationInfo.jsx`: Component for displaying location information.
        - `Navbar.jsx`: Component representing the application's navigation bar.
        - `ZipInput.jsx`: Component for handling the input of postal codes.

3. **Redux:**
    - Manages the state of the application using Redux.
        - `action.js`: Defines action creators for Redux actions.
        - `actionTypes.js`: Enumerates action types for Redux actions.
        - `reducer.js`: Implements the Redux reducer to manage state changes.
        - `store.js`: Creates the Redux store with middleware and initial state.

4. **public:**
    - Contains static assets and the HTML template file.
        - HTML template file (e.g., `index.html`): The main entry point for the application.

5. **node_modules:**
    - Directory generated by npm to store project dependencies.

6. **build:**
    - Generated by the build process (Webpack, etc.) to store the production-ready code.

7. **config (Optional):**
    - Configuration files for tools and build processes (optional).

8. **.gitignore:**
    - Specifies files and directories to be ignored by version control.
        - Ignores files such as `node_modules` and the `build` directory.

9. **README.md:**
    - Documentation providing an overview of the project, setup instructions, and usage guidelines.

10. **Other Configuration Files:**
    - Configuration files for tools used in the project (e.g., ESLint, Babel).

<h2 align="center">Getting Started</h2>

1. Clone the repository to your local machine.
2. Set up the backend API using Express and Mongoose (provide instructions if necessary).
3. Navigate to the project directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the Zip Info project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or useful, please consider giving it a ⭐️.

<h1 align="center">🚀 Happy Exploring! 🌌</h1>
