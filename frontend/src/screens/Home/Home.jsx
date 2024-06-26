import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Home = () => {
  return (
    <div className="inicial-mesmo">
      <div className="div-6">
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="frame-2" />
          </div>
          <img className="image-3" alt="Image" src="/img/image-4.png" />
        </div>
        <div className="items-11">
          <div className="text-wrapper-18">Sair</div>
        </div>
        <div className="overlap-group-3">
          <Link className="aluno-wrapper" to="/tela-home-aluno">
            <div className="aluno">Aluno</div>
          </Link>
          <div className="text-wrapper-19">Bem-vindo ao BeachBuddy</div>
        </div>
        <Link className="boton-3" to="/tela-home-treinador">
          <div className="text-wrapper-20">Treinador</div>
        </Link>
        <Link className="criar-ct-wrapper" to="/tela-home-gerente">
          <div className="criar-ct">Meu CT</div>
        </Link>
      </div>
    </div>
  );
};
