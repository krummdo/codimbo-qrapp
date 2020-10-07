import React, { useState } from 'react';
import { default as QrReaderPlugin } from 'react-qr-reader';

export const QrReader = () => {

  const [result, setResult ] = useState();
  const [openReader, setOpenReader ] = useState();

  const handleScan = data => {
    if (data) {
      setResult(data);
      setOpenReader(false);
    }
  };

  const handleError = err => {
    console.error(err)
  };

  const handleOpenReader = () => {
    setResult();
    setOpenReader(true);
  };

  return (
    <div>
      { !openReader && ( 
        <p>
          <button onClick={handleOpenReader}>Open Camera</button>
        </p>
      )}
      { openReader && (
        <QrReaderPlugin
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100vw' }}
        /> 
      )}
      { result && (
        <div>
          <p>Obtained data:</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}
