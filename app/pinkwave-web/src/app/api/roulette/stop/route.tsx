import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../../config';
import { getFrameHtmlResponse } from '../../../../utils/getFrameHtmlResponse';

async function getResponse(): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        aspectRatio: '1:1',
        src: `${NEXT_PUBLIC_URL}/roulette/survived.png`,
      },
    }),
  );
}

export async function POST(): Promise<Response> {
  return getResponse();
}

export const dynamic = 'force-dynamic';
