const reverse = (name) => {
  if (typeof reverse !== 'string'){
    throw new Error("Only string is allowed")
  }
  let reversedName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i]
  }
  return reversedName;
}
console.log(reverse("peeyush"))

const reverse2 = (name2) => {
  let splitName = name2.split('');
  let reversedName = splitName.reverse();
  let result = reversedName.join('');
  return result;  
}
console.log(reverse2("mohit"));
 