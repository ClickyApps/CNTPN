$(function(){
	
	// Make Tabs Work
	if ( $('.hospitalContainer').length ) {
        $('.tabContent').hide();
        $('.tabs a:first').addClass('active').show();
        $('.contentArea .tabContent:first').show();
        $('.tabs a').click(function (e) {
        	e.preventDefault();
            $('.tabs a').removeClass('active');
            $(this).addClass('active');
            $('.tabContent').hide();
            var activeTab = $(this).attr('href');
            $(activeTab).show();
            if ( $(this).hasClass('support') || $(this).hasClass('visiting') )
            {
	            $('.hospital .wardSwitch').show();
            } else {
	            $('.hospital .wardSwitch').hide();
            }
        });
    }
    
    // Ward Switch 
    $('.wardSwitch a').click(function(e){
    	e.preventDefault();
    	$('.wardSwitch a').removeClass('active');
    	$(this).addClass('active');
    	var ward = $(this).attr('class').split(' ')[0];
    	$('div.wardOne, div.wardTwo, div.wardThree').hide();
    	$('div.'+ward).show();
    });
    
    // Set Width of Arrow on Tab
    var tabWidth = $('footer.tabs a.tab').width() + 4;
    tabWidth = tabWidth / 2;
    $('footer.tabs a.tab span').each(function(){
    	$(this).css({'border-left-width':tabWidth,'border-right-width':tabWidth});
    });
    	
});