var readCodeText = require('read-text-file');

var codeReaded = readCodeText.readSync('./script.lcoffee').split('\r\n');

language = {
    functions:[
        'print',
        'setvar',
        'removevar',
        'multiplyvar',
        'dividevar',
        'if',
        'for'
    ],
    vars:{
        int:{
        int_name:[],
        int_values:[]
        }
    },
    for:{
        infor:false,
        _name:[],
        _left:[],
        pointer:0,
        current:''
    }
}

ignore_code = false;
lcoffee_execute = (func,value) =>
{
    switch(func){
        case "print":
            console.log(value);
        break;
        case "setvar":
        cpointer = 0;
        pointer = 0;
        if(value.split(',')[1][0] == '&'){
            
            if(language.vars.int.int_name.includes(value.split(',')[1].replace("&",""))){
                cpointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[1].replace("&","")){
                        cpointer = x;
                    }
                }
            }

            if(language.vars.int.int_name.includes(value.split(',')[0])){
                pointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[0]){
                        pointer = x;
                    }
                }
            }
            language.vars.int.int_values[pointer] =  language.vars.int.int_values[cpointer];
                
        }else {
        if(language.vars.int.int_name.includes(value.split(',')[0])){
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
    }
        break;
        case "addvar":
        cpointer = 0;
        pointer = 0;
        if(value.split(',')[1][0] == '&'){
            
            if(language.vars.int.int_name.includes(value.split(',')[1].replace("&",""))){
                cpointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[1].replace("&","")){
                        cpointer = x;
                    }
                }
            }

            if(language.vars.int.int_name.includes(value.split(',')[0])){
                pointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[0]){
                        pointer = x;
                    }
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] +  language.vars.int.int_values[cpointer];
                
        }else {
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
          
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] + parseInt(value.split(',')[1]);
        }else {
            language.vars.int.int_name.push(value.split(',')[0]);
            language.vars.int.int_values.push(parseInt(value.split(',')[1]));
        }
    }
        break;
        case "removevar":
        cpointer = 0;
        pointer = 0;
        if(value.split(',')[1][0] == '&'){
            
            if(language.vars.int.int_name.includes(value.split(',')[1].replace("&",""))){
                cpointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[1].replace("&","")){
                        cpointer = x;
                    }
                }
            }

            if(language.vars.int.int_name.includes(value.split(',')[0])){
                pointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[0]){
                        pointer = x;
                    }
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] -  language.vars.int.int_values[cpointer];
                
        }else {
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
          
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] - parseInt(value.split(',')[1]);
        }else {
            language.vars.int.int_name.push(value.split(',')[0]);
            language.vars.int.int_values.push(parseInt(value.split(',')[1]));
        }
    }
        break;
        case "multiplyvar":
        cpointer = 0;
        pointer = 0;
        if(value.split(',')[1][0] == '&'){
            
            if(language.vars.int.int_name.includes(value.split(',')[1].replace("&",""))){
                cpointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[1].replace("&","")){
                        cpointer = x;
                    }
                }
            }

            if(language.vars.int.int_name.includes(value.split(',')[0])){
                pointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[0]){
                        pointer = x;
                    }
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] *  language.vars.int.int_values[cpointer];
                
        }else {
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
          
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] * parseInt(value.split(',')[1]);
        }else {
            language.vars.int.int_name.push(value.split(',')[0]);
            language.vars.int.int_values.push(parseInt(value.split(',')[1]));
        }
    }
        break;
        case "dividevar":
        cpointer = 0;
        pointer = 0;
        if(value.split(',')[1][0] == '&'){
            
            if(language.vars.int.int_name.includes(value.split(',')[1].replace("&",""))){
                cpointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[1].replace("&","")){
                        cpointer = x;
                    }
                }
            }

            if(language.vars.int.int_name.includes(value.split(',')[0])){
                pointer = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[0]){
                        pointer = x;
                    }
                }
            }
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] /  language.vars.int.int_values[cpointer];
                
        }else {
        if(language.vars.int.int_name.includes(value.split(',')[0])){
            for(x=0;x<language.vars.int.int_name.length;x++){
                if(language.vars.int.int_name[x] == value.split(',')[0]){
                    pointer = x;
                }
            }
          
            language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] / parseInt(value.split(',')[1]);
        }else {
            language.vars.int.int_name.push(value.split(',')[0]);
            language.vars.int.int_values.push(parseInt(value.split(',')[1]));
        }
    }
        break;
        case "if":
            if(language.vars.int.int_name.includes(value.split(',')[0].replace('&',""))){
                pointer = 0;
                compare = 0;
                for(x=0;x<language.vars.int.int_name.length;x++){
                    if(language.vars.int.int_name[x] == value.split(',')[0].replace('&',"")){
                        pointer = x;
                    }
                }

                if(value.split(',')[2][0] == "&"){
                    cpointer = 0;
                    for(x=0;x<language.vars.int.int_name.length;x++){
                        if(language.vars.int.int_name[x] == value.split(',')[2].replace('&',"")){
                           cpointer = x;
                        }
                    }
                    compare = language.vars.int.int_values[cpointer];
                    
                }else {
                    compare = parseInt(value.split(',')[2]);
                }
                switch(value.split(',')[1]){
                    case "==":
                    if(language.vars.int.int_values[pointer] == compare){
                        ignore_code = false;
                    }else{
                        ignore_code = true;
                    }
                    break;
                    case "!=":
                    if(language.vars.int.int_values[pointer] != compare){
                        ignore_code = false;
                    }else{
                        ignore_code = true;
                    }
                    break;
                    case "<=":
                    if(language.vars.int.int_values[pointer] <= compare){
                        ignore_code = false;
                    }else{
                        ignore_code = true;
                    }
                    break;
                    case ">=":
                    if(language.vars.int.int_values[pointer] >= compare){
                        ignore_code = false;
                    }else{
                        ignore_code = true;
                    }
                    break;
                    case "!=":
                    if(language.vars.int.int_values[pointer] != compare){
                        ignore_code = false;
                    }else{
                        ignore_code = true;
                    }
                    break;
                }
    
            }
        break;
        case "for":
        //console.log(value.split(','));

        pointer = 0;
        if(language.vars.int.int_name.includes(value.split(',')[0].replace('&',""))){
        for(x=0;x<language.vars.int.int_name.length;x++){
            if(language.vars.int.int_name[x] == value.split(',')[0].replace('&',"")){
                pointer = x;
            }
        }
        language.for.current = value.split(',')[0].replace('&',"");
        language.for.pointer = i;
        language.vars.int.int_values[pointer] = parseInt(value.split(',')[1]);
        language.for._name.push(value.split(',')[0].replace('&',""));
        language.for._left.push(parseInt(value.split(',')[2]));
        language.for.infor = true;
    } 
        break;
    }
    value = "";
    func = "";
}

