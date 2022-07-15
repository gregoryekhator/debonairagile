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

            // Drawer Menu Items with Dropdown
            this.mobileMenuItemDropdownTrigger = document.querySelector('#mDropdownTrigger');
            this.mobileMenuItemDropdownList = document.querySelector('#mDropdownList');

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

            // Drawer Menu Items with Dropdown
            this.mobileMenuItemDropdownTrigger.addEventListener('click', () => {
                this.mobileMenuItemDropdownList.classList.toggle('active')
            }, false)
        }
    }

    controller.init()
})()