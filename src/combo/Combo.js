import React , { Component } from 'react';

class Combo  extends Component {
    
    render(){

        let opciones = this.props.categorias.map( (e, i) => 
                        <option value={ i }
                                key={"key_" + e.id}>{e.title}</option>);
        
        return (
            <select 
                onChange={this.props.handleChange} 
                className="form-control">
                <option value="empty">Selecionar</option>
                {opciones}
                
            </select>
        )
    }
}

export default Combo;