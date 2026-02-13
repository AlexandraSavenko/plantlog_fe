import React, { useMemo, useState } from "react";
import css from "./SearchByNameInput.module.css";
import { useDebounce } from "use-debounce";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { setPlantNameQuery } from "../../../../redux/filters/slice";
import { selectPlants } from "../../../../redux/plants/selectors";

const SearchByNameInput = () => {
  const dispatch = useAppDispatch();
  const plantList = useSelector(selectPlants("all"));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlant, setSelectedPlant] = useState("");
  const [debounceValue] = useDebounce(searchQuery, 1000);
  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredUnique = useMemo(() => {
    const lowerCaseQuery = debounceValue.toLowerCase();
    return Array.from(
      new Map(
        plantList
          .filter((el) => el.name.toLowerCase().startsWith(lowerCaseQuery))
          .map((el) => [el.name.toLowerCase(), el]),
      ).values(),
    );
  }, [plantList, debounceValue]);

  const handleUserChoise = (query: string) => {
    // dispatch(setPlantNameQuery(id));
    setSearchQuery(query);
    setSelectedPlant(query);
    console.log(searchQuery);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && selectedPlant) {
      event.preventDefault();
      dispatch(setPlantNameQuery(selectedPlant));
      setSearchQuery("")
      setSelectedPlant("");
    }
  };
  return (
    <>
      <label htmlFor="search">Find a plant by name</label>
      <input
        id="search"
        value={searchQuery}
        name="name"
        onChange={handleInputSearch}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Plant name..."
      />
      {searchQuery && (
        <ul>
          {filteredUnique.map((el) => (
            <li
              className={css.li}
              onClick={() => handleUserChoise(el.name)}
              key={el._id}
            >
              {el.name}
            </li>
          ))}
        </ul>
      )}
      {filteredUnique.length === 0 && <span>Sorry, nothing...</span>}
    </>
  );
};

export default SearchByNameInput;
