// code your solution here
function saturdayFun(funType = "roller-skate"){
    return `This Saturday, I want to ${funType}!`;
}

saturdayFun();
saturdayFun("bathe my dog");


function mondayWork(activity  = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

mondayWork();
mondayWork("work from home");


function wrapAdjective(wrap){
    return function(say){
            return `You are ${wrap}${say}${wrap}!`;
    };
}

wrapAdjective("*")("a hard worker");
wrapAdjective('||')('a dedicated programmer');