
        document.querySelectorAll('.btn-danger').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                swal({
                    title: "Are you sure?",
                    text: "If delete will no longer exist.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        button.closest('form').submit();
                    }
                });
    
                // Custom CSS for SweetAlert width and height
                const swalContainer = document.querySelector('.swal-modal');
                if (swalContainer) {
                    swalContainer.style.width = '302px';
                    swalContainer.style.height = '402px';
                }
    
                // Add margin-top to the SweetAlert icon
                const swalIcon = document.querySelector('.swal-icon');
                if (swalIcon) {
                    swalIcon.style.marginTop = '50px'; // Adjust margin-top to 50px (or as needed)
                }
        
                // Add margin-top to the text ("Food Updating Successfully")
                const swalText = document.querySelector('.swal-text');
                if (swalText) {
                    swalText.style.marginTop = '20px'; // Adjust the margin-top to your preference
                }
    
                // Center the Cancel and OK buttons
                const swalButtons = document.querySelector('.swal-footer');
                if (swalButtons) {
                    swalButtons.style.display = 'flex';
                    swalButtons.style.justifyContent = 'center';
                    //swalButtons.style.gap = '5px'; // Optional gap between buttons
    
                    // Styling for the Cancel button (padding-left 50px)
                    const cancelButton = swalButtons.querySelector('.swal-button--cancel');
                    if (cancelButton) {
                        cancelButton.style.margin = '5px';  // Add desired margin here (10px example)
                        cancelButton.style.borderRadius = '32px'; // Add border-radius (rounded corners) to the button
                        cancelButton.style.paddingLeft = '40px'; // Add padding-left to the Cancel button
                        cancelButton.style.paddingRight = '40px'; // Add padding-right to the Cancel button
                        cancelButton.style.paddingTop = '7px'; // Add padding-right of 20px
                        cancelButton.style.paddingBottom = '7px'; // Add padding-right of 20px
                    }

                    // Styling for the OK button (padding-left 50px)
                    const okButton = swalButtons.querySelector('.swal-button--confirm');
                    if (okButton) {
                        okButton.style.margin = '5px';  // Add desired margin here (10px example)
                        okButton.style.borderRadius = '32px'; // Add border-radius (rounded corners) to the button
                        okButton.style.paddingLeft = '50px'; // Add padding-left to the OK button
                        okButton.style.paddingRight = '50px'; // Add padding-right to the OK button
                        okButton.style.paddingTop = '7px'; // Add padding-right of 20px
                        okButton.style.paddingBottom = '7px'; // Add padding-right of 20px
                    }
    
                    // Remove box-shadow and active border
                    const btns = swalButtons.querySelectorAll('button');
                    btns.forEach(btn => {
                        btn.style.boxShadow = 'none';  // Remove box-shadow (no shadow effect)
                        btn.style.outline = 'none';  // Remove outline (active border when clicked)
                    });
                }
            });
        });
    //</script>
    

    //<!-- SweetAlert Script for Create Product 
    //<script>
        /*document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                swal({
                    title: "Success",
                    text: "Add Food Item Successfully",
                    icon: "success",
                    //buttons: true,
                }).then((willAdd) => {
                    if (willAdd) {
                        button.closest('form').submit();
                    }
                });
            });
        });*/
  

    //<!-- SweetAlert Script for Update Product -->
  
        document.querySelectorAll('.btn-warning').forEach(button => {
            button.addEventListener('click', function(e) {
    
                e.preventDefault();
                swal({
                    title: "Update!",
                    text: "Food Updating Successfully",
                    icon: "success",
                    //buttons: true, // Ensure buttons are shown
                }).then((willUpdate) => {
                    if (willUpdate) {
                        button.closest('form').submit();
                    }
                });
    
                // Custom CSS for SweetAlert width and height
                const swalContainer = document.querySelector('.swal-modal');
                if (swalContainer) {
                    swalContainer.style.width = '302px';
                    swalContainer.style.height = '402px';
                }

                // Add margin-top to the SweetAlert icon
                const swalIcon = document.querySelector('.swal-icon');
                if (swalIcon) {
                    swalIcon.style.marginTop = '50px'; // Adjust margin-top to 20px (or as needed)
                }
    
                // Add margin-top to the text ("Food Updating Successfully")
                const swalText = document.querySelector('.swal-text');
                if (swalText) {
                    swalText.style.marginTop = '20px'; // Adjust the margin-top to your preference
                }

                // Add margin to the SweetAlert buttons
                const swalButtons = document.querySelectorAll('.swal-button');
                swalButtons.forEach(btn => {
                    btn.style.margin = '10px';  // Add desired margin here (10px example)
                    btn.style.borderRadius = '32px'; // Add border-radius (rounded corners) to the button
                    btn.style.paddingLeft = '40px';  // Add padding-left of 20px
                    btn.style.paddingRight = '40px'; // Add padding-right of 20px
                    btn.style.paddingTop = '7px'; // Add padding-right of 20px
                    btn.style.paddingBottom = '7px'; // Add padding-right of 20px
                    btn.style.backgroundColor = '#2dd284'; // Set background color (green)
                    btn.style.color = 'white';  // Set text color (white)
                    btn.style.border = 'none';  // Remove default border if needed

                    // Remove box-shadow and active border
                    btn.style.boxShadow = 'none';  // Remove box-shadow (no shadow effect)
                    btn.style.outline = 'none';  // Remove outline (active border when clicked)
                });
    
                // Center the SweetAlert button
                const swalButtonContainer = document.querySelector('.swal-button-container');
                if (swalButtonContainer) {
                    swalButtonContainer.style.display = 'flex';
                    swalButtonContainer.style.justifyContent = 'center'; // Centers button horizontally
                    swalButtonContainer.style.alignItems = 'center';   // Centers button vertically (if needed)
                }

            });
        });






        //<!-- SweetAlert Script for Update Menuuuuuuuuuuuuuu -->
  
        document.querySelectorAll('.btn-menu').forEach(button => {
            button.addEventListener('click', function(e) {
    
                e.preventDefault();
                swal({
                    title: "Success!",
                    text: "Order Success",
                    icon: "success",
                    //buttons: true, // Ensure buttons are shown
                }).then((willUpdate) => {
                    if (willUpdate) {
                        button.closest('form').submit();

                        // Redirect to product.ejs after clicking the "OK" button
                      //window.location.href = '/menu';  // Adjust the URL based on your route
                      onclick="window.history.back();"
                    }
                });
    
                // Custom CSS for SweetAlert width and height
                const swalContainer = document.querySelector('.swal-modal');
                if (swalContainer) {
                    swalContainer.style.width = '302px';
                    swalContainer.style.height = '402px';
                }

                // Add margin-top to the SweetAlert icon
                const swalIcon = document.querySelector('.swal-icon');
                if (swalIcon) {
                    swalIcon.style.marginTop = '50px'; // Adjust margin-top to 20px (or as needed)
                }
    
                // Add margin-top to the text ("Food Updating Successfully")
                const swalText = document.querySelector('.swal-text');
                if (swalText) {
                    swalText.style.marginTop = '20px'; // Adjust the margin-top to your preference
                }

                // Add margin to the SweetAlert buttons
                const swalButtons = document.querySelectorAll('.swal-button');
                swalButtons.forEach(btn => {
                    btn.style.margin = '10px';  // Add desired margin here (10px example)
                    btn.style.borderRadius = '32px'; // Add border-radius (rounded corners) to the button
                    btn.style.paddingLeft = '40px';  // Add padding-left of 20px
                    btn.style.paddingRight = '40px'; // Add padding-right of 20px
                    btn.style.paddingTop = '7px'; // Add padding-right of 20px
                    btn.style.paddingBottom = '7px'; // Add padding-right of 20px
                    btn.style.backgroundColor = '#2dd284'; // Set background color (green)
                    btn.style.color = 'white';  // Set text color (white)
                    btn.style.border = 'none';  // Remove default border if needed

                    // Remove box-shadow and active border
                    btn.style.boxShadow = 'none';  // Remove box-shadow (no shadow effect)
                    btn.style.outline = 'none';  // Remove outline (active border when clicked)
                });
    
                // Center the SweetAlert button
                const swalButtonContainer = document.querySelector('.swal-button-container');
                if (swalButtonContainer) {
                    swalButtonContainer.style.display = 'flex';
                    swalButtonContainer.style.justifyContent = 'center'; // Centers button horizontally
                    swalButtonContainer.style.alignItems = 'center';   // Centers button vertically (if needed)
                }

            });
        });






        document.querySelectorAll('.btn-logout').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                swal({
                    title: "Are you sure?",
                    text: "Do you want to Log-out",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        // Redirect to the logout page
                        window.location.href = '/logout';
                    }
                });
    
                // Custom CSS for SweetAlert width and height
                const swalContainer = document.querySelector('.swal-modal');
                if (swalContainer) {
                    swalContainer.style.width = '302px';
                    swalContainer.style.height = '402px';
                }
    
                // Add margin-top to the SweetAlert icon
                const swalIcon = document.querySelector('.swal-icon');
                if (swalIcon) {
                    swalIcon.style.marginTop = '50px'; // Adjust margin-top to 50px (or as needed)
                }
        
                // Add margin-top to the text ("Food Updating Successfully")
                const swalText = document.querySelector('.swal-text');
                if (swalText) {
                    swalText.style.marginTop = '20px'; // Adjust the margin-top to your preference
                }
    
                // Center the Cancel and OK buttons
                const swalButtons = document.querySelector('.swal-footer');
                if (swalButtons) {
                    swalButtons.style.display = 'flex';
                    swalButtons.style.justifyContent = 'center';
                    //swalButtons.style.gap = '5px'; // Optional gap between buttons
    
                    // Styling for the Cancel button (padding-left 50px)
                    const cancelButton = swalButtons.querySelector('.swal-button--cancel');
                    if (cancelButton) {
                        cancelButton.style.margin = '5px';  // Add desired margin here (10px example)
                        cancelButton.style.borderRadius = '8px'; // Add border-radius (rounded corners) to the button
                        cancelButton.style.paddingLeft = '40px'; // Add padding-left to the Cancel button
                        cancelButton.style.paddingRight = '40px'; // Add padding-right to the Cancel button
                        cancelButton.style.paddingTop = '7px'; // Add padding-right of 20px
                        cancelButton.style.paddingBottom = '7px'; // Add padding-right of 20px

                        cancelButton.style.backgroundColor = '#bbb'; // Add background color (Red in this case)
                        cancelButton.style.color = '#fff'; // Optional: Change text color to white for better visibility
                    }

                    // Styling for the OK button (padding-left 50px)
                    const okButton = swalButtons.querySelector('.swal-button--confirm');
                    if (okButton) {
                        okButton.style.margin = '5px';  // Add desired margin here (10px example)
                        okButton.style.borderRadius = '8px'; // Add border-radius (rounded corners) to the button
                        okButton.style.paddingLeft = '50px'; // Add padding-left to the OK button
                        okButton.style.paddingRight = '50px'; // Add padding-right to the OK button
                        okButton.style.paddingTop = '7px'; // Add padding-right of 20px
                        okButton.style.paddingBottom = '7px'; // Add padding-right of 20px
                    }
    
                    // Remove box-shadow and active border
                    const btns = swalButtons.querySelectorAll('button');
                    btns.forEach(btn => {
                        btn.style.boxShadow = 'none';  // Remove box-shadow (no shadow effect)
                        btn.style.outline = 'none';  // Remove outline (active border when clicked)
                    });
                }
            });
        });