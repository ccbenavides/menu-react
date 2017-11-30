import React , { Component } from 'react';

class List  extends Component {
    



    render(){
        let paginas = this.props.paginas.map(e => 
                        <tr key={'clave_' + e.id_pagina }>
                            <td> 
                                <span className="textMayus">{e.title} </span>
                                <br/>  
                                <span className="text-muted">{e.uri_slug}</span>
                            </td> 
                            <td className="menu-td-right"> <input 
                                type="checkbox" 
                                onChange={this.props.onChange}
                                value={e.id_pagina}
                                checked={ !e.state }></input> 
                            </td> 
                        </tr>);
        
        return (
            <table className="table table-hover manage-u-table">
                <thead></thead>
                <tbody>
                    {paginas}
                </tbody>
                
            </table>
        )
    }
}

export default List;