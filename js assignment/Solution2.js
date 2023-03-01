const solve = (firstName, lastName) => {
    let a = firstName.charAt(0); // stores 1st char of firstname
    let b = lastName.charAt(0); // stores 1st char of firstname
    return a + b;
  };
  
  const shortname = solve('Roger', 'Waters');
  console.log(shortname); // Output: "RW"
  