import { useState } from "react";

function GeneralInfo() {
  const [editing, setEditing] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: ``,
    email: ``,
    phone: ``,
  });

  function changeName(names) {
    setGeneralInfo({ ...generalInfo, name: names });
  }
  function changeEmail(em) {
    setGeneralInfo({ ...generalInfo, email: em });
  }
  function changePhone(ph) {
    setGeneralInfo({ ...generalInfo, phone: ph });
  }
  function submitFunc(event) {
    event.preventDefault();
    setEditing(false);
  }

  function enableEdit() {
    setEditing(true);
  }
  if (editing) {
    return (
      <>
        <div className="form-group">
          <form onSubmit={submitFunc}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              value={generalInfo.name}
              type="text"
              onChange={(event) => {
                changeName(event.target.value);
              }}
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              value={generalInfo.email}
              type="email"
              onChange={(event) => {
                changeEmail(event.target.value);
              }}
            />
            <br />
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              value={generalInfo.phone}
              type="tel"
              onChange={(event) => {
                changePhone(event.target.value);
              }}
            />
            <br />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
        <button onClick={enableEdit}>EDIT</button>
      </>
    );
  }
}
export default GeneralInfo;
