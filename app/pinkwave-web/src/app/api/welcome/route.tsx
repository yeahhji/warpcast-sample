import satori from 'satori';
import sharp from 'sharp';
import { getFrameHtmlResponse, FrameRequest } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  const user = await fetch(`https://client.warpcast.com/v2/user?fid=${body.untrustedData.fid}`, {
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json());

  const imageUrl = user.result.user.pfp.url;

  const imageBuffer = await fetch(imageUrl).then((v) => v.arrayBuffer());
  const imageBase64 = Buffer.from(imageBuffer).toString('base64');
  const imageDataUrl = `data:image/png;base64,${imageBase64}`;

  const fontBuffer = await fetch(
    'https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff',
  ).then((v) => v.arrayBuffer());

  const svg = await satori(
    <div
      style={{
        alignItems: 'flex-end',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
      }}
    >
      <img src="https://static.socialdev.club/pinkwave/welcome.png" width="600px" height="600px" alt="img" />
      {/* <div
        style={{
          background: `url("${imageDataUrl}")`,
          bottom: '80px',
          height: '150px',
          position: 'absolute',
          width: '150px',
        }}
      /> */}
      <img
        style={{ bottom: '80px', position: 'absolute', zIndex: 1 }}
        src={imageDataUrl}
        width="150px"
        height="150px"
        alt="img"
      />
    </div>,
    {
      fonts: [
        {
          data: fontBuffer,
          name: 'Pretendard',
        },
      ],
      height: 600,
      width: 600,
    },
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  console.debug('🚀 ~ getResponse ~ pngBuffer:', pngBuffer);

  // pngBuffer to data image
  const dataImage = `data:image/png;base64,${pngBuffer.toString('base64')}`;

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: '🎀 What is PinkWave 🎀',
          target: 'https://maemesoft.notion.site/PinkWave-Project-2222780bdf6c4af6b0d24945dc04de1c',
        },
      ],
      image: {
        aspectRatio: '1:1',
        src: `${dataImage}`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/welcome`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
