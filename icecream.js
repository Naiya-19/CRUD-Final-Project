const display = () => {
  $("#createIceCream").on("click", function() {
    $("#infoDisplay").html(`
      <p>Enter details for the new ice cream:</p>
      <p>Flavor: <input type="text" id="newNameInput" /></p>
      <p>Price: $<input type="text" id="newPriceInput" size="4" /></p>
      <p>Calories: <input type="text" id="newCaloriesInput" size="4" /></p>
      <button id="saveNewIceCream">Save New Ice Cream</button>
    `);

    $("#saveNewIceCream").on("click", function() {
      let newName = $("#newNameInput").val();
      let newPrice = $("#newPriceInput").val();
      let newCalories = $("#newCaloriesInput").val();
      let newId = newName.toLowerCase().replace(/\s+/g, '');

    
      icecream.push({
        id: newId,
        icecream_name: newName,
        price: newPrice,
        calories: newCalories
      });


      $("nav ul").append(`
        <li>
          <button id="${newId}" class="icecream">${newName}</button>
        </li>
      `);

      $(`#${newId}`).on("click", function() {
        let clickedId = $(this).attr("id");
        let icecreamInfo = icecream.find(ic => ic.id === clickedId);

        if (icecreamInfo) {
          let infoDisplay = $("#infoDisplay");
          infoDisplay.html("");

          infoDisplay.append(`
            <p>The flavor of the ice cream is ${icecreamInfo.icecream_name}, it costs $<input type="text" id="priceInput" value="${icecreamInfo.price}" size="4" />, and it has ${icecreamInfo.calories} calories</p>
            <button id="saveButton">Save/Update Price</button>
            <button id="deleteIceCreamButton">Delete Ice Cream</button>
          `);

          $("#saveButton").on("click", function() {
            let newPrice = $("#priceInput").val();
            icecreamInfo.price = newPrice;
            alert(`Price updated to $${newPrice}`);
          });

          $("#deleteIceCreamButton").on("click", function() {
            icecreamInfo = icecream.find(ic => ic.id === clickedId);
            alert(`${icecreamInfo.icecream_name} has been removed`);

            infoDisplay.html("");

            $(`#${clickedId}`).parent().remove();
          });
        }
      });

      alert(`New Ice Cream ${newName} Created!`);
    });
  });

  $(".icecream").on("click", function() {
    let clickedId = $(this).attr("id");
    let icecreamInfo = icecream.find(ic => ic.id === clickedId);

    if (icecreamInfo) {
      let infoDisplay = $("#infoDisplay");
      infoDisplay.html("");

      infoDisplay.append(`
        <p>The flavor of the ice cream is ${icecreamInfo.icecream_name}, it costs $<input type="text" id="priceInput" value="${icecreamInfo.price}" size="4" />, and it has ${icecreamInfo.calories} calories</p>
        <button id="saveButton">Save/Update Price</button>
        <button id="deleteIceCreamButton">Delete Ice Cream</button>
      `);

      $("#saveButton").on("click", function() {
        let newPrice = $("#priceInput").val();
        icecreamInfo.price = newPrice;
        alert(`Price updated to $${newPrice}`);
      });

      $("#deleteIceCreamButton").on("click", function() {

        alert(`${icecreamInfo.icecream_name} has been removed`);

        infoDisplay.html("");
        
        $(`#${clickedId}`).parent().remove(); 
      });
    }
  });
};

$(document).ready(display);


