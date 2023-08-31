import { Provider } from 'react-redux';
import { store } from './mediaStore/store';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
     <Provider store={store}>
          <Navigation/>
     </Provider>
  );
}

