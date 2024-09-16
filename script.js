// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');  // Select the menu icon
    const closeBtn = document.querySelector('.close-btn');  // Select the close button
    const menuLinks = document.querySelectorAll('.sidebar a'); // Targeting all sidebar links

    // Add click event listener to the menu icon
menuIcon.addEventListener('click', function() {
    // Toggle the 'sidebar-open' class to show/hide the sidebar
    sidebar.classList.toggle('sidebar-open');

    // Toggle the 'close-icon' class to change the icon
    menuIcon.classList.toggle('close-icon');

    // Change the icon based on whether the sidebar is open
    if (sidebar.classList.contains('sidebar-open')) {
        // Change to close button (X)
        menuIcon.innerHTML = '<i class="fa fa-times"></i>';
    } else {
        // Change back to menu icon (bars)
        menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Show the modal
    document.getElementById('modal').style.display = 'block';
});

// Get the modal
var modal = document.getElementById('modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

    // Close sidebar when a menu link is clicked (only if screen width is below 768px)
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768) {
                sidebar.classList.remove('sidebar-open'); // Hide the sidebar
            }

            // Change the icon based on whether the sidebar is open
    if (sidebar.classList.contains('sidebar-open')) {
        // Change to close button (X)
        menuIcon.innerHTML = '<i class="fa fa-times"></i>';
    } else {
        // Change back to menu icon (bars)
        menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
    }
        });
    });
});
