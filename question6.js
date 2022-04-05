let FileReader = require('filereader');

const parseCSV = (file) => {
  let reader = new FileReader();
  reader.onload = function (evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
};

console.log(parseCSV("./input1.csv"));
