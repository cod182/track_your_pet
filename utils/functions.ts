export const fetchNotifications = async () => {
  try {
    const response = await fetch(`/api/petscans`, {
      method: 'GET',
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
}

export const updateNotifications = async (id: string) => {
  try {
    const response = await fetch(`/api/petscans/${id}`, {
      method: 'PATCH',
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
}