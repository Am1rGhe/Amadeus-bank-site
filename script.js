'use strict';

// TWO ACCOUNTS TO START WITH 

const account1 = {
    name : 'Amir Ghouari',
    movements : [50.5,-25, -5, 411, -22, -7, -28, -24, 32],
    pin : 1111
}

const account2 = {
    name : 'Sophie Lambert',
    movements : [15, 3, 12, -26, 11, -7, -27, 34],
    pin : 2222
}

const accounts = [account1,account2];


const switchButton = document.querySelector('.navbar__btn--switch');
const loginForm = document.querySelector('.form__logIn');
const signinForm = document.querySelector('.form__signIn');


// STOCKING THE INFORMATIONS NOW
const firstName = document.querySelector('.form__input--firstName');
const lastName = document.querySelector('.form__input--name');
const formPin= document.querySelector('.form__input--pinChoice');
const confirmFormPin = document.querySelector('.form__input--pinConfirm');
const signInButton = document.querySelector('.form__btn--signIn');
const logInButton = document.querySelector('.form__btn--login');

// the alert message 
const sorry = document.querySelectorAll('.sorry');
const modal = document.querySelector('.modal__content--sorry');
const overlay = document.querySelector('.modal__overlay');
const closeSorry = document.querySelectorAll('.modal--close');
const wrong = document.querySelector('.modal__content--wrong');
const closeWrong = document.querySelectorAll('.WrongInfo--close');

const modalFirstName = document.querySelector('.modal--firstname');
const congrats = document.querySelector('.modal__content--congrats');

let currentAccount ; 








// FUNCTIONS PART 
// LETS START WITH CREATING THE USERNAME FUNCTION , 
// I WOULD LOVE TO MAKE THE USERNAME THE FIST INITIALS ,I CAN MAKE ONLY THE FIRST NAME BUT THAT WOULD BE SO BORING CUZ U DONT NEED TO DO ANY WORK FOR IT

const createUserName = (account)=>{
    // account.forEach(element => {
    //     element.username = element.name.toLowerCase().split(' ').map(letter=>letter[0]).join('');
    // });
    account.username = account.name.toLowerCase().split(' ').map(letter=>letter[0]).join('');
    console.log(`${account.name}'s username has been created : ${account.username}`);
}

createUserName(account1);
createUserName(account2);

const createNewAccount = (first, last , newpin)=>{
    accounts.push({name: [first, last].join(' ') , movements : [], pin : newpin});

}


// page's buttons functionnalities : 

switchButton.addEventListener('click',function(e){
    e.preventDefault();
    // switchButton.style.backgroundColor ==="lightblue"?switchButton.style.backgroundColor= 'black' : switchButton.style.backgroundColor = 'lightblue';
    loginForm.classList.toggle('disabled');
    signinForm.classList.toggle('disabled');

    switchButton.textContent ==='Sign in'?switchButton.textContent = 'Already have an account?' : switchButton.textContent = 'Sign in';
})

sorry.forEach(btn=>{
    btn.addEventListener('click',function(e){
        e.preventDefault();
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        
    })
})
// GENERAL CLOSING BUTTON
closeSorry.forEach(btn => {
    btn.addEventListener('click', e=>{
        e.preventDefault();
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
        congrats.classList.add('hidden')
    
    });
    
});

// CREATING NEW ACCOUNT :
signInButton.addEventListener('click', e=>{
    e.preventDefault();
    if(firstName.value.trim() !== '' && lastName.value.trim() !== '' && formPin.value.trim() !== '' && confirmFormPin.value.trim() !== '' &&Number(formPin.value) === Number(confirmFormPin.value)){
        createNewAccount(firstName.value, lastName.value,Number(formPin.value));
        createUserName(accounts[accounts.length -1]);
        modalFirstName.textContent = firstName.value;
        congrats.classList.remove('hidden');
        overlay.classList.remove('hidden');
        firstName.value = lastName.value = formPin.value = confirmFormPin.value = '';
        
        accounts.forEach(element => {
        });
    }else{
        overlay.classList.remove('hidden');
        wrong.classList.remove('hidden');
    }
});

// closing the wrong message : 
closeWrong.forEach(btn =>{
    btn.addEventListener('click',e=>{
        e.preventDefault();
        overlay.classList.add('hidden');
        wrong.classList.add('hidden');
        firstName.value = lastName.value = formPin.value = confirmFormPin.value = '';
    })
});
// UPDATING THE LOGIN BUTTON



// CONVERT FORM USD TO EURO AND DISPLAY IT 
const convertionAmount = document.querySelector('.converted__displayed');
const euro = document.querySelector('.converted__currency--eur');
const usd = document.querySelector('.converted__currency--usd');
const usdToEuro = document.querySelector('.div4--btn');

usdToEuro.addEventListener('click', e=>{
    e.preventDefault();
    if (!isNaN(convertionAmount.value) && convertionAmount.value >= 0) {
        usd.textContent = convertionAmount.value;
        euro.textContent =(convertionAmount.value * 1.17).toFixed(2);
    } else {
        usd.textContent = euro.textContent = '';
    }
})


// -----------------------------------------------SECOND PAGE-----------------------------------------------

