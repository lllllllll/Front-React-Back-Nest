import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDel, fetchProducts, fetchUsers } from "./stores/actions";
import { AddProduct, Loading, Table } from "./components";

import './scss/app.scss';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(({ getUsers }: any) => getUsers.data);
  const getProducts = useSelector(({ getProducts }: any) => getProducts.data);
  const delProduct = useSelector(({ delProduct }: any) => delProduct.data);

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers());
    }
  }, [users]);
  useEffect(() => {
    if (!getProducts) {
      dispatch(fetchProducts());
    }
  }, [getProducts]);

  useEffect(() => {
    if (delProduct) {
      dispatch(fetchProducts());
    }
  }, [delProduct]);

  const onDelete = (id: string) => {
    dispatch(fetchProductDel(id));
  };

  const columnsProduct = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Photos',
      accessor: 'photos',
    },
  ];
  const columnsProductPAction = columnsProduct.slice(0);
  columnsProductPAction.push({
    id: "actions",
    accessor: "_id",
    Cell: ({value}: {value: any}) =>
      <a onClick={() => onDelete(value)} >Delete</a>
  } as any);

  return (
    <div className="App">
      <div className="container">
        <AddProduct />
        <Table columns={columnsProductPAction as any} data={getProducts} />
      </div>
      <Loading />
    </div>
  );
}

export default App;
