import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppProvider } from './app/Context'
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
