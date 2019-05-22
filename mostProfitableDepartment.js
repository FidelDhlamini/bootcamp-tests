var mostProfitableDepartment = function (data) {
    var highSale = 0;
    var answer = [];
    for(var i = 0; i < data.length; i++)
    {
      var sale = data[i].sales;
      if(sale > highSale)
      {
        highSale = sale;
        answer = data[i].department;
      }
    }
    return answer;
  }

  var data = ([{"department":"hardware","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]);
  
  