const bgAudio = document.getElementById('bgAudio');

bgAudio.volume = 0.2;
bgAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);



function showContent(contentId) {
  var contents = document.querySelectorAll('.hide');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}