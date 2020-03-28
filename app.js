const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];
const arr3 = arr2.map(function(item){
    return item;
});
console.log(arr3);