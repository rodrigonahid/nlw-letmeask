import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';

import { Button } from "../components/Button";

export function NewRoom(){
    return(
        <div className="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustracao"/>
                <h1>Toda pergunta tem uma resposta</h1>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="content">
                    <img src={logoImg} alt="logo" />
                    <h2>Crie uma nova sala</h2>
                    <form action="#">
                        <input type="text" name="codigo" id="codigo" placeholder="Digite o código da sala" />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <small>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></small>
                </div>
            </main>
        </div>
    )
}