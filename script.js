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
									<div class='infosmusique Datedajout'>"+val.fields.Datedajout+"</div> <div class='infosmusique hashtags'>"+val.fields.hashtags+"</div>\
									<div class='twitter1'><a href='https://twitter.com/share' class='twitter-share-button' data-url='https://open.spotify.com/track/"+val.fields['spotify-link'].slice(14)+"' data-text='Venez écouter vos musiques sur DigimusiK'>Tweet</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> </div>\
							 </article>";

							$("#musiques").append(code);

							rang = rang + 1;

						});

					}

);
