import { useRequest } from 'ahooks';

import useTweetStore from '../../store/useTweetStore';
import http, { ResultData } from '../request';

const useTweetList = () => {
  const result = useRequest<ResultData<ShareResponse>, unknown[]>(
    () => http.get('/api/twitter/tweets'),
    {
      manual: true,
      onSuccess(response) {
        useTweetStore.setState({
          tweetList: response.data.items,
        });
      },
    }
  );

  return result;
};

export { useTweetList };
