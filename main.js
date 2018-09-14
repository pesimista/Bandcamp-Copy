
var txt='{"name":"elijah who", "twitter":"https://twitter.com/elijahwhomusic", "location":"Portland, Oregon", "albums":[{"name":"Don\'t makeme Cry","release":"December 15, 2017","song":[{"name":"seaside","length":"02:00"},{"name":"i used to be so in love","length":"02:03"},{"name":"nod off","length":"02:13"},{"name":"my love","length":"02:26"},{"name":"Don\'t make me Cry","length":"02:00"},{"name":"sleep on it","length":"01:57"},{"name":"loving you","length":"02:09"}]}]}';


var Thing = JSON.parse(txt);
var ol = document.getElementById("Songs");
var Date = document.getElementById("releasedDate");
var ArtistName = document.getElementsByClassName("ArtistName");
var AlbumName = document.getElementById("AlbumName");
var place = document.querySelector(".place");

function a()
{
    Thing.albums[0].song.forEach(element => {
        var li =  document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", "");
        a.textContent = element.name;
        li.appendChild(a);
        li.appendChild(document.createTextNode(element.length));

        ol.appendChild(li);
    });
    Date.textContent += Thing.albums[0].release;
    for(var item of ArtistName)
    {
        console.log(item);
        item.textContent = Thing.name;
    }
    console.log(ArtistName);
    ArtistName[0].setAttribute("href", Thing.twitter);
    AlbumName.textContent = Thing.albums[0].name;
    place.textContent = Thing.location;
    document.getElementById("contact").setAttribute("href", Thing.twitter);
}

a();