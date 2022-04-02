const listsize = document.queryselector('#listsize');
const buildButton = document.queryselector("button");
const userlist = document.querySelector('#userlist');

buildButton.AddEventListener('click', () => { 
    // get the userlist size
    let size = Number(listsize.value);
    // build Html
    

    for (let i = 1; i <= size; i++ ) {
        let li = document.createElement('li');
        li.innerHTML =`Item: <strong>${i}</strong>`;
        userlist.appendChild(li);
    }   

    
    // output of the book that HMTL
});
