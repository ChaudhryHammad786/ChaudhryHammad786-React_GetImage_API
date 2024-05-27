import React, { useEffect, useState } from 'react';

const RandomImage = () => {

  const [imageSrc, setImageSrc] = useState('');
  const [error, setError] = useState(null);
  const category = 'nature';
  // category (optional) - image category. If set, must be one of the following: nature, city, technology, food, still_life, abstract, wildlife.


  const apiKey = '9/ql2o68DiZgRWX3BVll5Q==jqQpffTfZG9tyVnH';

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/randomimage?category=${'nature'}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': '9/ql2o68DiZgRWX3BVll5Q==jqQpffTfZG9tyVnH',
            'Accept': 'image/jpg'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRandomImage();
  }, [category, apiKey]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container' >
      {imageSrc ? (
        <img src={imageSrc} alt="Random" />
      ) : (
        <p>Loading...</p>
      )}
    </div>

    
  );
  
};

export default RandomImage;
