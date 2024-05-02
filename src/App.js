import logo from './logo.svg';
import './App.css';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React from 'react';

function App()
{
  return (
    <div className="App">
      <ReactPhotoSphereViewer src="/bedroom3.jpg" height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>
    </div>
  );
}

export default App;
