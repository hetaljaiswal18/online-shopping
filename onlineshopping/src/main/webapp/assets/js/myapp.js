$(function() {
	
	//solving the active menu problem
		switch(menu) {             //'menu' from page.jsp 
			case 'About Us' :      // 'About Us' from PageController
				$('#about').addClass('active');   // id : 'about' from navbar.jsp
				break;
				
			case 'Contact Us' : 
				$('#contact').addClass('active');
				break;
			default : 
				$('#home').addClass('active');
				break;
		}
});