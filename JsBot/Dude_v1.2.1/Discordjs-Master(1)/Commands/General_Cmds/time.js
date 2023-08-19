const chalk = require("chalk");
module.exports = time = {

get time() {

    const today = new Date()
        , h = this.format(today.getHours())
        , m = this.format(today.getMinutes())
        , s = this.format(today.getSeconds());

    return chalk.grey(`[ ${h}:${m}:${s} ]`);

}
}
