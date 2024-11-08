import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import {apagarImagem, criarImagem, downloadImagem, editarImagem, mostrarImagens, mostrarUmaImagem} from './controllers/ImagemController.js';
import { criarUsuario, logarUsuario, mostrarUmUsuario, mostrarUsuario } from './controllers/UsuarioController.js';

const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());


app.get('/', (req,res)=>{
    res.send('API funcionando')
});

app.get('/public/:nomeImg' ,downloadImagem);
//CRUD imagem
app.post('/imagem', criarImagem);
app.get('/imagem', mostrarImagens);
app.get('/imagem/:id_imagem', mostrarUmaImagem);
app.put('/imagem/:id_imagem', editarImagem);
app.delete('/imagem/:id_imagem', apagarImagem);

//CRUD usuario
app.post('/usuario',criarUsuario);
app.get('/usuario',mostrarUsuario);
app.get('/usuario/:id_usuario',mostrarUmUsuario);

app.post('/login',logarUsuario);

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});