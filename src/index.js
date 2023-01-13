import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Import web3sdks provider and Goerli ChainId
import { Web3sdksProvider } from '@web3sdks/react';
import { ChainId } from '@web3sdks/sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

// Wrap your app with the web3sdks provider
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Web3sdksProvider desiredChainId={activeChainId}>
      <App />
    </Web3sdksProvider>
  </React.StrictMode>,
);
