/**
 * BLOQUEADO
 * 
 * el desarrollo se estaba llevando a cabo en woocommerce
 * por eso tiene directorios de woo
 * 
 */
window.addEventListener("load", () => {  
  // considerar param flag indicando plataforma que podria modificar los elementos
  // donde se añaden flag y banner
  function displayProductTag(platform = "woocommerce") {
    let anchorProp;
    switch (platform) {
      case "woocommerce":
        anchorProp = {
          price: ".price",
          img: "img",
          list: ".products",
        };
        break;

      default:
        break;
    }
    const products = document.querySelectorAll(anchorProp.list + " li");
    products.forEach((product) => {
      let installment = {
        count: 6,
        amount: 38000,
        cardImg: "../wp-content/plugins/woocommerce-mobbex/assets/img/visa_1.svg", // cambiar por armar url cuando este
        sourceImg: "../wp-content/plugins/woocommerce-mobbex/assets/img/Santander.svg", // idem
      };
      // const installment = getFinanceInformation(product);
      addSourceFlag(product, anchorProp.img, installment);
      addFinanceBanner(product, anchorProp.price, installment);
    });
  }

  // Handles add flag over product image
  function addSourceFlag(product, eImg, installment) {
    const imgElement = product.querySelector(eImg);
    if (!imgElement) return;
    // Wrapper. Flag parent element
    const wrapper = document.createElement("div");
    wrapper.classList.add("mobbex-wrapper");

    // Append before product img (over with style)
    imgElement.parentNode?.insertBefore(wrapper, imgElement);
    wrapper.appendChild(imgElement);

    // Flag parent
    const flagBody = document.createElement("div");
    flagBody.classList.add("mobbex-flag");

    // add flag parts
    const flagTop = document.createElement("div");
    flagTop.classList.add("mobbex-flag-top");
    const flagImageTop = document.createElement("img")
    flagImageTop.classList.add("mobbex-flag-top-image");
    flagImageTop.src = installment.sourceImg;
    flagImageTop.alt = "source-image";

    const flagBottom = document.createElement("div");
    flagBottom.classList.add("mobbex-flag-bottom");

    const flagBottomLeft = document.createElement("div");
    flagBottomLeft.classList.add("mobbex-flag-bottom-left");
    const flagImageBottom = document.createElement("img")
    flagImageBottom.classList.add("mobbex-flag-bottom-image");
    flagImageBottom.src = installment.cardImg;
    flagImageBottom.alt = "card-image";

    const flagBottomRight = document.createElement("div");
    flagBottomRight.classList.add("mobbex-flag-bottom-right");
    flagBottomRight.innerHTML = 
    "<span class='mobbex-flag-bottom-count'>" + installment.count + "</span>" +
    "<span class='mobbex-flag-bottom-text'>Sin interés</span>";

    // Build elements jerarchy
    flagBottomLeft.appendChild(flagImageBottom);
    flagBottom.appendChild(flagBottomLeft);
    flagBottom.appendChild(flagBottomRight);
    flagTop.appendChild(flagImageTop);
    flagBody.appendChild(flagTop);
    flagBody.appendChild(flagBottom);

    wrapper.appendChild(flagBody);
  }

  // Handles add banner
  function addFinanceBanner(product, ePrice, installment) {
    const priceElement = product.querySelector(ePrice);
    if (!priceElement) return;

    const banner = document.createElement("div");
    banner.classList.add("mobbex-product-banner");
    const bannerTop = document.createElement("div");
    bannerTop.classList.add("mobbex-product-banner-top");
    bannerTop.innerHTML =
      "<span class='mobbex-installment-span-left'>Hasta</span><span class='mobbex-installment-span-right'>" +
      installment.count +
      " Cuotas</span>";
    const bannerBottom = document.createElement("div");
    bannerBottom.classList.add("mobbex-product-banner-bottom");
    bannerBottom.innerHTML =
      "<strong>Sin interés de</strong> $" + installment.amount;

    priceElement.parentNode?.insertBefore(banner, priceElement);

    banner.appendChild(bannerTop);
    banner.appendChild(bannerBottom);
  }

  displayProductTag();
});
