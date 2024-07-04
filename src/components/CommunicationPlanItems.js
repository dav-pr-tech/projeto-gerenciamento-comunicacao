import React from 'react';

const CommunicationPlanItems = ({ planItems, updateField }) => {
  return (
    <div>
      <h2>Itens do Plano de Comunicação</h2>
      <textarea
        placeholder="Liste os itens do plano de comunicação..."
        value={planItems}
        onChange={(e) => updateField('planItems', e.target.value)}
      ></textarea>
      <p><strong>Itens do Plano:</strong> {planItems}</p>
    </div>
  );
};

export default CommunicationPlanItems;
