# TaskInput Component
The TaskInput component is a simple React component that allows users to manage a to-do list. It provides functionalities to add new tasks, remove individual tasks, and clear the entire list. This component demonstrates basic usage of React hooks such as useState.
# Features
Add Activity: Users can type an activity into the input field and click the "Add" button to add it to the to-do list.
Remove Activity: Each task in the list has a "Remove" button that allows users to delete that specific task from the list.
Remove All: There is a "Remove All" button that clears all tasks from the to-do list.
List Rendering: Displays the current list of tasks with the option to remove each task individually.
 # Explanation
State Management:

activity: Holds the current value of the input field.
listData: Stores the array of tasks in the to-do list.
Functions:

addActivity(): Adds the current activity to the list and resets the input field.
removeActivity(i): Removes a task from the list based on its index.
removeAll(): Clears all tasks from the list.
Rendering:

An input field and an "Add" button allow users to add tasks.
A list of tasks is displayed with each task having a "Remove" button.
A "Remove All" button appears if there is at least one task in the list.
# Styling
The component assumes certain CSS classes (container, header, List-heading, listData, btn-position) are defined in your CSS files to style the layout. You can customize these styles as needed.

Notes
Ensure to check for unique keys when rendering lists in React. Using array indexes as keys (like key={i}) is acceptable for static lists but may not be ideal for dynamic or editable lists.
The current implementation uses console.log(updatedList) for debugging purposes; you can remove or replace it as needed.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)