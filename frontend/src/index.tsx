import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './hooks/ThemeProvider';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}