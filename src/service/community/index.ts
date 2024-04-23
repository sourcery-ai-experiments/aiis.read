import http, { ResultData } from '../request';

// 获取社区列表
export async function getList(status: 0 | 1) {
  const response = await http.get<ResultData<ItemsResponse<Community>>>('/api/community/mine', {
    status,
  });
  return response.data.items;
}

export async function getBySubject(subject: string) {
  const response = await http.get<ResultData<Community>>('/api/community', {
    subject,
  });
  return response.data;
}

// 获取我在这个 subject 社区里的用户信息
export async function getMyInfo(subject: string) {
  const response = await http.get<ResultData<CommunityUserInfo>>('/api/community/user/me', {
    subject,
  });
  return response.data;
}

export async function getUserList(subject: string) {
  const response = await http.get<ResultData<ItemsResponse<CommunityUserInfo>>>(
    '/api/community/users',
    {
      subject,
    }
  );
  return response.data.items;
}

export async function getUserCount(subject: string) {
  const response = await http.get<ResultData<ItemsResponse<CommunityUserInfo>>>(
    '/api/community/users',
    {
      subject,
      limit: 0,
    }
  );
  return response.data.total;
}

// 封禁/解封指定社区的用户
export async function blockUser(ownerAddress: string, userAddress: string, isBlocked: boolean) {
  const response = await http.post<ResultData<null>>('/api/community/user/block', {
    ownerAddress,
    userAddress,
    isBlocked,
  });
  return response.data;
}
