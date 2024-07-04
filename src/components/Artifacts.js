import React from 'react';

const Artifacts = ({ artifacts, updateField }) => {
  return (
    <div>
      <h2>Artefatos</h2>
      <textarea
        placeholder="Descreva os artefatos que devem ser anexados..."
        value={artifacts}
        onChange={(e) => updateField('artifacts', e.target.value)}
      ></textarea>
      <p><strong>Artefatos:</strong> {artifacts}</p>
    </div>
  );
};

export default Artifacts;
