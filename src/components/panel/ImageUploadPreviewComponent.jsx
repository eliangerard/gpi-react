import React, { useState } from 'react';
import Slider from 'react-slick';
import './Sliders.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

const ImageUploadPreviewComponent = ({handleImagesUploaded}) => {
  const [fileArray, setFileArray] = useState([]);

  const uploadMultipleFiles = (e) => {
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    //setFileArray((prevFileArray) => [...prevFileArray, ...fileURLs]);
  };

  handleImagesUploaded(fileArray);
  useEffect(() => {

  }, [fileArray]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <form>
      <div className="form-group multi-preview">
        <div className="contenedorSliderImageUpload">
        <Slider {...settings}>
          {fileArray.map((url, index) => (
            <div key={index}>
              <img src={url} alt="Preview" className="image-preview" />
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
