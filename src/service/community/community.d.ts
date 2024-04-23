interface Community {
  subject: string;
  ownerUser: {
    address: string;
    avatar: string;
    twitterId: string;
    username: string;
  };
  stakedShares: string;
  requiredStakedShares: string;
  // 0=locked, 1=unlocked
  status: 0 | 1;
}

interface CommunityUserInfo {
  twitterId: string;
  username: string;
  avatar: string;
  address: string;
  shares: string;
  stakedShares: string;
  isBlocked: boolean;
  allowChat: boolean;
  communityUnlocked: boolean;
}
