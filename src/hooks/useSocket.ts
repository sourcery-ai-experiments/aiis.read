import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { getMessagesByRoom, NewMessage, SendMessage } from '../service/room';

export default function useWebSocket(user: string, room?: string) {
  const [messages, setMessages] = useState<NewMessage[]>([]);
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    if (room == null) return;
    const socket = io(import.meta.env.VITE_SOCKET_bASE_URL, {
      autoConnect: false,
      query: { user, room },
    });
    socket.connect();
    // socket.on('connect', () => {
    //   socket.send()
    // });
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [room, user]);

  useEffect(() => {
    socket?.on('newMessage', (data: NewMessage) => {
      const msgs = [...messages, data];
      console.log('receive', data);
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

  // 进入房间先加载最新100条
  useEffect(() => {
    if (room == null) return;
    getMessagesByRoom(room, { count: 100 }).then((msgs) =>
      setMessages(msgs.sort((a, b) => +a.id - +b.id))
    );
  }, [room]);

  return {
    messages,
    sendMessage,
  };
}
