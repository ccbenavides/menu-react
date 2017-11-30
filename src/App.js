import React, { Component } from 'react';
import Combo from './combo/Combo';
import List from './list/List';
import Tree from './tree/Tree';



/**
 * 
 * 1. ojo en el listado siempre tiene que cargar el mismo
 * 2. el estado del orden del menu va ser muy abusado
 * 
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paginas : JSON.parse(this.props.menu).paginas,
      orden : 'empty',
      sortable : false,
      menu : [],
      item_seleccionado : ""
    };
  }



  handleChange = (e) => {
      let orden = e.target.value !== 'empty' ? JSON.parse(JSON.parse(this.props.menu).menu[e.target.value].orden) : 'empty';

      
      let datos = JSON.parse(this.props.menu).paginas.map(e => {
        let encontrado = this.foundObject(orden, e.id_pagina);
        e.state = encontrado !== undefined ? false : true;      
        return e;
      });
  
      this.setState({
        orden : orden,
        paginas: datos,
        item_seleccionado : JSON.parse(this.props.menu).menu[e.target.value].id
      });
  }

  handleClickNext = (e) => {
    e.preventDefault();
    if(this.state.orden === 'empty'){
      alert('seleccione un menu');
      return;
    }

    this.setState({
      sortable: true
    });


  };

  handleChangeCheckBox = (e) => {

    if(this.state.orden === 'empty'){
      alert('seleccione un menu');
      return;
    }
    // seleccionar va ser una accion
    // agregar un item nuevo en la variable orden
    // esto puede hacer con un add sin problemas

    var menu = this.state.orden;
    let datos = JSON.parse(this.props.menu).paginas.map(k => {
      if( parseInt(e.target.value) === k.id_pagina){
        // k.state = e.target.checked ? false : true;
        // var encontrado = this.foundObject(menu, k.id_pagina);
        //&& !encontrado 
        if(e.target.checked ){
          menu.push(k);
        }else{
          menu.forEach( (q, i) =>{
            this.clean(q, k.id_pagina);
            if(q.id_pagina === k.id_pagina){
              menu.splice(i, 1)
            }
          });
          
        }
      }
      let encontrado = this.foundObject(menu, k.id_pagina);
      k.state = encontrado !== undefined ? false : true;      
      return k;
      });

    
      this.setState({
        orden : menu,
        paginas : datos
      }); 
      


  };

  foundObject (subMenuItems, id) {
    if (subMenuItems) {
        for (var i = 0; i < subMenuItems.length; i++) {
            if ( parseInt(subMenuItems[i].id_pagina) === parseInt(id)) {
                return subMenuItems[i];
            }
            var found = this.foundObject(subMenuItems[i].children, id);
            if (found) {
                return found;
            }
        }
    }
  };

  foundPage (subMenuItems, id){
    if(subMenuItems){
      for (var i = 0; i < subMenuItems.length; i++) {
        if ( parseInt(subMenuItems[i].id_pagina) === parseInt(id)) 
          return subMenuItems[i];
      }
      return false
    }
  }



  clean =  (tree, id_nodo) => {
      if (tree.children) {
           tree.children = tree.children.filter(function(node) {
              return !(node.id_pagina === id_nodo);
            });
           tree.children.forEach(this.clean);
      }
  }

  onClickBack = (e) => {
    e.preventDefault();

    let datos = JSON.parse(this.props.menu).paginas.map(e => {
      let encontrado = this.foundObject([], e.id_pagina);
      e.state = encontrado !== undefined ? false : true;      
      return e;
    });

    this.setState({
      sortable : false,
      paginas : datos,
      orden : 'empty',
      
    })
  }

  onClickRegister = (e) => {
    
  }

  render() {
    return (
      <div className="container-fluid">
        <input type="hidden" name="id_menu" value={this.state.item_seleccionado} id="name_menu" />
        <input type="hidden" name="orden_menu" value="" id="orden_menu" />
        {!this.state.sortable ? 
        <div className="row">
          <div className="col-md-12">
            <h3  className="text-center"> Paso I</h3>
          </div>
          <br/>
          <div className="col-md-12">
              <Combo categorias={JSON.parse(this.props.menu).menu} 
                      handleChange={this.handleChange} 
                       />          
          </div>
          <br/>
          <div className="col-md-12">
              <List paginas={this.state.paginas} 
                    orden={this.state.orden} 
                    onChange={this.handleChangeCheckBox} />          
          </div>
          <div className="col-md-12 text-center">

            <button onClick={this.handleClickNext} 
                    className="btn btn-warning"> Ordenar</button>
          </div>
        </div>
        : 
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">Paso II</h3>
            <br/>
          </div>
          <div className="col-md-12">
            <Tree 
              arbol={this.state.orden}
              onClickBack={this.onClickBack}
              onClickRegister={this.onClickRegister}
              />
          </div>          
        </div>}
      </div>
    );
  }
}

export default App;
