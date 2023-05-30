const { 
    addBookHandler, 
    getAllBookHandler,
    getBookIdHandler,
    editBookIdHandler,
    deleteBookIdHandler, 
} = require('./handler');


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookIdHandler,
      },
  ];
   
  module.exports = routes;