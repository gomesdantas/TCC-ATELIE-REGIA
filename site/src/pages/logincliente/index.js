import './index.scss'
<<<<<<< HEAD
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import storage, { set } from 'local-storage';


export default function LoginCliente() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ erro, setErro ]= useState('');

    const navigate = useNavigate();

    const validarEmail = (email) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regex.test(email);
      };

    async function entrarClick() {

        
        try {

           
            const r = await axios.post('http://localhost:5000/login/cliente', {

                email: email,
                senha: senha

            })

          
                navigate('/');
        } catch (err) {
 
      if (err && err.response && err.response.status === 400) {
        setErro(err.response.data.erro);
    } else {
       
        setErro('Ocorreu um erro ao processar a solicitação.');
    }

        }
    }


    return (



        <div className="pagina-logincliente">

            <div className="loginc">

                <div className="inputz-login">


=======

export default function LoginCliente() {

    return (
        <div className="pagina-logincliente">
            <div className="loginc">
                <div className='imagem-loginc1'>
                    <img src="/assets/images/imagempaginacadastrocliente.png" alt="" className='camada2-loginc' />

                    <img src="/assets/images/logo.png" alt="" className='camada3-loginc' />
                </div>
                <div className="inputz-login">
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4
                    <h1>
                        Bem-vindo
                    </h1>

                    <p> Faça o login para continuar </p>

                    <div className="inputz-putz-logincliente">

                        <div className="div-inputz-loginc">
                            <p>Email</p>
<<<<<<< HEAD
                            <input type="text" placeholder='Digite aqui o seu email ' value={email}
                                onChange={e => setEmail(e.target.value)} />
=======
                            <input type="text" placeholder='Digite aqui o seu email '/>
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4

                        </div>

                        <div className="div-inputz-loginc">
                            <p>Senha</p>
<<<<<<< HEAD
                            <input type="password" placeholder='Digite aqui a sua senha' value={senha} onChange={e => setSenha(e.target.value)} />

                        </div>

                        
                        <div className='erro'>
{erro}
                        </div>

=======
                            <input type="password" placeholder='Digite aqui a sua senha'/>

                        </div>
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4
                        <div className="botoes-logincliente">

                            <a href=""> Esqueci a senha </a>

<<<<<<< HEAD
                            <button className='botao1-logincliente' onClick={entrarClick} > LOGIN </button>

=======
                            <button className='botao1-logincliente' > LOGIN </button>
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4

                        </div>

                        <div className='redes-loginc'>

                            <p> Entrar com as redes sociais </p>

                            <div className='icons-redes-logincliente'>
<<<<<<< HEAD



                                <img src="/assets/images/facebook.png" alt="" />
                                <img src="/assets/images/tt.png" alt="" />
                                <img src="/assets/images/instagram.png" alt="" />


                            </div>



                            <p> Ainda não possui uma conta? <a href="/cadastro/cliente"> Cadastre-se </a> </p>

                        </div>
                    </div>
                </div>

                <div className='imagem-loginc1'>

                    <img src="/assets/images/logotransparente.png" alt="" className='camada3-loginc' />
              

                </div>

            </div>

        </div>

    );



=======
                                <img src="/assets/images/facebook.png" alt="" />
                                <img src="/assets/images/tt.png" alt="" />
                                <img src="/assets/images/instagram.png" alt="" />
                            </div>
                            <p> Ainda não possui uma conta? <a href="/cadastro/cliente"> Cadastre-se </a> </p>
                        </div>
                    </div>
                </div>
                <div className='imagem-loginc2'>
                    <img src="/assets/images/imagempaginacadastrocliente.png" alt="" className='camada4-loginc' />

                    <img src="/assets/images/logo.png" alt="" className='camada5-loginc' />
                </div>

            </div>
        </div>
    );
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4
}