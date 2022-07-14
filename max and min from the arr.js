    const maxAndMin = (arrData) => {
       return arrData.reduce((pre,cur)=>{
        //   minimum number
        //   return pre<cur?pre:cur 
        return pre>cur?pre:cur
       })
    }
    
    console.log(maxAndMin([1,2,3,3,4,5,1,6,7,8,9,9]))
