const typeContainer = document.querySelector('.typecontainer')

fetch('word.json')
.then(res=>res.json())
.then(json=>{
    const wordAll = json
    const randomNumber = Math.floor(Math.random() * wordAll.words.length);
    let word = wordAll.words[randomNumber];
    for(i=0;i<word.length;i++){
        const type = document.createElement('input')
        type.type='text'
        type.maxLength='1'
        type.style.textTransform='uppercase'
        typeContainer.appendChild(type)
    }
    const btn = document.querySelector('button')
    btn.addEventListener('click',function(){
        const inputAll = document.querySelectorAll('input')
        for(i=0;i<word.length;i++){
            let wordSplit = word[i].toUpperCase()
            let wordinput = inputAll[i].value.toUpperCase()
            inputAll[i].addEventListener('input',function(){
                this.style.color='black'
            })
            if(wordSplit === wordinput){
                inputAll[i].classList.add('check')
                inputAll[i].style.color='green'
                inputAll[i].readOnly=true
            }
            else if(word.toUpperCase().includes(wordinput) && !inputAll[i].classList.contains('check')){
                inputAll[i].style.color='orange'
            }
            else{
                inputAll[i].style.color='red'
            }

    }
    })
})

