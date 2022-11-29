// For loop
// var arr=[
//     {
//         "name":"varsh",
//         "age" :20
//     },
//     {
//         "name":"madesh",
//         "age" :21
//     },
//     {
//         "name":"abi",
//         "age" :22
//     }

// // ];
// // for(var i=0;i<arr.length;i++){
// //     console.log(arr[i].name,arr[i].age);
// // }






// //for in loop
// //For in loop to print both index and value
// var obj={
//     "name":"loga",
//     "sex" :"female",
//     "location":"chennai",
//     "Married":true,
//     "Hobbies":["playing","editing","drawing"]
// }
// for(i in obj){
//     console.log(i);
// }


// //for in loop to print index for object
// var obj={
//     "name":"loga",
//     "sex" :"female",
//     "location":"chennai",
//     "Married":true,
//     "Hobbies":["playing","editing","drawing"]
// }
// for(var i in obj){
//     console.log(i);
// }


//for in loop to print index for particular property in object
// var obj={
//     "name":"loga",
//     "sex" :"female",
//     "location":"chennai",
//     "Married":true,
//     "Hobbies":["playing","editing","drawing"]
// }
// for(var i in obj.name){
//     console.log(i);
// } 








//for of loop to print the values eg:1
// var obj={
//     "name":"loga",
//     "sex" :"female",
//     "location":"chennai",
//     "Married":true,
//     "Hobbies":["playing","editing","drawing"]
// }
// for(var i of obj.location){
//     console.log(i);
// }

//RESUME CREATION

var myresume={
    "biodata":{
     "name"  :"LOGA VARSHINI VJ",
     "email" : "varshiniabi2001@gamil.com",
     "phone" : 987654321,
     "degree": "B.TECH",
     "location": {
         "address"   : "46-A,Sangupuram 3rd Street",
         "postalCode": 627756,
         "city"      : "Tirunelveli",
         "state"     : "Tamilnadu",
         "country"   : "India"
       }
    },

    "Education":{
     "SSLC Percentage": "97%",
     "Institution"    :"Lotus matric hr sec school",
     "HSC Percentage" : "91%",
     "Institution"    :"Lotus matric hr sec school",
     "UG Percentage"  : "85%",
     "Institution"    :"Kalasalingam University",
    
    },
    "Work Experience":{
     "Job role"       :"project manager",
     "Experience"     :"2 years",
     "current salary" :"4LPA",
     "expected salary":"6LPA",
    },

    "skills":{
     "progamming languages":["C","C++","JAVA","Python"],
     "Project1"            :"Sensing and monitoring incubator baby using IOT",
     "Project2"            :"Prison break System",
    },

    "Languages":{
     "LanguagesKnown":["Tamil","English","Hindi"]
    },

    "Interests":{
     "name":["playing","editing","cooking"]
    }

 
    
};
for(i in myresume){
console.log(myresume[i])
}

 
 
 
 