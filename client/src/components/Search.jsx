const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Lookup your Car !"
        onChange={props.onChange}
      ></input>
      <button type="submit">GO!</button>
    </form>
  )
}

export default Search
