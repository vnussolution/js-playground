$(function() {
  const firstLi = $(".shopping-list li:first").clone(); //.find('.shopping-item');
  console.log("====", firstLi[0]);

  // $('.shopping-list').append(firstLi);
  $("#frank").text(firstLi[0]);

  $("#js-shopping-list-form").submit(e => {
    e.preventDefault();
    console.log("......");

    // clone the first li

    // modify the cloned li, replace the name

    //append to ul , and make it first
  });
});
