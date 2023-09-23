import './index.scss'

export default function LoginCliente() {

    return (
        <div className="pagina-logincliente">
            <div className="loginc">
                <div className='imagem-loginc1'>
                    <img src="/assets/images/imagempaginacadastrocliente.png" alt="" className='camada2-loginc' />

                    <img src="/assets/images/logo.png" alt="" className='camada3-loginc' />
                </div>
                <div className="inputz-login">
                    <h1>
                        Bem-vindo
                    </h1>

                    <p> Faça o login para continuar </p>

                    <div className="inputz-putz-logincliente">

                        <div className="div-inputz-loginc">
                            <p>Email</p>
                            <input type="text" placeholder='Digite aqui o seu email '/>

                        </div>

                        <div className="div-inputz-loginc">
                            <p>Senha</p>
                            <input type="password" placeholder='Digite aqui a sua senha'/>

                        </div>
                        <div className="botoes-logincliente">

                            <a href=""> Esqueci a senha </a>

                            <button className='botao1-logincliente' > LOGIN </button>

                        </div>

                        <div className='redes-loginc'>

                            <p> Entrar com as redes sociais </p>

                            <div className='icons-redes-logincliente'>
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
}