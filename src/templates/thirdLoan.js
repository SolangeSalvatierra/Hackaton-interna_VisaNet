export const comparo = () => {
    const template = `
    <section>
    <h1>HOLA EMPRENDEDORA</h1>
    <h3>Te otorgamos un préstamo para que sigas creciendo</h3>
    <div>
        <span>1</span>
        <span>Calcula tu prestamo</span>
    </div>
    <div>
        <span>2</span>
        <span>Ingresa tus datos</span>
    </div>
    <div>
        <span>3</span>
        <span>Compara Préstamos</span>
    </div>
    <div>
        <span>4</span>
        <span>Solicita tu préstamo</span>
    </div>
    <div>
        <span>5</span>
        <span>Recibe tu préstamo</span>
    </div>
    <div>
    <h2>Filtrar</h2>
        <div class="filtrado">
            <p>BUSQUEDA</p>
            <i class="fas fa-search"></i><input type="search"placeholder="ENTIDAD">
        </div>
        <div class="filtrado">
            <p class="titulo">MONTO</p>
            <div class="btn-input">
                <button type="button" id="btn-restar">-</button>
                <input type="number" id="monto" min="1000" value="10000">
                <button type="button" id="btn-sumar">+</button>
            </div>
        </div>
        <div class="filtrado">
            <p class="titulo">TIEMPO</p>
            <select name="select" id="select-tiempo">
                <option value="value1">12 meses</option> 
                <option value="value2">24 meses</option>
                <option value="value3">36 meses</option>
                <option value="value4">4 años</option>
                <option value="value5">5 años</option>
            </select>
        </div>
    </div>
    `; 
    const div = document.createElement('div');
    div.innerHTML = template; 

    const btnSumar = div.querySelector('#btn-sumar');
    const btnRestar = div.querySelector('#btn-restar'); 

    btnSumar.addEventListener('click', () => {
        monto.value = Number(monto.value) + 1000; 
        
    });
    btnRestar.addEventListener('click', () => {
        monto.value = Number(monto.value) - 1000; 
        
    });
  
    return div
}

export const filtrado = (obj) => {
    const template = `
     <p>Nombre</p>
     <img src="" alt="">
     <p>TIENE UN PRESTAMO DE:</p>
     <span>${obj.monto}</span>
     <p>¿CUANTO VOY A PAGAR?</p>
     <span>${obj.pagoMensual}</span>
     <p>INTERESES</p>
     <span>${obj.interes}</span>
     <p>MONTO TOTAL</p>
     <span>${obj.montoTotal}</span>
     <button>PIDE UN PRESTAMO</button>
    `; 
    const div = document.createElement('div');
    div.innerHTML = template; 
  
    return div
}