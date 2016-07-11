function Shoe(name, size, color, price, image) {
  this.name = name;
  this.size = size;
  this.color = color;
  this.price = price;
  this.image = image;
}

var shoeArray = []

var foamposite = new Shoe('Nike Foamposite', "7-12 US", "Wolf Grey/Bright Crimson", "$250", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_nike_air-foamposite-pro-premium-le_616750-003.view_5.jpg?itok=sfgudPEr")
var kobe = new Shoe('Nike Kobe XI', "7-12 US", "Hyper Grape/Black", "$200", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_nike_kobe-xi-elite-low_822675-510.view_5.jpg?itok=Kc5UAzt6")
var penny = new Shoe('Nike Air Penny II', "7-12 US", "College Blue/White/Black", "$150", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_nike_penny-ii_333886-400.view_5.jpg?itok=iNVehkoe")
var adipink = new Shoe('Adidas Stan Smith', "7-12 US", "Ash Pink", "$400", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_adidas_raf-simons-stan-smith_aq2646.view_5.jpg?itok=_omIp1Y9")
var adiyellow = new Shoe('Adidas Stan Smith', "7-12 US", "Blush Yellow", "$400", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_adidas_raf-simons-stan-smith_aq2647.view_5.jpg?itok=1C59r8ce")
var adiorange = new Shoe('Adidas Stan Smith', "7-12 US", "Orange", "$455", "https://undefeated.com/sites/default/files/styles/1280/public/products/b35497_05.jpg?itok=oWnWXumb")
var vanszeebra = new Shoe('Vans SK8-HI', "7-12 US", "Black/Zeebra", "$120", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_vans_sk8-hi_vn-03t0ij0.view_5.jpg?itok=k1mz16fj")
var vansleopard = new Shoe('Vans SK8-HI', "7-12 US", "Beige/Leopard", "$120", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_vans_sk8-hi_vn-03t0iia.view_5.jpg?itok=ESB1HSGQ")
var vansnavy = new Shoe('Vans SK8-HI', "7-12 US", "Blue/Navy", "$60", "https://undefeated.com/sites/default/files/styles/1280/public/products/foootwear_vans_sk8-hi-reissue_vn-0za0g86.view_5.jpg?itok=hisaoIGW")

shoeArray.push(foamposite)
shoeArray.push(kobe)
shoeArray.push(penny)
shoeArray.push(adipink)
shoeArray.push(adiyellow)
shoeArray.push(adiorange)
shoeArray.push(vanszeebra)
shoeArray.push(vansleopard)
shoeArray.push(vansnavy)

for (i = 0; i < shoeArray.length; i++) {
  var tName = document.createTextNode(shoeArray[i].name)
  var tSize = document.createTextNode("Available sizes: " + shoeArray[i].size)
  var tColor = document.createTextNode("Color: " + shoeArray[i].color)
  var tPrice = document.createTextNode("Price: " + shoeArray[i].price)
  var tButton = document.createTextNode("Buy Now!")
  var tImage = shoeArray[i].image

  var newCol = document.createElement("DIV")
  var newDiv = document.createElement("DIV")
  var nameH1 = document.createElement("H1")
  var sizeH4 = document.createElement("H4")
  var colorH4 = document.createElement("H4")
  var priceH4 = document.createElement("H4")
  var buyNow = document.createElement("BUTTON")
  var image = document.createElement("IMG")

  nameH1.appendChild(tName)
  sizeH4.appendChild(tSize)
  colorH4.appendChild(tColor)
  priceH4.appendChild(tPrice)
  buyNow.appendChild(tButton)
  buyNow.className = "btn"
  image.src = tImage
  image.className = "img-responsive"

  newCol.className = "col-sm-4"
  newDiv.className = "tshoe shoeName" + i + " thumbnail"
  newDiv.appendChild(nameH1)
  newDiv.appendChild(image)
  newDiv.appendChild(sizeH4)
  newDiv.appendChild(colorH4)
  newDiv.appendChild(priceH4)
  newDiv.appendChild(buyNow)
  newCol.appendChild(newDiv)

  document.getElementById("shoes").appendChild(newCol)
}


