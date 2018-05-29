$('#submit').on('click', calculate);

function calculate() {
    let p = $('#P').val();
    let q = $('#Q').val();
    $('#result').text(solve(p, q));
}