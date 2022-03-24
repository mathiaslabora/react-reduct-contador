import React from "react";
import { aumentar, disminuir } from "../../actions";
import { connect } from "react-redux";
import reducers from "../../reducers";

const mapStateToProps  = (state) =>{
    return{
        contador: state.contador.contador,
    }
}


const Contador = (aumentar, disminuir, contador) => {
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => aumentar()}>Aumenta en 1</button>
      <button onClick={() => disminuir()}>Disminuye en 1</button>
    </>
  );
};

export default connect(mapStateToProps(),{aumentar, disminuir})(Contador(aumentar, disminuir, mapStateToProps(reducers)));
