const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const prefix = 'Mr';

const addPrefix = (arr, pref) => {
  return arr.map(item => item = `${pref} ${item}`)
}

console.log(addPrefix(names,prefix));