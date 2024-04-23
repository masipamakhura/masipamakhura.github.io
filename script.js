var toggleSideBar = ()=>{
    var  clickCount = 1;
    let icon = document.querySelector('.nav-icon');
    let navbar = document.querySelector('#navbar');
    if(icon !== undefined && icon !==null ){
        console.log("icon is " + icon);
        icon.parentElement.addEventListener('click',(ev)=>{
            //ev.stopPropagation();
           // ev.stopbubble();
            if(clickCount %2 !== 0 ){
           
                    navbar.classList.add('open');
                    clickCount++
                
            }else{
                     navbar.classList.remove('open');
                     clickCount++
                }
            

        });
    }
}
function clearForm(){
    var inputs = document.querySelectorAll('form input');
    var messageBox = document.querySelector('form textarea');
    var copyElements = Array.from(inputs);
    for(var i = 0; i < copyElements.length;i++){
        copyElements[i].value = '';
    }
    messageBox.value = '';
}
window.addEventListener('load',()=>{
    toggleSideBar();
    document.querySelector('form').addEventListener('submit',()=>{
        setTimeout(()=>{
            clearForm();
        },1000)
    })
    
})