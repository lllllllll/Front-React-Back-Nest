import React from "react"

export default () => {
  return <div className="row">
  <div className="col">
    <label>Product name</label>
    <input type="text" placeholder="Product name"/>
  </div>
  <div className="col">
    <label>Price</label>
    <input type="number" placeholder="Price"/>
  </div>
  <div className="col">
    <label>Photos url</label>
    <input type="text" placeholder="Ex: https://xxx.x"/>
  </div>
  <div className="col">
    <label>Description</label>
    <input type="text" placeholder="Description"/>
  </div>
</div>
}