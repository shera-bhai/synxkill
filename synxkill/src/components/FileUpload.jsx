import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:5000/upload', formData);
      const response = await axios.get('http://localhost:5000/files');
      setFiles(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>

      <div>
        <h2>Uploaded Files:</h2>
        <ul>
          {files.map((file) => (
            <li key={file._id}>
              <a href={`http://localhost:5000/files/${file._id}`} target="_blank" rel="noopener noreferrer">
                {file.fileName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;