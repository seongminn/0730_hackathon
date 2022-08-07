import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import Loading from './components/shared/Loading/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
