import './index.scss';

export default function Produto() {

    return (
        <div className="container-produtos">
            <div className="secao-container-ordem">
                <div className="faixa-ordem">
                    <p>15 PRODUTOS</p>
                    <div className="secao-ordem">
                        <p>ORDENAR POR </p>
                        <div className="images">
                            <img src="/assets/images/Arrow 1.png" alt="" />
                            <img src="/assets/images/Arrow 2.png" alt="" />
                            <img src="" alt="" />
                        </div>

                    </div>
                </div>

                <div className="secao-container-produtos">
                    <div class="secao-container-filtros">

                        <h6> <strong>FILTROS</strong></h6>
                        <div class="secoes">
                            <h6> <strong>CATEGORIAS</strong> </h6>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div><a>Blusas</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div> <a>Calças</a>

                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div><a>Shorts</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div> <a>Vestidos</a>
                            </div>
                        </div>



                        <div class="secoes">
                            <h5><strong> PREÇO</strong></h5>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>Entre 50-100</a>
                            </div>

                        </div>
                        <div class="secoes">
                            <h6><strong> TAMANHO</strong></h6>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>P</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>M</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>G</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>GG</a>
                            </div>
                        </div>
                        <div class="secoes">
                            <h6><strong>TECIDO</strong> </h6>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>Algodão Orgânico</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>

                                <a>Tricô</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>Seda</a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a>Linho</a>
                            </div>




                        </div>

                        <div class="secoes">
                            <h6><strong>COR</strong> </h6>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a> <a>Erva-mate</a></a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a> <a>Madeira</a></a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a> <a>Off-white</a></a>
                            </div>
                            <div class="secoes-quadrado">
                                <div class="quadrado"></div>
                                <a><a>cobre</a></a>
                            </div>




                        </div>
                    </div>

                    <hr />

                    <div className="secao-produto">
                        <div className="produtos">

                            
                            <div class="produto">
                                <img src="/assets/images/image 49.png" alt="" />
                                <h3 id="fixado">COMPRAR</h3>
                                <h1> SHORT LINHO</h1>
                                <p> Short de Linho Off-White</p>
                                <p> POR <strong> R$ 110,00</strong></p>
                            </div>
                            <div class="produto">
                            <img src="/assets/images/image 49.png" alt="" />
                                <h3 id="fixado">COMPRAR</h3>
                                <h1> SHORT LINHO</h1>
                                <p> Short de Linho Off-White</p>
                                <p> POR <strong> R$ 110,00</strong></p>
                            </div>
                            
                            <div class="produto">
                            <img src="/assets/images/image 49.png" alt="" />
                                <h3 id="fixado">COMPRAR</h3>
                                <h1> SHORT LINHO</h1>
                                <p> Short de Linho Off-White</p>
                                <p> POR <strong> R$ 110,00</strong></p>
                            </div>
                            <div class="produto">
                            <img src="/assets/images/image 49.png" alt="" />
                                <h3 id="fixado">COMPRAR</h3>
                                <h1> SHORT LINHO</h1>
                                <p> Short de Linho Off-White</p>
                                <p> POR <strong> R$ 110,00</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

}