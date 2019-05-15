function countAllFromTown(regNumber){
    var licencePlates = regNumber.split(',');
      var fromStellies = [];
    for(var i=0; i<licencePlates.length;i++){
     if(licencePlates[i].startsWith('CL')){
      fromStellies.push(licencePlates[i]);
    } 
    }
    
    return fromStellies.length;
    }