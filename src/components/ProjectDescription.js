import React from 'react';

const ProjectDescription = ({ description, updateField }) => {
  return (
    <div>
      <h2>Descrição do Projeto</h2>
      <textarea
        placeholder="Descreva brevemente o projeto..."
        value={description}
        onChange={(e) => updateField('description', e.target.value)}
      ></textarea>
      <p><strong>Descrição:</strong> {description}</p>
    </div>
  );
};

export default ProjectDescription;