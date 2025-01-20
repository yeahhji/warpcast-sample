import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

export const metadata: Metadata = {
  other: {
    'fc-frame': 'vNext',
    'fc:frame:button:0': '🎀 Join the PinkWave 🎀',
    'fc:frame:button:0:action': 'post',
    'fc:frame:image': `${NEXT_PUBLIC_URL}/join.png`,
    'fc:frame:image:aspect_ratio': '1:1',
    'fc:frame:post_url': `${NEXT_PUBLIC_URL}/api/welcome`,
  },
  title: 'pinkwave',
};

export default function Page() {
  return (
    <>
      <h1>WELCOME TO PINKWAVE</h1>
    </>
  );
}
