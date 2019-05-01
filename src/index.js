import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from '~/store';

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

export default App;
