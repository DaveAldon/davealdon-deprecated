function navigate(pageRef) {
	// AJAX shorthand for dumping html contents into element
	$('#content').load(pageRef);
}

jQuery(document).ready(function($) {
  // Default to homepage
  navigate("pages/home.html")
  // Click event for nav links to run ajax on content element
  $('.nav-link').on("click", function(e) {
    e.preventDefault();
		var pageRef = $(this).attr('href');
		navigate(pageRef)
  });
});
