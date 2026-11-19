export const Search = ({ value, setValue }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    find countries
    <input value={value} onChange={({ target }) => setValue(target.value)} />
  </label>
);
