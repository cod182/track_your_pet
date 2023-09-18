import React from 'react';
import QRCode from 'react-qr-code';

const QrCode = ({ urlToLinkTo, qrCodeWidth }: any) => {
  const downloadSVGAsPNG = () => {
    const canvas = document.createElement('canvas');
    const svg = document.querySelector('svg');
    const base64doc = btoa(unescape(encodeURIComponent(svg!.outerHTML)));
    const img_to_download = document.createElement('img');
    img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
    img_to_download.onload = function () {
      canvas.setAttribute('width', '200px');
      canvas.setAttribute('height', '200px');
      const context = canvas.getContext('2d');
      //context.clearRect(0, 0, w, h);
      context!.drawImage(img_to_download, 0, 0, 200, 200);
      const dataURL = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      const my_evt = new MouseEvent('click');
      a.download = 'download.png';
      a.href = dataURL;
      a.dispatchEvent(my_evt);

      //canvas.parentNode.removeChild(canvas);
    };
  };

  return (
    <div>
      <QRCode
        size={256}
        style={{
          height: 'auto',
          maxWidth: qrCodeWidth,
          width: qrCodeWidth,
        }}
        bgColor="#fff0"
        value={urlToLinkTo}
      />
      <button
        className="text-black bg-green-400 hover:bg-green-200 rounded-md py-2 px-4 mx-auto my-2 w-full shadow-xl hover:shadow-inner"
        onClick={(e) => downloadSVGAsPNG()}
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QrCode;
