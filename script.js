function scrollCarousel(direction, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    const itemWidth = document.querySelector(`#${carouselId} .carousel-item`).offsetWidth;
    const scrollAmount = itemWidth + 20; // 20 é a gap entre os itens
    carousel.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
      this.handleLinkClick = this.handleLinkClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    handleLinkClick() {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks.forEach((link) => {
        link.addEventListener("click", this.handleLinkClick);
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  