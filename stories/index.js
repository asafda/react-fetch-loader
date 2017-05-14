import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import FetchLoader from '../src';
import DataDisplayer from './DataDisplayer';

const delayedFetch = () => (new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch('https://api.github.com/users/asafda')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  }, 1500)
}))

storiesOf('Fetch with loader', module)
  .add('with HTML element as child', () => (
    <FetchLoader fetch={delayedFetch} errorText="Ooops...">
      <div style={{ textAlign: 'center' }}>We got the data!!!</div>
    </FetchLoader>
  ))
  .add('with React element as child', () => (
    <FetchLoader fetch={delayedFetch} errorText="Ooops...">
      <DataDisplayer/>
    </FetchLoader>
  ));