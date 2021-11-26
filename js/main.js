function settingMargins() {
  var galleryItems = document.querySelectorAll('.gallery__item');

  var blockWidth = document.getElementById('galleryBlock').offsetWidth; // ширина родителя
  console.log(blockWidth);

  var el = document.querySelector('.gallery__item');
  var indent = window.getComputedStyle(el, null).getPropertyValue('margin-right'); // отступ 30 или 20
  indent = parseInt(indent);
  var elWidth = window.getComputedStyle(el, null).getPropertyValue('width');
  elWidth = parseInt(elWidth);
  console.log(indent);
  console.log(elWidth);

  var countInArow = Math.floor(blockWidth/elWidth);
  countInArow = (blockWidth-(countInArow-1)*indent)/elWidth;
  countInArow = Math.floor(countInArow);
  console.log("в ряду: "+countInArow);

  var remains = galleryItems.length%countInArow;
  if(remains==0) remains=countInArow;
  console.log("остаток: "+remains);

  for(var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].classList.remove('gallery_mR-1', 'gallery_mR-2', 'gallery_mR-3', 'gallery_mR-4');
    galleryItems[i].classList.remove('gallery_mB-1', 'gallery_mB-2', 'gallery_mB-3', 'gallery_mB-4');

    galleryItems[i].classList.add('gallery_mR-'+countInArow, 'gallery_mB-'+remains); 
  }
}
settingMargins();

window.addEventListener('resize',function() {
  settingMargins();
});

