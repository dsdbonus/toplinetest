const bookModel = require('../../models/bookModel');

module.exports = async (options) => {
    await bookModel.update(options.id, options.title, options.date, options.autor, options.description, options.image);
    return await bookModel.getById(options.id);
};