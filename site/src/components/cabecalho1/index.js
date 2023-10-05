
import './index.scss';

export default function Cabecalho1() {
  return (
    <div className="cabecalho1">

        <div className='esquerda'>


            <img src="/assets/images/pauxinhos.png" alt="" />

            <h2>ATELIÊ RÉGIA</h2>

        </div>


        <div className='direita'>


            <img className="img1" src="/assets/images/lups.png" alt="" />

            <h3><a href="/login/cliente">LOGIN</a></h3>

            <img className="img2" src="/assets/images/sacs.png" alt="" />

        </div>

    </div>
  );
}
