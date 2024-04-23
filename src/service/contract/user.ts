import { contractRequestHttp as http } from '../request';

export async function getAccounts() {
  const accounts = await http.get<{ accounts: string[]; balance: string }>(
    '/xfans/api/user/accounts'
  );
  return accounts;
}

export async function getBalance() {
  const balance = await http.get<string>('/xfans/api/user/getBalance');
  return balance;
}
