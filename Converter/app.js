const div1 = document.querySelector('#output');
console.log(div1);
document.querySelector('#output').style.visibility = 'hidden';
document.querySelector('#lbsInput'),addEventListener('input', updateOutput);
function updateOutput(e) 
{
    // console.log(e.target.value);
    let lbs = e.target.value;

    if(lbs === ''){
        document.querySelector('#output').style.visibility = 'hidden';
    }else{
        document.querySelector('#output').style.visibility = '';

        document.querySelector('#gramsOutput').innerHTML = lbs*453.592;
        document.querySelector('#kgOutput').innerHTML = lbs*0.453592;
        document.querySelector('#ozOutput').innerHTML = lbs*16;
    }
}


