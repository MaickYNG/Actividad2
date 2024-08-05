function SearchBar ({setQuery }){

return(
    <div className="from-group">
        <input className="from-control" placeholder="Search.."
        onChange={(e)=>setQuery(e.target.value.toLowerCase())}
        />
    </div>
)

}
export default SearchBar