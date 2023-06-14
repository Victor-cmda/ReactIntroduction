import React from "react";
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import './App.css'
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TableProdutos from "./components/repeticao/TableProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

export default _ =>
    <div className="App">
        <h1>Fundamentos</h1>
        <div className="Cards">
            <Card titulo="#10 - Comunicação Indireta" color="#14213d">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#ffc8dd">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Componente Condicional" color="#e07a5f">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
            </Card>

            <Card titulo="#07 - Componente Lista Produtos" color="#D03636">
                <TableProdutos />
            </Card>

            <Card titulo="#06 - Componente Lista Alunos" color="#3E442B">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#8D909B">
                <Familia sobrenome="Somavilla">
                    <FamiliaMembro nome="Victor"></FamiliaMembro>
                    <FamiliaMembro nome="Gisela"></FamiliaMembro>
                    <FamiliaMembro nome="Ygor"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Exemplo de Número Aleatório" color="#26547C">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#03 - Exemplo de Fragmento" color="#EF476F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Exemplo Com Parâmetro" color="#FFD166">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!"
                    aluno="Victor Hugo Somavilla"
                    nota={10}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#06D6A0">
                <Primeiro />
            </Card>
        </div>


    </div>

