$("#submitBtn").on("click",function (event) {
    event.preventDefault(); 

    var items = $("input[type='range']");
    var yourValues = [];
    var posOne;


    for (let i = 0; i < items.length; i++) {
        yourValues.push(items[i].value);
    }

    console.log("your values: ",yourValues);

    var possibleOne = for(let i = 0; i < friends.length; i++) {

        for (let j = 0; j < yourValues.length; j++) {
            
            posOne += Math.abs( parseInt(friends[i].values[j] - yourValues[j]);
        }
        
    }



});