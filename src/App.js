import { useEffect, useState } from 'react';
import './App.css';
import StudentList from './Components/StudentList/studentList';

const API_URL = 'http://localhost:8888';

function App() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    console.log('</App /> useEffect fired!');
    async function fetchData() {
      const response = await fetch(`${API_URL}/students`);
      const json = await response.json();
      console.log('App() useEffect fetched data', json);
      const { data } = json;
      setStudentData(data);
    }
    fetchData();
  }, []);

  console.log(`</App /> rendered! num students = ${studentData.length}`);
  return (
    <div className="App">
      <StudentList studentData={studentData} />
    </div>
  );
}

export default App;
