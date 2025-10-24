/* A function that iterates through a string and retunrs an array
of unique characters */

function unique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
}

console.log(unique("carr"));
