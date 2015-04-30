var $navBtn = $('.nav-btn');
var $menu = $('.menu');
var $main = $('.main');
var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $lbHeading = $('.lightbox-heading');
var $lbCaption = $('.lightbox-caption');

$thumbs.on('click', 'a', function (e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
	$lbHeading.html($(this).attr('data-title'));
	$lbCaption.html($(this).attr('data-caption'));
	$main.toggleClass('js-blur');
});

$btnClose.on('click', function () {
	$lb.attr('data-state', 'hidden');
	$main.removeClass('js-blur');
});

$navBtn.on('click', function () {
	$menu.toggleClass('js-menu-open');
	$main.toggleClass('js-blur');
	$('body').toggleClass('js-no-scroll')
});

$menu.on('click', 'a', function (e) {
	$menu.removeClass('js-menu-open');
	$main.removeClass('js-blur');
});

$('.nav-list').localScroll({
});

Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria');
