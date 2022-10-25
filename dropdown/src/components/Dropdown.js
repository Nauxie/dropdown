import './Dropdown.scss';
import { useState } from 'react';

function Dropdown({ title, options, multiselect = false }) {
  const [open, setOpen] = useState(false); // track if dropdown open
  const [selection, setSelection] = useState([]); // track selected options

  // check if option exists in selection
  const isOptionSelected = (option) => {
    return selection.find((s) => s.id === option.id);
  };

  const handleClick = (option) => {
    // if the option clicked is NOT in selection,
    if (!isOptionSelected(option)) {
      if (!multiselect) {
        // set as selection (no multiselect)
        setSelection([option]);
      } else if (multiselect) {
        // add to selection (with multiselect)
        setSelection([...selection, option]);
      }
    } else {
      // if option clicked is ALREADY in selection, remove it

      // get all selection options that DON'T match option clicked's ID
      let newSelection = selection.filter((s) => s.id !== option.id);
      setSelection(newSelection);
    }
  };

  const clear = () => setSelection([]); // clear selection

  const selectAll = () => setSelection([...options]); // select all options (for multiselect)

  const toggle = () => setOpen(!open); // either open or close dropdown

  return (
    <div className='dropdown'>
      <div className='header' role='button' onClick={toggle}>
        <div className='header-title'>
          {!selection.length && <p className='italic'>Select {title}...</p>}
          <p>{selection.map((s) => `${s.title}`).join(', ')}</p>
        </div>
        <div>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className='options'>
          {options.map((option) => (
            <li className='options-item' key={option.id}>
              <button type='button' onClick={() => handleClick(option)}>
                <span>{option.title}</span>
                <input
                  type={multiselect ? 'checkbox' : 'radio'}
                  id={option.id}
                  checked={isOptionSelected(option)}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div role='button' onClick={clear} className='clear-button'>
        <p className='small-text'>clear</p>
      </div>
      {multiselect && (
        <div role='button' onClick={selectAll} className='clear-button'>
          <p className='small-text'>select all</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
