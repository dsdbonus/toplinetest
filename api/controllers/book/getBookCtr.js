const bookModel = require('../../models/bookModel');

module.exports = async (options) => {
    return await bookModel.getAll(options.sortBy, options.sortDirection, options.offset, options.number);
};