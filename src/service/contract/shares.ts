import { contractRequestHttp as http } from '../request';

export async function getBuyPrice(amount: number) {
  const data = await http.get<{ gasFee: string; price: string }>('/xfans/api/shares/getBuyPrice', {
    amount,
  });
  return data;
}

export async function getBuyPriceAfterFee(amount: number) {
  const data = await http.get<string>('/xfans/api/shares/getBuyPriceAfterFee', {
    amount,
  });
  return data;
}

export async function getSellPrice(address: string, amount: number) {
  const data = await http.get<{ gasFee: string; price: string }>('/xfans/api/shares/getSellPrice', {
    amount,
    address,
  });
  return data;
}

export async function getSellPriceAfterFee(address: string, amount: number) {
  const data = await http.get<string>('/xfans/api/shares/getSellPriceAfterFee', {
    amount,
    address,
  });
  return data;
}

/**
 * 钱包余额
 * @param address 对方的地址
 */
export async function getSharesBalance(address: string) {
  const data = await http.get<string>('/xfans/api/shares/sharesBalance', {
    address,
  });
  return data;
}

export async function buyShares(amount: number) {
  http.post<null>('/xfans/api/shares/buy', {
    amount,
  });
}

export async function sellShares(amount: number) {
  http.post<null>('/xfans/api/shares/sell', {
    amount,
  });
}
