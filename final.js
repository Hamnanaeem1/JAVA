let btn = document.getElementById('add_btn');
btn.addEventListener('click' , addFood);
    function addFood(e){
        let currentBtn = e.currentTarget;
        console.log(currentBtn);
        let currentInput = currentBtn.previousElementSibiling;
        console.log(currentInput.value);
        let currentFoodName = currentInput.value;
        let newLi = document.createElement('li');
        newLi.className = `list-group-item d-flex justify-content-between my-2`;
        newLi.innerHTML = `
        <h3 class="flex-grow-1" >${currentFoodName}</h3>
             <button class="btn btn-dark mx-2">Read</button>   
             <button class="btn btn-danger ">Delete</button>
        `
        let parentlist = document.getElementById('parentlist');
        parentlist.appendChild(newLi);

    }