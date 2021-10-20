$(document).ready(function () {
  jQuery('.gallerys__item').hover(
    function () {
      $(this).find('.gallerys__cover-item').fadeIn();
    },
    function () {
      $(this).find('.gallerys__cover-item').fadeOut();
    },
  );

  var container = $('#gallery');
  console.log(container[0]);

  container.imagesLoaded(function () {
    container.masonry({
      itemSelector: '.gallerys__item',
      //   columnWidth: 80,
      percentPosition: true,
      gutter: 10,
      stamp: '.stamp',
    });
  });
});
