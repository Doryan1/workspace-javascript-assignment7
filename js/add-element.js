/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function() {
  $(this).removeClass("hot");
  $(this).addClass("cool");
});

// traverse the elements
$("#one")
  .next()
  .next()
  .text("milk");

// add a new element
// before and after are for siblings
// append and prepend are for parent

// add by clicking the plus sign
$("#add").click(addElement);

function addElement() {
  // add a new element
  // add a input text box
  $("#todo").append("<li><input type='text'> </li>");

  // whenever the user are done

  $("input").blur(function() {
    //change style
    $(this)
      .parent()
      .addClass("cool");

    // bind click with new li element

    //remove input element and replace with the value user typed
    var userinput = $(this).val();
    $(this)
      .parent()
      .text(userinput);
  });
}

$("li").click(changeStyle); // bind click with the event handler

//  click the li element will change the changeStyle
function changeStyle() {
  if ($(this).hasClass("complete")) {
    $(this).removeClass("complete");
    $(this).addClass("cool");
  } else {
    // if it is cool class , remove cool and add complete
    // if it is  hot class,  remove hot and add complete
    // else ,   add complete

    $(this).addClass("complete");
  }
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
  $("li.complete").remove();
}
