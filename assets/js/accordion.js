(() => {
    const model = {}

    const controller = {
        init: () => {
            view.init()
        }
    }

    const view = {
        init: () => {
            this.allAccordions = document.querySelectorAll('.accordion')

            view.render()
        },
        render: () => {
            this.allAccordions.forEach(accordion => {
                let label = accordion.querySelector('.accordion-label');
                let labelIcon = accordion.querySelector('.accordion-label i');
                let content = accordion.querySelector('.accordion-content');
                label.addEventListener('click', () => {
                    accordion.classList.toggle('active')
                    label.classList.toggle('active')

                    content.classList.toggle('active');
                    
                    if(labelIcon.classList.contains('la-plus-circle')) {
                        labelIcon.classList.remove('la-plus-circle')
                        labelIcon.classList.add('la-minus-circle')
                    }
                    else {
                        labelIcon.classList.remove('la-minus-circle')
                        labelIcon.classList.add('la-plus-circle')
                    }
                })
            })
        }
    }

    controller.init()
})()