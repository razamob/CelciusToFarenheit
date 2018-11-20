document.getElementById('converter-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateConversion, 3000);
    e.preventDefault();
});

function calculateConversion(){
    //UI Variable

    //CELCIUS INPUT
    const celciusUI = document.getElementById('celcius');

    //FARENHEIT OUTPUT
    const farenheitUI = document.getElementById('farenheit');

    if(celciusUI.value === ''){
        showError("Please have an input!");
    }
    else{
    var farenheit = (celciusUI.value * (9/5)) + 32;
        farenheitUI.value = farenheit.toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }

}

function showError(error){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className='alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}