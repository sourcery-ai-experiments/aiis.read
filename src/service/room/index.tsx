import { roomRequestHttp as http } from '../request';

type Response = {
  count: number;
  messages: NewMessage[];
};

export type SendMessage = {
  message?: string;
  image?: string;
  timestamp: number;
};

export type NewMessage = {
  message: string;
  image: string;
  room: string;
  sender: string;
  createTime: string;
  id: string;
};

export async function getMessagesByRoom(
  room: string,
  qeury?: { messageId?: string; count?: number }
) {
  const response = await http.get<Response>(`/message/${room}`, qeury);
  return response.messages;
}
