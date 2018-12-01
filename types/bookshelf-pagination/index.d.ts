// Type definitions for bookshelf (pagination plugin) 0.13
// Project: http://bookshelfjs.org/
// Definitions by: leak4mk0 <https://github.com/leak4mk0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/*~ On this line, import the module which this module adds to */
import * as Bookshelf from 'bookshelf';

/*~ You can also import other modules if needed */
import * as BlueBird from 'bluebird';

/*~ Here, declare the same module as the one you imported above */
declare module 'bookshelf' {
    interface Model<T extends Model<any>> {
        fetchPage(options?: FetchPageSizeOptions): BlueBird<PaginationCollection<T, SizePagination>>;
        fetchPage(options?: FetchPageLimitOptions): BlueBird<PaginationCollection<T, LimitPagination>>;
    }

    interface Collection<T extends Model<any>> {
        fetchPage(options?: CollectionFetchPageSizeOptions): BlueBird<PaginationCollection<T, SizePagination>>;
        fetchPage(options?: CollectionFetchPageLimitOptions): BlueBird<PaginationCollection<T, LimitPagination>>;
    }

    interface FetchPageSizeOptions extends FetchOptions {
        pageSize?: number;
        page?: number;
    }

    interface FetchPageLimitOptions extends FetchOptions {
        limit: number;
        offset: number;
    }

    interface CollectionFetchPageSizeOptions extends CollectionFetchOptions {
        pageSize?: number;
        page?: number;
    }

    interface CollectionFetchPageLimitOptions extends CollectionFetchOptions {
        limit: number;
        offset: number;
    }

    interface PaginationCollection<T extends Model<any>, U extends Pagination> extends Collection<T> {
        pagination: U;
    }

    interface Pagination {
        rowCount: number;
        pageCount: number;
    }

    interface SizePagination extends Pagination {
        page: number;
        pageSize: number;
    }

    interface LimitPagination extends Pagination {
        offset: number;
        limit: number;
    }
}
