module.exports = () => {
    let select2Options = {
        width: "100%",
        language: "en-En"
    }

    if($('.select2').length > 0) {
        $('.select2').select2(select2Options);
    }


}