import React, { useEffect, useState } from 'react'

function GestaoImagem() {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        carregarImagens()
    }, []);

    async function carregarImagens(params) {
        try {
            const resposta = await fetch('http://localhost:5000/imagem', {
                method: 'GET',
                headers:{
                    'Content-Type':'apllication/json'
                }
            });
            if(!resposta){
                throw new Error('Erro ao buscar imagens')
            }
            const consulta = await resposta.json();
            setImagens(consulta);
        } catch (error) {
            console.log('Erro ao busca imagem', error)
        }
    }

  return (
    <div>
        <h1>Gestão Imagens</h1>
        <ul>
            {imagens.map((imagem)=>(
                <li key={imagem.id_imagem}>
                    <img src={`http://localhost:5000/public/${imagem.caminho}`} alt={imagem.descricao}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GestaoImagem;