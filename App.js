import CustomCalendar from './CustomCalendar';

function App() {
  const date = new Date(1994, 5, 2); 
  return (
    <div className="App">
      <header className="App-header">
        <CustomCalendar customDate={date}/>
      </header>
    </div>
  );
}

export default App;
