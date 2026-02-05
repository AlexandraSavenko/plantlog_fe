import React, { useMemo, useState } from "react";
import css from "./SearchByNameInput.module.css";
import { useDebounce } from "use-debounce";
import { useSelector } from "react-redux";
import { selectAllPlantList } from "../../../../redux/plants/selectors";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { setPlantNameQuery } from "../../../../redux/filters/slice";

const SearchByNameInput = () => {
  const dispatch = useAppDispatch();
  const plantList = useSelector(selectAllPlantList);
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceValue] = useDebounce(searchQuery, 1000);
  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const filtered = useMemo(
    () =>
      plantList.filter((el) =>
        el.name.toLowerCase().startsWith(debounceValue.toLowerCase()),
      ),
    [plantList, debounceValue],
  );

  const handleUserChoise = (id: string) => {
    dispatch(setPlantNameQuery(id));
  };
  return (
    <div>
      <label htmlFor="search">Find a plant by name</label>
      <input
        id="search"
        name="id"
        onChange={handleInputSearch}
        type="text"
        placeholder="Plant name..."
      />
      {searchQuery && (
        <ul>
          {filtered.map((el) => (
            <li onClick={() => handleUserChoise(el._id)} key={el._id}>
              {el.name}
            </li>
          ))}
        </ul>
      )}
      {filtered.length === 0 && <span>Sorry, nothing...</span>}
    </div>
  );
};

export default SearchByNameInput;
