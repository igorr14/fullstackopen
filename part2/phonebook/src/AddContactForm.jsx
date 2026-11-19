export const AddContactForm = ({
  handleSubmit,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => (
  <>
    <h2>Add a new</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex' }}>
        <label
          htmlFor="name"
          style={{ display: 'block', width: '100px', paddingRight: '10px' }}
        >
          name:
        </label>
        <input
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ display: 'block' }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <label
          htmlFor="number"
          style={{ display: 'block', width: '100px', paddingRight: '10px' }}
        >
          number:
        </label>
        <input
          id="number"
          style={{ display: 'block' }}
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>
);
