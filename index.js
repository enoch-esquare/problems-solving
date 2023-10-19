console.log("hello")
let arr=[8,12,16,4,22];
let min = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min);
