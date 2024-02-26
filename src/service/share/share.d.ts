export {};

declare global {
  export interface ItemsResponse<T> {
    items: T[];
  }

  export interface ShareRequest {
    subject?: string;
    trader?: string;
  }
  /**
   * xfans-be.api.v1.GetTradesRes
   */
  export interface ShareResponse {
    items: ShareProps[];
  }

  /**
   * xfans-be.internal.model.ShareTrade
   */
  export interface ShareProps {
    ethAmount?: { [key: string]: any };
    isBuy?: boolean;
    network?: { [key: string]: any };
    pool?: number[];
    poolEthAmount?: { [key: string]: any };
    protocolEthAmount?: { [key: string]: any };
    shareAmount?: { [key: string]: any };
    subject?: number[];
    subjectEthAmount?: { [key: string]: any };
    supply?: { [key: string]: any };
    trader?: number[];
    txHash?: number[];
    [property: string]: any;
  }
}
