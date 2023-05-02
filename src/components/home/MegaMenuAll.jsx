import React, { Component } from "react";

export default class MegaMenuAll extends Component {
      constructor() {
        super();
    
        this.MegaMenu = this.MegaMenu.bind(this);
      }
    
      componentDidMount() {
        this.MegaMenu();
      }
    
      MegaMenu() {
        const acc = document.getElementsByClassName("accordionAll");
        const accNum = acc.length;
    
        for(let i = 0; i < accNum; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
    
            const panel = this.nextElementSibling;
    
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
      }
      
  render() {
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          <button className="accordionAll">
            {/* {'<img className="accordionMenuIconAll" src="" alt="">'} */}
            <i className="fa fa-tshirt ml-2"></i> Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li><a href="/" className="accordionItemAll">Men's T-Shirt 1</a></li>
              <li><a href="/" className="accordionItemAll">Men's T-Shirt 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
