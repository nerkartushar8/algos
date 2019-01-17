var l = console.log;

function substr(h, n){

    let ni = 0;
    let hi = 0;
    let toReturn = -1;

    while(ni < n.length){
        while(hi < h.length){
            l('checking ', h[hi], n[ni]);
            if(h[hi] == n[ni]){
                toReturn = toReturn == -1 ? hi : toReturn;
                hi++;

                break;

            }else{

                ni = 0;
                toReturn = -1;
            }

            hi++;
        }

        ni++;

    }

    return toReturn;
}

function substrBook(haystack,needle){
    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            if (j == needle.length) return i;
            if (i + j == haystack.length) return -1;
            console.log(i, j, i + j , haystack.charAt(i + j), needle.charAt(j));
            if (needle.charAt(j) != haystack.charAt(i + j)) break;
        }
    }
}

l(substrBook('ganejkjnlkjbnlnwesh', 'nwe'));