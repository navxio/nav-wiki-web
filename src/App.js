import logo from './logo.svg';
import './App.css';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

function App() {
  return (
    <GeistProvider>
      <CssBaseline /> // Normalize.css
      <div> hello </div>
    </GeistProvider>
  );
}

export default App;
