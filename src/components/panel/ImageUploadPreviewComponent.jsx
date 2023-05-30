import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Sliders.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageUploadPreviewComponent = ({ handleImagesUploaded }) => {
  const [fileArray, setFileArray] = useState([]);

  useEffect(() => {
    const fileURLs = fileArray.map((file) => URL.createObjectURL(file));
    handleImagesUploaded(fileArray); // Actualizar el estado en el componente padre

    // Limpieza al desmontar el componente o al cambiar las imágenes
    return () => {
      fileURLs.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [fileArray, handleImagesUploaded]);

  const uploadMultipleFiles = (event) => {
    const files = [...event.target.files];
    setFileArray(files);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <form>
      <div className="form-group multi-preview">
        <div className="contenedorSliderImageUpload">
          <Slider {...settings}>
            {fileArray.map((file, index) => (
              <div key={index}>
                <img src={URL.createObjectURL(file)} alt="Preview" className="image-preview" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="form-groupcontenedorSliderImageUpload">
        <input
          type="file"
          className="form-control file-input"
          onChange={uploadMultipleFiles}
          multiple
        />
      </div>
    </form>
  );
};

export default ImageUploadPreviewComponent;
