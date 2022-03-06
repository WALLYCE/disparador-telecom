import io from 'socket.io-client';
import QRCode from 'qrcode';
import canvas from 'canvas';

function QrCode(){
    const socket = io.connect('localhost:8080');
    socket.on('qrcode', async (event) => { 
        console.log(event);
        const canvas = document.getElementById('canvas');     
        QRCode.toCanvas(canvas, event)
   
    });
    return(
        <>
        <canvas id='canvas'>
            </canvas>
        </>
    )
}

export default QrCode;