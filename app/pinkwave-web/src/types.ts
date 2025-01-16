import { FrameInputMetadata, FrameImageMetadata } from '@coinbase/onchainkit/frame';

export type FrameButtonMetadata =
  | {
      action: 'link' | 'mint';
      label: string;
      target: string;
    }
  | {
      action?: 'post' | 'post_redirect';
      label: string;
      postUrl?: string;
      target?: string;
    }
  | {
      action: 'tx';
      label: string;
      target: string;
      postUrl?: string;
    };

export type FrameMetadataType = {
  accepts?: {
    [protocolIdentifier: string]: string;
  }; // The minimum client protocol version accepted for the given protocol identifier.
  buttons?: [FrameButtonMetadata, ...FrameButtonMetadata[]]; // A list of strings which are the label for the buttons in the frame (max 4 buttons).
  image: string | FrameImageMetadata; // An image which must be smaller than 10MB and should have an aspect ratio of 1.91:1
  input?: FrameInputMetadata; // The text input to use for the Frame.
  isOpenFrame?: boolean; // A boolean indicating if the frame uses the Open Frames standard.
  /** @deprecated Prefer `postUrl` */
  post_url?: string;
  postUrl?: string; // A valid POST URL to send the Signature Packet to.
  /** @deprecated Prefer `refreshPeriod` */
  refresh_period?: number;
  refreshPeriod?: number; // A period in seconds at which the app should expect the image to update.
  state?: object; // A string containing serialized state (e.g. JSON) passed to the frame server.
};

export interface FrameRequest {
  untrustedData: FrameData;
  trustedData: {
    messageBytes: string;
  };
}

export interface FrameData {
  buttonIndex: number;
  castId: {
    fid: number;
    hash: string;
  };
  inputText: string;
  fid: number;
  messageHash: string;
  network: number;
  state: string;
  timestamp: number;
  transactionId?: string;
  url: string;
}
