function showLastName() {
    const lastName = "Cooper";
    return lastName;
  }
  function displayFullName() {
    const fullName = "Sheldon " + showLastName();
    return fullName;
  }
  console.log(displayFullName());