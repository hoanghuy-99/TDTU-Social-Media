module.exports.StudentEditSchema = {
    type: 'object',
    minProperties: 1,
    properties:{
        name: 'string',
        class: 'string',
        faculty: 'string'
    }
}