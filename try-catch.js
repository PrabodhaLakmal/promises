console.log("Code is starting")
console.log("Code is continuing")

try{
    const student = {
        name : "Prabodha",
        age : 23,
        major : "Computer Science",
        // parent : {
        //     name : "Munasinghe",
        //     age : "56",
        //     ocupation : "Engineer"
        // }
    }

    console.log(student.parent.name)

}catch(err){
    console.log("Error Occured")
    console.log(err)
}



console.log("Code is continuing")
console.log("Code in ending")