// CARD INFO MANIPULATION
const cardPin = document.querySelector('.card--pin');
const cardName = document.querySelector('.card--name');
const cardAmount = document.querySelector('.card--amount')

const changeCardPin = (user)=>{
    cardPin.textContent = user.pin;
}

const changeCardName = (user) =>{
    cardName.textContent = user.name;
}
const changeCardBalance = (user)=>{
    cardAmount.textContent = user.movements.reduce((mov , acc)=>acc+mov,0);
}

// JUST TO TRY
// changeCardPin(account1);
// changeCardName(account1);
// changeCardBalance(account1)



// MOVEMENTS MANIPULATION 
const movementsContainer = document.querySelector('.div3');

// displaying movements 
const displayMovements= (account)=>{
    movementsContainer.innerHTML = '';
    account.movements.forEach((mov, i) => {
        const movType = mov>0? 'deposit' : 'withdrawal';
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${movType} ">${i+1} ${movType}</div>
                <div class="movements__value">$${mov}</div>
            </div>
        `;
        movementsContainer.insertAdjacentHTML("afterbegin",html)

    });
}


// UPDATING THE UI
const updatingUI = (account)=>{
    changeCardName(account);
    changeCardBalance(account);
    changeCardPin(account)
    displayMovements(account);
}

updatingUI(account1);


// LOGIN MANIPULATION 
const login = document.querySelector('.form__btn--login');
const loginUsername = document.querySelector('.form__input--username');
const loginPin = document.querySelector('.form__input--pin');

login.addEventListener('click', e=>{
    e.preventDefault();
    currentAccount = accounts.find((account)=> account.username === loginUsername.value);
    console.log(currentAccount);
    if(currentAccount&& currentAccount.pin === Number(loginPin.value)){
        firstPage.classList.add('hidden');
        firstNavbar.classList.add('hidden');
        secondPage.classList.remove('hidden');
        updatingUI(currentAccount);
        loginPin.value = '';
        loginUsername.value = '';

    }else{
        overlay.classList.remove('hidden');
        wrong.classList.remove('hidden');
    }
});


// NOW FOR THE SEDOND PAGE MANIPULATION

// LOGOUT MANIPUTLATION
const secondPage = document.querySelector('.secondPage__container');
const logout = document.querySelector('.navbar__btn--logout');
const firstPage = document.querySelector('.firstPage__container');
const firstNavbar = document.querySelector('.firstNavbar')

logout.addEventListener('click', e =>{
    e.preventDefault();
    secondPage.classList.add('hidden');
    // I SHOULDVE PUT ALL THE FIRST PAGE CONTENT IN ONE BIG DIV (I MIGHT UPGRADE IT LATER)
    firstPage.classList.remove('hidden');
    firstNavbar.classList.remove('hidden');
    withdrawalAmount.value = '';
    depositAmount.value = '';
    transferAmount.value = '';
    tranferTo.value = '';

    

});


// NOW LETS MANIPULATE THE DEPOSITS
const depositAmount = document.querySelector('.input__amount--deposit');
const depositBtn = document.querySelector('.sencondForm__btn--deposit');

depositBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(Number(depositAmount.value)>0){
        currentAccount.movements.push(Number(depositAmount.value));
        updatingUI(currentAccount);
        depositAmount.value='';
        depositAmount.blur();
        
    }else{
        overlay.classList.remove('hidden');
        wrong.classList.remove('hidden');
        // I SHOULDVE MADE A FUNCTON CALLED DISPLAY ERROR
    }

});

// NOW LETS MANIPULATE THE WITHDRAWAL

const withdrawalAmount = document.querySelector('.input--amount--withdrawal');
const withdrawalBtn = document.querySelector('.sencondForm__btn--withdraw');

withdrawalBtn.addEventListener('click',e=>{
    e.preventDefault();
    if(Number(withdrawalAmount.value)>0 && withdrawalAmount.value <=  currentAccount.movements.reduce((mov , acc)=>acc+mov,0) ){
        currentAccount.movements.push(Number(-withdrawalAmount.value));
        withdrawalAmount.value='';
        withdrawalAmount.blur();
        updatingUI(currentAccount);
        
    }else{
        overlay.classList.remove('hidden');
        wrong.classList.remove('hidden');
    }


})


//  NOW LETS MANIPULATE THE TRASNFER
const transferAmount = document.querySelector('.input--amount--transfer');
const tranferTo =document.querySelector('.input--to');
const transferBtn = document.querySelector('.sencondForm__btn--transfer');

transferBtn.addEventListener('click',e=>{
    e.preventDefault();
    const currentAmount = currentAccount.movements.reduce((mov,acc )=> acc+ mov ,0);
    if(Number(transferAmount.value)<= currentAmount && Number(transferAmount.value)>0){
        const transferAccount = accounts.find(element =>element.username === tranferTo.value);
        if(transferAccount !== currentAccount){
            transferAccount.movements.push(Number(transferAmount.value));
            currentAccount.movements.push(Number(-transferAmount.value));
            updatingUI(currentAccount);
            tranferTo.value= '';
            transferAmount.value= '';
        }else{
            overlay.classList.remove('hidden');
            wrong.classList.remove('hidden');
        }

    }else{
        overlay.classList.remove('hidden');
        wrong.classList.remove('hidden');
    }

})
