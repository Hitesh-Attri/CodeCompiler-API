let area = document.getElementById("input-box");
let compileBtn = document.getElementById('compile-btn');
let code;

let langIdUser;

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

        console.log(langIdUser, code);  

        let data = JSON.stringify({
            "code":code,
            "langId":langIdUser
        });

        let rqst = new XMLHttpRequest();
        rqst.open("POST","https://codequotient.com/api/executeCode");
        rqst.setRequestHeader("Content-Type", "application/json");
        rqst.send(data);

    }

}

area.addEventListener('keydown', (event) => {
    // console.log(typeof event.key, event.key);
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
