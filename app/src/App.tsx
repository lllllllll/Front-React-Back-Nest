import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDel, fetchProducts, fetchUsers } from "./stores/actions";
import { AddProduct, Loading, Table } from "./components";

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
      console.log(">>> Deleted ", delProduct);
      dispatch(fetchProducts());
    }
  }, [delProduct]);

  const onDelete = (id: string) => {
    console.log("Delete id >> ", id);
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
  const sub_columns = columnsProduct.slice(0);
  sub_columns.push({
    id: "actions",
    accessor: "_id",
    Cell: ({value}) => <>
      <a
        onClick={() => {
          console.log("Edit", value);
        }}
      >
        Edit
      </a>
      {` | `}
      <a onClick={() => onDelete(value)} >Delete</a>
    </>
  });

  return (
    <div className="App">
      <Loading />
      <AddProduct />
      <Table columns={sub_columns} data={getProducts} />
    </div>
  );
}

export default App;
