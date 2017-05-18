import { storiesOf, action, linkTo } from '@kadira/storybook';
import FetchLoader from '../src';
import DataDisplayer from './DataDisplayer';
import Spinner from 'simple-react-spinner';

const delayedFetch = () => (new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch('https://api.github.com/users/asafda')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  }, 1500)
}))

const spinnerProps = {
  bgColor: "rgba(150,100, 150, 0.2)",
  spinnerColor: "rgba(150, 100, 150, 0.8)",
  diameter: "100px",
  thickness: "15px",
  duration: "1.5s"
}

storiesOf('Fetch with loader', module)
  .add('with HTML element as child', () => (
    <FetchLoader fetch={delayedFetch} errorText="Ooops..." height="400px">
      <div style={{ textAlign: 'center' }}>We got the data!!!</div>
    </FetchLoader>
  ))
  .add('with React element as child', () => (
    <FetchLoader fetch={delayedFetch}
      errorText="Ooops..."
      loader={Spinner}
      height="400px">
      <DataDisplayer/>
    </FetchLoader>
  ))
  .add('with React element as child and passing child props', () => (
    <FetchLoader fetch={delayedFetch}
      errorText="Ooops..."
      loader={Spinner}
      spinnerProps={spinnerProps}
      height="400px">
      <DataDisplayer/>
    </FetchLoader>
  ));