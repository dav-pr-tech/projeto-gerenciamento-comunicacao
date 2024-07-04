import React from 'react';

const CommunicationRequirements = ({ requirements, updateField }) => {
  return (
    <div>
      <h2>Requisitos para Comunicação</h2>
      <textarea
        placeholder="Liste os requisitos para comunicação..."
        value={requirements}
        onChange={(e) => updateField('requirements', e.target.value)}
      ></textarea>
      <p><strong>Requisitos:</strong> {requirements}</p>
    </div>
  );
};

export default CommunicationRequirements;