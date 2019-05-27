function yearsAgo(year){
  if(year==96){
    return "year should be in this format YYYY";
  } 
  if(year==''){
    return "enter a year (YYYY)";
  } 
  const cyear = new Date()
    var D = cyear.getFullYear();
    //console.log(D);
    return D - year;
  }