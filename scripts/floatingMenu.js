
var keepMenuOpenBoole = false;

//event listeners for buttons (providing them with behaviour). 
document.getElementById("myBtn").addEventListener("mouseover", openMenu);
document.getElementById("myBtn").addEventListener("mouseout", triggerClose);
document.getElementById("myBtn2").addEventListener("mouseover", remainOpen);
document.getElementById("myBtn2").addEventListener("mouseout", triggerClose);
document.getElementById("myBtn3").addEventListener("mouseover", remainOpen);
document.getElementById("myBtn3").addEventListener("mouseout", triggerClose);
document.getElementById("myBtn4").addEventListener("mouseover", remainOpen);
document.getElementById("myBtn4").addEventListener("mouseout", triggerClose);
document.getElementById("myBtn5").addEventListener("mouseover", remainOpen);
document.getElementById("myBtn5").addEventListener("mouseout", triggerClose);
document.getElementById("myBtn6").addEventListener("mouseover", remainOpen);
document.getElementById("myBtn6").addEventListener("mouseout", triggerClose);

//when a the user scrolls, call the scroll function
window.onscroll = function() { //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  scrollFunction()
};

/*

                         *******openMenu()*******

The purpose of openMenu is to trigger the menu to appear (open) on the screen.

When you "mouseover" myBtn, openMenu is called. It sets all the other buttons in
the menu to 'style.display' = "block", which will make them appear on screen. 

*/

function openMenu() {

  keepMenuOpenBoole = true;

  //if the screen is wider than 790 pixels, show the buttons.
  //Note: This code ensures that only myBtn ("Top") will be displayed on mobile screens. 
  if (screen.width >= 790) { 
    document.getElementById("myBtn2").style.display = "block"; 
    document.getElementById("myBtn3").style.display = "block";
    document.getElementById("myBtn4").style.display = "block";
    document.getElementById("myBtn5").style.display = "block";
    document.getElementById("myBtn6").style.display = "block";
  }

}

/*

                         *******triggerClose()*******

The purpose of triggerClose is to trigger the menu to disappear (close) from the screen.

When you "mouseout" (stop hovering your mouse over a button), triggerClose is called. 
The keepMenuOpenBoole is set to false, and a timer is set to wait 10ms before calling
the closeMenu function. 

*/

function triggerClose() {
  keepMenuOpenBoole = false;
  window.setTimeout(closeMenu, 10);
}

/*

                         *******remainOpen()*******

The purpose of the remainOpen() function is to keep your menu open as you move your 
mouse between buttons in the menu. It does this by setting the 'keepMenuOpenBoole' 
to true.  

*/

function remainOpen() { 
  keepMenuOpenBoole = true;
}

/*

                         *******closeMenu()*******

The purpose of the closeMenu() function is to close the menu when 
it has been set to close. It is called by triggerClose(). 

If keepMenuOpenBoole is set to true, closeMenu() will keep the menu open. 

If keepMenuOpenBoole is set to false, closeMenu() will set the display of the
buttons to "none", thus closing the menu. 

*/

function closeMenu() {
  
  //set display of buttons to "block" if keepMenuOpenBoole is true
  if (keepMenuOpenBoole == true) {

    if (screen.width >= 790) {
      document.getElementById("myBtn2").style.display = "block";
      document.getElementById("myBtn3").style.display = "block";
      document.getElementById("myBtn4").style.display = "block";
      document.getElementById("myBtn5").style.display = "block";
      document.getElementById("myBtn6").style.display = "block";
    }

    keepMenuOpenBoole = false; //resets the keepMenuOpenBoole to false

  } else { //if the keepMenuOpenBoole is false, it closes the menu by setting the buttons to display type "none". 
    
      document.getElementById("myBtn2").style.display = "none";
      document.getElementById("myBtn3").style.display = "none";
      document.getElementById("myBtn4").style.display = "none";
      document.getElementById("myBtn5").style.display = "none";
      document.getElementById("myBtn6").style.display = "none";

  }
}

/*

                         *******scrollFunction()*******

The purpose of the scrullFunction() function is to display myBtn
on screen when the user has scrolled 200 pixels down the website. 

*/

function scrollFunction() { //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

  // When the user scrolls down 200px from the top of the document, show myBtn. 
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {

      //If the user is above 200px down the website, show none of the buttons
      document.getElementById("myBtn").style.display = "none";
      document.getElementById("myBtn2").style.display = "none";
      document.getElementById("myBtn3").style.display = "none";
      document.getElementById("myBtn4").style.display = "none";
      document.getElementById("myBtn5").style.display = "none";
      document.getElementById("myBtn6").style.display = "none";

  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() { //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the bookmark
function goToBookmark(bookmark){
      window.scrollTo(0, document.getElementById(bookmark).offsetTop);
}