import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';
import Layout from './layout';
import Router from './routes';

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-slate-100">
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
