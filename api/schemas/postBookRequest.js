module.exports = {
    "properties": {
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
    "required": ["title", "date", "autor", "description", "image"]
};