const pool = require('../services/databaseService');

module.exports.getAll = async (orderField, orderDirection, limitStart, limitNum) => {
    let queryStr = 'select id, title, date, autor, description, image from books';

    queryStr += orderField ? ' order by ' + orderField : '';
    queryStr += orderDirection ? ' ' + orderDirection : '';

    queryStr += limitNum ? ' limit ' + limitNum : '';
    queryStr += !limitNum && limitStart ? ' limit 18446744073709551615' : '';
    queryStr += limitStart ? ' offset ' + limitStart + ';' : ';';

    return await pool.query(queryStr);
};

module.exports.create = async (title, date, autor, description, image) => {
    const queryStr = 'insert into books (title, date, autor, description, image)' +
        'VALUES' +
        ' (?, ?, ?, ?, ?);';

    const result = await pool.query(queryStr, [title, date, autor, description, image]);
    if (result.affectedRows !== 1) {
        throw new Error('The book hasnt created');
    }

    return result.insertId;
};

module.exports.getById = async (bookId) => {
    const queryStr = 'select id, title, date, autor, description, image from books where id = ?;';

    const result = await pool.query(queryStr, [bookId]);
    if (result.length === 0) {
        throw new Error('The book dosent exist');
    }

    return result[0];
};

module.exports.update = async (bookId, title, date, autor, description, image) => {
    const queryStr = 'update books set title =?, date =?, autor =?, description=?, image=? where id =?;';

    const result = await pool.query(queryStr, [title, date, autor, description, image, bookId]);
    if (result.affectedRows !== 1) {
        throw new Error('The book hasnt updated');
    }

    return true;
};