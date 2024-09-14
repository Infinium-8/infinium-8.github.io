function fetchApiData(url) {
    return new Promise((resolve, reject) => {
      const Http = new XMLHttpRequest();

      Http.open("GET", url, true);

      Http.onreadystatechange = function () {
        if (Http.readyState === XMLHttpRequest.DONE) {
          let status = Http.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            let info = Http.responseText;
            let json = JSON.parse(info);
            resolve(json);
          } else {
            reject("API ERROR"); 
          }
        }
      };
      
      Http.send();
    });
  }

  function updateElementWithApiData(elementId, url, field) {
    
    fetchApiData(url)
      .then(result => {
        document.getElementById(elementId).textContent = result.result[field]
        if (field === 'total_coins') {
          document.getElementById(elementId).textContent = (result.result[field] / 10 ** 8).toFixed(0);
        }
      })
      .catch(error => {
        document.getElementById(elementId).textContent = error;
      });
  }


  updateElementWithApiData("height", 'https://explorer.infinium.space/api/get_info/999999999999', 'height');
  updateElementWithApiData("txsCount", 'https://explorer.infinium.space/api/get_info/999999999999', 'tx_count');
  updateElementWithApiData("peersCount", 'https://explorer.infinium.space/api/get_info/999999999999', 'white_peerlist_size');
  updateElementWithApiData("totalCount", 'https://explorer.infinium.space/api/get_info/999999999999', 'total_coins');
