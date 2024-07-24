'use client'; // This directive ensures the file is treated as a client component

import React, { ReactNode, createContext, useContext, useState } from 'react';
import { fetchNotifications, updateNotifications } from '@/utils/functions';

import { petScanHistory } from '@/types'; // Adjust the import path as needed

// Define the shape of the context value
interface NotificationContextType {
  notifications: petScanHistory[];
  addNotification: (notification: petScanHistory) => void;
  removeNotification: (id: string) => void;
  getUnreadCountForPet: (petId: string) => number;
  getNotifications: () => void
}

// Create the context with a default value
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Create a provider component
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<petScanHistory[]>([]);

  const getNotifications = async () => {
    try {
      const response = await fetchNotifications();
      setNotifications(response)
    } catch (error) {
      setNotifications([])
      console.log('Could not get notifications')
    }
  };

  const addNotification = (notification: petScanHistory) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    // Function to add a notification to the database can be added here
  };

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications) => prevNotifications.filter(notification => notification._id !== id));
    // Function to remove a notification from the database can be added here
    updateNotifications(id);
  };

  const getUnreadCountForPet = (petId: string) => {
    return notifications.filter(notification => notification.petId === petId && !notification.read).length;
  };


  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, getUnreadCountForPet, getNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the NotificationContext
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
