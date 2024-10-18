export default function getMedia (number: number[]) {
  const reviewsNotes = number?.map(item => item);
  const sum = reviewsNotes?.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const total = sum / number.length;

  return total.toFixed(1);
};
