var $navBtn = $('.nav-btn');
var $menu = $('.menu');

var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $lbHeading = $('.lightbox-heading');
var $lbCaption = $('.lightbox-caption');

//==============================================================================
// NAV STUFF
//==============================================================================

$navBtn.on('click', function () {
	$menu.toggleClass('js-menu-open');
});

$menu.on('click', 'a', function (e) {
	$menu.removeClass('js-menu-open');
});

//==============================================================================
//LIGHTBOX STUFF
//==============================================================================

$thumbs.on('click', 'a', function (e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
	$lbHeading.html($(this).attr('data-title'));
	$lbCaption.html($(this).attr('data-caption'));
});

$('body').keydown(function (e) {
	if (e.keyCode==27) $lb.attr('data-state', 'hidden');
});//closes lightbox with 'esc' key

$btnClose.on('click', function () {
	$lb.attr('data-state', 'hidden');
});

//==============================================================================
//SMOOTH SCROLL STUFF
//==============================================================================

$('.nav-list').localScroll({
});

//==============================================================================
// GALLERY STUFF
//==============================================================================

Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria');
