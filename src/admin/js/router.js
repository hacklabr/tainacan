import Vue from 'vue';
import VueRouter from 'vue-router'

import AdminPage from '../admin.vue'
import CollectionsPage from '../pages/lists/collections-page.vue'
import CollectionPage from '../pages/singles/collection-page.vue'
import CollectionEditionPage from '../pages/edition/collection-edition-page.vue'
import ItemsPage from '../pages/lists/items-page.vue'
import ItemPage from '../pages/singles/item-page.vue'
import ItemEditionPage from '../pages/edition/item-edition-page.vue'
import FieldsPage from '../pages/lists/fields-page.vue'
import FiltersPage from '../pages/lists/filters-page.vue'
import CategoriesPage from '../pages/lists/categories-page.vue'
import EventsPage from '../pages/lists/events-page.vue'

import CollectionsList from '../components/collections-list.vue'
import ItemsList from '../components/items-list.vue'
import FiltersList from '../components/filters-list.vue'
import CategoriesList from '../components/categories-list.vue'
import FieldsList from '../components/fields-list.vue'
 
Vue.use(VueRouter); 

const routes = [
    { path: '/', redirect:'/collections' },

    { path: '/collections', name: 'CollectionsPage', component: CollectionsPage, meta: {title: 'Collections Page'} },
    { path: '/collections/new', name: 'CollectionEditionPage', component: CollectionEditionPage, meta: {title: 'Create Collection'} },
    
    { path: '/collections/:id', name: 'CollectionPage', component: CollectionPage, meta: {title: 'Collections Page'}, 
      children: [
        { path: '', component: ItemsList, name: 'ItemsList', meta: {title: 'Items List'} },
        { path: 'items', component: ItemsList, name: 'ItemsList', meta: {title: 'Items List'} },
        { path: 'edit', component: CollectionEditionPage,  name: 'CollectionEditionPage', meta: {title: 'Edit Collection'} },
        { path: 'fields', component: FieldsList, name: 'FieldsList', meta: {title: 'Fields List'} }, 
        { path: 'filters', component: FiltersList, name: 'FiltersList', meta: {title: 'Filters List'} }
      ]
    },
    { path: 'items/new', name: 'ItemEditionPage', component: ItemEditionPage, meta: {title: 'Create Item'} },
    { path: '/collections/:collection_id/items/:id/edit', name: 'ItemEditionPage', component: ItemEditionPage, meta: {title: 'Edit Item'} },
    { path: '/collections/:collection_id/items/new', name: 'ItemCreatePage', component: ItemEditionPage, meta: {title: 'Create Item'} },
    { path: '/collections/:collection_id/items/:id', name: 'ItemPage', component: ItemPage, meta: {title: 'Item Page'} },

    { path: '/items', name: 'ItemsPage', component: ItemsPage, meta: {title: 'Items Page'} },

    { path: '/filters', name: 'FiltersPage', component: FiltersPage, meta: {title: 'Filters Page'} },

    { path: '/fields', name: 'FieldsPage', component: FieldsPage, meta: {title: 'Fields Page'} },

    { path: '/categories', name: 'CategoriesPage', component: CategoriesPage, meta: {title: 'Categories Page'} },

    { path: '/events',  name: 'EventsPage', component: EventsPage, meta: {title: 'Events Page'} },

    { path: '*', redirect: '/'}
]

export default new VueRouter ({
    routes
})