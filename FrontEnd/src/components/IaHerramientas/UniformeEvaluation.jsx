import React, { useState, useEffect } from 'react';
import { Navbar } from '../header/Navbar';
import { Footer } from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmergencyModal } from '../EmergencyModal/EmergencyModal';

const UniformeEvaluation = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    const evaluateImage = async () => {
      if (!image) return;

      setLoading(true);

      const formData = new FormData();
      formData.append('file', image);

      try {
        const response = await fetch('http://127.0.0.1:8000/predict', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setResult(data.message);
      } catch (error) {
        console.error('Error:', error);
        setResult('An error occurred');
      } finally {
        setLoading(false);
      }
    };

    evaluateImage();
  }, [image]); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4">Evaluar uniformes de Seguridad</h1>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="form-control mb-3" 
            />

            {loading && (
              <div className="mb-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

            {imagePreview && !loading && (
              <div className="mb-3">
                <h2>Image Preview:</h2>
                <img 
                  src={imagePreview} 
                  alt="Selected" 
                  style={{ 
                    maxWidth: '300px', 
                    maxHeight: '300px', 
                    border: result === 'Falla en el uniforme' ? '5px solid red' : '5px solid #dee2e6' 
                  }} 
                  className="img-thumbnail"
                />
              </div>
            )}

            {result && (
              <div className={`alert ${result === 'Falla en el uniforme' ? 'alert-danger' : 'alert-info'} mt-3`}>
                <p>{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <EmergencyModal />
    </div>
  );
};

export default UniformeEvaluation;
