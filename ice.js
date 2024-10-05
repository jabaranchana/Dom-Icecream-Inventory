
        var inventory = [];
        
        document.getElementById('add-ice-cream').onclick = function() {
            var flavor = document.getElementById('flavor').value;
            var price = parseFloat(document.getElementById('price').value);
            var quantity = parseInt(document.getElementById('quantity').value);
            
            if (flavor && !isNaN(price) && !isNaN(quantity)) {
                var iceCream = { flavor: flavor, price: price, quantity: quantity };
                inventory.push(iceCream);
                displayInventory();
                calculateTotalValue();
                document.getElementById('flavor').value = '';
                document.getElementById('price').value = '';
                document.getElementById('quantity').value = '';
            }
        };

        function displayInventory() {
            var list = document.getElementById('ice-cream-list');
            list.innerHTML = '';
            inventory.forEach(function(iceCream, index) {
                var li = document.createElement('li');
                li.className = 'ice-cream-item';
                li.innerHTML = `Flavor: ${iceCream.flavor}, Price: ₹${iceCream.price}, Quantity: ${iceCream.quantity} 
                <button onclick="updateFlavor(${index})">Update Flavor</button>`;
                list.appendChild(li);
            });
        }

        function updateFlavor(index) {
            var newFlavor = prompt('Enter new flavor:', inventory[index].flavor);
            if (newFlavor) {
                inventory[index].flavor = newFlavor;
                displayInventory();
            }
        }

        function calculateTotalValue() {
            var total = inventory.reduce(function(sum, iceCream) {
                return sum + (iceCream.price * iceCream.quantity);
            }, 0);
            document.getElementById('total-value').innerText = total.toFixed(2);
        }
