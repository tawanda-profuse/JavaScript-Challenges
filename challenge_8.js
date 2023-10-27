let products = [
    {
        title: "Iphone 8",
        company: "Apple"
    },
    {
        title: "Galaxy",
        company: "Samsung"
    },
    {
        title: "Iphone 7",
        company: "Apple"
    },
    {
        title: "Iphone Xs",
        company: "Apple"
    },
    {
        title: "HTC Phone",
        company: "HTC"
    },
]

// The function below returns all the distinct properties from the input array
function getUnique(arr){
    let tempArray = new Set();
    for(var i = 0; i < arr.length; i++){
        tempArray.add(arr[i].company)
    }
    return tempArray;
}

console.log(getUnique(products, "Apple"));
console.log(getUnique(products, "Samsung"));
console.log(getUnique(products, "HTC"));