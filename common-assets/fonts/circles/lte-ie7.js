/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'circles\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-number' : '&#xe000;',
			'icon-number-2' : '&#xe001;',
			'icon-number-3' : '&#xe002;',
			'icon-number-4' : '&#xe003;',
			'icon-number-5' : '&#xe004;',
			'icon-number-6' : '&#xe005;',
			'icon-number-7' : '&#xe006;',
			'icon-number-8' : '&#xe007;',
			'icon-number-9' : '&#xe008;',
			'icon-number-10' : '&#xe009;',
			'icon-number-11' : '&#xe00a;',
			'icon-number-12' : '&#xe00b;',
			'icon-number-13' : '&#xe00c;',
			'icon-number-14' : '&#xe00d;',
			'icon-number-15' : '&#xe00e;',
			'icon-number-16' : '&#xe00f;',
			'icon-number-17' : '&#xe010;',
			'icon-number-18' : '&#xe011;',
			'icon-number-19' : '&#xe012;',
			'icon-number-20' : '&#xe013;',
			'icon-quote' : '&#xe014;',
			'icon-quote-2' : '&#xe015;',
			'icon-film' : '&#xe016;',
			'icon-checkmark' : '&#xe017;',
			'icon-checkmark-2' : '&#xe018;',
			'icon-cancel' : '&#xe019;',
			'icon-cancel-2' : '&#xe01a;',
			'icon-plus' : '&#xe01b;',
			'icon-plus-2' : '&#xe01c;',
			'icon-minus' : '&#xe01d;',
			'icon-minus-2' : '&#xe01e;',
			'icon-notice' : '&#xe01f;',
			'icon-notice-2' : '&#xe020;',
			'icon-time' : '&#xe021;',
			'icon-chart' : '&#xe022;',
			'icon-chart-2' : '&#xe023;',
			'icon-eight-ball' : '&#xe024;',
			'icon-bowling' : '&#xe025;',
			'icon-baseball' : '&#xe026;',
			'icon-soccer' : '&#xe027;',
			'icon-smiley' : '&#xe028;',
			'icon-sad' : '&#xe029;',
			'icon-mute' : '&#xe02a;',
			'icon-bomb' : '&#xe02b;',
			'icon-blocked' : '&#xe02c;',
			'icon-globe' : '&#xe02d;',
			'icon-globe-2' : '&#xe02e;',
			'icon-ying-yang' : '&#xe02f;',
			'icon-target' : '&#xe030;',
			'icon-navigation' : '&#xe031;',
			'icon-switch' : '&#xe032;',
			'icon-rotate' : '&#xe033;',
			'icon-rotate-2' : '&#xe034;',
			'icon-heart' : '&#xe035;',
			'icon-star' : '&#xe036;',
			'icon-star-2' : '&#xe037;',
			'icon-star-3' : '&#xe038;',
			'icon-coin' : '&#xe039;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};