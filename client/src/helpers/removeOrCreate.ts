const removeOrCreate = <T>(arr: T[], element: T): T[] => {
  const newArr = [...arr];

  if (newArr.includes(element)) {
    const index = newArr.indexOf(element);
    newArr.splice(index, 1);
  } else {
    newArr.push(element);
  }

  return newArr;
};

export default removeOrCreate;
