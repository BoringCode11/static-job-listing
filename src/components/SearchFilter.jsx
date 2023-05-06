import close from '../assets/images/icon-remove.svg';

function SearchFilter({ tags, onSubmit, value, onChange, onRemove, onClear }) {
  return (
    <div className="search-filter">
      {!tags.length
        ?
        <p className='notags'>no tags</p>
        : tags.map((tag) => (
          <div key={tag} className='filters'>
            <span className='filter-tag'>
              <span>
                {tag}
              </span>
              <img
                src={close}
                className="remove"
                onClick={() => onRemove(tag)}
              />
            </span>
          </div>
        ))}

      <span className="clear" onClick={onClear}>
        Clear
      </span>
    </div>
  );
}

export default SearchFilter;