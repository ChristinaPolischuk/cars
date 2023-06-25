module.exports = () => {
  $('.model-slider-popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled:true,
      navigateByImgClick: true,
    }
  });
}