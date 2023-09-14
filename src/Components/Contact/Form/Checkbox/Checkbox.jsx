import React from 'react'

export default function Checkbox() {
    return (
        <div className="form__checkbox">
            <input type="checkbox" name="checkbox" className="form__check check--checked" required/>
            <label htmlFor="checkbox" className="form__label">Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas
                informações pelo SP Labs</label>
        </div>
    )
}
