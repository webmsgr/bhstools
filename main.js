// lmao
$( document ).ready(function () {
    // set up links 
    $("a").attr("target","_blank").attr("referrerpolicy","no-referrer")
})

function getEndOfSchool() {
    end = new Date()
    end.setHours(14)
    end.setMinutes(5)
    end.setSeconds(0)
    return end
}
