const CARDS = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const scrollingPastView = window.innerHeight/ 5 * 4

    CARDS.forEach(card => {
        const cardTip = card.getBoundingClientRect().top

        console.log(cardTip)

        if (cardTip < scrollingPastView) {
            card.classList.add('reveal') 
        } else {
            card.classList.remove('reveal')
        }
    })

    
})

