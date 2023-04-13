module.exports = () => {
    $(".mcustom-scrollbar-wrap").mCustomScrollbar({
        axis: "x",
        mouseWheel: { enable: true },
        theme: "my-theme",
        scrollButtons: { enable: true },
        updateOnContentResize:true
    });
}