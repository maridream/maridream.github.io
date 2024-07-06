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
