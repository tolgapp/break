import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import CheckFormat from './components/CheckFormat.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CheckFormat>
          <App />
        </CheckFormat>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
