var util = function () {}
util.prototype = {
    fetchAllValues: function (obj, keyword) {
        var value_array = []
        if (Object.keys(obj).length <= 0) {
            return value_array
        }
        var key_array = Object.keys(obj)
        var keyword_index = key_array.indexOf(keyword)
        for (var iterator = 0; iterator < key_array.length; iterator++) {
            if (typeof obj[key_array[iterator]] == "object") {
                value_array = value_array.concat(this.fetchAllValues(obj[key_array[iterator]], keyword))
            }
        }
        if (keyword_index != -1) {
            value_array = value_array.concat(obj[key_array[keyword_index]])
        }
        return value_array
    }
}
module.exports = {
    util: util
}