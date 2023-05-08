import React, { Component } from "react";
import AppURL from "../../api/AppUrl";
import axios from "axios";

export default class MegaMenuAll extends Component {
  constructor(){
    super();

    this.state = {
      MenuData: []
    }
  }

  componentDidMount(){
    axios.get(AppURL.AllCategoryDetails).then(response => { 
      this.setState({
        MenuData: response.data
      });
    }).catch();
  }

  MenuItemClick = (event) => {
    event.target.classList.toggle("active");

    const panel = event.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  }

  render() {
    const CatList = this.state.MenuData;

    const MyView = CatList.map((CatList, i) => {
      return (
        <div key={i.toString()}>
          <button onClick={this.MenuItemClick} className="accordionAll">
            <img className="accordionMenuIconAll" src={CatList.category_image} alt="" />&nbsp;{CatList.category_name}
          </button>
          <div className="panelAll">
            <ul>
              {
                (CatList.subcategory_name).map((SubList, i)=>{
                  return (
                    <li key={i.toString()}>
                      <a href="/" className="accordionItemAll">{SubList.subcategory_name}</a>
                    </li>
                  )
                })    
              }
            </ul>
          </div> 
        </div>)
      }
    );

    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          {MyView}
        </div>
      </div>
    )
  }
}
