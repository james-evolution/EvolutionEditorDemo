import React, { useState } from 'react';
import { Editor } from './editor/components/Editor/Editor';


function App() {
  const [savedData, setSavedData] = useState(null);

  const handleSave = (jsonData) => {
    console.log(JSON.stringify(jsonData));
    setSavedData(jsonData);
  };

  const handleClear = () => {
    setSavedData(null);
  };

  const handleSetData = () => {
    const input = prompt('Paste JSON data:');
    if (input) {
      try {
        const parsed = JSON.parse(input);
        setSavedData(parsed);
      } catch (e) {
        alert('Invalid JSON: ' + e.message);
      }
    }
  };

  return (
    <div style={{ padding: '20px', height: '100vh' }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleClear} style={{ padding: '6px 12px' }}>
          Clear Editor
        </button>
        <button onClick={handleSetData} style={{ padding: '6px 12px', marginLeft: '8px' }}>
          Set Data
        </button>
        {savedData && <span style={{ marginLeft: '10px', color: '#666' }}>Data saved in memory</span>}
      </div>
      <Editor
        initialData={savedData}
        onSave={handleSave}
        placeholder="Start writing..."
        editable={true}
      />
    </div>
  );
}

export default App;