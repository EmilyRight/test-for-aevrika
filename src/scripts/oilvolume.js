const oilVolume = document.querySelector('.volume');
const fullOilAmmount = document.querySelector('.delivery-data__amount_full');
const oilVolumeRange = document.querySelector('.select-volume__range');
const oilAmountPerUnit = document.querySelector('.delivery-data__amount_per_unit');
const profitAmount = document.querySelector('.delivery-data__amount_profit');
const deliveryOilUnitPrice = 45.50;
const oilUnitPrice = 49.59;
oilAmountPerUnit.innerHTML = `${oilUnitPrice} р.`;

function handleRange() {
  const oilVolumeNumber = Number(oilVolumeRange.value);
  const fullAmmountNumber = oilVolumeNumber * deliveryOilUnitPrice;
  const profit = oilVolumeNumber * oilUnitPrice - oilVolumeNumber * deliveryOilUnitPrice;

  profitAmount.innerHTML = `${profit.toFixed(2)} р.`;
  oilVolume.innerHTML = `${oilVolumeNumber}`;
  fullOilAmmount.innerHTML = `${fullAmmountNumber.toFixed(2)} р.`;
}
oilVolumeRange.addEventListener('input', handleRange);

handleRange();
