import './App.scss';

// Dropdown
import Dropdown from './components/Dropdown';
import data from './data';

function App() {
  return (
    <div className='App-main'>
      {data.map((d) => (
        <Dropdown
          title={d.title}
          options={d.options}
          multiselect={d.multiselect}
        />
      ))}
    </div>
  );
}

export default App;
