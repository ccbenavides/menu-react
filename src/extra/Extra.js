import React , { Component } from 'react';

class Extra extends Component {
    
    render(){

       
        
        return (
            <form id="formExterna"   onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <input className="form-control" 
                            name="name_externa"
                            id="nameExterna"/>
                </div>
                <div className="form-group">
                    <input className="form-control" 
                            name="url_externa"
                            id="urlExterna"/>
                </div>
                <div className="form-group">
                    <input type="submit" 
                            className="btn btn-default" 
                          
                            value="Agregar" />
                </div>
            </form>
            
        )
    }
}

export default Extra