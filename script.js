const nav = document.getElementById('nav');

window.addEventListener('scroll',function(){
	scrollposition = window.scrollY;

	if(scrollposition >= 60){
		nav.classList.add('nav-bg-clr');
	}else if(scrollposition <= 60){
		nav.classList.remove('nav-bg-clr');
	}
})