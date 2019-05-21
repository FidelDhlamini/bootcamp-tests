function findItemsOver(list,threshold){
    var hThresh =[];
      for(var i=0;i<list.length;i++){
     if(list[i].qty>threshold){
      hThresh.push(list[i]);
     } 
    }
      return hThresh;
    }

    var threshold = 20; 

    var list = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];

  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
