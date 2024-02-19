import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortBy } from "../store/slice/formSlice";

const SortDropDown = () => {
  const dispatcher = useDispatch();
  const { sortBy } = useSelector((state) => state.form);

  const handleChange = (e) => {
    dispatcher(changeSortBy(e.target.value));
  }

  return (
    <div className="col-4">
      <select id="lang" onChange={handleChange} value={sortBy}>
        <option value="asc">Asecending</option>
        <option value="desc">Decending</option>
      </select>
    </div>
  );
};

export default SortDropDown;
