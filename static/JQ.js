//this i for prism website 



$(document).ready(function () {
    $(".nav-tabs li").click(function (e) {
      e.preventDefault(); // Prevent the default behavior of the <a> tag
      $(".nav-tabs li").removeClass("active");
      $(this).addClass("active");
      var tab = $(this).find("a").attr("href");
      $(".tab-pane").removeClass("active");
      $(tab).addClass("active");
    });
  
    $(".btnNext").click(function (e) {
      e.preventDefault(); // Prevent the default behavior of the <a> tag
    
      var currentTab = $(".nav-tabs li.active");
      var nextTab = currentTab.next();
    
      if (nextTab.length > 0) {
        // Check if all required fields in the current tab are filled
        var requiredFields = currentTab.find(".required");
        var isFieldsFilled = true;
        if($("#full_name").val().trim() === ""  || $("#BasicDetails_email").val().trim() === "" || $("#dob").val().trim() === "" ) {
          isFieldsFilled = false;
        }
    
        if (!isFieldsFilled) {
          alert("Please fill in all required fields before proceeding.");
          return; // Exit the click event handler if any required field is empty
        }
    
        currentTab.removeClass("active");
        nextTab.addClass("active");
        var tab = nextTab.find("a").attr("href");
        $(".tab-pane").removeClass("active");
        $(tab).addClass("active");
      }
    });
  
    $(".btnPrevious").click(function () {
      var currentTab = $(".nav-tabs li.active");
      var prevTab = currentTab.prev();
  
      if (prevTab.length > 0) {
        currentTab.removeClass("active");
        prevTab.addClass("active");
        var tab = prevTab.find("a").attr("href");
        $(".tab-pane").removeClass("active");
        $(tab).addClass("active");
      }
    });
  
    $(".slider").each(function () {
      var sliderId = $(this).attr("id");
      var amountId = "#" + sliderId + "_amount";
      var minValue = parseInt($(this).data("begin"));
      var maxValue = parseInt($(this).data("end"));
  
      $(this).slider({
        range: "min",
        value: 0,
        min: minValue,
        max: maxValue,
        slide: function (event, ui) {
          $(amountId).val(ui.value);
        }
      });
  
      $(amountId).val($(this).slider("value"));
    });

    $(".list-sidebar li").click(function() {
      $(".list-sidebar li").removeClass("active");
      $(this).addClass("active");
    });

    // Highlight the list item on mouse hover
    $(".list-sidebar li").hover(
      function() {
        $(this).addClass("hover");
      },
      function() {
        $(this).removeClass("hover");
      }
    );

    $("#instantEpan").click(function(e) {
      e.preventDefault();
      const dataHref = $(this).data("href");
      if (dataHref) {
        window.open(dataHref);
      }
      return false;
    });

    $("#verifyPan").click(function(e){
      e.preventDefault();
      const dataHref = $(this).data("href");
      if (dataHref) {
        window.open(dataHref);
      }
    });

    $("#tanDetails").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#linkAddhar").click(function(){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#knowAo").click(function(){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#tdsRate").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });


    $("#dueDateCal").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#incomeCal").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#taxCal").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#ePay").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#taxPayStatus").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#eVerReturn").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#searchGstinUin").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#searchTaxPayByPan").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#searchComTaxPayer").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#searchEInvoice").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#searchAdvanceRuling").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#searchHsn").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    $("#refundstatus").click(function(e){
      e.preventDefault();
      const dataHref=$(this).data("href");
      if(dataHref){
        window.open(dataHref);
      }
    });

    


    

        });