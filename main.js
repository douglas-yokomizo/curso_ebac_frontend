function Produto(nome, valor, tipo) {
    let _valor = valor;
    let _nome = nome;
    let _tipo = tipo;

    this.getValor = function () {
        return _valor;
    };
    this.setValor = function (valor) {
        return _valor = valor;
    };

    this.getNome = function () {
        return _nome;
    };
    this.setNome = function (nome) {
        return _nome = nome;
    };

    this.getTipo = function () {
        return _tipo;
    };
    this.setTipo = function (tipo) {
        return _tipo = tipo;
    };
}

function Tenis(tamanho) {
    let _tamanho = tamanho
    
    Produto.call(this, tamanho);
    this.tamanho = tamanho;

    this.setTamanho = function (tamanho) {
        return _tamanho = tamanho
    }
    
    this.getTamanho = function () {
        return _tamanho
    }
}

function Telefone(marca) {
    let _marca = marca

    Produto.call(this, marca);

    this.setMarca = function (marca) {
        return _marca = marca
    };

    this.getMarca = function () {
        return _marca
    };
}

function Computador(memoria){
    let _memoria = memoria

    Produto.call(this, memoria);

    this.getMemoria = function(){
        return _memoria
    }
    this.setMemoria = function(memoria) {
        return _memoria = memoria
    }
}



// Teste para a instância Tenis
const Jordan = new Tenis(39);
Jordan.setNome('Air Jordan');
Jordan.setTipo('Calçado');
Jordan.setValor(1500);
Jordan.setTamanho(39);
console.log(`Tamanho do calçado: ${Jordan.getTamanho()}`)
console.log(`Nome do produto: ${Jordan.getNome()}`);
console.log(`Tipo do produto: ${Jordan.getTipo()}`);
console.log(`Valor do produto: ${Jordan.getValor()}`);

// Teste para a instância Telefone
const iphone = new Telefone();
iphone.setNome('iPhone 12 Pro');
iphone.setTipo('Eletrônico');
iphone.setValor(4500)
iphone.setMarca('Apple');
console.log(`Nome do produto: ${iphone.getNome()}`);
console.log(`Tipo do produto: ${iphone.getTipo()}`);
console.log(`Valor do produto: ${iphone.getValor()}`);
console.log(`Marca do telefone: ${iphone.getMarca()}`)

// Teste para a instância Computador
const Macbook = new Computador();
Macbook.setNome('Macbook PRO M1 2023')
Macbook.setTipo('Eletrônico')
Macbook.setValor(10000);
Macbook.setMemoria(512)
console.log(`Nome do produto: ${Macbook.getNome()}`);
console.log(`Tipo do produto: ${Macbook.getTipo()}`);
console.log(`Valor do produto: ${Macbook.getValor()}`);
console.log(`Memória do computador: ${Macbook.getMemoria()}gb`)