window.addEventListener('scroll', 
    _.throttle(
        function () {
            // console.log('a');

            const nav = document.querySelector('nav');

            // if (window.scrollY > 200) {
            //     nav.classList.add('navbar-scrolled');
            // } else {
            //     nav.classList.remove('navbar-scrolled');
            // }

            nav.classList.toggle('navbar-scrolled', window.scrollY > 200);
        },
        250
    )
);

let observer = new IntersectionObserver(function (entries) {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('add');

            const el = entry.target;

            el.classList.add(
                'animate__animated',
                // <h2 data-scroll data-scroll-animation="backInUp"...
                `animate__${el.dataset.scrollAnimation}`,
                // 'animate__' + el.dataset.scrollAnimation
            )
        }
    })
}, {
    threshold: 1,
});

observer.observe(
    document.querySelector('#services h2')
)