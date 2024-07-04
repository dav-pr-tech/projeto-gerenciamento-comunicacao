import React from 'react';

const Stakeholders = ({ stakeholders, updateField }) => {
  return (
    <div>
      <h2>Stakeholders</h2>
      <textarea
        placeholder="Identifique os stakeholders..."
        value={stakeholders}
        onChange={(e) => updateField('stakeholders', e.target.value)}
      ></textarea>
      <p><strong>Stakeholders:</strong> {stakeholders}</p>
    </div>
  );
};

export default Stakeholders;