$(function() {
   /* Hospital List */  
   $('.hospitals .hospital').click(function() {
       $('.hospitals .hospital').removeClass('active');
       $('.hospitals .hospital').removeClass('focus');
       $(this).addClass('active');
       $(this).addClass('focus');
   });
   $(document).on('click','.hospitals .hospital.focus > span',function() {
	   $('.hospitals .hospital').addClass('active');
       $('.hospitals .hospital').removeClass('focus');
       $('.statistics').delay(0).hide();
       $('#s-default').delay(0).show();
       $('#s-default').addClass('active');
   });
   $('.hospitals .hospital a').click(function() {
	   $('.statistics').delay(0).hide();
	   $('.statistics').removeClass('active');
   });

   $('[id^=h-]').click(function(e) {
     var hID = $(this).attr('id');
     var sID = hID.replace('h-', 's-');
     $('#'+sID).delay(0).show();
     $('#'+sID).addClass('active');
   });

   /* Statistics Content */
   $(document).on('click','.statistics.active .statisticsNav li',function() {
	   $('.statistics.active .statisticsNav li').removeClass('active');
       $(this).addClass('active');   
       $('.statisticsContent .panel').delay(0).hide();
	   $('.statisticsContent .panel').removeClass('active');
   });     
   $(document).on('click','.statistics.active .statisticsNav li.weekly',function() {
       $('.statisticsContent .panel.weekly').delay(0).show();
       $('.statisticsContent .panel.weekly').addClass('active');   
   });  
   $(document).on('click','.statistics.active .statisticsNav li.monthly',function() {   
       $('.statisticsContent .panel.monthly').delay(0).show();
       $('.statisticsContent .panel.monthly').addClass('active');   
   });   
   $(document).on('click','.statistics.active .statisticsNav li.quarterly',function() {
       $('.statisticsContent .panel.quarterly').delay(0).show();
       $('.statisticsContent .panel.quarterly').addClass('active');   
   });   
   $(document).on('click','.statistics.active .statisticsNav li.lifetime',function() {
       $('.statisticsContent .panel.lifetime').delay(0).show();
       $('.statisticsContent .panel.lifetime').addClass('active');   
   });   
   /* Feedback Boxes */
   $(".feedbackBoxes .feedbackBox:nth-child(3n+1)").addClass("fb-a")
   $(".feedbackBoxes .feedbackBox:nth-child(3n+2)").addClass("fb-b")
   $(".feedbackBoxes .feedbackBox:nth-child(3n)").addClass("fb-c")
   $( '.feedbackBoxes' ).masonry({ 
	    itemSelector : '.feedbackBox',
	    gutter: 25,
	    columnWidth: 0,
	    isAnimated: true
    });
   $(".feedbackBoxes .feedbackBox .readMore").click(function(){
   	   $(this).parent().addClass('active');
   	   $('.feedbackBoxes').masonry();
   });
   /* Dashboard data table */
   $(".statistics .statisticsContent .panel > table tr:nth-child(even)").addClass("alt")
   $(".statistics .statisticsContent .panel > table tr td:nth-child(1)").addClass("question")
});