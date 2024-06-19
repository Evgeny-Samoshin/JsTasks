const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const getSucceedStudents = (all, failed) => {
  let arr = [...all];

  for (const item of failed) {
    arr.map((unit, i) => {
      if (item === unit) {
        arr.splice(i, 1)
      }
    })
  }

  return arr
}

console.log(getSucceedStudents(allStudents, failedStudents));