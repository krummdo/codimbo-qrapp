import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import QRCode from "react-qr-code";


class QrCodePrintable extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <QRCode value={this.props.text} />
      </div>
    );
  }
};

export const QrPrint = () => {
  const componentRef = useRef();
  const [ text, setText ] = useState();
  const [ show, setShow ] = useState();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleGenerate = () => {
    setShow(true);
  };

  const handleTryAgain = () => {
    setText('');
    setShow(false);
  };
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <div>
      { !show && (
        <p>
          <input
            type="text"
            placeholder="Add some text"
            onChange={handleChangeText}
          />
        </p>
      )}
      { !show && text && (
        <p>
          <button onClick={handleGenerate}>Generate</button>
        </p>
      )}
      { show && (
        <div>
          <QrCodePrintable ref={componentRef} text={text} />
        </div>
      )}
      { show && ( 
        <p>
          <button onClick={handleTryAgain}>Try Again</button>
          <button onClick={handlePrint}>Print</button>
        </p>
      )}
    </div>
  )
}
