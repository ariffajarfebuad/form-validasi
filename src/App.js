import React from 'react';
import './App.css'; // Jika Anda memiliki file CSS untuk styling

import RegistrationForm from './RegistrationForm'; // Pastikan Anda telah mengimpor komponen RegistrationForm

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Registration Form App</h1>
      </header>
      <main>
        <RegistrationForm /> {/* Gunakan komponen RegistrationForm di sini */}
      </main>
    </div>
  );
}

export default App;
