export default function directives(app) {
    app.directive('initials', {
        mounted (el, binding) {
            const arr = binding.value.split(' ')
            let name = []
            if (arr.length > 1) {
                arr.forEach((item, index) => {
                    if (index < arr.length - 1) {
                        item = `${item.charAt(0).toUpperCase()}.`
                        name.push(item)
                    }
                })
                name.push(arr[arr.length - 1])
                name = name.join(' ')
                el.textContent = name
            } else {
                el.textContent = binding.value
            }
        },
        updated (el, binding) {
            const arr = binding.value.split(' ')
            let name = []
            if (arr.length > 1) {
                arr.forEach((item, index) => {
                    if (index < arr.length - 1) {
                        item = `${item.charAt(0).toUpperCase()}.`
                        name.push(item)
                    }
                })
                name.push(arr[arr.length - 1])
                name = name.join(' ')
                el.textContent = name
            } else {
                el.textContent = binding.value
            }
        }
    })
}