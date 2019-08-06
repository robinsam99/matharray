var products = [
    {
      name: "football",
      inventory: 5,
      unit_price: 50
    },
    {
      name: "table",
      inventory: 10,
      unit_price: 100,
      unit_price2: 300,
      size: 200
    },
    {
      name: "bed",
      inventory: 3,
      unit_price: 300
    }
  ];
  function arrObj(array)
  {
      var check =  Object.keys(array[0]).length;
      var n;
      for( var i = 0;i < array.length; i++ )
      {
          if(Object.keys(array[i]).length > check)
          {
              n = i;
          }
      }
      return n;
  }
  document.getElementById("obj").innerHTML = arrObj(products);
