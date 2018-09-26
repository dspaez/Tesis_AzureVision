document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.querySelector('#inputImage').addEventListener('change', function() {

  var reader = new FileReader();
  reader.onload = function() {

    var arrayBuffer = this.result,
      array = new Uint8Array(arrayBuffer);

    $.ajax({
       url: "https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/aefd752e-cfbe-4961-9c8e-3a5814327bd5/image",

     beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Prediction-Key","");
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Prediction-key","4ed2dbe378b048039f709f1079ff3ad0");
            },
      type: "POST",
      processData: false,
      data: arrayBuffer
    }) .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
  }
  reader.readAsArrayBuffer(this.files[0]);

}, false);
});