'use strict'

let k = 0, l = 0, m = 0;
let hour = document.querySelector('.hour');
let minut = document.querySelector('.minut');
let sec = document.querySelector('.sec');

setInterval(time, 1000)

function time(){
	sec.style.transform = 'rotate('+k+'deg)';
	minut.style.transform = 'rotate('+l+'deg)';
	hour.style.transform = 'rotate('+m+'deg)';

	k += 6;
	if(k == 360){
		k = 0;
		l = l + 6;
	}

	if(l == 360){
		l = 0;
		m += 6;
	}

	if(m == 360){
		m = 0;
	}
}
