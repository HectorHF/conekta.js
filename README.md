![README Cover Image](readme_cover.png)

Conekta.JS 1.0.1
===

Conekta.js allows you to create a token with credit/debit card details in your web apps, by preventing sensitive card data from crossing your server (More information, read PCI compliance).

## Install

```sh
$ bower install conekta.js --save
```

## Usage

### Basic initialization

In your HTML, before the body tag closes, include jQuery and Conekta

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script type="text/javascript" src="https://cdn.conekta.io/js/v1.0.1/conekta.js"></script>
```

Set your public key

```javascript
Conekta.setPublicKey('key_KJysdbf6PotS2ut2');
```

### Advanced initialization

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script type="text/javascript" data-conekta-public-key="key_KJysdbf6PotS2ut2" src="https://cdn.conekta.io/js/v1.0.1/conekta.js"></script>
```

### Tokenize Card

**Tokenize via json**

```javascript
var data = {
  "card": {
    "number": "4242424242424242",
    "name": "Javier Pedreiro",
    "exp_year": "2018",
    "exp_month": "12",
    "cvc": "123"
  }
};

var successHandler = function(token) {
  /* token keys: id, livemode, used, object */
  console.log(token);
};

var errorHandler = function(err) {
  /* err keys: object, type, message, message_to_purchaser, param, code */
  console.log(err);
};

Conekta.Token.create(data, successHandler, errorHandler);
```

**Tokenize via form**

```html
<form action="" method="post" id="card-form">
  <span class="card-errors"></span>
  <div class="form-row">
    <label>
      <span>Nombre del tarjetahabiente</span>
      <input type="text" size="20" data-conekta="card[name]"/>
    </label>
  </div>
  <div class="form-row">
    <label>
      <span>Número de tarjeta de crédito</span>
      <input type="text" size="20" data-conekta="card[number]"/>
    </label>
  </div>
  <div class="form-row">
    <label>
      <span>CVC</span>
      <input type="text" size="4" data-conekta="card[cvc]"/>
    </label>
  </div>
  <div class="form-row">
    <label>
      <span>Fecha de expiración (MM/AAAA)</span>
      <input type="text" size="2" data-conekta="card[exp_month]"/>
    </label>
    <span>/</span>
    <input type="text" size="4" data-conekta="card[exp_year]"/>
  </div>
  <button type="submit">Tokenizar!</button>
</form>
```

```javascript
var successHandler = function(token) {
  /* token keys: id, livemode, used, object */
  console.log(token);
};

var errorHandler = function(err) {
  /* err keys: object, type, message, message_to_purchaser, param, code */
  console.log(err);
};

Conekta.Token.create($('#card-form'), successHandler, errorHandler);
```

## Documentation

Please see [developers.conekta.com/api](https://developers.conekta.com/api) for up-to-date documentation.

## Library Development and Testing

If you wish to make a pull request you can build and test your changes:

```shell
#build
grunt

#test
npm test
```

To expedite the process you can use a docker with the library and environment preloaded:

```shell
docker pull conekta/conekta.js

docker run -ti conekta/conekta.js /bin/bash --login
```
## License

Developed in México by [Conekta](https://www.conekta.com). Available with [MIT License](LICENSE).

***

## We are always hiring!

If you are comfortable working with a range of backend languages (Java, Python, Ruby, PHP, etc) and frameworks, you have solid foundation in data structures, algorithms and software design with strong analytical and debugging skills, send us your CV and GitHub to quieroser@conekta.com
