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
			var reader = new FileReader();
			reader.onload = function (e) {
				var $imgPreviews = $(".img-preview");
				$imgPreviews.attr("src", e.target.result)
				this.maintainAspectRatio($imgPreviews);
			}.bind(this);
			reader.readAsDataURL(imgInput.files[0]);
		}
	},

	maintainAspectRatio: function ($imgPreviewsArr) {
		$imgPreviewsArr.each(function (idx, imgPreview) {
			var $imgPreview = $(imgPreview);
			var heightStr = $imgPreview.css("height");
			var widthStr = $imgPreview.css("width");
			var height = parseInt(heightStr.substring(0, heightStr.length - 2));
			var width = parseInt(widthStr.substring(0, widthStr.length - 2));
			var largerAspect = height > width ? "height" : "width";
			var smallerAspect = height > width ? "width" : "height";
			$imgPreview.css(largerAspect, "100%");
			$imgPreview.css(smallerAspect, "auto");
		});
	}
});