for (i = 0; i < codeReaded.length; i ++) {
    if(codeReaded[i] === "" || codeReaded[i][0] == '/' && codeReaded[i][1] == '/'){
        ignore_code == 1;}
        else{ignore_code == 0;}
       if(codeReaded[i].length == 0){try{i++;}catch(e){}};
        

    if(ignore_code == false){

    //
    try {
    if(codeReaded[i].split(' ')[1][0] == '"'){  
        func = codeReaded[i].split(' ')[0];

        if(language.functions.includes(func)){
            value = codeReaded[i].split('"')[1];
            lcoffee_execute(func,value); 
        }

    }
}
catch(e) {

}


try {
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
}
catch(e){

}
try {
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
}catch(e){}

    try {
    if(codeReaded[i].split('(')[0] == "if "){
        value = "";
        func = "if";
        value = value + codeReaded[i].split(' ')[1].replace('(',"") + "," + codeReaded[i].split(' ')[2] + "," + codeReaded[i].split(' ')[3].replace("):","");
        lcoffee_execute(func,value);
    }
    }catch(e){}

    try {
        if(codeReaded[i].split('(')[0] == "for "){
            value = "";
            func = "for";
            value = value + codeReaded[i].split(' ')[1].replace('(',"") + "," + codeReaded[i].split(' ')[3].replace("):","");
            lcoffee_execute(func,value);
        }
        }catch(e){}

    }

    try {
        if(codeReaded[i] == "end"){
            if(language.for.infor == true){
              
            


                pointer = 0;
                cpointer = 0;

                for(x=0;x<language.vars.int.int_name.length;x++){
                    
                    if(language.vars.int.int_name[x] == language.for.current){
                      //  console.log("[" + language.vars.int.int_name[x] +  "]" + "[" + language.for.current + "]");
                        pointer = x;
                    }
                }

                for(x=0;x<language.for._name.length;x++){
                    if(language.for._name[x] == language.current){
                        cpointer = x;
                    }
                }

                if(language.vars.int.int_values[pointer] != language.for._left[cpointer]){
                  /*  console.log(">>" + language.vars.int.int_values[pointer]);
                    console.log("P>>" + pointer);*/
                    language.vars.int.int_values[pointer] = language.vars.int.int_values[pointer] +1;
                    i = language.for.pointer;
                  
                    
                }else {
                  /*  console.log("\n\n\n");
                    for(ll=0;ll<language.vars.int.int_name.length;ll++){
                        console.log("V>>" + language.vars.int.int_name[ll]);
                    }
                    console.log("P>>" + pointer);
                    console.log("CP>>" + cpointer);
                    console.log("CC>>" + language.for.current);
                    console.log("\n\n\n");*/
                    language.for._name.shift();
                    language.for._left.shift();
                    language.for.pointer = undefined;
                    language.for.current = undefined;
                    pointer = 0;
                    cpointer = 0;
                    language.for.infor = false;

                    
                }
            }else{
            ignore_code=false;
            }
        }
    }catch(e){}

}

console.log("\n=====================================");
console.log(language);

