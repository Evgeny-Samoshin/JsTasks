const requestedSum = +prompt('Сколько денег хотите снять?')

const minBill = 100;

if ((requestedSum % minBill) > 0) {
  console.log('К сожалению банкомат не может выдать данную сумму. Минимальный размер купюры к выдаче 100 рублей.');
} else {
  console.log(`Вы получили ${requestedSum} рублей.`);
}