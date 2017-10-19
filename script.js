$.getJSON("https://api.airtable.com/v0/appCz5kTUJui5vK84/musics?api_key=key0qZJf2b8584xuy", 

					function(data) {
						console.log(data);

						rang = 1;

						$.each(data.records, function(key,val) {

							if (rang % 2) {
								direction = "Gauche";
							}
							else {
								direction = "Droite";
							}

							$("<img class ='img3' src='"+rang+".png'><br><br><img class ='like"+direction+"' src='likee.png'>").appendTo('#musiques');


        					$("<div class='musique"+direction+"'><iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe></div>").appendTo('#musiques');

							rang = rang + 1;

						});

					}

);

