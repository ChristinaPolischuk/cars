module.exports = () => {
    const selects = document.querySelectorAll('.js-slimselect')
    selects.forEach((selectElement) => {
        new SlimSelect({
            select: selectElement
        })
    })
}