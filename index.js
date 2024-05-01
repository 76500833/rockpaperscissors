function startPlaying() {
    let confirmation = window.confirm('do you wana play rps')
    if (confirmation) {

        let computerChoices = ['r', 'p', 's'];
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        let userChoice = prompt('Please enter R, P, or S!')
        
        if (userChoice === 'r' && computerChoice == 'r') {
            alert(`I chose ${computerChoice}, we tied`)
        }
        if (userChoice === 'r' && computerChoice === 's') {
            alert(`I chose ${computerChoice}, you won`)
        }
        if (userChoice === 'r' && computerChoice === 'p') {
            alert(`I chose ${computerChoice}, you lose`)
        }

        //Use cases fo player choosing paper
        if (userChoice === 'p' && computerChoice == 'p') {
            alert(`I chose ${computerChoice}, we tied`)
        }
        if (userChoice === 'p' && computerChoice === 's') {
            alert(`I chose ${computerChoice}, you lost`)
        }
        if (userChoice === 'p' && computerChoice === 'r') {
            alert(`I chose ${computerChoice}, you won`)
        }

        //Use cases fo player choosing scissors
        if (userChoice === 's' && computerChoice == 's') {
            alert(`I chose ${computerChoice}, we tied`)
        }
        if (userChoice === 's' && computerChoice === 'r') {
            alert(`I chose ${computerChoice}, you lost`)
        }
        if (userChoice === 's' && computerChoice === 'p') {
            alert(`I chose ${computerChoice}, you won`)
        }
    } else {
        window.alert('nvm')
    }
}
startPlaying()



