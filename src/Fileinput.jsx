import React, { useState } from 'react';
import { Button } from '@mui/material';
import { experimentalStyled as styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    margin: theme.spacing(2, 0),
    backgroundColor: '#f44336',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  fileName: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

function Fileinput() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    // You can access the selected file using the 'selectedFile' state
  };

  return (
    <div>
      <input
        accept="image/*"
        className={classes.fileInput}
        id="upload-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-file">
        <Button
          variant="contained"
          component="span"
          className={classes.uploadButton}
          onClick={handleUpload}
        >
          Upload Photo
        </Button>
      </label>
      {selectedFile && (
        <span className={classes.fileName}>{selectedFile.name}</span>
      )}
    </div>
  );
}

export default Fileinput;
