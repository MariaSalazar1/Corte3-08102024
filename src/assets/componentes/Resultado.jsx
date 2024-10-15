import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({operacion,calculo}) => {
  return (
    <>
    <span style={{padding: 10, flex: 1}}>
        {operacion}:{calculo}
    </span>
    </>
  )
}

Resultado.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Resultado