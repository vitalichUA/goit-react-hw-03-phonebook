import PropTypes from 'prop-types';
import { ContactsItem, ContactsButton } from './ContactsList.styled';


export const ContactsList = ({ value, options, onClickDelete }) => {
  const normalizeValue = value.toLowerCase();
  const filteredArray = options.filter((option) => option.name.toLowerCase().includes(normalizeValue));

  return (
    <ul>
      {filteredArray.map(({id, name, number}) => {
        return (
          <ContactsItem key={id}>
            {name}: {number}
            <ContactsButton onClick={() => { onClickDelete(id) }}>
                Delete
            </ContactsButton>
          </ContactsItem>)
             })}
      </ul>)
}

ContactsList.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClickDelete: PropTypes.func.isRequired,
}