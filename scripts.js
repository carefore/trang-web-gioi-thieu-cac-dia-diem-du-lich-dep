$(document).ready(function () {
    $("#travelForm").submit(function (event) {
        event.preventDefault();

        var place = $("#place").val();
        var description = $("#description").val();

        $.ajax({
            type: "POST",
            url: "save.php",
            data: {
                place: place,
                description: description
            },
            success: function (data) {
                $("#result").html(data);
            }
        });
    });
});
