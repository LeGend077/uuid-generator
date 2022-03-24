function generate(){
    document.getElementById('result').innerHTML = uuid();
}

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

function copyText() {
    let outputBox = document.getElementById("result")
    outputBox.focus()
    outputBox.select()
    try {
        document.execCommand('copy')
    }
    catch (err) {
        alert('Unable to copy')
    }
}