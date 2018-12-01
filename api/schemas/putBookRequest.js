module.exports = {
    "properties": {
        "id": {
            "type": "integer"
        },
        "title": {
            "type": "string"
        },
        "date": {
            "format": "date"
        },
        "autor": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "image": {
            "type": "string"
        }
    },
    "required": ["id", "title", "date", "autor", "description", "image"]
};