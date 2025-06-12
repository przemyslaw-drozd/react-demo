import UserTable from './components/UserTable/UserTable';
import users from './mock/users.json';

function App() {
  return (
    <div className="App">
      <h1>User Table</h1>
      <UserTable users={users} />
    </div>
  );
}

export default App;
