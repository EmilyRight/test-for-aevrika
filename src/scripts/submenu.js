const submenu = document.querySelectorAll('.nav-item__link_sub');
const openSubMenuBtn = document.querySelectorAll('.nav-item__arrow');
const subLink = document.querySelectorAll('.submenu-item__link');

function openSubMenuHandler(event) {
  const navItemNode = event.target.closest('.nav-item');
  const subMenuNode = navItemNode.children[2];
  if (subMenuNode.classList.contains('nav-item__submenu_opened')) {
    subMenuNode.classList.remove('nav-item__submenu_opened');
    subMenuNode.style.display = 'none';
  } else {
    subMenuNode.classList.add('nav-item__submenu_opened');
    subMenuNode.style.display = 'flex';
  }
}
subLink.forEach((link) => link.addEventListener('click', openSubMenuHandler));
openSubMenuBtn.forEach((btn) => btn.addEventListener('click', openSubMenuHandler));
submenu.forEach((item) => item.addEventListener('click', openSubMenuHandler));
