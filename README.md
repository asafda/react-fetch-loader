# React Fetch Loader

Higher order component for managing loading state and error state.

## Usage Example
Props:
- fetch: the AJAX call as a promise (required)
- errorText: text to display on error state

Basic Example:
```jsx
    <FetchLoader fetch={() => fetch('https://api.github.com/users/asafda')} errorText="Ooops...">
      <DataDisplayer/>
    </FetchLoader>
```

## Installation
Via NPM:
```
npm install --save react-fetch-loader
```

Via Yarn:
```
yarn add react-fetch-loader
```