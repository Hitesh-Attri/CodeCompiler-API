let area = document.getElementById("input-box");
let compileBtn = document.getElementById('compile-btn');
let code;

let langIdUser;
let rqst ;
let idInterval;

compileBtn.addEventListener('click',validate);

function validate(){

    var dropDown = document.getElementById("language");
    var selectedValue = dropDown.options[dropDown.selectedIndex].value;
    
    code = area.value;

    if(code == ""){
        alert("I ain't see no code!");
    }else{
        console.log(selectedValue);

        if(selectedValue == "python") langIdUser = 0;
        else if(selectedValue == "javascript") langIdUser = 4;
        else if(selectedValue == "c") langIdUser = 7;
        else if(selectedValue == "cpp") langIdUser = 77;
        else if(selectedValue == "java") langIdUser = 8;

        console.log(langIdUser, code , "validte"); 

        let data = JSON.stringify({
            "code":code,
            "langId":langIdUser
        });

        rqst = new XMLHttpRequest();
        rqst.open("POST","https://codequotient.com/api/executeCode");
        rqst.setRequestHeader("Content-Type", "application/json");
        rqst.send(data);

        rqst.addEventListener('load',function(){
            console.log(typeof rqst.responseText);
            
            let rspns1 = JSON.parse(rqst.responseText);
            console.log(typeof rspns1,rspns1,"rspnse1");

            if(rspns1["error"] == "Code is null"){
                alert("Code is null");
            }else{
                let id = JSON.parse(rqst.responseText)["codeId"];
                console.log(typeof id,id,"validate > rqstEvntListnr");

                let resultRqst = new XMLHttpRequest();
                resultRqst.open("GET",`https://codequotient.com/api/codeResult/${id}`);
                resultRqst.send();
                // console.log(fetch.responseText);

                resultRqst.addEventListener('load',function(){
                    idInterval =  setInterval(showResult,resultRqst,idInterval,1000); // argument passing galt hai !!!!!!!!!
                    // showResult(resultRqst);
                });
            }
        });
    }
}

function showResult(resultRqst,idInterval){
    let resultObj = JSON.parse(resultRqst.responseText);
    console.log(resultObj, typeof resultObj, "inside showrslt function");
    if(resultObj.data["status"] != "pending"){
        console.log(resultObj.data.outputs, resultObj.data.errors);
        clearInterval(idInterval);
    }
}

// rqst.addEventListener('load',function(){
//     console.log(rqst.responseText);
// });

area.addEventListener('keydown', (event) => {
    // console.log(typeof event.key, event.key);

    // let codeTosave = area.value;
    // codeTosave = JSON.stringify(codeTosave);
    // localStorage.setItem("areaCode",codeTosave);

    if (event.key === 'Tab' && !event.shiftKey) {
        event.preventDefault();
        // Call your function here
        insertTab();
    }
});

function insertTab(){
    area.value = `${area.value.substring(0, area.selectionStart)}\t${area.value.substring(area.selectionEnd)}`;
    area.selectionEnd = area.selectionStart + 1;
    area.selectionStart = area.selectionEnd;
}

function onLoad(){
    area.innerText = JSON.parse(localStorage.getItem("areaCode"));
}

// onLoad();