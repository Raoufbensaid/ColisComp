document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const counterValue = document.getElementById('counterValue');

    let count = 0;

    function updateCounter() {
        counterValue.value = count;
    }

    decreaseBtn.addEventListener('click', function () {
        // Vérifier que la valeur de count est supérieure à zéro avant de décrémenter
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    increaseBtn.addEventListener('click', function () {
        // Incrémenter directement, car il n'y a pas de restriction sur les nombres positifs
        count++;
        updateCounter();
    });
});