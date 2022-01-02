window.onload = function () {

    function randomNumberToMax(max = 256) {
        return Math.floor(Math.random() * max)
    }

    function randomColor() {
        return `rgb(${[randomNumberToMax(), randomNumberToMax(), randomNumberToMax()].join(',')})`
    }

    function filterValue(){
        return `drop-shadow(.11em .1em 0px ${randomColor()})`
    }

    function template(str) {
        let tpl = str
                    .split('')
                    .map(letter => `<div class="animated-letter random-color" style="filter:${filterValue()};">${letter}</div>`)
                    .join('')
                    .replace(/\\n/g, '')
        return tpl
    }

    function switchColors() {
        Array.from(document.querySelectorAll('.random-color')).forEach(element => {
            element.style.color = randomColor()
        })

        //random background...
    }

    if ('onmouseover' in document.documentElement) window.onclick = init()

    function init() {
        document.querySelectorAll('section')[0].innerHTML = template('Artist ') + '<br class="mobile-only">' + template('Name')
        document.querySelectorAll('section')[1].innerHTML = '<h1> here are my links</h1> <a href="https://www.blogger.com">blog</a> </br> <a href="https://www.squarespace.com">site</a> </br> <a href="https://www.vimeo.com">vlog</a>'
    
        switchColors()

        const letters = Array.from(document.querySelectorAll('.animated-letter'))

        letters.forEach(letter => {
            letter.addEventListener('mouseover', event => {
                event.target.style.color = randomColor()
                event.target.style.filter = filterValue()
            })
            letter.addEventListener('touchstart', event => {
                event.target.style.color = randomColor()
                event.target.style.filter = filterValue()
            })
        })
    }

    init()

    //     const setBg = () => {
    //     const randomColor = 
    //     Math.floor(Math.random()*16777215).toString(16)
    //     document.body.style.backgroundColor = "#" + randomColor
    //     color.innerHTML = "#" + randomColor
    // }


    // function randomColor() {
    //     return `Math.floor(Math.random()*16777215).toString(16)`
    // }

    // function switchColors() {
    //     Array.from(document.querySelectorAll('.random-color')).forEach(element => {
    //         element.style.color = randomColor()
    //     })
    // }

    // if ('onmouseover' in document.documentElement) window.onclick = init()

    // function init() {
    //     switchColors()

    //     const letters = Array.from(document.querySelectorAll('.animated-letters'))

    //     letters.forEach(letter => {
    //         letter.addEventListener('mouseover', event => {
    //             event.target.style.color = "#" + randomColor()
    //         })
    //         letter.addEventListener('touchstart', event => {
    //             event.target.style.color = "#" + randomColor()
    //         })
    //     })
    // }

    // genNew.addEventListener("click", setBg)
    // setBg()


}