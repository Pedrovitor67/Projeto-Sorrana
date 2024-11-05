const mobileNav=()=>{

    const headerBars=document.querySelector('.header__navbar__click')
    const mobileNav=document.querySelector('.mobile-nav')
    const navlinks=document.querySelectorAll('.mobile-nav__link')
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



