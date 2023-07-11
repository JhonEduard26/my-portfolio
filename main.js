const menuList = document.querySelector('.menu-list')

document.querySelector('#menu-icon').addEventListener('click', () => {
  menuList.classList.toggle('show')
})