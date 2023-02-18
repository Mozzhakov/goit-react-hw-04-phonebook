import { useState } from 'react';
import css from './Styles/ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className={css.contactForm}>
        <div className={css.contactForm__part}>
          <label htmlFor="name" className={css.contactForm__label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            className={css.contactForm__input}
          />
        </div>
        <div className={css.contactForm__part}>
          <label htmlFor="number" className={css.contactForm__label}>
            Number
          </label>
          <input
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            className={css.contactForm__input}
          />
        </div>
        <button type="submit" className={css.contactForm__btn}>
          Add contact
        </button>
      </form>
    </>
  );
};
