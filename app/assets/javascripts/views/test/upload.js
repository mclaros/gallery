Gallery.Views.Upload = Backbone.View.extend({
	template: JST["test/upload"],

	events: {
		"click #add-file-input": "addFileInput",
		"change .img-upload": "previewImg"
	},

	render: function () {
		var renderedTemp = this.template();

		this.$el.html(renderedTemp);
		return this;
	},

	addFileInput: function (e) {
		e.preventDefault();
		var newInput = $("#upload-proto").clone();
		newInput.attr("id", "");
		newInput.fadeIn();
		$("#upload-test-form").append(newInput);
		this.validateAddInput();
	},

	compareImgUploads: function () {
		var $imgInputDivs = $(".upload-div");
		var imgFormCount = $imgInputDivs.length - 1; //discount proto div
		var imgUploadsCount = 0;

		$imgInputDivs.each(function (idx, imgInputDiv) {
			var $imgPreview = $(imgInputDiv).find(".img-preview");
			var srcValue = $imgPreview.attr("src");
			if ( !_.isUndefined(srcValue) && srcValue != "") {
				imgUploadsCount += 1;
			} 
		});
		return imgFormCount == imgUploadsCount;
	},

	previewImg: function (evt) {
		evt.preventDefault();
		var imgInput = evt.target;
		if (imgInput.files && imgInput.files[0]) {
			var that = this;
			var reader = new FileReader();

			reader.onload = function (e) {
				var $photoFormContainer = $(imgInput).parent().parent();
				var $imgPreview = $photoFormContainer.find(".img-preview");
				$imgPreview.attr("src", e.target.result);
				that.maintainAspectRatio($imgPreview);
				that.maintainVertCenter($imgPreview);
				that.validateAddInput();
			};

			reader.readAsDataURL(imgInput.files[0]);
		}
		else {
			var $imgInputContainer = $(imgInput).parent().parent();
			var $imgPreview = $imgInputContainer.find(".img-preview");
			$imgPreview.attr("src", "");
			this.validateAddInput();
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
	},

	validateAddInput: function () {
		if (this.compareImgUploads()) {
			$("#add-file-input").attr("disabled", false);
		}
		else {
			$("#add-file-input").attr("disabled", true);
		}
	}
});