const server = 'https://jsonplaceholder.typicode.com/postse';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
      if(request.readyState !== 4) return;
      if(request.status === 200 || request.status === 201) { // proveraem pravilno li polucili status s servera
        const response= JSON.parse(request.responseText);
        callBack(response.id); // polucaem otvet ot servera
      } else {
        falseCallBack(request.status)
        throw new Error(request.status)
      }
    });

    request.send(data)
};

const formElems = document.querySelectorAll('.form');

const formHendler = (form) => {
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = {};

      for (const {name, value} of form.elements) {
        if (name) {
          // console.log(name, value);
          data[name] = value
        }
      }

      const smallElem = document.createElement('small');

      // console.dir(form);
      // console.log(data);
      // nado polucit i pereformatirovat dannie v JSON
      sendData(JSON.stringify(data) , 
      (id) => {
        smallElem.innerHTML = 'Ваша заявка была отправлена №:' + id +
                                '! <br> В ближайшее время с вами свяжемся!';
        smallElem.style.color = 'green';
        form.append(smallElem)
        // console.log(id);
      }, 

      (err) => {
        smallElem.innerHTML = 'К сожалению технические неполадки <br> попробуйти отправить заявку позже: ' + err;
        smallElem.style.color = 'red'
        form.append(smallElem);
        console.log('Owibkadi qaqa: ' + err);
      }); 

      form.reset();
      
  })
};

formElems.forEach(formHendler)



// console.log(new XMLHttpRequest())
