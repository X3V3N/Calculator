let s=""
let ans=0
function clickedButton(item) {
    s+=item
    document.getElementById("fill").value=s
}
function ansValue() {
    ans=eval(s)
    s=ans.toString()
    document.getElementById("fill").value=s
}
function clearValue() {
    s=""
    document.getElementById("fill").value=s
}
