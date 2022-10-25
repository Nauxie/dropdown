import './App.scss';

// Dropdown
import Dropdown from './components/Dropdown';
import data from './data';

function App() {
  return (
    <div className='App-main'>
      {data.map((dd) => (
        <Dropdown
          title={dd.title}
          options={dd.options}
          multiselect={dd.multiselect}
        />
      ))}
    </div>
  );
}

export default App;
