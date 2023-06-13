function toggleText() {
    var paragraph = document.getElementById("hiddenParagraph");
    if (paragraph.style.display === "none") 
    {
    paragraph.style.display = "block";
    } else 
    {
    paragraph.style.display = "none";
    }
    }
    document.onreadystatechange = function () {
        var state = document.readyState;
        if (state == 'interactive') {
        document.getElementById('loading-overlay').style.visibility = "visible";
        } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('loading-overlay').style.display = "none";
        }, 1000);
        }
    };