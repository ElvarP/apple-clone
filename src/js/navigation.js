const toggleMobileNavigation = document.querySelector(".toggle-mobile-navigation");
const mobileNavigation = document.querySelector(".mobile-navigation");
const navigationBar = document.querySelector(".navigation-bar");
const mobileHeaderShoppingBag = document.querySelector(".mobile-header-shopping-bag");
const mobileSearchBar = document.querySelector(".mobile-search-bar");
toggleMobileNavigation.addEventListener("change", () => {
	navigationBar.classList.toggle("bg-zinc-900/100");
	navigationBar.classList.toggle("!h-full");
	mobileNavigation.classList.toggle("!max-h-full");
	mobileHeaderShoppingBag.classList.toggle("scale-0");
	mobileSearchBar.classList.toggle("!max-h-full");
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	accordion.querySelector(".accordion-title").addEventListener("click", function (e) {
		accordion.querySelector(".accordion-content").classList.toggle("max-h-96");
		accordion.querySelector(".accordion-state").classList.toggle("rotate-45");
	});
});
