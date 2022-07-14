
    const duplicateElemnet = (arrData) => {
//         shows only repeated number
        return arrData.filter((elemnet,index,arr)=>{
            return arr.indexOf(elemnet) !== index
        })
//         expecting rpeated number it's shows everything
//         return [...new Set(arrData)]
    }
    
    console.log(duplicateElemnet([1,2,3,3,4,5,1,6,7,8,9,9]))
