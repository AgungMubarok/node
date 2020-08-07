const validator = require('validator')
const chalk = require('chalk')

const getDataUser = (userName, email) => {
    
    if (validator.isEmail(email)) {
        return chalk.green(`Selamat datang ${userName}. Email kamu adalah ${email} :)`) 
    } else {
        return chalk.red('Maaf email yang anda masukkan tidak valid :(')
    }
}

module.exports = ({
    getDataUser,
})