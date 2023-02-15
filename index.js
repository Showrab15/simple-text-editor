// make the input filed text bold

document.getElementById('bold-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area');
     
    if(text.style.fontWeight === "bold"){
                text.style.fontWeight = "normal";
          }else{
                 text.style.fontWeight = "bold";
             }
})


// make the input filed text italic


document.getElementById('italic-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area');
     
    if(text.style.fontStyle === "italic"){
                text.style.fontStyle = "normal";
          }else{
                 text.style.fontStyle = "italic";
             }
})


// make the input filed text underline


document.getElementById('underline-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area');
     
    if(text.style.textDecoration === "underline"){
                text.style.textDecoration = "none";
          }else{
                 text.style.textDecoration = "underline";
             }
})

// text align right
document.getElementById('right-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area');
    text.style.textAlign = "right";
});

// text align right
document.getElementById('center-btn').addEventListener('click',function(){
    const text = document.getElementById('text-area');
    text.style.textAlign = "center";
});

// text align right
document.getElementById('left-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area');
    text.style.textAlign = "left";
});
// text align right
document.getElementById('justify-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area');
    text.style.textAlign = "justify";
});


document.getElementById('color-code').addEventListener('change',(e)=>{
    const text = document.getElementById('text-area');
    text.style.color = e.target.value;
    
});
