window.onload = function () {
    
    function randomNumberToMax(max = 256) {
        return Math.floor(Math.random() * max)
    }

    function randomColor() {
        return `rgb(${[randomNumberToMax(), randomNumberToMax(), randomNumberToMax()].join(',')})`
    }

    function filterValue() {
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

    Array
        .from(document.querySelectorAll('input'))
        .forEach(input => input.value = '')

    function resetAll(selector) {
        Array
            .from(document.querySelectorAll(selector))
            .forEach(p => p.innerHTML = 'Fridge')
    }

    document
        .addEventListener('keyup', event => {
            if (event.target.value) {
                document.querySelector('#filled-text').innerHTML = template(event.target.value.toUpperCase())
                switchColors()
            } else if (!event.target.value && document.querySelector('p').innerHTML) {
                document.querySelector('#filled-text').innerHTML = template(document.querySelector('p').innerHTML)
            } else {
                resetAll()
            }
        })

    
    function switchColors() {
        Array.from(document.querySelectorAll('.random-color')).forEach(element => {
            element.style.color = randomColor()
        })
    }

}