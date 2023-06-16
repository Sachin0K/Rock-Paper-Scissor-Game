
const selectionButtons = document.querySelectorAll('[data-selection]');

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'scissor'
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats: 'rock'
    },
    {
        name: 'scissor',
        emoji: '✌️',
        beats: 'paper'
    }
]


selectionButtons.forEach(rockButton=>{
    rockButton.addEventListener('click', e =>{
       const selectionName = rockButton.dataset.selection
       const selection = SELECTIONS.find(rock => rock.name === selectionName)
       makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    console.log(computerSelection)
}

function isWinner(rock, opponentSelection){
    return rock.beats === opponentSelection.name
}



function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}