'use strict'
// $(function() {
{
  const input = document.querySelector('input');
  const log = document.getElementById('values');

  input.addEventListener('input', updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  } 
  //  s4 section
  const s4 = document.getElementById('s4');
  const s4_btn = document.getElementById('s4_btn');
  s4_btn.addEventListener('click', () => {
    const inps = s4.querySelectorAll ('input');  
    const sanseis = [];
    inps.forEach(inp => {
      if(inp.checked === true) {
        sanseis.push(inp.value)
      }   
    });
    const li = document.createElement('li');
    console.log(select.value);
    li.textContent = sanseis.join(',');
    s4.querySelector('ul').appendChild(li);
  })


  const s2 = document.getElementById('s2');

  const sele_clk = document.getElementById('sele_clk');
  const select = document.getElementById('select');  
  sele_clk.addEventListener('click', () => {
    const li = document.createElement('li');
    console.log(select.value);
    li.textContent = `${select.value} ${select.selectedIndex}番目です。`;
    s2.querySelector('ul').appendChild(li);
  })

  const s1 = document.getElementById('s1');
  const btn = document.getElementById('btn');
  const inps = s1.querySelectorAll('input');  
  console.log(inps[0]);
  // btn.addEventListener('click', () => {
  //   if (inp.value !== '') {
  //     const li = document.createElement('li');
  //     li.textContent = inp.value;
  //     s1.querySelector('ul').appendChild(li);
  //     console.log(inp.value);
  //     inp.value = '';
  //   }  
  //   inp.focus();
  // });

  inps[0].addEventListener('keypress', e => {
  
  	if (e.key === 'Enter'  && inps[0].value !== '') {
		  const li = document.createElement('li');
      li.textContent = inps[0].value;
      s1.querySelector('ul').appendChild(li);
      inps[0].value = '';
      inps[1].focus();
    } 
		return false;
  });
  inps[1].addEventListener('keypress', (event) => {
  
  	if (event.key === `Enter` && inps[1].value !== '') {
		  const li = document.createElement('li');
      li.textContent = inps[1].value;
      s1.querySelector('ul').appendChild(li);
      inps[1].value = '';
      inps[2].focus();
    } 
		return false;
  });
  inps[2].addEventListener('keypress', (event) => {
  
  	if (event.key === `Enter` && inps[2].value !== '') {
		  const li = document.createElement('li');
      li.textContent = inps[2].value;
      s1.querySelector('ul').appendChild(li);
      inps[2].value = '';
      inps[0].focus();
    } 
		return false;
  });
  // inp.addEventListener('keypress', test_ivent);
  // function test_ivent(e) {
  // 	if (e.keyCode === 13) {
	// 	  const li = document.createElement('li');
  //     li.textContent = inp.value;
  //     s1.querySelector('ul').appendChild(li);
  //     inp.value = '';
  //     inp.focus();
  //   } 
	// 	return false;
  

  
 
}
// });