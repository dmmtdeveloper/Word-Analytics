const textareaEl = document.querySelector('.textarea')
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumbersEl = document.querySelector('.stat__number--words');
const twitterNumbersEl = document.querySelector('.stat__number--twitter');
const facebookNumbersEl = document.querySelector('.stat__number--facebook');


inputHandler = () => {
  // 01 determine new numbers
  const numbersOfCharacters = textareaEl.value.length;
  const twitterCharacters = 280 - numbersOfCharacters;
  const facebookCharacters = 2200 - numbersOfCharacters;
  
  let numbersOfWords = textareaEl.value.split(' ').length;
  if(textareaEl.value.length === 0){
  numbersOfWords = 0;
  }
  
  // 02 set new numbers
  charactersNumberEl.textContent = numbersOfCharacters;
  twitterNumbersEl.textContent = twitterCharacters;
  facebookNumbersEl.textContent = facebookCharacters;
  wordsNumbersEl.textContent = numbersOfWords;
  
  // 03 add visual indicator if limit is exceeded
  if(twitterCharacters < 0){
    twitterNumbersEl.classList.add('stat__number--limit')
  } else{
    twitterNumbersEl.classList.remove('stat__number--limit')
  }
  
  if(facebookCharacters < 0){
    facebookNumbersEl.classList.add('stat__number--limit')
  } else{
   facebookNumbersEl.classList.remove('stat__number--limit')
  }
  
  // 04 Example of input validation
  if(textareaEl.value.includes('<script>')){
    alert("You can´t use <script> in your text.");
    textareaEl.value = textareaEl.value.replace('<script>', '')
  }
}

 textareaEl.addEventListener('input' , inputHandler);