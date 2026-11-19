import { useEffect, useState } from 'react';
import { getNormalizedString } from './utils/getNormalizedString';
import { api } from './services/contacts';
import { ContactsList } from './ContactsList';
import { AddContactForm } from './AddContactForm';
import { Filter } from './Filter';
import { Notification } from './Notification';

const getFilteredPersons = (searchVal, persons) => {
  const normalizedSearchVal = getNormalizedString(searchVal);
  if (normalizedSearchVal.length < 2) return persons;

  return persons.filter((p) =>
    getNormalizedString(p.name).includes(normalizedSearchVal),
  );
};

const getDuplicateContact = (name, persons) => {
  const normalizedName = getNormalizedString(name);
  return persons.find((p) => getNormalizedString(p.name) === normalizedName);
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [notification, setNotification] = useState({
    isError: false,
    text: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getContacts();
      setPersons(data);
    };
    fetchData();
  }, []);

  const filteredPersons = getFilteredPersons(searchVal, persons);

  const resetForm = () => {
    setNewName('');
    setNewNumber('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = newName.trim();
    const number = newNumber.trim();

    if (!name || !number) {
      alert('Fill all the fields');
      return;
    }

    const duplicateContact = getDuplicateContact(name, persons);

    if (duplicateContact) {
      const shouldUpdate = window.confirm(
        `${name} is already added to phonebook, replace the old number?`,
      );
      if (!shouldUpdate) return;

      try {
        const data = await api.updateContact(duplicateContact.id, {
          ...duplicateContact,
          number,
        });
        setPersons((prevPersons) =>
          prevPersons.map((p) => (p.id !== data.id ? p : data)),
        );
        resetForm();
        setNotification({
          isError: false,
          text: `Contact ${name} has been successfully updated`,
        });
      } catch {
        setNotification({
          isError: true,
          text: `Contact ${name} does not exist anymore`,
        });
      }
      return;
    }

    const data = await api.addContact({ name, number });

    setPersons((prevPersons) => [...prevPersons, data]);
    resetForm();
    setNotification({
      isError: false,
      text: `Contact ${name} has been successfully added`,
    });
  };

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = window.confirm(`Really want to delete ${name}?`);

    if (!shouldDelete) return;

    try {
      await api.deleteContact(id);
      setPersons((prevPersons) => prevPersons.filter((p) => p.id !== id));
    } catch {
      setNotification({
        isError: true,
        text: `Contact ${name} does not exist anymore`,
      });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter setSearchVal={setSearchVal} searchVal={searchVal} />
      {notification?.text && (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <AddContactForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <ContactsList
        filteredPersons={filteredPersons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
