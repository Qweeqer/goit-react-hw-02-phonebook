import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
          <button className={css.listDeleteButton} type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
          </p>
        </li>
      );
    })}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};