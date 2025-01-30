import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

export const metadata: Metadata = {
  other: {
    'fc:frame': 'vNext',
    'fc:frame:button:1': 'Go',
    'fc:frame:button:1:action': 'post',
    'fc:frame:button:1:post_url': `${NEXT_PUBLIC_URL}/api/roulette/shoot`,
    'fc:frame:button:2': 'Ice',
    'fc:frame:button:2:action': 'post',
    'fc:frame:button:2:post_url': `${NEXT_PUBLIC_URL}/api/roulette/stop`,
    'fc:frame:button:3': '네이버로 이동',
    'fc:frame:button:3:action': 'link',
    'fc:frame:button:3:target': 'https://www.naver.com',
    'fc:frame:image': `${NEXT_PUBLIC_URL}/roulette/hun.png`,
    'fc:frame:image:aspect_ratio': '1:1',
  },
  title: 'roulette',
};

export default function Page() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
