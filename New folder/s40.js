









// let area = document.getElementById("input-box");
// let compileBtn = document.getElementById('compile-btn');
// let code;
// let id;

// let langIdUser;
// let rqst ;
// var idInterval;
// let resultRqst;

// compileBtn.addEventListener('click',validate);

// function validate(){

//     var dropDown = document.getElementById("language");
//     var selectedValue = dropDown.options[dropDown.selectedIndex].value;
    
//     code = area.value;

//     if(code == ""){
//         alert("I ain't see no code!");
//     }else{
//         console.log(selectedValue);

//         if(selectedValue == "python") langIdUser = 0;
//         else if(selectedValue == "javascript") langIdUser = 4;
//         else if(selectedValue == "c") langIdUser = 7;
//         else if(selectedValue == "cpp") langIdUser = 77;
//         else if(selectedValue == "java") langIdUser = 8;

//         // console.log(langIdUser, code); 

//         let data = JSON.stringify({
//             "code":code,
//             "langId":langIdUser
//         });

//         rqst = new XMLHttpRequest();
//         rqst.open("POST","https://codequotient.com/api/executeCode");
//         rqst.setRequestHeader("Content-Type", "application/json");
//         rqst.send(data);

//         rqst.addEventListener('load',function(){
//             // console.log(typeof rqst.responseText);
            
//             let rspns1 = JSON.parse(rqst.responseText);
//             // console.log(typeof rspns1,rspns1,"rspnse1");

//             if(rspns1["error"] == "Code is null"){
//                 alert("Code is null");
//             }else{
//                 id = JSON.parse(rqst.responseText)["codeId"];
//                 console.log(typeof id,id,"validate > rqstEvntListnr");

//                 // temp line;
//                 // let result = new XMLHttpRequest();
//                 // result.open("GET",`https://codequotient.com/api/codeResult/${id}`);
//                 // result.send();

//                 // result.addEventListener('load',function(){
//                 //     let resultRspns = result.responseText;
//                 //     console.log(resultRspns,typeof resultRspns);
//                 // });

//                 getResult(id);
//                 // idInterval = setInterval(getResult,1000,id);

//                 // resultRqst.addEventListener('load',function(){
//                 // let data2 = JSON.parse(resultRqst.responseText);
//                 // // console.log(data2);
//                 //     idInterval =  setInterval(showResult,1000);
//                 //     // showResult(resultRqst);
//                 // });
//             }
//         });
//     }
// }

// function showResult(){
//     let resultObj = JSON.parse(this.responseText);
//     console.log(resultObj, typeof resultObj, "inside showrslt function");
//     // console.log(idInterval);
//     // clearInterval(idInterval);
//     // console.log("idInterval");
//     // if(resultObj.data["status"] != "pending"){
//     //     console.log(resultObj.data.outputs, resultObj.data.errors);
//     //     clearInterval(idInterval);
//     // }
// }

// // rqst.addEventListener('load',function(){
// //     console.log(rqst.responseText);
// // });

// area.addEventListener('keydown', (event) => {
//     // console.log(typeof event.key, event.key);

//     // let codeTosave = area.value;
//     // codeTosave = JSON.stringify(codeTosave);
//     // localStorage.setItem("areaCode",codeTosave);

//     if (event.key === 'Tab' && !event.shiftKey) {
//         event.preventDefault();
//         // Call your function here
//         insertTab();
//     }
// });

// function insertTab(){
//     area.value = `${area.value.substring(0, area.selectionStart)}\t${area.value.substring(area.selectionEnd)}`;
//     area.selectionEnd = area.selectionStart + 1;
//     area.selectionStart = area.selectionEnd;
// }

// function getResult(id){
//     resultRqst = new XMLHttpRequest();
//     resultRqst.open("GET",`https://codequotient.com/api/codeResult/${id}`);
//     resultRqst.send();

//     resultRqst.addEventListener('load',function(){
//         let resultObj = JSON.parse(resultRqst.responseText);
//         console.log(resultObj, typeof resultObj,"here");

//         // while(resultObj.data["status"] == "Pending"){
//         //     resultRqst.send();
//         // }
//         // resultObj = JSON.parse(resultRqst.responseText);
//         // console.log(resultObj, typeof resultObj);

//         // if(resultObj.data["status"] != "Pending"){
//             // clearInterval(idInterval);
//             // alert("/");
//             idInterval = setInterval(func,1000,resultRqst);
//             // resultObj = JSON.parse(resultRqst.responseText);
//             // console.log(resultObj, typeof resultObj,"here");

//         // }
//     });

//     // let resultObj = JSON.parse(resultRqst.responseText);
//     // console.log(resultObj, typeof resultObj);

//     // while(resultObj.data["status"] == "Pending"){
//     //     resultRqst = new XMLHttpRequest();
//     //     resultRqst.open("GET",`https://codequotient.com/api/codeResult/${id}`);
//     //     resultRqst.send();
//     // }


//     // resultRqst.addEventListener('load',function(){
//     //     let resultObj = JSON.parse(resultRqst.responseText);
//     //     console.log(resultObj, typeof resultObj);

//     //     while(resultObj.data["status"] == "Pending"){
//     //         resultRqst.send();
//     //     }
//     //     resultObj = JSON.parse(resultRqst.responseText);
//     //     console.log(resultObj, typeof resultObj);
//     // }); 
// }


// function func(resultRqst){
//     let newRqsues = new XMLHttpRequest();
//     newRqsues.open("GET",`https://codequotient.com/api/codeResult/${id}`);
//     newRqsues.send();

//     resultObj = JSON.parse(newRqsues.responseText);
//     console.log(resultObj, typeof resultObj,"here");
   
// }