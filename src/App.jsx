import { useReducer, useState } from 'react';
import { data } from './data';
import JobListing from './components/JobListing';
import SearchFilter from './components/SearchFilter';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "AddTag":
      return state.tags.includes(action.payload)
        ? { ...state } :
        {
          ...state,
          tags: [...state.tags, action.payload]
        }
    case "ClearTags":
      return {
        ...state,
        tags: []
      }
    case "RemoveTag":
      return {
        ...state,
        tags: [...state.tags].filter(tag => tag !== action.payload)
      }
  }
}

const initialState = { tags: [] }

function App() {
  const [jobs, setJobs] = useState(data);
  const [state, dispatch] = useReducer(reducer, initialState);
  const jobsCpy = [...data];

  function onFilter(tag) {
    dispatch({ type: "AddTag", payload: tag });
    setJobs([...jobsCpy].filter(job => job.tags.includes(tag)));
  }

  function onRemove(tag) {
    dispatch({ type: "RemoveTag", payload: tag });

    setJobs([...jobsCpy].filter(job => {
      const newTags = [...state.tags].filter(tag_ => tag_ !== tag);

      if (!newTags) return job;

      console.log(newTags);
      return job.tags.join('').includes(newTags.join(''));
    }));
  }

  return (
    <div className='app'>
      <div className="joblistings">
        <SearchFilter
          tags={state.tags}

          onRemove={onRemove}
          onClear={() => {
            dispatch({ type: "ClearTags" })
            setJobs(jobsCpy)
          }}
        />

        {jobs.map((job, idx) => (
          <JobListing key={idx} {...job} onFilter={onFilter} />
        ))}
      </div>
    </div>
  )
}

export default App;