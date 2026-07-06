function StudentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: e.target.name.value,
      regId: e.target.regId.value,
      email: e.target.email.value,
      age: e.target.age.value,
      city: e.target.city.value,
      role: e.target.role.value,
    };

    console.log(student);
    alert(
      `Name: ${student.name}
Registration ID: ${student.regId}
Email: ${student.email}
Age: ${student.age}
City: ${student.city}
Role: ${student.role}`
    );

    e.target.reset();
  };

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <br />

        <input
          type="text"
          name="regId"
          placeholder="Enter Registration Id"
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email Id"
        />
        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
        />
        <br />
        <br />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
        />
        <br />
        <br />

        <select name="role">
          <option value="Student">Student</option>
          <option value="Scholar">Scholar</option>
        </select>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;