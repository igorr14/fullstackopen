import axios from 'axios';

const BASE_URL = 'http://localhost:3001/persons';

const getContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

const addContact = async (contact) => {
  const { data } = await axios.post(BASE_URL, contact);
  return data;
};

const updateContact = async (id, contact) => {
  const { data } = await axios.put(`${BASE_URL}/${id}`, contact);
  return data;
};

const deleteContact = async (id) => await axios.delete(`${BASE_URL}/${id}`);

export const api = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
