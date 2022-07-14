Algorithm :

#1 : find the largest value from the array
#2 : find the index of the largest value from the array
#3 : Delete the index from the arrray using the slice method
#4 : Apply the same logic for finding the second largest value in the array



const SecondLargestArray = (arrData) =>{
    const FirstLargestArray = Math.max(...arrData)
    const FirstLargestIndex = arrData.indexOf(FirstLargestArray)
    var x = arrData.splice(FirstLargestIndex , 1)
    const SecondLargest = Math.max(...arrData)
    return SecondLargest
}
console.log(SecondLargestArray([1,2,3,4,5,7,6,8,9]))
