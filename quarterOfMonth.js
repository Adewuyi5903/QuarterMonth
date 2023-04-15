
   
const quarterOf = (month) => {
  if ( month >=1 && month<= 3) {
    return "Month " + month + " is part of 1st quarter"
  } else if (month > 3 && month <= 6){
    return "Month " + month + "is part of 2nd quarter"
  } else if (month >6 && month <= 9){
    return "Month " + month + "is part of 3rd quarter"
  } else if (month >9 && month <= 12){
    return "Month " + month + " is part of 4th quarter"
  }
  else (month = 0 && month >= 12)
  return "Does not exist"
}

console.log(quarterOf(0));
