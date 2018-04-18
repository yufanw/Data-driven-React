/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Gocious-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-angle-down': '&#xe900;',
		'icon-angle-left': '&#xe901;',
		'icon-angle-right': '&#xe902;',
		'icon-angle-up': '&#xe903;',
		'icon-plus': '&#xe90a;',
		'icon-close': '&#xe905;',
		'icon-calendar': '&#xe904;',
		'icon-dots': '&#xe906;',
		'icon-download': '&#xe907;',
		'icon-upload': '&#xe90d;',
		'icon-history': '&#xe909;',
		'icon-feature-family': '&#xe908;',
		'icon-reports': '&#xe90e;',
		'icon-programs': '&#xe90b;',
		'icon-search': '&#xe90c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
