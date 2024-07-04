import React, { useState } from 'react';
import './App.css'; // Importando o arquivo CSS
import Artifacts from './components/Artifacts';
import CommunicationPlanItems from './components/CommunicationPlanItems';
import CommunicationRequirements from './components/CommunicationRequirements';
import ProjectDescription from './components/ProjectDescription';
import Stakeholders from './components/Stakeholders';

const App = () => {
  const [escopo, setEscopo] = useState({
    description: '',
    requirements: '',
    stakeholders: '',
    planItems: '',
    artifacts: ''
  });

  const updateField = (field, value) => {
    setEscopo(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const salvarJSON = () => {
    const jsonEscopo = JSON.stringify(escopo);
    const blob = new Blob([jsonEscopo], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gerenciamento-da-comunicacao.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const carregarJSON = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setEscopo(content);
      } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
        alert('Erro ao carregar arquivo JSON. Verifique o formato do arquivo.');
      }
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div className="app-container">
      <h1>Plano de Gerenciamento da Comunicação</h1>
      <div className="form-container">
        <ProjectDescription description={escopo.description} updateField={updateField} />
        <CommunicationRequirements requirements={escopo.requirements} updateField={updateField} />
        <Stakeholders stakeholders={escopo.stakeholders} updateField={updateField} />
        <CommunicationPlanItems planItems={escopo.planItems} updateField={updateField} />
        <Artifacts artifacts={escopo.artifacts} updateField={updateField} />
      </div>
      <div className="buttons-container">
        <button className="button" onClick={salvarJSON}>Salvar como JSON</button>
        <label htmlFor="uploadJson" className="button-label">
          <input
            id="uploadJson"
            type="file"
            style={{ display: 'none' }}
            onChange={carregarJSON}
          />
          <button className="button" type="button" onClick={() => document.getElementById('uploadJson').click()}>
            Carregar JSON
          </button>
        </label>
      </div>
    </div>
  );
};

export default App;
