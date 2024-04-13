const menu = document.querySelector('.main')

let page = 0

document.addEventListener('scroll',()=>{
    page = window.scrollY
    menu.style.transition = "all .7s"
    if(page < 50){
        menu.style.background = "none"
        menu.style.height = "100px"

        
    }
    else{
        menu.style.background = "black"
        menu.style.height = "80px"
        
       
        
    }

})
    window.onscroll = () => {
        const header = document.querySelector('.main')
        const Y = window.scrollY

        if (Y > 50) {
            header.style.position = "fixed"
        }
    }
    
    document.querySelector("#team > div > div.row.position-relative")
    $(document).ready(function(){
         
        $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut() ;
        }
        });
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
        });
         
        });