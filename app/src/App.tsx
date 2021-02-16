import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./stores/actions";
import { Table } from "./components";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(({ getUser }: any) => getUser.data);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user]);

  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
