import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { error } from '../components/Toaster';
import { getMessagesByRoom, ReceiveMessage, SendMessage } from '../service/room';
import useGlobalStore from '../store/useGlobalStore';

export default function useMessages(user: string, room?: string) {
  const [messages, setMessages] = useState<ReceiveMessage[]>([]);
  const [socket, setSocket] = useState<Socket>();

  // 建立 socket
  useEffect(() => {
    if (room == null) return;
    const socket = io(import.meta.env.VITE_SOCKET_bASE_URL, {
      autoConnect: false,
      extraHeaders: {
        Authorization: 'Bearer ' + useGlobalStore.getState().token,
      },
      query: { user, room },
    });
    socket.connect();
    setSocket(socket);
    return () => {
      setMessages([]);
      socket.disconnect();
    };
  }, [room, user]);

  useEffect(() => {
    socket?.on('unauthorized', (data) => {
      error('You have been banned from speaking.');
    });
  }, [socket]);

  // 处理新消息
  useEffect(() => {
    socket?.on('newMessage', (data: ReceiveMessage) => {
      // 标记已读
      socket?.emit('readMessage', { id: data.id });
      const msgs = [...messages, data];
      msgs.sort((a, b) => +a.id - +b.id);
      setMessages(msgs);
    });
  }, [messages, socket]);

  const sendMessage = useCallback(
    (nextMessage: SendMessage) => {
      socket?.emit('sendMessage', nextMessage);
    },
    [socket]
  );

  const loadMessages = useCallback(
    (direction: 'up' | 'down' = 'up', messageId?: string) => {
      if (room == null) return;
      const orderMap = {
        up: 'desc',
        down: 'asc',
      } as const;
      getMessagesByRoom(room, {
        messageId,
        count: 100,
        order: orderMap[direction],
      }).then((newMsgs) => {
        if (direction === 'up') {
          setMessages((msgs) => [...msgs, ...newMsgs].sort((a, b) => +a.id - +b.id));
        } else {
          setMessages((msgs) => [...newMsgs, ...msgs].sort((a, b) => +a.id - +b.id));
        }
      });
    },
    [room]
  );

  // 进入房间先加载最新100条
  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  return {
    messages,
    sendMessage,
    loadMessages,
  };
}
