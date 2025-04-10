export const saveToLocalHistory = (item: any) => {
    const history = JSON.parse(localStorage.getItem('sentilytics_history') || '[]');
    localStorage.setItem(
      'sentilytics_history',
      JSON.stringify([{ ...item, date: new Date().toISOString() }, ...history])
    );
  };
  
  export const getLocalHistory = (): Promise<any[]> => {
    const data = localStorage.getItem('sentilytics_history');
    return Promise.resolve(data ? JSON.parse(data) : []);
  };
  
  export const clearLocalHistory = () => {
    localStorage.removeItem('sentilytics_history');
  };
  