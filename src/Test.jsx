import React, { useRef, useState } from 'react';

const Test = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <button onClick={() => fileInputRef.current.click()}>
        Browse File
      </button>
      
    
          <span>{selectedFile ? selectedFile.name : "No File Selected"}</span>
          {/* <button onClick={handleFileUpload}>Upload</button> */}
       
    </div>
  );
};

export default Test;
