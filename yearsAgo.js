function yearsAgo(year){
    const cyear = new Date()
    var D = cyear.getFullYear();
    //console.log(D);
    return D - year;
  }