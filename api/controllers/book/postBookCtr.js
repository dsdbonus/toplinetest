const bookModel = require('../../models/bookModel');

module.exports = async (options) => {
    const insertId = await bookModel.create(options.title, options.date, options.autor, options.description, options.image);
    return await bookModel.getById(insertId);
};