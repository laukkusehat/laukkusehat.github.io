$(document).ready(function(){
    read_list_menu()

    document.getElementById("nama-p").value = localStorage.getItem('user');
    document.getElementById("alamat").value = localStorage.getItem('alamat');
    document.getElementById("no-hp").value = localStorage.getItem('noHp');
    document.getElementById("catatan").value = localStorage.getItem('catatan');

});

function read_list_menu() {
    var url = script_url+"?action=list-menu";
   $.getJSON(url, function (json) {
        data =json.records
        data = data.sort((a, b) => {
          if (a.Stok > b.Stok) {
            return -1;
          }
        });
        console.log(data)

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {
            let product = data[i].Product;
            let desc = data[i].Desc;
            let harga = data[i].Harga;
            let menu = data[i].Menu;
            let bahan = data[i].Bahan;
            let stok = data[i].Stok;
            let linkImage = data[i].Image;
      
            var x = document.getElementById("list-menu");
      
            if(menu=='yes'){
              if(stok=='Habis'){
                var myProduct = '<li class="cards__item">';
                    myProduct += '<div class="card">'
                    myProduct += '<div class="card__image" style="background-image: url(' + linkImage +');"></div>'
                    myProduct += '<div class="card__content">'
                    myProduct += '<div class="card__title">' + product +'</div>'
                    myProduct += '<p class="card__text">' + desc +'</p>'
                    myProduct += '<p class="card__text price-text"><span style="margin-right:5%; font-size: 13pt; font-weight: 700;">Rp. ' + harga.toLocaleString('id-ID') +'</span></p>'
                    myProduct += '<p class="card__text habis">Habis</h4></p>'
                    myProduct += '</div></div></li>'
                    x.innerHTML += myProduct
                
              }else {
                var myProduct = '<li class="cards__item">';
                    myProduct += '<div class="card">'
                    myProduct += '<div class="card__image" style="background-image: url(' + linkImage +');"></div>'
                    myProduct += '<div class="card__content">'
                    myProduct += '<div class="card__title">' + product +'</div>'
                    myProduct += '<p class="card__text">' + desc +'</p>'
                    myProduct += '<p class="card__text price-text"><span style="margin-right:5%; font-size: 13pt; font-weight: 700;">Rp. ' + harga.toLocaleString('id-ID') +'</span></p>'
                    myProduct += '<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\"'+ harga +'\" data-product=\"'+ product +'\" data-bahan=\"'+ bahan +'\">'
                    myProduct += 'Add to Cart'
                    myProduct += '<img style="float: right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVR4nM3TMStFYRgH8CMDA8lkIIMMhMmgTCb5BIqU5WYSdRdGs9EiH8FuslCUxWywWHSV6ZaUkn469QzHcc7h3O5w//Uuz/u+v57ndN4k6flgAE0cYLkb4CgucItPLHWl0zS4wjPuO1g3GEmywbHO84WhPLhZcaGFp4r9xx9YgLMVF/axUbF/XgT24z138BVbmMZEoEWdHv4CA73LHWxHd3OYwm6Mn89aGXhaMlIzOi3LWBm4U3KhHeMXpVWIBTgZP3idnJWCgW7j7Z/YdfraKsHMG1/AYsUa/xPKoSfx7VYztT5c4gUzdcGHGOsoUxvER9TX64Lz2MNwrr6CRvoQaoE9kW8zxc1O58zUIAAAAABJRU5ErkJggg==">'
                    myProduct += '</a>'
                    myProduct += '</div></div></li>'
                    x.innerHTML += myProduct
              }
            }
      
          }
          
          generatz()

          $(".load-list").remove();
    });
}
