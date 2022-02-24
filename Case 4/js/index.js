document.addEventListener('DOMContentLoaded',function () {
    document.querySelectorAll('.section-how__link').forEach(function(how) {
        how.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path
        document.querySelectorAll('.section-how__content').forEach(function(howcontent) {
            howcontent.classList.remove('section-how__content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('section-how__content-active')
        // document.querySelectorAll('.section-how__link').forEach(function(howcontent2) {
        //     howcontent2.classList.remove('section-how__link-active')
        // })

        // event.currentTarget.classList.add('section-how__link-active')
        // })


    })})
})
