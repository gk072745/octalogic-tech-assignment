const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getData = (key) => {
  let data = JSON.parse(localStorage.getItem(key));
  return data;
};

export { setData, getData };
