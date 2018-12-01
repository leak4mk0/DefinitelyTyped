import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

/* Pagination Plugin, see https://github.com/bookshelf/bookshelf/wiki/Plugin:-Pagination */

const knex = Knex({});
const bookshelf = Bookshelf(knex);

bookshelf.plugin('pagination');

class User extends bookshelf.Model<User> { }

// Standard fetch method.
new User()
    .fetchAll()
    .then(results => {
        results.length === 1;
        // results.pagination === undefined;
    });

// Pagination fetch method without any options.
new User()
    .fetchPage()
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.page === 1;
        results.pagination.pageSize === 1;
    });

// Pagination fetch method with empty options.
new User()
    .fetchPage({})
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.page === 1;
        results.pagination.pageSize === 1;
    });

// Pagination fetch method with page options.
new User()
    .fetchPage({ pageSize: 1 })
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.page === 1;
        results.pagination.pageSize === 1;
    });

new User()
    .fetchPage({ page: 1 })
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.page === 1;
        results.pagination.pageSize === 1;
    });

new User()
    .fetchPage({ pageSize: 1, page: 1 })
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.page === 1;
        results.pagination.pageSize === 1;
    });

// Pagination fetch method with limit options.
new User()
    .fetchPage({ limit: 1, offset: 1 })
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.offset === 1;
        results.pagination.limit === 1;
    });

// Pagination fetch method of collection.
new Bookshelf.Collection<User>()
    .fetchPage()
    .then(results => {
        results.length === 1;
        results.pagination.rowCount === 1;
        results.pagination.pageCount === 1;
        results.pagination.page === 1;
        results.pagination.pageSize === 1;
    });
