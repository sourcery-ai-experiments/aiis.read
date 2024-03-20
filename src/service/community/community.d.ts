interface Community {
  subject: string;
  ownerUser: UserInfo;
  stakedShares: string;
  requiredStakedShares: string;
  // 0=locked, 1=unlocked
  status: 0 | 1;
}
