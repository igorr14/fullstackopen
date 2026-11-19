export const Filter = ({ setSearchVal, searchVal }) => (
  <div style={{ display: 'flex' }}>
    <label
      htmlFor="filter"
      style={{ display: 'block', width: '100px', paddingRight: '10px' }}
    >
      filter contacts:
    </label>
    <input
      id="filter"
      value={searchVal}
      onChange={({ target: { value } }) => setSearchVal(value)}
    />
  </div>
);
