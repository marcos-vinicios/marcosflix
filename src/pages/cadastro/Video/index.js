import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageDefault>
        <h1> Página de cadastro de video</h1>
        <Link to="/cadastro/categoria">
            Cadastrar Categria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;