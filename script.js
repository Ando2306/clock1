'use strict'

let k, l, m;
let hour = document.querySelector('.hour');
let minut = document.querySelector('.minut');
let sec = document.querySelector('.sec');

let dat = new Date();
l = dat.getMinutes()*6;
m = dat.getHours();
k = dat.getSeconds()*6;

if(m > 12){
	m -= 12;
}
m *= 30;

setInterval(time, 1000);

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
