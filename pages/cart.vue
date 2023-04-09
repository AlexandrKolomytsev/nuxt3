<template>
  <div class="cart-wrapper">
    <div class="cart-main-block">
      <div class="cart-info">
        <span class="cart-info__title">Корзина ({{cart.length}})</span>
        <div class="cart-items">
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <img class="cart-img" :src="item.src" alt="candle" width="100">
            <div class="cart-item__description-block">
              <p class="cart-item__name" v-text="item.name"/>
              <p class="cart-item__descriptions" v-text="item.description" />
              <span class="cart-price">{{item.price}} p.</span>
            </div>
          </div>
        </div>
        <div class="form-wrapper">
          <span class="form-name">Оформление заказа</span>
          <form class="form" @submit.prevent>
            <input v-model="form.name" type="text" placeholder="Имя">
            <input v-model="form.lastname" type="text" placeholder="Фамилия">
            <input v-model="form.patronymic" type="text" placeholder="Отчество">
            <span class="type-delivery">Тип доставки</span>
            <div class="type-delivery-radio">
              <div class="form-radio">
                <input id="radio-delivery1" type="radio" name="radio1" value="1" checked>
                <label for="radio-delivery1">Самовывоз</label>
              </div>
              <div class="form-radio">
                <input id="radio-delivery2" type="radio" name="radio1" value="2">
                <label for="radio-delivery2">Доставка</label>
              </div>
            </div>
            <input ref="address" id="suggest" v-model="form.address" type="text" placeholder="Адрес">
            <span class="type-delivery">Месседжер для связи</span>
            <div class="type-delivery-radio">
              <div class="form-radio">
                <input id="radio-massager1" type="radio" name="radio2" value="1" checked>
                <label for="radio-massager1">Telegram</label>
              </div>
              <div class="form-radio">
                <input id="radio-massager2" type="radio" name="radio2" value="2">
                <label for="radio-massager2">WhatsApp</label>
              </div>
              <div class="form-radio">
                <input id="radio-massager3" type="radio" name="radio2" value="2">
                <label for="radio-massager3">Viber</label>
              </div>
            </div>
            <input v-model="form.phone" type="number" placeholder="Номер телефона">
          </form>
        </div>
      </div>
      <aside class="cart-aside">
        <span class="name">Ваш заказ</span>
        <div class="count">
          <span>Товары ({{cart.length}})</span>
          <span>2222 ₽</span>
        </div>
        <div class="total">
          <span>Сумма к оплате</span>
          <span>34343 ₽</span>
        </div>
        <button class="button" @click="sendCart">Оформить заказ</button>
      </aside>
    </div>
  </div>
</template>

<script setup>
const address = ref(null)
const mapTest = ref(null);
let form = ref({})
const cart = useCart()
const initMap = scriptYandexMap()
form = {
  name: '',
  lastname: '',
  patronymic: '',
  typeDelivery: '',
  address: '',
  phone: '',
  typeMessager: '',

  order: cart
}
onMounted(() => {
  src()
  setTimeout(()=>{
    yMapInit()
  }, 3000)
  //inputAddressInit()
})
async function sendCart() {
  let response = await fetch(`https://api.telegram.org/bot6146228312:AAGFhGAImw6so7p7r02jWKEvsFbzhP283VQ/sendMessage?chat_id=412483578&text=${JSON.stringify(form)}`, {
    method: 'POST',
  });
  //https://api.telegram.org/bot<6146228312:AAGFhGAImw6so7p7r02jWKEvsFbzhP283VQ>/sendMessage?chat_id=412483578&text=Всем привет!
  console.log(response, 'response')
}
async function src() {
  if (initMap.value){
    return
  }
  console.log('ща сделаю')
  let recaptchaScript = document.createElement('script');
  await recaptchaScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=2a1cd647-2837-4f85-8d6c-45ea2223ec74&lang=ru_RU');
  document.head.appendChild(recaptchaScript);
  initMap.value = true
  console.log(initMap.value, 'initMap')
}

function yMapInit() {
  const suggestView = new ymaps.SuggestView('suggest');
}

/*function inputAddressInit() {
  console.log(address, 'address')
  const suggestView = new ymaps.SuggestView(address);
  suggestView.events.add('select', event => {
    const geoObject = event.get('item').value;
    // геокодируем полученный адрес и центрируем карту на месте события
    console.log(geoObject, 'geoo')
    ymaps.geocode(geoObject).then(result => map.setCenter(result.geoObjects.get(0).geometry.getCoordinates()));
  });
}*/
</script>

<style scoped lang="scss">
.cart-wrapper {
  padding: 88px 10% 100px;
  position: relative;

  .cart-main-block {
    display: flex;
    justify-content: space-between;
    .cart-info {
      .cart-info__title {
        margin-bottom: 17px;
        display: block;
      }

      .cart-items {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .cart-item {
          display: flex;
          gap: 15px;

          .cart-img {
            width: 150px;
            height: 150px;
          }

          .cart-item__description-block {
            display: flex;
            flex-direction: column;
            align-self: center;
            gap: 7px;
            .cart-item__name {
              font-size: 17px;
              line-height: 19px;
              color: #2e2d2d;
              max-width: 250px;
            }
            .cart-item__descriptions {
              font-size: 13px;
              line-height: 16px;
              max-width: 250px;
              color: #6b6b6b;
            }
          }
        }
      }
    }

    .cart-aside {
      position: sticky;
      top: 148px;
      width: 370px;
      height: 200px;
      .name {
        margin-bottom: 17px;
        font-weight: 400;
        font-size: 21px;
      }
      .count {
        padding: 16px 0;
        font-size: 16px;
        line-height: 21px;
        border-top: 1px solid #f7f7f7;
        display: flex;
        justify-content: space-between;
      }
      .total {
        padding: 16px 0;
        font-size: 16px;
        line-height: 21px;
        border-top: 1px solid #f7f7f7;
        display: flex;
        justify-content: space-between;
      }
      .button {
        width: 100%;
        padding: 18px;
        text-align: center;
        font-size: 17px;
        line-height: 17px;
        color: #fff;
        background: #2e2d2d;
        border-radius: 5px;
        transition: all .2s ease-out;
      }
      .button:hover {
        background: 0 0;
        color: #2e2d2d;
        box-shadow: inset 0 0 0 1px #2e2d2d;
      }
    }
  }
  .form-wrapper {
    margin-top: 40px;
    .form-name {
      font-weight: 400;
      font-size: 21px;
      line-height: 26px;
      color: #2e2d2d;
      margin-bottom: 20px;
      display: block;
    }
    .form {
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 100%;
        padding: 15px 16px 14px;
        font-weight: 300;
        font-size: 16px;
        line-height: 21px;
        color: #2e2d2d;
        border: 1px solid #dedede;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 5px;
      }
      input:focus {
        border: 1px solid #b9b9b9;
        outline: none;
      }

      .type-delivery-radio {
        display: flex;
        gap: 30px;
      }
      .form-radio {
        cursor: pointer;
        display: flex;
        gap: 8px;

        input {
          width: fit-content;
          cursor: pointer;
        }
        label {
          cursor: pointer;
        }
      }
    }
    .type-delivery {
      display: block;
      margin: 10px 0;
    }
    .type-delivery-type {

    }
  }
}
</style>
