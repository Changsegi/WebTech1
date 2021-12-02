$(document).ready(function(){
    $("#ujelemgomb").click(function(){
        //var x = document.getElementById("ujelem").value;
        var x = document.createTextNode(document.getElementById("ujelem").value);
        var node = document.createElement("li");

        //$("#menu").append('<li>'+x+'</li>');
        node.appendChild(x);
        document.getElementById("lista").appendChild(node);


        var value2 = document.getElementById("ujelem").value;
        if (arr.includes(value2) === false) arr.push(value2);
        var list = "<ul>";
        for (let i of arr) {
            list += `<li>${i}</li>`;
        }
        list += "</ul>";

        // (B3) APPEND LIST TO CONTAINER
        document.getElementById("hetedik-par").innerHTML = list;

    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $("#hideshow").hide();
    });
    $("#show").click(function(){
        $("#hideshow").show();
    });
});


$(document).ready(function(){
    $("#hide-2").click(function(){
        $(".elso").hide();
    });
    $("#show-2").click(function(){
        $(".elso").show();
    });
});

$( function() {
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $( "#effectTypes" ).val();

        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
        } else if ( selectedEffect === "transfer" ) {
            options = { to: "#esemenygomb", className: "ui-effects-transfer" };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
        }

        // Run the effect
        $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };

    // Callback function to bring a hidden box back
    function callback() {
        setTimeout(function() {
            $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
        }, 1000 );
    };

    // Set effect from select menu value
    $( "#esemenygomb" ).on( "click", function() {
        runEffect();
        return false;
    });
} );

function validateForm() {
    let x = document.forms["myForm"]["adat0"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }

    let y = document.forms["myForm"]["adat1"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
}

