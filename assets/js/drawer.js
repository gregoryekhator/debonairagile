(() => {
    const model = {}

    const controller = {
        init: () => {
            view.init()
        }
    }

    const view = {
        init: () => {
            this.drawer = document.querySelector('#drawer')
            this.hamburger = document.querySelector('#hamburger')
            this.closeDrawer = document.querySelector('#closeDrawer')
            this.body = document.querySelector('body')

            view.render()
        },
        render: () => {
            this.closeDrawer.addEventListener('click', () => {
                this.drawer.classList.toggle('drawerActive')
                this.body.classList.toggle('noscroll')
            }, false)

            this.hamburger.addEventListener('click', () => {
                this.drawer.classList.toggle('drawerActive')
                this.body.classList.toggle('noscroll')
            }, false)
        }
    }

    controller.init()
})()