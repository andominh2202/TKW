// TODO: Viết logic mở và đóng ngăn kéo drawer
const btnOpen = document.getElementById('btnOpenDrawer');
const btnClose = document.getElementById('btnCloseDrawer');
const drawer = document.getElementById('mobileDrawer');
const backdrop = document.getElementById('drawerBackdrop');

btnOpen.addEventListener('click', () => {
  drawer.classList.add('active');
  backdrop.classList.add('active');
});

btnClose.addEventListener('click', () => {
  drawer.classList.remove('active');
  backdrop.classList.remove('active');
});

backdrop.addEventListener('click', () => {
  drawer.classList.remove('active');
  backdrop.classList.remove('active');
});
