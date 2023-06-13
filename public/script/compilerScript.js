let area = document.getElementById("input-box");
let compileBtn = document.getElementById('compile-btn');
let code;

let langIdUser;
let rqst ;
var idInterval;
let id;
let resultRqst;

compileBtn.addEventListener('click',validate);

async function validate(){

    var dropDown = document.getElementById("language");
    var selectedValue = dropDown.options[dropDown.selectedIndex].value;
    
    code = area.value;

    if(code == ""){
        alert("code kha hhai ? lagta hai barf pdne wali hai!");
    }else{
        console.log(selectedValue);

        if(selectedValue == "python") langIdUser = 0;
        else if(selectedValue == "javascript") langIdUser = 4;
        else if(selectedValue == "c") langIdUser = 7;
        else if(selectedValue == "cpp") langIdUser = 77;
        else if(selectedValue == "java") langIdUser = 8;

        // console.log(langIdUser, code); 

        let data = JSON.stringify({
            "code":code,
            "langId":langIdUser
        });

        rqst = new XMLHttpRequest();
        rqst.open("POST","/executeCode");
        rqst.setRequestHeader("Content-Type", "application/json");
        rqst.send(data);
        rqst.addEventListener('load',function(){
            // console.log(typeof rqst.responseText);
            
            let rspns1 = JSON.parse(rqst.responseText);
            console.log(typeof rspns1,rspns1,"rspnse1");

            if(rspns1.errr){
                highlight(rspns1.msg);
            }

            let op = document.getElementById('outputP');
            op.innerText = `OUTPUT:${rspns1.msg}`;
        });

        // rqst = new XMLHttpRequest();
        // rqst.open("POST","https://codequotient.com/api/executeCode");
        // rqst.setRequestHeader("Content-Type", "application/json");
        // rqst.send(data);
        // rqst.addEventListener('load',function(){
        //     // console.log(typeof rqst.responseText);
            
        //     let rspns1 = JSON.parse(rqst.responseText);
        //     // console.log(typeof rspns1,rspns1,"rspnse1");

        //     if(rspns1["error"] == "Code is null"){
        //         alert("Code is null");
        //     }else{
        //         id = JSON.parse(rqst.responseText)["codeId"];
        //         console.log(typeof id,id,"validate > rqstEvntListnr");

        //         let result = new XMLHttpRequest();
        //         result.open("GET",`https://codequotient.com/api/codeResult/${id}`);
        //         result.send();

        //         result.addEventListener('load',function(){
        //             idInterval = setInterval(newf,1000);
        //             console.log("idinterval", idInterval);
        //         });
        //     }
        // });

    }
}

area.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && !event.shiftKey) {
        event.preventDefault();
        // Call your function here
        area.value = `${area.value.substring(0, area.selectionStart)}\t${area.value.substring(area.selectionEnd)}`;
        area.selectionEnd = area.selectionStart + 1;
        area.selectionStart = area.selectionEnd;
    }
});

function newf(){
    let result = new XMLHttpRequest();
    result.open("GET",`https://codequotient.com/api/codeResult/${id}`);
    result.send();

    result.addEventListener('load',function(){
        console.log();
        let rsltObj = JSON.parse(result.responseText);
        console.log(rsltObj,typeof rsltObj,"hhhh");

        let x = rsltObj.data;
        console.log(x,typeof x,"xxxxx");

        x= JSON.parse(x);
        console.log(x,typeof x,"yyyyyyy");

        if(x.status !="Pending"){
            console.log("output: ", x.output, "errors: ",x.errors );

            let op = document.getElementById('outputP');
            op.innerText = `${x.output} ${x.errors}`

            // console.log(resultStrOutput,resultStrOutputerr);
            console.log(x.langid,langIdUser ,"ci");
            if(x.code == code){
                clearInterval(idInterval);
            }
        }

    });
}


// function highlight(){
//     var lineNumber = 4;
//     var textarea = document.getElementById("input-box");
//     textarea.focus();
//     textarea.setSelectionRange(0, textarea.value.length);

//     var lines = textarea.value.split("\n");
//     var start = 0;
//     for (var i = 0; i < lines.length && i < lineNumber; i++) {
//     start += lines[i].length + 1;
//     }
//     var end = start + lines[lineNumber - 1].length;

//     textarea.setSelectionRange(start, end);
//     textarea.style.backgroundColor = "#FFFFCC";
// }
function highlight(string){
    
    let num = getLineNum(string)
    if(num){
        var lineNumber = num-1;
        var textarea = document.getElementById("input-box");
        textarea.focus();
        textarea.setSelectionRange(0, textarea.value.length);
    
        var lines = textarea.value.split("\n");
        var start = 0;
        for (var i = 0; i < lines.length && i < lineNumber; i++) {
        start += lines[i].length + 1;
        }
        var end = start + lines[lineNumber].length;
    
        textarea.setSelectionRange(start, end);
        textarea.style.backgroundColor = "#FFFFCC";
    }
}

function getLineNum(string){
    function extractFirstNumberFromString(str) {
        const regex = /\d+/;
        const match = regex.exec(str);
        return match ? parseInt(match[0]) : null;
    }
      
    // console.log(extractFirstNumberFromString(string1)); // Output: 123
    // console.log(extractFirstNumberFromString(string2)); // Output: null
    return extractFirstNumberFromString(string)
}
