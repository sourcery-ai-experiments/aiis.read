import { roomRequestHttp as http } from '../request';

type Response = {
  count: number;
  messages: ReceiveMessage[];
};

export type SendMessage = {
  message?: string;
  image?: string;
  uuid: string;
  timestamp: number;
};

export type ReceiveMessage = {
  message: string;
  image: string;
  room: string;
  sender: string;
  createTime: string;
  id: string;
};

export async function getMessagesByRoom(
  room: string,
  qeury?: { messageId?: string; count?: number; order?: 'asc' | 'desc' }
) {
  const response = await http.get<Response>(`/message/${room}`, qeury);
  return response.messages;
}

type GetUnreadMessageCountResponse = {
  count: number;
  since: number;
  latestMsg: ReceiveMessage;
};

export async function getUnreadMessageCount(user: string, room: string) {
  const response = await http.get<GetUnreadMessageCountResponse>(
    `/message/unread-count/${user}/${room}`
  );
  return response;
}
