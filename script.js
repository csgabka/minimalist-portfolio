//top navigation
const upArrowTopNav = document.getElementById('upArrowTopNav');
const downArrowTopNav = document.getElementById('downArrowTopNav');
const topNavHome = document.getElementById('top-nav-home');
const topNavPort = document.getElementById('top-nav-port');

//bannner
const aboutMeBlueBtn = document.getElementById('about-me-blue-btn');

//content
const portfolioBtn = document.getElementById('portfolio-btn');
const portfolio = document.getElementById('portfolio');
const aboutMe = document.getElementById('about-me-content');
const aboutMeBtn = document.getElementById('about-me-btn');

//bottom Navigation
const upArrowBottomNav = document.getElementById('upArrowBottomNav');
const downArrowBottomNav = document.getElementById('downArrowBottomNav');
const bottomNavHome = document.getElementById('bottom-nav-home');
const bottomNavPort = document.getElementById('bottom-nav-port');

window.onload = () => {setTimeout(() => {document.body.style.opacity="100";},500);};

topNavHome.addEventListener('click', () => {
	goHome();
})

bottomNavHome.addEventListener('click', () => {
	goHome();
})

portfolioBtn.addEventListener('click', () => {
	goToPortfolio();
});

aboutMeBtn.addEventListener('click', () => {
	goToAboutMe();
});

topNavPort.addEventListener('click', () => {
	scrollToPortfolio();
})

bottomNavPort.addEventListener('click', () => {
	scrollToPortfolio();
})

aboutMeBlueBtn.addEventListener('click', () => {
	scrollToAboutMe();
})


upArrowTopNav.addEventListener('click', () => {
	scrollToBottom();
})

upArrowBottomNav.addEventListener('click', () => {
	scrollToTop();
})

downArrowTopNav.addEventListener('click', () => {
	scrollToBottom();
})

downArrowBottomNav.addEventListener('click', () => {
	scrollToTop();
})

function goHome() {
	portfolio.classList.remove('show');
	aboutMe.classList.remove('hide');
	scrollToTop();
}

function goToPortfolio() {
	portfolio.classList.add('show');
	aboutMe.classList.add('hide');
}

function goToAboutMe() {
	portfolio.classList.remove('show');
	aboutMe.classList.remove('hide');
}

function scrollToPortfolio() {
	if (portfolio.classList.contains('show') && aboutMe.classList.contains('hide'))
	{
		setTimeout(() =>
		{ portfolio.scrollIntoView({ behavior: 'smooth' }) }, 10);
	} else {
		portfolio.classList.add('show');
		aboutMe.classList.add('hide');
		setTimeout(() => { portfolio.scrollIntoView({ behavior: 'smooth' }) }, 1000);
	}
}

function scrollToAboutMe() {
	if (portfolio.classList.contains('show') && aboutMe.classList.contains('hide'))
	{
		portfolio.classList.remove('show');
		aboutMe.classList.remove('hide');
		setTimeout(() => { aboutMe.scrollIntoView({ behavior: 'smooth' }) }, 1000);
	} else {
		setTimeout(() =>
		{ aboutMe.scrollIntoView({ behavior: 'smooth' }) }, 10);
	}

}


function scrollToBottom() {
	downArrowBottomNav.scrollIntoView({ behavior: 'smooth'});
}

function scrollToTop() {
	window.scrollTo({
 top: 0,
 left: 0,
 behavior: 'smooth'
});
}
