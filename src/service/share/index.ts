import { useRequest } from 'ahooks';

import useShareStore from '../../store/useShareStore';
import http, { ResultData } from '../request';

const useShareList = () => {
  const result = useRequest<ResultData<ShareResponse>, ShareRequest[]>(
    (params) => http.get('/api/share/trades', params),
    {
      manual: true,
      onSuccess(response) {
        useShareStore.setState({
          shareList: response.data.items,
        });
      },
    }
  );

  return result;
};

export { useShareList };
