import './App.css';
const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
function App() {
  return (
    <div className="details">
      <img src={employee.profileImg} className="logo" alt="logo" />
      <p className="Name">{employee.name}</p>
      <p className="first">location</p>
      <p className="second">{employee.location}</p>
      <p className="first">Blood Group</p>
      <p className="second">{employee.bloodGroup}</p>
      <p className="first">age</p>
      <p className="second">{employee.age}</p>
    </div>
  );
}
export default App;