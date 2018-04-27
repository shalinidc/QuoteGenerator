var quoteArray  = [
  '\"You can do anything, but not everything.\"<br> -David Allen',
  '\"Imagination is more important than knowledge.\"<br> -Albert Einstein',
  '\"Live as if you were to die tomorrow. Learn as if you were to live forever.\"<br> -M.K. Gandhi',
  '\"Success is a lousy teacher. It seduces smart people into thinking they can\'t lose.\"<br> -Bill Gates',
  '\"It\'s not that I\'m so smart, it\'s just that I stay with problems longer.\"<br> -Albert Einstein',
  '\"Ability has nothing to do with opportunity.\"<br> -Napoleon Bonaparte',
  '\"When ability exceeds ambition, or ambition exceeds ability, the likelihood of success is limited.\"<br> -Ralph Half',
  '\"If plan A fails, remember there are 25 more letters.\"<br> -Chris Guillebeau',
  '\"To lead the people, walk behind them.\"<br> -Lao Tzu',
  '\"Name the greatest of all inventors. Accident.\"<br> -Mark Twain'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quoteArray.length));
  document.getElementById('quoteDisplay').innerHTML = quoteArray[randomNumber];
}
