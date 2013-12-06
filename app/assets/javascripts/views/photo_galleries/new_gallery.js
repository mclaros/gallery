Gallery.Views.NewGallery = Backbone.View.extend({
	template: JST["photo_galleries/gallery_form"],

	events: {
		"change #img-upload": "handleImgUpload"
	},

	render: function () {
		var renderedTemp = this.template();

		this.$el.html(renderedTemp);
		return this;
	},

	handleImgUpload: function (e) {
		e.preventDefault();
		this.previewImg(e.target);
	},

	previewImg: function (imgInput) {
		if (imgInput.files && imgInput.files[0]) {
			var that = this;
			var reader = new FileReader();

			reader.onload = function (e) {
				var $imgPreviews = $(".img-preview");
				$imgPreviews.attr("src", e.target.result)
				that.maintainAspectRatio($imgPreviews);
				that.maintainVertCenter($imgPreviews);
			};

			reader.readAsDataURL(imgInput.files[0]);
		}
	},

	maintainAspectRatio: function ($imgPreviews) {
		$imgPreviews.css({
			"height": "auto",
			"width": "auto"
		});

		var height = this.getHeight($imgPreviews);
		var width = this.getWidth($imgPreviews);
		var largerAspect = height > width ? "height" : "width";
		$imgPreviews.css(largerAspect, "100%");
	},

	maintainVertCenter: function ($imgPreviews) {
		var that = this;
		$imgPreviews.each(function (idx, imgEl) {
			var $imgEl = $(imgEl);
			var $container = $imgEl.parent();
			var imgHeight = that.getHeight($imgEl);
			var containerHeight = that.getHeight($container);
			var topSpacing = (containerHeight - imgHeight) / 2;

			$imgEl.css("margin-top", "" + topSpacing + "px");
		});
	},

	getHeight: function ($el) {
		var heightStr = $el.css("height");
		return parseInt(heightStr.substring(0, heightStr.length - 2));
	},

	getWidth: function ($el) {
		var widthStr = $el.css("width");
		return parseInt(widthStr.substring(0, widthStr.length - 2));
	}
});