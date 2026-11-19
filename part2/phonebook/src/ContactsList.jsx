import { ContactItem } from './ContactItem';

export const ContactsList = ({ filteredPersons, handleDelete }) => (
  <>
    <h2>Numbers</h2>
    <ul style={{ listStyle: 'none', padding: 0, maxWidth: '480px' }}>
      {filteredPersons.map((p) => (
        <ContactItem key={p.id} person={p} handleDelete={handleDelete} />
      ))}
    </ul>
  </>
);
