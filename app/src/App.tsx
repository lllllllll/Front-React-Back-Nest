import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchUsers } from "./stores/actions";
import { AddProduct, Table } from "./components";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(({ getUsers }: any) => getUsers.data);
  const getProducts = useSelector(({ getProducts }: any) => getProducts.data);

  useEffect(() => {
    if (!users) {
      console.log(1);
      dispatch(fetchUsers());
    }
  }, [users]);
  useEffect(() => {
    if (!getProducts) {
      console.log(2);
      dispatch(fetchProducts());
    }
  }, [getProducts]);

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

  return (
    <div className="App">
      <AddProduct />
      {/* <Table columns={columnsProduct} data={getProducts} /> */}
    </div>
  );
}

export default App;
