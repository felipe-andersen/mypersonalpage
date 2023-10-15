import { Div } from "./styles";
import {RxCookie} from 'react-icons/rx';

RxCookie

export default function Cookies() {
    return (
        <Div className="animate__animated animate__fadeInUp" >

            <div>

                <span><RxCookie/></span>

                <p> 
                    Ao utilizar este site você concorda com os <a href="">Termos de uso</a> e <a>Política de cookies</a>.
                </p>

            </div>

            <div>
                <button>Aceitar</button>
                <button>Configurar cookies</button>
            </div>
  

      
        </Div>
    )
}