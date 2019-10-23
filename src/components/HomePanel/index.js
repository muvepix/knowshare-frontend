import React from 'react';
import Button from '../Button';

import { Panel, PanelContent } from './styles';
// import './HomePanel.css';

export default function HomePanel() {
  return (
    <Panel>
      <PanelContent>
        <h1>
          <span className="bolder">Nunca</span> é tarde para aprender.
        </h1>
        <h3>
          Conheça a Know Share. A sua nova plataforma para compartilhamento de
          material.
        </h3>
        <h3>
          E o melhor, de <span className="bolder">graça!</span>
        </h3>
        <Button filled mt={2} linkTo="/content/">
          Iniciar Jornada!
        </Button>
      </PanelContent>
    </Panel>
  );
}
