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

							code = "<img class ='img3' src='"+rang+".png'><br><br>\
									<article class='musique"+direction+"'><img class='like' src='likee.png'>\
									<div><iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe></div>\
									<div>"+val.fields.Datedajout+"</div> <div>"+val.fields.hashtags+"</div>   </article>\
							";

							$("#musiques").append(code);

							rang = rang + 1;

						});

					}

);
