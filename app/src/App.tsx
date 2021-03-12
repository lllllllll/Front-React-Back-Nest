import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDel, fetchProducts, fetchUsers } from "./stores/actions";
import { AddProduct, Loading, Table } from "./components";

import "./scss/app.scss";

function App() {
  const dispatch = useDispatch();
  const {
    users,
    products,
    delProduct,
  } = useSelector(({ getUsers, getProducts, delProduct }: any) => ({
    users: getUsers.data,
    products: getProducts.data,
    delProduct: delProduct.data,
  }));
  const initData = async () => {
    if (!users) dispatch(fetchUsers())
    if (!products) dispatch(fetchProducts())
    if (delProduct) dispatch(fetchProducts())
  }

  useEffect(() => {
    initData()
  }, []);

  const onDelete = (id: string) => {
    dispatch(fetchProductDel(id));
  };

  const columnsProduct = [
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Photos",
      accessor: "photos",
    },
  ];
  const columnsProductPAction = columnsProduct.slice(0);
  columnsProductPAction.push({
    id: "actions",
    accessor: "_id",
    Cell: ({ value }: { value: any }) => (
      <a onClick={() => onDelete(value)}>Delete</a>
    ),
  } as any);

  return (
    <div className="App">
      <div className="container">
        <AddProduct />
        <Table columns={columnsProductPAction as any} data={products} />
      </div>
      <Loading />
    </div>
  );
}

export default App;
