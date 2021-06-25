import React, { useCallback, useRef } from 'react';
import Webcam from "react-webcam";
import styled from "styled-components";
import Button from './Button';

const Wrapper = styled.div``;

const videoConstraints = {
  width: 575,
  height: 570,
  facingMode: "user"
};

const WebcamCapture = ({ onCapture }) => {
  
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();

      onCapture(imageSrc)
    },

    [webcamRef]
  );

  const handleOnClick = (e) => {
    e.preventDefault();
    capture();
  }

  return (
    <Wrapper>
      <div>
        <Webcam
          audio={false}
          height={570}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={575}
          videoConstraints={videoConstraints}
        />
      </div>
      <Button 
        onClick={handleOnClick}
      >
        Capture
      </Button>
    </Wrapper>
  );
};

export default WebcamCapture;