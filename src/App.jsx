import React, { useState } from 'react';
import { EvolutionEditor } from '@evolution-james/evolution-editor';
import '@evolution-james/evolution-editor/dist/styles.css';
import './App.css';

function App() {
  const [savedData, setSavedData] = useState(null);
  const [jsonOutput, setJsonOutput] = useState('');

  const handleSave = (jsonData) => {
    setSavedData(jsonData);
    setJsonOutput(JSON.stringify(jsonData, null, 2));
  };

  const handleClear = () => {
    setSavedData(null);
    setJsonOutput('');
  };

  const handleSetData = () => {
    const input = prompt('Paste JSON data:');
    if (input) {
      try {
        const parsed = JSON.parse(input);
        setSavedData(parsed);
        setJsonOutput(JSON.stringify(parsed, null, 2));
      } catch (e) {
        alert('Invalid JSON: ' + e.message);
      }
    }
  };

  return (
        <div className="app-layout">
          <div className="editor-container">
            <EvolutionEditor
              initialData={savedData}
              onSave={handleSave}
              editable={true}
              placeholder="Start writing..."
            />
          </div>
          <div className="json-output-container">
            <h1>JSON Output</h1>
            <pre>{jsonOutput || 'No output yet.'}</pre>
          </div>
        </div>
  );
}

export default App;