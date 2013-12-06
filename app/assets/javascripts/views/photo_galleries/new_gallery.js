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
			};
			reader.readAsDataURL(imgInput.files[0]);
		}
	},

	maintainAspectRatio: function ($imgPreviews) {
		$imgPreviews.css({
			"height": "auto",
			"width": "auto"
		});

		var heightStr = $imgPreviews.css("height");
		var widthStr = $imgPreviews.css("width");
		var height = parseInt(heightStr.substring(0, heightStr.length - 2));
		var width = parseInt(widthStr.substring(0, widthStr.length - 2));
		var largerAspect = height > width ? "height" : "width";
		$imgPreviews.css(largerAspect, "100%");
	}
});