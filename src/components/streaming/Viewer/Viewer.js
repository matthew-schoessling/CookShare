import React from 'react';

import { Director, View } from '@millicast/sdk';

async function Viewer() {
    // Create callback to generate a new token
    const tokenGenerator = ()  => Director.getSubscriber({
        streamName: 'firstStream',
        streamAccountId: 'cMFGWT',
        // subscriberToken: 'subscriber-token' // Optional: This token is needed if you're subscribing to a secure stream,
                                            // This token should be provided by the publish owner.
    });
    
    // Create Millicast instance
    const millicastView = new View('publish-stream-name', tokenGenerator);

    millicastView.on('track', (event) => {
        addStreamToYourVideoTag(event.streams[0]); // Manage the track event.
      });

    try {
        await millicastView.connect(options);
    } catch (e) {
        console.error('Connection failed, handle error', e);
        await millicastView.reconnect();
    }
}

export default Viewer;
