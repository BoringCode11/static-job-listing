import close from '../assets/images/icon-remove.svg';

function SearchFilter({ tags, onRemove, onClear }) {
  return (
    <>
      {!tags.length ? <></> : <div className="search-filter">
        {tags.map((tag) => (
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
      </div>}
    </>
  );
}

export default SearchFilter;