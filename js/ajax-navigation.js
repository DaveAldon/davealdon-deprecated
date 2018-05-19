jQuery(document).ready(function($) {
	// Template handling
	$("#nav").load("../pages/nav.html");
	$("#footer").load("../pages/footer.html");
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
});
