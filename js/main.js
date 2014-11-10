function change() {

    var myNewTitle = document.getElementById('myTextField').value;
    if (myNewTitle.length == 0) {
        alert('Please write something!');
        return;
    }

    var title = document.getElementById('title');
    title.innerHTML = myNewTitle;

}

function populatePage() {
    var select = document.getElementById("dropDown");
    var cuisines = [{value:"seafood",text:"Seafood"},
                    {value:"burger",text:"Gourmet Burger"},
                    {value:"peruvian",text:"Peruvian"},
                    {value:"turkish",text:"Turkish"},
                    {value:"italiano",text:"Italiano!"}];
    var opt;
    for (i=0; i < cuisines.length; i++) {
        opt = document.createElement('option');
        opt.value = cuisines[i].value;
        opt.innerHTML = cuisines[i].text;

        // then append it to the select element
        select.appendChild(opt);
    }
}
