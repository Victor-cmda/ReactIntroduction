import React from "react";
import produtos from "../../data/produtos";
import './TableProdutos.css'

export default props => {
    const listProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>R$ {produto.valor.toFixed(2).replace('.', '.')}</td>
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {listProdutos}
                </tbody>
            </table>
        </div>
    )
}