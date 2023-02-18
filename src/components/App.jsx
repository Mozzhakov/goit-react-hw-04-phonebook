import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './Styles/App.module.css';

export const App = () => {
  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key) ?? defaultValue);
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
  };

  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const condition = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (condition) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>
      <div className={css.contacts}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};
