/**
 * Tests de displayUsers()
 */

QUnit.module(
    'getEntries(bdd, where, callback)',
    function (hooks) {

        // Avant chaque test
        hooks.beforeEach(function () {

            // Ajout de l'élément HTML "#users"
            var fixture = document.getElementById('qunit-fixture');
            fixture.innerHTML = '<div id="testgallery" class="row justify-content-around"></div>';

        });

        QUnit.test("5 entry in bdd = 5 bd in gallery", function (assert) {

            var testalbums = new Map();
            testalbums.set("1", {titre: "Croc vert", numero: "23", idSerie: "6", idAuteur: "13", prix: "24.50"});
            testalbums.set("2", {titre: "Machine qui rêve", numero: "46", idSerie: "2", idAuteur: "14", prix: "23.50"});
            testalbums.set("3", {titre: "La guerre des gloutons (II)", numero: "13", idSerie: "16", idAuteur: "11", prix: "14.50"});
            testalbums.set("4", {titre: "Le jour du Mayflower", numero: "20", idSerie: "10", idAuteur: "16", prix: "12"});
            testalbums.set("6", {titre: "La griffe de Rome", numero: "03", idSerie: "17", idAuteur: "9", prix: "14.50"});

            getEntries(testalbums, "#testgallery", createCard);
            
            var cards = document.querySelectorAll('#testgallery .image-min').length;

            assert.equal(cards, 5);

        });

        QUnit.test("empty bdd = 0 bd in gallery", function (assert) {

            var testalbums = new Map();

            getEntries(testalbums, "#testgallery", createCard);
            
            var cards = document.querySelectorAll('#testgallery .image-min').length;

            assert.equal(cards, 0);

        });

        QUnit.test("Croc vert in gallery", function (assert) {

            var testalbums = new Map();
            testalbums.set("1", {titre: "Croc vert", numero: "23", idSerie: "6", idAuteur: "13", prix: "24.50"});
            testalbums.set("2", {titre: "Machine qui rêve", numero: "46", idSerie: "2", idAuteur: "14", prix: "23.50"});
            testalbums.set("3", {titre: "La guerre des gloutons (II)", numero: "13", idSerie: "16", idAuteur: "11", prix: "14.50"});

            getEntries(testalbums, "#testgallery", createCard);

            var cards = document.querySelector(".card-title").innerHTML;

            assert.equal(cards, "Croc vert");

        });

    });

    QUnit.module(
        'getCartItemValues(key, where, callback)',
        function (hooks) {
            hooks.beforeEach(function () {
    
                var fixture = document.getElementById('qunit-fixture');
                fixture.innerHTML = '<nav class="testsidebar-cart"></nav>';
    
            });

        QUnit.test("5 bd in cart", function (assert) {
    
                getCartItemValues("1", ".testsidebar-cart", createCartItem);
                getCartItemValues("2", ".testsidebar-cart", createCartItem);
                getCartItemValues("3", ".testsidebar-cart", createCartItem);
                getCartItemValues("4", ".testsidebar-cart", createCartItem);
                getCartItemValues("6", ".testsidebar-cart", createCartItem);
                
                var item = document.querySelectorAll('.testsidebar-cart .image-min').length;
    
                assert.equal(item, 5);
    
            });

        QUnit.test("Croc vert in cart", function (assert) {
    
                getCartItemValues("1", ".testsidebar-cart", createCartItem);
                getCartItemValues("2", ".testsidebar-cart", createCartItem);
                getCartItemValues("3", ".testsidebar-cart", createCartItem);
                getCartItemValues("4", ".testsidebar-cart", createCartItem);
                getCartItemValues("6", ".testsidebar-cart", createCartItem);
                
                var item = document.querySelector(".card-text").innerHTML;
    
                assert.equal(item, "Croc vert");
    
            });
    
        });
