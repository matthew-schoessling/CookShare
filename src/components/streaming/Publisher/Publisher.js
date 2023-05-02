import React, { useState, useEffect, useRef } from 'react'
import { Publish, View, Director } from '@millicast/sdk';

async function getTokenGenerator() {
  try {
    const tokenGenerator = () => Director.getPublisher(
      {
        token: 'edbdcaa1e858eca026d6635cbc2b1a38488e8bfb94c8c2cf3156254e34dcd048', 
        streamName: 'my-stream-name'
      });

      
      return tokenGenerator
  } catch (error) {
    console.error('Failed to get token generator.\n', error);
    throw error;
  }
}

function BroadcastWidget(props) {
  const [streamStarted, setStreamStarted] = useState(false);
  const publisherRef = useRef(null);
  
  const handleStartStream = async () => {
    try {
      // Generate a TokenGenerator for the user
      const tokenGenerator = getTokenGenerator(props.userId);
      const publisher = new Publish('my-stream-name', tokenGenerator);

      // Get media information
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

      // Publishing Options
      const broadcastOptions = {
        mediaStream: mediaStream
      };

      // Start broadcast
      try {
        await publisher.connect(broadcastOptions);
      } catch (e) {
        console.error('Connection failed, handle error', e);
      }

      // Create Millicast instance
      const millicastView = new View('publish-stream-name', tokenGenerator);

      setStreamStarted(true);
    } catch (error) {
      console.error('Failed to start streaming', error);
    }
  };

  useEffect(() => {
    // Attach the publisher to a video element
    if (publisherRef.current) {
      publisherRef.current.attach(document.getElementById('publisher-video'));
    }
  }, [streamStarted]);

  console.log(streamStarted)

  return (
    <div>
      <button onClick={handleStartStream}>Start Streaming</button>
    </div>
  );
}

export default BroadcastWidget;
