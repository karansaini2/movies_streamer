const SearchBox = (props) => {
  return (
    <div className="hover: scale-105">
      <input
        type="text"
        className="form-control w-80 text-center h-9 rounded-md outline-0 border-2 border-slate-900  "
        placeholder="Type to search"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
