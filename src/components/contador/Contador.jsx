import React from "react";

import { connect } from "react-redux";
import CounterActions from '../../actions/index'
//import { useSelector, useDispatch } from "react-redux";

const Contador = ({ counter, incrementarContador, decrementarContador }) => (
  <header>
    <div>{counter.count}</div>
    <button onClick={()=>incrementarContador()} >Incrementar</button>
    <button onClick={()=>decrementarContador()} >Decrementar</button>
  </header>
)

const mapStateToProps = ({counter}) => ({
  counter,
})

const mapDispatchToProps = () => ({
  ...CounterActions,
})


export default connect(mapStateToProps,mapDispatchToProps())(Contador);
