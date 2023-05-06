// import React, { useState, useEffect, useRef } from 'react'
// import { Publish, Director } from '@millicast/sdk';
// import './Publisher.css';

// let publisher = null;
// let mediaStream = null;

// function BroadcastWidget(props) {
//   const [streamStarted, setStreamStarted] = useState(false);
//   const publisherRef = useRef(null);
  
//   const handleStartStream = async () => {
//     const tokenGenerator = () => Director.getPublisher({
//       token: 'edbdcaa1e858eca026d6635cbc2b1a38488e8bfb94c8c2cf3156254e34dcd048', 
//       streamName: 'firstStream'
//     });
  
//     publisher = new Publish('First stream!!!', tokenGenerator);
//     mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      
//     // Publishing Options
//     const broadcastOptions = {
//       mediaStream: mediaStream
//     };
        
//     // Start broadcast
//     try {
//       await publisher.connect(broadcastOptions);
//     } catch (e) {
//       console.error('Connection failed, handle error', e);
//     }   

//     setStreamStarted(true);
//   }

//   const handleStopStream = async () => {
//     publisher.stop();
//     mediaStream.getTracks().forEach(track => {
//       track.stop();
//     });
//     setStreamStarted(false);
//   }

//   return (
//     <div className="publisher-div">
//       <button className={streamStarted ? "stop-button" : "start-button"} onClick={streamStarted ? handleStopStream : handleStartStream}>
//         {streamStarted ? 'Stop Streaming' : 'Start Streaming'}
//       </button>
//       <iframe src="https://viewer.millicast.com?streamId=cMFGWT/firstStream" allowFullScreen width="640" height="480"></iframe>
//     </div>
//   );
// }

// export default BroadcastWidget;
