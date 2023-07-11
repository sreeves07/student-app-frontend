import StudentCard from '../StudentCard/studentCard';

const StudentList = ({ studentData }) => {
  console.log('<StudentList /> rendered!');
  return (
    <div className="StudentList">
      {studentData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
