import { Provider } from 'react-redux';
import { store,persistor } from './mediaStore/store';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
     <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
         <Navigation/>
         </PersistGate>
     </Provider>
  );
}

