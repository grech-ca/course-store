import { useCallback, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import useStorage from 'hooks/useStorage';

export type NotificationVariant = 'error' | 'success' | 'warning' | 'default' | 'info';

export interface NotificationInput {
  title: string;
  description: string;
  variant: NotificationVariant;
}

export interface Notification extends NotificationInput {
  date: string;
}

export type UseNotificationHookResult = {
  makeRead: () => void;
  notify: (notification: NotificationInput) => void;
  notifications: Notification[];
  readDate: string | null;
};

const useNotification = (): UseNotificationHookResult => {
  const { enqueueSnackbar } = useSnackbar();

  const [notifications, setNotifications] = useStorage<Notification[]>('notifications', []);
  const [readDate, setReadDate] = useStorage<string | null>('read-date', null);

  const notify = useCallback(
    ({ title, description, variant }: NotificationInput) => {
      enqueueSnackbar(description, { variant: variant });
      setNotifications([
        {
          title,
          description,
          variant,
          date: new Date().toISOString(),
        },
        ...notifications,
      ]);
    },
    [enqueueSnackbar, notifications, setNotifications],
  );

  const makeRead = () => setReadDate(new Date().toISOString());

  useEffect(() => {
    if (readDate === null) setReadDate(new Date().toISOString());
  }, [readDate, setReadDate]);

  return {
    notifications,
    makeRead,
    notify,
    readDate,
  };
};

export default useNotification;
