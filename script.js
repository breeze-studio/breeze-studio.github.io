(function(breeze, $)
{
	var _expandButtonText = "Подробнее…";
	var _collapseButtonText = "Скрыть подробности";

	function start()
	{
		windowScroll();
		$(window).scroll(windowScroll);
		$(".collapsed").each(crateCollapsed);
	}

	function windowScroll()
	{
		if($(window).scrollTop() > 85)
			$("header").addClass("fixed");
		else
			$("header").removeClass("fixed");
	}

	function crateCollapsed()
	{
		var item = $(this);
		var customText = item.attr("data-text");
		var expandButtonText = customText || _expandButtonText;
		var collapseButtonText = customText || _collapseButtonText;
		var button = $("<p class='expandButton'>").text(expandButtonText);
		item.before(
			button.click(function()
			{
				if(!item.is(":visible")) button.text(collapseButtonText);
				item.slideToggle(function()
				{
					if(!item.is(":visible")) button.text(expandButtonText);
				});
			}));
	}

	if(!String.prototype.fmt)
	{
		String.prototype.fmt = function()
		{
			var args = arguments;
			return this.replace(/{(\d+)}/g, function(match, number)
			{
				return typeof args[number] != "undefined" ? args[number] : match;
			});
		};
	}

	breeze.start = start;

})(window.breeze = window.breeze || {}, $);

$(breeze.start);