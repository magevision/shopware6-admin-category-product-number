import template from './sw-category-detail-products.html.twig';

const { Component } = Shopware;

Component.override('sw-category-detail-products', {
    template,

    computed: {
        productColumns() {
            let columns = this.$super('productColumns');
            columns.push({
                property: 'productNumber',
                label: this.$tc('sw-product.list.columnProductNumber'),
                sortable: false,
            });

            return columns;
        },

        productNumberColumn() {
            return 'column-productNumber';
        },
    }
});