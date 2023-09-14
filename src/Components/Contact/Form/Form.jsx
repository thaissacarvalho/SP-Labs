import React, { useState, useEffect } from 'react';
import Input from './Input/Input';
import Select from './Select/Select';
import Checkbox from './Checkbox/Checkbox';
import API from "../../../settings/API";
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [segment, setSegment] = useState("");
    const [message, setMessage] = useState("");
    const [accept, setAccept] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
    if (name.length === 0) {
      setMessage("Nome é obrigatório");
    } else {
      setMessage("");
    }

    if (!email.includes("@")) {
      setMessage("E-mail inválido");
    } else {
      setMessage("");
    }

    if (segment === "") {
      setMessage("O seguimento é obrigatório");
    } else {
      setMessage("");
    }
  }, [name, email, segment, message, accept]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            "name": name,
        }

        API.post("/api/contact", body, {
            headers: { auth: token }
        })
            .then((response) => console.log("Requisição enviada com sucesso.", response))
            .catch(() => console.log("Já tem dado sendo processado, aguarde."));

        navigate("/send-contact", {
            state: {
                name,
                email, 
                segment, 
                message,
                accept
            }
        });
    };

    return (
        <div className="form">
            <form className="form__container" onSubmit={handleSubmit}>
                <Input type="text" placeholder="Seu nome"
                    onChange={(e) => setName(e.target.value)}
                />

                <Input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)}/>

                <Select onChange={(e) => setSegment(e.target.value)}/>

                <textarea className="form__textarea box--change"
                    placeholder='Fale um pouco sobre o seu negócio'
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Checkbox onChange={(e) => setAccept(e.target.value)}/>
                <button className="form__button button--change" type="submit">ENVIAR</button>
            </form>
        </div>
    )
}