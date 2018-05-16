function navigate(pageRef) {
	// AJAX shorthand for dumping html contents into element
	$('#wrap').load(pageRef);
}

jQuery(document).ready(function($) {
	// Handler for mobile menu
  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger span").click(function(){
      if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $(this).removeClass("open");
      } else {
          $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          $(this).addClass("open");
      }
  });

  // Default to homepage
  navigate("pages/home.html")
  // Click event for nav links to run ajax on content element
  $('.nav-link').on("click", function(e) {
    e.preventDefault();
		var pageRef = $(this).attr('href');
		navigate(pageRef)
  });
});
