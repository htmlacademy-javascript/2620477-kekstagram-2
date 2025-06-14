const API_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const getData = async () => {
  const response = await fetch(`${API_URL}/data`);
  if (!response.ok) {
    throw new Error('Не удалось загрузить данные');
  }
  return await response.json();
};

export const sendData = async (formData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('Не удалось отправить данные');
  }
  return await response.json();
};
