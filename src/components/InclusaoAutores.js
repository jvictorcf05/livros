//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
//form onSubmit={handleSubmit(salvar)}
const InclusaoAutores = () => {
    const { register, handleSubmit } = useForm();
    const [aviso, setAviso] = useState("");
    //método chamado ao enviar form onSubmit
    const salvar = async (campos) => {
        try {
            const response = await api.post("autores", campos);
            setAviso("Autor cadastrado com sucesso!")
        } catch (error) {
            setAviso("Erro ao cadastrar Autor!");
        }


        //JSON.stringify() converte um objeto javascript para uma String JSON 
        //alert(JSON.stringify(campos));
        //lá no html puro usavamos titulo.value para pegar valor
    }
    //aqui é o que vai ser exibido em tela
    //nome, sobrenome, idade, data_nascimento, sexo, telefone
    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Autores</h4>
            <form onSubmit={handleSubmit(salvar)}>

                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" id="nome"
                        required autoFocus {...register("nome")} />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" className="form-control" id="sobrenome"
                        required {...register("sobrenome")} />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="idade">Idade:</label>
                    <input type="number" className="form-control" id="idade"
                        required {...register("idade")} />
                </div>

                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="data_nascimento">data_nascimento</label>
                            <input type="date" className="form-control"
                                id="data_nascimento" required {...register("data_nascimento")}></input>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="sexo">Sexo</label>
                            <input type="text" className="form-control"
                                id="sexo" required {...register("sexo")}></input>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="number" className="form-control"
                                id="telefone" required {...register("telefone")}></input>
                        </div>
                    </div>
                </div>


                <input type="submit" className="btn btn-primary mt-3"
                    value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3 ms-3"
                    value="Limpar" />
            </form>
            <div className="alert"></div>
        </div>
    )
}

export default InclusaoAutores;