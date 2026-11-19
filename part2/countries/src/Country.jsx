const labelStyle = {
  padding: '8px 16px 8px 0',
  color: 'var(--text)',
  fontWeight: 'normal',
  textAlign: 'left',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
};

const valueStyle = {
  padding: '8px 0',
  color: 'var(--text-h)',
};

const rowStyle = { borderBottom: '1px solid var(--border)' };

export const Country = ({ name, capital, area, languages, flagSrc }) => (
  <table
    style={{
      borderCollapse: 'collapse',
      marginTop: '16px',
      minWidth: '320px',
    }}
  >
    <tbody>
      <tr style={rowStyle}>
        <th style={labelStyle}>Country name</th>
        <td style={{ ...valueStyle, fontSize: '1.25em', fontWeight: 600 }}>
          {name}
        </td>
      </tr>
      <tr style={rowStyle}>
        <th style={labelStyle}>Capital</th>
        <td style={valueStyle}>{capital}</td>
      </tr>
      <tr style={rowStyle}>
        <th style={labelStyle}>Area</th>
        <td style={valueStyle}>{area.toLocaleString()} km²</td>
      </tr>
      <tr style={rowStyle}>
        <th style={labelStyle}>Languages</th>
        <td style={valueStyle}>
          <ul style={{ margin: 0, paddingLeft: '18px' }}>
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </td>
      </tr>
      <tr>
        <th style={labelStyle}>Flag</th>
        <td style={valueStyle}>
          <img
            src={flagSrc}
            alt={`Flag of ${name}`}
            style={{
              width: '160px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
            }}
          />
        </td>
      </tr>
    </tbody>
  </table>
);
