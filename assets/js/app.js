const cl = console.log();

const book = document.getElementById('book');
function onFilter(eve) {
    let val = eve.target.value;
    let allDivs = [...document.querySelectorAll('.all')]
    allDivs.forEach(d => {
        d.classList.add('d-none');

    })

    let selectDiv = [...document.getElementsByClassName(val)]
    selectDiv.forEach(d => {
        d.classList.remove('d-none')
    })
}

book.addEventListener('change', onFilter)