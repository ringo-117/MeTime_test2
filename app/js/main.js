// JavaScript Document

'use strict';

// ハンバーガーメニューとスクロール制御
{
	const btn = document.querySelector('.btn');
	const container = document.querySelector('.container');

	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		container.classList.toggle('active');

		// ボディのスクロール制御
		const bodyStyle = document.body.style;
		if (bodyStyle.overflow === "hidden") {
			bodyStyle.overflow = "";
			bodyStyle.height = "";
		} else {
			bodyStyle.overflow = "hidden";
			bodyStyle.height = "100%";
		}
	});
}

// メニューリンクをクリック時、メニューを閉じる
$('#nav_list a[href]').on('click', function() {
    $('.btn').trigger('click');
});

// スクロール時のヘッダー表示制御
$(window).on('load scroll', function() {
    const scrollPosition = $(this).scrollTop();
    $('.home_header').toggleClass('is-show', scrollPosition > 500);
    $('#TOP_img, #TOP_title_h1, #TOP_title_p').toggleClass('is-show', scrollPosition > -1);
    $('#info_text, #menu_text').toggleClass('is-show', scrollPosition > -1);
});

// スクロール出現アニメーション
function scr_ani(scr, offs_max) {
	var window_h = $(window).height(),
	  offs_length = $(".offs").length,
	  ons_length = $(".ons").length;
	if (offs_length) {
	  var first_item = offs_max - offs_length;
	  for (var i = 0; i < offs_length; i++) {
		var data_scr = first_item + i;
		var offs = $('.offs[data-scr="' + data_scr + '"]');
		var target = offs.offset().top;
		var trigger = target - (window_h + scr - window_h * 0.2);
		if (trigger < 0) {
		  offs.removeClass("offs").addClass("ons");
		} else {
		  return;
		}
	  }
	}
	if (ons_length) {
	  var last_item = ons_length - 1;
	  for (var i = 0; i < ons_length; i++) {
		var data_scr = last_item - i;
		var ons = $('.ons[data-scr="' + data_scr + '"]');
		var target = ons.offset().top;
		var trigger = target - (window_h + scr);
		if (trigger > 0) {
		  ons.removeClass("ons").addClass("offs");
		} else {
		  return;
		}
	  }
	}
}

$(function () {
	var scr = $(window).scrollTop();
	var offs_max = $(".offs").length;
	$(".offs").each(function(index) {
		$(this).attr("data-scr", index);
	});
	scr_ani(scr, offs_max);
	$(window).on("scroll", function () {
		scr_ani($(window).scrollTop(), offs_max);
	});
});

// MAPアニメーション
const images = document.querySelectorAll('.img-wrap');
const animationClassName = 'img-animation';

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add(animationClassName);
			observer.unobserve(entry.target);
		}
	});
});

images.forEach((image) => observer.observe(image));

// タイトルアニメーション
const titles = document.querySelectorAll('.title_wrap');
const animationClassName2 = 'title_animation';

const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add(animationClassName2);
			observer2.unobserve(entry.target);
		}
	});
});

titles.forEach((title) => observer2.observe(title));


