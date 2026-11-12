function getAllProducts(dbPassword, connectionSpeed){
    const promise = new Promise(
        (resolve, reject)=>{
             setTimeout(
                ()=>{
                    if(connectionSpeed >= 20){
                        if(dbPassword == "Prabodha"){
                            resolve([
                                {
                                    id : 1,
                                    name : "Product 1",
                                    price : 1000
                                },
                                {
                                    id : 2,
                                    name : "Product 2",
                                    price : 2000
                                },
                                {
                                    id : 3,
                                    name : "Product 3",
                                    price : 3000
                                }
                            ])
                        }else{
                            reject({
                                error : "Invalid password",
                                password : dbPassword
                            })
                        }
                    }else{
                        reject({
                            error : "Connection speed is very low",
                            speed : connectionSpeed
                        })
                    }
                },
                500
             )
        }
    ) 
    return promise;
}

//Use the "await" keyword in the async function only, we do not use the that keyword out side of the async function
async function retrieveProducts(){

    try{
        const products = await getAllProducts("Prabodha", 22)
        console.log(products)
        console.log("Products fetch successfully")
    }catch(err){
        console.log(err);
        console.log("Products fetching failed")
    }
    
}
retrieveProducts();

