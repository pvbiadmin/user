import React, { Component } from "react";

export default class MegaMenuMobile extends Component {
  constructor() {
    super();

    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    const acc = document.getElementsByClassName("accordionMobile");
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
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          <button className="accordionMobile">
            {/* {'<img className="accordionMenuIconMobile" src="" alt="">'} */}
            <i className="fa fa-tshirt ml-2"></i> Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li><a href="/" className="accordionItemMobile">Men's T-Shirt 1</a></li>
              <li><a href="/" className="accordionItemMobile">Men's T-Shirt 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
