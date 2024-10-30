"use client";

import React, { useState } from "react";

const Transform = () => {
    const [entrada, setEntrada] = useState(false);
    const [saida, setSaida] = useState(false);
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("Fixos"); // Default to "Fixos"
    const [transacoes, setTransacoes] = useState([]);

    const handleEntradaChange = () => {
        setEntrada(!entrada);
        if (!entrada) {
            setSaida(false);
        }
    };

    const handleSaidaChange = () => {
        setSaida(!saida);
        if (!saida) {
            setEntrada(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const novaTransacao = {
            descricao,
            valor: parseFloat(valor),
            tipo: entrada ? "Entrada" : "Saída",
            categoria,
        };

        // Adiciona a nova transação à lista
        setTransacoes([...transacoes, novaTransacao]);

        // Limpa os campos do formulário
        setDescricao("");
        setValor("");
        setEntrada(false);
        setSaida(false);
        setCategoria("Fixos"); // Reset category to default
    };

    const handleDelete = (index) => {
        const novasTransacoes = transacoes.filter((_, i) => i !== index);
        setTransacoes(novasTransacoes);
    };

    return (
        <div className="m-10 max-w-full bg-[#ffffff] border-radius-md shadow-sm">
            <form onSubmit={handleSubmit} className="flex items-center gap-4 p-4">
                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className="outline-none px-4 py-2 border border-gray-300 rounded-md flex-1"
                    required
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    className="outline-none px-4 py-2 border border-gray-300 rounded-md flex-1"
                    required
                />
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2"
                >
                    <option value="Fixos">Fixos</option>
                    <option value="Investimentos">Investimentos</option>
                    <option value="Lazer">Lazer</option>
                </select>
                <label className="flex items-center gap-2">
                    Entrada
                    <input
                        type="checkbox"
                        onChange={handleEntradaChange}
                        checked={entrada}
                    />
                </label>
                <label className="flex items-center gap-2">
                    Saída
                    <input
                        type="checkbox"
                        onChange={handleSaidaChange}
                        checked={saida}
                    />
                </label>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Adicionar
                </button>
            </form>

            {/* Lista de Transações */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Transações:</h2>
                <ul className="list-disc pl-5">
                    {transacoes.map((transacao, index) => (
                        <li key={index} className={`my-2 flex justify-between items-center ${transacao.tipo === 'Entrada' ? 'text-green-600' : 'text-red-600'}`}>
                            <span>
                                {transacao.tipo === 'Entrada' ? '+' : '-'} R$ {transacao.valor.toFixed(2)} - {transacao.descricao} (Categoria: {transacao.categoria})
                            </span>
                            <button onClick={() => handleDelete(index)} className="ml-4 text-red-600 hover:text-red-800">
                                <img src="/trash.svg" alt="Deletar" className="w-6 h-6" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Transform;
