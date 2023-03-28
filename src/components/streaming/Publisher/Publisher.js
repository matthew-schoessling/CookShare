import React from 'react';
import './Publisher.css'

import { Director, Publish } from '@millicast/sdk';

async function Publisher() {
  const tokenGenerator = () => Director.getPublisher({
    token: '5d28b0ab48de4559614b07c722745422d46857a4edfa4213c1434b1233d70a22', 
    streamName: 'firstStream'
  });

  const publisher = new Publish('First stream!!!', tokenGenerator);
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

  console.log('Published stream');

  return;
}

export default Publisher;
