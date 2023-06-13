module.exports = () => {
    const hideBlock = () => {
        window.addEventListener("load", showBlock);
        window.addEventListener("resize", showBlock);
    
        function showBlock() {
            if (document.querySelectorAll(".js-show-block").length == 0) return false;
            const showAll = document.querySelectorAll(".js-show-block");
            showAll.forEach((el) => {
                const block = el.previousElementSibling;
                const blockInner = block.querySelector(".js-hide-block-inner");
                if (blockInner.offsetHeight > block.offsetHeight) {
                    el.style.display = "block";
                    block.classList.add("hidden");
                } else {
                    el.style.display = null;
                    block.classList.remove("hidden");
                }
                el.addEventListener("click", function () {
                    if (block.style.maxHeight) {
                        block.style.maxHeight = null;
                        block.classList.add("hidden");
                        this.textContent = "Read more >";
                    } else {
                        block.style.maxHeight = block.scrollHeight + "px";
                        block.classList.remove("hidden");
                        this.textContent = "Read less >";
                    }
                });
            });
        }
    };
    
    hideBlock();

    // jQuery
    // function showBlock() {
	// 	if($(".js-show-block").length == 0) return false;
	// 	$(".js-show-block").each((i, el) => {
	// 		const block = $(el).prev();
	// 		const blockInner = block.find(".js-hide-block-inner");
	// 		if(blockInner.outerHeight() > block.outerHeight()) {
	// 			$(el).css("display", "block");
	// 			block.addClass("hidden");
	// 		} else {
	// 			$(el).css("display", null);
	// 			block.removeClass("hidden");
	// 		}
	// 		$(el).on("click", function() {
	// 			if(block.css("max-height")) {
	// 				block.css("max-height", null);
	// 				block.addClass("hidden");
	// 				$(this).text("Read more >");
	// 			console.log(1111);
	// 			} else {
	// 				block.css("max-height", `${block.scrollHeight}px`);
	// 				// block.style.maxHeight = block.scrollHeight + "px";
	// 				block.removeClass("hidden");
	// 				$(this).text("Read less >");
	// 			console.log(2222);
	// 			}
	// 		});
	// 	});
	// }
}