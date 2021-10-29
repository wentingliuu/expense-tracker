module.exports = {
  isSelected: function (a, b) {
    if (a === b) return 'selected'
  },
  dateDisplay: function (date) {
    const yyyy = date.toISOString().slice(0, 4)
    const mm = date.toISOString().slice(5, 7)
    const dd = date.toISOString().slice(8, 10)
    return `${yyyy}/${mm}/${dd}`
  },
  isoDateFormat: function (date) {
    return date.toISOString().slice(0, 10)
  }
}
