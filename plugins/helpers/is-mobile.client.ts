export default defineNuxtPlugin(() => {
    const isMobile = useIsMobile()
    const tabletSize = 768
    if (window.innerWidth < tabletSize) {
        isMobile.value = true
    }
    window.addEventListener('resize', ()=> {
        isMobile.value = window.innerWidth < tabletSize ? true : false
    })
})
