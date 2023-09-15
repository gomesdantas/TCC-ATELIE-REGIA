import './index.scss';

export default function Loginadm() {

    return (
        <div className='page-login-adm'>

<div className='adm'>
<h1>Bem-vindo, administrador</h1>
</div>
            <div className='login-adm'>
              
                <div className='login'>
<h1>LOGIN</h1>


<hr/>
                    <div className='login-inputs'>
                        <div className='login-inputs-email'>
                            <label>EMAIL</label>
                        <input type="email" placeholder='Digite aqui o seu email' />
                        </div>
                       <div className='login-inputs-senha'>
                       <label>SENHA</label>
                       <input type="password" placeholder='Digite aqui a sua senha' />
                       </div>
                  
                    </div>
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    )
}