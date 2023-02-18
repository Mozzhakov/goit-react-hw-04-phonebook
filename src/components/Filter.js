import PropTypes from 'prop-types';
import css from './Styles/Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filter__label}>
        Find contact by name
      </label>
      <input
        id="filter"
        type="text"
        value={value}
        onChange={onChange}
        className={css.filter__input}
      />
    </div>
  );
};

Filter.prpoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
