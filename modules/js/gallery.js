

// Function to ensure all images are loaded
function imagesLoaded() {
    var images = $('img');
    var totalImages = images.length;
    var loadedImages = 0;

    // Listen for the load event on each image
    images.on('load', function () {
        loadedImages++;
        
        // If all images have loaded, show the gallery
        if (loadedImages === totalImages) {
            $('.gallery-sec').css({
                'visibility': 'visible',
                'opacity': '1'
            });
            filterGallery(category); // Apply the filter logic after images load
            setActiveCategoryButton(category); // Set the active category button
        }
    });
}



// Function to get query parameter value from URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the category from the URL
const category = getQueryParameter('category');

// Function to filter gallery images based on category (using Isotope)
function filterGallery(category) {
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',  // Masonry layout to fix alignment
        masonry: {
            columnWidth: '.grid-item',  // This ensures that items are placed in columns
            gutter: 15  // Space between items
        },
        transitionDuration: '0.8s',
    });

    // If no category is specified, show all images
    if (!category) {
        $grid.isotope({ filter: '*' }); // Show all images
    } else {
        // Filter images based on category
        $grid.isotope({ filter: `.${category}` }); // Only show matching category images
    }
}

// Function to set active category button
function setActiveCategoryButton(category) {
    // Remove active class from all buttons
    $('.filters button').removeClass('active');
    
    // If category exists, add active class to the corresponding button
    if (category) {
        $(`.filters button[data-filter=".${category}"]`).addClass('active');
    } else {
        // Set "All" button as active if no category is specified
        $('.filters button[data-filter="*"]').addClass('active');
    }
}

// Run the filter and set active button when the page loads
window.onload = function() {
    filterGallery(category);
    setActiveCategoryButton(category);
};

$(document).ready(function () {

    // Trigger image loading check on document ready
    imagesLoaded();

    
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',  // Masonry layout to fix alignment
        masonry: {
            columnWidth: '.grid-item',  // This ensures that items are placed in columns
            gutter: 15  // Space between items
        },
        transitionDuration: '0.8s',
    });

    // Set "All" filter button as active on page load
    $('.filters button[data-filter="*"]').addClass('active');

    // Filter items on button click
    $('.filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // Add active class to clicked button
        $('.filters button').removeClass('active');
        $(this).addClass('active');
    });
});
