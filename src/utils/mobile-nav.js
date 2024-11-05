const mobileNav=()=>{

    const headerBars=document.querySelector('.header__navbar__click') //Botão da navbar
    const mobileNav=document.querySelector('.mobile-nav')            //Barra de navegação mobile
    const navlinks=document.querySelectorAll('.mobile-nav__link')   //Links da navegação mobile
    let isMobileOpen=false
    

    headerBars.addEventListener('click', ()=>{
    isMobileOpen=!isMobileOpen
    if (isMobileOpen){     
    mobileNav.style.display='flex'
    document.body.style.overflowY='hidden'
    }
    else{

    mobileNav.style.display='none'
    document.body.style.overflowY='auto'
        
        


    }
}  )

navlinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        isMobileOpen=false
        mobileNav.style.display='none'
        document.body.style.overflowY='auto'

    })
})

}

export default mobileNav



