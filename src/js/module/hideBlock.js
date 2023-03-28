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
                console.log(block.offsetHeight, blockInner.offsetHeight);
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
}