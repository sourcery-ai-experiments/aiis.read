import { useEffect, useState } from 'react';

import { getAccounts } from '../service/contract/user';

type Address = string;
type Balance = string;
export default function useAccount() {
  const [account, setAccount] = useState<[Address, Balance]>(['0x0', '0']);
  useEffect(() => {
    getAccounts().then((response) => {
      setAccount([response.accounts[0], response.balance]);
    });
  }, []);
  return account;
}
