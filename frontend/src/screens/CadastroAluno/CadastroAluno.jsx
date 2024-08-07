import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const CadastroAluno = () => {
  const [aluno, setAluno] = useState({
    username: "",
    email: "",
    cpf: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...aluno, type: "aluno" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          navigate("/tela-login-aluno"); // Redirecionar para a página de login
          console.log("Sucesso ao cadastrar aluno.");
        } else {
          console.log("Erro ao cadastrar aluno, tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao cadastrar aluno:", error);
        alert("Erro ao cadastrar aluno.");
      });
  };

  return (
    <div className="cadastro-unificado">
      <div className="div-7">
        <div className="items-12">
          <div className="text-wrapper-21">Sair</div>
        </div>
        <div className="overlap-2">
          <Link className="items-13" to="/inicial-mesmo">
            <div className="text-wrapper-21">Voltar</div>
          </Link>
        </div>
        <div className="overlap-group-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Nome"
              onChange={handleChange}
              className="input-7"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              onChange={handleChange}
              className="input-5"
            />
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              onChange={handleChange}
              className="input-5"
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              onChange={handleChange}
              className="input-6"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="input-8"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleChange}
              className="input-9"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirma Senha"
              onChange={handleChange}
              className="input-9"
            />
            <button type="submit" className="entrar-wrapper">
              <div className="entrar">Continuar</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
