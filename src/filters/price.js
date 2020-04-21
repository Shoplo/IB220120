export default function (value, currency ='') {
  if (isNaN(parseFloat(value))) {
    return value;
  }

  return `${parseFloat(value).toFixed(2)} ${currency}`;
}