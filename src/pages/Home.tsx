import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

import { Button } from "../components/Button";

export function Home(){
    const history = useHistory();

    function navigateToNewRoom(){
        history.push('/rooms/new')
    }

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
                    <button className="create-room" onClick={navigateToNewRoom}>
                        <img src={googleIconImg} alt="Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="hr">ou entre em uma sala</div>
                    <form action="#">
                        <input type="text" name="codigo" id="codigo" placeholder="Digite o código da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}