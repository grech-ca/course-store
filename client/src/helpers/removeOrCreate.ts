const removeOrCreate = <T>(arr: T[], element: T): T[] => {
  const newArr = [...arr];

  if (newArr.includes(element)) {
    newArr.splice(newArr.indexOf(element), 1);
  } else {
    newArr.push(element);
  }

  return newArr;
};

export default removeOrCreate;
