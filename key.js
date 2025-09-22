const root = document.getElementById("root");
root.style.minHeight = "100vh";
root.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
root.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
root.style.padding = '20px';
root.style.boxSizing = 'content-box';
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.alignItems = 'center';
root.style.justifyContent = 'center';

const card = document.createElement('div');
card.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
card.style.backdropFilter = 'blur(10px)';
card.style.borderRadius = '20px';
card.style.padding = '40px';
card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
card.style.border = '1px solid rgba(255, 255, 255, 0.18)';
card.style.width = '90%';
card.style.maxWidth = '800px';
root.appendChild(card);

const h = document.createElement("h1");
h.textContent = "Key Logger";
h.style.color = "white";
h.style.fontSize = "90px";
h.style.mrgin = "10px";
h.style.fontWeight = "bold";
h.style.textAlign = "center";
card.appendChild(h);

const input = document.createElement("input");
input.style.width = "600px";
input.style.height = "50px";
input.style.fontSize = '22px';
input.type = "text";
input.style.border = "solid";
input.style.borderRadius = "12px";
input.style.borderColor = "black";
input.placeholder = "Type here...";
card.appendChild(input);

const p = document.createElement("p");
p.textContent = "Your key will apper here....";
p.style.fontSize = '40px';
p.style.color = 'pink';
p.style.fontWeight = "bold";
card.appendChild(p);

input.focus();

input.addEventListener("blur", () => {
    input.focus();   // immediately refocus when clicked outside
  });

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        p.textContent = "You pressed Enter!";    
    }
    else{
        p.textContent = "Last key pressed: " + event.key;
    }
})



