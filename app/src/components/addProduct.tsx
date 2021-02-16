import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAdd } from "../stores/actions";

export default () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    title: '',
    price: '',
    photos: '',
    description: '',
  })
  const addUsers = useSelector(({ addUsers }: any) => addUsers.data)

  useEffect(() => {
    if (addUsers) console.log('>>> Updated ', addUsers);
  }, [addUsers]);

  const onSubmit = () => {
    console.log('>>> ', data);
    dispatch(fetchProductAdd(data));
  }
  
  return <div className="row">
  <div className="col">
    <label>Product name</label>
    <input value={data.title} onChange={e => setData({...data, title: e.target.value })} type="text" placeholder="Product name"/>
  </div>
  <div className="col">
    <label>Price</label>
    <input value={data.price} onChange={e => setData({...data, price: e.target.value })} type="number" placeholder="Price"/>
  </div>
  <div className="col">
    <label>Photos url</label>
    <input value={data.photos} onChange={e => setData({...data, photos: e.target.value })} type="text" placeholder="Ex: https://xxx.x"/>
  </div>
  <div className="col">
    <label>Description</label>
    <input value={data.description} onChange={e => setData({...data, description: e.target.value })} type="text" placeholder="Description"/>
  </div>
  <div className="col">
    <button onClick={() => onSubmit()}>Add product</button>
  </div>
</div>
}