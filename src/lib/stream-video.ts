import "server-only";

import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!;
const secret = process.env.STREAM_VIDEO_SECRET!;

export const streamVideo = new StreamClient(
    apiKey,
    secret
)


// client = new StreamClient(apiKey, secret);

// // optionally add timeout to API requests
// // the default timeout is 3000ms
// client = new StreamClient(apiKey, secret, { timeout: 3000 });
