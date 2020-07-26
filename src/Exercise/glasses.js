import React, { Component } from "react";

class Glasses extends Component {
  render() {
    let { product, changeGlasses } = this.props;
    return (
      <div style={{ padding: "30px 10px" }} className="col-sm-4">
        <img
          style={{ cursor: "pointer" }}
          className="img-fluid"
          src={product.url}
          alt={product.id}
          onClick={() => {
            changeGlasses(product);
          }}
        />
      </div>
    );
  }
}

export default Glasses;
