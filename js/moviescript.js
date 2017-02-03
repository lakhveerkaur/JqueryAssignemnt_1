
$(function(){

var $details=$('#details');
var $movie=$('#movie');
var count=0;

$('#search').on('click',function(){
$('#details').empty();
var name= $movie.val();
var moviename='http://www.omdbapi.com/?s='+name;

$.ajax({
	type:'GET',
	url:moviename,
	success:function(moviename){
 
   	$.each(moviename,function(i,movies){

   		$.each(movies,function(index,item){
   	/*if ($('#details').is(':empty')){ {*/
     
     	$details.append("<br><strong>Title:</strong>"+item.Title,
     	 				"<br><strong>Year:</strong>" +item.Year,
     	 				"<br><strong>Type:</strong>"+item.Type,
     	 				"<br><strong>imdbID:</strong>"+ item.imdbID, 
              '<br><strong>Poster:</strong><br><img src='+item.Poster+'>'
 						);
 				     
 		});

 	});
     		  
  }
     		
	});
})
$('#movie').on('click',function(){
$('#details').empty();
	/*$.ajax({
		type:'DELETE',
		url:'http://www.omdbapi.com/?s=title' + $('#details'),
	});*/
})
});
