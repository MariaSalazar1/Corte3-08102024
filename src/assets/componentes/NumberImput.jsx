import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { operaciones } from '../helpers/operaciones';
import Resultado from './Resultado';

const NumberImput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    });

    const { handleChange, suma, resta, multiplicacion, division, numero1, numero2 } = operaciones(numeros, setNumeros);

    return (
        <>
            <h3>NumberImput</h3>
            <label htmlFor="numero1">Número 1: </label>
            <input name='numero1' value={numero1} onChange={handleChange} type="number" />
            <br />
            <label htmlFor="numero2">Número 2: </label>
            <input name='numero2' value={numero2} onChange={handleChange} type="number" />
            <br />
            
            <Resultado operacion="Suma" calculo={suma()} />
            <Resultado operacion="Resta" calculo={resta()} />
            <Resultado operacion="Multiplicación" calculo={multiplicacion()} />
            <Resultado operacion="División" calculo={division()} />
        </>
    );
};

NumberImput.propTypes = {
    name: PropTypes.string
};

export default NumberImput;
