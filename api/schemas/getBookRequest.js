module.exports = {
    "properties": {
        "sortBy": {
            "type": "string",
            "enum": [
                "title", "date", "autor", "description", "image"
            ]
        },
        "sortDirection": {
            "type": "string",
            "enum": [
                "asc", "desc"
            ]
        },
        "offset": {
            "type": "integer"
        },
        "number": {
            "type": "integer"
        }
    }
};