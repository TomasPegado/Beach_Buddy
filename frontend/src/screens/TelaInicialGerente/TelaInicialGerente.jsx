import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckboxGroup } from "../../components/CheckboxGroup"; // Certifique-se de que o caminho está correto
import { useAuth } from "../contexts/AuthContext";
import "./style.css";

export const TelaInicialGerente = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("useEffect chamado com user:", user); // Log para verificar o estado do user
    if (user) {
      console.log("Fetching data for user:", user); // Adicionar log
      fetch(`http://127.0.0.1:5000/api/userdata/${user}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar dados do usuário");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dados recebidos:", data); // Adicionar log
          setUserData(data);
        })
        .catch((error) =>
          console.error("Erro ao buscar dados do usuário:", error)
        );
    }
  }, [user]);

  return (
    <div className="tela-inicial-gerente">
      <div className="div-3">
        <div className="headline-2">
          <div className="text-wrapper-6">{user ? user : "Carregando..."}</div>
        </div>
        <div className="input-4">
          <div className="text-wrapper-7">CTs Gerenciados</div>
          <div className="checkbox-group-wrapper">
            <CheckboxGroup
              checkboxBasesCheckboxBasesIconWrapperColor="/public/img/color@2x.png"
              checkboxBasesCheckboxBasesIconWrapperColor1="/public/img/color@2x.png"
              checkboxBasesCheckboxBasesIconWrapperColorClassName="checkbox-group-7"
              checkboxBasesCheckboxBasesIconWrapperColorClassNameOverride="checkbox-group-9"
              checkboxBasesCheckboxBasesIconWrapperImg="/public/img/color@2x.png"
              checkboxBasesCheckboxBasesIconWrapperImgClassName="checkbox-group-5"
              checkboxHasDiv={false}
              checkboxStateDefaultLabelClassName="checkbox-group-8"
              checkboxStateDefaultLabelClassNameOverride="checkbox-group-8"
              checkboxStateFocusLabelClassName="checkbox-group-8"
              checkboxStateHoverLabelClassName="checkbox-group-8"
              checkboxStateHoverLabelClassNameOverride="checkbox-group-8"
              checkboxStateProp="disabled"
              checkboxText="Ct Rafa do Volei"
              checkboxText1="Ct do Pelé"
              checkboxText2="Futvolei Rio"
              checkboxVisible={false}
              className="checkbox-group-6"
              numberOfItems="five-items"
              to="/tela-pos-selecao"
            />
          </div>
        </div>
        <div className="text-wrapper-8">Página do Gerente</div>
        <div className="items-2" onClick={logout}>
          <div className="text-wrapper-9">Sair</div>
        </div>
        <Link className="items-3" to="/tela-login">
          <div className="text-wrapper-9">Sair</div>
        </Link>
        <img className="img" alt="Image" src="/public/img/image-2.png" />
      </div>
      {userData && (
        <div>
          {/* Renderizar dados do usuário */}
          <p>
            Nome: {userData.firstName} {userData.lastName}
          </p>
          <p>Email: {userData.email}</p>
          <p>CPF: {userData.cpf}</p>
          {/* Outros dados do usuário */}
        </div>
      )}
    </div>
  );
};
