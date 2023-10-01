const form = document.querySelector('form');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);

  const weight = parseInt(document.getElementById('weight').value);
  const height = parseInt(document.getElementById('height').value);
  const result = document.querySelector('.result');
  console.log(weight);
  console.log(height);


  if(weight === '' || weight <= 0 || isNaN(weight) ){
    result.innerText = 'Enter valid weight!!'
  }
  else if(height === '' || height <= 0 || isNaN(height) ){
    result.innerText = 'Enter valid height!!'
  } 
  else {
    result.innerHTML = weight / ((height * height)/10000);
  }
  
  

})