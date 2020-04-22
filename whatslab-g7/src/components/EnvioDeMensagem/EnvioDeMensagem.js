import React from 'react';
import styled from 'styled-components'

const MensagemContainer = styled.div`
    width: 500px;
    height: 100vh;
    border: 1px solid;   
    display: flex;
    align-items: flex-start;
    flex-direction: column; 
    justify-content: flex-end;
`
const Lista = styled.div`
    padding: 10px 10px;
`

const EnvioContainer = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    margin-bottom: 1px;
    
`

const InputNome = styled.input`
  width: 100px;
  margin: 0;
`
const InputConteudo = styled.input`
    width: 50%;
    min-width: 100px;
    margin: 0;
`

const Botao = styled.button`
  margin-bottom: 0;
`

class EnvioDeMensagem extends React.Component {
    state = {
        mensagens: [],

        valorInputNome: '',
        valorInputConteudo: ''
    }

    adicionaMensagem = () => {
        const novaMensagem = {
            nomeDoRemetente: this.state.valorInputNome + ': ',
            conteudo: this.state.valorInputconteudo
        }
        const novoMensagem = [...this.state.mensagens, novaMensagem]
        this.setState({
            mensagens: novoMensagem,
            valorInputNome: '',
            valorInputconteudo: ''
        })
    }

    onChangeInputNome = event => {
        this.setState({ valorInputNome: event.target.value })
    }

    onChangeInputconteudo = event => {
        this.setState({ valorInputconteudo: event.target.value })
    }

    render() {

        const listaDeMensagem = this.state.mensagens.map((mensagem, index) => {
            return (
                // A div abaixo deve ser alterada para receber o número 1. Lista de mensagem,
                // que deve vir de outro componente.
                // Ela foi criada apenas para testes do comportamento do código.
                <div key={index}
                    nomeDoRemetente={mensagem.nomeDoRemetente}
                    conteudo={mensagem.conteudo}
                >
                    <label><b>{mensagem.nomeDoRemetente}</b></label>
                    <label>{mensagem.conteudo}</label>
                </div>
            )
        })

        return (
            <MensagemContainer>
                <Lista>{listaDeMensagem}</Lista>
                <EnvioContainer>
                    <InputNome
                        value={this.state.valorInputNome}
                        onChange={this.onChangeInputNome}
                        placeholder={'Usuário'}
                    />
                    <InputConteudo
                        value={this.state.valorInputconteudo}
                        onChange={this.onChangeInputconteudo}
                        placeholder={'Mensagem'}
                    />
                    <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
                </EnvioContainer>
            </MensagemContainer>
        );
    }
}

export default EnvioDeMensagem;
