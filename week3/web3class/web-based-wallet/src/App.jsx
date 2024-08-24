import { useState } from 'react';
import './App.css';
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './components/SolanaWallet';
import { EthWallet } from './components/EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div class = "button1">
      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>
       Create Seed Phrase
      </button>
      <input type="text" value={mnemonic} readOnly></input>
      <SolanaWallet mnemonic={mnemonic} />
      <EthWallet mnemonic={mnemonic} />
    </div>

  );
}

export default App;

