const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
const navBox = document.getElementById('nav-box');
const back = document.getElementById("back")
const subMenu = document.getElementById('sub-menu');
const nav = document.getElementById('nav');


searchIcon.addEventListener('click', function() {
  searchBox.classList.toggle('hidden');
  navBox.classList.toggle("hidden")
});

back.addEventListener('click', function () {
  searchBox.classList.add('hidden');
  navBox.classList.remove('hidden')

})

// // Thêm sự kiện hover vào mục nav để hiển thị danh sách con
// nav.addEventListener('mouseenter', function() {
//   subMenu.classList.remove('hidden');
// });

// nav.addEventListener('mouseleave', function() {
//   subMenu.classList.add('hidden');
// });