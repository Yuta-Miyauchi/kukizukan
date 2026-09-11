window.addEventListener('DOMContentLoaded', function () {
    var $button = document.querySelector('.mobile-menu-toggle');
    var $menu = document.querySelector('.header-menu');

    if (!$button || !$menu) {
        return;
    }

    function closeMenu() {
        document.body.classList.remove('is-menu-open');
        $button.setAttribute('aria-expanded', 'false');
        $button.setAttribute('aria-label', 'メニューを開く');
    }

    function toggleMenu() {
        var isOpen = document.body.classList.toggle('is-menu-open');
        $button.setAttribute('aria-expanded', String(isOpen));
        $button.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    }

    $button.addEventListener('click', toggleMenu);

    $menu.querySelectorAll('a').forEach(function ($link) {
        $link.addEventListener('click', closeMenu);
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});
