fetch('data.json')
.then((response)=>{
    return response.json();
}).then((datas)=>{
    let body = document.getElementById('body')
    var out ="";
    for(var i=1;i<datas.length;i++){
        
        out = body.innerHTML
        for(var j=0;j<datas[i].length;j++){
            console.log(datas[i][j]);
            out += `<td>${datas[i][j]}</td>`
        }
        out = `<tr>${out}</tr>`
        body.innerHTML = out
    }
})