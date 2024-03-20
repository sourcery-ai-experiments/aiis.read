import { contractRequestHttp as http } from '../request';

export async function getAccounts() {
  const accounts = await http.get<{ accounts: string[]; balance: string }>(
    '/xfans/api/user/accounts'
  );
  return accounts;
}

export async function getBalance() {
  // 后端是不是应该返回 string?
  const balance = await http.get<number>('/xfans/api/user/getBalance');
  return balance;
}
