let filterInput = document.querySelector('#filterInput');
// console.log(filterInput);

filterInput.addEventListener('keyup', filterNames);
function filterNames(e){
    let value = filterInput.value.toUpperCase();
    // console.log(e.target.value);

    let ul = document.querySelector('#names');
    let lis = ul.querySelectorAll('li.collection-item');

    // console.log(lis);
    for(let i=0; i<lis.length; i++){
        let a = lis[i].querySelector('a');
    // console.log(a);
        if(a.innerHTML.toUpperCase().indexOf(value) > -1){
            lis[i].style.display = '';    
        }else{
            lis[i].style.display = 'none';
        }
    }
}