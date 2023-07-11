const StudentCard = ({ student }) => {
  const { email, company, firstName, lastName, pic, grades, skill, id } =
    student;

  //converted grades to numbers
  const numericGrades = grades.map((grade) => Number(grade));

  //Add up grades
  let total = 0;
  for (const grade of numericGrades) {
    total += grade;
  }

  //Divide total by number of grades
  const average = total / numericGrades.length;

  console.log(`<StudentCard /> rendered name = ${firstName}`);
  return (
    <div key={id}>
      <img src={pic} alt={`${firstName} ${lastName}`} />
      <h1>
        {firstName} {lastName}
      </h1>
      <ul>
        <li> Email: {email}</li>
        <li> Company: {company}</li>
        <li> Skill: {skill}</li>
        <li> Average: {average}%</li>
      </ul>
    </div>
  );
};

export default StudentCard;
