import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker, { registerLocale } from 'react-datepicker';
import th from 'date-fns/locale/th';
registerLocale('th', th);

import { fetchProductAdd, fetchProducts } from "../stores/actions";

import "react-datepicker/dist/react-datepicker.css";

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
      console.log(">>> Updated ", addProduct);
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
    console.log(">>> ", data);
    dispatch(fetchProductAdd(data));
  };

  return (
    <div className="row">
      <div className="col">
        <label>Product name</label>
        <input
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
          placeholder="Product name"
        />
      </div>
      <div className="col">
        <label>Expire date</label>
        <DatePicker
          selected={data.expire}
          onChange={date => setData({ ...data, expire: date })}
          locale="th"
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="Pp"
        />
        {/* <input
          value={data.expire}
          onChange={(e) => setData({ ...data, expire: e.target.value })}
          type="text"
          placeholder="Product name"
        /> */}
      </div>
      <div className="col">
        <label>Price</label>
        <input
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          type="number"
          placeholder="Price"
        />
      </div>
      <div className="col">
        <label>Photos url</label>
        <input
          value={data.photos}
          onChange={(e) => setData({ ...data, photos: e.target.value })}
          type="text"
          placeholder="Ex: https://xxx.x"
        />
      </div>
      <div className="col">
        <label>Description</label>
        <input
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          type="text"
          placeholder="Description"
        />
      </div>
      <div className="col">
        <button onClick={() => onSubmit()}>Add product</button>
      </div>
    </div>
  );
};
