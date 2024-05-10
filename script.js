const navItems = document.querySelectorAll('div');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        const section = this.classList[0];
        const infoSections = document.querySelectorAll('.info-about, .info-projects, .info-hobbies, .info-contact');
        infoSections.forEach(section => {
            section.style.display = 'none';
        });

        const infoToShow = document.querySelector('.info-' + section);
        infoToShow.style.display = 'block';
        infoToShow.style.animation = 'infoAppear 1s forwards';

        navItems.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});