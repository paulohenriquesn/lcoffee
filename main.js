var readCodeText = require('read-text-file');

var codeReaded = readCodeText.readSync('./script.lcoffee').split('\r\n');

language = {
    functions:[
        'print',
        'setvar',
        'removevar',
        'multiplyvar',
        'dividevar'
    ],
    vars:{
        int:{
        int_name:[],
        int_values:[]
        }
    }
}


lcoffee_execute = (func,value) =>
{
    switch(func){
        case "print":
            console.log(value);
        break;
        case "setvar":
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            pointer = 0;
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
            language.vars.int.int_values[pointer] = parseInt(value.split(',')[1]);
        }else {
            language.vars.int.int_name.push(value.split(',')[0]);
            language.vars.int.int_values.push(parseInt(value.split(',')[1]));
        }
        break;
        case "addvar":
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            pointer = 0;
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] + parseInt(value.split(',')[1]);
        }
        break;
        case "removevar":
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            pointer = 0;
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] - parseInt(value.split(',')[1]);
        }
        break;
        case "multiplyvar":
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            pointer = 0;
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] * parseInt(value.split(',')[1]);
        }
        break;
        case "dividevar":
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            pointer = 0;
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] / parseInt(value.split(',')[1]);
        }
        break;
    }
}

ignore_code = false;

for (i = 0; i < codeReaded.length; i ++) {
    if(codeReaded[i] === "" || codeReaded[i][0] == '/' && codeReaded[i][1] == '/'){
        ignore_code == 1;}
        else{ignore_code == 0;}
       if(codeReaded[i].length == 0){ignore_code = true};
        

    if(ignore_code == false){

    //
    if(codeReaded[i].split(' ')[1][0] == '"'){  
        func = codeReaded[i].split(' ')[0];

        if(language.functions.includes(func)){
            value = codeReaded[i].split('"')[1];
            lcoffee_execute(func,value); 
        }

    }

    if(codeReaded[i].split(' ')[1][0] == '&'){  
        func = codeReaded[i].split(' ')[0];

        pointer = 0;
        for(x=0;x<language.vars.int.int_name.length;x++){
            if(language.vars.int.int_name[x] == codeReaded[i].split('&')[1]){
                pointer = x;
            }
        }

        value = language.vars.int.int_values[pointer];
        lcoffee_execute(func,value); 

    }
    
    switch(codeReaded[i].split(' ')[1]){
        case "=":
        func = "setvar";
        value = codeReaded[i].split(' ')[0] + "," + codeReaded[i].split(' ')[2];
        lcoffee_execute(func,value); 
        break;
        case "+=":
        func = "addvar";
        value = codeReaded[i].split(' ')[0] + "," + codeReaded[i].split(' ')[2];
        lcoffee_execute(func,value); 
        break;
        case "-=":
        func = "removevar";
        value = codeReaded[i].split(' ')[0] + "," + codeReaded[i].split(' ')[2];
        lcoffee_execute(func,value); 
        break;
        case "*=":
        func = "multiplyvar";
        value = codeReaded[i].split(' ')[0] + "," + codeReaded[i].split(' ')[2];
        lcoffee_execute(func,value); 
        break;
        case "/=":
        func = "dividevar";
        value = codeReaded[i].split(' ')[0] + "," + codeReaded[i].split(' ')[2];
        lcoffee_execute(func,value); 
        break;
    }

    }
}

console.log(language);

