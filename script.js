document.addEventListener("DOMContentLoaded", function () {
    // Get all tabs and tab content
    var tabs = document.querySelectorAll('.tabs ul li a');
    var tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab
    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove 'active' class from all tabs and tab contents
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });
            tabContents.forEach(function (content) {
                content.classList.remove('active');
            });

            // Add 'active' class to the clicked tab and its corresponding content
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
});
