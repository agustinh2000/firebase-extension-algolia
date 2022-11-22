
# Search with Algolia - Firebase Extension

## Description

This repository contains the implementation of a web app developed in React, using Firebase and the Search with Algolia extension.

## Environment Variables

A `.env` file has to be created where the following environment variables are placed.

### Source directory

```
REACT_APP_FIREBASE_KEY = 
REACT_APP_FIREBASE_AUTH_DOMAIN = 
REACT_APP_FIREBASE_PROJECT_ID = 
REACT_APP_FIREBASE_STORAGE_BUCKET = 
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 
REACT_APP_FIREBASE_APP_ID = 
REACT_APP_PUBLIC_LOGIN_PAGE_URL =
REACT_APP_ALGOLIA_APPLICATION_ID =
REACT_APP_ALGOLIA_SEARCH_API_KEY =
REACT_APP_ALGOLIA_INDEX =
```

## Run the project

### System Requirements

<ul>
<li><a href="https://github.com/nvm-sh/nvm">nvm</a></li>
<li><a href="https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable">yarn</a></li>
<li><a href="https://firebase.google.com/docs/cli">Firebase CLI</a></li>
</ul>

### Run application

<ol>
<li>Open a terminal from the project directory</li>
<li>Run the following command to install the version of Node
</li>

```
nvm install v14.17.0
```

<li>Run the following command to use that version of node</li>

```
nvm use
```

<li>Run the following command to install dependencies</li>

```
yarn
```

<li>Run the following command to run the front-end</li>

```
yarn start
```

</ol>
