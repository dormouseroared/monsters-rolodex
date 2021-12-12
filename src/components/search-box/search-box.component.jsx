import "./search-box.styles.css"

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)



// () used instead of {} in function because return is implied
// and we just want to group it
