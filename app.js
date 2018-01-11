document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    document.body.appendChild(button);
    button.appendChild(btnText);
    button.style.margin = "1em";
    //button.style.display = "inline-block";
    let id = 1;

    button.addEventListener("click", function () {
        let div = document.createElement('div');
        let p = document.createElement("p");
        let divText = document.createTextNode(id);
        div.id = id;
        id++;
        //div.appendChild(divText);
        div.className = "box";
        div.style.backgroundColor = "black";


        //div.style.backgroundColor = "black";
        div.addEventListener("click", function () {
            let allchar = "0123456789ABCDEF";
            let randcol = "";

            for (let i = 0; i < 6; i++) {
                randcol += allchar[Math.floor(Math.random() * 16)];
            }

            div.style.backgroundColor = "#" + randcol;

        })

        p.style.backgroundColor = "white";
        p.style.display = "inline-block";
        p.style.margin = "2em";
        p.style.padding = "1.5em";

        p.appendChild(divText);
        div.appendChild(p);
        document.body.appendChild(div);

        div.style.display = "inline-block";

        div.style.height = '8em';
        div.style.width = '8em';
        div.style.margin = '1em';

        p.style.opacity = "0";

        div.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity = "0.5";
        }


        div.addEventListener("mouseleave", nohover);
        function nohover() {
            p.style.opacity = "0";
        }

        div.addEventListener("dblclick", function () {

            let num = parseInt(div.id);
            //var x = document.getElementById(div.id).nextSibling;
            
            if (num % 2 === 0) {
                //let x = document.getElementById(div.id).nextSibling;
                console.log(typeof x);
                console.log(x);
                
                //console.log(num + 1);
                let after = document.getElementById(num + 1);
                //div.parentNode.removeChild(after);
                if (after != null) {
                    //var x = document.getElementById(div.id).nextSibling;
                    div.parentNode.removeChild(after);
                } else {
                    alert('no box to delete on the right');
                }
            } else {
                console.log(num - 1);
                let previous = document.getElementById(num - 1);
                //div.parentNode.removeChild(previous);
                if (previous != null) {
                    //var x = document.getElementById(div.id).previousSibling;
                    div.parentNode.removeChild(previous);
                } else {
                    alert('no box to delete on the left');

                }
            }
        })

    })
})