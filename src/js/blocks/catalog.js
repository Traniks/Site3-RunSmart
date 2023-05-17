function catalog() {
    $('ul.catalog__menu').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('catalog__menu-item_active').siblings().removeClass('catalog__menu-item_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleClass(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');
}

export default catalog;