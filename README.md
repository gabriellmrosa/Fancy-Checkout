# Fancy Checkout
A animated experience for your desktop checkout !

![animation](./src/img/animation.gif)

The first launch of a idea, be free to submit your improvements, let´s be open source!

A animated experience for your desktop checkout!


See in the browser, someone uploaded the project on cssscripts.com: [Click Here](https://www.cssscript.com/demo/fancy-animated-checkout-experience/) :D
Project on behance here: [HERE](https://www.behance.net/gallery/69833603/FANCY-CHECKOUT)

Thanks!

## How to use

Open the [index.html](./index.html) file to see the full example.

```html
<!-- css assets -->

<link href="https://fonts.googleapis.com/css?family=Nunito:300,400,900" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="dist/css/fancy-checkout.css">
```

```html
<!-- js assets -->

<script src="dist/js/fancy-checkout.js"></script>
<script>
  const buyButton = document.getElementById('btn-comprar');
  buyButton.addEventListener('click', function () {
    buyButton.innerHTML = 'Processando...';

    // fake api request
    window.setTimeout(function () {
      // success return
      FancyCheckout.init();
    }, 2000);
  });
</script>
```

## To do

- [ ] Add form validation

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriellamas/Fancy-Checkout/tags).

## Authors

See also the list of [contributors](https://github.com/gabriellamas/Fancy-Checkout/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
