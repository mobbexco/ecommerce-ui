import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FinanceWidget from './FinanceWidget.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinanceWidget
      bestInstallmentsData={bestInstallmentsData}
      sourcesData={sourcesData}
    />
  </StrictMode>
);
