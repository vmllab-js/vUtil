/*!
 * app.js
 *
 * @author Rhine Liu
 * @since 2017-09-18
 */
(function ($, factory) {

	"use strict";

	window.vUtil = window.vUtil || {};
	window.app = factory($);

})(jQuery, function ($) {

	"use strict";

	var app = {
		list: [
			'Array',
			'Check',
			'Cookie',
			'Date',
			'DOM',
			'Event',
			'Location',
			'Math',
			'Object',
			'String',
			'UA'
		],
		init: function () {
			this.loadScripts(function () {
				app.__init();
			});
		},
		__init: function () {
			// 初始化左边栏
			var $list = $('#sidebar .list').empty();
			this.list.forEach(function (item) {
				$list.append('<a page="' + item + '" href="#/?page=' + item + '">' + item + '</a>');
			});

			// 页面路由
			window.addEventListener('hashchange', function () {
				app.onhashchange();
			});
			var page = vUtil.Location.hash('page');
			if (page) {
				app.onhashchange();
			} else {
				app.gotoPage('Math');
			}

			// 注册点击事件
			$('#content').on('click', '.btn-run', function () {
				var $example = $(this).parents('.example');
				var code = app.codes[$example.data('id')];
				$example.find('pre code').eq(1).html(__eval(code));
				hljs.highlightBlock($example.find('pre code').get(1));
			});
		},
		loadScripts: function (callback) {
			var list = this.list, index = 0;
			__load();

			function __load() {
				var item = list[index++];
				if (item) {
					$.getScript('../src/vUtil.' + item + '.js', __load);
				} else {
					callback();
				}
			}
		},
		onhashchange: function () {
			var page = vUtil.Location.hash('page');
			$('#sidebar .list a').removeClass('active');
			$('#sidebar .list a[page="' + page + '"]').addClass('active');
			this.showPage(page);
		},
		gotoPage: function (page) {
			window.location.hash = '#/?page=' + page;
		},
		showPage: function (page) {
			$('#content .examples').empty();
			app.codes = [];
			$.getJSON('jsons/' + page + '.json', function (json) {
				json.examples.forEach(function (example, i) {
					app.codes.push(example.code);
					__showExample(example, i);
				});

				$('#content pre code').each(function (i, code) {
					hljs.highlightBlock(code);
				});
			});

			function __showExample(example, id) {
				var code = example.code;
				var $example = $('<div class="example">');
				$example.data('id', id);
				var $code = $('<pre>Code of ' + example.func + ': <code class="javascript">' + code + '</code></pre>');
				$example.append($code);
				var $result = $('<pre>Result: <code>' + __eval(code) + '</code></pre>');
				$example.append($result);
				var $result = $('<div class="btn btn-run">RUN</div>');
				$code.append($result);

				$example.appendTo('#content .examples');
			}
		}
	};

	function __eval(code) {
		var results = [];
		try {
			var ret = JSON.stringify(eval(code));
			return results.length ? results.join('\n') : ret;
		} catch (e) {
			return e;
		}

		function log() {
			var arr = [];
			window.Array.prototype.forEach.call(arguments, function (result) {
				arr.push(JSON.stringify(result))
			});
			results.push(arr.join(', '));
		}
	}

	return app;
});