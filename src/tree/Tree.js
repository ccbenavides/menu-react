import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: this.props.arbol,
    };
  }
 componentWillReceiveProps(nextProps){
   console.log(nextProps);
    /* this.setState({
      state : nextProps.arbol
    }); */
  } 
  cambios = (treeData)  => {
    this.setState({ treeData });
  }
  
  render() {
    document.getElementById("orden_menu").value = JSON.stringify(this.state.treeData);
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          maxDepth={2}
          expanded={true} 
          onChange={this.cambios}
        />
        <div className="text-center">
            <input type="button" 
                    className="btn btn-default" 
                    value="Regresar"
                    onClick={this.props.onClickBack}
                    style={{ marginRight : "20px" }}/>

            <input type="submit" 
                    className="btn btn-warning"
                    onClick={this.props.onClickRegister}
                    value="Registrar"/>

        </div>
      </div>
    );
  }
}