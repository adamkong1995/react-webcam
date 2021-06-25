import './App.css';
import WebcamCapture from './components/Webcam';
import React, { useState } from 'react';
import Image from './components/Image';
import Button from './components/Button';
import styled from 'styled-components';
import Text from './components/Text';
import overlayImageSrc from './public/rectframe-initial.png'

const OverlayWrapper = styled.div`
  position: absolute;
  top: 24px;
`;

function App() {
  const [imageSrc, setImageSrc] = useState('');
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnCapture = (imageSrc) => {
    if(!imageSrc) return;

    setImageSrc(imageSrc)

    // api call for validation
    setLoading(true);

    setTimeout(() => {
      setResult('Success!')
      setLoading(false)
    }, 1500)
  }

  const handleOnResetImage = () => {
    setImageSrc('')
    setLoading(false)
    setResult('')
  }

  const _renderWebcam = () => {
    if(imageSrc) return;

    return (
      <div>
        <Text>Let's take a photo</Text>
        <WebcamCapture onCapture={handleOnCapture} />
        <OverlayWrapper>
          <Image src={overlayImageSrc} />
        </OverlayWrapper>
      </div>
    )
  };

  const _renderCapturedImage = () => {
    if(!imageSrc) return;

    return (
      <div>
        <Text>Let's review ur captured photo</Text>
        <div>
          <Image src={imageSrc} />
        </div>
        <Button onClick={handleOnResetImage} backgroundColor={'red'}>Retake</Button>
      </div>
    )
  }

  return (
    <div>
      {_renderWebcam()}
      {_renderCapturedImage()}
      <Text>{loading && 'loading...'}</Text>
      <Text>{result}</Text>

    </div>
  );
}

export default App;
