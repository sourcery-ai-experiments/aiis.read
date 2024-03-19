export {};

declare global {
  /**
   * xfans-be.api.v1.GetMeRes
   */
  export interface UserInfo {
    /**
     * 头像的url
     */
    avatar?: string;
    holders?: string;
    holdValue?: string;
    /**
     * 用户 id
     */
    id?: number;
    increaseRate24h?: string;
    /**
     * 是否已激活
     */
    isActive?: boolean;
    isRegistered?: boolean;
    price?: string;
    rewardEarned?: string;
    rewardUnClaimed?: string;
    supply?: string;
    tradingFeeEarned?: string;
    tradingVolume?: string;
    /**
     * 绑定的推特用户id
     */
    twitterId?: string;
    /**
     * 绑定的推特用户username
     */
    twitterUsername?: string;
    /**
     * 数据更新时间
     */
    updatedAt?: number;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 用户钱包地址
     */
    walletAddress?: string;
  }

  /**
   * Request
   *
   * xfans-be.api.v1.GetInvitesRes
   */
  export interface InviteResponse {
    earnedPoints?: string;
    inviteCount?: number;
    items?: InviteProps[];
  }

  /**
   * xfans-be.internal.model.Invite
   */
  export interface InviteProps {
    invitedAt?: number;
    invitedUsername?: string;
    points?: string;
  }
}
