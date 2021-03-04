import moment from 'moment'
import Vue from 'vue'

Vue.filter('fromNow', function (time: string) {
    if (!time) return ''
    return moment(time).fromNow()
})

Vue.filter('toNow', function (time: string) {
    if (!time) return ''
    return moment(time).toNow()
})

Vue.filter('pluralize', function (val: number | string, unit: string) {
    const num = typeof val === 'string' ? parseInt(val) : val
    return num === 0
        ? `${num} ${unit}s`
        : num > 1
        ? `${num} ${unit}s`
        : `${num} ${unit}`
})

Vue.filter(
    'pluralizeWithoutCount',
    function (val: number | string, unit: string): string {
        const num = typeof val === 'string' ? parseInt(val) : val
        return num === 0 ? `${unit}s` : num > 1 ? `${unit}s` : `${unit}`
    }
)

Vue.filter('qualifyInput', function (unit: string, type: string): string {
    switch (type) {
        case 'atomic_import_tx':
            return 'Imported ' + unit
        default:
            return unit
    }
})

Vue.filter('qualifyOutput', function (unit: string, type: string): string {
    switch (type) {
        case 'atomic_export_tx':
            return 'Exported ' + unit
        default:
            return unit
    }
})
