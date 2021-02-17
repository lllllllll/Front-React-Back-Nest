import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";
registerLocale("th", th);

import { fetchProductAdd, fetchProducts } from "../stores/actions";

import "react-datepicker/dist/react-datepicker.css";
import "../scss/addProduct.scss";

export default () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    expire: new Date(),
    price: "",
    photos: "",
    description: "",
  });
  const addProduct = useSelector(({ addProduct }: any) => addProduct.data);

  useEffect(() => {
    if (addProduct) {
      dispatch(fetchProducts());
      setData({
        title: "",
        expire: new Date(),
        price: "",
        photos: "",
        description: "",
      });
    }
  }, [addProduct]);

  const onSubmit = () => {
    dispatch(fetchProductAdd(data));
  };

  return (
    <div className="Add-product">
      <p className="title">Add Product</p>
      <div className="row">
        <div className="col form-control">
          <label>Product name</label>
          <input
            className="w100"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            type="text"
            placeholder="Product name"
          />
        </div>
        <div className="col form-control">
          <label>Expire date</label>
          <DatePicker
            selected={data.expire}
            onChange={(date) => setData({ ...data, expire: date })}
            locale="th"
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="Pp"
          />
        </div>
        <div className="col form-control">
          <label>Price</label>
          <input
            className="w100"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="col form-control">
          <label>Photos url</label>
          <input
            className="w100"
            value={data.photos}
            onChange={(e) => setData({ ...data, photos: e.target.value })}
            type="text"
            placeholder="Ex: https://xxx.x"
          />
        </div>
      </div>
      <div className="row">
        <div className="col form-control">
          <label>Description</label>
          <textarea
            className="w100"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Description"
          />
        </div>
      </div>
      <div className="row">
        <div className="col txt-right">
          <button className="primary" onClick={() => onSubmit()}>Save</button>
        </div>
      </div>
    </div>
  );
};
