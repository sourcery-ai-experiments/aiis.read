import { useEffect, useState } from 'react';

import { getAccounts } from '../service/contract/user';

export default function useWallet() {
  const [wallet, setWallet] = useState<string | null>(null);
  useEffect(() => {
    getAccounts().then((accounts) => {
      setWallet(accounts[0]);
    });
  }, []);
  return wallet;
}
