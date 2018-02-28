$(function(){
	$('#main').hover(function(){pasteSelection();});
	$('#bttn').click(function(){callAPI();});

});
function pasteSelection() {
	chrome.tabs.executeScript( {
		code: "window.getSelection().toString();"
	}, function(selection) {
		document.getElementById("ttl").value = selection[0];
	});



}
function callAPI()
{
	var mvi=$("#ttl").val();
	var selValue = $('input[name=categ]:checked').val();
	$.getJSON('http://www.omdbapi.com/?apikey=9bb9845&t='+encodeURI(mvi)+'&type='+encodeURI(selValue)).then(function(response){
		var vali = jQuery.parseJSON(JSON.stringify(response));

    	$("#ans").css("display","inline");	
    	$("#ans").css("opacity","1");

    	//console.log();
    	$("#title").val(vali["Title"]);
    	$("#pos").attr('src',vali["Poster"]);
    	$("#rating").val(vali["imdbRating"]);
    	$("#director").val(vali["Director"]);
    	$("#cast").val(vali["Actors"]);
    	$("#year").val(vali["Year"]);
  })
}
