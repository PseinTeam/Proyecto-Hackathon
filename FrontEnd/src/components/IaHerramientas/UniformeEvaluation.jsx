import React, { useState, useEffect } from 'react';

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
  }, [image]); // Re-evaluate whenever `image` changes

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview of the image
    }
  };

  return (
    <div>
      <h1>Evaluate Image for Safety</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={() => {}} disabled={loading}>
        {loading ? 'Processing...' : 'Evaluate Image'}
      </button>

      {imagePreview && (
        <div>
          <h2>Image Preview:</h2>
          <img src={imagePreview} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}

      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default UniformeEvaluation;
