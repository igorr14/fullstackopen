export const ContactItem = ({ person, handleDelete }) => (
  <li
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      padding: '8px 0',
      borderBottom: '1px solid var(--border)',
    }}
  >
    <span>
      <span style={{ color: 'var(--text-h)' }}>{person.name}</span>{' '}
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.9em' }}>
        {person.number}
      </span>
    </span>
    <button
      onClick={() => handleDelete(person)}
      style={{
        margin: 0,
        padding: '2px 10px',
        fontSize: '0.85em',
        color: 'var(--error)',
      }}
    >
      Delete contact
    </button>
  </li>
);
