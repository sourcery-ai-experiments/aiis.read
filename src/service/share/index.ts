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

const useTopList = () => {
  const result = useRequest<ResultData<ItemsResponse<TopUserProps>>, PageProps[]>(
    (params) => http.get('/api/user/top', params),
    {
      manual: true,
      onSuccess(response) {
        useShareStore.setState({
          topList: response.data.items,
        });
      },
    }
  );

  return result;
};

const useNewList = () => {
  const result = useRequest<ResultData<ItemsResponse<TopUserProps>>, PageProps[]>(
    (params) => http.get('/api/user/new', params),
    {
      manual: true,
      onSuccess(response) {
        useShareStore.setState({
          newList: response.data.items,
        });
      },
    }
  );

  return result;
};

const useRecentList = () => {
  const result = useRequest<ResultData<ItemsResponse<TopUserProps>>, PageProps[]>(
    (params) => http.get('/api/user/24h', params),
    {
      manual: true,
      onSuccess(response) {
        useShareStore.setState({
          recentList: response.data.items,
        });
      },
    }
  );

  return result;
};

const useHolderList = () => {
  const result = useRequest<ResultData<ItemsResponse<HolderProps>>, HolderRequest[]>(
    (params) => http.get('/api/share/holds', params),
    {
      manual: true,
      onSuccess(response, params) {
        console.log(
          'succ',
          params[0].subject !== undefined && params[0].subject !== null,
          params[0].holder !== undefined && params[0].holder !== null
        );
        if (params[0].subject !== undefined && params[0].subject !== null) {
          useShareStore.setState({
            holderList: response.data.items,
            holderListTotal: response.data.total,
          });
        }

        if (params[0].holder !== undefined && params[0].holder !== null) {
          useShareStore.setState({
            holderingList: response.data.items,
            holderingListTotal: response.data.total,
          });
        }
      },
    }
  );

  return result;
};

export { useHolderList, useNewList, useRecentList, useShareList, useTopList };
