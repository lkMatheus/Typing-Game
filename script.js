const quotes = [
    'As galáxias estão em movimento, e algumas caminham em direção a outras, o que provavelmente levará a uma colisão. Isso deve ocorrer entre a Via Láctea e a Galáxia de Andrômeda daqui a 5 bilhões de anos!',
    'Há galáxias em forma de espiral, como a Via Láctea, com braços que parecem um cata-vento. Há também as elípticas e as galáxias com formas irregulares!',
    'A maioria das galáxias surgiu um pouco depois da formação do universo. Os cientistas acreditam que elas tenham, em média, entre dez e treze bilhões de anos! A galáxia mais nova de que se tem notícia nasceu há cerca de quinhentos milhões de anos.',
];
let words =[];
let wordIndex = 0;
let starTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


let starting = document.getElementById('start');
    starting.addEventListener('click', () => {
   
        const quoteIndex = Math.floor(Math.random() * quotes.length);

        const quote = quotes[quoteIndex];

        words = quote.split(' ');
        wordIndex = 0;

        const spanWords = words.map(function(word) { return `<span>${word} </span>`});
        quoteElement.innerHTML = spanWords.join('');
        quoteElement.childNodes[0].className = 'highlight';

        messageElement.innerText = '';

        typedValueElement.value = '';
        typedValueElement.focus();
    
  
    
    starTime = new Date().getTime();
  });

 
typedValueElement.addEventListener('input', () => {
    
    const currentWord = words[wordIndex];
    
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      
      const elapsedTime = new Date().getTime() - startTime;
      const message = `Sucesso, Parabéns ${elapsedTime / 1000} seconds.`;
      messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      
      typedValueElement.value = '';
      
      wordIndex++;
      
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      
      typedValueElement.className = '';
    } else {
      
      typedValueElement.className = 'error';
    }
  });