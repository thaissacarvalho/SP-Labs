import React from 'react';

export default function Select({onChange}) {
  return (
   <select name="option" defaultValue="Seu segmento" className="form__select box--change" onChange={onChange} required>
    <option value="Seu segmento">Seu segmento</option>
    <option value="Juridico">Juridico</option>
    <option value="Saúde">Saúde</option>
    <option value="Tecnologia">Tecnologia</option>
    <option value="Outros">Outros</option>
   </select>
  )
}
