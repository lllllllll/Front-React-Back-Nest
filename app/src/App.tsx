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
  const sub_columns = columnsProduct.slice(0);
  sub_columns.push({
    id: "actions",
    accessor: "_id",
    Cell: ({ value }) => <>
      <a
        onClick={() => {
          console.log("Edit", value);
        }}
      >
        Edit
      </a>
      <a
        onClick={() => {
          console.log("Delete", value);
        }}
      >
        Delete
      </a>
    </>
  });

  return (
    <div className="App">
      <AddProduct />
      <Table columns={sub_columns} data={getProducts} />
    </div>
  );
}

export default App;
