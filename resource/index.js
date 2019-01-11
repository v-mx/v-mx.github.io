(function(){
    console.log(sessionStorage.getItem('loading'))

    if(sessionStorage.getItem('loading')){
        return
    }else{
        sessionStorage.setItem('loading',true)
    }

    var bodys = document.getElementsByTagName('body')[0]
    var book = document.getElementsByClassName('book')[0]
    var dome = '<div ref="loadingText"><p>你们要过去得为业的那地<br/>乃是有山有谷、雨水滋润之地，<br/>是耶和华—你 神所眷顾的；<br/>从岁首到年终，<br/>耶和华—你 神的眼目时常看顾那地。</p><p><i>申命记 11:11-12</i></p></div>'
    var loading = document.createElement('div')

    loading.classList.add("loading-index")
    loading.classList.add("flex-vertical-center")
    
    loading.innerHTML = dome
    bodys.insertBefore(loading,book)

    setTimeout(function(){
        bodys.removeChild(loading)
    },4000)
})()