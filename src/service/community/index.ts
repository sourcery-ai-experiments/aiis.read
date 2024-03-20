import http, { ResultData } from '../request';
export async function getList(status: 0 | 1) {
  const response = await http.get<ResultData<ItemsResponse<Community>>>('/api/community/mine', {
    status,
  });
  return response.data.items;
}
