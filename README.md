# YouTube - Video Homepage Clone

A simple YouTube-style homepage built with **React**, **TypeScript**, and **Material UI (MUI)**. It features a clean layout with:

-Left side navigation bar
-Top navigation bar
-Top search option
-Section for YouTube Videos
-Section for YouTube Shorts
-Fetch YouTube thumbnails with YouTube API.

## Tech Stack

- React
- TypeScript
- Material UI (MUI v7.2.0)
- YouTube Data API v3
- Axios

## Getting a YouTube API Key

To use the YouTube API:

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project and enable **YouTube Data API v3**.
3. Go to **Credentials** and generate an **API Key**.
4. Replace `YOUR_YOUTUBE_API_KEY` in the env with your real key.


## Setup Instructions

1. **Clone the repo**

git clone https://github.com/kishor9868/Youtube.git 
cd Youtube

2. **Install dependencies**

npm install

3. **Environment Setup (.env)**

To keep your API key secure and private:

1. Create a `.env` file in the root directory of your project
2. Add your YouTube API key like this:
   
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
   REACT_APP_YOUTUBE_BASE_URL=https://www.googleapis.com/youtube/v3/

> ⚠️ All environment variables in React must start with `REACT_APP_`

4. **Run the development server**

npm start

Then visit: [http://localhost:3000](http://localhost:3000)

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
