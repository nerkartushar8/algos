var l = console.log;
function reverseWords(s){

    if(!s){
        return s;
    }
    var toReturn =  '';
    var buffer = '';
    for(var i = s.length - 1; i >= 0; i--){
        if(s[i] === ' '){
            toReturn = toReturn + ' ' + buffer;
            buffer = '';
            continue;
        }
        buffer = s[i] + buffer;
        l('toReturn', toReturn);

    }
    toReturn = toReturn + '  ' + buffer;
    return toReturn;
}


function reverseWordsInPlace(str) {
    let s = str.split('');
    let i = 0;
    let prevSpaceIndex = 0;
    while(i < s.length-1){
        if((s.length - 1 - i) > i) {
            l(s.length - 1 - i);
            l(i);
            l("====");
            let temp = s[s.length - 1 - i];
            s[s.length - 1 - i] = s[i];
            s[i] = temp;
        }
        i++;
    }
    i = 0;
    while(i < s.length-1){
        if(s[i] == ' '){
            let templen = i - prevSpaceIndex;
            for(let j = prevSpaceIndex; j < i; j++){
                if((prevSpaceIndex + i - 1 - j) > j){
                    let tmp = s[prevSpaceIndex + i- 1 - j];
                    s[prevSpaceIndex + i - 1 - j] = s[j];
                    s[j] = tmp;

                }
            }
            prevSpaceIndex = i + 1;
        }
        i++;
    }
    l('finished');
    return s.join('');
}
// example
l(reverseWordsInPlace('I am a boy'));  // Should return  boy a am I

// I am a boy
