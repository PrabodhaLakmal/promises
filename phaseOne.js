const isNetworkOkay = true;

const promiseOne = new Promise(
    (resolve, reject)=>{
         
        setTimeout(  
            ()=>{
                if(isNetworkOkay){
                    //success
                    console.log("Data seved in database")
                    resolve({
                        name : "Prabodha Lakmal",
                        age : 23,
                        city : "Anuradhapura"
                    })
                }else{
                    //unsuccessful
                    console.log("Data not saved in database")
                    reject("Network issue")  
                }
            },
            5000
        ) 
    }
)
promiseOne.then(
    (result)=>{
        console.log(result)
        console.log("Upload complete")
    }
).catch(
    (err)=>{
        console.log(err)
        console.log("Upload failed!")
    }
)