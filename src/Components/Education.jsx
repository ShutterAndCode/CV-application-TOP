import { useState } from "react";

function Education() {
  const [education, setEducation] = useState({
    college: ``,
    degree: ``,
    branch: ``,
    CGPA: ``,
  });

  const [editing, setEditing] = useState(true);

  //   function handleChangeEducation(type, value) {
  //     if (type == `college`) {
  //       const newEducation = { ...education, college: value };
  //       setEducation(newEducation);
  //     }
  //     if (type == `degree`) {
  //       const newEducation = { ...education, degree: value };
  //       setEducation(newEducation);
  //     }
  //     if (type == `branch`) {
  //       const newEducation = { ...education, branch: value };
  //       setEducation(newEducation);
  //     }
  //     if (type == `CGPA`) {
  //       const newEducation = { ...education, CGPA: value };
  //       setEducation(newEducation);
  //     }
  //   }

  function handleChangeEducation(type, value) {
    setEducation({ ...education, [type]: value });
  }

  function isEditing() {
    setEditing(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
  }

  if (editing) {
    return (
      <>
        <div className="education-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="college">College: </label>
            <input
              type="text"
              id="college"
              placeholder="enter college name"
              value={education.college}
              onChange={(event) =>
                handleChangeEducation(`college`, event.target.value)
              }
            />
            <br />
            <label htmlFor="degree">Degree: </label>
            <input
              type="text"
              id="degree"
              placeholder="enter your degree"
              value={education.degree}
              onChange={(inp) =>
                handleChangeEducation(`degree`, inp.target.value)
              }
            />
            <br />
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              id="branch"
              placeholder="enter your branch"
              value={education.branch}
              onChange={(inp) =>
                handleChangeEducation(`branch`, inp.target.value)
              }
            />
            <br />
            <label htmlFor="CGPA">CGPA: </label>
            <input
              type="number" step='0.01'
              id="CGPA"
              placeholder="enter your CGPA"
              value={education.CGPA}
              onChange={(inp) =>
                handleChangeEducation(`CGPA`,inp.target.value)
              }
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="education-preview">

          <p>College: {education.college}</p>
          <p>Degree: {education.degree}</p>
          <p>Branch: {education.branch}</p>
          <p>CGPA: {education.CGPA}</p>
          
          <button onClick={isEditing}>EDIT</button>
        </div>
      </>
    );
  }
}
export default Education;
