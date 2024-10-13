let output = document.getElementById("typewriter");
let showText = "BEST QUALITY FOOD";

let cnt = 0
let check = false
printWord()
function printWord() {
    if(cnt <= showText.length){
        output.innerHTML = showText.substr(0, cnt)
        cnt++
        setTimeout(printWord, 300);
    }else{
        setTimeout(deleteWord, 1000)
    }
}
function deleteWord(){
    if(cnt >= 0){
        output.innerHTML = showText.substr(0, cnt)
        cnt--
        setTimeout(deleteWord, 200)
    }else{
        if(check){
            check = false
        } 
        setTimeout(printWord, 300)
    }
}