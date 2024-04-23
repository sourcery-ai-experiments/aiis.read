declare global {
  export interface WalletClaimRequest {
    amount: string;
    address: string;
    index: string;
    merkleProof: string[];
  }

  export interface WalletData {
    accounts: string[];
    balance: string;
  }
}
