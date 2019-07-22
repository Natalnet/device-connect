const { model, Schema } = require('mongoose');

const deviceSchema = new Schema({
    nome: String,
    tipo: {
        type: String,
        required: true
    },
    local: String
},{timestamps: true});

module.exports = model('device', deviceSchema);